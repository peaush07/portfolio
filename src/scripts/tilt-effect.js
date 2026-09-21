// 60fps GPU-Accelerated 3D Parallax Tilt with Dynamic Specular Glare

export function init3DTiltEffect(selector = '.project-card, .bento-card, .about-card') {
  const elements = document.querySelectorAll(selector);

  elements.forEach((el) => {
    // Add specular glare overlay if missing
    if (!el.querySelector('.card-glare-overlay')) {
      const glare = document.createElement('div');
      glare.className = 'card-glare-overlay absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 transition-opacity duration-300 z-20';
      glare.style.background = 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 75%)';
      el.classList.add('relative', 'overflow-hidden');
      el.appendChild(glare);
    }

    const glare = el.querySelector('.card-glare-overlay');

    let bounds;

    function onMouseMove(e) {
      if (!bounds) bounds = el.getBoundingClientRect();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;

      const centerX = bounds.width / 2;
      const centerY = bounds.height / 2;

      const percentX = (mouseX - centerX) / centerX;
      const percentY = (mouseY - centerY) / centerY;

      const tiltX = percentY * -7; // Max tilt degrees
      const tiltY = percentX * 7;

      el.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translate3d(0, -4px, 0) scale3d(1.02, 1.02, 1)`;

      if (glare) {
        glare.style.opacity = '1';
        glare.style.background = `radial-gradient(circle at ${(mouseX / bounds.width * 100).toFixed(1)}% ${(mouseY / bounds.height * 100).toFixed(1)}%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%)`;
      }
    }

    function onMouseEnter() {
      bounds = el.getBoundingClientRect();
      el.style.transition = 'transform 0.1s ease-out';
    }

    function onMouseLeave() {
      el.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0) scale3d(1, 1, 1)';
      if (glare) {
        glare.style.opacity = '0';
      }
      bounds = null;
    }

    el.addEventListener('mouseenter', onMouseEnter, { passive: true });
    el.addEventListener('mousemove', onMouseMove, { passive: true });
    el.addEventListener('mouseleave', onMouseLeave, { passive: true });
  });
}
