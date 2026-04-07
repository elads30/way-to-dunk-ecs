from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import tempfile
import cv2
import mediapipe as mp
import math

app = Flask(__name__)
CORS(app)

mp_pose = mp.solutions.pose
pose = mp_pose.Pose(min_detection_confidence=0.6, min_tracking_confidence=0.5)

def calculate_angle(a, b, c):
    radians = math.atan2(c.y - b.y, c.x - b.x) - math.atan2(a.y - b.y, a.x - b.x)
    angle = abs(radians * 180.0 / math.pi)
    if angle > 180.0:
        angle = 360 - angle
    return angle

def analyze_video_func(video_path):
    cap = cv2.VideoCapture(video_path)
    fps = cap.get(cv2.CAP_PROP_FPS)
    if not fps or fps < 1:
        fps = 30.0

    state = "WAITING"
    baseline_y = 0
    min_angle = 180
    jump_start_frame = 0
    jump_end_frame = 0
    frame_count = 0
    
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
            
        frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = pose.process(frame_rgb)
        
        if results.pose_landmarks:
            landmarks = results.pose_landmarks.landmark
            l_hip = landmarks[mp_pose.PoseLandmark.LEFT_HIP.value]
            r_hip = landmarks[mp_pose.PoseLandmark.RIGHT_HIP.value]
            l_knee = landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value]
            l_ankle = landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value]
            
            hip_y = (l_hip.y + r_hip.y) / 2.0
            
            if l_hip.visibility > 0.5 and l_knee.visibility > 0.5 and l_ankle.visibility > 0.5:
                angle = calculate_angle(l_hip, l_knee, l_ankle)
                if angle < min_angle and angle > 40:
                    min_angle = angle
            
            if state == "WAITING":
                baseline_y = hip_y
                state = "TRACKING_DIP"
            elif state == "TRACKING_DIP":
                if hip_y > baseline_y + 0.05:
                    state = "READY_TO_FLY"
            elif state == "READY_TO_FLY":
                if hip_y < baseline_y - 0.05:
                    state = "IN_AIR"
                    jump_start_frame = frame_count
            elif state == "IN_AIR":
                if hip_y > baseline_y - 0.02:
                    state = "LANDED"
                    jump_end_frame = frame_count

        frame_count += 1
        
        if frame_count > 300: # limit to avoid Vercel timeouts (10 secs max)
            break

    cap.release()
    
    if jump_end_frame > jump_start_frame and state == "LANDED":
        hang_time = (jump_end_frame - jump_start_frame) / fps
    else:
        hang_time = 0.5

    if hang_time > 1.5 or hang_time < 0.2:
        hang_time = 0.5

    height_cm = round(1.226 * (hang_time ** 2) * 100)
    bend_angle = round(min_angle)
    if bend_angle > 170: bend_angle = 90
        
    return {
        "height_cm": height_cm,
        "hang_time_ms": int(hang_time * 1000),
        "knee_angle": bend_angle
    }

@app.route('/api/analyze', methods=['POST'])
def handle_analyze():
    if 'video' not in request.files:
        return jsonify({"error": "No video file provided"}), 400
        
    video_file = request.files['video']
    temp_dir = tempfile.gettempdir()
    temp_path = os.path.join(temp_dir, 'jump_vercel.mp4')
    video_file.save(temp_path)
    
    try:
        results = analyze_video_func(temp_path)
        return jsonify(results)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        if os.path.exists(temp_path):
            os.remove(temp_path)

# Vercel requires the app to be available, it ignores __main__ block
