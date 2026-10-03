// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "online-order",
  "title": "網購包裹出問題",
  "en": "Online Order Problems",
  "emoji": "📱",
  "goal": "學會向網購客服說明包裹沒收到、送錯或破損，提供訂單編號與照片，選擇退款或換貨，並了解退貨標籤與退款時間",
  "speakers": {
    "S": {
      "name": "Support Agent",
      "zh": "客服人員",
      "avatar": "👨‍💼",
      "voice": "m2"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♀️",
      "voice": "f"
    },
    "C": {
      "name": "Delivery Service",
      "zh": "快遞客服",
      "avatar": "👩‍💼",
      "voice": "f3"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "包裹顯示已送達，但我沒收到",
      "where": "網購客服聊天（電話中）",
      "emoji": "📭",
      "lines": [
        {
          "s": "S",
          "en": "Thank you for contacting customer support. How can I help you today?",
          "zh": "感謝你聯絡客服，今天有什麼可以幫你的？"
        },
        {
          "s": "Y",
          "en": "Hi. My package says it was delivered yesterday, but I never got it.",
          "zh": "嗨，我的包裹顯示昨天已送達，但我根本沒收到。"
        },
        {
          "s": "S",
          "en": "I'm sorry to hear that. Could I have your order number, please?",
          "zh": "很抱歉聽到這件事。可以給我你的訂單編號嗎？"
        },
        {
          "s": "Y",
          "en": "Sure. It's six-one-seven-four-two-nine.",
          "zh": "好，是 617429。"
        },
        {
          "s": "S",
          "en": "Thanks. Let me check. It says the package was left at the front door at two fifteen p.m.",
          "zh": "謝謝，我查一下。顯示包裹下午兩點十五分放在大門口。"
        },
        {
          "s": "Y",
          "en": "I was home all afternoon. I checked the door, the mailroom, and my neighbors.",
          "zh": "我整個下午都在家。我檢查了大門、收發室，還問了鄰居。"
        },
        {
          "s": "S",
          "en": "Okay. Did you check the address on the order? Sometimes packages go to the wrong unit.",
          "zh": "好的。你有確認訂單上的地址嗎？有時候包裹會送錯戶。"
        },
        {
          "s": "Y",
          "en": "Yes, it's correct. It's apartment 3B.",
          "zh": "有，地址是對的，是 3B 公寓。"
        },
        {
          "s": "S",
          "en": "I'll open an investigation with the carrier. In the meantime, would you like a replacement or a refund?",
          "zh": "我會向快遞公司展開調查。在此期間，你想要補寄還是退款？"
        },
        {
          "s": "Y",
          "en": "A replacement, please. I need it for class next week.",
          "zh": "補寄，謝謝。我下週上課要用。"
        }
      ]
    },
    {
      "title": "收到破損或錯誤的商品",
      "where": "網購客服聊天",
      "emoji": "💥",
      "lines": [
        {
          "s": "Y",
          "en": "Hi. I received my order today, but the headphones are broken.",
          "zh": "嗨，我今天收到訂單，但耳機是壞的。"
        },
        {
          "s": "S",
          "en": "I'm very sorry about that. Can you tell me what happened?",
          "zh": "非常抱歉。可以告訴我發生什麼事嗎？"
        },
        {
          "s": "Y",
          "en": "The left side doesn't work at all. And the box was damaged when it arrived.",
          "zh": "左邊完全沒有聲音，而且箱子送到時就壞了。"
        },
        {
          "s": "S",
          "en": "Could you send me a few photos of the box and the headphones?",
          "zh": "可以傳幾張箱子和耳機的照片給我嗎？"
        },
        {
          "s": "Y",
          "en": "Sure. I'm uploading them now. Did you get them?",
          "zh": "好，我正在上傳。你收到了嗎？"
        },
        {
          "s": "S",
          "en": "Yes, I see them. That's clearly damaged. I can send you a new pair or give you a full refund.",
          "zh": "有，我看到了，確實是壞了。我可以寄一副新的給你，或全額退款。"
        },
        {
          "s": "Y",
          "en": "I'd like a new pair, please. Do I need to send the broken ones back?",
          "zh": "我想要一副新的，我需要把壞的寄回去嗎？"
        },
        {
          "s": "S",
          "en": "Yes, I'll email you a prepaid return label. You can print it or show the QR code at the shipping store.",
          "zh": "要，我會用 email 寄預付的退貨標籤給你。你可以列印，或在寄件店出示 QR code。"
        },
        {
          "s": "Y",
          "en": "Great. When will the new pair arrive?",
          "zh": "太好了，新的什麼時候會到？"
        },
        {
          "s": "S",
          "en": "It should arrive in three to five business days. Here's your case number for reference.",
          "zh": "應該三到五個工作天內送達。這是你的案件編號，供你參考。"
        }
      ]
    },
    {
      "title": "申請退貨與退款",
      "where": "網購 App 的退貨流程與客服",
      "emoji": "↩️",
      "lines": [
        {
          "s": "Y",
          "en": "Hi. I'd like to return a jacket I bought last week. It doesn't fit.",
          "zh": "嗨，我想退上週買的外套，它不合身。"
        },
        {
          "s": "S",
          "en": "No problem. You can return it within thirty days. Do you have the original packaging?",
          "zh": "沒問題。三十天內可以退貨。你有保留原本的包裝嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, and the tags are still on it.",
          "zh": "有，而且吊牌都還在。"
        },
        {
          "s": "S",
          "en": "Great. I'll email you a return label. Just print it and drop the package off at any shipping location.",
          "zh": "太好了。我會寄退貨標籤給你，列印出來，把包裹交給任何寄件地點就可以。"
        },
        {
          "s": "Y",
          "en": "Do I have to pay for the return shipping?",
          "zh": "我需要自己付退貨運費嗎？"
        },
        {
          "s": "S",
          "en": "For wrong-size returns, a seven dollar fee is deducted from your refund.",
          "zh": "尺寸不合的退貨，會從退款中扣除七塊錢的運費。"
        },
        {
          "s": "Y",
          "en": "That's fine. When will I get my refund?",
          "zh": "沒關係。我什麼時候會收到退款？"
        },
        {
          "s": "S",
          "en": "After we receive the package, it takes about five to seven business days to go back to your card.",
          "zh": "我們收到包裹後，大約需要五到七個工作天退回你的卡。"
        },
        {
          "s": "Y",
          "en": "Okay. Can I track the return?",
          "zh": "好的，我可以追蹤退貨嗎？"
        },
        {
          "s": "S",
          "en": "Yes, you'll get a tracking number in the email, and we'll send updates.",
          "zh": "可以，email 裡會有追蹤編號，我們也會寄更新通知。"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "My package says delivered, but I didn't get it.",
      "zh": "我的包裹顯示已送達，但我沒收到。"
    },
    {
      "en": "My order hasn't arrived yet.",
      "zh": "我的訂單還沒有到。"
    },
    {
      "en": "Could you check the tracking number?",
      "zh": "可以幫我查追蹤編號嗎？"
    },
    {
      "en": "My order number is six-one-seven-four-two-nine.",
      "zh": "我的訂單編號是 617429。"
    },
    {
      "en": "I checked with my neighbors and the mailroom.",
      "zh": "我問過鄰居和收發室了。"
    },
    {
      "en": "I received the wrong item.",
      "zh": "我收到錯誤的商品。"
    },
    {
      "en": "The item arrived damaged.",
      "zh": "商品送到時就是壞的。"
    },
    {
      "en": "It doesn't work.",
      "zh": "它不能用。"
    },
    {
      "en": "I'd like to send you some photos.",
      "zh": "我想傳幾張照片給你。"
    },
    {
      "en": "I'd like a refund, please.",
      "zh": "我想退款。"
    },
    {
      "en": "Could you send a replacement?",
      "zh": "可以補寄一個嗎？"
    },
    {
      "en": "How do I return this item?",
      "zh": "我要怎麼退這個商品？"
    },
    {
      "en": "Do I have to pay for return shipping?",
      "zh": "我需要付退貨運費嗎？"
    },
    {
      "en": "Can I print a return label?",
      "zh": "我可以列印退貨標籤嗎？"
    },
    {
      "en": "When will I get my refund?",
      "zh": "我什麼時候會收到退款？"
    },
    {
      "en": "Can I track the return?",
      "zh": "我可以追蹤退貨嗎？"
    },
    {
      "en": "Could I get a case number?",
      "zh": "可以給我案件編號嗎？"
    },
    {
      "en": "Is it still within the return window?",
      "zh": "還在退貨期限內嗎？"
    },
    {
      "en": "I was charged twice for the same order.",
      "zh": "同一筆訂單我被扣了兩次款。"
    },
    {
      "en": "Could you cancel my order?",
      "zh": "可以幫我取消訂單嗎？"
    }
  ],
  "hear": [
    {
      "en": "Could I have your order number?",
      "zh": "可以給我你的訂單編號嗎？",
      "reply": "Sure. It's six-one-seven-four-two-nine.",
      "replyZh": "好，是 617429。"
    },
    {
      "en": "Did you check with your neighbors or the mailroom?",
      "zh": "你有問過鄰居或收發室嗎？",
      "reply": "Yes, they don't have it.",
      "replyZh": "有，他們都沒有。"
    },
    {
      "en": "Is the shipping address correct?",
      "zh": "運送地址正確嗎？",
      "reply": "Yes, it's apartment 3B.",
      "replyZh": "對，是 3B 公寓。"
    },
    {
      "en": "I'll open an investigation with the carrier.",
      "zh": "我會向快遞公司展開調查。",
      "reply": "How long will that take?",
      "replyZh": "那要多久？"
    },
    {
      "en": "Would you prefer a replacement or a refund?",
      "zh": "你想要補寄還是退款？",
      "reply": "A replacement, please.",
      "replyZh": "補寄，謝謝。"
    },
    {
      "en": "Could you send me a photo of the damage?",
      "zh": "可以傳一張損壞的照片給我嗎？",
      "reply": "Sure. I'll upload it now.",
      "replyZh": "好，我現在上傳。"
    },
    {
      "en": "I'll email you a prepaid return label.",
      "zh": "我會寄預付的退貨標籤給你。",
      "reply": "Thanks. Where do I drop it off?",
      "replyZh": "謝謝，我要在哪裡寄？"
    },
    {
      "en": "It should arrive in three to five business days.",
      "zh": "應該三到五個工作天內送達。",
      "reply": "Okay. Can I get a tracking number?",
      "replyZh": "好，可以給我追蹤編號嗎？"
    },
    {
      "en": "The refund will go back to your original payment method.",
      "zh": "退款會退回你原本的付款方式。",
      "reply": "How long does that take?",
      "replyZh": "要多久？"
    },
    {
      "en": "Is there anything else I can help you with?",
      "zh": "還有什麼我可以幫你的嗎？",
      "reply": "No, that's all. Thank you!",
      "replyZh": "沒有了，謝謝！"
    }
  ],
  "say": [
    {
      "en": "Hi, I have a problem with my order.",
      "zh": "嗨，我的訂單有問題。"
    },
    {
      "en": "The tracking says delivered, but I haven't received anything.",
      "zh": "追蹤顯示已送達，但我什麼都沒收到。"
    },
    {
      "en": "I ordered a blue one, but I got a black one.",
      "zh": "我訂的是藍色，但收到黑色。"
    },
    {
      "en": "The box was damaged when it arrived.",
      "zh": "箱子送到時就壞了。"
    },
    {
      "en": "I'll send you photos right away.",
      "zh": "我馬上傳照片給你。"
    },
    {
      "en": "Could you refund the full amount, please?",
      "zh": "可以請你全額退款嗎？"
    },
    {
      "en": "Could you ship a new one to me?",
      "zh": "可以幫我寄一個新的嗎？"
    },
    {
      "en": "Where do I drop off the return?",
      "zh": "我要在哪裡寄出退貨？"
    },
    {
      "en": "Could you send me the case number by email?",
      "zh": "可以用 email 把案件編號寄給我嗎？"
    },
    {
      "en": "Sorry, could you say that again?",
      "zh": "不好意思，可以再說一次嗎？"
    }
  ],
  "vocab": [
    {
      "w": "order number",
      "pos": "n.",
      "zh": "訂單編號",
      "ex": "Please give me your order number.",
      "exzh": "請給我你的訂單編號。"
    },
    {
      "w": "tracking number",
      "pos": "n.",
      "zh": "追蹤編號",
      "ex": "You can use the tracking number online.",
      "exzh": "你可以在網路上用追蹤編號查詢。"
    },
    {
      "w": "carrier",
      "pos": "n.",
      "zh": "快遞公司",
      "ex": "We'll contact the carrier.",
      "exzh": "我們會聯絡快遞公司。"
    },
    {
      "w": "delivered",
      "pos": "adj.",
      "zh": "已送達的",
      "ex": "The status says delivered.",
      "exzh": "狀態顯示已送達。"
    },
    {
      "w": "damaged",
      "pos": "adj.",
      "zh": "損壞的",
      "ex": "The item is damaged.",
      "exzh": "商品損壞了。"
    },
    {
      "w": "wrong item",
      "pos": "n.",
      "zh": "錯誤商品",
      "ex": "I received the wrong item.",
      "exzh": "我收到錯誤的商品。"
    },
    {
      "w": "replacement",
      "pos": "n.",
      "zh": "補寄、替代品",
      "ex": "We can send a replacement.",
      "exzh": "我們可以補寄。"
    },
    {
      "w": "refund",
      "pos": "n./v.",
      "zh": "退款",
      "ex": "You'll get a full refund.",
      "exzh": "你會獲得全額退款。"
    },
    {
      "w": "return label",
      "pos": "n.",
      "zh": "退貨標籤",
      "ex": "Print the return label.",
      "exzh": "請列印退貨標籤。"
    },
    {
      "w": "case number",
      "pos": "n.",
      "zh": "案件編號",
      "ex": "Here is your case number.",
      "exzh": "這是你的案件編號。"
    },
    {
      "w": "investigation",
      "pos": "n.",
      "zh": "調查",
      "ex": "We'll open an investigation.",
      "exzh": "我們會展開調查。"
    },
    {
      "w": "charge",
      "pos": "n./v.",
      "zh": "扣款、費用",
      "ex": "I see a charge on my card.",
      "exzh": "我的卡上有一筆扣款。"
    }
  ],
  "situations": [
    {
      "title": "😵 客服講太快或用了很多專有名詞",
      "hear": {
        "en": "I'll open a claim with the carrier, and you'll get a replacement or a refund within seven business days depending on the investigation.",
        "zh": "（講得很快）我會向快遞公司開立索賠，依調查結果七個工作天內補寄或退款。",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you say that a little slower?",
          "zh": "不好意思，可以說慢一點嗎？"
        },
        {
          "en": "So, I'll get a replacement or a refund in seven days. Is that right?",
          "zh": "所以我七天內會收到補寄或退款，對嗎？"
        }
      ],
      "tip": "客服的重點通常是：誰處理、多久、結果是什麼。用 So… Is that right? 複述，並請對方用 email 寄書面說明。"
    },
    {
      "title": "📦 包裹被放在奇怪的地方",
      "hear": {
        "en": "It says the package was left with a neighbor.",
        "zh": "顯示包裹被放在鄰居那裡。"
      },
      "say": [
        {
          "en": "I don't know which neighbor. Could you ask the driver for more details?",
          "zh": "我不知道是哪位鄰居，可以請你問問送貨員細節嗎？"
        },
        {
          "en": "Do you have a photo of where it was left?",
          "zh": "你有留下放置地點的照片嗎？"
        }
      ],
      "tip": "很多快遞公司會在送達時拍照作為證明。向客服要求查看照片，確認有沒有送到正確的地址。"
    },
    {
      "title": "💳 被多扣了錢",
      "say": [
        {
          "en": "I was charged twice for the same order. Could you check it?",
          "zh": "同一筆訂單我被扣了兩次，可以幫我查嗎？"
        },
        {
          "en": "Here's a screenshot of my bank statement.",
          "zh": "這是我銀行帳單的截圖。"
        }
      ],
      "tip": "有時是「預先授權」（pending），幾天後會自動取消。如果兩筆都成功扣款，向賣家和銀行同時提出，並附上截圖。"
    },
    {
      "title": "↩️ 超過退貨期限",
      "hear": {
        "en": "I'm sorry, it's been more than thirty days.",
        "zh": "很抱歉，已經超過三十天了。"
      },
      "say": [
        {
          "en": "I understand, but the item arrived defective. Is there anything you can do?",
          "zh": "我了解，但商品送來就有瑕疵，你有什麼辦法嗎？"
        },
        {
          "en": "Could I get store credit, or could I speak with a supervisor?",
          "zh": "可以給我店家購物金，或讓我和主管談談嗎？"
        }
      ],
      "tip": "瑕疵品通常可以提出例外申請。保持禮貌，附上照片和購買證明，客服往往願意幫忙。"
    },
    {
      "title": "🌏 寄到國外或海外刷卡",
      "say": [
        {
          "en": "I'm an international student. Can you ship to my dorm address?",
          "zh": "我是留學生，你們可以寄到我的宿舍地址嗎？"
        },
        {
          "en": "My card is from Taiwan. Is there any extra fee?",
          "zh": "我的卡是台灣的，有額外的費用嗎？"
        }
      ],
      "tip": "宿舍地址要寫完整的房號與收件人名字。海外信用卡有時會被擋，需要先確認帳單地址格式。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "Could I have your order number, please?",
      "prompt": "客服在問什麼？",
      "options": [
        "你的訂單編號",
        "你的地址",
        "你的電話號碼"
      ],
      "answer": 0,
      "note": "order number 是訂單編號。"
    },
    {
      "type": "選擇回應",
      "audio": "Did you check with your neighbors or the mailroom?",
      "prompt": "你都問過了，最適合怎麼回答？",
      "options": [
        "Yes, they don't have it.",
        "No, I'm in the mailroom.",
        "It's apartment 3B."
      ],
      "answer": 0,
      "note": "check with… 是向……確認、詢問。"
    },
    {
      "type": "聽數字",
      "audio": "Your order number is six-one-seven-four-two-nine.",
      "prompt": "訂單編號是多少？",
      "options": [
        "617429",
        "671429",
        "617249"
      ],
      "answer": 0,
      "note": "編號一個數字一個數字唸。"
    },
    {
      "type": "選擇回應",
      "audio": "Would you prefer a replacement or a refund?",
      "prompt": "你要補寄一個新的，最適合怎麼回答？",
      "options": [
        "A replacement, please.",
        "It's damaged.",
        "I'm at home."
      ],
      "answer": 0,
      "note": "replacement 是補寄、換新；refund 是退款。"
    },
    {
      "type": "聽懂意思",
      "audio": "Could you send me a photo of the damage?",
      "prompt": "客服要你做什麼？",
      "options": [
        "傳損壞的照片",
        "把商品寄回來",
        "重新下單"
      ],
      "answer": 0,
      "note": "damage 是損壞。"
    },
    {
      "type": "聽懂意思",
      "audio": "I'll email you a prepaid return label.",
      "prompt": "客服會做什麼？",
      "options": [
        "用 email 寄預付的退貨標籤",
        "直接到你家取貨",
        "請你自己付運費"
      ],
      "answer": 0,
      "note": "prepaid 是已預付的。"
    },
    {
      "type": "聽數字",
      "audio": "It should arrive in three to five business days.",
      "prompt": "新商品多久會到？",
      "options": [
        "三到五個工作天",
        "三到五個小時",
        "十三到十五天"
      ],
      "answer": 0,
      "note": "business days 是工作天，不含週末假日。"
    },
    {
      "type": "聽懂意思",
      "audio": "For wrong-size returns, a seven dollar fee is deducted from your refund.",
      "prompt": "尺寸不合退貨要怎樣？",
      "options": [
        "退款會扣七塊運費",
        "退款多七塊",
        "不能退貨"
      ],
      "answer": 0,
      "note": "deducted from 是從……扣除。"
    },
    {
      "type": "對話理解",
      "audio": "Hi, my package says delivered, but I never got it. My order number is six-one-seven-four-two-nine. I'd like a replacement, please.",
      "prompt": "客人想要什麼？",
      "options": [
        "包裹顯示送達但沒收到，要補寄",
        "退貨",
        "取消訂單"
      ],
      "answer": 0,
      "note": "never got it 是從來沒收到。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "The headphones arrived broken, and the box was damaged. I'm uploading photos now. I'd like a new pair, please.",
      "prompt": "客人遇到什麼問題？",
      "options": [
        "耳機送到就壞了，要換新的",
        "耳機送錯顏色",
        "耳機沒有到"
      ],
      "answer": 0,
      "note": "arrived broken 是送到時就壞了。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Thank you for contacting support. How can I help you today?",
      "promptZh": "感謝聯絡客服，今天有什麼可以幫你的？",
      "hint": "說你的訂單有什麼問題",
      "expect": "package|order|delivered|arrived|received|broken|damaged|wrong|missing|problem",
      "model": "Hi. My package says delivered, but I never got it.",
      "modelZh": "嗨，我的包裹顯示已送達，但我沒收到。"
    },
    {
      "prompt": "Could I have your order number, please?",
      "promptZh": "可以給我你的訂單編號嗎？",
      "hint": "說編號",
      "expect": "order|number|\\d|six|seven|four|two|nine|sure",
      "model": "Sure. It's six-one-seven-four-two-nine.",
      "modelZh": "好，是 617429。"
    },
    {
      "prompt": "Did you check with your neighbors or the mailroom?",
      "promptZh": "你有問過鄰居或收發室嗎？",
      "hint": "說有問過",
      "expect": "yes|yeah|checked|neighbors?|mailroom|front desk|door",
      "model": "Yes, I checked the door, the mailroom, and my neighbors.",
      "modelZh": "有，我檢查了門口、收發室，也問了鄰居。"
    },
    {
      "prompt": "Would you prefer a replacement or a refund?",
      "promptZh": "你想要補寄還是退款？",
      "hint": "選一個",
      "expect": "replacement|refund|replace|money back|new one",
      "model": "A replacement, please.",
      "modelZh": "補寄，謝謝。"
    },
    {
      "prompt": "Could you send me a photo of the damage?",
      "promptZh": "可以傳一張損壞的照片給我嗎？",
      "hint": "說好，並說正在上傳",
      "expect": "sure|yes|okay|ok|upload|send|photo|now",
      "model": "Sure. I'm uploading it now.",
      "modelZh": "好，我正在上傳。"
    },
    {
      "prompt": "I'll email you a prepaid return label.",
      "promptZh": "我會寄預付的退貨標籤給你。",
      "hint": "道謝並問要在哪裡寄",
      "expect": "thank|thanks|where|drop|print|label|how",
      "model": "Thanks. Where do I drop it off?",
      "modelZh": "謝謝，我要在哪裡寄？"
    },
    {
      "prompt": "The refund will take five to seven business days.",
      "promptZh": "退款需要五到七個工作天。",
      "hint": "確認並問能否追蹤",
      "expect": "okay|ok|got it|thanks|track|tracking|case|number",
      "model": "Okay. Can I get a case number?",
      "modelZh": "好，可以給我案件編號嗎？"
    },
    {
      "prompt": "Is there anything else I can help you with?",
      "promptZh": "還有什麼我可以幫你的嗎？",
      "hint": "說沒有並道謝",
      "expect": "no|that'?s (all|it)|thank|thanks|nothing",
      "model": "No, that's all. Thank you for your help!",
      "modelZh": "沒有了，謝謝你的幫忙！"
    }
  ],
  "culture": [
    {
      "t": "網購問題先找賣家客服",
      "d": "包裹沒到、送錯、壞掉，先找賣家或網站的客服（Help、Contact Us），提供訂單編號和照片。多數大型網站（如 Amazon）都有明確的退款或補寄流程，通常很願意處理。"
    },
    {
      "t": "訂單編號是關鍵",
      "d": "客服第一個問題一定是 order number（訂單編號），在確認信或 App 的 Orders 頁面都找得到。追蹤編號（tracking number）則是查包裹位置用的，兩個不一樣。"
    },
    {
      "t": "包裹顯示送達卻沒收到",
      "d": "美國快遞常常把包裹放在門口或大樓櫃台。先找門口、收發室、鄰居，再看送達照片。真的沒有再向賣家申請補寄或退款，同時也可以向快遞公司提出調查。"
    },
    {
      "t": "退貨通常免費且很寬鬆",
      "d": "多數網站 30 天內可退貨，商品保持原狀、帶吊牌。賣家出錯（壞掉、送錯）通常免運費，自己不喜歡或尺寸不合可能要扣運費。退款一般 5–10 個工作天回到原付款方式。"
    },
    {
      "t": "留學生要注意地址",
      "d": "宿舍或公寓要寫完整房號（Apt/Unit）和自己的全名，包裹常常要到學校收發室領取。海外信用卡有時會被擋，帳單地址欄位可以用校址或問銀行怎麼填。"
    }
  ]
};
