// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "food-delivery",
  "title": "外送 App 與外帶",
  "en": "Food Delivery & Takeout",
  "emoji": "🛵",
  "goal": "學會打電話或用 App 點外帶與外送、留備註、和外送員溝通地址與放門口，並在送錯餐或漏餐時請客服處理",
  "speakers": {
    "S": {
      "name": "Restaurant Staff",
      "zh": "餐廳店員",
      "avatar": "👩‍🍳",
      "voice": "f"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♂️",
      "voice": "m"
    },
    "D": {
      "name": "Delivery Driver",
      "zh": "外送員",
      "avatar": "👩",
      "voice": "f2"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "打電話點外帶",
      "where": "電話中，向餐廳點外帶",
      "emoji": "📞",
      "lines": [
        {
          "s": "S",
          "en": "Thanks for calling Lucky Noodle House. Is this for pickup or delivery?",
          "zh": "謝謝來電 Lucky Noodle House。是要外帶還是外送？"
        },
        {
          "s": "Y",
          "en": "Hi. I'd like to place an order for pickup, please.",
          "zh": "嗨，我想點外帶。"
        },
        {
          "s": "S",
          "en": "Sure. What would you like?",
          "zh": "好的，你要點什麼？"
        },
        {
          "s": "Y",
          "en": "Can I get one beef noodle soup and an order of fried dumplings?",
          "zh": "我要一碗牛肉麵和一份煎餃。"
        },
        {
          "s": "S",
          "en": "Would you like the soup mild or spicy?",
          "zh": "湯要不辣還是辣的？"
        },
        {
          "s": "Y",
          "en": "Mild, please. And could you put the dumpling sauce on the side?",
          "zh": "不辣，謝謝。另外可以把餃子的醬放旁邊嗎？"
        },
        {
          "s": "S",
          "en": "No problem. Anything to drink?",
          "zh": "沒問題。要喝點什麼嗎？"
        },
        {
          "s": "Y",
          "en": "No, that's all. How long will it take?",
          "zh": "不用了，這樣就好。要等多久？"
        },
        {
          "s": "S",
          "en": "About twenty minutes. Can I get a name and phone number?",
          "zh": "大約二十分鐘。可以給我名字和電話嗎？"
        },
        {
          "s": "Y",
          "en": "It's Branden, B-R-A-N-D-E-N. My number is five-five-five, oh one four two.",
          "zh": "叫 Branden，拼法是 B-R-A-N-D-E-N，電話是 555-0142。"
        },
        {
          "s": "S",
          "en": "Great. That's sixteen forty-five. You can pay when you pick it up.",
          "zh": "好的，總共 16.45 元，取餐時付款就可以。"
        }
      ]
    },
    {
      "title": "外送員到了：地址與放門口",
      "where": "宿舍或公寓大樓門口，外送員打電話",
      "emoji": "🚪",
      "lines": [
        {
          "s": "D",
          "en": "Hi, this is your delivery driver. I'm outside the building, but I can't find the entrance.",
          "zh": "嗨，我是你的外送員。我在大樓外面，但找不到入口。"
        },
        {
          "s": "Y",
          "en": "Oh, sorry. The main entrance is on the side street. It's the door with the green sign.",
          "zh": "喔，抱歉。大門在側邊的街上，是掛綠色招牌的那扇門。"
        },
        {
          "s": "D",
          "en": "Okay, I see it. Which floor are you on?",
          "zh": "好，我看到了。你在幾樓？"
        },
        {
          "s": "Y",
          "en": "I'm in unit 3B, on the third floor. Could you leave it at the front desk?",
          "zh": "我在三樓的 3B 室。可以放在櫃台嗎？"
        },
        {
          "s": "D",
          "en": "Sure, I can do that. Do you want me to ring the buzzer too?",
          "zh": "可以。你要我也按電鈴嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, please. I'll come down right away.",
          "zh": "好，麻煩你，我馬上下去。"
        },
        {
          "s": "D",
          "en": "Great. I'm leaving the order at the front desk now.",
          "zh": "好的，我現在把餐點放在櫃台。"
        },
        {
          "s": "Y",
          "en": "Thank you so much. I'll add a tip in the app.",
          "zh": "非常謝謝你，我會在 App 裡加小費。"
        },
        {
          "s": "D",
          "en": "Thanks a lot! Enjoy your meal!",
          "zh": "太感謝了！祝你用餐愉快！"
        }
      ]
    },
    {
      "title": "餐點出問題：向客服反映",
      "where": "外送 App 的客服聊天或電話",
      "emoji": "😕",
      "lines": [
        {
          "s": "S",
          "en": "Thank you for contacting customer support. How can I help you?",
          "zh": "感謝聯絡客服，有什麼可以幫你的？"
        },
        {
          "s": "Y",
          "en": "Hi. My order arrived, but it's missing the fried dumplings.",
          "zh": "嗨，我的餐點送到了，但少了煎餃。"
        },
        {
          "s": "S",
          "en": "I'm sorry about that. Can I have your order number, please?",
          "zh": "很抱歉，可以給我你的訂單編號嗎？"
        },
        {
          "s": "Y",
          "en": "Sure. It's number four-eight-two-nine-one.",
          "zh": "好，是 48291。"
        },
        {
          "s": "S",
          "en": "Thanks. I see that the dumplings were charged to your order. Would you prefer a refund or a replacement?",
          "zh": "謝謝，我看到煎餃有收費。你要退款還是補送？"
        },
        {
          "s": "Y",
          "en": "A refund, please. I've already eaten the noodles.",
          "zh": "退款，謝謝。我已經吃完麵了。"
        },
        {
          "s": "S",
          "en": "No problem. I'll refund eight dollars to your original payment method.",
          "zh": "沒問題，我會退八塊錢到你原本的付款方式。"
        },
        {
          "s": "Y",
          "en": "How long will it take?",
          "zh": "要多久才會退到？"
        },
        {
          "s": "S",
          "en": "Usually three to five business days. I'm sorry again for the trouble.",
          "zh": "通常需要三到五個工作天，再次為造成的麻煩抱歉。"
        },
        {
          "s": "Y",
          "en": "Thanks for your help.",
          "zh": "謝謝你的幫忙。"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "I'd like to place an order for pickup.",
      "zh": "我想點外帶。"
    },
    {
      "en": "Is this for pickup or delivery?",
      "zh": "是外帶還是外送？"
    },
    {
      "en": "How long will it take?",
      "zh": "要等多久？"
    },
    {
      "en": "Could you put the sauce on the side?",
      "zh": "可以把醬放旁邊嗎？"
    },
    {
      "en": "No peanuts, please. I'm allergic.",
      "zh": "請不要放花生，我會過敏。"
    },
    {
      "en": "Can I get a name and phone number?",
      "zh": "可以給我名字和電話嗎？"
    },
    {
      "en": "Do you deliver to this address?",
      "zh": "你們外送到這個地址嗎？"
    },
    {
      "en": "Is there a delivery fee?",
      "zh": "有外送費嗎？"
    },
    {
      "en": "What's the minimum order for delivery?",
      "zh": "外送的最低消費是多少？"
    },
    {
      "en": "I'm outside the building.",
      "zh": "我在大樓外面。"
    },
    {
      "en": "Could you leave it at the door?",
      "zh": "可以放在門口嗎？"
    },
    {
      "en": "Could you leave it at the front desk?",
      "zh": "可以放在櫃台嗎？"
    },
    {
      "en": "I'll come down to get it.",
      "zh": "我會下去拿。"
    },
    {
      "en": "Can you give me your order number?",
      "zh": "可以給我你的訂單編號嗎？"
    },
    {
      "en": "My order is missing an item.",
      "zh": "我的餐點少了一樣東西。"
    },
    {
      "en": "I got the wrong order.",
      "zh": "我收到錯的餐點。"
    },
    {
      "en": "The food arrived cold.",
      "zh": "食物送到時是冷的。"
    },
    {
      "en": "I'd like a refund, please.",
      "zh": "我想退款。"
    },
    {
      "en": "Could you send a replacement?",
      "zh": "可以補送嗎？"
    },
    {
      "en": "I'll add a tip in the app.",
      "zh": "我會在 App 裡加小費。"
    }
  ],
  "hear": [
    {
      "en": "Is this for pickup or delivery?",
      "zh": "是外帶還是外送？",
      "reply": "Pickup, please.",
      "replyZh": "外帶，謝謝。"
    },
    {
      "en": "What would you like to order?",
      "zh": "你要點什麼？",
      "reply": "One beef noodle soup, please.",
      "replyZh": "一碗牛肉麵，謝謝。"
    },
    {
      "en": "Would you like it mild or spicy?",
      "zh": "你要不辣還是辣的？",
      "reply": "Mild, please.",
      "replyZh": "不辣，謝謝。"
    },
    {
      "en": "Do you have any food allergies?",
      "zh": "你有任何食物過敏嗎？",
      "reply": "Yes, I'm allergic to peanuts.",
      "replyZh": "有，我對花生過敏。"
    },
    {
      "en": "Can I get a name and phone number for the order?",
      "zh": "訂單可以留名字和電話嗎？",
      "reply": "Sure, it's Branden.",
      "replyZh": "好，叫 Branden。"
    },
    {
      "en": "It'll be ready in about twenty minutes.",
      "zh": "大約二十分鐘後好。",
      "reply": "Okay, I'll be there then.",
      "replyZh": "好，我到時候去。"
    },
    {
      "en": "I'm outside. Which floor are you on?",
      "zh": "我在外面，你在幾樓？",
      "reply": "Third floor, unit 3B.",
      "replyZh": "三樓，3B 室。"
    },
    {
      "en": "Do you want me to leave it at the door?",
      "zh": "你要我放在門口嗎？",
      "reply": "Yes, please. Thank you!",
      "replyZh": "好，麻煩你，謝謝！"
    },
    {
      "en": "Can I have your order number?",
      "zh": "可以給我你的訂單編號嗎？",
      "reply": "Sure. It's four-eight-two-nine-one.",
      "replyZh": "好，是 48291。"
    },
    {
      "en": "Would you like a refund or a replacement?",
      "zh": "你要退款還是補送？",
      "reply": "A refund, please.",
      "replyZh": "退款，謝謝。"
    }
  ],
  "say": [
    {
      "en": "Hi, I'd like to order two chicken sandwiches for pickup.",
      "zh": "嗨，我想點兩個雞肉三明治外帶。"
    },
    {
      "en": "Could I get that with no onions?",
      "zh": "可以不要洋蔥嗎？"
    },
    {
      "en": "How long is the wait for delivery?",
      "zh": "外送要等多久？"
    },
    {
      "en": "Could you leave it at the front desk, please?",
      "zh": "可以請你放在櫃台嗎？"
    },
    {
      "en": "I'm in unit 3B on the third floor.",
      "zh": "我在三樓的 3B 室。"
    },
    {
      "en": "I'll come down right away.",
      "zh": "我馬上下去。"
    },
    {
      "en": "Excuse me, I think there's something missing from my order.",
      "zh": "不好意思，我的餐點好像少了東西。"
    },
    {
      "en": "This isn't what I ordered.",
      "zh": "這不是我點的。"
    },
    {
      "en": "Could I get a refund for the missing item?",
      "zh": "少的那項可以退款嗎？"
    },
    {
      "en": "Sorry, could you say that again?",
      "zh": "不好意思，可以再說一次嗎？"
    }
  ],
  "vocab": [
    {
      "w": "takeout",
      "pos": "n.",
      "zh": "外帶",
      "ex": "I'll order takeout tonight.",
      "exzh": "我今晚要點外帶。"
    },
    {
      "w": "pickup",
      "pos": "n.",
      "zh": "自取",
      "ex": "The order is ready for pickup.",
      "exzh": "餐點準備好可以取餐了。"
    },
    {
      "w": "delivery",
      "pos": "n.",
      "zh": "外送",
      "ex": "Delivery takes about thirty minutes.",
      "exzh": "外送大約要三十分鐘。"
    },
    {
      "w": "delivery fee",
      "pos": "n.",
      "zh": "外送費",
      "ex": "The delivery fee is three dollars.",
      "exzh": "外送費是三塊錢。"
    },
    {
      "w": "order number",
      "pos": "n.",
      "zh": "訂單編號",
      "ex": "Please give me your order number.",
      "exzh": "請給我你的訂單編號。"
    },
    {
      "w": "tracking",
      "pos": "n.",
      "zh": "追蹤（訂單位置）",
      "ex": "I can see the driver on the tracking map.",
      "exzh": "我能在追蹤地圖上看到外送員。"
    },
    {
      "w": "front desk",
      "pos": "n.",
      "zh": "大樓櫃台",
      "ex": "Please leave it at the front desk.",
      "exzh": "請放在櫃台。"
    },
    {
      "w": "buzzer",
      "pos": "n.",
      "zh": "電鈴、對講機",
      "ex": "Ring the buzzer when you arrive.",
      "exzh": "到的時候請按電鈴。"
    },
    {
      "w": "missing",
      "pos": "adj.",
      "zh": "遺漏的、不見的",
      "ex": "One item is missing.",
      "exzh": "有一項餐點遺漏了。"
    },
    {
      "w": "refund",
      "pos": "n.",
      "zh": "退款",
      "ex": "I'd like a full refund.",
      "exzh": "我想要全額退款。"
    },
    {
      "w": "replacement",
      "pos": "n.",
      "zh": "補送、更換品",
      "ex": "Could you send a replacement?",
      "exzh": "可以補送嗎？"
    },
    {
      "w": "tip",
      "pos": "n./v.",
      "zh": "小費",
      "ex": "I'll tip the driver in the app.",
      "exzh": "我會在 App 裡給外送員小費。"
    }
  ],
  "situations": [
    {
      "title": "😵 電話那頭講很快",
      "hear": {
        "en": "Pickup or delivery, what's your order, and can I get a name and number?",
        "zh": "（講得很快）外帶還外送？要點什麼？可以給我名字和電話嗎？",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you ask one thing at a time?",
          "zh": "不好意思，可以一次問一件事嗎？"
        },
        {
          "en": "It's for pickup. One beef noodle soup, please.",
          "zh": "是外帶，一碗牛肉麵，謝謝。"
        }
      ],
      "tip": "電話點餐最常被問：取餐方式、品項、名字與電話。先準備好，並事先練習拼出自己的名字。"
    },
    {
      "title": "📍 外送員找不到地址",
      "hear": {
        "en": "I'm here, but I can't find your building.",
        "zh": "我到了，但找不到你的大樓。"
      },
      "say": [
        {
          "en": "I'll come out to meet you. I'm wearing a blue jacket.",
          "zh": "我出去找你，我穿藍色外套。"
        },
        {
          "en": "The entrance is on the side street, next to the coffee shop.",
          "zh": "入口在側邊的街上，咖啡店旁邊。"
        }
      ],
      "tip": "說明地標（旁邊有什麼店）和自己的外表，最容易找到。也可以用 App 的聊天功能傳照片。"
    },
    {
      "title": "🥡 餐點少了或送錯",
      "say": [
        {
          "en": "My order is missing the fried dumplings. Order number four-eight-two-nine-one.",
          "zh": "我的餐點少了煎餃，訂單編號 48291。"
        },
        {
          "en": "This isn't my order. I ordered the beef noodle soup, but I got fried rice.",
          "zh": "這不是我的餐點，我點牛肉麵，但收到炒飯。"
        }
      ],
      "tip": "收到餐點馬上檢查。發現問題請在 App 的 Help 或 Report an issue 回報，附上訂單編號與照片，通常會獲得退款或補送。"
    },
    {
      "title": "🧊 食物送到時冷掉了",
      "say": [
        {
          "en": "The food arrived cold. Could I get a refund or a credit?",
          "zh": "食物送到時是冷的，可以退款或給我點數嗎？"
        },
        {
          "en": "It took over an hour, and the soup spilled.",
          "zh": "花了超過一小時，而且湯灑出來了。"
        }
      ],
      "tip": "太晚到、溫度不對、灑出來都可以向客服反映。客氣說明事實，並說明你想要退款還是補送。"
    },
    {
      "title": "🚪 想請外送員放門口",
      "hear": {
        "en": "Where would you like me to leave it?",
        "zh": "你想要我放在哪裡？"
      },
      "say": [
        {
          "en": "Please leave it at the door, and send me a picture.",
          "zh": "請放在門口，並傳照片給我。"
        },
        {
          "en": "Please leave it at the front desk. I'll pick it up.",
          "zh": "請放在櫃台，我會去拿。"
        }
      ],
      "tip": "App 下單時就能填寫配送備註（Delivery instructions）：放門口、不要按電鈴、在大樓外面等，免得外送員多打電話。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "Is this for pickup or delivery?",
      "prompt": "店員在問什麼？",
      "options": [
        "外帶還是外送",
        "內用還是外帶",
        "現金還是刷卡"
      ],
      "answer": 0,
      "note": "pickup 是自取，delivery 是外送。"
    },
    {
      "type": "選擇回應",
      "audio": "Would you like it mild or spicy?",
      "prompt": "你要不辣的，最適合怎麼回答？",
      "options": [
        "Mild, please.",
        "Yes, please.",
        "It's twenty minutes."
      ],
      "answer": 0,
      "note": "mild 是溫和不辣。"
    },
    {
      "type": "聽數字",
      "audio": "That's sixteen forty-five. You can pay when you pick it up.",
      "prompt": "總共多少錢？",
      "options": [
        "$16.45",
        "$60.45",
        "$16.54"
      ],
      "answer": 0,
      "note": "sixteen forty-five 是 16.45 元。"
    },
    {
      "type": "聽數字",
      "audio": "It'll be ready in about twenty minutes.",
      "prompt": "多久後會好？",
      "options": [
        "大約二十分鐘",
        "大約十二分鐘",
        "大約兩分鐘"
      ],
      "answer": 0,
      "note": "twenty 是 20，twelve 是 12。"
    },
    {
      "type": "聽懂意思",
      "audio": "I'm outside the building, but I can't find the entrance.",
      "prompt": "外送員說了什麼？",
      "options": [
        "他在大樓外面，找不到入口",
        "他已經把餐點放在門口",
        "他今天不能送了"
      ],
      "answer": 0,
      "note": "entrance 是入口。"
    },
    {
      "type": "選擇回應",
      "audio": "Do you want me to leave it at the door?",
      "prompt": "你同意，最適合怎麼回答？",
      "options": [
        "Yes, please. Thank you!",
        "No, I'm outside.",
        "It's my order."
      ],
      "answer": 0,
      "note": "leave it at the door 是放門口。"
    },
    {
      "type": "聽懂意思",
      "audio": "Would you like a refund or a replacement?",
      "prompt": "客服在問什麼？",
      "options": [
        "要退款還是補送",
        "要不要小費",
        "要不要取消訂單"
      ],
      "answer": 0,
      "note": "refund 是退款，replacement 是補送。"
    },
    {
      "type": "聽懂意思",
      "audio": "It usually takes three to five business days to get your refund.",
      "prompt": "退款要多久？",
      "options": [
        "三到五個工作天",
        "三到五個小時",
        "當天"
      ],
      "answer": 0,
      "note": "business days 是工作天。"
    },
    {
      "type": "對話理解",
      "audio": "Hi, I'd like to place an order for pickup. One beef noodle soup, mild, and fried dumplings with the sauce on the side.",
      "prompt": "客人點了什麼？",
      "options": [
        "外帶：不辣牛肉麵和煎餃，醬放旁邊",
        "外送：炒飯",
        "內用：兩碗麵"
      ],
      "answer": 0,
      "note": "sauce on the side 是醬另外放。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "Hi, my order arrived, but it's missing the dumplings. I'd like a refund, please. My order number is four-eight-two-nine-one.",
      "prompt": "客人遇到什麼問題？",
      "options": [
        "餐點少了煎餃，想退款",
        "餐點太冷",
        "送錯地址"
      ],
      "answer": 0,
      "note": "missing 是漏了。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Thanks for calling. Is this for pickup or delivery?",
      "promptZh": "謝謝來電。是外帶還是外送？",
      "hint": "說 pickup 或 delivery",
      "expect": "pickup|pick up|delivery|deliver|take ?out",
      "model": "Pickup, please.",
      "modelZh": "外帶，謝謝。"
    },
    {
      "prompt": "What would you like to order?",
      "promptZh": "你要點什麼？",
      "hint": "用 Can I get… 點餐",
      "expect": "can i (get|have)|i'?d like|i'?ll have|noodle|soup|dumpling|rice|chicken",
      "model": "Can I get one beef noodle soup, please?",
      "modelZh": "我要一碗牛肉麵。"
    },
    {
      "prompt": "Would you like it mild or spicy?",
      "promptZh": "你要不辣還是辣的？",
      "hint": "選一個",
      "expect": "mild|spicy|medium|not spicy|hot",
      "model": "Mild, please.",
      "modelZh": "不辣，謝謝。"
    },
    {
      "prompt": "Do you have any food allergies?",
      "promptZh": "你有任何食物過敏嗎？",
      "hint": "說有或沒有",
      "expect": "allerg|no|none|nothing|peanut|nuts|shellfish",
      "model": "No, no allergies.",
      "modelZh": "沒有，沒有過敏。"
    },
    {
      "prompt": "Can I get a name and phone number for the order?",
      "promptZh": "可以給我名字和電話嗎？",
      "hint": "說名字和電話",
      "expect": "my name|it'?s|i'?m|number|five|\\d",
      "model": "Sure, it's Branden. My number is five-five-five, oh one four two.",
      "modelZh": "好，叫 Branden，電話是 555-0142。"
    },
    {
      "prompt": "Hi, I'm your delivery driver. I'm outside. Where should I leave it?",
      "promptZh": "嗨，我是外送員，我在外面，要放哪裡？",
      "hint": "說放門口或櫃台",
      "expect": "door|front desk|desk|lobby|come down|leave|here",
      "model": "Please leave it at the front desk. I'll come down.",
      "modelZh": "請放櫃台，我會下去。"
    },
    {
      "prompt": "Thank you for contacting support. How can I help?",
      "promptZh": "感謝聯絡客服，有什麼可以幫你的？",
      "hint": "說餐點有什麼問題",
      "expect": "missing|wrong|cold|late|refund|order|problem|isn'?t|didn'?t",
      "model": "My order is missing the fried dumplings.",
      "modelZh": "我的餐點少了煎餃。"
    },
    {
      "prompt": "Would you like a refund or a replacement?",
      "promptZh": "你要退款還是補送？",
      "hint": "選一個",
      "expect": "refund|replacement|credit|replace|send",
      "model": "A refund, please.",
      "modelZh": "退款，謝謝。"
    }
  ],
  "culture": [
    {
      "t": "外送與外帶的說法",
      "d": "外帶叫 pickup 或 takeout（英國叫 takeaway），外送叫 delivery。App 下單時會選 Pickup 或 Delivery。外送通常有外送費、服務費，還有給外送員的小費。"
    },
    {
      "t": "外送員的小費",
      "d": "外送員的小費通常是訂單金額的 15–20%，在 App 內下單或收餐後加。尖峰、下雨或路途遠時可以多給一點。"
    },
    {
      "t": "地址與備註要寫清楚",
      "d": "宿舍或公寓要寫完整的樓層和房號（如 Unit 3B），並在 Delivery instructions 寫「放門口」或「請打電話」。美國的外送員通常不會上樓，常常放在大樓櫃台或門口。"
    },
    {
      "t": "收到餐點先檢查",
      "d": "收到後馬上確認餐點有沒有少、有沒有送錯。有問題在 App 的 Help 裡回報，附上訂單編號和照片，通常可以得到退款、點數或補送。"
    },
    {
      "t": "點餐備註與過敏",
      "d": "有食物過敏一定要在備註寫清楚，例如 No peanuts, severe allergy。電話點餐時也要口頭說明，並請對方複述一次。"
    }
  ]
};
