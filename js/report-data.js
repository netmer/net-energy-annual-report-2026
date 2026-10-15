// ============================================================
// REPORT DATA — รอบ ก.ย.–ต.ค. 2569 (4 ก.ย. – 15 ต.ค. 2569)
// ทุกตัวเลขมีที่มา: git history 12 repos · Firestore (NET-workspace) · Google Search Console API
// ส่วน seo สร้างจากสคริปต์วิเคราะห์ Search Console (ดู README) — ข้อความบรรยายแก้ได้ที่ seoText
// ============================================================
window.REPORT = {
  period: { label: '4 ก.ย. – 15 ต.ค. 2569', short: 'ก.ย.–ต.ค. 2569', start: '2026-09-04', end: '2026-10-15', days: 42, weeks: 6 },

  // ---- งานพัฒนา (git log --all --no-merges ทุก repo ใน E:\Devloper · ไม่นับ stash)
  dev: {
    total: 327, repos: 12, prevTotal: 175, prevDays: 24,
    byRepo: [
      { label: 'เว็บไซต์ NET + ERP', sub: 'NET-workspace', n: 104, kind: 'core' },
      { label: 'NETMER-Flow', sub: 'HR · จอผู้บริหาร · ป้ายดิจิทัล', n: 75, kind: 'core' },
      { label: 'NET × AXTRA SHE Audit', sub: 'cp-axtra-audit · ใหม่', n: 40, kind: 'new' },
      { label: 'เว็บไซต์ ELMER', sub: 'elmer-int.com · ใหม่', n: 29, kind: 'new' },
      { label: 'NET LMS (SDS)', sub: 'net-lms · ใหม่', n: 23, kind: 'new' },
      { label: 'CP Safety Passport', sub: 'cp-passport', n: 15, kind: 'core' },
      { label: 'NET-ID Photo Studio', sub: 'id-photo-studio', n: 13, kind: 'core' },
      { label: 'ELMER Water Analysis', sub: 'elmer-water-analysis', n: 9, kind: 'core' },
      { label: 'NET Document Flow', sub: 'ใบเสนอราคา · ใบเสร็จ', n: 9, kind: 'core' },
      { label: 'ELMER ใบเสนอราคา + PO', sub: 'elmer-quotation-flow', n: 8, kind: 'core' },
      { label: 'อื่น ๆ 2 ระบบ', sub: 'Online Inspector · ELMER Wastewater', n: 2, kind: 'core' },
    ],
    weeks: [
      { label: '4–10 ก.ย.', n: 46 }, { label: '11–17', n: 53 }, { label: '18–24', n: 50 },
      { label: '25 ก.ย.–1 ต.ค.', n: 43 }, { label: '2–8 ต.ค.', n: 76 }, { label: '9–15', n: 59 },
    ],
  },

  // ---- ธุรกิจอบรม (Firestore ณ 15 ต.ค. 2569)
  //  registrations นับตามวันลงทะเบียน · trainingRecords status=completed นับตามวันจบอบรม · trainingSchedules นับตามวันเริ่มรอบ
  biz: {
    regs: [{ m: 'เม.ย.', v: 486 }, { m: 'พ.ค.', v: 917 }, { m: 'มิ.ย.', v: 893 }, { m: 'ก.ค.', v: 906 }, { m: 'ส.ค.', v: 798 }, { m: 'ก.ย.', v: 967 }, { m: 'ต.ค.*', v: 407, partial: true }],
    trained: [{ m: 'พ.ค.', v: 1207 }, { m: 'มิ.ย.', v: 1051 }, { m: 'ก.ค.', v: 1212 }, { m: 'ส.ค.', v: 1297 }, { m: 'ก.ย.', v: 1375 }, { m: 'ต.ค.*', v: 466, partial: true }],
    rounds: [{ m: 'พ.ค.', v: 89 }, { m: 'มิ.ย.', v: 99 }, { m: 'ก.ค.', v: 102 }, { m: 'ส.ค.', v: 94 }, { m: 'ก.ย.', v: 91 }, { m: 'ต.ค.', v: 114 }, { m: 'พ.ย.', v: 83, ahead: true }],
    sep: { rounds: 91, open: 60, full: 27, cancelled: 4, courses: 29, regs: 967, confirmed: 822, regCancelled: 106, pending: 39, trained: 1375, companies: 248, roundsWithCompletions: 42 },
    oct: { rounds: 114, open: 105, full: 9, courses: 36, inhouse: 47, hybrid: 1, regs: 407, regCancelled: 27, trained: 466 },
    sepMode: [
      { label: 'Public ที่ศูนย์ฯ', value: 43 }, { label: 'Public ออนไลน์', value: 29 },
      { label: 'In-house ที่ลูกค้า', value: 17 }, { label: 'In-house ออนไลน์', value: 2 },
    ],
    octMode: [
      { label: 'Public ที่ศูนย์ฯ', value: 43 }, { label: 'Public ออนไลน์', value: 23 },
      { label: 'In-house ที่ลูกค้า', value: 42 }, { label: 'In-house ออนไลน์ + Hybrid', value: 6 },
    ],
    sepTopTrained: [
      ['G CP · ปลูกจิตสำนึกความปลอดภัย', 477], ['E/EE CP · ไฟฟ้า', 232], ['G AIS · ผู้รับเหมา', 204], ['H AIS · ที่สูง', 171],
      ['R CP · หลังคา', 104], ['E AIS · ไฟฟ้า', 84], ['T AIS · เสาส่งสัญญาณ', 27], ['T CP · เสาทาวเวอร์', 26], ['อับอากาศ 4 ผู้', 20], ['SP CP · ที่สูง', 12],
    ],
    augRevised: { before: 1155, after: 1297 },
  },

  // ---- ระบบสถิติเว็บของเรา (analyticsEvents) — แทบไม่ได้บันทึกหลัง 2 ก.ย.
  webStats: { aug: 45375, sep1to17: 3095, sep18toOct15: 55, lastGoodDay: '2 ก.ย. 2569' },

  // ---- SEO (Google Search Console API · 4 ก.ย. – 13 ต.ค. เทียบ 40 วันก่อนหน้า) — เติมโดยสคริปต์
  seo: {
   "window": {
    "label": "4 ก.ย. – 13 ต.ค. 2569",
    "days": 40
   },
   "prevWindow": {
    "label": "26 ก.ค. – 3 ก.ย. 2569",
    "days": 40
   },
   "totals": {
    "clicks": 4498,
    "impressions": 79040,
    "ctr": 0.0569,
    "position": 6.3
   },
   "prev": {
    "clicks": 3870,
    "impressions": 61049,
    "ctr": 0.0634,
    "position": 7.6
   },
   "dailyLabels": [
    "4 ก.ย.",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "1 ต.ค.",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13"
   ],
   "dailyTip": [
    "4 ก.ย.",
    "5 ก.ย.",
    "6 ก.ย.",
    "7 ก.ย.",
    "8 ก.ย.",
    "9 ก.ย.",
    "10 ก.ย.",
    "11 ก.ย.",
    "12 ก.ย.",
    "13 ก.ย.",
    "14 ก.ย.",
    "15 ก.ย.",
    "16 ก.ย.",
    "17 ก.ย.",
    "18 ก.ย.",
    "19 ก.ย.",
    "20 ก.ย.",
    "21 ก.ย.",
    "22 ก.ย.",
    "23 ก.ย.",
    "24 ก.ย.",
    "25 ก.ย.",
    "26 ก.ย.",
    "27 ก.ย.",
    "28 ก.ย.",
    "29 ก.ย.",
    "30 ก.ย.",
    "1 ต.ค.",
    "2 ต.ค.",
    "3 ต.ค.",
    "4 ต.ค.",
    "5 ต.ค.",
    "6 ต.ค.",
    "7 ต.ค.",
    "8 ต.ค.",
    "9 ต.ค.",
    "10 ต.ค.",
    "11 ต.ค.",
    "12 ต.ค.",
    "13 ต.ค."
   ],
   "dailyClicks": [
    99,
    51,
    96,
    156,
    130,
    168,
    153,
    113,
    53,
    121,
    152,
    152,
    144,
    141,
    116,
    59,
    108,
    187,
    164,
    148,
    138,
    81,
    32,
    80,
    130,
    112,
    125,
    115,
    86,
    46,
    96,
    148,
    153,
    141,
    128,
    73,
    38,
    81,
    75,
    109
   ],
   "dailyClicksPrev": [
    46,
    38,
    39,
    74,
    85,
    66,
    33,
    83,
    109,
    129,
    109,
    109,
    72,
    27,
    64,
    91,
    75,
    82,
    113,
    76,
    39,
    81,
    156,
    134,
    177,
    144,
    75,
    54,
    81,
    140,
    151,
    160,
    154,
    102,
    46,
    87,
    141,
    130,
    151,
    147
   ],
   "monthly": [
    {
     "m": "พ.ค.",
     "clicks": 1775,
     "impressions": 14384,
     "days": 31,
     "partial": false
    },
    {
     "m": "มิ.ย.",
     "clicks": 2110,
     "impressions": 19570,
     "days": 30,
     "partial": false
    },
    {
     "m": "ก.ค.",
     "clicks": 2441,
     "impressions": 26919,
     "days": 31,
     "partial": false
    },
    {
     "m": "ส.ค.",
     "clicks": 3094,
     "impressions": 48053,
     "days": 31,
     "partial": false
    },
    {
     "m": "ก.ย.",
     "clicks": 3637,
     "impressions": 63228,
     "days": 30,
     "partial": false
    },
    {
     "m": "ต.ค.",
     "clicks": 1289,
     "impressions": 23605,
     "days": 13,
     "partial": true
    }
   ],
   "queriesTotal": 1970,
   "pagesTotal": 443,
   "groups": [
    {
     "label": "หน้าหลักสูตรรายตัว",
     "value": 2374
    },
    {
     "label": "หน้าแรก",
     "value": 945
    },
    {
     "label": "หน้าหมวด + หน้าจังหวัด",
     "value": 811
    },
    {
     "label": "CP Passport · ติดต่อ · บทความ · อื่น ๆ",
     "value": 527
    }
   ],
   "groupsPrev": {
    "course": 1911,
    "home": 923,
    "catloc": 740,
    "other": 423
   },
   "devices": [
    {
     "label": "Desktop",
     "value": 2824
    },
    {
     "label": "Mobile",
     "value": 1642
    },
    {
     "label": "Tablet",
     "value": 32
    }
   ],
   "byCourse": [
    {
     "course": "ช่างไฟฟ้า ระดับ 1",
     "cat": "ช่างไฟฟ้า & ช่างแอร์",
     "clicks": 435,
     "prevClicks": 360,
     "impressions": 11250,
     "position": 5.8,
     "bestQ": {
      "q": "ใบรับรองช่างไฟฟ้า",
      "clicks": 0,
      "impressions": 6,
      "position": 1
     },
     "kwCount": 213,
     "topKw": [
      {
       "q": "อบรมช่างไฟฟ้าภายในอาคาร ระดับ 1",
       "clicks": 21,
       "impressions": 323,
       "position": 2.8
      },
      {
       "q": "อบรมไฟฟ้าระดับ 1",
       "clicks": 17,
       "impressions": 224,
       "position": 2.9
      },
      {
       "q": "อบรมช่างไฟฟ้าภายในอาคาร",
       "clicks": 10,
       "impressions": 133,
       "position": 2.8
      }
     ]
    },
    {
     "course": "สถานที่ใช้ LPG",
     "cat": "กรมธุรกิจพลังงาน",
     "clicks": 347,
     "prevClicks": 241,
     "impressions": 2431,
     "position": 5.7,
     "bestQ": {
      "q": "ผู้ปฏิบัติงานสถานที่ใช้ก๊าซปิโตรเลียมเหลว",
      "clicks": 9,
      "impressions": 37,
      "position": 1.1
     },
     "kwCount": 57,
     "topKw": [
      {
       "q": "ผู้ปฏิบัติงานสถานที่ใช้ก๊าซปิโตรเลียมเหลว",
       "clicks": 9,
       "impressions": 37,
       "position": 1.1
      },
      {
       "q": "อบรมแก๊ส",
       "clicks": 7,
       "impressions": 17,
       "position": 1.2
      },
      {
       "q": "อบรม ผู้ควบคุมก๊าซ lpg 2569",
       "clicks": 3,
       "impressions": 33,
       "position": 1.9
      }
     ]
    },
    {
     "course": "สถานที่เก็บรักษาน้ำมัน",
     "cat": "กรมธุรกิจพลังงาน",
     "clicks": 150,
     "prevClicks": 125,
     "impressions": 1314,
     "position": 4.7,
     "bestQ": {
      "q": "ที่เก็บน้ำมัน",
      "clicks": 0,
      "impressions": 3,
      "position": 1
     },
     "kwCount": 29,
     "topKw": [
      {
       "q": "อบรม ผู้ปฏิบัติงาน สถาน ที่ เก็บ รักษา น้ำมัน 2569",
       "clicks": 3,
       "impressions": 8,
       "position": 1.4
      },
      {
       "q": "ผู้ปฏิบัติงาน",
       "clicks": 0,
       "impressions": 114,
       "position": 5
      },
      {
       "q": "ตรวจสถานที่เก็บรักษาน้ำมัน",
       "clicks": 0,
       "impressions": 35,
       "position": 14.5
      }
     ]
    },
    {
     "course": "สถานีบริการน้ำมัน",
     "cat": "กรมธุรกิจพลังงาน",
     "clicks": 132,
     "prevClicks": 153,
     "impressions": 1520,
     "position": 4.8,
     "bestQ": {
      "q": "บัตรประจําตัวผู้ปฏิบัติงานสถานีบริการน้ํามัน",
      "clicks": 0,
      "impressions": 6,
      "position": 1
     },
     "kwCount": 26,
     "topKw": [
      {
       "q": "fuel service station",
       "clicks": 1,
       "impressions": 1,
       "position": 8
      },
      {
       "q": "ผู้ปฏิบัติงาน",
       "clicks": 0,
       "impressions": 183,
       "position": 4.7
      },
      {
       "q": "สถานีบริการน้ำมัน",
       "clicks": 0,
       "impressions": 54,
       "position": 5.3
      }
     ]
    },
    {
     "course": "สถานที่ใช้ NG",
     "cat": "กรมธุรกิจพลังงาน",
     "clicks": 120,
     "prevClicks": 129,
     "impressions": 1806,
     "position": 4.1,
     "bestQ": {
      "q": "อบรม ผู้ปฏิบัติงาน สถาน ที่ ใช้ก๊าซธรรมชาติ 2569",
      "clicks": 7,
      "impressions": 19,
      "position": 1
     },
     "kwCount": 38,
     "topKw": [
      {
       "q": "อบรม ผู้ปฏิบัติงาน สถาน ที่ ใช้ก๊าซธรรมชาติ 2569",
       "clicks": 7,
       "impressions": 19,
       "position": 1
      },
      {
       "q": "ผู้ปฏิบัติงานสถานที่ใช้ก๊าซธรรมชาติ",
       "clicks": 5,
       "impressions": 46,
       "position": 1.1
      },
      {
       "q": "อบรมผู้ปฏิบัติงานสถานที่ใช้ก๊าซธรรมชาติ",
       "clicks": 2,
       "impressions": 5,
       "position": 1.2
      }
     ]
    },
    {
     "course": "ความปลอดภัยในงานที่สูง",
     "cat": "งานบนที่สูง",
     "clicks": 103,
     "prevClicks": 51,
     "impressions": 2394,
     "position": 5.4,
     "bestQ": {
      "q": "ตามกฎกระทรวง ฯ ทำงานที่สูง 2564 การทำงานในพื้นที่ปฏิบัติงานที่สูงจากพื้นดิน หรือจากพื้นอาคาร ตั้งแต่กี่เมตรขึ้นไป ถึงเรียกว่าทำงานที่สูง",
      "clicks": 0,
      "impressions": 16,
      "position": 1
     },
     "kwCount": 72,
     "topKw": [
      {
       "q": "อบรมที่สูง",
       "clicks": 9,
       "impressions": 331,
       "position": 5
      },
      {
       "q": "ที่สูง",
       "clicks": 3,
       "impressions": 115,
       "position": 7.7
      },
      {
       "q": "อบรมทำงานบนที่สูง",
       "clicks": 3,
       "impressions": 9,
       "position": 7.9
      }
     ]
    },
    {
     "course": "G CP",
     "cat": "ผู้รับเหมา CP",
     "clicks": 97,
     "prevClicks": 56,
     "impressions": 1632,
     "position": 4.6,
     "bestQ": {
      "q": "tesco safety passport",
      "clicks": 0,
      "impressions": 9,
      "position": 1.2
     },
     "kwCount": 40,
     "topKw": [
      {
       "q": "อบรมโลตัส",
       "clicks": 22,
       "impressions": 54,
       "position": 2.7
      },
      {
       "q": "safety passport",
       "clicks": 1,
       "impressions": 57,
       "position": 7.4
      },
      {
       "q": "cp safety passport",
       "clicks": 0,
       "impressions": 61,
       "position": 7.5
      }
     ]
    },
    {
     "course": "ก๊าซแอมโมเนีย",
     "cat": "กรมโรงงานอุตสาหกรรม",
     "clicks": 83,
     "prevClicks": 85,
     "impressions": 553,
     "position": 5.8,
     "bestQ": {
      "q": "อบรมหลักสูตรผู้ควบคุมระบบ ทำความ เย็นที่ใช้แอมโมเนียเป็นสาร ทำความ เย็น",
      "clicks": 0,
      "impressions": 4,
      "position": 2
     },
     "kwCount": 15,
     "topKw": [
      {
       "q": "อบรม ผู้ควบคุมระบบ ทำความ เย็น 2569",
       "clicks": 2,
       "impressions": 26,
       "position": 5.2
      },
      {
       "q": "แอมโมเนีย",
       "clicks": 1,
       "impressions": 8,
       "position": 74
      },
      {
       "q": "อบรมหลักสูตรผู้ควบคุมระบบ ทำความ เย็นที่ใช้แอมโมเนียเป็นสาร ทำความ เย็น",
       "clicks": 0,
       "impressions": 4,
       "position": 2
      }
     ]
    },
    {
     "course": "ดับเพลิงขั้นต้น",
     "cat": "การป้องกันและระงับอัคคีภัย",
     "clicks": 64,
     "prevClicks": 37,
     "impressions": 2192,
     "position": 6.5,
     "bestQ": {
      "q": "การฝึกอบรมดับเพลิงขั้นต้น",
      "clicks": 0,
      "impressions": 8,
      "position": 1
     },
     "kwCount": 45,
     "topKw": [
      {
       "q": "อบรมดับเพลิงขั้นต้น ฟรี 2569",
       "clicks": 21,
       "impressions": 305,
       "position": 4.6
      },
      {
       "q": "อบรมดับเพลิงขั้นต้น",
       "clicks": 11,
       "impressions": 795,
       "position": 6.2
      },
      {
       "q": "อบรมดับเพลิงขั้นต้น 2569",
       "clicks": 5,
       "impressions": 26,
       "position": 3.8
      }
     ]
    },
    {
     "course": "TSM ทบทวน 3 ชั่วโมง",
     "cat": "ADR & TSM",
     "clicks": 62,
     "prevClicks": 33,
     "impressions": 734,
     "position": 6.1,
     "bestQ": {
      "q": "อบรม ต่ออายุ tsm ออนไลน์",
      "clicks": 4,
      "impressions": 18,
      "position": 4.1
     },
     "kwCount": 27,
     "topKw": [
      {
       "q": "อบรม ต่ออายุ tsm ออนไลน์",
       "clicks": 4,
       "impressions": 18,
       "position": 4.1
      },
      {
       "q": "อบรมต่ออายุ tsm",
       "clicks": 3,
       "impressions": 14,
       "position": 9
      },
      {
       "q": "มีอบรมออนไลน์ไหม",
       "clicks": 1,
       "impressions": 1,
       "position": 2
      }
     ]
    },
    {
     "course": "G AIS",
     "cat": "ผู้รับเหมา AIS",
     "clicks": 56,
     "prevClicks": 56,
     "impressions": 654,
     "position": 4.1,
     "bestQ": {
      "q": "หากเข้าปฏิบัติงานโดยไม่มีบัตร safety passport จะมีค่าปรับเท่าใด",
      "clicks": 0,
      "impressions": 5,
      "position": 1
     },
     "kwCount": 25,
     "topKw": [
      {
       "q": "ais safety passport",
       "clicks": 3,
       "impressions": 42,
       "position": 4.2
      },
      {
       "q": "ais passport",
       "clicks": 1,
       "impressions": 49,
       "position": 5.2
      },
      {
       "q": "g ais",
       "clicks": 0,
       "impressions": 11,
       "position": 8.2
      }
     ]
    },
    {
     "course": "จป.หัวหน้างาน",
     "cat": "จป & คปอ",
     "clicks": 54,
     "prevClicks": 60,
     "impressions": 2238,
     "position": 5.6,
     "bestQ": {
      "q": "จป หัวหน้างาน",
      "clicks": 13,
      "impressions": 432,
      "position": 3
     },
     "kwCount": 75,
     "topKw": [
      {
       "q": "จป หัวหน้างาน",
       "clicks": 13,
       "impressions": 432,
       "position": 3
      },
      {
       "q": "จป.หัวหน้างาน",
       "clicks": 8,
       "impressions": 499,
       "position": 3.4
      },
      {
       "q": "อบรม จป หัวหน้างาน",
       "clicks": 2,
       "impressions": 58,
       "position": 20.5
      }
     ]
    },
    {
     "course": "สถานีบรรจุ LPG",
     "cat": "กรมธุรกิจพลังงาน",
     "clicks": 49,
     "prevClicks": 60,
     "impressions": 696,
     "position": 4.3,
     "bestQ": {
      "q": "ปิโตรเลียมเหลว",
      "clicks": 0,
      "impressions": 13,
      "position": 5.2
     },
     "kwCount": 19,
     "topKw": [
      {
       "q": "lpg",
       "clicks": 1,
       "impressions": 1,
       "position": 12
      },
      {
       "q": "ปิโตรเลียมเหลว",
       "clicks": 0,
       "impressions": 13,
       "position": 5.2
      },
      {
       "q": "฿3,500",
       "clicks": 0,
       "impressions": 5,
       "position": 5.6
      }
     ]
    },
    {
     "course": "ADR - พื้นฐาน",
     "cat": "ADR & TSM",
     "clicks": 48,
     "prevClicks": 41,
     "impressions": 1412,
     "position": 6.3,
     "bestQ": {
      "q": "สอบ adr ขนส่ง",
      "clicks": 0,
      "impressions": 22,
      "position": 2.6
     },
     "kwCount": 36,
     "topKw": [
      {
       "q": "อบรม adr ใกล้ ฉัน",
       "clicks": 1,
       "impressions": 16,
       "position": 6.5
      },
      {
       "q": "อบรม adr คือ",
       "clicks": 1,
       "impressions": 12,
       "position": 4.9
      },
      {
       "q": "basic adr",
       "clicks": 0,
       "impressions": 33,
       "position": 8.7
      }
     ]
    }
   ],
   "intentKw": [
    {
     "q": "อบรมโลตัส",
     "clicks": 22,
     "impressions": 54,
     "position": 2.7,
     "course": "G CP"
    },
    {
     "q": "อบรมช่างไฟฟ้าภายในอาคาร ระดับ 1",
     "clicks": 21,
     "impressions": 323,
     "position": 2.8,
     "course": "ช่างไฟฟ้า ระดับ 1"
    },
    {
     "q": "อบรมดับเพลิงขั้นต้น ฟรี 2569",
     "clicks": 21,
     "impressions": 305,
     "position": 4.6,
     "course": "ดับเพลิงขั้นต้น"
    },
    {
     "q": "อบรมไฟฟ้าระดับ 1",
     "clicks": 17,
     "impressions": 224,
     "position": 2.9,
     "course": "ช่างไฟฟ้า ระดับ 1"
    },
    {
     "q": "จป หัวหน้างาน",
     "clicks": 13,
     "impressions": 432,
     "position": 3,
     "course": "จป.หัวหน้างาน"
    },
    {
     "q": "อบรมดับเพลิงขั้นต้น",
     "clicks": 11,
     "impressions": 795,
     "position": 6.2,
     "course": "ดับเพลิงขั้นต้น"
    },
    {
     "q": "อบรมช่างไฟฟ้าภายในอาคาร",
     "clicks": 10,
     "impressions": 133,
     "position": 2.8,
     "course": "ช่างไฟฟ้า ระดับ 1"
    },
    {
     "q": "อบรมไฟฟ้าภายในอาคาร ระดับ 1",
     "clicks": 10,
     "impressions": 114,
     "position": 2.1,
     "course": "ช่างไฟฟ้า ระดับ 1"
    },
    {
     "q": "อบรมที่สูง",
     "clicks": 9,
     "impressions": 331,
     "position": 5,
     "course": "ความปลอดภัยในงานที่สูง"
    },
    {
     "q": "อบรม tsm",
     "clicks": 9,
     "impressions": 93,
     "position": 8,
     "course": "TSM 6 ชั่วโมง"
    }
   ],
   "brandClicks": 559,
   "attributedClicks": 1138,
   "ranking": {
    "good": 35,
    "page1": 10,
    "low": 6,
    "none": 3
   },
   "coursesVisible": 54,
   "tiers": [
    {
     "course": "ช่างไฟฟ้า ระดับ 1",
     "cat": "ช่างไฟฟ้า & ช่างแอร์",
     "clicks": 435,
     "impressions": 11250,
     "tier": "good",
     "bestQ": {
      "q": "ใบรับรองช่างไฟฟ้า",
      "position": 1
     }
    },
    {
     "course": "สถานที่ใช้ LPG",
     "cat": "กรมธุรกิจพลังงาน",
     "clicks": 347,
     "impressions": 2431,
     "tier": "good",
     "bestQ": {
      "q": "ผู้ปฏิบัติงานสถานที่ใช้ก๊าซปิโตรเลียมเหลว",
      "position": 1.1
     }
    },
    {
     "course": "สถานที่เก็บรักษาน้ำมัน",
     "cat": "กรมธุรกิจพลังงาน",
     "clicks": 150,
     "impressions": 1314,
     "tier": "good",
     "bestQ": {
      "q": "ที่เก็บน้ำมัน",
      "position": 1
     }
    },
    {
     "course": "สถานีบริการน้ำมัน",
     "cat": "กรมธุรกิจพลังงาน",
     "clicks": 132,
     "impressions": 1520,
     "tier": "good",
     "bestQ": {
      "q": "บัตรประจําตัวผู้ปฏิบัติงานสถานีบริการน้ํามัน",
      "position": 1
     }
    },
    {
     "course": "สถานที่ใช้ NG",
     "cat": "กรมธุรกิจพลังงาน",
     "clicks": 120,
     "impressions": 1806,
     "tier": "good",
     "bestQ": {
      "q": "อบรม ผู้ปฏิบัติงาน สถาน ที่ ใช้ก๊าซธรรมชาติ 2569",
      "position": 1
     }
    },
    {
     "course": "ความปลอดภัยในงานที่สูง",
     "cat": "งานบนที่สูง",
     "clicks": 103,
     "impressions": 2394,
     "tier": "good",
     "bestQ": {
      "q": "ตามกฎกระทรวง ฯ ทำงานที่สูง 2564 การทำงานในพื้นที่ปฏิบัติงานที่สูงจากพื้นดิน หรือจากพื้นอาคาร ตั้งแต่กี่เมตรขึ้นไป ถึงเรียกว่าทำงานที่สูง",
      "position": 1
     }
    },
    {
     "course": "G CP",
     "cat": "ผู้รับเหมา CP",
     "clicks": 97,
     "impressions": 1632,
     "tier": "good",
     "bestQ": {
      "q": "tesco safety passport",
      "position": 1.2
     }
    },
    {
     "course": "ก๊าซแอมโมเนีย",
     "cat": "กรมโรงงานอุตสาหกรรม",
     "clicks": 83,
     "impressions": 553,
     "tier": "good",
     "bestQ": {
      "q": "อบรมหลักสูตรผู้ควบคุมระบบ ทำความ เย็นที่ใช้แอมโมเนียเป็นสาร ทำความ เย็น",
      "position": 2
     }
    },
    {
     "course": "ดับเพลิงขั้นต้น",
     "cat": "การป้องกันและระงับอัคคีภัย",
     "clicks": 64,
     "impressions": 2192,
     "tier": "good",
     "bestQ": {
      "q": "การฝึกอบรมดับเพลิงขั้นต้น",
      "position": 1
     }
    },
    {
     "course": "TSM ทบทวน 3 ชั่วโมง",
     "cat": "ADR & TSM",
     "clicks": 62,
     "impressions": 734,
     "tier": "good",
     "bestQ": {
      "q": "อบรม ต่ออายุ tsm ออนไลน์",
      "position": 4.1
     }
    },
    {
     "course": "G AIS",
     "cat": "ผู้รับเหมา AIS",
     "clicks": 56,
     "impressions": 654,
     "tier": "good",
     "bestQ": {
      "q": "หากเข้าปฏิบัติงานโดยไม่มีบัตร safety passport จะมีค่าปรับเท่าใด",
      "position": 1
     }
    },
    {
     "course": "จป.หัวหน้างาน",
     "cat": "จป & คปอ",
     "clicks": 54,
     "impressions": 2238,
     "tier": "good",
     "bestQ": {
      "q": "จป หัวหน้างาน",
      "position": 3
     }
    },
    {
     "course": "สถานีบรรจุ LPG",
     "cat": "กรมธุรกิจพลังงาน",
     "clicks": 49,
     "impressions": 696,
     "tier": "good",
     "bestQ": {
      "q": "ปิโตรเลียมเหลว",
      "position": 5.2
     }
    },
    {
     "course": "ADR - พื้นฐาน",
     "cat": "ADR & TSM",
     "clicks": 48,
     "impressions": 1412,
     "tier": "good",
     "bestQ": {
      "q": "สอบ adr ขนส่ง",
      "position": 2.6
     }
    },
    {
     "course": "E CP",
     "cat": "ผู้รับเหมา CP",
     "clicks": 46,
     "impressions": 693,
     "tier": "good",
     "bestQ": {
      "q": "อบรมความปลอดภัยในการทํางานกับไฟฟ้า",
      "position": 2.7
     }
    },
    {
     "course": "โรยตัว",
     "cat": "งานบนที่สูง",
     "clicks": 46,
     "impressions": 1121,
     "tier": "good",
     "bestQ": {
      "q": "อบรมโรยตัว",
      "position": 3
     }
    },
    {
     "course": "Solar Cell",
     "cat": "ความปลอดภัยในงานที่สูง โซล่าเซลล์",
     "clicks": 42,
     "impressions": 1186,
     "tier": "good",
     "bestQ": {
      "q": "solar pv electrical safety training",
      "position": 2.8
     }
    },
    {
     "course": "ร้านจำหน่ายและโรงเก็บ LPG",
     "cat": "กรมธุรกิจพลังงาน",
     "clicks": 37,
     "impressions": 383,
     "tier": "good",
     "bestQ": {
      "q": "ผู้ปฏิบัติ",
      "position": 6.9
     }
    },
    {
     "course": "TSM 18 ชั่วโมง",
     "cat": "ADR & TSM",
     "clicks": 36,
     "impressions": 1089,
     "tier": "good",
     "bestQ": {
      "q": "tsm training",
      "position": 2.7
     }
    },
    {
     "course": "ช่างแอร์ ระดับ 1",
     "cat": "ช่างไฟฟ้า & ช่างแอร์",
     "clicks": 35,
     "impressions": 1004,
     "tier": "good",
     "bestQ": {
      "q": "ช่างแอร์ระดับ 1",
      "position": 2.3
     }
    },
    {
     "course": "E AIS",
     "cat": "ผู้รับเหมา AIS",
     "clicks": 35,
     "impressions": 375,
     "tier": "good",
     "bestQ": null
    },
    {
     "course": "ADR - พื้นฐาน+แท๊งค์",
     "cat": "ADR & TSM",
     "clicks": 31,
     "impressions": 626,
     "tier": "good",
     "bestQ": {
      "q": "สอบ adr ขนส่ง",
      "position": 7.4
     }
    },
    {
     "course": "H AIS",
     "cat": "ผู้รับเหมา AIS",
     "clicks": 28,
     "impressions": 685,
     "tier": "good",
     "bestQ": {
      "q": "ระยะเวลาของบัตร ais safety passport มีอายุทั้งสิ้นกี่ปี",
      "position": 3.7
     }
    },
    {
     "course": "ต่ออายุต่อบัตร",
     "cat": "กรมธุรกิจพลังงาน",
     "clicks": 25,
     "impressions": 766,
     "tier": "good",
     "bestQ": {
      "q": "บัตรกรมพลังงาน",
      "position": 7.7
     }
    },
    {
     "course": "TSM 6 ชั่วโมง",
     "cat": "ADR & TSM",
     "clicks": 21,
     "impressions": 576,
     "tier": "good",
     "bestQ": {
      "q": "การอบรม tsm",
      "position": 5.8
     }
    },
    {
     "course": "อับอากาศ 4 ผู้",
     "cat": "อับอากาศ",
     "clicks": 19,
     "impressions": 427,
     "tier": "good",
     "bestQ": {
      "q": "confined space work",
      "position": 10.3
     }
    },
    {
     "course": "จป.เทคนิค",
     "cat": "จป & คปอ",
     "clicks": 19,
     "impressions": 717,
     "tier": "good",
     "bestQ": {
      "q": "safety and technical courses",
      "position": 3.8
     }
    },
    {
     "course": "SP CP",
     "cat": "ผู้รับเหมา CP",
     "clicks": 17,
     "impressions": 345,
     "tier": "good",
     "bestQ": {
      "q": "sp training",
      "position": 8.5
     }
    },
    {
     "course": "ดับเพลิง & อพยพหนีไฟ",
     "cat": "การป้องกันและระงับอัคคีภัย",
     "clicks": 16,
     "impressions": 1276,
     "tier": "good",
     "bestQ": {
      "q": "เมื่อฝึกซ้อมดับเพลิงและอพยพหนีไฟเสร็จสิ้น ต้องจัดทำรายงานผลการฝึกซ้อมภายในกี่วัน",
      "position": 1
     }
    },
    {
     "course": "รถขนส่งน้ำมัน",
     "cat": "กรมธุรกิจพลังงาน",
     "clicks": 15,
     "impressions": 120,
     "tier": "good",
     "bestQ": null
    },
    {
     "course": "G Trainer CP",
     "cat": "Trainer CP",
     "clicks": 14,
     "impressions": 122,
     "tier": "good",
     "bestQ": {
      "q": "g trainer",
      "position": 1.2
     }
    },
    {
     "course": "จป.บริหาร",
     "cat": "จป & คปอ",
     "clicks": 11,
     "impressions": 475,
     "tier": "good",
     "bestQ": {
      "q": "เรียน จป",
      "position": 9
     }
    },
    {
     "course": "R CP",
     "cat": "ผู้รับเหมา CP",
     "clicks": 11,
     "impressions": 121,
     "tier": "good",
     "bestQ": {
      "q": "อบรมที่สูง",
      "position": 4.4
     }
    },
    {
     "course": "ไฟฟ้ากรมสวัสดิ์",
     "cat": "ช่างไฟฟ้า & ช่างแอร์",
     "clicks": 10,
     "impressions": 401,
     "tier": "good",
     "bestQ": {
      "q": "dlpw-approved courses",
      "position": 1.8
     }
    },
    {
     "course": "ความปลอดภัยในการทำงานที่สูงบนหลังคา",
     "cat": "งานบนที่สูง",
     "clicks": 10,
     "impressions": 309,
     "tier": "good",
     "bestQ": null
    },
    {
     "course": "การทำงานบนที่สูง เสาส่งสัญญาณ",
     "cat": "งานบนที่สูง",
     "clicks": 8,
     "impressions": 714,
     "tier": "page1",
     "bestQ": {
      "q": "ทํางานบนที่สูง ภาษาอังกฤษ",
      "position": 3.6
     }
    },
    {
     "course": "อับอากาศ - ผู้ปฏิบัติงาน",
     "cat": "อับอากาศ",
     "clicks": 7,
     "impressions": 521,
     "tier": "page1",
     "bestQ": {
      "q": "閉所作業",
      "position": 3.7
     }
    },
    {
     "course": "T AIS",
     "cat": "ผู้รับเหมา AIS",
     "clicks": 6,
     "impressions": 313,
     "tier": "page1",
     "bestQ": {
      "q": "ais t",
      "position": 6.5
     }
    },
    {
     "course": "H CP",
     "cat": "ผู้รับเหมา CP",
     "clicks": 4,
     "impressions": 203,
     "tier": "page1",
     "bestQ": {
      "q": "h-work",
      "position": 4.9
     }
    },
    {
     "course": "Trainer -G",
     "cat": "Trainer AIS",
     "clicks": 3,
     "impressions": 121,
     "tier": "page1",
     "bestQ": {
      "q": "฿2,700",
      "position": 8.3
     }
    },
    {
     "course": "refresh G AIS",
     "cat": "ผู้รับเหมา AIS",
     "clicks": 2,
     "impressions": 64,
     "tier": "page1",
     "bestQ": {
      "q": "refresh training",
      "position": 8.2
     }
    },
    {
     "course": "R Trainer CP",
     "cat": "Trainer CP",
     "clicks": 1,
     "impressions": 107,
     "tier": "page1",
     "bestQ": {
      "q": "r-training",
      "position": 7.5
     }
    },
    {
     "course": "E Trainer CP",
     "cat": "Trainer CP",
     "clicks": 1,
     "impressions": 93,
     "tier": "page1",
     "bestQ": {
      "q": "cp pass",
      "position": 9
     }
    },
    {
     "course": "T CP",
     "cat": "ผู้รับเหมา CP",
     "clicks": 1,
     "impressions": 141,
     "tier": "page1",
     "bestQ": {
      "q": "t-training",
      "position": 6.7
     }
    },
    {
     "course": "อับอากาศ - ผู้อนุญาต",
     "cat": "อับอากาศ",
     "clicks": 1,
     "impressions": 262,
     "tier": "page1",
     "bestQ": {
      "q": "confined space training",
      "position": 4.4
     }
    },
    {
     "course": "EC CP",
     "cat": "ผู้รับเหมา CP",
     "clicks": 8,
     "impressions": 96,
     "tier": "low",
     "bestQ": null
    },
    {
     "course": "คปอ.",
     "cat": "จป & คปอ",
     "clicks": 2,
     "impressions": 100,
     "tier": "low",
     "bestQ": {
      "q": "อบรม คปอ",
      "position": 42.8
     }
    },
    {
     "course": "refresh E AIS",
     "cat": "ผู้รับเหมา AIS",
     "clicks": 2,
     "impressions": 109,
     "tier": "low",
     "bestQ": null
    },
    {
     "course": "B CP",
     "cat": "ผู้รับเหมา CP",
     "clicks": 1,
     "impressions": 172,
     "tier": "low",
     "bestQ": {
      "q": "ลิฟต์บ้าน 3 ชั้น",
      "position": 60
     }
    },
    {
     "course": "EC Trainer CP",
     "cat": "Trainer CP",
     "clicks": 1,
     "impressions": 54,
     "tier": "low",
     "bestQ": null
    },
    {
     "course": "A CP",
     "cat": "ผู้รับเหมา CP",
     "clicks": 1,
     "impressions": 148,
     "tier": "low",
     "bestQ": null
    },
    {
     "course": "forklift",
     "cat": "การฝึกอบรมลูกจ้างซึ่งจะทำหน้าที่เป็นผู้ขับรถยก",
     "clicks": 1,
     "impressions": 30,
     "tier": "none",
     "bestQ": null
    },
    {
     "course": "Trainer -E",
     "cat": "Trainer AIS",
     "clicks": 0,
     "impressions": 42,
     "tier": "none",
     "bestQ": null
    },
    {
     "course": "ผู้ปฏิบัติงาน ถังขนส่งก๊าซธรรมชาติเฉพาะพนักงานรับหรือจ่ายก๊าซธรรมชาติ",
     "cat": "กรมธุรกิจพลังงาน",
     "clicks": 0,
     "impressions": 33,
     "tier": "none",
     "bestQ": null
    }
   ],
   "locations": [
    [
     "chiangmai",
     67,
     575
    ],
    [
     "hatyai",
     51,
     461
    ],
    [
     "nonthaburi",
     24,
     576
    ],
    [
     "khonkaen",
     21,
     187
    ],
    [
     "online",
     19,
     157
    ],
    [
     "korat",
     12,
     221
    ],
    [
     "phitsanulok",
     5,
     73
    ],
    [
     "rayong",
     4,
     147
    ]
   ],
   "locationsPrev": [
    [
     "hatyai",
     47,
     450
    ],
    [
     "phitsanulok",
     25,
     217
    ],
    [
     "chiangmai",
     22,
     223
    ],
    [
     "nonthaburi",
     12,
     211
    ],
    [
     "korat",
     11,
     130
    ],
    [
     "suratthani",
     11,
     103
    ],
    [
     "rayong",
     6,
     229
    ],
    [
     "online",
     3,
     57
    ],
    [
     "chachoengsao",
     0,
     4
    ]
   ]
  },

  seoText: {
    headline: 'คลิกจาก Google <em>+16%/วัน</em> · การมองเห็น +29% · อันดับเฉลี่ยดีขึ้น 7.6 → 6.3',
    headline2: 'หน้าหลักสูตรได้คลิก <em>+24%</em> — ช่างไฟฟ้า L1 และกลุ่มพลังงานยังเป็นหัวหอก',
    headline3: 'คำค้นทั่วไปเริ่มขึ้นหน้าแรก — "อบรมดับเพลิงขั้นต้น" จากอันดับ 36 เป็น <em>6</em>',
    insights: [
      '<b>ก.ย. = เดือนที่ได้คลิกจาก Google มากที่สุด</b> 3,637 คลิก (ส.ค. 3,094 · ก.ค. 2,441)',
      '<b>45 จาก 54 หลักสูตรอยู่หน้าแรก</b> เมื่อค้นด้วยคำของหลักสูตรนั้น (รอบก่อน 44 จาก 52)',
      '<b>หน้าจังหวัดโตต่อ</b> เชียงใหม่ 67 คลิก (จาก 22) · หาดใหญ่ 51 · ขอนแก่น 21 (ใหม่)',
    ],
    brandNote: '<b>Google ไม่เปิดเผยคำค้นของ ~75% ของคลิก</b> — ตารางคำค้นจึงครอบคลุมราว 1 ใน 4 ของคลิก ส่วนการนับคลิกต่อหลักสูตรใช้หน้าที่ถูกคลิกจริง จึงครบทุกคลิก · คำค้นชื่อบริษัทคิดเป็น 49% ของคลิกที่เห็นคำค้น',
    movers: [
      { q: 'อบรมดับเพลิงขั้นต้น', from: 36.3, to: 6.2, impr: 796, clicks: 11 },
      { q: 'อบรมที่สูง', from: 23.2, to: 5.0, impr: 337, clicks: 9 },
      { q: 'อบรมช่างแอร์', from: 25.9, to: 7.2, impr: 49, clicks: 2 },
      { q: 'อบรม tsm', from: 16.0, to: 8.0, impr: 98, clicks: 10 },
      { q: 'อบรมช่างไฟฟ้า', from: 14.3, to: 5.4, impr: 51, clicks: 2 },
      { q: 'จป หัวหน้างาน', from: 6.4, to: 3.0, impr: 432, clicks: 13 },
      { q: 'อบรม adr ออนไลน์', from: 4.8, to: 1.1, impr: 77, clicks: 15 },
    ],
    gaps: [
      { q: 'อบรมดับเพลิงและอพยพหนีไฟ', pos: 47.9, impr: 27, course: 'ดับเพลิง & อพยพหนีไฟ' },
      { q: 'อบรม คปอ', pos: 42.8, impr: 10, course: 'คปอ.' },
      { q: 'อบรมดับเพลิง', pos: 41.3, impr: 31, course: 'ดับเพลิง & อพยพหนีไฟ' },
      { q: 'อบรม จป บริหาร', pos: 25.7, impr: 21, course: 'จป.บริหาร' },
      { q: 'สถานีแก๊ส lpg', pos: 23.6, impr: 30, course: 'สถานที่ใช้ LPG' },
      { q: 'ความปลอดภัยออนไลน์ฟรี', pos: 23.5, impr: 33, course: 'หน้ารวมหลักสูตร' },
      { q: 'อบรม จป หัวหน้างาน', pos: 20.5, impr: 58, course: 'จป.หัวหน้างาน', note: 'รอบก่อน 9.3' },
    ],
    notRankingNotes: [
      '<b>คำทั่วไปเริ่มติดแล้ว</b> — 7 คำ เช่น "อบรมดับเพลิงขั้นต้น" "อบรมที่สูง" ขยับขึ้นหน้าแรก หลังเติมเนื้อหาหน้าหลักสูตรรอบ ส.ค. (เดิมติดได้เฉพาะเมื่อค้นชื่อหลักสูตรเต็ม)',
      '<b>กลุ่มที่ยังไม่ติด: ดับเพลิง/หนีไฟ · คปอ. · จป.บริหาร</b> — อยู่หน้า 3–5 · ควรเติมเนื้อหาหน้า "ดับเพลิง & อพยพหนีไฟ" และ "คปอ." ก่อน (มีคนค้นทุกวัน)',
      '<b>9 หลักสูตรยังไม่ขึ้นหน้าแรก</b> — ส่วนใหญ่เป็น Trainer/refresh/บูมลิฟต์ ที่ขายผ่านลูกค้าองค์กร · forklift และ "ถังขนส่งก๊าซธรรมชาติ" ยังไม่มี URL ชื่อหลักสูตร',
    ],
    tierRule: 'วัดจาก "คำค้นที่ดีที่สุด" ของแต่ละหน้าหลักสูตร (ไม่นับคำค้นชื่อบริษัท · แสดงผล ≥ 3 ครั้ง) ไม่ใช่อันดับเฉลี่ย · ติดดี = ได้คลิก ≥ 10 หรือมีคำค้นอันดับ ≤ 3 · หน้าแรก = มีคำค้นอันดับ ≤ 10 · ยังไม่ติดหน้าแรก = แสดงผล ≥ 50 ครั้งแต่ไม่มีคำไหนอยู่หน้าแรก · ยังไม่ปรากฏ = แสดงผล < 50 ครั้งใน 40 วัน',
  },
};
