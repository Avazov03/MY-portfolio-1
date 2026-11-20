/**
 * Split back-to-top control with live scroll %.
 * Smooth show/hide + lerped percentage (no janky digit jumps).
 */
export function initBackToTop(root = document) {
  const btn = root.querySelector('[data-back-to-top]');
  if (!btn) return null;

  const pctEl = btn.querySelector('[data-btt-pct]');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  let targetPct = 0;
  let shownPct = 0;
  let visible = false;
  let rafId = 0;
  let scrollRaf = 0;

  const threshold = () => Math.max(280, Math.round(window.innerHeight * 0.4));

  const docProgress = () => {
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    return Math.min(1, Math.max(0, window.scrollY / max));
  };

  const setVisible = (on) => {
    if (on === visible) return;
    visible = on;
    btn.classList.toggle('is-on', on);
    btn.setAttribute('aria-hidden', on ? 'false' : 'true');
    btn.tabIndex = on ? 0 : -1;
  };

  const paintPct = () => {
    if (!pctEl) return;
    const n = Math.round(shownPct);
    if (pctEl.textContent !== String(n)) pctEl.textContent = String(n);
  };

  const tickPct = () => {
    rafId = 0;
    const ease = reduced.matches ? 1 : 0.16;
    shownPct += (targetPct - shownPct) * ease;
    if (Math.abs(targetPct - shownPct) < 0.15) shownPct = targetPct;
    paintPct();
    if (shownPct !== targetPct) {
      rafId = requestAnimationFrame(tickPct);
    }
  };

  const queuePct = () => {
    if (!rafId) rafId = requestAnimationFrame(tickPct);
  };

  const sync = () => {
    scrollRaf = 0;
    const y = window.scrollY || 0;
    const p = docProgress();
    targetPct = p * 100;
    setVisible(y > threshold());
    queuePct();
  };

  const onScroll = () => {
    if (scrollRaf) return;
    scrollRaf = requestAnimationFrame(sync);
  };

  const goTop = (e) => {
    e.preventDefault();
    const top = 0;
    if (reduced.matches) {
      window.scrollTo(0, top);
      return;
    }
    window.scrollTo({ top, behavior: 'smooth' });
  };

  btn.addEventListener('click', goTop);
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  // Initial state
  btn.tabIndex = -1;
  btn.setAttribute('aria-hidden', 'true');
  sync();

  return () => {
    btn.removeEventListener('click', goTop);
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    if (rafId) cancelAnimationFrame(rafId);
    if (scrollRaf) cancelAnimationFrame(scrollRaf);
  };
}
