/**
 * Landing Pages — Case strip (3 founder startups)
 * Reveal: Split Arrive (media ↔ copy)
 */

export const STARTUPS = [
  {
    id: 'zonic',
    title: 'ZONIC',
    subtitle: 'GPS yugurish o‘yini · Founder',
    tag: 'Mobile',
    year: '2026',
    role: 'Founder · Mobile Product',
    headline: 'Shaharni yugurib egallang.',
    description:
      'GPS orqali mahallangizni bosib oling, jamoa tuzing va raqiblardan o‘zib keting. AI murabbiy har yugurishdan keyin keyingi rejani tuzadi.',
    cta: 'Ilovani ochish',
    link: 'https://play.google.com/store/apps/details?id=com.zonic.app',
    src: 'assets/projects/zonic.png',
    modalSrc: 'assets/projects/zonic.png',
    playStore: 'https://play.google.com/store/apps/details?id=com.zonic.app',
    appStore: 'https://apps.apple.com/us/app/zonic-app/id6766318781',
    tools: ['Mobile', 'GPS', 'AI'],
    stats: 'App Store · Google Play · Live'
  },
  {
    id: 'yuristAi',
    title: 'Yurist AI',
    subtitle: 'Huquqiy AI yordamchi · Founder',
    tag: 'Web · AI',
    year: '2026',
    role: 'Founder · LegalTech',
    headline: 'Qonun bo‘yicha aniq javob.',
    description:
      'O‘zbekiston qonunchiligi bo‘yicha manbaga tayanib javob beradigan web AI yordamchi. Shartnoma va hujjat tuzadi, mutaxassis yurist topib beradi; ovozli suhbat va shaxsiy kabinet ham bor.',
    cta: 'Saytga o‘tish',
    link: 'https://yuristai.uz/',
    src: 'assets/projects/yurist-ai.png',
    tools: ['Web', 'AI', 'Huquq'],
    stats: 'yuristai.uz · Live'
  },
  {
    id: 'travelUz',
    title: 'TravelUz',
    subtitle: 'TravelUz Routes · Founder',
    tag: 'Web · AI · MVP',
    year: '2026',
    role: 'Founder · Dasturlash',
    headline: 'O‘zbekiston bo‘ylab sayohat',
    description:
      'O‘zbekiston bo‘ylab sayohatni AI bilan rejalashtirish: manzillar, bron, gidlar, mehmonxonalar va jamoa kontenti — bir platformada. Hozir MVP; production serverga hali chiqmagan, ustida ishlar davom etmoqda.',
    cta: 'MVP · ishlanmoqda',
    link: '',
    src: 'assets/projects/traveluz.jpg',
    modalSrc: 'assets/projects/traveluz.jpg',
    tools: ['Next.js', 'AI', 'Web'],
    stats: 'MVP · Production yo‘q · Ishlanmoqda',
    comingSoon: true
  }
];

const PLAY_STORE_SVG = `
<svg viewBox="0 0 24 24" class="w-4 h-4" aria-hidden="true">
  <path fill="#EA4335" d="M3.6 2.1 13.8 12 3.6 21.9c-.4-.2-.6-.6-.6-1V3.1c0-.4.2-.8.6-1z"/>
  <path fill="#FBBC04" d="m3.6 21.9 10.2-9.9 3.4 3.3-11.2 6.5c-.8.5-1.7-.2-2.4-.9z"/>
  <path fill="#4285F4" d="M20.3 10.3 17.2 8.5l-3.4 3.5 3.4 3.3 3.1-1.8c1-.6 1-2.1 0-2.7z"/>
  <path fill="#34A853" d="M3.6 2.1c.7-.7 1.6-1.4 2.4-.9L17.2 8.5l-3.4 3.5L3.6 2.1z"/>
</svg>`;

const APP_STORE_SVG = `
<svg viewBox="0 0 24 24" class="w-4 h-4" aria-hidden="true">
  <path fill="#000000" d="M16.7 12.6c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.1-2.5.8-3.1.8-.7 0-1.7-.7-2.8-.7-1.4 0-2.8.9-3.5 2.2-1.5 2.6-.4 6.4 1.1 8.5.7 1 1.6 2.2 2.7 2.1 1.1 0 1.5-.7 2.8-.7s1.6.7 2.8.7c1.2 0 1.9-1 2.6-2 .8-1.2 1.1-2.3 1.1-2.4-.1 0-2.2-.8-2.2-3.6z"/>
  <path fill="#000000" d="M14.4 6.5c.6-.7 1-1.7.9-2.7-.9.0-2 .6-2.6 1.3-.6.6-1.1 1.7-1 2.6 1 .1 2-.5 2.7-1.2z"/>
</svg>`;

function ctaHtml(s) {
  if (s.playStore || s.appStore) {
    const playLabel = tr('modal.playStore', 'Google Play');
    const appLabel = tr('modal.appStore', 'App Store');
    const play = s.playStore
      ? `<a href="${s.playStore}" target="_blank" rel="noopener noreferrer" data-store-btn class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-black text-white text-[11px] font-bold uppercase tracking-wider hover:bg-neutral-800 transition">${PLAY_STORE_SVG}${playLabel}</a>`
      : '';
    const apple = s.appStore
      ? `<a href="${s.appStore}" target="_blank" rel="noopener noreferrer" data-store-btn class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-neutral-300 text-neutral-900 text-[11px] font-bold uppercase tracking-wider hover:border-black hover:bg-neutral-50 transition">${APP_STORE_SVG}${appLabel}</a>`
      : '';
    return `<div class="flex flex-wrap items-center gap-2">${play}${apple}</div>`;
  }
  if (s.comingSoon || !s.link) {
    return `<span class="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 text-neutral-700 text-[11px] font-bold uppercase tracking-wider">${s.cta}</span>`;
  }
  return `<span class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-[11px] font-bold uppercase tracking-wider group-hover:bg-neutral-800 transition">${s.cta} →</span>`;
}

function tr(key, fallback) {
  if (window.EchoI18n) {
    const value = window.EchoI18n.t(key);
    if (value && value !== key) return value;
  }
  return fallback;
}

export function localizeStartup(s) {
  const p = `startup.${s.id}`;
  return {
    ...s,
    subtitle: tr(`${p}.subtitle`, s.subtitle),
    tag: tr(`${p}.tag`, s.tag),
    role: tr(`${p}.role`, s.role),
    headline: tr(`${p}.headline`, s.headline),
    description: tr(`${p}.description`, s.description),
    cta: tr(`${p}.cta`, s.cta),
    stats: tr(`${p}.stats`, s.stats)
  };
}

export function initLandingCaseStrip(container, { onSelect } = {}) {
  if (!container) return null;

  const render = () => {
    const items = STARTUPS.map(localizeStartup);
    container.innerHTML = items
      .map((s, i) => {
        const flip = i % 2 === 1;
        return `
      <article
        class="landing-case-row group rounded-[28px] border border-neutral-200 bg-white overflow-hidden grid md:grid-cols-2 cursor-pointer ${
          flip ? 'is-flip md:[&>.landing-case-media]:order-2' : ''
        }"
        data-index="${i}"
        data-reveal="split-arrive"
        role="button"
        tabindex="0"
        aria-label="${s.title}"
      >
        <div class="landing-case-media relative aspect-[16/10] md:aspect-auto md:min-h-[320px] overflow-hidden bg-neutral-100">
          <img
            src="${s.src}"
            alt="${s.title}"
            class="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
        <div class="landing-case-copy flex flex-col justify-between p-7 md:p-10">
          <div>
            <div class="flex items-center justify-between gap-3 mb-5">
              <span class="text-[10px] font-mono tracking-widest text-neutral-400">0${i + 1} — ${s.year}</span>
              <span class="text-[10px] font-bold tracking-widest uppercase text-neutral-500">${s.tag}</span>
            </div>
            <h3 class="text-3xl md:text-4xl font-black uppercase tracking-tight text-neutral-900">${s.title}</h3>
            <p class="mt-3 text-lg font-semibold text-neutral-800">${s.headline}</p>
            <p class="mt-3 text-sm text-neutral-500 leading-relaxed">${s.description}</p>
            <p class="mt-4 text-[11px] font-medium uppercase tracking-wider text-neutral-400">${s.role}</p>
          </div>
          <div class="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div class="flex flex-wrap gap-1.5">
              ${s.tools
                .map(
                  (tool) =>
                    `<span class="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-neutral-200 text-neutral-600">${tool}</span>`
                )
                .join('')}
            </div>
            ${ctaHtml(s)}
          </div>
        </div>
      </article>
    `;
      })
      .join('');

    const open = (index) => {
      const item = localizeStartup(STARTUPS[index]);
      if (!item) return;
      if (typeof onSelect === 'function') onSelect(index, item);
    };

    container.querySelectorAll('.landing-case-row').forEach((row) => {
      const index = Number(row.dataset.index);
      row.addEventListener('click', (e) => {
        if (e.target.closest('[data-store-btn]')) return;
        open(index);
      });
      row.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open(index);
        }
      });
    });

    bindSplitArriveReveal(container);
  };

  render();
  const onLang = () => render();
  window.addEventListener('echo:langchange', onLang);

  return {
    items: STARTUPS,
    destroy() {
      window.removeEventListener('echo:langchange', onLang);
    }
  };
}

/** Split Arrive — replays every time a case re-enters the viewport */
function bindSplitArriveReveal(container) {
  const rows = () => [...container.querySelectorAll('.landing-case-row')];

  const show = (row, stagger = 0) => {
    if (!row || row.classList.contains('is-in')) return;
    row.style.setProperty('--stagger', String(stagger));
    row.classList.add('is-in');
    delete row.dataset.revealing;
  };

  const hide = (row) => {
    if (!row || !row.classList.contains('is-in')) return;
    row.classList.remove('is-in');
    delete row.dataset.revealing;
    row.style.setProperty('--stagger', '0');
  };

  if (!container || typeof IntersectionObserver === 'undefined') {
    rows().forEach((r) => show(r));
    return;
  }

  const reveal = (row) => {
    if (!row || row.classList.contains('is-in') || row.dataset.revealing === '1') return;
    row.dataset.revealing = '1';
    requestAnimationFrame(() => show(row, 0));
  };

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) reveal(entry.target);
        else hide(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
  );

  rows().forEach((row) => io.observe(row));
}
