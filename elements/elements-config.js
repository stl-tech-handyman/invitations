// Elements Configuration
// This file defines all available elements that can be used in the invitation generator

const ELEMENTS_CONFIG = {
  backgrounds: {
    beach: {
      name: "Beach Scene",
      file: "beach.svg",
      category: "nature",
      tags: ["beach", "ocean", "summer", "relaxing"],
      defaultOpacity: 100,
      defaultBlur: 0,
      defaultBrightness: 100,
      defaultVignette: 20
    },
    forest: {
      name: "Forest Scene", 
      file: "forest.svg",
      category: "nature",
      tags: ["forest", "trees", "nature", "peaceful"],
      defaultOpacity: 100,
      defaultBlur: 0,
      defaultBrightness: 100,
      defaultVignette: 15
    },
    abstract: {
      name: "Abstract Geometric",
      file: "abstract.svg", 
      category: "modern",
      tags: ["abstract", "geometric", "modern", "artistic"],
      defaultOpacity: 100,
      defaultBlur: 0,
      defaultBrightness: 100,
      defaultVignette: 0
    }
  },
  
  decorations: {
    // Celebration & Party
    balloons: {
      name: "Balloons",
      file: "balloons.svg",
      category: "celebration",
      tags: ["balloons", "party", "celebration", "fun"],
      defaultOpacity: 80,
      defaultScale: 1.0,
      defaultRotation: 0,
      positions: [
        { x: 100, y: 200 },
        { x: 700, y: 150 },
        { x: 400, y: 100 }
      ]
    },
    confetti: {
      name: "Confetti",
      file: "confetti.svg",
      category: "celebration",
      tags: ["confetti", "party", "celebration", "fun"],
      defaultOpacity: 85,
      defaultScale: 0.9,
      defaultRotation: 0,
      positions: [
        { x: 150, y: 150 },
        { x: 650, y: 100 },
        { x: 350, y: 200 }
      ]
    },
    gifts: {
      name: "Gifts",
      file: "gifts.svg",
      category: "celebration",
      tags: ["gifts", "party", "celebration", "birthday"],
      defaultOpacity: 80,
      defaultScale: 1.0,
      defaultRotation: 0,
      positions: [
        { x: 200, y: 300 },
        { x: 600, y: 250 },
        { x: 400, y: 350 }
      ]
    },
    cake: {
      name: "Cake",
      file: "cake.svg",
      category: "celebration",
      tags: ["cake", "party", "celebration", "birthday"],
      defaultOpacity: 85,
      defaultScale: 0.9,
      defaultRotation: 0,
      positions: [
        { x: 250, y: 300 },
        { x: 550, y: 250 },
        { x: 400, y: 350 }
      ]
    },
    candles: {
      name: "Candles",
      file: "candles.svg",
      category: "celebration",
      tags: ["candles", "party", "celebration", "birthday"],
      defaultOpacity: 90,
      defaultScale: 0.8,
      defaultRotation: 0,
      positions: [
        { x: 300, y: 200 },
        { x: 500, y: 150 },
        { x: 400, y: 250 }
      ]
    },
    ribbons: {
      name: "Ribbons",
      file: "ribbons.svg",
      category: "celebration",
      tags: ["ribbons", "party", "celebration", "decorative"],
      defaultOpacity: 80,
      defaultScale: 1.0,
      defaultRotation: 0,
      positions: [
        { x: 150, y: 200 },
        { x: 650, y: 150 },
        { x: 400, y: 100 }
      ]
    },
    hearts: {
      name: "Hearts",
      file: "hearts.svg",
      category: "celebration",
      tags: ["hearts", "love", "romantic", "valentine"],
      defaultOpacity: 85,
      defaultScale: 0.9,
      defaultRotation: 0,
      positions: [
        { x: 200, y: 250 },
        { x: 600, y: 200 },
        { x: 400, y: 300 }
      ]
    },
    stars: {
      name: "Stars",
      file: "stars.svg",
      category: "celebration", 
      tags: ["stars", "sparkle", "magical", "night"],
      defaultOpacity: 90,
      defaultScale: 0.9,
      defaultRotation: 0,
      positions: [
        { x: 200, y: 150 },
        { x: 650, y: 200 },
        { x: 450, y: 100 }
      ]
    },
    sparkles: {
      name: "Sparkles",
      file: "sparkles.svg",
      category: "celebration",
      tags: ["sparkles", "glitter", "magical", "shiny"],
      defaultOpacity: 90,
      defaultScale: 0.8,
      defaultRotation: 0,
      positions: [
        { x: 250, y: 150 },
        { x: 600, y: 100 },
        { x: 400, y: 200 }
      ]
    },
    
    // Nature & Organic
    flowers: {
      name: "Flowers",
      file: "flowers.svg", 
      category: "nature",
      tags: ["flowers", "nature", "beautiful", "spring"],
      defaultOpacity: 75,
      defaultScale: 0.8,
      defaultRotation: 0,
      positions: [
        { x: 150, y: 300 },
        { x: 600, y: 250 },
        { x: 300, y: 400 }
      ]
    },
    leaves: {
      name: "Leaves",
      file: "leaves.svg",
      category: "nature",
      tags: ["leaves", "nature", "organic", "autumn"],
      defaultOpacity: 80,
      defaultScale: 0.9,
      defaultRotation: 0,
      positions: [
        { x: 200, y: 300 },
        { x: 550, y: 250 },
        { x: 350, y: 350 }
      ]
    },
    butterflies: {
      name: "Butterflies",
      file: "butterflies.svg",
      category: "nature",
      tags: ["butterflies", "nature", "beautiful", "spring"],
      defaultOpacity: 80,
      defaultScale: 0.8,
      defaultRotation: 0,
      positions: [
        { x: 250, y: 200 },
        { x: 550, y: 150 },
        { x: 400, y: 250 }
      ]
    },
    
    // Geometric & Abstract
    geometricShapes: {
      name: "Geometric Shapes",
      file: "geometric-shapes.svg",
      category: "geometric",
      tags: ["geometric", "shapes", "modern", "abstract"],
      defaultOpacity: 80,
      defaultScale: 1.0,
      defaultRotation: 0,
      positions: [
        { x: 200, y: 200 },
        { x: 600, y: 150 },
        { x: 400, y: 300 }
      ]
    },
    dots: {
      name: "Dots",
      file: "dots.svg",
      category: "geometric",
      tags: ["dots", "polka", "pattern", "minimal"],
      defaultOpacity: 75,
      defaultScale: 1.0,
      defaultRotation: 0,
      positions: [
        { x: 150, y: 200 },
        { x: 650, y: 150 },
        { x: 400, y: 250 }
      ]
    },
    lines: {
      name: "Lines",
      file: "lines.svg",
      category: "geometric",
      tags: ["lines", "grid", "pattern", "minimal"],
      defaultOpacity: 80,
      defaultScale: 1.0,
      defaultRotation: 0,
      positions: [
        { x: 200, y: 200 },
        { x: 600, y: 150 },
        { x: 400, y: 300 }
      ]
    },
    
    // Technology & Digital
    circuits: {
      name: "Circuits",
      file: "circuits.svg",
      category: "technology",
      tags: ["circuits", "tech", "digital", "electronics"],
      defaultOpacity: 80,
      defaultScale: 0.9,
      defaultRotation: 0,
      positions: [
        { x: 250, y: 200 },
        { x: 550, y: 150 },
        { x: 400, y: 250 }
      ]
    },
    chip: {
      name: "Chip",
      file: "chip.svg",
      category: "technology",
      tags: ["chip", "tech", "digital", "electronics"],
      defaultOpacity: 80,
      defaultScale: 0.9,
      defaultRotation: 0,
      positions: [
        { x: 200, y: 200 },
        { x: 600, y: 150 },
        { x: 400, y: 250 }
      ]
    },
    network: {
      name: "Network",
      file: "network.svg",
      category: "technology",
      tags: ["network", "tech", "digital", "connectivity"],
      defaultOpacity: 80,
      defaultScale: 0.9,
      defaultRotation: 0,
      positions: [
        { x: 250, y: 200 },
        { x: 550, y: 150 },
        { x: 400, y: 250 }
      ]
    }
  },
  
  overlays: {
    // Future overlay elements like frames, borders, etc.
  }
};

// Slideshow combinations for showcasing different settings
const SLIDESHOW_COMBINATIONS = [
  // Pure image backgrounds
  {
    name: "Pure Beach Background",
    background: "beach",
    decorations: ["balloons"],
    backgroundMode: "image",
    imageOpacity: 100,
    imageBlur: 0,
    imageBrightness: 100,
    imageVignette: 20,
    textureOpacity: 0,
    gradientOpacity: 0
  },
  {
    name: "Pure Forest Background", 
    background: "forest",
    decorations: ["flowers"],
    backgroundMode: "image",
    imageOpacity: 100,
    imageBlur: 0,
    imageBrightness: 100,
    imageVignette: 15,
    textureOpacity: 0,
    gradientOpacity: 0
  },
  {
    name: "Pure Abstract Background",
    background: "abstract", 
    decorations: ["stars"],
    backgroundMode: "image",
    imageOpacity: 100,
    imageBlur: 0,
    imageBrightness: 100,
    imageVignette: 0,
    textureOpacity: 0,
    gradientOpacity: 0
  },
  
  // Image + Gradient combinations
  {
    name: "Beach with Blue Gradient",
    background: "beach",
    decorations: ["balloons", "stars"],
    backgroundMode: "img+tex",
    imageOpacity: 70,
    imageBlur: 2,
    imageBrightness: 110,
    imageVignette: 25,
    textureOpacity: 0,
    gradientOpacity: 60,
    gradientType: "blue"
  },
  {
    name: "Forest with Green Gradient",
    background: "forest",
    decorations: ["flowers"],
    backgroundMode: "img+tex", 
    imageOpacity: 80,
    imageBlur: 1,
    imageBrightness: 105,
    imageVignette: 20,
    textureOpacity: 0,
    gradientOpacity: 50,
    gradientType: "green"
  },
  
  // Image + Texture combinations
  {
    name: "Beach with Dots Texture",
    background: "beach",
    decorations: ["balloons"],
    backgroundMode: "img+tex",
    imageOpacity: 85,
    imageBlur: 0,
    imageBrightness: 100,
    imageVignette: 20,
    textureOpacity: 40,
    textureType: "dots",
    textureScale: 80
  },
  {
    name: "Abstract with Grid Texture",
    background: "abstract",
    decorations: ["stars"],
    backgroundMode: "img+tex",
    imageOpacity: 90,
    imageBlur: 0,
    imageBrightness: 100,
    imageVignette: 0,
    textureOpacity: 35,
    textureType: "grid",
    textureScale: 120
  },
  
  // Gradient + Texture combinations
  {
    name: "Blue Gradient with Stripes",
    background: null,
    decorations: ["balloons", "flowers"],
    backgroundMode: "grad+tex",
    imageOpacity: 0,
    textureOpacity: 45,
    textureType: "stripes",
    textureScale: 100,
    gradientOpacity: 100,
    gradientType: "blue"
  },
  {
    name: "Purple Gradient with Noise",
    background: null,
    decorations: ["stars"],
    backgroundMode: "grad+tex",
    imageOpacity: 0,
    textureOpacity: 30,
    textureType: "noise",
    textureScale: 150,
    gradientOpacity: 100,
    gradientType: "purple"
  },
  
  // Complex combinations
  {
    name: "Beach + Blue Gradient + Dots + Balloons",
    background: "beach",
    decorations: ["balloons", "stars"],
    backgroundMode: "img+tex",
    imageOpacity: 60,
    imageBlur: 3,
    imageBrightness: 115,
    imageVignette: 30,
    textureOpacity: 50,
    textureType: "dots",
    textureScale: 90,
    gradientOpacity: 40,
    gradientType: "blue"
  },
  {
    name: "Abstract + Purple Gradient + Grid + Flowers",
    background: "abstract",
    decorations: ["flowers", "stars"],
    backgroundMode: "img+tex",
    imageOpacity: 75,
    imageBlur: 1,
    imageBrightness: 105,
    imageVignette: 10,
    textureOpacity: 40,
    textureType: "grid",
    textureScale: 110,
    gradientOpacity: 55,
    gradientType: "purple"
  }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ELEMENTS_CONFIG, SLIDESHOW_COMBINATIONS };
} else {
  window.ELEMENTS_CONFIG = ELEMENTS_CONFIG;
  window.SLIDESHOW_COMBINATIONS = SLIDESHOW_COMBINATIONS;
}

