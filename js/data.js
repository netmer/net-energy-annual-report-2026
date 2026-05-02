// ========== DATA: SYSTEMS · FLOW NODES ==========

const SYSTEMS = [
  {
    id:'training',
    name:'NET Training Platform',
    tag:'End-to-End Safety Training Platform · Core System',
    icon:'assets/icons/training-platform.png',
    shot:'assets/screenshots/training-platform.png',
    accent:'var(--b1)', accent2:'var(--b2)',
    status:'live', statusLabel:'⚡ Live · 25 Apr 2026',
    purpose:'ระบบหลักที่ใช้ทุกวัน — ลูกค้าเข้าเว็บลงทะเบียน เราออกใบเสนอราคา รับเงิน จัดการคนอบรม ทำสอบ ออกใบประกาศ ส่งของ จบที่นี่ที่เดียว',
    feats:[
      ['🌐','เว็บไซต์สาธารณะ + ลงทะเบียน'],['👤','จัดการผู้เข้าอบรม'],
      ['📅','จัดตารางการอบรม'],['📝','ระบบสอบก่อน/หลัง'],
      ['📊','ระบบประเมินผล'],['🏆','ออกใบประกาศ A4'],
      ['🎨','ออกแบบใบประกาศ'],['💰','เก็บเงินและสลิป'],
      ['🚚','จัดส่งทางไปรษณีย์'],['🪪','เครื่องอ่านบัตร'],
      ['📷','สแกนบัตรด้วย AI'],['💬','แชทภายใน + AI'],
      ['💼','ระบบ CRM'],['📨','สร้างอีเมลลากวาง'],
      ['📥','กล่องข้อความติดต่อ'],['🤖','AI ตอบลูกค้า'],
      ['⚖️','ตรวจสอบกฎหมาย'],['📚','บล็อกและประกาศ'],
      ['📱','PWA Mobile'],['🖥️','แอปเดสก์ท็อป'],
    ],
    audience:'ลูกค้า + พนักงาน + ผู้บริหาร',
    platform:'เว็บ + มือถือ + เดสก์ท็อป'
  },
  {
    id:'docflow',
    name:'NET Document Flow',
    tag:'Business Document Management · Quotacraft',
    shot:'assets/screenshots/document-flow.png',
    accent:'var(--b3)', accent2:'var(--b1)',
    status:'live', statusLabel:'⚡ Live · Production',
    purpose:'ระบบเอกสารธุรกิจ — ทำใบเสนอราคา ใบกำกับภาษี ใบเสร็จ ดูยอดขาย ติดตามหนี้ค้าง · ทำงานร่วมกับ Training Platform โดยตรง ไม่ต้องคีย์ข้อมูลซ้ำ',
    feats:[
      ['📋','ใบเสนอราคา'],['✍️','ลายเซ็นอิเล็กทรอนิกส์'],
      ['🧾','ใบกำกับภาษี'],['💵','ใบเสร็จ + หักภาษี'],
      ['📊','Dashboard ยอดขาย'],['📈','รายงานเปรียบเทียบ'],
      ['👥','ฐานข้อมูลลูกค้า'],['📦','สินค้าและบริการ'],
      ['⏰','ติดตามหนี้ค้าง'],['💳','บันทึกการรับชำระ'],
      ['📂','Export Excel/PDF'],['🖨️','รองรับ Dot Matrix'],
    ],
    audience:'คอลเซ็นเตอร์ + บัญชี',
    platform:'เว็บ · เชื่อมกับ Training Platform'
  },
  {
    id:'netmer',
    name:'NETMER-Flow',
    tag:'Human Resources Management System (HRMS)',
    icon:'assets/icons/netmer-flow.png',
    shot:'assets/screenshots/netmer-flow.png',
    accent:'var(--b4)', accent2:'var(--b2)',
    status:'live', statusLabel:'⚡ Live · Production',
    purpose:'ระบบ HR ของพนักงาน ใช้เช็คอินเข้างาน ดูตารางงาน ขอลา จองรถบริษัท ขออุปกรณ์ IT — ใช้ได้ทั้งในเว็บและในแอปบนมือถือ Android',
    feats:[
      ['📍','เช็คอินด้วย GPS'],['🗓️','ตารางงานส่วนตัว'],
      ['📝','ขอลา + ขอ OT'],['📊','ยอดวันลาคงเหลือ'],
      ['🚗','จัดการรถบริษัท'],['💻','ทรัพย์สิน IT + QR'],
      ['🤖','สแกนด้วย AI'],['📋','กระดานงาน'],
      ['⚠️','รายงานความผิดปกติ'],['📈','ภาพรวมทีม'],
      ['🎯','ประเมินผลงาน'],['📲','แอป Android'],
    ],
    audience:'พนักงานทุกคน + HR + ผู้บริหาร',
    platform:'เว็บ + Android APK'
  },
  {
    id:'cp',
    name:'CP Safety Passport',
    tag:'Safety Passport System · CP Group Customer',
    icon:'assets/icons/cp-passport.png',
    iconLarge:true,
    accent:'var(--b5)', accent2:'var(--b4)',
    status:'live', statusLabel:'⚡ Live · Production',
    purpose:'ระบบ Safety Passport ที่ทำให้กลุ่ม CP ใช้ — มีเครื่องมือออกแบบหน้า Passport แบบลากวาง พิมพ์ครั้งละหลายร้อยใบ และตรวจสอบความถูกต้องด้วย QR + AI',
    feats:[
      ['📊','Dashboard ภาพรวม'],['👥','ผู้เข้าอบรม'],
      ['📚','หลักสูตรอบรม'],['🏢','ศูนย์ฝึกอบรม'],
      ['🎨','Passport Designer'],['🖨️','พิมพ์ Batch'],
      ['🔍','Verify ด้วย QR'],['🤖','Verify ด้วย AI'],
      ['📈','รายงาน'],['📥','รับคำขอบริการ'],
      ['📤','Export ZIP'],['🇹🇭','PDF ภาษาไทย'],
    ],
    audience:'ศูนย์ฝึก + Trainer',
    platform:'เว็บ · ลูกค้า: กลุ่ม CP'
  },
  {
    id:'chat',
    name:'NET Chat Mobile',
    tag:'Internal Communication App · iOS & Android',
    icon:'assets/icons/chat-mobile.png',
    shot:'assets/screenshots/chat-mobile-main.png',
    shotPortrait:true,
    accent:'var(--b6)', accent2:'var(--b3)',
    status:'dev', statusLabel:'🔬 In Development',
    purpose:'แอปแชทมือถือสำหรับทีมในบริษัท หน้าตาเหมือน LINE — แชท ส่งไฟล์ โทรเสียง โทรวิดีโอ มี AI Bot ช่วยตอบ · ตอนนี้อยู่ระหว่างทดสอบ ก่อนปล่อยให้ทุกคนใช้',
    feats:[
      ['💬','แชทข้อความ + กลุ่ม'],['📞','โทรเสียง 1-on-1'],
      ['📹','วิดีโอคอล'],['🟢','สถานะออนไลน์'],
      ['@','แท็กเพื่อนร่วมงาน'],['🔔','Push Notification'],
      ['🤖','ผู้ช่วย AI Bot'],['📌','ปักหมุดข้อความ'],
      ['📎','ส่งไฟล์/รูป'],['🃏','การ์ดข้อมูลอัจฉริยะ'],
      ['🔄','อัปเดตในแอป'],['👤','โปรไฟล์'],
    ],
    audience:'ทีมงานทุกคน',
    platform:'iOS + Android'
  },
  {
    id:'safety-hero',
    name:'NET Safety Hero (NET ZERO)',
    tag:'Safety Mindset Gamification App · Standalone',
    icon:'assets/icons/safety-hero.png',
    iconLarge:true,
    accent:'var(--b1)', accent2:'var(--b3)',
    status:'live', statusLabel:'⚡ Live · Standalone',
    purpose:'แอป Gamification สร้าง Safety Mindset สำหรับพนักงาน — Commitment Card, Safety Plan, Hierarchy of Controls, Leaderboard, Avatar · ทำงานเป็นระบบเดี่ยว ยังไม่ได้ Integrate กับระบบอื่นในเครือ',
    feats:[
      ['🎯','Safety Mindset · Zero Accidents'],['🃏','Commitment Card Library'],
      ['📋','Personal Safety Plan'],['🛡️','Hierarchy of Controls'],
      ['💡','Safety Tips Knowledge Base'],['🏆','Leaderboard · Ranking'],
      ['👤','Avatar Customization'],['📚','User Manual'],
      ['📱','PWA + Native (Capacitor)'],['🔐','Phone-based Authentication'],
      ['📊','Admin Dashboard'],['☁️','Firebase Auth + Firestore'],
    ],
    audience:'Public',
    platform:'เว็บ · iOS · Android'
  },
  {
    id:'elmer',
    name:'ELMER Water Analysis',
    tag:'Water Analysis Reporting System · Greenfield Project',
    iconEmoji:'💧',
    accent:'var(--b2)', accent2:'var(--b3)',
    status:'dev', statusLabel:'🔬 Kickoff · 30 Apr 2026',
    purpose:'โปรเจกต์ใหม่ที่เริ่มปลายเดือน — ทำให้ทีมของ Elmer สร้างรายงานวิเคราะห์น้ำได้อัตโนมัติ',
    feats:[
      ['🏪','รองรับ 4 ประเภทร้าน'],['📸','อัปโหลดรูปจุดเก็บ'],
      ['🧪','บันทึกผล Lab'],['✅','เปรียบเทียบมาตรฐาน'],
      ['👁️','Preview รายงาน'],['📄','สร้าง PDF'],
      ['💡','แนะนำการแก้ไข'],['🔐','สิทธิ์ 3 ระดับ'],
      ['📋','Audit Log'],['📊','Dashboard'],
    ],
    audience:'พนักงาน Elmer',
    platform:'เว็บ · เป้าหมายลด 200–1,000 รายงาน/เดือน'
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
    desc:'แกนกลางของระบบทั้งหมด — รับข้อมูลจากลูกค้า, จัดการการอบรม, ส่งต่อไปยังระบบอื่น และเก็บข้อมูลทั้งหมดไว้บน Firebase',
    rows:[
      ['ทำหน้าที่', 'รับข้อมูลลงทะเบียน → ส่งต่อ Document Flow ออกใบเสนอราคา + ส่งตารางอบรมไป NETMER-Flow + แจ้งเตือนผ่าน Chat Mobile'],
      ['Hosting', 'Firebase App Hosting (asia-southeast1)'],
      ['ฐานข้อมูล', 'Firestore + Realtime Database + Cloud Storage'],
    ]
  },
  docflow: {
    name:'Document Flow (Quotacraft)',
    sub:'ระบบเอกสารธุรกิจ',
    icon:'📄',
    accent:'#3ee0c1', accent2:'#5e9eff',
    status:'live', dir:'↔ Bidirectional',
    desc:'ออกใบเสนอราคา/ใบกำกับ/ใบเสร็จจากข้อมูลการลงทะเบียน + รับสถานะการชำระเงินกลับ ERP แบบเรียลไทม์',
    rows:[
      ['ข้อมูลที่ส่ง', 'รายละเอียดผู้เข้าอบรม, หลักสูตร, ราคา, ที่อยู่, เลขผู้เสียภาษี'],
      ['ข้อมูลที่รับกลับ', 'สถานะใบกำกับภาษี (ชำระแล้ว/ค้างชำระ), Receipt ID, สลิปอนุมัติ'],
      ['Endpoints หลัก', 'POST /api/sync/create-document · POST /api/document-callback · POST /api/sync/invoice-status-webhook'],
      ['ความปลอดภัย', 'Bearer Token (SYNC_API_SECRET) · ผ่าน HTTPS'],
    ]
  },
  netmer: {
    name:'NETMER-Flow',
    sub:'ระบบ HR · บริหารตารางงาน',
    icon:'👥',
    accent:'#ff7ab8', accent2:'#9b6eff',
    status:'live', dir:'→ One-way (ERP → NETMER)',
    desc:'ส่งข้อมูลตารางอบรม + จำนวนผู้เข้าอบรมไปขึ้นแผนงานของพนักงาน — เมื่อสร้าง/แก้ไข/ยกเลิกรอบใน ERP จะ sync ทันที',
    rows:[
      ['Action ที่ส่ง', 'create · update · delete · updateCounts'],
      ['ข้อมูลที่ส่ง', 'ชื่อหลักสูตร, ประเภท (Public/Inhouse), วัน-เวลา, วิทยากร, สถานที่, จำนวนผู้สมัคร'],
      ['Trigger', 'เมื่อสร้าง/แก้ไขตารางใน ERP, เมื่อมีการลงทะเบียนใหม่/ยืนยัน/ยกเลิก'],
      ['Endpoint', 'POST /api/training-rounds/sync (NETMER-Flow)'],
    ]
  },
  chat: {
    name:'NET Chat Mobile',
    sub:'แอปแชทมือถือ · iOS + Android',
    icon:'💬',
    accent:'#5fdc9a', accent2:'#3ee0c1',
    status:'live', dir:'↔ Bidirectional',
    desc:'แอปบนมือถือสำหรับทีม — แชท, โทรเสียง/วิดีโอผ่าน Agora, รับ-ส่งการแจ้งเตือน FCM, ใช้ AI Bot ผ่าน ERP API',
    rows:[
      ['ขอ Token', 'POST /api/agora-token (Firebase Auth required)'],
      ['ส่งแจ้งเตือน', 'POST /api/chat-notify (kind: message | incoming_call)'],
      ['คุย AI', 'POST /api/ai/ask · POST /api/ai/reset'],
      ['Voice/Video', 'Agora RTC SDK · App Cert ฝั่ง server'],
    ]
  },
  cp: {
    name:'CP Safety Passport',
    sub:'ระบบของลูกค้ากลุ่ม CP',
    icon:'🪪',
    accent:'#ffb547', accent2:'#ff7ab8',
    status:'plan', dir:'📋 Planned Integration',
    desc:'แผนงานในอนาคต — ส่งข้อมูลผู้อบรมจาก ERP ไปออก Safety Passport ในระบบ CP และส่งสถานะ Passport กลับ ERP เพื่อใช้กับการอบรมรอบถัดไป',
    rows:[
      ['สถานะปัจจุบัน', 'ยังไม่มี API เชื่อม — ส่งออกข้อมูลผ่าน Excel/manual export'],
      ['แผน Phase 1', 'ส่งข้อมูลผู้อบรมจาก ERP → CP Passport อัตโนมัติเมื่อจบหลักสูตร'],
      ['แผน Phase 2', 'ส่งสถานะ Passport กลับ ERP เพื่อตรวจสอบความครบถ้วนของผู้รับเหมา'],
      ['ระยะเวลาคาดการณ์', 'ภายใน Q2-Q3 2026'],
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
    desc:'ใช้ Gemini สำหรับ OCR บัตรประชาชน + ตอบคำถามลูกค้าและพนักงาน + ตรวจสอบกฎหมาย + Typhoon เป็น fallback สำหรับเอกสารไทยโดยเฉพาะ',
    rows:[
      ['Models หลัก', 'gemini-3.1-flash-lite (OCR) · gemini-2.5-flash (Chat) · gemini-3-flash-preview (fallback)'],
      ['Models เสริม', 'Typhoon Vision (ภาษาไทย OCR เฉพาะ)'],
      ['Use Cases', 'OCR บัตรประชาชน · AI Chat สาธารณะ · Compliance Checker · ERP Assistant'],
      ['ความปลอดภัย', 'GEMINI_API_KEY · TYPHOON_OCR_API_KEY (Firebase Secrets)'],
    ]
  },
  push: {
    name:'FCM + Web Push (VAPID)',
    sub:'ระบบแจ้งเตือนข้ามอุปกรณ์',
    icon:'🔔',
    accent:'#5fdc9a', accent2:'#3ee0c1',
    status:'live', dir:'↔ Bidirectional',
    desc:'Push Notification หลายช่องทาง — มือถือผ่าน FCM, เดสก์ท็อปผ่าน VAPID Web Push — รองรับ deduplication ไม่ให้แจ้งเตือนซ้ำ',
    rows:[
      ['ช่องทาง', 'FCM (มือถือ) + VAPID Web Push (เบราว์เซอร์)'],
      ['Subscribe', 'POST /api/push/subscribe (เก็บ token ที่ Firestore)'],
      ['ส่ง', 'POST /api/push/send · POST /api/chat-notify'],
      ['Use Cases', 'แชทใหม่ · @mention · สายเรียกเข้า · เตือนการอบรม'],
    ]
  },
};
