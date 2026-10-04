// High Performance Cyber Grid Canvas with Adaptive Idle Throttling & DPR Capping

export function initAmbientSquaresCanvas(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const isTouchDevice = typeof window !== 'undefined' && (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
  if (isTouchDevice) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
  let width = 0, height = 0;
  let dpr = 1;
  let animationFrameId;

  const squareSize = 56;
  const speedX = 0.25;
  const speedY = 0.25;

  let gridOffsetX = 0;
  let gridOffsetY = 0;

  let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
  let ripples = [];
  let lastMouseMoveTime = Date.now();

  const numParticles = isTouchDevice ? 8 : 16;
  const particles = [];

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.25);
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
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 1,
        alpha: Math.random() * 0.3 + 0.2
      });
    }
  }

  window.addEventListener('resize', resize, { passive: true });
  resize();

  if (!isTouchDevice) {
    window.addEventListener('mousemove', (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      lastMouseMoveTime = Date.now();
    }, { passive: true });

    window.addEventListener('click', (e) => {
      if (ripples.length < 3) {
        ripples.push({
          x: e.clientX,
          y: e.clientY,
          radius: 10,
          maxRadius: 200,
          alpha: 0.7
        });
      }
    }, { passive: true });
  }

  let isPaused = false;
  let lastFrameTime = 0;
  const fpsInterval = 1000 / 60; // 60Hz Cap

  document.addEventListener('visibilitychange', () => {
    isPaused = document.hidden;
    if (!isPaused && !animationFrameId) draw();
  });

  function draw(timestamp) {
    if (isPaused) {
      animationFrameId = null;
      return;
    }
    animationFrameId = requestAnimationFrame(draw);

    if (timestamp) {
      const delta = timestamp - lastFrameTime;
      if (delta < fpsInterval) return;
      lastFrameTime = timestamp - (delta % fpsInterval);
    }

    // Smooth mouse interpolation
    if (!isTouchDevice && mouse.targetX > 0) {
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;
    }

    gridOffsetX = (gridOffsetX + speedX) % squareSize;
    gridOffsetY = (gridOffsetY + speedY) % squareSize;

    ctx.clearRect(0, 0, width, height);

    // 1. Shockwave Ripples
    for (let i = ripples.length - 1; i >= 0; i--) {
      const r = ripples[i];
      r.radius += 6;
      r.alpha = (1 - r.radius / r.maxRadius) * 0.7;

      if (r.radius >= r.maxRadius) {
        ripples.splice(i, 1);
      } else {
        ctx.strokeStyle = `rgba(192, 132, 252, ${r.alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    // 2. Batched Grid
    ctx.strokeStyle = 'rgba(167, 139, 250, 0.08)';
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

    // 3. Mouse Hover Glow
    if (!isTouchDevice && mouse.x > 0 && mouse.y > 0 && Date.now() - lastMouseMoveTime < 2000) {
      const maxHoverDist = 180;
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
            ctx.fillStyle = `rgba(139, 92, 246, ${factor * 0.25})`;
            ctx.fillRect(gx + 1, gy + 1, squareSize - 2, squareSize - 2);
          }
        }
      }
    }

    // 4. Particles
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
  }

  draw();

  return () => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', resize);
  };
}

