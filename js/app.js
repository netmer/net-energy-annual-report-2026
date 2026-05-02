// ========== APP: SLIDES · NAVIGATION · MENU · MODAL ==========

(function(){
  // ----- RENDER SYSTEM TILES -----
  const sysGrid = document.getElementById('sys-grid');
  if (sysGrid) {
    SYSTEMS.forEach(s => {
      const tile = document.createElement('div');
      tile.className = 'sys-tile';
      tile.style.cssText = `--accent:${s.accent};--accent2:${s.accent2}`;
      tile.dataset.sys = s.id;

      let shotHTML = '';
      if (s.shot) {
        shotHTML = `<img src="${s.shot}" alt="${s.name}" style="${s.shotPortrait ? 'width:auto;height:96%' : ''}"/>`;
      } else if (s.iconLarge && s.icon) {
        shotHTML = `<div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:120px;height:120px;background:#fff;border-radius:18px;display:flex;align-items:center;justify-content:center;padding:14px;box-shadow:0 12px 30px rgba(0,0,0,.3)"><img src="${s.icon}" style="width:100%;height:100%;object-fit:contain"/></div>`;
      } else if (s.iconEmoji) {
        shotHTML = `<div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:90px;height:90px;background:linear-gradient(135deg,${s.accent},${s.accent2});border-radius:22px;display:flex;align-items:center;justify-content:center;font-size:46px;box-shadow:0 20px 40px rgba(0,0,0,.4)">${s.iconEmoji}</div>`;
      }

      tile.innerHTML = `
        <div class="sys-tile-shot">
          ${shotHTML}
          ${s.icon && !s.iconLarge ? `<div class="sys-tile-icon"><img src="${s.icon}" alt="ic"/></div>` : ''}
          <div class="sys-tile-status ${s.status}">${s.statusLabel}</div>
        </div>
        <div class="sys-tile-body">
          <div class="sys-tile-name">${s.name}</div>
          <div class="sys-tile-tag">${s.tag}</div>
          <div class="sys-tile-cta">ดูรายละเอียด →</div>
        </div>
      `;
      tile.addEventListener('click', () => openSystemModal(s));
      sysGrid.appendChild(tile);
    });
  }

  // ----- MODAL -----
  const modalBg = document.getElementById('modal-bg');
  const modalHero = document.getElementById('modal-hero');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');

  function openSystemModal(s){
    let heroHTML = `<div class="modal-status ${s.status}">${s.statusLabel}</div>`;
    if (s.shot) {
      heroHTML += `<img class="shot" src="${s.shot}" alt="${s.name}" style="${s.shotPortrait ? 'width:auto;height:96%' : ''}"/>`;
    } else if (s.iconEmoji) {
      heroHTML += `<div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:120px;height:120px;background:linear-gradient(135deg,${s.accent},${s.accent2});border-radius:30px;display:flex;align-items:center;justify-content:center;font-size:64px;box-shadow:0 20px 50px rgba(0,0,0,.4)">${s.iconEmoji}</div>`;
    } else if (s.iconLarge && s.icon) {
      heroHTML += `<div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:160px;height:160px;background:#fff;border-radius:24px;padding:20px;box-shadow:0 20px 50px rgba(0,0,0,.4)"><img src="${s.icon}" style="width:100%;height:100%;object-fit:contain"/></div>`;
    }
    if (s.icon && !s.iconLarge) {
      heroHTML += `<div class="modal-icon"><img src="${s.icon}" alt="ic"/></div>`;
    }
    modalHero.innerHTML = heroHTML;
    modalHero.style.cssText = `--accent:${s.accent};--accent2:${s.accent2}`;

    modalBody.innerHTML = `
      <div class="modal-name">${s.name}</div>
      <div class="modal-tag">${s.tag}</div>
      <div class="modal-purpose">${s.purpose}</div>
      <div class="modal-section">
        <h5>ความสามารถทั้งหมด · ${s.feats.length} ฟีเจอร์</h5>
        <div class="modal-feats">
          ${s.feats.map(([ic,t]) => `<div class="f"><span class="ic">${ic}</span><span>${t}</span></div>`).join('')}
        </div>
      </div>
      <div class="modal-foot">
        <div>👥 <b>${s.audience}</b></div>
        <div>🌐 <b>${s.platform}</b></div>
      </div>
    `;
    modalBg.classList.add('show');
  }
  if (modalClose) modalClose.addEventListener('click', () => modalBg.classList.remove('show'));
  if (modalBg) modalBg.addEventListener('click', (e) => {
    if (e.target === modalBg) modalBg.classList.remove('show');
  });

  // ----- SLIDE NAV -----
  const slides = document.querySelectorAll('.slide');
  const total = slides.length;
  let cur = 0;

  document.getElementById('total-num').textContent = total;
  const progressFill = document.getElementById('progress-fill');
  const curNum = document.getElementById('cur-num');
  const dotsEl = document.getElementById('dots');
  const menuList = document.getElementById('menu-list');

  slides.forEach((s, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(dot);

    const item = document.createElement('div');
    item.className = 'menu-item';
    item.innerHTML = `
      <div class="num">${i+1}</div>
      <div style="flex:1; min-width:0">
        <div class="ti"><span class="ic" style="margin-right:6px">${s.dataset.icon||''}</span>${s.dataset.title}</div>
        <div class="ds">${s.dataset.desc||''}</div>
      </div>
    `;
    item.addEventListener('click', () => { goTo(i); closeMenu(); });
    menuList.appendChild(item);
  });

  function goTo(idx){
    if (idx < 0 || idx >= total) return;
    slides[cur].classList.remove('active');
    if (idx < cur) slides[cur].classList.add('prev');
    else slides[cur].classList.remove('prev');

    cur = idx;
    slides[cur].classList.add('active');
    slides[cur].classList.remove('prev');

    document.querySelectorAll('.dot').forEach((d,i) => d.classList.toggle('active', i === cur));
    document.querySelectorAll('.menu-item').forEach((d,i) => d.classList.toggle('active', i === cur));
    curNum.textContent = cur + 1;
    progressFill.style.width = ((cur + 1) / total * 100) + '%';

    document.getElementById('prev-btn').disabled = (cur === 0);
    document.getElementById('next-btn').disabled = (cur === total - 1);

    // SEO bar fill
    if (slides[cur].id === 'seo' || slides[cur].querySelector('.seo-bar')) {
      slides[cur].querySelectorAll('.seo-bar .fill').forEach(b => {
        b.style.width = '0';
        setTimeout(() => { b.style.transition = 'width 1.5s ease-out'; b.style.width = b.dataset.w + '%' }, 100);
      });
    }
  }
  goTo(0);

  document.getElementById('prev-btn').addEventListener('click', () => goTo(cur - 1));
  document.getElementById('next-btn').addEventListener('click', () => goTo(cur + 1));

  // Agenda cards → jump to slide
  document.querySelectorAll('.agenda-card[data-jump]').forEach(c => {
    c.addEventListener('click', () => {
      const idx = parseInt(c.dataset.jump) - 1;
      if (!isNaN(idx)) goTo(idx);
    });
  });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modalBg.classList.remove('show');
      closeMenu();
      return;
    }
    if (modalBg.classList.contains('show')) return;
    // Don't paginate when fullscreen flow is active
    const flowFull = document.getElementById('flow-stage')?.classList.contains('fullscreen');
    if (flowFull && e.key !== 'Escape') return;

    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); goTo(cur + 1); }
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); goTo(cur - 1); }
    if (e.key === 'Home') { e.preventDefault(); goTo(0); }
    if (e.key === 'End') { e.preventDefault(); goTo(total - 1); }
    if (e.key === 'm' || e.key === 'M') toggleMenu();
    if (e.key === 'f' || e.key === 'F') toggleFullscreen();
  });

  // Menu
  const menu = document.getElementById('side-menu');
  const menuOverlay = document.getElementById('menu-overlay');
  function openMenu(){ menu.classList.add('show'); menuOverlay.classList.add('show'); }
  function closeMenu(){ menu.classList.remove('show'); menuOverlay.classList.remove('show'); }
  function toggleMenu(){ menu.classList.contains('show') ? closeMenu() : openMenu(); }
  document.getElementById('menu-btn').addEventListener('click', toggleMenu);
  menuOverlay.addEventListener('click', closeMenu);

  // Fullscreen
  function toggleFullscreen(){
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen();
  }
  document.getElementById('fs-btn').addEventListener('click', toggleFullscreen);

  // Hide hint
  setTimeout(() => {
    const h = document.getElementById('hint');
    if (h) { h.style.opacity = '0'; h.style.transition = 'opacity 1s'; }
  }, 8000);

  // Wheel/touch nav
  let wheelLock = false;
  document.addEventListener('wheel', (e) => {
    if (modalBg.classList.contains('show')) return;
    if (document.getElementById('flow-stage')?.classList.contains('fullscreen')) return;
    if (e.target.closest('.flow-side, .timeline, .modal-body, .sys-tile-body')) return;
    if (Math.abs(e.deltaY) < 30) return;
    if (wheelLock) return;
    wheelLock = true;
    setTimeout(() => wheelLock = false, 800);
    if (e.deltaY > 0) goTo(cur + 1);
    else goTo(cur - 1);
  }, {passive: true});

  let touchStartX = 0;
  document.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; });
  document.addEventListener('touchend', (e) => {
    if (modalBg.classList.contains('show')) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) < 50) return;
    if (dx < 0) goTo(cur + 1);
    else goTo(cur - 1);
  });

  // Init flow side panel empty state
  if (window.FlowDiagram) window.FlowDiagram.renderEmpty();
})();
