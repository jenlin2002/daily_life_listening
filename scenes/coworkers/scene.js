// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "coworkers",
  "title": "和同事閒聊",
  "en": "Water Cooler Chit-Chat",
  "emoji": "☕",
  "goal": "聊週末帶小孩去南瓜園、看道奇隊棒球比賽、養寵物與養育孩子的甜蜜混亂。",
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
  ]
};
