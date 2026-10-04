// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "small-talk",
  "title": "Small Talk：在地鐵上交朋友",
  "en": "Small Talk & Making Friends",
  "emoji": "🚇",
  "goal": "舊金山地鐵售票機前問路、聊素食茶葉進出口生意、邀約攀岩與交換 IG 帳號。",
  "videos": [
    {
      "id": "WGoIoDuf83o",
      "title": "How to Make GREAT Small Talk – English Conversation Practice (mmmEnglish)"
    },
    {
      "id": "Qe5Flg_xXvo",
      "title": "How to Make Small Talk So Fun, It’s Hard to End the Conversation (Tom Bidgood)"
    },
    {
      "id": "9X4mQFDFutc",
      "title": "5-Minute English Conversation Practice: Small Talk with a Friend (English Together)"
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
      "name": "Sam",
      "zh": "新朋友 Sam",
      "avatar": "👨",
      "voice": "m2"
    }
  },
  "dialogues": [
    {
      "title": "在地鐵上認識新朋友",
      "where": "在地鐵上認識新朋友",
      "emoji": "🚇",
      "lines": [
        {
          "s": "Y",
          "en": "Excuse me, do you know how to use this ticket machine?",
          "zh": "不好意思，你知道怎麼用這個售票機嗎？"
        },
        {
          "s": "S",
          "en": "Yeah, just tap your card here. First time in San Francisco?",
          "zh": "沒問題，刷這裡即可。第一次來舊金山嗎？"
        },
        {
          "s": "Y",
          "en": "Yup, in town for a conference. I'm a teacher. What do you do?",
          "zh": "對，來參加研討會。我是老師，你呢？"
        },
        {
          "s": "S",
          "en": "I import African tea! I got hooked on it because I'm vegan. Hey, wanna go rock climbing later?",
          "zh": "我做非洲茶葉進出口！因為吃素愛上它。對了待會要一起攀岩嗎？"
        },
        {
          "s": "Y",
          "en": "Sounds fun! You can take my Instagram. My stop is next!",
          "zh": "聽起來很酷！你可以加我 IG，我下一站到了！"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "Do you know how to use this ticket machine?",
      "zh": "你知道怎麼用這個售票機嗎？"
    },
    {
      "en": "So it's your first time here in SF?",
      "zh": "所以這是你第一次來舊金山吧？"
    },
    {
      "en": "I'm just in town for a conference tomorrow.",
      "zh": "我來這裡參加一個明天的研討會。"
    },
    {
      "en": "What do you do? / What got you into that?",
      "zh": "你是做什麼工作的？是什麼讓你開始做這個的？"
    },
    {
      "en": "I am vegan so I enjoy cooking a lot.",
      "zh": "我吃素，所以我很喜歡煮飯。"
    },
    {
      "en": "I got so hooked on this tea.",
      "zh": "我迷上了這種茶。"
    },
    {
      "en": "It just went from there.",
      "zh": "事情就這樣發展起來了。"
    },
    {
      "en": "My stop is next. What a story!",
      "zh": "我下一站就到了。真是個精彩的故事呀！"
    },
    {
      "en": "I'm gonna meet up with my friends to go rock climbing later.",
      "zh": "我待會要和朋友一起去攀岩。"
    },
    {
      "en": "Do you wanna join us? I'll text you.",
      "zh": "你要不要加入我們？我可以等下傳訊息給你。"
    },
    {
      "en": "You can take my Instagram.",
      "zh": "你可以加我的 Instagram。"
    },
    {
      "en": "Cool beans! Take care and nice meeting you!",
      "zh": "好喔好喔！保重，很高興認識你！"
    }
  ],
  "hear": [
    {
      "en": "Yeah, just tap your card right here.",
      "zh": "對，把卡片在這裡感應一下就好。",
      "reply": "Oh, like this? Thank you so much!",
      "replyZh": "喔，像這樣嗎？真的很謝謝你！"
    },
    {
      "en": "Is this your first time in San Francisco?",
      "zh": "這是你第一次來舊金山嗎？",
      "reply": "Yup, I'm here for a conference.",
      "replyZh": "對，我是來參加研討會的。"
    },
    {
      "en": "What do you do?",
      "zh": "你是做什麼工作的？",
      "reply": "I'm a teacher. How about you?",
      "replyZh": "我是老師。你呢？"
    },
    {
      "en": "So what brings you to the city?",
      "zh": "那是什麼原因讓你來這座城市？",
      "reply": "Just visiting for a few days.",
      "replyZh": "只是來待幾天。"
    },
    {
      "en": "I import African tea for a living.",
      "zh": "我的工作是進口非洲茶葉。",
      "reply": "Wow, that sounds so interesting!",
      "replyZh": "哇，聽起來好有趣！"
    },
    {
      "en": "I'm vegan, so I love trying different teas.",
      "zh": "我吃全素，所以很愛嘗試不同的茶。",
      "reply": "That's cool. Do you have any recommendations?",
      "replyZh": "很酷，你有推薦的嗎？"
    },
    {
      "en": "Hey, wanna go rock climbing later?",
      "zh": "嘿，等一下要不要去攀岩？",
      "reply": "Sounds fun! I've never tried it before.",
      "replyZh": "聽起來好玩！我從來沒試過。"
    },
    {
      "en": "Do you have Instagram?",
      "zh": "你有 Instagram 嗎？",
      "reply": "Yeah, you can follow me. What's your handle?",
      "replyZh": "有，你可以追蹤我。你的帳號是什麼？"
    },
    {
      "en": "Which stop are you getting off at?",
      "zh": "你在哪一站下車？",
      "reply": "The next one. It was nice meeting you!",
      "replyZh": "下一站。很高興認識你！"
    },
    {
      "en": "Enjoy the rest of your trip!",
      "zh": "祝你接下來的旅程愉快！",
      "reply": "Thanks, you too!",
      "replyZh": "謝謝，你也是！"
    }
  ],
  "say": [
    {
      "en": "Excuse me, do you know how to use this ticket machine?",
      "zh": "不好意思，你知道這台售票機怎麼用嗎？"
    },
    {
      "en": "Yup, I'm in town for a conference.",
      "zh": "對，我來這裡參加研討會。"
    },
    {
      "en": "I'm a teacher. What do you do?",
      "zh": "我是老師，你做什麼工作？"
    },
    {
      "en": "That sounds really interesting!",
      "zh": "聽起來真的很有趣！"
    },
    {
      "en": "Sounds fun! Count me in.",
      "zh": "聽起來很好玩！算我一份。"
    },
    {
      "en": "You can take my Instagram.",
      "zh": "你可以加我的 Instagram。"
    },
    {
      "en": "My stop is next.",
      "zh": "我下一站要下車。"
    },
    {
      "en": "It was nice talking to you!",
      "zh": "很高興跟你聊天！"
    }
  ],
  "vocab": [
    {
      "w": "ticket machine",
      "pos": "n.",
      "zh": "售票機",
      "ex": "How do I use this ticket machine?",
      "exzh": "這台售票機怎麼用？"
    },
    {
      "w": "tap",
      "pos": "v.",
      "zh": "感應（刷卡）",
      "ex": "Just tap your card.",
      "exzh": "把卡感應一下就好。"
    },
    {
      "w": "conference",
      "pos": "n.",
      "zh": "研討會",
      "ex": "I'm here for a conference.",
      "exzh": "我來參加研討會。"
    },
    {
      "w": "import",
      "pos": "v.",
      "zh": "進口",
      "ex": "He imports tea from Africa.",
      "exzh": "他從非洲進口茶葉。"
    },
    {
      "w": "vegan",
      "pos": "n./adj.",
      "zh": "全素者（不吃任何動物製品）",
      "ex": "I'm vegan.",
      "exzh": "我吃全素。"
    },
    {
      "w": "rock climbing",
      "pos": "n.",
      "zh": "攀岩",
      "ex": "Do you want to go rock climbing?",
      "exzh": "你想去攀岩嗎？"
    },
    {
      "w": "count me in",
      "pos": "phr.",
      "zh": "算我一份",
      "ex": "Count me in for Friday!",
      "exzh": "週五算我一份！"
    },
    {
      "w": "handle",
      "pos": "n.",
      "zh": "社群帳號名稱",
      "ex": "What's your Instagram handle?",
      "exzh": "你的 IG 帳號是什麼？"
    },
    {
      "w": "stop",
      "pos": "n.",
      "zh": "（捷運、公車）站",
      "ex": "My stop is next.",
      "exzh": "我下一站下。"
    },
    {
      "w": "keep in touch",
      "pos": "phr.",
      "zh": "保持聯絡",
      "ex": "Let's keep in touch.",
      "exzh": "我們保持聯絡吧。"
    }
  ],
  "situations": [
    {
      "title": "😵 聽不懂對方的口音",
      "hear": {
        "en": "Oh, you're visiting for the conference? That's awesome, what field are you in?",
        "zh": "（講得很快）喔，你是來參加研討會的？太棒了，你是哪個領域的？",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you say that again more slowly?",
          "zh": "抱歉，可以說慢一點再說一次嗎？"
        },
        {
          "en": "I'm in education. I teach English.",
          "zh": "我是教育領域，我教英文。"
        }
      ],
      "tip": "Small talk 聽不懂就請對方重複，沒有人會覺得失禮。"
    },
    {
      "title": "🙅 不想給聯絡方式",
      "hear": {
        "en": "Can I get your phone number?",
        "zh": "可以給我你的電話號碼嗎？"
      },
      "say": [
        {
          "en": "I'd rather not give out my number, but we can connect on Instagram.",
          "zh": "我比較不想給電話，不過我們可以在 Instagram 上聯絡。"
        },
        {
          "en": "Sorry, I'm in a hurry. It was nice meeting you!",
          "zh": "抱歉，我趕時間。很高興認識你！"
        }
      ],
      "tip": "對陌生人保護個資是正常的，用社群帳號代替電話比較安全。"
    },
    {
      "title": "🧗 邀請你做你沒做過的事",
      "hear": {
        "en": "Wanna try rock climbing with us?",
        "zh": "想不想跟我們一起攀岩？"
      },
      "say": [
        {
          "en": "I've never done it, but I'd love to try!",
          "zh": "我沒試過，不過我很想試試看！"
        },
        {
          "en": "Maybe next time. I have plans tonight.",
          "zh": "下次吧，今晚我有安排了。"
        }
      ],
      "tip": "不想去可以說 Maybe next time，但最好給個理由，語氣友善。"
    },
    {
      "title": "🚇 錯過站了",
      "say": [
        {
          "en": "Oh no, I missed my stop! How do I get back?",
          "zh": "糟了，我坐過站了！要怎麼回去？"
        },
        {
          "en": "Which train goes in the other direction?",
          "zh": "哪班車是反方向的？"
        }
      ],
      "tip": "舊金山捷運 BART 看的是終點站名稱，不是方向。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "Just tap your card right here.",
      "prompt": "對方教你做什麼？",
      "options": [
        "在這裡感應卡片",
        "把現金放進去",
        "按下按鈕選票"
      ],
      "answer": 0,
      "note": "tap = 輕碰、感應。"
    },
    {
      "type": "選擇回應",
      "audio": "Is this your first time in San Francisco?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "Yes, it's a city.",
        "Yup, it's my first time.",
        "I'm a first."
      ],
      "answer": 1,
      "note": "回答 first time 即可。"
    },
    {
      "type": "選擇回應",
      "audio": "What do you do?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "I do it every day.",
        "I'm doing well.",
        "I'm a teacher."
      ],
      "answer": 2,
      "note": "What do you do? = 你是做什麼工作的？不是「你在做什麼」。"
    },
    {
      "type": "聽懂意思",
      "audio": "I import African tea for a living.",
      "prompt": "對方的工作是什麼？",
      "options": [
        "進口非洲茶葉",
        "種茶",
        "賣咖啡"
      ],
      "answer": 0,
      "note": "for a living = 以此維生。"
    },
    {
      "type": "聽懂意思",
      "audio": "I'm vegan, so I don't eat meat, eggs, or dairy.",
      "prompt": "vegan 是什麼意思？",
      "options": [
        "只是不吃牛肉",
        "不吃任何動物製品",
        "只吃海鮮"
      ],
      "answer": 1,
      "note": "vegan 比 vegetarian 更嚴格。"
    },
    {
      "type": "選擇回應",
      "audio": "Wanna go rock climbing later?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "No, I'm a rock.",
        "Yes, I'm climbing.",
        "Sounds fun! Count me in."
      ],
      "answer": 2,
      "note": "Sounds fun! 是很自然的答應。"
    },
    {
      "type": "對話理解",
      "audio": "I'm Sam. I import tea and I just moved here last year. Hey, do you want to grab coffee sometime?",
      "prompt": "Sam 提議什麼？",
      "options": [
        "找時間喝咖啡",
        "一起吃午餐",
        "一起搭火車"
      ],
      "answer": 0,
      "note": "grab coffee = 喝杯咖啡。"
    },
    {
      "type": "對話理解",
      "audio": "My stop is coming up next. It was great talking to you. You should follow me on Instagram!",
      "prompt": "他接下來要做什麼？",
      "options": [
        "繼續搭到終點",
        "下一站下車",
        "換車"
      ],
      "answer": 1,
      "note": "coming up next = 即將到。"
    }
  ],
  "roleplay": [
    {
      "prompt": "Yeah, just tap your card here. First time in San Francisco?",
      "promptZh": "對，在這裡感應卡片就好。第一次來舊金山嗎？",
      "hint": "道謝並回答",
      "expect": "thank|yes|yup|yeah|first|visit|conference",
      "model": "Thanks! Yup, I'm here for a conference.",
      "modelZh": "謝謝！對，我來參加研討會。"
    },
    {
      "prompt": "What do you do?",
      "promptZh": "你是做什麼工作的？",
      "hint": "說你的工作",
      "expect": "teacher|student|work|engineer|designer|nurse|manager|i'?m a|i am a",
      "model": "I'm a teacher.",
      "modelZh": "我是老師。"
    },
    {
      "prompt": "I import African tea. I'm vegan, so I got hooked on it.",
      "promptZh": "我進口非洲茶，因為我吃素，就迷上了。",
      "hint": "表示有興趣",
      "expect": "cool|interesting|awesome|wow|nice|tell me|tea",
      "model": "That sounds really interesting!",
      "modelZh": "聽起來真的很有趣！"
    },
    {
      "prompt": "Hey, wanna go rock climbing later?",
      "promptZh": "嘿，等一下要去攀岩嗎？",
      "hint": "答應或婉拒",
      "expect": "sounds|sure|yes|yeah|love|count me|maybe|next time|sorry",
      "model": "Sounds fun! Count me in.",
      "modelZh": "聽起來好玩！算我一份。"
    },
    {
      "prompt": "Do you have Instagram?",
      "promptZh": "你有 Instagram 嗎？",
      "hint": "答應交換帳號",
      "expect": "yes|yeah|sure|instagram|follow|handle|take",
      "model": "Yeah, you can take my Instagram.",
      "modelZh": "有，你可以加我的 Instagram。"
    },
    {
      "prompt": "Which stop are you getting off at?",
      "promptZh": "你要在哪一站下？",
      "hint": "說下一站",
      "expect": "next|stop|this|getting off",
      "model": "My stop is next. Nice meeting you!",
      "modelZh": "我下一站下，很高興認識你！"
    }
  ],
  "culture": [
    {
      "t": "陌生人的 small talk 是友善",
      "d": "在美國的捷運、電梯、排隊時，陌生人常會聊幾句，如天氣、旅行、工作。這代表友善，不一定要交朋友，點頭微笑回應就好。"
    },
    {
      "t": "What do you do? 問的是職業",
      "d": "美國人認識新朋友常問 What do you do?，意思是「你的工作是什麼」。學生可以說 I'm a student at ...。"
    },
    {
      "t": "加社群帳號比給電話自然",
      "d": "年輕人交換聯絡方式很常用 Instagram，說 Can I follow you? 或 You can take my IG 都很自然，也比電話安全。"
    },
    {
      "t": "素食者很常見",
      "d": "vegetarian 不吃肉，vegan 連蛋奶也不吃。美國餐廳的菜單常有 V（vegetarian）和 VG（vegan）標示。"
    }
  ]
};
