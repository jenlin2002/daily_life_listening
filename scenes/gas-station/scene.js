// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "gas-station",
  "title": "加油站自助加油",
  "en": "At the Gas Station",
  "emoji": "⛽",
  "goal": "學會在美國加油站自助加油：先付款或預先授權、選油號、加油與收據，在店內買東西、問路，以及機器出狀況時求助",
  "videos": [
    {
      "id": "o8AS3ErB_eg",
      "title": "Important Daily Life English: Gas Station Vocabulary（Speak English With Vanessa）"
    },
    {
      "id": "EvkosIXDsAk",
      "title": "Let's Learn English at the Gas Station | English Video with Subtitles（Learn English with Bob the Canadian）"
    },
    {
      "id": "GhTpyKJ-UDM",
      "title": "At the Gas Station - Daily English Conversation（James Kent）"
    }
  ],
  "speakers": {
    "S": {
      "name": "Clerk",
      "zh": "店員",
      "avatar": "👩‍💼",
      "voice": "f"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♂️",
      "voice": "m"
    },
    "D": {
      "name": "Another Driver",
      "zh": "另一位駕駛",
      "avatar": "👨",
      "voice": "m2"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "在加油機前：先付款再加油",
      "where": "加油站的加油機旁（對著另一位駕駛問）",
      "emoji": "⛽",
      "lines": [
        {
          "s": "Y",
          "en": "Excuse me, I'm new here. Could you show me how this gas pump works?",
          "zh": "不好意思，我剛來這裡，可以教我這個加油機怎麼用嗎？"
        },
        {
          "s": "D",
          "en": "Sure. First, you pay at the pump. Insert your card here, or you can pay inside.",
          "zh": "可以。首先在加油機付款，把卡片插在這裡，或是到店裡付。"
        },
        {
          "s": "Y",
          "en": "Okay. It's asking for a zip code.",
          "zh": "好。它在要求輸入郵遞區號。"
        },
        {
          "s": "D",
          "en": "That's your billing zip code. If your card is from another country, you should pay inside.",
          "zh": "那是你信用卡的帳單郵遞區號。如果你的卡是外國發行的，要到店裡付款。"
        },
        {
          "s": "Y",
          "en": "Oh, I see. My card is from Taiwan. I'll go pay inside.",
          "zh": "喔，了解。我的卡是台灣的，我去店裡付。"
        },
        {
          "s": "D",
          "en": "Yeah, tell the clerk your pump number and how much gas you want.",
          "zh": "對，告訴店員你的加油機號碼和要加多少錢。"
        },
        {
          "s": "Y",
          "en": "Thanks. Which button is for regular gas?",
          "zh": "謝謝。哪個按鈕是普通汽油？"
        },
        {
          "s": "D",
          "en": "The regular is usually the cheapest one, eighty-seven. The others are mid-grade and premium.",
          "zh": "普通汽油通常最便宜，是 87。其他是中級和高級汽油。"
        },
        {
          "s": "Y",
          "en": "My rental car takes regular, so I'll pick eighty-seven. Thanks for your help!",
          "zh": "我的租來的車用普通汽油，我選 87。謝謝你幫忙！"
        }
      ]
    },
    {
      "title": "到店內預先付款",
      "where": "加油站的便利商店櫃台",
      "emoji": "🏪",
      "lines": [
        {
          "s": "S",
          "en": "Hi there! How can I help you?",
          "zh": "嗨！需要什麼協助嗎？"
        },
        {
          "s": "Y",
          "en": "Hi. I'd like to put thirty dollars on pump four, please.",
          "zh": "嗨，我想在四號加油機預付三十塊。"
        },
        {
          "s": "S",
          "en": "Sure. Is that cash or card?",
          "zh": "好的，付現還是刷卡？"
        },
        {
          "s": "Y",
          "en": "Card, please. It's a Taiwanese credit card.",
          "zh": "刷卡，謝謝。是台灣的信用卡。"
        },
        {
          "s": "S",
          "en": "No problem. Go ahead and insert it. Okay, you're all set on pump four.",
          "zh": "沒問題，請插卡。好了，四號機已經可以使用。"
        },
        {
          "s": "Y",
          "en": "If I don't use all thirty dollars, do I get the rest back?",
          "zh": "如果我沒用完三十塊，剩下的會退給我嗎？"
        },
        {
          "s": "S",
          "en": "Yes, you'll get the difference back on your card, or you can come in and get change.",
          "zh": "會，差額會退回你的卡，或是你可以進來領零錢。"
        },
        {
          "s": "Y",
          "en": "Great. Also, could I get a bottle of water and a bag of chips?",
          "zh": "太好了。我也想要一瓶水和一包洋芋片。"
        },
        {
          "s": "S",
          "en": "Of course. Anything else? That'll be four fifty for those.",
          "zh": "當然。還要別的嗎？這些要 4.50 元。"
        },
        {
          "s": "Y",
          "en": "That's it, thanks.",
          "zh": "這樣就好，謝謝。"
        }
      ]
    },
    {
      "title": "加完油、收據與問路",
      "where": "加油機旁與店內",
      "emoji": "🧾",
      "lines": [
        {
          "s": "Y",
          "en": "The pump stopped at twenty-six dollars. Is it done?",
          "zh": "加油機停在二十六塊，結束了嗎？"
        },
        {
          "s": "D",
          "en": "Yes, it clicks off when the tank is full. Put the nozzle back and close the gas cap.",
          "zh": "對，油箱滿了它就會自動停止。把油槍放回去，並蓋好油箱蓋。"
        },
        {
          "s": "Y",
          "en": "Okay. Do I need a receipt?",
          "zh": "好。我需要收據嗎？"
        },
        {
          "s": "D",
          "en": "Press the button on the pump if you want one. It prints right there.",
          "zh": "想要的話按加油機上的按鈕，會直接在那裡印出來。"
        },
        {
          "s": "Y",
          "en": "Got it. Also, is there a highway entrance nearby?",
          "zh": "了解。對了，附近有高速公路入口嗎？"
        },
        {
          "s": "D",
          "en": "Yes, turn right out of the station and go straight for about half a mile.",
          "zh": "有，出加油站右轉，直走大約半英里。"
        },
        {
          "s": "Y",
          "en": "Thank you so much. Have a good day!",
          "zh": "非常謝謝你，祝你有美好的一天！"
        },
        {
          "s": "D",
          "en": "You too. Drive safe!",
          "zh": "你也是，開車小心！"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "How does this gas pump work?",
      "zh": "這個加油機怎麼用？"
    },
    {
      "en": "Do I pay at the pump or inside?",
      "zh": "我在加油機付款，還是到店裡付？"
    },
    {
      "en": "I'd like to put thirty dollars on pump four.",
      "zh": "我想在四號加油機預付三十塊。"
    },
    {
      "en": "Fill it up on pump four, please.",
      "zh": "請在四號機幫我加滿。"
    },
    {
      "en": "Which button is for regular?",
      "zh": "哪個按鈕是普通汽油？"
    },
    {
      "en": "My car takes regular gas.",
      "zh": "我的車用普通汽油。"
    },
    {
      "en": "It's asking for a zip code.",
      "zh": "它在要求輸入郵遞區號。"
    },
    {
      "en": "My card is from another country.",
      "zh": "我的卡是外國發行的。"
    },
    {
      "en": "Is the card reader working?",
      "zh": "刷卡機有在運作嗎？"
    },
    {
      "en": "The pump isn't starting.",
      "zh": "加油機沒有反應。"
    },
    {
      "en": "Do I get the rest back if I don't use it all?",
      "zh": "沒用完的錢會退給我嗎？"
    },
    {
      "en": "Where is the air pump for the tires?",
      "zh": "打氣機在哪裡？"
    },
    {
      "en": "Do you have a car wash?",
      "zh": "你們有洗車嗎？"
    },
    {
      "en": "Where is the restroom?",
      "zh": "洗手間在哪裡？"
    },
    {
      "en": "Could I get a receipt, please?",
      "zh": "可以給我收據嗎？"
    },
    {
      "en": "Put the nozzle back, and close the gas cap.",
      "zh": "把油槍放回去，蓋好油箱蓋。"
    },
    {
      "en": "Is there a highway entrance nearby?",
      "zh": "附近有高速公路入口嗎？"
    },
    {
      "en": "How much per gallon is regular?",
      "zh": "普通汽油一加侖多少錢？"
    },
    {
      "en": "I spilled some gas. Do you have a paper towel?",
      "zh": "我灑到汽油了，你有紙巾嗎？"
    },
    {
      "en": "Could you turn pump four back on?",
      "zh": "可以幫我重新開啟四號加油機嗎？"
    }
  ],
  "hear": [
    {
      "en": "Which pump are you on?",
      "zh": "你在幾號加油機？",
      "reply": "I'm on pump four.",
      "replyZh": "我在四號機。"
    },
    {
      "en": "How much would you like to put on?",
      "zh": "你想預付多少？",
      "reply": "Thirty dollars, please.",
      "replyZh": "三十塊，謝謝。"
    },
    {
      "en": "Is that cash or card?",
      "zh": "付現還是刷卡？",
      "reply": "Card, please.",
      "replyZh": "刷卡，謝謝。"
    },
    {
      "en": "Would you like to fill it up or pay a set amount?",
      "zh": "你要加滿，還是付固定金額？",
      "reply": "Thirty dollars is fine.",
      "replyZh": "三十塊就好。"
    },
    {
      "en": "What grade of gas do you need?",
      "zh": "你要什麼等級的汽油？",
      "reply": "Regular, please.",
      "replyZh": "普通汽油，謝謝。"
    },
    {
      "en": "You'll need to pay inside for a foreign card.",
      "zh": "外國卡要到店裡付款。",
      "reply": "Okay, I'll go inside.",
      "replyZh": "好，我進去付。"
    },
    {
      "en": "Do you need a receipt?",
      "zh": "你需要收據嗎？",
      "reply": "Yes, please.",
      "replyZh": "要，謝謝。"
    },
    {
      "en": "Anything else with that?",
      "zh": "還要別的嗎？",
      "reply": "That's all, thanks.",
      "replyZh": "這樣就好，謝謝。"
    },
    {
      "en": "The car wash is around back.",
      "zh": "洗車在後面。",
      "reply": "How much is it?",
      "replyZh": "多少錢？"
    },
    {
      "en": "The restroom key is at the counter.",
      "zh": "洗手間的鑰匙在櫃台。",
      "reply": "Could I borrow it, please?",
      "replyZh": "我可以借用一下嗎？"
    }
  ],
  "say": [
    {
      "en": "Excuse me, how do I use this pump?",
      "zh": "不好意思，這個加油機怎麼用？"
    },
    {
      "en": "I'd like to pay inside, please.",
      "zh": "我想進去店裡付款。"
    },
    {
      "en": "Thirty dollars on pump four, please.",
      "zh": "四號機，三十塊，謝謝。"
    },
    {
      "en": "Can I fill it up?",
      "zh": "我可以加滿嗎？"
    },
    {
      "en": "Is there a restroom here?",
      "zh": "這裡有洗手間嗎？"
    },
    {
      "en": "The pump isn't working. Can you help me?",
      "zh": "加油機壞了，可以幫我嗎？"
    },
    {
      "en": "Where can I put air in my tires?",
      "zh": "哪裡可以幫輪胎打氣？"
    },
    {
      "en": "Could I get a receipt?",
      "zh": "可以給我收據嗎？"
    },
    {
      "en": "How do I get to the highway?",
      "zh": "怎麼上高速公路？"
    },
    {
      "en": "Sorry, could you say that again?",
      "zh": "不好意思，可以再說一次嗎？"
    }
  ],
  "vocab": [
    {
      "w": "gas pump",
      "pos": "n.",
      "zh": "加油機",
      "ex": "Which gas pump are you on?",
      "exzh": "你在哪一台加油機？"
    },
    {
      "w": "nozzle",
      "pos": "n.",
      "zh": "油槍",
      "ex": "Put the nozzle back when you finish.",
      "exzh": "加完油請把油槍放回去。"
    },
    {
      "w": "gas cap",
      "pos": "n.",
      "zh": "油箱蓋",
      "ex": "Don't forget to close the gas cap.",
      "exzh": "別忘了蓋好油箱蓋。"
    },
    {
      "w": "regular",
      "pos": "n.",
      "zh": "普通汽油（87）",
      "ex": "My car runs on regular.",
      "exzh": "我的車用普通汽油。"
    },
    {
      "w": "premium",
      "pos": "n.",
      "zh": "高級汽油（91–93）",
      "ex": "Premium costs more.",
      "exzh": "高級汽油比較貴。"
    },
    {
      "w": "gallon",
      "pos": "n.",
      "zh": "加侖（約 3.8 公升）",
      "ex": "Gas is four dollars a gallon.",
      "exzh": "汽油一加侖四塊錢。"
    },
    {
      "w": "fill up",
      "pos": "phr. v.",
      "zh": "加滿",
      "ex": "Please fill it up.",
      "exzh": "請幫我加滿。"
    },
    {
      "w": "prepay",
      "pos": "v.",
      "zh": "預先付款",
      "ex": "You have to prepay inside.",
      "exzh": "你必須進去預先付款。"
    },
    {
      "w": "zip code",
      "pos": "n.",
      "zh": "郵遞區號",
      "ex": "Enter your zip code.",
      "exzh": "請輸入你的郵遞區號。"
    },
    {
      "w": "receipt",
      "pos": "n.",
      "zh": "收據",
      "ex": "Press the button for a receipt.",
      "exzh": "按按鈕就會印收據。"
    },
    {
      "w": "tire pressure",
      "pos": "n.",
      "zh": "胎壓",
      "ex": "Check your tire pressure.",
      "exzh": "請檢查你的胎壓。"
    },
    {
      "w": "car wash",
      "pos": "n.",
      "zh": "洗車",
      "ex": "There's a car wash next door.",
      "exzh": "隔壁有洗車。"
    }
  ],
  "situations": [
    {
      "title": "😵 對方講太快，聽不懂",
      "hear": {
        "en": "You gotta pay inside first, then tell me the pump number, and I'll turn it on.",
        "zh": "（講得很快）你要先進來付款，告訴我加油機號碼，我再幫你開機。",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you say that a little slower?",
          "zh": "不好意思，可以說慢一點嗎？"
        },
        {
          "en": "So I pay first, then tell you the pump number. Is that right?",
          "zh": "所以我先付款，再告訴你加油機號碼，對嗎？"
        }
      ],
      "tip": "加油站的流程很簡單，抓住 pay first、pump number 兩個重點就夠了。不懂就請店員一步一步講。"
    },
    {
      "title": "💳 外國卡刷不過或一直要郵遞區號",
      "hear": {
        "en": "Please see the cashier.",
        "zh": "（機器顯示）請洽櫃台。"
      },
      "say": [
        {
          "en": "My card keeps getting declined at the pump. Can I pay inside?",
          "zh": "我的卡在加油機一直被拒絕，可以進去付款嗎？"
        },
        {
          "en": "It's a foreign card, so it doesn't have a zip code.",
          "zh": "這是外國的卡，所以沒有郵遞區號。"
        }
      ],
      "tip": "外國信用卡常常無法在加油機直接付，進店說 I'd like to prepay on pump four 最簡單。有些機器可輸入 99999 當郵遞區號。"
    },
    {
      "title": "⚠️ 加油機沒反應或卡住",
      "say": [
        {
          "en": "Excuse me, pump four isn't starting. Could you check it?",
          "zh": "不好意思，四號機沒有反應，可以幫我看一下嗎？"
        },
        {
          "en": "It stopped before the tank was full. Can you turn it back on?",
          "zh": "油箱還沒滿它就停了，可以幫我重新啟動嗎？"
        }
      ],
      "tip": "機器有時候會停，直接進店找店員，說明幾號機。千萬不要自己亂按或用手機拍照時靠近油槍。"
    },
    {
      "title": "🛞 想打氣或檢查胎壓",
      "say": [
        {
          "en": "Where can I put air in my tires?",
          "zh": "哪裡可以幫輪胎打氣？"
        },
        {
          "en": "Do I need quarters for the air machine?",
          "zh": "打氣機需要投二十五分硬幣嗎？"
        }
      ],
      "tip": "有些加油站的打氣機要付費（投硬幣或刷卡），有些免費。可以直接問店員在哪裡。"
    },
    {
      "title": "🚻 想上廁所或買東西",
      "say": [
        {
          "en": "Excuse me, where is the restroom?",
          "zh": "不好意思，洗手間在哪裡？"
        },
        {
          "en": "Could I borrow the key?",
          "zh": "我可以借鑰匙嗎？"
        }
      ],
      "tip": "有些加油站的洗手間要向店員拿鑰匙或輸入密碼，通常客人才能使用。說 Is the restroom for customers? 先確認。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "You'll need to pay inside for a foreign card.",
      "prompt": "外國的卡要怎麼付款？",
      "options": [
        "進店裡付款",
        "在加油機直接付",
        "不能付款"
      ],
      "answer": 0,
      "note": "pay inside 是進店裡付；foreign card 是外國卡。"
    },
    {
      "type": "選擇回應",
      "audio": "Which pump are you on?",
      "prompt": "你在四號機，最適合怎麼回答？",
      "options": [
        "I'm on pump four.",
        "I'm on the highway.",
        "It's regular."
      ],
      "answer": 0,
      "note": "Which pump…? 是問幾號加油機。"
    },
    {
      "type": "聽數字",
      "audio": "That'll be thirty dollars on pump four.",
      "prompt": "預付多少錢？幾號機？",
      "options": [
        "30 元，四號機",
        "13 元，十四號機",
        "40 元，三號機"
      ],
      "answer": 0,
      "note": "thirty 是 30，thirteen 是 13；four 是 4，fourteen 是 14。"
    },
    {
      "type": "選擇回應",
      "audio": "What grade of gas do you need?",
      "prompt": "你的車用普通汽油，最適合怎麼回答？",
      "options": [
        "Regular, please.",
        "Thirty dollars.",
        "Pump four."
      ],
      "answer": 0,
      "note": "grade 是等級：regular、mid-grade、premium。"
    },
    {
      "type": "聽懂意思",
      "audio": "The pump will stop automatically when the tank is full.",
      "prompt": "加油機會怎樣？",
      "options": [
        "油箱滿了會自動停",
        "要自己按停止",
        "加到錢用完才停"
      ],
      "answer": 0,
      "note": "automatically 是自動地。"
    },
    {
      "type": "聽懂意思",
      "audio": "Put the nozzle back, and close the gas cap.",
      "prompt": "加完油要做什麼？",
      "options": [
        "把油槍放回去並蓋好油箱蓋",
        "打開引擎蓋",
        "把車子熄火就好"
      ],
      "answer": 0,
      "note": "nozzle 是油槍，gas cap 是油箱蓋。"
    },
    {
      "type": "選擇回應",
      "audio": "Do you need a receipt?",
      "prompt": "你要收據，最適合怎麼回答？",
      "options": [
        "Yes, please.",
        "No, it's regular.",
        "I'm on pump four."
      ],
      "answer": 0,
      "note": "receipt 是收據。"
    },
    {
      "type": "聽懂意思",
      "audio": "The restroom key is at the counter.",
      "prompt": "洗手間的鑰匙在哪裡？",
      "options": [
        "櫃台",
        "加油機旁",
        "洗手間門口"
      ],
      "answer": 0,
      "note": "counter 是櫃台。"
    },
    {
      "type": "對話理解",
      "audio": "Hi, I'd like to put thirty dollars on pump four. It's a Taiwanese credit card, so I couldn't pay at the pump.",
      "prompt": "客人要做什麼？",
      "options": [
        "在四號機預付三十塊，因為外國卡不能在加油機付",
        "要加滿油",
        "要買洗車券"
      ],
      "answer": 0,
      "note": "put thirty dollars on pump four 是在四號機預付三十元。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "Excuse me, pump four isn't starting. Could you check it? Also, where can I put air in my tires?",
      "prompt": "客人想知道什麼？",
      "options": [
        "加油機有問題，以及哪裡可以打氣",
        "洗手間在哪",
        "附近有沒有高速公路"
      ],
      "answer": 0,
      "note": "put air in my tires 是幫輪胎打氣。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Hi there! How can I help you?",
      "promptZh": "嗨！需要什麼協助嗎？",
      "hint": "說你想預付多少、幾號機",
      "expect": "pump|dollars|put|fill|prepay|pay|gas",
      "model": "Hi. I'd like to put thirty dollars on pump four.",
      "modelZh": "嗨，我想在四號機預付三十塊。"
    },
    {
      "prompt": "Is that cash or card?",
      "promptZh": "付現還是刷卡？",
      "hint": "說 cash 或 card",
      "expect": "\\b(cash|card|credit|debit|tap)\\b",
      "model": "Card, please.",
      "modelZh": "刷卡，謝謝。"
    },
    {
      "prompt": "What grade of gas do you need?",
      "promptZh": "你要什麼等級的汽油？",
      "hint": "說 regular、mid-grade 或 premium",
      "expect": "regular|premium|mid|eighty|eighty-seven|87|unleaded",
      "model": "Regular, please.",
      "modelZh": "普通汽油，謝謝。"
    },
    {
      "prompt": "Which pump are you on?",
      "promptZh": "你在幾號加油機？",
      "hint": "說號碼",
      "expect": "pump|four|three|two|one|five|six|\\d",
      "model": "I'm on pump four.",
      "modelZh": "我在四號機。"
    },
    {
      "prompt": "If you don't use it all, you'll get the rest back on your card.",
      "promptZh": "沒用完的錢會退回你的卡。",
      "hint": "回應並道謝",
      "expect": "okay|ok|great|thanks|thank|got it|good",
      "model": "Great, thanks for explaining.",
      "modelZh": "太好了，謝謝你的說明。"
    },
    {
      "prompt": "Do you need a receipt?",
      "promptZh": "你需要收據嗎？",
      "hint": "說要或不要",
      "expect": "yes|yeah|no|please|thanks|receipt|don'?t",
      "model": "Yes, please.",
      "modelZh": "要，謝謝。"
    },
    {
      "prompt": "Anything else with that?",
      "promptZh": "還要別的嗎？",
      "hint": "說這樣就好，或加點一樣東西",
      "expect": "that'?s (all|it)|thanks|no|nothing|also|and a|water|chips|can i",
      "model": "That's all, thanks.",
      "modelZh": "這樣就好，謝謝。"
    },
    {
      "prompt": "Is everything working okay at the pump?",
      "promptZh": "加油機都正常嗎？",
      "hint": "說有問題，請他幫忙，或說正常",
      "expect": "yes|yeah|fine|good|working|not|isn'?t|stopped|help|check",
      "model": "Actually, the pump isn't starting. Can you help me?",
      "modelZh": "其實加油機沒有反應，可以幫我嗎？"
    }
  ],
  "culture": [
    {
      "t": "美國大多是自助加油",
      "d": "除了奧勒岡州和新澤西州，美國幾乎所有加油站都是自己動手加油（self-service）。先把車停在加油機旁，打開油箱蓋，付款，拿起油槍加油，加完放回去、蓋好油箱蓋。"
    },
    {
      "t": "先付款再加油",
      "d": "很多加油機要先刷卡（Pay at the pump），或進店預付（prepay）再加油。外國信用卡常常不能在加油機直接付，進店說 Fifty dollars on pump four 就好。"
    },
    {
      "t": "汽油用加侖，等級用數字",
      "d": "汽油按加侖（約 3.8 公升）計價，普通 regular 是 87，中級 mid-grade 約 89，高級 premium 約 91–93。租車的油箱蓋內側通常會寫該用哪一種，不確定就用 regular。"
    },
    {
      "t": "加油站也是休息站",
      "d": "加油站的便利商店賣飲料、零食、簡單餐點，也有洗手間（有些要向店員拿鑰匙）、打氣機、洗車。長途開車很適合在這裡休息。"
    },
    {
      "t": "安全提醒",
      "d": "加油時請熄火，不要抽菸，也不要用手機講話靠近油槍。夜間在偏僻的加油站要留意周圍，盡量選明亮、有人的加油站。"
    }
  ]
};
