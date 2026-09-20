// Ultra-Animated Two Cats Playing Custom Mouse Cursor System
// Features: Leader White Cat + Playful Violet Kitten with Pouncing, Tumbling, Paw Swatting,
// Yarn Loops, Floating Hearts, Glowing Paw Print Canvas Trails, and Interactive Hover Modes.

export function initCatCursor() {
  if (typeof window === 'undefined') return;

  // Disable on coarse touch screens for accessibility
  if (window.matchMedia('(pointer: coarse)').matches) return;

  // Master Cursor Container
  const cursorContainer = document.createElement('div');
  cursorContainer.id = 'cat-cursor-container';
  cursorContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 99999;
    overflow: hidden;
  `;

  // Canvas for trailing paw prints, star sparkles, hearts & yarn threads
  const trailCanvas = document.createElement('canvas');
  trailCanvas.id = 'cat-trail-canvas';
  trailCanvas.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  `;

  // Glowing Violet Magic Yarn Ball Pointer
  const toyElement = document.createElement('div');
  toyElement.id = 'cat-cursor-toy';
  toyElement.style.cssText = `
    position: absolute;
    width: 18px;
    height: 18px;
    top: -9px;
    left: -9px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, #F3E8FF 0%, #C084FC 50%, #7C3AED 100%);
    box-shadow: 0 0 16px #C084FC, 0 0 28px #8B5CF6, inset 0 0 4px #FFFFFF;
    pointer-events: none;
    will-change: transform;
    z-index: 35;
  `;
  // Add inner spinning yarn loops
  toyElement.innerHTML = `
    <div style="
      position: absolute;
      inset: -3px;
      border: 1.5px dashed rgba(255, 255, 255, 0.7);
      border-radius: 50%;
      animation: spinYarn 2s linear infinite;
    "></div>
  `;

  // CAT 1: Leader White Cat (Swats & Runs)
  const cat1Element = document.createElement('div');
  cat1Element.id = 'cat1-cursor';
  cat1Element.style.cssText = `
    position: absolute;
    width: 48px;
    height: 36px;
    top: -18px;
    left: -24px;
    pointer-events: none;
    will-change: transform;
    z-index: 25;
    filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.8));
  `;
  cat1Element.innerHTML = `
    <svg viewBox="0 0 64 44" width="48" height="36" class="cat1-svg">
      <!-- White Cat Body -->
      <path class="cat-body" d="M14 20 C14 13, 38 13, 44 20 C48 24, 44 30, 38 30 C28 30, 18 30, 14 26 Z" fill="#FFFFFF" />
      
      <!-- White Cat Head -->
      <path class="cat-head" d="M42 16 C42 9, 56 9, 56 16 C56 23, 44 25, 42 16 Z" fill="#FFFFFF" />
      
      <!-- Gold Inner Ears with Twitch -->
      <g class="cat-ears">
        <polygon points="44,10 48,2 51,10" fill="#FBBF24" stroke="#FFFFFF" stroke-width="1.2" />
        <polygon points="51,10 55,3 58,11" fill="#FBBF24" stroke="#FFFFFF" stroke-width="1.2" />
      </g>
      
      <!-- Cat Eyes (Glow Violet) -->
      <circle cx="50" cy="14" r="1.8" fill="#8B5CF6" />
      <circle cx="51" cy="13.5" r="0.6" fill="#FFFFFF" />
      
      <!-- Pink Nose -->
      <polygon points="55,16 57,16 56,17.5" fill="#F472B6" />
      
      <!-- Whiskers -->
      <line x1="55" y1="16" x2="63" y2="13" stroke="#CBD5E1" stroke-width="0.9" />
      <line x1="55" y1="17" x2="63" y2="19" stroke="#CBD5E1" stroke-width="0.9" />
      
      <!-- Tail -->
      <path class="cat-tail-anim" d="M14 21 C7 18, 4 9, 9 4" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" fill="none" />
      
      <!-- Paw Swatting Arm -->
      <path class="cat-swat-paw" d="M44 24 Q52 20, 58 18" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" fill="none" style="opacity: 0; transform-origin: 44px 24px;" />
      
      <!-- Running Legs -->
      <line class="cat-leg leg1-f1" x1="44" y1="28" x2="49" y2="37" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round" />
      <line class="cat-leg leg1-f2" x1="40" y1="28" x2="35" y2="37" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round" />
      <line class="cat-leg leg1-b1" x1="22" y1="28" x2="27" y2="37" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round" />
      <line class="cat-leg leg1-b2" x1="18" y1="28" x2="13" y2="37" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round" />
    </svg>
  `;

  // CAT 2: Playful Violet Kitten (Pounce & Tumble)
  const cat2Element = document.createElement('div');
  cat2Element.id = 'cat2-cursor';
  cat2Element.style.cssText = `
    position: absolute;
    width: 40px;
    height: 30px;
    top: -15px;
    left: -20px;
    pointer-events: none;
    will-change: transform;
    z-index: 20;
    filter: drop-shadow(0 0 12px rgba(192, 132, 252, 0.9));
  `;
  cat2Element.innerHTML = `
    <svg viewBox="0 0 64 44" width="40" height="30" class="cat2-svg">
      <!-- Violet Kitten Body -->
      <path class="cat-body" d="M14 20 C14 13, 38 13, 44 20 C48 24, 44 30, 38 30 C28 30, 18 30, 14 26 Z" fill="#C084FC" />
      
      <!-- Soft Lavender Chest Patch -->
      <path d="M30 22 C33 17, 41 17, 43 24 C41 28, 33 28, 30 22 Z" fill="#F3E8FF" />
      
      <!-- Kitten Head -->
      <path class="cat-head" d="M42 16 C42 9, 56 9, 56 16 C56 23, 44 25, 42 16 Z" fill="#C084FC" />
      
      <!-- Ears -->
      <g class="cat-ears">
        <polygon points="44,10 48,2 51,10" fill="#DDD6FE" stroke="#C084FC" stroke-width="1.2" />
        <polygon points="51,10 55,3 58,11" fill="#DDD6FE" stroke="#C084FC" stroke-width="1.2" />
      </g>
      
      <!-- Eyes (Sparkling White) -->
      <circle cx="50" cy="14" r="1.8" fill="#FFFFFF" />
      <circle cx="50.8" cy="13.5" r="0.7" fill="#07090E" />
      
      <!-- Nose -->
      <polygon points="55,16 57,16 56,17.5" fill="#F472B6" />
      
      <!-- Whiskers -->
      <line x1="55" y1="16" x2="62" y2="13" stroke="#E9D5FF" stroke-width="0.9" />
      <line x1="55" y1="17" x2="62" y2="19" stroke="#E9D5FF" stroke-width="0.9" />
      
      <!-- Tail -->
      <path class="cat-tail-anim" d="M14 21 C7 18, 4 9, 9 4" stroke="#C084FC" stroke-width="3.5" stroke-linecap="round" fill="none" />
      
      <!-- Legs -->
      <line class="cat-leg leg2-f1" x1="44" y1="28" x2="49" y2="37" stroke="#C084FC" stroke-width="3.2" stroke-linecap="round" />
      <line class="cat-leg leg2-f2" x1="40" y1="28" x2="35" y2="37" stroke="#C084FC" stroke-width="3.2" stroke-linecap="round" />
      <line class="cat-leg leg2-b1" x1="22" y1="28" x2="27" y2="37" stroke="#C084FC" stroke-width="3.2" stroke-linecap="round" />
      <line class="cat-leg leg2-b2" x1="18" y1="28" x2="13" y2="37" stroke="#C084FC" stroke-width="3.2" stroke-linecap="round" />
    </svg>
  `;

  // Floating Heart Element for Hyper-Hovering Mode
  const heartFloat = document.createElement('div');
  heartFloat.id = 'cat-heart-float';
  heartFloat.style.cssText = `
    position: absolute;
    font-size: 16px;
    pointer-events: none;
    opacity: 0;
    z-index: 40;
    transition: opacity 0.3s ease;
    will-change: transform;
  `;
  heartFloat.innerHTML = `💜`;

  cursorContainer.appendChild(trailCanvas);
  cursorContainer.appendChild(toyElement);
  cursorContainer.appendChild(cat1Element);
  cursorContainer.appendChild(cat2Element);
  cursorContainer.appendChild(heartFloat);
  document.body.appendChild(cursorContainer);

  // CSS Animations for Leg Sprint, Tail Wag, Ear Twitch & Swatting Paw
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spinYarn {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes tailWagFast {
      0%, 100% { transform: rotate(-20deg); transform-origin: 14px 21px; }
      50% { transform: rotate(28deg); transform-origin: 14px 21px; }
    }
    @keyframes legSprint1 {
      0% { transform: rotate(-35deg); transform-origin: 44px 28px; }
      100% { transform: rotate(35deg); transform-origin: 44px 28px; }
    }
    @keyframes legSprint2 {
      0% { transform: rotate(35deg); transform-origin: 40px 28px; }
      100% { transform: rotate(-35deg); transform-origin: 40px 28px; }
    }
    @keyframes earTwitch {
      0%, 90%, 100% { transform: rotate(0deg); transform-origin: 50px 10px; }
      95% { transform: rotate(-12deg); transform-origin: 50px 10px; }
    }
    @keyframes pawSwat {
      0%, 100% { transform: rotate(0deg); opacity: 0; }
      50% { transform: rotate(-45deg); opacity: 1; }
    }

    .cat-tail-anim { animation: tailWagFast 0.35s infinite ease-in-out; }
    .cat-ears { animation: earTwitch 3s infinite ease-in-out; }
    .leg1-f1, .leg1-b2, .leg2-f1, .leg2-b2 { animation: legSprint1 0.12s infinite alternate ease-in-out; }
    .leg1-f2, .leg1-b1, .leg2-f2, .leg2-b1 { animation: legSprint2 0.12s infinite alternate ease-in-out; }
    .is-swatting .cat-swat-paw { animation: pawSwat 0.4s ease-in-out; }

    body, a, button, input, textarea, select, label, [role="button"] {
      cursor: none !important;
    }
  `;
  document.head.appendChild(style);

  // Setup Canvas Context
  const ctx = trailCanvas.getContext('2d');
  let width = (trailCanvas.width = window.innerWidth);
  let height = (trailCanvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = trailCanvas.width = window.innerWidth;
    height = trailCanvas.height = window.innerHeight;
  });

  // Mouse & Cats Physics State
  let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let cat1 = { x: window.innerWidth / 2, y: window.innerHeight / 2, angle: 0, vx: 0, vy: 0, swatTimer: 0 };
  let cat2 = { x: window.innerWidth / 2 - 40, y: window.innerHeight / 2 - 40, angle: 0, tumbleAngle: 0, pounceHeight: 0 };

  let particles = [];
  let lastPawTime = 0;
  let isHoveringInteractive = false;

  // Track Mouse Movement & Hover Targets
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    // Check if target is interactive (link, button, glass card)
    const target = e.target;
    if (target && target.closest) {
      isHoveringInteractive = !!target.closest('a, button, input, textarea, .brutal-card, .bento-card, .about-card, [role="button"]');
    }
  });

  // Explosive Click Reaction
  window.addEventListener('click', (e) => {
    // Add burst of paw prints, stars and hearts
    for (let i = 0; i < 12; i++) {
      const angle = (Math.PI * 2 * i) / 12;
      const speed = Math.random() * 60 + 20;
      particles.push({
        x: e.clientX + Math.cos(angle) * speed,
        y: e.clientY + Math.sin(angle) * speed,
        angle: angle,
        alpha: 1.0,
        scale: Math.random() * 0.5 + 0.8,
        type: i % 3 === 0 ? 'heart' : i % 2 === 0 ? 'sparkle' : 'paw'
      });
    }
  });

  // Add Paw Prints, Stars, & Hearts to Particle Canvas
  function addTrailParticle(x, y, angle, type = 'paw') {
    const now = Date.now();
    if (now - lastPawTime < 60) return;
    lastPawTime = now;

    particles.push({
      x,
      y,
      angle,
      alpha: 0.9,
      scale: Math.random() * 0.4 + 0.8,
      type
    });

    if (particles.length > 50) particles.shift();
  }

  function drawParticle(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);
    ctx.globalAlpha = p.alpha;
    ctx.scale(p.scale, p.scale);

    if (p.type === 'paw') {
      ctx.fillStyle = '#C084FC';
      ctx.shadowColor = '#8B5CF6';
      ctx.shadowBlur = 12;

      // Main Paw Pad
      ctx.beginPath();
      ctx.ellipse(0, 2, 5, 4, 0, 0, Math.PI * 2);
      ctx.fill();

      // Toes
      const toes = [-5, -2.5, 2.5, 5];
      const toeY = [-3.5, -6, -6, -3.5];
      toes.forEach((tx, i) => {
        ctx.beginPath();
        ctx.arc(tx, toeY[i], 1.8, 0, Math.PI * 2);
        ctx.fill();
      });
    } else if (p.type === 'heart') {
      ctx.fillStyle = '#F472B6';
      ctx.shadowColor = '#EC4899';
      ctx.shadowBlur = 14;
      ctx.font = '14px sans-serif';
      ctx.fillText('💜', -7, 5);
    } else {
      // Star Sparkle
      ctx.fillStyle = '#FDE047';
      ctx.shadowColor = '#EAB308';
      ctx.shadowBlur = 14;

      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        ctx.rotate(Math.PI / 4);
        ctx.lineTo(0, 6);
        ctx.rotate(Math.PI / 4);
        ctx.lineTo(0, 2);
      }
      ctx.fill();
    }

    ctx.restore();
  }

  let animationFrameId;

  function loop() {
    ctx.clearRect(0, 0, width, height);

    // 1. Render Magical Yarn Ball / Toy at Mouse Cursor
    toyElement.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) scale(${isHoveringInteractive ? 1.3 : 1})`;

    // Draw connecting glowing yarn line between Yarn Ball & White Cat
    ctx.save();
    ctx.strokeStyle = 'rgba(192, 132, 252, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
    ctx.quadraticCurveTo((mouse.x + cat1.x) / 2, (mouse.y + cat1.y) / 2 - 20, cat1.x, cat1.y);
    ctx.stroke();
    ctx.restore();

    // --- 2. CAT 1 (White Leader Cat) Physics ---
    const dx1 = mouse.x - cat1.x;
    const dy1 = mouse.y - cat1.y;
    const dist1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);

    // Spring interpolation towards mouse
    const ease1 = isHoveringInteractive ? 0.2 : 0.14;
    cat1.x += dx1 * ease1;
    cat1.y += dy1 * ease1;

    if (dist1 > 2) {
      const targetAngle1 = Math.atan2(dy1, dx1);
      let diff1 = targetAngle1 - cat1.angle;
      while (diff1 < -Math.PI) diff1 += Math.PI * 2;
      while (diff1 > Math.PI) diff1 -= Math.PI * 2;
      cat1.angle += diff1 * 0.22;

      if (dist1 > 8) {
        addTrailParticle(cat1.x, cat1.y, cat1.angle, 'paw');
      }
    }

    // Trigger Paw Swatting when close to yarn ball or hovering!
    if (dist1 < 35 || isHoveringInteractive) {
      cat1Element.classList.add('is-swatting');
    } else {
      cat1Element.classList.remove('is-swatting');
    }

    // --- 3. CAT 2 (Playful Violet Kitten) Pounce & Orbit Physics ---
    const time = Date.now() * 0.0035;

    // Violet Kitten orbits around White Cat in playful tumbling loops
    const orbitSpeed = isHoveringInteractive ? 3.5 : 2.0;
    const radiusX = 42 + Math.sin(time * 2.5) * 18;
    const radiusY = 32 + Math.cos(time * 2.5) * 14;

    const orbitTargetX = cat1.x + Math.cos(time * orbitSpeed) * radiusX;
    const orbitTargetY = cat1.y + Math.sin(time * orbitSpeed) * radiusY;

    const dx2 = orbitTargetX - cat2.x;
    const dy2 = orbitTargetY - cat2.y;
    const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

    cat2.x += dx2 * 0.16;
    cat2.y += dy2 * 0.16;

    // Playful Pounce / Tumbling Loop calculation
    if (dist2 > 2) {
      const targetAngle2 = Math.atan2(dy2, dx2);
      let diff2 = targetAngle2 - cat2.angle;
      while (diff2 < -Math.PI) diff2 += Math.PI * 2;
      while (diff2 > Math.PI) diff2 -= Math.PI * 2;
      cat2.angle += diff2 * 0.26;

      // Random playful pounce heights
      cat2.pounceHeight = Math.abs(Math.sin(time * 4)) * 12;

      if (Math.random() < 0.35) {
        addTrailParticle(cat2.x, cat2.y, cat2.angle, isHoveringInteractive ? 'heart' : 'sparkle');
      }
    }

    // --- 4. Apply 3D Transforms ---
    cat1Element.style.transform = `translate3d(${cat1.x}px, ${cat1.y}px, 0) rotate(${cat1.angle}rad) scale(${isHoveringInteractive ? 1.15 : 1})`;
    
    // Cat 2 includes vertical pounce offset
    cat2Element.style.transform = `translate3d(${cat2.x}px, ${cat2.y - cat2.pounceHeight}px, 0) rotate(${cat2.angle}rad) scale(${isHoveringInteractive ? 1.2 : 1})`;

    // Heart Float update on hover
    if (isHoveringInteractive) {
      heartFloat.style.opacity = '1';
      heartFloat.style.transform = `translate3d(${cat2.x + 10}px, ${cat2.y - 30}px, 0) scale(${1 + Math.sin(time * 8) * 0.2})`;
    } else {
      heartFloat.style.opacity = '0';
    }

    // --- 5. Draw Particle Trail Canvas ---
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.alpha -= 0.015;
      if (p.alpha <= 0) {
        particles.splice(i, 1);
      } else {
        drawParticle(p);
      }
    }

    animationFrameId = requestAnimationFrame(loop);
  }

  loop();

  return () => {
    cancelAnimationFrame(animationFrameId);
    if (cursorContainer.parentNode) {
      cursorContainer.parentNode.removeChild(cursorContainer);
    }
  };
}
