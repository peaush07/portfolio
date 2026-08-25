/**
 * Interactive Neo-Brutalist Squares Grid Canvas Background
 * Draws an animated grid with interactive cursor square highlighting.
 */

export class SquaresCanvas {
  constructor(canvasElement, options = {}) {
    this.canvas = canvasElement;
    this.ctx = canvasElement.getContext('2d');
    
    this.direction = options.direction || 'diagonal'; // 'right', 'left', 'up', 'down', 'diagonal'
    this.speed = options.speed || 0.4;
    this.squareSize = options.squareSize || 50;
    this.borderColor = options.borderColor || 'rgba(0, 0, 0, 0.12)';
    this.hoverFillColor = options.hoverFillColor || 'rgba(0, 240, 255, 0.35)';
    this.vignetteColor = options.vignetteColor || 'rgba(244, 244, 240, 0.4)';
    
    this.offset = { x: 0, y: 0 };
    this.hoverSquare = null;
    this.animationFrameId = null;
    this.isPaused = false;

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onVisibilityChange = this.onVisibilityChange.bind(this);
    this.render = this.render.bind(this);

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', this.onResize, { passive: true });
    document.addEventListener('visibilitychange', this.onVisibilityChange);
    this.canvas.addEventListener('mousemove', this.onMouseMove, { passive: true });
    this.canvas.addEventListener('touchstart', this.onTouchMove, { passive: true });
    this.canvas.addEventListener('touchmove', this.onTouchMove, { passive: true });
    this.canvas.addEventListener('mouseleave', this.onMouseLeave, { passive: true });
    this.canvas.addEventListener('touchend', this.onMouseLeave, { passive: true });
    
    this.start();
  }

  onVisibilityChange() {
    if (document.hidden) {
      this.stop();
    } else {
      this.start();
    }
  }

  onTouchMove(e) {
    if (e.touches && e.touches.length > 0) {
      this.onMouseMove(e.touches[0]);
    }
  }

  resize() {
    const dpr = window.devicePixelRatio || 1;
    this.width = this.canvas.offsetWidth;
    this.height = this.canvas.offsetHeight;

    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.ctx.scale(dpr, dpr);
  }

  onResize() {
    this.resize();
  }

  onMouseMove(e) {
    const rect = this.canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const size = this.squareSize;
    const startX = Math.floor(this.offset.x / size) * size;
    const startY = Math.floor(this.offset.y / size) * size;

    const gridX = Math.floor((mouseX + this.offset.x - startX) / size);
    const gridY = Math.floor((mouseY + this.offset.y - startY) / size);

    this.hoverSquare = { x: gridX, y: gridY };
  }

  onMouseLeave() {
    this.hoverSquare = null;
  }

  updateColors(theme = 'light') {
    if (theme === 'dark') {
      this.borderColor = 'rgba(255, 255, 255, 0.08)';
      this.hoverFillColor = 'rgba(255, 222, 89, 0.35)';
      this.vignetteColor = 'rgba(24, 24, 27, 0.4)';
    } else {
      this.borderColor = 'rgba(0, 0, 0, 0.12)';
      this.hoverFillColor = 'rgba(0, 240, 255, 0.35)';
      this.vignetteColor = 'rgba(244, 244, 240, 0.4)';
    }
  }

  draw() {
    const { ctx, width, height, squareSize, hoverSquare, offset } = this;
    ctx.clearRect(0, 0, width, height);

    const size = squareSize;
    const startX = Math.floor(offset.x / size) * size;
    const startY = Math.floor(offset.y / size) * size;

    for (let x = startX; x < width + size; x += size) {
      for (let y = startY; y < height + size; y += size) {
        const renderX = x - (offset.x % size);
        const renderY = y - (offset.y % size);

        const currentGridX = Math.floor((x - startX) / size);
        const currentGridY = Math.floor((y - startY) / size);

        // Highlight square on hover
        if (
          hoverSquare &&
          currentGridX === hoverSquare.x &&
          currentGridY === hoverSquare.y
        ) {
          ctx.fillStyle = this.hoverFillColor;
          ctx.fillRect(renderX, renderY, size, size);
        }

        // Draw grid lines
        ctx.strokeStyle = this.borderColor;
        ctx.lineWidth = 1;
        ctx.strokeRect(renderX, renderY, size, size);
      }
    }

    // Edge vignette effect
    const gradient = ctx.createRadialGradient(
      width / 2, height / 2, 0,
      width / 2, height / 2, Math.sqrt(width ** 2 + height ** 2) / 2
    );
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
    gradient.addColorStop(1, this.vignetteColor);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }

  render() {
    if (this.isPaused) return;

    const r = Math.max(this.speed, 0.1);
    const s = this.squareSize;

    switch (this.direction) {
      case 'right':
        this.offset.x = (this.offset.x - r + s) % s;
        break;
      case 'left':
        this.offset.x = (this.offset.x + r + s) % s;
        break;
      case 'up':
        this.offset.y = (this.offset.y + r + s) % s;
        break;
      case 'down':
        this.offset.y = (this.offset.y - r + s) % s;
        break;
      case 'diagonal':
      default:
        this.offset.x = (this.offset.x - r + s) % s;
        this.offset.y = (this.offset.y - r + s) % s;
        break;
    }

    this.draw();
    this.animationFrameId = requestAnimationFrame(this.render);
  }

  start() {
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
    this.isPaused = false;
    this.animationFrameId = requestAnimationFrame(this.render);
  }

  stop() {
    this.isPaused = true;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  destroy() {
    this.stop();
    window.removeEventListener('resize', this.onResize);
    this.canvas.removeEventListener('mousemove', this.onMouseMove);
    this.canvas.removeEventListener('mouseleave', this.onMouseLeave);
  }
}
