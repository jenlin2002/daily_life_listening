// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "supermarket",
  "title": "超市購物",
  "en": "At the Supermarket",
  "emoji": "🛒",
  "goal": "學會問商品在哪一區、在熟食櫃檯買肉品和起司、結帳時回答袋子、會員卡與折價券的問題，並看懂價格與重量的說法",
  "videos": [
    {
      "id": "NG-de6quWkE",
      "title": "Let's Learn English at the Grocery Store (Supermarket) | English Video with Subtitles（Learn English with Bob the Canadia"
    },
    {
      "id": "s5x-RTu8dpg",
      "title": "How to Speak with a 🛒 Supermarket Cashier | English Conversation Practice（Single Step English）"
    },
    {
      "id": "f89uk1myB_s",
      "title": "Supermarket - Basic English Conversation（Learn English with Kevin）"
    }
  ],
  "speakers": {
    "S": {
      "name": "Employee",
      "zh": "店員",
      "avatar": "👨‍🌾",
      "voice": "m2"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♀️",
      "voice": "f"
    },
    "C": {
      "name": "Cashier",
      "zh": "收銀員",
      "avatar": "👩‍💼",
      "voice": "f2"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "問店員商品在哪裡",
      "where": "超市走道",
      "emoji": "🧭",
      "lines": [
        {
          "s": "Y",
          "en": "Excuse me, could you tell me where the milk is?",
          "zh": "不好意思，可以告訴我牛奶在哪裡嗎？"
        },
        {
          "s": "S",
          "en": "Sure. The dairy section is at the back of the store, next to the eggs.",
          "zh": "可以。乳製品區在店的最後面，在雞蛋旁邊。"
        },
        {
          "s": "Y",
          "en": "Thanks. And where can I find rice?",
          "zh": "謝謝。那米在哪裡找？"
        },
        {
          "s": "S",
          "en": "Rice is in aisle seven, on the right side, near the pasta.",
          "zh": "米在第七走道右手邊，靠近義大利麵。"
        },
        {
          "s": "Y",
          "en": "Do you carry soy sauce, too?",
          "zh": "你們也有賣醬油嗎？"
        },
        {
          "s": "S",
          "en": "Yes, we do. Check the international aisle, aisle nine.",
          "zh": "有的。去看國際食品區，第九走道。"
        },
        {
          "s": "Y",
          "en": "Great. Is there a sale on chicken this week?",
          "zh": "太好了。這週雞肉有特價嗎？"
        },
        {
          "s": "S",
          "en": "There is. Chicken breasts are two ninety-nine a pound until Sunday.",
          "zh": "有，雞胸肉每磅 2.99 元，特價到週日。"
        },
        {
          "s": "Y",
          "en": "Perfect. Thanks so much for your help!",
          "zh": "太好了，非常謝謝你的幫忙！"
        }
      ]
    },
    {
      "title": "熟食櫃檯買肉與起司",
      "where": "超市熟食區的櫃檯",
      "emoji": "🥪",
      "lines": [
        {
          "s": "S",
          "en": "Hi! What can I get for you today?",
          "zh": "嗨！今天要買什麼？"
        },
        {
          "s": "Y",
          "en": "Hi. Could I get half a pound of sliced turkey, please?",
          "zh": "嗨，我要半磅切片火雞肉。"
        },
        {
          "s": "S",
          "en": "Sure. How thin would you like it sliced?",
          "zh": "好的，要切多薄？"
        },
        {
          "s": "Y",
          "en": "Pretty thin, please. And a quarter pound of Swiss cheese.",
          "zh": "薄一點，謝謝。還要四分之一磅的瑞士起司。"
        },
        {
          "s": "S",
          "en": "Coming right up. Would you like the cheese sliced, too?",
          "zh": "馬上來。起司也要切片嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, please. About that much is perfect.",
          "zh": "要，謝謝。差不多這樣就很好。"
        },
        {
          "s": "S",
          "en": "Anything else?",
          "zh": "還需要別的嗎？"
        },
        {
          "s": "Y",
          "en": "That's it. Thank you!",
          "zh": "這樣就好，謝謝！"
        },
        {
          "s": "S",
          "en": "Here you go. You can pay for it at the register.",
          "zh": "給你。到收銀台結帳就可以。"
        }
      ]
    },
    {
      "title": "結帳：袋子、會員卡與折價券",
      "where": "收銀台",
      "emoji": "💳",
      "lines": [
        {
          "s": "C",
          "en": "Hi, how are you today? Did you find everything okay?",
          "zh": "嗨，你今天好嗎？東西都找到了嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, I did, thanks.",
          "zh": "找到了，謝謝。"
        },
        {
          "s": "C",
          "en": "Do you have a rewards card or phone number with us?",
          "zh": "你有會員卡或登記的電話號碼嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, it's under my phone number.",
          "zh": "有，登記在我的電話號碼。"
        },
        {
          "s": "C",
          "en": "Great. Did you bring your own bags today?",
          "zh": "好的。你今天有自備袋子嗎？"
        },
        {
          "s": "Y",
          "en": "No, I forgot. Could I get a paper bag, please?",
          "zh": "沒有，我忘了。可以給我紙袋嗎？"
        },
        {
          "s": "C",
          "en": "Sure. Just so you know, the bag is ten cents.",
          "zh": "可以。先跟你說，袋子一個十分錢。"
        },
        {
          "s": "Y",
          "en": "That's fine. I also have a coupon for the cereal.",
          "zh": "沒關係。我還有一張麥片的折價券。"
        },
        {
          "s": "C",
          "en": "Okay, I've scanned it. Your total is thirty-six twenty. Cash or card?",
          "zh": "好，我已經掃了。總共 36.20 元，付現還是刷卡？"
        },
        {
          "s": "Y",
          "en": "Card, please.",
          "zh": "刷卡，謝謝。"
        },
        {
          "s": "C",
          "en": "Here's your receipt. Have a great day!",
          "zh": "這是你的收據，祝你有美好的一天！"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "Excuse me, where can I find the milk?",
      "zh": "不好意思，請問牛奶在哪裡？"
    },
    {
      "en": "Which aisle is the rice in?",
      "zh": "米在哪一個走道？"
    },
    {
      "en": "Do you carry soy sauce?",
      "zh": "你們有賣醬油嗎？"
    },
    {
      "en": "Is this on sale?",
      "zh": "這個有特價嗎？"
    },
    {
      "en": "How much is this per pound?",
      "zh": "這個一磅多少錢？"
    },
    {
      "en": "Do you have a fresher one in the back?",
      "zh": "後面有比較新鮮的嗎？"
    },
    {
      "en": "Could I get half a pound of sliced turkey?",
      "zh": "我要半磅切片火雞肉。"
    },
    {
      "en": "Could you slice it thin, please?",
      "zh": "可以幫我切薄一點嗎？"
    },
    {
      "en": "Where is the self-checkout?",
      "zh": "自助結帳在哪裡？"
    },
    {
      "en": "I have a coupon for this.",
      "zh": "我有這個商品的折價券。"
    },
    {
      "en": "Do you have a rewards card?",
      "zh": "你有會員卡嗎？"
    },
    {
      "en": "Did you find everything okay?",
      "zh": "東西都找到了嗎？"
    },
    {
      "en": "Paper or plastic?",
      "zh": "要紙袋還是塑膠袋？"
    },
    {
      "en": "Did you bring your own bags?",
      "zh": "你有自備袋子嗎？"
    },
    {
      "en": "The bag is ten cents.",
      "zh": "袋子一個十分錢。"
    },
    {
      "en": "Could I get a bag, please?",
      "zh": "可以給我一個袋子嗎？"
    },
    {
      "en": "Cash or card?",
      "zh": "付現還是刷卡？"
    },
    {
      "en": "Do you need cash back?",
      "zh": "你需要現金回饋（刷卡順便領現金）嗎？"
    },
    {
      "en": "Could I get a receipt?",
      "zh": "可以給我收據嗎？"
    },
    {
      "en": "This item didn't scan.",
      "zh": "這個商品沒有掃到。"
    }
  ],
  "hear": [
    {
      "en": "Can I help you find something?",
      "zh": "需要我幫你找什麼嗎？",
      "reply": "Yes, where is the pasta sauce?",
      "replyZh": "好，請問義大利麵醬在哪裡？"
    },
    {
      "en": "It's in aisle five, on your left.",
      "zh": "在第五走道，你的左手邊。",
      "reply": "Great, thank you!",
      "replyZh": "太好了，謝謝！"
    },
    {
      "en": "We're all out of that, I'm afraid.",
      "zh": "恐怕那個已經賣完了。",
      "reply": "Do you know when you'll get more?",
      "replyZh": "你知道什麼時候會再進貨嗎？"
    },
    {
      "en": "How thin would you like it sliced?",
      "zh": "你要切多薄？",
      "reply": "Pretty thin, please.",
      "replyZh": "薄一點，謝謝。"
    },
    {
      "en": "Did you find everything okay?",
      "zh": "東西都找到了嗎？",
      "reply": "Yes, thanks.",
      "replyZh": "找到了，謝謝。"
    },
    {
      "en": "Do you have a rewards card?",
      "zh": "你有會員卡嗎？",
      "reply": "Yes, it's under my phone number.",
      "replyZh": "有，登記在我的電話號碼。"
    },
    {
      "en": "Paper or plastic?",
      "zh": "要紙袋還是塑膠袋？",
      "reply": "Paper, please.",
      "replyZh": "紙袋，謝謝。"
    },
    {
      "en": "Would you like cash back?",
      "zh": "你要現金回饋嗎？",
      "reply": "No, thanks.",
      "replyZh": "不用，謝謝。"
    },
    {
      "en": "Your total is thirty-six twenty.",
      "zh": "總共 36.20 元。",
      "reply": "Okay. Can I pay by card?",
      "replyZh": "好，我可以刷卡嗎？"
    },
    {
      "en": "Do you want your receipt in the bag?",
      "zh": "收據要放在袋子裡嗎？",
      "reply": "Yes, please.",
      "replyZh": "好，謝謝。"
    }
  ],
  "say": [
    {
      "en": "Excuse me, where is the bread?",
      "zh": "不好意思，麵包在哪裡？"
    },
    {
      "en": "Do you have this in a smaller size?",
      "zh": "這個有小一點的尺寸嗎？"
    },
    {
      "en": "Could you check if you have more in the back?",
      "zh": "可以幫我看看後面還有沒有嗎？"
    },
    {
      "en": "Could I get half a pound of that?",
      "zh": "那個我要半磅。"
    },
    {
      "en": "Where do I find the eggs?",
      "zh": "雞蛋要去哪裡找？"
    },
    {
      "en": "I have my own bags.",
      "zh": "我有自備袋子。"
    },
    {
      "en": "Could I get a paper bag, please?",
      "zh": "可以給我紙袋嗎？"
    },
    {
      "en": "Sorry, this price seems wrong.",
      "zh": "不好意思，這個價錢好像不對。"
    },
    {
      "en": "Could I get a receipt, please?",
      "zh": "可以給我收據嗎？"
    },
    {
      "en": "Sorry, could you say that again?",
      "zh": "不好意思，可以再說一次嗎？"
    }
  ],
  "vocab": [
    {
      "w": "aisle",
      "pos": "n.",
      "zh": "走道（貨架之間）",
      "ex": "The rice is in aisle seven.",
      "exzh": "米在第七走道。"
    },
    {
      "w": "produce",
      "pos": "n.",
      "zh": "生鮮蔬果區",
      "ex": "I'll get the apples in the produce section.",
      "exzh": "我去生鮮區買蘋果。"
    },
    {
      "w": "deli",
      "pos": "n.",
      "zh": "熟食區",
      "ex": "Let's get some turkey at the deli.",
      "exzh": "我們去熟食區買些火雞肉。"
    },
    {
      "w": "dairy",
      "pos": "n.",
      "zh": "乳製品",
      "ex": "Milk and cheese are in the dairy section.",
      "exzh": "牛奶和起司在乳製品區。"
    },
    {
      "w": "on sale",
      "pos": "phr.",
      "zh": "特價中",
      "ex": "Chicken is on sale this week.",
      "exzh": "這週雞肉特價。"
    },
    {
      "w": "coupon",
      "pos": "n.",
      "zh": "折價券",
      "ex": "I have a coupon for ten percent off.",
      "exzh": "我有一張九折的折價券。"
    },
    {
      "w": "rewards card",
      "pos": "n.",
      "zh": "會員卡（累積點數）",
      "ex": "Do you have a rewards card?",
      "exzh": "你有會員卡嗎？"
    },
    {
      "w": "per pound",
      "pos": "phr.",
      "zh": "每磅",
      "ex": "Apples are two dollars per pound.",
      "exzh": "蘋果每磅兩塊錢。"
    },
    {
      "w": "cart",
      "pos": "n.",
      "zh": "購物推車",
      "ex": "Let me grab a cart.",
      "exzh": "我去拿一台推車。"
    },
    {
      "w": "self-checkout",
      "pos": "n.",
      "zh": "自助結帳",
      "ex": "I'll use the self-checkout.",
      "exzh": "我用自助結帳。"
    },
    {
      "w": "cash back",
      "pos": "n.",
      "zh": "刷卡順便領現金",
      "ex": "Would you like any cash back?",
      "exzh": "你要順便領現金嗎？"
    },
    {
      "w": "expiration date",
      "pos": "n.",
      "zh": "有效日期",
      "ex": "Check the expiration date on the milk.",
      "exzh": "檢查一下牛奶的有效日期。"
    }
  ],
  "situations": [
    {
      "title": "❓ 找不到想買的東西",
      "hear": {
        "en": "Can I help you find something?",
        "zh": "需要我幫你找什麼嗎？"
      },
      "say": [
        {
          "en": "Yes, I'm looking for soy sauce. Do you know which aisle it's in?",
          "zh": "好，我在找醬油，你知道在哪個走道嗎？"
        },
        {
          "en": "Do you have any more in the back?",
          "zh": "後面還有庫存嗎？"
        }
      ],
      "tip": "用 I'm looking for… 加上商品名稱最自然。店員通常會直接帶你走過去。"
    },
    {
      "title": "😵 店員講太快，聽不懂",
      "hear": {
        "en": "It's in aisle nine, past the pasta, on your right.",
        "zh": "（講得很快）在第九走道，經過義大利麵之後的右手邊。",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you say that a little slower?",
          "zh": "不好意思，可以說慢一點嗎？"
        },
        {
          "en": "Sorry, did you say aisle nine?",
          "zh": "抱歉，你是說第九走道嗎？"
        }
      ],
      "tip": "走道的數字（nine 對 nineteen）最容易混，聽到後再確認一次就不會跑錯。"
    },
    {
      "title": "💰 掃出來的價錢不對",
      "say": [
        {
          "en": "Excuse me, this was on sale for two ninety-nine, but it scanned for three ninety-nine.",
          "zh": "不好意思，這個特價 2.99，但掃出來是 3.99。"
        },
        {
          "en": "Could you check the price, please?",
          "zh": "可以幫我確認價錢嗎？"
        }
      ],
      "tip": "很多超市如果掃出來價錢與標示不同，通常會依標示價格結帳，請收銀員查一下就好。"
    },
    {
      "title": "🧊 買到過期或壞掉的東西",
      "say": [
        {
          "en": "Excuse me, this milk is expired. Could I exchange it?",
          "zh": "不好意思，這瓶牛奶過期了，可以換一瓶嗎？"
        },
        {
          "en": "I bought this yesterday, and it's spoiled. I have the receipt.",
          "zh": "這是我昨天買的，已經壞了，我有收據。"
        }
      ],
      "tip": "拿著收據和商品到服務台（Customer Service）就可以換或退，超市通常很願意處理。"
    },
    {
      "title": "🛍️ 忘記帶袋子",
      "hear": {
        "en": "Did you bring your own bags today?",
        "zh": "你今天有自備袋子嗎？"
      },
      "say": [
        {
          "en": "No, I forgot. Could I get a paper bag, please?",
          "zh": "沒有，我忘了。可以給我紙袋嗎？"
        },
        {
          "en": "I have my own bags, thanks.",
          "zh": "我有自備袋子，謝謝。"
        }
      ],
      "tip": "加州、紐約等很多州的超市袋子要另外收費（約 10 分錢），所以大家會自己帶環保袋。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "Rice is in aisle seven, near the pasta.",
      "prompt": "米在哪裡？",
      "options": [
        "第七走道，靠近義大利麵",
        "第十七走道",
        "乳製品區旁邊"
      ],
      "answer": 0,
      "note": "aisle seven 是第七走道；seventeen 才是第十七。"
    },
    {
      "type": "選擇回應",
      "audio": "Can I help you find something?",
      "prompt": "你想找醬油，最適合怎麼回答？",
      "options": [
        "Yes, I'm looking for soy sauce.",
        "Yes, I can.",
        "It's over there, thanks."
      ],
      "answer": 0,
      "note": "I'm looking for… 是「我在找……」。"
    },
    {
      "type": "聽數字",
      "audio": "Chicken breasts are two ninety-nine a pound.",
      "prompt": "雞胸肉每磅多少錢？",
      "options": [
        "$2.99",
        "$29.90",
        "$2.09"
      ],
      "answer": 0,
      "note": "two ninety-nine 是 2.99 元；a pound 是每磅。"
    },
    {
      "type": "選擇回應",
      "audio": "How thin would you like it sliced?",
      "prompt": "你要切薄一點，最適合怎麼回答？",
      "options": [
        "Pretty thin, please.",
        "About half a pound.",
        "It's very thin."
      ],
      "answer": 0,
      "note": "How thin 問的是厚度，回答 thin 或 thick。"
    },
    {
      "type": "選擇回應",
      "audio": "Paper or plastic?",
      "prompt": "你要紙袋，最適合怎麼回答？",
      "options": [
        "Paper, please.",
        "Yes, please.",
        "I'll pay by card."
      ],
      "answer": 0,
      "note": "A or B 的問句要直接選一個。"
    },
    {
      "type": "聽數字",
      "audio": "Your total is thirty-six twenty.",
      "prompt": "總共要付多少錢？",
      "options": [
        "$36.20",
        "$16.20",
        "$36.02"
      ],
      "answer": 0,
      "note": "thirty-six twenty 是 36.20；thirteen/thirty 要聽字尾。"
    },
    {
      "type": "聽懂意思",
      "audio": "Sorry, we're all out of that, I'm afraid.",
      "prompt": "店員說了什麼？",
      "options": [
        "那個商品賣完了",
        "那個商品在特價",
        "那個商品在後面"
      ],
      "answer": 0,
      "note": "be all out of… 是賣光了。"
    },
    {
      "type": "聽懂意思",
      "audio": "Do you want some cash back?",
      "prompt": "收銀員在問什麼？",
      "options": [
        "要不要刷卡順便領現金",
        "要不要紙袋",
        "要不要收據"
      ],
      "answer": 0,
      "note": "cash back 是用金融卡結帳時順便提領現金。"
    },
    {
      "type": "對話理解",
      "audio": "Hi, I have a coupon for the cereal, and I have my own bags, so I don't need any.",
      "prompt": "客人說了什麼？",
      "options": [
        "有麥片折價券，也不需要袋子",
        "沒有折價券，要兩個袋子",
        "要退麥片"
      ],
      "answer": 0,
      "note": "have my own bags 是自備袋子，所以不需要店家的袋子。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "Excuse me, this milk is expired. Could I exchange it for a fresh one?",
      "prompt": "客人要做什麼？",
      "options": [
        "把過期的牛奶換成新的",
        "買更多牛奶",
        "問牛奶在哪裡"
      ],
      "answer": 0,
      "note": "expired 是過期，exchange 是交換。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Hi! Can I help you find something?",
      "promptZh": "嗨！需要我幫你找什麼嗎？",
      "hint": "用 I'm looking for… 說你要找的東西",
      "expect": "looking for|where|do you (have|carry)|can you tell|i need",
      "model": "Yes, I'm looking for soy sauce.",
      "modelZh": "好，我在找醬油。"
    },
    {
      "prompt": "It's in aisle nine, on your right.",
      "promptZh": "在第九走道，你的右手邊。",
      "hint": "道謝，或再確認一次",
      "expect": "thank|thanks|aisle nine|got it|great|appreciate",
      "model": "Aisle nine. Great, thank you!",
      "modelZh": "第九走道，太好了，謝謝！"
    },
    {
      "prompt": "What can I get for you at the deli today?",
      "promptZh": "今天要在熟食區買什麼？",
      "hint": "用 Could I get… 說要買的東西和重量",
      "expect": "could i get|can i get|i'?d like|i'?ll have|pound|turkey|cheese|ham",
      "model": "Could I get half a pound of sliced turkey?",
      "modelZh": "我要半磅切片火雞肉。"
    },
    {
      "prompt": "How thin would you like it sliced?",
      "promptZh": "你要切多薄？",
      "hint": "說薄一點或厚一點",
      "expect": "thin|thick|medium|regular",
      "model": "Pretty thin, please.",
      "modelZh": "薄一點，謝謝。"
    },
    {
      "prompt": "Did you find everything okay?",
      "promptZh": "東西都找到了嗎？",
      "hint": "說找到了，或說還缺什麼",
      "expect": "yes|yeah|yep|found|thanks|everything|no|couldn'?t",
      "model": "Yes, I did, thanks.",
      "modelZh": "找到了，謝謝。"
    },
    {
      "prompt": "Do you have a rewards card?",
      "promptZh": "你有會員卡嗎？",
      "hint": "說有（電話號碼）或沒有",
      "expect": "yes|yeah|no|don'?t|phone number|number|card",
      "model": "Yes, it's under my phone number.",
      "modelZh": "有，登記在我的電話號碼。"
    },
    {
      "prompt": "Paper or plastic?",
      "promptZh": "要紙袋還是塑膠袋？",
      "hint": "選一個，或說自備袋子",
      "expect": "paper|plastic|own bag|my bag|bags",
      "model": "Paper, please.",
      "modelZh": "紙袋，謝謝。"
    },
    {
      "prompt": "Your total is thirty-six twenty. Cash or card?",
      "promptZh": "總共 36.20 元，付現還是刷卡？",
      "hint": "說 cash 或 card",
      "expect": "\\b(cash|card|credit|debit|tap|apple pay)\\b",
      "model": "Card, please.",
      "modelZh": "刷卡，謝謝。"
    }
  ],
  "culture": [
    {
      "t": "價格要看每磅或每個",
      "d": "美國的肉、水果常用 per pound（每磅）標價，1 磅約 454 公克。貨架標籤上常有兩個價錢：一個是商品價，一個是單位價（unit price），方便比較哪個划算。"
    },
    {
      "t": "會員卡才有特價",
      "d": "很多超市的特價只有出示會員卡或輸入電話號碼才給。辦卡通常免費，只要姓名和電話，也不需要有美國地址。"
    },
    {
      "t": "袋子可能要自己帶或付費",
      "d": "加州、紐約等許多州的超市不提供免費塑膠袋，紙袋或環保袋要另外付約 10 分錢。去之前帶自己的袋子最省事。"
    },
    {
      "t": "標價通常不含稅",
      "d": "美國的標價大多沒有包含銷售稅，結帳時才會加上，所以總金額會比貨架標價高一點。部分州的食物（生鮮雜貨）免稅。"
    },
    {
      "t": "自助結帳很常見",
      "d": "很多超市有自助結帳（self-checkout）：自己掃條碼、刷卡。商品沒掃到或機器報錯，旁邊的店員會過來幫忙，直接說 Could you help me, please? 就可以。"
    }
  ]
};
