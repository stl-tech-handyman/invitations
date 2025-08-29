# Event Card Generator - Clean Architecture

This document describes the refactored architecture of the Event Card Generator, which has been restructured to follow proper separation of concerns and maintainability best practices.

## Project Structure

```
event-card-generator/
├── index.html              # Main HTML file (clean, minimal)
├── css/
│   └── styles.css         # All CSS styles and responsive design
├── js/
│   ├── main.js            # Core functionality and data
│   └── event-handlers.js  # Event listeners and UI interactions
├── elements/               # SVG assets and backgrounds
├── backgrounds/            # Image backgrounds
├── invites/                # Saved invitation exports
└── ARCHITECTURE.md         # This file
```

## Architecture Overview

### 1. HTML (`index.html`)
- **Clean Structure**: Minimal HTML with semantic markup
- **No Inline Styles**: All styling moved to external CSS
- **No Inline Scripts**: All JavaScript moved to external files
- **Proper Organization**: Clear left sidebar, center stage, right sidebar layout
- **Accessibility**: Proper ARIA labels and semantic elements

### 2. CSS (`css/styles.css`)
- **CSS Custom Properties**: Centralized design tokens (colors, fonts, shadows)
- **Modular Organization**: Logical grouping of styles by component
- **Responsive Design**: Mobile-first approach with breakpoints
- **Component-Based**: Each UI section has its own CSS rules
- **Animations**: CSS keyframes and transitions for smooth interactions

### 3. JavaScript (`js/main.js`)
- **Core Functions**: Main application logic and data structures
- **Constants**: Themes, textures, backgrounds, fonts
- **State Management**: Application state and configuration
- **Utility Functions**: Helper functions for common operations
- **Initialization**: App startup and configuration

### 4. JavaScript (`js/event-handlers.js`)
- **Event Listeners**: All DOM event handling
- **UI Interactions**: Control initialization and updates
- **User Input**: Form handling and real-time updates
- **Drag & Drop**: File upload functionality
- **Control Management**: Dynamic UI state management

## Key Benefits of Refactoring

### 1. **Maintainability**
- Clear separation of concerns
- Easy to locate and modify specific functionality
- Reduced code duplication
- Consistent coding patterns

### 2. **Performance**
- External CSS and JS files can be cached
- Smaller HTML file size
- Better browser optimization
- Cleaner DOM structure

### 3. **Development Experience**
- Easier debugging with separate files
- Better IDE support and syntax highlighting
- Clearer error messages
- Easier to implement new features

### 4. **Team Collaboration**
- Multiple developers can work on different files
- Clear ownership of different code areas
- Easier code reviews
- Better version control history

## File Dependencies

```
index.html
├── css/styles.css
└── js/
    ├── main.js (loaded first)
    └── event-handlers.js (depends on main.js)
```

## Usage

1. **Open `index.html`** in a web browser
2. **All functionality** is automatically loaded from external files
3. **No build process** required - pure HTML/CSS/JavaScript
4. **Local development** works with any HTTP server

## Development Guidelines

### Adding New Features
1. **HTML**: Add markup to `index.html`
2. **CSS**: Add styles to `css/styles.css`
3. **JavaScript**: Add logic to appropriate JS file
4. **Event Handlers**: Add listeners to `js/event-handlers.js`

### Modifying Existing Features
1. **Locate the relevant file** based on what you're changing
2. **Make changes** in the appropriate file
3. **Test functionality** to ensure nothing breaks
4. **Update documentation** if needed

### Code Style
- **Consistent indentation** (2 spaces)
- **Clear naming conventions** for functions and variables
- **Comments** for complex logic
- **Modular functions** with single responsibilities

## Browser Compatibility

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **ES6+ Features**: Arrow functions, const/let, template literals
- **CSS Grid**: Modern layout system
- **CSS Custom Properties**: CSS variables for theming

## Future Enhancements

The clean architecture makes it easy to add:
- **Build Process**: Webpack, Vite, or similar bundlers
- **TypeScript**: Type safety and better tooling
- **Testing Framework**: Jest, Mocha, or similar
- **Component Library**: Reusable UI components
- **State Management**: Redux, Zustand, or similar
- **Module System**: ES6 modules or CommonJS

## Migration Notes

If migrating from the old `home.html`:
1. **Backup** the original file
2. **Replace** with new `index.html`
3. **Ensure** all external files are in place
4. **Test** all functionality works as expected
5. **Remove** old file after successful migration

## Support

For issues or questions about the new architecture:
1. Check this documentation
2. Review the code comments
3. Test in different browsers
4. Check browser console for errors
