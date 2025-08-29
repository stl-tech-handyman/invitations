# Scripts Directory

This directory contains all the automation scripts for the Event Card Generator project, organized by functionality.

## 📁 Directory Structure

```
scripts/
├── overlay-generator/     # SVG overlay generation scripts
├── background-generator/  # Background image generation scripts
├── decoration-generator/  # Decoration element generation scripts
├── git-setup/            # Git repository setup scripts
├── utilities/            # Utility and maintenance scripts
└── README.md            # This file
```

## 🚀 Quick Start

### For Windows Users
- Use `.bat` files for basic operations
- Use `.ps1` files for more advanced PowerShell operations

### For macOS/Linux Users
- Use `.sh` files for shell operations
- Use `.py` files for Python scripts

### For All Platforms
- Use `.py` files for cross-platform Python operations

## 📋 Script Categories

### 1. **Overlay Generator** (`overlay-generator/`)
Generates unique SVG overlays for event cards using Node.js.

### 2. **Background Generator** (`background-generator/`)
Creates diverse background images using Python and PIL/Pillow.

### 3. **Decoration Generator** (`decoration-generator/`)
Generates SVG decoration elements with various patterns and themes.

### 4. **Git Setup** (`git-setup/`)
Automates the setup of Git repositories and remote connections.

### 5. **Utilities** (`utilities/`)
Maintenance and utility scripts for file management and organization.

## 🔧 Prerequisites

- **Python 3.7+** with pip
- **Node.js** (for overlay generation)
- **Git** (for repository management)
- **PowerShell** (Windows users, for .ps1 files)

## 📦 Dependencies

Install Python dependencies:
```bash
pip install -r requirements.txt
```

## 🎯 Common Use Cases

1. **Generate Event Card Assets**: Use scripts in `overlay-generator/` and `background-generator/`
2. **Setup Development Environment**: Use scripts in `git-setup/`
3. **Maintain File Organization**: Use scripts in `utilities/`
4. **Create Decorative Elements**: Use scripts in `decoration-generator/`

## ⚠️ Important Notes

- Always run scripts from the project root directory
- Some scripts require specific file paths and directory structures
- PowerShell scripts may require execution policy changes on Windows
- Python scripts require the `requirements.txt` dependencies

## 🆘 Troubleshooting

- **Permission Denied**: Check file permissions and execution policies
- **Missing Dependencies**: Run `pip install -r requirements.txt`
- **Path Issues**: Ensure scripts are run from the project root
- **Git Issues**: Verify Git is installed and configured

## 📚 Additional Documentation

Each subdirectory contains its own README with specific usage instructions and examples.
