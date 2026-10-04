// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "doctor-appointment",
  "title": "預約看診與保險",
  "en": "Making a Doctor Appointment",
  "emoji": "🩺",
  "goal": "學會打電話預約看診、說明保險與症狀、到診所報到填表、聽懂護理師和醫生的問題，並看懂自付額與開藥的說明",
  "videos": [
    {
      "id": "kK99NlPe0-0",
      "title": "Making a Doctor's Appointment | English Conversation（EverydayEnglish）"
    },
    {
      "id": "5jP6qM3Kakc",
      "title": "Doctor's Appointment | English Conversation（Learn English by Pocket Passport）"
    },
    {
      "id": "k0NvrZFqIko",
      "title": "5-Minute English Conversation Practice: Feeling Sick (Making a Doctor's Appointment)（English Together）"
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
      "avatar": "🙋‍♀️",
      "voice": "f5"
    },
    "N": {
      "name": "Nurse",
      "zh": "護理師",
      "avatar": "👩‍⚕️",
      "voice": "f4"
    },
    "D": {
      "name": "Doctor",
      "zh": "醫生",
      "avatar": "👨‍⚕️",
      "voice": "m3"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "打電話預約",
      "where": "電話聯絡診所，說明保險與症狀",
      "emoji": "📞",
      "lines": [
        {
          "s": "S",
          "en": "Good morning, Riverside Family Clinic. How can I help you?",
          "zh": "早安，Riverside 家庭診所，有什麼可以幫你的？"
        },
        {
          "s": "Y",
          "en": "Hi, I'd like to make an appointment to see a doctor. I've had a sore throat for three days.",
          "zh": "嗨，我想預約看醫生。我喉嚨痛三天了。"
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
          "en": "Okay. Do you have health insurance? I'll need the name of your insurance company and your member ID.",
          "zh": "好的。你有健康保險嗎？我需要你的保險公司名稱和會員編號。"
        },
        {
          "s": "Y",
          "en": "Yes, I'm covered by the student health plan. Do you accept it?",
          "zh": "有，我有學生健康保險。你們接受嗎？"
        },
        {
          "s": "S",
          "en": "Yes, we're in-network for that plan. Your copay will be thirty dollars. Would tomorrow at ten thirty work?",
          "zh": "是的，我們是這個保險的特約診所。你的自付額是三十塊。明天十點半可以嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, that works. Do I need to bring anything?",
          "zh": "可以。我需要帶什麼嗎？"
        },
        {
          "s": "S",
          "en": "Please bring your insurance card, a photo ID, and a list of any medications you take. And please arrive fifteen minutes early.",
          "zh": "請帶保險卡、附照片的證件，以及你目前服用的藥物清單。並請提早十五分鐘到。"
        },
        {
          "s": "Y",
          "en": "Okay. What if I need to cancel?",
          "zh": "好的。如果我需要取消呢？"
        },
        {
          "s": "S",
          "en": "Please call us at least twenty-four hours before, or there may be a cancellation fee.",
          "zh": "請至少在二十四小時前打電話給我們，否則可能要收取取消費。"
        }
      ]
    },
    {
      "title": "報到與護理師問診",
      "where": "診所櫃台與診間",
      "emoji": "🗂️",
      "lines": [
        {
          "s": "Y",
          "en": "Hi, I have an appointment at ten thirty. My name is Amy Chen.",
          "zh": "嗨，我預約了十點半，我叫 Amy Chen。"
        },
        {
          "s": "S",
          "en": "Welcome, Amy. Since it's your first visit, please fill out these forms and show me your insurance card and ID.",
          "zh": "歡迎，Amy。因為是你第一次來，請填寫這些表格，並給我看你的保險卡和證件。"
        },
        {
          "s": "Y",
          "en": "Here you go. Do I pay the copay now?",
          "zh": "給你。我現在要付自付額嗎？"
        },
        {
          "s": "S",
          "en": "Yes, thirty dollars at check-in. Cash or card is fine.",
          "zh": "要，報到時付三十塊，現金或刷卡都可以。"
        },
        {
          "s": "N",
          "en": "Amy? Come on back. Let's check your weight and temperature first.",
          "zh": "Amy？請跟我進來。我們先量體重和體溫。"
        },
        {
          "s": "N",
          "en": "Your temperature is a little high, ninety-nine point five. Do you have any allergies?",
          "zh": "你的體溫有點高，華氏九十九點五度。你有任何過敏嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, I'm allergic to penicillin.",
          "zh": "有，我對盤尼西林過敏。"
        },
        {
          "s": "N",
          "en": "Okay, I'll write that down. Are you taking any medications right now?",
          "zh": "好的，我記下來。你現在有服用任何藥物嗎？"
        },
        {
          "s": "Y",
          "en": "Just vitamins. No prescriptions.",
          "zh": "只有維他命，沒有處方藥。"
        },
        {
          "s": "N",
          "en": "What brings you in today?",
          "zh": "你今天為什麼來看診？"
        },
        {
          "s": "Y",
          "en": "I've had a sore throat and a cough for three days, and I feel tired.",
          "zh": "我喉嚨痛和咳嗽三天了，而且覺得很累。"
        }
      ]
    },
    {
      "title": "看醫生、處方與費用",
      "where": "診間與櫃台",
      "emoji": "💊",
      "lines": [
        {
          "s": "D",
          "en": "Hi, Amy. I'm Dr. Patel. I hear you're not feeling well. Tell me what's going on.",
          "zh": "嗨，Amy。我是 Patel 醫師。我聽說你不太舒服，說說看怎麼了。"
        },
        {
          "s": "Y",
          "en": "My throat hurts, especially when I swallow, and I have a cough and a low fever.",
          "zh": "我的喉嚨很痛，尤其是吞嚥的時候，還有咳嗽和低燒。"
        },
        {
          "s": "D",
          "en": "Okay. Please open your mouth and say ah. Your throat looks red. I'd like to do a quick strep test.",
          "zh": "好的，請張開嘴巴說啊。你的喉嚨很紅，我想做個快速的鏈球菌檢測。"
        },
        {
          "s": "Y",
          "en": "Okay. How long will the results take?",
          "zh": "好的，結果要多久？"
        },
        {
          "s": "D",
          "en": "About ten minutes. The test is negative, so it's probably a virus. You don't need antibiotics.",
          "zh": "大約十分鐘。檢測是陰性，所以可能是病毒感染，你不需要抗生素。"
        },
        {
          "s": "Y",
          "en": "What should I do to feel better?",
          "zh": "我要怎麼做才會比較舒服？"
        },
        {
          "s": "D",
          "en": "Rest, drink plenty of fluids, and take acetaminophen for the fever. I'm also giving you a note for school.",
          "zh": "多休息、多喝水，發燒時吃乙醯胺酚。我也開一張給學校的假單給你。"
        },
        {
          "s": "Y",
          "en": "Thank you. When should I come back?",
          "zh": "謝謝。我什麼時候要回診？"
        },
        {
          "s": "D",
          "en": "If you're not better in five days, or if you have trouble breathing, call us right away.",
          "zh": "如果五天後沒有好轉，或是呼吸困難，請馬上打給我們。"
        },
        {
          "s": "S",
          "en": "Your visit is covered, so there's nothing more to pay today. You'll get an explanation of benefits from your insurance in the mail.",
          "zh": "你這次看診有給付，所以今天不用再付費。你會收到保險公司寄來的給付說明。"
        },
        {
          "s": "Y",
          "en": "Great. Can I use the patient portal to see my test results?",
          "zh": "太好了。我可以用病患入口網站看檢查結果嗎？"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "I'd like to make an appointment.",
      "zh": "我想預約看診。"
    },
    {
      "en": "I'd like to see a doctor.",
      "zh": "我想看醫生。"
    },
    {
      "en": "I've had a sore throat for three days.",
      "zh": "我喉嚨痛三天了。"
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
      "en": "I'm covered by the student health plan.",
      "zh": "我有學生健康保險。"
    },
    {
      "en": "How much is the copay?",
      "zh": "自付額是多少？"
    },
    {
      "en": "Do I need to bring anything?",
      "zh": "我需要帶什麼嗎？"
    },
    {
      "en": "Do you have anything earlier today?",
      "zh": "今天有更早的時段嗎？"
    },
    {
      "en": "I'd like to cancel my appointment.",
      "zh": "我想取消預約。"
    },
    {
      "en": "I have an appointment at ten thirty.",
      "zh": "我預約了十點半。"
    },
    {
      "en": "I'm allergic to penicillin.",
      "zh": "我對盤尼西林過敏。"
    },
    {
      "en": "I'm not taking any medication.",
      "zh": "我沒有服用任何藥物。"
    },
    {
      "en": "I have a fever and a cough.",
      "zh": "我發燒和咳嗽。"
    },
    {
      "en": "I feel dizzy and tired.",
      "zh": "我覺得頭暈又疲倦。"
    },
    {
      "en": "It hurts when I swallow.",
      "zh": "我吞嚥的時候會痛。"
    },
    {
      "en": "Do I need antibiotics?",
      "zh": "我需要抗生素嗎？"
    },
    {
      "en": "How often should I take this medicine?",
      "zh": "這個藥多久吃一次？"
    },
    {
      "en": "When should I come back for a follow-up?",
      "zh": "我什麼時候要回診？"
    },
    {
      "en": "Could I get a note for school?",
      "zh": "可以開一張給學校的假單嗎？"
    }
  ],
  "hear": [
    {
      "en": "Are you a new patient?",
      "zh": "你是新病人嗎？",
      "reply": "Yes, I'm a student at the university.",
      "replyZh": "是的，我是這所大學的學生。"
    },
    {
      "en": "Do you have health insurance?",
      "zh": "你有健康保險嗎？",
      "reply": "Yes, I have the student health plan.",
      "replyZh": "有，我有學生健康保險。"
    },
    {
      "en": "Would tomorrow at ten thirty work for you?",
      "zh": "明天十點半你可以嗎？",
      "reply": "Yes, that works. Thank you.",
      "replyZh": "可以，謝謝你。"
    },
    {
      "en": "Please arrive fifteen minutes early.",
      "zh": "請提早十五分鐘到。",
      "reply": "Okay. Do I need to bring anything?",
      "replyZh": "好，我需要帶什麼嗎？"
    },
    {
      "en": "Please fill out these forms.",
      "zh": "請填寫這些表格。",
      "reply": "Sure. Do you have a pen?",
      "replyZh": "好，你有筆嗎？"
    },
    {
      "en": "Your copay is thirty dollars.",
      "zh": "你的自付額是三十塊。",
      "reply": "Can I pay by card?",
      "replyZh": "我可以刷卡嗎？"
    },
    {
      "en": "Do you have any allergies?",
      "zh": "你有任何過敏嗎？",
      "reply": "Yes, I'm allergic to penicillin.",
      "replyZh": "有，我對盤尼西林過敏。"
    },
    {
      "en": "What brings you in today?",
      "zh": "你今天為什麼來看診？",
      "reply": "I have a sore throat and a cough.",
      "replyZh": "我喉嚨痛和咳嗽。"
    },
    {
      "en": "Are you taking any medications right now?",
      "zh": "你現在有服用任何藥物嗎？",
      "reply": "Just vitamins. No prescriptions.",
      "replyZh": "只有維他命，沒有處方藥。"
    },
    {
      "en": "If you're not better in five days, call us.",
      "zh": "如果五天後沒有好轉，請打給我們。",
      "reply": "Okay, I will. Thank you, doctor.",
      "replyZh": "好，我會的。謝謝醫生。"
    }
  ],
  "say": [
    {
      "en": "Hi, I'd like to see a doctor as soon as possible.",
      "zh": "嗨，我想盡快看醫生。"
    },
    {
      "en": "I'm new, and I have the student health plan.",
      "zh": "我是新病人，我有學生健康保險。"
    },
    {
      "en": "Is it a general doctor or a specialist?",
      "zh": "這是一般醫生還是專科醫生？"
    },
    {
      "en": "I've had a headache and a fever since yesterday.",
      "zh": "我從昨天開始頭痛和發燒。"
    },
    {
      "en": "It started three days ago, and it's getting worse.",
      "zh": "三天前開始的，而且越來越嚴重。"
    },
    {
      "en": "Could you explain what the test is for?",
      "zh": "可以說明這個檢查是做什麼的嗎？"
    },
    {
      "en": "Is there a cheaper option, like a generic medicine?",
      "zh": "有比較便宜的選擇嗎，例如學名藥？"
    },
    {
      "en": "Could I get a copy of my test results?",
      "zh": "我可以拿一份我的檢查結果嗎？"
    },
    {
      "en": "Will insurance cover this visit?",
      "zh": "保險會給付這次看診嗎？"
    },
    {
      "en": "Sorry, could you say that again more slowly?",
      "zh": "抱歉，可以說慢一點再說一次嗎？"
    }
  ],
  "vocab": [
    {
      "w": "appointment",
      "pos": "n.",
      "zh": "預約",
      "ex": "I have a doctor appointment tomorrow.",
      "exzh": "我明天有看診預約。"
    },
    {
      "w": "insurance",
      "pos": "n.",
      "zh": "保險",
      "ex": "Do you have health insurance?",
      "exzh": "你有健康保險嗎？"
    },
    {
      "w": "copay",
      "pos": "n.",
      "zh": "自付額（每次看診固定自付的錢）",
      "ex": "The copay is thirty dollars.",
      "exzh": "自付額是三十塊。"
    },
    {
      "w": "deductible",
      "pos": "n.",
      "zh": "免賠額",
      "ex": "My deductible is five hundred dollars.",
      "exzh": "我的免賠額是五百塊。"
    },
    {
      "w": "in-network",
      "pos": "adj.",
      "zh": "保險特約的",
      "ex": "This clinic is in-network.",
      "exzh": "這間診所是保險特約的。"
    },
    {
      "w": "prescription",
      "pos": "n.",
      "zh": "處方、處方藥",
      "ex": "I need a prescription for this medicine.",
      "exzh": "這個藥我需要處方。"
    },
    {
      "w": "allergy",
      "pos": "n.",
      "zh": "過敏",
      "ex": "I have a food allergy.",
      "exzh": "我有食物過敏。"
    },
    {
      "w": "symptom",
      "pos": "n.",
      "zh": "症狀",
      "ex": "What are your symptoms?",
      "exzh": "你有什麼症狀？"
    },
    {
      "w": "fever",
      "pos": "n.",
      "zh": "發燒",
      "ex": "I have a low fever.",
      "exzh": "我有點低燒。"
    },
    {
      "w": "antibiotics",
      "pos": "n.",
      "zh": "抗生素",
      "ex": "You don't need antibiotics.",
      "exzh": "你不需要抗生素。"
    },
    {
      "w": "follow-up",
      "pos": "n.",
      "zh": "回診",
      "ex": "Schedule a follow-up in a week.",
      "exzh": "一星期後安排回診。"
    },
    {
      "w": "referral",
      "pos": "n.",
      "zh": "轉診單",
      "ex": "I need a referral to see a specialist.",
      "exzh": "我需要轉診單才能看專科。"
    }
  ],
  "situations": [
    {
      "title": "😵 醫生講太快、用很多醫學名詞",
      "hear": {
        "en": "It looks like an upper respiratory infection, probably viral, so we'll treat the symptoms with fluids, rest, and over-the-counter medication, and follow up if it persists.",
        "zh": "（講得很快）看起來是上呼吸道感染，可能是病毒引起的，所以靠多喝水、休息和成藥來緩解症狀，如果持續不好再回診。",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you explain that in simple words?",
          "zh": "抱歉，可以用簡單的說法解釋嗎？"
        },
        {
          "en": "So I just need to rest and drink water, and come back if it doesn't get better. Is that right?",
          "zh": "所以我只要休息、多喝水，沒好轉再回來，對嗎？"
        }
      ],
      "tip": "醫學名詞聽不懂很正常。請醫生用簡單的話說，或寫下來，並用自己的話複述一次確認。診間可以請醫生再說一次。"
    },
    {
      "title": "⏰ 想預約但最近都沒位子",
      "hear": {
        "en": "The next available appointment is in two weeks.",
        "zh": "下一個空檔是兩週後。"
      },
      "say": [
        {
          "en": "I'm not feeling well. Do you have anything sooner, or a cancellation list?",
          "zh": "我不太舒服，有更早的時段，或候補名單嗎？"
        },
        {
          "en": "Is there a walk-in clinic or urgent care nearby?",
          "zh": "附近有不用預約的診所或 urgent care 嗎？"
        }
      ],
      "tip": "家庭醫生常常要等好幾天甚至好幾週。有點急的話，可以問候補（cancellation list）、護理師專線，或改去不用預約的 walk-in 診所或 urgent care。"
    },
    {
      "title": "💵 不確定保險有沒有給付",
      "say": [
        {
          "en": "Could you check if my insurance covers this visit?",
          "zh": "可以幫我確認保險有沒有給付這次看診嗎？"
        },
        {
          "en": "How much will I owe after insurance?",
          "zh": "扣掉保險後我要付多少？"
        }
      ],
      "tip": "看診前先問「是不是特約診所（in-network）」。非特約診所費用可能高很多。看完幾週後會收到保險公司的給付說明（EOB）和診所的帳單，要核對。"
    },
    {
      "title": "💊 醫生開藥、想問怎麼吃",
      "hear": {
        "en": "Take one pill twice a day with food for seven days.",
        "zh": "每天兩次、隨餐吃一顆，連續七天。"
      },
      "say": [
        {
          "en": "Are there any side effects I should watch out for?",
          "zh": "有什麼副作用需要注意嗎？"
        },
        {
          "en": "What should I do if I miss a dose?",
          "zh": "如果我忘記吃一次怎麼辦？"
        }
      ],
      "tip": "開藥後要問清楚：一次吃多少、一天幾次、吃多久、要不要飯後吃、有沒有副作用，以及有沒有跟其他藥衝突。藥通常到藥局領。"
    },
    {
      "title": "🚨 情況突然變嚴重",
      "say": [
        {
          "en": "My symptoms are getting worse. Should I come in again, or go to the ER?",
          "zh": "我的症狀越來越嚴重，我應該再來看診，還是去急診？"
        },
        {
          "en": "I'm having trouble breathing. I need help now.",
          "zh": "我呼吸有困難，我現在需要幫助。"
        }
      ],
      "tip": "呼吸困難、胸痛、意識不清、高燒不退等是緊急狀況，要直接去急診室（ER）或打 911，不要等預約。下一個單元會學急診。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "Are you a new patient?",
      "prompt": "櫃台人員在問什麼？",
      "options": [
        "你是不是新病人",
        "你有沒有發燒",
        "你要不要付款"
      ],
      "answer": 0,
      "note": "patient 是病人。"
    },
    {
      "type": "選擇回應",
      "audio": "Do you have health insurance?",
      "prompt": "你有學生保險，最適合怎麼回答？",
      "options": [
        "Yes, I have the student health plan.",
        "No, I have a fever.",
        "It's at ten thirty."
      ],
      "answer": 0,
      "note": "health insurance 是健康保險。"
    },
    {
      "type": "聽數字",
      "audio": "Your copay will be thirty dollars. Would tomorrow at ten thirty work?",
      "prompt": "自付額和預約時間是？",
      "options": [
        "30 元，明天十點半",
        "13 元，明天十點十三",
        "30 元，明天三點十分"
      ],
      "answer": 0,
      "note": "thirty 是 30，thirteen 是 13。"
    },
    {
      "type": "聽懂意思",
      "audio": "Please bring your insurance card, a photo ID, and a list of your medications.",
      "prompt": "要帶什麼？",
      "options": [
        "保險卡、證件、藥物清單",
        "病歷和 X 光片",
        "只要帶錢"
      ],
      "answer": 0,
      "note": "list of medications 是藥物清單。"
    },
    {
      "type": "選擇回應",
      "audio": "Do you have any allergies?",
      "prompt": "你對盤尼西林過敏，最適合怎麼回答？",
      "options": [
        "Yes, I'm allergic to penicillin.",
        "No, I have a cough.",
        "I take vitamins."
      ],
      "answer": 0,
      "note": "allergic to 是對…過敏。",
      "speaker": "N"
    },
    {
      "type": "聽數字",
      "audio": "Your temperature is a little high, ninety-nine point five.",
      "prompt": "體溫是多少（華氏）？",
      "options": [
        "99.5 度",
        "59.9 度",
        "95.9 度"
      ],
      "answer": 0,
      "note": "ninety-nine point five 是 99.5。",
      "speaker": "N"
    },
    {
      "type": "聽懂意思",
      "audio": "The test is negative, so it's probably a virus. You don't need antibiotics.",
      "prompt": "醫生說了什麼？",
      "options": [
        "檢測陰性，可能是病毒，不需要抗生素",
        "檢測陽性，要吃抗生素",
        "要馬上住院"
      ],
      "answer": 0,
      "note": "negative 是陰性，antibiotics 是抗生素。",
      "speaker": "D"
    },
    {
      "type": "聽懂意思",
      "audio": "If you're not better in five days, or if you have trouble breathing, call us right away.",
      "prompt": "什麼情況要馬上打電話？",
      "options": [
        "五天沒好轉，或呼吸困難",
        "覺得有點累",
        "不需要回診"
      ],
      "answer": 0,
      "note": "trouble breathing 是呼吸困難。",
      "speaker": "D"
    },
    {
      "type": "對話理解",
      "audio": "Hi, I'd like to make an appointment. I've had a sore throat for three days. I'm a new patient, and I have the student health plan.",
      "prompt": "這位病人想要什麼？",
      "options": [
        "預約看喉嚨痛",
        "取消預約",
        "詢問藥價"
      ],
      "answer": 0,
      "note": "sore throat 是喉嚨痛。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "Could you check if my insurance covers this visit, and how much will I owe after insurance?",
      "prompt": "病人在問什麼？",
      "options": [
        "保險有沒有給付，自己要付多少",
        "要不要住院",
        "藥有沒有副作用"
      ],
      "answer": 0,
      "note": "owe 是欠、要付。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Good morning, Riverside Family Clinic. How can I help you?",
      "promptZh": "早安，Riverside 家庭診所，有什麼可以幫你的？",
      "hint": "說你想預約，因為喉嚨痛",
      "expect": "appointment|doctor|sore throat|see|make",
      "model": "Hi, I'd like to make an appointment to see a doctor. I have a sore throat.",
      "modelZh": "嗨，我想預約看醫生，我喉嚨痛。"
    },
    {
      "prompt": "Are you a new patient? Do you have health insurance?",
      "promptZh": "你是新病人嗎？你有健康保險嗎？",
      "hint": "說是新病人，並說你有學生保險",
      "expect": "new|yes|insurance|student|plan",
      "model": "Yes, I'm a new patient, and I have the student health plan.",
      "modelZh": "是的，我是新病人，我有學生健康保險。"
    },
    {
      "prompt": "Would tomorrow at ten thirty work for you?",
      "promptZh": "明天十點半你可以嗎？",
      "hint": "說可以並問要帶什麼",
      "expect": "works|fine|okay|ok|sure|yes|bring|need",
      "model": "That works. Do I need to bring anything?",
      "modelZh": "可以，我需要帶什麼嗎？"
    },
    {
      "prompt": "Welcome. Do you have an appointment?",
      "promptZh": "歡迎，你有預約嗎？",
      "hint": "說你預約了十點半，並說名字",
      "expect": "appointment|ten thirty|name|my name",
      "model": "Yes, I have an appointment at ten thirty. My name is Amy Chen.",
      "modelZh": "有，我預約了十點半，我叫 Amy Chen。"
    },
    {
      "prompt": "Do you have any allergies? Are you taking any medications?",
      "promptZh": "你有任何過敏嗎？你有服用藥物嗎？",
      "hint": "說你對盤尼西林過敏，沒有吃藥",
      "expect": "allerg|penicillin|no|none|vitamin|medication",
      "model": "I'm allergic to penicillin, and I'm not taking any medication.",
      "modelZh": "我對盤尼西林過敏，我沒有服用任何藥物。"
    },
    {
      "prompt": "What brings you in today?",
      "promptZh": "你今天為什麼來看診？",
      "hint": "說喉嚨痛、咳嗽、覺得累",
      "expect": "sore|throat|cough|fever|tired|hurt|pain",
      "model": "I have a sore throat and a cough, and I feel tired.",
      "modelZh": "我喉嚨痛和咳嗽，而且覺得很累。"
    },
    {
      "prompt": "The test is negative, so it's probably a virus. Rest and drink plenty of fluids.",
      "promptZh": "檢測是陰性，可能是病毒，請多休息、多喝水。",
      "hint": "問什麼時候要回診，或能不能開假單",
      "expect": "when|back|follow|note|school|better|come",
      "model": "Thank you. When should I come back? And could I get a note for school?",
      "modelZh": "謝謝。我什麼時候要回診？也可以開一張給學校的假單嗎？"
    },
    {
      "prompt": "Your visit is covered, so there's nothing more to pay today.",
      "promptZh": "你這次看診有給付，所以今天不用再付費。",
      "hint": "道謝，問能不能用病患入口網站",
      "expect": "thank|portal|results|online|great",
      "model": "Great, thank you. Can I use the patient portal to see my results?",
      "modelZh": "太好了，謝謝。我可以用病患入口網站看結果嗎？"
    }
  ],
  "culture": [
    {
      "t": "看醫生一定要先預約",
      "d": "美國看一般醫生（primary care）幾乎都要先預約，而且常常要等好幾天甚至幾週。有點急又不是緊急狀況，可以去不用預約的 walk-in 診所或 urgent care。學校的學生健康中心（Student Health Center）通常最方便、也最便宜。"
    },
    {
      "t": "保險、自付額、免賠額",
      "d": "看診時你可能要付自付額（copay，每次固定的錢），還有免賠額（deductible，保險開始給付前要先自付的總額）。看診前先問「是不是特約診所（in-network）」，非特約診所費用可能高很多。"
    },
    {
      "t": "初診要提早到、填表",
      "d": "第一次看診要提早 10–15 分鐘，填寫病史、過敏、服用藥物等表格，並出示保險卡和附照片的證件。很多診所也可以在線上先填。"
    },
    {
      "t": "護理師先問診，醫生再看",
      "d": "通常護理師會先量體重、血壓、體溫，並問你的症狀、過敏與用藥，醫生再進來看診。準備好症狀從什麼時候開始、哪裡不舒服、有沒有發燒，可以讓看診更快。"
    },
    {
      "t": "帳單與病患入口網站",
      "d": "看診後幾週，你會收到保險公司寄來的給付說明（EOB，不是帳單），之後診所可能再寄帳單，要核對。多數診所有病患入口網站（patient portal），可以看檢查結果、預約和傳訊息給醫生。"
    }
  ]
};
