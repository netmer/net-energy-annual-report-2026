// ========== DATA: SYSTEMS · FLOW NODES ==========
// อัปเดต: รอบรายงาน 1 พ.ค. – 6 มิ.ย. 2026

const SYSTEMS = [
  {
    id:'training',
    name:'NET Training Platform',
    tag:'End-to-End Safety Training Platform · ระบบหลัก',
    icon:'assets/icons/training-platform.png',
    shot:'assets/screenshots/training-platform.png',
    accent:'var(--b1)', accent2:'var(--b2)',
    status:'live', statusLabel:'⚡ Live · ใช้งานทุกวัน',
    purpose:'ระบบหลักที่ใช้ทุกวัน — ลูกค้าเข้าเว็บลงทะเบียน เราออกใบเสนอราคา รับเงิน จัดการคนอบรม ทำสอบ ออกใบประกาศ ส่งของ จบที่เดียว · เดือนนี้เพิ่ม LINE Daily Brief, ทีมวิทยากรหลายคนแบบยืดหยุ่น, AI ตอบลูกค้าสาธารณะ, ค้นหาอัจฉริยะ และ SEO ครั้งใหญ่',
    feats:[
      ['🌐','เว็บไซต์สาธารณะ + ลงทะเบียน'],['👤','จัดการผู้เข้าอบรม'],
      ['📅','จัดตารางการอบรม'],['📢','LINE Daily Training Brief'],
      ['👥','ทีมวิทยากรหลายคน (ต่อวัน/ห้อง)'],['🔁','Sync 2 ทางกับ NETMER-Flow'],
      ['📝','ระบบสอบก่อน/หลัง + ประเมินผล'],['🏆','ออกใบประกาศ A4 + ออกแบบเอง'],
      ['💰','เก็บเงิน/สลิป → ใบเสร็จอัตโนมัติ'],['🚚','จัดส่งไปรษณีย์ + ติดตามพัสดุ'],
      ['🪪','เครื่องอ่านบัตร + สแกนบัตรด้วย AI'],['🔎','ค้นหาอัจฉริยะ 2 ชั้น'],
      ['🤖','AI ตอบลูกค้า + แดชบอร์ดการใช้งาน'],['💼','CRM + Export Excel'],
      ['🔐','PDPA Consent + นโยบายความเป็นส่วนตัว'],['⚡','Cloudflare CDN + Auto-purge'],
      ['🗺️','SEO: หน้า Landing ตามพื้นที่/หลักสูตร'],['📚','บล็อก/ประกาศ + Related Posts'],
      ['📱','PWA Mobile'],['🖥️','แอปเดสก์ท็อป'],
    ],
    audience:'ลูกค้า + พนักงาน + ผู้บริหาร',
    platform:'เว็บ + มือถือ + เดสก์ท็อป'
  },
  {
    id:'netmer',
    name:'NETMER-Flow',
    tag:'HR & Operations · Biometric + เข้า App Store',
    icon:'assets/icons/netmer-flow.png',
    shot:'assets/screenshots/netmer-flow.png',
    accent:'var(--b4)', accent2:'var(--b2)',
    status:'live', statusLabel:'⚡ Live · เข้า App Store',
    purpose:'ระบบ HR/ปฏิบัติการของพนักงานทุกคน — ลงเวลา ขอลา/OT จองรถ เบิกอุปกรณ์ IT กระดานงาน ตารางงาน · เดือนนี้ก้าวใหญ่: เชื่อมเครื่องสแกนลายนิ้วมือ ZKTeco จริง, ทำแอป iOS เนทีฟเข้า App Store (build VALID), Push ข้ามทุกแพลตฟอร์ม และ Sync 2 ทางกับ ERP',
    feats:[
      ['🖐️','ZKTeco MB10-VL สแกนลายนิ้วมือ'],['🧙','Bulk-mapping Wizard จับคู่พนักงาน'],
      ['🕓','ดึงข้อมูลย้อนหลัง (Preview→Commit)'],['💓','Heartbeat สถานะเครื่องออนไลน์'],
      ['📲','แอป iOS เนทีฟ (Capacitor 7) → App Store'],['🔔','Push ข้าม Web/iOS/Android (FCM)'],
      ['🔁','Sync 2 ทางกับ ERP (วิทยากร/ทีม/สถานที่)'],['📍','เช็คอิน-เอาท์ด้วย GPS'],
      ['🗓️','ลงเวลาอิงรอบตัดเงินเดือน'],['🚗','จัดการรถบริษัท'],
      ['💻','เบิกอุปกรณ์ IT (สร้างใหม่)'],['📋','กระดานงาน + รายงานภาระทีม'],
      ['💧','ตารางงานทีม Elmer'],['📱','รองรับ 3 แพลตฟอร์มจาก codebase เดียว'],
    ],
    audience:'พนักงานทุกคน',
    platform:'เว็บ (PWA) + iOS + Android'
  },
  {
    id:'docflow',
    name:'NET Document Flow',
    tag:'Business Document Management · Quotacraft',
    shot:'assets/screenshots/document-flow.png',
    accent:'var(--b3)', accent2:'var(--b1)',
    status:'live', statusLabel:'⚡ Live · Production',
    purpose:'ระบบเอกสารธุรกิจ — ทำใบเสนอราคา ใบกำกับภาษี ใบเสร็จ ดูยอดขาย ติดตามหนี้ค้าง · ทำงานร่วมกับ Training Platform โดยตรง ไม่ต้องคีย์ซ้ำ · เดือนนี้เพิ่มรายงานใบเสนอราคาแบบ Pivot และรับ quote_request_id จาก ERP มา pre-fill',
    feats:[
      ['📋','ใบเสนอราคา + รับ pre-fill จาก ERP'],['✍️','ลายเซ็นอิเล็กทรอนิกส์'],
      ['🧾','ใบกำกับภาษี'],['💵','ใบเสร็จ + หักภาษี'],
      ['📊','รายงานใบเสนอราคาแบบ Pivot + Cross-tab สถานะ'],['📈','Dashboard ยอดขาย'],
      ['👥','ฐานข้อมูลลูกค้า + ผู้ประสานงาน'],['📦','สินค้าและบริการ'],
      ['⏰','ติดตามหนี้ค้าง'],['💳','บันทึกการรับชำระ'],
      ['📂','Export Excel/PDF'],['🖨️','รองรับ Dot Matrix'],
    ],
    audience:'คอลเซ็นเตอร์ + บัญชี',
    platform:'เว็บ · เชื่อมกับ Training Platform'
  },
  {
    id:'cp',
    name:'CP Safety Passport',
    tag:'Safety Passport System · ลูกค้ากลุ่ม CP',
    icon:'assets/icons/cp-passport.png',
    iconLarge:true,
    accent:'var(--b5)', accent2:'var(--b4)',
    status:'live', statusLabel:'⚡ Live · Production',
    purpose:'ระบบ Safety Passport สำหรับกลุ่ม CP — ออกแบบหน้า Passport แบบลากวาง พิมพ์ครั้งละหลายร้อยใบ ตรวจสอบด้วย QR + AI · เดือนนี้เพิ่มโมดูลช่างไฟฟ้า (EE), กลุ่มบริษัทต่อผู้อบรม, และเปิด Public Verify API ให้ระบบภายนอกเรียกตรวจสอบได้',
    feats:[
      ['📊','Dashboard + ตัวกรอง Center/Trainer'],['👥','ผู้เข้าอบรม + กลุ่มบริษัท'],
      ['⚡','โมดูลช่างไฟฟ้า (EE) + จัดการใบรับรอง'],['🏢','ศูนย์ฝึก/วิทยากร แยกบทบาท'],
      ['🎨','Passport Designer (ลากวาง)'],['🖨️','พิมพ์ Batch หลายร้อยใบ'],
      ['🔍','Verify ด้วย QR + AI'],['🌐','Public Verify API (ให้ภายนอกเรียก)'],
      ['🧾','รายงาน + roster เป็นชีตที่สอง'],['👤','บัญชี: kind + group (สร้าง/แก้/นำเข้า)'],
      ['🔐','PDPA ในแอป + Re-consent ตามเวอร์ชัน'],['📅','นำเข้า Excel: รองรับวันที่ไทยยืดหยุ่น'],
    ],
    audience:'ศูนย์ฝึก + Trainer + กลุ่ม CP',
    platform:'เว็บ · ลูกค้า: กลุ่ม CP'
  },
  {
    id:'elmer',
    name:'ELMER Water Analysis',
    tag:'Water Analysis Reporting · Lotus (Phase 1 Live)',
    iconEmoji:'💧',
    shot:'assets/screenshots/elmer-water.jpg',
    accent:'var(--b2)', accent2:'var(--b3)',
    status:'live', statusLabel:'⚡ Live · Phase 1',
    purpose:'ระบบจัดทำรายงานวิเคราะห์น้ำอัตโนมัติให้ทีม Elmer ที่บริการสาขา Lotus ทั่วประเทศ · จาก kickoff 30 เม.ย. → เปิดใช้งานจริงภายในไม่ถึง 3 สัปดาห์ · เปลี่ยนกระบวนทัศน์เป็น "เย็บรวม PDF" ให้รายงานออกมาตรงฟอร์มกระดาษเดิมเป๊ะ',
    feats:[
      ['📑','Merge-PDF: เย็บไฟล์ที่อัปโหลด + หน้าที่ระบบสร้าง'],['🏪','นำเข้าสาขา Lotus จริง 2,450+ แห่ง'],
      ['📋','Service-Plan Tracker (WO→PO→Invoice ต่อสาขา/ปี)'],['💡','คลังแนวทางแก้ไข 35+ เทมเพลต (แก้ได้)'],
      ['📸','อัปโหลดรูป + Crop ในกรอบ + Bulk ทั้งโฟลเดอร์'],['✍️','E-signature ฝังบน PDF อัตโนมัติ'],
      ['📄','หน้าปก/สารบัญ/เลขหน้า + ฟอนต์ไทย'],['🧪','ผล Lab + เทียบมาตรฐาน (GMP 31 / Fresh 15)'],
      ['📧','ส่งอีเมลอัตโนมัติตามประเภทสาขา'],['📱','Mobile PWA (bottom nav, card list)'],
      ['🔐','3 บทบาท (admin/lab/freshwater) + Audit Log'],['☁️','Firebase App Hosting (in-process PDF)'],
    ],
    audience:'ทีม Elmer (Lab/Fresh Water)',
    platform:'เว็บ · แทนงานมือ 200–1,000 รายงาน/เดือน'
  },
  {
    id:'wastewater',
    name:'Elmer Wastewater',
    tag:'งานน้ำเสีย CM+PM · Lotus / AXONS · ระบบใหม่',
    iconEmoji:'🌊',
    shot:'assets/screenshots/elmer-wastewater.jpg',
    accent:'var(--b3)', accent2:'var(--b6)',
    status:'live', statusLabel:'⚡ Live · รอ Feedback',
    purpose:'ระบบจัดการ "งานน้ำเสีย" ครบวงจร — งานซ่อม (CM) + บำรุงรักษาเชิงป้องกัน (PM) — ในสาขาลูกค้า Lotus / Exon (AXONS) · รับงานจากระบบลูกค้าผ่าน import แล้วติดตามแบบ 2 สาย (Exon/Elmer), คิด SLA, ต้นทุน/กำไร/วางบิล และแจ้งเตือน LINE อัตโนมัติ · เปิดใช้งานแล้วพร้อมข้อมูลจริง · อยู่ระหว่างรอ feedback การใช้งานจริงเพื่อปรับปรุงเพิ่มเติม',
    feats:[
      ['🔧','แยกงาน CM/OT vs PM เป็น first-class'],['🔀','สถานะ 2 สาย Exon/Elmer (13 ขั้น) + Audit'],
      ['📦','ข้อมูลจริง 1,578 งาน (CM 199 · PM 1,379)'],['🗺️','แผนที่ Lotus ทั่วไทย (ไม่มีค่า Map API)'],
      ['⏱️','SLA Analytics + LINE SLA Digest รายวัน'],['💰','แก้ต้นทุน/ราคาเสนอ + บัญชีงานยังไม่วางบิล'],
      ['👷','มอบหมายผู้รับเหมาช่วง'],['📊','แดชบอร์ด CM/PM พร้อมกราฟ + ตัวกรองเวลา'],
      ['📥','Import Wizard (จับคู่คอลัมน์ + reconciliation)'],['🗓️','PM Visit Coverage ตามสาขา'],
      ['🧮','Business Logic แยก pure-core · 245 เทสต์ผ่าน'],['🎨','ดีไซน์ "Soft Aqua" + ฟอนต์ Sarabun'],
    ],
    audience:'ทีม Elmer + ผู้ประสานงาน',
    platform:'เว็บ · Live: elmer-wastewater.web.app'
  },
  {
    id:'inspector',
    name:'Online Inspector',
    tag:'Online Safety Inspection · ลูกค้า True · ระบบใหม่',
    iconEmoji:'🔎',
    shot:'assets/screenshots/online-inspector.jpg',
    accent:'var(--b1)', accent2:'var(--b3)',
    status:'live', statusLabel:'✅ เสร็จแล้ว · พร้อมใช้งาน',
    purpose:'ระบบสำหรับทีมตรวจความปลอดภัยออนไลน์ของ True — แทนการใช้ Canva + Google Data Studio + Excel แยกกัน · นำเข้า Work Order หลายรูปแบบ → นัดหมาย → ตรวจผ่าน LINE Video → ออกรายงานตรงฟอร์มลูกค้า · พัฒนาเสร็จแล้ว พร้อมใช้งาน (build + 17 เทสต์ผ่าน)',
    feats:[
      ['📥','Import Work Order หลาย Track (auto-detect)'],['🧹','กรองอัจฉริยะ: เฉพาะงานที่ตรวจได้จริง'],
      ['✅','Checklist แบบ binary + จับเวลา + แนบรูป'],['⚖️','ตัดเกรดอัตโนมัติ + แตก Finding + SLA'],
      ['🪪','CP Passport module chips (14 โมดูล realtime)'],['📇','ฐานข้อมูลช่าง (auto-link เบอร์/ชื่อ)'],
      ['📅','Day Board ทีมตรวจ + Soft-claim กันชนงาน'],['⏰','T-15 LINE Reminder ก่อนถึงนัด'],
      ['📧','รับงานอัตโนมัติจากอีเมล (cron + Gmail)'],['📤','Export "W&W 5P Inspection Finding" (31 คอลัมน์)'],
      ['🗺️','แดชบอร์ดสาธารณะ + แผนที่จังหวัด'],['🛟','Auto-save draft กัน crash'],
    ],
    audience:'ทีมตรวจความปลอดภัย (ลูกค้า True)',
    platform:'เว็บ · Firebase · พัฒนาเสร็จแล้ว (17 tests ผ่าน)'
  },
  {
    id:'safety-hero',
    name:'NET Safety Hero (NET ZERO)',
    tag:'Safety Mindset Gamification · Standalone',
    icon:'assets/icons/safety-hero.png',
    iconLarge:true,
    accent:'var(--b6)', accent2:'var(--b3)',
    status:'live', statusLabel:'⚡ Live · Standalone',
    purpose:'แอป Gamification สร้าง Safety Mindset — Commitment Card, Safety Plan, Hierarchy of Controls, Leaderboard, Avatar · เดือนนี้เน้นความปลอดภัย/กันโกง, ปรับ Layout มือถือ, แก้เรื่องวันที่ และเพิ่มฟีเจอร์รักษาผู้ใช้ (retention)',
    feats:[
      ['🎯','Safety Mindset · Zero Accidents'],['🃏','Commitment Card Library'],
      ['📋','Personal Safety Plan'],['🛡️','Hierarchy of Controls'],
      ['🔒','Security / Anti-cheat (เดือนนี้)'],['🏆','Leaderboard · Ranking'],
      ['📈','ฟีเจอร์รักษาผู้ใช้ (retention)'],['📱','ปรับ Layout มือถือ + แก้วันที่'],
      ['👤','Avatar (กำลังพัฒนา · ซ่อนชั่วคราว)'],['🔐','ล็อกอินด้วยเบอร์โทร'],
      ['📊','Admin Dashboard'],['☁️','Firebase Auth + Firestore'],
    ],
    audience:'Public',
    platform:'เว็บ · iOS · Android'
  },
  {
    id:'lpg-training',
    name:'LPG Training Animation',
    tag:'สื่อการสอนแอนิเมชันโรงบรรจุ LPG · 16:9 (ฝังใน PPT ได้)',
    iconEmoji:'🛢️',
    shot:'assets/screenshots/lpg-training.png',
    accent:'var(--b5)', accent2:'var(--b6)',
    status:'live', statusLabel:'📚 สื่อการสอน · Published',
    purpose:'สื่อการสอนแอนิเมชัน 2D ของสถานีโรงบรรจุก๊าซ LPG — แสดงกระบวนการขนถ่าย/บรรจุครบวงจรพร้อมจุดความปลอดภัย ออกแบบให้ฝังในสไลด์ PowerPoint (16:9) ได้ · ผ่านการรีวิวโดยผู้เชี่ยวชาญอุตสาหกรรม LPG ไทย · เผยแพร่บน GitHub Pages',
    feats:[
      ['🚛','รถ LPG เข้า → เชื่อมสายดิน → ขนถ่าย'],['🛢️','ถังเก็บ Bullet ระดับ 30→85%'],
      ['⚙️','ปั๊ม + คอมเพรสเซอร์ไอ (cutaway)'],['🎡','เครื่องบรรจุหมุน 6 หัว (600–1,500 ถัง/ชม.)'],
      ['🔥','จำลองไฟไหม้ → ระบบสเปรย์ดับเพลิง'],['💨','จำลองไอ LPG หนักสะสมพื้น'],
      ['🚨','Leak Detector · ESD · Fire Monitor'],['🧯','ป้ายเตือน · ถังดับเพลิง · สายดิน'],
      ['🖱️','คลิกอุปกรณ์ดูข้อมูล + Fullscreen'],['📊','ฝังใน PPT ผ่าน Web Viewer Add-in'],
      ['📑','อ้างอิงกฎกระทรวง พ.ศ. 2564 + กรมธุรกิจพลังงาน'],['✅','รีวิวโดยผู้เชี่ยวชาญ LPG ไทย'],
    ],
    audience:'ผู้เข้าอบรมหลักสูตร LPG · วิทยากร',
    platform:'เว็บ 16:9 · GitHub Pages · ฝัง PowerPoint ได้'
  },
];

// ========== FLOW NODES (for interactive diagram) ==========
const FLOW_NODES = {
  // Center
  erp: {
    name:'NET Training Platform',
    sub:'ระบบหลัก · ศูนย์กลางทุกข้อมูล',
    icon:'🛡️',
    accent:'#5e9eff', accent2:'#9b6eff',
    status:'live', dir:'',
    desc:'แกนกลางของระบบทั้งหมด — รับข้อมูลจากลูกค้า จัดการการอบรม ส่งต่อไปยังระบบอื่น แจ้งเตือนผ่าน LINE และเก็บข้อมูลทั้งหมดบน Firebase',
    rows:[
      ['ทำหน้าที่', 'รับข้อมูลลงทะเบียน → ออกเอกสารผ่าน Document Flow + Sync ตาราง/ทีมวิทยากร 2 ทางกับ NETMER-Flow + ส่ง LINE Daily Brief'],
      ['Hosting', 'Firebase App Hosting (asia-southeast1) · auto-deploy on push'],
      ['ฐานข้อมูล', 'Firestore + Realtime Database + Cloud Storage'],
      ['เพิ่มเดือนนี้', 'LINE Daily Brief · ทีมวิทยากรหลายคน · AI สาธารณะ · ค้นหา 2 ชั้น · Cloudflare CDN'],
    ]
  },
  docflow: {
    name:'Document Flow (Quotacraft)',
    sub:'ระบบเอกสารธุรกิจ',
    icon:'📄',
    accent:'#3ee0c1', accent2:'#5e9eff',
    status:'live', dir:'↔ Bidirectional',
    desc:'ออกใบเสนอราคา/ใบกำกับ/ใบเสร็จจากข้อมูลการลงทะเบียน + รับสถานะการชำระเงินกลับ ERP แบบเรียลไทม์ · เดือนนี้รับ quote_request_id round-trip มา pre-fill',
    rows:[
      ['ข้อมูลที่ส่ง', 'รายละเอียดผู้เข้าอบรม, หลักสูตร, ราคา, ที่อยู่, เลขผู้เสียภาษี'],
      ['ข้อมูลที่รับกลับ', 'สถานะใบกำกับภาษี (ชำระแล้ว/ค้างชำระ), Receipt ID, สลิปอนุมัติ'],
      ['Endpoints หลัก', 'POST /api/sync/create-document · POST /api/document-callback · POST /api/sync/invoice-status-webhook'],
      ['ความปลอดภัย', 'Bearer Token (SYNC_API_SECRET) · ผ่าน HTTPS'],
    ]
  },
  netmer: {
    name:'NETMER-Flow',
    sub:'ระบบ HR · Sync 2 ทาง',
    icon:'👥',
    accent:'#ff7ab8', accent2:'#9b6eff',
    status:'live', dir:'↔ Bidirectional (ERP ↔ Flow)',
    desc:'Sync ตารางอบรม + ทีมวิทยากร 2 ทาง — สร้าง/แก้รอบใน ERP ส่งไปขึ้นแผนงานพนักงานทันที และเมื่อแก้รายชื่อวิทยากร/ทีม/สถานที่ในแอป Flow ก็ส่งกลับอัปเดต ERP อัตโนมัติ',
    rows:[
      ['Action ที่ส่ง', 'create · update · delete · updateCounts · trainer roster'],
      ['ทิศทางใหม่ (พ.ค.)', 'Reverse-sync: แก้วิทยากร/ทีม/สถานที่ใน Flow → กลับไปอัปเดต ERP'],
      ['ข้อมูลที่ Sync', 'ชื่อหลักสูตร, ประเภท, วัน-เวลา, ทีมวิทยากร (ต่อวัน/ห้อง), สถานที่, จำนวนผู้สมัคร'],
      ['Endpoint', 'POST /api/training-rounds/sync (Flow) · ERP_REVERSE_SYNC_URL (กลับ ERP)'],
    ]
  },
  cp: {
    name:'CP Safety Passport',
    sub:'ระบบของลูกค้ากลุ่ม CP',
    icon:'🪪',
    accent:'#ffb547', accent2:'#ff7ab8',
    status:'plan', dir:'📋 Planned (ERP) · Live (Verify API)',
    desc:'การเชื่อม ERP ↔ CP Passport ยังเป็นแผน · แต่เดือนนี้ CP เปิด Public Verify API แล้ว และระบบ Online Inspector ดึงประวัติอบรม (module chips) ไปใช้จริง',
    rows:[
      ['สถานะ ERP ↔ CP', 'ยังเป็นแผน — ปัจจุบันส่งออกข้อมูลผ่าน Excel/manual'],
      ['ของใหม่ที่ Live', 'Public /api/verify + /api/verify/detail — ภายนอกเรียกตรวจสอบบัตรได้'],
      ['ใช้งานจริงแล้ว', 'Online Inspector ดึง 14 training modules ของช่างมาแสดง realtime'],
      ['แผน ERP Integration', 'Auto-issue Passport เมื่อจบหลักสูตร + Status Sync กลับ ERP (Q2–Q3 2026)'],
    ]
  },
  post: {
    name:'Thailand Post API',
    sub:'ติดตามพัสดุไปรษณีย์ไทย',
    icon:'📮',
    accent:'#ffb547', accent2:'#ff7ab8',
    status:'live', dir:'← One-way (TPost → ERP)',
    desc:'ระบบ Cron ของ ERP เรียก Thailand Post API อัตโนมัติทุก 4 ชั่วโมง — อัปเดตสถานะพัสดุจาก "จัดส่งแล้ว" เป็น "ได้รับแล้ว"',
    rows:[
      ['ความถี่', 'ทุก 4 ชั่วโมง (Cron Job)'],
      ['Endpoint Thailand Post', 'POST /authenticate/token · POST /track'],
      ['ข้อมูลที่ดึง', 'สถานะพัสดุ (501 = ได้รับ, 2xx = อยู่ระหว่างนำส่ง)'],
      ['Token Cache', '30 วันใน Firestore'],
    ]
  },
  card: {
    name:'เครื่องอ่านบัตรประชาชน',
    sub:'Smart Card Reader · Local Windows',
    icon:'🪪',
    accent:'#5e9eff', accent2:'#3ee0c1',
    status:'live', dir:'↔ Local Service',
    desc:'บริการเล็ก ๆ บนเครื่อง Windows ของพนักงาน อ่านบัตร ปชช. แล้วส่งข้อมูลให้ ERP กรอกอัตโนมัติ — ติดตั้งง่าย ไม่ต้องสิทธิ์ Admin',
    rows:[
      ['การติดตั้ง', 'Windows Task Scheduler (ไม่ต้องสิทธิ์ Admin)'],
      ['การทำงาน', 'รัน localhost:38080 → ERP Web ดึงข้อมูลผ่าน CORS'],
      ['ข้อมูลที่อ่าน', 'เลขบัตร, ชื่อ, วันเกิด, ที่อยู่, รูปถ่าย'],
      ['อัปเดต', 'อัตโนมัติ (auto-update เมื่อมีเวอร์ชันใหม่)'],
    ]
  },
  ai: {
    name:'Google AI · Gemini · Typhoon',
    sub:'AI สำหรับ OCR และ Chat',
    icon:'🤖',
    accent:'#9b6eff', accent2:'#ff7ab8',
    status:'live', dir:'↔ Bidirectional',
    desc:'ใช้ Gemini สำหรับ OCR บัตรประชาชน + ตอบคำถามลูกค้า/พนักงาน + ตรวจสอบกฎหมาย · เดือนนี้เพิ่มแดชบอร์ดติดตามการใช้งาน AI สาธารณะ ที่ /admin/ai-usage',
    rows:[
      ['Models หลัก', 'gemini OCR (บัตรประชาชน) · gemini Chat (ตอบลูกค้า) · fallback สำหรับเอกสารไทย'],
      ['Models เสริม', 'Typhoon Vision (ภาษาไทย OCR เฉพาะ)'],
      ['Use Cases', 'OCR บัตร · AI Chat สาธารณะ (เห็นรอบที่เปิดอยู่) · Compliance Checker · ERP Assistant'],
      ['ใหม่เดือนนี้', 'แดชบอร์ดติดตามการใช้งาน AI สาธารณะ /admin/ai-usage'],
    ]
  },
  push: {
    name:'LINE · FCM · Web Push',
    sub:'แจ้งเตือนหลายช่องทาง',
    icon:'🔔',
    accent:'#5fdc9a', accent2:'#3ee0c1',
    status:'live', dir:'↔ Bidirectional',
    desc:'แจ้งเตือนหลายช่องทาง — LINE Daily Training Brief (สรุปรอบอบรมพรุ่งนี้แบบ Flex ต่อห้อง), Push มือถือผ่าน FCM, เดสก์ท็อปผ่าน VAPID Web Push',
    rows:[
      ['ช่องทาง', 'LINE Messaging (Flex) + FCM (มือถือ) + VAPID Web Push (เบราว์เซอร์)'],
      ['LINE Daily Brief', 'Cloud Scheduler 17:45 น. · push per-target · idempotency กันส่งซ้ำ · Flex ต่อห้อง'],
      ['Subscribe', 'POST /api/push/subscribe (เก็บ token ที่ Firestore)'],
      ['Use Cases', 'สรุปรอบอบรมพรุ่งนี้ · แชทใหม่ · @mention · สายเรียกเข้า · เตือนการอบรม'],
    ]
  },
};
