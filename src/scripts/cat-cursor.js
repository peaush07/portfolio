// Cute Animated White Cat Custom Mouse Cursor with Paw Print Trails
export function initCatCursor() {
  if (typeof window === 'undefined') return;

  // Check if touch device, skip custom cursor on touch
  if (window.matchMedia('(pointer: coarse)').matches) return;

  // Create cursor container
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

  // Canvas for trailing glowing violet paw prints
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

  // White Cat Follower SVG Element
  const catElement = document.createElement('div');
  catElement.id = 'cat-cursor-follower';
  catElement.style.cssText = `
    position: absolute;
    width: 44px;
    height: 32px;
    top: -16px;
    left: -22px;
    pointer-events: none;
    will-change: transform;
    transition: opacity 0.3s ease;
    filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.7));
  `;

  catElement.innerHTML = `
    <svg viewBox="0 0 64 40" width="44" height="32">
      <!-- White Cat Body -->
      <path d="M14 18 C14 12, 38 12, 44 18 C48 22, 44 28, 38 28 C28 28, 18 28, 14 24 Z" fill="#FFFFFF" />
      <!-- White Cat Head -->
      <path d="M42 14 C42 8, 54 8, 54 14 C54 20, 44 22, 42 14 Z" fill="#FFFFFF" />
      <!-- Gold Ears -->
      <polygon points="44,9 48,2 50,9" fill="#FBBF24" stroke="#FFFFFF" stroke-width="1" />
      <polygon points="50,9 54,3 56,10" fill="#FBBF24" stroke="#FFFFFF" stroke-width="1" />
      <!-- Cat Eye (Glow Violet) -->
      <circle cx="50" cy="12" r="1.5" fill="#8B5CF6" />
      <!-- Pink Nose -->
      <circle cx="54" cy="14" r="1" fill="#F472B6" />
      <!-- Cute Whiskers -->
      <line x1="53" y1="14" x2="60" y2="12" stroke="#CBD5E1" stroke-width="0.8" />
      <line x1="53" y1="15" x2="60" y2="16" stroke="#CBD5E1" stroke-width="0.8" />
      <!-- White Cat Tail -->
      <path class="cat-cursor-tail" d="M14 19 C8 17, 6 9, 10 5" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" fill="none" />
      <!-- Running Legs -->
      <line class="cat-leg cursor-leg-f1" x1="44" y1="26" x2="48" y2="34" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" />
      <line class="cat-leg cursor-leg-f2" x1="40" y1="26" x2="36" y2="34" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" />
      <line class="cat-leg cursor-leg-b1" x1="22" y1="26" x2="26" y2="34" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" />
      <line class="cat-leg cursor-leg-b2" x1="18" y1="26" x2="14" y2="34" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" />
    </svg>
  `;

  cursorContainer.appendChild(trailCanvas);
  cursorContainer.appendChild(catElement);
  document.body.appendChild(cursorContainer);

  // Keyframes for Tail Wag & Leg Sprint Animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes cursorTailWag {
      0%, 100% { transform: rotate(-10deg); transform-origin: 14px 19px; }
      50% { transform: rotate(15deg); transform-origin: 14px 19px; }
    }
    @keyframes cursorLegRun1 {
      0% { transform: rotate(-25deg); transform-origin: 44px 26px; }
      100% { transform: rotate(25deg); transform-origin: 44px 26px; }
    }
    @keyframes cursorLegRun2 {
      0% { transform: rotate(25deg); transform-origin: 40px 26px; }
      100% { transform: rotate(-25deg); transform-origin: 40px 26px; }
    }
    .cat-cursor-tail { animation: cursorTailWag 0.6s infinite ease-in-out; }
    .cursor-leg-f1, .cursor-leg-b2 { animation: cursorLegRun1 0.16s infinite alternate ease-in-out; }
    .cursor-leg-f2, .cursor-leg-b1 { animation: cursorLegRun2 0.16s infinite alternate ease-in-out; }
    
    body, a, button, input, textarea, select, label, [role="button"] {
      cursor: none !important;
    }
  `;
  document.head.appendChild(style);

  // Setup trail canvas
  const ctx = trailCanvas.getContext('2d');
  let width = (trailCanvas.width = window.innerWidth);
  let height = (trailCanvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = trailCanvas.width = window.innerWidth;
    height = trailCanvas.height = window.innerHeight;
  });

  // Position state
  let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let catPos = { x: window.innerWidth / 2, y: window.innerHeight / 2, angle: 0 };
  let paws = [];
  let lastPawTime = 0;

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // Paw Print particle generator
  function addPawPrint(x, y, angle) {
    const now = Date.now();
    if (now - lastPawTime < 110) return;
    lastPawTime = now;

    paws.push({
      x,
      y,
      angle,
      alpha: 0.8
    });

    if (paws.length > 30) paws.shift();
  }

  function drawPawPrint(paw) {
    ctx.save();
    ctx.translate(paw.x, paw.y);
    ctx.rotate(paw.angle);
    ctx.globalAlpha = paw.alpha;

    // Glowing Violet Paw Print
    ctx.fillStyle = '#C084FC';
    ctx.shadowColor = '#8B5CF6';
    ctx.shadowBlur = 10;

    // Main Pad
    ctx.beginPath();
    ctx.ellipse(0, 2, 4.5, 3.5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Toe Dots
    const toes = [-4.5, -2, 2, 4.5];
    const toeY = [-3, -5.5, -5.5, -3];
    toes.forEach((tx, i) => {
      ctx.beginPath();
      ctx.arc(tx, toeY[i], 1.6, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.restore();
  }

  let animationFrameId;

  function loop() {
    ctx.clearRect(0, 0, width, height);

    // Smooth movement calculation towards mouse
    const dx = mouse.x - catPos.x;
    const dy = mouse.y - catPos.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    catPos.x += dx * 0.16;
    catPos.y += dy * 0.16;

    if (dist > 2) {
      const targetAngle = Math.atan2(dy, dx);
      let diff = targetAngle - catPos.angle;

      while (diff < -Math.PI) diff += Math.PI * 2;
      while (diff > Math.PI) diff -= Math.PI * 2;

      catPos.angle += diff * 0.2;

      if (dist > 8) {
        addPawPrint(catPos.x, catPos.y, catPos.angle);
      }
    }

    // Apply transform
    catElement.style.transform = `translate3d(${catPos.x}px, ${catPos.y}px, 0) rotate(${catPos.angle}rad)`;

    // Draw and fade paw print trail
    for (let i = paws.length - 1; i >= 0; i--) {
      const paw = paws[i];
      paw.alpha -= 0.016;
      if (paw.alpha <= 0) {
        paws.splice(i, 1);
      } else {
        drawPawPrint(paw);
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
