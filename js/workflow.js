// ========== ERP WORKFLOW STEPPER ==========
// 9 ขั้นตอน End-to-End Workflow ของระบบ ERP · จำลองข้อมูลจากการใช้งานจริง

const WORKFLOW_STEPS = [
  {
    n:1, icon:'📅',
    tag:'Step 1',
    title:'สร้างรอบอบรมใหม่',
    desc:'Admin เข้าเมนู Training Schedule บน ERP กด Create New Round กำหนดหลักสูตร, วันที่, สถานที่, วิทยากร, ความจุสูงสุด · กดบันทึก ระบบจะ<b>ส่งข้อมูลไป NETMER-Flow เพื่อขึ้นแผนงานพนักงานทันที</b>',
    actor:'👤 Admin',
    accent:'var(--b1)', accent2:'var(--b2)',
    systems:[['🛡️','Training Platform','blue'],['👥','NETMER-Flow','purple']],
    actions:[
      'บันทึกรอบอบรมใหม่ลงในระบบ Firestore',
      'Sync ข้อมูลไป NETMER-Flow ผ่าน /api/training-rounds/sync (action: create)',
      'อัปเดตหน้าตารางอบรมสาธารณะให้แสดงรอบใหม่ทันที',
      'พร้อมรับลูกค้าลงทะเบียนผ่านเว็บไซต์',
    ],
    mock:[
      ['หลักสูตร', 'จป.หัวหน้างาน 2 วัน', 'info'],
      ['ประเภท', 'Public Training', 'info'],
      ['วันที่', '15-16 พ.ค. 2026', 'info'],
      ['สถานที่', 'NET Training Center สาทร', 'info'],
      ['วิทยากร', 'อ.สมชาย ใจดี', 'info'],
      ['ความจุ', '30 คน · ราคา 4,500/คน', 'info'],
      ['สถานะ', 'เปิดรับสมัคร', 'good'],
    ]
  },
  {
    n:2, icon:'🌐',
    tag:'Step 2',
    title:'ลูกค้าลงทะเบียนผ่านเว็บไซต์',
    desc:'ลูกค้าเข้าเว็บไซต์ เลือกรอบที่สนใจ กรอกข้อมูลผู้เข้าอบรมและบริษัท อัปโหลดเอกสาร · ยืนยันการสมัคร — ระบบสร้าง <b>Registration ID</b> และส่ง Confirmation Email อัตโนมัติ',
    actor:'🧑‍💼 ลูกค้า',
    accent:'var(--b3)', accent2:'var(--b1)',
    systems:[['🌐','เว็บไซต์ Public','green'],['🛡️','Training Platform','blue']],
    actions:[
      'ลูกค้ากรอกฟอร์มการสมัคร — ใช้ AI ช่วยตอบคำถามได้',
      'ระบบใช้ AI OCR อ่านบัตรประชาชนจากกล้องมือถือ',
      'จับคู่กับประวัติเก่า — ถ้าเคยอบรม จะดึงข้อมูลเดิมมาให้',
      'ส่งอีเมลยืนยันให้ลูกค้า + แจ้งเตือนทีม callcenter'
    ],
    mock:[
      ['Reg No.', 'REG-2026-0428', 'info'],
      ['บริษัท', 'บริษัท ABC จำกัด', 'info'],
      ['ผู้ติดต่อ', 'คุณสมหญิง — HR', 'info'],
      ['ผู้เข้าอบรม', '3 ท่าน', 'info'],
      ['ที่อยู่', 'จัดส่งเอกสารตามที่ระบุ', 'info'],
      ['สถานะ', 'รอตรวจสอบ', 'warn'],
    ]
  },
  {
    n:3, icon:'✅',
    tag:'Step 3',
    title:'ตรวจสอบและอนุมัติการสมัคร',
    desc:'Sales Team เปิด Inbox ตรวจสอบข้อมูลและเอกสารแนบ · กดอนุมัติ — ระบบ<b>ส่งคำขอไป Document Flow เพื่อสร้าง Quotation อัตโนมัติ</b> และส่งอีเมล PDF ไปยังลูกค้าทันที',
    actor:'👨‍💻 Sales Team',
    accent:'var(--b4)', accent2:'var(--b2)',
    systems:[['🛡️','Training Platform','blue'],['📄','Document Flow','green']],
    actions:[
      'ตรวจสอบความถูกต้องของข้อมูล',
      'กดปุ่ม "อนุมัติ" → ระบบ POST /api/sync/create-document',
      'Document Flow สร้างใบเสนอราคา + ส่ง callback กลับ',
      'ระบบส่งอีเมลใบเสนอราคา (PDF) ให้ลูกค้าอัตโนมัติ',
      'อัปเดต NETMER-Flow ผ่าน updateCounts',
    ],
    mock:[
      ['Quotation No.', 'QT-2026-0419', 'info'],
      ['จำนวนเงิน', '13,500.00 บาท', 'info'],
      ['VAT 7%', '945.00 บาท', 'info'],
      ['ยอดรวม', '14,445.00 บาท', 'good'],
      ['ส่งอีเมลแล้ว', 'sales@abc.co.th', 'good'],
      ['สถานะ', 'รอชำระเงิน', 'warn'],
    ]
  },
  {
    n:4, icon:'💰',
    tag:'Step 4',
    title:'รับชำระเงินและออกใบเสร็จ',
    desc:'ลูกค้าอัปโหลด Slip บนระบบ · Accounting Team ตรวจสอบและอนุมัติ — Document Flow <b>สร้าง Tax Invoice และ Receipt อัตโนมัติ</b> · Webhook ส่งสถานะ Paid กลับมา ERP ทันที',
    actor:'💼 Accounting Team',
    accent:'var(--b5)', accent2:'var(--b4)',
    systems:[['🛡️','Training Platform','blue'],['📄','Document Flow','green']],
    actions:[
      'ลูกค้าอัปโหลดสลิปการโอนเงิน',
      'ทีมบัญชีตรวจสอบและกดอนุมัติ',
      'Document Flow ออกใบกำกับภาษี (Tax Invoice) อัตโนมัติ',
      'Webhook /api/sync/invoice-status-webhook อัปเดต ERP',
      'สถานะการลงทะเบียนเปลี่ยนเป็น "ชำระแล้ว"',
    ],
    mock:[
      ['Invoice No.', 'INV-2026-0512', 'info'],
      ['Receipt No.', 'RCT-2026-0512', 'info'],
      ['ช่องทางชำระ', 'โอนผ่าน SCB', 'info'],
      ['ยอดที่ได้รับ', '14,445.00 บาท', 'good'],
      ['สถานะ', 'ชำระแล้ว ✓', 'good'],
    ]
  },
  {
    n:5, icon:'🎬',
    tag:'Step 5',
    title:'เตรียมการก่อนวันอบรม',
    desc:'<b>Cron Job ส่ง Reminder Email อัตโนมัติ 24 ชั่วโมงก่อนเริ่ม</b> · ทีมเตรียม Pre-test, Post-test, Evaluation Form, ของที่ระลึก, ป้ายชื่อ และใบประกาศเปล่ารอใช้งาน',
    actor:'⚙️ Automated System + Operations Team',
    accent:'var(--b6)', accent2:'var(--b3)',
    systems:[['🛡️','Training Platform','blue'],['🔔','Email + Push','green']],
    actions:[
      'Cron Job send-training-reminders ทำงานทุกวันเวลา 16:00',
      'ส่งอีเมลเตือนผู้เข้าอบรมและบริษัท',
      'ทีมจัดเตรียมข้อสอบ Pre-test (ปรนัย 10 ข้อ)',
      'จัดเตรียมแบบประเมินวิทยากรและหลักสูตร',
      'พิมพ์ป้ายชื่อ + ของที่ระลึก',
    ],
    mock:[
      ['อีเมลเตือนส่งแล้ว', '3 ท่าน · 14 พ.ค. 16:00', 'good'],
      ['Pre-test', 'พร้อมใช้งาน · 10 ข้อ', 'good'],
      ['Post-test', 'พร้อมใช้งาน · 15 ข้อ', 'good'],
      ['แบบประเมิน', 'พร้อมใช้งาน', 'good'],
      ['ป้ายชื่อ', 'พิมพ์เรียบร้อย', 'good'],
    ]
  },
  {
    n:6, icon:'🪪',
    tag:'Step 6',
    title:'Check-in ด้วยบัตรประชาชน',
    desc:'ผู้เข้าอบรมเสียบบัตรประชาชนเข้า Smart Card Reader → ระบบจับคู่กับ Registration อัตโนมัติ → ทำ <b>Pre-test ผ่าน Tablet</b> — กระบวนการทั้งหมด<b>ใช้เวลาไม่เกิน 30 วินาที/คน</b> ไม่ต้องคีย์ข้อมูลซ้ำ',
    actor:'🪪 Participant + Smart Card Reader',
    accent:'var(--b1)', accent2:'var(--b3)',
    systems:[['🪪','เครื่องอ่านบัตร','blue'],['🛡️','Training Platform','blue'],['🤖','AI OCR','purple']],
    actions:[
      'เสียบบัตรประชาชนเข้าเครื่องอ่าน USB',
      'ระบบอ่านข้อมูลจาก localhost:38080 → ส่งให้ ERP',
      'ERP จับคู่กับเลขบัตรในรายชื่อผู้ลงทะเบียน',
      'หากไม่มีเครื่องอ่าน — ใช้กล้องมือถือถ่ายบัตร AI อ่านให้',
      'ผู้เข้าอบรมทำแบบทดสอบ Pre-test ผ่าน Tablet',
    ],
    mock:[
      ['09:00', 'นายภาคิน — เช็คอินสำเร็จ', 'good'],
      ['09:01', 'นางสาวพิมพ์ใจ — เช็คอินสำเร็จ', 'good'],
      ['09:02', 'นายชนะ — เช็คอินสำเร็จ', 'good'],
      ['09:15', 'เริ่ม Pre-test (3 ท่าน)', 'info'],
      ['09:30', 'Pre-test เสร็จสิ้น · เฉลี่ย 65%', 'info'],
    ]
  },
  {
    n:7, icon:'📚',
    tag:'Step 7',
    title:'ดำเนินการอบรม · Post-test · Evaluation',
    desc:'Trainer ดำเนินการอบรมตามหลักสูตร 2 วัน · จบแล้วผู้เข้าอบรมทำ<b>Post-test และ Evaluation ผ่าน Tablet</b> · ระบบเปรียบเทียบ Pre/Post Score และคำนวณ Pass Rate อัตโนมัติ',
    actor:'👨‍🏫 Trainer + Participants',
    accent:'var(--b2)', accent2:'var(--b4)',
    systems:[['🛡️','Training Platform','blue']],
    actions:[
      'อบรมตามตาราง 2 วัน (16 ชั่วโมง)',
      'ทำ Post-test 15 ข้อ — เกณฑ์ผ่าน 70%',
      'ทำแบบประเมินวิทยากรและหลักสูตร',
      'ระบบคำนวณคะแนนเฉลี่ยและพัฒนาการ',
      'บันทึกผลลงในประวัติของผู้เข้าอบรม',
    ],
    mock:[
      ['Post-test เฉลี่ย', '85%', 'good'],
      ['ผ่านเกณฑ์', '3/3 ท่าน (100%)', 'good'],
      ['พัฒนาการ', '+20% จาก Pre-test', 'good'],
      ['ประเมินวิทยากร', '4.8/5.0', 'good'],
      ['ประเมินหลักสูตร', '4.7/5.0', 'good'],
    ]
  },
  {
    n:8, icon:'🏆',
    tag:'Step 8',
    title:'Certificate Generation &amp; Delivery',
    desc:'ผู้ผ่านเกณฑ์ ระบบ<b>สร้าง Certificate (A4 PDF) อัตโนมัติ</b>พร้อม Cert No. และ Digital Signature · Operations Team พิมพ์ ใส่ซอง ติด Tracking Barcode ของไปรษณีย์ไทย และจัดส่ง',
    actor:'🚚 Delivery Team',
    accent:'var(--b5)', accent2:'var(--b1)',
    systems:[['🛡️','Training Platform','blue'],['📮','Thailand Post','cp']],
    actions:[
      'ระบบสร้างใบประกาศ PDF (A4) อัตโนมัติ',
      'เลขที่ใบประกาศ + วันที่ออก + ลายเซ็นดิจิทัล',
      'พิมพ์ใบประกาศ + Cover letter',
      'แพ็คใส่ซองเอกสาร + ติด barcode ไปรษณีย์',
      'บันทึก tracking number ในระบบ ERP',
    ],
    mock:[
      ['Cert No. 1', 'NET-2026-001234 · นายภาคิน', 'info'],
      ['Cert No. 2', 'NET-2026-001235 · นางสาวพิมพ์ใจ', 'info'],
      ['Cert No. 3', 'NET-2026-001236 · นายชนะ', 'info'],
      ['Tracking', 'EJ123456789TH', 'info'],
      ['สถานะ', 'จัดส่งแล้ว — รอลูกค้ารับ', 'warn'],
    ]
  },
  {
    n:9, icon:'📦',
    tag:'Step 9',
    title:'Tracking &amp; Closeout',
    desc:'Cron Job <b>Poll สถานะพัสดุจาก Thailand Post API ทุก 4 ชั่วโมง</b> · เมื่อลูกค้าเซ็นรับ ระบบเปลี่ยนสถานะเป็น "Delivered" ส่ง Thank You Email และเก็บ History พร้อมใช้งานในรอบถัดไป',
    actor:'⚙️ Automated System',
    accent:'var(--b6)', accent2:'var(--b3)',
    systems:[['🛡️','Training Platform','blue'],['📮','Thailand Post','cp'],['👥','NETMER-Flow','purple']],
    actions:[
      'Cron /api/cron/check-deliveries รันทุก 4 ชั่วโมง',
      'เรียก Thailand Post Track API ตรวจ tracking number',
      'อัปเดตสถานะเป็น "ได้รับแล้ว" เมื่อ status = 501',
      'ส่งอีเมลขอบคุณและขอแบบประเมินเพิ่ม',
      'NETMER-Flow ปิดงาน + ประวัติพร้อมสำหรับรอบหน้า',
    ],
    mock:[
      ['16 พ.ค. 09:00', 'พัสดุถึง สนญ ไปรษณีย์', 'info'],
      ['16 พ.ค. 13:30', 'นำจ่ายปลายทาง', 'info'],
      ['17 พ.ค. 10:45', 'ลูกค้าเซ็นรับ ✓', 'good'],
      ['สถานะใน ERP', 'จบงาน · ปิดเคส', 'good'],
      ['ประวัติพร้อมใช้', 'รอบถัดไปดึงได้ทันที', 'good'],
    ]
  },
];

(function(){
  let cur = 0;
  let stepperEl, mainEl, prevEl, nextEl, counterEl, progEl;

  function init(){
    stepperEl = document.getElementById('wf-stepper');
    mainEl = document.getElementById('wf-content');
    prevEl = document.getElementById('wf-prev');
    nextEl = document.getElementById('wf-next');
    counterEl = document.getElementById('wf-counter');
    progEl = document.getElementById('wf-prog-fill');
    if (!stepperEl) return;

    // Build stepper
    WORKFLOW_STEPS.forEach((s, i) => {
      const btn = document.createElement('button');
      btn.className = 'wf-step-btn';
      btn.innerHTML = `<span class="num">${s.n}</span><span class="ic">${s.icon}</span><span class="ti">${s.title.length > 18 ? s.title.slice(0,16)+'…' : s.title}</span>`;
      btn.title = s.title;
      btn.addEventListener('click', () => goStep(i));
      stepperEl.appendChild(btn);
    });

    if (prevEl) prevEl.addEventListener('click', () => goStep(cur - 1));
    if (nextEl) nextEl.addEventListener('click', () => goStep(cur + 1));

    goStep(0);
  }

  function goStep(idx){
    if (idx < 0 || idx >= WORKFLOW_STEPS.length) return;
    cur = idx;
    const s = WORKFLOW_STEPS[idx];

    // Stepper buttons
    stepperEl.querySelectorAll('.wf-step-btn').forEach((b, i) => {
      b.classList.toggle('active', i === idx);
      b.classList.toggle('done', i < idx);
    });

    // Main content
    mainEl.innerHTML = `
      <div class="wf-visual" style="--accent:${s.accent};--accent2:${s.accent2}">
        <div class="wf-step-tag">${s.tag} / ${WORKFLOW_STEPS.length}</div>
        <div class="wf-icon">${s.icon}</div>
        <div class="wf-title">${s.title}</div>
        <div class="wf-desc">${s.desc}</div>
        <div class="wf-actor">${s.actor}</div>
      </div>
      <div class="wf-detail">
        <h5>Systems Involved</h5>
        <div class="wf-systems">
          ${s.systems.map(([ic,name,cls]) => `<span class="ws ${cls||''}">${ic} ${name}</span>`).join('')}
        </div>

        <h5>Sample Data · ตัวอย่างข้อมูล</h5>
        <div class="wf-mock">
          ${s.mock.map(([k,v,cls]) => `<div class="row"><span class="k">${k}</span><span class="v ${cls||''}">${v}</span></div>`).join('')}
        </div>

        <h5>Behind the Scenes · การทำงานเบื้องหลัง</h5>
        <ul class="wf-actions">
          ${s.actions.map(a => `<li>${a}</li>`).join('')}
        </ul>
      </div>
    `;

    // Prev/Next buttons
    if (prevEl) prevEl.disabled = (idx === 0);
    if (nextEl) nextEl.disabled = (idx === WORKFLOW_STEPS.length - 1);
    if (counterEl) counterEl.innerHTML = `Step <b>${idx + 1}</b> / ${WORKFLOW_STEPS.length}`;
    if (progEl) progEl.style.width = ((idx + 1) / WORKFLOW_STEPS.length * 100) + '%';

    // Auto-scroll stepper to active
    const active = stepperEl.querySelector('.wf-step-btn.active');
    if (active) active.scrollIntoView({behavior:'smooth', block:'nearest', inline:'center'});
  }

  document.addEventListener('DOMContentLoaded', init);
  window.WorkflowStepper = { init, goStep };
})();
