// High-Performance Rhythmic Pattern Flow & Gravitational Cyber Mesh Canvas
// Features 60 FPS optimized batch rendering, harmonic diagonal wave flow,
// elastic grid node deformation, and structured pulse cascades.

export function initAmbientSquaresCanvas(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = 0, height = 0;
  let dpr = 1;
  let animationFrameId;

  const squareSize = 50;
  const speed = 0.38; // Continuous pattern drift speed

  let gridOffsetX = 0;
  let gridOffsetY = 0;

  let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
  let ripples = [];

  // Floating Cyber Particles
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
        alpha: Math.random() * 0.5 + 0.35
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
      maxRadius: 320,
      alpha: 0.9
    });
  });

  function draw() {
    // Smooth mouse target interpolation
    mouse.x += (mouse.targetX - mouse.x) * 0.14;
    mouse.y += (mouse.targetY - mouse.y) * 0.14;

    // Continuous diagonal grid pattern drift
    gridOffsetX = (gridOffsetX + speed) % squareSize;
    gridOffsetY = (gridOffsetY + speed) % squareSize;

    ctx.clearRect(0, 0, width, height);

    const time = Date.now() * 0.0012;
    const cols = Math.ceil(width / squareSize) + 2;
    const rows = Math.ceil(height / squareSize) + 2;

    // --- 1. Draw Shockwave Ripples ---
    for (let i = ripples.length - 1; i >= 0; i--) {
      const r = ripples[i];
      r.radius += 10;
      r.alpha = (1 - r.radius / r.maxRadius) * 0.85;

      if (r.radius >= r.maxRadius) {
        ripples.splice(i, 1);
      } else {
        ctx.save();
        ctx.strokeStyle = `rgba(192, 132, 252, ${r.alpha})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = '#8B5CF6';
        ctx.shadowBlur = 16;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
    }

    // --- 2. Rhythmic Pattern Grid Batch Render ---
    ctx.lineWidth = 1;

    // Step A: Fill Rhythmic Cascade Squares
    const activePatternIndex = Math.floor((time * 2.5) % 8);

    for (let i = -1; i < cols; i++) {
      for (let j = -1; j < rows; j++) {
        const x = i * squareSize + gridOffsetX;
        const y = j * squareSize + gridOffsetY;

        const cellPattern = (i + j) % 8;
        const dx = mouse.x - (x + squareSize / 2);
        const dy = mouse.y - (y + squareSize / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Hover Fill Glow
        if (dist < 220) {
          const hoverAlpha = (1 - dist / 220) * 0.18;
          ctx.fillStyle = `rgba(139, 92, 246, ${hoverAlpha})`;
          ctx.fillRect(x + 1, y + 1, squareSize - 2, squareSize - 2);
        }

        // Structured Rhythmic Pattern Wave Fill
        if (cellPattern === activePatternIndex) {
          const waveAlpha = Math.sin(time * 3) * 0.04 + 0.06;
          ctx.fillStyle = `rgba(192, 132, 252, ${waveAlpha})`;
          ctx.fillRect(x + 1, y + 1, squareSize - 2, squareSize - 2);
        }
      }
    }

    // Step B: Single Path Batch Lines for Ultra Performance (60 FPS)
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(167, 139, 250, 0.07)';

    for (let i = -1; i < cols; i++) {
      for (let j = -1; j < rows; j++) {
        const baseX = i * squareSize + gridOffsetX;
        const baseY = j * squareSize + gridOffsetY;

        // Harmonic wave calculation for dynamic opacity
        const wave = (Math.sin(time * 1.5 + (i * 0.2 + j * 0.2)) + 1) * 0.5;
        
        ctx.moveTo(baseX, baseY);
        ctx.lineTo(baseX + squareSize, baseY);
        ctx.moveTo(baseX, baseY);
        ctx.lineTo(baseX, baseY + squareSize);
      }
    }
    ctx.stroke();

    // Step C: Interactive Elastic Nodes Near Mouse
    for (let i = -1; i < cols; i++) {
      for (let j = -1; j < rows; j++) {
        let nx = i * squareSize + gridOffsetX;
        let ny = j * squareSize + gridOffsetY;

        const mdx = mouse.x - nx;
        const mdy = mouse.y - ny;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < 180) {
          const factor = (1 - mdist / 180);
          // Flex node location towards cursor
          nx += (mdx / mdist) * factor * 14;
          ny += (mdy / mdist) * factor * 14;

          ctx.fillStyle = `rgba(192, 132, 252, ${factor * 0.85})`;
          ctx.beginPath();
          ctx.arc(nx, ny, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // --- 3. Floating Cyber Constellation Particles & Vector Links ---
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

      // Connect to mouse cursor
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
