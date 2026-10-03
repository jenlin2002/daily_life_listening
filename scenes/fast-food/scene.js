// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "fast-food",
  "title": "速食點餐",
  "en": "Ordering at a Fast-Food Restaurant",
  "emoji": "🍔",
  "goal": "學會點餐、客製化（不要洋蔥、去冰）、內用外帶、付款，並聽懂店員的每一個問題",
  "speakers": {
    "S": {
      "name": "Cashier",
      "zh": "店員",
      "avatar": "🧑‍💼",
      "voice": "f"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋",
      "voice": "m"
    },
    "C": {
      "name": "Chipotle Staff",
      "zh": "店員",
      "avatar": "👨",
      "voice": "m2"
    },
    "ME": {
      "name": "Me",
      "zh": "我",
      "avatar": "🙋‍♀️",
      "voice": "f",
      "you": true
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "櫃台點餐",
      "where": "Burger Barn 速食店櫃台",
      "lines": [
        {
          "s": "S",
          "en": "Hi, welcome to Burger Barn! What can I get for you today?",
          "zh": "嗨，歡迎光臨 Burger Barn！今天要點什麼？"
        },
        {
          "s": "Y",
          "en": "Hi. Can I get a cheeseburger, please?",
          "zh": "嗨，我要一個起司漢堡。"
        },
        {
          "s": "S",
          "en": "Sure. Would you like to make it a meal?",
          "zh": "好的。要升級成套餐嗎？"
        },
        {
          "s": "Y",
          "en": "What comes with the meal?",
          "zh": "套餐有附什麼？"
        },
        {
          "s": "S",
          "en": "It comes with fries and a drink. It's three dollars more.",
          "zh": "附薯條和一杯飲料，多三塊錢。"
        },
        {
          "s": "Y",
          "en": "Okay, I'll make it a meal. Can I get the burger with no onions?",
          "zh": "好，我要套餐。漢堡可以不要洋蔥嗎？"
        },
        {
          "s": "S",
          "en": "No problem. What would you like to drink?",
          "zh": "沒問題。飲料要喝什麼？"
        },
        {
          "s": "Y",
          "en": "A Sprite, please. No ice.",
          "zh": "雪碧，去冰。"
        },
        {
          "s": "S",
          "en": "Got it. Is that for here or to go?",
          "zh": "好的。內用還是外帶？"
        },
        {
          "s": "Y",
          "en": "To go, please.",
          "zh": "外帶。"
        },
        {
          "s": "S",
          "en": "Anything else?",
          "zh": "還需要別的嗎？"
        },
        {
          "s": "Y",
          "en": "That's it, thanks.",
          "zh": "這樣就好，謝謝。"
        },
        {
          "s": "S",
          "en": "Your total is eleven forty-nine. Cash or card?",
          "zh": "總共是 11.49 元。付現還是刷卡？"
        },
        {
          "s": "Y",
          "en": "Card. Can I tap?",
          "zh": "刷卡。可以感應嗎？"
        },
        {
          "s": "S",
          "en": "Yep, go ahead. Here's your receipt. You're number fifty-two.",
          "zh": "可以，請感應。這是你的收據，你是 52 號。"
        },
        {
          "s": "Y",
          "en": "Thank you!",
          "zh": "謝謝！"
        }
      ]
    },
    {
      "title": "得來速（開車點餐）",
      "emoji": "🚙",
      "where": "Burger Barn 得來速：對著點餐機說話",
      "lines": [
        {
          "s": "S",
          "en": "Welcome to Burger Barn. What can I get started for you?",
          "zh": "歡迎光臨 Burger Barn，要點什麼呢？"
        },
        {
          "s": "Y",
          "en": "Hi, can I get two number ones and a kids' meal?",
          "zh": "嗨，我要兩份一號餐和一份兒童餐。"
        },
        {
          "s": "S",
          "en": "Sure. What drinks would you like with those?",
          "zh": "好的，飲料要喝什麼？"
        },
        {
          "s": "Y",
          "en": "Two Cokes and an apple juice, please.",
          "zh": "兩杯可樂和一杯蘋果汁。"
        },
        {
          "s": "S",
          "en": "Would you like any sauces?",
          "zh": "要不要醬料？"
        },
        {
          "s": "Y",
          "en": "Yes, can I get two barbecue sauces?",
          "zh": "要，可以給我兩包烤肉醬嗎？"
        },
        {
          "s": "S",
          "en": "Okay, your total is twenty-two eighty. Please pull up to the first window.",
          "zh": "好的，總共 22.80 元，請開到第一個窗口。"
        },
        {
          "s": "Y",
          "en": "Thanks!",
          "zh": "謝謝！"
        },
        {
          "s": "S",
          "en": "Here's your food. Have a great day!",
          "zh": "這是你的餐點，祝你有美好的一天！"
        }
      ]
    },
    {
      "title": "Chipotle 與 Insomnia Cookies（大學生活篇）",
      "where": "去Chipotle點晚餐＋去Insomnia Cookies買點心",
      "emoji": "🌯",
      "lines": [
        {
          "s": "C",
          "en": "What can I get started for you today?",
          "zh": "今天想點什麼呢？"
        },
        {
          "s": "ME",
          "en": "Can I get a bowl? Brown rice and black beans.",
          "zh": "我要一份碗裝的餐點，糙米飯和黑豆。"
        },
        {
          "s": "C",
          "en": "And what kind of protein? There's chicken, steak, carnitas, sofritas, grilled veggies…",
          "zh": "那蛋白質呢？有雞肉、牛排、卡尼塔豬肉、素食豆腐和烤蔬菜。"
        },
        {
          "s": "ME",
          "en": "Can you do chicken and veggies, half and half?",
          "zh": "可以雞肉和蔬菜各一半嗎？"
        },
        {
          "s": "C",
          "en": "I think so, yes of course! Any salsa? Mild, medium, or hot?",
          "zh": "可以的，當然！要哪種莎莎醬？溫和、中辣還是辣？"
        },
        {
          "s": "ME",
          "en": "The green one looks good to me. Corn, cheese, and guac.",
          "zh": "我覺得綠色的不錯。玉米、起司和酪梨醬。"
        },
        {
          "s": "C",
          "en": "Guac is extra. Is that okay? Your total is $18.50 today. Cash or card?",
          "zh": "酪梨醬要額外加錢，可以嗎？今天總共是 $18.50，付現還是刷卡？"
        },
        {
          "s": "ME",
          "en": "Card. You're all set? You as well!",
          "zh": "刷卡。祝你今天愉快！你也是！"
        }
      ]
    }
  ],
  "videos": [
    {
      "id": "sSTuO0t553k",
      "title": "Ordering Food at a Fast Food Restaurant – Easy English Mini Dialog"
    },
    {
      "id": "JQBAnDD2M6M",
      "title": "Ordering Food in English at a Fast Food Restaurant"
    },
    {
      "id": "F24Tbak5U3c",
      "title": "Ordering at the Drive-Thru"
    }
  ],
  "phrases": [
    {
      "en": "What can I get started for you today?",
      "zh": "今天想要吃什麼？"
    },
    {
      "en": "Can I get a bowl?",
      "zh": "我要一份碗裝的餐點。"
    },
    {
      "en": "You got it.",
      "zh": "好的馬上做。"
    },
    {
      "en": "What kind of rice / beans / protein?",
      "zh": "你要什麼飯 / 豆子 / 蛋白質？"
    },
    {
      "en": "There's chicken, steak, carnitas, sofritas, and grilled veggies.",
      "zh": "我們有雞肉、牛排、燉豬肉、素肉和烤蔬菜。"
    },
    {
      "en": "Can you do chicken and veggies, half and half?",
      "zh": "可以雞肉和烤蔬菜各一半嗎？"
    },
    {
      "en": "Any salsa? Mild, medium, or hot?",
      "zh": "要哪種莎莎醬？溫和、中辣還是辣？"
    },
    {
      "en": "Guac is extra.",
      "zh": "酪梨醬需要額外收費。"
    },
    {
      "en": "Any chips and guac?",
      "zh": "要加玉米片和酪梨醬嗎？"
    },
    {
      "en": "Cash or card?",
      "zh": "付現金還是刷卡？"
    },
    {
      "en": "You're all set.",
      "zh": "完成囉！"
    },
    {
      "en": "Have a good one / day!",
      "zh": "祝你今天愉快！"
    },
    {
      "en": "You as well!",
      "zh": "你也是！"
    },
    {
      "en": "Which flavor is the most popular?",
      "zh": "哪一個口味最受歡迎？"
    },
    {
      "en": "Chocolate peanut butter cup and triple chocolate.",
      "zh": "巧克力花生醬杯和三重巧克力。"
    },
    {
      "en": "Can I get a box of six?",
      "zh": "我可以要六個裝一盒的嗎？"
    },
    {
      "en": "Let me get those packed for you.",
      "zh": "我幫你打包。"
    },
    {
      "en": "Alrighty / Alright.",
      "zh": "好的。"
    },
    {
      "en": "Did you need the receipt printed?",
      "zh": "需要列印收據嗎？"
    },
    {
      "en": "Be out in just a second.",
      "zh": "馬上為你送上！"
    }
  ],
  "hear": [
    {
      "en": "What can I get for you?",
      "zh": "你要點什麼？",
      "reply": "Can I get a cheeseburger, please?",
      "replyZh": "我要一個起司漢堡。"
    },
    {
      "en": "Would you like to make it a meal?",
      "zh": "要升級成套餐嗎？（meal / combo 都是套餐）",
      "reply": "Sure. What comes with it?",
      "replyZh": "好啊，套餐有附什麼？"
    },
    {
      "en": "What size? Small, medium, or large?",
      "zh": "要什麼尺寸？小、中、大？",
      "reply": "Medium, please.",
      "replyZh": "中的，謝謝。"
    },
    {
      "en": "What would you like to drink?",
      "zh": "飲料要喝什麼？",
      "reply": "A Coke, please.",
      "replyZh": "可樂，謝謝。"
    },
    {
      "en": "Any sauce with that?",
      "zh": "要不要醬料？",
      "reply": "Yes, ketchup, please.",
      "replyZh": "要，番茄醬，謝謝。"
    },
    {
      "en": "Is that for here or to go?",
      "zh": "內用還是外帶？",
      "reply": "For here, please.",
      "replyZh": "內用，謝謝。"
    },
    {
      "en": "Anything else? / Will that be all?",
      "zh": "還要別的嗎？／這樣就好了嗎？",
      "reply": "That's it, thanks.",
      "replyZh": "這樣就好，謝謝。"
    },
    {
      "en": "Your total is nine seventy-five.",
      "zh": "總共 9.75 元。",
      "reply": "Okay. Can I pay by card?",
      "replyZh": "好，可以刷卡嗎？"
    },
    {
      "en": "Can I get a name for the order?",
      "zh": "可以留個名字嗎？（叫號用）",
      "reply": "Sure, it's Melissa.",
      "replyZh": "好，我叫 Melissa。"
    },
    {
      "en": "Order fifty-two, your food is ready!",
      "zh": "52 號，你的餐好了！",
      "reply": "That's me. Thanks!",
      "replyZh": "是我的，謝謝！"
    }
  ],
  "say": [
    {
      "en": "Can I get a cheeseburger, please?",
      "zh": "我要一個起司漢堡。（點餐最常用的說法）"
    },
    {
      "en": "I'll have the number three.",
      "zh": "我要三號餐。"
    },
    {
      "en": "Can I make it a meal?",
      "zh": "可以改成套餐嗎？"
    },
    {
      "en": "Can I get it with no onions?",
      "zh": "可以不要洋蔥嗎？"
    },
    {
      "en": "Can I get extra cheese on that?",
      "zh": "可以多加起司嗎？"
    },
    {
      "en": "Could I get a large instead?",
      "zh": "可以換成大的嗎？"
    },
    {
      "en": "No ice, please.",
      "zh": "去冰，謝謝。"
    },
    {
      "en": "To go, please.",
      "zh": "外帶，謝謝。"
    },
    {
      "en": "Could I get some extra napkins?",
      "zh": "可以多給我一些餐巾紙嗎？"
    },
    {
      "en": "Sorry, could you say that again?",
      "zh": "不好意思，可以再說一次嗎？"
    }
  ],
  "vocab": [
    {
      "w": "meal / combo",
      "pos": "n.",
      "zh": "套餐",
      "ex": "I'll make it a combo.",
      "exzh": "我要改成套餐。"
    },
    {
      "w": "side",
      "pos": "n.",
      "zh": "附餐（薯條、沙拉等）",
      "ex": "What sides do you have?",
      "exzh": "你們有什麼附餐？"
    },
    {
      "w": "fries",
      "pos": "n.",
      "zh": "薯條",
      "ex": "Can I get large fries?",
      "exzh": "我要大薯。"
    },
    {
      "w": "pickles",
      "pos": "n.",
      "zh": "酸黃瓜",
      "ex": "No pickles, please.",
      "exzh": "不要酸黃瓜，謝謝。"
    },
    {
      "w": "sauce",
      "pos": "n.",
      "zh": "醬料",
      "ex": "What sauces do you have?",
      "exzh": "你們有什麼醬料？"
    },
    {
      "w": "refill",
      "pos": "n./v.",
      "zh": "續杯",
      "ex": "Are refills free?",
      "exzh": "續杯免費嗎？"
    },
    {
      "w": "napkin",
      "pos": "n.",
      "zh": "餐巾紙",
      "ex": "The napkins are over there.",
      "exzh": "餐巾紙在那邊。"
    },
    {
      "w": "straw",
      "pos": "n.",
      "zh": "吸管",
      "ex": "Can I get a straw?",
      "exzh": "可以給我一支吸管嗎？"
    },
    {
      "w": "receipt",
      "pos": "n.",
      "zh": "收據",
      "ex": "Here's your receipt.",
      "exzh": "這是你的收據。"
    },
    {
      "w": "to go",
      "pos": "phr.",
      "zh": "外帶",
      "ex": "I'd like it to go.",
      "exzh": "我要外帶。"
    },
    {
      "w": "order number",
      "pos": "n.",
      "zh": "取餐號碼",
      "ex": "What's my order number?",
      "exzh": "我的取餐號碼是幾號？"
    },
    {
      "w": "drive-thru",
      "pos": "n.",
      "zh": "得來速（開車點餐）",
      "ex": "Let's use the drive-thru.",
      "exzh": "我們用得來速吧。"
    }
  ],
  "situations": [
    {
      "title": "😵 店員講太快，聽不懂",
      "hear": {
        "en": "Would you like fries with that?",
        "zh": "（講得很快）要不要加點薯條？",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you say that again a little slower?",
          "zh": "不好意思，可以說慢一點再說一次嗎？"
        },
        {
          "en": "Sorry, did you say fries?",
          "zh": "抱歉，你是說薯條嗎？"
        }
      ],
      "tip": "聽不懂不要只說 What?，加上 Sorry 會有禮貌很多。只要抓到關鍵字（fries）再確認一次就好。"
    },
    {
      "title": "🍔 拿到的餐點錯了",
      "hear": {
        "en": "Is everything okay with your order?",
        "zh": "你的餐點都沒問題嗎？"
      },
      "say": [
        {
          "en": "Excuse me, I think there's a mistake. I asked for no onions.",
          "zh": "不好意思，好像弄錯了，我有說不要洋蔥。"
        },
        {
          "en": "Could you remake it, please?",
          "zh": "可以幫我重做嗎？"
        }
      ],
      "tip": "回到櫃台，把收據拿給店員看，通常會直接幫你重做。"
    },
    {
      "title": "🔁 點完才想改",
      "say": [
        {
          "en": "Actually, can I change the fries to onion rings?",
          "zh": "其實，薯條可以換成洋蔥圈嗎？"
        },
        {
          "en": "Sorry, can I add a chocolate shake?",
          "zh": "不好意思，我可以加點一杯巧克力奶昔嗎？"
        }
      ],
      "tip": "Actually… 是「其實／我改一下」，在付錢前都可以改。"
    },
    {
      "title": "💳 卡片刷不過",
      "hear": {
        "en": "Sorry, your card was declined.",
        "zh": "抱歉，你的卡被拒絕了（刷不過）。"
      },
      "say": [
        {
          "en": "Oh, let me try another card.",
          "zh": "喔，我換另一張卡試試。"
        },
        {
          "en": "Can I pay with cash instead?",
          "zh": "我可以改付現金嗎？"
        }
      ],
      "tip": "declined 是「刷卡被拒」，不一定是沒錢，也可能是國外刷卡被銀行擋下來。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "Is that for here or to go?",
      "prompt": "店員在問什麼？",
      "options": [
        "內用還是外帶？",
        "要不要加飲料？",
        "你要點幾號餐？"
      ],
      "answer": 0,
      "note": "for here 是內用，to go 是外帶。"
    },
    {
      "type": "選擇回應",
      "audio": "Would you like to make it a meal?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "Sure. What comes with it?",
        "Yes, I'm a meal.",
        "It's delicious."
      ],
      "answer": 0,
      "note": "make it a meal 是「升級成套餐」，可以先問附什麼。"
    },
    {
      "type": "選擇回應",
      "audio": "Will that be all?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "Yes, that's it. Thanks.",
        "Yes, I will.",
        "No, it's all."
      ],
      "answer": 0,
      "note": "Will that be all? = 這樣就好了嗎？回答 That's it 或 That's all。"
    },
    {
      "type": "聽數字",
      "audio": "That'll be nine seventy-five.",
      "prompt": "你要付多少錢？",
      "options": [
        "$9.75",
        "$97.50",
        "$975"
      ],
      "answer": 0,
      "note": "美國價錢常把小數點前後分開唸：nine seventy-five = 9.75 元。"
    },
    {
      "type": "聽數字",
      "audio": "Your total comes to twelve oh five.",
      "prompt": "你要付多少錢？",
      "options": [
        "$12.05",
        "$12.50",
        "$120.50"
      ],
      "answer": 0,
      "note": "twelve oh five 的 oh 就是 0，所以是 12.05 元。"
    },
    {
      "type": "選擇回應",
      "audio": "What size drink would you like?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "A medium, please.",
        "A Coke is fine.",
        "I'm thirsty."
      ],
      "answer": 0,
      "note": "問 what size 要回答尺寸：small、medium、large。"
    },
    {
      "type": "聽懂意思",
      "audio": "Sorry, we're out of chocolate shakes.",
      "prompt": "店員說了什麼？",
      "options": [
        "巧克力奶昔賣完了",
        "巧克力奶昔在特價",
        "巧克力奶昔要等很久"
      ],
      "answer": 0,
      "note": "be out of… = 賣完了、沒有了。"
    },
    {
      "type": "聽懂意思",
      "audio": "Order fifty-two, your food is ready!",
      "prompt": "店員說了什麼？",
      "options": [
        "52 號的餐點好了",
        "你要等 52 分鐘",
        "總共 52 元"
      ],
      "answer": 0,
      "note": "order + 數字 是取餐號碼。"
    },
    {
      "type": "選擇回應",
      "audio": "Can I get a name for the order?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "Sure, it's Branden.",
        "My order is a burger.",
        "Yes, I can."
      ],
      "answer": 0,
      "note": "店員要你的名字來叫號，直接說名字。"
    },
    {
      "type": "對話理解",
      "audio": "Hi, can I get a chicken sandwich with no tomatoes and a large lemonade? And that's to go.",
      "prompt": "客人「不要」什麼？",
      "options": [
        "番茄",
        "檸檬汁",
        "雞肉"
      ],
      "answer": 0,
      "note": "with no tomatoes = 不要番茄。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Hi, welcome to Burger Barn! What can I get for you?",
      "promptZh": "歡迎光臨！要點什麼？",
      "hint": "用 Can I get…? 點一樣餐點",
      "expect": "can i (get|have)|i'?ll have|i'?d like|i would like|(burger|sandwich|nuggets|chicken|number|meal|combo)",
      "model": "Can I get a cheeseburger, please?",
      "modelZh": "我要一個起司漢堡。"
    },
    {
      "prompt": "Would you like to make it a meal?",
      "promptZh": "要升級成套餐嗎？",
      "hint": "說要或不要，也可以問附什麼",
      "expect": "\\b(yes|yeah|sure|okay|ok|no|what comes)\\b",
      "model": "Sure. What comes with it?",
      "modelZh": "好啊，有附什麼？"
    },
    {
      "prompt": "What would you like to drink?",
      "promptZh": "飲料要喝什麼？",
      "hint": "說一種飲料，加上 please",
      "expect": "coke|sprite|water|lemonade|tea|juice|milk|coffee|soda|pepsi|root beer|please",
      "model": "A Coke, please.",
      "modelZh": "可樂，謝謝。"
    },
    {
      "prompt": "Any changes to your burger?",
      "promptZh": "漢堡要調整什麼嗎？",
      "hint": "用 no… / extra… / without… 說出你的要求，或說不用",
      "expect": "\\bno\\b|without|extra|hold the|that'?s fine|it'?s fine|nope",
      "model": "No onions, please.",
      "modelZh": "不要洋蔥，謝謝。"
    },
    {
      "prompt": "Is that for here or to go?",
      "promptZh": "內用還是外帶？",
      "hint": "回答 for here 或 to go",
      "expect": "for here|to go|take ?out|take ?away",
      "model": "To go, please.",
      "modelZh": "外帶，謝謝。"
    },
    {
      "prompt": "Anything else?",
      "promptZh": "還要別的嗎？",
      "hint": "說「這樣就好」",
      "expect": "that'?s (it|all)|no,? thanks|nothing else|that'?ll be all|i'?m good|can i also|and a",
      "model": "That's it, thanks.",
      "modelZh": "這樣就好，謝謝。"
    },
    {
      "prompt": "Your total is eleven forty-nine. Cash or card?",
      "promptZh": "總共 11.49 元，付現還是刷卡？",
      "hint": "說 cash 或 card",
      "expect": "\\b(cash|card|credit|debit|tap|apple pay)\\b",
      "model": "Card, please.",
      "modelZh": "刷卡，謝謝。"
    },
    {
      "prompt": "Sorry, your card was declined.",
      "promptZh": "抱歉，你的卡刷不過。",
      "hint": "說要換一張卡，或改付現金",
      "expect": "another card|other card|try again|try it again|cash|different card",
      "model": "Oh, let me try another card.",
      "modelZh": "喔，我換另一張卡試試。"
    }
  ],
  "culture": [
    {
      "t": "速食店不用給小費",
      "d": "在櫃台點餐、自己取餐的速食店通常不用給小費。結帳螢幕如果出現小費選項，可以選 No Tip。有服務生帶位、點餐、送餐的餐廳，才要給 15–20% 的小費。"
    },
    {
      "t": "飲料常常可以免費續杯",
      "d": "很多速食店會給你一個空杯子，自己去飲料機裝，而且可以免費續杯（free refills）。"
    },
    {
      "t": "「外帶」是 to go",
      "d": "美國說 to go，英國說 takeaway。內用是 for here。"
    },
    {
      "t": "價錢這樣唸",
      "d": "$11.49 唸 eleven forty-nine；$12.05 唸 twelve oh five。美國價錢標示通常沒有含稅，結帳時會再加上銷售稅，所以總金額會比菜單上的價錢高一點。"
    },
    {
      "t": "客製化很正常",
      "d": "美國人點餐很常說 no onions、extra cheese、light ice、dressing on the side，大方說出你的要求就好。"
    }
  ]
};
