// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "news-chat",
  "title": "聊新聞與時事",
  "en": "News & Current Affairs",
  "emoji": "📰",
  "goal": "聊物價通膨飆升（汽油加滿變貴）、選舉民調、媒體聳動報導與華爾街房市飆漲。",
  "videos": [
    {
      "id": "-6Pob2fk6wY",
      "title": "The News – English Conversation (Pocket Passport)"
    },
    {
      "id": "tJ-aDpTppXA",
      "title": "News – Good News, Bad News – Easy Conversation (LearnAmericanEnglish)"
    },
    {
      "id": "CDtQuehc74I",
      "title": "How to Talk About the News in English – Real Conversation Practice (Real Talk English)"
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
      "name": "Roommate Marry",
      "zh": "室友 Marry",
      "avatar": "👩",
      "voice": "f2"
    }
  },
  "dialogues": [
    {
      "title": "跟室友看電視聊新聞與通膨",
      "where": "跟室友看電視聊新聞與通膨",
      "emoji": "📰",
      "lines": [
        {
          "s": "S",
          "en": "I'm just so down in the dumps looking at the news and gas prices.",
          "zh": "看新聞和油價飆漲，心情真的好沮喪。"
        },
        {
          "s": "Y",
          "en": "Watching too much news will only make you depressed. Most of it is pure sensationalism.",
          "zh": "看太多新聞只會讓妳憂鬱，大部分都是聳動報導。"
        },
        {
          "s": "S",
          "en": "True. You seem to know a lot about housing prices though!",
          "zh": "也是。不過妳好像對房價也很了解嘛！"
        },
        {
          "s": "Y",
          "en": "Oops... caught red-handed! Tell you what, let's grab coffee. My treat!",
          "zh": "哎呀被抓包了！這樣吧，我們去買杯咖啡，我請客！"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "Just a little down in the dumps.",
      "zh": "只是有點情緒低落 / 心情沮喪。"
    },
    {
      "en": "Prices have been skyrocketing.",
      "zh": "物價一直飆升。"
    },
    {
      "en": "It used to cost 20 dollars to fill up.",
      "zh": "以前加滿油箱只要 20 美元。"
    },
    {
      "en": "I was looking at the polls.",
      "zh": "我剛剛在看民調 / 調查問卷。"
    },
    {
      "en": "It will have a negative impact on the economy.",
      "zh": "這會對經濟產生負面影響。"
    },
    {
      "en": "Most of it is not even objective news reporting, it's just sensationalism.",
      "zh": "大多數根本不是客觀新聞報導，只是聳動煽情。"
    },
    {
      "en": "You are only bringing yourself down by reading up on this stuff.",
      "zh": "你光是讀這些東西，只是讓自己心情更低落。"
    },
    {
      "en": "Look at the housing market. Prices have gone up three times.",
      "zh": "看看房地產市場，房價都漲了三倍。"
    },
    {
      "en": "Caught red-handed.",
      "zh": "當場被抓包（做壞事或尷尬時）。"
    },
    {
      "en": "How about we head out and grab a coffee? My treat!",
      "zh": "我們出去喝杯咖啡怎麼樣？我請客！"
    }
  ],
  "hear": [
    {
      "en": "Did you see the news this morning?",
      "zh": "你今天早上看新聞了嗎？",
      "reply": "Not yet. What happened?",
      "replyZh": "還沒，發生什麼事了？"
    },
    {
      "en": "Gas prices went up again.",
      "zh": "油價又漲了。",
      "reply": "Seriously? It was already expensive.",
      "replyZh": "真的嗎？本來就很貴了。"
    },
    {
      "en": "I'm so down in the dumps looking at the news.",
      "zh": "看新聞讓我心情好低落。",
      "reply": "Maybe you should take a break from it.",
      "replyZh": "也許你該休息一下，別看了。"
    },
    {
      "en": "Everything is getting more expensive.",
      "zh": "每樣東西都越來越貴。",
      "reply": "I know. Groceries cost so much more now.",
      "replyZh": "我知道，現在買菜貴好多。"
    },
    {
      "en": "Do you think the election will be close?",
      "zh": "你覺得這次選舉會很接近嗎？",
      "reply": "I'm not sure. The polls keep changing.",
      "replyZh": "不確定，民調一直在變。"
    },
    {
      "en": "The news makes everything sound so dramatic.",
      "zh": "新聞把所有事都講得好誇張。",
      "reply": "True. A lot of it is just sensationalism.",
      "replyZh": "沒錯，很多都是譁眾取寵。"
    },
    {
      "en": "You seem to know a lot about housing prices.",
      "zh": "你好像很懂房價。",
      "reply": "Oops, you caught me!",
      "replyZh": "哎呀，被你發現了！"
    },
    {
      "en": "Housing prices on Wall Street are skyrocketing.",
      "zh": "房價飆漲得很誇張。",
      "reply": "That's crazy. Nobody can afford a house.",
      "replyZh": "太瘋狂了，沒人買得起房子。"
    },
    {
      "en": "Do you want to turn off the TV?",
      "zh": "要不要把電視關掉？",
      "reply": "Yes, let's. We don't need more bad news.",
      "replyZh": "好，關掉吧，我們不需要更多壞消息。"
    },
    {
      "en": "Let's go get some coffee.",
      "zh": "我們去喝咖啡吧。",
      "reply": "Sure! My treat.",
      "replyZh": "好！我請客。"
    }
  ],
  "say": [
    {
      "en": "Did you see the news this morning?",
      "zh": "你今天早上看新聞了嗎？"
    },
    {
      "en": "Gas prices went up again.",
      "zh": "油價又漲了。"
    },
    {
      "en": "Watching too much news will make you depressed.",
      "zh": "看太多新聞會讓人沮喪。"
    },
    {
      "en": "Most of it is just sensationalism.",
      "zh": "大多數都是譁眾取寵。"
    },
    {
      "en": "Everything is getting more expensive.",
      "zh": "每樣東西都越來越貴。"
    },
    {
      "en": "I read that online. I'm not sure it's true.",
      "zh": "我在網路上看到的，但不確定是不是真的。"
    },
    {
      "en": "Let's turn off the TV and grab a coffee.",
      "zh": "我們把電視關掉去喝咖啡吧。"
    },
    {
      "en": "My treat!",
      "zh": "我請客！"
    }
  ],
  "vocab": [
    {
      "w": "headline",
      "pos": "n.",
      "zh": "新聞標題",
      "ex": "The headline caught my eye.",
      "exzh": "那個標題吸引了我。"
    },
    {
      "w": "gas prices",
      "pos": "n.",
      "zh": "油價（美國說 gas）",
      "ex": "Gas prices are rising.",
      "exzh": "油價在上漲。"
    },
    {
      "w": "inflation",
      "pos": "n.",
      "zh": "通貨膨脹",
      "ex": "Inflation is making everything expensive.",
      "exzh": "通膨讓每樣東西都變貴。"
    },
    {
      "w": "poll",
      "pos": "n.",
      "zh": "民調",
      "ex": "The latest polls show a close race.",
      "exzh": "最新民調顯示雙方很接近。"
    },
    {
      "w": "election",
      "pos": "n.",
      "zh": "選舉",
      "ex": "The election is next month.",
      "exzh": "選舉在下個月。"
    },
    {
      "w": "sensationalism",
      "pos": "n.",
      "zh": "譁眾取寵的報導",
      "ex": "A lot of news is sensationalism.",
      "exzh": "很多新聞都是譁眾取寵。"
    },
    {
      "w": "fake news",
      "pos": "n.",
      "zh": "假新聞",
      "ex": "Be careful about fake news.",
      "exzh": "要小心假新聞。"
    },
    {
      "w": "skyrocket",
      "pos": "v.",
      "zh": "飆升",
      "ex": "Housing prices skyrocketed.",
      "exzh": "房價飆漲。"
    },
    {
      "w": "down in the dumps",
      "pos": "phr.",
      "zh": "心情低落",
      "ex": "I've been down in the dumps lately.",
      "exzh": "我最近心情低落。"
    },
    {
      "w": "caught red-handed",
      "pos": "phr.",
      "zh": "當場被抓到",
      "ex": "Oops, I got caught red-handed!",
      "exzh": "糟了，被當場抓到！"
    }
  ],
  "situations": [
    {
      "title": "😵 聽不懂新聞用語",
      "hear": {
        "en": "The Fed is hiking interest rates again to fight inflation.",
        "zh": "（講得很快）聯準會又要升息來對抗通膨。",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, what does hiking rates mean?",
          "zh": "抱歉，升息是什麼意思？"
        },
        {
          "en": "So everything will cost more?",
          "zh": "所以什麼東西都會更貴嗎？"
        }
      ],
      "tip": "新聞用語很多縮寫（the Fed 是聯準會），不懂就問，朋友通常很樂意解釋。"
    },
    {
      "title": "🙅 不想談政治",
      "hear": {
        "en": "Who are you voting for?",
        "zh": "你要投給誰？"
      },
      "say": [
        {
          "en": "I'd rather not talk about politics.",
          "zh": "我比較不想談政治。"
        },
        {
          "en": "Let's talk about something lighter. Did you see the game?",
          "zh": "我們聊點輕鬆的吧，你有看比賽嗎？"
        }
      ],
      "tip": "美國人通常不問別人投票給誰，在朋友之間也要小心，可以禮貌轉移話題。"
    },
    {
      "title": "🤔 不確定新聞是真的假的",
      "say": [
        {
          "en": "Where did you read that?",
          "zh": "你在哪裡看到的？"
        },
        {
          "en": "Let's check a reliable source first.",
          "zh": "我們先查一下可靠的消息來源吧。"
        }
      ],
      "tip": "reliable source 是「可靠來源」，轉傳之前先確認。"
    },
    {
      "title": "🏠 聊到房價太貴",
      "hear": {
        "en": "Rent is crazy these days.",
        "zh": "現在房租真的貴到不行。"
      },
      "say": [
        {
          "en": "I know. Maybe we should look for a roommate.",
          "zh": "我知道，也許我們該找個室友。"
        },
        {
          "en": "At least we split the rent.",
          "zh": "至少我們可以分攤房租。"
        }
      ],
      "tip": "房租、油價、物價是美國人最愛抱怨的三件事，附和一句很有禮貌。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "Gas prices went up again.",
      "prompt": "新聞說了什麼？",
      "options": [
        "油價又漲了",
        "油價下降",
        "公車票漲價"
      ],
      "answer": 0,
      "note": "went up = 上漲；gas 是汽油（不是瓦斯）。"
    },
    {
      "type": "選擇回應",
      "audio": "Did you see the news this morning?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "Yes, I'm the news.",
        "Not yet. What happened?",
        "I saw a morning."
      ],
      "answer": 1,
      "note": "還沒看就問「發生什麼事」。"
    },
    {
      "type": "聽懂意思",
      "audio": "I'm so down in the dumps looking at the news.",
      "prompt": "她的心情如何？",
      "options": [
        "很開心",
        "很生氣",
        "心情低落"
      ],
      "answer": 2,
      "note": "down in the dumps = 沮喪。"
    },
    {
      "type": "選擇回應",
      "audio": "Everything is getting more expensive.",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "I know. Groceries cost so much more now.",
        "Yes, it's expensive.",
        "No, it's cheap."
      ],
      "answer": 0,
      "note": "附和對方，用具體例子。"
    },
    {
      "type": "聽數字",
      "audio": "The price of gas is now four dollars and fifty cents a gallon.",
      "prompt": "汽油一加侖多少錢？",
      "options": [
        "$14.50",
        "$4.50",
        "$4.05"
      ],
      "answer": 1,
      "note": "four fifty = 4.50；一加侖約 3.8 公升。"
    },
    {
      "type": "聽懂意思",
      "audio": "A lot of the news is just sensationalism.",
      "prompt": "她的意思是？",
      "options": [
        "新聞都是真的",
        "新聞很無聊",
        "很多新聞只是譁眾取寵"
      ],
      "answer": 2,
      "note": "sensationalism = 譁眾取寵。"
    },
    {
      "type": "對話理解",
      "audio": "Housing prices have skyrocketed. A small apartment now costs twice what it did five years ago.",
      "prompt": "房價發生什麼事？",
      "options": [
        "漲了一倍",
        "下跌一半",
        "沒有變化"
      ],
      "answer": 0,
      "note": "twice = 兩倍。"
    },
    {
      "type": "對話理解",
      "audio": "Tell you what, let's turn off the TV and grab coffee. My treat.",
      "prompt": "她提議什麼？",
      "options": [
        "繼續看電視",
        "關電視去喝咖啡，她請客",
        "各付各的"
      ],
      "answer": 1,
      "note": "My treat = 我請客。"
    }
  ],
  "roleplay": [
    {
      "prompt": "Did you see the news this morning?",
      "promptZh": "你今天早上看新聞了嗎？",
      "hint": "說有沒有看，或問發生什麼事",
      "expect": "not yet|no|yes|yeah|what happened|saw|news|haven'?t",
      "model": "Not yet. What happened?",
      "modelZh": "還沒，發生什麼事了？"
    },
    {
      "prompt": "Gas prices went up again.",
      "promptZh": "油價又漲了。",
      "hint": "附和",
      "expect": "again|seriously|really|expensive|crazy|wow|know|up",
      "model": "Seriously? It was already expensive!",
      "modelZh": "真的嗎？本來就很貴了！"
    },
    {
      "prompt": "I'm so down in the dumps looking at the news.",
      "promptZh": "看新聞讓我心情低落。",
      "hint": "給建議",
      "expect": "break|stop|too much|depress|sensational|turn off|take a|watch less",
      "model": "Watching too much news will only make you depressed.",
      "modelZh": "看太多新聞只會讓你更沮喪。"
    },
    {
      "prompt": "Do you think the news is accurate?",
      "promptZh": "你覺得新聞準確嗎？",
      "hint": "說你的看法",
      "expect": "sensational|drama|true|not sure|accurate|fake|reliable|exaggerat|source",
      "model": "Most of it is just sensationalism.",
      "modelZh": "大多數只是譁眾取寵。"
    },
    {
      "prompt": "You seem to know a lot about housing prices!",
      "promptZh": "你好像很懂房價！",
      "hint": "笑著承認",
      "expect": "oops|caught|haha|yeah|guess|read|know|interested",
      "model": "Oops, caught red-handed!",
      "modelZh": "糟了，被當場抓到！"
    },
    {
      "prompt": "Do you want to turn off the TV?",
      "promptZh": "要不要把電視關掉？",
      "hint": "提議去喝咖啡",
      "expect": "coffee|yes|sure|let'?s|turn off|my treat|grab",
      "model": "Tell you what, let's grab coffee. My treat!",
      "modelZh": "這樣吧，我們去喝咖啡，我請客！"
    }
  ],
  "culture": [
    {
      "t": "美國用 gas，不是 gasoline",
      "d": "美國人說 gas（汽油）。油價用「每加侖」（gallon）計算，1 加侖約 3.8 公升。Gas station 是加油站。"
    },
    {
      "t": "新聞立場很鮮明",
      "d": "不同電視台（如 CNN、Fox News）立場不同，所以大家喜歡說 Where did you hear that? 來判斷來源。看新聞要看多個來源。"
    },
    {
      "t": "不要輕易問政治立場",
      "d": "在美國，問別人投給誰是比較敏感的，朋友之間也常避談。如果想聊，可以先問 Do you follow politics?。"
    },
    {
      "t": "通膨與物價是日常話題",
      "d": "雞蛋、牛奶、房租漲價是常聽到的抱怨。附和 I know, right? 就是最自然的回應。"
    }
  ]
};
