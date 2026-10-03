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
  ]
};
