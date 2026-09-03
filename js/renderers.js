// ============================================================
// Renderers — map <figure data-chart="…"> to Charts calls using REPORT data
// ============================================================
window.Renderers = (function () {
  const f = Charts.fmt, C = Charts.C;
  const pct = (a, b) => (b ? ((a - b) / b * 100) : 0);
  const sign = v => (v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(v).toFixed(v % 1 ? 1 : 0) + '%';

  const R = {};

  R.coverSpark = (fig, D) => { fig.replaceChildren(); Charts.spark(fig, D.traffic.dailyThis); };

  R.regsByMonth = (fig, D) => Charts.columns(fig, {
    title: 'ลงทะเบียนอบรม (ใบ)', sub: 'รายเดือน 2569', width: 420, height: 225,
    categories: D.biz.regs.map(x => x.m), series: [{ name: 'ลงทะเบียน', values: D.biz.regs.map(x => x.v) }], labelAll: true,
  });
  R.trainedByMonth = (fig, D) => Charts.columns(fig, {
    title: 'ผู้ผ่านการอบรม (คน)', sub: 'รายเดือน 2569', width: 420, height: 225,
    categories: D.biz.trained.map(x => x.m), series: [{ name: 'ผ่านการอบรม', values: D.biz.trained.map(x => x.v) }], labelAll: true,
  });
  R.augMode = (fig, D) => Charts.stacked(fig, { title: 'รอบอบรม ส.ค. แยกตามรูปแบบ', sub: '94 รอบ', segments: D.biz.augMode });
  R.augTopTrained = (fig, D) => Charts.hbars(fig, {
    title: 'หลักสูตรที่มีผู้ผ่านการอบรมมากที่สุด · ส.ค.', sub: 'จาก 1,155 คน', labelWidth: 250, valueWidth: 60, valueLabel: 'คน',
    rows: D.biz.augTopTrained.slice(0, 6).map(([label, value]) => ({ label, value })),
  });

  R.devByRepo = (fig, D) => Charts.hbars(fig, {
    title: 'งานพัฒนาแยกตามระบบ', sub: '175 commits · 9 repo', labelWidth: 230, valueWidth: 52, valueLabel: 'commits',
    legend: [{ name: 'ระบบใหม่รอบนี้', color: C.s2 }, { name: 'ระบบที่มีอยู่', color: C.s1 }],
    rows: D.dev.byRepo.map(r => ({ label: r.label, sub: r.sub, value: r.n, cls: r.kind === 'new' ? 's2' : '' })),
  });
  R.devWeeks = (fig, D) => Charts.columns(fig, {
    title: 'จังหวะงานรายสัปดาห์', sub: 'commits/สัปดาห์', width: 420, height: 230,
    categories: D.dev.weeks.map(w => w.label), series: [{ name: 'commits', values: D.dev.weeks.map(w => w.n) }], labelAll: true,
  });

  R.pvMonthly = (fig, D) => Charts.columns(fig, {
    title: 'Page Views รายเดือน', sub: 'ตั้งแต่เปิดเว็บใหม่ เม.ย. 69', width: 460, height: 250,
    categories: D.traffic.monthly.map(x => x.m), series: [{ name: 'Page Views', values: D.traffic.monthly.map(x => x.v) }], labelAll: true,
  });
  R.pvDaily = (fig, D) => Charts.lines(fig, {
    title: 'ยอดเข้าชมรายวัน · รอบนี้ vs รอบก่อน', sub: 'ช่วง 23 วันเท่ากัน', width: 760, height: 250, xLabelsMax: 8,
    labels: D.traffic.dailyLabels,
    series: [
      { name: 'รอบนี้ (11 ส.ค.–2 ก.ย.)', values: D.traffic.dailyThis, endLabel: 'รอบนี้' },
      { name: 'รอบก่อน (19 ก.ค.–10 ส.ค.)', values: D.traffic.dailyPrev, dim: true, endLabel: 'รอบก่อน' },
    ],
  });
  R.channelsAug = (fig, D) => Charts.hbars(fig, {
    title: 'ช่องทางที่พาคนเข้าเว็บ · ส.ค.', sub: 'ทุกช่องทาง', labelWidth: 270, valueWidth: 64, valueLabel: 'ครั้ง',
    rows: D.traffic.channelsAug.map(r => ({ label: r.label, value: r.value, cls: /AI/.test(r.label) ? 's2' : '' })),
  });

  // ---------------- SEO (rendered entirely from REPORT.seo)
  function seoPlaceholder(fig, what) {
    fig.replaceChildren();
    const box = document.createElement('div'); box.className = 'callout warn';
    box.textContent = 'รอข้อมูล Google Search Console — ' + what;
    fig.appendChild(box);
  }
  R.seoDaily = (fig, D) => {
    if (!D.seo) return seoPlaceholder(fig, 'กราฟคลิกรายวัน');
    Charts.lines(fig, {
      title: 'คลิกจาก Google รายวัน · รอบนี้ vs รอบก่อน', sub: 'ช่วง ' + D.seo.window.days + ' วันเท่ากัน', width: 760, height: 250, xLabelsMax: 8,
      labels: D.seo.dailyLabels,
      series: [
        { name: 'รอบนี้ (' + D.seo.window.label + ')', values: D.seo.dailyClicks, endLabel: 'รอบนี้' },
        { name: 'รอบก่อน (' + D.seo.prevWindow.label + ')', values: D.seo.dailyClicksPrev, dim: true, endLabel: 'รอบก่อน' },
      ],
    });
  };
  R.seoGroups = (fig, D) => {
    if (!D.seo) return seoPlaceholder(fig, 'สัดส่วนคลิกตามกลุ่มหน้า');
    Charts.stacked(fig, { title: 'คลิกแยกตามประเภทหน้า', sub: f(D.seo.totals.clicks) + ' คลิก', segments: D.seo.groups });
  };
  R.seoByCourse = (fig, D) => {
    if (!D.seo) return seoPlaceholder(fig, 'คีย์เวิร์ดแยกตามหลักสูตร');
    Charts.hbars(fig, {
      title: 'หลักสูตรที่ได้คลิกจาก Google มากที่สุด', sub: 'คลิกในรอบนี้ · ตัวเลขเล็ก = จำนวนคีย์เวิร์ดที่ติดอันดับ', labelWidth: 300, valueWidth: 70, valueLabel: 'คลิก',
      rows: D.seo.byCourse.slice(0, 8).map(c => ({ label: c.course, sub: c.topKw.slice(0, 2).map(k => k.q).join(' · '), value: c.clicks, note: c.kwCount + ' คีย์เวิร์ด', extra: [{ label: 'การแสดงผล', value: f(c.impressions) }, { label: 'อันดับเฉลี่ย', value: c.position.toFixed(1) }] })),
    });
  };
  R.seoDevice = (fig, D) => {
    if (!D.seo) return seoPlaceholder(fig, 'อุปกรณ์');
    Charts.stacked(fig, { title: 'คลิกแยกตามอุปกรณ์', sub: f(D.seo.totals.clicks) + ' คลิก', segments: D.seo.devices });
  };

  return R;
})();
