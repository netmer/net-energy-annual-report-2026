// ============================================================
// REPORT DATA — รอบ ส.ค. 2026 (11 ส.ค. – 3 ก.ย. 2026)
// ทุกตัวเลขมีที่มา: git history · Firestore (NET-workspace) · Google Search Console API
// ============================================================
window.REPORT = {
  period: { label: '11 ส.ค. – 3 ก.ย. 2026', short: 'ส.ค. 2026', start: '2026-08-11', end: '2026-09-03', days: 24 },

  // ---- งานพัฒนา (git, 9 repos)
  dev: {
    total: 175, repos: 9, prevTotal: 108, prevWeeks: 5,
    byRepo: [
      { label: 'เว็บไซต์หลัก + ERP', sub: 'NET-workspace', n: 63, kind: 'core' },
      { label: 'NET-ID Photo Studio', sub: 'id-photo-studio · ใหม่', n: 54, kind: 'new' },
      { label: 'ELMER ใบเสนอราคา + PO', sub: 'elmer-quotation-flow · ใหม่', n: 34, kind: 'new' },
      { label: 'NETMER-Flow (HR)', sub: 'netmer-flow', n: 7, kind: 'core' },
      { label: 'CP Safety Passport', sub: 'cp-passport', n: 6, kind: 'core' },
      { label: 'นามบัตรดิจิทัล NFC', sub: 'aom-card · ใหม่', n: 4, kind: 'new' },
      { label: 'KYT MOTTO', sub: 'kyt-motto · ใหม่', n: 4, kind: 'new' },
      { label: 'LINE CSAT', sub: 'line-csat', n: 2, kind: 'core' },
      { label: 'NET Document Flow', sub: 'quotacraft', n: 1, kind: 'core' },
    ],
    weeks: [
      { label: '11–17 ส.ค.', n: 17 }, { label: '18–24', n: 66 }, { label: '25–31', n: 75 }, { label: '1–3 ก.ย.', n: 17 },
    ],
  },

  // ---- ธุรกิจ (Firestore: registrations · trainingRecords · trainingSchedules)
  biz: {
    regs: [{ m: 'เม.ย.', v: 486 }, { m: 'พ.ค.', v: 917 }, { m: 'มิ.ย.', v: 893 }, { m: 'ก.ค.', v: 906 }, { m: 'ส.ค.', v: 798 }],
    trained: [{ m: 'พ.ค.', v: 1208 }, { m: 'มิ.ย.', v: 1051 }, { m: 'ก.ค.', v: 1198 }, { m: 'ส.ค.', v: 1155 }],
    augRounds: { total: 94, open: 66, full: 24, cancelled: 4, courses: 30, withCompletions: 45, sep: 86, oct: 20 },
    augMode: [
      { label: 'Public ที่ศูนย์ฯ', value: 47 }, { label: 'Public ออนไลน์', value: 28 },
      { label: 'In-house ที่ลูกค้า', value: 15 }, { label: 'In-house ออนไลน์', value: 4 },
    ],
    augReg: { confirmed: 645, cancelled: 101, pending: 52 },
    augTopTrained: [
      ['G CP · ปลูกจิตสำนึกความปลอดภัย', 362], ['G AIS · ผู้รับเหมา', 221], ['E/EE CP · ไฟฟ้า', 188], ['E AIS · ไฟฟ้า', 87],
      ['T CP · เสาทาวเวอร์', 66], ['T AIS · เสาส่งสัญญาณ', 45], ['SP CP · ที่สูง', 43], ['โซล่าเซลล์ · ที่สูง', 25], ['H AIS · ที่สูง', 24], ['ดับเพลิงขั้นต้น', 24],
    ],
  },

  // ---- ยอดเข้าเว็บ (analyticsMonthly/analyticsDaily rollup = ตัวเลขเดียวกับ /admin/analytics)
  traffic: {
    monthly: [{ m: 'เม.ย.', v: 13290 }, { m: 'พ.ค.', v: 42831 }, { m: 'มิ.ย.', v: 42608 }, { m: 'ก.ค.', v: 43011 }, { m: 'ส.ค.', v: 45357 }],
    dailyLabels: ['11 ส.ค.', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '1 ก.ย.', '2 ก.ย.'],
    dailyThis: [2001, 733, 1589, 1795, 769, 415, 1653, 1601, 1664, 1828, 1392, 927, 484, 1536, 1603, 1372, 2027, 1839, 927, 581, 1708, 1465, 1672],
    dailyPrev: [315, 1338, 1994, 1698, 1836, 1651, 748, 387, 1177, 411, 587, 1635, 1107, 881, 421, 1761, 2064, 1857, 1636, 1904, 1750, 2003, 2636],
    thisTotal: 31581, prevTotal: 31797, augTotal: 45357, julTotal: 43011,
    channelsAug: [
      { label: 'Direct (พิมพ์ URL / บุ๊กมาร์ก / แอป)', value: 27406 }, { label: 'ค้นหา Google / Bing', value: 11040 },
      { label: 'ลิงก์ภายในเว็บ', value: 6030 }, { label: 'โซเชียล + LINE', value: 533 },
      { label: 'Teams · เว็บอื่น · อีเมล', value: 259 }, { label: 'AI (ChatGPT · Gemini)', value: 89 },
    ],
    channelsJul: { direct: 26592, search: 10544, internal: 4867, social: 371, referral: 252, line: 197, ai: 100, messaging: 88 },
    refsAug: [['Google', 10504], ['Bing', 461], ['Facebook', 304], ['LINE', 229], ['Microsoft Teams', 137], ['ChatGPT', 55], ['Gemini', 32]],
    locale: { th: 42417, en: 1233, ja: 877, zh: 830 }, localeJul: { th: 41109, en: 783, ja: 589, zh: 530 },
    topCourses: [['G CP', 1244], ['ช่างไฟฟ้า ระดับ 1', 971], ['สถานที่ใช้ LPG', 907], ['G AIS', 742], ['H AIS', 679], ['E CP', 589], ['สถานีบริการน้ำมัน', 587], ['สถานที่ใช้ NG', 473], ['สถานที่เก็บน้ำมัน', 465], ['T AIS', 447]],
    routesAug: { coursePages: 13757, category: 9712, home: 5434, courses: 5373, register: 4795, locations: 1495, history: 788, blog: 659 },
    signedInAug: 7485,
  },

  // ---- SEO (Google Search Console API) — เติมเมื่อได้สิทธิ์ API
  seo: {
    "window": {
      "label": "11 ส.ค. – 2 ก.ย. 2026",
      "days": 23
    },
    "prevWindow": {
      "label": "19 ก.ค. – 10 ส.ค. 2026",
      "days": 23
    },
    "totals": {
      "clicks": 2459,
      "impressions": 40835,
      "ctr": 0.060217950287743356,
      "position": 7.5786702583568015
    },
    "prev": {
      "clicks": 1794,
      "impressions": 23266,
      "ctr": 0.07710822659675062,
      "position": 7.825238545517063
    },
    "dailyLabels": [
      "11 ส.ค.",
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
      "31",
      "1 ก.ย.",
      "2"
    ],
    "dailyClicks": [
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
      129,
      62
    ],
    "dailyClicksPrev": [
      77,
      110,
      116,
      102,
      112,
      64,
      39,
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
      91
    ],
    "queriesTotal": 1347,
    "pagesTotal": 336,
    "groups": [
      {
        "label": "หน้าหลักสูตรรายตัว",
        "value": 1296
      },
      {
        "label": "หน้าแรก",
        "value": 533
      },
      {
        "label": "หน้าหมวด + หน้าจังหวัด",
        "value": 460
      },
      {
        "label": "หน้า CP Passport · ติดต่อ · อื่น ๆ",
        "value": 255
      }
    ],
    "devices": [
      {
        "label": "Desktop",
        "value": 1559,
        "ctr": 0.076328029375765,
        "position": 8.972533659730722
      },
      {
        "label": "Mobile",
        "value": 875,
        "ctr": 0.04421648390519986,
        "position": 6.1669109101015716
      },
      {
        "label": "Tablet",
        "value": 25,
        "ctr": 0.040257648953301126,
        "position": 6.721417069243156
      }
    ],
    "byCourse": [
      {
        "course": "ช่างไฟฟ้า ระดับ 1",
        "cat": "ช่างไฟฟ้า & ช่างแอร์",
        "clicks": 226,
        "prevClicks": 168,
        "impressions": 5409,
        "position": 6.6173044925124795,
        "bestQ": {
          "q": "ช่างไฟฟ้ามีกี่ระดับ",
          "clicks": 0,
          "impressions": 5,
          "position": 1
        },
        "kwCount": 170,
        "topKw": [
          {
            "q": "อบรมช่างไฟฟ้าภายในอาคาร ระดับ 1",
            "clicks": 20,
            "impressions": 206,
            "position": 4.359223300970873
          },
          {
            "q": "อบรมไฟฟ้าภายในอาคาร ระดับ 1",
            "clicks": 12,
            "impressions": 92,
            "position": 3.3043478260869565
          },
          {
            "q": "ช่างไฟฟ้าภายในอาคาร ระดับ 1",
            "clicks": 4,
            "impressions": 90,
            "position": 6.977777777777778
          },
          {
            "q": "อบรมไฟฟ้าระดับ 1",
            "clicks": 3,
            "impressions": 100,
            "position": 4.37
          },
          {
            "q": "สอบ มาตรฐานฝีมือแรงงาน ช่างไฟฟ้าระดับ 1",
            "clicks": 3,
            "impressions": 3,
            "position": 14.666666666666666
          }
        ]
      },
      {
        "course": "สถานที่ใช้ LPG",
        "cat": "กรมธุรกิจพลังงาน",
        "clicks": 166,
        "prevClicks": 107,
        "impressions": 1301,
        "position": 6.037663335895465,
        "bestQ": {
          "q": "ผู้ปฏิบัติงานสถานที่ใช้ก๊าซปิโตรเลียมเหลว",
          "clicks": 11,
          "impressions": 24,
          "position": 1.3333333333333333
        },
        "kwCount": 29,
        "topKw": [
          {
            "q": "ผู้ปฏิบัติงานสถานที่ใช้ก๊าซปิโตรเลียมเหลว",
            "clicks": 11,
            "impressions": 24,
            "position": 1.3333333333333333
          },
          {
            "q": "อบรม ผู้ควบคุมก๊าซ lpg 2569",
            "clicks": 5,
            "impressions": 31,
            "position": 3.806451612903226
          },
          {
            "q": "สถานีแก๊ส lpg",
            "clicks": 0,
            "impressions": 22,
            "position": 26.818181818181817
          },
          {
            "q": "สถานีแก๊สโรงงาน",
            "clicks": 0,
            "impressions": 15,
            "position": 28.4
          },
          {
            "q": "สถานีแก๊ส",
            "clicks": 0,
            "impressions": 13,
            "position": 24.692307692307693
          }
        ]
      },
      {
        "course": "สถานีบริการน้ำมัน",
        "cat": "กรมธุรกิจพลังงาน",
        "clicks": 101,
        "prevClicks": 76,
        "impressions": 1079,
        "position": 4.893419833178869,
        "bestQ": {
          "q": "บัตรประจําตัวผู้ปฏิบัติงานสถานีบริการน้ํามัน",
          "clicks": 0,
          "impressions": 10,
          "position": 3.5
        },
        "kwCount": 22,
        "topKw": [
          {
            "q": "ผู้ปฏิบัติงาน",
            "clicks": 1,
            "impressions": 135,
            "position": 4.866666666666667
          },
          {
            "q": "สถานีบริการน้ํามัน",
            "clicks": 0,
            "impressions": 57,
            "position": 7.982456140350878
          },
          {
            "q": "สถานีบริการน้ำมัน",
            "clicks": 0,
            "impressions": 32,
            "position": 5.1875
          },
          {
            "q": "ผู้ปฎิบัติงาน",
            "clicks": 0,
            "impressions": 18,
            "position": 3.888888888888889
          },
          {
            "q": "บัตรประจําตัวผู้ปฏิบัติงานสถานีบริการน้ํามัน",
            "clicks": 0,
            "impressions": 10,
            "position": 3.5
          }
        ]
      },
      {
        "course": "สถานที่ใช้ NG",
        "cat": "กรมธุรกิจพลังงาน",
        "clicks": 90,
        "prevClicks": 46,
        "impressions": 1003,
        "position": 4.331006979062812,
        "bestQ": {
          "q": "อบรม ผู้ปฏิบัติงาน สถาน ที่ ใช้ก๊าซธรรมชาติ 2569",
          "clicks": 1,
          "impressions": 4,
          "position": 1
        },
        "kwCount": 20,
        "topKw": [
          {
            "q": "อบรมผู้ปฏิบัติงานสถานที่ใช้ก๊าซธรรมชาติ",
            "clicks": 8,
            "impressions": 15,
            "position": 1.6
          },
          {
            "q": "ผู้ปฏิบัติงานสถานที่ใช้ก๊าซธรรมชาติ",
            "clicks": 5,
            "impressions": 19,
            "position": 1.1578947368421053
          },
          {
            "q": "อบรม ผู้ปฏิบัติงาน สถาน ที่ ใช้ก๊าซธรรมชาติ 2569",
            "clicks": 1,
            "impressions": 4,
            "position": 1
          },
          {
            "q": "ผู้ปฏิบัติงาน",
            "clicks": 0,
            "impressions": 228,
            "position": 4.592105263157895
          },
          {
            "q": "ผู้ปฎิบัติงาน",
            "clicks": 0,
            "impressions": 26,
            "position": 2.3461538461538463
          }
        ]
      },
      {
        "course": "สถานที่เก็บรักษาน้ำมัน",
        "cat": "กรมธุรกิจพลังงาน",
        "clicks": 77,
        "prevClicks": 58,
        "impressions": 699,
        "position": 4.257510729613734,
        "bestQ": {
          "q": "สถานที่เก็บรักษาน้ํามันเชื้อเพลิง ลักษณะที่ 3",
          "clicks": 0,
          "impressions": 5,
          "position": 1
        },
        "kwCount": 21,
        "topKw": [
          {
            "q": "ผู้ปฏิบัติงานสถานที่เก็บรักษาน้ํามัน",
            "clicks": 1,
            "impressions": 12,
            "position": 1.0833333333333333
          },
          {
            "q": "อบรม ผู้ปฏิบัติงาน สถาน ที่ เก็บ รักษา น้ำมัน 2569",
            "clicks": 1,
            "impressions": 1,
            "position": 2
          },
          {
            "q": "สถานที่ปฏิบัติงาน",
            "clicks": 0,
            "impressions": 19,
            "position": 3.210526315789474
          },
          {
            "q": "สถานที่เก็บน้ำมัน",
            "clicks": 0,
            "impressions": 19,
            "position": 12.842105263157896
          },
          {
            "q": "ตรวจสถานที่เก็บรักษาน้ำมัน",
            "clicks": 0,
            "impressions": 13,
            "position": 18
          }
        ]
      },
      {
        "course": "ก๊าซแอมโมเนีย",
        "cat": "กรมโรงงานอุตสาหกรรม",
        "clicks": 53,
        "prevClicks": 42,
        "impressions": 325,
        "position": 4.458461538461538,
        "bestQ": {
          "q": "อบรม ผู้ควบคุมระบบ ทำความ เย็น 2569",
          "clicks": 2,
          "impressions": 7,
          "position": 8
        },
        "kwCount": 9,
        "topKw": [
          {
            "q": "อบรม ผู้ควบคุมระบบ ทำความ เย็น 2569",
            "clicks": 2,
            "impressions": 7,
            "position": 8
          },
          {
            "q": "สมุทรปราการ",
            "clicks": 1,
            "impressions": 1,
            "position": 2
          },
          {
            "q": "คนงานควบคุมก๊าซ",
            "clicks": 0,
            "impressions": 2,
            "position": 14
          },
          {
            "q": "หลักสูตรการอบรม",
            "clicks": 0,
            "impressions": 2,
            "position": 3
          },
          {
            "q": "อบรมหลักสูตรผู้ควบคุมระบบ ทำความ เย็นที่ใช้แอมโมเนียเป็นสาร ทำความ เย็น",
            "clicks": 0,
            "impressions": 2,
            "position": 5.5
          }
        ]
      },
      {
        "course": "G CP",
        "cat": "ผู้รับเหมา CP",
        "clicks": 49,
        "prevClicks": 17,
        "impressions": 901,
        "position": 5.900110987791343,
        "bestQ": {
          "q": "lotus g",
          "clicks": 0,
          "impressions": 3,
          "position": 3.3333333333333335
        },
        "kwCount": 32,
        "topKw": [
          {
            "q": "อบรมโลตัส",
            "clicks": 9,
            "impressions": 89,
            "position": 4.764044943820225
          },
          {
            "q": "อบรมผู้รับเหมา",
            "clicks": 1,
            "impressions": 2,
            "position": 1
          },
          {
            "q": "g cp",
            "clicks": 1,
            "impressions": 1,
            "position": 1
          },
          {
            "q": "cp safety passport",
            "clicks": 0,
            "impressions": 31,
            "position": 9.516129032258064
          },
          {
            "q": "net อบรม",
            "clicks": 0,
            "impressions": 28,
            "position": 1
          }
        ]
      },
      {
        "course": "ความปลอดภัยในงานที่สูง",
        "cat": "งานบนที่สูง",
        "clicks": 44,
        "prevClicks": 15,
        "impressions": 836,
        "position": 5.839712918660287,
        "bestQ": {
          "q": "ตามกฎกระทรวง ฯ ทำงานที่สูง 2564 การทำงานในพื้นที่ปฏิบัติงานที่สูงจากพื้นดิน หรือจากพื้นอาคาร ตั้งแต่กี่เมตรขึ้นไป ถึงเรียกว่าทำงานที่สูง",
          "clicks": 0,
          "impressions": 24,
          "position": 1.0416666666666667
        },
        "kwCount": 31,
        "topKw": [
          {
            "q": "อบรมที่สูง",
            "clicks": 2,
            "impressions": 24,
            "position": 17.083333333333332
          },
          {
            "q": "อบรมการทํางานที่สูง",
            "clicks": 1,
            "impressions": 1,
            "position": 1
          },
          {
            "q": "ในนนทบุรี",
            "clicks": 1,
            "impressions": 1,
            "position": 2
          },
          {
            "q": "การตกจากที่สูงและที่ลาดชัน ที่มีความสูงตั้งแต่กี่เมตรขึ้นไป ต้องจัดทำราวกั้นหรือรั้วกันตก ตาข่ายนิรภัย หรืออุปกรณ์ป้องกันอื่นใดที่เหมาะสมกับสภาพของการทำงาน",
            "clicks": 0,
            "impressions": 31,
            "position": 8.580645161290324
          },
          {
            "q": "net อบรม",
            "clicks": 0,
            "impressions": 30,
            "position": 1
          }
        ]
      },
      {
        "course": "จป.หัวหน้างาน",
        "cat": "จป & คปอ",
        "clicks": 38,
        "prevClicks": 19,
        "impressions": 1407,
        "position": 6.668798862828713,
        "bestQ": {
          "q": "จป.ระดับหัวหน้างาน",
          "clicks": 0,
          "impressions": 6,
          "position": 3
        },
        "kwCount": 36,
        "topKw": [
          {
            "q": "อบรม จป หัวหน้างาน",
            "clicks": 8,
            "impressions": 94,
            "position": 9.52127659574468
          },
          {
            "q": "จป หัวหน้างาน",
            "clicks": 5,
            "impressions": 210,
            "position": 6.5476190476190474
          },
          {
            "q": "จป.หัวหน้างาน",
            "clicks": 3,
            "impressions": 210,
            "position": 6.4904761904761905
          },
          {
            "q": "อบรม จป.หัวหน้างาน",
            "clicks": 1,
            "impressions": 30,
            "position": 5.566666666666666
          },
          {
            "q": "จปหัวหน้างาน",
            "clicks": 0,
            "impressions": 36,
            "position": 6.555555555555555
          }
        ]
      },
      {
        "course": "สถานีบรรจุ LPG",
        "cat": "กรมธุรกิจพลังงาน",
        "clicks": 38,
        "prevClicks": 31,
        "impressions": 410,
        "position": 6.229268292682927,
        "bestQ": {
          "q": "ปิโตรเลียมเหลว",
          "clicks": 0,
          "impressions": 9,
          "position": 5
        },
        "kwCount": 18,
        "topKw": [
          {
            "q": "ปิโตรเลียมเหลว",
            "clicks": 0,
            "impressions": 9,
            "position": 5
          },
          {
            "q": "lpg",
            "clicks": 0,
            "impressions": 2,
            "position": 3
          },
          {
            "q": "lpg gas station",
            "clicks": 0,
            "impressions": 2,
            "position": 6.5
          },
          {
            "q": "สถานีแก๊ส lpg",
            "clicks": 0,
            "impressions": 2,
            "position": 9.5
          },
          {
            "q": "30",
            "clicks": 0,
            "impressions": 1,
            "position": 2
          }
        ]
      },
      {
        "course": "Solar Cell",
        "cat": "ความปลอดภัยในงานที่สูง โซล่าเซลล์",
        "clicks": 37,
        "prevClicks": 1,
        "impressions": 738,
        "position": 8.077235772357724,
        "bestQ": {
          "q": "อบรมโซล่าเซลล์ 2569",
          "clicks": 1,
          "impressions": 16,
          "position": 3.625
        },
        "kwCount": 27,
        "topKw": [
          {
            "q": "อบรมโซล่าเซลล์ 2569",
            "clicks": 1,
            "impressions": 16,
            "position": 3.625
          },
          {
            "q": "อบรมโซล่าเซลล์",
            "clicks": 1,
            "impressions": 11,
            "position": 7.909090909090909
          },
          {
            "q": "อบรมติดตั้งโซล่าเซลล์ 2569",
            "clicks": 1,
            "impressions": 4,
            "position": 8
          },
          {
            "q": "อบรมการติดตั้งโซล่าเซลล์",
            "clicks": 1,
            "impressions": 1,
            "position": 5
          },
          {
            "q": "อบรม solar cell",
            "clicks": 0,
            "impressions": 8,
            "position": 10.125
          }
        ]
      },
      {
        "course": "ADR - พื้นฐาน",
        "cat": "ADR & TSM",
        "clicks": 36,
        "prevClicks": 4,
        "impressions": 860,
        "position": 6.283720930232558,
        "bestQ": {
          "q": "อบรม adr ราคา",
          "clicks": 0,
          "impressions": 4,
          "position": 1
        },
        "kwCount": 31,
        "topKw": [
          {
            "q": "อบรม adr",
            "clicks": 5,
            "impressions": 54,
            "position": 3.7962962962962963
          },
          {
            "q": "อบรมadr",
            "clicks": 2,
            "impressions": 25,
            "position": 3.8
          },
          {
            "q": "สอบ adr ขนส่ง",
            "clicks": 1,
            "impressions": 8,
            "position": 2.25
          },
          {
            "q": "อบรม adr ออนไลน์",
            "clicks": 1,
            "impressions": 3,
            "position": 3
          },
          {
            "q": "อบรม adr ฟรี",
            "clicks": 0,
            "impressions": 16,
            "position": 9.125
          }
        ]
      },
      {
        "course": "G AIS",
        "cat": "ผู้รับเหมา AIS",
        "clicks": 35,
        "prevClicks": 21,
        "impressions": 514,
        "position": 4.377431906614786,
        "bestQ": {
          "q": "ais safety",
          "clicks": 0,
          "impressions": 7,
          "position": 2
        },
        "kwCount": 18,
        "topKw": [
          {
            "q": "ais safety passport",
            "clicks": 2,
            "impressions": 21,
            "position": 2.1904761904761907
          },
          {
            "q": "อบรมผู้รับเหมาก่อนเริ่มงาน",
            "clicks": 1,
            "impressions": 17,
            "position": 9.941176470588236
          },
          {
            "q": "ais passport",
            "clicks": 0,
            "impressions": 59,
            "position": 4.8474576271186445
          },
          {
            "q": "สมัคร ais passport",
            "clicks": 0,
            "impressions": 11,
            "position": 8.818181818181818
          },
          {
            "q": "ais safety",
            "clicks": 0,
            "impressions": 7,
            "position": 2
          }
        ]
      },
      {
        "course": "ช่างแอร์ ระดับ 1",
        "cat": "ช่างไฟฟ้า & ช่างแอร์",
        "clicks": 26,
        "prevClicks": 17,
        "impressions": 731,
        "position": 8.266757865937073,
        "bestQ": {
          "q": "ช่างเครื่องปรับอากาศ",
          "clicks": 1,
          "impressions": 18,
          "position": 3.111111111111111
        },
        "kwCount": 18,
        "topKw": [
          {
            "q": "ช่างเครื่องปรับอากาศ",
            "clicks": 1,
            "impressions": 18,
            "position": 3.111111111111111
          },
          {
            "q": "ช่างเครื่องปรับอากาศระดับ 1",
            "clicks": 1,
            "impressions": 10,
            "position": 4.7
          },
          {
            "q": "อบรมช่างแอร์ ฟรี",
            "clicks": 1,
            "impressions": 2,
            "position": 17.5
          },
          {
            "q": "空调技师",
            "clicks": 0,
            "impressions": 107,
            "position": 10.63551401869159
          },
          {
            "q": "สอบช่างแอร์ระดับ1",
            "clicks": 0,
            "impressions": 17,
            "position": 8.647058823529413
          }
        ]
      },
      {
        "course": "TSM ทบทวน 3 ชั่วโมง",
        "cat": "ADR & TSM",
        "clicks": 26,
        "prevClicks": 8,
        "impressions": 543,
        "position": 6.43646408839779,
        "bestQ": {
          "q": "tsm training",
          "clicks": 0,
          "impressions": 3,
          "position": 3.6666666666666665
        },
        "kwCount": 16,
        "topKw": [
          {
            "q": "ต่ออายุtsm",
            "clicks": 2,
            "impressions": 2,
            "position": 6.5
          },
          {
            "q": "อบรมต่ออายุ tsm",
            "clicks": 1,
            "impressions": 4,
            "position": 7.5
          },
          {
            "q": "อบรมประกอบการรถบรรทุก",
            "clicks": 0,
            "impressions": 8,
            "position": 5.5
          },
          {
            "q": "อบรม ต่ออายุ tsm ออนไลน์",
            "clicks": 0,
            "impressions": 4,
            "position": 7.25
          },
          {
            "q": "tsm 3.0",
            "clicks": 0,
            "impressions": 3,
            "position": 7.666666666666667
          }
        ]
      },
      {
        "course": "H AIS",
        "cat": "ผู้รับเหมา AIS",
        "clicks": 24,
        "prevClicks": 19,
        "impressions": 356,
        "position": 4.547752808988764,
        "bestQ": {
          "q": "หากเข้าปฏิบัติงานโดยไม่มีบัตร safety passport จะมีค่าปรับเท่าใด",
          "clicks": 0,
          "impressions": 5,
          "position": 1
        },
        "kwCount": 19,
        "topKw": [
          {
            "q": "h work",
            "clicks": 0,
            "impressions": 8,
            "position": 3.375
          },
          {
            "q": "ศูนย์ฝึกอบรมเนเชอรัลฯ จ.นนทบุรี",
            "clicks": 0,
            "impressions": 8,
            "position": 1.125
          },
          {
            "q": "หากเข้าปฏิบัติงานโดยไม่มีบัตร safety passport จะมีค่าปรับเท่าใด",
            "clicks": 0,
            "impressions": 5,
            "position": 1
          },
          {
            "q": "ลงทะเบียน ais passport",
            "clicks": 0,
            "impressions": 4,
            "position": 9.75
          },
          {
            "q": "งานที่สูง ภาษาอังกฤษ",
            "clicks": 0,
            "impressions": 3,
            "position": 6
          }
        ]
      },
      {
        "course": "ดับเพลิงขั้นต้น",
        "cat": "การป้องกันและระงับอัคคีภัย",
        "clicks": 20,
        "prevClicks": 14,
        "impressions": 540,
        "position": 8.842592592592592,
        "bestQ": {
          "q": "อบรมดับเพลิงขั้นต้น ฟรี 2569",
          "clicks": 8,
          "impressions": 209,
          "position": 5.220095693779904
        },
        "kwCount": 13,
        "topKw": [
          {
            "q": "อบรมดับเพลิงขั้นต้น ฟรี 2569",
            "clicks": 8,
            "impressions": 209,
            "position": 5.220095693779904
          },
          {
            "q": "อบรมดับเพลิงขั้นต้น",
            "clicks": 1,
            "impressions": 43,
            "position": 30.13953488372093
          },
          {
            "q": "อบรมดับเพลิงขั้นต้น 2569",
            "clicks": 1,
            "impressions": 15,
            "position": 7.6
          },
          {
            "q": "เพลิงขั้นต้นหมายถึง",
            "clicks": 0,
            "impressions": 13,
            "position": 6.384615384615385
          },
          {
            "q": "ดับเพลิงขั้นต้น",
            "clicks": 0,
            "impressions": 5,
            "position": 11.2
          }
        ]
      },
      {
        "course": "โรยตัว",
        "cat": "งานบนที่สูง",
        "clicks": 19,
        "prevClicks": 1,
        "impressions": 505,
        "position": 5.251485148514852,
        "bestQ": {
          "q": "อบรมโรยตัว",
          "clicks": 3,
          "impressions": 22,
          "position": 3.0454545454545454
        },
        "kwCount": 9,
        "topKw": [
          {
            "q": "อบรมโรยตัว",
            "clicks": 3,
            "impressions": 22,
            "position": 3.0454545454545454
          },
          {
            "q": "rope access คือ",
            "clicks": 0,
            "impressions": 13,
            "position": 9.23076923076923
          },
          {
            "q": "โรยตัว",
            "clicks": 0,
            "impressions": 12,
            "position": 6.75
          },
          {
            "q": "เชือกปฏิบัติงาน",
            "clicks": 0,
            "impressions": 10,
            "position": 12.3
          },
          {
            "q": "งานโรยตัวที่สูง",
            "clicks": 0,
            "impressions": 6,
            "position": 7
          }
        ]
      },
      {
        "course": "E CP",
        "cat": "ผู้รับเหมา CP",
        "clicks": 19,
        "prevClicks": 10,
        "impressions": 387,
        "position": 6.322997416020672,
        "bestQ": {
          "q": "อบรมความปลอดภัยในการทํางานกับไฟฟ้า",
          "clicks": 0,
          "impressions": 4,
          "position": 2.5
        },
        "kwCount": 27,
        "topKw": [
          {
            "q": "อบรมความปลอดภัยไฟฟ้า",
            "clicks": 1,
            "impressions": 22,
            "position": 6.409090909090909
          },
          {
            "q": "net training",
            "clicks": 1,
            "impressions": 2,
            "position": 2.5
          },
          {
            "q": "อบรมความปลอดภัยเกี่ยวกับไฟฟ้า",
            "clicks": 0,
            "impressions": 26,
            "position": 7.384615384615385
          },
          {
            "q": "หลักสูตรความปลอดภัยในการทํางานเกี่ยวกับไฟฟ้า",
            "clicks": 0,
            "impressions": 8,
            "position": 8.875
          },
          {
            "q": "net อบรม",
            "clicks": 0,
            "impressions": 7,
            "position": 1.4285714285714286
          }
        ]
      },
      {
        "course": "E AIS",
        "cat": "ผู้รับเหมา AIS",
        "clicks": 16,
        "prevClicks": 8,
        "impressions": 237,
        "position": 12.345991561181435,
        "bestQ": {
          "q": "electrical safety training",
          "clicks": 0,
          "impressions": 3,
          "position": 2
        },
        "kwCount": 18,
        "topKw": [
          {
            "q": "net อบรม",
            "clicks": 0,
            "impressions": 11,
            "position": 1
          },
          {
            "q": "e-safety",
            "clicks": 0,
            "impressions": 3,
            "position": 19
          },
          {
            "q": "electrical safety training",
            "clicks": 0,
            "impressions": 3,
            "position": 2
          },
          {
            "q": "e safety",
            "clicks": 0,
            "impressions": 2,
            "position": 43
          },
          {
            "q": "esafety",
            "clicks": 0,
            "impressions": 2,
            "position": 58.5
          }
        ]
      },
      {
        "course": "การทำงานบนที่สูง เสาส่งสัญญาณ",
        "cat": "งานบนที่สูง",
        "clicks": 14,
        "prevClicks": 4,
        "impressions": 359,
        "position": 6.573816155988858,
        "bestQ": {
          "q": "work at high",
          "clicks": 0,
          "impressions": 5,
          "position": 2.4
        },
        "kwCount": 11,
        "topKw": [
          {
            "q": "งานที่สูง ภาษาอังกฤษ",
            "clicks": 1,
            "impressions": 20,
            "position": 5.55
          },
          {
            "q": "อบรมทํางานที่สูง ออนไลน์",
            "clicks": 1,
            "impressions": 1,
            "position": 25
          },
          {
            "q": "อบรมที่สูง",
            "clicks": 0,
            "impressions": 8,
            "position": 47.75
          },
          {
            "q": "work at high",
            "clicks": 0,
            "impressions": 5,
            "position": 2.4
          },
          {
            "q": "การทํางานบนที่สูง ภาษาอังกฤษ",
            "clicks": 0,
            "impressions": 4,
            "position": 3.25
          }
        ]
      },
      {
        "course": "อับอากาศ - ผู้ปฏิบัติงาน",
        "cat": "อับอากาศ",
        "clicks": 12,
        "prevClicks": 5,
        "impressions": 569,
        "position": 8.126537785588752,
        "bestQ": {
          "q": "ลูกจ้างที่จะสามารถเข้าอบรมหลักสูตร การทำงานในที่อับอากาศได้ จะต้องผ่านการอบรมหลักสูตรใดมาก่อน",
          "clicks": 0,
          "impressions": 48,
          "position": 3.4375
        },
        "kwCount": 22,
        "topKw": [
          {
            "q": "อบรมทบทวนอับอากาศ",
            "clicks": 1,
            "impressions": 6,
            "position": 41.333333333333336
          },
          {
            "q": "ใบเซอร์อับอากาศ",
            "clicks": 1,
            "impressions": 2,
            "position": 4.5
          },
          {
            "q": "อับอากาศ",
            "clicks": 0,
            "impressions": 100,
            "position": 4.66
          },
          {
            "q": "ผู้ปฏิบัติงาน",
            "clicks": 0,
            "impressions": 49,
            "position": 4.346938775510204
          },
          {
            "q": "ลูกจ้างที่จะสามารถเข้าอบรมหลักสูตร การทำงานในที่อับอากาศได้ จะต้องผ่านการอบรมหลักสูตรใดมาก่อน",
            "clicks": 0,
            "impressions": 48,
            "position": 3.4375
          }
        ]
      },
      {
        "course": "จป.บริหาร",
        "cat": "จป & คปอ",
        "clicks": 12,
        "prevClicks": 11,
        "impressions": 328,
        "position": 11.698170731707316,
        "bestQ": {
          "q": "safety officer training",
          "clicks": 0,
          "impressions": 3,
          "position": 6
        },
        "kwCount": 24,
        "topKw": [
          {
            "q": "อบรม จป บริหาร",
            "clicks": 1,
            "impressions": 19,
            "position": 33.8421052631579
          },
          {
            "q": "safety office",
            "clicks": 0,
            "impressions": 8,
            "position": 11.375
          },
          {
            "q": "อบรมจปบริหาร",
            "clicks": 0,
            "impressions": 4,
            "position": 37
          },
          {
            "q": "safety officer training",
            "clicks": 0,
            "impressions": 3,
            "position": 6
          },
          {
            "q": "safety training courses",
            "clicks": 0,
            "impressions": 3,
            "position": 71
          }
        ]
      },
      {
        "course": "ร้านจำหน่ายและโรงเก็บ LPG",
        "cat": "กรมธุรกิจพลังงาน",
        "clicks": 11,
        "prevClicks": 16,
        "impressions": 246,
        "position": 6.09349593495935,
        "bestQ": {
          "q": "ร้านจำหน่าย",
          "clicks": 0,
          "impressions": 28,
          "position": 7.178571428571429
        },
        "kwCount": 11,
        "topKw": [
          {
            "q": "ร้านจำหน่าย",
            "clicks": 0,
            "impressions": 28,
            "position": 7.178571428571429
          },
          {
            "q": "ผู้ปฏิบัติงาน",
            "clicks": 0,
            "impressions": 16,
            "position": 8
          },
          {
            "q": "ศูนย์ฝึกอบรมเนเชอรัลฯ จ.นนทบุรี",
            "clicks": 0,
            "impressions": 2,
            "position": 1
          },
          {
            "q": "฿3,500",
            "clicks": 0,
            "impressions": 2,
            "position": 8
          },
          {
            "q": "29*3500",
            "clicks": 0,
            "impressions": 1,
            "position": 11
          }
        ]
      },
      {
        "course": "TSM 6 ชั่วโมง",
        "cat": "ADR & TSM",
        "clicks": 11,
        "prevClicks": 3,
        "impressions": 130,
        "position": 5.930769230769231,
        "bestQ": null,
        "kwCount": 7,
        "topKw": [
          {
            "q": "มีแบบออนไลน์มั้ย",
            "clicks": 1,
            "impressions": 1,
            "position": 4
          },
          {
            "q": "อบรม tsm ใกล้ ฉัน",
            "clicks": 0,
            "impressions": 2,
            "position": 10.5
          },
          {
            "q": "2000*6",
            "clicks": 0,
            "impressions": 1,
            "position": 30
          },
          {
            "q": "tsm r",
            "clicks": 0,
            "impressions": 1,
            "position": 9
          },
          {
            "q": "tsm training",
            "clicks": 0,
            "impressions": 1,
            "position": 1
          }
        ]
      },
      {
        "course": "TSM 18 ชั่วโมง",
        "cat": "ADR & TSM",
        "clicks": 10,
        "prevClicks": 5,
        "impressions": 377,
        "position": 6.76657824933687,
        "bestQ": {
          "q": "t sm",
          "clicks": 0,
          "impressions": 3,
          "position": 11
        },
        "kwCount": 26,
        "topKw": [
          {
            "q": "ttsm ais",
            "clicks": 0,
            "impressions": 4,
            "position": 16
          },
          {
            "q": "t sm",
            "clicks": 0,
            "impressions": 3,
            "position": 11
          },
          {
            "q": "tsm",
            "clicks": 0,
            "impressions": 2,
            "position": 10.5
          },
          {
            "q": "tsm school",
            "clicks": 0,
            "impressions": 2,
            "position": 4
          },
          {
            "q": "tsm training",
            "clicks": 0,
            "impressions": 2,
            "position": 30
          }
        ]
      },
      {
        "course": "T AIS",
        "cat": "ผู้รับเหมา AIS",
        "clicks": 10,
        "prevClicks": 2,
        "impressions": 210,
        "position": 6.628571428571429,
        "bestQ": {
          "q": "net t",
          "clicks": 0,
          "impressions": 4,
          "position": 4.5
        },
        "kwCount": 9,
        "topKw": [
          {
            "q": "ais safety passport",
            "clicks": 0,
            "impressions": 9,
            "position": 5.888888888888889
          },
          {
            "q": "net t",
            "clicks": 0,
            "impressions": 4,
            "position": 4.5
          },
          {
            "q": "ais safety",
            "clicks": 0,
            "impressions": 2,
            "position": 56
          },
          {
            "q": "net อบรม",
            "clicks": 0,
            "impressions": 2,
            "position": 1
          },
          {
            "q": "t'ais",
            "clicks": 0,
            "impressions": 2,
            "position": 6.5
          }
        ]
      },
      {
        "course": "จป.เทคนิค",
        "cat": "จป & คปอ",
        "clicks": 7,
        "prevClicks": 2,
        "impressions": 316,
        "position": 9.651898734177216,
        "bestQ": {
          "q": "อบรมจป.เทคนิค",
          "clicks": 0,
          "impressions": 6,
          "position": 3.1666666666666665
        },
        "kwCount": 36,
        "topKw": [
          {
            "q": "อบรม จป",
            "clicks": 1,
            "impressions": 3,
            "position": 19.333333333333332
          },
          {
            "q": "อบรมจป",
            "clicks": 1,
            "impressions": 1,
            "position": 18
          },
          {
            "q": "safety and technical courses",
            "clicks": 0,
            "impressions": 28,
            "position": 5.678571428571429
          },
          {
            "q": "อบรม จป เทคนิค",
            "clicks": 0,
            "impressions": 18,
            "position": 13.722222222222221
          },
          {
            "q": "จป.เทคนิค ภาษาอังกฤษ",
            "clicks": 0,
            "impressions": 12,
            "position": 6.916666666666667
          }
        ]
      },
      {
        "course": "ไฟฟ้ากรมสวัสดิ์",
        "cat": "ช่างไฟฟ้า & ช่างแอร์",
        "clicks": 7,
        "prevClicks": 10,
        "impressions": 218,
        "position": 13.26605504587156,
        "bestQ": {
          "q": "dlpw-approved courses",
          "clicks": 0,
          "impressions": 13,
          "position": 3.3076923076923075
        },
        "kwCount": 15,
        "topKw": [
          {
            "q": "ผู้ช่วยนายช่างไฟฟ้า",
            "clicks": 1,
            "impressions": 1,
            "position": 6
          },
          {
            "q": "dlpw-approved courses",
            "clicks": 0,
            "impressions": 13,
            "position": 3.3076923076923075
          },
          {
            "q": "work with electricity",
            "clicks": 0,
            "impressions": 2,
            "position": 11
          },
          {
            "q": "อบรมไฟฟ้า",
            "clicks": 0,
            "impressions": 2,
            "position": 48
          },
          {
            "q": "disconnect reconnect licence",
            "clicks": 0,
            "impressions": 1,
            "position": 64
          }
        ]
      },
      {
        "course": "ADR - พื้นฐาน+แท๊งค์",
        "cat": "ADR & TSM",
        "clicks": 7,
        "prevClicks": 4,
        "impressions": 160,
        "position": 8.15625,
        "bestQ": null,
        "kwCount": 7,
        "topKw": [
          {
            "q": "สอบ adr ขนส่ง",
            "clicks": 0,
            "impressions": 2,
            "position": 7
          },
          {
            "q": "อบรม adr ใกล้ ฉัน",
            "clicks": 0,
            "impressions": 2,
            "position": 1
          },
          {
            "q": "adr 49",
            "clicks": 0,
            "impressions": 1,
            "position": 2
          },
          {
            "q": "adr training courses near me",
            "clicks": 0,
            "impressions": 1,
            "position": 71
          },
          {
            "q": "สมัครที่ไหน",
            "clicks": 0,
            "impressions": 1,
            "position": 1
          }
        ]
      },
      {
        "course": "ความปลอดภัยในการทำงานที่สูงบนหลังคา",
        "cat": "งานบนที่สูง",
        "clicks": 7,
        "prevClicks": 0,
        "impressions": 122,
        "position": 5.19672131147541,
        "bestQ": null,
        "kwCount": 3,
        "topKw": [
          {
            "q": "1800÷12",
            "clicks": 0,
            "impressions": 1,
            "position": 12
          },
          {
            "q": "งานหลังคา",
            "clicks": 0,
            "impressions": 1,
            "position": 5
          },
          {
            "q": "เนเชอรัล",
            "clicks": 0,
            "impressions": 1,
            "position": 1
          }
        ]
      },
      {
        "course": "SP CP",
        "cat": "ผู้รับเหมา CP",
        "clicks": 7,
        "prevClicks": 4,
        "impressions": 115,
        "position": 6.6347826086956525,
        "bestQ": null,
        "kwCount": 5,
        "topKw": [
          {
            "q": "ศูนย์ฝึกอบรมเนเชอรัลฯ จ.นนทบุรี",
            "clicks": 0,
            "impressions": 10,
            "position": 1.1
          },
          {
            "q": "อบรมที่สูง",
            "clicks": 0,
            "impressions": 2,
            "position": 28
          },
          {
            "q": "sp.net",
            "clicks": 0,
            "impressions": 1,
            "position": 9
          },
          {
            "q": "อบรมการทํางานบนที่สูง",
            "clicks": 0,
            "impressions": 1,
            "position": 26
          },
          {
            "q": "ในนนทบุรี",
            "clicks": 0,
            "impressions": 1,
            "position": 6
          }
        ]
      },
      {
        "course": "H CP",
        "cat": "ผู้รับเหมา CP",
        "clicks": 6,
        "prevClicks": 0,
        "impressions": 134,
        "position": 7.067164179104478,
        "bestQ": null,
        "kwCount": 1,
        "topKw": [
          {
            "q": "cp training",
            "clicks": 0,
            "impressions": 1,
            "position": 10
          }
        ]
      },
      {
        "course": "EC CP",
        "cat": "ผู้รับเหมา CP",
        "clicks": 6,
        "prevClicks": 0,
        "impressions": 55,
        "position": 7.763636363636364,
        "bestQ": {
          "q": "cp ec",
          "clicks": 2,
          "impressions": 3,
          "position": 3
        },
        "kwCount": 4,
        "topKw": [
          {
            "q": "cp ec",
            "clicks": 2,
            "impressions": 3,
            "position": 3
          },
          {
            "q": "telcom",
            "clicks": 0,
            "impressions": 3,
            "position": 3
          },
          {
            "q": "อบรม ec",
            "clicks": 0,
            "impressions": 2,
            "position": 8
          },
          {
            "q": "ecp electrical",
            "clicks": 0,
            "impressions": 1,
            "position": 63
          }
        ]
      },
      {
        "course": "อับอากาศ 4 ผู้",
        "cat": "อับอากาศ",
        "clicks": 5,
        "prevClicks": 3,
        "impressions": 173,
        "position": 10.468208092485549,
        "bestQ": {
          "q": "ลูกจ้างที่จะสามารถเข้าอบรมหลักสูตร การทำงานในที่อับอากาศได้ จะต้องผ่านการอบรมหลักสูตรใดมาก่อน",
          "clicks": 0,
          "impressions": 12,
          "position": 1.25
        },
        "kwCount": 12,
        "topKw": [
          {
            "q": "ลูกจ้างที่จะสามารถเข้าอบรมหลักสูตร การทำงานในที่อับอากาศได้ จะต้องผ่านการอบรมหลักสูตรใดมาก่อน",
            "clicks": 0,
            "impressions": 12,
            "position": 1.25
          },
          {
            "q": "อบรมอับอากาศ 4 ผู้",
            "clicks": 0,
            "impressions": 5,
            "position": 22.8
          },
          {
            "q": "อบรม 4 ผู้อับอากาศ",
            "clicks": 0,
            "impressions": 4,
            "position": 32
          },
          {
            "q": "อบรมที่อับอากาศ",
            "clicks": 0,
            "impressions": 4,
            "position": 59.25
          },
          {
            "q": "confined space 4 ผู้",
            "clicks": 0,
            "impressions": 3,
            "position": 15.666666666666666
          }
        ]
      },
      {
        "course": "G Trainer CP",
        "cat": "Trainer CP",
        "clicks": 5,
        "prevClicks": 2,
        "impressions": 66,
        "position": 4.4393939393939394,
        "bestQ": null,
        "kwCount": 2,
        "topKw": [
          {
            "q": "g trainer",
            "clicks": 0,
            "impressions": 2,
            "position": 3
          },
          {
            "q": "training instructors",
            "clicks": 0,
            "impressions": 1,
            "position": 9
          }
        ]
      },
      {
        "course": "EC Trainer CP",
        "cat": "Trainer CP",
        "clicks": 4,
        "prevClicks": 2,
        "impressions": 49,
        "position": 7.8979591836734695,
        "bestQ": {
          "q": "cp ec",
          "clicks": 0,
          "impressions": 3,
          "position": 6.666666666666667
        },
        "kwCount": 1,
        "topKw": [
          {
            "q": "cp ec",
            "clicks": 0,
            "impressions": 3,
            "position": 6.666666666666667
          }
        ]
      },
      {
        "course": "ดับเพลิง & อพยพหนีไฟ",
        "cat": "การป้องกันและระงับอัคคีภัย",
        "clicks": 3,
        "prevClicks": 1,
        "impressions": 664,
        "position": 12.95933734939759,
        "bestQ": {
          "q": "ซ้อมดับเพลิงและอพยพหนีไฟ",
          "clicks": 0,
          "impressions": 9,
          "position": 5.777777777777778
        },
        "kwCount": 19,
        "topKw": [
          {
            "q": "อบรมหนีไฟ",
            "clicks": 0,
            "impressions": 25,
            "position": 49.64
          },
          {
            "q": "อบรมดับเพลิงขั้นต้นและซ้อมอพยพหนีไฟ",
            "clicks": 0,
            "impressions": 23,
            "position": 50.26086956521739
          },
          {
            "q": "อบรมดับเพลิงและอพยพหนีไฟ",
            "clicks": 0,
            "impressions": 22,
            "position": 49.63636363636363
          },
          {
            "q": "อบรมดับเพลิง",
            "clicks": 0,
            "impressions": 18,
            "position": 44.833333333333336
          },
          {
            "q": "ซ้อมดับเพลิงและอพยพหนีไฟ",
            "clicks": 0,
            "impressions": 9,
            "position": 5.777777777777778
          }
        ]
      },
      {
        "course": "อับอากาศ - ผู้อนุญาต",
        "cat": "อับอากาศ",
        "clicks": 3,
        "prevClicks": 2,
        "impressions": 118,
        "position": 15.40677966101695,
        "bestQ": {
          "q": "ผู้อนุญาต",
          "clicks": 0,
          "impressions": 3,
          "position": 2.333333333333333
        },
        "kwCount": 12,
        "topKw": [
          {
            "q": "confined space 意味",
            "clicks": 0,
            "impressions": 6,
            "position": 12
          },
          {
            "q": "閉所作業",
            "clicks": 0,
            "impressions": 6,
            "position": 8.333333333333332
          },
          {
            "q": "อบรม 4 ผู้อับอากาศ",
            "clicks": 0,
            "impressions": 4,
            "position": 80.25
          },
          {
            "q": "密封空間",
            "clicks": 0,
            "impressions": 4,
            "position": 10
          },
          {
            "q": "ผู้อนุญาต",
            "clicks": 0,
            "impressions": 3,
            "position": 2.333333333333333
          }
        ]
      },
      {
        "course": "Trainer -G",
        "cat": "Trainer AIS",
        "clicks": 3,
        "prevClicks": 0,
        "impressions": 85,
        "position": 8.376470588235295,
        "bestQ": {
          "q": "฿2,700",
          "clicks": 0,
          "impressions": 4,
          "position": 8
        },
        "kwCount": 7,
        "topKw": [
          {
            "q": "฿2,700",
            "clicks": 0,
            "impressions": 4,
            "position": 8
          },
          {
            "q": "ais safety",
            "clicks": 0,
            "impressions": 2,
            "position": 71
          },
          {
            "q": "safety instructor",
            "clicks": 0,
            "impressions": 2,
            "position": 10
          },
          {
            "q": "2700 44",
            "clicks": 0,
            "impressions": 1,
            "position": 17
          },
          {
            "q": "safety instructor certification",
            "clicks": 0,
            "impressions": 1,
            "position": 5
          }
        ]
      },
      {
        "course": "E Trainer CP",
        "cat": "Trainer CP",
        "clicks": 1,
        "prevClicks": 3,
        "impressions": 92,
        "position": 7.5,
        "bestQ": null,
        "kwCount": 4,
        "topKw": [
          {
            "q": "cp pass",
            "clicks": 0,
            "impressions": 1,
            "position": 89
          },
          {
            "q": "cp passport",
            "clicks": 0,
            "impressions": 1,
            "position": 10
          },
          {
            "q": "cp safety passport",
            "clicks": 0,
            "impressions": 1,
            "position": 58
          },
          {
            "q": "e-cp",
            "clicks": 0,
            "impressions": 1,
            "position": 6
          }
        ]
      },
      {
        "course": "คปอ.",
        "cat": "จป & คปอ",
        "clicks": 1,
        "prevClicks": 2,
        "impressions": 83,
        "position": 28.457831325301203,
        "bestQ": {
          "q": "กฎหมาย อบรม ค ปอ",
          "clicks": 0,
          "impressions": 3,
          "position": 54
        },
        "kwCount": 6,
        "topKw": [
          {
            "q": "อบรม คปอ",
            "clicks": 1,
            "impressions": 11,
            "position": 54.63636363636363
          },
          {
            "q": "อบรมคปอ",
            "clicks": 0,
            "impressions": 8,
            "position": 54.125
          },
          {
            "q": "หลักสูตร ค ปอ",
            "clicks": 0,
            "impressions": 5,
            "position": 62.8
          },
          {
            "q": "กฎหมาย อบรม ค ปอ",
            "clicks": 0,
            "impressions": 3,
            "position": 54
          },
          {
            "q": "ค ปอ อบรม",
            "clicks": 0,
            "impressions": 3,
            "position": 61.666666666666664
          }
        ]
      },
      {
        "course": "R CP",
        "cat": "ผู้รับเหมา CP",
        "clicks": 1,
        "prevClicks": 1,
        "impressions": 48,
        "position": 3.6666666666666665,
        "bestQ": null,
        "kwCount": 1,
        "topKw": [
          {
            "q": "roof work",
            "clicks": 0,
            "impressions": 2,
            "position": 6
          }
        ]
      },
      {
        "course": "T CP",
        "cat": "ผู้รับเหมา CP",
        "clicks": 1,
        "prevClicks": 0,
        "impressions": 37,
        "position": 8.297297297297296,
        "bestQ": null,
        "kwCount": 0,
        "topKw": []
      },
      {
        "course": "refresh E AIS",
        "cat": "ผู้รับเหมา AIS",
        "clicks": 1,
        "prevClicks": 0,
        "impressions": 31,
        "position": 17.612903225806452,
        "bestQ": null,
        "kwCount": 3,
        "topKw": [
          {
            "q": "ais safety",
            "clicks": 0,
            "impressions": 2,
            "position": 74.5
          },
          {
            "q": "power awareness refresher",
            "clicks": 0,
            "impressions": 1,
            "position": 74
          },
          {
            "q": "รีเฟรชเทรนนิ่ง",
            "clicks": 0,
            "impressions": 1,
            "position": 8
          }
        ]
      },
      {
        "course": "refresh G AIS",
        "cat": "ผู้รับเหมา AIS",
        "clicks": 1,
        "prevClicks": 0,
        "impressions": 22,
        "position": 7.181818181818182,
        "bestQ": null,
        "kwCount": 1,
        "topKw": [
          {
            "q": "refresh g",
            "clicks": 0,
            "impressions": 1,
            "position": 3
          }
        ]
      }
    ],
    "intentKw": [
      {
        "q": "อบรมช่างไฟฟ้าภายในอาคาร ระดับ 1",
        "clicks": 20,
        "impressions": 206,
        "position": 4.359223300970873,
        "course": "ช่างไฟฟ้า ระดับ 1"
      },
      {
        "q": "cp safety passport",
        "clicks": 15,
        "impressions": 217,
        "position": 2.3364055299539173,
        "course": "หน้า CP Safety Passport"
      },
      {
        "q": "cp passport",
        "clicks": 12,
        "impressions": 117,
        "position": 2.5213675213675213,
        "course": "หน้า CP Safety Passport"
      },
      {
        "q": "อบรมไฟฟ้าภายในอาคาร ระดับ 1",
        "clicks": 12,
        "impressions": 92,
        "position": 3.3043478260869565,
        "course": "ช่างไฟฟ้า ระดับ 1"
      },
      {
        "q": "ผู้ปฏิบัติงานสถานที่ใช้ก๊าซปิโตรเลียมเหลว",
        "clicks": 11,
        "impressions": 24,
        "position": 1.1666666666666667,
        "course": "สถานที่ใช้ LPG"
      },
      {
        "q": "อบรม adr",
        "clicks": 10,
        "impressions": 95,
        "position": 4.094736842105263,
        "course": "ADR - พื้นฐาน"
      },
      {
        "q": "อบรมโลตัส",
        "clicks": 9,
        "impressions": 94,
        "position": 4.425531914893617,
        "course": "G CP"
      },
      {
        "q": "อบรมดับเพลิงขั้นต้น ฟรี 2569",
        "clicks": 8,
        "impressions": 214,
        "position": 5.303738317757009,
        "course": "ดับเพลิงขั้นต้น"
      },
      {
        "q": "อบรม จป หัวหน้างาน",
        "clicks": 8,
        "impressions": 94,
        "position": 9.52127659574468,
        "course": "จป.หัวหน้างาน"
      },
      {
        "q": "อบรมผู้ปฏิบัติงานสถานที่ใช้ก๊าซธรรมชาติ",
        "clicks": 8,
        "impressions": 15,
        "position": 1.0666666666666667,
        "course": "สถานที่ใช้ NG"
      },
      {
        "q": "อบรม adr ออนไลน์",
        "clicks": 7,
        "impressions": 47,
        "position": 3.021276595744681,
        "course": "หมวด ADR & TSM"
      },
      {
        "q": "จป หัวหน้างาน",
        "clicks": 5,
        "impressions": 210,
        "position": 6.5476190476190474,
        "course": "จป.หัวหน้างาน"
      },
      {
        "q": "cp safety passport มี กี่ หลักสูตร",
        "clicks": 5,
        "impressions": 46,
        "position": 1.2173913043478262,
        "course": "หน้า CP Safety Passport"
      },
      {
        "q": "อบรมadr",
        "clicks": 5,
        "impressions": 44,
        "position": 3.9545454545454546,
        "course": "หมวด ADR & TSM"
      },
      {
        "q": "อบรม ผู้ควบคุมก๊าซ lpg 2569",
        "clicks": 5,
        "impressions": 32,
        "position": 3.84375,
        "course": "สถานที่ใช้ LPG"
      },
      {
        "q": "ais safety passport",
        "clicks": 5,
        "impressions": 22,
        "position": 1.5454545454545454,
        "course": "หมวด ผู้รับเหมา AIS"
      },
      {
        "q": "ผู้ปฏิบัติงานสถานที่ใช้ก๊าซธรรมชาติ",
        "clicks": 5,
        "impressions": 19,
        "position": 1.1578947368421053,
        "course": "สถานที่ใช้ NG"
      },
      {
        "q": "ช่างไฟฟ้าภายในอาคาร ระดับ 1",
        "clicks": 4,
        "impressions": 90,
        "position": 6.977777777777778,
        "course": "ช่างไฟฟ้า ระดับ 1"
      },
      {
        "q": "safety passport",
        "clicks": 4,
        "impressions": 44,
        "position": 1.7272727272727273,
        "course": "หน้า CP Safety Passport"
      },
      {
        "q": "cp safety passport คือ",
        "clicks": 4,
        "impressions": 17,
        "position": 1.2352941176470589,
        "course": "หน้า CP Safety Passport"
      }
    ],
    "gapKw": [
      {
        "q": "training",
        "clicks": 0,
        "impressions": 124,
        "position": 10.153225806451612,
        "page": "หน้าแรก"
      },
      {
        "q": "空调技师",
        "clicks": 0,
        "impressions": 116,
        "position": 13.887931034482758,
        "page": "ช่างแอร์ ระดับ 1"
      },
      {
        "q": "อบรม จป หัวหน้างาน",
        "clicks": 8,
        "impressions": 96,
        "position": 11.041666666666666,
        "page": "จป.หัวหน้างาน"
      },
      {
        "q": "safety and technical courses",
        "clicks": 0,
        "impressions": 51,
        "position": 21.901960784313726,
        "page": "จป.เทคนิค"
      },
      {
        "q": "safety training thailand",
        "clicks": 0,
        "impressions": 49,
        "position": 34.97959183673469,
        "page": "หน้าแรก"
      },
      {
        "q": "safety training courses",
        "clicks": 0,
        "impressions": 48,
        "position": 41.0625,
        "page": "แคตตาล็อกหลักสูตร"
      },
      {
        "q": "ความปลอดภัยออนไลน์ฟรี",
        "clicks": 0,
        "impressions": 44,
        "position": 32.72727272727273,
        "page": "หน้าแรก"
      },
      {
        "q": "อบรมดับเพลิงขั้นต้น",
        "clicks": 1,
        "impressions": 43,
        "position": 30.13953488372093,
        "page": "ดับเพลิงขั้นต้น"
      },
      {
        "q": "industrial safety training",
        "clicks": 0,
        "impressions": 35,
        "position": 41.22857142857143,
        "page": "แคตตาล็อกหลักสูตร"
      },
      {
        "q": "อบรมที่สูง",
        "clicks": 2,
        "impressions": 34,
        "position": 24.941176470588236,
        "page": "ความปลอดภัยในงานที่สูง"
      },
      {
        "q": "ais safety",
        "clicks": 0,
        "impressions": 27,
        "position": 33.74074074074074,
        "page": "แคตตาล็อกหลักสูตร"
      },
      {
        "q": "basic safety training",
        "clicks": 0,
        "impressions": 27,
        "position": 50.407407407407405,
        "page": "แคตตาล็อกหลักสูตร"
      },
      {
        "q": "อบรมดับเพลิงขั้นต้นและซ้อมอพยพหนีไฟ",
        "clicks": 0,
        "impressions": 27,
        "position": 48.96296296296296,
        "page": "ดับเพลิง & อพยพหนีไฟ"
      },
      {
        "q": "อบรมหนีไฟ",
        "clicks": 0,
        "impressions": 26,
        "position": 49.61538461538461,
        "page": "ดับเพลิง & อพยพหนีไฟ"
      },
      {
        "q": "อบรมดับเพลิงและอพยพหนีไฟ",
        "clicks": 1,
        "impressions": 24,
        "position": 48.541666666666664,
        "page": "ดับเพลิง & อพยพหนีไฟ"
      },
      {
        "q": "สถานีแก๊ส lpg",
        "clicks": 0,
        "impressions": 24,
        "position": 25.375,
        "page": "สถานที่ใช้ LPG"
      },
      {
        "q": "รักษา ความ ปลอดภัย พลัง ร่วม",
        "clicks": 0,
        "impressions": 23,
        "position": 22.73913043478261,
        "page": "แคตตาล็อกหลักสูตร"
      },
      {
        "q": "อบรมจปหัวหน้างาน",
        "clicks": 0,
        "impressions": 23,
        "position": 14.91304347826087,
        "page": "จป.หัวหน้างาน"
      },
      {
        "q": "ttsm ais",
        "clicks": 0,
        "impressions": 22,
        "position": 10.272727272727273,
        "page": "หน้าแรก"
      },
      {
        "q": "dlpw-approved courses",
        "clicks": 0,
        "impressions": 21,
        "position": 21.38095238095238,
        "page": "ไฟฟ้ากรมสวัสดิ์"
      },
      {
        "q": "อบรมอัคคีภัย",
        "clicks": 0,
        "impressions": 21,
        "position": 47.333333333333336,
        "page": "หมวด การป้องกันและระงับอัคคีภัย"
      },
      {
        "q": "อบรม adr ฟรี",
        "clicks": 0,
        "impressions": 20,
        "position": 13.1,
        "page": "ADR - พื้นฐาน"
      },
      {
        "q": "อบรมดับเพลิง",
        "clicks": 0,
        "impressions": 20,
        "position": 42.95,
        "page": "ดับเพลิง & อพยพหนีไฟ"
      },
      {
        "q": "อบรม จป บริหาร",
        "clicks": 1,
        "impressions": 19,
        "position": 33.8421052631579,
        "page": "จป.บริหาร"
      },
      {
        "q": "สถานที่เก็บน้ำมัน",
        "clicks": 0,
        "impressions": 19,
        "position": 12.842105263157896,
        "page": "สถานที่เก็บรักษาน้ำมัน"
      },
      {
        "q": "อบรมช่างแอร์",
        "clicks": 0,
        "impressions": 19,
        "position": 16.63157894736842,
        "page": "หมวด ช่างไฟฟ้า & ช่างแอร์"
      }
    ],
    "gapKwThai": [
      {
        "q": "อบรม จป หัวหน้างาน",
        "clicks": 8,
        "impressions": 96,
        "position": 11.041666666666666,
        "page": "จป.หัวหน้างาน"
      },
      {
        "q": "ความปลอดภัยออนไลน์ฟรี",
        "clicks": 0,
        "impressions": 44,
        "position": 32.72727272727273,
        "page": "หน้าแรก"
      },
      {
        "q": "อบรมดับเพลิงขั้นต้น",
        "clicks": 1,
        "impressions": 43,
        "position": 30.13953488372093,
        "page": "ดับเพลิงขั้นต้น"
      },
      {
        "q": "อบรมที่สูง",
        "clicks": 2,
        "impressions": 34,
        "position": 24.941176470588236,
        "page": "ความปลอดภัยในงานที่สูง"
      },
      {
        "q": "อบรมดับเพลิงขั้นต้นและซ้อมอพยพหนีไฟ",
        "clicks": 0,
        "impressions": 27,
        "position": 48.96296296296296,
        "page": "ดับเพลิง & อพยพหนีไฟ"
      },
      {
        "q": "อบรมหนีไฟ",
        "clicks": 0,
        "impressions": 26,
        "position": 49.61538461538461,
        "page": "ดับเพลิง & อพยพหนีไฟ"
      },
      {
        "q": "อบรมดับเพลิงและอพยพหนีไฟ",
        "clicks": 1,
        "impressions": 24,
        "position": 48.541666666666664,
        "page": "ดับเพลิง & อพยพหนีไฟ"
      },
      {
        "q": "สถานีแก๊ส lpg",
        "clicks": 0,
        "impressions": 24,
        "position": 25.375,
        "page": "สถานที่ใช้ LPG"
      },
      {
        "q": "รักษา ความ ปลอดภัย พลัง ร่วม",
        "clicks": 0,
        "impressions": 23,
        "position": 22.73913043478261,
        "page": "แคตตาล็อกหลักสูตร"
      },
      {
        "q": "อบรมจปหัวหน้างาน",
        "clicks": 0,
        "impressions": 23,
        "position": 14.91304347826087,
        "page": "จป.หัวหน้างาน"
      },
      {
        "q": "อบรมอัคคีภัย",
        "clicks": 0,
        "impressions": 21,
        "position": 47.333333333333336,
        "page": "หมวด การป้องกันและระงับอัคคีภัย"
      },
      {
        "q": "อบรม adr ฟรี",
        "clicks": 0,
        "impressions": 20,
        "position": 13.1,
        "page": "ADR - พื้นฐาน"
      },
      {
        "q": "อบรมดับเพลิง",
        "clicks": 0,
        "impressions": 20,
        "position": 42.95,
        "page": "ดับเพลิง & อพยพหนีไฟ"
      },
      {
        "q": "อบรม จป บริหาร",
        "clicks": 1,
        "impressions": 19,
        "position": 33.8421052631579,
        "page": "จป.บริหาร"
      },
      {
        "q": "สถานที่เก็บน้ำมัน",
        "clicks": 0,
        "impressions": 19,
        "position": 12.842105263157896,
        "page": "สถานที่เก็บรักษาน้ำมัน"
      },
      {
        "q": "อบรมช่างแอร์",
        "clicks": 0,
        "impressions": 19,
        "position": 16.63157894736842,
        "page": "หมวด ช่างไฟฟ้า & ช่างแอร์"
      }
    ],
    "brandClicks": 305,
    "attributedClicks": 602,
    "ranking": {
      "good": 30,
      "page1": 14,
      "low": 3,
      "none": 5
    },
    "notRanking": [
      {
        "course": "Trainer -E",
        "cat": "Trainer AIS",
        "impressions": 25,
        "clicks": 0,
        "position": 32.16,
        "bestQ": null,
        "topQ": {
          "q": "ais safety",
          "clicks": 0,
          "impressions": 2,
          "position": 80
        },
        "tier": "none",
        "tierLabel": "ยังไม่ปรากฏ"
      },
      {
        "course": "refresh G AIS",
        "cat": "ผู้รับเหมา AIS",
        "impressions": 22,
        "clicks": 1,
        "position": 7.181818181818182,
        "bestQ": null,
        "topQ": {
          "q": "refresh g",
          "clicks": 0,
          "impressions": 1,
          "position": 3
        },
        "tier": "none",
        "tierLabel": "ยังไม่ปรากฏ"
      },
      {
        "course": "B CP",
        "cat": "ผู้รับเหมา CP",
        "impressions": 9,
        "clicks": 0,
        "position": 14.222222222222221,
        "bestQ": null,
        "topQ": null,
        "tier": "none",
        "tierLabel": "ยังไม่ปรากฏ"
      },
      {
        "course": "รถขนส่งน้ำมัน",
        "cat": "กรมธุรกิจพลังงาน",
        "impressions": 0,
        "clicks": 0,
        "position": null,
        "bestQ": null,
        "topQ": null,
        "tier": "none",
        "tierLabel": "ยังไม่ปรากฏ"
      },
      {
        "course": "ผู้ปฏิบัติงาน ถังขนส่งก๊าซธรรมชาติเฉพาะพนักงานรับหรือจ่ายก๊าซธรรมชาติ",
        "cat": "กรมธุรกิจพลังงาน",
        "impressions": 0,
        "clicks": 0,
        "position": null,
        "bestQ": null,
        "topQ": null,
        "tier": "none",
        "tierLabel": "ยังไม่ปรากฏ"
      },
      {
        "course": "คปอ.",
        "cat": "จป & คปอ",
        "impressions": 83,
        "clicks": 1,
        "position": 28.457831325301203,
        "bestQ": {
          "q": "กฎหมาย อบรม ค ปอ",
          "clicks": 0,
          "impressions": 3,
          "position": 54
        },
        "topQ": {
          "q": "อบรม คปอ",
          "clicks": 1,
          "impressions": 11,
          "position": 54.63636363636363
        },
        "tier": "low",
        "tierLabel": "ยังไม่ติดหน้าแรก"
      },
      {
        "course": "A CP",
        "cat": "ผู้รับเหมา CP",
        "impressions": 53,
        "clicks": 0,
        "position": 11.584905660377359,
        "bestQ": {
          "q": "เชือกปฏิบัติงาน",
          "clicks": 0,
          "impressions": 8,
          "position": 31.125
        },
        "topQ": {
          "q": "เชือกปฏิบัติงาน",
          "clicks": 0,
          "impressions": 8,
          "position": 31.125
        },
        "tier": "low",
        "tierLabel": "ยังไม่ติดหน้าแรก"
      },
      {
        "course": "refresh E AIS",
        "cat": "ผู้รับเหมา AIS",
        "impressions": 31,
        "clicks": 1,
        "position": 17.612903225806452,
        "bestQ": null,
        "topQ": {
          "q": "ais safety",
          "clicks": 0,
          "impressions": 2,
          "position": 74.5
        },
        "tier": "low",
        "tierLabel": "ยังไม่ติดหน้าแรก"
      },
      {
        "course": "ดับเพลิง & อพยพหนีไฟ",
        "cat": "การป้องกันและระงับอัคคีภัย",
        "impressions": 664,
        "clicks": 3,
        "position": 12.95933734939759,
        "bestQ": {
          "q": "ซ้อมดับเพลิงและอพยพหนีไฟ",
          "clicks": 0,
          "impressions": 9,
          "position": 5.777777777777778
        },
        "topQ": {
          "q": "อบรมหนีไฟ",
          "clicks": 0,
          "impressions": 25,
          "position": 49.64
        },
        "tier": "page1",
        "tierLabel": "หน้าแรก · คลิกยังน้อย"
      },
      {
        "course": "จป.เทคนิค",
        "cat": "จป & คปอ",
        "impressions": 316,
        "clicks": 7,
        "position": 9.651898734177216,
        "bestQ": {
          "q": "อบรมจป.เทคนิค",
          "clicks": 0,
          "impressions": 6,
          "position": 3.1666666666666665
        },
        "topQ": {
          "q": "safety and technical courses",
          "clicks": 0,
          "impressions": 28,
          "position": 5.678571428571429
        },
        "tier": "page1",
        "tierLabel": "หน้าแรก · คลิกยังน้อย"
      },
      {
        "course": "ไฟฟ้ากรมสวัสดิ์",
        "cat": "ช่างไฟฟ้า & ช่างแอร์",
        "impressions": 218,
        "clicks": 7,
        "position": 13.26605504587156,
        "bestQ": {
          "q": "dlpw-approved courses",
          "clicks": 0,
          "impressions": 13,
          "position": 3.3076923076923075
        },
        "topQ": {
          "q": "dlpw-approved courses",
          "clicks": 0,
          "impressions": 13,
          "position": 3.3076923076923075
        },
        "tier": "page1",
        "tierLabel": "หน้าแรก · คลิกยังน้อย"
      },
      {
        "course": "ADR - พื้นฐาน+แท๊งค์",
        "cat": "ADR & TSM",
        "impressions": 160,
        "clicks": 7,
        "position": 8.15625,
        "bestQ": null,
        "topQ": {
          "q": "สอบ adr ขนส่ง",
          "clicks": 0,
          "impressions": 2,
          "position": 7
        },
        "tier": "page1",
        "tierLabel": "หน้าแรก · คลิกยังน้อย"
      },
      {
        "course": "H CP",
        "cat": "ผู้รับเหมา CP",
        "impressions": 134,
        "clicks": 6,
        "position": 7.067164179104478,
        "bestQ": null,
        "topQ": {
          "q": "cp training",
          "clicks": 0,
          "impressions": 1,
          "position": 10
        },
        "tier": "page1",
        "tierLabel": "หน้าแรก · คลิกยังน้อย"
      },
      {
        "course": "ความปลอดภัยในการทำงานที่สูงบนหลังคา",
        "cat": "งานบนที่สูง",
        "impressions": 122,
        "clicks": 7,
        "position": 5.19672131147541,
        "bestQ": null,
        "topQ": {
          "q": "1800÷12",
          "clicks": 0,
          "impressions": 1,
          "position": 12
        },
        "tier": "page1",
        "tierLabel": "หน้าแรก · คลิกยังน้อย"
      },
      {
        "course": "SP CP",
        "cat": "ผู้รับเหมา CP",
        "impressions": 115,
        "clicks": 7,
        "position": 6.6347826086956525,
        "bestQ": null,
        "topQ": {
          "q": "อบรมที่สูง",
          "clicks": 0,
          "impressions": 2,
          "position": 28
        },
        "tier": "page1",
        "tierLabel": "หน้าแรก · คลิกยังน้อย"
      },
      {
        "course": "E Trainer CP",
        "cat": "Trainer CP",
        "impressions": 92,
        "clicks": 1,
        "position": 7.5,
        "bestQ": null,
        "topQ": {
          "q": "cp pass",
          "clicks": 0,
          "impressions": 1,
          "position": 89
        },
        "tier": "page1",
        "tierLabel": "หน้าแรก · คลิกยังน้อย"
      },
      {
        "course": "Trainer -G",
        "cat": "Trainer AIS",
        "impressions": 85,
        "clicks": 3,
        "position": 8.376470588235295,
        "bestQ": {
          "q": "฿2,700",
          "clicks": 0,
          "impressions": 4,
          "position": 8
        },
        "topQ": {
          "q": "฿2,700",
          "clicks": 0,
          "impressions": 4,
          "position": 8
        },
        "tier": "page1",
        "tierLabel": "หน้าแรก · คลิกยังน้อย"
      },
      {
        "course": "G Trainer CP",
        "cat": "Trainer CP",
        "impressions": 66,
        "clicks": 5,
        "position": 4.4393939393939394,
        "bestQ": null,
        "topQ": {
          "q": "g trainer",
          "clicks": 0,
          "impressions": 2,
          "position": 3
        },
        "tier": "page1",
        "tierLabel": "หน้าแรก · คลิกยังน้อย"
      },
      {
        "course": "EC Trainer CP",
        "cat": "Trainer CP",
        "impressions": 49,
        "clicks": 4,
        "position": 7.8979591836734695,
        "bestQ": {
          "q": "cp ec",
          "clicks": 0,
          "impressions": 3,
          "position": 6.666666666666667
        },
        "topQ": {
          "q": "cp ec",
          "clicks": 0,
          "impressions": 3,
          "position": 6.666666666666667
        },
        "tier": "page1",
        "tierLabel": "หน้าแรก · คลิกยังน้อย"
      },
      {
        "course": "R CP",
        "cat": "ผู้รับเหมา CP",
        "impressions": 48,
        "clicks": 1,
        "position": 3.6666666666666665,
        "bestQ": null,
        "topQ": {
          "q": "roof work",
          "clicks": 0,
          "impressions": 2,
          "position": 6
        },
        "tier": "page1",
        "tierLabel": "หน้าแรก · คลิกยังน้อย"
      },
      {
        "course": "R Trainer CP",
        "cat": "Trainer CP",
        "impressions": 48,
        "clicks": 0,
        "position": 7.395833333333333,
        "bestQ": {
          "q": "สอนความ",
          "clicks": 0,
          "impressions": 4,
          "position": 4.25
        },
        "topQ": {
          "q": "r-training",
          "clicks": 0,
          "impressions": 5,
          "position": 14.4
        },
        "tier": "page1",
        "tierLabel": "หน้าแรก · คลิกยังน้อย"
      },
      {
        "course": "T CP",
        "cat": "ผู้รับเหมา CP",
        "impressions": 37,
        "clicks": 1,
        "position": 8.297297297297296,
        "bestQ": null,
        "topQ": null,
        "tier": "page1",
        "tierLabel": "หน้าแรก · คลิกยังน้อย"
      }
    ],
    "locations": [
      [
        "hatyai",
        36,
        357
      ],
      [
        "phitsanulok",
        21,
        149
      ],
      [
        "chiangmai",
        17,
        190
      ],
      [
        "nonthaburi",
        11,
        166
      ],
      [
        "suratthani",
        10,
        78
      ],
      [
        "korat",
        8,
        98
      ],
      [
        "rayong",
        5,
        201
      ],
      [
        "online",
        3,
        51
      ],
      [
        "chachoengsao",
        0,
        3
      ]
    ],
    "headline": "คลิกจาก Google +37%/วัน · การมองเห็น +76% — หลังงาน SEO ชุด ส.ค. ขึ้นระบบ 11–20 ส.ค.",
    "headline2": "30 จาก 52 หลักสูตรติดอันดับและได้คลิกแล้ว — หัวหอกคือพลังงาน + ช่างไฟฟ้า",
    "headline3": "ค้นชื่อหลักสูตรเจอหน้าแรก 44 จาก 52 — ที่ยังไม่ติดคือ \"คำทั่วไป\" ที่ลูกค้าใช้ค้น",
    "execLine": "<ul class=\"blist\"><li><div class=\"itile sm yellow\"><span data-icon=\"trending-up\"></span></div><div><b>คลิกจาก Google +37% ต่อวัน · การมองเห็น +76%</b> เทียบ 23 วันก่อนหน้า — โตหลังงาน SEO ชุด 11–20 ส.ค. ขึ้นระบบ</div></li><li><div class=\"itile sm yellow\"><span data-icon=\"check\"></span></div><div><b>44 จาก 52 หลักสูตรอยู่หน้าแรก</b>เมื่อค้นชื่อหลักสูตร (30 ได้คลิกดีแล้ว) — หัวหอกคือหลักสูตรกรมธุรกิจพลังงานและช่างไฟฟ้า ระดับ 1 (226 คลิก)</div></li><li><div class=\"itile sm yellow\"><span data-icon=\"triangle-alert\"></span></div><div><b>ที่ยังไม่ติดคือคำทั่วไปที่ลูกค้าใช้</b> เช่น \"อบรม จป หัวหน้างาน\" (11) · \"ความปลอดภัยออนไลน์ฟรี\" (33) · \"อบรมดับเพลิงขั้นต้น\" (30) — เราอยู่หน้า 3–6 · 5 หลักสูตรยังไม่ปรากฏเลย (สไลด์ 13)</div></li></ul>",
    "insights": [
      "<b>+37% คลิก/วัน · +76% การแสดงผล/วัน</b> เทียบ 23 วันก่อนหน้า (78 → 107 คลิก/วัน) — กราฟยกตัวหลังงาน SEO ชุด 11–20 ส.ค. ขึ้นระบบ",
      "<b>อันดับดีขึ้น 7.8 → 7.6</b> แม้ฐานแสดงผลใหญ่ขึ้นมาก (CTR ลดเป็นผลปกติ)",
      "<b>หน้าจังหวัดใหม่ได้ 111 คลิก</b> จาก 23 ในรอบก่อน (หาดใหญ่ 36 · พิษณุโลก 21 · เชียงใหม่ 17)"
    ],
    "brandNote": "<b>คำค้นชื่อบริษัท = ครึ่งหนึ่ง</b>ของคลิกที่ Google เปิดเผยคำค้น (305 จาก 602) · Google ไม่เปิดเผยคำค้นของอีก 1,857 คลิก (76%) — แต่การจับคู่หลักสูตรใช้หน้าที่ถูกคลิก จึงครบทุกคลิก",
    "notRankingNotes": [
      "<b>ค้นด้วยชื่อหลักสูตร เราอยู่หน้าแรกเกือบทุกตัว</b> (44 จาก 52) — แต่ชื่อหลักสูตรเต็ม ๆ แทบไม่มีคนค้น คำที่ลูกค้าใช้จริงคือคำสั้น ๆ เช่น \"อบรมดับเพลิง\" \"อบรม คปอ\" \"อบรมอับอากาศ\" ซึ่งคู่แข่งเยอะและเรายังอยู่หน้า 3–6",
      "<b>ควรทำก่อน:</b> เติมเนื้อหาหน้าหลักสูตรที่ตรงกับคำในตารางซ้าย ตามลำดับการแสดงผล — กลุ่มดับเพลิง/หนีไฟ (รวม ~90 การแสดงผล/23 วัน) · คปอ. · อับอากาศ · จป.บริหาร · ที่สูง — ร่างเนื้อหา 50 หลักสูตรเตรียมไว้แล้ว",
      "<b>5 หลักสูตรที่ยังไม่ปรากฏเลย</b> (refresh G AIS · Trainer -E · B CP · รถขนส่งน้ำมัน · ผู้ปฏิบัติงาน ถังขนส่งก๊าซธรรมชาติเฉพาะพนักงานรับหรือจ่ายก๊าซธรรมชาติ) — 2 หลักสูตรกรมธุรกิจพลังงานยังไม่มี URL ชื่อหลักสูตร/คำอธิบายในระบบ ต้องเติมข้อมูลก่อน · ที่เหลือคือ refresh/Trainer ที่ขายผ่านลูกค้าองค์กร"
    ],
    "tierRule": "วัดจาก \"คำค้นที่ดีที่สุด\" ของแต่ละหน้าหลักสูตร (คำที่ไม่ใช่ชื่อบริษัท มีการแสดงผล ≥ 3 ครั้ง) ไม่ใช่อันดับเฉลี่ย · ติดอันดับดี = ได้คลิก ≥ 10 หรือมีคำค้นอันดับ ≤ 3 · หน้าแรก = มีคำค้นอันดับ ≤ 10 · ยังไม่ติดหน้าแรก = แสดงผล ≥ 30 ครั้งแต่ไม่มีคำไหนอยู่หน้าแรก · ยังไม่ปรากฏ = แสดงผล < 30 ครั้งใน 23 วัน · หมายเหตุ: ผลค้นหาบนเครื่องของเราเองมักดีกว่าค่าเฉลี่ยจริง เพราะ Google ปรับตามประวัติผู้ใช้"
  },
};
