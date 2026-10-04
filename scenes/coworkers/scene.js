// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "coworkers",
  "title": "和同事閒聊",
  "en": "Water Cooler Chit-Chat",
  "emoji": "☕",
  "goal": "聊週末帶小孩去南瓜園、看道奇隊棒球比賽、養寵物與養育孩子的甜蜜混亂。",
  "videos": [
    {
      "id": "cZcwcRgKK-o",
      "title": "English Small Talk for Fridays and Mondays at Work or School (Bob the Canadian)"
    },
    {
      "id": "_Ze0Dfu7ync",
      "title": "Conversation Starters at Work – How to Make Small Talk at Work (CareerShakers)"
    },
    {
      "id": "4zXys7i8Zrc",
      "title": "English Small Talk for Work and with Friends, Family and Strangers (Bob the Canadian)"
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
      "name": "Coworker Karen",
      "zh": "同事 Karen",
      "avatar": "👩",
      "voice": "f2"
    }
  },
  "dialogues": [
    {
      "title": "跟同事在洗手間與茶水間閒聊",
      "where": "跟同事在洗手間與茶水間閒聊",
      "emoji": "☕",
      "lines": [
        {
          "s": "S",
          "en": "Hey! Can you believe how freezing it is outside today?",
          "zh": "嗨！妳敢相信今天外面有多冰冷嗎？"
        },
        {
          "s": "Y",
          "en": "I know! Did you do anything fun with your kids over the weekend?",
          "zh": "真的！妳週末有帶孩子們去哪裡玩嗎？"
        },
        {
          "s": "S",
          "en": "Took them to a pumpkin patch, but they were acting crazy. Sometimes I think I should have gotten a dog!",
          "zh": "帶去南瓜園，但吵翻天了。有時候真覺得當初養狗就好！"
        },
        {
          "s": "Y",
          "en": "Haha! Parenting is a blessing even if it's chaotic. Enjoy it while you can!",
          "zh": "哈哈！養孩子雖然混亂但也是祝福，好好享受吧！"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "Good to see you! How's your weekend?",
      "zh": "很高興見到你！你的週末過得怎麼樣？"
    },
    {
      "en": "Can you believe how cold / hot it is outside today?",
      "zh": "你敢相信今天外面有多冷 / 多熱嗎？"
    },
    {
      "en": "I took my kids to a pumpkin patch.",
      "zh": "我帶我的孩子們去南瓜園玩。"
    },
    {
      "en": "They were not behaving well. You're doing your best.",
      "zh": "他們不太聽話。你已經盡力了。"
    },
    {
      "en": "Did you catch the Dodgers game last night?",
      "zh": "你昨晚有看道奇隊的比賽嗎？"
    },
    {
      "en": "I'm not a big baseball fan.",
      "zh": "我不算是棒球迷。"
    },
    {
      "en": "Parenting is a blessing even if at times it's chaotic.",
      "zh": "養育孩子是一個祝福，即使有時候會很混亂。"
    },
    {
      "en": "I should've just gotten another dog.",
      "zh": "當初早知道我應該再養一隻狗的。"
    },
    {
      "en": "Before you know it, they'll be all grown up and out of the house.",
      "zh": "轉眼之間，他們就長大然後搬出家裡了。"
    },
    {
      "en": "No kids, no stress. Enjoy it while you can!",
      "zh": "沒有小孩就沒有壓力，趁還能享受的時候好好享受吧！"
    }
  ],
  "hear": [
    {
      "en": "Good morning! Can you believe how cold it is today?",
      "zh": "早安！你相信今天有多冷嗎？",
      "reply": "I know! I almost didn't want to get out of bed.",
      "replyZh": "對啊！我差點不想起床。"
    },
    {
      "en": "Did you do anything fun over the weekend?",
      "zh": "週末你有做什麼有趣的事嗎？",
      "reply": "Not really. I mostly relaxed at home. How about you?",
      "replyZh": "沒什麼，我大多在家休息。你呢？"
    },
    {
      "en": "I took my kids to a pumpkin patch.",
      "zh": "我帶孩子們去南瓜園。",
      "reply": "Aw, that sounds fun! Did they enjoy it?",
      "replyZh": "哇，聽起來好玩！他們喜歡嗎？"
    },
    {
      "en": "They were acting crazy the whole time.",
      "zh": "他們整個過程都瘋瘋癲癲的。",
      "reply": "Haha, kids will be kids.",
      "replyZh": "哈哈，小孩就是這樣。"
    },
    {
      "en": "Sometimes I think I should have gotten a dog instead.",
      "zh": "有時候我覺得當初應該養狗就好。",
      "reply": "Haha! Parenting is a blessing, even when it's chaotic.",
      "replyZh": "哈哈！養育孩子是種福氣，即使很混亂。"
    },
    {
      "en": "Did you catch the Dodgers game last night?",
      "zh": "你昨晚有看道奇隊的比賽嗎？",
      "reply": "No, I missed it. Who won?",
      "replyZh": "沒有，我錯過了。誰贏了？"
    },
    {
      "en": "Do you have any pets at home?",
      "zh": "你家有養寵物嗎？",
      "reply": "Yes, I have a cat named Mochi.",
      "replyZh": "有，我養了一隻叫 Mochi 的貓。"
    },
    {
      "en": "Want to grab a coffee before the meeting?",
      "zh": "會議前要不要去喝杯咖啡？",
      "reply": "Sure, I could use one.",
      "replyZh": "好啊，我正需要一杯。"
    },
    {
      "en": "Do you have a minute to look at this report?",
      "zh": "你有空幫我看一下這份報告嗎？",
      "reply": "Of course. Send it to me.",
      "replyZh": "當然，傳給我吧。"
    },
    {
      "en": "Have a great weekend!",
      "zh": "祝你週末愉快！",
      "reply": "You too! See you Monday.",
      "replyZh": "你也是！週一見。"
    }
  ],
  "say": [
    {
      "en": "Can you believe how cold it is?",
      "zh": "你相信這麼冷嗎？"
    },
    {
      "en": "Did you do anything fun over the weekend?",
      "zh": "你週末有做什麼有趣的事嗎？"
    },
    {
      "en": "That sounds like fun!",
      "zh": "聽起來很好玩！"
    },
    {
      "en": "Kids will be kids.",
      "zh": "小孩就是這樣。"
    },
    {
      "en": "Parenting is a blessing, even if it's chaotic.",
      "zh": "養育孩子是福氣，即使很混亂。"
    },
    {
      "en": "Did you watch the game last night?",
      "zh": "你昨晚有看比賽嗎？"
    },
    {
      "en": "Do you want to grab a coffee?",
      "zh": "你要不要去喝杯咖啡？"
    },
    {
      "en": "Enjoy it while you can!",
      "zh": "趁現在好好享受吧！"
    }
  ],
  "vocab": [
    {
      "w": "coworker",
      "pos": "n.",
      "zh": "同事",
      "ex": "My coworker is really friendly.",
      "exzh": "我的同事很友善。"
    },
    {
      "w": "water cooler chat",
      "pos": "n.",
      "zh": "茶水間閒聊",
      "ex": "We had a quick water cooler chat.",
      "exzh": "我們在茶水間聊了一下。"
    },
    {
      "w": "freezing",
      "pos": "adj.",
      "zh": "冷得要命",
      "ex": "It's freezing outside.",
      "exzh": "外面冷得要命。"
    },
    {
      "w": "pumpkin patch",
      "pos": "n.",
      "zh": "南瓜園（秋天親子活動）",
      "ex": "We went to a pumpkin patch.",
      "exzh": "我們去了南瓜園。"
    },
    {
      "w": "chaotic",
      "pos": "adj.",
      "zh": "混亂的",
      "ex": "My weekend was chaotic.",
      "exzh": "我的週末一片混亂。"
    },
    {
      "w": "blessing",
      "pos": "n.",
      "zh": "福氣、恩賜",
      "ex": "Kids are a blessing.",
      "exzh": "孩子是福氣。"
    },
    {
      "w": "catch (a game)",
      "pos": "v.",
      "zh": "看到（比賽）",
      "ex": "Did you catch the game?",
      "exzh": "你有看到比賽嗎？"
    },
    {
      "w": "grab (coffee)",
      "pos": "v.",
      "zh": "（隨意）去喝／吃",
      "ex": "Let's grab lunch.",
      "exzh": "我們去吃午餐吧。"
    },
    {
      "w": "relax",
      "pos": "v.",
      "zh": "放鬆",
      "ex": "I just relaxed at home.",
      "exzh": "我只是在家放鬆。"
    },
    {
      "w": "kids will be kids",
      "pos": "phr.",
      "zh": "小孩就是這樣",
      "ex": "Don't worry. Kids will be kids.",
      "exzh": "別擔心，小孩子就是這樣。"
    }
  ],
  "situations": [
    {
      "title": "😵 同事說了口語，沒聽懂",
      "hear": {
        "en": "Man, it's brutal out there. I could barely feel my fingers this morning.",
        "zh": "（講得很快）天啊，外面冷死了，今天早上我手指都快沒知覺了。",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, what was that last part?",
          "zh": "抱歉，最後那句是什麼？"
        },
        {
          "en": "Yeah, it's freezing!",
          "zh": "對啊，冷死了！"
        }
      ],
      "tip": "口語常用誇張說法，抓到 cold / freezing 就能附和。"
    },
    {
      "title": "🤐 不想聊私事",
      "hear": {
        "en": "So, are you seeing anyone?",
        "zh": "所以，你有在跟誰交往嗎？"
      },
      "say": [
        {
          "en": "I'd rather keep that private, but thanks for asking!",
          "zh": "我比較想保留隱私，不過謝謝你問。"
        },
        {
          "en": "Haha, let's talk about something else. How was your weekend?",
          "zh": "哈哈，我們聊別的吧。你週末怎麼樣？"
        }
      ],
      "tip": "美國職場很重視隱私，用笑著轉移話題就好，不需要解釋。"
    },
    {
      "title": "⏳ 同事一直講個不停，你想回去工作",
      "say": [
        {
          "en": "I'd love to keep chatting, but I have to get back to work.",
          "zh": "我很想再聊，但我得回去工作了。"
        },
        {
          "en": "Let's catch up at lunch!",
          "zh": "我們午餐時再聊吧！"
        }
      ],
      "tip": "結束對話用 I should get back to... 並約下次，很自然。"
    },
    {
      "title": "🎂 同事邀請你參加生日聚會",
      "hear": {
        "en": "We're having cake for Tom's birthday at three. Come join us!",
        "zh": "下午三點我們要為 Tom 慶生吃蛋糕，來參加吧！"
      },
      "say": [
        {
          "en": "Sure, I'll be there. Thanks for letting me know!",
          "zh": "好，我會到。謝謝你告訴我！"
        },
        {
          "en": "Sorry, I have a meeting then. Please say happy birthday for me.",
          "zh": "抱歉，我那時有會議，請幫我跟他說生日快樂。"
        }
      ],
      "tip": "辦公室慶生很常見，即使不能參加也要祝福一下。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "Can you believe how cold it is today?",
      "prompt": "同事在說什麼？",
      "options": [
        "今天好冷",
        "今天好熱",
        "今天下雨"
      ],
      "answer": 0,
      "note": "Can you believe...? 是感嘆「真不敢相信」。"
    },
    {
      "type": "選擇回應",
      "audio": "Did you do anything fun over the weekend?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "Yes, I'm funny.",
        "Not really. I mostly relaxed at home.",
        "It was Monday."
      ],
      "answer": 1,
      "note": "weekend 的問題回答週末做了什麼。"
    },
    {
      "type": "聽懂意思",
      "audio": "I took my kids to a pumpkin patch.",
      "prompt": "她週末做了什麼？",
      "options": [
        "帶孩子去海邊",
        "買了很多南瓜",
        "帶孩子去南瓜園"
      ],
      "answer": 2,
      "note": "pumpkin patch 是秋天的親子景點。"
    },
    {
      "type": "聽懂意思",
      "audio": "The kids were acting crazy the whole time.",
      "prompt": "孩子們怎麼樣？",
      "options": [
        "一直很吵鬧",
        "一直很安靜",
        "一直在睡覺"
      ],
      "answer": 0,
      "note": "act crazy = 行為瘋狂、吵鬧。"
    },
    {
      "type": "選擇回應",
      "audio": "Did you catch the Dodgers game last night?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "Yes, I caught a ball.",
        "No, I missed it. Who won?",
        "I'm a Dodger."
      ],
      "answer": 1,
      "note": "catch the game = 看到那場比賽。"
    },
    {
      "type": "選擇回應",
      "audio": "Want to grab a coffee before the meeting?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "No, I'm a coffee.",
        "Yes, it's a meeting.",
        "Sure, I could use one."
      ],
      "answer": 2,
      "note": "I could use one = 我正需要一杯。"
    },
    {
      "type": "對話理解",
      "audio": "Sometimes I think I should have gotten a dog instead of kids. But honestly, they're the best part of my life.",
      "prompt": "她真正的想法是？",
      "options": [
        "孩子很吵，但是人生中最棒的部分",
        "她討厭孩子",
        "她想養狗不想有小孩"
      ],
      "answer": 0,
      "note": "Sometimes... but honestly = 有時…但老實說…"
    },
    {
      "type": "對話理解",
      "audio": "We have a team lunch on Friday at noon. Do you want to join? It's at the Italian place around the corner.",
      "prompt": "午餐聚會在哪？",
      "options": [
        "公司餐廳",
        "轉角的義大利餐廳",
        "中國餐館"
      ],
      "answer": 1,
      "note": "around the corner = 在轉角。"
    }
  ],
  "roleplay": [
    {
      "prompt": "Good morning! Can you believe how cold it is today?",
      "promptZh": "早安！你相信今天有多冷嗎？",
      "hint": "附和她",
      "expect": "cold|freezing|know|yeah|right|brr|winter|weather|so true",
      "model": "I know! It's freezing!",
      "modelZh": "對啊！冷死了！"
    },
    {
      "prompt": "Did you do anything fun over the weekend?",
      "promptZh": "你週末有做什麼有趣的事嗎？",
      "hint": "簡單說週末，再反問",
      "expect": "weekend|relax|home|friend|movie|hike|beach|shop|how about you|you",
      "model": "Not much. I relaxed at home. How about you?",
      "modelZh": "沒什麼，我在家放鬆。你呢？"
    },
    {
      "prompt": "I took my kids to a pumpkin patch, but they were acting crazy.",
      "promptZh": "我帶孩子去南瓜園，但他們瘋瘋癲癲的。",
      "hint": "表示理解並安慰",
      "expect": "kids|fun|blessing|chaotic|haha|sounds|enjoy|aw",
      "model": "Haha, kids will be kids!",
      "modelZh": "哈哈，小孩就是這樣！"
    },
    {
      "prompt": "Sometimes I think I should have gotten a dog.",
      "promptZh": "有時候我覺得應該養狗就好。",
      "hint": "說一句養孩子的好話",
      "expect": "blessing|enjoy|worth|best|chaotic|cute|aw|parent",
      "model": "Parenting is a blessing, even when it's chaotic. Enjoy it while you can!",
      "modelZh": "養育孩子是福氣，即使很混亂。趁現在好好享受吧！"
    },
    {
      "prompt": "Did you catch the Dodgers game last night?",
      "promptZh": "你昨晚看道奇隊的比賽了嗎？",
      "hint": "說有或沒有",
      "expect": "yes|yeah|no|missed|watch|game|who won|win|score",
      "model": "No, I missed it. Who won?",
      "modelZh": "沒有，我錯過了。誰贏了？"
    },
    {
      "prompt": "Want to grab a coffee before the meeting?",
      "promptZh": "會議前要去喝咖啡嗎？",
      "hint": "答應",
      "expect": "sure|yes|yeah|love|coffee|sounds|could use|let'?s",
      "model": "Sure, I could use one.",
      "modelZh": "好啊，我正需要一杯。"
    }
  ],
  "culture": [
    {
      "t": "茶水間閒聊 (water cooler talk)",
      "d": "美國職場的閒聊多在茶水間、電梯、咖啡機旁。常見話題：天氣、週末、運動、旅行。簡短輕鬆即可，不用太私人。"
    },
    {
      "t": "避免敏感話題",
      "d": "工作閒聊盡量避開薪水、政治、宗教、感情、年齡。聊到時可以笑著轉移話題，說 Let's change the subject。"
    },
    {
      "t": "運動是共同話題",
      "d": "棒球 (MLB)、美式足球 (NFL)、籃球 (NBA) 是同事間最安全的話題。不熟也可以問 Do you follow baseball?。"
    },
    {
      "t": "秋天的南瓜季",
      "d": "十月的萬聖節前，美國家庭會去 pumpkin patch 摘南瓜、做南瓜燈 (jack-o'-lantern)，是秋天的親子活動。"
    }
  ]
};
