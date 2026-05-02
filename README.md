# NET Energy · Annual Report 2026

รายงานผลการปฏิบัติงานประจำปี 2026 (ม.ค. – เม.ย.) ของบริษัท เนเชอรัล เอ็นเนอร์ยี เทค จำกัด

🌐 **Live demo:** จะ deploy ผ่าน GitHub Pages (ดู link ใน Settings → Pages)

## เนื้อหา

นำเสนอแบบ slide-based · 11 หัวข้อ:

1. **Title** — ปกหน้า
2. **Agenda** — สารบัญหัวข้อนำเสนอ
3. **Systems Overview** — 7 ระบบที่ดูแล
4. **System Integration** — การเชื่อมต่อระหว่างระบบ (Interactive)
5. **ERP Workflow** — 9 ขั้นตอน End-to-End
6. **Cloud Phone System** — ระบบโทรศัพท์
7. **SEO & AI Search** — การปรับแต่งเว็บไซต์
8. **SEO Performance** — ผลลัพธ์จริงจาก Search Console
9. **Timeline** — ลำดับเหตุการณ์สำคัญ
10. **Roadmap** — แผนการพัฒนาในอนาคต
11. **Thank You** — Q&A

## การใช้งาน

### เปิดใช้งานในเครื่อง
ดับเบิลคลิก `index.html` หรือเปิดผ่าน Live Server

### Keyboard Shortcuts
| Key | Action |
|---|---|
| `←` / `→` | Previous / Next slide |
| `Space` | Next slide |
| `M` | Toggle menu |
| `F` | Fullscreen |
| `Esc` | Close modal/menu |
| `Home` / `End` | First / Last slide |

## โครงสร้างไฟล์

```
Present-NET-Report/
├── index.html              · โครง HTML หลัก
├── css/
│   ├── base.css           · Reset, variables, animations
│   ├── ui.css             · Topbar, menu, modal
│   ├── slides.css         · Slide-specific styles
│   └── flow.css           · Interactive flow diagram
├── js/
│   ├── data.js            · Systems & flow nodes data
│   ├── flow.js            · Interactive flow logic
│   ├── workflow.js        · ERP workflow stepper
│   └── app.js             · Slide navigation, modal, menu
└── assets/
    ├── icons/             · App icons
    └── screenshots/       · UI screenshots
```

## เทคโนโลยี

- HTML5 + CSS3 + Vanilla JavaScript (ไม่ใช้ Framework)
- SVG animations สำหรับ Flow Diagram
- Responsive · Print-friendly

---

© 2026 Natural Energy Tech Co., Ltd.
