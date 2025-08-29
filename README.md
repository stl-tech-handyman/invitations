<<<<<<< HEAD
# 🎉 Invitation Generator 2.0

A comprehensive, feature-rich invitation card generator with real-time preview, multiple themes, textures, and export capabilities.

## ✨ Features

### 🎨 **Themes & Styling**
- **5 Built-in Themes**: Pool Party, Birthday, Baby Shower, Graduation, Holiday
- **Custom Colors**: Primary and secondary accent color pickers
- **16 Google Fonts**: Professional typography options for titles, names, and body text
- **3 Layout Styles**: Centered, Banner Top, Split Stripe

### 🖼️ **Background System**
- **Multiple Modes**: Theme gradient, texture, image, or combinations
- **10 Texture Patterns**: Stripes, dots, grid, crosshatch, chevron, checker, sprinkles, pluses, waves, noise
- **Stock Images**: Tropical pool, party confetti, pastel clouds
- **Custom Image Upload**: Drag & drop or file selection
- **Advanced Controls**: Opacity, scale, blur, brightness, vignette

### 🎭 **Interactive Elements**
- **Animated Sprites**: Theme-specific decorative elements with gentle/lively animations
- **Parallax Effects**: Mouse-responsive background movement
- **3 Animation Effects**: None, Fade Up, Pop entrance animations
- **Real-time Updates**: Instant preview of all changes

### 📝 **Content Management**
- **Full Text Customization**: Title, subtitle, names, date, time, location, RSVP
- **Smart Controls**: Swap title/names, randomize sprites, replay animations
- **Export Options**: Save as PDF via browser print

## 🚀 Getting Started

### **Quick Start**
1. **Clone/Download** the project files
2. **Start the server**: `python -m http.server 8000`
3. **Open in browser**: `http://localhost:8000`
4. **Start creating**: Use the left panel to customize your invitation

### **Asset Management**
To rename and organize event assets on load, run the PowerShell script:
```powershell
# From project root directory
.\scripts\utilities\rename-event-assets.ps1
```

This script can be configured to run automatically when the application starts. For more details, see `scripts/utilities/README.md`.

### **Asset Generation**
Use the organized generation tools to create new assets:

- **🎨 Overlays**: `generators/web-interfaces/generate-overlays.html` or `scripts/overlay-generator/`
- **🖼️ Backgrounds**: `generators/web-interfaces/background-generator.html` or `scripts/background-generator/`
- **✨ Decorations**: `scripts/decoration-generator/generate_decorations.py`

### **Using Backgrounds and Elements**
The application now includes dropdown selectors for custom backgrounds and decorative elements:

#### **Backgrounds Folder (`/backgrounds`)**
- **i-1.jpg**: Tropical Pool
- **i-2.jpg**: Party Confetti  
- **i-3.webp**: Pastel Clouds
- **i-4.jpeg**: Abstract Art
- **i-5.jpg**: Nature Scene
- **i-6.png**: Modern Design
- **i-7.png**: Elegant Pattern
- **i-8.png**: Vibrant Colors

#### **Elements Folder (`/elements`)**
- **i-1.webp**: Decorative Element
- **i-2.png**: Decorative Element
- **i-3.png**: Decorative Element
- **i-4.png**: Decorative Element

#### **Scene Generator**
Click the **🎭 Scene Generator** button to automatically create random combinations of:
- Themes, backgrounds, textures, and sprites
- Custom backgrounds and elements from the folders
- Random values for all sliders and controls
- Random accent colors and fonts
- Layout and animation effects

This creates endless unique invitation designs with a single click!

### **File Structure**
```
event-card-generator/
├── home.html          # Main application
├── tests.js           # Comprehensive test suite
├── test-runner.html   # Standalone test runner
├── scripts/           # Organized automation scripts
│   ├── overlay-generator/     # SVG overlay generation
│   ├── background-generator/  # Background image generation
│   ├── decoration-generator/  # Decoration element generation
│   ├── git-setup/            # Git repository setup
│   └── utilities/            # File management utilities
├── generators/        # Generation tools and interfaces
│   ├── web-interfaces/       # Web-based generator interfaces
│   └── node-scripts/         # Node.js generation scripts
├── docs/             # Technical documentation
├── config/           # Configuration and dependencies
└── README.md         # This documentation
```

### **Project Organization**
All project files are now organized into logical directories:

#### **📜 Scripts** (`scripts/`)
- **🎨 Overlay Generator**: Generate 200 unique SVG overlays
- **🖼️ Background Generator**: Create 160 diverse background images
- **✨ Decoration Generator**: Generate 200 SVG decoration patterns
- **🔧 Git Setup**: Automate repository initialization and setup
- **🛠️ Utilities**: File renaming and maintenance tools

#### **🎨 Generators** (`generators/`)
- **🌐 Web Interfaces**: Browser-based generation tools
- **⚡ Node.js Scripts**: High-performance command-line generation

#### **📚 Documentation** (`docs/`)
- **Technical Guides**: Detailed implementation documentation
- **API References**: Complete parameter and usage information

#### **⚙️ Configuration** (`config/`)
- **Dependencies**: Python package requirements
- **System Files**: Configuration and error logs

Each directory has its own README with detailed usage instructions. See individual READMEs for specific information.

## 🧪 Testing Framework

### **Built-in Testing**
The invitation generator includes a comprehensive testing framework that validates every single functionality:

#### **📋 Unit Tests**
- **Text Functions**: Input validation, trimming, content updates
- **Theme System**: Theme structure, sprite counts, color palettes
- **Texture System**: 10 texture patterns, scale handling, CSS generation
- **Image System**: Stock images, format validation, upload handling
- **Sprite System**: RNG functions, positioning, animation calculations
- **Layout System**: Layout options, CSS class generation
- **Animation System**: Effect options, CSS class validation
- **Font System**: Google Fonts integration, URL generation

#### **🔗 Integration Tests**
- **Theme-Sprite Integration**: Sprite count consistency, palette sufficiency
- **Background Mode Integration**: Mode logic validation, visibility controls
- **Font-Layout Integration**: CSS variable application, cross-component testing
- **Animation-Parallax Integration**: Duration calculations, state management

#### **🌐 End-to-End Tests**
- **Complete Workflow**: Full invitation creation process
- **User Interaction Flow**: All input types and responses
- **Data Persistence**: Form data retention and validation
- **Export Functionality**: Print/PDF generation testing

#### **⚡ Performance Tests**
- **Rendering Performance**: Sprite generation speed (<100ms target)
- **Memory Usage**: Object creation efficiency, cleanup validation
- **Responsiveness**: Event handling performance, UI responsiveness

### **Running Tests**

#### **Option 1: Integrated Testing (Recommended)**
1. Open `home.html` in your browser
2. Click the **🧪 Run Tests** button (green button in the actions panel)
3. View results in the browser console (F12 → Console)

#### **Option 2: Standalone Test Runner**
1. Open `test-runner.html` in your browser
2. Choose test category or run all tests
3. View detailed results with progress tracking

#### **Option 3: Console Testing**
```javascript
// In browser console
const testSuite = new InvitationGeneratorTests();
testSuite.runAllTests();           // Run all tests
testSuite.runUnitTests();          // Unit tests only
testSuite.runIntegrationTests();   // Integration tests only
testSuite.runEndToEndTests();      // E2E tests only
testSuite.runPerformanceTests();   // Performance tests only
```

### **Test Results**
Tests provide detailed feedback including:
- ✅ **Pass/Fail Status** for each test
- 📊 **Success Rate** percentage
- 🔍 **Detailed Results** with specific failure reasons
- ⚡ **Performance Metrics** for optimization
- 📝 **Comprehensive Coverage** of all functionality

## 🛠️ Development

### **Architecture**
- **Vanilla JavaScript**: No external dependencies
- **Modular Design**: Separated concerns for easy maintenance
- **Event-Driven**: Real-time updates via event listeners
- **CSS Variables**: Dynamic theming and customization

### **Key Functions**
```javascript
// Core functionality
setTheme(themeKey)           // Apply theme with sprites and colors
applyBackground()            // Handle background modes and textures
drawSprites(theme)          // Generate animated decorative elements
updateText()                // Real-time text content updates
setLayout()                 // Apply layout styles
setEffect()                 // Handle animation effects
setupParallax()            // Mouse-responsive background movement
```

### **Adding New Features**
1. **Extend the data structures** (THEMES, TEXTURES, etc.)
2. **Add corresponding test cases** in the test suite
3. **Update the UI controls** in the HTML
4. **Wire event listeners** in the main script
5. **Run tests** to ensure everything works

## 📱 Browser Compatibility
- **Modern Browsers**: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- **Mobile Support**: Responsive design for tablets and phones
- **Print Support**: Optimized CSS for PDF generation

## 🔧 Troubleshooting

### **Common Issues**
1. **Textures not showing**: Check browser console for errors, ensure background mode is set correctly
2. **Fonts not loading**: Verify internet connection for Google Fonts
3. **Images not uploading**: Check file format (JPG, PNG, GIF supported)
4. **Performance issues**: Reduce sprite density or disable animations

### **Debug Mode**
The application includes comprehensive logging:
- Open browser console (F12)
- All user interactions are logged
- Function calls and state changes are tracked
- Error messages provide detailed information

## 📄 License
This project is open source and available under the MIT License.

## 🤝 Contributing
1. **Fork** the repository
2. **Create** a feature branch
3. **Add tests** for new functionality
4. **Ensure all tests pass**
5. **Submit** a pull request

## 📊 Test Coverage
The testing framework covers:
- ✅ **100% of core functions**
- ✅ **All user interface elements**
- ✅ **Every input type and control**
- ✅ **Theme and styling systems**
- ✅ **Background and texture modes**
- ✅ **Animation and interaction features**
- ✅ **Export and print functionality**

---

**🎯 Goal**: Ensure every single functionality works perfectly through comprehensive testing and validation.

**🚀 Status**: Production-ready with full test coverage and debugging capabilities.
=======
# invitations
>>>>>>> origin/main
