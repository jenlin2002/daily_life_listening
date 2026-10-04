// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "renting-a-car",
  "title": "租車與客訴：輪胎壞了",
  "en": "Renting a Car & Complaints",
  "emoji": "🚗",
  "goal": "高速公路匝道前胎壓燈亮起，緊急致電租車客服尋求拖車救援、趕航班焦慮與賠償爭取。",
  "videos": [
    {
      "id": "mKci2gErqJo",
      "title": "How to Rent a Car in English – Travel English ESL Conversations (Pocket Passport)"
    },
    {
      "id": "v4qGmZUd4gk",
      "title": "Travel English: Rental Car Role Play (Single Step English)"
    },
    {
      "id": "XoPTeF2C99o",
      "title": "Car Rental English Conversation at the Airport (Fun Time Institute)"
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
      "name": "Customer Service",
      "zh": "租車客服",
      "avatar": "👨",
      "voice": "m2"
    }
  },
  "dialogues": [
    {
      "title": "租車結果輪胎壞掉",
      "where": "租車結果輪胎壞掉",
      "emoji": "🚗",
      "lines": [
        {
          "s": "S",
          "en": "Elephant Car Rental support. How can I help you?",
          "zh": "這裡是租車客服，請問有什麼可以協助您的？"
        },
        {
          "s": "Y",
          "en": "The tire pressure light is on. I tried putting air but it's not working, and our flight leaves in 4 hours!",
          "zh": "胎壓燈亮了，打氣也沒用，而且我們4小時後班機要起飛！"
        },
        {
          "s": "S",
          "en": "The tow truck is on the way, arriving in 20 minutes. Where are you located?",
          "zh": "拖車已出發約20分鐘抵達。請問您的確切位置？"
        },
        {
          "s": "Y",
          "en": "Down the freeway ramp across from McDonald's. Can you compensate for our Uber or hotel?",
          "zh": "在高速匝道下麥當勞對面。你們可以補償我們叫Uber或住宿費嗎？"
        },
        {
          "s": "S",
          "en": "Unfortunately we cannot authorize that from support, but you can speak to the branch manager.",
          "zh": "很遺憾線上客服無法授權，但您可以向門市經理洽談。"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "Hello. How can I help you?",
      "zh": "喂，請問有什麼可以協助您的？"
    },
    {
      "en": "I'm calling because the tire pressure light has been on.",
      "zh": "我打電話是因為輪胎氣壓燈亮了。"
    },
    {
      "en": "I did try to put air in the tires.",
      "zh": "我有嘗試幫輪胎打氣。"
    },
    {
      "en": "I didn't want to risk it on a 2-hour freeway drive.",
      "zh": "我不想冒險開兩小時的高速公路。"
    },
    {
      "en": "Who am I speaking to?",
      "zh": "請問怎麼稱呼您？"
    },
    {
      "en": "I apologize for the inconvenience.",
      "zh": "很抱歉造成您的不便。"
    },
    {
      "en": "We will send someone to tow your car away.",
      "zh": "我們會派人去拖您的車。"
    },
    {
      "en": "Where are you located? We are right down the ramp of a freeway.",
      "zh": "您的位置在哪裡？我們就在高速公路出口匝道下方。"
    },
    {
      "en": "I see a McDonald's across the street.",
      "zh": "我看到對街有一家麥當勞。"
    },
    {
      "en": "The tow truck is on the way.",
      "zh": "拖車已經派遣過去了。"
    },
    {
      "en": "Our flight is taking off in 4 hours.",
      "zh": "我們的航班四個小時後就要起飛了。"
    },
    {
      "en": "We were cutting it close.",
      "zh": "我們時間已經很緊迫了。"
    },
    {
      "en": "Will the cost be compensated?",
      "zh": "你們會補償費用嗎？"
    },
    {
      "en": "What would you suggest?",
      "zh": "你建議怎麼做？"
    },
    {
      "en": "I might have to miss my flight.",
      "zh": "我可能會錯過我的航班。"
    },
    {
      "en": "You can talk to the branch manager.",
      "zh": "你可以和門市經理聯絡。"
    }
  ],
  "hear": [
    {
      "en": "Elephant Car Rental support. How can I help you?",
      "zh": "Elephant 租車客服，有什麼能幫您的？",
      "reply": "Hi, I have a problem with my rental car.",
      "replyZh": "嗨，我的租來的車有問題。"
    },
    {
      "en": "Can I have your name and reservation number?",
      "zh": "可以給我您的姓名和訂單編號嗎？",
      "reply": "Sure. It's Lin, reservation number 4587.",
      "replyZh": "好的，姓 Lin，訂單編號 4587。"
    },
    {
      "en": "What seems to be the problem?",
      "zh": "是什麼問題呢？",
      "reply": "The tire pressure light is on.",
      "replyZh": "胎壓燈亮了。"
    },
    {
      "en": "Where are you located right now?",
      "zh": "您現在在哪裡？",
      "reply": "I'm on the freeway ramp across from McDonald's.",
      "replyZh": "我在麥當勞對面的高速公路匝道。"
    },
    {
      "en": "Are you in a safe place?",
      "zh": "您在安全的地方嗎？",
      "reply": "Yes, I pulled over to the side.",
      "replyZh": "是的，我已經把車停到路邊了。"
    },
    {
      "en": "The tow truck is on its way.",
      "zh": "拖吊車已經在路上了。",
      "reply": "How long will it take?",
      "replyZh": "要多久會到？"
    },
    {
      "en": "It should arrive in about twenty minutes.",
      "zh": "大約二十分鐘會到。",
      "reply": "Okay. We have a flight in four hours.",
      "replyZh": "好的，我們四小時後有班機。"
    },
    {
      "en": "We'll swap your car for a different one.",
      "zh": "我們會幫您換另一台車。",
      "reply": "Where can I pick it up?",
      "replyZh": "我可以去哪裡取車？"
    },
    {
      "en": "Unfortunately, I can't authorize that from here.",
      "zh": "很遺憾，我這邊沒辦法核准這件事。",
      "reply": "Can I speak to the branch manager?",
      "replyZh": "我可以跟分店經理談嗎？"
    },
    {
      "en": "Is there anything else I can help you with?",
      "zh": "還有什麼可以幫您的嗎？",
      "reply": "No, that's all. Thank you for your help.",
      "replyZh": "沒有了，謝謝你的協助。"
    }
  ],
  "say": [
    {
      "en": "The tire pressure light is on.",
      "zh": "胎壓警示燈亮了。"
    },
    {
      "en": "I tried putting air in, but it's not working.",
      "zh": "我試著打氣了，但沒有用。"
    },
    {
      "en": "Our flight leaves in four hours.",
      "zh": "我們四小時後有班機。"
    },
    {
      "en": "I'm on the freeway ramp across from McDonald's.",
      "zh": "我在麥當勞對面的高速公路匝道上。"
    },
    {
      "en": "How long will the tow truck take?",
      "zh": "拖吊車要多久才會到？"
    },
    {
      "en": "Can you send us a replacement car?",
      "zh": "你們可以派一台替代的車給我們嗎？"
    },
    {
      "en": "Can you cover our Uber to the airport?",
      "zh": "你們可以負擔我們去機場的 Uber 費用嗎？"
    },
    {
      "en": "Could I speak to the manager?",
      "zh": "我可以跟經理談嗎？"
    }
  ],
  "vocab": [
    {
      "w": "rental car",
      "pos": "n.",
      "zh": "租來的車",
      "ex": "I returned the rental car.",
      "exzh": "我把租的車還了。"
    },
    {
      "w": "tire pressure",
      "pos": "n.",
      "zh": "胎壓",
      "ex": "The tire pressure is low.",
      "exzh": "胎壓太低了。"
    },
    {
      "w": "flat tire",
      "pos": "n.",
      "zh": "爆胎、輪胎沒氣",
      "ex": "We got a flat tire.",
      "exzh": "我們爆胎了。"
    },
    {
      "w": "tow truck",
      "pos": "n.",
      "zh": "拖吊車",
      "ex": "The tow truck is on the way.",
      "exzh": "拖吊車在路上了。"
    },
    {
      "w": "roadside assistance",
      "pos": "n.",
      "zh": "道路救援",
      "ex": "Does my rental include roadside assistance?",
      "exzh": "我租車有含道路救援嗎？"
    },
    {
      "w": "ramp",
      "pos": "n.",
      "zh": "（高速公路）匝道",
      "ex": "We stopped on the off-ramp.",
      "exzh": "我們停在下匝道。"
    },
    {
      "w": "compensate",
      "pos": "v.",
      "zh": "補償、賠償",
      "ex": "Will you compensate us for the delay?",
      "exzh": "你們會補償我們延誤嗎？"
    },
    {
      "w": "branch manager",
      "pos": "n.",
      "zh": "分店經理",
      "ex": "Please talk to the branch manager.",
      "exzh": "請跟分店經理談。"
    },
    {
      "w": "replacement",
      "pos": "n.",
      "zh": "替代品、換新的",
      "ex": "We'll send a replacement vehicle.",
      "exzh": "我們會派一台替代車輛。"
    },
    {
      "w": "authorize",
      "pos": "v.",
      "zh": "授權、核准",
      "ex": "I can't authorize a refund.",
      "exzh": "我沒有權限核准退款。"
    }
  ],
  "situations": [
    {
      "title": "😵 客服講太快",
      "hear": {
        "en": "Can you confirm the plate number and which direction you're heading on the freeway?",
        "zh": "（講得很快）可以確認車牌號碼，以及你在高速公路上往哪個方向嗎？",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you repeat that slowly?",
          "zh": "抱歉，可以說慢一點再說一次嗎？"
        },
        {
          "en": "Do you need my license plate number?",
          "zh": "你需要我的車牌號碼嗎？"
        }
      ],
      "tip": "緊急時深呼吸，一次只回答一個問題，不確定就請對方重說。"
    },
    {
      "title": "🚨 發生輕微擦撞",
      "say": [
        {
          "en": "I scraped the car in the parking lot. What should I do?",
          "zh": "我在停車場刮到車了，該怎麼辦？"
        },
        {
          "en": "Do I need to file a report?",
          "zh": "我需要做報案紀錄嗎？"
        }
      ],
      "tip": "租車有出險先打租車公司電話，拍照存證，不要自己決定賠錢。"
    },
    {
      "title": "⛽ 還車時油不夠",
      "hear": {
        "en": "The tank isn't full, so we'll charge a refueling fee.",
        "zh": "油箱沒滿，所以我們會收補油費。"
      },
      "say": [
        {
          "en": "I thought it was full. Can I fill it up now?",
          "zh": "我以為是滿的，我可以現在去加滿嗎？"
        },
        {
          "en": "How much is the fee?",
          "zh": "補油費是多少？"
        }
      ],
      "tip": "美國租車通常要「還車時油箱和取車時一樣滿」，否則會被收高價補油費。"
    },
    {
      "title": "💳 帳單多收錢",
      "say": [
        {
          "en": "I think I was charged twice. Can you check my bill?",
          "zh": "我好像被重複收費了，可以幫我查帳單嗎？"
        },
        {
          "en": "Could you send me an email receipt?",
          "zh": "可以寄電子收據給我嗎？"
        }
      ],
      "tip": "租車結束後要看 receipt，發現多收錢可以用 dispute（爭議）請款。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "What seems to be the problem?",
      "prompt": "客服在問什麼？",
      "options": [
        "是什麼問題",
        "你在哪裡",
        "你要租幾天"
      ],
      "answer": 0,
      "note": "What seems to be the problem? = 請問發生什麼問題？"
    },
    {
      "type": "選擇回應",
      "audio": "Are you in a safe place?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "Yes, I'm a car.",
        "Yes, I'm on the side of the road.",
        "No, it's a tire."
      ],
      "answer": 1,
      "note": "回答在路邊安全位置即可。"
    },
    {
      "type": "聽懂意思",
      "audio": "The tow truck is on its way.",
      "prompt": "客服說了什麼？",
      "options": [
        "拖吊車壞了",
        "你需要自己叫拖車",
        "拖吊車已經出發了"
      ],
      "answer": 2,
      "note": "on its way = 在路上了。"
    },
    {
      "type": "聽數字",
      "audio": "The tow truck should arrive in about twenty minutes.",
      "prompt": "大概多久會到？",
      "options": [
        "20 分鐘",
        "12 分鐘",
        "二小時"
      ],
      "answer": 0,
      "note": "twenty 和 twelve 要分清楚。"
    },
    {
      "type": "選擇回應",
      "audio": "Where are you located?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "I'm a customer.",
        "I'm near the airport exit.",
        "For two hours."
      ],
      "answer": 1,
      "note": "Where are you located? 回答地點。"
    },
    {
      "type": "對話理解",
      "audio": "I'm sorry, but we can't authorize a hotel or Uber from support. You can talk to the branch manager.",
      "prompt": "客服的意思是？",
      "options": [
        "客服答應付 Uber",
        "不能再聯絡客服",
        "客服無法核准補償，要找分店經理"
      ],
      "answer": 2,
      "note": "can't authorize = 無權核准。"
    },
    {
      "type": "對話理解",
      "audio": "We'll bring you a replacement car as soon as the tow truck arrives. It's the same model.",
      "prompt": "客服會怎麼做？",
      "options": [
        "派一台一樣的替代車",
        "退錢給你",
        "取消租車"
      ],
      "answer": 0,
      "note": "replacement = 替代品；as soon as = 一…就。"
    },
    {
      "type": "對話理解",
      "audio": "Your rental includes roadside assistance, so there's no extra charge for the tow.",
      "prompt": "拖車要另外收費嗎？",
      "options": [
        "要，三百美元",
        "不用，包含在租車裡",
        "要，五十美元"
      ],
      "answer": 1,
      "note": "includes = 包含；no extra charge = 沒有額外費用。"
    }
  ],
  "roleplay": [
    {
      "prompt": "Elephant Car Rental support. How can I help you?",
      "promptZh": "Elephant 租車客服，有什麼能幫您的？",
      "hint": "說明有問題",
      "expect": "tire|problem|car|flat|light|help|issue|rental",
      "model": "Hi, the tire pressure light is on.",
      "modelZh": "嗨，胎壓燈亮了。"
    },
    {
      "prompt": "Where are you located right now?",
      "promptZh": "您現在在哪裡？",
      "hint": "說出位置",
      "expect": "freeway|ramp|highway|near|across|street|exit|parking|road|mcdonald",
      "model": "I'm on the freeway ramp across from McDonald's.",
      "modelZh": "我在麥當勞對面的高速公路匝道。"
    },
    {
      "prompt": "The tow truck is on its way. It'll be about twenty minutes.",
      "promptZh": "拖吊車在路上了，大約二十分鐘。",
      "hint": "說你趕時間（班機）",
      "expect": "flight|hurry|late|miss|airport|time|four hours",
      "model": "Okay, but our flight leaves in four hours.",
      "modelZh": "好的，但我們四小時後有班機。"
    },
    {
      "prompt": "We can swap your car for a different one.",
      "promptZh": "我們可以幫您換另一台車。",
      "hint": "確認並問在哪裡拿",
      "expect": "where|how|yes|thank|okay|please|pick|sure",
      "model": "Thank you. Where can I pick it up?",
      "modelZh": "謝謝，我要去哪裡取車？"
    },
    {
      "prompt": "Unfortunately, I can't authorize that.",
      "promptZh": "很遺憾，我沒辦法核准。",
      "hint": "要求跟經理談",
      "expect": "manager|supervisor|speak|talk|someone|higher",
      "model": "Could I speak to the manager?",
      "modelZh": "我可以跟經理談嗎？"
    },
    {
      "prompt": "Is there anything else I can help you with?",
      "promptZh": "還有其他需要協助的嗎？",
      "hint": "道謝結束",
      "expect": "no|that'?s (all|it)|thank|nothing|appreciate",
      "model": "No, that's all. Thanks for your help.",
      "modelZh": "沒有了，謝謝你的協助。"
    }
  ],
  "culture": [
    {
      "t": "租車要有國際駕照",
      "d": "在美國租車，通常要出示護照、駕照（台灣駕照加國際駕照）和信用卡。年滿 25 歲以下可能要付 young driver fee。"
    },
    {
      "t": "保險要選清楚",
      "d": "租車常見 CDW（車損險）和 liability（責任險）。出事了先打租車公司電話，他們會告訴你是否在保險範圍內。"
    },
    {
      "t": "道路救援電話要存起來",
      "d": "租車的鑰匙或合約上會印 roadside assistance 電話。高速公路拋錨，先開警示燈，把車停到路肩，再打電話。"
    },
    {
      "t": "客訴要溫和但清楚",
      "d": "美國客服員工通常權限有限，說 I understand, but could I speak to a manager? 比生氣更有效，也比較容易被接受。"
    }
  ]
};
