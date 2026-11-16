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

    'nav.home': 'BOSH SAHIFA',
    'nav.about': 'MEN HAQIMDA',
    'nav.experience': 'TAJRIBA',
    'nav.projects': 'LOYIHALAR',
    'nav.landing': 'LANDING PAGE',
    'nav.services': 'XIZMATLAR',
    'nav.contact': 'ALOQA',

    'mobile.role': 'Mustaqil Dizayner & Dasturchi',

    'hero.designer': 'DIZAYNER EST.2000',
    'hero.pitch': 'OLAMOMDAN AJRALIB TURADIGAN SAYTLAR YARATISHGA ISHQIYMAN.',
    'hero.uiux': 'UI/UX',
    'hero.web': 'VEB DIZAYN',
    'hero.landing': 'LANDING PAGE',
    'hero.scrollAbout': 'Men haqimda bo‘limiga o‘tish',

    'about.headline': 'G‘OYALARNI TEZ VA O‘ZIGA XOS RAQAMLI TAJRIBALARGA AYLANTRISH',
    'about.based': 'O‘ZBEKISTON • DUNYO BO‘YLAB',
    'about.discipline': 'YO‘NALISH & MAHORAT',
    'about.stack': 'UI/UX • VEB DIZAYN • WEBFLOW • FIGMA',
    'about.summary': 'MAQSADLI EDITORIAL DIZAYN VA MUSTAHKAM MUHANDISLIK UCHRAGAN JOYDA MAXSUS RAQAMLI MAHSULOTLAR YARATAMAN. QASDDAN HARAKAT, TIZIMLI ANIQLIK VA O‘LCHANADIGAN NATIJA.',
    'about.cta': 'BOG‘LANISH',
    'about.services': 'XIZMATLAR',
    'about.bgVision': 'TARIX & VIZION',
    'about.scrollExpand': 'KATTALASHTIRISH UCHUN AYLANTIRING',
    'about.titleFirst': 'MEN',
    'about.titleRest': 'HAQIMDA',

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
    'landing.title': 'LANDING PAGE LAR',

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

    'footer.rights': 'PORTFOLIO. BARCHA HUQUQLAR HIMOYALANGAN',
    'footer.designBy': 'DIZAYN: AVAZOV OGABEK',
    'footer.instagram': 'INSTAGRAM',
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

    'nav.home': 'HOME',
    'nav.about': 'ABOUT ME',
    'nav.experience': 'EXPERIENCE',
    'nav.projects': 'PROJECTS',
    'nav.landing': 'LANDING PAGES',
    'nav.services': 'SERVICES',
    'nav.contact': 'CONTACT',

    'mobile.role': 'Freelance Designer & Developer',

    'hero.designer': 'DESIGNER EST.2000',
    'hero.pitch': 'I AM PASSIONATE ABOUT CREATING WEBSITES THAT STAND OUT FROM THE CROWD.',
    'hero.uiux': 'UI/UX',
    'hero.web': 'WEB DESIGN',
    'hero.landing': 'LANDING PAGE',
    'hero.scrollAbout': 'Scroll to About Section',

    'about.headline': 'TURNING VISIONARY IDEAS INTO FAST, DISTINCTIVE DIGITAL EXPERIENCES',
    'about.based': 'UZBEKISTAN • WORLDWIDE',
    'about.discipline': 'DISCIPLINE & CRAFT',
    'about.stack': 'UI/UX • WEB DESIGN • WEBFLOW • FIGMA',
    'about.summary': 'I SPECIALIZE IN BUILDING BESPOKE DIGITAL PRODUCTS WHERE PURPOSEFUL EDITORIAL DESIGN MEETS ROBUST ENGINEERING. CREATING EXPERIENCES WITH INTENTIONAL MOTION, SYSTEMATIC RIGOR, AND MEASURABLE IMPACT.',
    'about.cta': 'GET IN TOUCH',
    'about.services': 'SERVICES',
    'about.bgVision': 'BACKGROUND & VISION',
    'about.scrollExpand': 'SCROLL TO EXPAND',
    'about.titleFirst': 'ABOUT',
    'about.titleRest': 'ME',

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
    'landing.title': 'LANDING PAGES',

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

    'footer.rights': 'PORTFOLIO. ALL RIGHTS RESERVED',
    'footer.designBy': 'DESIGN BY AVAZOV OGABEK',
    'footer.instagram': 'INSTAGRAM',
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

    'nav.home': 'ГЛАВНАЯ',
    'nav.about': 'ОБО МНЕ',
    'nav.experience': 'ОПЫТ',
    'nav.projects': 'ПРОЕКТЫ',
    'nav.landing': 'ЛЕНДИНГИ',
    'nav.services': 'УСЛУГИ',
    'nav.contact': 'КОНТАКТ',

    'mobile.role': 'Фриланс дизайнер и разработчик',

    'hero.designer': 'ДИЗАЙНЕР EST.2000',
    'hero.pitch': 'Я УВЛЕЧЁН СОЗДАНИЕМ САЙТОВ, КОТОРЫЕ ВЫДЕЛЯЮТСЯ.',
    'hero.uiux': 'UI/UX',
    'hero.web': 'ВЕБ-ДИЗАЙН',
    'hero.landing': 'ЛЕНДИНГ',
    'hero.scrollAbout': 'Перейти к разделу Обо мне',

    'about.headline': 'ПРЕВРАЩАЮ СМЕЛЫЕ ИДЕИ В БЫСТРЫЕ И САМОБЫТНЫЕ ЦИФРОВЫЕ ПРОДУКТЫ',
    'about.based': 'УЗБЕКИСТАН • ПО ВСЕМУ МИРУ',
    'about.discipline': 'ДИСЦИПЛИНА И МАСТЕРСТВО',
    'about.stack': 'UI/UX • ВЕБ-ДИЗАЙН • WEBFLOW • FIGMA',
    'about.summary': 'СОЗДАЮ ЦИФРОВЫЕ ПРОДУКТЫ НА СТЫКЕ EDITORIAL-ДИЗАЙНА И НАДЁЖНОЙ ИНЖЕНЕРИИ. ОСОЗНАННОЕ ДВИЖЕНИЕ, СИСТЕМНАЯ ТОЧНОСТЬ И ИЗМЕРИМЫЙ РЕЗУЛЬТАТ.',
    'about.cta': 'СВЯЗАТЬСЯ',
    'about.services': 'УСЛУГИ',
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
    'landing.title': 'ЛЕНДИНГИ',

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

    'footer.rights': 'ПОРТФОЛИО. ВСЕ ПРАВА ЗАЩИЩЕНЫ',
    'footer.designBy': 'ДИЗАЙН: AVAZOV OGABEK',
    'footer.instagram': 'INSTAGRAM',
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

  const title = t('meta.title', lang);
  const desc = t('meta.description', lang);
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
