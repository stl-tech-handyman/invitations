# Generators Directory

This directory contains all the generation tools and interfaces for creating event card assets.

## 📁 Directory Structure

```
generators/
├── web-interfaces/     # Web-based generator interfaces
├── node-scripts/       # Node.js generation scripts
└── README.md          # This file
```

## 🎯 Purpose

The generators directory contains tools for creating:
- **SVG Overlays**: Decorative elements for event cards
- **Background Images**: Diverse background patterns and designs
- **Web Interfaces**: User-friendly HTML/JS interfaces for generation

## 🚀 Quick Start

### **Web Interfaces** (`web-interfaces/`)
- Open HTML files in your browser for interactive generation
- No command line knowledge required
- Real-time preview and customization

### **Node.js Scripts** (`node-scripts/`)
- Run from command line for batch generation
- Requires Node.js installation
- High-volume asset creation

## 📋 Generator Types

### 1. **Overlay Generator**
- **Web Interface**: `generate-overlays.html`
- **JavaScript**: `generate-overlays.js`
- **Node.js Script**: `generate-overlays-node.js` (in `node-scripts/`)
- **Output**: 200 unique SVG overlays

### 2. **Background Generator**
- **Web Interface**: `background-generator.html`
- **Python Script**: `generate_backgrounds.py` (in `scripts/background-generator/`)
- **Output**: 160 diverse background images

## 🔗 Related Scripts

For command-line generation, see the organized scripts in:
- `scripts/overlay-generator/` - Overlay generation scripts
- `scripts/background-generator/` - Background generation scripts
- `scripts/decoration-generator/` - Decoration generation scripts

## 📚 Documentation

Detailed documentation for each generator is available in:
- `docs/OVERLAY-GENERATOR-README.md`
- `docs/BACKGROUND_GENERATOR_README.md`
- Individual script READMEs in the `scripts/` directory

## 💡 Usage Tips

1. **Start with Web Interfaces** for exploration and small batches
2. **Use Command Line Scripts** for production generation
3. **Check Documentation** for advanced features and customization
4. **Organize Output** using the utility scripts in `scripts/utilities/`
