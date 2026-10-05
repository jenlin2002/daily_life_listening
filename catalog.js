// 美式生活館目錄。新增生活區或場景，只要改這個檔案。
//
// zones：生活區。id 不能重複；order 決定顯示順序（數字越小越前面，之後可以插入 15、25 這種中間值）。
// scenes：場景。
//   slug    場景資料夾名稱（英文小寫加減號），對應 scenes/<slug>/。建立後不要再改，否則網址和練習紀錄會對不起來。
//   zone    屬於哪個生活區（填 zones 的 id）。
//   order   在生活區裡的順序。
//   title / en   中英文名稱。
//   tags    分類標籤，目錄頁會自動產生篩選按鈕，例如 日常、旅遊、留學、工作。
//   season  第幾季（可省略；目前沒有場景使用。有填的話，目錄頁會自動多出「第N季」篩選按鈕和卡片標籤）。
//   level   難度：1 入門、2 基礎、3 進階（可省略）。
//   ready   true 表示已經做好可以點進去；false 會顯示「即將推出」。
window.LIFE_CATALOG = {
  zones: [
    { id: 'transport', order: 10, emoji: '🚗', name: '交通出行' },
    { id: 'housing',   order: 20, emoji: '🏠', name: '住的地方' },
    { id: 'food',      order: 30, emoji: '🍔', name: '吃' },
    { id: 'shopping',  order: 40, emoji: '🛍️', name: '購物' },
    { id: 'money',     order: 50, emoji: '🏦', name: '錢與證件' },
    { id: 'health',    order: 60, emoji: '🩺', name: '健康' },
    { id: 'school',    order: 70, emoji: '🎒', name: '學校與工作' },
    { id: 'social',    order: 80, emoji: '💬', name: '社交與緊急狀況' }
  ],
  scenes: [
    { slug: 'airport-customs',   zone: 'transport', order: 10, title: '機場入境與海關', en: 'Airport & Customs', tags: ['旅遊', '留學'], level: 2, ready: true },
    { slug: 'renting-a-car', zone: 'transport', order: 20, title: '租車與客訴：輪胎壞了', en: 'Renting a Car & Complaints', tags: ['旅遊', '大學生活'], level: 3, ready: true },
    { slug: 'getting-a-ride', zone: 'transport', order: 30, title: '叫 Uber', en: 'Getting a Ride', tags: ['日常', '旅遊'], level: 1, ready: true },
    { slug: 'gas-station',       zone: 'transport', order: 40, title: '加油站自助加油', en: 'At the Gas Station', tags: ['旅遊'], level: 2, ready: true },
    { slug: 'bus-and-subway',    zone: 'transport', order: 50, title: '搭公車與地鐵', en: 'Taking the Bus & Subway', tags: ['日常', '旅遊'], level: 1, ready: true },
    { slug: 'asking-directions', zone: 'transport', order: 60, title: '問路', en: 'Asking for Directions', tags: ['日常', '旅遊'], level: 1, ready: true },

    { slug: 'hotel', zone: 'housing', order: 10, title: '機場入境與飯店入住', en: 'Travel & Accommodation', tags: ['旅遊', '大學生活'], level: 2, ready: true },
    { slug: 'renting-apartment', zone: 'housing', order: 20, title: '看房與租約', en: 'Renting an Apartment', tags: ['留學'], level: 3, ready: true },
    { slug: 'repair-request', zone: 'housing', order: 30, title: '報修：冷氣壞了', en: 'Home Repairs & AC', tags: ['留學', '日常', '大學生活'], level: 2, ready: true },
    { slug: 'utilities',         zone: 'housing', order: 40, title: '開通水電與網路', en: 'Setting Up Utilities', tags: ['留學'], level: 3, ready: true },
    { slug: 'roommates', zone: 'housing', order: 50, title: '和室友相處：一起煮晚餐', en: 'Family & Roommates', tags: ['日常', '留學', '大學生活'], level: 2, ready: true },

    { slug: 'fast-food',         zone: 'food', order: 10, title: '速食點餐', en: 'Ordering Fast Food', tags: ['日常', '旅遊', '大學生活'], level: 1, ready: true },
    { slug: 'restaurant',        zone: 'food', order: 20, title: '餐廳用餐與小費', en: 'Eating Out & Tipping', tags: ['日常', '旅遊'], level: 2, ready: true },
    { slug: 'supermarket',       zone: 'food', order: 30, title: '超市購物', en: 'At the Supermarket', tags: ['日常'], level: 1, ready: true },
    { slug: 'coffee-shop',       zone: 'food', order: 40, title: '咖啡店點飲料', en: 'At the Coffee Shop', tags: ['日常', '旅遊'], level: 1, ready: true },
    { slug: 'starbucks',         zone: 'food', order: 45, title: '星巴克點餐：菜單與客製化', en: 'Ordering at Starbucks', tags: ['日常', '旅遊'], level: 2, ready: true },
    { slug: 'food-delivery',     zone: 'food', order: 50, title: '外送 App 與外帶', en: 'Food Delivery & Takeout', tags: ['日常'], level: 2, ready: true },

    { slug: 'returns',           zone: 'shopping', order: 10, title: '退換貨', en: 'Returns & Exchanges', tags: ['日常'], level: 2, ready: true },
    { slug: 'clothing-store', zone: 'shopping', order: 20, title: '服飾店購物與結帳', en: 'Shopping & Retail', tags: ['日常', '旅遊', '大學生活'], level: 1, ready: true },
    { slug: 'phone-plan',        zone: 'shopping', order: 30, title: '辦手機門號', en: 'Getting a Phone Plan', tags: ['留學'], level: 3, ready: true },
    { slug: 'online-order',      zone: 'shopping', order: 40, title: '網購包裹出問題', en: 'Online Order Problems', tags: ['日常'], level: 2, ready: true },
    { slug: 'drugstore',         zone: 'shopping', order: 50, title: '藥妝店買東西', en: 'At the Drugstore', tags: ['日常', '旅遊'], level: 1, ready: true },

    { slug: 'bank-account',      zone: 'money', order: 10, title: '銀行開戶', en: 'Opening a Bank Account', tags: ['留學'], level: 3, ready: true },
    { slug: 'card-problems',     zone: 'money', order: 20, title: '卡片被盜刷或刷不過', en: 'Card Problems', tags: ['日常', '旅遊'], level: 3, ready: true },
    { slug: 'post-office',       zone: 'money', order: 30, title: '郵局寄包裹', en: 'At the Post Office', tags: ['日常'], level: 2, ready: true },
    { slug: 'dmv',               zone: 'money', order: 40, title: 'DMV 考駕照', en: 'At the DMV', tags: ['留學'], level: 3, ready: true },

    { slug: 'seeing-a-doctor', zone: 'health', order: 10, title: '看醫生：描述症狀', en: 'Health & Medical Care', tags: ['日常', '旅遊', '留學', '大學生活'], level: 2, ready: true },
    { slug: 'pharmacy',          zone: 'health', order: 20, title: '藥局領處方藥', en: 'At the Pharmacy', tags: ['日常'], level: 2, ready: true },
    { slug: 'doctor-appointment',zone: 'health', order: 30, title: '預約看診與保險', en: 'Making an Appointment', tags: ['留學'], level: 3, ready: true },
    { slug: 'urgent-care',       zone: 'health', order: 40, title: '急診與 Urgent Care', en: 'Urgent Care & the ER', tags: ['旅遊', '留學'], level: 3, ready: true },
    { slug: 'dentist',           zone: 'health', order: 50, title: '看牙醫', en: 'At the Dentist', tags: ['日常'], level: 2, ready: true },

    { slug: 'first-day-school',  zone: 'school', order: 10, title: '新生報到與選課', en: 'First Day at School', tags: ['留學'], level: 2, ready: true },
    { slug: 'meeting-teacher',   zone: 'school', order: 20, title: '和老師約時間', en: 'Meeting a Teacher', tags: ['留學'], level: 2, ready: true },
    { slug: 'job-interview', zone: 'school', order: 30, title: '工作面試', en: 'Job Interview & Career', tags: ['工作', '大學生活'], level: 3, ready: true },
    { slug: 'coworkers', zone: 'school', order: 40, title: '和同事閒聊', en: 'Water Cooler Chit-Chat', tags: ['工作', '大學生活'], level: 2, ready: true },

    { slug: 'small-talk', zone: 'social', order: 10, title: 'Small Talk：在地鐵上交朋友', en: 'Small Talk & Making Friends', tags: ['日常', '大學生活'], level: 1, ready: true },
    { slug: 'lost-something',    zone: 'social', order: 20, title: '遺失物品求助', en: 'Lost Something', tags: ['旅遊', '日常'], level: 2, ready: true },
    { slug: 'invitations', zone: 'social', order: 30, title: '生活分享與邀約', en: 'Life Updates & Invites', tags: ['日常', '大學生活'], level: 1, ready: true },
    { slug: 'party', zone: 'social', order: 40, title: '參加派對：認識新朋友', en: 'Meeting New Friends at a Party', tags: ['日常', '大學生活'], level: 2, ready: true },
    { slug: 'calling-911',       zone: 'social', order: 50, title: '打 911 求救', en: 'Calling 911', tags: ['旅遊', '日常'], level: 3, ready: true },
    { slug: 'car-accident',      zone: 'social', order: 60, title: '小車禍處理', en: 'A Minor Car Accident', tags: ['旅遊'], level: 3, ready: true },
    { slug: 'heart-to-heart', zone: 'social', order: 70, title: '心靈對話：陪室友聊心事', en: 'Heart-to-Heart Talk', tags: ['成人', '大學生活'], level: 3, ready: true },
    { slug: 'blind-date', zone: 'social', order: 80, title: '開玩笑與幽默：網路約會', en: 'Humor & Blind Date', tags: ['成人', '大學生活'], level: 3, ready: true },
    { slug: 'news-chat', zone: 'social', order: 90, title: '聊新聞與時事', en: 'News & Current Affairs', tags: ['大學生活'], level: 3, ready: true },
    { slug: 'values-talk', zone: 'social', order: 100, title: '聊價值觀與文化', en: 'Values & Opinions', tags: ['大學生活'], level: 3, ready: true }
  ]
};
