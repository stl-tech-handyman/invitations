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

