// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "invitations",
  "title": "生活分享與邀約",
  "en": "Life Updates & Invites",
  "emoji": "🗓️",
  "goal": "聊論文進度、下班搭車塞車買外帶、朋友邀約週末去海灘爬山、禮貌委婉拒絕邀約（Take a rain check）。",
  "videos": [
    {
      "id": "UFnQ0gxef2A",
      "title": "Conversational English – Invitations (American English)"
    },
    {
      "id": "KwuKFEsDNE0",
      "title": "Accepting and Declining Invitations in English (Learn Authentic English)"
    },
    {
      "id": "qV3Hp7Ecpok",
      "title": "Accepting or Rejecting Invitations in English (Learn English with Cambridge)"
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
    }
  },
  "dialogues": [
    {
      "title": "跟室友的週五閒聊與邀約",
      "where": "跟室友的週五閒聊與邀約",
      "emoji": "🗓️",
      "lines": [
        {
          "s": "S",
          "en": "How was school? Did you hand in the paper?",
          "zh": "今天上課如何？論文交了嗎？"
        },
        {
          "s": "Y",
          "en": "Finally handed it in! But train ran late so it took forever.",
          "zh": "終於交了！但火車大誤點花了好久才回家。"
        },
        {
          "s": "S",
          "en": "We are going to the beach tomorrow. Wanna join us?",
          "zh": "我們明天要去海邊，要一起來嗎？"
        },
        {
          "s": "Y",
          "en": "I'd love to, but I have another deadline tomorrow so I'll take a rain check!",
          "zh": "超想去，但我明天還有另一個報告要交，這次先改天囉！"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "How was work? / How was school?",
      "zh": "工作如何？ / 學校怎麼樣？"
    },
    {
      "en": "I had lunch late because I was in a meeting.",
      "zh": "我午餐吃得比較晚，因為在開會。"
    },
    {
      "en": "The train ran late so it took me extra long to get back.",
      "zh": "火車延誤了，所以我花了更長的時間才回來。"
    },
    {
      "en": "I finally handed in my essays.",
      "zh": "我終於交了論文報告。"
    },
    {
      "en": "What is your plan for this weekend?",
      "zh": "你週末有什麼計劃嗎？"
    },
    {
      "en": "We're going on a hike tomorrow. Would you like to come?",
      "zh": "我們明天要去爬山。你想一起來嗎？"
    },
    {
      "en": "If you're free, you should come hang with us!",
      "zh": "如果你有空，你應該一起加入我們！"
    },
    {
      "en": "Thanks for inviting me but I'm going to have to take a rain check this time.",
      "zh": "感謝你的邀請，但這次我得改天再跟你約（婉拒）。"
    },
    {
      "en": "I would love to but I have to get this essay turned in tomorrow.",
      "zh": "我很想去，但我明天得交這篇論文。"
    },
    {
      "en": "I'm so sorry but I won't be able to make it this time. Have fun!",
      "zh": "非常抱歉，但這次我沒辦法參加。祝你們玩得開心！"
    }
  ],
  "hear": [
    {
      "en": "How was school today?",
      "zh": "今天學校怎麼樣？",
      "reply": "Pretty good. I finally handed in my paper!",
      "replyZh": "還不錯，我終於交了報告！"
    },
    {
      "en": "Did you hand in the paper?",
      "zh": "你報告交了嗎？",
      "reply": "Yes, it took forever because the train ran late.",
      "replyZh": "交了，但火車誤點，花了好久。"
    },
    {
      "en": "What are you doing this weekend?",
      "zh": "你這個週末要做什麼？",
      "reply": "Nothing much yet. Why, what's up?",
      "replyZh": "還沒特別安排，怎麼了？"
    },
    {
      "en": "We're going to the beach tomorrow. Wanna join us?",
      "zh": "我們明天要去海邊，要一起來嗎？",
      "reply": "I'd love to, but I have a deadline tomorrow.",
      "replyZh": "我很想去，但我明天有截止日。"
    },
    {
      "en": "Do you want to go hiking on Sunday?",
      "zh": "星期天要不要去爬山？",
      "reply": "Sounds great! What time are we leaving?",
      "replyZh": "聽起來很棒！幾點出發？"
    },
    {
      "en": "We're leaving around nine in the morning.",
      "zh": "我們大概早上九點出發。",
      "reply": "Okay, I'll set my alarm.",
      "replyZh": "好，我會設鬧鐘。"
    },
    {
      "en": "Can you bring some snacks?",
      "zh": "你可以帶一些零食嗎？",
      "reply": "Sure, I'll bring chips and fruit.",
      "replyZh": "好，我帶洋芋片和水果。"
    },
    {
      "en": "Are you free on Friday night?",
      "zh": "週五晚上你有空嗎？",
      "reply": "I think so. Let me check my calendar.",
      "replyZh": "我想有，讓我看一下行事曆。"
    },
    {
      "en": "Maybe we can do it another time.",
      "zh": "也許我們可以改天再約。",
      "reply": "Yes, let's. I'll take a rain check.",
      "replyZh": "好啊，下次再約。"
    },
    {
      "en": "No worries! Next time then!",
      "zh": "沒關係！那下次吧！",
      "reply": "Thanks for understanding!",
      "replyZh": "謝謝你的體諒！"
    }
  ],
  "say": [
    {
      "en": "I finally handed in my paper!",
      "zh": "我終於交報告了！"
    },
    {
      "en": "The train ran late, so it took forever.",
      "zh": "火車誤點，所以花了好久。"
    },
    {
      "en": "Sounds great! Count me in.",
      "zh": "聽起來很棒！算我一份。"
    },
    {
      "en": "I'd love to, but I have a deadline tomorrow.",
      "zh": "我很想去，但我明天有截止日。"
    },
    {
      "en": "Can I take a rain check?",
      "zh": "可以下次再約嗎？"
    },
    {
      "en": "What time are we leaving?",
      "zh": "我們幾點出發？"
    },
    {
      "en": "What should I bring?",
      "zh": "我該帶什麼？"
    },
    {
      "en": "Thanks for inviting me!",
      "zh": "謝謝你邀請我！"
    }
  ],
  "vocab": [
    {
      "w": "hand in",
      "pos": "phr. v.",
      "zh": "交出（作業、報告）",
      "ex": "I handed in my homework.",
      "exzh": "我交了作業。"
    },
    {
      "w": "deadline",
      "pos": "n.",
      "zh": "截止日期",
      "ex": "I have a deadline tomorrow.",
      "exzh": "我明天有截止日。"
    },
    {
      "w": "run late",
      "pos": "phr.",
      "zh": "誤點、遲到",
      "ex": "The bus is running late.",
      "exzh": "公車誤點了。"
    },
    {
      "w": "take a rain check",
      "pos": "phr.",
      "zh": "改天再約（婉拒邀請）",
      "ex": "Can I take a rain check?",
      "exzh": "我可以改天再約嗎？"
    },
    {
      "w": "join",
      "pos": "v.",
      "zh": "加入、參加",
      "ex": "Do you want to join us?",
      "exzh": "你想加入我們嗎？"
    },
    {
      "w": "hiking",
      "pos": "n.",
      "zh": "健行、爬山",
      "ex": "We're going hiking on Sunday.",
      "exzh": "我們星期天去健行。"
    },
    {
      "w": "free",
      "pos": "adj.",
      "zh": "有空的",
      "ex": "Are you free tonight?",
      "exzh": "你今晚有空嗎？"
    },
    {
      "w": "bring",
      "pos": "v.",
      "zh": "帶來",
      "ex": "Can you bring some drinks?",
      "exzh": "你可以帶些飲料嗎？"
    },
    {
      "w": "plans",
      "pos": "n.",
      "zh": "計畫、安排",
      "ex": "Do you have plans this weekend?",
      "exzh": "你週末有安排嗎？"
    },
    {
      "w": "RSVP",
      "pos": "v./n.",
      "zh": "（受邀者）回覆是否出席",
      "ex": "Please RSVP by Friday.",
      "exzh": "請在週五前回覆是否出席。"
    }
  ],
  "situations": [
    {
      "title": "😵 朋友說得太快，沒聽懂邀約",
      "hear": {
        "en": "We're heading to the beach around nine tomorrow if you wanna come along!",
        "zh": "（講得很快）如果你想來的話，我們明天九點左右去海邊！",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, what time did you say?",
          "zh": "抱歉，你說幾點？"
        },
        {
          "en": "Wait, are you inviting me to the beach?",
          "zh": "等等，你是邀我去海邊嗎？"
        }
      ],
      "tip": "確認時間和地點，重複一次最保險。"
    },
    {
      "title": "🙅 想拒絕但不想傷感情",
      "hear": {
        "en": "Are you coming to the party on Saturday?",
        "zh": "週六的派對你會來嗎？"
      },
      "say": [
        {
          "en": "I'd love to, but I already have plans. Can I take a rain check?",
          "zh": "我很想去，但我已經有安排了，下次可以嗎？"
        },
        {
          "en": "Thanks for inviting me! Have fun!",
          "zh": "謝謝你邀請我！玩得開心！"
        }
      ],
      "tip": "婉拒的公式：感謝＋拒絕理由＋提出下次，美國人很能接受。"
    },
    {
      "title": "🕐 還不確定能不能去",
      "say": [
        {
          "en": "Can I let you know tomorrow?",
          "zh": "我明天再回覆你可以嗎？"
        },
        {
          "en": "I'll check my schedule and text you.",
          "zh": "我看一下行程再傳訊息給你。"
        }
      ],
      "tip": "不確定時可以說 Maybe，但要給答覆時間，不要讓對方等太久。"
    },
    {
      "title": "🚗 想搭便車去",
      "say": [
        {
          "en": "Is there room in the car for me?",
          "zh": "車上還有位子給我嗎？"
        },
        {
          "en": "I can chip in for gas.",
          "zh": "我可以出一點油錢。"
        }
      ],
      "tip": "chip in 是「一起分攤」，搭便車出油錢是禮貌。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "Did you hand in the paper?",
      "prompt": "對方在問什麼？",
      "options": [
        "你交報告了嗎",
        "你寫完報告了嗎",
        "你借到書了嗎"
      ],
      "answer": 0,
      "note": "hand in = 交出。"
    },
    {
      "type": "選擇回應",
      "audio": "We're going to the beach tomorrow. Wanna join us?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "Yes, I'm the beach.",
        "I'd love to, but I have a deadline.",
        "No, join."
      ],
      "answer": 1,
      "note": "I'd love to, but... 是禮貌拒絕。"
    },
    {
      "type": "聽懂意思",
      "audio": "I'll take a rain check.",
      "prompt": "這句話的意思是？",
      "options": [
        "現在下雨了",
        "我要買雨傘",
        "改天再約"
      ],
      "answer": 2,
      "note": "take a rain check 是「這次不行，下次吧」。"
    },
    {
      "type": "選擇回應",
      "audio": "Can you bring some snacks?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "Sure, I'll bring chips and fruit.",
        "Yes, I'm a snack.",
        "No, I'm bringing."
      ],
      "answer": 0,
      "note": "答應就說 Sure, I'll bring..."
    },
    {
      "type": "聽數字",
      "audio": "We're leaving at nine thirty tomorrow morning.",
      "prompt": "幾點出發？",
      "options": [
        "9:13",
        "9:30",
        "3:09"
      ],
      "answer": 1,
      "note": "nine thirty = 9:30；thirteen 是 13。"
    },
    {
      "type": "聽懂意思",
      "audio": "The train ran late, so I got home around eight.",
      "prompt": "發生了什麼事？",
      "options": [
        "火車停駛",
        "八點開始搭車",
        "火車誤點，八點左右到家"
      ],
      "answer": 2,
      "note": "run late = 誤點。"
    },
    {
      "type": "對話理解",
      "audio": "I'd love to go hiking, but I have a paper due Monday. Can we go next weekend?",
      "prompt": "她想怎麼做？",
      "options": [
        "下週末再去",
        "完全不去",
        "下週一去"
      ],
      "answer": 0,
      "note": "due = 到期；next weekend = 下個週末。"
    },
    {
      "type": "對話理解",
      "audio": "Thanks for the invite! I'll bring the snacks, and I can drive if you need a ride.",
      "prompt": "她可以幫什麼忙？",
      "options": [
        "訂餐廳",
        "帶零食、開車",
        "買門票"
      ],
      "answer": 1,
      "note": "bring the snacks, drive = 零食和開車。"
    }
  ],
  "roleplay": [
    {
      "prompt": "How was school? Did you hand in the paper?",
      "promptZh": "學校怎麼樣？報告交了嗎？",
      "hint": "說交了，也提到火車誤點",
      "expect": "hand|handed|finally|yes|yeah|train|late|done|paper|submitted",
      "model": "Finally handed it in! But the train ran late.",
      "modelZh": "終於交了！但火車誤點。"
    },
    {
      "prompt": "We're going to the beach tomorrow. Wanna join us?",
      "promptZh": "我們明天要去海邊，想一起來嗎？",
      "hint": "禮貌拒絕並說原因",
      "expect": "love to|but|deadline|busy|plans|rain check|sorry|can'?t|another",
      "model": "I'd love to, but I have a deadline tomorrow.",
      "modelZh": "我很想去，但我明天有截止日。"
    },
    {
      "prompt": "No worries! Maybe next time.",
      "promptZh": "沒關係！也許下次。",
      "hint": "說你想下次再約",
      "expect": "rain check|next time|another time|thank|sure|yes|definitely",
      "model": "Yes, I'll take a rain check!",
      "modelZh": "好，下次再約！"
    },
    {
      "prompt": "Do you want to go hiking on Sunday?",
      "promptZh": "星期天要去爬山嗎？",
      "hint": "答應並問時間",
      "expect": "sounds|sure|yes|yeah|love|great|what time|count me|when",
      "model": "Sounds great! What time are we leaving?",
      "modelZh": "聽起來很棒！幾點出發？"
    },
    {
      "prompt": "We're leaving at nine. Can you bring some snacks?",
      "promptZh": "我們九點出發，你可以帶點零食嗎？",
      "hint": "答應帶零食",
      "expect": "sure|yes|yeah|bring|snack|chips|fruit|okay|no problem",
      "model": "Sure, I'll bring chips and fruit.",
      "modelZh": "好，我帶洋芋片和水果。"
    },
    {
      "prompt": "Thanks for coming!",
      "promptZh": "謝謝你來！",
      "hint": "說謝謝邀請",
      "expect": "thank|thanks|invit|welcome|fun|great|had a",
      "model": "Thanks for inviting me!",
      "modelZh": "謝謝你邀請我！"
    }
  ],
  "culture": [
    {
      "t": "邀約回答要明確",
      "d": "收到邀請，美國人通常會很快回覆：Yes、No、或 Maybe, I'll let you know by Friday。含糊不回覆比直接拒絕更失禮。"
    },
    {
      "t": "婉拒的三步驟",
      "d": "謝謝邀請 → 簡單理由 → 提出下次，例如 Thanks for inviting me! I have a deadline, but let's do it next time。不需要說太多細節。"
    },
    {
      "t": "Rain check 的由來",
      "d": "原本是棒球比賽下雨取消後發的「補票」，後來變成「這次不行，下次補」的意思。美國人在拒絕邀約時很常用。"
    },
    {
      "t": "報備與準時",
      "d": "在美國，多數聚會時間是約數；但如果說 We leave at nine（九點出發），就是要準時。晚到要事先傳訊息說 Running a few minutes late。"
    }
  ]
};
