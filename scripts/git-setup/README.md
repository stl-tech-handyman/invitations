# Git Setup Scripts

This directory contains scripts for automating the setup of Git repositories and remote connections for the Event Card Generator project.

## 📁 Files

- `setup-git.ps1` - PowerShell script for Windows users (recommended)
- `setup-git.bat` - Batch script for Windows users

## 🎯 Purpose

Automates the complete setup of a Git repository including:
- Repository initialization
- Remote origin configuration
- Initial commit creation
- First push to remote repository

## 🚀 Usage

### Windows PowerShell (Recommended)
```powershell
.\setup-git.ps1
```

### Windows Command Prompt
```cmd
setup-git.bat
```

## 📋 What Happens

The script performs these steps automatically:

1. **Remove Existing Git**: Deletes any existing `.git` directory
2. **Initialize Repository**: Creates a new Git repository
3. **Add Remote Origin**: Sets up connection to GitHub repository
4. **Stage Files**: Adds all project files to Git
5. **Initial Commit**: Creates the first commit with all files
6. **Push to Remote**: Uploads to GitHub and sets upstream branch

## 🔧 Prerequisites

- **Git** must be installed and accessible from PATH
- **GitHub account** with access to the target repository
- **Internet connection** for pushing to remote
- **PowerShell** (for .ps1 file) or **Command Prompt** (for .bat file)

## 🌐 Remote Repository

The script is configured to connect to:
```
https://github.com/stl-tech-handyman/invitations.git
```

**⚠️ Important**: If you need to use a different repository, edit the script before running.

## ⚠️ Important Notes

- **Run from project root**: Execute this script from the main project directory
- **Backup first**: Ensure you have backups of important files
- **Existing Git**: The script will remove any existing Git configuration
- **Remote access**: Ensure you have push access to the target repository

## 🆘 Troubleshooting

### "Git is not recognized"
- Install Git from [git-scm.com](https://git-scm.com/)
- Ensure Git is added to your system PATH
- Restart your terminal after installation

### "Permission denied"
- Right-click PowerShell and "Run as Administrator"
- Or change execution policy: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

### "Remote origin already exists"
- The script will remove existing Git configuration
- This is normal and expected behavior

### "Authentication failed"
- Ensure you have access to the target GitHub repository
- Check your GitHub credentials and permissions
- Consider using SSH keys for authentication

## 🔐 Authentication

### HTTPS (Default)
- Uses your GitHub username and password/token
- Personal Access Token recommended over password

### SSH (Alternative)
To use SSH instead, edit the script and change:
```powershell
git remote add origin git@github.com:stl-tech-handyman/invitations.git
```

## 📚 Post-Setup

After running the script:

1. **Verify remote**: `git remote -v`
2. **Check status**: `git status`
3. **View commits**: `git log --oneline`
4. **Branch info**: `git branch -a`

## 🔗 Related Files

- `.git/` - Git repository directory (created by script)
- `README.md` - Main project documentation
- `.gitignore` - Git ignore rules (if present)

## 💡 Customization

To use with a different repository:

1. Edit the script file
2. Change the remote URL to your repository
3. Update any project-specific references
4. Run the modified script

## 🚨 Safety Notes

- **Backup your project** before running
- **Review the script** to understand what it does
- **Test on a copy** if unsure about the process
- **Have repository access** confirmed before running
