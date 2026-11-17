/**
 * ECHO multilingual runtime — uz (default), en, ru
 */
export const SUPPORTED_LANGS = ['uz', 'en', 'ru'];
export const DEFAULT_LANG = 'uz';
const STORAGE_KEY = 'echo-lang';

export const translations = {
  uz: {
    'meta.title': 'Avazov Ogabek — Dizayner & Dasturchi Portfolio',
    'meta.description': 'Avazov Ogabek portfolio: UI/UX, veb-dizayn, landing page va zamonaviy interaktiv tajribalar.',

    'brand.wordmark': 'AVAZOV',
    'brand.tagline': 'WEB · AI · CLOUD',
    'brand.homeLabel': 'Og‘abek Avazov — bosh sahifa',

    'nav.home': 'BOSH SAHIFA',
    'nav.about': 'MEN HAQIMDA',
    'nav.experience': 'TAJRIBA',
    'nav.projects': 'LOYIHALAR',
    'nav.landing': 'MENING STARTUPLARIM',
    'nav.talk': 'ALOQA',
    'nav.services': 'XIZMATLAR',
    'nav.contact': 'ALOQA',

    'mobile.role': 'Mustaqil Dizayner & Dasturchi',

    'hero.designer': 'DIZAYNER EST.2000',
    'hero.pitch': 'OLAMOMDAN AJRALIB TURADIGAN SAYTLARNI MEN BILAN YARATISHGA TAYYORMISIZ?',
    'hero.uiux': 'UI/UX',
    'hero.websites': 'WEB SAYTLAR',
    'hero.web': 'WEB DIZAYN / REDESIGN',
    'hero.landing': 'LANDING',
    'hero.app': 'MOBIL APP',
    'hero.scrollAbout': 'Men haqimda bo‘limiga o‘tish',
    'hero.contactLabel': 'Men bilan bog‘lanish',
    'hero.contactAria': 'Men bilan bog‘lanish sahifasini ochish',

    'about.headline': 'G‘OYALARNI TEZ VA O‘ZIGA XOS RAQAMLI TAJRIBALARGA AYLANTRISH',
    'about.based': 'O‘ZBEKISTON • DUNYO BO‘YLAB',
    'about.discipline': 'YO‘NALISH & MAHORAT',
    'about.stack': 'UI/UX • VEB DIZAYN • WEBFLOW • FIGMA',
    'about.summary': 'MAQSADLI EDITORIAL DIZAYN VA MUSTAHKAM MUHANDISLIK UCHRAGAN JOYDA MAXSUS RAQAMLI MAHSULOTLAR YARATAMAN. QASDDAN HARAKAT, TIZIMLI ANIQLIK VA O‘LCHANADIGAN NATIJA.',
    'about.cta': 'BOG‘LANISH',
    'about.services': 'XIZMATLAR',
    'about.detail': 'BATAFSIL',
    'about.bgVision': 'TARIX & VIZION',
    'about.scrollExpand': 'KATTALASHTIRISH UCHUN AYLANTIRING',
    'about.titleFirst': 'MEN',
    'about.titleRest': 'HAQIMDA',

    'bio.back': 'Portfolio',
    'bio.name': 'Avazov Ogabek',
    'bio.role': 'Full-stack dasturchi · UI/UX dizayner',
    'bio.location': 'O‘zbekiston · Dunyo bo‘ylab',
    'bio.section.story': 'Tarjimayi hol',
    'bio.tagline': 'G‘oyalarni tez va o‘ziga xos raqamli tajribalarga aylantirish',
    'bio.story1': 'Men — fullstack dasturchi va kreativ texnolog. Frontend, backend va mahsulot dizaynini bitta tizim sifatida ko‘raman.',
    'bio.story2': 'Mustaqil o‘qish davrimda React, Node.js, TypeScript va zamonaviy animatsiya stack’ini chuqur o‘zlashtirdim. Keyin frilans orqali production loyihalarga o‘tdim.',
    'bio.story3': 'Hozir mijozlar va o‘z startaplarim uchun konversiyali landing, interaktiv portfolio va masshtabli web mahsulotlar quraman.',
    'bio.focus1': 'UI/UX',
    'bio.focus2': 'Web Dizayn',
    'bio.focus3': 'Full-stack',
    'bio.focus4': 'Webflow',
    'bio.focus5': 'Figma',
    'bio.section.stack': 'Full-stack stack',
    'bio.stack.frontend': 'Frontend',
    'bio.stack.backend': 'Backend',
    'bio.stack.design': 'Dizayn',
    'bio.section.path': 'Bosqichlar',
    'bio.m1title': 'Asoslar',
    'bio.m1text': '500+ soat amaliy dasturlash — HTML/CSS/JS dan modern stack’gacha.',
    'bio.m2title': 'Ekotizim',
    'bio.m2text': 'React, Node.js va TypeScript bilan to‘liq mahsulot sikli.',
    'bio.m3title': 'Portfolio',
    'bio.m3text': '15+ production-ready loyiha va 20+ frilans yetkazish.',
    'bio.m4title': 'Startaplar',
    'bio.m4text': 'Aether AI, Afterform, Maison Éléara — founder landing’lar.',
    'bio.section.values': 'Qadriyatlar',
    'bio.v1title': 'Aniqlik',
    'bio.v1text': 'Har bir interfeys o‘lchanadigan natija uchun quriladi.',
    'bio.v2title': 'Tezlik',
    'bio.v2text': 'Tez iteratsiya, toza kod, ishonchli deploy.',
    'bio.v3title': 'Estetika',
    'bio.v3text': 'Editorial tipografiya + muhandislik — birgalikda.',
    'bio.cta.contact': 'Bog‘lanish',
    'bio.cta.services': 'Xizmatlar',
    'bio.cta.works': 'Loyihalar',

    'exp.phase.origin': 'BOSHLANISH & ASOSLAR',
    'exp.phase.learning': 'MUSTAQIL O‘QISH',
    'exp.phase.freelance': 'FRILANS / MUSTAQIL',
    'exp.badge': 'ASOS & YO‘L',
    'exp.where': 'QAYERDA<br>BO‘LGANMAN',
    'exp.intro': 'Turli rollar va muhitlar orqali o‘tgan professional yo‘lim.',
    'exp.learningLabel': 'MUSTAQIL O‘QISH',
    'exp.creative': 'CREATIVE<br>TEXNOLOG',
    'exp.learningDesc': 'Veb texnologiyalar, kreativ kodlash va zamonaviy dasturlash amaliyotlarini chuqur o‘rgangan davr.',
    'exp.m1': 'BOSQICH 01',
    'exp.m1text': '500+ soat amaliy dasturlash tajribasi',
    'exp.m2': 'BOSQICH 02',
    'exp.m2text': 'React, Node.js va TypeScript ekotizimini egallash',
    'exp.m3': 'BOSQICH 03',
    'exp.m3text': '15+ production-ready loyiha portfolio',
    'exp.freelanceLabel': 'FRILANS / MUSTAQIL',
    'exp.commercial': 'TIJORAT',
    'exp.fullstack': 'FULL STACK<br>DASTURCHI',
    'exp.freelanceDesc': 'Dunyo bo‘ylab mijozlar uchun premium veb tajribalar. Interaktiv frontend, masshtabli backend va AI yechimlar.',
    'exp.delivery': 'YETKAZISH',
    'exp.deliveryText': 'Turli sohalarda 20+ loyiha topshirildi',
    'exp.infra': 'INFRASTRUKTURA',
    'exp.infraText': 'CI/CD pipeline va bulut arxitekturasi joriy etildi',
    'exp.motion': 'HARAKAT TIZIMI',
    'exp.motionText': 'GSAP va Three.js asosida maxsus animatsiya tizimlari',
    'exp.jumpLearning': 'O‘QISH',
    'exp.jumpFreelance': 'FRILANS',
    'exp.present': 'HOZIR',

    'projects.eyebrow': 'LOYIHALAR',
    'projects.title': 'SELECTED WORKS',
    'projects.subtitle': 'Tanlangan web, landing va client loyihalar. Katta plitkalar — asosiy case’lar.',
    'landing.eyebrow': 'FOUNDER VENTURES',
    'landing.title': 'MENING STARTUPLARIM',
    'landing.subtitle': 'Aether AI, Afterform va Maison Éléara — o‘zim qurgan 3 ta startap.',

    'talk.watermark': 'HELLO',
    'talk.line1': 'KELING,',
    'talk.line2': 'GAPLASHAMIZ',
    'talk.intro': 'Loyiha, hamkorlik yoki savol bo‘lsa — o‘zingizga qulay usulda yozing.',
    'talk.cta': 'BOG‘LANISH',
    'talk.telegram': 'Telegram’da yozish',
    'talk.email': 'Email yuborish',
    'talk.role': 'Full-stack dasturchi, Toshkent',

    'services.title': 'TAQDIM ETADIGAN XIZMATLAR',
    'services.subtitle': 'MIJOZ MAQSADLARIGA MOS, KO‘RINISHGA YOQIMLI VA ISHLAYDIGAN SAYTLAR. BARCHA PLATFORMALARDA BIR XIL FOYDALANUVCHI TAJRIBASI.',
    'services.uiux': 'UI/UX',
    'services.uiuxDesc': 'Foydalanuvchi tadqiqoti, wireframe, interaktiv prototip va usability tekshiruvi. Murakkab jarayonlarni sodda, yoqimli tajribaga aylantirish.',
    'services.uiuxDel': 'NATIJA: USER FLOW, WIREFRAME, DESIGN TOKEN',
    'services.web': 'VEB DIZAYN',
    'services.webDesc': 'Moslashuvchan layout, tipografiya ierarxiyasi, yuqori kontrast rejimlar va aniq interaktiv animatsiyalar bilan maxsus veb estetika.',
    'services.webDel': 'NATIJA: TO‘LIQ RESPONSIVE DIZAYN, FIGMA TIZIMI',
    'services.landing': 'LANDING PAGE DIZAYN',
    'services.landingDesc': 'Startap, mahsulot chiqarish va shaxsiy brendlar uchun yuqori konversiyali editorial landing page lar.',
    'services.landingDel': 'NATIJA: COPY STRUKTURASI, CUSTOM GRAFIKA, WEBFLOW KOD',
    'services.inquire': 'SO‘ROV ↗',
    'services.motion': 'Jarayon · doimiy harakat',

    'start.back': '← Portfolio',
    'start.name': 'Avazov<br>Ogabek',
    'start.role': 'Full-stack dasturchi · Toshkent. Editorial web + product.',
    'start.title': 'Bog‘lanish',
    'start.intro': 'Loyiha, hamkorlik yoki savol — 24 soat ichida javob.',
    'start.emailLabel': 'Email',
    'start.tgLabel': 'Telegram',
    'start.igLabel': 'Instagram',
    'start.phName': 'Ismingiz',
    'start.phContact': 'Email yoki Telegram',
    'start.phMessage': 'Loyiha haqida qisqacha...',
    'start.submit': 'Xabar yuborish →',
    'start.readyLabel': 'Tez xabar',
    'start.chip.landing': 'Landing',
    'start.chip.portfolio': 'Portfolio',
    'start.chip.startup': 'Startup',
    'start.chip.uiux': 'UI/UX',
    'start.chip.redesign': 'Redesign',
    'start.chip.other': 'Boshqa',
    'start.msg.landing': 'Salom! Landing page kerak.',
    'start.msg.portfolio': 'Portfolio sayt yasash kerak.',
    'start.msg.startup': 'Startup MVP uchun sayt kerak.',
    'start.msg.uiux': 'UI/UX audit kerak.',
    'start.msg.redesign': 'Mavjud saytni redesign qilish kerak.',
    'start.msg.other': 'Boshqa savol / taklif bor.',

    'footer.rights': 'PORTFOLIO. BARCHA HUQUQLAR HIMOYALANGAN',
    'footer.designBy': 'DIZAYN: AVAZOV OGABEK',
    'footer.instagram': 'INSTAGRAM',
    'footer.telegram': 'TELEGRAM',
    'footer.email': 'EMAIL',
    'footer.twitter': 'TWITTER',
    'footer.linkedin': 'LINKEDIN',
    'footer.github': 'GITHUB',
    'footer.contactMe': 'MEN BILAN ALOQA',

    'modal.category': 'TURKUM',
    'modal.highlights': 'Asosiy jihatlar',
    'modal.deliverables': 'Asosiy natijalar',
    'modal.tech': 'Texnologiyalar & Stack',
    'modal.conversation': 'SUHBATNI BOSHLASH',
    'modal.build': 'BIRGALIKDA QURAYLIK',
    'modal.name': 'Ismingiz',
    'modal.email': 'Email manzil',
    'modal.service': 'Kerakli xizmat',
    'modal.message': 'Xabar',
    'modal.send': 'XABAR YUBORISH',
    'modal.opt.landing': 'Landing Page Dizayn',
    'modal.opt.uiux': 'UI/UX Dizayn',
    'modal.opt.web': 'Veb Dizayn',
    'modal.opt.mobile': 'Mobil Ilova Dizayn',
    'modal.opt.figma': 'UI Dizayn Figma',
    'modal.opt.other': 'Boshqa / To‘liq loyiha',
    'modal.placeholder.message': 'Loyiha, maqsad va muddat haqida yozing...',
    'cart.title': 'SAVAT',
    'cart.empty': 'Savat bo‘sh.',
    'cart.subtotal': 'JAMI',
    'cart.checkout': 'TO‘LOVGA O‘TISH',
    'cart.remove': 'O‘chirish',

    'lang.uz': 'UZ',
    'lang.en': 'EN',
    'lang.ru': 'RU'
  },

  en: {
    'meta.title': 'Avazov Ogabek — Designer & Developer Portfolio',
    'meta.description': 'Portfolio of Avazov Ogabek — UI/UX, web design, landing pages, and interactive digital experiences.',

    'brand.wordmark': 'AVAZOV',
    'brand.tagline': 'WEB · AI · CLOUD',
    'brand.homeLabel': 'Og‘abek Avazov — home',

    'nav.home': 'HOME',
    'nav.about': 'ABOUT ME',
    'nav.experience': 'EXPERIENCE',
    'nav.projects': 'PROJECTS',
    'nav.landing': 'MY STARTUPS',
    'nav.talk': 'CONTACT',
    'nav.services': 'SERVICES',
    'nav.contact': 'CONTACT',

    'mobile.role': 'Freelance Designer & Developer',

    'hero.designer': 'DESIGNER EST.2000',
    'hero.pitch': 'READY TO BUILD STAND-OUT WEBSITES WITH ME?',
    'hero.uiux': 'UI/UX',
    'hero.websites': 'WEBSITES',
    'hero.web': 'WEB DESIGN / REDESIGN',
    'hero.landing': 'LANDING',
    'hero.app': 'MOBILE APP',
    'hero.scrollAbout': 'Scroll to About Section',
    'hero.contactLabel': 'Get in touch',
    'hero.contactAria': 'Open contact page',

    'about.headline': 'TURNING VISIONARY IDEAS INTO FAST, DISTINCTIVE DIGITAL EXPERIENCES',
    'about.based': 'UZBEKISTAN • WORLDWIDE',
    'about.discipline': 'DISCIPLINE & CRAFT',
    'about.stack': 'UI/UX • WEB DESIGN • WEBFLOW • FIGMA',
    'about.summary': 'I SPECIALIZE IN BUILDING BESPOKE DIGITAL PRODUCTS WHERE PURPOSEFUL EDITORIAL DESIGN MEETS ROBUST ENGINEERING. CREATING EXPERIENCES WITH INTENTIONAL MOTION, SYSTEMATIC RIGOR, AND MEASURABLE IMPACT.',
    'about.cta': 'GET IN TOUCH',
    'about.services': 'SERVICES',
    'about.detail': 'DETAILS',
    'about.bgVision': 'BACKGROUND & VISION',
    'about.scrollExpand': 'SCROLL TO EXPAND',
    'about.titleFirst': 'ABOUT',
    'about.titleRest': 'ME',

    'bio.back': 'Portfolio',
    'bio.name': 'Avazov Ogabek',
    'bio.role': 'Full-stack developer · UI/UX designer',
    'bio.location': 'Uzbekistan · Worldwide',
    'bio.section.story': 'Biography',
    'bio.tagline': 'Turning ideas into fast, distinctive digital experiences',
    'bio.story1': 'I am a fullstack developer and creative technologist. I treat frontend, backend, and product design as one system.',
    'bio.story2': 'Through self-directed learning I deeply studied React, Node.js, TypeScript, and modern animation stacks — then moved into production freelance work.',
    'bio.story3': 'Today I build high-converting landings, interactive portfolios, and scalable web products for clients and my own startups.',
    'bio.focus1': 'UI/UX',
    'bio.focus2': 'Web Design',
    'bio.focus3': 'Full-stack',
    'bio.focus4': 'Webflow',
    'bio.focus5': 'Figma',
    'bio.section.stack': 'Full-stack stack',
    'bio.stack.frontend': 'Frontend',
    'bio.stack.backend': 'Backend',
    'bio.stack.design': 'Design',
    'bio.section.path': 'Milestones',
    'bio.m1title': 'Foundations',
    'bio.m1text': '500+ hours of hands-on development — from HTML/CSS/JS to a modern stack.',
    'bio.m2title': 'Ecosystem',
    'bio.m2text': 'Full product cycle with React, Node.js, and TypeScript.',
    'bio.m3title': 'Portfolio',
    'bio.m3text': '15+ production-ready projects and 20+ freelance deliveries.',
    'bio.m4title': 'Startups',
    'bio.m4text': 'Aether AI, Afterform, Maison Éléara — founder landings.',
    'bio.section.values': 'Values',
    'bio.v1title': 'Precision',
    'bio.v1text': 'Every interface is built for measurable outcomes.',
    'bio.v2title': 'Speed',
    'bio.v2text': 'Fast iteration, clean code, reliable deploys.',
    'bio.v3title': 'Aesthetics',
    'bio.v3text': 'Editorial typography + engineering — together.',
    'bio.cta.contact': 'Get in touch',
    'bio.cta.services': 'Services',
    'bio.cta.works': 'Projects',

    'exp.phase.origin': 'ORIGIN & FOUNDATIONS',
    'exp.phase.learning': 'SELF-DIRECTED LEARNING',
    'exp.phase.freelance': 'FREELANCE / INDEPENDENT',
    'exp.badge': 'FOUNDATION & JOURNEY',
    'exp.where': "WHERE<br>I'VE BEEN",
    'exp.intro': 'My professional journey through different roles and environments.',
    'exp.learningLabel': 'SELF-DIRECTED LEARNING',
    'exp.creative': 'CREATIVE<br>TECHNOLOGIST',
    'exp.learningDesc': 'Intensive self-education period exploring web technologies, creative coding, and modern development practices.',
    'exp.m1': 'MILESTONE 01',
    'exp.m1text': 'Completed 500+ hours of hands-on development',
    'exp.m2': 'MILESTONE 02',
    'exp.m2text': 'Mastered React, Node.js, and TypeScript ecosystem',
    'exp.m3': 'MILESTONE 03',
    'exp.m3text': 'Built portfolio of 15+ production-ready projects',
    'exp.freelanceLabel': 'FREELANCE / INDEPENDENT',
    'exp.commercial': 'COMMERCIAL',
    'exp.fullstack': 'FULL STACK<br>DEVELOPER',
    'exp.freelanceDesc': 'Building premium web experiences for clients worldwide. Specializing in interactive frontends, scalable backends, and AI-powered applications.',
    'exp.delivery': 'DELIVERY',
    'exp.deliveryText': 'Delivered 20+ projects across diverse industries',
    'exp.infra': 'INFRASTRUCTURE',
    'exp.infraText': 'Implemented CI/CD pipelines and cloud architecture',
    'exp.motion': 'MOTION SYSTEM',
    'exp.motionText': 'Created custom animation systems with GSAP and Three.js',
    'exp.jumpLearning': 'LEARNING',
    'exp.jumpFreelance': 'FREELANCE',
    'exp.present': 'PRESENT',

    'projects.eyebrow': 'PROJECTS',
    'projects.title': 'SELECTED WORKS',
    'projects.subtitle': 'Selected web, landing, and client projects. Larger tiles mark primary cases.',
    'landing.eyebrow': 'FOUNDER VENTURES',
    'landing.title': 'MY STARTUPS',
    'landing.subtitle': 'Aether AI, Afterform, and Maison Éléara — three startups I built.',

    'talk.watermark': 'HELLO',
    'talk.line1': 'LET’S',
    'talk.line2': 'TALK',
    'talk.intro': 'A project, a collaboration or a question: write in whatever way suits you.',
    'talk.cta': 'GET IN TOUCH',
    'talk.telegram': 'Message on Telegram',
    'talk.email': 'Send an email',
    'talk.role': 'Full-stack developer, Tashkent',

    'services.title': 'THE SERVICES WE PROVIDE',
    'services.subtitle': "CREATING VISUALLY APPEALING AND FUNCTIONAL WEBSITES TAILORED TO THE CLIENT'S NEEDS AND GOALS. PROVIDING A CONSISTENT USER EXPERIENCE ACROSS PLATFORMS.",
    'services.uiux': 'UI/UX',
    'services.uiuxDesc': 'User research, wireframing, interactive prototyping, and usability validation. Transforming complex workflows into effortless, delightful digital experiences.',
    'services.uiuxDel': 'DELIVERABLES: USER FLOWS, WIREFRAMES, DESIGN TOKENS',
    'services.web': 'WEB DESIGN',
    'services.webDesc': 'Bespoke web aesthetics with flawless responsive layouts, typography hierarchy, high-contrast dark modes, and crisp interactive animations.',
    'services.webDel': 'DELIVERABLES: FULL RESPONSIVE WEB DESIGNS, FIGMA SYSTEM',
    'services.landing': 'LANDING PAGE DESIGN',
    'services.landingDesc': 'High-converting editorial landing pages tailored for startups, product launches, and personal brands. Engineered to capture attention and boost conversions.',
    'services.landingDel': 'DELIVERABLES: COPYWRITING STRUCTURE, CUSTOM 3D/GRAPHICS, WEBFLOW CODE',
    'services.inquire': 'INQUIRE ↗',
    'services.motion': 'Process · always in motion',

    'start.back': '← Portfolio',
    'start.name': 'Avazov<br>Ogabek',
    'start.role': 'Full-stack developer · Tashkent. Editorial web + product.',
    'start.title': 'Get in touch',
    'start.intro': 'Project, partnership or a question — reply within 24 hours.',
    'start.emailLabel': 'Email',
    'start.tgLabel': 'Telegram',
    'start.igLabel': 'Instagram',
    'start.phName': 'Your name',
    'start.phContact': 'Email or Telegram',
    'start.phMessage': 'Briefly about the project...',
    'start.submit': 'Send message →',
    'start.readyLabel': 'Quick message',
    'start.chip.landing': 'Landing',
    'start.chip.portfolio': 'Portfolio',
    'start.chip.startup': 'Startup',
    'start.chip.uiux': 'UI/UX',
    'start.chip.redesign': 'Redesign',
    'start.chip.other': 'Other',
    'start.msg.landing': 'Hi! I need a landing page.',
    'start.msg.portfolio': 'I need a portfolio website.',
    'start.msg.startup': 'I need a startup MVP site.',
    'start.msg.uiux': 'I need a UI/UX audit.',
    'start.msg.redesign': 'I need a redesign of an existing site.',
    'start.msg.other': 'I have another question / proposal.',

    'footer.rights': 'PORTFOLIO. ALL RIGHTS RESERVED',
    'footer.designBy': 'DESIGN BY AVAZOV OGABEK',
    'footer.instagram': 'INSTAGRAM',
    'footer.telegram': 'TELEGRAM',
    'footer.email': 'EMAIL',
    'footer.twitter': 'TWITTER',
    'footer.linkedin': 'LINKEDIN',
    'footer.github': 'GITHUB',
    'footer.contactMe': 'CONTACT ME',

    'modal.category': 'CATEGORY',
    'modal.highlights': 'Key Highlights',
    'modal.deliverables': 'Key Deliverables',
    'modal.tech': 'Technologies & Stack',
    'modal.conversation': 'START A CONVERSATION',
    'modal.build': "LET'S BUILD SOMETHING",
    'modal.name': 'Your Name',
    'modal.email': 'Email Address',
    'modal.service': 'Service Required',
    'modal.message': 'Message',
    'modal.send': 'SEND MESSAGE',
    'modal.opt.landing': 'Landing Page Design',
    'modal.opt.uiux': 'UI/UX Design',
    'modal.opt.web': 'Web Design',
    'modal.opt.mobile': 'Mobile App Design',
    'modal.opt.figma': 'UI Design Figma',
    'modal.opt.other': 'Other / Full Project',
    'modal.placeholder.message': 'Tell me about your project, goals, and timeline...',
    'cart.title': 'SHOPPING BAG',
    'cart.empty': 'Your bag is empty.',
    'cart.subtotal': 'SUBTOTAL',
    'cart.checkout': 'PROCEED TO CHECKOUT',
    'cart.remove': 'Remove',

    'lang.uz': 'UZ',
    'lang.en': 'EN',
    'lang.ru': 'RU'
  },

  ru: {
    'meta.title': 'Avazov Ogabek — Портфолио дизайнера и разработчика',
    'meta.description': 'Портфолио Avazov Ogabek: UI/UX, веб-дизайн, лендинги и интерактивные цифровые продукты.',

    'brand.wordmark': 'AVAZOV',
    'brand.tagline': 'WEB · AI · CLOUD',
    'brand.homeLabel': 'Огабек Авазов — главная',

    'nav.home': 'ГЛАВНАЯ',
    'nav.about': 'ОБО МНЕ',
    'nav.experience': 'ОПЫТ',
    'nav.projects': 'ПРОЕКТЫ',
    'nav.landing': 'МОИ СТАРТАПЫ',
    'nav.talk': 'СВЯЗЬ',
    'nav.services': 'УСЛУГИ',
    'nav.contact': 'КОНТАКТ',

    'mobile.role': 'Фриланс дизайнер и разработчик',

    'hero.designer': 'ДИЗАЙНЕР EST.2000',
    'hero.pitch': 'ГОТОВЫ СОЗДАТЬ СО МНОЙ САЙТЫ, КОТОРЫЕ ВЫДЕЛЯЮТСЯ?',
    'hero.uiux': 'UI/UX',
    'hero.websites': 'ВЕБ-САЙТЫ',
    'hero.web': 'ВЕБ-ДИЗАЙН / РЕДИЗАЙН',
    'hero.landing': 'LANDING',
    'hero.app': 'МОБИЛЬНОЕ ПРИЛОЖЕНИЕ',
    'hero.scrollAbout': 'Перейти к разделу Обо мне',
    'hero.contactLabel': 'Связаться со мной',
    'hero.contactAria': 'Открыть страницу связи',

    'about.headline': 'ПРЕВРАЩАЮ СМЕЛЫЕ ИДЕИ В БЫСТРЫЕ И САМОБЫТНЫЕ ЦИФРОВЫЕ ПРОДУКТЫ',
    'about.based': 'УЗБЕКИСТАН • ПО ВСЕМУ МИРУ',
    'about.discipline': 'ДИСЦИПЛИНА И МАСТЕРСТВО',
    'about.stack': 'UI/UX • ВЕБ-ДИЗАЙН • WEBFLOW • FIGMA',
    'about.summary': 'СОЗДАЮ ЦИФРОВЫЕ ПРОДУКТЫ НА СТЫКЕ EDITORIAL-ДИЗАЙНА И НАДЁЖНОЙ ИНЖЕНЕРИИ. ОСОЗНАННОЕ ДВИЖЕНИЕ, СИСТЕМНАЯ ТОЧНОСТЬ И ИЗМЕРИМЫЙ РЕЗУЛЬТАТ.',
    'about.cta': 'СВЯЗАТЬСЯ',
    'about.services': 'УСЛУГИ',
    'about.detail': 'ПОДРОБНЕЕ',

    'bio.back': 'Портфолио',
    'bio.name': 'Avazov Ogabek',
    'bio.role': 'Full-stack разработчик · UI/UX дизайнер',
    'bio.location': 'Узбекистан · По всему миру',
    'bio.section.story': 'Биография',
    'bio.tagline': 'Превращаю идеи в быстрые и характерные цифровые опыты',
    'bio.story1': 'Я fullstack-разработчик и креативный технолог. Frontend, backend и продуктовый дизайн вижу как одну систему.',
    'bio.story2': 'В период самостоятельного обучения глубоко освоил React, Node.js, TypeScript и современный animation stack — затем перешёл к production-фрилансу.',
    'bio.story3': 'Сейчас создаю конверсионные лендинги, интерактивные портфолио и масштабируемые web-продукты для клиентов и своих стартапов.',
    'bio.focus1': 'UI/UX',
    'bio.focus2': 'Web Design',
    'bio.focus3': 'Full-stack',
    'bio.focus4': 'Webflow',
    'bio.focus5': 'Figma',
    'bio.section.stack': 'Full-stack stack',
    'bio.stack.frontend': 'Frontend',
    'bio.stack.backend': 'Backend',
    'bio.stack.design': 'Дизайн',
    'bio.section.path': 'Этапы',
    'bio.m1title': 'Основы',
    'bio.m1text': '500+ часов практики — от HTML/CSS/JS до современного стека.',
    'bio.m2title': 'Экосистема',
    'bio.m2text': 'Полный продуктовый цикл на React, Node.js и TypeScript.',
    'bio.m3title': 'Портфолио',
    'bio.m3text': '15+ production-ready проектов и 20+ фриланс-сдач.',
    'bio.m4title': 'Стартапы',
    'bio.m4text': 'Aether AI, Afterform, Maison Éléara — founder-лендинги.',
    'bio.section.values': 'Ценности',
    'bio.v1title': 'Точность',
    'bio.v1text': 'Каждый интерфейс строится под измеримый результат.',
    'bio.v2title': 'Скорость',
    'bio.v2text': 'Быстрые итерации, чистый код, надёжный deploy.',
    'bio.v3title': 'Эстетика',
    'bio.v3text': 'Editorial-типографика + инженерия — вместе.',
    'bio.cta.contact': 'Связаться',
    'bio.cta.services': 'Услуги',
    'bio.cta.works': 'Проекты',
    'about.bgVision': 'ФОН И ВИДЕНИЕ',
    'about.scrollExpand': 'ПРОКРУТИТЕ ДЛЯ РАСКРЫТИЯ',
    'about.titleFirst': 'ОБО',
    'about.titleRest': 'МНЕ',

    'exp.phase.origin': 'НАЧАЛО И ОСНОВЫ',
    'exp.phase.learning': 'САМООБРАЗОВАНИЕ',
    'exp.phase.freelance': 'ФРИЛАНС / НЕЗАВИСИМО',
    'exp.badge': 'ОСНОВА И ПУТЬ',
    'exp.where': 'ГДЕ<br>Я БЫЛ',
    'exp.intro': 'Мой профессиональный путь через разные роли и среды.',
    'exp.learningLabel': 'САМООБРАЗОВАНИЕ',
    'exp.creative': 'CREATIVE<br>ТЕХНОЛОГ',
    'exp.learningDesc': 'Интенсивное самообучение: веб-технологии, креативный код и современные практики разработки.',
    'exp.m1': 'ЭТАП 01',
    'exp.m1text': '500+ часов практической разработки',
    'exp.m2': 'ЭТАП 02',
    'exp.m2text': 'Освоил экосистему React, Node.js и TypeScript',
    'exp.m3': 'ЭТАП 03',
    'exp.m3text': 'Портфолио из 15+ production-ready проектов',
    'exp.freelanceLabel': 'ФРИЛАНС / НЕЗАВИСИМО',
    'exp.commercial': 'КОММЕРЦИЯ',
    'exp.fullstack': 'FULL STACK<br>РАЗРАБОТЧИК',
    'exp.freelanceDesc': 'Премиальные веб-продукты для клиентов по всему миру. Интерактивный фронтенд, масштабируемый бэкенд и AI-решения.',
    'exp.delivery': 'ПОСТАВКА',
    'exp.deliveryText': 'Сдано 20+ проектов в разных отраслях',
    'exp.infra': 'ИНФРАСТРУКТУРА',
    'exp.infraText': 'Внедрены CI/CD и облачная архитектура',
    'exp.motion': 'СИСТЕМА ДВИЖЕНИЯ',
    'exp.motionText': 'Кастомные анимации на GSAP и Three.js',
    'exp.jumpLearning': 'УЧЁБА',
    'exp.jumpFreelance': 'ФРИЛАНС',
    'exp.present': 'СЕЙЧАС',

    'projects.eyebrow': 'ПРОЕКТЫ',
    'projects.title': 'SELECTED WORKS',
    'projects.subtitle': 'Избранные web, landing и client проекты. Крупные плитки — главные кейсы.',
    'landing.eyebrow': 'FOUNDER VENTURES',
    'landing.title': 'МОИ СТАРТАПЫ',
    'landing.subtitle': 'Aether AI, Afterform и Maison Éléara — три стартапа, которые я построил.',

    'talk.watermark': 'HELLO',
    'talk.line1': 'ДАВАЙТЕ',
    'talk.line2': 'ОБСУДИМ',
    'talk.intro': 'Проект, сотрудничество или вопрос — пишите удобным способом.',
    'talk.cta': 'СВЯЗАТЬСЯ',
    'talk.telegram': 'Написать в Telegram',
    'talk.email': 'Отправить email',
    'talk.role': 'Full-stack разработчик, Ташкент',

    'services.title': 'УСЛУГИ, КОТОРЫЕ МЫ ПРЕДОСТАВЛЯЕМ',
    'services.subtitle': 'КРАСИВЫЕ И РАБОЧИЕ САЙТЫ ПОД ЗАДАЧИ КЛИЕНТА. ЕДИНЫЙ ПОЛЬЗОВАТЕЛЬСКИЙ ОПЫТ НА ВСЕХ ПЛАТФОРМАХ.',
    'services.uiux': 'UI/UX',
    'services.uiuxDesc': 'Исследование пользователей, wireframe, интерактивные прототипы и проверка usability. Сложные процессы — в лёгкий опыт.',
    'services.uiuxDel': 'РЕЗУЛЬТАТ: USER FLOW, WIREFRAME, DESIGN TOKEN',
    'services.web': 'ВЕБ-ДИЗАЙН',
    'services.webDesc': 'Авторская веб-эстетика: адаптив, типографика, контрастные режимы и точные анимации.',
    'services.webDel': 'РЕЗУЛЬТАТ: ПОЛНЫЙ RESPONSIVE ДИЗАЙН, FIGMA-СИСТЕМА',
    'services.landing': 'ДИЗАЙН ЛЕНДИНГА',
    'services.landingDesc': 'Конверсионные editorial-лендинги для стартапов, запусков и личных брендов.',
    'services.landingDel': 'РЕЗУЛЬТАТ: СТРУКТУРА КОПИРАЙТА, ГРАФИКА, WEBFLOW КОД',
    'services.inquire': 'ЗАПРОС ↗',
    'services.motion': 'Процесс · в постоянном движении',

    'start.back': '← Портфолио',
    'start.name': 'Avazov<br>Ogabek',
    'start.role': 'Full-stack разработчик · Ташкент. Editorial web + product.',
    'start.title': 'Связаться',
    'start.intro': 'Проект, сотрудничество или вопрос — ответ в течение 24 часов.',
    'start.emailLabel': 'Email',
    'start.tgLabel': 'Telegram',
    'start.igLabel': 'Instagram',
    'start.phName': 'Ваше имя',
    'start.phContact': 'Email или Telegram',
    'start.phMessage': 'Кратко о проекте...',
    'start.submit': 'Отправить →',
    'start.readyLabel': 'Быстрое сообщение',
    'start.chip.landing': 'Landing',
    'start.chip.portfolio': 'Portfolio',
    'start.chip.startup': 'Startup',
    'start.chip.uiux': 'UI/UX',
    'start.chip.redesign': 'Redesign',
    'start.chip.other': 'Другое',
    'start.msg.landing': 'Здравствуйте! Нужен лендинг.',
    'start.msg.portfolio': 'Нужен сайт-портфолио.',
    'start.msg.startup': 'Нужен сайт для startup MVP.',
    'start.msg.uiux': 'Нужен UI/UX аудит.',
    'start.msg.redesign': 'Нужен redesign существующего сайта.',
    'start.msg.other': 'Есть другой вопрос / предложение.',

    'footer.rights': 'ПОРТФОЛИО. ВСЕ ПРАВА ЗАЩИЩЕНЫ',
    'footer.designBy': 'ДИЗАЙН: AVAZOV OGABEK',
    'footer.instagram': 'INSTAGRAM',
    'footer.telegram': 'TELEGRAM',
    'footer.email': 'EMAIL',
    'footer.twitter': 'TWITTER',
    'footer.linkedin': 'LINKEDIN',
    'footer.github': 'GITHUB',
    'footer.contactMe': 'СВЯЗАТЬСЯ',

    'modal.category': 'КАТЕГОРИЯ',
    'modal.highlights': 'Ключевые моменты',
    'modal.deliverables': 'Ключевые результаты',
    'modal.tech': 'Технологии и стек',
    'modal.conversation': 'НАЧАТЬ РАЗГОВОР',
    'modal.build': 'ДАВАЙТЕ СОЗДАДИМ',
    'modal.name': 'Ваше имя',
    'modal.email': 'Email',
    'modal.service': 'Нужная услуга',
    'modal.message': 'Сообщение',
    'modal.send': 'ОТПРАВИТЬ',
    'modal.opt.landing': 'Дизайн лендинга',
    'modal.opt.uiux': 'UI/UX дизайн',
    'modal.opt.web': 'Веб-дизайн',
    'modal.opt.mobile': 'Дизайн мобильного приложения',
    'modal.opt.figma': 'UI дизайн в Figma',
    'modal.opt.other': 'Другое / Полный проект',
    'modal.placeholder.message': 'Расскажите о проекте, целях и сроках...',
    'cart.title': 'КОРЗИНА',
    'cart.empty': 'Корзина пуста.',
    'cart.subtotal': 'ИТОГО',
    'cart.checkout': 'К ОПЛАТЕ',
    'cart.remove': 'Удалить',

    'lang.uz': 'UZ',
    'lang.en': 'EN',
    'lang.ru': 'RU'
  }
};

let currentLang = DEFAULT_LANG;

export function getLang() {
  return currentLang;
}

export function t(key, lang = currentLang) {
  const pack = translations[lang] || translations[DEFAULT_LANG];
  return pack[key] ?? translations.en[key] ?? key;
}

export function applyLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;
  currentLang = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = t(key, lang);
    if (el.hasAttribute('data-i18n-html')) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder'), lang));
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'), lang));
  });

  document.querySelectorAll('[data-i18n-option]').forEach((el) => {
    el.textContent = t(el.getAttribute('data-i18n-option'), lang);
  });

  const path = window.location.pathname || '';
  const isBioPage = /bio\.html$/i.test(path) || document.body?.dataset?.page === 'bio';
  const isStartPage = /start\.html$/i.test(path) || document.body?.dataset?.page === 'start';
  const title = isBioPage
    ? `${t('bio.name', lang)} — ${t('bio.section.story', lang)}`
    : isStartPage
      ? `${t('start.title', lang)} — Avazov Ogabek`
      : t('meta.title', lang);
  const desc = isBioPage
    ? t('bio.tagline', lang)
    : isStartPage
      ? t('start.intro', lang)
      : t('meta.description', lang);
  document.title = title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', desc);

  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    const active = btn.getAttribute('data-lang-btn') === lang;
    btn.classList.toggle('bg-black', active);
    btn.classList.toggle('text-white', active);
    btn.classList.toggle('border-black', active);
    btn.classList.toggle('text-neutral-600', !active);
    btn.classList.toggle('border-neutral-300', !active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });

  window.dispatchEvent(new CustomEvent('echo:langchange', { detail: { lang } }));
}

export function initI18n() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const lang = SUPPORTED_LANGS.includes(saved) ? saved : DEFAULT_LANG;
  applyLanguage(lang);

  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.getAttribute('data-lang-btn'));
    });
  });
}

window.EchoI18n = { t, getLang, applyLanguage, initI18n, SUPPORTED_LANGS, DEFAULT_LANG };
