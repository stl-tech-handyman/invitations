# Decoration Generator Script

This directory contains the Python script for generating SVG decoration elements for event cards.

## 📁 Files

- `generate_decorations.py` - Main Python script for decoration generation

## 🎯 Purpose

Generates 200 distinct SVG decoration elements with various patterns and themes that can be used as decorative overlays on event cards.

## 🚀 Usage

### Cross-Platform (Python)
```bash
python generate_decorations.py
```

### With Python 3 explicitly
```bash
python3 generate_decorations.py
```

## 📋 What Happens

1. **Pattern Generation**: Creates 200 unique SVG decoration patterns
2. **Theme Variation**: Applies different color palettes (warm, cool, neutral, pastel)
3. **File Creation**: Saves each decoration as a separate SVG file
4. **Organization**: Groups decorations by pattern type and theme

## 🔧 Prerequisites

- **Python 3.7+** with standard libraries
- **No external dependencies required** - uses only built-in Python modules

## 🎨 Decoration Types

### 1. **Circle Patterns**
- Multiple circles with varying sizes
- Random positioning and opacity
- Coordinated color schemes

### 2. **Geometric Patterns**
- Rectangles, polygons, and ellipses
- Random rotations and transformations
- Layered design elements

### 3. **Organic Patterns**
- Flowing, curved lines
- Natural, artistic compositions
- Smooth, organic shapes

### 4. **Star Patterns**
- Multi-pointed star designs
- Varied complexity levels
- Dynamic visual appeal

## 🌈 Color Themes

### **Warm Theme**
- Reds, oranges, yellows
- Energetic and inviting colors
- Perfect for celebrations and events

### **Cool Theme**
- Blues, greens, purples
- Calm and sophisticated
- Ideal for formal occasions

### **Neutral Theme**
- Grays, browns, muted tones
- Professional and elegant
- Versatile for any event type

### **Pastel Theme**
- Soft, light colors
- Gentle and romantic
- Perfect for weddings and parties

## 📁 Output

Generated decorations are saved as SVG files with:
- **Format**: SVG (Scalable Vector Graphics)
- **Dimensions**: 100x100 viewBox
- **Features**: Transparent backgrounds, scalable design
- **Naming**: Descriptive names based on pattern type and theme

## ⚠️ Important Notes

- Run this script from the **project root directory**
- SVG files are lightweight and scalable
- Each decoration is unique and randomly generated
- Files can be used in web applications or print materials

## 🆘 Troubleshooting

### "Python not found"
- Install Python from [python.org](https://python.org/)
- Ensure Python is added to your system PATH

### "Permission denied"
- Check file permissions in the output directory
- Ensure you have write access to the target location

### "No output files"
- Verify the script completed successfully
- Check the console for any error messages
- Ensure sufficient disk space

## 🔗 Related Files

- `elements/` - Directory where decorations may be saved
- `generate-overlays-node.js` - Related overlay generation
- `generate_backgrounds.py` - Background generation script

## 💡 Usage Tips

- **Web Use**: SVG files are perfect for web applications
- **Print Use**: Scalable for any print size without quality loss
- **Customization**: Edit SVG files in vector graphics software
- **Integration**: Use with the main event card generator
