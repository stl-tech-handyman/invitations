# Configuration Directory

This directory contains configuration files and system-related resources for the Event Card Generator project.

## 📁 Files

- `requirements.txt` - Python dependencies and package requirements
- `bash.exe.stackdump` - Error log file (can be safely deleted)

## 🎯 Purpose

Provides configuration and system resources for:
- **Dependencies**: Python package requirements
- **System Logs**: Error tracking and debugging
- **Configuration**: Project setup and environment

## 📦 Dependencies

### **Python Requirements** (`requirements.txt`)
Contains all Python packages needed for the project:

```txt
Pillow
numpy
```

#### **Installation**
```bash
# From project root directory
pip install -r config/requirements.txt

# Or with specific Python version
pip3 install -r config/requirements.txt
```

#### **Package Details**
- **Pillow**: Image processing and generation (PIL fork)
- **numpy**: Numerical operations and array handling

## 🗑️ System Files

### **Error Logs** (`bash.exe.stackdump`)
- **Purpose**: Contains error information from Git Bash
- **Action**: Can be safely deleted
- **Prevention**: Usually indicates a Git Bash crash or error

#### **Safe Removal**
```bash
# Delete the stackdump file
rm config/bash.exe.stackdump

# Or manually delete from file explorer
```

## 🔧 Configuration Management

### **Environment Setup**
1. **Install Python**: Version 3.7+ recommended
2. **Install Dependencies**: Use `pip install -r config/requirements.txt`
3. **Verify Installation**: Check that all packages are accessible

### **Development Environment**
- **Virtual Environment**: Consider using `venv` for isolation
- **Package Updates**: Regularly update dependencies
- **Version Control**: Track dependency changes

## 📋 Usage Guidelines

### **For Users**
- Install dependencies before running Python scripts
- Keep `requirements.txt` updated with your environment
- Report any dependency-related issues

### **For Developers**
- Add new dependencies to `requirements.txt`
- Test with minimal dependency sets
- Document version requirements clearly

### **For System Administrators**
- Monitor system resources during generation
- Clean up error logs regularly
- Maintain consistent Python environments

## 🔄 Maintenance

### **Regular Tasks**
- **Update Dependencies**: Check for newer package versions
- **Clean Logs**: Remove old error files
- **Verify Installation**: Test that all packages work correctly

### **Troubleshooting**
- **Missing Packages**: Reinstall from `requirements.txt`
- **Version Conflicts**: Check Python version compatibility
- **Permission Issues**: Verify file access and installation paths

## 🔗 Related Files

### **Script Dependencies**
- `../scripts/background-generator/generate_backgrounds.py` - Uses Pillow
- `../scripts/decoration-generator/generate_decorations.py` - Standard library only

### **Configuration References**
- `../scripts/README.md` - Script organization and dependencies
- `../generators/README.md` - Generator tool requirements

## 💡 Best Practices

### **Dependency Management**
- **Pin Versions**: Specify exact versions for production
- **Minimal Dependencies**: Only include necessary packages
- **Regular Updates**: Keep packages current and secure

### **Environment Consistency**
- **Same Versions**: Use consistent Python versions across environments
- **Virtual Environments**: Isolate project dependencies
- **Documentation**: Keep requirements clear and up-to-date

## 🆘 Common Issues

### **Package Installation Problems**
```bash
# Upgrade pip first
python -m pip install --upgrade pip

# Install with user flag if needed
pip install --user -r config/requirements.txt

# Check Python version
python --version
```

### **Permission Issues**
- **Windows**: Run as Administrator if needed
- **macOS/Linux**: Use `sudo` or check file permissions
- **Virtual Environment**: Ensure proper activation

### **Version Conflicts**
- **Check Python Version**: Ensure 3.7+ compatibility
- **Clear Cache**: Remove `pip` cache if needed
- **Fresh Install**: Create new virtual environment

## 🔮 Future Enhancements

### **Planned Improvements**
- **Environment Files**: `.env` configuration support
- **Dependency Locking**: Exact version pinning
- **Automated Setup**: One-command environment setup
- **Health Checks**: Dependency validation scripts

### **Configuration Options**
- **User Preferences**: Customizable generation parameters
- **System Settings**: Performance and resource configuration
- **Integration Config**: External service connections

## 📚 Additional Resources

### **Python Package Management**
- [pip Documentation](https://pip.pypa.io/)
- [Virtual Environments](https://docs.python.org/3/tutorial/venv.html)
- [Requirements Files](https://pip.pypa.io/en/stable/reference/requirements-file-format/)

### **Project Documentation**
- `../README.md` - Main project overview
- `../scripts/README.md` - Scripts and automation
- `../docs/README.md` - Technical documentation
