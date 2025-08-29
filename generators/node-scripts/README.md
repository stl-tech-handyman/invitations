# Node.js Scripts Directory

This directory contains Node.js scripts for high-volume generation of event card assets.

## 📁 Files

- `generate-overlays-node.js` - Node.js script for generating 200 SVG overlays

## 🎯 Purpose

Provides command-line Node.js tools for:
- **Batch Generation**: High-volume asset creation
- **Automation**: Scriptable generation workflows
- **Server Integration**: Can be run in headless environments
- **Performance**: Optimized for processing large numbers of assets

## 🚀 Usage

### **Overlay Generation**
```bash
# From project root directory
node generators/node-scripts/generate-overlays-node.js
```

### **With Custom Parameters**
```bash
# Modify the script to adjust generation parameters
# Then run as above
```

## 🔧 Prerequisites

- **Node.js**: Version 14+ recommended
- **File System Access**: Write permissions for output directories
- **Memory**: Sufficient RAM for large batch operations

## 📋 What Happens

1. **Initialization**: Sets up generation parameters and output directories
2. **Pattern Generation**: Creates unique SVG patterns using algorithms
3. **File Creation**: Saves each overlay as a separate SVG file
4. **Progress Tracking**: Shows generation progress and completion status
5. **Output Organization**: Places files in appropriate directories

## 📁 Output

Generated overlays are saved with:
- **Format**: SVG (Scalable Vector Graphics)
- **Naming**: Descriptive names based on pattern characteristics
- **Organization**: Grouped by pattern type and complexity
- **Location**: As specified in the script configuration

## ⚙️ Configuration

### **Generation Parameters**
- **Count**: Number of overlays to generate (default: 200)
- **Pattern Types**: Available pattern algorithms
- **Complexity Levels**: Detail and element density
- **Color Schemes**: Palette options and variations

### **Output Settings**
- **Directory Structure**: Where files are saved
- **File Naming**: Naming convention for generated files
- **Format Options**: SVG attributes and styling

## 🔗 Related Files

- **Web Interface**: `../web-interfaces/generate-overlays.html`
- **JavaScript Logic**: `../web-interfaces/generate-overlays.js`
- **Scripts**: `../../scripts/overlay-generator/` - Alternative script versions

## 💡 Usage Tips

1. **Batch Processing**: Run during off-peak hours for large generations
2. **Parameter Tuning**: Adjust settings for different use cases
3. **Output Management**: Use utility scripts to organize generated files
4. **Integration**: Generated assets work with the main event card generator

## 🆘 Troubleshooting

### **"Node is not recognized"**
- Install Node.js from [nodejs.org](https://nodejs.org/)
- Ensure Node.js is added to your system PATH
- Restart your terminal after installation

### **"Permission denied"**
- Check file permissions in output directories
- Ensure you have write access to target locations
- Run with appropriate user permissions

### **"Memory allocation failed"**
- Reduce batch size in script parameters
- Close other applications to free up RAM
- Consider running in smaller batches

### **"Output directory not found"**
- Verify output paths in the script
- Create directories if they don't exist
- Check absolute vs. relative path usage

## 🔄 Customization

### **Modify Generation Parameters**
Edit the script to change:
- Number of overlays generated
- Pattern complexity and variety
- Color schemes and palettes
- Output file naming conventions

### **Add New Pattern Types**
Extend the script with:
- Additional pattern algorithms
- New color schemes
- Custom SVG generation logic
- Specialized output formats

## 📊 Performance

### **Optimization Tips**
- **Batch Size**: Adjust based on available memory
- **Pattern Complexity**: Balance quality vs. generation speed
- **File I/O**: Consider output directory performance
- **Memory Management**: Monitor usage during large generations

### **Expected Performance**
- **Generation Speed**: Varies by pattern complexity
- **Memory Usage**: Scales with batch size
- **File Output**: Depends on storage performance
- **Overall Time**: Typically 1-5 minutes for 200 overlays

## 📚 Additional Resources

- **Main Application**: `../../home.html` - Complete event card generator
- **Web Interfaces**: `../web-interfaces/` - Browser-based generation
- **Scripts**: `../../scripts/` - Alternative generation methods
- **Documentation**: `../../docs/` - Technical documentation
