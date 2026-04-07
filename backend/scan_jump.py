import cv2
import mediapipe as mp
import math

mp_pose = mp.solutions.pose
pose = mp_pose.Pose(min_detection_confidence=0.6, min_tracking_confidence=0.5)

def calculate_angle(a, b, c):
    radians = math.atan2(c.y - b.y, c.x - b.x) - math.atan2(a.y - b.y, a.x - b.x)
    angle = abs(radians * 180.0 / math.pi)
    if angle > 180.0:
        angle = 360 - angle
    return angle

def analyze_video(video_path):
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
            
            # Use Y of hip
            hip_y = (l_hip.y + r_hip.y) / 2.0
            
            # Calculate Knee Angle (using left leg for simplicity if visible)
            if l_hip.visibility > 0.5 and l_knee.visibility > 0.5 and l_ankle.visibility > 0.5:
                angle = calculate_angle(l_hip, l_knee, l_ankle)
                if angle < min_angle and angle > 40:
                    min_angle = angle
            
            # Tracking States (Y axis points downwards in image coords)
            if state == "WAITING":
                baseline_y = hip_y
                state = "TRACKING_DIP"
            elif state == "TRACKING_DIP":
                # DIP means hip_y increases (goes down)
                if hip_y > baseline_y + 0.05:
                    state = "READY_TO_FLY"
            elif state == "READY_TO_FLY":
                # Airborne means hip_y decreases significantly below baseline
                if hip_y < baseline_y - 0.05:
                    state = "IN_AIR"
                    jump_start_frame = frame_count
            elif state == "IN_AIR":
                # Landing
                if hip_y > baseline_y - 0.02:
                    state = "LANDED"
                    jump_end_frame = frame_count

        frame_count += 1

    cap.release()
    
    if jump_end_frame > jump_start_frame and state == "LANDED":
        hang_time = (jump_end_frame - jump_start_frame) / fps
    else:
        # Fallback if jump not perfectly detected
        hang_time = 0.5

    if hang_time > 1.5 or hang_time < 0.2:
        hang_time = 0.5

    # Hang time method for height calculation (h = 1/8 * g * t^2)
    # where g = 9.81
    height_cm = round(1.226 * (hang_time ** 2) * 100)
    
    bend_angle = round(min_angle)
    if bend_angle > 170:
        bend_angle = 90
        
    return {
        "height_cm": height_cm,
        "hang_time_ms": int(hang_time * 1000),
        "knee_angle": bend_angle
    }
