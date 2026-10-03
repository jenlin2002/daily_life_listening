// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "card-problems",
  "title": "卡片被盜刷或刷不過",
  "en": "Card Problems",
  "emoji": "💳",
  "goal": "學會在店裡卡片刷不過時處理、打電話向銀行通報盜刷或遺失、聽懂客服的身分驗證與後續處理，並要求補發新卡與爭議交易",
  "videos": [
    {
      "id": "4Oq3sqW4fI8",
      "title": "Dealing with Credit Card Fraud: Spoken English Conversation（Englishacademy）"
    },
    {
      "id": "fTkK0uEfgN4",
      "title": "I LOST MY CREDIT CARDS | ENGLISH CONVERSATION PRACTICE | ENGLISH SPEAKING PRACTICE | LEARN ENGLISH（English Listening Hub"
    },
    {
      "id": "B2VhKd8CbeU",
      "title": "Call Center Training | Role Play for Credit Card Customer Service（Single Step English）"
    }
  ],
  "speakers": {
    "S": {
      "name": "Cashier",
      "zh": "收銀員",
      "avatar": "👨‍💼",
      "voice": "m2"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♀️",
      "voice": "f"
    },
    "B": {
      "name": "Bank Representative",
      "zh": "銀行客服",
      "avatar": "👩‍💼",
      "voice": "f2"
    },
    "F": {
      "name": "Fraud Specialist",
      "zh": "詐欺調查專員",
      "avatar": "👨",
      "voice": "m3"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "結帳時卡片刷不過",
      "where": "超市櫃台結帳時",
      "emoji": "🛒",
      "lines": [
        {
          "s": "S",
          "en": "Your total is sixty-two dollars and forty cents. Cash or card?",
          "zh": "總共六十二塊四十分。付現還是刷卡？"
        },
        {
          "s": "Y",
          "en": "Card, please.",
          "zh": "刷卡，謝謝。"
        },
        {
          "s": "S",
          "en": "I'm sorry, it says your card was declined.",
          "zh": "抱歉，顯示你的卡被拒絕了。"
        },
        {
          "s": "Y",
          "en": "That's strange. I have enough money in my account. Could you try it again?",
          "zh": "奇怪，我帳戶裡有足夠的錢。可以再刷一次嗎？"
        },
        {
          "s": "S",
          "en": "Sure. Let me try again. It still says declined.",
          "zh": "好的，我再試一次。還是顯示被拒絕。"
        },
        {
          "s": "Y",
          "en": "Let me try inserting the chip instead of tapping.",
          "zh": "讓我改用插卡，不要感應。"
        },
        {
          "s": "S",
          "en": "Okay. It didn't work either. Do you have another card?",
          "zh": "好的。也不行。你有別張卡嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, let me try my other card. Here you go.",
          "zh": "有，我試試另一張卡。給你。"
        },
        {
          "s": "S",
          "en": "That one went through. Do you want a receipt?",
          "zh": "那張刷過了。你要收據嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, please. And thanks for your patience. I'll call my bank about the other card.",
          "zh": "要，麻煩你。謝謝你的耐心。我會打給銀行問另一張卡的事。"
        },
        {
          "s": "S",
          "en": "No problem. Have a good day.",
          "zh": "沒問題，祝你有愉快的一天。"
        }
      ]
    },
    {
      "title": "打電話通報盜刷",
      "where": "看到帳單上有不認識的消費，打給銀行客服",
      "emoji": "📞",
      "lines": [
        {
          "s": "B",
          "en": "Thank you for calling Eagle Bank. How can I help you today?",
          "zh": "謝謝你打給 Eagle 銀行，今天有什麼可以幫你的？"
        },
        {
          "s": "Y",
          "en": "Hi, I see a charge on my card that I didn't make. I think my card has been stolen.",
          "zh": "嗨，我看到卡上有一筆我沒有刷的消費，我想我的卡被盜刷了。"
        },
        {
          "s": "B",
          "en": "I'm sorry to hear that. Let me help you. First, I need to verify your identity. Can I have your full name and the last four digits of your card?",
          "zh": "很遺憾聽到這件事，我來幫你。首先我需要確認你的身分。可以給我你的全名和卡號後四碼嗎？"
        },
        {
          "s": "Y",
          "en": "My name is Amy Chen, and the last four digits are four, seven, two, one.",
          "zh": "我叫 Amy Chen，後四碼是 4721。"
        },
        {
          "s": "B",
          "en": "Thank you. And what's your date of birth?",
          "zh": "謝謝。你的出生日期是什麼？"
        },
        {
          "s": "Y",
          "en": "March fourth, two thousand and five.",
          "zh": "二〇〇五年三月四日。"
        },
        {
          "s": "B",
          "en": "Thank you, Amy. Which charge looks suspicious?",
          "zh": "謝謝你，Amy。哪一筆消費看起來可疑？"
        },
        {
          "s": "Y",
          "en": "There's a charge for two hundred forty-nine dollars from an online store in another state. I didn't buy anything like that.",
          "zh": "有一筆兩百四十九塊的消費，來自另一個州的網路商店，我沒有買過這樣的東西。"
        },
        {
          "s": "B",
          "en": "I see it. Do you still have your card with you?",
          "zh": "我看到了。你的卡還在身上嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, I have it, but I think someone copied the number.",
          "zh": "在，我有帶著，但我想有人複製了卡號。"
        },
        {
          "s": "B",
          "en": "Okay. I'll block this card right now so no more charges go through.",
          "zh": "好的，我現在就鎖住這張卡，讓後續的消費都刷不過。"
        }
      ]
    },
    {
      "title": "爭議交易與補發新卡",
      "where": "詐欺調查專員接手後續處理",
      "emoji": "🛡️",
      "lines": [
        {
          "s": "F",
          "en": "Hi, Amy. This is Mark from the fraud department. I'll help you file a dispute for the charge.",
          "zh": "嗨，Amy。我是詐欺部門的 Mark，我來幫你對這筆消費提出爭議。"
        },
        {
          "s": "Y",
          "en": "Thank you. Will I have to pay for it?",
          "zh": "謝謝。我需要付這筆錢嗎？"
        },
        {
          "s": "F",
          "en": "No. You aren't responsible for fraudulent charges. We'll give you a temporary credit while we investigate.",
          "zh": "不用。你不用負責詐欺的消費。調查期間，我們會先暫時退還金額給你。"
        },
        {
          "s": "Y",
          "en": "How long will the investigation take?",
          "zh": "調查要多久？"
        },
        {
          "s": "F",
          "en": "Usually about ten business days. We'll send you an email with a case number.",
          "zh": "通常大約十個工作天。我們會寄 email 給你，附上案件編號。"
        },
        {
          "s": "Y",
          "en": "Okay. What about my card? I need one for my daily expenses.",
          "zh": "好的。那我的卡呢？我日常開銷需要一張卡。"
        },
        {
          "s": "F",
          "en": "We'll mail you a new card with a new number. It should arrive in five to seven business days.",
          "zh": "我們會寄一張新卡給你，卡號是新的，大約五到七個工作天會到。"
        },
        {
          "s": "Y",
          "en": "Can I get an emergency card sooner? I'm a student, and I'm worried about paying for food and rent.",
          "zh": "我可以更快拿到緊急卡嗎？我是學生，我擔心付不出餐費和房租。"
        },
        {
          "s": "F",
          "en": "Yes, you can pick up a temporary card at any branch today. Please bring your ID.",
          "zh": "可以，你今天可以去任何一間分行領取臨時卡，請帶證件。"
        },
        {
          "s": "Y",
          "en": "Great. Should I update my automatic payments, like my phone bill?",
          "zh": "太好了。我需要更新我的自動扣款，例如手機帳單嗎？"
        },
        {
          "s": "F",
          "en": "Yes, once you get the new card, please update it everywhere you've saved your card number.",
          "zh": "要，等你拿到新卡，請在所有存過卡號的地方都更新。"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "My card was declined.",
      "zh": "我的卡被拒絕了。"
    },
    {
      "en": "Could you try it again?",
      "zh": "可以再刷一次嗎？"
    },
    {
      "en": "Let me try inserting the chip.",
      "zh": "讓我試試插卡。"
    },
    {
      "en": "Do you take Apple Pay?",
      "zh": "你們收 Apple Pay 嗎？"
    },
    {
      "en": "I have another card.",
      "zh": "我有另一張卡。"
    },
    {
      "en": "I'll pay in cash instead.",
      "zh": "我改付現金。"
    },
    {
      "en": "I see a charge I didn't make.",
      "zh": "我看到一筆我沒有刷的消費。"
    },
    {
      "en": "I think my card has been stolen.",
      "zh": "我想我的卡被盜刷了。"
    },
    {
      "en": "I lost my wallet.",
      "zh": "我的皮夾掉了。"
    },
    {
      "en": "I'd like to report fraud on my account.",
      "zh": "我想通報我的帳戶遭到詐欺。"
    },
    {
      "en": "Please block my card.",
      "zh": "請幫我鎖住我的卡。"
    },
    {
      "en": "I'd like to cancel my card and get a new one.",
      "zh": "我想停用這張卡並換新卡。"
    },
    {
      "en": "The last four digits are four, seven, two, one.",
      "zh": "後四碼是 4721。"
    },
    {
      "en": "I'd like to dispute this charge.",
      "zh": "我想對這筆消費提出爭議。"
    },
    {
      "en": "How long will the investigation take?",
      "zh": "調查要多久？"
    },
    {
      "en": "Will I be responsible for this charge?",
      "zh": "我需要負責這筆消費嗎？"
    },
    {
      "en": "How long will it take to get a new card?",
      "zh": "拿到新卡要多久？"
    },
    {
      "en": "Can I get an emergency card today?",
      "zh": "我今天可以拿到緊急卡嗎？"
    },
    {
      "en": "Can I get a case number?",
      "zh": "我可以拿到案件編號嗎？"
    },
    {
      "en": "I need to update my automatic payments.",
      "zh": "我需要更新我的自動扣款。"
    }
  ],
  "hear": [
    {
      "en": "I'm sorry, your card was declined.",
      "zh": "抱歉，你的卡被拒絕了。",
      "reply": "Could you try it again, please?",
      "replyZh": "可以請你再刷一次嗎？"
    },
    {
      "en": "Do you have another card?",
      "zh": "你有別張卡嗎？",
      "reply": "Yes, let me try my other card.",
      "replyZh": "有，我試試另一張卡。"
    },
    {
      "en": "Would you like to pay in cash?",
      "zh": "你想改付現金嗎？",
      "reply": "Yes, I have some cash.",
      "replyZh": "好，我有一些現金。"
    },
    {
      "en": "How can I help you today?",
      "zh": "今天有什麼可以幫你的？",
      "reply": "I see a charge I didn't make.",
      "replyZh": "我看到一筆我沒有刷的消費。"
    },
    {
      "en": "Can I have your full name and the last four digits of your card?",
      "zh": "可以給我你的全名和卡號後四碼嗎？",
      "reply": "Sure. My name is Amy Chen, and the last four digits are four, seven, two, one.",
      "replyZh": "好，我叫 Amy Chen，後四碼是 4721。"
    },
    {
      "en": "Which charge looks suspicious?",
      "zh": "哪一筆消費看起來可疑？",
      "reply": "The two hundred forty-nine dollar charge from an online store.",
      "replyZh": "來自網路商店的那筆兩百四十九塊。"
    },
    {
      "en": "Do you still have your card with you?",
      "zh": "你的卡還在身上嗎？",
      "reply": "Yes, I do, but I think the number was copied.",
      "replyZh": "在，但我想卡號被複製了。"
    },
    {
      "en": "I'll block this card right now.",
      "zh": "我現在就鎖住這張卡。",
      "reply": "Thank you. Will I get a new card?",
      "replyZh": "謝謝，我會拿到新卡嗎？"
    },
    {
      "en": "You aren't responsible for fraudulent charges.",
      "zh": "詐欺的消費你不需要負責。",
      "reply": "That's a relief. Thank you.",
      "replyZh": "那我就放心了，謝謝。"
    },
    {
      "en": "A new card will arrive in five to seven business days.",
      "zh": "新卡會在五到七個工作天內送到。",
      "reply": "Can I pick up a temporary card sooner?",
      "replyZh": "我可以更早去領臨時卡嗎？"
    }
  ],
  "say": [
    {
      "en": "Hi, my card was declined, but I'm sure there's money in my account.",
      "zh": "嗨，我的卡被拒絕了，但我確定帳戶裡有錢。"
    },
    {
      "en": "Could you check if there's a problem with my card?",
      "zh": "可以幫我確認我的卡有沒有問題嗎？"
    },
    {
      "en": "I'm calling to report an unauthorized charge.",
      "zh": "我打來是要通報一筆未經授權的消費。"
    },
    {
      "en": "I didn't make this purchase, and I don't know this store.",
      "zh": "這筆消費不是我刷的，我也不認識這間店。"
    },
    {
      "en": "My wallet was stolen. Could you freeze all my cards?",
      "zh": "我的皮夾被偷了，可以幫我凍結所有的卡嗎？"
    },
    {
      "en": "Could you explain what happens next?",
      "zh": "可以說明接下來會怎麼處理嗎？"
    },
    {
      "en": "Can you send me the case number by email?",
      "zh": "可以用 email 寄案件編號給我嗎？"
    },
    {
      "en": "Is there a fee for a replacement card?",
      "zh": "補發新卡要收費嗎？"
    },
    {
      "en": "Can I use my account while I wait for the new card?",
      "zh": "等新卡的時候，我可以使用我的帳戶嗎？"
    },
    {
      "en": "Sorry, could you say that again more slowly?",
      "zh": "抱歉，可以說慢一點再說一次嗎？"
    }
  ],
  "vocab": [
    {
      "w": "declined",
      "pos": "adj.",
      "zh": "被拒絕的（交易）",
      "ex": "My card was declined.",
      "exzh": "我的卡被拒絕了。"
    },
    {
      "w": "charge",
      "pos": "n.",
      "zh": "扣款、消費",
      "ex": "There's a strange charge on my card.",
      "exzh": "我的卡上有一筆奇怪的消費。"
    },
    {
      "w": "fraud",
      "pos": "n.",
      "zh": "詐欺",
      "ex": "I want to report fraud.",
      "exzh": "我想通報詐欺。"
    },
    {
      "w": "unauthorized",
      "pos": "adj.",
      "zh": "未經授權的",
      "ex": "This is an unauthorized charge.",
      "exzh": "這是一筆未經授權的消費。"
    },
    {
      "w": "stolen",
      "pos": "adj.",
      "zh": "被偷的",
      "ex": "My card was stolen.",
      "exzh": "我的卡被偷了。"
    },
    {
      "w": "dispute",
      "pos": "v.",
      "zh": "提出爭議",
      "ex": "I want to dispute this charge.",
      "exzh": "我想對這筆消費提出爭議。"
    },
    {
      "w": "block",
      "pos": "v.",
      "zh": "鎖住、封鎖",
      "ex": "Please block my card.",
      "exzh": "請鎖住我的卡。"
    },
    {
      "w": "replacement",
      "pos": "n.",
      "zh": "替換品、補發",
      "ex": "We will send a replacement card.",
      "exzh": "我們會寄補發的新卡。"
    },
    {
      "w": "verify",
      "pos": "v.",
      "zh": "確認、驗證",
      "ex": "I need to verify your identity.",
      "exzh": "我需要確認你的身分。"
    },
    {
      "w": "suspicious",
      "pos": "adj.",
      "zh": "可疑的",
      "ex": "This charge looks suspicious.",
      "exzh": "這筆消費看起來可疑。"
    },
    {
      "w": "investigation",
      "pos": "n.",
      "zh": "調查",
      "ex": "The investigation takes ten days.",
      "exzh": "調查要十天。"
    },
    {
      "w": "temporary credit",
      "pos": "n.",
      "zh": "暫時退款",
      "ex": "We'll give you a temporary credit.",
      "exzh": "我們會先暫時退款給你。"
    }
  ],
  "situations": [
    {
      "title": "😵 客服講太快、念出很多步驟",
      "hear": {
        "en": "I've blocked the card, opened a dispute, and issued a temporary credit; a replacement will arrive in a week, and you'll get a case number by email, so please update your autopays.",
        "zh": "（講得很快）我已鎖住卡片、開啟爭議、發放暫時退款；新卡一週內會寄到，你會用 email 收到案件編號，請更新你的自動扣款。",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you go over that slowly?",
          "zh": "抱歉，可以慢慢說一次嗎？"
        },
        {
          "en": "So the card is blocked, a new one is coming, and I'll get a case number by email. Is that right?",
          "zh": "所以卡片已鎖住，新卡會寄來，我會用 email 收到案件編號，對嗎？"
        }
      ],
      "tip": "客服一次會說很多步驟。請他放慢，並自己複述一次，也可以請他把案件編號和下一步用 email 或簡訊寄給你。"
    },
    {
      "title": "✈️ 出國時刷不過",
      "say": [
        {
          "en": "I'm traveling in the U.S. Could you check if my card was blocked for security?",
          "zh": "我在美國旅行，可以幫我確認我的卡是不是因為安全原因被鎖了嗎？"
        },
        {
          "en": "Could you please unblock it? That purchase was mine.",
          "zh": "可以幫我解鎖嗎？那筆消費是我刷的。"
        }
      ],
      "tip": "出國或在異地消費時，銀行可能會因為「不尋常」而暫時鎖卡。出國前先通知銀行，或用 App 確認，被鎖時打電話說明並驗證身分就能解鎖。"
    },
    {
      "title": "📱 收到可疑簡訊、被要求給驗證碼",
      "hear": {
        "en": "Hello, this is your bank. We noticed a problem. Please read me the code we just texted you.",
        "zh": "你好，這裡是你的銀行。我們發現一個問題，請念出我們剛傳給你的驗證碼。"
      },
      "say": [
        {
          "en": "I'm not going to give you any codes. I'll call the bank directly.",
          "zh": "我不會給你任何驗證碼，我會直接打給銀行。"
        },
        {
          "en": "I'd like to report a suspicious call.",
          "zh": "我想通報一通可疑的電話。"
        }
      ],
      "tip": "真正的銀行不會要你念簡訊驗證碼或密碼。接到可疑電話或簡訊，不要點連結、不要給碼，掛掉後用卡片背面的電話自己打給銀行。"
    },
    {
      "title": "🧾 帳單上有重複扣款或自己忘記的訂閱",
      "say": [
        {
          "en": "I was charged twice for the same purchase. Could you look into it?",
          "zh": "同一筆消費被扣了兩次，可以幫我查一下嗎？"
        },
        {
          "en": "I don't remember signing up for this subscription. How can I cancel it?",
          "zh": "我不記得有訂閱這個服務，要怎麼取消？"
        }
      ],
      "tip": "重複扣款可以先聯絡商家，沒處理再向銀行提出爭議。不認識的訂閱，先看信箱找註冊 email，再取消，並請銀行擋掉之後的扣款。"
    },
    {
      "title": "🪪 皮夾掉了，很多卡都不見",
      "say": [
        {
          "en": "I lost my wallet with my debit card and my student ID. Could you freeze my accounts?",
          "zh": "我掉了皮夾，裡面有簽帳卡和學生證，可以幫我凍結帳戶嗎？"
        },
        {
          "en": "How can I get a temporary card and some cash today?",
          "zh": "我今天要怎麼拿到臨時卡和一些現金？"
        }
      ],
      "tip": "皮夾掉了，馬上打給銀行凍結所有卡片，再向警察或學校報案，補辦學生證。很多銀行可以在分行發臨時卡。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "I'm sorry, it says your card was declined.",
      "prompt": "收銀員說了什麼？",
      "options": [
        "你的卡被拒絕了",
        "你的卡過期了",
        "你的卡很漂亮"
      ],
      "answer": 0,
      "note": "declined 在刷卡時是交易被拒絕。"
    },
    {
      "type": "選擇回應",
      "audio": "Do you have another card?",
      "prompt": "你有另一張卡，最適合怎麼回答？",
      "options": [
        "Yes, let me try my other card.",
        "No, it's sixty dollars.",
        "I need a receipt."
      ],
      "answer": 0,
      "note": "another card 是另一張卡。"
    },
    {
      "type": "聽數字",
      "audio": "Your total is sixty-two dollars and forty cents.",
      "prompt": "總共多少錢？",
      "options": [
        "62.40 元",
        "16.24 元",
        "26.40 元"
      ],
      "answer": 0,
      "note": "sixty-two 是 62，sixteen 是 16。"
    },
    {
      "type": "聽懂意思",
      "audio": "I need to verify your identity. Can I have your full name and the last four digits of your card?",
      "prompt": "客服要你提供什麼？",
      "options": [
        "全名和卡號後四碼",
        "卡片密碼",
        "地址和電話"
      ],
      "answer": 0,
      "note": "last four digits 是後四碼。",
      "speaker": "B"
    },
    {
      "type": "選擇回應",
      "audio": "Which charge looks suspicious?",
      "prompt": "你要指出可疑的那筆，最適合怎麼回答？",
      "options": [
        "The two hundred forty-nine dollar charge from an online store.",
        "My card is in my wallet.",
        "It was declined."
      ],
      "answer": 0,
      "note": "suspicious 是可疑的。"
    },
    {
      "type": "聽數字",
      "audio": "There's a charge for two hundred forty-nine dollars from an online store in another state.",
      "prompt": "可疑消費的金額是多少？",
      "options": [
        "249 元",
        "429 元",
        "294 元"
      ],
      "answer": 0,
      "note": "two hundred forty-nine 是 249。"
    },
    {
      "type": "聽懂意思",
      "audio": "I'll block this card right now so no more charges go through.",
      "prompt": "客服會做什麼？",
      "options": [
        "馬上鎖住這張卡",
        "把錢還給你",
        "請你自己去分行"
      ],
      "answer": 0,
      "note": "block 是鎖住。",
      "speaker": "B"
    },
    {
      "type": "聽懂意思",
      "audio": "You aren't responsible for fraudulent charges. We'll give you a temporary credit while we investigate.",
      "prompt": "關於費用專員說了什麼？",
      "options": [
        "你不用負責，調查期間先暫時退款",
        "你要全額付款",
        "要先付一半"
      ],
      "answer": 0,
      "note": "fraudulent 是詐欺的。",
      "speaker": "F"
    },
    {
      "type": "對話理解",
      "audio": "Hi, I see a charge on my card that I didn't make. I think my card has been stolen, and I'd like to cancel it and get a new one.",
      "prompt": "客人想做什麼？",
      "options": [
        "通報盜刷、停用並換新卡",
        "詢問額度",
        "修改地址"
      ],
      "answer": 0,
      "note": "cancel it 是停用。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "I'm a student, and I'm worried about paying for food and rent. Can I get an emergency card today?",
      "prompt": "客人的擔心和要求是什麼？",
      "options": [
        "擔心付不出生活費，想今天拿緊急卡",
        "想申請貸款",
        "想關閉帳戶"
      ],
      "answer": 0,
      "note": "emergency card 是緊急替代卡。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "I'm sorry, it says your card was declined.",
      "promptZh": "抱歉，顯示你的卡被拒絕了。",
      "hint": "請他再刷一次",
      "expect": "again|try|enough|money|declined|strange",
      "model": "That's strange. Could you try it again?",
      "modelZh": "奇怪，可以再刷一次嗎？"
    },
    {
      "prompt": "It didn't work either. Do you have another card?",
      "promptZh": "也不行。你有別張卡嗎？",
      "hint": "說你有，並拿出另一張卡",
      "expect": "yes|other|another|card|here|try",
      "model": "Yes, let me try my other card. Here you go.",
      "modelZh": "有，我試試另一張卡，給你。"
    },
    {
      "prompt": "Thank you for calling Eagle Bank. How can I help you today?",
      "promptZh": "謝謝你打給 Eagle 銀行，今天有什麼可以幫你的？",
      "hint": "說你看到不是你刷的消費",
      "expect": "charge|didn't|stolen|fraud|card|unauthorized",
      "model": "Hi, I see a charge on my card that I didn't make. I think it's fraud.",
      "modelZh": "嗨，我看到卡上有一筆我沒刷的消費，我想是詐欺。"
    },
    {
      "prompt": "I need to verify your identity. Can I have your full name and the last four digits of your card?",
      "promptZh": "我需要確認你的身分。可以給我你的全名和卡號後四碼嗎？",
      "hint": "說名字和後四碼",
      "expect": "name|digits|four|seven|two|one|\\d",
      "model": "My name is Amy Chen, and the last four digits are four, seven, two, one.",
      "modelZh": "我叫 Amy Chen，後四碼是 4721。"
    },
    {
      "prompt": "Which charge looks suspicious?",
      "promptZh": "哪一筆消費看起來可疑？",
      "hint": "說網路商店那筆兩百四十九塊",
      "expect": "two hundred|249|online|store|charge|dollar",
      "model": "The two hundred forty-nine dollar charge from an online store.",
      "modelZh": "來自網路商店的那筆兩百四十九塊。"
    },
    {
      "prompt": "I'll block this card right now. Do you have any other questions?",
      "promptZh": "我現在就鎖住這張卡，你還有其他問題嗎？",
      "hint": "問你需要負責這筆錢嗎",
      "expect": "responsible|pay|charge|new card|refund|dispute",
      "model": "Yes. Will I be responsible for the charge? And how long will it take to get a new card?",
      "modelZh": "有，我需要負責這筆錢嗎？拿到新卡要多久？"
    },
    {
      "prompt": "We'll mail you a new card in five to seven business days.",
      "promptZh": "我們會在五到七個工作天內寄新卡給你。",
      "hint": "問能不能今天先拿緊急卡",
      "expect": "emergency|today|temporary|sooner|branch|pick up",
      "model": "Can I get an emergency card today? I'm a student, and I need it for daily expenses.",
      "modelZh": "我今天可以拿到緊急卡嗎？我是學生，需要它支付日常開銷。"
    },
    {
      "prompt": "Once you get the new card, please update it everywhere you've saved your card number.",
      "promptZh": "拿到新卡後，請在所有存過卡號的地方更新。",
      "hint": "說好，並問有沒有案件編號",
      "expect": "okay|ok|sure|will|case number|email|thank",
      "model": "Okay, I will. Could you send me the case number by email?",
      "modelZh": "好，我會的。可以用 email 寄案件編號給我嗎？"
    }
  ],
  "culture": [
    {
      "t": "卡片被拒絕很常見",
      "d": "卡片刷不過不一定是被盜刷，可能是額度、餘額、異地消費、過期或感應失敗。先試插卡、輸入密碼、換另一張卡或改用手機支付。真的不行再打給卡片背面的客服電話。"
    },
    {
      "t": "發現盜刷要馬上通報",
      "d": "看到不認識的消費、手機收到可疑簡訊，立刻打給銀行或用 App 鎖卡。銀行會先確認身分（姓名、出生日期、卡號後四碼），再鎖卡、調查，並補發新卡。通報越早越好，通常要在幾十天內提出。"
    },
    {
      "t": "詐欺消費通常不用你負責",
      "d": "一般來說，確認是盜刷的消費，持卡人不需要負責。銀行會開啟爭議（dispute）、調查十個工作天左右，有些會先暫時退款。你會收到案件編號（case number），請保存。"
    },
    {
      "t": "補發新卡與緊急卡",
      "d": "新卡通常 5–7 個工作天寄到，卡號會改變，所以記得更新手機費、訂閱、外送 App 等所有自動扣款。急需用錢時，很多銀行可以在分行當場發臨時卡，也可以先用手機錢包。"
    },
    {
      "t": "防詐騙：真銀行不會問密碼",
      "d": "銀行不會透過電話或簡訊要你的密碼或簡訊驗證碼。接到可疑來電，掛掉後用卡片背面的電話自己打回去。不要點連結、不要在公共 Wi-Fi 登入網銀。"
    }
  ]
};
