// ============================================================
// Renderers — map <figure data-chart="…"> to Charts calls using REPORT data
// ============================================================
window.Renderers = (function () {
  const f = Charts.fmt, C = Charts.C;
  const R = {};

  R.coverSpark = (fig, D) => { fig.replaceChildren(); Charts.spark(fig, D.seo.dailyClicks); };

  // ---------------- business
  R.regsByMonth = (fig, D) => Charts.columns(fig, {
    title: 'ลงทะเบียนอบรม (ใบ)', sub: 'รายเดือน 2569', width: 470, height: 230,
    categories: D.biz.regs.map(x => x.m), series: [{ name: 'ลงทะเบียน', values: D.biz.regs.map(x => x.v) }],
    ghost: D.biz.regs.map(x => !!x.partial), ghostNote: 'ถึง 15 ต.ค.', labelAll: true,
  });
  R.trainedByMonth = (fig, D) => Charts.columns(fig, {
    title: 'ผู้ผ่านการอบรม (คน)', sub: 'ยืนยันผลแล้ว · ตามวันจบอบรม', width: 470, height: 230,
    categories: D.biz.trained.map(x => x.m), series: [{ name: 'ผ่านการอบรม', values: D.biz.trained.map(x => x.v), color: C.s3 }],
    ghost: D.biz.trained.map(x => !!x.partial), ghostNote: 'ถึง 15 ต.ค.', labelAll: true,
  });
  R.roundsByMonth = (fig, D) => Charts.columns(fig, {
    title: 'รอบอบรม (รอบ)', sub: 'นับตามเดือนที่เริ่มรอบ', width: 470, height: 230,
    categories: D.biz.rounds.map(x => x.m), series: [{ name: 'รอบอบรม', values: D.biz.rounds.map(x => x.v), color: C.s1 }],
    ghost: D.biz.rounds.map(x => !!x.ahead), ghostNote: 'จองล่วงหน้า', labelAll: true,
  });
  R.sepTopTrained = (fig, D) => Charts.hbars(fig, {
    title: 'หลักสูตรที่มีผู้ผ่านการอบรมมากที่สุด · ก.ย.', sub: 'จาก 1,375 คน', labelWidth: 260, valueWidth: 56, valueLabel: 'คน',
    rows: D.biz.sepTopTrained.slice(0, 7).map(([label, value]) => ({ label, value, cls: 's3' })),
  });
  R.octMode = (fig, D) => Charts.stacked(fig, { title: 'รอบอบรม ต.ค. แยกตามรูปแบบ', sub: D.biz.oct.rounds + ' รอบ', segments: D.biz.octMode });

  // ---------------- dev
  R.devByRepo = (fig, D) => Charts.hbars(fig, {
    title: 'งานพัฒนาแยกตามระบบ', sub: D.dev.total + ' commits · ' + D.dev.repos + ' โปรเจกต์', labelWidth: 236, valueWidth: 48, valueLabel: 'commits',
    legend: [{ name: 'ระบบใหม่รอบนี้', color: C.s2 }, { name: 'ระบบที่มีอยู่', color: C.s1 }],
    rows: D.dev.byRepo.map(r => ({ label: r.label, sub: r.sub, value: r.n, cls: r.kind === 'new' ? 's2' : '' })),
  });
  R.devWeeks = (fig, D) => Charts.columns(fig, {
    title: 'จังหวะงานรายสัปดาห์', sub: 'commits / สัปดาห์', width: 520, height: 250, barMax: 30,
    categories: D.dev.weeks.map(w => w.label), series: [{ name: 'commits', values: D.dev.weeks.map(w => w.n) }], labelAll: true,
  });

  // ---------------- SEO
  R.seoMonthly = (fig, D) => Charts.columns(fig, {
    title: 'คลิกจาก Google รายเดือน', sub: 'ตั้งแต่เปิดเว็บใหม่', width: 470, height: 250,
    categories: D.seo.monthly.map(m => m.m), series: [{ name: 'คลิก', values: D.seo.monthly.map(m => m.clicks) }],
    ghost: D.seo.monthly.map(m => !!m.partial), ghostNote: 'ต.ค. 13 วัน', labelAll: true,
  });
  R.seoDaily = (fig, D) => Charts.lines(fig, {
    title: 'คลิกจาก Google รายวัน · รอบนี้ vs 40 วันก่อนหน้า', sub: D.seo.window.label, width: 780, height: 250, xLabelsMax: 7,
    labels: D.seo.dailyLabels, tipLabels: D.seo.dailyTip,
    series: [
      { name: 'รอบนี้ (' + D.seo.window.label + ')', values: D.seo.dailyClicks, endLabel: 'รอบนี้' },
      { name: 'รอบก่อน (' + D.seo.prevWindow.label + ')', values: D.seo.dailyClicksPrev, dim: true, endLabel: 'รอบก่อน' },
    ],
  });
  R.seoByCourse = (fig, D) => Charts.hbars(fig, {
    title: 'หลักสูตรที่ได้คลิกจาก Google มากที่สุด', sub: 'แท่งบาง = 40 วันก่อนหน้า', labelWidth: 250, valueWidth: 56, valueLabel: 'คลิก', prevLabel: '40 วันก่อน',
    rows: D.seo.byCourse.slice(0, 9).map(c => ({
      label: c.course, sub: c.cat, value: c.clicks, prev: c.prevClicks,
      extra: [{ label: 'การแสดงผล', value: f(c.impressions) }].concat(c.bestQ ? [{ label: 'คำค้นดีสุด', value: c.bestQ.q.slice(0, 40) + ' @' + c.bestQ.position }] : []),
    })),
    legend: [{ name: 'รอบนี้', color: C.s1 }, { name: '40 วันก่อนหน้า', color: C.gray }],
  });

  return R;
})();
