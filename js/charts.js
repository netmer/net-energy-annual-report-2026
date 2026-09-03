// ============================================================
// Charts — small SVG/HTML chart kit for the deck (light surface)
// Rules: thin marks, one hue per series, hairline solid grid, text in ink tokens,
// selective direct labels, hover tooltip, table-view twin on every chart.
// ============================================================
window.Charts = (function () {
  const NS = 'http://www.w3.org/2000/svg';
  const C = {
    s1: '#2a78d6', s2: '#eb6834', s3: '#1baf7a', s4: '#eda100',
    gray: '#c9ccd1', ink: '#0f172a', ink2: '#3d4657', muted: '#6b7280', surface: '#ffffff'
  };
  const fmt = (n) => Number(n).toLocaleString('en-US');
  const el = (tag, attrs, parent) => {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  };
  const h = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  const scale = () => window.__deckScale || 1;

  // ---------- tooltip (single, lives inside the stage so it scales with it)
  let tip;
  function tipEl() {
    if (!tip) { tip = h('div', 'c-tip'); (document.querySelector('.stage') || document.body).appendChild(tip); }
    return tip;
  }
  function showTip(clientX, clientY, title, rows) {
    const t = tipEl();
    t.replaceChildren();
    if (title) t.appendChild(h('div', 'th', title));
    for (const r of rows) {
      const tr = h('div', 'tr');
      const left = h('span'); if (r.color) { const i = h('i'); i.style.background = r.color; left.appendChild(i); } left.appendChild(document.createTextNode(' ' + r.label));
      const b = h('b', null, r.value);
      tr.appendChild(left); tr.appendChild(b); t.appendChild(tr);
    }
    const st = (document.querySelector('.stage') || document.body).getBoundingClientRect();
    const s = scale();
    t.style.left = ((clientX - st.left) / s) + 'px';
    t.style.top = ((clientY - st.top) / s) + 'px';
    t.classList.add('show');
  }
  function hideTip() { if (tip) tip.classList.remove('show'); }

  // ---------- figure scaffold + table twin
  function figure(fig, opts) {
    fig.classList.add('c-fig');
    fig.replaceChildren();
    if (opts.title) {
      const ti = h('div', 'c-title');
      ti.appendChild(h('span', 't', opts.title));
      if (opts.sub) ti.appendChild(h('span', 's', opts.sub));
      const tg = h('button', 'c-toggle', 'ตาราง'); tg.type = 'button';
      tg.addEventListener('click', () => { fig.classList.toggle('show-table'); tg.textContent = fig.classList.contains('show-table') ? 'กราฟ' : 'ตาราง'; });
      ti.appendChild(tg);
      fig.appendChild(ti);
    }
    const plot = h('div', 'c-plot');
    fig.appendChild(plot);
    const table = h('table', 'c-table');
    fig.appendChild(table);
    return { plot, table };
  }
  function fillTable(table, head, rows) {
    table.replaceChildren();
    const thead = h('thead'); const trh = h('tr');
    head.forEach(x => trh.appendChild(h('th', null, x))); thead.appendChild(trh); table.appendChild(thead);
    const tb = h('tbody');
    rows.forEach(r => { const tr = h('tr'); r.forEach(c => tr.appendChild(h('td', null, c))); tb.appendChild(tr); });
    table.appendChild(tb);
  }
  function legend(parent, items, kind) {
    const lg = h('div', 'c-legend');
    items.forEach(it => { const s = h('span'); const i = h('i', kind === 'line' ? 'line' : ''); i.style.background = it.color; s.appendChild(i); s.appendChild(document.createTextNode(it.name)); lg.appendChild(s); });
    parent.prepend(lg);
  }

  // ---------- horizontal bars (HTML) — single series, optional emphasis classes
  // rows: [{label, sub?, value, note?, cls?}]  cls: '', 'gray', 's2', 's3', 's4'
  function hbars(fig, o) {
    const { plot, table } = figure(fig, o);
    const max = o.max || Math.max(...o.rows.map(r => r.value));
    const wrap = h('div', 'hbars');
    if (o.labelWidth) wrap.style.setProperty('--lw', o.labelWidth + 'px');
    if (o.valueWidth) wrap.style.setProperty('--vw', o.valueWidth + 'px');
    o.rows.forEach((r, i) => {
      const row = h('div', 'hbar' + (r.cls === 'gray' ? ' dim' : ''));
      const lbl = h('div', 'lbl'); lbl.appendChild(document.createTextNode(r.label));
      if (r.sub) lbl.appendChild(h('small', null, r.sub));
      const track = h('div', 'track');
      const bar = h('div', 'bar' + (r.cls ? ' ' + r.cls : ''));
      bar.dataset.w = (100 * r.value / max).toFixed(2) + '%';
      bar.style.transitionDelay = (i * 0.05) + 's';
      track.appendChild(bar);
      const val = h('div', 'val'); val.appendChild(document.createTextNode(o.format ? o.format(r.value) : fmt(r.value)));
      if (r.note) val.appendChild(h('small', null, r.note));
      row.appendChild(lbl); row.appendChild(track); row.appendChild(val);
      row.addEventListener('pointermove', e => showTip(e.clientX, e.clientY, r.label, [{ label: o.valueLabel || 'ค่า', value: o.format ? o.format(r.value) : fmt(r.value), color: r.cls === 'gray' ? C.gray : (r.cls === 's2' ? C.s2 : r.cls === 's3' ? C.s3 : r.cls === 's4' ? C.s4 : C.s1) }].concat(r.extra || [])));
      row.addEventListener('pointerleave', hideTip);
      wrap.appendChild(row);
    });
    plot.appendChild(wrap);
    if (o.legend) legend(plot, o.legend, 'rect');
    fillTable(table, [o.labelHead || 'รายการ', o.valueLabel || 'ค่า'], o.rows.map(r => [r.label, o.format ? o.format(r.value) : fmt(r.value)]));
  }

  // ---------- columns (SVG) — 1..3 series grouped
  // o: {categories:[], series:[{name, values, color}], labelAll?:bool, format?, yTicks?}
  function columns(fig, o) {
    const { plot, table } = figure(fig, o);
    const W = o.width || 640, H = o.height || 300, padL = 48, padR = 10, padT = 30, padB = 40;
    const svg = el('svg', { viewBox: `0 0 ${W} ${H}`, class: 'c-svg' }, plot);
    const n = o.categories.length, S = o.series.length;
    const all = o.series.flatMap(s => s.values);
    const max = o.max || niceMax(Math.max(...all));
    const iw = W - padL - padR, ih = H - padT - padB;
    const g = el('g', { class: 'grid' }, svg);
    const ticks = o.yTicks || 4;
    for (let t = 1; t <= ticks; t++) {
      const y = padT + ih - (ih * t / ticks);
      el('line', { x1: padL, x2: W - padR, y1: y, y2: y }, g);
      el('text', { x: padL - 8, y: y + 4, 'text-anchor': 'end' }, svg).textContent = fmt(Math.round(max * t / ticks));
    }
    el('line', { x1: padL, x2: W - padR, y1: padT + ih, y2: padT + ih, class: 'axis' }, el('g', { class: 'axis' }, svg));
    const slot = iw / n, barW = Math.min(24, (slot * 0.62) / S), gap = 2;
    const groupW = barW * S + gap * (S - 1);
    o.categories.forEach((cat, i) => {
      const cx = padL + slot * i + slot / 2;
      el('text', { x: cx, y: H - 8, 'text-anchor': 'middle', class: 'cat' }, svg).textContent = cat;
      o.series.forEach((s, k) => {
        const v = s.values[i]; if (v == null) return;
        const bh = ih * v / max;
        const x = cx - groupW / 2 + k * (barW + gap);
        const y = padT + ih - bh;
        const r = 4;
        const path = `M${x},${padT + ih} V${y + r} a${r},${r} 0 0 1 ${r},-${r} h${barW - 2 * r} a${r},${r} 0 0 1 ${r},${r} V${padT + ih} Z`;
        const p = el('path', { d: path, fill: s.color || C.s1, class: 'col' }, svg);
        p.style.setProperty('--d', (i * 0.06) + 's');
        p.style.transformOrigin = `${x + barW / 2}px ${padT + ih}px`;
        const labelIt = o.labelAll || i === n - 1 || v === Math.max(...s.values);
        if (labelIt) el('text', { x: x + barW / 2, y: y - 7, 'text-anchor': 'middle', class: 'val' }, svg).textContent = o.format ? o.format(v) : fmt(v);
        const hit = el('rect', { x: x - 4, y: padT, width: barW + 8, height: ih, class: 'hit' }, svg);
        hit.addEventListener('pointermove', e => showTip(e.clientX, e.clientY, cat, o.series.map(ss => ({ label: ss.name, value: o.format ? o.format(ss.values[i]) : fmt(ss.values[i]), color: ss.color || C.s1 }))));
        hit.addEventListener('pointerleave', hideTip);
      });
    });
    if (S > 1) legend(plot, o.series.map(s => ({ name: s.name, color: s.color || C.s1 })), 'rect');
    fillTable(table, ['หมวด'].concat(o.series.map(s => s.name)), o.categories.map((c, i) => [c].concat(o.series.map(s => o.format ? o.format(s.values[i]) : fmt(s.values[i])))));
  }

  // ---------- lines (SVG) with crosshair tooltip; first series = emphasis
  // o: {labels:[], series:[{name, values, color, dim?}], format?}
  function lines(fig, o) {
    const { plot, table } = figure(fig, o);
    const W = o.width || 760, H = o.height || 300, padL = 50, padR = 96, padT = 24, padB = 30;
    const svg = el('svg', { viewBox: `0 0 ${W} ${H}`, class: 'c-svg' }, plot);
    const n = o.labels.length;
    const all = o.series.flatMap(s => s.values).filter(v => v != null);
    const max = o.max || niceMax(Math.max(...all));
    const iw = W - padL - padR, ih = H - padT - padB;
    const X = i => padL + iw * (n === 1 ? 0.5 : i / (n - 1)), Y = v => padT + ih - ih * v / max;
    const g = el('g', { class: 'grid' }, svg);
    const ticks = o.yTicks || 4;
    for (let t = 1; t <= ticks; t++) { const y = padT + ih - ih * t / ticks; el('line', { x1: padL, x2: padL + iw, y1: y, y2: y }, g); el('text', { x: padL - 8, y: y + 4, 'text-anchor': 'end' }, svg).textContent = fmt(Math.round(max * t / ticks)); }
    el('line', { x1: padL, x2: padL + iw, y1: padT + ih, y2: padT + ih }, el('g', { class: 'axis' }, svg));
    const every = Math.max(1, Math.ceil(n / (o.xLabelsMax || 8)));
    o.labels.forEach((l, i) => { if ((i % every === 0 && n - 1 - i >= Math.ceil(every / 2)) || i === n - 1) el('text', { x: X(i), y: H - 8, 'text-anchor': 'middle', class: 'cat' }, svg).textContent = l; });
    const paths = [];
    [...o.series].reverse().forEach(s => { // draw dim first so emphasis sits on top
      const color = s.dim ? C.gray : (s.color || C.s1);
      const d = s.values.map((v, i) => (v == null ? '' : (i === 0 || s.values[i - 1] == null ? 'M' : 'L') + X(i).toFixed(1) + ',' + Y(v).toFixed(1))).join(' ');
      if (!s.dim && o.area !== false) el('path', { d: d + ` L${X(n - 1)},${padT + ih} L${X(0)},${padT + ih} Z`, fill: color, class: 'area' }, svg);
      const p = el('path', { d, stroke: color, class: 'ln draw' }, svg);
      paths.push(p);
      const last = s.values.length - 1;
      el('circle', { cx: X(last), cy: Y(s.values[last]), r: 5, fill: color, class: 'mk' }, svg);
      el('text', { x: X(last) + 10, y: Y(s.values[last]) + 5, class: 'endlbl' }, svg).textContent = (s.endLabel || s.name);
    });
    // crosshair + hit
    const xh = el('line', { x1: 0, x2: 0, y1: padT, y2: padT + ih, class: 'xh' }, svg);
    const dots = o.series.map(s => el('circle', { r: 5, fill: s.dim ? C.gray : (s.color || C.s1), class: 'mk', opacity: 0 }, svg));
    const hit = el('rect', { x: padL, y: padT, width: iw, height: ih, class: 'hit' }, svg);
    hit.addEventListener('pointermove', e => {
      const r = svg.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width * W;
      const i = Math.max(0, Math.min(n - 1, Math.round((px - padL) / iw * (n - 1))));
      xh.setAttribute('x1', X(i)); xh.setAttribute('x2', X(i)); xh.setAttribute('opacity', 1);
      o.series.forEach((s, k) => { const v = s.values[i]; if (v == null) { dots[k].setAttribute('opacity', 0); return; } dots[k].setAttribute('cx', X(i)); dots[k].setAttribute('cy', Y(v)); dots[k].setAttribute('opacity', 1); });
      showTip(e.clientX, e.clientY, o.tipLabels ? o.tipLabels[i] : o.labels[i], o.series.map(s => ({ label: s.name, value: s.values[i] == null ? '—' : (o.format ? o.format(s.values[i]) : fmt(s.values[i])), color: s.dim ? C.gray : (s.color || C.s1) })));
    });
    hit.addEventListener('pointerleave', () => { xh.setAttribute('opacity', 0); dots.forEach(d => d.setAttribute('opacity', 0)); hideTip(); });
    if (o.series.length > 1) legend(plot, o.series.map(s => ({ name: s.name, color: s.dim ? C.gray : (s.color || C.s1) })), 'line');
    // measure path lengths for draw-in
    requestAnimationFrame(() => paths.forEach(p => { const L = p.getTotalLength(); p.style.setProperty('--len', L); requestAnimationFrame(() => p.classList.add('go')); }));
    fillTable(table, ['ช่วง'].concat(o.series.map(s => s.name)), o.labels.map((l, i) => [o.tipLabels ? o.tipLabels[i] : l].concat(o.series.map(s => s.values[i] == null ? '—' : fmt(s.values[i])))));
  }

  // ---------- stacked single bar (part-to-whole, ≤4 segments)
  function stacked(fig, o) {
    const { plot, table } = figure(fig, o);
    const total = o.segments.reduce((a, s) => a + s.value, 0);
    const bar = h('div', 'stackbar');
    const lg = h('div', 'stack-legend');
    const cls = ['s1', 's2', 's3', 's4'];
    o.segments.forEach((s, i) => {
      const i_ = h('i', cls[i]); i_.style.flex = '0 0 0%'; i_.dataset.flex = (100 * s.value / total).toFixed(2) + '%';
      i_.addEventListener('pointermove', e => showTip(e.clientX, e.clientY, s.label, [{ label: 'จำนวน', value: fmt(s.value) + ' (' + Math.round(100 * s.value / total) + '%)', color: [C.s1, C.s2, C.s3, C.s4][i] }]));
      i_.addEventListener('pointerleave', hideTip);
      bar.appendChild(i_);
      const d = h('div'); const sw = h('i'); sw.style.background = [C.s1, C.s2, C.s3, C.s4][i]; d.appendChild(sw);
      const tx = h('span'); tx.appendChild(h('b', null, fmt(s.value))); tx.appendChild(document.createTextNode(s.label + ' · ' + Math.round(100 * s.value / total) + '%')); d.appendChild(tx);
      lg.appendChild(d);
    });
    plot.appendChild(bar); plot.appendChild(lg);
    fillTable(table, ['ส่วน', 'จำนวน', 'สัดส่วน'], o.segments.map(s => [s.label, fmt(s.value), Math.round(100 * s.value / total) + '%']));
  }

  // ---------- sparkline (decorative-but-true, inside a container)
  function spark(container, values, opts) {
    const W = 600, H = 110; const color = (opts && opts.color) || '#fff';
    const svg = el('svg', { viewBox: `0 0 ${W} ${H}`, preserveAspectRatio: 'none' }, container);
    const max = Math.max(...values), n = values.length;
    const X = i => (W * i / (n - 1)), Y = v => H - 6 - (H - 16) * v / max;
    const d = values.map((v, i) => (i ? 'L' : 'M') + X(i).toFixed(1) + ',' + Y(v).toFixed(1)).join(' ');
    el('path', { d: d + ` L${W},${H} L0,${H} Z`, fill: color, opacity: .12 }, svg);
    el('path', { d, stroke: color, 'stroke-width': 2.5, fill: 'none', 'stroke-linejoin': 'round', opacity: .9 }, svg);
    const li = n - 1; el('circle', { cx: X(li), cy: Y(values[li]), r: 4.5, fill: color }, svg);
  }

  function niceMax(v) { if (v <= 0) return 1; const p = Math.pow(10, Math.floor(Math.log10(v))); const m = v / p; const nice = m <= 1 ? 1 : m <= 2 ? 2 : m <= 2.5 ? 2.5 : m <= 3 ? 3 : m <= 4 ? 4 : m <= 5 ? 5 : m <= 6 ? 6 : m <= 8 ? 8 : 10; return nice * p; }

  // ---------- reveal: start bar/segment animations when a slide activates
  function reveal(slide) {
    slide.querySelectorAll('.hbar .bar').forEach(b => { b.style.width = b.dataset.w; });
    slide.querySelectorAll('.stackbar i').forEach(i => { i.style.flex = '0 0 ' + i.dataset.flex; });
    slide.querySelectorAll('.c-svg .col').forEach(c => c.classList.add('grow'));
    slide.querySelectorAll('.c-svg .ln.draw').forEach(p => p.classList.add('go'));
    slide.querySelectorAll('.wk .wk-bar i').forEach(i => { i.style.width = i.dataset.w; });
  }
  function reset(slide) {
    slide.querySelectorAll('.hbar .bar').forEach(b => { b.style.width = '0'; });
    slide.querySelectorAll('.stackbar i').forEach(i => { i.style.flex = '0 0 0%'; });
    slide.querySelectorAll('.c-svg .col').forEach(c => c.classList.remove('grow'));
    slide.querySelectorAll('.c-svg .ln.draw').forEach(p => p.classList.remove('go'));
    slide.querySelectorAll('.wk .wk-bar i').forEach(i => { i.style.width = '0'; });
  }

  return { hbars, columns, lines, stacked, spark, reveal, reset, fmt, C, hideTip };
})();
