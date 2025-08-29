#!/bin/bash

echo "Installing required packages..."
pip install -r requirements.txt

echo ""
echo "Starting background generation..."
python3 generate_backgrounds.py

echo ""
echo "Background generation complete!"
