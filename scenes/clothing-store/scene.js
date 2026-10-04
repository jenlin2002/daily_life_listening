// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "clothing-store",
  "title": "服飾店購物與結帳",
  "en": "Shopping & Retail",
  "emoji": "👗",
  "goal": "進店閒逛、找試衣間試穿洋裝、詢問米色款式、無袖/長裙版型與櫃台刷卡結帳。",
  "videos": [
    {
      "id": "kdQYKdbAiFs",
      "title": "5-Minute English Conversation Practice: Shopping for Clothes (English Together)"
    },
    {
      "id": "ad8a2BiXulw",
      "title": "Shopping for Clothes – English Conversation (EverydayEnglish)"
    },
    {
      "id": "aWSg7MsHYpU",
      "title": "Shopping for Clothes: Colours & Sizes (Lina’s Classroom Story)"
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
      "name": "Forever staff",
      "zh": "店員",
      "avatar": "👩",
      "voice": "f2"
    }
  },
  "dialogues": [
    {
      "title": "去Forever21買衣服",
      "where": "去Forever21買衣服",
      "emoji": "👗",
      "lines": [
        {
          "s": "S",
          "en": "Hi, welcome! Are you looking for anything specific today?",
          "zh": "嗨，歡迎光臨！今天有特別想找的東西嗎？"
        },
        {
          "s": "Y",
          "en": "No, I'm just browsing. Excuse me, where is the fitting room?",
          "zh": "沒有，我只是隨便看看。不好意思，請問試衣間在哪裡？"
        },
        {
          "s": "S",
          "en": "Straight down the hall way to the right.",
          "zh": "一直走過走廊，然後右轉。"
        },
        {
          "s": "Y",
          "en": "Excuse me, do you have this dress in a different color? I was hoping it comes in beige.",
          "zh": "不好意思，這件有其他顏色嗎？我真希望有米色的。"
        },
        {
          "s": "S",
          "en": "We're looking at a beige strapless midi dress with a satin texture. I'll bring it to the fitting room for you.",
          "zh": "我們看這款米色中長平肩緞面洋裝，我幫您送去試衣間。"
        },
        {
          "s": "Y",
          "en": "I'll take this one. Where is the register… Ah found it.",
          "zh": "我要這件。收銀台在哪裡……啊找到了。"
        },
        {
          "s": "S",
          "en": "Your total's gonna be $87.63 today. Cash or card? Did you need a bag?",
          "zh": "今天的總金額是87.63美元。你要付現還是刷卡？需要袋子嗎？"
        },
        {
          "s": "Y",
          "en": "Card, and yes please. Thanks, you as well!",
          "zh": "刷卡，要袋子，謝謝，祝您也有美好一天！"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "Are you looking for anything specific / particular today?",
      "zh": "你今天有特別想找什麼嗎？"
    },
    {
      "en": "Just browsing / looking.",
      "zh": "只是隨便看看。"
    },
    {
      "en": "Let me know if you need help with anything.",
      "zh": "如果需要幫忙隨時告訴我。"
    },
    {
      "en": "Where is the fitting room?",
      "zh": "請問試衣間在哪裡？"
    },
    {
      "en": "Straight down the hallway to the right.",
      "zh": "沿著走廊直走，在右邊。"
    },
    {
      "en": "I'll go try it on.",
      "zh": "我去試穿看看。"
    },
    {
      "en": "I was hoping it comes in beige.",
      "zh": "我真希望有米色的款式。"
    },
    {
      "en": "Do you have this dress in a different color?",
      "zh": "這件洋裝有其他顏色嗎？"
    },
    {
      "en": "I can help you with that.",
      "zh": "我可以幫你看看。"
    },
    {
      "en": "It is available online and in store.",
      "zh": "這款線上和門市都可以買到。"
    },
    {
      "en": "It comes in these colors.",
      "zh": "有這些顏色。"
    },
    {
      "en": "Are you looking for a going out dress or a (more) casual dress?",
      "zh": "妳是想找正式外出穿的洋裝還是比較休閒的洋裝？"
    },
    {
      "en": "Do you want a maxi dress like this one or midi or mini?",
      "zh": "你想要像這樣的長裙，還是中長裙或短裙？"
    },
    {
      "en": "Sleeveless, shortsleeves, longsleeves, strapless, or no preference?",
      "zh": "（袖子要）無袖、短袖、長袖、平肩還是沒特別偏好？"
    },
    {
      "en": "One is a sleeveless denim maxi with the buttons.",
      "zh": "第一件是無袖牛仔長裙，帶有鈕扣設計。"
    },
    {
      "en": "Where is the register? / Where do I check out / pay?",
      "zh": "收銀台在哪裡？"
    },
    {
      "en": "Are you a member with us?",
      "zh": "您是我們的會員嗎？"
    },
    {
      "en": "Your total's gonna be $87.63 today.",
      "zh": "今天的總金額是87.63美金。"
    },
    {
      "en": "Cash or card?",
      "zh": "你要支付現金還是刷卡？"
    },
    {
      "en": "When you're ready, it'll ask you a question on the screen.",
      "zh": "等您準備好後，螢幕上會有問題讓您回答。"
    },
    {
      "en": "Did you need a bag?",
      "zh": "需要袋子嗎？"
    },
    {
      "en": "Do you want a copy of your receipt? / Would you like a receipt?",
      "zh": "需要收據嗎？"
    }
  ],
  "hear": [
    {
      "en": "Hi, welcome! Are you looking for anything specific today?",
      "zh": "嗨，歡迎光臨！今天有想找什麼特別的嗎？",
      "reply": "No, I'm just browsing, thanks.",
      "replyZh": "沒有，我只是隨便逛逛，謝謝。"
    },
    {
      "en": "Let me know if you need any help.",
      "zh": "需要幫忙的話跟我說。",
      "reply": "Thanks, I will.",
      "replyZh": "謝謝，我會的。"
    },
    {
      "en": "Would you like to try that on?",
      "zh": "你想試穿嗎？",
      "reply": "Yes, please. Where's the fitting room?",
      "replyZh": "好，請問試衣間在哪裡？"
    },
    {
      "en": "The fitting room is straight down the hall on your right.",
      "zh": "試衣間直走走廊的右手邊。",
      "reply": "Got it. Thank you!",
      "replyZh": "知道了，謝謝！"
    },
    {
      "en": "How does it fit?",
      "zh": "穿起來合身嗎？",
      "reply": "It's a little tight. Do you have a bigger size?",
      "replyZh": "有點緊，有大一號的嗎？"
    },
    {
      "en": "What size are you looking for?",
      "zh": "你要找什麼尺寸？",
      "reply": "A medium, please.",
      "replyZh": "M 號，謝謝。"
    },
    {
      "en": "We're having a sale. Everything's thirty percent off.",
      "zh": "我們在特價，全部打七折。",
      "reply": "Oh nice! That's a good deal.",
      "replyZh": "太好了！很划算。"
    },
    {
      "en": "Would you like a bag?",
      "zh": "需要袋子嗎？",
      "reply": "Yes, please. Thanks.",
      "replyZh": "要，謝謝。"
    },
    {
      "en": "Do you have our store credit card?",
      "zh": "你有我們的店家信用卡嗎？",
      "reply": "No, I don't. Just a regular card.",
      "replyZh": "沒有，我用一般的卡就好。"
    },
    {
      "en": "You have thirty days to return it with the receipt.",
      "zh": "你有三十天可以憑收據退貨。",
      "reply": "Great, thanks for letting me know.",
      "replyZh": "太好了，謝謝你告訴我。"
    }
  ],
  "say": [
    {
      "en": "I'm just browsing, thanks.",
      "zh": "我只是隨便看看，謝謝。"
    },
    {
      "en": "Excuse me, where is the fitting room?",
      "zh": "不好意思，請問試衣間在哪裡？"
    },
    {
      "en": "Do you have this in a different color?",
      "zh": "這件有其他顏色嗎？"
    },
    {
      "en": "Do you have this in a medium?",
      "zh": "這件有 M 號嗎？"
    },
    {
      "en": "It's a little too tight. Do you have a bigger size?",
      "zh": "有點太緊了，有大一號的嗎？"
    },
    {
      "en": "Is this on sale?",
      "zh": "這件有特價嗎？"
    },
    {
      "en": "I'll take this one.",
      "zh": "我要買這件。"
    },
    {
      "en": "Can I return this if it doesn't fit?",
      "zh": "如果不合身可以退貨嗎？"
    }
  ],
  "vocab": [
    {
      "w": "browse",
      "pos": "v.",
      "zh": "隨意逛、瀏覽",
      "ex": "I'm just browsing.",
      "exzh": "我只是逛逛。"
    },
    {
      "w": "fitting room",
      "pos": "n.",
      "zh": "試衣間",
      "ex": "Where's the fitting room?",
      "exzh": "試衣間在哪裡？"
    },
    {
      "w": "try on",
      "pos": "phr. v.",
      "zh": "試穿",
      "ex": "Can I try this on?",
      "exzh": "我可以試穿這件嗎？"
    },
    {
      "w": "size",
      "pos": "n.",
      "zh": "尺寸",
      "ex": "What size do you wear?",
      "exzh": "你穿什麼尺寸？"
    },
    {
      "w": "tight / loose",
      "pos": "adj.",
      "zh": "緊的／寬鬆的",
      "ex": "These jeans are too tight.",
      "exzh": "這件牛仔褲太緊了。"
    },
    {
      "w": "on sale",
      "pos": "phr.",
      "zh": "特價中",
      "ex": "Everything is on sale today.",
      "exzh": "今天全部特價。"
    },
    {
      "w": "register / checkout",
      "pos": "n.",
      "zh": "收銀台／結帳櫃台",
      "ex": "The register is by the door.",
      "exzh": "收銀台在門口旁邊。"
    },
    {
      "w": "receipt",
      "pos": "n.",
      "zh": "收據",
      "ex": "Keep your receipt for returns.",
      "exzh": "退貨要留著收據。"
    },
    {
      "w": "return",
      "pos": "v.",
      "zh": "退貨",
      "ex": "I'd like to return this shirt.",
      "exzh": "我想退這件襯衫。"
    },
    {
      "w": "midi dress",
      "pos": "n.",
      "zh": "及膝或小腿長度的洋裝",
      "ex": "I'm looking for a beige midi dress.",
      "exzh": "我在找一件米色的中長洋裝。"
    }
  ],
  "situations": [
    {
      "title": "🙋 店員一直跟著你問東問西",
      "hear": {
        "en": "Can I help you find anything?",
        "zh": "需要我幫你找什麼嗎？"
      },
      "say": [
        {
          "en": "I'm just looking for now, thanks.",
          "zh": "我現在只是看看，謝謝。"
        },
        {
          "en": "I'll let you know if I need anything.",
          "zh": "需要的話我會跟你說。"
        }
      ],
      "tip": "想自己慢慢逛，禮貌回 I'm just looking 或 I'm just browsing 就好。"
    },
    {
      "title": "📏 尺寸不合",
      "hear": {
        "en": "How does it fit?",
        "zh": "穿起來怎麼樣？合身嗎？"
      },
      "say": [
        {
          "en": "It's a bit small. Do you have a large?",
          "zh": "有點小，你們有 L 號嗎？"
        },
        {
          "en": "Could you check if you have it in the back?",
          "zh": "可以幫我看看倉庫有沒有嗎？"
        }
      ],
      "tip": "美國的尺寸和台灣不同，通常偏大，不確定時多拿一個尺寸進去試。"
    },
    {
      "title": "🏷️ 想問價錢或折扣",
      "say": [
        {
          "en": "How much is this?",
          "zh": "這件多少錢？"
        },
        {
          "en": "Do you have any discounts or coupons?",
          "zh": "你們有折扣或優惠券嗎？"
        }
      ],
      "tip": "美國標價通常不含稅，結帳時會再加銷售稅，所以總金額會比標價高一點。"
    },
    {
      "title": "↩️ 買回家才發現想退貨",
      "hear": {
        "en": "Do you have the receipt?",
        "zh": "你有收據嗎？"
      },
      "say": [
        {
          "en": "Yes, here you go. It doesn't fit me.",
          "zh": "有，在這裡。這件我穿不下。"
        },
        {
          "en": "Can I get a refund or exchange it for a different size?",
          "zh": "我可以退款，或換不同尺寸嗎？"
        }
      ],
      "tip": "refund 是退款，exchange 是換貨。大多數店要求帶收據和吊牌，在期限內才能退。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "Are you looking for anything specific today?",
      "prompt": "店員在問什麼？",
      "options": [
        "你有沒有特別想找的東西",
        "你要買幾件",
        "你要怎麼付錢"
      ],
      "answer": 0,
      "note": "specific 是「特定的」。"
    },
    {
      "type": "選擇回應",
      "audio": "Let me know if you need any help.",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "Yes, I need.",
        "Thanks, I will.",
        "I'm a customer."
      ],
      "answer": 1,
      "note": "店員只是禮貌，回答 Thanks, I will 就好。"
    },
    {
      "type": "聽懂意思",
      "audio": "The fitting room is straight down the hall on your right.",
      "prompt": "試衣間在哪裡？",
      "options": [
        "在門口左邊",
        "在二樓",
        "沿走廊直走右手邊"
      ],
      "answer": 2,
      "note": "straight down = 一直往前；on your right = 在你的右手邊。"
    },
    {
      "type": "選擇回應",
      "audio": "How does it fit?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "It's a little tight.",
        "It's a dress.",
        "I'm a medium."
      ],
      "answer": 0,
      "note": "How does it fit? 問穿起來合不合身。"
    },
    {
      "type": "聽數字",
      "audio": "Your total comes to eighty-seven sixty-three.",
      "prompt": "你要付多少錢？",
      "options": [
        "$876.30",
        "$87.63",
        "$8.76"
      ],
      "answer": 1,
      "note": "eighty-seven sixty-three = 87.63 元。"
    },
    {
      "type": "聽懂意思",
      "audio": "Everything in the store is thirty percent off today.",
      "prompt": "今天店裡有什麼優惠？",
      "options": [
        "全部三折",
        "買三送一",
        "全部打七折"
      ],
      "answer": 2,
      "note": "thirty percent off = 少 30%，也就是打七折。"
    },
    {
      "type": "選擇回應",
      "audio": "Would you like a bag?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "Yes, please. Thanks.",
        "Yes, I'm a bag.",
        "No, I'm not."
      ],
      "answer": 0,
      "note": "要袋子回 Yes, please；不要回 No, I'm good。"
    },
    {
      "type": "對話理解",
      "audio": "You can return anything within thirty days as long as you have the receipt and the tags are still on.",
      "prompt": "要符合什麼條件才能退貨？",
      "options": [
        "三十天內，付現金才行",
        "三十天內，有收據、吊牌還在",
        "只要穿過就可以"
      ],
      "answer": 1,
      "note": "tags 是衣服上的吊牌；as long as = 只要。"
    }
  ],
  "roleplay": [
    {
      "prompt": "Hi, welcome! Are you looking for anything specific today?",
      "promptZh": "嗨，歡迎光臨！今天有想找什麼嗎？",
      "hint": "說只是看看，或說想找什麼",
      "expect": "browsing|looking|just|dress|shirt|jeans|something|find",
      "model": "No, I'm just browsing, thanks.",
      "modelZh": "沒有，我只是隨便逛逛，謝謝。"
    },
    {
      "prompt": "Would you like to try that on?",
      "promptZh": "你想試穿嗎？",
      "hint": "說要試穿，並問試衣間",
      "expect": "yes|yeah|sure|please|fitting room|try",
      "model": "Yes, please. Where is the fitting room?",
      "modelZh": "好，請問試衣間在哪裡？"
    },
    {
      "prompt": "How does it fit?",
      "promptZh": "穿起來合身嗎？",
      "hint": "說大小是否剛好",
      "expect": "fit|tight|small|big|large|loose|perfect|good|great|size",
      "model": "It's a little tight. Do you have a bigger size?",
      "modelZh": "有點緊，有大一號的嗎？"
    },
    {
      "prompt": "Sorry, we're out of that color in your size.",
      "promptZh": "抱歉，你的尺寸這個顏色賣完了。",
      "hint": "問其他顏色或其他店有沒有",
      "expect": "another|other|different|color|colour|any|other store|check",
      "model": "Do you have it in a different color?",
      "modelZh": "有其他顏色嗎？"
    },
    {
      "prompt": "Your total's eighty-seven sixty-three. Cash or card?",
      "promptZh": "總共 87.63 元，付現還是刷卡？",
      "hint": "說付款方式",
      "expect": "cash|card|credit|debit|tap|apple pay",
      "model": "Card, please.",
      "modelZh": "刷卡，謝謝。"
    },
    {
      "prompt": "Did you need a bag?",
      "promptZh": "需要袋子嗎？",
      "hint": "回答要或不要",
      "expect": "yes|yeah|please|no|i'?m good|that'?s fine|bag",
      "model": "Yes, please. Thank you!",
      "modelZh": "要，謝謝！"
    }
  ],
  "culture": [
    {
      "t": "店員的招呼是禮貌，不是推銷",
      "d": "美國店員會說 How are you? 或 Let me know if you need help，只是打招呼。回答 Good, thanks 或 Just browsing 就可以。"
    },
    {
      "t": "尺寸偏大、試穿很重要",
      "d": "美國服飾的尺寸通常比台灣大，S、M、L 之外還有 XS、XL。不同品牌差很多，買之前先進試衣間試穿最準。"
    },
    {
      "t": "標價不含稅",
      "d": "美國商品標價通常不含 sales tax（銷售稅），每州稅率不同。結帳時才加上去，所以金額會比標價多。"
    },
    {
      "t": "退貨很常見",
      "d": "多數美國服飾店接受退貨，要留收據、吊牌，通常在 14 到 30 天內。在店裡直接說 I'd like to return this 就可以。"
    }
  ]
};
