/**
 * Selected Works — Bento archive (supports 20+ projects)
 */

export const PROJECTS = [
  {
    id: 'cafe',
    title: 'Cafe Website',
    subtitle: 'Editorial Coffee House',
    tag: 'Web',
    year: '2025',
    description: 'A full-stack cafe management system with an admin portal for orders, menu, and reservations',
    src: 'Project Images/Cafe Website.png',
    link: 'https://mochaandmiso.web.app/',
    tools: ['React', 'Firebase', 'Node.js'],
    featured: true
  },
  {
    id: 'designStudio',
    title: 'Design Studio',
    subtitle: 'Creative Agency',
    tag: 'Landing',
    year: '2025',
    description: 'A bold design studio website built to showcase creative services, brand identity, and digital experiences',
    src: 'Project Images/Design Studio.png',
    link: 'https://echo-design-studio-ex.vercel.app/',
    tools: ['Next.js', 'TypeScript', 'GSAP'],
    featured: true
  },
  {
    id: 'photographer',
    title: 'Photographer Portfolio',
    subtitle: 'Analog & Editorial',
    tag: 'Client',
    year: '2025',
    description: 'An analog & editorial photography portfolio showcasing timeless visual stories',
    src: 'Project Images/Photographer Portfolio.png',
    link: 'https://julianvance.vercel.app/',
    tools: ['Three.js', 'Astro', 'GSAP'],
    featured: false
  },
  {
    id: 'portfolioDesign',
    title: 'Portfolio Design',
    subtitle: 'Minimal Developer',
    tag: 'Web',
    year: '2025',
    description: 'A sleek, high-performance portfolio crafted with modern typography and fluid interactions',
    src: 'Project Images/Portfolio Design.png',
    link: 'https://echooo.web.app/',
    tools: ['React', 'Tailwind', 'Motion'],
    featured: false
  },
  {
    id: 'portfolioWebsite',
    title: 'Portfolio Website',
    subtitle: 'Full-stack Showcase',
    tag: 'Web',
    year: '2026',
    description: 'A personal portfolio highlighting full-stack engineering and interactive UI',
    src: 'Project Images/Portfolio Website.png',
    link: 'https://jishnumondal.vercel.app/',
    tools: ['Next.js', 'Framer Motion', 'TS'],
    featured: false
  },
  {
    id: 'senCruzo',
    title: 'Sen Cruzo',
    subtitle: 'Luxury Client Portfolio',
    tag: 'Client',
    year: '2025',
    description: 'A bespoke editorial portfolio for high-profile client presentation',
    src: 'Project Images/Sen Cruzo-Client Portfolio.png',
    link: 'https://sencruzo.web.app/',
    tools: ['React', 'GSAP', 'Tailwind'],
    featured: false
  },
  // Placeholders to demonstrate 20-slot density — replace with real projects later
  {
    title: 'Aether Dashboard',
    subtitle: 'Product UI',
    tag: 'Web',
    year: '2026',
    description: 'Analytics workspace with dense data clarity and calm hierarchy.',
    src: 'Project Images/Cafe Website.png',
    link: '#',
    tools: ['React', 'TypeScript'],
    featured: false
  },
  {
    title: 'Nova Booking',
    subtitle: 'SaaS Landing',
    tag: 'Landing',
    year: '2026',
    description: 'High-converting booking funnel engineered for clinics.',
    src: 'Project Images/Design Studio.png',
    link: '#',
    tools: ['Next.js', 'Tailwind'],
    featured: false
  },
  {
    title: 'Atlas Law',
    subtitle: 'Firm Site',
    tag: 'Client',
    year: '2024',
    description: 'Quiet authority for a boutique legal practice.',
    src: 'Project Images/Photographer Portfolio.png',
    link: '#',
    tools: ['Astro', 'GSAP'],
    featured: false
  },
  {
    title: 'Pulse Fitness',
    subtitle: 'Brand Site',
    tag: 'Landing',
    year: '2024',
    description: 'Motion-led fitness brand with class schedules.',
    src: 'Project Images/Portfolio Design.png',
    link: '#',
    tools: ['React', 'Motion'],
    featured: false
  },
  {
    title: 'Orbit Docs',
    subtitle: 'Docs Product',
    tag: 'Web',
    year: '2026',
    description: 'Developer documentation with search-first UX.',
    src: 'Project Images/Portfolio Website.png',
    link: '#',
    tools: ['Next.js', 'MDX'],
    featured: false
  },
  {
    title: 'Maison Retail',
    subtitle: 'E-commerce',
    tag: 'Client',
    year: '2025',
    description: 'Editorial commerce for a fashion capsule drop.',
    src: 'Project Images/Sen Cruzo-Client Portfolio.png',
    link: '#',
    tools: ['Shopify', 'Liquid'],
    featured: false
  },
  {
    title: 'Signal CRM',
    subtitle: 'B2B App',
    tag: 'Web',
    year: '2025',
    description: 'Lightweight CRM focused on pipeline speed.',
    src: 'Project Images/Cafe Website.png',
    link: '#',
    tools: ['React', 'Node.js'],
    featured: false
  },
  {
    title: 'Harbor Hotel',
    subtitle: 'Hospitality',
    tag: 'Landing',
    year: '2024',
    description: 'Quiet luxury stay experience and rooms.',
    src: 'Project Images/Design Studio.png',
    link: '#',
    tools: ['Webflow', 'GSAP'],
    featured: false
  },
  {
    title: 'Vertex AI Lab',
    subtitle: 'Research Lab',
    tag: 'Web',
    year: '2026',
    description: 'Research storytelling with interactive demos.',
    src: 'Project Images/Photographer Portfolio.png',
    link: '#',
    tools: ['Three.js', 'React'],
    featured: false
  },
  {
    title: 'Field Notes',
    subtitle: 'Publisher',
    tag: 'Client',
    year: '2024',
    description: 'Magazine archive with typographic density.',
    src: 'Project Images/Portfolio Design.png',
    link: '#',
    tools: ['Next.js', 'Sanity'],
    featured: false
  },
  {
    title: 'Cobalt Pay',
    subtitle: 'Fintech',
    tag: 'Landing',
    year: '2025',
    description: 'Trust-first payments landing and waitlist.',
    src: 'Project Images/Portfolio Website.png',
    link: '#',
    tools: ['Framer', 'TypeScript'],
    featured: false
  },
  {
    title: 'Studio North',
    subtitle: 'Architecture',
    tag: 'Client',
    year: '2026',
    description: 'Project archive for an architecture atelier.',
    src: 'Project Images/Sen Cruzo-Client Portfolio.png',
    link: '#',
    tools: ['Astro', 'Tailwind'],
    featured: false
  },
  {
    title: 'Echo Forms',
    subtitle: 'UI Kit',
    tag: 'Web',
    year: '2025',
    description: 'Form system and component playground.',
    src: 'Project Images/Cafe Website.png',
    link: '#',
    tools: ['React', 'Storybook'],
    featured: false
  },
  {
    title: 'Lumen Events',
    subtitle: 'Event Site',
    tag: 'Landing',
    year: '2024',
    description: 'Conference site with schedule and speakers.',
    src: 'Project Images/Design Studio.png',
    link: '#',
    tools: ['Next.js', 'GSAP'],
    featured: false
  }
];

function spanForIndex(i) {
  if (i === 0) return 'col-span-2 row-span-2 md:col-span-4 md:row-span-2';
  if (i === 1) return 'col-span-2 row-span-2 md:col-span-2 md:row-span-2';
  return 'col-span-1 row-span-1 md:col-span-2';
}

function tr(key, fallback) {
  if (window.EchoI18n) {
    const value = window.EchoI18n.t(key);
    if (value && value !== key) return value;
  }
  return fallback;
}

export function localizeProject(p) {
  const tagKey = (p.tag || 'Web').toLowerCase();
  const tag = tr(`projects.tag.${tagKey}`, p.tag);
  const subtitle = p.id ? tr(`project.${p.id}.subtitle`, p.subtitle) : p.subtitle;
  const description = p.id ? tr(`project.${p.id}.description`, p.description) : p.description;
  return { ...p, tag, subtitle, description };
}

export function initProjectsBento(container, options = {}) {
  if (!container) return null;
  const source = options.items || PROJECTS;
  const onSelect = options.onSelect || null;

  const render = () => {
    container.innerHTML = '';
    container.className =
      'projects-bento grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[170px]';

    source.forEach((raw, i) => {
      const p = localizeProject(raw);
      const a = document.createElement('button');
      a.type = 'button';
      a.className = `projects-bento-tile ${spanForIndex(i)} relative rounded-2xl md:rounded-3xl border border-neutral-200 bg-neutral-100 overflow-hidden text-left group`;
      a.dataset.reveal = 'mask-curtain';
      a.innerHTML = `
      <div class="bento-motion">
        <img src="${p.src}" alt="${p.title}" class="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]" loading="${i < 4 ? 'eager' : 'lazy'}">
        <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"></div>
        <div class="absolute left-3 right-3 bottom-3 text-white z-10">
          <p class="text-[9px] md:text-[10px] font-mono tracking-widest text-white/70">${String(i + 1).padStart(2, '0')} · ${String(p.tag).toUpperCase()}</p>
          <h3 class="text-sm md:text-lg font-black uppercase tracking-tight leading-tight">${p.title}</h3>
        </div>
      </div>
    `;
      a.addEventListener('click', () => {
        const localized = localizeProject(raw);
        if (onSelect) onSelect(i, localized);
        else if (window.openProjectModal) window.openProjectModal(localized);
        else if (localized.link && localized.link.startsWith('http')) window.open(localized.link, '_blank');
      });
      container.appendChild(a);
    });

    bindMaskCurtainReveal(container);
  };

  render();
  const onLang = () => render();
  window.addEventListener('echo:langchange', onLang);

  return {
    items: source,
    destroy() {
      window.removeEventListener('echo:langchange', onLang);
    }
  };
}

/** Row-wave Mask Curtain — replays every time tiles re-enter the viewport */
function bindMaskCurtainReveal(container) {
  const tiles = () => [...container.querySelectorAll('.projects-bento-tile')];

  const show = (tile, stagger = 0) => {
    if (!tile || tile.classList.contains('is-in')) return;
    tile.style.setProperty('--stagger', String(stagger));
    tile.classList.add('is-in');
    delete tile.dataset.revealing;
  };

  const hide = (tile) => {
    if (!tile || !tile.classList.contains('is-in')) return;
    tile.classList.remove('is-in');
    delete tile.dataset.revealing;
    tile.style.setProperty('--stagger', '0');
  };

  if (!container || typeof IntersectionObserver === 'undefined') {
    tiles().forEach((t) => show(t));
    return;
  }

  const revealRow = (tile) => {
    if (!tile || tile.classList.contains('is-in') || tile.dataset.revealing === '1') return;
    const top = tile.getBoundingClientRect().top;
    const pending = tiles()
      .filter((t) => !t.classList.contains('is-in') && t.dataset.revealing !== '1')
      .filter((t) => Math.abs(t.getBoundingClientRect().top - top) < 48)
      .sort((a, b) => a.getBoundingClientRect().left - b.getBoundingClientRect().left);

    if (!pending.length) {
      show(tile, 0);
      return;
    }

    pending.forEach((t, i) => {
      t.dataset.revealing = '1';
      requestAnimationFrame(() => show(t, i));
    });
  };

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) revealRow(entry.target);
        else hide(entry.target);
      });
    },
    // Slight inset so leave/re-enter is clear (replay without flicker)
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
  );

  tiles().forEach((tile) => io.observe(tile));
}
