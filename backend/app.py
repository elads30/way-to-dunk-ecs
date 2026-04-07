from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import tempfile
from scan_jump import analyze_video

app = Flask(__name__)
CORS(app)

@app.route('/analyze', methods=['POST'])
def analyze():
    if 'video' not in request.files:
        return jsonify({"error": "No video file provided"}), 400
        
    video_file = request.files['video']
    
    # Save the file to a temporary location
    temp_dir = tempfile.gettempdir()
    temp_path = os.path.join(temp_dir, 'upload_jump.mp4')
    video_file.save(temp_path)
    
    try:
        results = analyze_video(temp_path)
        return jsonify(results)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        if os.path.exists(temp_path):
            os.remove(temp_path)

if __name__ == '__main__':
    print("AI Backend Server running on port 5000...")
    app.run(host='127.0.0.1', port=5000)
