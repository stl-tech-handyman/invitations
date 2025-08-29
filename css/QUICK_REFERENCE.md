# CSS Quick Reference Guide

Quick lookup for finding specific styles in the modular CSS structure.

## 🔍 Style Location Finder

### Layout & Structure
- **Main app grid**: `02-layout.css` → `.app`
- **Left/Right panels**: `02-layout.css` → `.left-panel`, `.right-panel`
- **Stage wrapper**: `02-layout.css` → `.stage-wrap`
- **Grid utilities**: `02-layout.css` → `.row`, `.actions`, `.group`

### Typography & Text
- **Form labels**: `03-typography.css` → `label`
- **Title styles**: `03-typography.css` → `.title h1`, `.title h2`
- **Names styling**: `03-typography.css` → `.names h3`
- **Info cards**: `03-typography.css` → `.info`, `.card`
- **RSVP button**: `03-typography.css` → `.rsvp`

### Forms & Controls
- **Input fields**: `04-forms.css` → `input`, `select`, `textarea`
- **Buttons**: `04-forms.css` → `button`, `.secondary`, `.ghost`
- **Focus states**: `04-forms.css` → `:focus` selectors

### Canvas & Preview
- **Stage area**: `05-canvas.css` → `.stage`
- **Background layers**: `05-canvas.css` → `.photo`, `.bg`, `.texture`, `.sprites`
- **Edge effects**: `05-canvas.css` → `.edge-layer`, `.edge-effect`
- **Layout variations**: `05-canvas.css` → `.style-centered`, `.style-banner`, `.style-split`

### Animations & Effects
- **Keyframes**: `06-animations.css` → `@keyframes` definitions
- **Animation classes**: `06-animations.css` → `.anim-fade`, `.anim-pop`
- **Hover effects**: `06-animations.css` → `.sprite:hover`, `.pill:hover`

### Notifications
- **Readability panel**: `07-notifications.css` → `.readability-notification`
- **Issue styling**: `07-notifications.css` → `.issue`, `.critical`, `.moderate`
- **Notification buttons**: `07-notifications.css` → `.auto-fix`, `.highlight`

### Control Panels
- **Edge controls**: `08-controls.css` → `.edge-controls`
- **Shadow controls**: `08-controls.css` → `.shadow-controls`
- **Text controls**: `08-controls.css` → `.text-background-controls`, `.text-rotation-controls`
- **Elements controls**: `08-controls.css` → `.elements-controls`

### Interactive Elements
- **Drag & drop**: `09-interactive.css` → `.drop-zone`
- **Collapsible groups**: `09-interactive.css` → `.group-header`, `.group-content`
- **Section styling**: `09-interactive.css` → `[data-section="..."]` selectors

### Responsive Design
- **Breakpoints**: `10-responsive.css` → `@media` queries
- **Mobile layouts**: `10-responsive.css` → Mobile-specific grid adjustments
- **Print styles**: `10-responsive.css` → `@media print`

## 🎨 CSS Variables Quick Reference

### Colors
```css
--accent: #2ec5ff;        /* Primary blue */
--accent-2: #ff6b6b;      /* Secondary coral */
--bg: #f7f7fb;            /* Background */
--ink: #1b1b1f;           /* Text color */
--card: #ffffff;           /* Card background */
```

### Typography
```css
--title-font: "Playfair Display", serif;
--names-font: "Playfair Display", serif;
--body-font: Quicksand, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
```

### Spacing & Effects
```css
--radius: 22px;           /* Border radius */
--shadow: 0 10px 30px rgba(0,0,0,.08);  /* Box shadow */
--global-text-shadow: none;              /* Text shadow */
```

## 📱 Breakpoint Reference

```css
/* Desktop */
@media (max-width: 1200px) { /* 350px panels */ }
@media (max-width: 1000px) { /* 300px panels */ }

/* Mobile */
@media (max-width: 800px) { /* Single column layout */ }
```

## 🚀 Common Patterns

### Adding New Styles
1. Find the relevant module file
2. Add styles at the end of the file
3. Use existing CSS variables when possible
4. Follow the established naming conventions

### Button Variants
```css
button { /* Primary button */ }
button.secondary { /* Secondary button */ }
button.ghost { /* Ghost button */ }
```

### Control Panel Styling
```css
.control-panel {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 12px;
  margin: 8px 0;
}
```

### Form Input Styling
```css
input, select, textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #e6e6ee;
  border-radius: 12px;
  outline: none;
  background: #fafafe;
  transition: .2s border-color;
  font: 14px/1.2 var(--body-font);
}
```

## 🔧 Troubleshooting Quick Fixes

### Styles Not Loading
- ✅ Link `css/index.css` in HTML
- ❌ Don't link individual CSS files
- ✅ Check file paths are correct

### Variables Not Working
- ✅ Ensure `01-variables.css` loads first
- ✅ Check variable names match exactly
- ✅ Verify no syntax errors in variables file

### Layout Broken
- ✅ Check `02-layout.css` is imported
- ✅ Verify grid classes are applied correctly
- ✅ Check for conflicting CSS rules

### Responsive Issues
- ✅ Ensure `10-responsive.css` is included
- ✅ Check media query syntax
- ✅ Test breakpoint values

## 📝 File Modification Checklist

When modifying CSS files:

- [ ] Styles added to correct module
- [ ] CSS variables used when appropriate
- [ ] Naming conventions followed
- [ ] No duplicate styles created
- [ ] Responsive behavior considered
- [ ] Documentation updated if needed
- [ ] Cross-browser compatibility checked

---

*Use this guide for quick lookups. For detailed information, see the main README.md*
