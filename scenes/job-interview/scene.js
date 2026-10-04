// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "job-interview",
  "title": "工作面試",
  "en": "Job Interview & Career",
  "emoji": "💼",
  "goal": "外商行銷經理面試（自我介紹、Amazon 廣告活動經驗、換跑道動機、薪資期待與 401k 福利）。",
  "videos": [
    {
      "id": "yBtMwyQFXwA",
      "title": "How to Interview for a Job in American English, Part 1 (Rachel’s English)"
    },
    {
      "id": "-AOQl94ZYn8",
      "title": "Common Questions You’ll Be Asked During an English Job Interview (Bob the Canadian)"
    },
    {
      "id": "0k0Uc9uAJwk",
      "title": "Job Interview in English – Questions and Answers (Sunshine English)"
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
  ],
  "hear": [
    {
      "en": "Thank you for coming in today. Please have a seat.",
      "zh": "謝謝你今天過來，請坐。",
      "reply": "Thank you for having me.",
      "replyZh": "謝謝你給我這個機會。"
    },
    {
      "en": "Can you briefly tell me more about yourself?",
      "zh": "你可以簡單介紹一下自己嗎？",
      "reply": "Sure. I have three years of marketing experience.",
      "replyZh": "當然，我有三年的行銷經驗。"
    },
    {
      "en": "Why are you interested in this position?",
      "zh": "你為什麼對這個職位有興趣？",
      "reply": "I'm looking for a role where I can grow.",
      "replyZh": "我在找一個能讓我成長的職位。"
    },
    {
      "en": "What are your biggest strengths?",
      "zh": "你最大的優點是什麼？",
      "reply": "I'm organized and I work well with a team.",
      "replyZh": "我很有條理，也很擅長團隊合作。"
    },
    {
      "en": "What's your biggest weakness?",
      "zh": "你最大的缺點是什麼？",
      "reply": "I sometimes take on too much, but I'm learning to prioritize.",
      "replyZh": "我有時候會攬太多事，但我正在學習排優先順序。"
    },
    {
      "en": "Tell me about a challenge you faced at work.",
      "zh": "說說你在工作上遇到的挑戰。",
      "reply": "Last year, I managed a campaign with a tight deadline.",
      "replyZh": "去年我負責一個時間很緊的活動。"
    },
    {
      "en": "Why did you leave your last job?",
      "zh": "你為什麼離開上一份工作？",
      "reply": "I wanted new challenges and more responsibility.",
      "replyZh": "我想要新的挑戰和更多責任。"
    },
    {
      "en": "What are your salary expectations?",
      "zh": "你的薪資期待是多少？",
      "reply": "Based on my experience, I'm looking at around eighty-five thousand.",
      "replyZh": "依我的經驗，我期待大約八萬五千元。"
    },
    {
      "en": "Do you have any questions for us?",
      "zh": "你有什麼問題想問我們嗎？",
      "reply": "Yes. What does a typical day look like in this role?",
      "replyZh": "有，這個職位平常的一天是怎麼樣的？"
    },
    {
      "en": "We'll be in touch by email next week.",
      "zh": "我們下週會用電子郵件跟你聯絡。",
      "reply": "Great. Thank you again for your time.",
      "replyZh": "太好了，再次謝謝你撥空。"
    }
  ],
  "say": [
    {
      "en": "Thank you for having me.",
      "zh": "謝謝你給我這個機會。"
    },
    {
      "en": "I have three years of marketing experience.",
      "zh": "我有三年的行銷經驗。"
    },
    {
      "en": "I managed ad campaigns on Amazon and Google.",
      "zh": "我負責過 Amazon 和 Google 上的廣告活動。"
    },
    {
      "en": "I'm a quick learner and I work well with others.",
      "zh": "我學得很快，也很擅長與人合作。"
    },
    {
      "en": "I'm looking for new challenges.",
      "zh": "我正在尋找新的挑戰。"
    },
    {
      "en": "I'm open to discussion.",
      "zh": "我願意討論。"
    },
    {
      "en": "What does a typical day look like in this role?",
      "zh": "這個職位平常的一天是怎麼樣的？"
    },
    {
      "en": "Thank you for your time. I look forward to hearing from you.",
      "zh": "謝謝你撥空，期待你的回覆。"
    }
  ],
  "vocab": [
    {
      "w": "resume",
      "pos": "n.",
      "zh": "履歷",
      "ex": "I brought a copy of my resume.",
      "exzh": "我帶了一份履歷。"
    },
    {
      "w": "position / role",
      "pos": "n.",
      "zh": "職位",
      "ex": "I'm applying for this position.",
      "exzh": "我在應徵這個職位。"
    },
    {
      "w": "experience",
      "pos": "n.",
      "zh": "經驗",
      "ex": "I have two years of experience.",
      "exzh": "我有兩年經驗。"
    },
    {
      "w": "strength",
      "pos": "n.",
      "zh": "優點、強項",
      "ex": "My biggest strength is teamwork.",
      "exzh": "我最大的強項是團隊合作。"
    },
    {
      "w": "weakness",
      "pos": "n.",
      "zh": "缺點",
      "ex": "My weakness is perfectionism.",
      "exzh": "我的缺點是完美主義。"
    },
    {
      "w": "campaign",
      "pos": "n.",
      "zh": "（行銷）活動",
      "ex": "I led a social media campaign.",
      "exzh": "我帶領過一個社群行銷活動。"
    },
    {
      "w": "salary",
      "pos": "n.",
      "zh": "薪水",
      "ex": "What are your salary expectations?",
      "exzh": "你的薪資期待是多少？"
    },
    {
      "w": "benefits",
      "pos": "n.",
      "zh": "福利",
      "ex": "What benefits do you offer?",
      "exzh": "你們提供什麼福利？"
    },
    {
      "w": "401(k)",
      "pos": "n.",
      "zh": "美國的退休金制度，公司可能會提撥",
      "ex": "The company matches your 401(k).",
      "exzh": "公司會配合你的 401(k) 提撥。"
    },
    {
      "w": "follow up",
      "pos": "phr. v.",
      "zh": "後續追蹤（如寄感謝信）",
      "ex": "I'll follow up next week.",
      "exzh": "我下週會再跟進。"
    }
  ],
  "situations": [
    {
      "title": "😵 面試官講太快",
      "hear": {
        "en": "Can you walk me through a time when you had to deal with a tight deadline and a difficult stakeholder?",
        "zh": "（講得很快）可以說說一次你在緊迫截止日期、又遇到難搞的利害關係人的經驗嗎？",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you repeat the question, please?",
          "zh": "抱歉，可以請你再說一次問題嗎？"
        },
        {
          "en": "Just to make sure I understand, you're asking about a time I handled pressure, right?",
          "zh": "為了確認我沒聽錯，你是問我處理壓力的經驗，對嗎？"
        }
      ],
      "tip": "面試時請對方重說是正常的，確認後再回答，比答非所問好。"
    },
    {
      "title": "🤯 腦中一片空白",
      "say": [
        {
          "en": "That's a great question. Let me think for a second.",
          "zh": "這是個好問題，讓我想一下。"
        },
        {
          "en": "Could I come back to that question later?",
          "zh": "我可以稍後再回答這個問題嗎？"
        }
      ],
      "tip": "停頓幾秒比亂答好。用 Let me think 爭取時間很自然。"
    },
    {
      "title": "💰 被問薪資期待",
      "hear": {
        "en": "What salary range are you looking for?",
        "zh": "你期待的薪資範圍是多少？"
      },
      "say": [
        {
          "en": "Based on my experience, I'm looking at eighty-five thousand, but I'm open to discussion.",
          "zh": "依我的經驗，我期待八萬五，但我願意討論。"
        },
        {
          "en": "Could you share the salary range for this role?",
          "zh": "可以先告訴我這個職位的薪資範圍嗎？"
        }
      ],
      "tip": "先研究該職位的行情，給一個範圍並說 open to discussion。"
    },
    {
      "title": "📧 面試後的感謝信",
      "say": [
        {
          "en": "Thank you for the opportunity to interview.",
          "zh": "謝謝你給我面試的機會。"
        },
        {
          "en": "I'm very excited about this role and look forward to hearing from you.",
          "zh": "我對這個職位非常期待，等候你的回覆。"
        }
      ],
      "tip": "面試後 24 小時內寄一封簡短感謝信，在美國是很加分的習慣。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "Can you briefly tell me more about yourself?",
      "prompt": "面試官在問什麼？",
      "options": [
        "請簡單自我介紹",
        "請說說你的缺點",
        "請說說你的薪水"
      ],
      "answer": 0,
      "note": "briefly = 簡短地。"
    },
    {
      "type": "選擇回應",
      "audio": "Why are you interested in this position?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "Because I'm interested.",
        "I'm looking for a role where I can grow.",
        "I'm in a position."
      ],
      "answer": 1,
      "note": "回答時要說出對公司或職位的興趣。"
    },
    {
      "type": "聽懂意思",
      "audio": "What are your biggest strengths?",
      "prompt": "面試官在問什麼？",
      "options": [
        "你最大的缺點",
        "你最喜歡的食物",
        "你最大的優點"
      ],
      "answer": 2,
      "note": "strengths = 優點。"
    },
    {
      "type": "選擇回應",
      "audio": "What are your salary expectations?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "Based on my experience, around eighty-five thousand.",
        "I'm expecting a salary.",
        "I don't want money."
      ],
      "answer": 0,
      "note": "回答具體數字加理由。"
    },
    {
      "type": "聽數字",
      "audio": "We can offer a base salary of ninety thousand dollars.",
      "prompt": "底薪是多少？",
      "options": [
        "$19,000",
        "$90,000",
        "$9,000"
      ],
      "answer": 1,
      "note": "ninety = 90；nineteen = 19。"
    },
    {
      "type": "對話理解",
      "audio": "For the past three years, I've worked as a marketing manager managing ad campaigns on Amazon and Google, and I increased sales by twenty percent.",
      "prompt": "她的成績是什麼？",
      "options": [
        "減少了 20%",
        "增加了 3%",
        "業績增加了 20%"
      ],
      "answer": 2,
      "note": "increase = 增加。"
    },
    {
      "type": "對話理解",
      "audio": "The position includes health insurance, a 401(k) match, and fifteen days of paid vacation.",
      "prompt": "福利中沒有提到什麼？",
      "options": [
        "免費午餐",
        "健康保險",
        "帶薪假"
      ],
      "answer": 0,
      "note": "只提到保險、401(k) 和帶薪假。"
    },
    {
      "type": "聽懂意思",
      "audio": "We'll be in touch by email next week.",
      "prompt": "面試官的意思是？",
      "options": [
        "今天就給結果",
        "下週會寄電子郵件通知你",
        "你要自己打給她"
      ],
      "answer": 1,
      "note": "be in touch = 聯絡。"
    }
  ],
  "roleplay": [
    {
      "prompt": "Hi! Thank you for coming in today. Please have a seat.",
      "promptZh": "嗨！謝謝你今天過來，請坐。",
      "hint": "道謝並打招呼",
      "expect": "thank|thanks|hi|hello|nice to meet|pleasure|having me",
      "model": "Thank you for having me.",
      "modelZh": "謝謝你給我這個機會。"
    },
    {
      "prompt": "Can you briefly tell me more about yourself?",
      "promptZh": "可以簡短介紹一下你自己嗎？",
      "hint": "說出經歷",
      "expect": "marketing|experience|years|worked|work|manager|student|graduated|i'?m a|i have",
      "model": "I have three years of marketing experience.",
      "modelZh": "我有三年的行銷經驗。"
    },
    {
      "prompt": "Why are you interested in this position?",
      "promptZh": "你為什麼對這個職位有興趣？",
      "hint": "說你的動機",
      "expect": "grow|challenge|learn|interested|passion|opportunity|company|role",
      "model": "I'm looking for a role where I can grow.",
      "modelZh": "我在找一個能成長的職位。"
    },
    {
      "prompt": "What are your biggest strengths?",
      "promptZh": "你最大的優點是什麼？",
      "hint": "說一兩個優點",
      "expect": "strength|organized|team|quick|learner|detail|hard|creative|work well|communicat",
      "model": "I'm organized and I work well with a team.",
      "modelZh": "我很有條理，也擅長團隊合作。"
    },
    {
      "prompt": "What are your salary expectations?",
      "promptZh": "你的薪資期待是多少？",
      "hint": "說數字並保留彈性",
      "expect": "thousand|\\d|salary|open|discussion|based on|range",
      "model": "I'm looking at eighty-five thousand, but I'm open to discussion.",
      "modelZh": "我期待八萬五，但我願意討論。"
    },
    {
      "prompt": "Do you have any questions for us?",
      "promptZh": "你有問題想問我們嗎？",
      "hint": "問一個問題",
      "expect": "what|how|when|could|can|team|role|day|growth|benefits",
      "model": "What does a typical day look like in this role?",
      "modelZh": "這個職位平常的一天是怎麼樣的？"
    }
  ],
  "culture": [
    {
      "t": "面試要準時、握手、微笑",
      "d": "美國面試要提早 5～10 分鐘到，進門時微笑、眼神接觸、堅定握手。禮貌但不需要過度謙卑。"
    },
    {
      "t": "自我介紹用 STAR 方法",
      "d": "回答經驗題可用 STAR：Situation（情境）、Task（任務）、Action（行動）、Result（成果），並用數字說明成果，例如 increased sales by 20%。"
    },
    {
      "t": "不能問年齡、婚姻",
      "d": "美國法律禁止面試官問年齡、婚姻、宗教等私人問題，你也不需要回答。可以禮貌說 I'd prefer to focus on my qualifications。"
    },
    {
      "t": "薪水與福利",
      "d": "美國薪水常以年薪（annual salary）表示。福利包括 health insurance、401(k)、paid time off (PTO)，這些都可以在 offer 前問清楚。"
    }
  ]
};
