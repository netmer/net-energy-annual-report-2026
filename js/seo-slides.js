// ============================================================
// SEO slides — rendered from REPORT.seo (Google Search Console API) + REPORT.seoText
// Shows an explicit "waiting" state when the data is not loaded yet.
// ============================================================
(function () {
  const D = window.REPORT, S = D.seo, T = D.seoText || {};
  const $ = id => document.getElementById(id);
  const f = n => Number(n).toLocaleString('en-US');
  const h = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  const pctDelta = (a, b) => b ? (a - b) / b * 100 : 0;
  const fmtPct = v => (v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(v).toFixed(Math.abs(v) < 10 ? 1 : 0) + '%';
  const icon = name => { const s = h('span'); s.setAttribute('data-icon', name); return s; };

  if (!S) {
    ['seo-h1', 'seo-h2', 'seo-h3'].forEach(id => { if ($(id)) $(id).textContent = 'SEO — รอข้อมูลจาก Google Search Console'; });
    return;
  }

  // ---------- slide · overview
  const t = S.totals, p = S.prev;
  const cpd = t.clicks / S.window.days, cpdPrev = p.clicks / S.prevWindow.days;
  const ipd = t.impressions / S.window.days, ipdPrev = p.impressions / S.prevWindow.days;
  if (T.headline) $('seo-h1').innerHTML = T.headline;
  const stats = [
    { label: 'คลิกจาก Google', ic: 'mouse-pointer-click', value: f(t.clicks), sub: 'เฉลี่ย ' + cpd.toFixed(0) + ' คลิก/วัน', d: pctDelta(cpd, cpdPrev), txt: fmtPct(pctDelta(cpd, cpdPrev)) + ' ต่อวัน (เดิม ' + cpdPrev.toFixed(0) + ')' },
    { label: 'การแสดงผลบน Google', ic: 'search', value: f(t.impressions), sub: 'เฉลี่ย ' + f(Math.round(ipd)) + ' ครั้ง/วัน', d: pctDelta(ipd, ipdPrev), txt: fmtPct(pctDelta(ipd, ipdPrev)) + ' ต่อวัน' },
    { label: 'อันดับเฉลี่ย (ทุกคำค้น)', ic: 'trending-up', value: t.position.toFixed(1), sub: 'รอบก่อน ' + p.position.toFixed(1) + ' · ยิ่งน้อยยิ่งดี', d: p.position - t.position, txt: 'ดีขึ้น ' + (p.position - t.position).toFixed(1) + ' อันดับ' },
    { label: 'CTR เฉลี่ย', ic: 'target', value: (t.ctr * 100).toFixed(1) + '%', sub: 'รอบก่อน ' + (p.ctr * 100).toFixed(1) + '% · ฐานการแสดงผลโตเร็วกว่า', d: 0, txt: (t.ctr > p.ctr ? '+' : '−') + Math.abs((t.ctr - p.ctr) * 100).toFixed(1) + ' จุด', flat: true },
  ];
  $('seo-stats').replaceChildren();
  stats.forEach(s => {
    const c = h('div', 'card stat'); c.setAttribute('data-reveal', '');
    const lb = h('div', 'label'); lb.appendChild(icon(s.ic)); lb.appendChild(document.createTextNode(s.label)); c.appendChild(lb);
    const v = h('div', 'value', s.value); v.style.fontSize = '50px'; c.appendChild(v); c.appendChild(h('div', 'sub', s.sub));
    const d = h('div', 'delta ' + (s.flat ? 'flat' : s.d > 0 ? 'up' : 'down')); d.appendChild(icon(s.flat ? 'activity' : 'trending-up')); d.appendChild(document.createTextNode(s.txt)); c.appendChild(d);
    $('seo-stats').appendChild(c);
  });
  const ins = $('seo-insights'); ins.replaceChildren();
  (T.insights || []).forEach((x, i) => { const li = h('li'); const ic = h('div', 'itile sm amber'); ic.appendChild(icon(['trophy', 'check', 'map-pin'][i] || 'check')); li.appendChild(ic); const dv = h('div'); dv.innerHTML = x; li.appendChild(dv); ins.appendChild(li); });
  $('seo-foot').innerHTML = '<b>ที่มา</b> Google Search Console API · ' + S.window.label + ' (' + S.window.days + ' วัน) เทียบ ' + S.prevWindow.label + ' (' + S.prevWindow.days + ' วันเท่ากัน) · ' + f(S.queriesTotal) + ' คำค้น · ' + f(S.pagesTotal) + ' หน้า · ข้อมูล Google ล่าช้า ~2 วัน';

  // ---------- slide · by course + movers
  if (T.headline2) $('seo-h2').innerHTML = T.headline2;
  const mv = $('seo-movers'); mv.replaceChildren();
  const head = h('div', 'card-head'); const it = h('div', 'itile aqua'); it.appendChild(icon('trending-up')); head.appendChild(it);
  const hd = h('div'); hd.appendChild(h('div', 't', 'คำค้นทั่วไปที่ขยับขึ้นหน้าแรก')); hd.appendChild(h('div', 's', 'อันดับเฉลี่ย 40 วันก่อน → รอบนี้ · ไม่ใช่ชื่อหลักสูตรเต็ม')); head.appendChild(hd); mv.appendChild(head);
  const tbl = h('table', 'ktable'); const th = h('thead'); const trh = h('tr'); ['คำค้น', 'อันดับ', 'แสดงผล', 'คลิก'].forEach(x => trh.appendChild(h('th', null, x))); th.appendChild(trh); tbl.appendChild(th);
  const tb = h('tbody');
  (T.movers || []).forEach(k => {
    const tr = h('tr'); tr.appendChild(h('td', null, k.q));
    const td = h('td'); const m = h('span', 'mv'); m.appendChild(h('s', null, k.from.toFixed(1))); m.appendChild(icon('arrow-right')); m.appendChild(h('b', null, k.to.toFixed(1))); td.appendChild(m); tr.appendChild(td);
    tr.appendChild(h('td', null, f(k.impr))); tr.appendChild(h('td', 'n', f(k.clicks))); tb.appendChild(tr);
  });
  tbl.appendChild(tb); mv.appendChild(tbl);
  const bn = h('div', 'callout'); bn.style.marginTop = '14px'; bn.style.fontSize = '13.5px'; bn.innerHTML = T.brandNote || ''; mv.appendChild(bn);
  $('seo-foot2').innerHTML = '<b>วิธีจับคู่</b> คีย์เวิร์ด × หน้าที่ Google แสดง จาก Search Console API — คลิกนับให้หลักสูตรที่คนคลิกเข้าจริง ไม่ใช่การเดาจากคำ · ' + S.byCourse.length + '+ หลักสูตรได้คลิกในรอบนี้ · หน้าหลักสูตรรวม ' + f(S.groups[0].value) + ' คลิก (40 วันก่อน ' + f(S.groupsPrev.course) + ')';

  // ---------- slide · gaps + tiers
  if (T.headline3) $('seo-h3').innerHTML = T.headline3;
  const tiersBox = $('seo-tiers'); tiersBox.replaceChildren();
  [['good', 'ได้คลิกดี'], ['page1', 'หน้าแรก · คลิกยังน้อย'], ['edge', 'ขอบหน้าแรก'], ['low', 'ยังไม่ขึ้นหน้าแรก']].forEach(([k, l]) => {
    const fc = h('div', 'fact'); const v = h('div', 'v', String(S.ranking[k] || 0)); v.appendChild(h('small', null, '/ ' + S.coursesVisible)); fc.appendChild(v); fc.appendChild(h('div', 'l', l)); tiersBox.appendChild(fc);
  });
  const posCell = (v, imp) => h('td', v == null ? 'dim' : v > 15 ? 'down' : v > 10 ? null : 'up', v == null ? '—' : v.toFixed(1) + (imp != null && imp < 30 ? '*' : ''));
  const gp = $('seo-gaps'); gp.replaceChildren();
  const gh = h('div', 'card-head'); const gi = h('div', 'itile orange'); gi.appendChild(icon('triangle-alert')); gh.appendChild(gi);
  const ghd = h('div'); ghd.appendChild(h('div', 't', 'คำค้นทั่วไปที่ยังอยู่หน้า 2 ขึ้นไป')); ghd.appendChild(h('div', 's', 'อันดับเฉลี่ยจากผู้ค้นจริง · 40 วัน และล่าสุด 1–15 ต.ค.')); gh.appendChild(ghd); gp.appendChild(gh);
  const t2 = h('table', 'ktable'); const th2 = h('thead'); const trh2 = h('tr'); ['คำค้น', '40 วัน', 'ล่าสุด', 'แสดงผล', 'หน้าที่เกี่ยวข้อง'].forEach(x => trh2.appendChild(h('th', null, x))); th2.appendChild(trh2); t2.appendChild(th2);
  const tb2 = h('tbody');
  (T.gaps || []).forEach(k => {
    const tr = h('tr'); tr.appendChild(h('td', null, k.q));
    tr.appendChild(posCell(k.pos)); tr.appendChild(posCell(k.recent));
    tr.appendChild(h('td', 'n', f(k.impr))); tr.appendChild(h('td', 'dim', k.course)); tb2.appendChild(tr);
  });
  t2.appendChild(tb2); gp.appendChild(t2);
  const tl = $('seo-tierlist'); tl.replaceChildren();
  const t3 = h('table', 'ktable'); const th3 = h('thead'); const trh3 = h('tr'); ['หลักสูตร', '40 วัน', 'ล่าสุด', 'แสดงผล'].forEach(x => trh3.appendChild(h('th', null, x))); th3.appendChild(trh3); t3.appendChild(th3);
  const tb3 = h('tbody');
  S.tiers.filter(x => x.tier === 'low' || x.tier === 'edge').forEach(x => {
    const tr = h('tr'); const td = h('td', null, x.course); td.appendChild(h('span', 'kwline', x.tier === 'low' ? 'ยังไม่ขึ้นหน้าแรก' : 'ขอบหน้าแรก')); tr.appendChild(td);
    tr.appendChild(posCell(x.position)); tr.appendChild(posCell(x.recentPos, x.recentImpr)); tr.appendChild(h('td', 'n', f(x.impressions))); tb3.appendChild(tr);
  });
  t3.appendChild(tb3); tl.appendChild(t3);
  const nt = h('div'); nt.style.cssText = 'margin-top:14px;padding-top:6px;border-top:1px dashed var(--line)'; gp.appendChild(nt);
  (T.notRankingNotes || []).forEach(x => { const pp = h('p'); pp.style.marginTop = '8px'; pp.style.fontSize = '15px'; pp.innerHTML = x; nt.appendChild(pp); });
  $('seo-foot3').innerHTML = '<b>เกณฑ์</b> ' + (T.tierRule || '');
})();
