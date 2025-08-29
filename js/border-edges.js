/**
 * BORDER EDGES SYSTEM
 * Clean, isolated system for managing invitation border edge effects
 */

class BorderEdgesSystem {
  constructor() {
    console.log('🎯 BorderEdgesSystem: Initializing...');
    
    // Edge settings
    this.settings = {
      style: 'none',
      thickness: 3,
      opacity: 0.8,
      color: '#000000',
      variant: 'default'
    };
    
    // Edge style definitions with SVG paths
    this.edgeStyles = {
      none: null,
      border: {
        default: 'M0,0 L100,0 L100,100 L0,100 Z',
        rough: 'M0,0 L100,0 L100,100 L0,100 Z',
        smooth: 'M0,0 L100,0 L100,100 L0,100 Z',
        sharp: 'M0,0 L100,0 L100,100 L0,100 Z',
        soft: 'M0,0 L100,0 L100,100 L0,100 Z'
      },
      torn: {
        default: 'M0,0 Q25,5 50,0 T100,0 L100,100 Q75,95 50,100 T0,100 Z',
        rough: 'M0,0 Q20,8 40,2 Q60,-3 80,1 Q90,4 100,0 L100,100 Q80,92 60,98 Q40,103 20,97 Q10,95 0,100 Z',
        smooth: 'M0,0 Q30,3 60,0 Q80,2 100,0 L100,100 Q70,97 40,100 Q20,98 0,100 Z',
        sharp: 'M0,0 L15,5 L30,0 L45,8 L60,2 L75,0 L90,6 L100,0 L100,100 L85,95 L70,100 L55,92 L40,98 L25,100 L10,94 L0,100 Z',
        soft: 'M0,0 Q20,2 40,0 Q60,1 80,0 Q90,1 100,0 L100,100 Q80,98 60,100 Q40,99 20,100 Q10,99 0,100 Z'
      },
      scalloped: {
        default: 'M0,0 Q25,15 50,0 Q75,15 100,0 L100,100 Q75,85 50,100 Q25,85 0,100 Z',
        rough: 'M0,0 Q20,18 40,2 Q60,20 80,0 Q90,12 100,0 L100,100 Q80,82 60,100 Q40,80 20,98 Q10,85 0,100 Z',
        smooth: 'M0,0 Q30,12 60,0 Q80,15 100,0 L100,100 Q70,88 40,100 Q20,85 0,100 Z',
        sharp: 'M0,0 L25,20 L50,0 L75,20 L100,0 L100,100 L75,80 L50,100 L25,80 L0,100 Z',
        soft: 'M0,0 Q25,10 50,0 Q75,10 100,0 L100,100 Q75,90 50,100 Q25,90 0,100 Z'
      },
      zigzag: {
        default: 'M0,0 L25,15 L50,0 L75,15 L100,0 L100,100 L75,85 L50,100 L25,85 L0,100 Z',
        rough: 'M0,0 L20,18 L40,2 L60,20 L80,0 L100,18 L100,100 L80,82 L60,100 L40,80 L20,100 L0,82 Z',
        smooth: 'M0,0 Q25,15 50,0 Q75,15 100,0 L100,100 Q75,85 50,100 Q25,85 0,100 Z',
        sharp: 'M0,0 L25,20 L50,0 L75,20 L100,0 L100,100 L75,80 L50,100 L25,80 L0,100 Z',
        soft: 'M0,0 Q25,12 50,0 Q75,12 100,0 L100,100 Q75,88 50,100 Q25,88 0,100 Z'
      },
      wave: {
        default: 'M0,0 Q25,10 50,0 Q75,10 100,0 L100,100 Q75,90 50,100 Q25,90 0,100 Z',
        rough: 'M0,0 Q20,12 40,0 Q60,15 80,0 Q90,8 100,0 L100,100 Q80,88 60,100 Q40,85 20,100 Q10,92 0,100 Z',
        smooth: 'M0,0 Q30,8 60,0 Q80,12 100,0 L100,100 Q70,92 40,100 Q20,88 0,100 Z',
        sharp: 'M0,0 L25,15 L50,0 L75,15 L100,0 L100,100 L75,85 L50,100 L25,85 L0,100 Z',
        soft: 'M0,0 Q25,6 50,0 Q75,6 100,0 L100,100 Q75,94 50,100 Q25,94 0,100 Z'
      },
      spikes: {
        default: 'M0,0 L25,20 L50,0 L75,20 L100,0 L100,100 L75,80 L50,100 L25,80 L0,100 Z',
        rough: 'M0,0 L20,22 L40,0 L60,25 L80,0 L100,18 L100,100 L80,78 L60,100 L40,75 L20,100 L0,78 Z',
        smooth: 'M0,0 Q25,18 50,0 Q75,18 100,0 L100,100 Q75,82 50,100 Q25,82 0,100 Z',
        sharp: 'M0,0 L25,25 L50,0 L75,25 L100,0 L100,100 L75,75 L50,100 L25,75 L0,100 Z',
        soft: 'M0,0 Q25,15 50,0 Q75,15 100,0 L100,100 Q75,85 50,100 Q25,85 0,100 Z'
      },
      dots: {
        default: 'M0,0 Q25,5 50,0 Q75,5 100,0 L100,100 Q75,95 50,100 Q25,95 0,100 Z',
        rough: 'M0,0 Q20,8 40,0 Q60,10 80,0 Q90,3 100,0 L100,100 Q80,92 60,100 Q40,90 20,100 Q10,97 0,100 Z',
        smooth: 'M0,0 Q30,3 60,0 Q80,8 100,0 L100,100 Q70,97 40,100 Q20,92 0,100 Z',
        sharp: 'M0,0 L25,10 L50,0 L75,10 L100,0 L100,100 L75,90 L50,100 L25,90 L0,100 Z',
        soft: 'M0,0 Q25,4 50,0 Q75,4 100,0 L100,100 Q75,96 50,100 Q25,96 0,100 Z'
      },
      geometric: {
        default: 'M0,0 L25,15 L50,0 L75,15 L100,0 L100,100 L75,85 L50,100 L25,85 L0,100 Z',
        rough: 'M0,0 L20,18 L40,0 L60,20 L80,0 L100,18 L100,100 L80,82 L60,100 L40,80 L20,100 L0,82 Z',
        smooth: 'M0,0 Q25,12 50,0 Q75,12 100,0 L100,100 Q75,88 50,100 Q25,88 0,100 Z',
        sharp: 'M0,0 L25,20 L50,0 L75,20 L100,0 L100,100 L75,80 L50,100 L25,80 L0,100 Z',
        soft: 'M0,0 Q25,10 50,0 Q75,10 100,100 Q75,90 50,100 Q25,90 0,100 Z'
      },
      organic: {
        default: 'M0,0 Q25,8 50,0 Q75,8 100,0 L100,100 Q75,92 50,100 Q25,92 0,100 Z',
        rough: 'M0,0 Q20,12 40,0 Q60,15 80,0 Q90,6 100,0 L100,100 Q80,88 60,100 Q40,85 20,100 Q10,94 0,100 Z',
        smooth: 'M0,0 Q30,6 60,0 Q80,10 100,0 L100,100 Q70,94 40,100 Q20,90 0,100 Z',
        sharp: 'M0,0 L25,18 L50,0 L75,18 L100,0 L100,100 L75,82 L50,100 L25,82 L0,100 Z',
        soft: 'M0,0 Q25,8 50,0 Q75,8 100,0 L100,100 Q75,92 50,100 Q25,92 0,100 Z'
      },
      vintage: {
        default: 'M0,0 Q25,10 50,0 Q75,10 100,0 L100,100 Q75,90 50,100 Q25,90 0,100 Z',
        rough: 'M0,0 Q20,15 40,0 Q60,18 80,0 Q90,8 100,0 L100,100 Q80,85 60,100 Q40,82 20,100 Q10,92 0,100 Z',
        smooth: 'M0,0 Q30,8 60,0 Q80,12 100,0 L100,100 Q70,92 40,100 Q20,88 0,100 Z',
        sharp: 'M0,0 L25,20 L50,0 L75,20 L100,0 L100,100 L75,80 L50,100 L25,80 L0,100 Z',
        soft: 'M0,0 Q25,12 50,0 Q75,12 100,0 L100,100 Q75,88 50,100 Q25,88 0,100 Z'
      }
    };
    
    this.initialized = false;
    this.init();
  }
  
  init() {
    console.log('🎯 BorderEdgesSystem: Starting initialization...');
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.initializeControls();
      });
    } else {
      this.initializeControls();
    }
  }
  
  initializeControls() {
    console.log('🎯 BorderEdgesSystem: Initializing controls...');
    
    // Find all required elements
    const elements = this.findElements();
    if (!elements) {
      console.error('❌ BorderEdgesSystem: Required elements not found');
      return;
    }
    
    // Attach event listeners
    this.attachEventListeners(elements);
    
    // Initialize UI
    this.updateUI();
    
    this.initialized = true;
    console.log('✅ BorderEdgesSystem: Initialization complete');
  }
  
  findElements() {
    console.log('🔍 BorderEdgesSystem: Finding elements...');
    
    const elements = {
      edgeStyle: document.getElementById('edge-style'),
      edgeVariant: document.getElementById('edge-variant'),
      edgeThickness: document.getElementById('edge-thickness'),
      edgeOpacity: document.getElementById('edge-opacity'),
      edgeColor: document.getElementById('edge-color'),
      edgeLayer: document.getElementById('edge-layer'),
      thicknessValue: document.getElementById('edge-thickness-value'),
      opacityValue: document.getElementById('edge-opacity-value'),
      resetButton: document.getElementById('reset-edge')
    };
    
    // Check which elements are missing
    const missing = Object.entries(elements).filter(([name, element]) => !element);
    
    if (missing.length > 0) {
      console.error('❌ BorderEdgesSystem: Missing elements:', missing.map(([name]) => name));
      console.log('🔍 Available elements with "edge" in ID:', 
        Array.from(document.querySelectorAll('[id*="edge"]')).map(el => el.id));
      return null;
    }
    
    console.log('✅ BorderEdgesSystem: All elements found');
    return elements;
  }
  
  attachEventListeners(elements) {
    console.log('🎯 BorderEdgesSystem: Attaching event listeners...');
    
    // Edge style change
    elements.edgeStyle.addEventListener('change', (e) => {
      console.log('🎨 BorderEdgesSystem: Edge style changed to:', e.target.value);
      this.settings.style = e.target.value;
      this.applyEdgeEffect();
    });
    
    // Edge variant change
    elements.edgeVariant.addEventListener('change', (e) => {
      console.log('🎨 BorderEdgesSystem: Edge variant changed to:', e.target.value);
      this.settings.variant = e.target.value;
      this.applyEdgeEffect();
    });
    
    // Edge thickness
    elements.edgeThickness.addEventListener('input', (e) => {
      this.settings.thickness = parseInt(e.target.value);
      elements.thicknessValue.textContent = this.settings.thickness;
      console.log('🎨 BorderEdgesSystem: Thickness changed to:', this.settings.thickness);
      this.applyEdgeEffect();
    });
    
    // Edge opacity
    elements.edgeOpacity.addEventListener('input', (e) => {
      this.settings.opacity = parseFloat(e.target.value);
      elements.opacityValue.textContent = this.settings.opacity;
      console.log('🎨 BorderEdgesSystem: Opacity changed to:', this.settings.opacity);
      this.applyEdgeEffect();
    });
    
    // Edge color
    elements.edgeColor.addEventListener('change', (e) => {
      this.settings.color = e.target.value;
      console.log('🎨 BorderEdgesSystem: Color changed to:', this.settings.color);
      this.applyEdgeEffect();
    });
    
    // Reset button
    elements.resetButton.addEventListener('click', () => {
      console.log('🔄 BorderEdgesSystem: Reset button clicked');
      this.reset();
    });
    
    console.log('✅ BorderEdgesSystem: Event listeners attached');
  }
  
  applyEdgeEffect() {
    console.log('🎨 BorderEdgesSystem: Applying edge effect:', this.settings);
    
    const edgeLayer = document.getElementById('edge-layer');
    if (!edgeLayer) {
      console.error('❌ BorderEdgesSystem: Edge layer not found');
      return;
    }
    
    // Clear existing edge effects
    edgeLayer.innerHTML = '';
    
    if (this.settings.style === 'none') {
      console.log('✅ BorderEdgesSystem: No edge style selected, clearing edge layer');
      return;
    }
    
    const style = this.edgeStyles[this.settings.style];
    if (!style) {
      console.error('❌ BorderEdgesSystem: Edge style not found:', this.settings.style);
      return;
    }
    
    const variant = style[this.settings.variant] || style.default;
    if (!variant) {
      console.error('❌ BorderEdgesSystem: Edge variant not found:', this.settings.variant);
      return;
    }
    
    console.log('✅ BorderEdgesSystem: Using edge style:', this.settings.style, 'variant:', this.settings.variant);
    
    // Create SVG for the edge effect
    const svg = this.createEdgeSVG(variant);
    edgeLayer.appendChild(svg);
    
    console.log('✨ BorderEdgesSystem: Edge effect applied successfully');
  }
  
  createEdgeSVG(variant) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 900 1350');
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.pointerEvents = 'none';
    svg.style.zIndex = '1000';
    
    // Create edge effects for all four sides
    this.createEdgePath(svg, variant, 'top', 0, 0, 900, 0);
    this.createEdgePath(svg, variant, 'bottom', 0, 1350, 900, 1350);
    this.createEdgePath(svg, variant, 'left', 0, 0, 0, 1350);
    this.createEdgePath(svg, variant, 'right', 900, 0, 900, 1350);
    
    // Add border rectangle for visibility
    const borderRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    borderRect.setAttribute('x', '0');
    borderRect.setAttribute('y', '0');
    borderRect.setAttribute('width', '900');
    borderRect.setAttribute('height', '1350');
    borderRect.setAttribute('fill', 'none');
    borderRect.setAttribute('stroke', this.settings.color);
    borderRect.setAttribute('stroke-width', this.settings.thickness);
    borderRect.setAttribute('opacity', this.settings.opacity);
    svg.appendChild(borderRect);
    
    return svg;
  }
  
  createEdgePath(svg, variant, side, x1, y1, x2, y2) {
    const edgePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    
    let pathData = '';
    
    if (side === 'top' || side === 'bottom') {
      pathData = this.createHorizontalEdgePath(variant, x1, y1, x2, y2);
    } else {
      pathData = this.createVerticalEdgePath(variant, x1, y1, x2, y2);
    }
    
    edgePath.setAttribute('d', pathData);
    edgePath.setAttribute('fill', this.settings.color);
    edgePath.setAttribute('opacity', this.settings.opacity);
    edgePath.setAttribute('stroke', this.settings.color);
    edgePath.setAttribute('stroke-width', this.settings.thickness);
    edgePath.setAttribute('stroke-linejoin', 'round');
    
    svg.appendChild(edgePath);
  }
  
  createHorizontalEdgePath(variant, x1, y1, x2, y2) {
    const edgeLength = Math.abs(x2 - x1);
    const isTop = y1 === 0;
    
    if (this.settings.style === 'torn') {
      let path = `M${x1},${y1}`;
      const segments = 20;
      const segmentWidth = edgeLength / segments;
      
      for (let i = 0; i <= segments; i++) {
        const x = x1 + (i * segmentWidth);
        const y = y1 + (Math.random() - 0.5) * 20;
        path += ` L${x},${y}`;
      }
      
      return path;
    } else if (this.settings.style === 'scalloped') {
      let path = `M${x1},${y1}`;
      const scallops = 8;
      const scallopWidth = edgeLength / scallops;
      
      for (let i = 0; i <= scallops; i++) {
        const x = x1 + (i * scallopWidth);
        const y = y1 + (isTop ? 15 : -15);
        path += ` L${x},${y}`;
      }
      
      return path;
    } else if (this.settings.style === 'zigzag') {
      let path = `M${x1},${y1}`;
      const zigzags = 12;
      const zigzagWidth = edgeLength / zigzags;
      
      for (let i = 0; i <= zigzags; i++) {
        const x = x1 + (i * zigzagWidth);
        const y = y1 + (isTop ? 20 : -20);
        path += ` L${x},${y}`;
      }
      
      return path;
    } else {
      return `M${x1},${y1} L${x2},${y2}`;
    }
  }
  
  createVerticalEdgePath(variant, x1, y1, x2, y2) {
    const edgeLength = Math.abs(y2 - y1);
    const isLeft = x1 === 0;
    
    if (this.settings.style === 'torn') {
      let path = `M${x1},${y1}`;
      const segments = 20;
      const segmentHeight = edgeLength / segments;
      
      for (let i = 0; i <= segments; i++) {
        const y = y1 + (i * segmentHeight);
        const x = x1 + (Math.random() - 0.5) * 20;
        path += ` L${x},${y}`;
      }
      
      return path;
    } else if (this.settings.style === 'scalloped') {
      let path = `M${x1},${y1}`;
      const scallops = 8;
      const scallopHeight = edgeLength / scallops;
      
      for (let i = 0; i <= scallops; i++) {
        const y = y1 + (i * scallopHeight);
        const x = x1 + (isLeft ? 15 : -15);
        path += ` L${x},${y}`;
      }
      
      return path;
    } else if (this.settings.style === 'zigzag') {
      let path = `M${x1},${y1}`;
      const zigzags = 12;
      const zigzagHeight = edgeLength / zigzags;
      
      for (let i = 0; i <= zigzags; i++) {
        const y = y1 + (i * zigzagHeight);
        const x = x1 + (isLeft ? 20 : -20);
        path += ` L${x},${y}`;
      }
      
      return path;
    } else {
      return `M${x1},${y1} L${x2},${y2}`;
    }
  }
  
  updateUI() {
    const elements = this.findElements();
    if (!elements) return;
    
    elements.edgeStyle.value = this.settings.style;
    elements.edgeVariant.value = this.settings.variant;
    elements.edgeThickness.value = this.settings.thickness;
    elements.edgeOpacity.value = this.settings.opacity;
    elements.edgeColor.value = this.settings.color;
    elements.thicknessValue.textContent = this.settings.thickness;
    elements.opacityValue.textContent = this.settings.opacity;
  }
  
  reset() {
    console.log('🔄 BorderEdgesSystem: Resetting settings');
    this.settings = {
      style: 'none',
      thickness: 3,
      opacity: 0.8,
      color: '#000000',
      variant: 'default'
    };
    this.updateUI();
    this.applyEdgeEffect();
  }
  
  // Test function
  test() {
    console.log('🧪 BorderEdgesSystem: Testing edge system...');
    this.settings.style = 'torn';
    this.settings.variant = 'default';
    this.settings.color = '#ff0000';
    this.settings.thickness = 5;
    this.settings.opacity = 0.8;
    this.updateUI();
    this.applyEdgeEffect();
    console.log('✅ BorderEdgesSystem: Test edge applied');
  }
}

// Make it globally accessible
window.BorderEdgesSystem = BorderEdgesSystem;

// Auto-initialize when script loads
document.addEventListener('DOMContentLoaded', () => {
  console.log('🎯 BorderEdgesSystem: DOM ready, creating instance...');
  window.borderEdges = new BorderEdgesSystem();
});
