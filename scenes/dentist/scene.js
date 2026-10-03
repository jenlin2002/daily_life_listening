// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "dentist",
  "title": "看牙醫",
  "en": "At the Dentist",
  "emoji": "🦷",
  "goal": "學會預約牙醫與初診報到、向牙醫描述牙痛與位置、聽懂檢查與治療的說明、處理保險與費用，並聽懂治療後的叮嚀",
  "videos": [
    {
      "id": "imO2q4q4pBM",
      "title": "At the Dentist 🦷 English Conversation Practice（EverydayEnglish）"
    },
    {
      "id": "OLRcbHb5bqU",
      "title": "At the Dentist - English Conversation At the Dentist - Health English Lessons（Twominute English）"
    },
    {
      "id": "Bqdna_w7Aqs",
      "title": "Making an Appointment with Dentist | Speaking English Conversation（Delightful to Speak）"
    }
  ],
  "speakers": {
    "S": {
      "name": "Receptionist",
      "zh": "櫃台人員",
      "avatar": "👩",
      "voice": "f"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♂️",
      "voice": "m3"
    },
    "D": {
      "name": "Dentist",
      "zh": "牙醫",
      "avatar": "👩‍⚕️",
      "voice": "f2"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "預約與初診報到",
      "where": "電話預約，之後到診所櫃台",
      "emoji": "📞",
      "lines": [
        {
          "s": "S",
          "en": "Bright Smile Dental. How can I help you?",
          "zh": "Bright Smile 牙醫診所，有什麼可以幫你的？"
        },
        {
          "s": "Y",
          "en": "Hi. I'd like to make an appointment. I have a toothache.",
          "zh": "嗨，我想預約，我牙痛。"
        },
        {
          "s": "S",
          "en": "I'm sorry to hear that. Are you a new patient?",
          "zh": "很遺憾聽到這件事。你是新病人嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, I am. I'm a student at the university.",
          "zh": "是的，我是這所大學的學生。"
        },
        {
          "s": "S",
          "en": "Okay. Do you have dental insurance?",
          "zh": "好的。你有牙科保險嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, I'm covered by the student health plan.",
          "zh": "有，我有學生健康保險。"
        },
        {
          "s": "S",
          "en": "Great. We have an opening tomorrow at ten. Does that work?",
          "zh": "很好。我們明天十點有空檔，這個時間可以嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, that works. Do I need to bring anything?",
          "zh": "可以。我需要帶什麼嗎？"
        },
        {
          "s": "S",
          "en": "Please bring your insurance card and a photo ID. And come fifteen minutes early to fill out the new patient forms.",
          "zh": "請帶保險卡和附照片的證件，並提早十五分鐘到，填寫新病人表格。"
        },
        {
          "s": "Y",
          "en": "Okay. Thank you!",
          "zh": "好的，謝謝你！"
        }
      ]
    },
    {
      "title": "檢查與描述牙痛",
      "where": "診療室，牙醫為你檢查",
      "emoji": "🪥",
      "lines": [
        {
          "s": "D",
          "en": "Hi, I'm Dr. Lee. What brings you in today?",
          "zh": "嗨，我是 Lee 醫師。你今天為什麼來看診？"
        },
        {
          "s": "Y",
          "en": "I have a toothache on the lower left side. It started three days ago.",
          "zh": "我左下方的牙齒會痛，從三天前開始。"
        },
        {
          "s": "D",
          "en": "Is the pain constant, or does it come and go?",
          "zh": "是一直痛，還是時痛時不痛？"
        },
        {
          "s": "Y",
          "en": "It hurts a lot when I drink something cold or sweet.",
          "zh": "我喝冷的或甜的東西會很痛。"
        },
        {
          "s": "D",
          "en": "Okay. Let me take a look. Please open wide. Does it hurt when I touch here?",
          "zh": "好的，我來看看。請張大嘴。我碰這裡會痛嗎？"
        },
        {
          "s": "Y",
          "en": "Ow, yes, right there.",
          "zh": "啊，會，就是那裡。"
        },
        {
          "s": "D",
          "en": "I see a small cavity. I'd like to take an X-ray to check how deep it is.",
          "zh": "我看到一個小蛀牙。我想拍 X 光，看蛀得多深。"
        },
        {
          "s": "Y",
          "en": "Okay. Is the X-ray safe?",
          "zh": "好的。X 光安全嗎？"
        },
        {
          "s": "D",
          "en": "Yes, it's a very low dose. The X-ray shows the cavity hasn't reached the nerve yet.",
          "zh": "安全，劑量很低。X 光顯示蛀牙還沒有到神經。"
        },
        {
          "s": "Y",
          "en": "That's good news. What do I need to do?",
          "zh": "這是好消息。我需要怎麼做？"
        },
        {
          "s": "D",
          "en": "We can fill it today. It'll take about thirty minutes.",
          "zh": "我們今天可以補牙，大約需要三十分鐘。"
        }
      ]
    },
    {
      "title": "補牙後與費用",
      "where": "診療室與櫃台",
      "emoji": "💳",
      "lines": [
        {
          "s": "D",
          "en": "All done. How does it feel?",
          "zh": "好了。感覺怎麼樣？"
        },
        {
          "s": "Y",
          "en": "My mouth feels numb. When will it wear off?",
          "zh": "我的嘴巴麻麻的，什麼時候會退？"
        },
        {
          "s": "D",
          "en": "About two to three hours. Don't eat or drink anything hot until then, so you don't burn yourself.",
          "zh": "大約兩到三小時。在那之前不要吃喝熱的東西，以免燙傷。"
        },
        {
          "s": "Y",
          "en": "Okay. Is there anything I should avoid?",
          "zh": "好的。有什麼需要避免的嗎？"
        },
        {
          "s": "D",
          "en": "Avoid chewing on that side today. If you feel pain after the numbness is gone, call us.",
          "zh": "今天避免用那一邊咀嚼。麻藥退了之後如果還痛，請打電話給我們。"
        },
        {
          "s": "Y",
          "en": "Got it. Do I need a follow-up?",
          "zh": "了解。我需要回診嗎？"
        },
        {
          "s": "D",
          "en": "Yes, let's schedule a cleaning in six months. Check in with the front desk on your way out.",
          "zh": "需要，我們六個月後安排洗牙。離開時請到櫃台報到。"
        },
        {
          "s": "S",
          "en": "Your total is one hundred eighty dollars, and insurance covers eighty percent. Your share is thirty-six dollars.",
          "zh": "你的費用總共一百八十塊，保險給付百分之八十，你自付三十六塊。"
        },
        {
          "s": "Y",
          "en": "Can I pay by card?",
          "zh": "我可以刷卡嗎？"
        },
        {
          "s": "S",
          "en": "Of course. Here's your receipt and your next appointment card.",
          "zh": "當然。這是你的收據和下次的預約卡。"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "I'd like to make an appointment.",
      "zh": "我想預約。"
    },
    {
      "en": "I have a toothache.",
      "zh": "我牙痛。"
    },
    {
      "en": "I'm a new patient.",
      "zh": "我是新病人。"
    },
    {
      "en": "Do you accept my insurance?",
      "zh": "你們接受我的保險嗎？"
    },
    {
      "en": "Do I need to bring anything?",
      "zh": "我需要帶什麼嗎？"
    },
    {
      "en": "I'm here for my ten o'clock appointment.",
      "zh": "我來看十點的預約。"
    },
    {
      "en": "It hurts on the lower left side.",
      "zh": "左下方會痛。"
    },
    {
      "en": "It started three days ago.",
      "zh": "三天前開始的。"
    },
    {
      "en": "It hurts when I drink something cold.",
      "zh": "我喝冷的東西會痛。"
    },
    {
      "en": "My gums are bleeding.",
      "zh": "我的牙齦在流血。"
    },
    {
      "en": "I think I have a cavity.",
      "zh": "我想我有蛀牙。"
    },
    {
      "en": "My tooth is sensitive.",
      "zh": "我的牙齒很敏感。"
    },
    {
      "en": "Is the X-ray safe?",
      "zh": "X 光安全嗎？"
    },
    {
      "en": "How long will the treatment take?",
      "zh": "治療要多久？"
    },
    {
      "en": "Will it hurt?",
      "zh": "會痛嗎？"
    },
    {
      "en": "How much will it cost?",
      "zh": "費用是多少？"
    },
    {
      "en": "How much does insurance cover?",
      "zh": "保險給付多少？"
    },
    {
      "en": "When will the numbness wear off?",
      "zh": "麻藥什麼時候會退？"
    },
    {
      "en": "Is there anything I should avoid eating?",
      "zh": "有什麼東西需要避免吃嗎？"
    },
    {
      "en": "I'd like to schedule a cleaning.",
      "zh": "我想預約洗牙。"
    }
  ],
  "hear": [
    {
      "en": "Are you a new patient?",
      "zh": "你是新病人嗎？",
      "reply": "Yes, I am.",
      "replyZh": "是的。"
    },
    {
      "en": "Do you have dental insurance?",
      "zh": "你有牙科保險嗎？",
      "reply": "Yes, I have the student health plan.",
      "replyZh": "有，我有學生健康保險。"
    },
    {
      "en": "We have an opening tomorrow at ten.",
      "zh": "我們明天十點有空檔。",
      "reply": "That works for me.",
      "replyZh": "這個時間我可以。"
    },
    {
      "en": "Please fill out these forms.",
      "zh": "請填寫這些表格。",
      "reply": "Sure. Do you have a pen?",
      "replyZh": "好，你有筆嗎？"
    },
    {
      "en": "What brings you in today?",
      "zh": "你今天為什麼來看診？",
      "reply": "I have a toothache on the lower left.",
      "replyZh": "我左下方牙痛。"
    },
    {
      "en": "Is the pain constant, or does it come and go?",
      "zh": "是一直痛，還是時痛時不痛？",
      "reply": "It comes and goes.",
      "replyZh": "時痛時不痛。"
    },
    {
      "en": "Does it hurt when I touch here?",
      "zh": "我碰這裡會痛嗎？",
      "reply": "Yes, right there.",
      "replyZh": "會，就是那裡。"
    },
    {
      "en": "I'd like to take an X-ray.",
      "zh": "我想拍 X 光。",
      "reply": "Okay. Is it safe?",
      "replyZh": "好，安全嗎？"
    },
    {
      "en": "You have a small cavity. We can fill it today.",
      "zh": "你有一個小蛀牙，今天可以補。",
      "reply": "How long will it take?",
      "replyZh": "要多久？"
    },
    {
      "en": "Don't eat or drink anything hot until the numbness wears off.",
      "zh": "麻藥退之前不要吃喝熱的東西。",
      "reply": "Okay, thanks for telling me.",
      "replyZh": "好，謝謝你告訴我。"
    }
  ],
  "say": [
    {
      "en": "Hi, I have a toothache. Can I get an appointment today?",
      "zh": "嗨，我牙痛，今天可以預約嗎？"
    },
    {
      "en": "I'm new, and I have insurance.",
      "zh": "我是新病人，我有保險。"
    },
    {
      "en": "It hurts when I bite down.",
      "zh": "我咬東西的時候會痛。"
    },
    {
      "en": "My tooth is sensitive to hot and cold.",
      "zh": "我的牙齒對冷熱敏感。"
    },
    {
      "en": "Could you explain what you're going to do?",
      "zh": "可以說明你接下來要做什麼嗎？"
    },
    {
      "en": "Could I have a break, please?",
      "zh": "可以讓我休息一下嗎？"
    },
    {
      "en": "Will I need a filling or a root canal?",
      "zh": "我需要補牙還是根管治療？"
    },
    {
      "en": "How much will this cost without insurance?",
      "zh": "沒有保險的話要多少錢？"
    },
    {
      "en": "Could I get a copy of the receipt?",
      "zh": "可以給我一份收據嗎？"
    },
    {
      "en": "Sorry, could you say that again?",
      "zh": "不好意思，可以再說一次嗎？"
    }
  ],
  "vocab": [
    {
      "w": "toothache",
      "pos": "n.",
      "zh": "牙痛",
      "ex": "I have a bad toothache.",
      "exzh": "我牙痛得很厲害。"
    },
    {
      "w": "cavity",
      "pos": "n.",
      "zh": "蛀牙",
      "ex": "The dentist found a cavity.",
      "exzh": "牙醫發現了一個蛀牙。"
    },
    {
      "w": "filling",
      "pos": "n.",
      "zh": "補牙",
      "ex": "I need a filling.",
      "exzh": "我需要補牙。"
    },
    {
      "w": "root canal",
      "pos": "n.",
      "zh": "根管治療",
      "ex": "He needs a root canal.",
      "exzh": "他需要做根管治療。"
    },
    {
      "w": "cleaning",
      "pos": "n.",
      "zh": "洗牙",
      "ex": "I have a cleaning next month.",
      "exzh": "我下個月要洗牙。"
    },
    {
      "w": "X-ray",
      "pos": "n.",
      "zh": "X 光",
      "ex": "We need to take an X-ray.",
      "exzh": "我們需要拍 X 光。"
    },
    {
      "w": "gums",
      "pos": "n.",
      "zh": "牙齦",
      "ex": "My gums are bleeding.",
      "exzh": "我的牙齦在流血。"
    },
    {
      "w": "numb",
      "pos": "adj.",
      "zh": "麻木的",
      "ex": "My mouth feels numb.",
      "exzh": "我的嘴巴麻麻的。"
    },
    {
      "w": "sensitive",
      "pos": "adj.",
      "zh": "敏感的",
      "ex": "My teeth are sensitive to cold.",
      "exzh": "我的牙齒對冷很敏感。"
    },
    {
      "w": "braces",
      "pos": "n.",
      "zh": "牙套",
      "ex": "She wears braces.",
      "exzh": "她戴牙套。"
    },
    {
      "w": "wisdom tooth",
      "pos": "n.",
      "zh": "智齒",
      "ex": "I need to have my wisdom tooth removed.",
      "exzh": "我需要拔掉智齒。"
    },
    {
      "w": "follow-up",
      "pos": "n.",
      "zh": "回診",
      "ex": "Schedule a follow-up in two weeks.",
      "exzh": "兩週後安排回診。"
    }
  ],
  "situations": [
    {
      "title": "😵 牙醫講太快、用專業名詞",
      "hear": {
        "en": "You have a deep cavity on tooth number nineteen, so we'll do a composite filling, and if it gets worse, we may need a root canal.",
        "zh": "（講得很快）你的十九號牙有深的蛀牙，我們用樹脂補牙，如果更嚴重可能要做根管治療。",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you explain that in simple words?",
          "zh": "抱歉，可以用簡單的說法解釋嗎？"
        },
        {
          "en": "So I need a filling today, and maybe a root canal later. Is that right?",
          "zh": "所以我今天需要補牙，之後可能要做根管，對嗎？"
        }
      ],
      "tip": "醫療名詞聽不懂很正常。請牙醫用簡單的話說，或畫圖、指給你看，再複述一次確認。"
    },
    {
      "title": "😖 治療時覺得很痛",
      "say": [
        {
          "en": "Excuse me, that hurts. Could you stop for a moment?",
          "zh": "不好意思，這樣很痛，可以先停一下嗎？"
        },
        {
          "en": "Could I have more anesthesia, please?",
          "zh": "可以再多打一點麻藥嗎？"
        }
      ],
      "tip": "治療中可以舉手示意，說 Please stop 或 It hurts。牙醫會停下來並調整，不用忍耐。"
    },
    {
      "title": "💰 保險與費用問題",
      "hear": {
        "en": "Your insurance covers eighty percent, and you'll pay the rest.",
        "zh": "你的保險給付百分之八十，剩下由你自付。"
      },
      "say": [
        {
          "en": "How much will I owe in total?",
          "zh": "我總共要付多少？"
        },
        {
          "en": "Could I get a cost estimate before the treatment?",
          "zh": "治療前可以先給我費用估價嗎？"
        }
      ],
      "tip": "看診前先問保險是否給付，治療前請診所提供費用估價（estimate）。留學生保險常常不含牙科，先問清楚。"
    },
    {
      "title": "🌙 半夜牙痛、想看急診",
      "say": [
        {
          "en": "I have a severe toothache and my face is swollen. Do you have an emergency appointment?",
          "zh": "我牙痛得很厲害，臉也腫了，你們有急診預約嗎？"
        },
        {
          "en": "Is there an emergency dentist open tonight?",
          "zh": "今晚有開的急診牙醫嗎？"
        }
      ],
      "tip": "臉腫、發燒、劇痛是緊急情況。很多診所有急診專線，真的找不到可以去醫院急診室（ER）。"
    },
    {
      "title": "🪥 想預約洗牙與檢查",
      "say": [
        {
          "en": "I'd like to schedule a cleaning and a checkup.",
          "zh": "我想預約洗牙和檢查。"
        },
        {
          "en": "How often should I come in for a cleaning?",
          "zh": "我多久該洗一次牙？"
        }
      ],
      "tip": "美國人通常每六個月洗牙一次。預防勝於治療，很多保險會全額給付定期洗牙。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "Are you a new patient?",
      "prompt": "櫃台人員在問什麼？",
      "options": [
        "你是不是新病人",
        "你有沒有牙痛",
        "你要不要洗牙"
      ],
      "answer": 0,
      "note": "patient 是病人。"
    },
    {
      "type": "選擇回應",
      "audio": "What brings you in today?",
      "prompt": "你牙痛，最適合怎麼回答？",
      "options": [
        "I have a toothache on the lower left.",
        "I came by bus.",
        "It's a new patient."
      ],
      "answer": 0,
      "note": "What brings you in? 是「你今天為什麼來？」。"
    },
    {
      "type": "選擇回應",
      "audio": "Is the pain constant, or does it come and go?",
      "prompt": "你時痛時不痛，最適合怎麼回答？",
      "options": [
        "It comes and goes.",
        "It's my tooth.",
        "It's a cavity."
      ],
      "answer": 0,
      "note": "come and go 是來來去去、時有時無。"
    },
    {
      "type": "聽懂意思",
      "audio": "I see a small cavity. I'd like to take an X-ray to check how deep it is.",
      "prompt": "牙醫說了什麼？",
      "options": [
        "有小蛀牙，要拍 X 光看多深",
        "沒有問題",
        "要拔牙"
      ],
      "answer": 0,
      "note": "cavity 是蛀牙，how deep 是多深。"
    },
    {
      "type": "聽數字",
      "audio": "We have an opening tomorrow at ten. Please come fifteen minutes early.",
      "prompt": "預約幾點？要提早多久到？",
      "options": [
        "十點，提早十五分鐘",
        "十五點，提早十分鐘",
        "兩點，提早五十分鐘"
      ],
      "answer": 0,
      "note": "fifteen 是 15，fifty 是 50。"
    },
    {
      "type": "聽懂意思",
      "audio": "Don't eat or drink anything hot until the numbness wears off.",
      "prompt": "補牙後要注意什麼？",
      "options": [
        "麻藥退之前不要吃喝熱的",
        "馬上吃東西",
        "不要喝水"
      ],
      "answer": 0,
      "note": "wear off 是慢慢消退。"
    },
    {
      "type": "聽數字",
      "audio": "Your total is one hundred eighty dollars, and insurance covers eighty percent.",
      "prompt": "總費用與保險給付是多少？",
      "options": [
        "180 元，給付 80%",
        "18 元，給付 8%",
        "80 元，給付 18%"
      ],
      "answer": 0,
      "note": "one hundred eighty 是 180。"
    },
    {
      "type": "選擇回應",
      "audio": "Do you have dental insurance?",
      "prompt": "你有學生保險，最適合怎麼回答？",
      "options": [
        "Yes, I have the student health plan.",
        "No, I have a toothache.",
        "It's on the left."
      ],
      "answer": 0,
      "note": "dental insurance 是牙科保險。"
    },
    {
      "type": "對話理解",
      "audio": "Hi, I have a toothache, and it hurts when I drink something cold. I'm a new patient, and I have insurance. Do you have an appointment today?",
      "prompt": "客人想要什麼？",
      "options": [
        "預約今天看牙痛",
        "詢問洗牙價格",
        "取消預約"
      ],
      "answer": 0,
      "note": "hurts when I drink something cold 是喝冷的會痛。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "Excuse me, that hurts. Could you stop for a moment? And how long will the numbness last?",
      "prompt": "病人在問什麼？",
      "options": [
        "請先停一下，並問麻藥多久退",
        "治療費用",
        "保險給付"
      ],
      "answer": 0,
      "note": "last 在這裡是持續。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Bright Smile Dental. How can I help you?",
      "promptZh": "Bright Smile 牙醫診所，有什麼可以幫你的？",
      "hint": "說你想預約，因為牙痛",
      "expect": "appointment|toothache|tooth|make|schedule|see the dentist",
      "model": "Hi. I'd like to make an appointment. I have a toothache.",
      "modelZh": "嗨，我想預約，我牙痛。"
    },
    {
      "prompt": "Are you a new patient?",
      "promptZh": "你是新病人嗎？",
      "hint": "說是，並說你有保險",
      "expect": "yes|yeah|new|first time|insurance",
      "model": "Yes, I am. And I have dental insurance.",
      "modelZh": "是的，我有牙科保險。"
    },
    {
      "prompt": "We have an opening tomorrow at ten. Does that work?",
      "promptZh": "我們明天十點有空檔，可以嗎？",
      "hint": "說可以並問要帶什麼",
      "expect": "works|fine|okay|ok|sure|great|bring|need",
      "model": "That works. Do I need to bring anything?",
      "modelZh": "可以，我需要帶什麼嗎？"
    },
    {
      "prompt": "What brings you in today?",
      "promptZh": "你今天為什麼來看診？",
      "hint": "說牙痛的位置",
      "expect": "toothache|tooth|hurt|pain|left|right|lower|upper|side",
      "model": "I have a toothache on the lower left side.",
      "modelZh": "我左下方的牙齒痛。"
    },
    {
      "prompt": "Is the pain constant, or does it come and go?",
      "promptZh": "是一直痛，還是時痛時不痛？",
      "hint": "說痛的狀況",
      "expect": "constant|come and go|comes and goes|all the time|cold|sweet|hurt|when",
      "model": "It hurts a lot when I drink something cold.",
      "modelZh": "我喝冷的東西會很痛。"
    },
    {
      "prompt": "I'd like to take an X-ray. Is that okay?",
      "promptZh": "我想拍 X 光，可以嗎？",
      "hint": "說好，並問安全嗎",
      "expect": "yes|okay|ok|sure|safe|x-?ray|fine",
      "model": "Okay. Is the X-ray safe?",
      "modelZh": "好，X 光安全嗎？"
    },
    {
      "prompt": "You have a small cavity. We can fill it today.",
      "promptZh": "你有一個小蛀牙，今天可以補。",
      "hint": "問要多久、會不會痛",
      "expect": "how long|hurt|pain|cost|much|take|numb|okay",
      "model": "How long will it take? Will it hurt?",
      "modelZh": "要多久？會痛嗎？"
    },
    {
      "prompt": "Your insurance covers eighty percent. Your share is thirty-six dollars. Cash or card?",
      "promptZh": "保險給付百分之八十，你自付三十六塊。付現還是刷卡？",
      "hint": "說 cash 或 card",
      "expect": "\\b(cash|card|credit|debit|tap|apple pay)\\b",
      "model": "Card, please.",
      "modelZh": "刷卡，謝謝。"
    }
  ],
  "culture": [
    {
      "t": "看牙要預約，也通常要保險",
      "d": "美國看牙醫一定要先預約。牙科保險通常和一般健康保險分開，留學生的學生保險不一定包含牙科。看診前先問 Do you accept my insurance? 並請診所估算費用。"
    },
    {
      "t": "初診要填表格",
      "d": "第一次看診要提早 10–15 分鐘到，填寫病史、過敏、服用藥物等表格。帶上保險卡和附照片的證件。"
    },
    {
      "t": "定期洗牙很重要",
      "d": "美國人通常每六個月洗牙與檢查一次（cleaning and checkup），保險常常給付。預防比治療便宜很多。"
    },
    {
      "t": "治療中可以說停",
      "d": "治療中覺得痛或不舒服，可以舉手或說 Please stop 或 It hurts。牙醫會停下並調整，不用忍耐。需要時可以請求更多麻藥。"
    },
    {
      "t": "補牙後的注意事項",
      "d": "補牙後麻藥通常 2–3 小時才退，退之前不要吃喝熱的東西，也不要咬舌頭或臉頰。如果麻藥退後還劇痛、發燒、臉腫，馬上打電話給診所。"
    }
  ]
};
