const BASE = [
  {
    title: 'Cafe Website',
    subtitle: 'Editorial Coffee House',
    tag: 'Web',
    year: '2025',
    desc: 'Buyurtma, menyu va rezervatsiya admin-portali bilan full-stack cafe tizimi.',
    src: '../../Project Images/Cafe Website.png',
    link: 'https://mochaandmiso.web.app/',
    stack: ['React', 'Firebase', 'Node.js']
  },
  {
    title: 'Design Studio',
    subtitle: 'Creative Agency',
    tag: 'Landing',
    year: '2025',
    desc: 'Brending va raqamli tajribalarni ko‘rsatuvchi bold agentlik sayti.',
    src: '../../Project Images/Design Studio.png',
    link: 'https://echo-design-studio-ex.vercel.app/',
    stack: ['Next.js', 'TypeScript', 'GSAP']
  },
  {
    title: 'Photographer Portfolio',
    subtitle: 'Analog & Editorial',
    tag: 'Client',
    year: '2025',
    desc: '3D WebGL kamera tajribasi bilan editorial fotografiya portfolio.',
    src: '../../Project Images/Photographer Portfolio.png',
    link: 'https://julianvance.vercel.app/',
    stack: ['Three.js', 'Astro', 'GSAP']
  },
  {
    title: 'Portfolio Design',
    subtitle: 'Minimal Developer',
    tag: 'Web',
    year: '2025',
    desc: 'Zamonaviy tipografiya va silliq interaktivlik bilan shaxsiy portfolio.',
    src: '../../Project Images/Portfolio Design.png',
    link: 'https://echooo.web.app/',
    stack: ['React', 'Tailwind', 'Motion']
  },
  {
    title: 'Portfolio Website',
    subtitle: 'Full-stack Showcase',
    tag: 'Web',
    year: '2026',
    desc: 'Engineering + dizayn balansida shaxsiy dasturchi portfolio.',
    src: '../../Project Images/Portfolio Website.png',
    link: 'https://jishnumondal.vercel.app/',
    stack: ['Next.js', 'Framer Motion', 'TS']
  },
  {
    title: 'Sen Cruzo',
    subtitle: 'Luxury Client Portfolio',
    tag: 'Client',
    year: '2025',
    desc: 'Yuqori darajadagi mijoz uchun editorial arxitektura portfolio.',
    src: '../../Project Images/Sen Cruzo-Client Portfolio.png',
    link: 'https://sencruzo.web.app/',
    stack: ['React', 'GSAP', 'Tailwind']
  }
];

const EXTRAS = [
  ['Aether Dashboard', 'Product UI', 'Web', '2026', 'Analytics workspace with dense data clarity.'],
  ['Nova Booking', 'SaaS Landing', 'Landing', '2026', 'High-converting booking funnel for clinics.'],
  ['Atlas Law', 'Firm Site', 'Client', '2024', 'Quiet authority for a boutique legal practice.'],
  ['Pulse Fitness', 'Brand Site', 'Landing', '2024', 'Motion-led fitness brand with class schedules.'],
  ['Orbit Docs', 'Docs Product', 'Web', '2026', 'Developer documentation with search-first UX.'],
  ['Maison Retail', 'E-commerce', 'Client', '2025', 'Editorial commerce for a fashion capsule.'],
  ['Signal CRM', 'B2B App', 'Web', '2025', 'Lightweight CRM focused on pipeline speed.'],
  ['Harbor Hotel', 'Hospitality', 'Landing', '2024', 'Quiet luxury stay experience and rooms.'],
  ['Vertex AI Lab', 'Research Lab', 'Web', '2026', 'Research storytelling with interactive demos.'],
  ['Field Notes', 'Publisher', 'Client', '2024', 'Magazine archive with typographic density.'],
  ['Cobalt Pay', 'Fintech', 'Landing', '2025', 'Trust-first payments landing and waitlist.'],
  ['Studio North', 'Architecture', 'Client', '2026', 'Project archive for an architecture atelier.'],
  ['Echo Forms', 'UI Kit', 'Web', '2025', 'Form system and component playground.'],
  ['Lumen Events', 'Event Site', 'Landing', '2024', 'Conference site with schedule and speakers.']
];

export const PROJECTS = [
  ...BASE.map((p, i) => ({ ...p, id: `p${i + 1}`, featured: i < 2 })),
  ...EXTRAS.map((e, i) => {
    const base = BASE[i % BASE.length];
    return {
      id: `p${BASE.length + i + 1}`,
      title: e[0],
      subtitle: e[1],
      tag: e[2],
      year: e[3],
      desc: e[4],
      src: base.src,
      link: base.link,
      stack: base.stack,
      featured: false
    };
  })
];
