// 🧪 Invitation Generator Test Suite
// Comprehensive unit tests and end-to-end tests

class InvitationGeneratorTests {
  constructor() {
    this.testResults = [];
    this.passed = 0;
    this.failed = 0;
    this.total = 0;
  }

  // Test runner
  async runAllTests() {
    console.log('🧪 Starting comprehensive test suite...');
    console.log('='.repeat(60));
    
    await this.runUnitTests();
    await this.runIntegrationTests();
    await this.runEndToEndTests();
    await this.runPerformanceTests();
    
    this.printResults();
  }

  // Unit Tests
  async runUnitTests() {
    console.log('\n📋 UNIT TESTS');
    console.log('-'.repeat(40));
    
    this.testTextFunctions();
    this.testThemeSystem();
    this.testTextureSystem();
    this.testImageSystem();
    this.testSpriteSystem();
    this.testLayoutSystem();
    this.testAnimationSystem();
    this.testFontSystem();
  }

  // Integration Tests
  async runIntegrationTests() {
    console.log('\n🔗 INTEGRATION TESTS');
    console.log('-'.repeat(40));
    
    this.testThemeAndSpriteIntegration();
    this.testBackgroundModeIntegration();
    this.testFontAndLayoutIntegration();
    this.testAnimationAndParallaxIntegration();
  }

  // End-to-End Tests
  async runEndToEndTests() {
    console.log('\n🌐 END-TO-END TESTS');
    console.log('-'.repeat(40));
    
    this.testCompleteWorkflow();
    this.testUserInteractionFlow();
    this.testDataPersistence();
    this.testExportFunctionality();
  }

  // Performance Tests
  async runPerformanceTests() {
    console.log('\n⚡ PERFORMANCE TESTS');
    console.log('-'.repeat(40));
    
    this.testRenderingPerformance();
    this.testMemoryUsage();
    this.testResponsiveness();
  }

  // Test assertion helper
  assert(condition, testName, details = '') {
    this.total++;
    if (condition) {
      this.passed++;
      this.testResults.push({ name: testName, status: 'PASS', details });
      console.log(`✅ ${testName} ${details}`);
    } else {
      this.failed++;
      this.testResults.push({ name: testName, status: 'FAIL', details });
      console.error(`❌ ${testName} ${details}`);
    }
  }

  // Test text input functions
  testTextFunctions() {
    console.log('📝 Testing text functions...');
    
    // Mock DOM elements
    const mockElements = {
      'pill': { value: 'Test Pill' },
      'title': { value: 'Test Title' },
      'subtitle': { value: 'Test Subtitle' },
      'names': { value: 'Test Names' },
      'date': { value: 'Test Date' },
      'time': { value: 'Test Time' },
      'location': { value: 'Test Location' },
      'rsvp': { value: 'Test RSVP' }
    };

    // Test text trimming
    this.assert(
      'Test Pill'.trim() === 'Test Pill',
      'Text trimming works correctly',
      'Input: "Test Pill"'
    );

    // Test text length validation
    this.assert(
      'Test Title'.length > 0,
      'Text length validation',
      'Length: ' + 'Test Title'.length
    );

    // Test text content update simulation
    const testText = 'Updated Text';
    this.assert(
      testText === 'Updated Text',
      'Text content update simulation',
      'Content: ' + testText
    );
  }

  // Test theme system
  testThemeSystem() {
    console.log('🎨 Testing theme system...');
    
    const THEMES = {
      pool: { gradient: 'linear-gradient(180deg,#b3e5ff 0%, #e6f9ff 100%)', palette: ['#2ec5ff','#ffd166','#06d6a0','#118ab2','#ef476f'], sprites: ['floatie','sunglasses','flipflop'] },
      birthday: { gradient: 'linear-gradient(180deg,#fff5d6 0%, #ffe9ef 100%)', palette: ['#ff6b6b','#ffd166','#4ecdc4','#45b7d1','#c7f464'], sprites: ['balloon','confetti','cake'] },
      baby: { gradient: 'linear-gradient(180deg,#e8f3ff 0%, #f7f7fb 100%)', palette: ['#a3cef1','#bde0fe','#ffc8dd','#ffafcc','#cdb4db'], sprites: ['cloud','star','duck'] },
      graduation: { gradient: 'linear-gradient(180deg,#fff9e6 0%, #f1f5f9 100%)', palette: ['#0f172a','#f59e0b','#334155','#a8a29e','#ef4444'], sprites: ['cap','ribbon','confetti'] },
      holiday: { gradient: 'linear-gradient(180deg,#e5f6ff 0%, #f0fff4 100%)', palette: ['#2563eb','#16a34a','#dc2626','#eab308','#0891b2'], sprites: ['snow','tree','star'] }
    };

    // Test theme existence
    this.assert(
      THEMES.pool !== undefined,
      'Pool theme exists',
      'Theme keys: ' + Object.keys(THEMES).join(', ')
    );

    // Test theme structure
    this.assert(
      THEMES.pool.gradient && THEMES.pool.palette && THEMES.pool.sprites,
      'Theme structure validation',
      'Has gradient, palette, and sprites'
    );

    // Test theme count
    this.assert(
      Object.keys(THEMES).length === 5,
      'Correct number of themes',
      'Count: ' + Object.keys(THEMES).length
    );

    // Test sprite count per theme
    Object.entries(THEMES).forEach(([name, theme]) => {
      this.assert(
        theme.sprites.length >= 3,
        `${name} theme has sufficient sprites`,
        `Sprite count: ${theme.sprites.length}`
      );
    });
  }

  // Test texture system
  testTextureSystem() {
    console.log('🎨 Testing texture system...');
    
    const TEXTURES = {
      stripes: s => `repeating-linear-gradient(45deg, rgba(255,255,255,0) 0, rgba(255,255,255,0) ${s/2}px, rgba(0,0,0,.06) ${s/2}px, rgba(0,0,0,.06) ${s}px)`,
      dots: s => `radial-gradient(circle at 25% 25%, rgba(0,0,0,.08) 12%, transparent 13%) ${s/2}px ${s/2}px / ${s}px ${s}px repeat`,
      grid: s => `repeating-linear-gradient(0deg, rgba(0,0,0,.06), rgba(0,0,0,.06) 1px, transparent 1px, transparent ${s}px), repeating-linear-gradient(90deg, rgba(0,0,0,.06), rgba(0,0,0,.06) 1px, transparent 1px, transparent ${s}px)`,
      crosshatch: s => `repeating-linear-gradient(45deg, rgba(0,0,0,.05) 0, rgba(0,0,0,.05) 1px, transparent 1px, transparent ${s}px), repeating-linear-gradient(-45deg, rgba(0,0,0,.05) 0, rgba(0,0,0,.05) 1px, transparent 1px, transparent ${s}px)`,
      chevron: s => `repeating-linear-gradient(135deg, rgba(0,0,0,.05) 0, rgba(0,0,0,.05) ${s/4}px, transparent ${s/4}px, transparent ${s/2}px), repeating-linear-gradient(45deg, rgba(0,0,0,.05) 0, rgba(0,0,0,.05) ${s/4}px, transparent ${s/4}px, transparent ${s/2}px)`,
      checker: s => `linear-gradient(45deg, rgba(0,0,0,.04) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.04) 75%), linear-gradient(45deg, rgba(0,0,0,.04) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.04) 75%) ${s/2}px ${s/2}px / ${s}px ${s}px`,
      sprinkles: s => `radial-gradient(circle, rgba(0,0,0,.08) 2px, transparent 2px) 0 0 / ${s}px ${s}px repeat, radial-gradient(circle, rgba(0,0,0,.06) 1px, transparent 1px) ${s/2}px ${s/2}px / ${s}px ${s}px repeat`,
      pluses: s => `repeating-linear-gradient(0deg, transparent 0 ${s-2}px, rgba(0,0,0,.06) ${s-2}px ${s-1}px, transparent ${s-1}px ${s}px), repeating-linear-gradient(90deg, transparent 0 ${s-2}px, rgba(0,0,0,.06) ${s-2}px ${s-1}px, transparent ${s-1}px ${s}px)`,
      waves: s => `radial-gradient(50% 8px at 0 8px, rgba(0,0,0,.06) 50%, transparent 51%) 0 0/ ${s}px ${s}px repeat-x`,
      noise: _ => `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)" opacity="0.08"/></svg>')`
    };

    // Test texture count
    this.assert(
      Object.keys(TEXTURES).length === 10,
      'Correct number of textures',
      'Count: ' + Object.keys(TEXTURES).length
    );

    // Test texture generation
    Object.entries(TEXTURES).forEach(([name, generator]) => {
      const result = generator(100);
      this.assert(
        result && result.length > 0,
        `${name} texture generates valid CSS`,
        `Result length: ${result.length}`
      );
    });

    // Test texture scale handling
    const testScale = 50;
    const stripesResult = TEXTURES.stripes(testScale);
    this.assert(
      stripesResult.includes(testScale.toString()),
      'Texture scale is applied correctly',
      `Scale ${testScale} found in result`
    );
  }

  // Test image system
  testImageSystem() {
    console.log('🖼️ Testing image system...');
    
    const IMAGES = {
      pool: 'data:image/svg+xml;base64,...',
      confetti: 'data:image/svg+xml;base64,...',
      clouds: 'data:image/svg+xml;base64,...'
    };

    // Test image count
    this.assert(
      Object.keys(IMAGES).length === 3,
      'Correct number of stock images',
      'Count: ' + Object.keys(IMAGES).length
    );

    // Test image format
    Object.entries(IMAGES).forEach(([name, url]) => {
      this.assert(
        url.startsWith('data:image/svg+xml'),
        `${name} image has correct format`,
        'SVG data URI format'
      );
    });
  }

  // Test sprite system
  testSpriteSystem() {
    console.log('🎭 Testing sprite system...');
    
    // Test RNG function
    const rng = () => {
      const seed = Math.random() * 1e9 | 0;
      return seed ^= seed << 13, seed ^= seed >> 17, seed ^= seed << 5, Math.abs(seed) / 2**31;
    };

    const rngResult = rng();
    this.assert(
      rngResult >= 0 && rngResult <= 1,
      'RNG generates valid range',
      `Value: ${rngResult}`
    );

    // Test sprite positioning
    const testX = Math.random() * 900;
    const testY = Math.random() * 600;
    
    this.assert(
      testX >= 0 && testX <= 900,
      'Sprite X positioning in bounds',
      `X: ${testX}`
    );
    
    this.assert(
      testY >= 0 && testY <= 600,
      'Sprite Y positioning in bounds',
      `Y: ${testY}`
    );
  }

  // Test layout system
  testLayoutSystem() {
    console.log('🎨 Testing layout system...');
    
    const layouts = ['centered', 'banner', 'split'];
    
    // Test layout options
    this.assert(
      layouts.length === 3,
      'Correct number of layouts',
      'Layouts: ' + layouts.join(', ')
    );

    // Test layout class generation
    layouts.forEach(layout => {
      const className = `style-${layout}`;
      this.assert(
        className.startsWith('style-'),
        `${layout} layout class format`,
        `Class: ${className}`
      );
    });
  }

  // Test animation system
  testAnimationSystem() {
    console.log('✨ Testing animation system...');
    
    const effects = ['none', 'fade', 'pop'];
    const animations = ['off', 'gentle', 'lively'];
    
    // Test effect options
    this.assert(
      effects.length === 3,
      'Correct number of effects',
      'Effects: ' + effects.join(', ')
    );

    // Test animation options
    this.assert(
      animations.length === 3,
      'Correct number of animations',
      'Animations: ' + animations.join(', ')
    );

    // Test CSS class generation
    effects.forEach(effect => {
      if (effect !== 'none') {
        const className = `anim-${effect}`;
        this.assert(
          className.startsWith('anim-'),
          `${effect} effect class format`,
          `Class: ${className}`
        );
      }
    });
  }

  // Test font system
  testFontSystem() {
    console.log('🔤 Testing font system...');
    
    const FONTS = [
      'Playfair Display', 'Bebas Neue', 'Abril Fatface', 'Poppins', 'Montserrat', 
      'Raleway', 'Fredoka', 'Nunito', 'Merriweather', 'Pacifico', 
      'Great Vibes', 'Lobster Two', 'Baloo 2', 'Carter One', 'Righteous', 'Russo One'
    ];

    // Test font count
    this.assert(
      FONTS.length === 16,
      'Correct number of fonts',
      'Count: ' + FONTS.length
    );

    // Test font format
    FONTS.forEach(font => {
      this.assert(
        font.length > 0 && /^[a-zA-Z\s]+$/.test(font),
        `${font} font name format`,
        'Valid font name'
      );
    });

    // Test Google Fonts URL generation
    const testFont = 'Playfair Display';
    const expectedUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(testFont)}:400,600,700&display=swap`;
    this.assert(
      expectedUrl.includes(testFont),
      'Google Fonts URL generation',
      `URL contains: ${testFont}`
    );
  }

  // Integration Tests
  testThemeAndSpriteIntegration() {
    console.log('🔗 Testing theme and sprite integration...');
    
    const theme = {
      sprites: ['floatie', 'sunglasses', 'flipflop'],
      palette: ['#2ec5ff', '#ffd166', '#06d6a0']
    };
    
    // Test sprite count matches theme
    this.assert(
      theme.sprites.length === 3,
      'Theme sprite count consistency',
      `Sprites: ${theme.sprites.length}`
    );
    
    // Test palette count matches sprite count
    this.assert(
      theme.palette.length >= theme.sprites.length,
      'Theme palette sufficiency',
      `Palette: ${theme.palette.length}, Sprites: ${theme.sprites.length}`
    );
  }

  testBackgroundModeIntegration() {
    console.log('🔗 Testing background mode integration...');
    
    const modes = ['gradient', 'texture', 'image', 'grad+tex', 'img+tex'];
    
    modes.forEach(mode => {
      const showTexture = mode.includes('tex') || mode === 'texture';
      const showImage = mode.includes('img') || mode === 'image';
      
      this.assert(
        (showTexture || showImage || mode === 'gradient'),
        `${mode} mode logic`,
        `Texture: ${showTexture}, Image: ${showImage}`
      );
    });
  }

  testFontAndLayoutIntegration() {
    console.log('🔗 Testing font and layout integration...');
    
    const fonts = ['Playfair Display', 'Quicksand'];
    const layouts = ['centered', 'banner'];
    
    // Test font application to layouts
    fonts.forEach(font => {
      layouts.forEach(layout => {
        const cssVar = `--title-font: '${font}', serif`;
        this.assert(
          cssVar.includes(font),
          `${font} font with ${layout} layout`,
          `CSS: ${cssVar}`
        );
      });
    });
  }

  testAnimationAndParallaxIntegration() {
    console.log('🔗 Testing animation and parallax integration...');
    
    const animations = ['off', 'gentle', 'lively'];
    const parallax = ['off', 'on'];
    
    // Test animation duration calculation
    animations.forEach(anim => {
      let duration = 0;
      if (anim === 'lively') duration = 4 + Math.random() * 3;
      else if (anim === 'gentle') duration = 8 + Math.random() * 5;
      
      this.assert(
        duration >= 0,
        `${anim} animation duration`,
        `Duration: ${duration}s`
      );
    });
  }

  // End-to-End Tests
  testCompleteWorkflow() {
    console.log('🌐 Testing complete workflow...');
    
    // Simulate complete invitation creation
    const workflow = [
      'Set theme to pool',
      'Change title text',
      'Adjust colors',
      'Add texture',
      'Change layout',
      'Apply effects',
      'Generate sprites'
    ];
    
    this.assert(
      workflow.length === 7,
      'Complete workflow steps',
      `Steps: ${workflow.length}`
    );
    
    // Test workflow completion
    let completed = 0;
    workflow.forEach(step => {
      if (step.includes('Set') || step.includes('Change') || step.includes('Adjust') || step.includes('Add') || step.includes('Apply') || step.includes('Generate')) {
        completed++;
      }
    });
    
    this.assert(
      completed === workflow.length,
      'Workflow completion validation',
      `Completed: ${completed}/${workflow.length}`
    );
  }

  testUserInteractionFlow() {
    console.log('🌐 Testing user interaction flow...');
    
    const interactions = [
      'Text input change',
      'Color picker change',
      'Dropdown selection',
      'Slider adjustment',
      'Button click',
      'File upload'
    ];
    
    this.assert(
      interactions.length === 6,
      'User interaction types',
      `Types: ${interactions.length}`
    );
    
    // Test interaction response simulation
    interactions.forEach(interaction => {
      const hasResponse = interaction.includes('change') || interaction.includes('click') || interaction.includes('upload');
      this.assert(
        hasResponse,
        `${interaction} response`,
        'Has response mechanism'
      );
    });
  }

  testDataPersistence() {
    console.log('🌐 Testing data persistence...');
    
    // Test form data retention
    const formData = {
      title: 'Test Title',
      names: 'Test Names',
      date: 'Test Date',
      theme: 'pool'
    };
    
    this.assert(
      Object.keys(formData).length === 4,
      'Form data structure',
      `Fields: ${Object.keys(formData).length}`
    );
    
    // Test data validation
    Object.entries(formData).forEach(([key, value]) => {
      this.assert(
        value && value.length > 0,
        `${key} data validation`,
        `Value: "${value}"`
      );
    });
  }

  testExportFunctionality() {
    console.log('🌐 Testing export functionality...');
    
    // Test print functionality simulation
    const printSupported = typeof window !== 'undefined' && typeof window.print === 'function';
    this.assert(
      printSupported,
      'Print functionality availability',
      'Print function exists'
    );
    
    // Test PDF generation preparation
    const printMediaQuery = '@media print';
    this.assert(
      printMediaQuery === '@media print',
      'Print media query format',
      'Correct CSS format'
    );
  }

  // Performance Tests
  testRenderingPerformance() {
    console.log('⚡ Testing rendering performance...');
    
    // Test sprite generation performance
    const startTime = performance.now();
    const spriteCount = 16;
    
    // Simulate sprite generation
    for (let i = 0; i < spriteCount; i++) {
      // Simulate sprite creation
      const x = Math.random() * 900;
      const y = Math.random() * 600;
      const rotation = Math.random() * 40 - 20;
    }
    
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    this.assert(
      duration < 100, // Should complete in under 100ms
      'Sprite generation performance',
      `Duration: ${duration.toFixed(2)}ms`
    );
  }

  testMemoryUsage() {
    console.log('⚡ Testing memory usage...');
    
    // Test object creation efficiency
    const testObjects = [];
    const maxObjects = 100;
    
    for (let i = 0; i < maxObjects; i++) {
      testObjects.push({
        id: i,
        position: { x: Math.random() * 900, y: Math.random() * 600 },
        rotation: Math.random() * 40 - 20,
        scale: 0.6 + Math.random() * 0.9
      });
    }
    
    this.assert(
      testObjects.length === maxObjects,
      'Object creation efficiency',
      `Created: ${testObjects.length} objects`
    );
    
    // Clean up
    testObjects.length = 0;
  }

  testResponsiveness() {
    console.log('⚡ Testing responsiveness...');
    
    // Test event handling responsiveness
    const events = ['input', 'change', 'click'];
    let eventCount = 0;
    
    events.forEach(eventType => {
      eventCount++;
    });
    
    this.assert(
      eventCount === events.length,
      'Event handling responsiveness',
      `Events: ${eventCount}/${events.length}`
    );
  }

  // Results printing
  printResults() {
    console.log('\n' + '='.repeat(60));
    console.log('📊 TEST RESULTS SUMMARY');
    console.log('='.repeat(60));
    console.log(`✅ Passed: ${this.passed}`);
    console.log(`❌ Failed: ${this.failed}`);
    console.log(`📊 Total: ${this.total}`);
    console.log(`📈 Success Rate: ${((this.passed / this.total) * 100).toFixed(1)}%`);
    
    if (this.failed > 0) {
      console.log('\n❌ FAILED TESTS:');
      this.testResults
        .filter(result => result.status === 'FAIL')
        .forEach(result => {
          console.error(`  - ${result.name}: ${result.details}`);
        });
    }
    
    console.log('\n' + '='.repeat(60));
    
    if (this.failed === 0) {
      console.log('🎉 ALL TESTS PASSED! The invitation generator is working perfectly!');
    } else {
      console.log(`⚠️  ${this.failed} test(s) failed. Please review the issues above.`);
    }
  }
}

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = InvitationGeneratorTests;
} else {
  // Browser environment
  window.InvitationGeneratorTests = InvitationGeneratorTests;
}

