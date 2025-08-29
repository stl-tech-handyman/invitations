# Utility Scripts

This directory contains utility and maintenance scripts for the Event Card Generator project.

## 📁 Files

- `rename-event-assets.ps1` - PowerShell script for renaming event asset files

## 🎯 Purpose

Provides maintenance and utility functions to help organize and manage project files, particularly event assets like backgrounds and decorative elements.

## 🚀 Usage

### Windows PowerShell
```powershell
.\rename-event-assets.ps1
```

### With Custom Parameters
```powershell
.\rename-event-assets.ps1 -Dirs "C:\path\to\backgrounds", "C:\path\to\elements" -Prefix "event"
```

## 📋 What Happens

The rename script performs these operations:

1. **File Discovery**: Scans specified directories for asset files
2. **Pattern Recognition**: Identifies files that already follow naming conventions
3. **Sequential Renaming**: Renames files with sequential numbering
4. **Conflict Avoidance**: Prevents overwriting existing files
5. **Progress Display**: Shows each rename operation

## 🔧 Prerequisites

- **PowerShell** (Windows)
- **Access to target directories**
- **Write permissions** for file renaming

## 📁 Target Directories

By default, the script processes:
- `C:\Users\Alexey\Code\event-card-generator\backgrounds`
- `C:\Users\Alexey\Code\event-card-generator\elements`

## 🏷️ Naming Convention

Files are renamed using the pattern:
```
{prefix}-{number}.{extension}
```

Examples:
- `i-1.png`
- `i-2.jpg`
- `i-3.svg`

## ⚙️ Parameters

### `-Dirs` (String Array)
Specifies directories to process. Default:
```powershell
@(
    "C:\Users\Alexey\Code\event-card-generator\backgrounds",
    "C:\Users\Alexey\Code\event-card-generator\elements"
)
```

### `-Prefix` (String)
Sets the prefix for renamed files. Default: `"i"`

## ⚠️ Important Notes

- **Backup first**: Ensure you have backups before running
- **Run from project root**: Execute from the main project directory
- **File safety**: Script prevents overwriting existing files
- **Path requirements**: Uses absolute paths by default

## 🆘 Troubleshooting

### "Access denied"
- Run PowerShell as Administrator
- Check file permissions in target directories
- Ensure you have write access

### "Directory not found"
- Verify the paths in the script parameters
- Update paths to match your system
- Use absolute paths for reliability

### "Files not renamed"
- Check if files already follow naming convention
- Verify script has access to target directories
- Review console output for error messages

## 🔄 Customization

### Change Default Directories
Edit the script to modify the default `$Dirs` parameter:
```powershell
[string[]] $Dirs = @(
    "C:\Your\Custom\Path\backgrounds",
    "C:\Your\Custom\Path\elements"
)
```

### Change Default Prefix
Modify the default `$Prefix` parameter:
```powershell
[string] $Prefix = "event"
```

### Add More Directories
Extend the array with additional paths:
```powershell
[string[]] $Dirs = @(
    "C:\path\to\backgrounds",
    "C:\path\to\elements",
    "C:\path\to\additional\assets"
)
```

## 📊 Script Features

### **Smart Renaming**
- Skips files already properly named
- Finds next available number in sequence
- Prevents duplicate names

### **Progress Tracking**
- Shows each rename operation
- Displays before/after names
- Reports completion status

### **Error Handling**
- Graceful handling of missing directories
- Continues processing other directories
- Clear error messages

## 🔗 Related Files

- `backgrounds/` - Directory for background images
- `elements/` - Directory for decorative elements
- `generate_backgrounds.py` - Background generation script
- `generate_decorations.py` - Decoration generation script

## 💡 Usage Tips

### **Before Running**
1. Backup your asset files
2. Close any applications using the files
3. Verify target directory paths

### **After Running**
1. Check renamed files for accuracy
2. Update any references to old filenames
3. Test that assets still load correctly

### **Batch Processing**
- Run after generating new assets
- Use to standardize existing collections
- Maintain consistent naming across projects

## 🚨 Safety Notes

- **Always backup** before running rename scripts
- **Test on a small subset** first if unsure
- **Review the script** to understand what it does
- **Have a recovery plan** in case of issues
