# CSS Architecture & Organization

This directory contains the modular CSS structure for the Event Card Generator application. The CSS has been broken down into logical, maintainable modules that are imported through a main index file.

## 📁 File Structure

```
css/
├── README.md                 # This documentation file
├── index.css                # Main CSS file that imports all modules
├── 01-variables.css         # CSS custom properties and base styles
├── 02-layout.css           # Grid system and layout components
├── 03-typography.css       # Text styles and typography
├── 04-forms.css            # Form controls and input elements
├── 05-canvas.css           # Canvas, stage, and background layers
├── 06-animations.css       # Keyframes and animation classes
├── 07-notifications.css    # Notification and alert styles
├── 08-controls.css         # Control panel and UI control styles
├── 09-interactive.css      # Interactive elements and hover effects
├── 10-responsive.css       # Media queries and responsive design
└── styles.css              # Legacy monolithic CSS (deprecated)
```

## 🎯 Module Overview

### 1. Variables (`01-variables.css`)
- **Purpose**: CSS custom properties and fundamental styles
- **Contains**: 
  - Color palette variables (`--accent`, `--accent-2`, `--bg`, `--ink`, `--card`)
  - Typography variables (`--title-font`, `--names-font`, `--body-font`)
  - Spacing and sizing variables (`--radius`, `--shadow`)
  - Base reset styles (`*`, `html`, `body`)
- **Dependencies**: None (this is the foundation)
- **Usage**: Import first, as other modules depend on these variables

### 2. Layout (`02-layout.css`)
- **Purpose**: Grid system and layout components
- **Contains**:
  - Main app grid layout (`.app`)
  - Panel styles (`.panel`, `.left-panel`, `.right-panel`)
  - Stage wrapper (`.stage-wrap`)
  - Utility classes (`.row`, `.actions`, `.group`)
- **Dependencies**: `01-variables.css`
- **Usage**: Defines the overall structure and layout

### 3. Typography (`03-typography.css`)
- **Purpose**: Text styles and typography rules
- **Contains**:
  - Form labels and text styling
  - Content typography (`.title`, `.names`, `.info`, `.card`)
  - Accent color applications
  - Text shadows and effects
- **Dependencies**: `01-variables.css`, `02-layout.css`
- **Usage**: Handles all text-related styling

### 4. Forms (`04-forms.css`)
- **Purpose**: Form controls and input elements
- **Contains**:
  - Input field styles (`input`, `select`, `textarea`)
  - Button styles and variants (`.secondary`, `.ghost`)
  - Focus states and transitions
- **Dependencies**: `01-variables.css`
- **Usage**: Styles all form elements consistently

### 5. Canvas (`05-canvas.css`)
- **Purpose**: Canvas area and background layer management
- **Contains**:
  - Stage and canvas styles (`.stage`, `.stage-wrap`)
  - Background layer positioning (`.photo`, `.bg`, `.texture`, `.sprites`)
  - Edge effects and overlays
  - Layout variations (`.style-centered`, `.style-banner`, `.style-split`)
- **Dependencies**: `01-variables.css`, `02-layout.css`
- **Usage**: Manages the invitation preview area

### 6. Animations (`06-animations.css`)
- **Purpose**: Keyframes and animation classes
- **Contains**:
  - Animation keyframes (`@keyframes floaty`, `@keyframes fadeUp`, etc.)
  - Animation classes (`.anim-fade`, `.anim-pop`)
  - Hover effects and transitions
  - Interactive element animations
- **Dependencies**: `01-variables.css`
- **Usage**: Provides motion and interactivity

### 7. Notifications (`07-notifications.css`)
- **Purpose**: Notification and alert system styles
- **Contains**:
  - Readability notification panel
  - Issue severity styling (`.critical`, `.moderate`)
  - Notification animations and transitions
  - Action button styles
- **Dependencies**: `01-variables.css`
- **Usage**: Handles user feedback and alerts

### 8. Controls (`08-controls.css`)
- **Purpose**: Control panel and UI control styles
- **Contains**:
  - Edge controls (`.edge-controls`)
  - Overlay controls (`.overlay-controls`)
  - Shadow controls (`.shadow-controls`)
  - Text manipulation controls
  - Elements library controls
- **Dependencies**: `01-variables.css`, `04-forms.css`
- **Usage**: Styles all control interfaces

### 9. Interactive (`09-interactive.css`)
- **Purpose**: Interactive elements and hover effects
- **Contains**:
  - Drag and drop zones (`.drop-zone`)
  - Collapsible groups (`.group-header`, `.group-content`)
  - Section type styling with color coding
  - Hover states and transitions
- **Dependencies**: `01-variables.css`, `02-layout.css`
- **Usage**: Enhances user interaction experience

### 10. Responsive (`10-responsive.css`)
- **Purpose**: Media queries and responsive design
- **Contains**:
  - Breakpoint-specific layouts
  - Mobile-first responsive grid adjustments
  - Print/PDF media queries
- **Dependencies**: `01-variables.css`, `02-layout.css`
- **Usage**: Ensures cross-device compatibility

## 🔄 Import System

The main `index.css` file uses CSS `@import` statements to load all modules in the correct dependency order:

```css
/* Main CSS Index - Imports all modular CSS files */

/* 1. Variables and Base Styles */
@import url('./01-variables.css');

/* 2. Layout and Grid System */
@import url('./02-layout.css');

/* 3. Typography and Text Styles */
@import url('./03-typography.css');

/* ... and so on */
```

## 📱 Usage in HTML

To use the modular CSS system, link only the main index file:

```html
<link rel="stylesheet" href="css/index.css">
```

**Do NOT** link individual CSS files directly, as this will break the dependency chain and cause styling issues.

## 🎨 Design System

### Color Palette
- **Primary Accent**: `#2ec5ff` (blue)
- **Secondary Accent**: `#ff6b6b` (coral)
- **Background**: `#f7f7fb` (light gray-blue)
- **Text**: `#1b1b1f` (dark gray)
- **Cards**: `#ffffff` (white)

### Typography
- **Title Font**: Playfair Display (serif)
- **Names Font**: Playfair Display (serif)
- **Body Font**: Quicksand (sans-serif)

### Spacing
- **Base Radius**: 22px
- **Base Shadow**: `0 10px 30px rgba(0,0,0,.08)`
- **Grid Gap**: 22px
- **Panel Padding**: 18px 18px 24px

## 🚀 Development Guidelines

### Adding New Styles
1. **Identify the appropriate module** for your new styles
2. **Add styles at the end** of the relevant module file
3. **Use existing variables** when possible (colors, spacing, etc.)
4. **Follow the naming convention** established in the module

### Creating New Modules
1. **Create a new numbered file** (e.g., `11-new-feature.css`)
2. **Add the import** to `index.css` in the correct dependency order
3. **Document the module** in this README
4. **Ensure dependencies** are properly managed

### Modifying Existing Styles
1. **Locate the style** in the appropriate module
2. **Make changes** while maintaining consistency
3. **Test across breakpoints** to ensure responsiveness
4. **Update documentation** if the change affects the design system

## 🔧 Maintenance

### File Naming Convention
- Use numbered prefixes for load order: `01-`, `02-`, etc.
- Use descriptive names: `variables`, `layout`, `typography`
- Use lowercase with hyphens: `01-variables.css`

### Code Organization
- Group related styles together
- Use consistent commenting
- Maintain alphabetical order within logical groups
- Keep related selectors together

### Performance Considerations
- CSS imports are processed sequentially
- Keep modules focused and lightweight
- Avoid duplicate styles across modules
- Use efficient selectors and avoid deep nesting

## 🐛 Troubleshooting

### Common Issues
1. **Styles not loading**: Check that `index.css` is linked, not individual files
2. **Missing variables**: Ensure `01-variables.css` loads first
3. **Layout broken**: Verify `02-layout.css` is loaded
4. **Responsive issues**: Check `10-responsive.css` is included

### Debugging
- Use browser dev tools to inspect CSS loading order
- Check for CSS import errors in the console
- Verify file paths are correct
- Ensure no syntax errors in individual modules

## 📚 Legacy Support

The original `styles.css` file is kept for reference but should not be used in new development. All new styles should be added to the appropriate modular files.

## 🤝 Contributing

When contributing to the CSS:
1. **Follow the modular structure**
2. **Maintain consistency** with existing patterns
3. **Test across devices** and browsers
4. **Update this documentation** for significant changes
5. **Use semantic class names** that describe purpose, not appearance

---

*Last updated: [Current Date]*
*Maintained by: Event Card Generator Team*
