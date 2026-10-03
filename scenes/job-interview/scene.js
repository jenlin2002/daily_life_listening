// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "job-interview",
  "title": "工作面試",
  "en": "Job Interview & Career",
  "emoji": "💼",
  "goal": "外商行銷經理面試（自我介紹、Amazon 廣告活動經驗、換跑道動機、薪資期待與 401k 福利）。",
  "speakers": {
    "Y": {
      "name": "Me",
      "zh": "我",
      "avatar": "🙋‍♀️",
      "voice": "f"
    },
    "S": {
      "name": "Interviewer Susan",
      "zh": "面試官 Susan",
      "avatar": "👩",
      "voice": "f2"
    }
  },
  "dialogues": [
    {
      "title": "去外商應徵行銷主管",
      "where": "去外商應徵行銷主管",
      "emoji": "💼",
      "lines": [
        {
          "s": "S",
          "en": "Hi! Can you briefly tell me more about yourself?",
          "zh": "嗨！可以簡單介紹一下你自己嗎？"
        },
        {
          "s": "Y",
          "en": "For sure. In the past 3 years, I worked as a marketing manager monitoring ad campaigns on Amazon and Google.",
          "zh": "當然，過去三年我擔任行銷經理，負責監控亞馬遜與Google的廣告活動。"
        },
        {
          "s": "S",
          "en": "What are your salary expectations?",
          "zh": "最後，你的期待薪資是多少？"
        },
        {
          "s": "Y",
          "en": "Based on my last job, I am looking at a salary of $85,000. I'm open to discussion.",
          "zh": "根據我上一份工作的職責，我期待在 85,000 美元左右，抱持開放討論態度。"
        },
        {
          "s": "S",
          "en": "Everything sounds good. We will be in touch through email!",
          "zh": "聽起來都很不錯，我們後續會通過 Email 與您聯繫！"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "You must be Susan!",
      "zh": "你就是蘇珊吧！"
    },
    {
      "en": "We'll learn more about your professional experience.",
      "zh": "我們會更深入了解你的專業經驗。"
    },
    {
      "en": "Can you briefly tell me more about yourself?",
      "zh": "可以簡單介紹一下你自己嗎？"
    },
    {
      "en": "My main responsibilities include monitoring paid ad campaigns on Amazon.",
      "zh": "我的主要工作包括監控亞馬遜上的付費廣告活動。"
    },
    {
      "en": "Can you share an example of a marketing campaign you worked on?",
      "zh": "能分享一個你曾做的行銷活動案例嗎？"
    },
    {
      "en": "A Black Friday sales campaign. We hit that target.",
      "zh": "一個黑色星期五促銷活動，我們達成了那個目標。"
    },
    {
      "en": "How will you add value to our company in the first 90 days if you are hired?",
      "zh": "如果你被錄取，在前90天內如何為我們公司帶來價值？"
    },
    {
      "en": "What are your salary expectations?",
      "zh": "你的期待薪資是多少？"
    },
    {
      "en": "Based on my last job, I am looking at a salary of $85,000.",
      "zh": "根據我上一份工作的薪資，我希望薪資能在 85,000 美元左右。"
    },
    {
      "en": "Our benefits include 3 insurances: Medical, dental, and eye care.",
      "zh": "我們的福利包括三種保險：醫療、牙科和眼部保健。"
    },
    {
      "en": "We also include 401k and match up employee contributions up to 3%.",
      "zh": "我們有 401k 福利，並提供至多 3% 的員工自付對等撥提。"
    },
    {
      "en": "Every Tuesday, we have Lunch and Learn. We will be in touch through email.",
      "zh": "每週二我們有「午餐與學習」活動。我們會透過 Email 與您保持聯繫。"
    }
  ]
};
