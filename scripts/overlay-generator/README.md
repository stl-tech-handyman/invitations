# Overlay Generator Scripts

This directory contains scripts for generating unique SVG overlays for event cards using Node.js.

## 📁 Files

- `run-generator.ps1` - PowerShell script for Windows users
- `run-generator.bat` - Batch script for Windows users

## 🎯 Purpose

Generates 200 unique SVG overlays that can be used as decorative elements on event cards. The overlays are created using the `generate-overlays-node.js` script located in the project root.

## 🚀 Usage

### Windows PowerShell (Recommended)
```powershell
.\run-generator.ps1
```

### Windows Command Prompt
```cmd
run-generator.bat
```

## 📋 What Happens

1. **Confirmation Prompt**: You'll be asked to confirm before starting generation
2. **Generation Process**: The script runs `node generate-overlays-node.js`
3. **Output**: 200 unique SVG overlay files are created
4. **Completion**: Success/error message is displayed

## 🔧 Prerequisites

- **Node.js** must be installed and accessible from PATH
- **generate-overlays-node.js** must exist in the project root directory
- **PowerShell** (for .ps1 file) or **Command Prompt** (for .bat file)

## 📁 Output

The generated overlays will be saved to the appropriate directory as specified in `generate-overlays-node.js`.

## ⚠️ Important Notes

- Run this script from the **project root directory**, not from within this scripts folder
- Ensure you have sufficient disk space for 200 SVG files
- The generation process may take several minutes depending on your system
- If you encounter errors, check that Node.js is properly installed

## 🆘 Troubleshooting

### "Node is not recognized"
- Install Node.js from [nodejs.org](https://nodejs.org/)
- Ensure Node.js is added to your system PATH

### "generate-overlays-node.js not found"
- Run the script from the project root directory
- Verify the file exists in the project root

### Permission Errors (PowerShell)
- Right-click PowerShell and "Run as Administrator"
- Or change execution policy: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

## 🔗 Related Files

- `generate-overlays-node.js` - Main generation script (in project root)
- `generate-overlays.html` - Web-based generator interface
- `generate-overlays.js` - JavaScript logic for web interface
