// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "dmv",
  "title": "DMV 考駕照",
  "en": "At the DMV",
  "emoji": "🚗",
  "goal": "學會到 DMV 申請學習駕照、準備文件、通過視力與筆試，並在路考時聽懂考官的口令，最後處理通過或沒通過後的流程",
  "videos": [
    {
      "id": "MhXQGKJdM2o",
      "title": "English Conversation | How to get a driver's license in the United States.（MASTER EVERYDAY ENGLISH）"
    },
    {
      "id": "BvMO4qDlycc",
      "title": "DMV dialogue（Danny Rauda）"
    },
    {
      "id": "ttd2Kyfy3zo",
      "title": "Everyday English Ep. 03 - Going To The DMV（Everyday English）"
    }
  ],
  "speakers": {
    "S": {
      "name": "DMV Clerk",
      "zh": "DMV 櫃台人員",
      "avatar": "👩‍💼",
      "voice": "f"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♂️",
      "voice": "m3"
    },
    "E": {
      "name": "Driving Examiner",
      "zh": "路考考官",
      "avatar": "👨",
      "voice": "m2"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "申請學習駕照與繳交文件",
      "where": "DMV 櫃台，剛抽完號碼牌",
      "emoji": "📄",
      "lines": [
        {
          "s": "S",
          "en": "Next, please. How can I help you today?",
          "zh": "下一位，請。今天有什麼可以幫你的？"
        },
        {
          "s": "Y",
          "en": "Hi, I'd like to apply for a learner's permit. I'm an international student.",
          "zh": "嗨，我想申請學習駕照。我是國際學生。"
        },
        {
          "s": "S",
          "en": "Okay. Do you have all your documents? I need your passport, your visa documents, proof of address, and a Social Security number if you have one.",
          "zh": "好的。你的文件都帶齊了嗎？我需要你的護照、簽證文件、地址證明，如果有社會安全碼也要。"
        },
        {
          "s": "Y",
          "en": "Here's my passport and my I-20. I don't have a Social Security number. Is that okay?",
          "zh": "這是我的護照和 I-20。我沒有社會安全碼，這樣可以嗎？"
        },
        {
          "s": "S",
          "en": "In that case, you'll need a letter from the Social Security office saying you're not eligible. Do you have that?",
          "zh": "那樣的話，你需要社會安全局開的不符合資格證明信。你有嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, I have it here. And here's my lease as proof of address.",
          "zh": "有，在這裡。這是我的租約，當作地址證明。"
        },
        {
          "s": "S",
          "en": "Perfect. Please fill out this application form and sign at the bottom.",
          "zh": "太好了。請填寫這張申請表，並在最下面簽名。"
        },
        {
          "s": "Y",
          "en": "Okay. Is there a fee?",
          "zh": "好的。要付費嗎？"
        },
        {
          "s": "S",
          "en": "Yes, the application fee is thirty-five dollars. You can pay by card or cash.",
          "zh": "要，申請費是三十五塊，可以刷卡或付現。"
        },
        {
          "s": "Y",
          "en": "I'll pay by card. What's next?",
          "zh": "我刷卡。接下來要做什麼？"
        },
        {
          "s": "S",
          "en": "Next, we'll take your photo and give you a vision test, and then you'll take the written test.",
          "zh": "接下來我們會幫你拍照、做視力檢查，然後你要考筆試。"
        }
      ]
    },
    {
      "title": "視力檢查與筆試",
      "where": "視力檢查窗口與考試區",
      "emoji": "👓",
      "lines": [
        {
          "s": "S",
          "en": "Please look into the machine and read the bottom line out loud.",
          "zh": "請看進機器，並大聲唸出最下面那一行。"
        },
        {
          "s": "Y",
          "en": "E, F, P, T, O, Z.",
          "zh": "E、F、P、T、O、Z。"
        },
        {
          "s": "S",
          "en": "Great, you passed the vision test. Do you wear glasses?",
          "zh": "很好，你通過視力檢查了。你有戴眼鏡嗎？"
        },
        {
          "s": "Y",
          "en": "Only for reading. I don't need them for driving.",
          "zh": "只有看書時戴，開車不需要。"
        },
        {
          "s": "S",
          "en": "Okay. The written test has forty questions, and you need at least eighty percent to pass.",
          "zh": "好的。筆試有四十題，你至少要答對百分之八十才算通過。"
        },
        {
          "s": "Y",
          "en": "Can I take the test in Chinese?",
          "zh": "我可以用中文考嗎？"
        },
        {
          "s": "S",
          "en": "Yes, the test is available in several languages. Which would you like?",
          "zh": "可以，這份考試有好幾種語言可選。你想用哪一種？"
        },
        {
          "s": "Y",
          "en": "Traditional Chinese, please. How much time do I have?",
          "zh": "請給我繁體中文。我有多少時間？"
        },
        {
          "s": "S",
          "en": "There's no strict time limit, but most people finish in about thirty minutes. Please sit at computer number five.",
          "zh": "沒有嚴格的時間限制，但大多數人大約三十分鐘完成。請坐在五號電腦。"
        },
        {
          "s": "S",
          "en": "Congratulations! You got thirty-six right, so you passed. Here's your learner's permit.",
          "zh": "恭喜！你答對三十六題，所以通過了。這是你的學習駕照。"
        },
        {
          "s": "Y",
          "en": "Thank you. When can I take the road test?",
          "zh": "謝謝。我什麼時候可以考路考？"
        }
      ]
    },
    {
      "title": "路考",
      "where": "考試車旁，考官在車上",
      "emoji": "🛣️",
      "lines": [
        {
          "s": "E",
          "en": "Good morning. May I see your learner's permit and proof of insurance, please?",
          "zh": "早安。可以看一下你的學習駕照和保險證明嗎？"
        },
        {
          "s": "Y",
          "en": "Sure. Here you go.",
          "zh": "好的，給你。"
        },
        {
          "s": "E",
          "en": "Thanks. Before we start, let me check the car. Please turn on your turn signals and brake lights.",
          "zh": "謝謝。開始前我要檢查車子。請打開方向燈和煞車燈。"
        },
        {
          "s": "Y",
          "en": "Okay. Left signal, right signal, and the brake lights.",
          "zh": "好，左方向燈、右方向燈，還有煞車燈。"
        },
        {
          "s": "E",
          "en": "Everything works. Please fasten your seat belt, and we'll begin. Pull out and turn right at the next intersection.",
          "zh": "都正常。請繫好安全帶，我們開始。駛出去，在下一個路口右轉。"
        },
        {
          "s": "Y",
          "en": "Turn right at the next intersection. Got it.",
          "zh": "下一個路口右轉，了解。"
        },
        {
          "s": "E",
          "en": "Good. Now make a left turn at the stop sign and stay in the right lane.",
          "zh": "很好。現在在停止標誌處左轉，並保持在右線道。"
        },
        {
          "s": "E",
          "en": "Now I'd like you to parallel park between those two cones.",
          "zh": "現在我要你在那兩個三角錐之間做路邊平行停車。"
        },
        {
          "s": "Y",
          "en": "Okay. I'll check my mirrors and park carefully.",
          "zh": "好的，我會看後照鏡，小心停車。"
        },
        {
          "s": "E",
          "en": "That's the end of the test. You did a good job, and you passed. Please bring this paper inside to the counter.",
          "zh": "考試結束。你做得很好，通過了。請把這張紙拿進櫃台。"
        },
        {
          "s": "Y",
          "en": "Thank you so much! I was really nervous.",
          "zh": "非常感謝！我剛剛真的很緊張。"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "I'd like to apply for a learner's permit.",
      "zh": "我想申請學習駕照。"
    },
    {
      "en": "I'm an international student.",
      "zh": "我是國際學生。"
    },
    {
      "en": "Here's my passport and my I-20.",
      "zh": "這是我的護照和 I-20。"
    },
    {
      "en": "I don't have a Social Security number.",
      "zh": "我沒有社會安全碼。"
    },
    {
      "en": "Here's my lease as proof of address.",
      "zh": "這是我的租約，當作地址證明。"
    },
    {
      "en": "What documents do I need to bring?",
      "zh": "我需要帶什麼文件？"
    },
    {
      "en": "How much is the application fee?",
      "zh": "申請費是多少？"
    },
    {
      "en": "Can I pay by card?",
      "zh": "我可以刷卡嗎？"
    },
    {
      "en": "Do I need to make an appointment?",
      "zh": "我需要預約嗎？"
    },
    {
      "en": "Where do I take the vision test?",
      "zh": "我要去哪裡做視力檢查？"
    },
    {
      "en": "Can I take the written test in Chinese?",
      "zh": "我可以用中文考筆試嗎？"
    },
    {
      "en": "How many questions do I need to get right?",
      "zh": "我要答對幾題才算通過？"
    },
    {
      "en": "What if I don't pass the test?",
      "zh": "如果我沒通過考試怎麼辦？"
    },
    {
      "en": "How long do I have to wait to try again?",
      "zh": "我要等多久才能再考？"
    },
    {
      "en": "When can I schedule my road test?",
      "zh": "我什麼時候可以預約路考？"
    },
    {
      "en": "Do I need to bring my own car for the road test?",
      "zh": "路考要自己帶車嗎？"
    },
    {
      "en": "Do I need proof of insurance?",
      "zh": "我需要保險證明嗎？"
    },
    {
      "en": "Could you repeat the instructions, please?",
      "zh": "可以請你再說一次指示嗎？"
    },
    {
      "en": "When will I get my license?",
      "zh": "我什麼時候會拿到駕照？"
    },
    {
      "en": "Is this a temporary license?",
      "zh": "這是臨時駕照嗎？"
    }
  ],
  "hear": [
    {
      "en": "How can I help you today?",
      "zh": "今天有什麼可以幫你的？",
      "reply": "I'd like to apply for a learner's permit.",
      "replyZh": "我想申請學習駕照。"
    },
    {
      "en": "Do you have all your documents?",
      "zh": "你的文件都帶齊了嗎？",
      "reply": "I think so. Here's my passport and my I-20.",
      "replyZh": "我想是，這是我的護照和 I-20。"
    },
    {
      "en": "Do you have a Social Security number?",
      "zh": "你有社會安全碼嗎？",
      "reply": "No, I'm an international student.",
      "replyZh": "沒有，我是國際學生。"
    },
    {
      "en": "Please fill out this form and sign at the bottom.",
      "zh": "請填寫這張表並在最下面簽名。",
      "reply": "Sure. Do you have a pen?",
      "replyZh": "好，你有筆嗎？"
    },
    {
      "en": "The application fee is thirty-five dollars.",
      "zh": "申請費是三十五塊。",
      "reply": "Okay. Can I pay by card?",
      "replyZh": "好，我可以刷卡嗎？"
    },
    {
      "en": "Please read the bottom line out loud.",
      "zh": "請大聲唸出最下面那一行。",
      "reply": "E, F, P, T, O, Z.",
      "replyZh": "E、F、P、T、O、Z。"
    },
    {
      "en": "You need at least eighty percent to pass.",
      "zh": "你至少要答對百分之八十才算通過。",
      "reply": "Okay. Can I take it in Chinese?",
      "replyZh": "好，我可以用中文考嗎？"
    },
    {
      "en": "May I see your learner's permit and proof of insurance?",
      "zh": "可以看一下你的學習駕照和保險證明嗎？",
      "reply": "Sure. Here you go.",
      "replyZh": "好，給你。"
    },
    {
      "en": "Turn right at the next intersection.",
      "zh": "在下一個路口右轉。",
      "reply": "Turn right at the next intersection. Okay.",
      "replyZh": "下一個路口右轉，好的。"
    },
    {
      "en": "You passed. Please bring this paper to the counter.",
      "zh": "你通過了，請把這張紙拿到櫃台。",
      "reply": "Thank you so much!",
      "replyZh": "非常感謝！"
    }
  ],
  "say": [
    {
      "en": "Hi, I'd like to get a driver's license. I'm from Taiwan.",
      "zh": "嗨，我想考駕照，我來自台灣。"
    },
    {
      "en": "Can I use my Taiwanese license to apply?",
      "zh": "我可以用台灣的駕照來申請嗎？"
    },
    {
      "en": "Which documents do I need as an international student?",
      "zh": "國際學生需要哪些文件？"
    },
    {
      "en": "Is there a driver's handbook in Chinese?",
      "zh": "有中文的駕駛手冊嗎？"
    },
    {
      "en": "Could I take a practice test first?",
      "zh": "我可以先做模擬考嗎？"
    },
    {
      "en": "Could you explain what happens after I pass?",
      "zh": "可以說明通過後會發生什麼事嗎？"
    },
    {
      "en": "I failed the written test. When can I retake it?",
      "zh": "我筆試沒通過，什麼時候可以重考？"
    },
    {
      "en": "Sorry, I didn't understand. Could you say that again more slowly?",
      "zh": "抱歉，我沒聽懂，可以說慢一點再說一次嗎？"
    },
    {
      "en": "Is it okay if I adjust my mirrors before we start?",
      "zh": "開始前我可以先調整後照鏡嗎？"
    },
    {
      "en": "When will my license arrive in the mail?",
      "zh": "我的駕照什麼時候會寄到？"
    }
  ],
  "vocab": [
    {
      "w": "learner's permit",
      "pos": "n.",
      "zh": "學習駕照",
      "ex": "I got my learner's permit today.",
      "exzh": "我今天拿到了學習駕照。"
    },
    {
      "w": "driver's license",
      "pos": "n.",
      "zh": "駕照",
      "ex": "I want to get a driver's license.",
      "exzh": "我想考駕照。"
    },
    {
      "w": "proof of address",
      "pos": "n.",
      "zh": "地址證明",
      "ex": "A lease is proof of address.",
      "exzh": "租約可以當地址證明。"
    },
    {
      "w": "Social Security number",
      "pos": "n.",
      "zh": "社會安全碼",
      "ex": "I don't have a Social Security number.",
      "exzh": "我沒有社會安全碼。"
    },
    {
      "w": "vision test",
      "pos": "n.",
      "zh": "視力檢查",
      "ex": "You must pass a vision test.",
      "exzh": "你必須通過視力檢查。"
    },
    {
      "w": "written test",
      "pos": "n.",
      "zh": "筆試",
      "ex": "The written test has forty questions.",
      "exzh": "筆試有四十題。"
    },
    {
      "w": "road test",
      "pos": "n.",
      "zh": "路考",
      "ex": "My road test is next Friday.",
      "exzh": "我的路考在下星期五。"
    },
    {
      "w": "examiner",
      "pos": "n.",
      "zh": "考官",
      "ex": "The examiner gave clear directions.",
      "exzh": "考官的指示很清楚。"
    },
    {
      "w": "parallel parking",
      "pos": "n.",
      "zh": "路邊平行停車",
      "ex": "Parallel parking is the hardest part.",
      "exzh": "平行停車是最難的部分。"
    },
    {
      "w": "intersection",
      "pos": "n.",
      "zh": "路口",
      "ex": "Turn left at the next intersection.",
      "exzh": "在下一個路口左轉。"
    },
    {
      "w": "seat belt",
      "pos": "n.",
      "zh": "安全帶",
      "ex": "Please fasten your seat belt.",
      "exzh": "請繫好安全帶。"
    },
    {
      "w": "retake",
      "pos": "v.",
      "zh": "重考",
      "ex": "You can retake the test next week.",
      "exzh": "你下星期可以重考。"
    }
  ],
  "situations": [
    {
      "title": "😵 考官口令太快、聽不清楚",
      "hear": {
        "en": "At the next light, turn left, then merge into the right lane, and stop behind the white line.",
        "zh": "（講得很快）下個紅綠燈左轉，然後併入右線道，停在白線後面。",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you repeat that, please?",
          "zh": "抱歉，可以請你再說一次嗎？"
        },
        {
          "en": "So I turn left at the next light, then move to the right lane. Is that correct?",
          "zh": "所以我在下個紅綠燈左轉，然後移到右線道，對嗎？"
        }
      ],
      "tip": "路考時聽不清楚可以請考官重複，不會扣分。比較危險的是裝懂而做錯。複述一次口令，確認自己聽對。"
    },
    {
      "title": "📝 筆試沒通過",
      "hear": {
        "en": "I'm sorry, you didn't pass this time. You can try again in a few days.",
        "zh": "很抱歉，你這次沒通過。你可以幾天後再考一次。"
      },
      "say": [
        {
          "en": "How many did I get wrong? Could I see which ones?",
          "zh": "我錯了幾題？可以看是哪幾題嗎？"
        },
        {
          "en": "How soon can I retake the test, and is there another fee?",
          "zh": "我多快可以重考？需要再付費嗎？"
        }
      ],
      "tip": "各州規定不同，多數州可以隔幾天到一星期再考，可能要再付一次費用。多讀駕駛手冊、做網路模擬題。"
    },
    {
      "title": "📅 想預約路考",
      "say": [
        {
          "en": "I'd like to schedule my road test. What times are available?",
          "zh": "我想預約路考，有哪些時段？"
        },
        {
          "en": "Do I need to bring a car, and does it need to be insured?",
          "zh": "我要自己帶車嗎？車子需要保險嗎？"
        }
      ],
      "tip": "路考通常要預約，而且熱門時段要排很久。要自己帶車，車子要有保險、車牌和有效的登記，煞車燈與方向燈都要正常。"
    },
    {
      "title": "🪪 駕照的地址或名字要更正",
      "say": [
        {
          "en": "My name is spelled wrong on my license. How can I fix it?",
          "zh": "我的駕照上名字拼錯了，要怎麼更正？"
        },
        {
          "en": "I moved. How do I update my address?",
          "zh": "我搬家了，要怎麼更新地址？"
        }
      ],
      "tip": "名字要和護照、簽證一致。搬家後通常要在一定天數內更新地址，很多州可以在網站上辦理。"
    },
    {
      "title": "🎫 想換成州身分證（ID）或補發",
      "hear": {
        "en": "If you don't drive, you can get a state ID card instead.",
        "zh": "如果你不開車，也可以改辦州身分證。"
      },
      "say": [
        {
          "en": "I lost my license. How can I get a replacement?",
          "zh": "我的駕照掉了，要怎麼補發？"
        },
        {
          "en": "Could I get a state ID card instead of a driver's license?",
          "zh": "我可以辦州身分證，不辦駕照嗎？"
        }
      ],
      "tip": "州身分證（State ID）可以在需要證明年齡、身分時使用，例如買酒類、坐飛機、進場所，比隨身帶護照安全。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "How can I help you today?",
      "prompt": "櫃台人員在問什麼？",
      "options": [
        "你今天需要什麼協助",
        "你今天是不是遲到了",
        "你有沒有帶錢"
      ],
      "answer": 0,
      "note": "How can I help you? 是服務人員常說的開場。"
    },
    {
      "type": "聽懂意思",
      "audio": "I need your passport, your visa documents, and proof of address.",
      "prompt": "需要帶哪些文件？",
      "options": [
        "護照、簽證文件、地址證明",
        "駕照、保險卡、學生證",
        "只要帶錢"
      ],
      "answer": 0,
      "note": "proof of address 是地址證明。"
    },
    {
      "type": "選擇回應",
      "audio": "Do you have a Social Security number?",
      "prompt": "你是國際學生，沒有社會安全碼，最適合怎麼回答？",
      "options": [
        "No, I'm an international student.",
        "Yes, it's a passport.",
        "I'm thirty years old."
      ],
      "answer": 0,
      "note": "Social Security number 是社會安全碼。"
    },
    {
      "type": "聽數字",
      "audio": "The application fee is thirty-five dollars.",
      "prompt": "申請費是多少？",
      "options": [
        "35 元",
        "53 元",
        "15 元"
      ],
      "answer": 0,
      "note": "thirty-five 是 35，fifty-three 是 53。"
    },
    {
      "type": "聽懂意思",
      "audio": "The written test has forty questions, and you need at least eighty percent to pass.",
      "prompt": "怎樣才算通過筆試？",
      "options": [
        "至少答對 80%",
        "至少答對 40 題",
        "全部答對"
      ],
      "answer": 0,
      "note": "at least 是至少。"
    },
    {
      "type": "聽數字",
      "audio": "Congratulations! You got thirty-six right, so you passed.",
      "prompt": "這位考生答對幾題？",
      "options": [
        "36 題",
        "16 題",
        "30 題"
      ],
      "answer": 0,
      "note": "thirty-six 是 36，sixteen 是 16。"
    },
    {
      "type": "選擇回應",
      "audio": "May I see your learner's permit and proof of insurance, please?",
      "prompt": "你要把文件給考官，最適合怎麼回答？",
      "options": [
        "Sure. Here you go.",
        "It's very expensive.",
        "I'd like to retake it."
      ],
      "answer": 0,
      "note": "Here you go. 是「給你」。"
    },
    {
      "type": "聽懂意思",
      "audio": "Pull out and turn right at the next intersection.",
      "prompt": "考官要你怎麼開？",
      "options": [
        "駛出去，下個路口右轉",
        "直直開，不要轉",
        "下個路口左轉"
      ],
      "answer": 0,
      "note": "turn right 是右轉，intersection 是路口。"
    },
    {
      "type": "對話理解",
      "audio": "Hi, I'd like to apply for a learner's permit. I'm an international student, and I don't have a Social Security number. What documents do I need?",
      "prompt": "申請人想知道什麼？",
      "options": [
        "需要準備哪些文件",
        "路考的時間",
        "駕照的費用"
      ],
      "answer": 0,
      "note": "What documents do I need 是需要什麼文件。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "I failed the written test. How many did I get wrong, and how soon can I retake it?",
      "prompt": "考生想問什麼？",
      "options": [
        "錯幾題，多久可以重考",
        "要不要換考官",
        "怎麼申請保險"
      ],
      "answer": 0,
      "note": "retake 是重考。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Next, please. How can I help you today?",
      "promptZh": "下一位，請。今天有什麼可以幫你的？",
      "hint": "說你要申請學習駕照",
      "expect": "learner|permit|license|apply|driver",
      "model": "Hi, I'd like to apply for a learner's permit.",
      "modelZh": "嗨，我想申請學習駕照。"
    },
    {
      "prompt": "Do you have all your documents? I need your passport and proof of address.",
      "promptZh": "你的文件都帶齊了嗎？我需要護照和地址證明。",
      "hint": "拿出護照和租約",
      "expect": "passport|lease|here|address|proof",
      "model": "Here's my passport and my lease as proof of address.",
      "modelZh": "這是我的護照和我的租約，當作地址證明。"
    },
    {
      "prompt": "Do you have a Social Security number?",
      "promptZh": "你有社會安全碼嗎？",
      "hint": "說沒有，因為你是國際學生",
      "expect": "no|don't|international|student|not",
      "model": "No, I don't. I'm an international student.",
      "modelZh": "沒有，我是國際學生。"
    },
    {
      "prompt": "The application fee is thirty-five dollars. Cash or card?",
      "promptZh": "申請費三十五塊，付現還是刷卡？",
      "hint": "說 cash 或 card",
      "expect": "\\b(cash|card|credit|debit)\\b",
      "model": "Card, please.",
      "modelZh": "刷卡，謝謝。"
    },
    {
      "prompt": "Please look into the machine and read the bottom line out loud.",
      "promptZh": "請看進機器，大聲唸出最下面那一行。",
      "hint": "唸幾個字母，例如 E F P",
      "expect": "\\b[a-z]\\b|E|F|P|T|O|Z",
      "model": "E, F, P, T, O, Z.",
      "modelZh": "E、F、P、T、O、Z。"
    },
    {
      "prompt": "The written test is available in several languages. Which would you like?",
      "promptZh": "筆試有好幾種語言，你想用哪一種？",
      "hint": "說你想用中文",
      "expect": "chinese|mandarin|english|traditional|language",
      "model": "Traditional Chinese, please.",
      "modelZh": "請給我繁體中文。"
    },
    {
      "prompt": "Good morning. May I see your learner's permit and proof of insurance?",
      "promptZh": "早安，可以看一下你的學習駕照和保險證明嗎？",
      "hint": "說好並把文件給考官",
      "expect": "sure|here|yes|okay|ok|you go",
      "model": "Sure. Here you go.",
      "modelZh": "好的，給你。"
    },
    {
      "prompt": "Pull out and turn right at the next intersection.",
      "promptZh": "駛出去，在下一個路口右轉。",
      "hint": "複述一次考官的指示",
      "expect": "right|intersection|turn|next|okay|got it",
      "model": "Turn right at the next intersection. Okay.",
      "modelZh": "下一個路口右轉，好的。"
    }
  ],
  "culture": [
    {
      "t": "各州規定不同",
      "d": "美國駕照由各州的 DMV（Department of Motor Vehicles）核發，申請文件、費用、筆試題數和路考內容每個州都不一樣。辦理前先到所在州 DMV 的官網查清楚需要的文件和預約方式。"
    },
    {
      "t": "國際學生常見的文件",
      "d": "通常需要護照、簽證與 I-20（或 DS-2019）、地址證明（租約或帳單）、以及社會安全碼。沒有社會安全碼的話，要拿社會安全局開的「不符合資格」證明信。各州要求不同，請先確認。"
    },
    {
      "t": "先拿學習駕照，再考路考",
      "d": "多數州要先通過視力檢查和筆試，拿到學習駕照（learner's permit），練習一段時間後再預約路考。官網通常有駕駛手冊和模擬題，可以先在線上練習，也有中文版。"
    },
    {
      "t": "路考要自備車、保險與登記",
      "d": "路考要開自己準備的車，車子要有有效的登記、車牌和保險證明，煞車燈、方向燈、喇叭都要正常。考官會坐在旁邊，沒有教練。口令聽不懂可以請考官重複。"
    },
    {
      "t": "沒通過可以重考",
      "d": "筆試或路考沒通過很常見，通常隔幾天到幾週可以重考，可能要再付一次費。駕照拿到後可能先給臨時駕照，正式的會寄到你填的地址，所以地址一定要填對。"
    }
  ]
};
