// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "news-chat",
  "title": "聊新聞與時事",
  "en": "News & Current Affairs",
  "emoji": "📰",
  "goal": "聊物價通膨飆升（汽油加滿變貴）、選舉民調、媒體聳動報導與華爾街房市飆漲。",
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
  ]
};
