# Background Generator Scripts

This directory contains scripts for generating diverse background images for event cards using Python and PIL/Pillow.

## 📁 Files

- `generate_backgrounds.py` - Main Python script for background generation
- `generate_backgrounds.bat` - Windows batch script wrapper
- `generate_backgrounds.sh` - Unix/Linux shell script wrapper

## 🎯 Purpose

Generates 160 unique background images with various styles including:
- Gradient backgrounds (linear and radial)
- Geometric patterns
- Organic shapes
- Abstract designs
- Color-coordinated themes

## 🚀 Usage

### Cross-Platform (Python)
```bash
python generate_backgrounds.py
```

### Windows Users
```cmd
generate_backgrounds.bat
```

### macOS/Linux Users
```bash
./generate_backgrounds.sh
```

## 📋 What Happens

1. **Dependency Check**: Installs required Python packages from `requirements.txt`
2. **Directory Creation**: Creates `backgrounds/` directory if it doesn't exist
3. **Generation Process**: Creates 160 unique background images
4. **File Naming**: Images are saved with descriptive names
5. **Completion**: Success message when all backgrounds are generated

## 🔧 Prerequisites

- **Python 3.7+** with pip
- **PIL/Pillow** image processing library
- **requirements.txt** file in the project root

## 📦 Dependencies

The script automatically installs required packages:
```bash
pip install -r requirements.txt
```

Required packages:
- `Pillow` - Image processing and generation
- `numpy` - Numerical operations (if needed)

## 📁 Output

Generated backgrounds are saved to the `backgrounds/` directory in the project root. Each image is:
- **Resolution**: Configurable (default: 800x600 pixels)
- **Format**: PNG with transparency support
- **Style**: Randomly selected from available pattern types
- **Colors**: Coordinated color palettes

## 🎨 Background Types

### 1. **Gradient Backgrounds**
- Linear gradients with smooth color transitions
- Radial gradients from center outward
- Multi-color gradient support

### 2. **Geometric Patterns**
- Random geometric shapes (circles, rectangles, polygons)
- Layered design elements
- Coordinated color schemes

### 3. **Organic Shapes**
- Flowing, natural-looking curves
- Organic form generation
- Artistic composition

### 4. **Abstract Designs**
- Non-representational patterns
- Modern aesthetic appeal
- Event-appropriate styling

## ⚠️ Important Notes

- Run this script from the **project root directory**
- Ensure sufficient disk space for 160 image files
- Generation time varies based on system performance
- Images are optimized for event card use

## 🆘 Troubleshooting

### "PIL/Pillow not found"
```bash
pip install Pillow
```

### "requirements.txt not found"
- Ensure you're in the project root directory
- Or manually install: `pip install Pillow`

### Permission Errors
- Use `pip install --user` for user-level installation
- Or run with appropriate permissions

### Memory Issues
- Close other applications to free up RAM
- Reduce image resolution in the script if needed

## 🔗 Related Files

- `requirements.txt` - Python dependencies (in project root)
- `BACKGROUND_GENERATOR_README.md` - Detailed technical documentation
- `backgrounds/` - Output directory for generated images
