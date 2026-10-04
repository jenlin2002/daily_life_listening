// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "pharmacy",
  "title": "藥局領處方藥",
  "en": "At the Pharmacy",
  "emoji": "💊",
  "goal": "學會領處方藥時說明姓名與保險、聽懂藥的用法與副作用、詢問成藥與過敏問題，並在需要時請藥師再解釋一次",
  "videos": [
    {
      "id": "_NXqTqZLl90",
      "title": "Picking Up Prescriptions - Lesson 46 - English in Vancouver（LINC Videos - English in Vancouver）"
    },
    {
      "id": "ChDdPCLPD48",
      "title": "Learn English Through Dialogue: What Do You Say at the Pharmacy?（American Accent - Learn and Practice）"
    },
    {
      "id": "4GUuV2fCLno",
      "title": "Real Life Pharmacy conversation | Easy English Speaking Practice for Beginners（SpeakEasy Learn English Faster）"
    }
  ],
  "speakers": {
    "S": {
      "name": "Pharmacist",
      "zh": "藥師",
      "avatar": "👩‍⚕️",
      "voice": "f"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♂️",
      "voice": "m3"
    },
    "T": {
      "name": "Technician",
      "zh": "藥局人員",
      "avatar": "👩‍⚕️",
      "voice": "f5"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "領處方藥：姓名、生日與保險",
      "where": "藥局的處方藥櫃檯",
      "emoji": "📋",
      "lines": [
        {
          "s": "T",
          "en": "Hi, how can I help you?",
          "zh": "嗨，需要什麼協助嗎？"
        },
        {
          "s": "Y",
          "en": "Hi. I'm here to pick up a prescription.",
          "zh": "嗨，我來領處方藥。"
        },
        {
          "s": "T",
          "en": "Sure. Can I have your last name and date of birth?",
          "zh": "好的。可以給我你的姓氏和生日嗎？"
        },
        {
          "s": "Y",
          "en": "It's Chen, and my birthday is March fifth, two thousand five.",
          "zh": "姓陳，生日是二○○五年三月五日。"
        },
        {
          "s": "T",
          "en": "Okay, I found it. Do you have insurance?",
          "zh": "好，找到了。你有保險嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, I'm on my school's student health plan. Here's my card.",
          "zh": "有，我用的是學校的學生健康保險，這是我的卡。"
        },
        {
          "s": "T",
          "en": "Thanks. Your copay is fifteen dollars. Would you like to pay by cash or card?",
          "zh": "謝謝。你的自付額是十五塊。你要付現還是刷卡？"
        },
        {
          "s": "Y",
          "en": "Card, please.",
          "zh": "刷卡，謝謝。"
        },
        {
          "s": "T",
          "en": "All set. The pharmacist will talk to you about your medication in a moment.",
          "zh": "好了。藥師等一下會跟你說明你的藥。"
        }
      ]
    },
    {
      "title": "藥師說明用法與副作用",
      "where": "藥局櫃檯，藥師與你面對面",
      "emoji": "💬",
      "lines": [
        {
          "s": "S",
          "en": "Hi, this is an antibiotic for your throat infection. Do you have any allergies to medications?",
          "zh": "嗨，這是治療你喉嚨感染的抗生素。你對藥物有過敏嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, I'm allergic to penicillin.",
          "zh": "有，我對盤尼西林過敏。"
        },
        {
          "s": "S",
          "en": "Thanks for telling me. This one is not penicillin, so it should be safe. Take one pill twice a day, with food.",
          "zh": "謝謝你告訴我。這個不是盤尼西林，所以應該是安全的。一天吃兩次，一次一顆，要配食物。"
        },
        {
          "s": "Y",
          "en": "For how many days should I take it?",
          "zh": "要吃幾天？"
        },
        {
          "s": "S",
          "en": "For seven days. Please finish all of it, even if you feel better.",
          "zh": "吃七天。就算覺得好了，也請把藥全部吃完。"
        },
        {
          "s": "Y",
          "en": "Okay. Are there any side effects?",
          "zh": "好。有什麼副作用嗎？"
        },
        {
          "s": "S",
          "en": "Some people feel a little sick to their stomach. Avoid alcohol while taking it.",
          "zh": "有些人會有點想吐。服藥期間請避免喝酒。"
        },
        {
          "s": "Y",
          "en": "Can I take it with my allergy medicine?",
          "zh": "我可以和我的過敏藥一起吃嗎？"
        },
        {
          "s": "S",
          "en": "Yes, that's fine. If you get a rash or trouble breathing, call us or go to the ER right away.",
          "zh": "可以，沒問題。如果出現皮疹或呼吸困難，請馬上聯絡我們或去急診。"
        },
        {
          "s": "Y",
          "en": "Got it. Thank you so much.",
          "zh": "了解，非常謝謝你。"
        }
      ]
    },
    {
      "title": "買成藥：問藥師建議",
      "where": "藥局的成藥區",
      "emoji": "🤧",
      "lines": [
        {
          "s": "Y",
          "en": "Excuse me, could you help me find something for a cold? I have a stuffy nose and a sore throat.",
          "zh": "不好意思，可以幫我找治感冒的藥嗎？我鼻塞又喉嚨痛。"
        },
        {
          "s": "S",
          "en": "Sure. Do you have a fever or a cough?",
          "zh": "好的。你有發燒或咳嗽嗎？"
        },
        {
          "s": "Y",
          "en": "No fever, but I have a little cough.",
          "zh": "沒有發燒，但有一點咳嗽。"
        },
        {
          "s": "S",
          "en": "This one is good for a stuffy nose and a sore throat. And this syrup helps with a cough.",
          "zh": "這個對鼻塞和喉嚨痛有效，這罐糖漿可以止咳。"
        },
        {
          "s": "Y",
          "en": "Do they make me sleepy?",
          "zh": "它們會讓我想睡嗎？"
        },
        {
          "s": "S",
          "en": "The syrup might make you drowsy, so don't drive after taking it.",
          "zh": "糖漿可能會讓你昏昏欲睡，吃了不要開車。"
        },
        {
          "s": "Y",
          "en": "Got it. How often can I take the pills?",
          "zh": "了解。藥丸多久可以吃一次？"
        },
        {
          "s": "S",
          "en": "Every six hours, and no more than four a day.",
          "zh": "每六小時一次，一天不要超過四顆。"
        },
        {
          "s": "Y",
          "en": "Thanks. I'll take both. Where can I pay?",
          "zh": "謝謝，我兩個都買。要在哪裡付款？"
        },
        {
          "s": "S",
          "en": "You can pay at the front register. Feel better soon!",
          "zh": "可以在前面的收銀台付款。祝你早日康復！"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "I'm here to pick up a prescription.",
      "zh": "我來領處方藥。"
    },
    {
      "en": "It's under the name Chen.",
      "zh": "是用陳的名字登記的。"
    },
    {
      "en": "My date of birth is March fifth.",
      "zh": "我的生日是三月五日。"
    },
    {
      "en": "I'm on my school's health plan.",
      "zh": "我用的是學校的健康保險。"
    },
    {
      "en": "How much is my copay?",
      "zh": "我的自付額是多少？"
    },
    {
      "en": "How long will it take to fill?",
      "zh": "備藥要多久？"
    },
    {
      "en": "I'm allergic to penicillin.",
      "zh": "我對盤尼西林過敏。"
    },
    {
      "en": "How often should I take it?",
      "zh": "多久要吃一次？"
    },
    {
      "en": "Should I take it with food?",
      "zh": "要配食物吃嗎？"
    },
    {
      "en": "For how many days should I take it?",
      "zh": "要吃幾天？"
    },
    {
      "en": "What are the side effects?",
      "zh": "有什麼副作用？"
    },
    {
      "en": "Will it make me sleepy?",
      "zh": "會讓我想睡嗎？"
    },
    {
      "en": "Can I take it with other medicine?",
      "zh": "可以和其他藥一起吃嗎？"
    },
    {
      "en": "Can I drink alcohol with this?",
      "zh": "吃這個藥可以喝酒嗎？"
    },
    {
      "en": "What should I do if I miss a dose?",
      "zh": "如果漏吃一次怎麼辦？"
    },
    {
      "en": "Do you have something for a cold?",
      "zh": "你們有治感冒的藥嗎？"
    },
    {
      "en": "Is there a generic version?",
      "zh": "有學名藥（較便宜的版本）嗎？"
    },
    {
      "en": "Could you explain that again, please?",
      "zh": "可以請你再解釋一次嗎？"
    },
    {
      "en": "Can I get a printed instruction sheet?",
      "zh": "可以給我一份紙本說明嗎？"
    },
    {
      "en": "Do I need a prescription for this?",
      "zh": "買這個需要處方箋嗎？"
    }
  ],
  "hear": [
    {
      "en": "Can I have your last name and date of birth?",
      "zh": "可以給我你的姓氏和生日嗎？",
      "reply": "It's Chen, March fifth, two thousand five.",
      "replyZh": "姓陳，二○○五年三月五日。"
    },
    {
      "en": "Do you have insurance?",
      "zh": "你有保險嗎？",
      "reply": "Yes, here's my card.",
      "replyZh": "有，這是我的卡。"
    },
    {
      "en": "Your copay is fifteen dollars.",
      "zh": "你的自付額是十五塊。",
      "reply": "Okay. I'll pay by card.",
      "replyZh": "好，我刷卡。"
    },
    {
      "en": "Do you have any allergies to medications?",
      "zh": "你對藥物有過敏嗎？",
      "reply": "Yes, I'm allergic to penicillin.",
      "replyZh": "有，我對盤尼西林過敏。"
    },
    {
      "en": "Take one pill twice a day, with food.",
      "zh": "一天兩次，一次一顆，配食物。",
      "reply": "Got it. For how many days?",
      "replyZh": "了解，要吃幾天？"
    },
    {
      "en": "Please finish all of it, even if you feel better.",
      "zh": "就算覺得好了，也請全部吃完。",
      "reply": "Okay, I will.",
      "replyZh": "好，我會的。"
    },
    {
      "en": "You might feel a little drowsy, so don't drive.",
      "zh": "你可能會有點昏昏欲睡，所以不要開車。",
      "reply": "Okay, thanks for letting me know.",
      "replyZh": "好，謝謝你告訴我。"
    },
    {
      "en": "Do you have any questions for me?",
      "zh": "你有什麼問題要問我嗎？",
      "reply": "Yes, are there any side effects?",
      "replyZh": "有，會有什麼副作用嗎？"
    },
    {
      "en": "Would you like the generic version? It's cheaper.",
      "zh": "你要學名藥嗎？比較便宜。",
      "reply": "Yes, please.",
      "replyZh": "好，麻煩你。"
    },
    {
      "en": "It'll be ready in about twenty minutes.",
      "zh": "大約二十分鐘後會準備好。",
      "reply": "Okay, I'll wait.",
      "replyZh": "好，我等。"
    }
  ],
  "say": [
    {
      "en": "Hi, I'm here to pick up a prescription.",
      "zh": "嗨，我來領處方藥。"
    },
    {
      "en": "It's under Melissa Chen.",
      "zh": "是用 Melissa Chen 登記的。"
    },
    {
      "en": "Does my insurance cover this?",
      "zh": "我的保險有包含這個藥嗎？"
    },
    {
      "en": "I'm allergic to sulfa drugs.",
      "zh": "我對磺胺類藥物過敏。"
    },
    {
      "en": "Should I take it before or after meals?",
      "zh": "要飯前還是飯後吃？"
    },
    {
      "en": "What if I forget to take it?",
      "zh": "如果我忘記吃怎麼辦？"
    },
    {
      "en": "Can I take this with ibuprofen?",
      "zh": "我可以和布洛芬一起吃嗎？"
    },
    {
      "en": "Could you write that down for me?",
      "zh": "可以幫我寫下來嗎？"
    },
    {
      "en": "How much does it cost without insurance?",
      "zh": "沒有保險的話要多少錢？"
    },
    {
      "en": "Sorry, could you say that again?",
      "zh": "不好意思，可以再說一次嗎？"
    }
  ],
  "vocab": [
    {
      "w": "prescription",
      "pos": "n.",
      "zh": "處方箋、處方藥",
      "ex": "I need to pick up my prescription.",
      "exzh": "我需要去領我的處方藥。"
    },
    {
      "w": "pharmacist",
      "pos": "n.",
      "zh": "藥師",
      "ex": "Ask the pharmacist if you have questions.",
      "exzh": "有問題請問藥師。"
    },
    {
      "w": "copay",
      "pos": "n.",
      "zh": "自付額",
      "ex": "My copay is ten dollars.",
      "exzh": "我的自付額是十塊錢。"
    },
    {
      "w": "insurance",
      "pos": "n.",
      "zh": "保險",
      "ex": "Do you take my insurance?",
      "exzh": "你們接受我的保險嗎？"
    },
    {
      "w": "side effect",
      "pos": "n.",
      "zh": "副作用",
      "ex": "This medicine has few side effects.",
      "exzh": "這個藥很少有副作用。"
    },
    {
      "w": "dose",
      "pos": "n.",
      "zh": "劑量、一次的藥量",
      "ex": "Take one dose every six hours.",
      "exzh": "每六小時吃一次。"
    },
    {
      "w": "antibiotic",
      "pos": "n.",
      "zh": "抗生素",
      "ex": "The doctor gave me an antibiotic.",
      "exzh": "醫生開了抗生素給我。"
    },
    {
      "w": "over-the-counter",
      "pos": "adj.",
      "zh": "成藥（不需處方箋）",
      "ex": "This is an over-the-counter medicine.",
      "exzh": "這是成藥。"
    },
    {
      "w": "drowsy",
      "pos": "adj.",
      "zh": "昏昏欲睡的",
      "ex": "This medicine can make you drowsy.",
      "exzh": "這個藥可能讓你昏昏欲睡。"
    },
    {
      "w": "refill",
      "pos": "n./v.",
      "zh": "再領藥、續配",
      "ex": "Can I get a refill on this?",
      "exzh": "這個我可以續配嗎？"
    },
    {
      "w": "generic",
      "pos": "adj.",
      "zh": "學名藥（非品牌）",
      "ex": "Is there a cheaper generic version?",
      "exzh": "有比較便宜的學名藥嗎？"
    },
    {
      "w": "rash",
      "pos": "n.",
      "zh": "皮疹",
      "ex": "I got a rash after taking the pill.",
      "exzh": "我吃了藥之後起了皮疹。"
    }
  ],
  "situations": [
    {
      "title": "😵 藥師講太快，聽不懂",
      "hear": {
        "en": "Take one tablet by mouth twice daily with food for ten days and avoid alcohol.",
        "zh": "（講得很快）口服，一天兩次，一次一顆，配食物，吃十天，避免喝酒。",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you say that a little slower?",
          "zh": "不好意思，可以說慢一點嗎？"
        },
        {
          "en": "So I take one pill twice a day with food, for ten days. Is that right?",
          "zh": "所以是一天兩次、一次一顆、配食物、吃十天，對嗎？"
        }
      ],
      "tip": "藥的用法一定要確認清楚，用自己的話複述一次（So… Is that right?）最安全，也可以請藥師寫下來。"
    },
    {
      "title": "⏳ 藥還沒備好、要等很久",
      "hear": {
        "en": "It'll be ready in about thirty minutes.",
        "zh": "大約三十分鐘後會準備好。"
      },
      "say": [
        {
          "en": "Okay. Could you text me when it's ready?",
          "zh": "好的，備好之後可以傳簡訊給我嗎？"
        },
        {
          "en": "Can I wait here, or should I come back later?",
          "zh": "我可以在這裡等，還是晚點再來？"
        }
      ],
      "tip": "很多藥局會用簡訊通知取藥，可以先把手機號碼留給他們，趁等待的時間去逛逛。"
    },
    {
      "title": "💰 保險不給付或價格太高",
      "hear": {
        "en": "I'm sorry, your insurance doesn't cover this medication.",
        "zh": "抱歉，你的保險不給付這個藥。"
      },
      "say": [
        {
          "en": "How much is it without insurance?",
          "zh": "沒有保險的話要多少錢？"
        },
        {
          "en": "Is there a cheaper generic version?",
          "zh": "有比較便宜的學名藥嗎？"
        }
      ],
      "tip": "可以問藥師有沒有學名藥（generic），價格常常差很多。也可以問醫生能不能換一種保險有給付的藥。"
    },
    {
      "title": "🤢 吃了藥覺得不舒服",
      "say": [
        {
          "en": "I started taking this medicine yesterday, and I feel dizzy.",
          "zh": "我昨天開始吃這個藥，覺得頭暈。"
        },
        {
          "en": "Is this a normal side effect, or should I stop taking it?",
          "zh": "這是正常的副作用，還是我應該停藥？"
        }
      ],
      "tip": "輕微副作用可以打電話或到藥局問藥師；如果有皮疹、臉腫、呼吸困難，立刻停藥並打 911 或去急診。"
    },
    {
      "title": "🧒 幫朋友或家人領藥",
      "say": [
        {
          "en": "I'm picking up a prescription for my roommate. Her name is Amy Lin.",
          "zh": "我幫室友領處方藥，她的名字是 Amy Lin。"
        },
        {
          "en": "Do I need her ID, or is her date of birth enough?",
          "zh": "需要她的證件嗎？還是報她的生日就夠了？"
        }
      ],
      "tip": "為保護隱私，藥局可能要求你出示對方的資料或證件。事先問清楚，避免白跑一趟。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "Can I have your last name and date of birth?",
      "prompt": "藥局人員在問什麼？",
      "options": [
        "你的姓氏和生日",
        "你的地址和電話",
        "你的保險和工作"
      ],
      "answer": 0,
      "note": "date of birth 是出生日期。領藥前一定會核對姓名和生日。"
    },
    {
      "type": "選擇回應",
      "audio": "Do you have any allergies to medications?",
      "prompt": "你對盤尼西林過敏，最適合怎麼回答？",
      "options": [
        "Yes, I'm allergic to penicillin.",
        "No, I'm a student.",
        "I take it twice a day."
      ],
      "answer": 0,
      "note": "allergic to… 是對……過敏。"
    },
    {
      "type": "聽數字",
      "audio": "Your copay is fifteen dollars.",
      "prompt": "你要付多少錢？",
      "options": [
        "$15",
        "$50",
        "$5"
      ],
      "answer": 0,
      "note": "fifteen 是 15，fifty 是 50，注意重音在字尾還是字首。"
    },
    {
      "type": "聽懂意思",
      "audio": "Take one pill twice a day, with food.",
      "prompt": "藥要怎麼吃？",
      "options": [
        "一天兩次，一次一顆，配食物",
        "一天一次，空腹吃",
        "睡前吃兩顆"
      ],
      "answer": 0,
      "note": "twice a day 是一天兩次，with food 是配食物。"
    },
    {
      "type": "聽懂意思",
      "audio": "Please finish all of it, even if you feel better.",
      "prompt": "藥師提醒你什麼？",
      "options": [
        "就算好了也要把藥吃完",
        "好了就可以停藥",
        "藥要放冰箱"
      ],
      "answer": 0,
      "note": "finish all of it 是全部吃完，抗生素尤其不能自己停。"
    },
    {
      "type": "聽懂意思",
      "audio": "This might make you drowsy, so don't drive after taking it.",
      "prompt": "吃了藥之後要注意什麼？",
      "options": [
        "不要開車",
        "不要吃飯",
        "不要睡覺"
      ],
      "answer": 0,
      "note": "drowsy 是昏昏欲睡，所以不能開車或操作機器。"
    },
    {
      "type": "選擇回應",
      "audio": "Do you have any questions for me?",
      "prompt": "你想問副作用，最適合怎麼回答？",
      "options": [
        "Yes, are there any side effects?",
        "No, I don't have a pen.",
        "I feel better now."
      ],
      "answer": 0,
      "note": "side effects 是副作用。"
    },
    {
      "type": "聽數字",
      "audio": "Take one every six hours, and no more than four a day.",
      "prompt": "一天最多可以吃幾顆？",
      "options": [
        "4 顆",
        "6 顆",
        "2 顆"
      ],
      "answer": 0,
      "note": "no more than four 是不超過四顆。"
    },
    {
      "type": "對話理解",
      "audio": "Hi, I'm here to pick up a prescription. It's under Chen. I'm allergic to penicillin, so could you double-check?",
      "prompt": "客人要做什麼？",
      "options": [
        "領處方藥，並請對方再確認過敏問題",
        "買成藥",
        "預約看診"
      ],
      "answer": 0,
      "note": "double-check 是再確認一次。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "I have a stuffy nose and a sore throat. Could you recommend something? And will it make me sleepy?",
      "prompt": "客人想知道什麼？",
      "options": [
        "推薦鼻塞喉嚨痛的藥，會不會想睡",
        "藥局幾點開門",
        "怎麼退藥"
      ],
      "answer": 0,
      "note": "stuffy nose 是鼻塞，sore throat 是喉嚨痛。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Hi, how can I help you?",
      "promptZh": "嗨，需要什麼協助嗎？",
      "hint": "說你來領處方藥",
      "expect": "prescription|pick up|medicine|medication|cold|for",
      "model": "Hi, I'm here to pick up a prescription.",
      "modelZh": "嗨，我來領處方藥。"
    },
    {
      "prompt": "Can I have your last name and date of birth?",
      "promptZh": "可以給我你的姓氏和生日嗎？",
      "hint": "說姓氏和生日",
      "expect": "my name|it'?s|chen|born|birthday|march|january|february|april|may|june|july|august|september|october|november|december|\\d",
      "model": "It's Chen, March fifth, two thousand five.",
      "modelZh": "姓陳，二○○五年三月五日。"
    },
    {
      "prompt": "Do you have insurance?",
      "promptZh": "你有保險嗎？",
      "hint": "說有（學校保險）或沒有",
      "expect": "yes|yeah|no|insurance|plan|card|school|student",
      "model": "Yes, I'm on my school's student health plan.",
      "modelZh": "有，我用學校的學生健康保險。"
    },
    {
      "prompt": "Do you have any allergies to medications?",
      "promptZh": "你對藥物有過敏嗎？",
      "hint": "說對什麼藥過敏，或說沒有",
      "expect": "allerg|no|none|nothing|nope|penicillin|sulfa",
      "model": "Yes, I'm allergic to penicillin.",
      "modelZh": "有，我對盤尼西林過敏。"
    },
    {
      "prompt": "Take one pill twice a day, with food, for seven days.",
      "promptZh": "一天兩次，一次一顆，配食物，吃七天。",
      "hint": "複述確認，或問問題",
      "expect": "twice|seven|food|pill|got it|okay|ok|so|thanks|side effect",
      "model": "Got it. Are there any side effects?",
      "modelZh": "了解。有什麼副作用嗎？"
    },
    {
      "prompt": "You might feel drowsy, so don't drive after taking it.",
      "promptZh": "你可能會昏昏欲睡，吃了不要開車。",
      "hint": "回應並道謝",
      "expect": "okay|ok|got it|thank|thanks|understand|will|sure",
      "model": "Okay, thanks for letting me know.",
      "modelZh": "好，謝謝你告訴我。"
    },
    {
      "prompt": "Your copay is fifteen dollars. Cash or card?",
      "promptZh": "自付額十五塊，付現還是刷卡？",
      "hint": "說 cash 或 card",
      "expect": "\\b(cash|card|credit|debit|tap|apple pay)\\b",
      "model": "Card, please.",
      "modelZh": "刷卡，謝謝。"
    },
    {
      "prompt": "Do you have any other questions for me?",
      "promptZh": "你還有其他問題要問我嗎？",
      "hint": "說沒有並道謝",
      "expect": "no|that'?s (all|it|everything)|thank|thanks|nothing|i'?m good",
      "model": "No, that's all. Thank you so much!",
      "modelZh": "沒有了，非常謝謝你！"
    }
  ],
  "culture": [
    {
      "t": "處方藥一定要有處方箋",
      "d": "抗生素、過敏藥等處方藥（prescription drug）必須有醫生開的處方箋才能買。醫生通常會直接把處方傳給你指定的藥局，你只要報姓名和生日去領。"
    },
    {
      "t": "成藥可以直接買",
      "d": "感冒藥、止痛藥等成藥（over-the-counter，簡稱 OTC）不需要處方箋，在藥局和超市就能買。不確定怎麼選，可以直接問藥師，免費而且很樂意解釋。"
    },
    {
      "t": "自付額 copay 與保險",
      "d": "有保險時，通常只要付一小部分的自付額（copay），沒有保險則要付全額，價格常常差很多。留學生的學生保險通常含處方藥，領藥時記得帶保險卡。"
    },
    {
      "t": "一定要說出自己的過敏",
      "d": "領藥時藥師一定會問 Do you have any allergies? 對藥物、食物的過敏要明確說出，例如 I'm allergic to penicillin. 這是為了你的安全。"
    },
    {
      "t": "學名藥比較便宜",
      "d": "學名藥（generic）與品牌藥成分和效果相同，價格常常便宜很多。可以問 Is there a generic version? 另外，美國的藥通常是整瓶給，記得依標籤吃法吃完。"
    }
  ]
};
