// Animated Moving Squares & Futuristic Interactive Cyber Grid Canvas
// Features continuously drifting/moving grid squares, glowing square highlights,
// mouse hover energy links, and click shockwave ripples.

export function initAmbientSquaresCanvas(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let animationFrameId;

  const squareSize = 45;
  const speedX = 0.4; // Continuous horizontal grid drift speed
  const speedY = 0.4; // Continuous vertical grid drift speed

  let gridOffsetX = 0;
  let gridOffsetY = 0;

  let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
  let ripples = [];

  // Active glowing squares that randomly illuminate and fade out
  const glowingSquares = new Map();

  // Floating Cyber Constellation Particles
  const numParticles = 40;
  const particles = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

    particles.length = 0;
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.3
      });
    }
  }

  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
  });

  // Click creates an expanding energy shockwave ripple in grid
  window.addEventListener('click', (e) => {
    ripples.push({
      x: e.clientX,
      y: e.clientY,
      radius: 10,
      maxRadius: 300,
      alpha: 0.85
    });
  });

  function draw() {
    // Smooth mouse position interpolation
    mouse.x += (mouse.targetX - mouse.x) * 0.14;
    mouse.y += (mouse.targetY - mouse.y) * 0.14;

    // Update continuous grid drifting offset
    gridOffsetX = (gridOffsetX + speedX) % squareSize;
    gridOffsetY = (gridOffsetY + speedY) % squareSize;

    ctx.clearRect(0, 0, width, height);

    const time = Date.now() * 0.001;
    const cols = Math.ceil(width / squareSize) + 2;
    const rows = Math.ceil(height / squareSize) + 2;

    // --- 1. Update & Draw Energy Shockwave Ripples ---
    for (let i = ripples.length - 1; i >= 0; i--) {
      const r = ripples[i];
      r.radius += 9;
      r.alpha = (1 - r.radius / r.maxRadius) * 0.85;

      if (r.radius >= r.maxRadius) {
        ripples.splice(i, 1);
      } else {
        ctx.save();
        ctx.strokeStyle = `rgba(192, 132, 252, ${r.alpha})`;
        ctx.lineWidth = 2.5;
        ctx.shadowColor = '#8B5CF6';
        ctx.shadowBlur = 18;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
    }

    // --- 2. Draw Moving Grid Squares ---
    for (let i = -1; i < cols; i++) {
      for (let j = -1; j < rows; j++) {
        const x = i * squareSize + gridOffsetX;
        const y = j * squareSize + gridOffsetY;

        const cellId = `${i}_${j}`;

        // Randomly spawn glowing squares drifting with grid
        if (!glowingSquares.has(cellId) && Math.random() < 0.0008) {
          glowingSquares.set(cellId, {
            alpha: 0,
            maxAlpha: Math.random() * 0.25 + 0.12,
            fadeIn: true,
            color: Math.random() > 0.4 ? '#C084FC' : '#8B5CF6'
          });
        }

        // Distance from mouse cursor
        const dx = mouse.x - (x + squareSize / 2);
        const dy = mouse.y - (y + squareSize / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);

        const maxHoverDist = 240;
        let lineAlpha = 0.04;
        let hoverGlow = 0;

        if (dist < maxHoverDist) {
          const factor = 1 - dist / maxHoverDist;
          lineAlpha = 0.04 + factor * 0.32;
          hoverGlow = factor;
        }

        const wave = Math.sin(time * 2 + (i * 0.3 + j * 0.3)) * 0.015;
        lineAlpha = Math.max(0.02, lineAlpha + wave);

        // Draw Grid Square Lines (Drifting continuously)
        ctx.strokeStyle = `rgba(167, 139, 250, ${lineAlpha})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, squareSize, squareSize);

        // Render Random Animated Drifting Square Fill Highlights
        if (glowingSquares.has(cellId)) {
          const sq = glowingSquares.get(cellId);

          if (sq.fadeIn) {
            sq.alpha += 0.006;
            if (sq.alpha >= sq.maxAlpha) sq.fadeIn = false;
          } else {
            sq.alpha -= 0.006;
            if (sq.alpha <= 0) glowingSquares.delete(cellId);
          }

          if (sq.alpha > 0) {
            ctx.fillStyle = sq.color === '#C084FC'
              ? `rgba(192, 132, 252, ${sq.alpha})`
              : `rgba(139, 92, 246, ${sq.alpha})`;
            ctx.fillRect(x + 1, y + 1, squareSize - 2, squareSize - 2);
          }
        }

        // Render Interactive Mouse Hover Fill & Glowing Corner Dots
        if (hoverGlow > 0.04) {
          ctx.fillStyle = `rgba(139, 92, 246, ${hoverGlow * 0.18})`;
          ctx.fillRect(x + 1, y + 1, squareSize - 2, squareSize - 2);

          // Glowing intersection node dots
          ctx.fillStyle = `rgba(192, 132, 252, ${hoverGlow * 0.9})`;
          ctx.beginPath();
          ctx.arc(x, y, 2.5, 0, Math.PI * 2);
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

      const pAlpha = p.alpha + Math.sin(time * 3 + i) * 0.15;

      // Draw particle
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

        if (pdist < 120) {
          const linkAlpha = (1 - pdist / 120) * 0.25;
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
      if (mdist < 170) {
        const mAlpha = (1 - mdist / 170) * 0.42;
        ctx.strokeStyle = `rgba(167, 139, 250, ${mAlpha})`;
        ctx.lineWidth = 1.1;
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
