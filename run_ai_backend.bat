@echo off
echo =========================================
echo Way To Dunk - AI Backend Setup
echo =========================================
echo.
echo Installing requirements...
pip install flask flask-cors opencv-python mediapipe
echo.
echo Starting AI Server...
python backend\app.py
pause
