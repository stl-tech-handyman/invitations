# 🎨 Event Card Overlay Generator

This tool generates 200 unique SVG overlays for event cards with various styles, themes, and designs.

## 📁 What You'll Get

- **200 unique SVG overlays** in different styles and themes
- **8 different styles**: geometric, organic, abstract, minimal, rounded, sharp, bold, thin
- **10 color themes**: modern, vintage, elegant, nature, festive, cosmic, tech, warm, cool, pastel
- **Multiple pattern types**: dots, lines, grid, waves, hexagons
- **Various corner decorations**: stars, circles, squares, triangles, diamonds
- **Different border patterns**: dots, dashes, squares

## 🚀 How to Use

### Option 1: Browser-based Generator (Recommended for beginners)

1. Open `generate-overlays.html` in your web browser
2. Click "Generate 200 Overlays"
3. Wait for generation to complete
4. Click "Download All Overlays" to get individual files

### Option 2: Node.js Script (Faster, saves directly to files)

#### Prerequisites
- Node.js installed on your system
- Open command prompt/terminal in this directory

#### Run with Windows Batch File
```bash
run-generator.bat
```

#### Run with PowerShell
```powershell
.\run-generator.ps1
```

#### Run directly with Node.js
```bash
node generate-overlays-node.js
```

## 📂 Output

All overlays will be saved to the `elements/overlays/` directory with descriptive filenames:
- `overlay-001-geometric-modern.svg`
- `overlay-002-organic-vintage.svg`
- `overlay-003-abstract-elegant.svg`
- And so on...

## 🎨 Overlay Features

Each overlay includes:
- **Gradient backgrounds** with theme-appropriate colors
- **Subtle shadows** for depth
- **Corner decorations** (stars, circles, squares, etc.)
- **Border patterns** around the edges
- **Inner borders** for definition
- **Pattern overlays** for texture
- **Style-specific elements** in the center

## 🔧 Customization

You can modify the generation by editing the script files:

- **Colors**: Edit `colorPalettes` object in the script
- **Styles**: Modify the `styles` array
- **Patterns**: Add new patterns to the `patterns` object
- **Decorations**: Customize corner decorations in `cornerDecorations`

## 📱 File Specifications

- **Format**: SVG (Scalable Vector Graphics)
- **Dimensions**: 900x1350 pixels
- **Viewport**: Optimized for event card proportions
- **Compatibility**: Works with all modern design software

## 🎯 Use Cases

Perfect for:
- Event invitations
- Party announcements
- Wedding cards
- Business events
- Social gatherings
- Any printed or digital event materials

## 🆘 Troubleshooting

### Browser Issues
- Make sure JavaScript is enabled
- Try a different browser if downloads don't work

### Node.js Issues
- Ensure Node.js is installed (`node --version`)
- Check that you're in the correct directory
- Make sure you have write permissions

### File Generation Issues
- Check available disk space
- Ensure the `elements/overlays/` directory exists
- Verify file permissions

## 📞 Support

If you encounter any issues:
1. Check the console output for error messages
2. Verify all prerequisites are installed
3. Ensure you have proper file permissions

## 🎉 Enjoy Your Overlays!

Each overlay is uniquely generated and ready to use in your event card designs. The variety ensures you'll find the perfect style for any occasion!
