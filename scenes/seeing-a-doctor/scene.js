// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "seeing-a-doctor",
  "title": "看醫生：描述症狀",
  "en": "Health & Medical Care",
  "emoji": "🏥",
  "goal": "前往急診 Urgent Care 掛號填表、向醫生描述發燒脫水與疑似腸胃炎症狀、給予用藥建議。",
  "videos": [
    {
      "id": "44SL8i8h0dg",
      "title": "At the Doctor – English Conversation (Sunshine English)"
    },
    {
      "id": "SV9tcFSOriA",
      "title": "How to Describe Your Symptoms in English – Doctor & Patient Conversation (Elite English Learning)"
    },
    {
      "id": "fXvCqjwPlrY",
      "title": "Learn English at the Doctor: Describe Your Symptoms (SpeakEase English)"
    }
  ],
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
  ],
  "hear": [
    {
      "en": "Hi, what brings you in today?",
      "zh": "嗨，你今天為什麼來看診？",
      "reply": "I think I have a fever and I feel sick.",
      "replyZh": "我想我發燒了，覺得不舒服。"
    },
    {
      "en": "Can I see your photo ID and insurance card?",
      "zh": "我可以看你的身分證件和保險卡嗎？",
      "reply": "Sure. Here you go.",
      "replyZh": "好，在這裡。"
    },
    {
      "en": "Please fill out this form and have a seat.",
      "zh": "請填寫這張表格，然後坐一下。",
      "reply": "Okay. Thank you.",
      "replyZh": "好的，謝謝。"
    },
    {
      "en": "Do you have any allergies to medication?",
      "zh": "你對藥物有過敏嗎？",
      "reply": "No, I don't have any allergies.",
      "replyZh": "沒有，我沒有任何過敏。"
    },
    {
      "en": "What are your symptoms?",
      "zh": "你有什麼症狀？",
      "reply": "I have a headache and a stomachache.",
      "replyZh": "我頭痛，也肚子痛。"
    },
    {
      "en": "How long have you had these symptoms?",
      "zh": "這些症狀持續多久了？",
      "reply": "Since last night.",
      "replyZh": "從昨晚開始。"
    },
    {
      "en": "On a scale of one to ten, how bad is the pain?",
      "zh": "從一到十分，痛的程度是多少？",
      "reply": "About a seven.",
      "replyZh": "大概七分。"
    },
    {
      "en": "The doctor will see you in about fifteen minutes.",
      "zh": "醫生大約十五分鐘後會幫你看診。",
      "reply": "Okay, I'll wait here.",
      "replyZh": "好，我在這裡等。"
    },
    {
      "en": "Your copay is thirty dollars.",
      "zh": "你的自付額是三十元。",
      "reply": "Can I pay by card?",
      "replyZh": "我可以刷卡嗎？"
    },
    {
      "en": "Do you want us to send the prescription to a pharmacy?",
      "zh": "要我們把處方傳到藥局嗎？",
      "reply": "Yes, the CVS on Main Street, please.",
      "replyZh": "好，請傳到主街的 CVS。"
    }
  ],
  "say": [
    {
      "en": "I think I have a fever.",
      "zh": "我想我發燒了。"
    },
    {
      "en": "I've had diarrhea since last night.",
      "zh": "我從昨晚開始拉肚子。"
    },
    {
      "en": "I started getting chills.",
      "zh": "我開始發冷。"
    },
    {
      "en": "I have a bad headache.",
      "zh": "我頭很痛。"
    },
    {
      "en": "I'm not allergic to any medication.",
      "zh": "我沒有對任何藥物過敏。"
    },
    {
      "en": "I ate some leftover pasta last night.",
      "zh": "我昨晚吃了一些剩的義大利麵。"
    },
    {
      "en": "Is it contagious?",
      "zh": "會傳染嗎？"
    },
    {
      "en": "When should I come back if I don't feel better?",
      "zh": "如果沒有好轉，我什麼時候該再回來？"
    }
  ],
  "vocab": [
    {
      "w": "fever",
      "pos": "n.",
      "zh": "發燒",
      "ex": "I've had a fever since yesterday.",
      "exzh": "我從昨天就發燒了。"
    },
    {
      "w": "chills",
      "pos": "n.",
      "zh": "發冷、畏寒",
      "ex": "I have chills and a headache.",
      "exzh": "我發冷又頭痛。"
    },
    {
      "w": "diarrhea",
      "pos": "n.",
      "zh": "拉肚子",
      "ex": "I've had diarrhea all day.",
      "exzh": "我整天都在拉肚子。"
    },
    {
      "w": "symptom",
      "pos": "n.",
      "zh": "症狀",
      "ex": "What are your symptoms?",
      "exzh": "你有哪些症狀？"
    },
    {
      "w": "dehydration",
      "pos": "n.",
      "zh": "脫水",
      "ex": "It's probably dehydration.",
      "exzh": "可能是脫水。"
    },
    {
      "w": "insurance card",
      "pos": "n.",
      "zh": "保險卡",
      "ex": "Please show your insurance card.",
      "exzh": "請出示保險卡。"
    },
    {
      "w": "allergic",
      "pos": "adj.",
      "zh": "過敏的",
      "ex": "I'm allergic to penicillin.",
      "exzh": "我對盤尼西林過敏。"
    },
    {
      "w": "prescription",
      "pos": "n.",
      "zh": "處方（藥）",
      "ex": "The doctor wrote me a prescription.",
      "exzh": "醫生幫我開了處方。"
    },
    {
      "w": "negative / positive",
      "pos": "adj.",
      "zh": "陰性／陽性",
      "ex": "You tested negative for the flu.",
      "exzh": "你的流感檢測是陰性。"
    },
    {
      "w": "urgent care",
      "pos": "n.",
      "zh": "非緊急的急診診所（不用預約）",
      "ex": "Let's go to urgent care.",
      "exzh": "我們去 urgent care 吧。"
    }
  ],
  "situations": [
    {
      "title": "😵 醫生講太快或用很多醫學字",
      "hear": {
        "en": "You're probably dealing with mild gastroenteritis, so rest and stay hydrated.",
        "zh": "（講得很快）你可能是輕微腸胃炎，要多休息、補充水分。",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you explain that in simple words?",
          "zh": "抱歉，可以用簡單的字再解釋一次嗎？"
        },
        {
          "en": "What does that mean?",
          "zh": "那是什麼意思？"
        }
      ],
      "tip": "看病聽不懂一定要問。可以說 Can you write that down? 請醫生寫下來。"
    },
    {
      "title": "💳 沒有美國保險",
      "hear": {
        "en": "Do you have insurance?",
        "zh": "你有保險嗎？"
      },
      "say": [
        {
          "en": "No, I'm an international student. I have travel insurance.",
          "zh": "沒有，我是國際學生。我有旅遊保險。"
        },
        {
          "en": "How much will the visit cost without insurance?",
          "zh": "沒有保險的話，看診大概多少錢？"
        }
      ],
      "tip": "美國看病很貴，沒保險要先問價錢。學校通常有學生保險或校內健康中心。"
    },
    {
      "title": "🕒 要等很久",
      "say": [
        {
          "en": "How long is the wait?",
          "zh": "要等多久？"
        },
        {
          "en": "Is there somewhere I can lie down?",
          "zh": "有地方可以讓我躺一下嗎？"
        }
      ],
      "tip": "Urgent care 不用預約，但要看當天人多不多；很不舒服可以告訴櫃台。"
    },
    {
      "title": "💊 想問怎麼吃藥",
      "say": [
        {
          "en": "How often should I take this medicine?",
          "zh": "這個藥要多久吃一次？"
        },
        {
          "en": "Should I take it with food?",
          "zh": "需要配食物吃嗎？"
        }
      ],
      "tip": "藥袋上通常寫著 twice a day（一天兩次）、with food（隨餐）、before bed（睡前）。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "What brings you in today?",
      "prompt": "對方在問什麼？",
      "options": [
        "你今天為什麼來看診",
        "你住在哪裡",
        "你怎麼來的"
      ],
      "answer": 0,
      "note": "What brings you in? 是「什麼原因讓你來？」"
    },
    {
      "type": "選擇回應",
      "audio": "Do you have any allergies to medication?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "Yes, I take medicine.",
        "No, I'm not allergic to anything.",
        "It's a pill."
      ],
      "answer": 1,
      "note": "allergic = 過敏。"
    },
    {
      "type": "聽懂意思",
      "audio": "Please fill out this form and have a seat.",
      "prompt": "你要做什麼？",
      "options": [
        "付錢離開",
        "直接進診間",
        "填寫表格並坐下等待"
      ],
      "answer": 2,
      "note": "fill out = 填寫；have a seat = 請坐。"
    },
    {
      "type": "選擇回應",
      "audio": "How long have you had these symptoms?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "Since last night.",
        "Yes, I have.",
        "It's a fever."
      ],
      "answer": 0,
      "note": "How long...? 回答 since 或 for。"
    },
    {
      "type": "聽數字",
      "audio": "Your copay is thirty dollars.",
      "prompt": "你要付多少？",
      "options": [
        "$13",
        "$30",
        "$300"
      ],
      "answer": 1,
      "note": "thirty 和 thirteen 重音不同：thirTEEN / THIRty。"
    },
    {
      "type": "對話理解",
      "audio": "Good news: you're negative for COVID and flu. Did you eat any leftover food?",
      "prompt": "檢查結果是什麼？",
      "options": [
        "COVID 陽性",
        "流感陽性",
        "COVID 和流感都是陰性"
      ],
      "answer": 2,
      "note": "negative = 陰性，是好消息。",
      "speaker": "S2"
    },
    {
      "type": "對話理解",
      "audio": "Your headache and chills are from dehydration. Drink electrolyte drinks and avoid dairy.",
      "prompt": "醫生建議你怎麼做？",
      "options": [
        "多喝電解質飲料，避免乳製品",
        "多喝牛奶",
        "吃冰淇淋"
      ],
      "answer": 0,
      "note": "dairy = 乳製品；avoid = 避免。",
      "speaker": "S2"
    },
    {
      "type": "對話理解",
      "audio": "Take one pill twice a day with food. If you don't feel better in three days, come back.",
      "prompt": "要怎麼吃藥？",
      "options": [
        "一天三次，空腹吃",
        "一天兩次，配食物吃",
        "睡前吃一次"
      ],
      "answer": 1,
      "note": "twice a day = 一天兩次。",
      "speaker": "S2"
    }
  ],
  "roleplay": [
    {
      "prompt": "Hi, what brings you in today?",
      "promptZh": "嗨，你今天為什麼來看診？",
      "hint": "說你的主要症狀",
      "expect": "fever|headache|stomach|sick|cough|cold|pain|chills|diarrhea|sore|hurt|feel",
      "model": "I think I have a fever and diarrhea.",
      "modelZh": "我想我發燒又拉肚子。"
    },
    {
      "prompt": "Can I see your photo ID and insurance card?",
      "promptZh": "我可以看你的證件和保險卡嗎？",
      "hint": "把證件拿給櫃台",
      "expect": "here|sure|yes|of course|okay|ok|insurance|id",
      "model": "Sure, here you go.",
      "modelZh": "好，在這裡。"
    },
    {
      "prompt": "How long have you had these symptoms?",
      "promptZh": "這些症狀持續多久了？",
      "hint": "回答時間",
      "expect": "since|for|day|night|week|hour|yesterday|last",
      "model": "Since last night.",
      "modelZh": "從昨晚開始。"
    },
    {
      "prompt": "On a scale of one to ten, how bad is the pain?",
      "promptZh": "從一到十分，你有多痛？",
      "hint": "說一個數字",
      "expect": "one|two|three|four|five|six|seven|eight|nine|ten|\\d",
      "model": "About a seven.",
      "modelZh": "大概七分。"
    },
    {
      "prompt": "Do you have any allergies to medication?",
      "promptZh": "你對藥物有過敏嗎？",
      "hint": "回答有或沒有",
      "expect": "no|not allergic|none|yes|allergic|penicillin",
      "model": "No, I'm not allergic to any medication.",
      "modelZh": "沒有，我對任何藥物都不過敏。"
    },
    {
      "prompt": "The doctor will see you in fifteen minutes.",
      "promptZh": "醫生十五分鐘後會看你。",
      "hint": "道謝並說會等",
      "expect": "okay|ok|thank|sure|wait|fine|great",
      "model": "Okay, thank you. I'll wait here.",
      "modelZh": "好，謝謝，我在這裡等。"
    }
  ],
  "culture": [
    {
      "t": "Urgent care 和 ER 不一樣",
      "d": "輕微的不舒服（發燒、喉嚨痛、扭傷）去 urgent care，不用預約，比較便宜。胸痛、呼吸困難、大量出血才去 ER（急診室）或打 911。"
    },
    {
      "t": "沒有保險看病很貴",
      "d": "美國沒有全民健保，看一次診可能要幾百美元。留學生通常要買學生保險，進診所要出示 insurance card 與 photo ID。"
    },
    {
      "t": "Copay 是自付額",
      "d": "有保險的人每次看診還是要付一小筆 copay（自付額），通常 20～50 美元，櫃台會在看診前或後請你付。"
    },
    {
      "t": "藥要憑處方去藥局領",
      "d": "醫生開 prescription（處方）後，會電子傳到你指定的 pharmacy（藥局），你到了藥局報姓名與生日就能領。"
    }
  ]
};
