// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "heart-to-heart",
  "title": "心靈對話：陪室友聊心事",
  "en": "Heart-to-Heart Talk",
  "emoji": "☕",
  "goal": "客廳深夜心靈傾訴、失戀療傷安慰、價值觀不合與「天涯何處無芳草」鼓勵。",
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
    }
  },
  "dialogues": [
    {
      "title": "室友說想跟男友分手",
      "where": "室友說想跟男友分手",
      "emoji": "☕",
      "lines": [
        {
          "s": "Y",
          "en": "Hey Daisy! Why are you so quiet today? Is everything alright?",
          "zh": "嘿 Daisy！今天怎麼這麼安靜？還好嗎？"
        },
        {
          "s": "S",
          "en": "My boyfriend and I broke up. We were just not on the same page anymore.",
          "zh": "我和男友分手了。我們很多想法已經不在同一個頻率上了。"
        },
        {
          "s": "Y",
          "en": "Take your time to heal. Plus, there are plenty of fish in the sea! It's a blessing in disguise.",
          "zh": "慢慢療傷，天涯何處無芳草！有時候結束是化妝的祝福。"
        },
        {
          "s": "S",
          "en": "Thanks, girl! Maybe movie night tonight with popcorn?",
          "zh": "謝謝妳！今晚要不要吃爆米花看電影？"
        },
        {
          "s": "Y",
          "en": "I'll get the popcorn ready! You're the best!",
          "zh": "我來準備爆米花！妳最棒了！"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "Is everything alright?",
      "zh": "一切都還好嗎？"
    },
    {
      "en": "My boyfriend and I just broke up.",
      "zh": "我和我男朋友剛分手了。"
    },
    {
      "en": "I'm still processing everything too.",
      "zh": "我也還在沉澱這一切。"
    },
    {
      "en": "I'm sorry to hear that. / Take all the time you need.",
      "zh": "我很遺憾聽到這個消息 / 給自己足夠的時間修復。"
    },
    {
      "en": "We were not on the same page.",
      "zh": "我們在很多事情上都沒有共同的想法。"
    },
    {
      "en": "If you think it was the right thing to do, it's for the better.",
      "zh": "如果你認為這是正確的決定，這樣對未來比較好。"
    },
    {
      "en": "There are plenty of fish in the sea.",
      "zh": "天涯何處無芳草。（機會還很多）"
    },
    {
      "en": "Get out and mingle!",
      "zh": "出去和人交際吧！"
    },
    {
      "en": "The silver lining is that it gives you time to focus on yourself.",
      "zh": "好處是這讓你有時間專注在自己身上。"
    },
    {
      "en": "Sometimes endings are blessings in disguise.",
      "zh": "有時候結束其實是化妝的祝福。"
    },
    {
      "en": "She'll come out of it.",
      "zh": "她會走出來的。（從悲傷中恢復）"
    },
    {
      "en": "Is there anything I can do for you? Maybe movie night tonight?",
      "zh": "有什麼我可以幫忙的嗎？要不要今晚來個電影之夜？"
    }
  ]
};
