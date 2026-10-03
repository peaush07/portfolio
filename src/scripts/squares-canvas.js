// High Performance 120Hz Cyber Grid Canvas with Adaptive Mobile Throttling & Batched Draw Calls

export function initAmbientSquaresCanvas(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
  let width = 0, height = 0;
  let dpr = 1;
  let animationFrameId;

  const isTouchDevice = typeof window !== 'undefined' && (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
  const squareSize = isTouchDevice ? 64 : 52;
  const speedX = 0.35;
  const speedY = 0.35;

  let gridOffsetX = 0;
  let gridOffsetY = 0;

  let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
  let ripples = [];

  // Floating Cyber Constellation Particles (Adaptive Count for Mobile vs Desktop)
  const numParticles = isTouchDevice ? 12 : 24;
  const particles = [];

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, isTouchDevice ? 1.25 : 1.5);
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(dpr, dpr);

    particles.length = 0;
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.8 + 1.2,
        alpha: Math.random() * 0.4 + 0.3
      });
    }
  }

  window.addEventListener('resize', resize, { passive: true });
  resize();

  if (!isTouchDevice) {
    window.addEventListener('mousemove', (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    }, { passive: true });

    window.addEventListener('click', (e) => {
      if (ripples.length < 5) {
        ripples.push({
          x: e.clientX,
          y: e.clientY,
          radius: 10,
          maxRadius: 240,
          alpha: 0.8
        });
      }
    }, { passive: true });
  }

  let isPaused = false;
  document.addEventListener('visibilitychange', () => {
    isPaused = document.hidden;
    if (!isPaused) draw();
  });

  function draw() {
    if (isPaused) return;

    // Smooth mouse target interpolation
    if (!isTouchDevice && mouse.targetX > 0) {
      mouse.x += (mouse.targetX - mouse.x) * 0.16;
      mouse.y += (mouse.targetY - mouse.y) * 0.16;
    }

    // Drifting offsets
    gridOffsetX = (gridOffsetX + speedX) % squareSize;
    gridOffsetY = (gridOffsetY + speedY) % squareSize;

    ctx.clearRect(0, 0, width, height);

    // --- 1. Draw Shockwave Ripples ---
    for (let i = ripples.length - 1; i >= 0; i--) {
      const r = ripples[i];
      r.radius += 8;
      r.alpha = (1 - r.radius / r.maxRadius) * 0.8;

      if (r.radius >= r.maxRadius) {
        ripples.splice(i, 1);
      } else {
        ctx.strokeStyle = `rgba(192, 132, 252, ${r.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    // --- 2. BATCHED GRID DRAWING ---
    ctx.strokeStyle = 'rgba(167, 139, 250, 0.12)';
    ctx.lineWidth = 1;
    ctx.beginPath();

    const startX = -squareSize + gridOffsetX;
    const startY = -squareSize + gridOffsetY;

    for (let x = startX; x < width + squareSize; x += squareSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }
    for (let y = startY; y < height + squareSize; y += squareSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
    ctx.stroke();

    // --- 3. Targeted Mouse Hover Glow (Desktop Only) ---
    if (!isTouchDevice && mouse.x > 0 && mouse.y > 0) {
      const maxHoverDist = 200;
      const startCol = Math.max(0, Math.floor((mouse.x - maxHoverDist) / squareSize));
      const endCol = Math.min(Math.ceil(width / squareSize), Math.ceil((mouse.x + maxHoverDist) / squareSize));
      const startRow = Math.max(0, Math.floor((mouse.y - maxHoverDist) / squareSize));
      const endRow = Math.min(Math.ceil(height / squareSize), Math.ceil((mouse.y + maxHoverDist) / squareSize));

      for (let i = startCol; i <= endCol; i++) {
        for (let j = startRow; j <= endRow; j++) {
          const gx = i * squareSize + gridOffsetX;
          const gy = j * squareSize + gridOffsetY;

          const dx = mouse.x - (gx + squareSize / 2);
          const dy = mouse.y - (gy + squareSize / 2);
          const distSq = dx * dx + dy * dy;

          if (distSq < maxHoverDist * maxHoverDist) {
            const dist = Math.sqrt(distSq);
            const factor = 1 - dist / maxHoverDist;
            ctx.fillStyle = `rgba(139, 92, 246, ${factor * 0.35})`;
            ctx.fillRect(gx + 1, gy + 1, squareSize - 2, squareSize - 2);

            ctx.fillStyle = `rgba(192, 132, 252, ${factor * 0.9})`;
            ctx.beginPath();
            ctx.arc(gx, gy, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    }

    // --- 4. Constellation Particles (Batched GPU Rendering) ---
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.fillStyle = `rgba(192, 132, 252, ${p.alpha})`;
      ctx.fillRect(p.x - 1, p.y - 1, p.radius, p.radius);
    }

    // Batched Constellation Lines Pass
    ctx.strokeStyle = 'rgba(192, 132, 252, 0.18)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    const maxLineDistSq = 12000;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const pdx = p.x - p2.x;
        const pdy = p.y - p2.y;
        if (pdx * pdx + pdy * pdy < maxLineDistSq) {
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
        }
      }
    }
    ctx.stroke();

    animationFrameId = requestAnimationFrame(draw);
  }

  draw();

  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', resize);
  };
}
