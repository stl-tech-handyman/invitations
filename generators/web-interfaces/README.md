# Web Interfaces Directory

This directory contains web-based interfaces for generating event card assets without command line knowledge.

## 📁 Files

- `generate-overlays.html` - Web interface for SVG overlay generation
- `generate-overlays.js` - JavaScript logic for overlay generation
- `background-generator.html` - Web interface for background generation

## 🎯 Purpose

Provides user-friendly web interfaces for:
- **Interactive Generation**: Real-time preview and customization
- **No Command Line Required**: Browser-based operation
- **Visual Feedback**: See results immediately
- **Easy Customization**: Adjust parameters through UI controls

## 🚀 Usage

### **Overlay Generator Interface**
1. Open `generate-overlays.html` in your web browser
2. Use the interface controls to customize overlay parameters
3. Generate individual overlays or batches
4. Download or copy generated SVG code

### **Background Generator Interface**
1. Open `background-generator.html` in your web browser
2. Select background styles and color schemes
3. Adjust generation parameters
4. Generate and download background images

## 🌐 Browser Requirements

- **Modern Browser**: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- **JavaScript Enabled**: Required for all functionality
- **Local File Access**: Some features may require local server setup

## 🔧 Local Development

For best results, serve these files through a local web server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

Then access via: `http://localhost:8000/generators/web-interfaces/`

## 📋 Interface Features

### **Overlay Generator**
- Pattern type selection
- Color palette customization
- Size and complexity controls
- Real-time preview
- Export options

### **Background Generator**
- Style selection (gradient, geometric, organic)
- Color scheme picker
- Resolution controls
- Pattern density adjustment
- Export formats

## 🔗 Related Files

- **JavaScript Logic**: `generate-overlays.js` provides the core functionality
- **Node.js Scripts**: See `../node-scripts/` for command-line alternatives
- **Python Scripts**: See `../../scripts/background-generator/` for Python alternatives

## 💡 Usage Tips

1. **Start Simple**: Begin with default settings to understand the output
2. **Experiment**: Try different parameter combinations
3. **Batch Generation**: Use for creating multiple variations
4. **Export Options**: Save generated assets in appropriate formats
5. **Integration**: Use generated assets with the main event card generator

## 🆘 Troubleshooting

### **Interface Not Loading**
- Check browser console for JavaScript errors
- Ensure all files are in the same directory
- Try a different browser

### **Generation Not Working**
- Verify JavaScript is enabled
- Check browser console for error messages
- Ensure proper file permissions

### **Export Issues**
- Check browser download settings
- Verify file format support
- Try different export methods

## 🎨 Customization

These interfaces can be customized by:
- Modifying the HTML structure
- Adjusting JavaScript parameters
- Adding new generation options
- Customizing the visual design

## 📚 Additional Resources

- **Main Application**: `../../home.html` - Complete event card generator
- **Scripts**: `../../scripts/` - Command-line generation tools
- **Documentation**: `../../docs/` - Detailed technical documentation
