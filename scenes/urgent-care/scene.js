// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "urgent-care",
  "title": "急診與 Urgent Care",
  "en": "Urgent Care & the ER",
  "emoji": "🚑",
  "goal": "學會判斷該去 Urgent Care 還是急診室、在櫃台報到、向護理師描述傷勢與疼痛程度、聽懂醫生的檢查與處置，並詢問費用",
  "speakers": {
    "S": {
      "name": "Front Desk",
      "zh": "櫃台人員",
      "avatar": "👩‍💼",
      "voice": "f2"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♂️",
      "voice": "m"
    },
    "N": {
      "name": "Triage Nurse",
      "zh": "分流護理師",
      "avatar": "👩‍⚕️",
      "voice": "f3"
    },
    "D": {
      "name": "Doctor",
      "zh": "醫生",
      "avatar": "👨‍⚕️",
      "voice": "m2"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "Urgent Care 櫃台報到",
      "where": "打籃球扭傷腳踝，來到 Urgent Care",
      "emoji": "🏥",
      "lines": [
        {
          "s": "S",
          "en": "Welcome to Quick Care Urgent Care. What brings you in today?",
          "zh": "歡迎來到 Quick Care Urgent Care，你今天為什麼來？"
        },
        {
          "s": "Y",
          "en": "I hurt my ankle playing basketball. It's swollen, and I can't put weight on it.",
          "zh": "我打籃球傷到腳踝，腫起來了，而且沒辦法承重。"
        },
        {
          "s": "S",
          "en": "I'm sorry. Have you been here before?",
          "zh": "很遺憾。你以前來過嗎？"
        },
        {
          "s": "Y",
          "en": "No, this is my first time. I'm an international student.",
          "zh": "沒有，這是我第一次來。我是國際學生。"
        },
        {
          "s": "S",
          "en": "That's okay. Do you have health insurance?",
          "zh": "沒關係。你有健康保險嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, I have the student health plan. Here's my card.",
          "zh": "有，我有學生健康保險，這是我的保險卡。"
        },
        {
          "s": "S",
          "en": "Thank you. Please fill out these forms and show me a photo ID.",
          "zh": "謝謝。請填寫這些表格，並給我看附照片的證件。"
        },
        {
          "s": "Y",
          "en": "Here you go. How long is the wait?",
          "zh": "給你。要等多久？"
        },
        {
          "s": "S",
          "en": "It's about forty-five minutes right now. Your copay is fifty dollars, and you can pay at check-in.",
          "zh": "現在大約要等四十五分鐘。你的自付額是五十塊，可以在報到時付。"
        },
        {
          "s": "Y",
          "en": "Okay. Can I sit down while I wait? It really hurts.",
          "zh": "好的。我等的時候可以坐下嗎？真的很痛。"
        },
        {
          "s": "S",
          "en": "Of course. Please have a seat, and we'll call your name.",
          "zh": "當然。請坐，我們會叫你的名字。"
        }
      ]
    },
    {
      "title": "護理師分流與醫生檢查",
      "where": "診間，量生命徵象後醫生來看",
      "emoji": "🩹",
      "lines": [
        {
          "s": "N",
          "en": "Hi, I'm Jessica, the nurse. Let's take your blood pressure and temperature first.",
          "zh": "嗨，我是護理師 Jessica。我們先量你的血壓和體溫。"
        },
        {
          "s": "N",
          "en": "On a scale of one to ten, how bad is the pain?",
          "zh": "從一到十分，你的疼痛有多嚴重？"
        },
        {
          "s": "Y",
          "en": "About seven. It hurts a lot when I try to walk.",
          "zh": "大約七分。我想走路的時候會很痛。"
        },
        {
          "s": "N",
          "en": "Do you have any allergies or take any medications?",
          "zh": "你有任何過敏或在吃什麼藥嗎？"
        },
        {
          "s": "Y",
          "en": "No allergies, and I don't take any medication.",
          "zh": "沒有過敏，也沒有吃藥。"
        },
        {
          "s": "D",
          "en": "Hi, I'm Dr. Wilson. Let me take a look at your ankle. Does it hurt when I press here?",
          "zh": "嗨，我是 Wilson 醫師。我來看看你的腳踝，我按這裡會痛嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, ow, right there.",
          "zh": "會，哎，就是那裡。"
        },
        {
          "s": "D",
          "en": "I'd like to get an X-ray to check for a fracture. It will only take a few minutes.",
          "zh": "我想拍 X 光，看有沒有骨折。只要幾分鐘。"
        },
        {
          "s": "D",
          "en": "Good news. The X-ray shows no broken bones, but you have a bad sprain.",
          "zh": "好消息。X 光顯示沒有骨折，但你有嚴重的扭傷。"
        },
        {
          "s": "Y",
          "en": "What should I do for it?",
          "zh": "我該怎麼處理？"
        },
        {
          "s": "D",
          "en": "Rest, ice it for twenty minutes every few hours, wrap it, and keep it raised. I'll also give you a brace and crutches.",
          "zh": "多休息，每隔幾小時冰敷二十分鐘，包紮起來，並把腳抬高。我也會給你護具和拐杖。"
        }
      ]
    },
    {
      "title": "半夜到急診室",
      "where": "急診室（ER），因為嚴重腹痛",
      "emoji": "🚨",
      "lines": [
        {
          "s": "S",
          "en": "Emergency Room. What's the problem?",
          "zh": "急診室，你哪裡不舒服？"
        },
        {
          "s": "Y",
          "en": "I have severe pain in my stomach. It started two hours ago, and it keeps getting worse.",
          "zh": "我的肚子劇烈疼痛，兩個小時前開始，而且越來越痛。"
        },
        {
          "s": "S",
          "en": "Okay. Please have a seat, and a nurse will see you right away. Can I have your name and date of birth?",
          "zh": "好的。請坐，護理師馬上會來看你。可以給我你的名字和出生日期嗎？"
        },
        {
          "s": "Y",
          "en": "Yes. It's Kevin Lin, born March fourth, two thousand and five.",
          "zh": "好。我叫 Kevin Lin，二〇〇五年三月四日出生。"
        },
        {
          "s": "N",
          "en": "Hi, Kevin. Pain level, one to ten?",
          "zh": "嗨，Kevin。疼痛程度一到十分？"
        },
        {
          "s": "Y",
          "en": "Nine. I feel nauseous, and I threw up once.",
          "zh": "九分。我覺得想吐，而且吐了一次。"
        },
        {
          "s": "N",
          "en": "Okay. We'll put a wristband on you, and a doctor will examine you soon. We may need to do blood tests and a scan.",
          "zh": "好的。我們會幫你戴上手環，醫生很快會幫你檢查。我們可能需要驗血和做掃描。"
        },
        {
          "s": "Y",
          "en": "Will I need to pay before I'm treated?",
          "zh": "我需要先付費才能治療嗎？"
        },
        {
          "s": "N",
          "en": "No. Emergency rooms treat everyone, and billing comes later by mail.",
          "zh": "不用。急診室會治療所有人，帳單之後會用郵寄寄給你。"
        },
        {
          "s": "Y",
          "en": "Thank you. Could I get an interpreter? I want to be sure I understand.",
          "zh": "謝謝。我可以要一位口譯員嗎？我想確定我聽得懂。"
        },
        {
          "s": "N",
          "en": "Yes, we have a free interpreter service. I'll call one for you now.",
          "zh": "可以，我們有免費的口譯服務。我現在幫你叫一位。"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "I hurt my ankle playing basketball.",
      "zh": "我打籃球傷到腳踝。"
    },
    {
      "en": "It's swollen, and I can't put weight on it.",
      "zh": "腫起來了，我沒辦法承重。"
    },
    {
      "en": "Is this urgent care or the ER?",
      "zh": "這裡是 urgent care 還是急診室？"
    },
    {
      "en": "This is my first time here.",
      "zh": "這是我第一次來。"
    },
    {
      "en": "Here's my insurance card.",
      "zh": "這是我的保險卡。"
    },
    {
      "en": "How long is the wait?",
      "zh": "要等多久？"
    },
    {
      "en": "How much is the copay?",
      "zh": "自付額是多少？"
    },
    {
      "en": "The pain is about seven out of ten.",
      "zh": "疼痛大約七分（滿分十分）。"
    },
    {
      "en": "It started two hours ago.",
      "zh": "兩個小時前開始的。"
    },
    {
      "en": "It keeps getting worse.",
      "zh": "它越來越嚴重。"
    },
    {
      "en": "I feel nauseous, and I threw up.",
      "zh": "我覺得想吐，而且吐了。"
    },
    {
      "en": "I have a high fever.",
      "zh": "我發高燒。"
    },
    {
      "en": "I'm having trouble breathing.",
      "zh": "我呼吸有困難。"
    },
    {
      "en": "I have a deep cut that won't stop bleeding.",
      "zh": "我有一個很深的傷口，血止不住。"
    },
    {
      "en": "I'm allergic to penicillin.",
      "zh": "我對盤尼西林過敏。"
    },
    {
      "en": "Do I need an X-ray?",
      "zh": "我需要拍 X 光嗎？"
    },
    {
      "en": "Is it broken, or is it a sprain?",
      "zh": "是骨折，還是扭傷？"
    },
    {
      "en": "Will I need to pay before I'm treated?",
      "zh": "我需要先付費才能治療嗎？"
    },
    {
      "en": "Could I get an interpreter?",
      "zh": "我可以要一位口譯員嗎？"
    },
    {
      "en": "Could I have a note for school?",
      "zh": "可以開一張給學校的假單嗎？"
    }
  ],
  "hear": [
    {
      "en": "What brings you in today?",
      "zh": "你今天為什麼來？",
      "reply": "I hurt my ankle. It's swollen.",
      "replyZh": "我傷到腳踝，腫起來了。"
    },
    {
      "en": "Have you been here before?",
      "zh": "你以前來過嗎？",
      "reply": "No, this is my first time.",
      "replyZh": "沒有，這是我第一次。"
    },
    {
      "en": "Do you have health insurance?",
      "zh": "你有健康保險嗎？",
      "reply": "Yes. Here's my student health card.",
      "replyZh": "有，這是我的學生健康保險卡。"
    },
    {
      "en": "It's about a forty-five minute wait.",
      "zh": "大約要等四十五分鐘。",
      "reply": "Okay. Can I sit down?",
      "replyZh": "好，我可以坐下嗎？"
    },
    {
      "en": "On a scale of one to ten, how bad is the pain?",
      "zh": "從一到十分，疼痛有多嚴重？",
      "reply": "About seven.",
      "replyZh": "大約七分。"
    },
    {
      "en": "Do you have any allergies?",
      "zh": "你有任何過敏嗎？",
      "reply": "No, I don't.",
      "replyZh": "沒有。"
    },
    {
      "en": "Does it hurt when I press here?",
      "zh": "我按這裡會痛嗎？",
      "reply": "Yes, right there.",
      "replyZh": "會，就是那裡。"
    },
    {
      "en": "I'd like to get an X-ray.",
      "zh": "我想拍 X 光。",
      "reply": "Okay. Is it safe?",
      "replyZh": "好，安全嗎？"
    },
    {
      "en": "You have a bad sprain, but nothing is broken.",
      "zh": "你有嚴重扭傷，但沒有骨折。",
      "reply": "What should I do for it?",
      "replyZh": "我該怎麼處理？"
    },
    {
      "en": "Can I have your name and date of birth?",
      "zh": "可以給我你的名字和出生日期嗎？",
      "reply": "Sure. It's Kevin Lin, March fourth, two thousand five.",
      "replyZh": "好，我叫 Kevin Lin，二〇〇五年三月四日。"
    }
  ],
  "say": [
    {
      "en": "Hi, I need to see a doctor. I hurt myself.",
      "zh": "嗨，我需要看醫生，我受傷了。"
    },
    {
      "en": "Do you take my insurance?",
      "zh": "你們接受我的保險嗎？"
    },
    {
      "en": "Is this serious? Should I go to the ER?",
      "zh": "這嚴重嗎？我應該去急診室嗎？"
    },
    {
      "en": "My arm hurts a lot, and I think it might be broken.",
      "zh": "我的手臂很痛，我想可能骨折了。"
    },
    {
      "en": "I fell and hit my head. I feel dizzy.",
      "zh": "我跌倒撞到頭，我覺得頭暈。"
    },
    {
      "en": "Could you explain what you're going to do?",
      "zh": "可以說明你接下來要做什麼嗎？"
    },
    {
      "en": "How much will this cost without insurance?",
      "zh": "沒有保險的話要多少錢？"
    },
    {
      "en": "Could I get a copy of my records and the receipt?",
      "zh": "我可以拿一份我的病歷和收據嗎？"
    },
    {
      "en": "Where can I pick up the medicine?",
      "zh": "我可以去哪裡領藥？"
    },
    {
      "en": "Sorry, could you say that again more slowly?",
      "zh": "抱歉，可以說慢一點再說一次嗎？"
    }
  ],
  "vocab": [
    {
      "w": "urgent care",
      "pos": "n.",
      "zh": "緊急護理診所（不用預約）",
      "ex": "I went to urgent care for a sprain.",
      "exzh": "我因為扭傷去了 urgent care。"
    },
    {
      "w": "emergency room (ER)",
      "pos": "n.",
      "zh": "急診室",
      "ex": "Chest pain is a reason to go to the ER.",
      "exzh": "胸痛是去急診室的理由。"
    },
    {
      "w": "sprain",
      "pos": "n.",
      "zh": "扭傷",
      "ex": "He has a sprained ankle.",
      "exzh": "他的腳踝扭傷了。"
    },
    {
      "w": "fracture",
      "pos": "n.",
      "zh": "骨折",
      "ex": "The X-ray shows a fracture.",
      "exzh": "X 光顯示有骨折。"
    },
    {
      "w": "swollen",
      "pos": "adj.",
      "zh": "腫的",
      "ex": "My knee is swollen.",
      "exzh": "我的膝蓋腫起來了。"
    },
    {
      "w": "nauseous",
      "pos": "adj.",
      "zh": "想吐的",
      "ex": "I feel nauseous.",
      "exzh": "我覺得想吐。"
    },
    {
      "w": "stitches",
      "pos": "n.",
      "zh": "縫線、縫合",
      "ex": "He needed five stitches.",
      "exzh": "他需要縫五針。"
    },
    {
      "w": "crutches",
      "pos": "n.",
      "zh": "拐杖",
      "ex": "I have to use crutches for a week.",
      "exzh": "我要用拐杖一個星期。"
    },
    {
      "w": "wristband",
      "pos": "n.",
      "zh": "手環",
      "ex": "They put a wristband on me.",
      "exzh": "他們幫我戴上手環。"
    },
    {
      "w": "triage",
      "pos": "n.",
      "zh": "傷病分流",
      "ex": "The triage nurse sees patients first.",
      "exzh": "分流護理師會先看病人。"
    },
    {
      "w": "interpreter",
      "pos": "n.",
      "zh": "口譯員",
      "ex": "We provide a free interpreter.",
      "exzh": "我們提供免費的口譯員。"
    },
    {
      "w": "billing",
      "pos": "n.",
      "zh": "帳務、帳單",
      "ex": "Billing will mail you a statement.",
      "exzh": "帳務部會把帳單寄給你。"
    }
  ],
  "situations": [
    {
      "title": "😵 醫生講太快、用很多醫學名詞",
      "hear": {
        "en": "It's a grade two lateral ankle sprain with some ligament damage, so we'll immobilize it, and if it doesn't improve in a week, we'll refer you to orthopedics.",
        "zh": "（講得很快）是二級的外側踝關節扭傷，有些韌帶受損，所以我們先固定，如果一個星期沒好轉，就轉介你去骨科。",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you explain that in simple words?",
          "zh": "抱歉，可以用簡單的說法解釋嗎？"
        },
        {
          "en": "So I need to keep it still, and if it doesn't get better, I should see a specialist. Is that right?",
          "zh": "所以我要讓它固定不動，如果沒好轉就去看專科，對嗎？"
        }
      ],
      "tip": "在急診聽不懂醫學名詞很常見。請對方用簡單的話解釋，並複述一次確認。也可以要求口譯員（interpreter），是免費的。"
    },
    {
      "title": "❓ 不確定該去 Urgent Care 還是 ER",
      "say": [
        {
          "en": "I have a fever and a bad cough. Should I go to urgent care or the ER?",
          "zh": "我發燒又咳得很厲害，應該去 urgent care 還是急診室？"
        },
        {
          "en": "Is there a nurse hotline I can call?",
          "zh": "有我可以打的護理諮詢專線嗎？"
        }
      ],
      "tip": "輕微傷病（扭傷、小傷口、感冒發燒、膀胱炎）去 urgent care，便宜又快。危及生命（胸痛、呼吸困難、嚴重出血、意識不清、中風徵兆）要直接去急診室或打 911。"
    },
    {
      "title": "💰 擔心費用",
      "say": [
        {
          "en": "How much will this visit cost? Is there a payment plan?",
          "zh": "這次看診要多少錢？可以分期付款嗎？"
        },
        {
          "en": "I'm an international student. Can I get an itemized bill?",
          "zh": "我是國際學生，可以給我明細帳單嗎？"
        }
      ],
      "tip": "急診室費用很高，帳單通常幾週後才寄到。可以向醫院的帳務部門要求明細、分期付款或財務協助（financial assistance）。留學生也要和學校的保險辦公室確認給付範圍。"
    },
    {
      "title": "🚨 需要打 911 或叫救護車",
      "say": [
        {
          "en": "Please call an ambulance. My friend can't breathe.",
          "zh": "請叫救護車，我朋友無法呼吸。"
        },
        {
          "en": "He fainted and isn't responding.",
          "zh": "他昏倒了，沒有反應。"
        }
      ],
      "tip": "看到有人昏倒、無法呼吸、大量出血，直接打 911，不要自己開車送。救護車會把人送去最近、最合適的急診室。"
    },
    {
      "title": "📋 拿到出院單與藥單",
      "hear": {
        "en": "Take this prescription to the pharmacy, and come back if the pain gets worse.",
        "zh": "把這張處方拿去藥局領藥，如果更痛了就再回來。"
      },
      "say": [
        {
          "en": "Which pharmacy should I go to? And how often should I take this?",
          "zh": "我該去哪間藥局？這個藥要多久吃一次？"
        },
        {
          "en": "When can I go back to school and play sports?",
          "zh": "我什麼時候可以回學校、可以運動？"
        }
      ],
      "tip": "離開前確認：處方藥在哪領、怎麼吃、什麼情況要再回來、多久後可以恢復活動，並拿一份出院說明（discharge instructions）。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "What brings you in today?",
      "prompt": "櫃台人員在問什麼？",
      "options": [
        "你今天為什麼來",
        "你要不要付費",
        "你叫什麼名字"
      ],
      "answer": 0,
      "note": "What brings you in? 是「你為什麼來？」。"
    },
    {
      "type": "選擇回應",
      "audio": "Have you been here before?",
      "prompt": "你第一次來，最適合怎麼回答？",
      "options": [
        "No, this is my first time.",
        "Yes, it hurts a lot.",
        "It's fifty dollars."
      ],
      "answer": 0,
      "note": "first time 是第一次。"
    },
    {
      "type": "聽數字",
      "audio": "It's about forty-five minutes right now. Your copay is fifty dollars.",
      "prompt": "等候時間和自付額是多少？",
      "options": [
        "45 分鐘，50 元",
        "15 分鐘，45 元",
        "54 分鐘，15 元"
      ],
      "answer": 0,
      "note": "forty-five 是 45，fifteen 是 15。"
    },
    {
      "type": "聽懂意思",
      "audio": "On a scale of one to ten, how bad is the pain?",
      "prompt": "護理師在問什麼？",
      "options": [
        "疼痛有多嚴重",
        "你幾歲",
        "你有沒有保險"
      ],
      "answer": 0,
      "note": "on a scale of one to ten 是從一到十分。",
      "speaker": "N"
    },
    {
      "type": "選擇回應",
      "audio": "Do you have any allergies or take any medications?",
      "prompt": "你都沒有，最適合怎麼回答？",
      "options": [
        "No allergies, and no medication.",
        "Yes, it's seven.",
        "I like basketball."
      ],
      "answer": 0,
      "note": "allergies 是過敏，medications 是藥物。",
      "speaker": "N"
    },
    {
      "type": "聽懂意思",
      "audio": "The X-ray shows no broken bones, but you have a bad sprain.",
      "prompt": "X 光結果是什麼？",
      "options": [
        "沒有骨折，但嚴重扭傷",
        "骨折了",
        "完全沒事"
      ],
      "answer": 0,
      "note": "broken bones 是骨折，sprain 是扭傷。",
      "speaker": "D"
    },
    {
      "type": "聽懂意思",
      "audio": "Rest, ice it for twenty minutes every few hours, wrap it, and keep it raised.",
      "prompt": "醫生建議怎麼做？",
      "options": [
        "休息、冰敷、包紮、抬高",
        "馬上開始運動",
        "不用處理"
      ],
      "answer": 0,
      "note": "keep it raised 是把它抬高。",
      "speaker": "D"
    },
    {
      "type": "聽懂意思",
      "audio": "No. Emergency rooms treat everyone, and billing comes later by mail.",
      "prompt": "關於費用護理師說了什麼？",
      "options": [
        "不用先付費，帳單之後郵寄",
        "一定要先付費",
        "急診不收費"
      ],
      "answer": 0,
      "note": "billing comes later 是之後才收帳單。",
      "speaker": "N"
    },
    {
      "type": "對話理解",
      "audio": "I have severe pain in my stomach. It started two hours ago, and it keeps getting worse. I feel nauseous, and I threw up once.",
      "prompt": "病人遇到什麼問題？",
      "options": [
        "劇烈腹痛、想吐",
        "腳踝扭傷",
        "嚴重頭痛"
      ],
      "answer": 0,
      "note": "severe 是劇烈的，threw up 是嘔吐。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "Will I need to pay before I'm treated? And could I get an interpreter? I want to be sure I understand.",
      "prompt": "病人在問什麼？",
      "options": [
        "要不要先付費，以及能不能有口譯員",
        "什麼時候可以回家",
        "保險給付多少"
      ],
      "answer": 0,
      "note": "interpreter 是口譯員。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Welcome to Quick Care Urgent Care. What brings you in today?",
      "promptZh": "歡迎來到 Quick Care Urgent Care，你今天為什麼來？",
      "hint": "說你打球扭傷腳踝",
      "expect": "ankle|hurt|sprain|swollen|injur|basketball",
      "model": "I hurt my ankle playing basketball. It's swollen, and I can't put weight on it.",
      "modelZh": "我打籃球傷到腳踝，腫起來了，沒辦法承重。"
    },
    {
      "prompt": "Have you been here before? Do you have health insurance?",
      "promptZh": "你以前來過嗎？你有健康保險嗎？",
      "hint": "說第一次來，並說你有保險",
      "expect": "first|no|insurance|student|yes|card",
      "model": "No, this is my first time. I have the student health plan.",
      "modelZh": "沒有，這是我第一次來。我有學生健康保險。"
    },
    {
      "prompt": "It's about a forty-five minute wait. Your copay is fifty dollars.",
      "promptZh": "大約要等四十五分鐘，自付額五十塊。",
      "hint": "問可不可以刷卡",
      "expect": "card|pay|credit|debit|cash|okay",
      "model": "Okay. Can I pay by card?",
      "modelZh": "好，我可以刷卡嗎？"
    },
    {
      "prompt": "On a scale of one to ten, how bad is the pain?",
      "promptZh": "從一到十分，疼痛有多嚴重？",
      "hint": "說一個數字，例如七分",
      "expect": "\\b(one|two|three|four|five|six|seven|eight|nine|ten|\\d+)\\b",
      "model": "About seven. It hurts a lot when I walk.",
      "modelZh": "大約七分，我走路時很痛。"
    },
    {
      "prompt": "Do you have any allergies or take any medications?",
      "promptZh": "你有任何過敏或在吃什麼藥嗎？",
      "hint": "說都沒有",
      "expect": "no|none|don't|allerg|medication",
      "model": "No allergies, and I don't take any medication.",
      "modelZh": "沒有過敏，也沒有吃藥。"
    },
    {
      "prompt": "I'd like to get an X-ray to check for a fracture.",
      "promptZh": "我想拍 X 光，看有沒有骨折。",
      "hint": "說好，並問安全嗎",
      "expect": "okay|ok|sure|yes|safe|x-?ray|fine",
      "model": "Okay. Is the X-ray safe?",
      "modelZh": "好，X 光安全嗎？"
    },
    {
      "prompt": "Emergency Room. What's the problem?",
      "promptZh": "急診室，你哪裡不舒服？",
      "hint": "說你肚子劇烈疼痛",
      "expect": "stomach|pain|hurt|severe|belly|sick|nauseous",
      "model": "I have severe pain in my stomach, and it keeps getting worse.",
      "modelZh": "我的肚子劇烈疼痛，而且越來越痛。"
    },
    {
      "prompt": "We'll put a wristband on you, and a doctor will see you soon. Do you have any questions?",
      "promptZh": "我們幫你戴手環，醫生很快會來。你有問題嗎？",
      "hint": "問要不要先付費，並要口譯員",
      "expect": "pay|interpreter|cost|bill|before|help",
      "model": "Will I need to pay first? And could I get an interpreter, please?",
      "modelZh": "我需要先付費嗎？可以請一位口譯員嗎？"
    }
  ],
  "culture": [
    {
      "t": "Urgent Care 和急診室（ER）怎麼選",
      "d": "輕微傷病（扭傷、小傷口、感冒發燒、喉嚨痛）去 urgent care，不用預約、費用比 ER 低很多。危及生命的情況（胸痛、呼吸困難、嚴重出血、意識不清、中風徵兆、嚴重外傷）要去急診室或打 911。"
    },
    {
      "t": "急診室的流程",
      "d": "到急診室先報到，護理師會做分流（triage）評估嚴重程度，所以不是先來先看。最緊急的人先處理，輕微的人可能要等很久。你會戴手環，等醫生檢查，可能還要驗血、照 X 光或掃描。"
    },
    {
      "t": "急診一定會處理，費用之後才算",
      "d": "美國法律規定急診室必須先處理緊急病情，不能因為沒有保險或付不出錢而拒絕。帳單通常幾週後才寄到，金額可能很高。可以要求明細帳單、分期付款，或向醫院申請財務協助。"
    },
    {
      "t": "疼痛評分與描述症狀",
      "d": "護理師常會問「從一到十分，有多痛？」。學會說 It started two hours ago、It keeps getting worse、It hurts when I… 這類句子，說明從什麼時候開始、位置在哪裡、有沒有越來越嚴重。"
    },
    {
      "t": "聽不懂可以要求口譯員",
      "d": "醫院有義務提供免費的口譯服務。聽不懂醫生或護理師的話時，可以直接說 Could I get an interpreter? 不要因為語言不通而點頭。出院前也要拿一份說明，包括藥怎麼吃、什麼時候回診。"
    }
  ]
};
