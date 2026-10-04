// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "hotel",
  "title": "機場入境與飯店入住",
  "en": "Travel & Accommodation",
  "emoji": "✈️",
  "goal": "入境海關問答（目的、天數、住處地址、現金）、飯店櫃台辦理入住、海景套房升級與房卡。",
  "videos": [
    {
      "id": "wyqfYJX23lg",
      "title": "English for Hotel and Tourism: Checking into a Hotel (LinguaTV)"
    },
    {
      "id": "qtC5Rv39IPo",
      "title": "How to Check In at a Hotel in English (Jon Peng English)"
    },
    {
      "id": "MYX7RVOf3Yc",
      "title": "Let’s Learn English at a Hotel! (Learn English with Bob the Canadian)"
    }
  ],
  "speakers": {
    "Y": {
      "name": "Me",
      "zh": "我",
      "avatar": "🙋‍♀️",
      "voice": "f5"
    },
    "S": {
      "name": "Custom",
      "zh": "海關官員",
      "avatar": "👨",
      "voice": "m2"
    },
    "S2": {
      "name": "Hotel front desk",
      "zh": "櫃台經理",
      "avatar": "👩",
      "voice": "f"
    }
  },
  "dialogues": [
    {
      "title": "第一次到洛杉磯機場＋旅館 check in",
      "where": "第一次到洛杉磯機場＋旅館 check in",
      "emoji": "✈️",
      "lines": [
        {
          "s": "S",
          "en": "What are you here for? Where are you staying?",
          "zh": "你來這裡的目的是什麼？你要住在哪裡？"
        },
        {
          "s": "Y",
          "en": "I'm here for a vacation. I'm staying at a hotel for two nights then staying with my old coworker.",
          "zh": "我來這裡度假，我會先住兩晚酒店，然後住老同事家。"
        },
        {
          "s": "S",
          "en": "How much money are you bringing in cash? And what is your profession?",
          "zh": "你帶了多少現金？您的職業是什麼？"
        },
        {
          "s": "Y",
          "en": "A little under $2,000. I am a marketing manager for a tech company.",
          "zh": "不到2000美元。我是科技公司的行銷主管。"
        },
        {
          "s": "S2",
          "en": "Hi, checking in? So I upgraded you to an ocean view suite on the 33rd floor with a Jacuzzi!",
          "zh": "您好，辦理入住嗎？我幫您升級到33樓帶按摩浴缸的海景套房！"
        },
        {
          "s": "Y",
          "en": "Oh, awesome! Two key cards please, and what time does the gym close?",
          "zh": "太棒了！請給我兩張房卡，還有健身房幾點關閉？"
        },
        {
          "s": "S2",
          "en": "It opens daily from 6 in the morning til midnight. Enjoy your vacation!",
          "zh": "每天早上6點到午夜12點開放。祝您旅途愉快！"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "What are you here for?",
      "zh": "你來這裡的目的是什麼？"
    },
    {
      "en": "I'm here for a vacation.",
      "zh": "我來這裡渡假。"
    },
    {
      "en": "Where are you staying?",
      "zh": "你要住在哪裡？"
    },
    {
      "en": "I'm staying at a hotel for two nights then staying with my old coworker.",
      "zh": "我會先住兩晚飯店，然後住在我的老同事家。"
    },
    {
      "en": "The address of the hotel is 216 Los Angeles Blvd.",
      "zh": "飯店的地址是洛杉磯大道216號。"
    },
    {
      "en": "How long do you plan to stay here?",
      "zh": "你預計在這裡待多久？"
    },
    {
      "en": "In total 32 days.",
      "zh": "總共32天。"
    },
    {
      "en": "How much money are you bringing in cash?",
      "zh": "你帶了多少現金？"
    },
    {
      "en": "A little under $2,000.",
      "zh": "不到 2,000 美金。"
    },
    {
      "en": "No need to declare it.",
      "zh": "不需要申報。"
    },
    {
      "en": "What is your profession?",
      "zh": "你的職業是什麼？"
    },
    {
      "en": "I am a marketing manager for a tech company.",
      "zh": "我是科技公司的行銷主管。"
    },
    {
      "en": "You're all set!",
      "zh": "都好了！"
    },
    {
      "en": "Can I see the credit card that you used for your reservation?",
      "zh": "我可以看一下您用來預訂的信用卡嗎？"
    },
    {
      "en": "I was wondering if you have any suite upgrades available today?",
      "zh": "我想問一下今天有套房升級的選項嗎？"
    },
    {
      "en": "I upgraded you to an ocean view suite on the 33rd floor with a Jacuzzi.",
      "zh": "我已經幫您升級到33樓有按摩浴缸的海景套房。"
    },
    {
      "en": "Did you need one or two key cards?",
      "zh": "你需要一張還是兩張房卡？"
    },
    {
      "en": "What time does it open and close?",
      "zh": "它幾點開放和關閉？（營業時間）"
    },
    {
      "en": "There is a $20 per day resort fee.",
      "zh": "每天有20美金的度假村費用。"
    },
    {
      "en": "Enjoy your vacation!",
      "zh": "祝您旅途愉快！"
    }
  ],
  "hear": [
    {
      "en": "May I see your passport, please?",
      "zh": "請給我看你的護照。",
      "reply": "Sure, here you go.",
      "replyZh": "好的，在這裡。"
    },
    {
      "en": "What is the purpose of your visit?",
      "zh": "你來美國的目的是什麼？",
      "reply": "I'm here for a vacation.",
      "replyZh": "我來度假。"
    },
    {
      "en": "How long are you planning to stay?",
      "zh": "你預計待多久？",
      "reply": "About two weeks.",
      "replyZh": "大約兩週。"
    },
    {
      "en": "Where are you staying?",
      "zh": "你要住在哪裡？",
      "reply": "I'm staying at a hotel in downtown Los Angeles.",
      "replyZh": "我住在洛杉磯市中心的一間飯店。"
    },
    {
      "en": "Do you have the address of the hotel?",
      "zh": "你有飯店的地址嗎？",
      "reply": "Yes, it's on my phone. Let me show you.",
      "replyZh": "有，在我手機裡，我給你看。"
    },
    {
      "en": "Are you traveling alone?",
      "zh": "你是一個人旅行嗎？",
      "reply": "No, I'm traveling with my friend.",
      "replyZh": "不是，我跟朋友一起來。"
    },
    {
      "en": "How much cash are you bringing with you?",
      "zh": "你帶了多少現金？",
      "reply": "A little under two thousand dollars.",
      "replyZh": "不到兩千美元。"
    },
    {
      "en": "What do you do for work?",
      "zh": "你的職業是什麼？",
      "reply": "I'm a marketing manager.",
      "replyZh": "我是行銷主管。"
    },
    {
      "en": "Do you have anything to declare?",
      "zh": "你有要申報的物品嗎？",
      "reply": "No, nothing to declare.",
      "replyZh": "沒有，沒有要申報的。"
    },
    {
      "en": "Welcome to the United States. Enjoy your stay!",
      "zh": "歡迎來到美國，祝你旅途愉快！",
      "reply": "Thank you!",
      "replyZh": "謝謝！"
    }
  ],
  "say": [
    {
      "en": "Here is my passport.",
      "zh": "這是我的護照。"
    },
    {
      "en": "I'm here for a vacation.",
      "zh": "我來度假。"
    },
    {
      "en": "I'm staying at a hotel for two nights.",
      "zh": "我會住飯店兩晚。"
    },
    {
      "en": "I'm checking in. The reservation is under Lin.",
      "zh": "我要辦理入住，訂房人姓 Lin。"
    },
    {
      "en": "Could I have two key cards, please?",
      "zh": "可以給我兩張房卡嗎？"
    },
    {
      "en": "What time does the gym close?",
      "zh": "健身房幾點關門？"
    },
    {
      "en": "Is breakfast included?",
      "zh": "有含早餐嗎？"
    },
    {
      "en": "What's the Wi-Fi password?",
      "zh": "Wi-Fi 密碼是什麼？"
    }
  ],
  "vocab": [
    {
      "w": "passport",
      "pos": "n.",
      "zh": "護照",
      "ex": "Please show your passport.",
      "exzh": "請出示護照。"
    },
    {
      "w": "customs",
      "pos": "n.",
      "zh": "海關",
      "ex": "We went through customs.",
      "exzh": "我們通過了海關。"
    },
    {
      "w": "declare",
      "pos": "v.",
      "zh": "申報（物品、現金）",
      "ex": "Do you have anything to declare?",
      "exzh": "你有東西要申報嗎？"
    },
    {
      "w": "purpose of visit",
      "pos": "n.",
      "zh": "入境目的",
      "ex": "What's the purpose of your visit?",
      "exzh": "你入境的目的是什麼？"
    },
    {
      "w": "check in / check out",
      "pos": "phr. v.",
      "zh": "辦理入住／退房",
      "ex": "What time is check-out?",
      "exzh": "幾點退房？"
    },
    {
      "w": "reservation",
      "pos": "n.",
      "zh": "訂房、預約",
      "ex": "I have a reservation under Lin.",
      "exzh": "我用 Lin 這個名字訂了房。"
    },
    {
      "w": "key card",
      "pos": "n.",
      "zh": "房卡",
      "ex": "I lost my key card.",
      "exzh": "我弄丟房卡了。"
    },
    {
      "w": "upgrade",
      "pos": "n./v.",
      "zh": "升級",
      "ex": "We upgraded you to a suite.",
      "exzh": "我們幫你升級成套房。"
    },
    {
      "w": "resort fee",
      "pos": "n.",
      "zh": "度假村費（住宿額外收的設施費）",
      "ex": "There's a twenty-dollar resort fee.",
      "exzh": "要收二十元度假村費。"
    },
    {
      "w": "front desk",
      "pos": "n.",
      "zh": "櫃台",
      "ex": "Call the front desk if you need anything.",
      "exzh": "有需要就打電話到櫃台。"
    }
  ],
  "situations": [
    {
      "title": "😵 官員問得太快",
      "hear": {
        "en": "What's the purpose of your visit and how long will you be staying?",
        "zh": "（講得很快）你的入境目的是什麼，要待多久？",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you repeat the question, please?",
          "zh": "抱歉，可以請你再說一次嗎？"
        },
        {
          "en": "Vacation. I'll stay for two weeks.",
          "zh": "度假，我會待兩週。"
        }
      ],
      "tip": "入境時不用緊張，一次回答一個問題就好，簡短清楚最好。"
    },
    {
      "title": "🛄 行李沒有出現",
      "say": [
        {
          "en": "Excuse me, my suitcase didn't come out. Who can I talk to?",
          "zh": "不好意思，我的行李箱沒出來，我可以找誰？"
        },
        {
          "en": "Here is my baggage claim tag.",
          "zh": "這是我的行李託運單。"
        }
      ],
      "tip": "行李遺失先去航空公司的 baggage service office，帶著託運單（claim tag）填表。"
    },
    {
      "title": "🛏️ 房間和預期不一樣",
      "say": [
        {
          "en": "Excuse me, I booked a room with two beds, but this one has one.",
          "zh": "不好意思，我訂的是兩張床的房間，這間只有一張。"
        },
        {
          "en": "Could we switch to a different room?",
          "zh": "可以換一間房嗎？"
        }
      ],
      "tip": "有問題先打給或走到 front desk 說明，通常會幫你換房。"
    },
    {
      "title": "🔑 房卡刷不開",
      "say": [
        {
          "en": "My key card isn't working. Could you reprogram it?",
          "zh": "我的房卡刷不開，可以重新設定嗎？"
        },
        {
          "en": "I'm in room 3312.",
          "zh": "我住 3312 號房。"
        }
      ],
      "tip": "房卡靠近手機或其他卡片容易消磁，刷不開到櫃台重設就好，不用付錢。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "What is the purpose of your visit?",
      "prompt": "官員在問什麼？",
      "options": [
        "你來美國做什麼",
        "你住在哪裡",
        "你帶多少錢"
      ],
      "answer": 0,
      "note": "purpose = 目的；visit = 拜訪、到訪。"
    },
    {
      "type": "選擇回應",
      "audio": "How long are you planning to stay?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "At a hotel.",
        "About two weeks.",
        "For a vacation."
      ],
      "answer": 1,
      "note": "How long 問停留多久，回答 two weeks。"
    },
    {
      "type": "聽懂意思",
      "audio": "Do you have anything to declare?",
      "prompt": "官員在問什麼？",
      "options": [
        "有沒有帶證件",
        "有沒有帶孩子",
        "有沒有要申報的物品"
      ],
      "answer": 2,
      "note": "declare = 申報；海關常問有沒有帶食物、現金、禮物。"
    },
    {
      "type": "選擇回應",
      "audio": "Where are you staying?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "At a hotel downtown.",
        "For two weeks.",
        "I'm from Taiwan."
      ],
      "answer": 0,
      "note": "Where are you staying? 要回答住的地方。"
    },
    {
      "type": "聽數字",
      "audio": "I upgraded you to an ocean-view suite on the thirty-third floor.",
      "prompt": "你的房間在幾樓？",
      "options": [
        "13 樓",
        "33 樓",
        "30 樓"
      ],
      "answer": 1,
      "note": "thirty-third = 第 33；thirteen 和 thirty 要小心分辨。",
      "speaker": "S2"
    },
    {
      "type": "對話理解",
      "audio": "It's a twenty-dollar resort fee per day, and check-out is at eleven in the morning.",
      "prompt": "退房時間是什麼時候？",
      "options": [
        "中午十二點",
        "晚上十一點",
        "早上十一點"
      ],
      "answer": 2,
      "note": "check-out is at eleven in the morning。",
      "speaker": "S2"
    },
    {
      "type": "對話理解",
      "audio": "The gym is on the fifth floor and it's open from six in the morning until midnight.",
      "prompt": "健身房幾點關？",
      "options": [
        "午夜十二點",
        "晚上十點",
        "早上六點"
      ],
      "answer": 0,
      "note": "midnight = 午夜十二點。",
      "speaker": "S2"
    },
    {
      "type": "選擇回應",
      "audio": "Did you need one or two key cards?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "Yes, I'm a key.",
        "Two, please.",
        "In the room."
      ],
      "answer": 1,
      "note": "one or two? 要回答數量。",
      "speaker": "S2"
    }
  ],
  "roleplay": [
    {
      "prompt": "May I see your passport, please?",
      "promptZh": "請給我看你的護照。",
      "hint": "拿出護照給官員",
      "expect": "here|sure|passport|of course|yes",
      "model": "Sure, here you go.",
      "modelZh": "好的，在這裡。"
    },
    {
      "prompt": "What is the purpose of your visit?",
      "promptZh": "你來美國的目的是什麼？",
      "hint": "說出你的目的",
      "expect": "vacation|holiday|travel|visit|tour|study|business|conference|friend",
      "model": "I'm here for a vacation.",
      "modelZh": "我來度假。"
    },
    {
      "prompt": "How long are you planning to stay?",
      "promptZh": "你預計待多久？",
      "hint": "說出天數或週數",
      "expect": "day|week|month|night|two|three|four|five|ten",
      "model": "I'll stay for two weeks.",
      "modelZh": "我會待兩週。"
    },
    {
      "prompt": "Where are you staying?",
      "promptZh": "你要住在哪裡？",
      "hint": "說出飯店或住處",
      "expect": "hotel|stay|friend|airbnb|downtown|address|street",
      "model": "I'm staying at a hotel downtown.",
      "modelZh": "我住在市中心的飯店。"
    },
    {
      "prompt": "Do you have anything to declare?",
      "promptZh": "你有要申報的物品嗎？",
      "hint": "回答沒有（或有）",
      "expect": "no|nothing|nope|yes|food|gift|cash",
      "model": "No, nothing to declare.",
      "modelZh": "沒有，沒有要申報的。"
    },
    {
      "prompt": "Welcome to the United States. Enjoy your stay!",
      "promptZh": "歡迎來到美國，祝你旅途愉快！",
      "hint": "道謝",
      "expect": "thank|thanks",
      "model": "Thank you!",
      "modelZh": "謝謝！"
    }
  ],
  "culture": [
    {
      "t": "入境問答很短，誠實簡單回答",
      "d": "美國海關官員 (CBP) 最常問：入境目的、停留多久、住哪裡。直接看著對方，簡短回答即可。不要開玩笑，也不要說謊。"
    },
    {
      "t": "現金超過一萬美元要申報",
      "d": "帶超過 10,000 美元（含等值外幣）入境，一定要向海關申報。像 under $2,000（不到兩千）就不用申報。水果、肉類、種子不能帶入境。"
    },
    {
      "t": "飯店入住與退房",
      "d": "下午三、四點才能 check-in，退房通常在中午前，通常是早上十一點或十二點。可以先把行李寄放在櫃台。"
    },
    {
      "t": "房費之外的費用",
      "d": "有些飯店會另外收 resort fee（度假村費）、停車費。訂房時看清楚 total price，到櫃台再問 Are there any additional fees?。"
    }
  ]
};
