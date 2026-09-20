// Futuristic Interactive Cyber Mesh & Constellation Background Canvas
export function initAmbientSquaresCanvas(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let animationFrameId;

  const squareSize = 45;
  let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };

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

  function draw() {
    // Smooth mouse position interpolation
    mouse.x += (mouse.targetX - mouse.x) * 0.12;
    mouse.y += (mouse.targetY - mouse.y) * 0.12;

    ctx.clearRect(0, 0, width, height);

    const time = Date.now() * 0.001;
    const cols = Math.ceil(width / squareSize);
    const rows = Math.ceil(height / squareSize);

    // 1. Draw Futuristic Cyber Grid & Nodes
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * squareSize;
        const y = j * squareSize;

        const dx = mouse.x - (x + squareSize / 2);
        const dy = mouse.y - (y + squareSize / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);

        const maxDist = 240;
        let lineAlpha = 0.035;
        let fillGlow = 0;

        if (dist < maxDist) {
          const factor = 1 - dist / maxDist;
          lineAlpha = 0.035 + factor * 0.25;
          fillGlow = factor;
        }

        const wave = Math.sin(time + (i * 0.3 + j * 0.3)) * 0.015;
        lineAlpha = Math.max(0.015, lineAlpha + wave);

        // Futuristic Grid stroke (Violet tint)
        ctx.strokeStyle = `rgba(167, 139, 250, ${lineAlpha})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, squareSize, squareSize);

        // Interactive Violet fill glow on mouse hover
        if (fillGlow > 0.05) {
          ctx.fillStyle = `rgba(139, 92, 246, ${fillGlow * 0.12})`;
          ctx.fillRect(x + 1, y + 1, squareSize - 2, squareSize - 2);

          // Glowing intersection dots
          ctx.fillStyle = `rgba(192, 132, 252, ${fillGlow * 0.8})`;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // 2. Draw Floating Cyber Constellation Particles & Links
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Draw particle
      ctx.fillStyle = `rgba(167, 139, 250, ${p.alpha})`;
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
      if (mdist < 160) {
        const mAlpha = (1 - mdist / 160) * 0.4;
        ctx.strokeStyle = `rgba(167, 139, 250, ${mAlpha})`;
        ctx.lineWidth = 1;
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
