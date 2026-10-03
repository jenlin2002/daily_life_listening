// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "meeting-teacher",
  "title": "和老師約時間",
  "en": "Meeting a Teacher",
  "emoji": "👩‍🏫",
  "goal": "學會預約教授的辦公室時間、請教作業與考試、請求延期，並禮貌地請老師寫推薦信，同時懂得開頭與結尾的禮貌用語",
  "videos": [
    {
      "id": "JsMFJ1Y_JyI",
      "title": "How to talk to your professor, what to say to teachers and instructors（UVicLibraries）"
    },
    {
      "id": "3HEIVBCr450",
      "title": "Professor's Office Hours（mabeasley2003）"
    },
    {
      "id": "5wxOQnEC9R8",
      "title": "How To Get An Extension on an Assignment（College Conversations With Dr. Janice Fedor）"
    }
  ],
  "speakers": {
    "S": {
      "name": "Professor",
      "zh": "教授",
      "avatar": "👨‍🏫",
      "voice": "m3"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♀️",
      "voice": "f2"
    },
    "A": {
      "name": "Department Assistant",
      "zh": "系辦助理",
      "avatar": "👩",
      "voice": "f"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "預約辦公室時間",
      "where": "系辦公室櫃台",
      "emoji": "🗓️",
      "lines": [
        {
          "s": "A",
          "en": "Hi, can I help you?",
          "zh": "嗨，需要幫忙嗎？"
        },
        {
          "s": "Y",
          "en": "Hi. I'd like to make an appointment with Professor Miller, please.",
          "zh": "嗨，我想預約 Miller 教授的時間。"
        },
        {
          "s": "A",
          "en": "Sure. Is this about a class?",
          "zh": "好的，是關於課程的事嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, I'm in his Economics 101 class, and I have a question about the midterm.",
          "zh": "是的，我修他的經濟學概論，我有一個期中考的問題。"
        },
        {
          "s": "A",
          "en": "His office hours are Tuesdays and Thursdays from two to four. You can just drop in.",
          "zh": "他的辦公室時間是週二、週四下午兩點到四點，你可以直接過去。"
        },
        {
          "s": "Y",
          "en": "Can I book a specific time instead? I have class at two on Tuesday.",
          "zh": "我可以預約特定時間嗎？我週二兩點有課。"
        },
        {
          "s": "A",
          "en": "Of course. How about Thursday at two thirty?",
          "zh": "當然。週四兩點半怎麼樣？"
        },
        {
          "s": "Y",
          "en": "That works for me. Thank you!",
          "zh": "我可以，謝謝！"
        },
        {
          "s": "A",
          "en": "Great. I've put you down for two thirty on Thursday. His office is in room 310.",
          "zh": "好的，我幫你登記週四兩點半，他的辦公室是 310 室。"
        },
        {
          "s": "Y",
          "en": "Perfect. Thanks for your help.",
          "zh": "太好了，謝謝你的幫忙。"
        }
      ]
    },
    {
      "title": "辦公室時間：請教作業與考試",
      "where": "教授的辦公室",
      "emoji": "💬",
      "lines": [
        {
          "s": "Y",
          "en": "Hi, Professor Miller. Thank you for meeting with me.",
          "zh": "嗨，Miller 教授，謝謝你願意見我。"
        },
        {
          "s": "S",
          "en": "Of course. Come on in. What can I help you with?",
          "zh": "當然，請進。有什麼我可以幫你的嗎？"
        },
        {
          "s": "Y",
          "en": "I'm having trouble understanding the supply and demand graph from last week's lecture.",
          "zh": "我對上週課堂上的供給與需求圖有點不懂。"
        },
        {
          "s": "S",
          "en": "Okay. Which part is confusing?",
          "zh": "好的，哪個部分讓你困惑？"
        },
        {
          "s": "Y",
          "en": "I don't understand why the price goes up when the supply goes down.",
          "zh": "我不懂為什麼供給減少時價格會上升。"
        },
        {
          "s": "S",
          "en": "Let me draw it. If there are fewer products, people compete to buy them, so the price rises.",
          "zh": "我畫給你看。如果商品變少，大家會搶著買，所以價格就上漲。"
        },
        {
          "s": "Y",
          "en": "Oh, I see. Could you explain it one more time with an example?",
          "zh": "喔，我懂了。可以再用例子說明一次嗎？"
        },
        {
          "s": "S",
          "en": "Sure. Think about concert tickets. When there are only a few left, they become more expensive.",
          "zh": "好的。想想演唱會門票，只剩幾張時就會變貴。"
        },
        {
          "s": "Y",
          "en": "That makes sense now. Do you have any tips for studying for the midterm?",
          "zh": "現在懂了。你對期中考的準備有什麼建議嗎？"
        },
        {
          "s": "S",
          "en": "Review the practice problems at the end of each chapter, and come to the study session on Wednesday.",
          "zh": "複習每一章後面的練習題，並參加週三的讀書會。"
        }
      ]
    },
    {
      "title": "請求延期與請老師寫推薦信",
      "where": "教授辦公室與信件",
      "emoji": "📝",
      "lines": [
        {
          "s": "Y",
          "en": "Professor, I'd like to ask for an extension on the essay. I was sick last week.",
          "zh": "教授，我想請求論文延期，我上週生病了。"
        },
        {
          "s": "S",
          "en": "I'm sorry to hear that. How much more time do you need?",
          "zh": "很遺憾聽到這件事。你還需要多少時間？"
        },
        {
          "s": "Y",
          "en": "Could I submit it on Monday instead of Friday?",
          "zh": "我可以週一交，而不是週五嗎？"
        },
        {
          "s": "S",
          "en": "That should be fine. Do you have a doctor's note?",
          "zh": "應該沒問題。你有醫生證明嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, I can email it to you today.",
          "zh": "有，我今天可以寄給你。"
        },
        {
          "s": "S",
          "en": "Great. Please send it, and we'll consider it done.",
          "zh": "好的，請寄給我，就當作沒問題。"
        },
        {
          "s": "Y",
          "en": "Thank you so much. One more thing. I'm applying for an internship, and I was wondering if you could write me a letter of recommendation.",
          "zh": "非常謝謝。還有一件事，我正在申請實習，不知道你是否可以幫我寫推薦信。"
        },
        {
          "s": "S",
          "en": "I'd be happy to. When is the deadline?",
          "zh": "我很樂意。截止日是什麼時候？"
        },
        {
          "s": "Y",
          "en": "It's due on the twentieth. I can send you my resume and the details by email.",
          "zh": "截止日是二十號。我可以用 email 把履歷和細節寄給你。"
        },
        {
          "s": "S",
          "en": "Please do, and remind me a week before. Thanks for asking early.",
          "zh": "請寄給我，並在一週前提醒我。謝謝你提早問。"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "I'd like to make an appointment with Professor Miller.",
      "zh": "我想預約 Miller 教授的時間。"
    },
    {
      "en": "When are his office hours?",
      "zh": "他的辦公室時間是什麼時候？"
    },
    {
      "en": "Can I just drop in during office hours?",
      "zh": "辦公室時間我可以直接過去嗎？"
    },
    {
      "en": "Thank you for meeting with me.",
      "zh": "謝謝你願意見我。"
    },
    {
      "en": "I have a question about the assignment.",
      "zh": "我對這份作業有個問題。"
    },
    {
      "en": "I'm having trouble understanding this concept.",
      "zh": "我對這個概念不太理解。"
    },
    {
      "en": "Could you explain it one more time?",
      "zh": "可以再說明一次嗎？"
    },
    {
      "en": "Could you give me an example?",
      "zh": "可以給我一個例子嗎？"
    },
    {
      "en": "Do you have any tips for the midterm?",
      "zh": "你對期中考有什麼建議嗎？"
    },
    {
      "en": "What should I focus on?",
      "zh": "我該把重點放在哪裡？"
    },
    {
      "en": "Could I ask for an extension?",
      "zh": "我可以請求延期嗎？"
    },
    {
      "en": "I was sick last week.",
      "zh": "我上週生病了。"
    },
    {
      "en": "I can email you a doctor's note.",
      "zh": "我可以用 email 寄醫生證明給你。"
    },
    {
      "en": "Could I submit it on Monday instead?",
      "zh": "我可以改成週一交嗎？"
    },
    {
      "en": "I missed class because I had a fever.",
      "zh": "我因為發燒沒來上課。"
    },
    {
      "en": "Could I make up the quiz?",
      "zh": "我可以補考小考嗎？"
    },
    {
      "en": "Would you be willing to write me a letter of recommendation?",
      "zh": "你願意幫我寫推薦信嗎？"
    },
    {
      "en": "The deadline is the twentieth.",
      "zh": "截止日是二十號。"
    },
    {
      "en": "I'll send you my resume by email.",
      "zh": "我會用 email 寄履歷給你。"
    },
    {
      "en": "Thank you for your time and help.",
      "zh": "謝謝你的時間與幫忙。"
    }
  ],
  "hear": [
    {
      "en": "Is this about a class?",
      "zh": "是關於課程的事嗎？",
      "reply": "Yes, I'm in his Economics class.",
      "replyZh": "是的，我修他的經濟學。"
    },
    {
      "en": "His office hours are Tuesdays and Thursdays from two to four.",
      "zh": "他的辦公室時間是週二和週四兩點到四點。",
      "reply": "Can I book a specific time?",
      "replyZh": "我可以預約特定時間嗎？"
    },
    {
      "en": "How about Thursday at two thirty?",
      "zh": "週四兩點半怎麼樣？",
      "reply": "That works for me. Thank you!",
      "replyZh": "我可以，謝謝！"
    },
    {
      "en": "What can I help you with?",
      "zh": "有什麼我可以幫你的？",
      "reply": "I have a question about the midterm.",
      "replyZh": "我對期中考有個問題。"
    },
    {
      "en": "Which part is confusing?",
      "zh": "哪個部分讓你困惑？",
      "reply": "I don't understand the second graph.",
      "replyZh": "我不懂第二張圖。"
    },
    {
      "en": "Did that make sense?",
      "zh": "這樣說你懂了嗎？",
      "reply": "Yes, it makes sense now. Thank you!",
      "replyZh": "懂了，現在清楚了，謝謝！"
    },
    {
      "en": "How much more time do you need?",
      "zh": "你還需要多少時間？",
      "reply": "Could I have until Monday?",
      "replyZh": "可以給我到週一嗎？"
    },
    {
      "en": "Do you have a doctor's note?",
      "zh": "你有醫生證明嗎？",
      "reply": "Yes, I'll email it to you today.",
      "replyZh": "有，我今天寄給你。"
    },
    {
      "en": "When is the deadline for the recommendation letter?",
      "zh": "推薦信的截止日是什麼時候？",
      "reply": "It's due on the twentieth.",
      "replyZh": "截止日是二十號。"
    },
    {
      "en": "Please send me your resume and remind me a week before.",
      "zh": "請把履歷寄給我，並在一週前提醒我。",
      "reply": "I will. Thank you so much!",
      "replyZh": "我會的，非常謝謝你！"
    }
  ],
  "say": [
    {
      "en": "Hi, I'd like to schedule a meeting with the professor.",
      "zh": "嗨，我想和教授約個時間。"
    },
    {
      "en": "Are you available on Thursday afternoon?",
      "zh": "你週四下午有空嗎？"
    },
    {
      "en": "Is it okay if I come a few minutes early?",
      "zh": "我提早幾分鐘到可以嗎？"
    },
    {
      "en": "I don't understand question number three.",
      "zh": "我不懂第三題。"
    },
    {
      "en": "Could you look at my draft and give me feedback?",
      "zh": "你可以看看我的草稿並給我意見嗎？"
    },
    {
      "en": "I'm sorry, I'll be late to class tomorrow.",
      "zh": "抱歉，我明天上課會遲到。"
    },
    {
      "en": "May I turn in the assignment a day late?",
      "zh": "我可以晚一天交作業嗎？"
    },
    {
      "en": "Would you mind writing a recommendation letter for me?",
      "zh": "你介意幫我寫一封推薦信嗎？"
    },
    {
      "en": "Thank you for your time, Professor.",
      "zh": "謝謝你的時間，教授。"
    },
    {
      "en": "Sorry, could you say that again?",
      "zh": "不好意思，可以再說一次嗎？"
    }
  ],
  "vocab": [
    {
      "w": "office hours",
      "pos": "n.",
      "zh": "教授的辦公室時間",
      "ex": "The professor holds office hours on Tuesdays.",
      "exzh": "教授每週二有辦公室時間。"
    },
    {
      "w": "appointment",
      "pos": "n.",
      "zh": "預約",
      "ex": "I made an appointment for Thursday.",
      "exzh": "我預約了週四。"
    },
    {
      "w": "assignment",
      "pos": "n.",
      "zh": "作業",
      "ex": "When is the assignment due?",
      "exzh": "作業什麼時候要交？"
    },
    {
      "w": "midterm",
      "pos": "n.",
      "zh": "期中考",
      "ex": "The midterm is next week.",
      "exzh": "期中考在下週。"
    },
    {
      "w": "deadline",
      "pos": "n.",
      "zh": "截止日期",
      "ex": "The deadline is Friday.",
      "exzh": "截止日是週五。"
    },
    {
      "w": "extension",
      "pos": "n.",
      "zh": "延期",
      "ex": "Can I get an extension?",
      "exzh": "我可以延期嗎？"
    },
    {
      "w": "doctor's note",
      "pos": "n.",
      "zh": "醫生證明",
      "ex": "Please bring a doctor's note.",
      "exzh": "請帶醫生證明。"
    },
    {
      "w": "feedback",
      "pos": "n.",
      "zh": "意見回饋",
      "ex": "Thank you for your feedback.",
      "exzh": "謝謝你的意見。"
    },
    {
      "w": "draft",
      "pos": "n.",
      "zh": "草稿",
      "ex": "I wrote the first draft.",
      "exzh": "我寫了第一份草稿。"
    },
    {
      "w": "recommendation letter",
      "pos": "n.",
      "zh": "推薦信",
      "ex": "I need a recommendation letter.",
      "exzh": "我需要一封推薦信。"
    },
    {
      "w": "resume",
      "pos": "n.",
      "zh": "履歷",
      "ex": "I'll send you my resume.",
      "exzh": "我會把履歷寄給你。"
    },
    {
      "w": "make up",
      "pos": "phr. v.",
      "zh": "補（考試、課）",
      "ex": "Can I make up the quiz?",
      "exzh": "我可以補考小考嗎？"
    }
  ],
  "situations": [
    {
      "title": "😵 教授講太快、用專有名詞",
      "hear": {
        "en": "So the marginal cost curve intersects the demand curve at the equilibrium point, which determines the market price.",
        "zh": "（講得很快）所以邊際成本曲線和需求曲線交在均衡點，那決定市場價格。",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you explain that in simpler words?",
          "zh": "抱歉，可以用比較簡單的說法解釋嗎？"
        },
        {
          "en": "Could you draw it for me?",
          "zh": "可以畫給我看嗎？"
        }
      ],
      "tip": "聽不懂時請教授畫圖、舉例，或把關鍵字寫在紙上。教授希望學生來問，主動請教不丟臉。"
    },
    {
      "title": "😷 生病沒辦法交作業",
      "say": [
        {
          "en": "Professor, I was sick, and I couldn't finish the assignment. Could I have an extension?",
          "zh": "教授，我生病了，沒辦法完成作業，可以給我延期嗎？"
        },
        {
          "en": "I can send a doctor's note by email.",
          "zh": "我可以用 email 寄醫生證明。"
        }
      ],
      "tip": "越早說越好，不要等到截止日之後才解釋。提供證明（醫生證明）和你想交的新日期，比較容易被接受。"
    },
    {
      "title": "✉️ 想用 email 約時間",
      "say": [
        {
          "en": "Dear Professor Miller, I'd like to meet with you about the midterm. Are you available on Thursday?",
          "zh": "親愛的 Miller 教授，我想和你談期中考的事，你週四有空嗎？"
        },
        {
          "en": "Thank you for your time. Best regards, Melissa.",
          "zh": "謝謝你的時間，敬祝順心，Melissa。"
        }
      ],
      "tip": "email 開頭用 Dear Professor + 姓氏，內容簡短說明目的與可以的時間，結尾用 Best regards 或 Sincerely 加名字。"
    },
    {
      "title": "🕒 要遲到或必須缺課",
      "say": [
        {
          "en": "Professor, I have a doctor's appointment on Wednesday, so I'll miss class.",
          "zh": "教授，我週三有看醫生的預約，所以會缺課。"
        },
        {
          "en": "Could you tell me what I'll miss, or could I borrow someone's notes?",
          "zh": "可以告訴我會錯過什麼嗎？或是我可以借別人的筆記嗎？"
        }
      ],
      "tip": "事先通知比事後解釋好。回來後主動問同學要筆記，並向教授確認有沒有需要補交的作業。"
    },
    {
      "title": "🙏 請老師寫推薦信",
      "hear": {
        "en": "Why don't you tell me a little about the program?",
        "zh": "你為什麼不跟我說明一下這個計畫呢？"
      },
      "say": [
        {
          "en": "It's an internship in marketing. I'd like to highlight my group project from your class.",
          "zh": "這是行銷方面的實習，我想強調我在你課堂上的小組專案。"
        },
        {
          "en": "I'll send you my resume and all the details.",
          "zh": "我會把履歷和所有細節寄給你。"
        }
      ],
      "tip": "請老師寫推薦信，至少提前三到四週，並附上履歷、申請職位說明和截止日。事後別忘了寫感謝信。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "His office hours are Tuesdays and Thursdays from two to four.",
      "prompt": "教授什麼時候有辦公室時間？",
      "options": [
        "週二、週四下午兩點到四點",
        "週一、週三下午兩點到四點",
        "週五上午"
      ],
      "answer": 0,
      "note": "office hours 是教授固定開放學生來談話的時間。"
    },
    {
      "type": "選擇回應",
      "audio": "How about Thursday at two thirty?",
      "prompt": "你可以，最適合怎麼回答？",
      "options": [
        "That works for me. Thank you!",
        "It's on Thursday.",
        "I'm two thirty."
      ],
      "answer": 0,
      "note": "That works for me. 是「這個時間對我可以」。"
    },
    {
      "type": "選擇回應",
      "audio": "What can I help you with?",
      "prompt": "你要問期中考，最適合怎麼回答？",
      "options": [
        "I have a question about the midterm.",
        "I help you with it.",
        "It's in room 310."
      ],
      "answer": 0,
      "note": "What can I help you with? 是「我可以幫你什麼？」。"
    },
    {
      "type": "聽懂意思",
      "audio": "Which part is confusing?",
      "prompt": "教授在問什麼？",
      "options": [
        "哪個部分讓你困惑",
        "你為什麼遲到",
        "你要不要延期"
      ],
      "answer": 0,
      "note": "confusing 是令人困惑的。"
    },
    {
      "type": "聽數字",
      "audio": "Please come to my office, room three-ten, on Thursday at two thirty.",
      "prompt": "辦公室和時間是什麼？",
      "options": [
        "310 室，週四兩點半",
        "130 室，週四三點二十",
        "310 室，週二兩點半"
      ],
      "answer": 0,
      "note": "three-ten 是 310，two thirty 是 2:30。"
    },
    {
      "type": "聽懂意思",
      "audio": "That should be fine. Do you have a doctor's note?",
      "prompt": "教授說了什麼？",
      "options": [
        "可以延期，但需要醫生證明",
        "不能延期",
        "直接給零分"
      ],
      "answer": 0,
      "note": "doctor's note 是醫生證明。"
    },
    {
      "type": "選擇回應",
      "audio": "How much more time do you need?",
      "prompt": "你想延到週一，最適合怎麼回答？",
      "options": [
        "Could I have until Monday?",
        "I need a doctor.",
        "It's due on Friday."
      ],
      "answer": 0,
      "note": "until Monday 是到週一為止。"
    },
    {
      "type": "聽懂意思",
      "audio": "Please send me your resume and remind me a week before the deadline.",
      "prompt": "教授要你做什麼？",
      "options": [
        "寄履歷，並在截止前一週提醒他",
        "當面把履歷交給他",
        "不用再提醒他"
      ],
      "answer": 0,
      "note": "remind me 是提醒我。"
    },
    {
      "type": "對話理解",
      "audio": "Hi, Professor Miller. Thank you for meeting with me. I'm having trouble understanding the supply and demand graph from last week.",
      "prompt": "學生來做什麼？",
      "options": [
        "請教上週講的供需圖",
        "請求延期",
        "約時間"
      ],
      "answer": 0,
      "note": "supply and demand 是供給與需求。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "Professor, I was sick last week. Could I submit the essay on Monday instead of Friday? I can email you a doctor's note.",
      "prompt": "學生想要什麼？",
      "options": [
        "論文延期到週一，並附醫生證明",
        "提前交論文",
        "換一個題目"
      ],
      "answer": 0,
      "note": "instead of 是取代、而不是。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Hi, can I help you?",
      "promptZh": "嗨，需要幫忙嗎？",
      "hint": "說你想預約教授",
      "expect": "appointment|schedule|meet|professor|office hours|talk to",
      "model": "Hi. I'd like to make an appointment with Professor Miller.",
      "modelZh": "嗨，我想預約 Miller 教授的時間。"
    },
    {
      "prompt": "Is this about a class?",
      "promptZh": "是關於課程的事嗎？",
      "hint": "說是，並說你要問什麼",
      "expect": "yes|class|midterm|question|assignment|essay|grade",
      "model": "Yes, I have a question about the midterm.",
      "modelZh": "是的，我對期中考有個問題。"
    },
    {
      "prompt": "How about Thursday at two thirty?",
      "promptZh": "週四兩點半怎麼樣？",
      "hint": "說可以並道謝",
      "expect": "works|fine|great|perfect|okay|ok|sure|thank",
      "model": "That works for me. Thank you!",
      "modelZh": "我可以，謝謝！"
    },
    {
      "prompt": "Come on in. What can I help you with?",
      "promptZh": "請進。有什麼我可以幫你的？",
      "hint": "道謝，說你的問題",
      "expect": "thank|question|understand|trouble|confus|help|midterm|assignment",
      "model": "Thank you for meeting with me. I'm having trouble understanding the graph.",
      "modelZh": "謝謝你願意見我，我對這張圖有點不懂。"
    },
    {
      "prompt": "Which part is confusing?",
      "promptZh": "哪個部分讓你困惑？",
      "hint": "說明你不懂的地方",
      "expect": "don'?t understand|confus|why|how|part|graph|question|second|third",
      "model": "I don't understand why the price goes up when the supply goes down.",
      "modelZh": "我不懂為什麼供給減少時價格會上升。"
    },
    {
      "prompt": "Does that make sense now?",
      "promptZh": "現在懂了嗎？",
      "hint": "說懂了，並道謝",
      "expect": "yes|yeah|makes sense|got it|understand|thank|thanks|clear",
      "model": "Yes, it makes sense now. Thank you!",
      "modelZh": "懂了，現在清楚了，謝謝！"
    },
    {
      "prompt": "I'm sorry you were sick. How much more time do you need?",
      "promptZh": "很遺憾你生病了。你還需要多少時間？",
      "hint": "說想延到哪一天",
      "expect": "monday|friday|until|days?|week|could i|extension|submit",
      "model": "Could I submit it on Monday instead?",
      "modelZh": "我可以改成週一交嗎？"
    },
    {
      "prompt": "Of course. Anything else?",
      "promptZh": "當然可以。還有別的嗎？",
      "hint": "請他寫推薦信",
      "expect": "recommend|letter|reference|write|wondering|would you",
      "model": "Yes, would you be willing to write me a letter of recommendation?",
      "modelZh": "有，你願意幫我寫推薦信嗎？"
    }
  ],
  "culture": [
    {
      "t": "教授的辦公室時間",
      "d": "美國的教授每週都有固定的辦公室時間（office hours），學生可以直接去問問題，或預約特定時間。不用覺得打擾，這是教授的工作，也是學習的重要資源。"
    },
    {
      "t": "稱呼與禮貌",
      "d": "一般稱教授為 Professor + 姓氏（Professor Miller）。寫 email 開頭用 Dear Professor Miller，結尾用 Best regards 或 Sincerely 加名字。有些教授讓學生直接叫名字，聽他自己的說法就好。"
    },
    {
      "t": "請求延期要及早說明",
      "d": "想延期作業，越早說越好，簡短說明原因並提供證明（如醫生證明），還要提出你想交的新日期。如果是臨時狀況，不要隱瞞或拖到最後一刻才說。"
    },
    {
      "t": "主動請教是加分",
      "d": "美國的課堂鼓勵提問，到辦公室請教不代表你笨，反而讓教授知道你認真。去之前先整理問題，帶上作業或筆記，會更有效率。"
    },
    {
      "t": "推薦信怎麼請",
      "d": "請教授寫推薦信要提前三到四週，附上履歷、申請項目與截止日，並說明為什麼想請這位教授寫。教授同意後記得提前提醒，寄出後寫一封感謝信。"
    }
  ]
};
