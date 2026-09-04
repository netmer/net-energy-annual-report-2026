// ============================================================
// SEO slides — rendered from REPORT.seo (Google Search Console API)
// Shows an explicit "waiting" state when the data is not loaded yet.
// ============================================================
(function () {
  const D = window.REPORT, S = D.seo;
  const $ = id => document.getElementById(id);
  const f = n => Number(n).toLocaleString('en-US');
  const h = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  const pctDelta = (a, b) => b ? (a - b) / b * 100 : 0;
  const fmtPct = v => (v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(v).toFixed(Math.abs(v) < 10 ? 1 : 0) + '%';

  function placeholder(container, text) {
    container.replaceChildren();
    const c = h('div', 'card soft', null); c.style.gridColumn = 'span 12';
    const p = h('div', 'callout warn'); p.textContent = text; c.appendChild(p); container.appendChild(c);
  }

  if (!S) {
    $('seo-h1').textContent = 'SEO ภาพรวมรอบนี้ — รอข้อมูลจาก Google Search Console';
    $('seo-stats').replaceChildren(); ['คลิก', 'การแสดงผล', 'CTR', 'อันดับเฉลี่ย'].forEach(l => { const c = h('div', 'card stat'); c.appendChild(h('div', 'label', l)); c.appendChild(h('div', 'value', '—')); c.appendChild(h('div', 'sub', 'รอข้อมูล')); $('seo-stats').appendChild(c); });
    $('seo-insight').textContent = 'รอข้อมูล Search Console API';
    $('seo-kwtable').appendChild(h('div', 'callout warn', 'รอข้อมูล Search Console API — ตารางคีย์เวิร์ดต่อหลักสูตร'));
    placeholder($('seo-notranking'), 'รอข้อมูล Search Console API — รายชื่อหลักสูตรที่ยังไม่ติดอันดับ');
    return;
  }

  // ---------- slide 11 · overview
  const t = S.totals, p = S.prev;
  const cpd = t.clicks / S.window.days, cpdPrev = p.clicks / S.prevWindow.days;
  const ipd = t.impressions / S.window.days, ipdPrev = p.impressions / S.prevWindow.days;
  $('seo-h1').innerHTML = ''; $('seo-h1').classList.add('long');
  $('seo-h1').appendChild(document.createTextNode(S.headline || ''));

  const stats = [
    { label: 'คลิกจาก Google', value: f(t.clicks), sub: 'เฉลี่ย ' + cpd.toFixed(0) + ' คลิก/วัน', delta: pctDelta(cpd, cpdPrev), note: 'ต่อวัน vs รอบก่อน (' + cpdPrev.toFixed(0) + ')' },
    { label: 'การแสดงผล', value: f(t.impressions), sub: 'เฉลี่ย ' + f(Math.round(ipd)) + ' ครั้ง/วัน', delta: pctDelta(ipd, ipdPrev), note: 'ต่อวัน vs รอบก่อน (' + f(Math.round(ipdPrev)) + ')' },
    { label: 'CTR เฉลี่ย', value: (t.ctr * 100).toFixed(1) + '%', sub: 'รอบก่อน ' + (p.ctr * 100).toFixed(1) + '%', delta: (t.ctr - p.ctr) * 100, note: 'จุด', unit: 'pt' },
    { label: 'อันดับเฉลี่ย (ทุกคำค้น)', value: t.position.toFixed(1), sub: 'รอบก่อน ' + p.position.toFixed(1), delta: p.position - t.position, note: 'ดีขึ้น = เลขน้อยลง', unit: 'pos' },
  ];
  $('seo-stats').replaceChildren();
  stats.forEach(s => {
    const c = h('div', 'card stat'); c.setAttribute('data-reveal', '');
    c.appendChild(h('div', 'label', s.label)); c.appendChild(h('div', 'value', s.value)); c.appendChild(h('div', 'sub', s.sub));
    const d = h('div', 'delta ' + (Math.abs(s.delta) < 0.5 ? 'flat' : s.delta > 0 ? 'up' : 'down'));
    const txt = s.unit === 'pt' ? (s.delta > 0 ? '+' : '−') + Math.abs(s.delta).toFixed(1) + ' จุด' : s.unit === 'pos' ? (s.delta > 0 ? 'ดีขึ้น ' : s.delta < 0 ? 'แย่ลง ' : 'เท่าเดิม ') + Math.abs(s.delta).toFixed(1) : fmtPct(s.delta) + ' ' + s.note;
    d.appendChild(document.createTextNode(txt)); c.appendChild(d); $('seo-stats').appendChild(c);
  });
  $('seo-insight').innerHTML = (S.insights || []).join(' &nbsp;·&nbsp; ');
  $('seo-foot').innerHTML = '<b>ที่มา</b> Google Search Console API · ' + S.window.label + ' (' + S.window.days + ' วัน) เทียบกับ ' + S.prevWindow.label + ' (' + S.prevWindow.days + ' วัน) · ' + f(S.queriesTotal) + ' คีย์เวิร์ด · ' + f(S.pagesTotal) + ' หน้า';

  // ---------- slide 12 · keywords by course (right table)
  $('seo-h2').textContent = S.headline2 || 'หลักสูตรที่ติดอันดับ Google แล้ว'; $('seo-h2').classList.add('long');
  const kt = $('seo-kwtable'); kt.replaceChildren();
  const head = h('div', 'card-head'); const it = h('div', 'itile yellow'); it.innerHTML = '<span data-icon="search"></span>'; head.appendChild(it);
  const hd = h('div'); hd.appendChild(h('div', 't', 'คำที่ลูกค้าใช้ค้นหา "หลักสูตร" แล้วเจอเรา')); hd.appendChild(h('div', 's', 'ไม่นับคำค้นชื่อบริษัท · เรียงตามคลิก')); head.appendChild(hd); kt.appendChild(head);
  const tbl = h('table', 'ktable'); const th = h('thead'); const trh = h('tr'); ['คีย์เวิร์ด → หลักสูตร', 'คลิก', 'แสดง', 'อันดับ'].forEach(x => trh.appendChild(h('th', null, x))); th.appendChild(trh); tbl.appendChild(th);
  const tb = h('tbody');
  (S.intentKw || []).slice(0, 7).forEach(k => {
    const tr = h('tr'); const td1 = h('td'); td1.appendChild(document.createTextNode(k.q)); const sm = h('span', 'kwline', '→ ' + k.course); td1.appendChild(sm); tr.appendChild(td1);
    tr.appendChild(h('td', 'n', f(k.clicks))); tr.appendChild(h('td', null, f(k.impressions))); tr.appendChild(h('td', k.position <= 3 ? 'up' : k.position > 10 ? 'down' : null, k.position.toFixed(1))); tb.appendChild(tr);
  });
  tbl.appendChild(tb); kt.appendChild(tbl);
  const brandNote = h('div', 'callout'); brandNote.style.marginTop = '12px'; brandNote.innerHTML = S.brandNote || ''; kt.appendChild(brandNote);
  $('seo-foot2').innerHTML = '<b>วิธีจับคู่</b> คีย์เวิร์ด × หน้าที่ Google แสดง จาก Search Console API — คีย์เวิร์ดนับให้หลักสูตรที่คนคลิกเข้าจริง ไม่ใช่การเดาจากคำ · ' + f(S.byCourse.length) + ' หลักสูตรได้คลิกในรอบนี้';

  // ---------- slide 13 · generic-keyword gaps + course tiers
  $('seo-h3').textContent = S.headline3 || ''; $('seo-h3').classList.add('long');
  const nr = $('seo-notranking'); nr.replaceChildren();
  const left = h('div', 'card span-7'); left.setAttribute('data-reveal', '');
  const lh = h('div', 'card-head'); const li = h('div', 'itile orange'); li.innerHTML = '<span data-icon="triangle-alert"></span>'; lh.appendChild(li);
  const lhd = h('div'); lhd.appendChild(h('div', 't', 'คำทั่วไปที่ลูกค้าค้น แต่เรายังอยู่หน้า 2 ขึ้นไป')); lhd.appendChild(h('div', 's', 'เรียงตามจำนวนครั้งที่ Google แสดงเรา · อันดับ = ตำแหน่งเฉลี่ยของเราสำหรับคำนั้น')); lh.appendChild(lhd); left.appendChild(lh);
  const t2 = h('table', 'ktable'); const th2 = h('thead'); const trh2 = h('tr'); ['คำค้น', 'แสดงผล', 'อันดับเรา', 'หน้าที่ Google แสดง'].forEach(x => trh2.appendChild(h('th', null, x))); th2.appendChild(trh2); t2.appendChild(th2);
  const tb2 = h('tbody');
  (S.gapKwThai || S.gapKw || []).slice(0, 10).forEach(k => {
    const tr = h('tr'); tr.appendChild(h('td', null, k.q)); tr.appendChild(h('td', 'n', f(k.impressions)));
    tr.appendChild(h('td', k.position > 30 ? 'down' : null, Math.round(k.position) + ' (หน้า ' + Math.ceil(k.position / 10) + ')')); tr.appendChild(h('td', 'dim', k.page)); tb2.appendChild(tr);
  });
  t2.appendChild(tb2); left.appendChild(t2); nr.appendChild(left);

  const right = h('div', 'span-5 stack'); right.setAttribute('data-reveal', '');
  const facts = h('div', 'facts'); facts.style.gridTemplateColumns = 'repeat(4,1fr)';
  [['good', 'ติดอันดับดี', 'ได้คลิก / คำค้นอันดับ ≤3'], ['page1', 'หน้าแรก', 'คลิกยังน้อย'], ['low', 'ไม่ติดหน้าแรก', 'มีการแสดงผลแต่อยู่หน้า 2+'], ['none', 'ยังไม่ปรากฏ', 'แสดงผล < 30']].forEach(([k, l, s]) => {
    const fc = h('div', 'fact'); fc.appendChild(h('div', 'v', String(S.ranking[k]))); fc.appendChild(h('div', 'l', l + ' — ' + s)); facts.appendChild(fc);
  });
  right.appendChild(facts);
  const why = h('div', 'card soft fill'); why.appendChild(h('h4', null, 'อ่านอย่างไร และจะทำอะไรต่อ'));
  (S.notRankingNotes || []).forEach(x => { const pp = h('p'); pp.style.marginTop = '8px'; pp.style.fontSize = '15.5px'; pp.innerHTML = x; why.appendChild(pp); });
  right.appendChild(why); nr.appendChild(right);
  $('seo-foot3').innerHTML = '<b>เกณฑ์</b> ' + (S.tierRule || '');

  if ($('exec-seo') && S.execLine) $('exec-seo').innerHTML = S.execLine;
})();
