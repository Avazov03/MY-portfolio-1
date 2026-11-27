import { initI18n, getLang, t } from './i18n.js?v=centersYo1';

const CENTERS = [
  {
    id: 'ui',
    color: '#A78BFA',
    image: 'assets/centers/design-system.jpg',
    href: '#services',
    name: { uz: 'Dizayn tizimi', en: 'Design system', ru: 'Дизайн-система' },
    sub: {
      uz: 'Komponent, token va ekranlar — bitta tizim',
      en: 'Components, tokens and screens — one system',
      ru: 'Компоненты, токены и экраны — одна система'
    },
    body: {
      uz: 'UI/UX dizayn tizimini quraman: tipografiya, rang, komponentlar va handoff. Dizayndan kodgacha bir xil til.',
      en: 'I build UI/UX systems: type, color, components and handoff — one language from design to code.',
      ru: 'Собираю UI/UX-систему: типографика, цвет, компоненты и handoff — один язык от дизайна до кода.'
    }
  },
  {
    id: 'web',
    color: '#60A5FA',
    image: 'assets/centers/web.jpg',
    href: '#projects',
    name: { uz: 'Veb ishlanmalar', en: 'Web builds', ru: 'Веб-разработка' },
    sub: {
      uz: 'Sayt, interfeys va joylash — bitta ritm',
      en: 'Site, interface and release — one rhythm',
      ru: 'Сайт, интерфейс и выпуск — один ритм'
    },
    body: {
      uz: 'Full-stack veb mahsulotlar: frontend, backend, tezlik va production joylash. Chiroyli UI + ishlaydigan tizim.',
      en: 'Full-stack web products: frontend, backend, speed and production release. Beautiful UI that actually ships.',
      ru: 'Full-stack веб-продукты: фронтенд, бэкенд, скорость и production. Красивый UI, который реально работает.'
    }
  },
  {
    id: 'land',
    color: '#F472B6',
    image: 'assets/centers/landing.jpg',
    href: '#projects',
    name: { uz: 'Landing sahifalar', en: 'Landing pages', ru: 'Лендинги' },
    sub: {
      uz: 'Sahifa, tezlik va chaqiruv — bitta oqim',
      en: 'Page, speed and call to action — one flow',
      ru: 'Страница, скорость и призыв — один поток'
    },
    body: {
      uz: 'Startap va brendlar uchun konversiyali landing: kuchli hero, isbot, taklif va aniq CTA.',
      en: 'Conversion landings for startups and brands: strong hero, proof, offer and a clear CTA.',
      ru: 'Конверсионные лендинги для стартапов и брендов: сильный хиро, доказательство, оффер и ясный CTA.'
    }
  },
  {
    id: 'startup',
    color: '#FACC15',
    image: 'assets/centers/startup.jpg',
    href: '#startups',
    name: { uz: 'Startap mahsulotlar', en: 'Startup products', ru: 'Стартап-продукты' },
    sub: {
      uz: 'ZONIC FIT va Yurist AI — jonli mahsulotlar',
      en: 'ZONIC FIT and Yurist AI — live products',
      ru: 'ZONIC FIT и Yurist AI — живые продукты'
    },
    body: {
      uz: 'O‘z startaplarim ustida ishlayman: mahsulot fikri, UI, build va reliz. Tez iteratsiya, aniq fokus.',
      en: 'I ship my own startups: product idea, UI, build and release. Fast iteration, sharp focus.',
      ru: 'Делаю свои стартапы: идея, UI, сборка и релиз. Быстрая итерация, чёткий фокус.'
    }
  },
  {
    id: 'brand',
    color: '#FB7185',
    image: 'assets/centers/brand.jpg',
    href: '#services',
    name: { uz: 'Brend identikasi', en: 'Brand identity', ru: 'Айдентика' },
    sub: {
      uz: 'Belgi, palitra va ovoz — bitta tizim',
      en: 'Mark, palette and voice — one system',
      ru: 'Знак, палитра и голос — одна система'
    },
    body: {
      uz: 'Shaxsiy va mahsulot brendi: belgi, rang, shrift va vizual qoidalar. Sayt bilan uyg‘un identika.',
      en: 'Personal and product brands: mark, color, type and visual rules — identity that fits the site.',
      ru: 'Личный и продуктовый бренд: знак, цвет, шрифт и правила — айдентика, согласованная с сайтом.'
    }
  },
  {
    id: 'ops',
    color: '#5EEAD4',
    image: 'assets/centers/delivery.jpg',
    href: '#talk',
    name: { uz: 'Yetkazish', en: 'Delivery', ru: 'Сдача' },
    sub: {
      uz: 'Loyiha, muddat va javob — bitta xona',
      en: 'Project, deadline and reply — one room',
      ru: 'Проект, срок и ответ — одна комната'
    },
    body: {
      uz: 'Loyihani muddatida yetkazaman: aniq bosqichlar, tez javob, tuzatishlar va ishonchli reliz.',
      en: 'I deliver on time: clear stages, fast replies, revisions and a reliable release.',
      ru: 'Сдаю в срок: понятные этапы, быстрый ответ, правки и надёжный релиз.'
    }
  }
];

export function mountCenters(root, opts = {}) {
  if (!root || root.dataset.mounted === '1') return;
  root.dataset.mounted = '1';
  const page = !!opts.page;
  const $ = (s) => root.querySelector(s);
  const assetBase = opts.assetBase || '';

  root.innerHTML = `
    <button id="back" type="button" data-i18n="centers.back">← BARCHA YO‘NALISHLAR</button>
    <div id="scene"><div id="ring"></div></div>
    <div id="ctitle">
      <div class="ceyebrow" data-i18n="centers.eyebrow">YO‘NALISHLAR</div>
      <h1 data-i18n="centers.title">Ish maydonlarim</h1>
      <p class="cser" data-i18n="centers.sub" data-i18n-html>har bir yo‘nalish qanday ko‘rinadi, <i>ish o‘zi yurganda</i></p>
    </div>
    <button class="wchev" id="wchev-l" type="button" data-i18n-aria="centers.prev" aria-label="Oldingi"><svg viewBox="0 0 14 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M 11 3 L 4 11 L 11 19"/></svg></button>
    <button class="wchev" id="wchev-r" type="button" data-i18n-aria="centers.next" aria-label="Keyingi"><svg viewBox="0 0 14 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M 3 3 L 10 11 L 3 19"/></svg></button>
    <div id="chint" data-i18n="centers.hint">o‘zi aylanadi · sudrab to‘xtating · batafsil uchun oldingi kartani bosing</div>
    <div id="dashview"><div class="dwrap" id="dwrap"></div></div>`;

  let openId = null;
  let cwA = 0;
  let cwT = 0;
  const NC = CENTERS.length;
  const C_STEP = 360 / NC;
  const ring = $('#ring');
  const cards = [];

  function lang() { return getLang(); }
  function imgSrc(c) { return assetBase + c.image + '?v=yoCardsDark2'; }

  function paintCard(c, el) {
    const L = lang();
    el.querySelector('.cname-t').textContent = c.name[L];
    el.querySelector('.csub').textContent = c.sub[L];
    const img = el.querySelector('.cpreview-img');
    img.src = imgSrc(c);
    img.alt = c.name[L];
  }

  CENTERS.forEach((c) => {
    const el = document.createElement('div');
    el.className = 'ccard';
    el.style.setProperty('--c', c.color);
    el.innerHTML = `
      <div class="cface">
        <div class="cprev">
          <img class="cpreview-img" src="${imgSrc(c)}" alt="" loading="eager" decoding="async">
          <div class="cprev-fade"></div>
        </div>
        <div class="cmeta">
          <div class="cname"><span class="dot"></span><span class="cname-t"></span></div>
          <div class="csub"></div>
        </div>
      </div>
      <div class="cback"><div class="bk">AVAZOV</div></div>`;
    paintCard(c, el);
    el.addEventListener('click', () => {
      if (cDragDist >= 8) return;
      const i = CENTERS.indexOf(c);
      if (i === focusedC()) openDash(c);
      else { cwT = -i * C_STEP; norm(); }
    });
    ring.appendChild(el);
    cards.push(el);
  });

  function focusedC() { return ((Math.round(-cwA / C_STEP) % NC) + NC) % NC; }
  function norm() { while (cwT - cwA > 180) cwT -= 360; while (cwT - cwA < -180) cwT += 360; }

  function layoutC() {
    const fi = focusedC();
    const w = root.clientWidth;
    const narrow = w < 700;
    if (narrow) {
      const step = Math.min(w * 0.78, 280);
      const pos = -cwA / C_STEP;
      ring.style.transform = 'none';
      cards.forEach((el, i) => {
        let d = i - pos;
        d = ((d % NC) + NC) % NC;
        if (d > NC / 2) d -= NC;
        const ad = Math.abs(d);
        const near = ad <= 1.55;
        el.style.display = near ? 'block' : 'none';
        el.style.transform = `translateX(${(d * step).toFixed(1)}px) scale(${(1 - Math.min(ad, 1) * 0.08).toFixed(3)})`;
        el.style.opacity = (1 - Math.min(ad, 1) * 0.42).toFixed(2);
        el.style.pointerEvents = near ? 'auto' : 'none';
        el.style.zIndex = String(10 - Math.round(ad));
        el.classList.toggle('focused', i === fi);
      });
      return;
    }
    const R = w < 1100 ? 520 : 650;
    ring.style.transform = `translateZ(${-R}px) rotateX(5deg) rotateY(${cwA.toFixed(2)}deg)`;
    cards.forEach((el, i) => {
      el.style.display = '';
      el.style.zIndex = '';
      el.style.transform = `rotateY(${(i * C_STEP).toFixed(1)}deg) translateZ(${R}px)`;
      const eff = Math.abs((((cwA + i * C_STEP) % 360) + 540) % 360 - 180) / 180;
      el.style.opacity = (1 - eff * 0.62).toFixed(2);
      el.style.pointerEvents = eff > 0.55 ? 'none' : 'auto';
      el.classList.toggle('focused', i === fi);
    });
  }

  function workHref(hash) { return page ? 'index.html' + hash : hash; }

  function openDash(c) {
    openId = c.id;
    root.classList.add('is-open');
    const L = lang();
    $('#dwrap').innerHTML = `
      <div class="detail">
        <div class="detail-media">
          <img src="${imgSrc(c)}" alt="${c.name[L]}" loading="eager">
        </div>
        <div class="detail-copy">
          <div class="detail-kicker" style="--c:${c.color}"><span class="dot"></span>${c.name[L]}</div>
          <h2>${c.name[L]}</h2>
          <p class="detail-sub">${c.sub[L]}</p>
          <p class="detail-body">${c.body[L]}</p>
          <div class="dcta">
            <a href="${workHref(c.href)}">${t('centers.openWork')}</a>
            <a href="${workHref('#talk')}">${t('centers.openTalk')}</a>
          </div>
        </div>
      </div>`;
    $('#dashview').scrollTop = 0;
  }

  function closeDash() {
    openId = null;
    root.classList.remove('is-open');
    if (!hovering && !cDragging) autoPaused = false;
  }
  $('#back').addEventListener('click', closeDash);

  /* team.zonic.fit kabi sekin auto-rotate; hover/drag = pauza */
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const AUTO_DEG = 0.12;
  let autoPaused = reduceMotion;
  let hovering = false;
  let resumeTimer = 0;

  let cDragging = false, cDragDist = 0, cLastX = 0, cOriginX = 0, cOriginY = 0, cIdle = null, cFlickV = 0, cFlickT = 0, cAxis = null;
  root.addEventListener('pointerdown', (e) => {
    if (root.classList.contains('is-open')) return;
    if (e.target.closest('.wchev, #back, #dashview')) return;
    cDragging = true; cDragDist = 0; cAxis = null;
    autoPaused = true;
    cLastX = cOriginX = e.clientX; cOriginY = e.clientY;
    cFlickV = 0; cFlickT = performance.now();
  });
  root.addEventListener('pointermove', (e) => {
    if (!cDragging) return;
    const travelX = e.clientX - cOriginX;
    const travelY = e.clientY - cOriginY;
    if (!cAxis && (Math.abs(travelX) > 8 || Math.abs(travelY) > 8)) {
      cAxis = Math.abs(travelX) > Math.abs(travelY) * 1.25 ? 'x' : 'y';
      if (cAxis === 'y') cDragDist = 20;
    }
    if (cAxis !== 'x') return;
    const dx = e.clientX - cLastX;
    root.classList.add('is-panning');
    cDragDist += Math.abs(dx);
    cwA += dx * (root.clientWidth < 700 ? 0.32 : 0.16);
    cwT = cwA;
    const now = performance.now();
    cFlickV = 0.75 * cFlickV + 0.25 * (dx / Math.max(1, now - cFlickT));
    cFlickT = now;
    clearTimeout(cIdle);
    cIdle = setTimeout(() => { cwT = Math.round(cwT / C_STEP) * C_STEP; }, 240);
    cLastX = e.clientX;
  });
  function endDrag() {
    if (cDragging && cAxis === 'x' && Math.abs(cFlickV) > 0.18) {
      const cont = Math.max(-1.6 * C_STEP, Math.min(1.6 * C_STEP, cFlickV * 140));
      cwT = Math.round((cwA + cont) / C_STEP) * C_STEP;
      clearTimeout(cIdle);
    }
    cDragging = false;
    cAxis = null;
    root.classList.remove('is-panning');
    if (!hovering && !root.classList.contains('is-open') && !reduceMotion) {
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => { if (!hovering) autoPaused = false; }, 1600);
    }
  }
  root.addEventListener('pointerup', endDrag);
  root.addEventListener('pointercancel', endDrag);

  function nudge(dir) {
    autoPaused = true;
    cwT = Math.round(cwT / C_STEP) * C_STEP + dir * C_STEP;
    window.clearTimeout(resumeTimer);
    resumeTimer = window.setTimeout(() => { if (!hovering && !reduceMotion) autoPaused = false; }, 2200);
  }
  $('#wchev-l').addEventListener('click', () => nudge(1));
  $('#wchev-r').addEventListener('click', () => nudge(-1));

  function pauseAuto(snap) {
    hovering = true;
    autoPaused = true;
    if (snap) cwT = Math.round(cwA / C_STEP) * C_STEP;
  }
  function resumeAuto() {
    hovering = false;
    if (!cDragging && !root.classList.contains('is-open') && !reduceMotion) autoPaused = false;
  }
  ring.addEventListener('pointerenter', () => pauseAuto(true));
  ring.addEventListener('pointerleave', resumeAuto);

  if (page) {
    root.addEventListener('wheel', (e) => {
      if (root.classList.contains('is-open')) return;
      e.preventDefault();
      autoPaused = true;
      cwT += (e.deltaX || e.deltaY) * -0.08;
      clearTimeout(cIdle);
      cIdle = setTimeout(() => {
        cwT = Math.round(cwT / C_STEP) * C_STEP;
        if (!hovering && !reduceMotion) autoPaused = false;
      }, 240);
    }, { passive: false });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { closeDash(); return; }
      if (root.classList.contains('is-open')) return;
      if (e.key === 'ArrowLeft') $('#wchev-l').click();
      if (e.key === 'ArrowRight') $('#wchev-r').click();
    });
  }

  function tick() {
    if (!root.isConnected) return;
    const open = root.classList.contains('is-open');
    if (open) autoPaused = true;

    if (!autoPaused && !cDragging && !open && root.clientWidth >= 700) {
      cwA -= AUTO_DEG;
      cwT = cwA;
      layoutC();
    } else if (Math.abs(cwT - cwA) > 0.01) {
      cwA += (cwT - cwA) * 0.14;
      layoutC();
    }
    requestAnimationFrame(tick);
  }

  window.addEventListener('echo:langchange', () => {
    cards.forEach((el, i) => paintCard(CENTERS[i], el));
    if (openId) openDash(CENTERS.find((c) => c.id === openId));
  });
  window.addEventListener('resize', layoutC);

  if (page) initI18n();
  layoutC();
  requestAnimationFrame(tick);
}
