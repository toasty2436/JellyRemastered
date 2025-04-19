// === PARTICLES (BUBBLES) CONFIG ===
particlesJS('particles-js', {
    particles: {
      number: { value: 40, density: { enable: true, value_area: 800 } },
      color: { value: '#ffffff' },
      shape: { type: 'circle' },
      opacity: {
        value: 0.1,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0.05, sync: false }
      },
      size: {
        value: 10,
        random: true,
        anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
      },
      line_linked: { enable: false },
      move: {
        enable: true,
        speed: 0.8,
        direction: 'top',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: false },
        onclick: { enable: false },
        resize: true
      }
    },
    retina_detect: true
  });
  
  // === RANDOM FISH & JELLYFISH SPAWNER ===
  
  const fishImages = [
    'https://cdn-icons-png.flaticon.com/512/3075/3075494.png', // fish1
    'https://cdn-icons-png.flaticon.com/512/1627/1627756.png', // fish2
    'logo.png', // jellyfish1
    'https://cdn-icons-png.flaticon.com/512/10560/10560058.png', // jellyfish2
    'https://cdn-icons-png.flaticon.com/512/11642/11642439.png', // turtle
    'https://cdn-icons-png.flaticon.com/512/3937/3937483.png'    // tiny fish
  ];
  
  const fishContainer = document.createElement('div');
  fishContainer.className = 'fish-container';
  document.body.appendChild(fishContainer);
  
  const numberOfFish = 8;
  
  for (let i = 0; i < numberOfFish; i++) {
    const fish = document.createElement('img');
    const src = fishImages[Math.floor(Math.random() * fishImages.length)];
    fish.src = src;
  
    const isJelly = src.includes('logo') || src.includes('10560058'); // check for multiple jellyfish
    const duration = Math.floor(Math.random() * 15) + 15;
    const delay = Math.floor(Math.random() * 10);
  
    if (isJelly) {
      // Bias jellyfish toward left or right edges
      const side = Math.random() < 0.5 ? 'left' : 'right';
  
      if (side === 'left') {
        const leftOffset = Math.floor(Math.random() * 5) + 1; // 1% to 5%
        fish.style.left = `${leftOffset}%`;
      } else {
        const rightOffset = Math.floor(Math.random() * 10) + 5; // 5% to 15%
        fish.style.left = `${100 - rightOffset}%`;
      }
  
      fish.style.top = '100%';
      fish.style.animation = `driftUp ${duration}s ease-in-out infinite`;
      fish.style.transform = 'scale(0.9)';
    } else {
      const topPercent = Math.floor(Math.random() * 80) + 10;
      fish.style.top = `${topPercent}%`;
      fish.style.left = `-100px`;
      fish.style.animation = `swim ${duration}s linear infinite`;
    }
  
    fish.style.width = `40px`;
    fish.style.opacity = 0.6;
    fish.style.position = 'absolute';
    fish.style.animationDelay = `${delay}s`;
    fish.className = 'fish';
    fishContainer.appendChild(fish);
  }
  
  // === STYLES ===
  const style = document.createElement('style');
  style.innerHTML = `
  .fish-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    pointer-events: none;
  }
  
  @keyframes swim {
    0% { transform: translateX(0) scaleX(1); }
    100% { transform: translateX(110vw) scaleX(1); }
  }
  
  @keyframes driftUp {
    0%   { transform: translateY(0) rotate(0deg); opacity: 0.3; }
    50%  { transform: translateY(-50vh) rotate(3deg); opacity: 0.6; }
    100% { transform: translateY(-100vh) rotate(-2deg); opacity: 0.3; }
  }
  `;
  document.head.appendChild(style);
  
  // === CORAL FOOTER (LEFT + RIGHT) ===
  const footer = document.createElement('footer');
  footer.className = 'coral-footer';
  
  const coralImages = [
    'https://static.vecteezy.com/system/resources/previews/024/400/208/non_2x/coral-under-the-sea-clip-art-element-transparent-background-free-png.png',
    'https://static.vecteezy.com/system/resources/previews/024/400/208/non_2x/coral-under-the-sea-clip-art-element-transparent-background-free-png.png'
  ];
  
  const coralWrapper = document.createElement('div');
  coralWrapper.className = 'coral-wrapper spaced';
  
  coralImages.forEach((src) => {
    const coral = document.createElement('img');
    coral.src = src;
    coral.className = 'coral';
    coralWrapper.appendChild(coral);
  });
  
  footer.appendChild(coralWrapper);
  document.body.appendChild(footer);
  
  const coralFooterStyle = document.createElement('style');
  coralFooterStyle.innerHTML = `
  .coral-footer {
    position: relative;
    margin-top: 100px;
    padding: 0;
    padding-bottom: 0;
    text-align: center;
    background: transparent;
    z-index: 1;
    overflow: visible;
  }
  
  .coral-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    pointer-events: none;
    width: 100%;
    max-width: 100%;
    padding: 0 40px;
    box-sizing: border-box;
  }
  
  .coral {
    width: 80px;
    height: auto;
    opacity: 0.9;
    display: block;
    object-fit: cover;
    margin-bottom: -8px;
  }
  `;
  document.head.appendChild(coralFooterStyle);
  
  // === PARTICLES STYLE FIX ===
  const particlesStyle = document.createElement('style');
  particlesStyle.innerHTML = `
  #particles-js {
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none;
  }
  `;
  document.head.appendChild(particlesStyle);
  