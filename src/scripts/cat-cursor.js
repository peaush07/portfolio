// Premium Animated White Cat Custom Mouse Cursor with Dynamic Sitting & Running States
export function initCatCursor() {
  if (typeof window === 'undefined') return;

  // Skip custom cursor on touch/mobile devices for maximum native touch performance
  if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768) return;

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
    contain: strict;
  `;

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

  // Pointer tip indicator dot
  const pointerDot = document.createElement('div');
  pointerDot.id = 'cat-cursor-pointer';

  const catElement = document.createElement('div');
  catElement.id = 'cat-cursor-follower';
  catElement.className = 'cat-state-run';

  catElement.innerHTML = `
    <div class="cat-svg-wrapper cat-run-wrapper">
      <svg class="cat-svg" viewBox="0 0 64 40" width="48" height="32">
        <!-- Tail -->
        <path class="cat-tail-run" d="M12 18 C6 14, 4 6, 8 3" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" fill="none" />
        <!-- Body -->
        <path d="M14 18 C14 11, 38 11, 44 17 C48 21, 44 27, 38 27 C28 27, 18 27, 14 23 Z" fill="#FFFFFF" />
        <!-- Head -->
        <path d="M42 14 C42 8, 54 8, 54 14 C54 19, 44 21, 42 14 Z" fill="#FFFFFF" />
        <!-- Ears -->
        <polygon points="44,9 48,2 50,9" fill="#A855F7" stroke="#FFFFFF" stroke-width="1" />
        <polygon points="50,9 54,3 56,10" fill="#EC4899" stroke="#FFFFFF" stroke-width="1" />
        <!-- Eyes & Nose -->
        <circle cx="50" cy="12" r="1.8" fill="#8B5CF6" />
        <circle cx="50.6" cy="11.4" r="0.6" fill="#FFFFFF" />
        <circle cx="54" cy="14" r="1" fill="#F472B6" />
        <!-- Whiskers -->
        <line x1="53" y1="13" x2="60" y2="11" stroke="#CBD5E1" stroke-width="1" />
        <line x1="53" y1="15" x2="60" y2="16" stroke="#CBD5E1" stroke-width="1" />
        <!-- Legs -->
        <line class="cat-leg cursor-leg-f1" x1="44" y1="25" x2="48" y2="34" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" />
        <line class="cat-leg cursor-leg-f2" x1="40" y1="25" x2="36" y2="34" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" />
        <line class="cat-leg cursor-leg-b1" x1="22" y1="25" x2="26" y2="34" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" />
        <line class="cat-leg cursor-leg-b2" x1="18" y1="25" x2="14" y2="34" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" />
      </svg>
    </div>
    <div class="cat-svg-wrapper cat-sit-wrapper">
      <svg class="cat-svg" viewBox="0 0 44 54" width="40" height="48">
        <!-- Tail -->
        <path class="cat-tail-sit" d="M12 44 C 2 44, 0 32, 8 28" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" fill="none" />
        <!-- Haunches -->
        <ellipse cx="14" cy="38" rx="8" ry="10" fill="#F1F5F9" />
        <ellipse cx="30" cy="38" rx="8" ry="10" fill="#F1F5F9" />
        <!-- Main Body -->
        <path d="M14 22 C14 16, 30 16, 30 22 L32 40 C32 46, 12 46, 12 40 Z" fill="#FFFFFF" />
        <!-- Front Paws -->
        <rect x="16" y="32" width="4" height="12" rx="2" fill="#F8FAFC" />
        <rect x="24" y="32" width="4" height="12" rx="2" fill="#F8FAFC" />
        <ellipse cx="18" cy="43" rx="2.5" ry="1.5" fill="#FFFFFF" />
        <ellipse cx="26" cy="43" rx="2.5" ry="1.5" fill="#FFFFFF" />
        <!-- Head -->
        <circle cx="22" cy="15" r="11" fill="#FFFFFF" />
        <!-- Ears -->
        <polygon class="cat-ear-l" points="13,8 15,0 20,7" fill="#A855F7" stroke="#FFFFFF" stroke-width="1" />
        <polygon class="cat-ear-r" points="24,7 29,0 31,8" fill="#EC4899" stroke="#FFFFFF" stroke-width="1" />
        <!-- Eyes -->
        <circle cx="17" cy="14" r="2" fill="#8B5CF6" />
        <circle cx="17.7" cy="13.3" r="0.7" fill="#FFFFFF" />
        <circle cx="27" cy="14" r="2" fill="#8B5CF6" />
        <circle cx="27.7" cy="13.3" r="0.7" fill="#FFFFFF" />
        <!-- Nose & Mouth -->
        <polygon points="21,17 23,17 22,18.5" fill="#F472B6" />
        <path d="M20 19.5 Q22 21 24 19.5" stroke="#94A3B8" stroke-width="1" fill="none" stroke-linecap="round" />
        <!-- Whiskers -->
        <line x1="13" y1="16" x2="6" y2="14" stroke="#CBD5E1" stroke-width="1" />
        <line x1="13" y1="18" x2="6" y2="19" stroke="#CBD5E1" stroke-width="1" />
        <line x1="31" y1="16" x2="38" y2="14" stroke="#CBD5E1" stroke-width="1" />
        <line x1="31" y1="18" x2="38" y2="19" stroke="#CBD5E1" stroke-width="1" />
      </svg>
    </div>
  `;

  cursorContainer.appendChild(trailCanvas);
  cursorContainer.appendChild(pointerDot);
  cursorContainer.appendChild(catElement);
  document.body.appendChild(cursorContainer);

  const style = document.createElement('style');
  style.id = 'cat-cursor-styles';
  style.textContent = `
    #cat-cursor-follower {
      position: absolute;
      width: 48px;
      height: 48px;
      top: -24px;
      left: -24px;
      pointer-events: none;
      will-change: transform;
      transform: translateZ(0);
      filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.5));
    }

    #cat-cursor-pointer {
      position: absolute;
      width: 8px;
      height: 8px;
      top: -4px;
      left: -4px;
      border-radius: 50%;
      background: #C084FC;
      box-shadow: 0 0 10px #C084FC, 0 0 18px #8B5CF6;
      pointer-events: none;
      will-change: transform;
      transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.2s ease;
      z-index: 100000;
    }

    #cat-cursor-pointer.is-hovering {
      transform: scale(1.75);
      background: #EC4899;
      box-shadow: 0 0 12px #EC4899, 0 0 22px #F472B6;
    }

    .cat-svg-wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .cat-run-wrapper {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    .cat-sit-wrapper {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.7);
    }

    .cat-state-sit .cat-run-wrapper {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.7);
    }

    .cat-state-sit .cat-sit-wrapper {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    @keyframes cursorTailWag {
      0%, 100% { transform: rotate(-12deg); transform-origin: 12px 18px; }
      50% { transform: rotate(18deg); transform-origin: 12px 18px; }
    }

    @keyframes cursorTailSway {
      0%, 100% { transform: rotate(-5deg); transform-origin: 12px 44px; }
      50% { transform: rotate(8deg); transform-origin: 12px 44px; }
    }

    @keyframes cursorEarTwitch {
      0%, 90%, 100% { transform: rotate(0deg); }
      95% { transform: rotate(-8deg); transform-origin: 15px 7px; }
    }

    @keyframes cursorLegRun1 {
      0% { transform: rotate(-28deg); transform-origin: 44px 25px; }
      100% { transform: rotate(28deg); transform-origin: 44px 25px; }
    }

    @keyframes cursorLegRun2 {
      0% { transform: rotate(28deg); transform-origin: 40px 25px; }
      100% { transform: rotate(-28deg); transform-origin: 40px 25px; }
    }

    .cat-tail-run { animation: cursorTailWag 0.5s infinite ease-in-out; }
    .cat-tail-sit { animation: cursorTailSway 2s infinite ease-in-out; }
    .cat-ear-l { animation: cursorEarTwitch 4s infinite ease-in-out; }
    .cursor-leg-f1, .cursor-leg-b2 { animation: cursorLegRun1 0.15s infinite alternate ease-in-out; }
    .cursor-leg-f2, .cursor-leg-b1 { animation: cursorLegRun2 0.15s infinite alternate ease-in-out; }

    body, a, button, input, textarea, select, label, [role="button"] {
      cursor: none !important;
    }
  `;
  document.head.appendChild(style);

  const ctx = trailCanvas.getContext('2d', { alpha: true });
  let width = (trailCanvas.width = window.innerWidth);
  let height = (trailCanvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = trailCanvas.width = window.innerWidth;
    height = trailCanvas.height = window.innerHeight;
  }, { passive: true });

  let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let pointerPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let catPos = { x: window.innerWidth / 2, y: window.innerHeight / 2, angle: 0 };
  let paws = [];
  let lastPawTime = 0;
  let lastMouseMoveTime = Date.now();
  let isSitting = false;

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    lastMouseMoveTime = Date.now();
  }, { passive: true });

  // Hover detection for interactive items
  document.addEventListener('mouseover', (e) => {
    const target = e.target;
    if (target && target.closest && target.closest('a, button, input, textarea, select, [role="button"], .glass-panel, .project-card, .interactive-hover')) {
      pointerDot.classList.add('is-hovering');
    } else {
      pointerDot.classList.remove('is-hovering');
    }
  }, { passive: true });

  function addPawPrint(x, y, angle) {
    if (isSitting) return;
    const now = Date.now();
    if (now - lastPawTime < 130) return;
    lastPawTime = now;

    paws.push({ x, y, angle, alpha: 0.75 });
    if (paws.length > 16) paws.shift();
  }

  function drawPawPrint(paw) {
    ctx.save();
    ctx.translate(paw.x, paw.y);
    ctx.rotate(paw.angle);
    ctx.globalAlpha = paw.alpha;

    ctx.fillStyle = '#C084FC';
    ctx.beginPath();
    ctx.ellipse(0, 2, 4, 3, 0, 0, Math.PI * 2);
    ctx.fill();

    const toes = [-4, -1.8, 1.8, 4];
    const toeY = [-2.8, -5, -5, -2.8];
    toes.forEach((tx, i) => {
      ctx.beginPath();
      ctx.arc(tx, toeY[i], 1.4, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.restore();
  }

  let animationFrameId;

  function loop() {
    ctx.clearRect(0, 0, width, height);

    // Smooth pointer dot movement (ultra tight lerp)
    pointerPos.x += (mouse.x - pointerPos.x) * 0.7;
    pointerPos.y += (mouse.y - pointerPos.y) * 0.7;
    pointerDot.style.transform = `translate3d(${pointerPos.x}px, ${pointerPos.y}px, 0)`;

    // Cat follower positioning
    const dx = mouse.x - catPos.x;
    const dy = mouse.y - catPos.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const timeSinceMove = Date.now() - lastMouseMoveTime;

    // Transition to sitting pose when stationary
    if (dist < 4 && timeSinceMove > 300) {
      if (!isSitting) {
        isSitting = true;
        catElement.className = 'cat-state-sit';
      }
    } else if (dist > 6 || timeSinceMove < 150) {
      if (isSitting) {
        isSitting = false;
        catElement.className = 'cat-state-run';
      }
    }

    if (!isSitting) {
      // Move cat towards mouse position smoothly
      catPos.x += dx * 0.18;
      catPos.y += dy * 0.18;

      if (dist > 3) {
        const targetAngle = Math.atan2(dy, dx);
        let diff = targetAngle - catPos.angle;

        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;

        catPos.angle += diff * 0.22;

        if (dist > 12) {
          addPawPrint(catPos.x, catPos.y, catPos.angle);
        }
      }
    } else {
      // Sitting posture: smoothly settle near mouse offset and orient upright (0 rad)
      catPos.x += (mouse.x + 12 - catPos.x) * 0.15;
      catPos.y += (mouse.y + 12 - catPos.y) * 0.15;

      let diff = 0 - catPos.angle;
      while (diff < -Math.PI) diff += Math.PI * 2;
      while (diff > Math.PI) diff -= Math.PI * 2;
      catPos.angle += diff * 0.15;
    }

    catElement.style.transform = `translate3d(${catPos.x}px, ${catPos.y}px, 0) rotate(${catPos.angle}rad)`;

    // Render & fade paw prints
    for (let i = paws.length - 1; i >= 0; i--) {
      const paw = paws[i];
      paw.alpha -= 0.025;
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

