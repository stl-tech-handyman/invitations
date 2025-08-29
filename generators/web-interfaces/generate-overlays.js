const fs = require('fs');
const path = require('path');

// Create overlays directory if it doesn't exist
const overlaysDir = path.join(__dirname, 'elements', 'overlays');
if (!fs.existsSync(overlaysDir)) {
    fs.mkdirSync(overlaysDir, { recursive: true });
}

// Color palettes for different themes
const colorPalettes = {
    modern: ['#3b82f6', '#1e40af', '#dbeafe', '#1e293b'],
    vintage: ['#d97706', '#92400e', '#fef3c7', '#451a03'],
    elegant: ['#7c3aed', '#4c1d95', '#ede9fe', '#2e1065'],
    nature: ['#059669', '#047857', '#d1fae5', '#064e3b'],
    festive: ['#dc2626', '#991b1b', '#fecaca', '#7f1d1d'],
    cosmic: ['#8b5cf6', '#5b21b6', '#ddd6fe', '#3c096c'],
    tech: ['#06b6d4', '#0891b2', '#cffafe', '#0e7490'],
    warm: ['#f97316', '#ea580c', '#fed7aa', '#9a3412'],
    cool: ['#0891b2', '#0e7490', '#cffafe', '#164e63'],
    pastel: ['#f9a8d4', '#ec4899', '#fce7f3', '#be185d']
};

// Pattern generators
const patterns = {
    dots: (color, size = 20) => `
        <pattern id="dotsPattern" x="0" y="0" width="${size}" height="${size}" patternUnits="userSpaceOnUse">
            <circle cx="${size/2}" cy="${size/2}" r="1.5" fill="${color}" opacity="0.3"/>
        </pattern>`,
    
    lines: (color, angle = 0) => `
        <pattern id="linesPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <line x1="0" y1="20" x2="40" y2="20" stroke="${color}" stroke-width="0.5" opacity="0.2" transform="rotate(${angle} 20 20)"/>
        </pattern>`,
    
    grid: (color) => `
        <pattern id="gridPattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="30" y2="0" stroke="${color}" stroke-width="0.3" opacity="0.15"/>
            <line x1="0" y1="0" x2="0" y2="30" stroke="${color}" stroke-width="0.3" opacity="0.15"/>
        </pattern>`,
    
    waves: (color) => `
        <pattern id="wavesPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M0,30 Q15,20 30,30 T60,30" stroke="${color}" stroke-width="1" fill="none" opacity="0.1"/>
        </pattern>`,
    
    hexagons: (color) => `
        <pattern id="hexPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M20,5 L30,10 L30,20 L20,25 L10,20 L10,10 Z" fill="${color}" opacity="0.08"/>
        </pattern>`
};

// Corner decoration generators
const cornerDecorations = {
    stars: (color) => `
        <g fill="${color}" opacity="0.6">
            <path d="M40,40 L45,50 L55,50 L47,58 L52,68 L40,62 L28,68 L33,58 L25,50 L35,50 Z"/>
            <path d="M860,40 L865,50 L875,50 L867,58 L872,68 L860,62 L848,68 L853,58 L845,50 L855,50 Z"/>
            <path d="M40,1310 L45,1300 L55,1300 L47,1292 L52,1282 L40,1288 L28,1282 L33,1292 L25,1300 L35,1300 Z"/>
            <path d="M860,1310 L865,1300 L875,1300 L867,1292 L872,1282 L860,1288 L848,1282 L853,1292 L845,1300 L855,1300 Z"/>
        </g>`,
    
    circles: (color) => `
        <g fill="${color}" opacity="0.5">
            <circle cx="40" cy="40" r="8"/>
            <circle cx="860" cy="40" r="8"/>
            <circle cx="40" cy="1310" r="8"/>
            <circle cx="860" cy="1310" r="8"/>
        </g>`,
    
    squares: (color) => `
        <g fill="${color}" opacity="0.4">
            <rect x="35" y="35" width="10" height="10" rx="2"/>
            <rect x="855" y="35" width="10" height="10" rx="2"/>
            <rect x="35" y="1305" width="10" height="10" rx="2"/>
            <rect x="855" y="1305" width="10" height="10" rx="2"/>
        </g>`,
    
    triangles: (color) => `
        <g fill="${color}" opacity="0.5">
            <path d="M40,40 L50,50 L30,50 Z"/>
            <path d="M860,40 L870,50 L850,50 Z"/>
            <path d="M40,1310 L50,1300 L30,1300 Z"/>
            <path d="M860,1310 L870,1300 L850,1300 Z"/>
        </g>`,
    
    diamonds: (color) => `
        <g fill="${color}" opacity="0.4">
            <path d="M40,40 L45,45 L40,50 L35,45 Z"/>
            <path d="M860,40 L865,45 L860,50 L855,45 Z"/>
            <path d="M40,1310 L45,1305 L40,1300 L35,1305 Z"/>
            <path d="M860,1310 L865,1305 L860,1300 L855,1305 Z"/>
        </g>`
};

// Border pattern generators
const borderPatterns = {
    dots: (color) => {
        let dots = '';
        for (let i = 0; i < 8; i++) {
            const x = 80 + i * 100;
            dots += `<circle cx="${x}" cy="40" r="4" fill="${color}" opacity="0.6"/>`;
            dots += `<circle cx="${x}" cy="1310" r="4" fill="${color}" opacity="0.6"/>`;
        }
        for (let i = 0; i < 12; i++) {
            const y = 120 + i * 100;
            dots += `<circle cx="40" cy="${y}" r="4" fill="${color}" opacity="0.6"/>`;
            dots += `<circle cx="860" cy="${y}" r="4" fill="${color}" opacity="0.6"/>`;
        }
        return dots;
    },
    
    dashes: (color) => {
        let dashes = '';
        for (let i = 0; i < 8; i++) {
            const x = 80 + i * 100;
            dashes += `<rect x="${x-10}" y="35" width="20" height="2" rx="1" fill="${color}" opacity="0.6"/>`;
            dashes += `<rect x="${x-10}" y="1313" width="20" height="2" rx="1" fill="${color}" opacity="0.6"/>`;
        }
        for (let i = 0; i < 12; i++) {
            const y = 120 + i * 100;
            dashes += `<rect x="35" y="${y-10}" width="2" height="20" rx="1" fill="${color}" opacity="0.6"/>`;
            dashes += `<rect x="863" y="${y-10}" width="2" height="20" rx="1" fill="${color}" opacity="0.6"/>`;
        }
        return dashes;
    },
    
    squares: (color) => {
        let squares = '';
        for (let i = 0; i < 8; i++) {
            const x = 80 + i * 100;
            squares += `<rect x="${x-6}" y="34" width="12" height="12" rx="2" fill="${color}" opacity="0.5"/>`;
            squares += `<rect x="${x-6}" y="1304" width="12" height="12" rx="2" fill="${color}" opacity="0.5"/>`;
        }
        for (let i = 0; i < 12; i++) {
            const y = 120 + i * 100;
            squares += `<rect x="34" y="${y-6}" width="12" height="12" rx="2" fill="${color}" opacity="0.5"/>`;
            squares += `<rect x="854" y="${y-6}" width="12" height="12" rx="2" fill="${color}" opacity="0.5"/>`;
        }
        return squares;
    }
};

// Generate overlay SVG content
function generateOverlay(style, index) {
    const palette = colorPalettes[Object.keys(colorPalettes)[index % Object.keys(colorPalettes).length]];
    const primaryColor = palette[0];
    const secondaryColor = palette[1];
    const accentColor = palette[2];
    const darkColor = palette[3];
    
    const cornerStyle = Object.keys(cornerDecorations)[index % Object.keys(cornerDecorations).length];
    const borderStyle = Object.keys(borderPatterns)[index % Object.keys(borderPatterns).length];
    const patternStyle = Object.keys(patterns)[index % Object.keys(patterns).length];
    
    const borderRadius = style === 'rounded' ? 25 : style === 'sharp' ? 0 : 8;
    const strokeWidth = style === 'bold' ? 4 : style === 'thin' ? 1 : 2;
    
    const gradientId = `gradient${index}`;
    const shadowId = `shadow${index}`;
    const patternId = `pattern${index}`;
    
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="900" height="1350" viewBox="0 0 900 1350" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${accentColor};stop-opacity:0.95" />
      <stop offset="50%" style="stop-color:${palette[1]};stop-opacity:0.85" />
      <stop offset="100%" style="stop-color:${primaryColor};stop-opacity:0.9" />
    </linearGradient>
    <filter id="${shadowId}" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.1"/>
    </filter>
    ${patterns[patternStyle](primaryColor, 30 + (index % 5) * 10)}
  </defs>
  
  <!-- Main frame -->
  <rect x="20" y="20" width="860" height="1310" rx="${borderRadius}" ry="${borderRadius}" 
        fill="url(#${gradientId})" 
        stroke="${primaryColor}" 
        stroke-width="${strokeWidth}"
        filter="url(#${shadowId})"/>
  
  <!-- Corner decorations -->
  ${cornerDecorations[cornerStyle](secondaryColor)}
  
  <!-- Border pattern -->
  <g fill="${secondaryColor}">
    ${borderPatterns[borderStyle](secondaryColor)}
  </g>
  
  <!-- Inner border -->
  <rect x="50" y="50" width="800" height="1250" rx="${borderRadius > 0 ? borderRadius - 5 : 0}" ry="${borderRadius > 0 ? borderRadius - 5 : 0}" 
        fill="none" 
        stroke="${accentColor}" 
        stroke-width="1.5"/>
  
  <!-- Pattern overlay -->
  <rect x="20" y="20" width="860" height="1310" rx="${borderRadius}" ry="${borderRadius}" 
        fill="url(#${patternId})" 
        opacity="0.2"/>
  
  <!-- Additional decorative elements based on style -->
  ${generateStyleSpecificElements(style, index, palette)}
</svg>`;
}

// Generate style-specific decorative elements
function generateStyleSpecificElements(style, index, palette) {
    const centerX = 450;
    const centerY = 675;
    
    switch (style) {
        case 'geometric':
            return `
                <g fill="${palette[1]}" opacity="0.3">
                    <rect x="${centerX - 100}" y="${centerY - 50}" width="200" height="100" rx="10" opacity="0.1"/>
                    <circle cx="${centerX - 150}" cy="${centerY - 100}" r="30" opacity="0.08"/>
                    <circle cx="${centerX + 150}" cy="${centerY + 100}" r="25" opacity="0.08"/>
                </g>`;
        
        case 'organic':
            return `
                <g fill="${palette[2]}" opacity="0.2">
                    <path d="M${centerX - 120},${centerY} Q${centerX - 60},${centerY - 80} ${centerX},${centerY} T${centerX + 120},${centerY}" 
                          stroke="${palette[1]}" stroke-width="2" fill="none" opacity="0.3"/>
                    <path d="M${centerX - 100},${centerY - 50} Q${centerX - 30},${centerY - 30} ${centerX},${centerY - 50} T${centerX + 100},${centerY - 50}" 
                          stroke="${palette[0]}" stroke-width="1.5" fill="none" opacity="0.25"/>
                </g>`;
        
        case 'abstract':
            return `
                <g opacity="0.15">
                    <path d="M${centerX - 80},${centerY - 60} L${centerX + 80},${centerY - 60} L${centerX + 40},${centerY + 60} Z" 
                          fill="${palette[0]}"/>
                    <path d="M${centerX - 60},${centerY + 40} L${centerX + 60},${centerY + 40} L${centerX},${centerY - 40} Z" 
                          fill="${palette[1]}"/>
                </g>`;
        
        case 'minimal':
            return `
                <g fill="${palette[3]}" opacity="0.1">
                    <line x1="${centerX - 150}" y1="${centerY}" x2="${centerX + 150}" y2="${centerY}" 
                          stroke="${palette[1]}" stroke-width="0.5"/>
                    <line x1="${centerX}" y1="${centerY - 150}" x2="${centerX}" y2="${centerY + 150}" 
                          stroke="${palette[1]}" stroke-width="0.5"/>
                </g>`;
        
        default:
            return `
                <g fill="${palette[2]}" opacity="0.1">
                    <circle cx="${centerX - 100}" cy="${centerY - 100}" r="20"/>
                    <circle cx="${centerX + 100}" cy="${centerY + 100}" r="15"/>
                </g>`;
    }
}

// Main generation function
function generateAllOverlays() {
    const styles = ['geometric', 'organic', 'abstract', 'minimal', 'rounded', 'sharp', 'bold', 'thin'];
    const themes = ['modern', 'vintage', 'elegant', 'nature', 'festive', 'cosmic', 'tech', 'warm', 'cool', 'pastel'];
    
    console.log('Generating 200 overlays...');
    
    for (let i = 1; i <= 200; i++) {
        const style = styles[i % styles.length];
        const theme = themes[i % themes.length];
        const fileName = `overlay-${String(i).padStart(3, '0')}-${style}-${theme}.svg`;
        const filePath = path.join(overlaysDir, fileName);
        
        const svgContent = generateOverlay(style, i);
        fs.writeFileSync(filePath, svgContent);
        
        if (i % 20 === 0) {
            console.log(`Generated ${i} overlays...`);
        }
    }
    
    console.log('✅ Successfully generated 200 overlays!');
    console.log(`📁 Files saved to: ${overlaysDir}`);
}

// Run the generation
generateAllOverlays();
