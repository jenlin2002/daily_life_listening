// 美式生活館「單元版」的冊別與單元清單。
//
// 結構：冊別（books）→ 單元（units）。一冊可以有任意多個單元，冊數也不限；單元編號（Unit 1、2、3…）
// 就是它在該冊裡的順序，不用手動編號。畫面會自動出現「冊別」按鈕，單元列只顯示選到的那一冊。
//
// 新增單元（做好新場景之後）：
//   1. 場景照 README.md 做好（catalog.js 有登記、scenes/<slug>/ 有 scene.js，catalog 那一行 ready: true）。
//      44 個場景（之後新增的也一樣）已經排進冊別（還沒做好的會顯示「即將推出」），所以做好之後只要把 catalog 的 ready 改成 true，
//      單元版就會自動變成可點。Unit 編號從一開始就固定，不會因為做好的順序而改變。
//   2. 若要新增一個全新的場景：在下面某一冊的 units 最後面加一筆 { slug: '場景資料夾名稱' }。
//      其他欄位都可以省略（title / titleEn / icon / situation / desc），省略時：
//      標題用場景名稱、英文名用場景的 en、說明用場景的 goal。
//      也可以填寫來覆蓋，像舊版 Unit 1–16 那樣有自己的短標題與情境說明。
//   3. 新增一冊：複製整個 { id: ..., name: ..., units: [ ... ] } 區塊，id 用沒用過的數字。
// 忘記做第 2 步也不會消失：catalog.js 裡已完成、卻沒編進任何一冊的場景，會自動出現在最後一冊「更多場景」。
// 順序：新增單元請加在該冊最後面；插在中間會讓後面的 Unit 編號全部往後移（進度紀錄是用 slug 存的，不受影響）。
window.UNIT_BOOKS = [
  {
    "id": 1,
    "name": "第一冊",
    "sub": "大學生活實用美語，舊版 Unit 1–16",
    "units": [
      {
        "slug": "party",
        "title": "認識新朋友",
        "titleEn": "Meeting New Friends",
        "icon": "👋",
        "situation": "去室友的朋友跨年派對",
        "desc": "跨年派對前在宿舍化妝準備，隨後到派對認識新朋友聊家鄉、科系與音樂愛好。"
      },
      {
        "slug": "roommates",
        "title": "家庭對話",
        "titleEn": "Family & Roommates",
        "icon": "🏠",
        "situation": "下課後跟室友聊天煮晚餐",
        "desc": "下課回家討論做家事分工（洗碗、倒垃圾）、煮晚餐、水電工報修與成年後的壓力。"
      },
      {
        "slug": "fast-food",
        "title": "餐廳點餐",
        "titleEn": "Ordering Food",
        "icon": "🌯",
        "situation": "去Chipotle點晚餐＋去Insomnia Cookies買點心",
        "desc": "點選墨西哥捲餅碗（選飯、豆子、肉類配料、加酪梨醬）、刷卡結帳、以及烘焙店買一盒熱餅乾。"
      },
      {
        "slug": "clothing-store",
        "title": "購物與結帳",
        "titleEn": "Shopping & Retail",
        "icon": "👗",
        "situation": "去Forever21買衣服",
        "desc": "進店閒逛、找試衣間試穿洋裝、詢問米色款式、無袖/長裙版型與櫃台刷卡結帳。"
      },
      {
        "slug": "repair-request",
        "title": "住家維修",
        "titleEn": "Home Repairs & AC",
        "icon": "🔧",
        "situation": "家裡冷氣壞掉叫修",
        "desc": "夏天冷氣壓縮機故障、冷媒不足、技工開出分項估價單與考慮長遠換新冷氣。"
      },
      {
        "slug": "hotel",
        "title": "旅行與住宿",
        "titleEn": "Travel & Accommodation",
        "icon": "✈️",
        "situation": "第一次到洛杉磯機場＋旅館 check in",
        "desc": "入境海關問答（目的、天數、住處地址、現金）、飯店櫃台辦理入住、海景套房升級與房卡。"
      },
      {
        "slug": "seeing-a-doctor",
        "title": "健康與醫療",
        "titleEn": "Health & Medical Care",
        "icon": "🏥",
        "situation": "發燒拉肚子掛病求診",
        "desc": "前往急診 Urgent Care 掛號填表、向醫生描述發燒脫水與疑似腸胃炎症狀、給予用藥建議。"
      },
      {
        "slug": "renting-a-car",
        "title": "客訴與抱怨",
        "titleEn": "Complaints & Support",
        "icon": "🚗",
        "situation": "租車結果輪胎壞掉",
        "desc": "高速公路匝道前胎壓燈亮起，緊急致電租車客服尋求拖車救援、趕航班焦慮與賠償爭取。"
      },
      {
        "slug": "small-talk",
        "title": "交朋友閒聊",
        "titleEn": "Small Talk & Making Friends",
        "icon": "🚇",
        "situation": "在地鐵上認識新朋友",
        "desc": "舊金山地鐵售票機前問路、聊素食茶葉進出口生意、邀約攀岩與交換 IG 帳號。"
      },
      {
        "slug": "heart-to-heart",
        "title": "心靈對話",
        "titleEn": "Heart-to-Heart Talk",
        "icon": "☕",
        "situation": "室友說想跟男友分手",
        "desc": "客廳深夜心靈傾訴、失戀療傷安慰、價值觀不合與「天涯何處無芳草」鼓勵。"
      },
      {
        "slug": "blind-date",
        "title": "開玩笑幽默",
        "titleEn": "Humor & Blind Date",
        "icon": "🍕",
        "situation": "嘗試網路約會",
        "desc": "初次相親約會聊天、彼此自嘲破冰、聊養貓（燕尾服貓）、神經科學與 AA 制分帳。"
      },
      {
        "slug": "invitations",
        "title": "生活分享與邀約",
        "titleEn": "Life Updates & Invites",
        "icon": "🗓️",
        "situation": "跟室友的週五閒聊與邀約",
        "desc": "聊論文進度、下班搭車塞車買外帶、朋友邀約週末去海灘爬山、禮貌委婉拒絕邀約（Take a rain check）。"
      },
      {
        "slug": "job-interview",
        "title": "工作與面試",
        "titleEn": "Job Interview & Career",
        "icon": "💼",
        "situation": "去外商應徵行銷主管",
        "desc": "外商行銷經理面試（自我介紹、Amazon 廣告活動經驗、換跑道動機、薪資期待與 401k 福利）。"
      },
      {
        "slug": "coworkers",
        "title": "工作閒聊",
        "titleEn": "Water Cooler Chit-Chat",
        "icon": "☕",
        "situation": "跟同事在洗手間與茶水間閒聊",
        "desc": "聊週末帶小孩去南瓜園、看道奇隊棒球比賽、養寵物與養育孩子的甜蜜混亂。"
      },
      {
        "slug": "news-chat",
        "title": "新聞時事探討",
        "titleEn": "News & Current Affairs",
        "icon": "📰",
        "situation": "跟室友看電視聊新聞與通膨",
        "desc": "聊物價通膨飆升（汽油加滿變貴）、選舉民調、媒體聳動報導與華爾街房市飆漲。"
      },
      {
        "slug": "values-talk",
        "title": "價值觀傳遞",
        "titleEn": "Values & Opinions",
        "icon": "🎬",
        "situation": "跟室友聊童年老卡通與文化敏感性",
        "desc": "聊童年懷舊卡通電影前的免責警告標語、政治正確（Politically Correct）與人際待人禮貌。"
      }
    ]
  },
  {
    "id": 2,
    "name": "第二冊",
    "sub": "日常與旅遊",
    "units": [
      {
        "slug": "getting-a-ride"
      },
      {
        "slug": "bus-and-subway"
      },
      {
        "slug": "asking-directions"
      },
      {
        "slug": "gas-station"
      },
      {
        "slug": "airport-customs"
      },
      {
        "slug": "restaurant"
      },
      {
        "slug": "supermarket"
      },
      {
        "slug": "coffee-shop"
      },
      {
        "slug": "food-delivery"
      },
      {
        "slug": "drugstore"
      },
      {
        "slug": "lost-something"
      },
      {
        "slug": "starbucks"
      }
    ]
  },
  {
    "id": 3,
    "name": "第三冊",
    "sub": "留學生存",
    "units": [
      {
        "slug": "first-day-school"
      },
      {
        "slug": "meeting-teacher"
      },
      {
        "slug": "renting-apartment"
      },
      {
        "slug": "utilities"
      },
      {
        "slug": "phone-plan"
      },
      {
        "slug": "bank-account"
      },
      {
        "slug": "dmv"
      },
      {
        "slug": "doctor-appointment"
      },
      {
        "slug": "post-office"
      },
      {
        "slug": "returns"
      },
      {
        "slug": "online-order"
      }
    ]
  },
  {
    "id": 4,
    "name": "第四冊",
    "sub": "健康與緊急狀況",
    "units": [
      {
        "slug": "pharmacy"
      },
      {
        "slug": "dentist"
      },
      {
        "slug": "urgent-care"
      },
      {
        "slug": "calling-911"
      },
      {
        "slug": "car-accident"
      },
      {
        "slug": "card-problems"
      }
    ]
  }
];
