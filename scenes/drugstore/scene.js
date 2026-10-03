// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "drugstore",
  "title": "藥妝店買東西",
  "en": "At the Drugstore",
  "emoji": "🧴",
  "goal": "學會在藥妝店找藥品與日用品、請店員推薦、詢問成分與過敏、比較價格，並看懂標示與結帳時的問題",
  "speakers": {
    "S": {
      "name": "Store Associate",
      "zh": "店員",
      "avatar": "👩",
      "voice": "f2"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♀️",
      "voice": "f"
    },
    "P": {
      "name": "Pharmacist",
      "zh": "藥師",
      "avatar": "👨‍⚕️",
      "voice": "m3"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "找日用品與保養品",
      "where": "藥妝店的賣場",
      "emoji": "🧴",
      "lines": [
        {
          "s": "Y",
          "en": "Excuse me, could you help me find sunscreen?",
          "zh": "不好意思，可以幫我找防曬乳嗎？"
        },
        {
          "s": "S",
          "en": "Sure. It's in aisle four, next to the lotion.",
          "zh": "可以。在第四走道，在乳液旁邊。"
        },
        {
          "s": "Y",
          "en": "Thanks. Which one do you recommend for sensitive skin?",
          "zh": "謝謝。你推薦哪一個適合敏感肌？"
        },
        {
          "s": "S",
          "en": "This one is fragrance-free and good for sensitive skin. It's SPF fifty.",
          "zh": "這個無香料，適合敏感肌，防曬係數是五十。"
        },
        {
          "s": "Y",
          "en": "Is it waterproof?",
          "zh": "它防水嗎？"
        },
        {
          "s": "S",
          "en": "Yes, it's water-resistant for up to eighty minutes.",
          "zh": "有，防水效果最多維持八十分鐘。"
        },
        {
          "s": "Y",
          "en": "Great. Do you have a smaller size? I'm traveling.",
          "zh": "太好了。你們有小一點的尺寸嗎？我要去旅行。"
        },
        {
          "s": "S",
          "en": "We do. The travel size is on the next shelf, for six ninety-nine.",
          "zh": "有的。旅行尺寸在隔壁的架子上，6.99 元。"
        },
        {
          "s": "Y",
          "en": "Perfect. I'll take that one. Thank you!",
          "zh": "太好了，我要那一個，謝謝！"
        }
      ]
    },
    {
      "title": "問藥師：成藥與過敏",
      "where": "藥局櫃台",
      "emoji": "💊",
      "lines": [
        {
          "s": "Y",
          "en": "Hi, I have a headache and a runny nose. Could you recommend something?",
          "zh": "嗨，我頭痛又流鼻水，可以推薦點什麼嗎？"
        },
        {
          "s": "P",
          "en": "Sure. Do you have any allergies to medications?",
          "zh": "好的。你對藥物有過敏嗎？"
        },
        {
          "s": "Y",
          "en": "I'm allergic to aspirin.",
          "zh": "我對阿斯匹靈過敏。"
        },
        {
          "s": "P",
          "en": "Thanks for telling me. Then avoid products with aspirin. This one has acetaminophen, which is safe for most people.",
          "zh": "謝謝你告訴我。那就要避免含阿斯匹靈的產品。這個含乙醯胺酚，對大多數人都安全。"
        },
        {
          "s": "Y",
          "en": "How often can I take it?",
          "zh": "多久可以吃一次？"
        },
        {
          "s": "P",
          "en": "Every six hours, and no more than four doses a day. Take it with food if your stomach is sensitive.",
          "zh": "每六小時一次，一天不要超過四次。如果胃比較敏感，請配食物吃。"
        },
        {
          "s": "Y",
          "en": "Will it make me sleepy?",
          "zh": "會讓我想睡嗎？"
        },
        {
          "s": "P",
          "en": "This one won't. But the nighttime version will, so don't drive after taking it.",
          "zh": "這個不會。但夜用版會，所以吃了不要開車。"
        },
        {
          "s": "Y",
          "en": "Got it. Thank you so much for your help!",
          "zh": "了解，非常謝謝你的幫忙！"
        }
      ]
    },
    {
      "title": "結帳與優惠",
      "where": "收銀台",
      "emoji": "🧾",
      "lines": [
        {
          "s": "S",
          "en": "Hi! Did you find everything you needed?",
          "zh": "嗨！你需要的東西都找到了嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, thanks. Is the sunscreen on sale?",
          "zh": "找到了，謝謝。防曬乳有特價嗎？"
        },
        {
          "s": "S",
          "en": "Let me check. Yes, it's buy one, get one fifty percent off.",
          "zh": "我看一下。有，買一送半價。"
        },
        {
          "s": "Y",
          "en": "Oh, nice. Then I'll grab another one.",
          "zh": "喔，太好了。那我再拿一個。"
        },
        {
          "s": "S",
          "en": "Sounds good. Do you have a rewards card?",
          "zh": "好的。你有會員卡嗎？"
        },
        {
          "s": "Y",
          "en": "No, I don't. Can I sign up now?",
          "zh": "沒有，我現在可以申請嗎？"
        },
        {
          "s": "S",
          "en": "Sure, just give me your phone number. You'll get points and coupons.",
          "zh": "可以，只要給我你的電話號碼，就能累積點數和拿到折價券。"
        },
        {
          "s": "Y",
          "en": "Okay. And can I get a paper receipt?",
          "zh": "好的。我可以拿紙本收據嗎？"
        },
        {
          "s": "S",
          "en": "Of course. Your total is fourteen thirty. Cash or card?",
          "zh": "當然。總共 14.30 元，付現還是刷卡？"
        },
        {
          "s": "Y",
          "en": "Card, please.",
          "zh": "刷卡，謝謝。"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "Could you help me find sunscreen?",
      "zh": "可以幫我找防曬乳嗎？"
    },
    {
      "en": "Which aisle is the shampoo in?",
      "zh": "洗髮精在哪個走道？"
    },
    {
      "en": "What do you recommend for dry skin?",
      "zh": "乾性肌膚你推薦什麼？"
    },
    {
      "en": "Is this good for sensitive skin?",
      "zh": "這個適合敏感肌嗎？"
    },
    {
      "en": "Is it fragrance-free?",
      "zh": "它無香料嗎？"
    },
    {
      "en": "What's in this? I'm allergic to latex.",
      "zh": "這裡面有什麼？我對乳膠過敏。"
    },
    {
      "en": "Do you have a smaller size?",
      "zh": "你們有小一點的尺寸嗎？"
    },
    {
      "en": "Is this on sale?",
      "zh": "這個有特價嗎？"
    },
    {
      "en": "Is there a cheaper store brand?",
      "zh": "有比較便宜的自有品牌嗎？"
    },
    {
      "en": "I have a headache and a runny nose.",
      "zh": "我頭痛又流鼻水。"
    },
    {
      "en": "Could you recommend something for a cold?",
      "zh": "可以推薦治感冒的藥嗎？"
    },
    {
      "en": "How often can I take it?",
      "zh": "多久可以吃一次？"
    },
    {
      "en": "Is it okay to take this with other medicine?",
      "zh": "可以和其他藥一起吃嗎？"
    },
    {
      "en": "Will it make me sleepy?",
      "zh": "會讓我想睡嗎？"
    },
    {
      "en": "Where is the pharmacy counter?",
      "zh": "藥局櫃台在哪裡？"
    },
    {
      "en": "Do you have a rewards card?",
      "zh": "你有會員卡嗎？"
    },
    {
      "en": "Can I get a paper receipt?",
      "zh": "可以給我紙本收據嗎？"
    },
    {
      "en": "Do I need ID for this?",
      "zh": "買這個需要證件嗎？"
    },
    {
      "en": "Check the expiration date.",
      "zh": "檢查有效日期。"
    },
    {
      "en": "Could I return this if it doesn't work?",
      "zh": "如果沒效，我可以退嗎？"
    }
  ],
  "hear": [
    {
      "en": "Can I help you find something?",
      "zh": "需要我幫你找什麼嗎？",
      "reply": "Yes, where is the sunscreen?",
      "replyZh": "好，防曬乳在哪裡？"
    },
    {
      "en": "It's in aisle four, next to the lotion.",
      "zh": "在第四走道，乳液旁邊。",
      "reply": "Great, thanks!",
      "replyZh": "太好了，謝謝！"
    },
    {
      "en": "What are your symptoms?",
      "zh": "你有什麼症狀？",
      "reply": "I have a headache and a runny nose.",
      "replyZh": "我頭痛又流鼻水。"
    },
    {
      "en": "Do you have any allergies to medications?",
      "zh": "你對藥物有過敏嗎？",
      "reply": "I'm allergic to aspirin.",
      "replyZh": "我對阿斯匹靈過敏。"
    },
    {
      "en": "Take one pill every six hours with food.",
      "zh": "每六小時吃一顆，配食物。",
      "reply": "How many can I take in a day?",
      "replyZh": "一天最多吃幾顆？"
    },
    {
      "en": "This one can make you drowsy.",
      "zh": "這個會讓你昏昏欲睡。",
      "reply": "Do you have one that won't?",
      "replyZh": "有不會的嗎？"
    },
    {
      "en": "We're out of that size, but we have a larger one.",
      "zh": "這個尺寸賣完了，但有大一點的。",
      "reply": "How much is the larger one?",
      "replyZh": "大的多少錢？"
    },
    {
      "en": "It's buy one, get one half off.",
      "zh": "買一送半價。",
      "reply": "Nice. I'll take two.",
      "replyZh": "太好了，我要兩個。"
    },
    {
      "en": "Do you have a rewards card?",
      "zh": "你有會員卡嗎？",
      "reply": "No, can I sign up?",
      "replyZh": "沒有，我可以申請嗎？"
    },
    {
      "en": "Do you need a bag?",
      "zh": "你需要袋子嗎？",
      "reply": "No, thanks. I have my own.",
      "replyZh": "不用，謝謝，我有自己的。"
    }
  ],
  "say": [
    {
      "en": "Excuse me, where can I find band-aids?",
      "zh": "不好意思，哪裡可以找到 OK 繃？"
    },
    {
      "en": "I'm looking for something for allergies.",
      "zh": "我在找過敏用的藥。"
    },
    {
      "en": "Do you have a version without fragrance?",
      "zh": "你們有無香料的版本嗎？"
    },
    {
      "en": "Which one is better for oily skin?",
      "zh": "哪一個比較適合油性肌膚？"
    },
    {
      "en": "Can you tell me what the difference is?",
      "zh": "可以告訴我兩者有什麼不同嗎？"
    },
    {
      "en": "Is this the same as the brand name one?",
      "zh": "這個跟品牌藥一樣嗎？"
    },
    {
      "en": "Could I talk to the pharmacist, please?",
      "zh": "我可以和藥師說話嗎？"
    },
    {
      "en": "Does this have any side effects?",
      "zh": "這個有副作用嗎？"
    },
    {
      "en": "I'd like to return this, please.",
      "zh": "我想退這個。"
    },
    {
      "en": "Sorry, could you say that again?",
      "zh": "不好意思，可以再說一次嗎？"
    }
  ],
  "vocab": [
    {
      "w": "sunscreen",
      "pos": "n.",
      "zh": "防曬乳",
      "ex": "I need sunscreen for the beach.",
      "exzh": "我去海邊需要防曬乳。"
    },
    {
      "w": "lotion",
      "pos": "n.",
      "zh": "乳液",
      "ex": "Do you have unscented lotion?",
      "exzh": "你們有無香料的乳液嗎？"
    },
    {
      "w": "shampoo",
      "pos": "n.",
      "zh": "洗髮精",
      "ex": "Where is the shampoo?",
      "exzh": "洗髮精在哪裡？"
    },
    {
      "w": "band-aid",
      "pos": "n.",
      "zh": "OK 繃",
      "ex": "I need a box of band-aids.",
      "exzh": "我需要一盒 OK 繃。"
    },
    {
      "w": "pain reliever",
      "pos": "n.",
      "zh": "止痛藥",
      "ex": "Where are the pain relievers?",
      "exzh": "止痛藥在哪裡？"
    },
    {
      "w": "cold medicine",
      "pos": "n.",
      "zh": "感冒藥",
      "ex": "I'm looking for cold medicine.",
      "exzh": "我在找感冒藥。"
    },
    {
      "w": "fragrance-free",
      "pos": "adj.",
      "zh": "無香料的",
      "ex": "This soap is fragrance-free.",
      "exzh": "這個肥皂無香料。"
    },
    {
      "w": "sensitive skin",
      "pos": "n.",
      "zh": "敏感肌",
      "ex": "It's good for sensitive skin.",
      "exzh": "它適合敏感肌。"
    },
    {
      "w": "ingredient",
      "pos": "n.",
      "zh": "成分",
      "ex": "Check the ingredients list.",
      "exzh": "請看成分表。"
    },
    {
      "w": "brand name",
      "pos": "n.",
      "zh": "品牌名稱（非學名藥）",
      "ex": "Is the generic as good as the brand name?",
      "exzh": "學名藥和品牌藥一樣好嗎？"
    },
    {
      "w": "expiration date",
      "pos": "n.",
      "zh": "有效日期",
      "ex": "Always check the expiration date.",
      "exzh": "一定要檢查有效日期。"
    },
    {
      "w": "dosage",
      "pos": "n.",
      "zh": "劑量",
      "ex": "Follow the dosage on the label.",
      "exzh": "請依標籤上的劑量服用。"
    }
  ],
  "situations": [
    {
      "title": "😵 店員講太快、用了很多成分名稱",
      "hear": {
        "en": "This has acetaminophen, not ibuprofen, so it's gentler on the stomach, but don't take more than four doses in twenty-four hours.",
        "zh": "（講得很快）這個含乙醯胺酚，不是布洛芬，對胃比較溫和，但二十四小時內不要超過四次。",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you say that a little slower?",
          "zh": "不好意思，可以說慢一點嗎？"
        },
        {
          "en": "So, no more than four a day. Is that right?",
          "zh": "所以一天不要超過四次，對嗎？"
        }
      ],
      "tip": "藥的用法最怕聽錯。把重點用數字複述一遍（four a day），再請藥師看一次標籤，最安全。"
    },
    {
      "title": "🤧 不知道該買哪一種藥",
      "hear": {
        "en": "What are your symptoms?",
        "zh": "你有什麼症狀？"
      },
      "say": [
        {
          "en": "I have a sore throat and a cough, but no fever.",
          "zh": "我喉嚨痛、咳嗽，但沒有發燒。"
        },
        {
          "en": "Which one would you recommend?",
          "zh": "你推薦哪一個？"
        }
      ],
      "tip": "用 I have… 說症狀：a headache（頭痛）、a sore throat（喉嚨痛）、a runny nose（流鼻水）、a cough（咳嗽）、a fever（發燒）。"
    },
    {
      "title": "🌿 對某些成分過敏",
      "say": [
        {
          "en": "I'm allergic to aspirin. Is there any aspirin in this?",
          "zh": "我對阿斯匹靈過敏，這裡面有阿斯匹靈嗎？"
        },
        {
          "en": "Could you check the ingredients for me?",
          "zh": "可以幫我看一下成分嗎？"
        }
      ],
      "tip": "過敏一定要明確說出名字。不確定時請藥師看成分，不要自己猜。"
    },
    {
      "title": "💰 想找便宜一點的",
      "say": [
        {
          "en": "Do you have a cheaper store brand?",
          "zh": "有比較便宜的自有品牌嗎？"
        },
        {
          "en": "Is the generic the same as the brand name?",
          "zh": "學名藥和品牌藥一樣嗎？"
        }
      ],
      "tip": "店家自有品牌（store brand）和學名藥（generic）成分通常相同，價格便宜很多，可以直接問藥師。"
    },
    {
      "title": "🔄 買錯了想退",
      "say": [
        {
          "en": "I bought this by mistake. Could I return it?",
          "zh": "我買錯了，可以退嗎？"
        },
        {
          "en": "I haven't opened it, and I have the receipt.",
          "zh": "我還沒拆封，也有收據。"
        }
      ],
      "tip": "藥品、保養品拆封後通常不能退，沒拆封又有收據多半可以。結帳前先看清楚標示。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "It's in aisle four, next to the lotion.",
      "prompt": "防曬乳在哪裡？",
      "options": [
        "第四走道，乳液旁邊",
        "第十四走道",
        "收銀台旁邊"
      ],
      "answer": 0,
      "note": "aisle four 是第四走道；fourteen 是十四。"
    },
    {
      "type": "選擇回應",
      "audio": "What are your symptoms?",
      "prompt": "你頭痛又流鼻水，最適合怎麼回答？",
      "options": [
        "I have a headache and a runny nose.",
        "I have a cold medicine.",
        "It's in aisle five."
      ],
      "answer": 0,
      "note": "symptoms 是症狀；用 I have… 回答。"
    },
    {
      "type": "選擇回應",
      "audio": "Do you have any allergies to medications?",
      "prompt": "你對阿斯匹靈過敏，最適合怎麼回答？",
      "options": [
        "I'm allergic to aspirin.",
        "I take aspirin every day.",
        "No, I don't have a card."
      ],
      "answer": 0,
      "note": "allergic to… 是對……過敏。"
    },
    {
      "type": "聽數字",
      "audio": "Take one pill every six hours, and no more than four a day.",
      "prompt": "一天最多吃幾顆？",
      "options": [
        "4 顆",
        "6 顆",
        "14 顆"
      ],
      "answer": 0,
      "note": "no more than four 是不超過四顆；every six hours 是每六小時。"
    },
    {
      "type": "聽懂意思",
      "audio": "This one can make you drowsy, so don't drive after taking it.",
      "prompt": "店員提醒你什麼？",
      "options": [
        "吃了不要開車",
        "吃了要多喝水",
        "吃了不要吃飯"
      ],
      "answer": 0,
      "note": "drowsy 是昏昏欲睡。"
    },
    {
      "type": "聽懂意思",
      "audio": "It's buy one, get one half off.",
      "prompt": "現在有什麼優惠？",
      "options": [
        "買一送半價",
        "買二送一",
        "全部打五折"
      ],
      "answer": 0,
      "note": "half off 是半價。"
    },
    {
      "type": "選擇回應",
      "audio": "Do you have a rewards card?",
      "prompt": "你沒有，想申請，最適合怎麼回答？",
      "options": [
        "No, can I sign up now?",
        "Yes, it's on sale.",
        "It's very good."
      ],
      "answer": 0,
      "note": "sign up 是申請、註冊。"
    },
    {
      "type": "聽數字",
      "audio": "Your total is fourteen thirty.",
      "prompt": "總共多少錢？",
      "options": [
        "$14.30",
        "$40.13",
        "$14.03"
      ],
      "answer": 0,
      "note": "fourteen thirty 是 14.30 元。"
    },
    {
      "type": "對話理解",
      "audio": "Hi, I have a sore throat and a cough, but no fever. I'm allergic to aspirin. Could you recommend something?",
      "prompt": "客人想要什麼？",
      "options": [
        "推薦一個適合喉嚨痛咳嗽、且不含阿斯匹靈的藥",
        "買 OK 繃",
        "退藥"
      ],
      "answer": 0,
      "note": "sore throat 是喉嚨痛，cough 是咳嗽。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "Is this sunscreen fragrance-free and good for sensitive skin? And do you have a travel size?",
      "prompt": "客人想知道什麼？",
      "options": [
        "防曬乳是否無香料、適合敏感肌，有無旅行尺寸",
        "防曬乳多少錢",
        "防曬乳在哪裡"
      ],
      "answer": 0,
      "note": "travel size 是旅行用小包裝。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Hi! Can I help you find something?",
      "promptZh": "嗨！需要我幫你找什麼嗎？",
      "hint": "說你在找的東西",
      "expect": "looking for|where|sunscreen|shampoo|lotion|medicine|band|do you have|help",
      "model": "Yes, I'm looking for sunscreen.",
      "modelZh": "好，我在找防曬乳。"
    },
    {
      "prompt": "What are your symptoms?",
      "promptZh": "你有什麼症狀？",
      "hint": "用 I have… 說症狀",
      "expect": "i have|headache|cough|throat|runny|fever|cold|allerg|stomach",
      "model": "I have a headache and a runny nose.",
      "modelZh": "我頭痛又流鼻水。"
    },
    {
      "prompt": "Do you have any allergies to medications?",
      "promptZh": "你對藥物有過敏嗎？",
      "hint": "說對什麼過敏，或說沒有",
      "expect": "allerg|no|none|nothing|nope|aspirin|penicillin",
      "model": "I'm allergic to aspirin.",
      "modelZh": "我對阿斯匹靈過敏。"
    },
    {
      "prompt": "Take one every six hours, with food.",
      "promptZh": "每六小時吃一顆，配食物。",
      "hint": "問一天最多吃幾顆，或問會不會想睡",
      "expect": "how many|how often|sleepy|drowsy|day|okay|got it|thanks|will it",
      "model": "Got it. Will it make me sleepy?",
      "modelZh": "了解，會讓我想睡嗎？"
    },
    {
      "prompt": "This one is fragrance-free and good for sensitive skin.",
      "promptZh": "這個無香料，適合敏感肌。",
      "hint": "問有沒有小一點的尺寸",
      "expect": "smaller|size|travel|cheaper|how much|price|do you have|take",
      "model": "Great. Do you have a smaller size?",
      "modelZh": "太好了，有小一點的尺寸嗎？"
    },
    {
      "prompt": "It's buy one, get one half off right now.",
      "promptZh": "現在買一送半價。",
      "hint": "說你要拿兩個",
      "expect": "two|another|one more|take|nice|great|sure|okay",
      "model": "Nice. I'll take two.",
      "modelZh": "太好了，我要兩個。"
    },
    {
      "prompt": "Do you have a rewards card?",
      "promptZh": "你有會員卡嗎？",
      "hint": "說有或沒有",
      "expect": "yes|yeah|no|don'?t|card|sign up|phone",
      "model": "No, can I sign up now?",
      "modelZh": "沒有，我現在可以申請嗎？"
    },
    {
      "prompt": "Your total is fourteen thirty. Cash or card?",
      "promptZh": "總共 14.30 元，付現還是刷卡？",
      "hint": "說 cash 或 card",
      "expect": "\\b(cash|card|credit|debit|tap|apple pay)\\b",
      "model": "Card, please.",
      "modelZh": "刷卡，謝謝。"
    }
  ],
  "culture": [
    {
      "t": "藥妝店 = 藥局＋雜貨店",
      "d": "美國的藥妝店（如 CVS、Walgreens）同時賣藥、保養品、零食、文具，後方通常有藥局（pharmacy）櫃台。不需要處方箋的成藥放在貨架上自己拿，處方藥要到藥局櫃台領。"
    },
    {
      "t": "成藥要看標籤",
      "d": "成藥（over-the-counter）的標籤上會寫成分、劑量、副作用、有效日期。不確定就直接問藥師，免費而且很樂意解釋。"
    },
    {
      "t": "品牌藥與自有品牌",
      "d": "店家自有品牌（store brand）常常成分和品牌藥一樣，價格便宜很多。可以問 Is the store brand the same as this one?"
    },
    {
      "t": "買藥有數量與年齡限制",
      "d": "某些含偽麻黃鹼的感冒藥要出示證件並限購數量；酒精、菸品要滿 21 歲。結帳被要求 ID 是正常規定，不是針對你。"
    },
    {
      "t": "會員卡與折價券",
      "d": "很多藥妝店要有會員卡才有特價，申請免費，只要電話號碼。結帳時店員會問 Do you have a rewards card? 沒有就說 No, can I sign up?"
    }
  ]
};
