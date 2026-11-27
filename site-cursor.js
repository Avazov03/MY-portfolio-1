/**
 * Smart trailing cursor — mix-blend-mode: difference
 * White cursor → appears black on light, white on dark.
 * Partial overlap inverts only the overlapping half.
 */

const REDUCE = '(prefers-reduced-motion: reduce)';

export function initSiteCursor(opts = {}) {
  const minW = opts.minWidth ?? 1024;
  const desktop = window.matchMedia(`(min-width: ${minW}px)`);
  const reduce = window.matchMedia(REDUCE);
  const fine = window.matchMedia('(pointer: fine)');

  let wrap = null;
  let dot = null;
  let ring = null;
  let raf = 0;
  let enabled = false;

  let mx = -100;
  let my = -100;
  let dx = mx;
  let dy = my;
  let rx = mx;
  let ry = my;
  let scale = 1;
  let visible = false;
  let grow = false;

  function isGrowTarget(el) {
    return el instanceof Element && Boolean(el.closest('[data-cursor-grow], a, button'));
  }

  function onMove(e) {
    mx = e.clientX;
    my = e.clientY;
    if (!visible && wrap) {
      visible = true;
      wrap.style.opacity = '1';
    }
    grow = isGrowTarget(e.target);
  }

  function onLeave() {
    visible = false;
    if (wrap) wrap.style.opacity = '0';
  }

  function tick() {
    dx += (mx - dx) * 0.22;
    dy += (my - dy) * 0.22;
    rx += (mx - rx) * 0.08;
    ry += (my - ry) * 0.08;
    scale += ((grow ? 1.55 : 1) - scale) * 0.16;

    if (dot) {
      dot.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%) scale(${scale})`;
    }
    if (ring) {
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${grow ? 1.15 : 1})`;
      ring.style.opacity = grow ? '0.7' : '1';
    }
    raf = requestAnimationFrame(tick);
  }

  function mount() {
    if (wrap) return;
    wrap = document.createElement('div');
    wrap.id = 'site-cursor';
    wrap.setAttribute('aria-hidden', 'true');
    wrap.className = 'site-cursor';
    wrap.innerHTML = `
      <div class="site-cursor__dot"></div>
      <div class="site-cursor__ring"></div>
    `;
    document.body.appendChild(wrap);
    dot = wrap.querySelector('.site-cursor__dot');
    ring = wrap.querySelector('.site-cursor__ring');
  }

  function start() {
    if (enabled) return;
    enabled = true;
    mount();
    document.documentElement.classList.add('has-site-cursor');
    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(tick);
  }

  function stop() {
    if (!enabled) return;
    enabled = false;
    document.documentElement.classList.remove('has-site-cursor');
    window.removeEventListener('mousemove', onMove);
    document.documentElement.removeEventListener('mouseleave', onLeave);
    cancelAnimationFrame(raf);
    if (wrap) {
      wrap.remove();
      wrap = null;
      dot = null;
      ring = null;
    }
    visible = false;
    grow = false;
  }

  function sync() {
    const on = desktop.matches && fine.matches && !reduce.matches;
    if (on) start();
    else stop();
  }

  sync();
  desktop.addEventListener('change', sync);
  reduce.addEventListener('change', sync);
  fine.addEventListener('change', sync);

  return { destroy: stop };
}
