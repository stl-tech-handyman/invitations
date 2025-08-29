@echo off
echo Installing required packages...
pip install -r requirements.txt

echo.
echo Starting background generation...
python generate_backgrounds.py

echo.
echo Press any key to exit...
pause >nul
