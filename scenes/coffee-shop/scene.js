// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "coffee-shop",
  "title": "咖啡店點飲料",
  "en": "At the Coffee Shop",
  "emoji": "☕",
  "goal": "學會在咖啡店點客製化飲料（尺寸、冰熱、奶類、糖度）、點餐點、回答店員的姓名與付款問題，並處理做錯或要換的情況",
  "videos": [
    {
      "id": "jhEtBuuYNj4",
      "title": "How To Order Coffee In English（Ariannita la Gringa）"
    },
    {
      "id": "2VeQTuSSiI0",
      "title": "English Conversation at a Café (Coffee Shop) | Useful Phrases（English Panda）"
    },
    {
      "id": "SLC1Rdaxdj8",
      "title": "How to Order Coffee in English - Spoken English Lesson（Oxford Online English）"
    }
  ],
  "speakers": {
    "S": {
      "name": "Barista",
      "zh": "咖啡師",
      "avatar": "👨‍🍳",
      "voice": "m2"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♀️",
      "voice": "f5"
    },
    "C": {
      "name": "Cashier",
      "zh": "收銀員",
      "avatar": "👩",
      "voice": "f"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "點一杯客製化的咖啡",
      "where": "咖啡店的櫃台",
      "emoji": "🧋",
      "lines": [
        {
          "s": "C",
          "en": "Hi there! What can I get started for you?",
          "zh": "嗨！先幫你點什麼呢？"
        },
        {
          "s": "Y",
          "en": "Hi. Can I get a medium iced latte, please?",
          "zh": "嗨，我要一杯中杯冰拿鐵。"
        },
        {
          "s": "C",
          "en": "Sure. What kind of milk would you like? We have whole, skim, oat, and almond.",
          "zh": "好的。你要什麼奶？我們有全脂、脫脂、燕麥和杏仁。"
        },
        {
          "s": "Y",
          "en": "Oat milk, please. And could I get it with less ice?",
          "zh": "燕麥奶，謝謝。可以少冰嗎？"
        },
        {
          "s": "C",
          "en": "No problem. Would you like any syrup, like vanilla or caramel?",
          "zh": "沒問題。要加糖漿嗎，像是香草或焦糖？"
        },
        {
          "s": "Y",
          "en": "One pump of vanilla, please.",
          "zh": "一泵香草糖漿，謝謝。"
        },
        {
          "s": "C",
          "en": "Got it. Anything to eat today? We have fresh blueberry muffins.",
          "zh": "了解。今天要吃點什麼嗎？我們有新鮮的藍莓瑪芬。"
        },
        {
          "s": "Y",
          "en": "Yes, I'll have one blueberry muffin, too.",
          "zh": "好，我也要一個藍莓瑪芬。"
        },
        {
          "s": "C",
          "en": "Great. That'll be eight fifty. Is that for here or to go?",
          "zh": "好的，總共 8.5 元。內用還是外帶？"
        },
        {
          "s": "Y",
          "en": "For here, please.",
          "zh": "內用，謝謝。"
        }
      ]
    },
    {
      "title": "付款與等取餐",
      "where": "結帳櫃台與取餐區",
      "emoji": "📣",
      "lines": [
        {
          "s": "C",
          "en": "Can I get a name for the order?",
          "zh": "可以留個名字嗎？"
        },
        {
          "s": "Y",
          "en": "Sure, it's Melissa. M-E-L-I-S-S-A.",
          "zh": "好，叫 Melissa，拼法是 M-E-L-I-S-S-A。"
        },
        {
          "s": "C",
          "en": "Thanks, Melissa. Would you like to pay by card or cash?",
          "zh": "謝謝，Melissa。你要刷卡還是付現？"
        },
        {
          "s": "Y",
          "en": "Card, please. Can I tap?",
          "zh": "刷卡，謝謝。可以感應嗎？"
        },
        {
          "s": "C",
          "en": "Yes, go ahead. Would you like to add a tip?",
          "zh": "可以，請感應。你要加小費嗎？"
        },
        {
          "s": "Y",
          "en": "Sure, I'll add one dollar.",
          "zh": "好，我加一塊錢。"
        },
        {
          "s": "C",
          "en": "Thank you! Your drink will be ready at the end of the counter.",
          "zh": "謝謝！你的飲料會在櫃台的盡頭備好。"
        },
        {
          "s": "S",
          "en": "Large oat latte for Melissa!",
          "zh": "Melissa 的大杯燕麥拿鐵好了！"
        },
        {
          "s": "Y",
          "en": "Oh, that's mine, but I ordered a medium.",
          "zh": "喔，那是我的，不過我點的是中杯。"
        },
        {
          "s": "S",
          "en": "Sorry about that. Let me remake it as a medium for you.",
          "zh": "抱歉，我幫你重做成中杯。"
        }
      ]
    },
    {
      "title": "飲料做錯或想換",
      "where": "取餐區",
      "emoji": "🔁",
      "lines": [
        {
          "s": "Y",
          "en": "Excuse me, I think there's a mistake. I ordered it with oat milk, but this tastes like regular milk.",
          "zh": "不好意思，好像弄錯了，我點的是燕麥奶，但這喝起來像一般牛奶。"
        },
        {
          "s": "S",
          "en": "Oh, I'm so sorry. Let me double-check. Yes, this is made with whole milk. I'll remake it.",
          "zh": "喔，真的很抱歉。我再確認一下，對，這是用全脂牛奶做的，我幫你重做。"
        },
        {
          "s": "Y",
          "en": "Thank you. I have a dairy allergy, so I need to be careful.",
          "zh": "謝謝。我對乳製品過敏，所以必須小心。"
        },
        {
          "s": "S",
          "en": "Understood. I'll use a clean pitcher this time.",
          "zh": "了解，這次我會用乾淨的奶壺。"
        },
        {
          "s": "Y",
          "en": "I really appreciate it. Could I also get a lid and a straw?",
          "zh": "真的很感謝。我也可以拿一個蓋子和吸管嗎？"
        },
        {
          "s": "S",
          "en": "Of course. The lids and straws are next to the napkins.",
          "zh": "當然，蓋子和吸管在餐巾紙旁邊。"
        },
        {
          "s": "Y",
          "en": "Thanks. How long will the remake take?",
          "zh": "謝謝。重做要多久？"
        },
        {
          "s": "S",
          "en": "Just a couple of minutes. Here you go, enjoy!",
          "zh": "只要幾分鐘。給你，慢慢享用！"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "Can I get a medium iced latte, please?",
      "zh": "我要一杯中杯冰拿鐵。"
    },
    {
      "en": "Could I get that hot, please?",
      "zh": "可以做熱的嗎？"
    },
    {
      "en": "What sizes do you have?",
      "zh": "你們有哪些尺寸？"
    },
    {
      "en": "What's the difference between a latte and a cappuccino?",
      "zh": "拿鐵和卡布奇諾有什麼不同？"
    },
    {
      "en": "Do you have oat milk?",
      "zh": "你們有燕麥奶嗎？"
    },
    {
      "en": "Could I get that with less ice?",
      "zh": "可以少冰嗎？"
    },
    {
      "en": "Could I get an extra shot of espresso?",
      "zh": "可以多加一份濃縮咖啡嗎？"
    },
    {
      "en": "One pump of vanilla, please.",
      "zh": "一泵香草糖漿，謝謝。"
    },
    {
      "en": "Could I get it less sweet?",
      "zh": "可以少糖嗎？"
    },
    {
      "en": "No whipped cream, please.",
      "zh": "不要鮮奶油，謝謝。"
    },
    {
      "en": "Do you have decaf?",
      "zh": "你們有低咖啡因的嗎？"
    },
    {
      "en": "I'll have a blueberry muffin, too.",
      "zh": "我也要一個藍莓瑪芬。"
    },
    {
      "en": "For here or to go?",
      "zh": "內用還是外帶？"
    },
    {
      "en": "Can I get a name for the order?",
      "zh": "可以留個名字嗎？"
    },
    {
      "en": "Can I pay by card?",
      "zh": "我可以刷卡嗎？"
    },
    {
      "en": "Would you like to add a tip?",
      "zh": "你要加小費嗎？"
    },
    {
      "en": "Is the Wi-Fi free?",
      "zh": "Wi-Fi 是免費的嗎？"
    },
    {
      "en": "Excuse me, I think there's a mistake.",
      "zh": "不好意思，好像弄錯了。"
    },
    {
      "en": "Could I get a lid and a straw?",
      "zh": "可以給我蓋子和吸管嗎？"
    },
    {
      "en": "Could I get a refill?",
      "zh": "可以續杯嗎？"
    }
  ],
  "hear": [
    {
      "en": "What can I get started for you?",
      "zh": "先幫你點什麼？",
      "reply": "Can I get a medium iced latte, please?",
      "replyZh": "我要一杯中杯冰拿鐵。"
    },
    {
      "en": "Hot or iced?",
      "zh": "要熱的還是冰的？",
      "reply": "Iced, please.",
      "replyZh": "冰的，謝謝。"
    },
    {
      "en": "What size would you like?",
      "zh": "你要什麼尺寸？",
      "reply": "Medium, please.",
      "replyZh": "中杯，謝謝。"
    },
    {
      "en": "What kind of milk would you like?",
      "zh": "你要什麼奶？",
      "reply": "Oat milk, please.",
      "replyZh": "燕麥奶，謝謝。"
    },
    {
      "en": "Would you like any syrup in that?",
      "zh": "要加糖漿嗎？",
      "reply": "One pump of vanilla, please.",
      "replyZh": "一泵香草，謝謝。"
    },
    {
      "en": "Would you like whipped cream on top?",
      "zh": "上面要加鮮奶油嗎？",
      "reply": "No, thanks.",
      "replyZh": "不用，謝謝。"
    },
    {
      "en": "Anything to eat today?",
      "zh": "今天要吃點東西嗎？",
      "reply": "Yes, a blueberry muffin, please.",
      "replyZh": "要，一個藍莓瑪芬。"
    },
    {
      "en": "Can I get a name for the order?",
      "zh": "可以留個名字嗎？",
      "reply": "Sure, it's Melissa.",
      "replyZh": "好，叫 Melissa。"
    },
    {
      "en": "Would you like to add a tip?",
      "zh": "你要加小費嗎？",
      "reply": "Sure, one dollar, please.",
      "replyZh": "好，一塊錢。"
    },
    {
      "en": "Large oat latte for Melissa!",
      "zh": "Melissa 的大杯燕麥拿鐵好了！",
      "reply": "That's mine. Thank you!",
      "replyZh": "是我的，謝謝！"
    }
  ],
  "say": [
    {
      "en": "Hi, can I get a small hot americano?",
      "zh": "嗨，我要一杯小杯熱美式。"
    },
    {
      "en": "Could I get that with almond milk instead?",
      "zh": "可以改用杏仁奶嗎？"
    },
    {
      "en": "Could you make it a little less sweet?",
      "zh": "可以做得不要那麼甜嗎？"
    },
    {
      "en": "Do you have any dairy-free options?",
      "zh": "你們有不含乳製品的選擇嗎？"
    },
    {
      "en": "Could I get an extra shot, please?",
      "zh": "可以多加一份濃縮嗎？"
    },
    {
      "en": "Is this a medium? I ordered a small.",
      "zh": "這是中杯嗎？我點的是小杯。"
    },
    {
      "en": "Could you make it again? It's too cold.",
      "zh": "可以重做嗎？它太冰了。"
    },
    {
      "en": "Where can I find the napkins?",
      "zh": "餐巾紙在哪裡？"
    },
    {
      "en": "What's the Wi-Fi password?",
      "zh": "Wi-Fi 密碼是什麼？"
    },
    {
      "en": "Sorry, could you say that again?",
      "zh": "不好意思，可以再說一次嗎？"
    }
  ],
  "vocab": [
    {
      "w": "latte",
      "pos": "n.",
      "zh": "拿鐵",
      "ex": "I'd like an iced latte.",
      "exzh": "我想要一杯冰拿鐵。"
    },
    {
      "w": "espresso",
      "pos": "n.",
      "zh": "濃縮咖啡",
      "ex": "Add an extra shot of espresso.",
      "exzh": "多加一份濃縮咖啡。"
    },
    {
      "w": "americano",
      "pos": "n.",
      "zh": "美式咖啡",
      "ex": "I'll have a hot americano.",
      "exzh": "我要一杯熱美式。"
    },
    {
      "w": "oat milk",
      "pos": "n.",
      "zh": "燕麥奶",
      "ex": "Can I get oat milk instead?",
      "exzh": "可以改用燕麥奶嗎？"
    },
    {
      "w": "syrup",
      "pos": "n.",
      "zh": "糖漿",
      "ex": "Could I get vanilla syrup?",
      "exzh": "可以加香草糖漿嗎？"
    },
    {
      "w": "pump",
      "pos": "n.",
      "zh": "一泵（糖漿單位）",
      "ex": "Two pumps of caramel, please.",
      "exzh": "兩泵焦糖，謝謝。"
    },
    {
      "w": "shot",
      "pos": "n.",
      "zh": "一份濃縮咖啡",
      "ex": "Add an extra shot, please.",
      "exzh": "請多加一份濃縮。"
    },
    {
      "w": "decaf",
      "pos": "n./adj.",
      "zh": "低咖啡因",
      "ex": "Do you have decaf?",
      "exzh": "你們有低咖啡因的嗎？"
    },
    {
      "w": "whipped cream",
      "pos": "n.",
      "zh": "鮮奶油",
      "ex": "No whipped cream, please.",
      "exzh": "請不要鮮奶油。"
    },
    {
      "w": "pastry",
      "pos": "n.",
      "zh": "糕點",
      "ex": "I'll have a pastry, too.",
      "exzh": "我也要一個糕點。"
    },
    {
      "w": "lid",
      "pos": "n.",
      "zh": "杯蓋",
      "ex": "Could I get a lid?",
      "exzh": "可以給我一個杯蓋嗎？"
    },
    {
      "w": "remake",
      "pos": "v.",
      "zh": "重做",
      "ex": "Could you remake this drink?",
      "exzh": "可以重做這杯飲料嗎？"
    }
  ],
  "situations": [
    {
      "title": "😵 菜單太複雜、店員問很多",
      "hear": {
        "en": "Hot or iced, what size, and what kind of milk and syrup?",
        "zh": "（講得很快）要冰的還熱的、什麼尺寸、什麼奶、什麼糖漿？",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you ask one at a time?",
          "zh": "不好意思，可以一個一個問嗎？"
        },
        {
          "en": "Just a medium iced latte with oat milk, please.",
          "zh": "只要中杯冰拿鐵加燕麥奶，謝謝。"
        }
      ],
      "tip": "點餐順序可以記：尺寸 → 冰熱 → 飲料名 → 奶 → 糖漿。例如 Medium iced vanilla latte with oat milk. 一次說完就不會被追問。"
    },
    {
      "title": "🥛 對牛奶或堅果過敏",
      "hear": {
        "en": "Do you have any allergies?",
        "zh": "你有任何過敏嗎？"
      },
      "say": [
        {
          "en": "Yes, I'm allergic to dairy. Can you use oat milk and a clean pitcher?",
          "zh": "有，我對乳製品過敏。可以用燕麥奶和乾淨的奶壺嗎？"
        },
        {
          "en": "Does this drink contain any nuts?",
          "zh": "這杯飲料有堅果嗎？"
        }
      ],
      "tip": "有過敏一定要在點餐時就說，也可以說明請用乾淨的器具。說 allergic（過敏）比說 I can't drink it 更能讓店員重視。"
    },
    {
      "title": "💳 想付現卻被問小費",
      "hear": {
        "en": "Would you like to add a tip?",
        "zh": "你要加小費嗎？"
      },
      "say": [
        {
          "en": "Sure, one dollar, please.",
          "zh": "好，一塊錢。"
        },
        {
          "en": "No tip today, thanks.",
          "zh": "今天不加小費，謝謝。"
        }
      ],
      "tip": "咖啡店有小費罐或螢幕選項。常見做法是 1 美元或 10–20%，不加也完全可以，直接選 No Tip。"
    },
    {
      "title": "⏰ 等很久、飲料還沒好",
      "say": [
        {
          "en": "Excuse me, I ordered a latte about ten minutes ago. Is it ready?",
          "zh": "不好意思，我大約十分鐘前點了一杯拿鐵，好了嗎？"
        },
        {
          "en": "It's under the name Melissa.",
          "zh": "是用 Melissa 的名字登記的。"
        }
      ],
      "tip": "尖峰時段會比較久。問的時候報上名字和點了什麼，店員比較好查。"
    },
    {
      "title": "💻 想坐下來讀書、用電腦",
      "say": [
        {
          "en": "Is it okay if I sit here and study for a while?",
          "zh": "我可以坐在這裡念一會兒書嗎？"
        },
        {
          "en": "Is there an outlet nearby, and what's the Wi-Fi password?",
          "zh": "附近有插座嗎？Wi-Fi 密碼是什麼？"
        }
      ],
      "tip": "大多數咖啡店歡迎客人念書，但尖峰時間不要佔太多位子。買一杯飲料，坐幾小時通常沒問題，可以再點一杯表示感謝。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "Hot or iced?",
      "prompt": "咖啡師在問什麼？",
      "options": [
        "要熱的還是冰的",
        "要大杯還是小杯",
        "要內用還是外帶"
      ],
      "answer": 0,
      "note": "Hot or iced? 是問冰熱；iced 是冰的。"
    },
    {
      "type": "選擇回應",
      "audio": "What kind of milk would you like?",
      "prompt": "你要燕麥奶，最適合怎麼回答？",
      "options": [
        "Oat milk, please.",
        "Yes, I like milk.",
        "A medium, please."
      ],
      "answer": 0,
      "note": "What kind of… 問的是種類。"
    },
    {
      "type": "選擇回應",
      "audio": "What size would you like?",
      "prompt": "你要中杯，最適合怎麼回答？",
      "options": [
        "Medium, please.",
        "Hot, please.",
        "Oat milk."
      ],
      "answer": 0,
      "note": "尺寸：small、medium、large。有些店用 tall、grande、venti。"
    },
    {
      "type": "聽數字",
      "audio": "That'll be eight fifty.",
      "prompt": "總共多少錢？",
      "options": [
        "$8.50",
        "$18.50",
        "$85"
      ],
      "answer": 0,
      "note": "eight fifty 是 8.50 元。"
    },
    {
      "type": "聽懂意思",
      "audio": "Can I get a name for the order?",
      "prompt": "收銀員在問什麼？",
      "options": [
        "你的名字（叫號用）",
        "你的電話號碼",
        "你的付款方式"
      ],
      "answer": 0,
      "note": "咖啡店會在杯子上寫名字，做好時叫名字。"
    },
    {
      "type": "選擇回應",
      "audio": "Is that for here or to go?",
      "prompt": "你要外帶，最適合怎麼回答？",
      "options": [
        "To go, please.",
        "Yes, for here.",
        "I like to go."
      ],
      "answer": 0,
      "note": "for here 是內用，to go 是外帶。"
    },
    {
      "type": "聽懂意思",
      "audio": "Would you like to add a tip?",
      "prompt": "店員在問什麼？",
      "options": [
        "要不要加小費",
        "要不要加糖漿",
        "要不要收據"
      ],
      "answer": 0,
      "note": "tip 是小費。"
    },
    {
      "type": "聽懂意思",
      "audio": "Sorry about that. Let me remake it as a medium for you.",
      "prompt": "咖啡師說了什麼？",
      "options": [
        "抱歉，我幫你重做成中杯",
        "抱歉，沒有中杯了",
        "抱歉，這杯不能退"
      ],
      "answer": 0,
      "note": "remake 是重做。"
    },
    {
      "type": "對話理解",
      "audio": "Hi, can I get a large iced latte with oat milk and one pump of caramel? And a blueberry muffin, please.",
      "prompt": "客人點了什麼？",
      "options": [
        "大杯燕麥冰拿鐵加焦糖，還有藍莓瑪芬",
        "中杯熱美式",
        "小杯拿鐵加香草"
      ],
      "answer": 0,
      "note": "one pump of caramel 是一泵焦糖糖漿。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "Excuse me, I ordered it with oat milk, but this tastes like regular milk. I have a dairy allergy. Could you remake it?",
      "prompt": "客人遇到什麼問題？",
      "options": [
        "飲料用錯奶，客人對乳製品過敏",
        "飲料太冰",
        "飲料太甜"
      ],
      "answer": 0,
      "note": "dairy allergy 是乳製品過敏。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Hi there! What can I get started for you?",
      "promptZh": "嗨！先幫你點什麼？",
      "hint": "用 Can I get… 點一杯飲料",
      "expect": "can i get|can i have|i'?ll have|i'?d like|latte|coffee|americano|mocha|tea|cappuccino",
      "model": "Can I get a medium iced latte, please?",
      "modelZh": "我要一杯中杯冰拿鐵。"
    },
    {
      "prompt": "What kind of milk would you like?",
      "promptZh": "你要什麼奶？",
      "hint": "說一種奶",
      "expect": "oat|almond|whole|skim|soy|regular|milk|dairy",
      "model": "Oat milk, please.",
      "modelZh": "燕麥奶，謝謝。"
    },
    {
      "prompt": "Would you like any syrup in that?",
      "promptZh": "要加糖漿嗎？",
      "hint": "說要哪種，或不要",
      "expect": "vanilla|caramel|hazelnut|pump|syrup|no|yes|sweet",
      "model": "One pump of vanilla, please.",
      "modelZh": "一泵香草，謝謝。"
    },
    {
      "prompt": "Anything to eat today?",
      "promptZh": "今天要吃點什麼嗎？",
      "hint": "點一樣餐點，或說不用",
      "expect": "muffin|cookie|croissant|bagel|sandwich|cake|no|thanks|just|that'?s",
      "model": "I'll have a blueberry muffin, too.",
      "modelZh": "我也要一個藍莓瑪芬。"
    },
    {
      "prompt": "Is that for here or to go?",
      "promptZh": "內用還是外帶？",
      "hint": "說 for here 或 to go",
      "expect": "for here|to go|take ?out|take ?away",
      "model": "For here, please.",
      "modelZh": "內用，謝謝。"
    },
    {
      "prompt": "Can I get a name for the order?",
      "promptZh": "可以留個名字嗎？",
      "hint": "說你的名字",
      "expect": "my name|it'?s|i'?m|name",
      "model": "Sure, it's Melissa.",
      "modelZh": "好，叫 Melissa。"
    },
    {
      "prompt": "Would you like to pay by card or cash?",
      "promptZh": "你要刷卡還是付現？",
      "hint": "說 card 或 cash",
      "expect": "\\b(cash|card|credit|debit|tap|apple pay)\\b",
      "model": "Card, please. Can I tap?",
      "modelZh": "刷卡，可以感應嗎？"
    },
    {
      "prompt": "Is everything okay with your drink?",
      "promptZh": "你的飲料還好嗎？",
      "hint": "說很好，或說有問題請他重做",
      "expect": "good|great|fine|perfect|thanks|mistake|wrong|remake|cold|sweet|oat|actually",
      "model": "Actually, I think there's a mistake. I ordered oat milk.",
      "modelZh": "其實好像弄錯了，我點的是燕麥奶。"
    }
  ],
  "culture": [
    {
      "t": "客製化是日常",
      "d": "咖啡店的點單幾乎都能客製：奶的種類、冰量、糖漿幾泵、多一份濃縮。點餐順序可以記成「尺寸、冰熱、飲料、奶、糖漿」，例如 Large hot oat latte, one pump of vanilla。"
    },
    {
      "t": "店員會問名字",
      "d": "Can I get a name for the order? 是為了在杯子上寫名字，做好時叫名字取餐。名字難拼可以直接拼出來，或用簡單的暱稱。"
    },
    {
      "t": "小費不強迫但常見",
      "d": "咖啡店的小費是自由的，常見是 1 美元或 10–20%。付款螢幕上選 No Tip 完全可以。"
    },
    {
      "t": "尺寸名稱因店而異",
      "d": "很多店用 small、medium、large，連鎖店可能有自己的名稱，例如 tall、grande、venti。不確定時直接問 What sizes do you have?"
    },
    {
      "t": "咖啡店也是自習空間",
      "d": "美國的咖啡店可以坐著念書或用電腦，免費 Wi-Fi 很常見。尖峰時段不要佔太多位子，坐太久時可以再點一杯飲料。"
    }
  ]
};
