// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "party",
  "title": "參加派對：認識新朋友",
  "en": "Meeting New Friends at a Party",
  "emoji": "👋",
  "goal": "跨年派對前在宿舍化妝準備，隨後到派對認識新朋友聊家鄉、科系與音樂愛好。",
  "videos": [
    {
      "id": "7t6lUpPFYv4",
      "title": "Meeting New People – English Conversation (EverydayEnglish)"
    },
    {
      "id": "e0iAJA5nGfU",
      "title": "How to Approach Strangers at a Party (The School of Life)"
    },
    {
      "id": "6K9LhzyLUfY",
      "title": "Start a Conversation with Anyone: Conversation Starters (Vanessa Van Edwards)"
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
      "name": "Roommate Daisy",
      "zh": "室友 Daisy",
      "avatar": "👩",
      "voice": "f2"
    },
    "S2": {
      "name": "Jessica",
      "zh": "新朋友 Jessica",
      "avatar": "👩",
      "voice": "f4"
    }
  },
  "dialogues": [
    {
      "title": "去室友的朋友跨年派對",
      "where": "去室友的朋友跨年派對",
      "emoji": "👋",
      "lines": [
        {
          "s": "S",
          "en": "Hey! You're coming to the party later tonight, right?",
          "zh": "嘿！今晚你會來派對吧？"
        },
        {
          "s": "Y",
          "en": "Oh yeah! What time does it start?",
          "zh": "哦，當然！派對什麼時候開始？"
        },
        {
          "s": "S",
          "en": "At eight!",
          "zh": "八點！"
        },
        {
          "s": "Y",
          "en": "Sweet. I'll start getting ready.",
          "zh": "太棒了！那我開始準備。"
        },
        {
          "s": "S",
          "en": "You can borrow my pink dress. I have two dresses and I think you will look great in the pink one!",
          "zh": "你可以借我的粉色洋裝。我有兩件洋裝，我覺得你穿粉色那件會很好看！"
        },
        {
          "s": "Y",
          "en": "Awww that would be great since I literally just landed and got no fancy outfit.",
          "zh": "哇，那太好了！因為我剛下飛機，根本沒有帶正式的衣服。"
        },
        {
          "s": "S",
          "en": "No worries! I got you, girl. Let's start getting ready!",
          "zh": "不用擔心！我幫你搞定，女孩～我們一起開始準備吧！"
        },
        {
          "s": "S2",
          "en": "So you're Daisy's new roomie, right?",
          "zh": "所以妳是 Daisy 的新室友，對吧？"
        },
        {
          "s": "Y",
          "en": "Yeah, hi! Nice meeting you.",
          "zh": "對啊，嗨！很高興認識妳。"
        },
        {
          "s": "S2",
          "en": "Hi, I'm Jessica. So… where are you from?",
          "zh": "嗨，我是 Jessica。妳來自哪裡？"
        },
        {
          "s": "Y",
          "en": "I'm from Taiwan!",
          "zh": "我來自台灣！"
        },
        {
          "s": "S2",
          "en": "Wow, that's nice. I have a friend who's also from Taiwan! Well, I'm from Philly, but my family lives 2 hours away and we moved here 10 years ago from Virginia.",
          "zh": "哇，真棒！我有一個朋友也來自台灣！我來自費城，但我家人住在離這裡兩小時的地方，我們十年前從維吉尼亞搬到這裡。"
        },
        {
          "s": "Y",
          "en": "Sweet! I've never been there but I would like to visit one day!",
          "zh": "太酷了！我從沒去過那裡，但我希望有一天能去看看！"
        },
        {
          "s": "S2",
          "en": "Yeah, for sure you should! There are a lot of museums and historical sites to visit.",
          "zh": "妳一定要去！那裡有很多博物館和歷史景點可以參觀。"
        },
        {
          "s": "Y",
          "en": "I'd imagine, considering it's one of the oldest cities. What's your major?",
          "zh": "我可以想像，畢竟那是最古老的城市之一。妳主修什麼？"
        },
        {
          "s": "S2",
          "en": "Nice! I'm in Fox Business School. But I'm actually more interested in making music or playing pickleball.",
          "zh": "很棒！我在 Fox 商學院。但我其實更喜歡製作音樂或玩匹克球。"
        },
        {
          "s": "Y",
          "en": "I've always wanted to try pickleball! What kind of music do you make?",
          "zh": "我一直想試試匹克球！妳做什麼類型的音樂？"
        },
        {
          "s": "S2",
          "en": "It varies. Mostly country and jazz. That's a good thing! I'm gonna go grab some sliders and alcohol.",
          "zh": "各種都有，主要是鄉村和爵士樂。我要去拿點迷你漢堡和酒。"
        },
        {
          "s": "Y",
          "en": "Aight. I'll see you on the rooftop for the countdown later!",
          "zh": "好啊。等會倒數時屋頂見！"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "You're coming to the party later tonight, right?",
      "zh": "今晚你會來派對吧？"
    },
    {
      "en": "Start getting ready.",
      "zh": "開始準備（出門）。"
    },
    {
      "en": "I literally just landed and got no fancy outfit.",
      "zh": "我剛下飛機，根本沒有帶正式的衣服。"
    },
    {
      "en": "No worries. / No biggies. / Don't worry about it. / It's okay.",
      "zh": "別擔心。"
    },
    {
      "en": "Nice meeting you. / Nice to meet you.",
      "zh": "很高興認識你。"
    },
    {
      "en": "My family lives 2 hours away.",
      "zh": "我家人住在離這裡兩小時的地方。"
    },
    {
      "en": "We moved here 10 years ago from Virginia.",
      "zh": "我們十年前從維吉尼亞州搬到這裡。"
    },
    {
      "en": "I've never been there.",
      "zh": "我從沒去過那裡。"
    },
    {
      "en": "I would like to visit one day.",
      "zh": "我希望有一天能去那裡。"
    },
    {
      "en": "There are a lot of museums and historical sites to visit.",
      "zh": "那裡有很多博物館和歷史景點可以參觀。"
    },
    {
      "en": "I'd imagine.",
      "zh": "我想也是。"
    },
    {
      "en": "Considering it's one of the oldest cities.",
      "zh": "畢竟那是最古老的城市之一。"
    },
    {
      "en": "What's your major?",
      "zh": "你的主修是什麼？"
    },
    {
      "en": "I am in Beasley School of Law.",
      "zh": "我就讀於 Beasley 法學院。"
    },
    {
      "en": "But I'm actually more interested in making music or playing pickleball.",
      "zh": "但我其實更喜歡製作音樂或玩匹克球。"
    },
    {
      "en": "I've always wanted to try pickleball.",
      "zh": "我一直想打打看匹克球。"
    },
    {
      "en": "It varies. / It depends.",
      "zh": "看情況 / 不一定。"
    },
    {
      "en": "I make mostly country and jazz music.",
      "zh": "我主要是做鄉村音樂和爵士樂。"
    },
    {
      "en": "What brought you back to business school?",
      "zh": "你怎麼會想回商學院？"
    },
    {
      "en": "Mostly I want to be an independent musician.",
      "zh": "主要是因為我想當獨立音樂人。"
    },
    {
      "en": "My father encouraged me to come back to school.",
      "zh": "我父親鼓勵我回到學校。"
    },
    {
      "en": "You have a wise dad.",
      "zh": "妳有一位很有智慧的爸爸。"
    },
    {
      "en": "I assume / suppose you are gonna practice law?",
      "zh": "我猜你將來會當執業律師吧？"
    },
    {
      "en": "I don't think that's gonna / going to happen.",
      "zh": "我覺得應該不會。"
    },
    {
      "en": "You should pursue / go after it.",
      "zh": "你應該追求那個目標。"
    },
    {
      "en": "Whatever it is that is true to your heart!",
      "zh": "做妳真正熱愛的事情！"
    },
    {
      "en": "Go grab some sliders and alcohol.",
      "zh": "去拿點小漢堡和酒。"
    },
    {
      "en": "I'll see you on the rooftop for the countdown later.",
      "zh": "等會倒數時屋頂見喔！"
    }
  ],
  "hear": [
    {
      "en": "You're coming to the party tonight, right?",
      "zh": "你今晚會來派對吧？",
      "reply": "Yeah! What time does it start?",
      "replyZh": "會啊！幾點開始？"
    },
    {
      "en": "It starts at eight.",
      "zh": "八點開始。",
      "reply": "Great. I'll start getting ready.",
      "replyZh": "太好了，我開始準備了。"
    },
    {
      "en": "You can borrow my dress if you want.",
      "zh": "你想的話可以借我的洋裝。",
      "reply": "Really? That would be great, thank you!",
      "replyZh": "真的嗎？那太好了，謝謝！"
    },
    {
      "en": "Do you want to do our makeup together?",
      "zh": "要不要一起化妝？",
      "reply": "Sure! Can I use your mirror?",
      "replyZh": "好啊！我可以用你的鏡子嗎？"
    },
    {
      "en": "Have you met everyone yet?",
      "zh": "你認識大家了嗎？",
      "reply": "Not yet. Can you introduce me?",
      "replyZh": "還沒。你可以幫我介紹嗎？"
    },
    {
      "en": "This is my friend Jessica. Jessica, this is my new roommate.",
      "zh": "這是我朋友 Jessica。Jessica，這是我的新室友。",
      "reply": "Hi, nice to meet you!",
      "replyZh": "嗨，很高興認識你！"
    },
    {
      "en": "So, where are you from?",
      "zh": "那你是哪裡人？",
      "reply": "I'm from Taiwan. What about you?",
      "replyZh": "我來自台灣。你呢？"
    },
    {
      "en": "What's your major?",
      "zh": "你主修什麼？",
      "reply": "I'm majoring in business. How about you?",
      "replyZh": "我主修商學。你呢？"
    },
    {
      "en": "Do you want something to drink?",
      "zh": "你要喝點什麼嗎？",
      "reply": "Just water, please. Thanks!",
      "replyZh": "水就好，謝謝！"
    },
    {
      "en": "We're heading up to the rooftop for the countdown!",
      "zh": "我們要上屋頂倒數跨年了！",
      "reply": "Let's go! I can't wait.",
      "replyZh": "走吧！我等不及了。"
    }
  ],
  "say": [
    {
      "en": "What time does the party start?",
      "zh": "派對幾點開始？"
    },
    {
      "en": "Can I borrow your dress?",
      "zh": "我可以借你的洋裝嗎？"
    },
    {
      "en": "I just landed, so I don't have anything fancy to wear.",
      "zh": "我才剛抵達，沒有正式的衣服可以穿。"
    },
    {
      "en": "Nice to meet you!",
      "zh": "很高興認識你！"
    },
    {
      "en": "I'm from Taiwan. I've been here for a week.",
      "zh": "我來自台灣，我來這裡一個星期了。"
    },
    {
      "en": "What kind of music do you make?",
      "zh": "你做什麼類型的音樂？"
    },
    {
      "en": "I've always wanted to try that!",
      "zh": "我一直很想試試看！"
    },
    {
      "en": "I'll see you on the rooftop for the countdown!",
      "zh": "我們倒數時在屋頂見！"
    }
  ],
  "vocab": [
    {
      "w": "roommate / roomie",
      "pos": "n.",
      "zh": "室友（roomie 是口語說法）",
      "ex": "She's my new roomie.",
      "exzh": "她是我的新室友。"
    },
    {
      "w": "borrow",
      "pos": "v.",
      "zh": "借入（向別人借東西）",
      "ex": "Can I borrow your charger?",
      "exzh": "我可以借你的充電器嗎？"
    },
    {
      "w": "outfit",
      "pos": "n.",
      "zh": "一套穿搭",
      "ex": "I love your outfit!",
      "exzh": "我很喜歡你的穿搭！"
    },
    {
      "w": "major",
      "pos": "n./v.",
      "zh": "主修；主修某科",
      "ex": "I major in design.",
      "exzh": "我主修設計。"
    },
    {
      "w": "rooftop",
      "pos": "n.",
      "zh": "屋頂（露台）",
      "ex": "The party is on the rooftop.",
      "exzh": "派對在屋頂上。"
    },
    {
      "w": "countdown",
      "pos": "n.",
      "zh": "倒數（跨年倒數）",
      "ex": "We watched the countdown together.",
      "exzh": "我們一起看了倒數。"
    },
    {
      "w": "pickleball",
      "pos": "n.",
      "zh": "匹克球（美國很流行的球類）",
      "ex": "Let's play pickleball this weekend.",
      "exzh": "這個週末一起打匹克球吧。"
    },
    {
      "w": "slider",
      "pos": "n.",
      "zh": "迷你漢堡",
      "ex": "I'm gonna grab some sliders.",
      "exzh": "我去拿一些迷你漢堡。"
    },
    {
      "w": "introduce",
      "pos": "v.",
      "zh": "介紹（人）認識",
      "ex": "Let me introduce you to my friend.",
      "exzh": "讓我介紹你認識我朋友。"
    },
    {
      "w": "Sweet! / I got you.",
      "pos": "phr.",
      "zh": "太棒了！／包在我身上。（口語）",
      "ex": "No worries, I got you.",
      "exzh": "別擔心，包在我身上。"
    }
  ],
  "situations": [
    {
      "title": "😵 對方說太快，沒聽懂",
      "hear": {
        "en": "Where are you from originally?",
        "zh": "（講得很快）你原本是哪裡人？",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you say that again a little slower?",
          "zh": "不好意思，可以說慢一點再說一次嗎？"
        },
        {
          "en": "Sorry, did you ask where I'm from?",
          "zh": "抱歉，你是問我來自哪裡嗎？"
        }
      ],
      "tip": "聽不懂時抓關鍵字（where / from）再確認一次，比一直說 What? 有禮貌。"
    },
    {
      "title": "🙈 想不起對方的名字",
      "say": [
        {
          "en": "Sorry, I forgot your name. Could you tell me again?",
          "zh": "抱歉，我忘記你的名字了，可以再說一次嗎？"
        },
        {
          "en": "I'm so bad with names!",
          "zh": "我真的很不會記名字！"
        }
      ],
      "tip": "美國人不介意你再問一次名字，開口問比一直假裝記得好。"
    },
    {
      "title": "🍺 對方請你喝酒，但你不想喝",
      "hear": {
        "en": "Do you want a beer or something stronger?",
        "zh": "你要啤酒，還是更烈一點的？"
      },
      "say": [
        {
          "en": "No thanks, I'm good. Do you have any soda or water?",
          "zh": "不用了謝謝，我不用。有汽水或水嗎？"
        },
        {
          "en": "I'll just have a Coke, thanks.",
          "zh": "我喝可樂就好，謝謝。"
        }
      ],
      "tip": "美國法定飲酒年齡是 21 歲。不想喝直接說 I'm good，不需要解釋理由。"
    },
    {
      "title": "🚪 想先離開派對",
      "say": [
        {
          "en": "I'm gonna head out. Thanks for having me!",
          "zh": "我要先走了，謝謝你邀請我！"
        },
        {
          "en": "It was so nice meeting you. Let's keep in touch!",
          "zh": "很高興認識你，我們保持聯絡！"
        }
      ],
      "tip": "離開時跟主人道謝，再說 Let's keep in touch 就很自然。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "It starts at eight.",
      "prompt": "派對幾點開始？",
      "options": [
        "八點",
        "六點",
        "十點"
      ],
      "answer": 0,
      "note": "at eight = 在八點。"
    },
    {
      "type": "選擇回應",
      "audio": "You're coming tonight, right?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "No, I'm a party.",
        "Yeah! What time does it start?",
        "It's a pink dress."
      ],
      "answer": 1,
      "note": "被問「你會來吧？」，先回答 Yeah，再問時間。"
    },
    {
      "type": "聽懂意思",
      "audio": "You can borrow my pink dress.",
      "prompt": "室友說了什麼？",
      "options": [
        "她要送你粉紅色洋裝",
        "她想跟你借洋裝",
        "她願意借粉紅色洋裝給你"
      ],
      "answer": 2,
      "note": "borrow 是「借入」，lend 才是「借出」。這裡室友是借你。"
    },
    {
      "type": "選擇回應",
      "audio": "Where are you from?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "I'm from Taiwan.",
        "I'm fine, thanks.",
        "I'm a student."
      ],
      "answer": 0,
      "note": "Where are you from? 回答 I'm from + 地方。"
    },
    {
      "type": "選擇回應",
      "audio": "What's your major?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "I'm eighteen.",
        "I'm majoring in business.",
        "I live on campus."
      ],
      "answer": 1,
      "note": "major 是主修的科系。"
    },
    {
      "type": "聽懂意思",
      "audio": "We're heading up to the rooftop for the countdown!",
      "prompt": "大家要去做什麼？",
      "options": [
        "去屋頂吃早餐",
        "去頂樓開會",
        "上屋頂倒數跨年"
      ],
      "answer": 2,
      "note": "countdown 是跨年倒數；head up to = 往上走去。"
    },
    {
      "type": "對話理解",
      "audio": "Hi, I'm Jessica. I'm from Philly, but my family moved here from Virginia ten years ago. I'm in business school, but I'm more into making music.",
      "prompt": "Jessica 比較喜歡做什麼？",
      "options": [
        "做音樂",
        "念商學院",
        "搬家"
      ],
      "answer": 0,
      "note": "more into... = 對…更有興趣。",
      "speaker": "S2"
    },
    {
      "type": "對話理解",
      "audio": "I'm gonna go grab some sliders and a soda. Do you want anything?",
      "prompt": "對方要去拿什麼？",
      "options": [
        "啤酒和薯條",
        "迷你漢堡和汽水",
        "蛋糕和果汁"
      ],
      "answer": 1,
      "note": "grab = 拿；slider 是迷你漢堡。",
      "speaker": "S2"
    }
  ],
  "roleplay": [
    {
      "prompt": "Hey! You're coming to the party tonight, right?",
      "promptZh": "嘿！你今晚會來派對吧？",
      "hint": "回答會去，順便問幾點開始",
      "expect": "yeah|yes|sure|of course|what time",
      "model": "Yeah! What time does it start?",
      "modelZh": "會啊！幾點開始？"
    },
    {
      "prompt": "It starts at eight. Do you want to borrow one of my dresses?",
      "promptZh": "八點開始。你想借我的洋裝嗎？",
      "hint": "說謝謝並答應",
      "expect": "thank|that would be great|sure|yes|yeah|please",
      "model": "That would be great, thank you!",
      "modelZh": "那太好了，謝謝！"
    },
    {
      "prompt": "Have you met everyone? This is my friend Jessica.",
      "promptZh": "你認識大家了嗎？這是我朋友 Jessica。",
      "hint": "打招呼說很高興認識",
      "expect": "nice to meet|nice meeting|pleasure|hi|hello",
      "model": "Hi, nice to meet you!",
      "modelZh": "嗨，很高興認識你！"
    },
    {
      "prompt": "So where are you from?",
      "promptZh": "你是哪裡人？",
      "hint": "說 I'm from… ",
      "expect": "i'?m from|i am from|from taiwan|taiwan",
      "model": "I'm from Taiwan.",
      "modelZh": "我來自台灣。"
    },
    {
      "prompt": "What's your major?",
      "promptZh": "你主修什麼？",
      "hint": "說出你主修的科系",
      "expect": "major|study|studying|business|art|design|english|science|engineering",
      "model": "I'm majoring in business.",
      "modelZh": "我主修商學。"
    },
    {
      "prompt": "We're going up to the rooftop for the countdown. Coming?",
      "promptZh": "我們要上屋頂倒數了，要來嗎？",
      "hint": "答應一起去",
      "expect": "yes|yeah|sure|let'?s go|i'?ll see you|coming|can'?t wait",
      "model": "Yeah! I'll see you on the rooftop!",
      "modelZh": "好！屋頂見！"
    }
  ],
  "culture": [
    {
      "t": "派對是認識朋友的方式",
      "d": "美國學生很常辦 house party（家裡派對）。去的時候不一定要帶很貴的東西，帶點零食或飲料就很有禮貌；到了先跟主人打招呼。"
    },
    {
      "t": "21 歲才能喝酒",
      "d": "美國法定飲酒年齡是 21 歲。大學派對常有酒，如果你不喝或還沒滿 21，說 I'm good 或要一杯汽水都很正常，不會有人逼你。"
    },
    {
      "t": "Small talk 的三個固定問題",
      "d": "第一次見面最常聊 Where are you from?、What's your major?、What do you do for fun?。回答之後記得反問對方 How about you?，對話才不會中斷。"
    },
    {
      "t": "跨年倒數",
      "d": "12 月 31 日晚上，美國人會一起倒數 Ten, nine, eight… 到零時大喊 Happy New Year! 並擁抱或乾杯，紐約時代廣場的倒數最有名。"
    }
  ]
};
