// Interactive Ambient Glass Canvas Background Effect
export function initAmbientSquaresCanvas(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let animationFrameId;

  // Grid config
  const squareSize = 40;
  let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
  });

  function draw() {
    // Smooth mouse position interpolation
    mouse.x += (mouse.targetX - mouse.x) * 0.1;
    mouse.y += (mouse.targetY - mouse.y) * 0.1;

    ctx.clearRect(0, 0, width, height);

    const cols = Math.ceil(width / squareSize);
    const rows = Math.ceil(height / squareSize);

    const time = Date.now() * 0.001;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * squareSize;
        const y = j * squareSize;

        // Calculate distance to mouse
        const dx = mouse.x - (x + squareSize / 2);
        const dy = mouse.y - (y + squareSize / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);

        const maxDist = 200;
        let opacity = 0.03;
        let glow = 0;

        if (dist < maxDist) {
          const factor = 1 - dist / maxDist;
          opacity = 0.03 + factor * 0.18;
          glow = factor * 0.5;
        }

        // Slight breathing animation
        const wave = Math.sin(time + (i + j) * 0.2) * 0.015;
        opacity = Math.max(0.01, opacity + wave);

        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, squareSize, squareSize);

        if (glow > 0.05) {
          ctx.fillStyle = `rgba(255, 255, 255, ${glow * 0.08})`;
          ctx.fillRect(x + 1, y + 1, squareSize - 2, squareSize - 2);
        }
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
