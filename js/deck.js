// ============================================================
// Deck runtime — stage scaling, navigation, reveal, count-up, theme, chart rendering
// ============================================================
(function () {
  const root = document.documentElement;
  const stage = document.getElementById('stage');
  const slides = Array.from(document.querySelectorAll('.slide'));
  const total = slides.length;
  let cur = -1;

  // ---------- background layers (aurora + dot grid) on every slide
  slides.forEach(s => {
    const a = document.createElement('div'); a.className = 'aurora'; a.appendChild(document.createElement('i'));
    const g = document.createElement('div'); g.className = 'gridbg';
    s.prepend(g); s.prepend(a);
  });

  // ---------- theme: ?theme=light|dark wins, then the viewer's last choice, else dark
  const themeBtn = document.getElementById('theme-btn');
  function setTheme(t, persist) {
    root.setAttribute('data-theme', t);
    if (themeBtn && window.NetIcons) { themeBtn.innerHTML = NetIcons.svg(t === 'dark' ? 'sun' : 'moon'); themeBtn.title = t === 'dark' ? 'ธีมสว่าง (T)' : 'ธีมมืด (T)'; }
    if (persist) { try { localStorage.setItem('net-deck-theme', t); } catch (e) { /* storage blocked — theme still applies */ } }
  }
  const qTheme = (location.search.match(/[?&]theme=(light|dark)/) || [])[1];
  let saved = null; try { saved = localStorage.getItem('net-deck-theme'); } catch (e) { saved = null; }
  setTheme(qTheme || (saved === 'light' || saved === 'dark' ? saved : 'dark'), false);
  const toggleTheme = () => setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  // ---------- scale the 1600×900 stage to the viewport
  function fit() {
    const s = Math.min(window.innerWidth / 1600, window.innerHeight / 900);
    stage.style.setProperty('--s', s.toFixed(4));
    window.__deckScale = s;
  }
  window.addEventListener('resize', fit); fit();

  // ---------- chrome
  const fill = document.getElementById('progress-fill');
  const curNum = document.getElementById('cur-num');
  const totNum = document.getElementById('total-num');
  const dots = document.getElementById('dots');
  const menuList = document.getElementById('menu-list');
  totNum.textContent = total;
  slides.forEach((s, i) => {
    const d = document.createElement('i'); d.title = s.dataset.title || ''; d.addEventListener('click', () => goTo(i)); dots.appendChild(d);
    const m = document.createElement('div'); m.className = 'menu-item';
    m.innerHTML = `<span class="n">${String(i + 1).padStart(2, '0')}</span><span class="ic"><span data-icon="${s.dataset.navIcon || 'file-text'}"></span></span><span class="t"></span>`;
    m.querySelector('.t').textContent = s.dataset.title || ('Slide ' + (i + 1));
    m.addEventListener('click', () => { goTo(i); closeMenu(); });
    menuList.appendChild(m);
  });
  if (window.NetIcons) NetIcons.hydrate(document);

  // ---------- count-up
  const STATIC = /[?&]static=1/.test(location.search);
  if (STATIC) root.classList.add('no-anim');
  const reduce = STATIC || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function countUps(slide) {
    slide.querySelectorAll('[data-count]').forEach(el => {
      const target = parseFloat(el.dataset.count); if (isNaN(target)) return;
      const dec = (el.dataset.dec ? parseInt(el.dataset.dec) : 0);
      const pre = el.dataset.pre || '', suf = el.dataset.suf || '';
      const f = v => pre + (dec ? v.toFixed(dec) : Math.round(v).toLocaleString('en-US')) + suf;
      if (reduce) { el.textContent = f(target); return; }
      const t0 = performance.now(), dur = 1200;
      if (el._raf) cancelAnimationFrame(el._raf);
      const tick = now => { const p = Math.min(1, (now - t0) / dur); const e = 1 - Math.pow(1 - p, 3); el.textContent = f(target * e); if (p < 1) el._raf = requestAnimationFrame(tick); };
      el._raf = requestAnimationFrame(tick);
    });
  }

  // ---------- navigation
  function goTo(i) {
    i = Math.max(0, Math.min(total - 1, i));
    if (i === cur) return;
    if (cur >= 0) {
      const prev = slides[cur];
      prev.classList.remove('is-active');
      prev.querySelectorAll('[data-reveal]').forEach(e => e.classList.remove('in'));
      Charts.reset(prev);
    }
    cur = i;
    const s = slides[i];
    s.classList.add('is-active');
    const rev = Array.from(s.querySelectorAll('[data-reveal]'));
    rev.forEach((e, k) => { if (!e.style.getPropertyValue('--d')) e.style.setProperty('--d', (0.1 + k * 0.06).toFixed(2) + 's'); });
    requestAnimationFrame(() => requestAnimationFrame(() => { rev.forEach(e => e.classList.add('in')); Charts.reveal(s); countUps(s); }));
    fill.style.width = ((i + 1) / total * 100) + '%';
    curNum.textContent = i + 1;
    Array.from(dots.children).forEach((d, k) => d.classList.toggle('on', k === i));
    Array.from(menuList.children).forEach((m, k) => m.classList.toggle('on', k === i));
    history.replaceState(null, '', location.search + '#' + (i + 1));
    Charts.hideTip();
  }
  function next() { goTo(cur + 1); } function prev() { goTo(cur - 1); }
  document.getElementById('next-btn').addEventListener('click', next);
  document.getElementById('prev-btn').addEventListener('click', prev);
  document.querySelectorAll('[data-jump]').forEach(el => el.addEventListener('click', () => goTo(parseInt(el.dataset.jump) - 1)));

  document.addEventListener('keydown', e => {
    if (e.target && /input|textarea/i.test(e.target.tagName)) return;
    switch (e.key) {
      case 'ArrowRight': case 'ArrowDown': case 'PageDown': case ' ': e.preventDefault(); next(); break;
      case 'ArrowLeft': case 'ArrowUp': case 'PageUp': e.preventDefault(); prev(); break;
      case 'Home': goTo(0); break; case 'End': goTo(total - 1); break;
      case 'm': case 'M': toggleMenu(); break;
      case 'f': case 'F': toggleFs(); break;
      case 't': case 'T': toggleTheme(); break;
      case 'Escape': closeMenu(); break;
    }
  });
  let px = null;
  document.addEventListener('pointerdown', e => { px = e.clientX; });
  document.addEventListener('pointerup', e => { if (px == null) return; const dx = e.clientX - px; px = null; if (Math.abs(dx) > 70 && e.pointerType === 'touch') (dx < 0 ? next() : prev()); });
  window.addEventListener('hashchange', () => { const n = parseInt((location.hash || '').slice(1)); if (!isNaN(n)) goTo(n - 1); });

  // ---------- menu / fullscreen
  const menu = document.getElementById('side-menu'), overlay = document.getElementById('menu-overlay');
  function openMenu() { menu.classList.add('show'); overlay.classList.add('show'); }
  function closeMenu() { menu.classList.remove('show'); overlay.classList.remove('show'); }
  function toggleMenu() { menu.classList.contains('show') ? closeMenu() : openMenu(); }
  document.getElementById('menu-btn').addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);
  function toggleFs() { if (!document.fullscreenElement) document.documentElement.requestFullscreen && document.documentElement.requestFullscreen(); else document.exitFullscreen && document.exitFullscreen(); }
  document.getElementById('fs-btn').addEventListener('click', toggleFs);

  const hint = document.getElementById('hint');
  if (!STATIC) { setTimeout(() => hint.classList.add('show'), 900); setTimeout(() => hint.classList.remove('show'), 7000); }

  // ---------- render charts from REPORT data
  if (window.Renderers) {
    document.querySelectorAll('[data-chart]').forEach(fig => { const fn = window.Renderers[fig.dataset.chart]; if (fn) { try { fn(fig, window.REPORT); } catch (err) { console.error('chart', fig.dataset.chart, err); } } });
  }
  if (window.NetIcons) NetIcons.hydrate(document);

  const n = parseInt((location.hash || '').slice(1));
  goTo(!isNaN(n) && n >= 1 && n <= total ? n - 1 : 0);
})();
