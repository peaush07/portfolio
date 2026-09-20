// Clean, Elegant Cyber Grid Canvas with Pure 60 FPS Optimization
// Features smooth continuous grid drift, subtle mouse hover glow,
// constellation particles, and zero distracting pattern cascades.

export function initAmbientSquaresCanvas(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = 0, height = 0;
  let dpr = 1;
  let animationFrameId;

  const squareSize = 48;
  const speedX = 0.35; // Smooth continuous horizontal drift
  const speedY = 0.35; // Smooth continuous vertical drift

  let gridOffsetX = 0;
  let gridOffsetY = 0;

  let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
  let ripples = [];

  // Floating Cyber Constellation Particles
  const numParticles = 35;
  const particles = [];

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
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
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.45 + 0.25
      });
    }
  }

  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
  });

  // Click shockwave ripple
  window.addEventListener('click', (e) => {
    ripples.push({
      x: e.clientX,
      y: e.clientY,
      radius: 10,
      maxRadius: 280,
      alpha: 0.8
    });
  });

  function draw() {
    // Smooth mouse target interpolation
    mouse.x += (mouse.targetX - mouse.x) * 0.14;
    mouse.y += (mouse.targetY - mouse.y) * 0.14;

    // Continuous smooth grid drifting offset
    gridOffsetX = (gridOffsetX + speedX) % squareSize;
    gridOffsetY = (gridOffsetY + speedY) % squareSize;

    ctx.clearRect(0, 0, width, height);

    const time = Date.now() * 0.001;
    const cols = Math.ceil(width / squareSize) + 2;
    const rows = Math.ceil(height / squareSize) + 2;

    // --- 1. Draw Shockwave Ripples ---
    for (let i = ripples.length - 1; i >= 0; i--) {
      const r = ripples[i];
      r.radius += 9;
      r.alpha = (1 - r.radius / r.maxRadius) * 0.8;

      if (r.radius >= r.maxRadius) {
        ripples.splice(i, 1);
      } else {
        ctx.save();
        ctx.strokeStyle = `rgba(192, 132, 252, ${r.alpha})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = '#8B5CF6';
        ctx.shadowBlur = 14;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
    }

    // --- 2. Optimized Grid Line Rendering & Subtle Mouse Glow ---
    const maxHoverDist = 240;

    for (let i = -1; i < cols; i++) {
      for (let j = -1; j < rows; j++) {
        const x = i * squareSize + gridOffsetX;
        const y = j * squareSize + gridOffsetY;

        const dx = mouse.x - (x + squareSize / 2);
        const dy = mouse.y - (y + squareSize / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);

        let lineAlpha = 0.04;
        let hoverGlow = 0;

        if (dist < maxHoverDist) {
          const factor = 1 - dist / maxHoverDist;
          lineAlpha = 0.04 + factor * 0.26;
          hoverGlow = factor;
        }

        const wave = Math.sin(time * 1.8 + (i * 0.25 + j * 0.25)) * 0.012;
        lineAlpha = Math.max(0.02, lineAlpha + wave);

        // Draw Grid Line
        ctx.strokeStyle = `rgba(167, 139, 250, ${lineAlpha})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, squareSize, squareSize);

        // Soft Mouse Hover Fill Glow
        if (hoverGlow > 0.04) {
          ctx.fillStyle = `rgba(139, 92, 246, ${hoverGlow * 0.14})`;
          ctx.fillRect(x + 1, y + 1, squareSize - 2, squareSize - 2);

          // Glowing intersection node dots
          ctx.fillStyle = `rgba(192, 132, 252, ${hoverGlow * 0.8})`;
          ctx.beginPath();
          ctx.arc(x, y, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // --- 3. Draw Floating Cyber Constellation Particles & Links ---
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      const pAlpha = p.alpha + Math.sin(time * 2.5 + i) * 0.12;

      ctx.fillStyle = `rgba(167, 139, 250, ${Math.max(0.1, pAlpha)})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();

      // Connect near particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const pdx = p.x - p2.x;
        const pdy = p.y - p2.y;
        const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

        if (pdist < 110) {
          const linkAlpha = (1 - pdist / 110) * 0.22;
          ctx.strokeStyle = `rgba(192, 132, 252, ${linkAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      // Connect particle to mouse cursor
      const mdx = mouse.x - p.x;
      const mdy = mouse.y - p.y;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < 160) {
        const mAlpha = (1 - mdist / 160) * 0.4;
        ctx.strokeStyle = `rgba(167, 139, 250, ${mAlpha})`;
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    }

    animationFrameId = requestAnimationFrame(draw);
  }

  draw();

  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', resize);
  };
}
