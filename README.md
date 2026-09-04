# NET Energy · Progress Report (ส.ค. 2026)

รายงานผลการปฏิบัติงานรอบ **11 ส.ค. – 3 ก.ย. 2026** (3.5 สัปดาห์) ของบริษัท เนเชอรัล เอ็นเนอร์ยี เทค จำกัด — **ออกแบบใหม่ทั้งชุด (v5)**

สรุปไฮไลต์ของรอบ: เป็นรอบ **ขยายพอร์ต** — เปิด **ระบบใหม่ 4 ระบบ** (ELMER ใบเสนอราคา+ใบสั่งซื้อ · NET-ID Photo Studio · นามบัตร NFC · KYT MOTTO),
ทำให้ระบบหลัก "ขายได้จริง" มากขึ้น (ใบประกาศพิมพ์ได้จริง · E-Learning พร้อมขาย · ERP เร็วขึ้น 9 เท่า · หน้าหลักสูตรโฉมใหม่ · ระบบสถิติเว็บใหม่)
ขณะที่ธุรกิจอบรมเดินปกติ (ส.ค. อบรม 1,155 คน / 94 รอบ · เข้าเว็บ 45,357 ครั้ง สูงสุดตั้งแต่เปิดเว็บใหม่) — รวม **175 commits** ใน 9 โปรเจกต์

🌐 **Live:** https://netmer.github.io/net-energy-annual-report-2026/ (GitHub Pages จาก `main`)

## ไฟล์

```
index.html            · สไลด์นำเสนอ 16 สไลด์ (เวที 1600×900 ย่อ/ขยายตามจอ)
report.html           · รายงาน A4 พิมพ์/บันทึก PDF ได้ (ตาราง SEO ละเอียด)
css/deck.css          · ระบบดีไซน์ (ธีมสว่าง editorial · NET blue)
js/report-data.js     · ตัวเลขทั้งหมดของรอบ (business · dev · traffic · seo) — แก้ที่นี่ที่เดียว
js/charts.js          · ชุดกราฟ SVG/HTML เล็ก ๆ (คอลัมน์ · เส้น · แท่งนอน · แท่งซ้อน · sparkline) + tooltip + ปุ่ม "ตาราง"
js/renderers.js       · จับคู่ <figure data-chart="…"> กับข้อมูล
js/seo-slides.js      · เรนเดอร์สไลด์ SEO 3 หน้าจาก REPORT.seo
js/deck.js            · เลื่อนสไลด์ · reveal · count-up · เมนู · เต็มจอ · deep-link (#n) · โหมด ?static=1
js/icons.js           · ไอคอน SVG สไตล์ lucide
assets/screenshots/   · ภาพหน้าจอจริง (หน้าเว็บ NET · KYT MOTTO · นามบัตร NFC)
```

## การใช้งาน

- เปิด `index.html` — `←/→` เลื่อน · `M` สารบัญ · `F` เต็มจอ · ลิงก์ตรงไปสไลด์ที่ต้องการด้วย `index.html#5`
- ทุกกราฟมีปุ่ม **"ตาราง"** สลับเป็นตารางตัวเลขเต็ม และมี tooltip เมื่อชี้
- `index.html?static=1` = ปิดแอนิเมชันทั้งหมด (ใช้ตอนถ่ายภาพหน้าจอ/พิมพ์)
- `report.html` — กด Print / Save as PDF

## ที่มาของตัวเลข (ทำซ้ำได้)

| ส่วน | ที่มา |
|---|---|
| งานพัฒนา 175 commits | `git log --all --no-merges --since=2026-08-11 --until=2026-09-04` ทุก repo ใน `E:\Devloper` — NET-workspace 63 · id-photo-studio 54 · Elmer - Document Flow 34 · NETMER-Flow 7 · CP PASSPORT 6 · aom-card 4 · kyt-motto 4 · line-csat 2 · NET - Document Flow 1 (repo ที่ไม่มี commit: elmer-water-analysis · elmer-wastewater · online-inspector · NET-Safety-Hero · chat-mobile · LPG-Training) |
| ธุรกิจอบรม | Firestore (NET-workspace): `registrations` นับตามวันลงทะเบียน · `trainingRecords` status=completed นับตามวันจบอบรม · `trainingSchedules` นับตามวันเริ่มรอบ |
| ยอดเข้าเว็บ | `analyticsMonthly` / `analyticsDaily` (ระบบสถิติใหม่ 2 ก.ย. — ตัวเลขเดียวกับ /admin/analytics · ตัดทราฟฟิกพนักงานออก) |
| SEO | Google Search Console API (`searchanalytics.query`) — ดึงมิติ คีย์เวิร์ด × หน้า เพื่อจับคู่คีย์เวิร์ดกับหลักสูตรตามหน้าที่คนคลิกจริง · สถานะการติดอันดับของแต่ละหลักสูตรวัดจาก **คำค้นที่ดีที่สุดของหน้านั้น** (ไม่ใช่อันดับเฉลี่ย ซึ่ง Google ถัวรวมคำกว้าง ๆ ที่เราอยู่หน้า 5 เข้ามาด้วย) · ต้องมี scope `webmasters.readonly` (ADC) + quota project — ดู memory `gsc-api-access` |

การเทียบรอบก่อน: ช่วงเวลาไม่เท่ากัน (23–24 วัน vs 31 วัน) จึงเทียบ **ต่อวัน** เสมอ

## ดีไซน์

- ธีมสว่างแบบ editorial · ฟอนต์ IBM Plex Sans Thai · สีข้อมูล 4 สีที่ผ่านตัวตรวจ CVD (blue `#2a78d6` · orange `#eb6834` · aqua `#1baf7a` · yellow `#eda100`)
- กราฟ: แท่งบาง ≤ 24px ปลายมน · เส้นกริดบาง · ตัวเลขใช้สีหมึกไม่ใช้สีชุดข้อมูล · ป้ายค่าเฉพาะจุดสำคัญ · ทุกกราฟมีตารางคู่
- ภาพหน้าจอเว็บถ่ายจากเว็บจริงด้วย headless Chrome (`--lang=th-TH`)

---

© 2026 Natural Energy Tech Co., Ltd. · ฝ่าย IT & Digital Development
