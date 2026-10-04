// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "blind-date",
  "title": "開玩笑與幽默：網路約會",
  "en": "Humor & Blind Date",
  "emoji": "🍕",
  "goal": "初次相親約會聊天、彼此自嘲破冰、聊養貓（燕尾服貓）、神經科學與 AA 制分帳。",
  "videos": [
    {
      "id": "GlTQyAylpJM",
      "title": "Real English Conversations: First Date at a Restaurant (Speak Easy English)"
    },
    {
      "id": "0JpcPMk9ndo",
      "title": "Questions to Ask on the First Date (Vanessa Van Edwards)"
    },
    {
      "id": "y_pGong8-68",
      "title": "What to Talk About on a Date (The School of Life)"
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
      "name": "Anthony",
      "zh": "約會對象 Anthony",
      "avatar": "👨",
      "voice": "m2"
    }
  },
  "dialogues": [
    {
      "title": "嘗試網路約會",
      "where": "嘗試網路約會",
      "emoji": "🍕",
      "lines": [
        {
          "s": "S",
          "en": "Hey! You are taller than I imagined. Ready for some Chinese food?",
          "zh": "嗨！妳比我想像的還高。準備吃中餐了嗎？"
        },
        {
          "s": "Y",
          "en": "I'll take that as a compliment! Let's get chicken potstickers and spring rolls.",
          "zh": "我就當成讚美囉！先來點鍋貼和春捲吧。"
        },
        {
          "s": "S",
          "en": "I study neuroscience. Does that make me too nerdy? What's your karaoke song?",
          "zh": "我讀神經科學，會太書呆子嗎？妳最愛的KTV歌曲是什麼？"
        },
        {
          "s": "Y",
          "en": "Haha, I got two cats at home. Look, I have to meet my friends in 30 mins, we'll split the check?",
          "zh": "我家有兩隻貓。對了我等會有朋友聚會，我們帳單各自付吧？"
        },
        {
          "s": "S",
          "en": "Sure thing! Enjoy your night!",
          "zh": "沒問題！祝妳今晚愉快！"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "You are taller than I imagined.",
      "zh": "你比我想像的還要高。"
    },
    {
      "en": "I'll take that as a compliment!",
      "zh": "我就當這是一個讚美了！"
    },
    {
      "en": "Excuse me. We're ready to order!",
      "zh": "不好意思，我們可以點餐了！"
    },
    {
      "en": "I hope I'm not too nerdy.",
      "zh": "我希望我不會讓你覺得我太書呆子。"
    },
    {
      "en": "Does that make you an expert mind reader?",
      "zh": "那表示你會讀心術嗎？"
    },
    {
      "en": "What's your favorite karaoke song? This is how I judge people.",
      "zh": "你最愛的KTV歌曲是什麼？這是我判斷人的方式。"
    },
    {
      "en": "My cat really seemed to need emotional support.",
      "zh": "我家貓真的看起來很需要我陪。"
    },
    {
      "en": "He's a tuxedo. Shut up! They are majestic!",
      "zh": "他是燕尾服貓。別鬧了！牠們好漂亮啊！"
    },
    {
      "en": "I just want to put it out there. I am very open-minded.",
      "zh": "我只是想先說清楚，我是心態很開放的人。"
    },
    {
      "en": "I had fun! We'll split the check.",
      "zh": "我玩得很開心！我們帳單分開付（各付各的）。"
    }
  ],
  "hear": [
    {
      "en": "Hey! You're taller than I imagined.",
      "zh": "嘿！你比我想像的還要高。",
      "reply": "Haha, I'll take that as a compliment!",
      "replyZh": "哈哈，我當作是稱讚！"
    },
    {
      "en": "Are you ready for some Chinese food?",
      "zh": "你準備好吃中式料理了嗎？",
      "reply": "Absolutely. I love dumplings and spring rolls.",
      "replyZh": "當然，我超愛餃子和春捲。"
    },
    {
      "en": "What would you like to order?",
      "zh": "你想點什麼？",
      "reply": "Let's get chicken potstickers and spring rolls.",
      "replyZh": "我們點雞肉鍋貼和春捲吧。"
    },
    {
      "en": "What do you do for work?",
      "zh": "你是做什麼工作的？",
      "reply": "I'm a marketing manager. How about you?",
      "replyZh": "我是行銷主管，你呢？"
    },
    {
      "en": "I study neuroscience. Does that make me too nerdy?",
      "zh": "我讀神經科學，這樣是不是太書呆子了？",
      "reply": "Not at all. That's actually really cool.",
      "replyZh": "一點也不，這其實很酷。"
    },
    {
      "en": "Do you have any pets?",
      "zh": "你有養寵物嗎？",
      "reply": "Yeah, I have two cats at home.",
      "replyZh": "有，我家有兩隻貓。"
    },
    {
      "en": "What's your go-to karaoke song?",
      "zh": "你最愛唱的卡拉 OK 歌是哪首？",
      "reply": "Oh no, I'm terrible at karaoke!",
      "replyZh": "天啊，我唱得超爛！"
    },
    {
      "en": "What do you like to do on the weekends?",
      "zh": "你週末喜歡做什麼？",
      "reply": "Mostly hang out with friends or hike.",
      "replyZh": "多半跟朋友出去玩或去健行。"
    },
    {
      "en": "Should we split the check?",
      "zh": "我們要分開付嗎？",
      "reply": "Sure, that works for me.",
      "replyZh": "好啊，我可以。"
    },
    {
      "en": "I had a great time tonight. Enjoy the rest of your night!",
      "zh": "今晚我玩得很開心，祝你有個愉快的夜晚！",
      "reply": "Thanks, you too. Let's keep in touch.",
      "replyZh": "謝謝，你也是。我們保持聯絡。"
    }
  ],
  "say": [
    {
      "en": "I'll take that as a compliment!",
      "zh": "我就當作是稱讚了！"
    },
    {
      "en": "Let's get chicken potstickers and spring rolls.",
      "zh": "我們點雞肉鍋貼和春捲吧。"
    },
    {
      "en": "What do you do for fun?",
      "zh": "你平常做什麼消遣？"
    },
    {
      "en": "That's actually really cool.",
      "zh": "這其實很酷。"
    },
    {
      "en": "I have two cats at home.",
      "zh": "我家有兩隻貓。"
    },
    {
      "en": "What's your karaoke song?",
      "zh": "你的卡拉 OK 歌是哪首？"
    },
    {
      "en": "Do you mind if we split the check?",
      "zh": "你介意我們各付各的嗎？"
    },
    {
      "en": "I have to meet my friends in thirty minutes.",
      "zh": "我三十分鐘後要跟朋友碰面。"
    }
  ],
  "vocab": [
    {
      "w": "blind date",
      "pos": "n.",
      "zh": "相親、初次見面的約會",
      "ex": "She's going on a blind date tonight.",
      "exzh": "她今晚要去相親。"
    },
    {
      "w": "compliment",
      "pos": "n.",
      "zh": "稱讚",
      "ex": "Thank you for the compliment.",
      "exzh": "謝謝你的稱讚。"
    },
    {
      "w": "nerdy",
      "pos": "adj.",
      "zh": "書呆子氣的",
      "ex": "I'm a little nerdy.",
      "exzh": "我有點書呆子。"
    },
    {
      "w": "neuroscience",
      "pos": "n.",
      "zh": "神經科學",
      "ex": "He's studying neuroscience.",
      "exzh": "他在讀神經科學。"
    },
    {
      "w": "potsticker",
      "pos": "n.",
      "zh": "鍋貼",
      "ex": "I'd like six potstickers.",
      "exzh": "我要六個鍋貼。"
    },
    {
      "w": "karaoke",
      "pos": "n.",
      "zh": "卡拉 OK",
      "ex": "Let's go to karaoke.",
      "exzh": "我們去唱卡拉 OK。"
    },
    {
      "w": "split the check",
      "pos": "phr.",
      "zh": "各付各的（分帳）",
      "ex": "Let's split the check.",
      "exzh": "我們各付各的吧。"
    },
    {
      "w": "go Dutch",
      "pos": "phr.",
      "zh": "各付各的（AA 制）",
      "ex": "We went Dutch on dinner.",
      "exzh": "我們晚餐各付各的。"
    },
    {
      "w": "icebreaker",
      "pos": "n.",
      "zh": "破冰話題",
      "ex": "A joke is a good icebreaker.",
      "exzh": "笑話是很好的破冰話題。"
    },
    {
      "w": "chemistry",
      "pos": "n.",
      "zh": "來電、默契",
      "ex": "We had great chemistry.",
      "exzh": "我們很有默契。"
    }
  ],
  "situations": [
    {
      "title": "😵 對方講笑話但你沒聽懂",
      "hear": {
        "en": "I'm so nerdy, I read research papers for fun. Don't judge me!",
        "zh": "（講得很快）我很書呆子，連休閒都在看論文。別笑我！",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, I missed that. Could you say it again?",
          "zh": "抱歉，我沒聽到，可以再說一次嗎？"
        },
        {
          "en": "Haha, I'm not judging. I love learning new things.",
          "zh": "哈哈，我沒在笑你，我也喜歡學新東西。"
        }
      ],
      "tip": "聽不懂笑話不要裝懂，直接請對方再說一次，反而更自然。"
    },
    {
      "title": "💬 話題冷掉了",
      "say": [
        {
          "en": "So, what do you like to do in your free time?",
          "zh": "那你空閒時喜歡做什麼？"
        },
        {
          "en": "Have you watched anything good lately?",
          "zh": "你最近有看什麼好看的嗎？"
        }
      ],
      "tip": "冷場時用開放式問題（what / how），比 yes/no 問題更能延續對話。"
    },
    {
      "title": "🧾 付帳時的禮貌",
      "hear": {
        "en": "The check, please. Who's paying?",
        "zh": "（對服務生）麻煩買單。這次誰付？"
      },
      "say": [
        {
          "en": "Do you mind if we split it?",
          "zh": "你介意各付各的嗎？"
        },
        {
          "en": "Let me get this one. You can get the next.",
          "zh": "這次我請，下次你請。"
        }
      ],
      "tip": "第一次約會 AA 制很常見，說清楚不尷尬，不用覺得小氣。"
    },
    {
      "title": "⏰ 想結束約會",
      "say": [
        {
          "en": "I had a really nice time, but I should head out.",
          "zh": "我今晚過得很開心，不過我該走了。"
        },
        {
          "en": "Thanks for dinner. Let's keep in touch.",
          "zh": "謝謝你的晚餐，保持聯絡。"
        }
      ],
      "tip": "不想再見面也可以誠實但禮貌地說 I had a nice time，不需要說謊。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "You're taller than I imagined.",
      "prompt": "對方說了什麼？",
      "options": [
        "你比我想像的高",
        "你比我矮",
        "你很像我朋友"
      ],
      "answer": 0,
      "note": "taller than I imagined = 比我想像中高。"
    },
    {
      "type": "選擇回應",
      "audio": "You're taller than I imagined.",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "No, I'm short.",
        "Haha, I'll take that as a compliment!",
        "Yes, you're imagined."
      ],
      "answer": 1,
      "note": "take it as a compliment = 當作稱讚。"
    },
    {
      "type": "聽懂意思",
      "audio": "I study neuroscience. Does that make me too nerdy?",
      "prompt": "他擔心什麼？",
      "options": [
        "自己太吵",
        "自己太窮",
        "自己太書呆子"
      ],
      "answer": 2,
      "note": "nerdy = 書呆子氣。"
    },
    {
      "type": "選擇回應",
      "audio": "Do you have any pets?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "Yeah, I have two cats.",
        "Yes, I'm a pet.",
        "I like Chinese food."
      ],
      "answer": 0,
      "note": "有養寵物就說 I have + 數量。"
    },
    {
      "type": "聽數字",
      "audio": "Okay, that comes to forty-two dollars. Should we split it?",
      "prompt": "總共多少錢？",
      "options": [
        "$14",
        "$42",
        "$402"
      ],
      "answer": 1,
      "note": "forty-two = 42；fourteen = 14。"
    },
    {
      "type": "選擇回應",
      "audio": "What's your go-to karaoke song?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "It's a microphone.",
        "I'm a song.",
        "I'm terrible, but maybe a pop song."
      ],
      "answer": 2,
      "note": "go-to = 最愛、最常用的。"
    },
    {
      "type": "對話理解",
      "audio": "I'm not very good at karaoke, but I love pop songs. How about you? What do you sing?",
      "prompt": "對方最喜歡什麼？",
      "options": [
        "流行歌",
        "古典音樂",
        "爵士樂"
      ],
      "answer": 0,
      "note": "pop songs = 流行歌。"
    },
    {
      "type": "對話理解",
      "audio": "I had a great time tonight. I have to head out soon, but let's do this again sometime.",
      "prompt": "對方的意思是？",
      "options": [
        "今晚很無聊",
        "很開心，希望再約",
        "要結束友誼"
      ],
      "answer": 1,
      "note": "let's do this again = 我們再約。"
    }
  ],
  "roleplay": [
    {
      "prompt": "Hey! You're taller than I imagined. Ready for some Chinese food?",
      "promptZh": "嘿！你比我想像得高。準備好吃中式料理了嗎？",
      "hint": "笑著回應稱讚，再說想點什麼",
      "expect": "compliment|thank|haha|ready|sure|yes|yeah|love|dumpling|potsticker",
      "model": "Haha, I'll take that as a compliment! I'm ready.",
      "modelZh": "哈哈，我當作稱讚。我準備好了。"
    },
    {
      "prompt": "What would you like to order?",
      "promptZh": "你想點什麼？",
      "hint": "說出想點的菜",
      "expect": "potsticker|dumpling|spring roll|noodle|rice|chicken|get|order|let'?s|i'?d like|i'?ll have",
      "model": "Let's get chicken potstickers and spring rolls.",
      "modelZh": "我們點雞肉鍋貼和春捲吧。"
    },
    {
      "prompt": "I study neuroscience. Does that make me too nerdy?",
      "promptZh": "我讀神經科學，這樣會不會太書呆子？",
      "hint": "稱讚他",
      "expect": "cool|not at all|interesting|awesome|nerdy|great|love",
      "model": "Not at all. That's actually really cool.",
      "modelZh": "一點也不，這其實很酷。"
    },
    {
      "prompt": "Do you have any pets?",
      "promptZh": "你有養寵物嗎？",
      "hint": "說你有養的動物",
      "expect": "cat|dog|pet|fish|rabbit|have|no",
      "model": "Yeah, I have two cats at home.",
      "modelZh": "有，我家有兩隻貓。"
    },
    {
      "prompt": "What's your go-to karaoke song?",
      "promptZh": "你最愛唱哪首卡拉 OK？",
      "hint": "說一首或說你唱得不好",
      "expect": "song|sing|karaoke|terrible|bad|love|pop|favorite|favourite",
      "model": "Honestly, I'm terrible at karaoke!",
      "modelZh": "老實說，我唱得很爛！"
    },
    {
      "prompt": "Should we split the check?",
      "promptZh": "我們要各付各的嗎？",
      "hint": "答應分帳",
      "expect": "sure|yes|yeah|split|fine|works|okay|ok|share|half",
      "model": "Sure, that works for me.",
      "modelZh": "好啊，我可以。"
    }
  ],
  "culture": [
    {
      "t": "第一次約會常常是咖啡或午餐",
      "d": "美國人第一次約會通常選比較輕鬆的場合，如咖啡店、餐廳，並約在公共場所，也會讓朋友知道你在哪裡，注意安全。"
    },
    {
      "t": "AA 制很普遍",
      "d": "美國年輕人約會時常 split the check（各付各的）或輪流請客。可以直接問 Do you want to split it?，不必覺得尷尬。"
    },
    {
      "t": "自嘲是破冰好方法",
      "d": "說 I'm so nerdy 或 I'm terrible at karaoke 這種輕鬆自嘲，能讓氣氛放鬆。不要貶低別人，只開自己玩笑。"
    },
    {
      "t": "尊重對方，誠實但溫和",
      "d": "不喜歡對方時，用 I had a nice time, but I don't think we're a match 這種誠實但溫和的話，比消失不回訊息有禮貌。"
    }
  ]
};
