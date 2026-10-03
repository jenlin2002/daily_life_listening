// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "seeing-a-doctor",
  "title": "看醫生：描述症狀",
  "en": "Health & Medical Care",
  "emoji": "🏥",
  "goal": "前往急診 Urgent Care 掛號填表、向醫生描述發燒脫水與疑似腸胃炎症狀、給予用藥建議。",
  "speakers": {
    "Y": {
      "name": "Me",
      "zh": "我",
      "avatar": "🙋‍♀️",
      "voice": "f"
    },
    "S": {
      "name": "Receptionist",
      "zh": "櫃台",
      "avatar": "👩",
      "voice": "f2"
    },
    "S2": {
      "name": "Doctor",
      "zh": "醫生",
      "avatar": "👨",
      "voice": "m3"
    }
  },
  "dialogues": [
    {
      "title": "發燒拉肚子掛病求診",
      "where": "發燒拉肚子掛病求診",
      "emoji": "🏥",
      "lines": [
        {
          "s": "S",
          "en": "Hi, what brings you here today? I will need your photo ID and insurance card.",
          "zh": "您好今天哪裡不舒服？我需要看您的證件和保險卡。"
        },
        {
          "s": "Y",
          "en": "I think I have a fever and diarrhea since last night. I started getting chills.",
          "zh": "我好像發燒拉肚子了，昨天開始發冷。"
        },
        {
          "s": "S2",
          "en": "Good news: you're negative for COVID and flu. Did you eat any leftover food?",
          "zh": "好消息：流感與新冠都是陰性。妳最近有吃隔夜剩菜嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, some leftover pasta. Not allergic to any medications.",
          "zh": "有，吃了些剩義大利麵。我對藥物沒有過敏。"
        },
        {
          "s": "S2",
          "en": "Headaches and chills are from dehydration. Drink electrolyte drinks and avoid dairy. Feel better!",
          "zh": "頭痛發冷主要來自脫水。多喝電解質水、別吃乳製品。祝早日康復！"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "What brings you here today?",
      "zh": "今天哪裡不舒服？"
    },
    {
      "en": "I think I have a fever.",
      "zh": "我覺得我發燒了。"
    },
    {
      "en": "I will need your (picture) id.",
      "zh": "我需要您的身份證件。"
    },
    {
      "en": "Date of birth?",
      "zh": "出生日期？"
    },
    {
      "en": "I also need the insurance card.",
      "zh": "我也需要你的醫療保險卡。"
    },
    {
      "en": "Fill out this top portion of the form, sign, and put down the date.",
      "zh": "請填寫表格上半部，簽名並填上日期。"
    },
    {
      "en": "Take a seat there and the doctor will call you.",
      "zh": "請在那邊坐一下，醫生會叫您。"
    },
    {
      "en": "I've been having a fever since yesterday, diarrhea too.",
      "zh": "我從昨天開始發燒，還有拉肚子。"
    },
    {
      "en": "At that point, I hadn't eaten anything for 30 hours.",
      "zh": "當時我已經大概30個小時沒吃東西了。"
    },
    {
      "en": "I started getting chills.",
      "zh": "我開始發冷。"
    },
    {
      "en": "Any exposure to someone with a flu?",
      "zh": "你是否有接觸有流感的人？"
    },
    {
      "en": "You're negative for covid, and also negative for the flu.",
      "zh": "你的 COVID 和流感檢測結果都是陰性的。"
    },
    {
      "en": "Is it associated with anything that you ate?",
      "zh": "會不會是跟你吃的東西有關？"
    },
    {
      "en": "I just had some leftover pasta from a restaurant.",
      "zh": "我只是吃了餐廳的義大利麵剩菜。"
    },
    {
      "en": "Are you allergic to any medications?",
      "zh": "你有對任何藥物過敏嗎？"
    },
    {
      "en": "Your heart rate is a bit elevated.",
      "zh": "你的心率有點偏高。"
    },
    {
      "en": "Give them a stool sample.",
      "zh": "給他們送糞便樣本。"
    },
    {
      "en": "Chills and headaches are primarily caused by dehydration.",
      "zh": "發冷和頭痛主要是因為脫水造成的。"
    },
    {
      "en": "Try to stay away from spicy food, greasy food, and dairy.",
      "zh": "盡量避免辛辣食物、油膩食物和乳製品。"
    },
    {
      "en": "Electrolyte drinks will help you a lot. Feel better!",
      "zh": "電解質飲料對你會有很大的幫助。希望你早日康復！"
    }
  ]
};
