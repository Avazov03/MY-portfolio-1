/**
 * Landing Pages — Case strip (3 founder startups)
 */

const IMG = 'Landing Page Assest';

export const STARTUPS = [
  {
    title: 'Aether AI',
    subtitle: 'AI Product · Founder',
    tag: 'AI Product',
    year: '2026',
    role: 'Founder · Product Design',
    headline: 'Think beyond the obvious.',
    description:
      'Cognitive workspace for deep systemic research, disciplined reasoning, and structural synthesis.',
    cta: 'Start exploring',
    link: '#aether',
    src: `${IMG}/Screenshot 2026-10-20 at 7.46.25\u202fPM.png`,
    tools: ['React', 'TypeScript', 'AI Engine'],
    stats: 'Waitlist live · Node synthesis · Research UI'
  },
  {
    title: 'Afterform',
    subtitle: 'Fashion Brand · Founder',
    tag: 'Fashion Brand',
    year: '2025',
    role: 'Founder · Brand & Web',
    headline: 'Not made to fit in.',
    description:
      'Brutalist apparel manifesto — volume, silhouette, and campaign storytelling without logos.',
    cta: 'View campaign',
    link: '#afterform',
    src: `${IMG}/Screenshot 2026-10-20 at 7.45.28\u202fPM.png`,
    tools: ['Next.js', 'GSAP', 'Figma'],
    stats: 'S01 drop · Lookbook · E-com ready'
  },
  {
    title: 'Maison Éléara',
    subtitle: 'Luxury Atelier · Founder',
    tag: 'Luxury Atelier',
    year: '2026',
    role: 'Founder · Experience',
    headline: 'Made to be kept forever.',
    description:
      'Haute jewellery boutique — fairmined gold, Place Vendôme atelier, private salon concierge.',
    cta: 'Explore collection',
    link: '#eleara',
    src: `${IMG}/Screenshot 2026-10-20 at 7.44.03\u202fPM.png`,
    tools: ['React', 'Typography', 'WebGL'],
    stats: '18k gold · Salon booking · Archive'
  }
];

export function initLandingCaseStrip(container, { onSelect } = {}) {
  if (!container) return null;

  container.innerHTML = STARTUPS.map((s, i) => {
    const flip = i % 2 === 1;
    return `
      <article
        class="landing-case-row group rounded-[28px] border border-neutral-200 bg-white overflow-hidden grid md:grid-cols-2 cursor-pointer ${
          flip ? 'md:[&>div:first-child]:order-2' : ''
        }"
        data-index="${i}"
        role="button"
        tabindex="0"
        aria-label="${s.title}"
      >
        <div class="relative aspect-[16/10] md:aspect-auto md:min-h-[320px] overflow-hidden bg-neutral-100">
          <img
            src="${s.src}"
            alt="${s.title}"
            class="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
        <div class="flex flex-col justify-between p-7 md:p-10">
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
                  (t) =>
                    `<span class="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-neutral-200 text-neutral-600">${t}</span>`
                )
                .join('')}
            </div>
            <span class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-[11px] font-bold uppercase tracking-wider group-hover:bg-neutral-800 transition">
              ${s.cta} →
            </span>
          </div>
        </div>
      </article>
    `;
  }).join('');

  const open = (index) => {
    const item = STARTUPS[index];
    if (!item) return;
    if (typeof onSelect === 'function') onSelect(index, item);
  };

  container.querySelectorAll('.landing-case-row').forEach((row) => {
    const index = Number(row.dataset.index);
    row.addEventListener('click', () => open(index));
    row.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(index);
      }
    });
  });

  return { items: STARTUPS };
}
