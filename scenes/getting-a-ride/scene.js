// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "getting-a-ride",
  "title": "叫 Uber",
  "en": "Getting a Ride",
  "emoji": "🚗",
  "goal": "學會叫車後確認司機與車牌、說出上下車的位置、途中改路線與臨時停靠、付小費與評分，並聽懂司機的每一個問題",
  "speakers": {
    "S": {
      "name": "Driver",
      "zh": "司機",
      "avatar": "🧔",
      "voice": "m"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♀️",
      "voice": "f"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "上車前：確認司機與車牌",
      "where": "路邊的上車點（宿舍門口或機場外）",
      "emoji": "📱",
      "lines": [
        {
          "s": "S",
          "en": "Hey, are you Sam?",
          "zh": "嗨，你是 Sam 嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, that's me. Is this the white Toyota Camry?",
          "zh": "是的，是我。這是那台白色的 Toyota Camry 嗎？"
        },
        {
          "s": "S",
          "en": "That's right. My license plate ends in seven-two-one.",
          "zh": "沒錯，我的車牌尾數是 721。"
        },
        {
          "s": "Y",
          "en": "Great. Could you put my bag in the trunk, please?",
          "zh": "太好了。可以請你把我的包包放進後車廂嗎？"
        },
        {
          "s": "S",
          "en": "Sure thing. Hop in.",
          "zh": "沒問題，上車吧。"
        },
        {
          "s": "S",
          "en": "Just to confirm, we're heading to the Central Library on Main Street, right?",
          "zh": "跟你確認一下，我們要去 Main Street 的中央圖書館，對嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, that's right.",
          "zh": "對，沒錯。"
        },
        {
          "s": "S",
          "en": "Awesome. Is the temperature okay for you?",
          "zh": "太好了。溫度還可以嗎？"
        },
        {
          "s": "Y",
          "en": "It's a little cold. Could you turn the air down a bit?",
          "zh": "有點冷，可以把冷氣調小一點嗎？"
        },
        {
          "s": "S",
          "en": "No problem. Please buckle up, and we'll get going.",
          "zh": "沒問題。請繫好安全帶，我們就出發。"
        },
        {
          "s": "Y",
          "en": "About how long will it take?",
          "zh": "大概要多久？"
        },
        {
          "s": "S",
          "en": "Around fifteen minutes, if traffic is light.",
          "zh": "如果車不多，大約十五分鐘。"
        }
      ]
    },
    {
      "title": "路上：聊天與臨時停靠",
      "where": "行駛途中，市區的街上",
      "emoji": "🚦",
      "lines": [
        {
          "s": "S",
          "en": "So, are you a student here?",
          "zh": "所以你是這裡的學生嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, I'm a freshman at the university.",
          "zh": "是的，我是這間大學的大一新生。"
        },
        {
          "s": "S",
          "en": "Nice! How do you like it so far?",
          "zh": "不錯耶！到目前為止喜歡嗎？"
        },
        {
          "s": "Y",
          "en": "I love it, but I'm still getting used to the city.",
          "zh": "我很喜歡，不過還在適應這座城市。"
        },
        {
          "s": "S",
          "en": "There's a lot of traffic on Main Street. Want me to take another route?",
          "zh": "Main Street 現在車很多，要我改走別條路嗎？"
        },
        {
          "s": "Y",
          "en": "Sure, whatever is faster.",
          "zh": "好啊，哪條快就走哪條。"
        },
        {
          "s": "Y",
          "en": "Excuse me, could we make a quick stop at the pharmacy on the corner?",
          "zh": "不好意思，可以在轉角的藥局先停一下嗎？"
        },
        {
          "s": "S",
          "en": "Sure. Just so you know, an extra stop adds a little to the fare.",
          "zh": "可以。先跟你說，多停一站車資會多一點。"
        },
        {
          "s": "Y",
          "en": "That's fine. I'll only be two minutes.",
          "zh": "沒關係，我只要兩分鐘。"
        },
        {
          "s": "S",
          "en": "Okay, I'll pull over right here. Take your time.",
          "zh": "好，我就停在這裡，慢慢來。"
        },
        {
          "s": "Y",
          "en": "Thanks for waiting!",
          "zh": "謝謝你等我！"
        }
      ]
    },
    {
      "title": "下車：付小費與評分",
      "where": "目的地：中央圖書館門口",
      "emoji": "🏁",
      "lines": [
        {
          "s": "S",
          "en": "Here we are, the Central Library.",
          "zh": "到了，中央圖書館。"
        },
        {
          "s": "Y",
          "en": "Perfect. Could you drop me off right here by the entrance?",
          "zh": "太好了。可以讓我在門口這裡下車嗎？"
        },
        {
          "s": "S",
          "en": "Sure. Watch out for the bike lane when you open the door.",
          "zh": "可以。開門的時候小心自行車道。"
        },
        {
          "s": "Y",
          "en": "Thanks for the ride! I'll add a tip in the app.",
          "zh": "謝謝你載我！我會在 App 裡加小費。"
        },
        {
          "s": "S",
          "en": "I appreciate it! Please rate me five stars if you can.",
          "zh": "謝謝你！方便的話請給我五顆星。"
        },
        {
          "s": "Y",
          "en": "Of course. Have a great day!",
          "zh": "當然。祝你有美好的一天！"
        },
        {
          "s": "S",
          "en": "You too. Don't forget your phone and backpack!",
          "zh": "你也是。別忘了你的手機和背包！"
        },
        {
          "s": "Y",
          "en": "Oh, thanks for the reminder!",
          "zh": "喔，謝謝你提醒！"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "Hi, are you my driver?",
      "zh": "嗨，你是我的司機嗎？"
    },
    {
      "en": "Hey, are you Sam?",
      "zh": "嗨，你是 Sam 嗎？（司機問乘客）"
    },
    {
      "en": "Could I get your license plate number?",
      "zh": "可以請問你的車牌號碼嗎？"
    },
    {
      "en": "Could you put my bag in the trunk?",
      "zh": "可以幫我把行李放進後車廂嗎？"
    },
    {
      "en": "Hop in.",
      "zh": "上車吧。"
    },
    {
      "en": "Please buckle up.",
      "zh": "請繫好安全帶。"
    },
    {
      "en": "We're heading to the Central Library, right?",
      "zh": "我們要去中央圖書館，對嗎？"
    },
    {
      "en": "Could you turn the air down a bit?",
      "zh": "可以把冷氣調小一點嗎？"
    },
    {
      "en": "About how long will it take?",
      "zh": "大概要多久？"
    },
    {
      "en": "Traffic is pretty heavy today.",
      "zh": "今天車流很多。"
    },
    {
      "en": "Want me to take another route?",
      "zh": "要我改走別條路嗎？"
    },
    {
      "en": "Could we make a quick stop?",
      "zh": "可以先停一下嗎？"
    },
    {
      "en": "An extra stop adds a little to the fare.",
      "zh": "多停一站車資會多一點。"
    },
    {
      "en": "Could you drop me off right here?",
      "zh": "可以讓我在這裡下車嗎？"
    },
    {
      "en": "You can pull over up here.",
      "zh": "你可以停在前面。"
    },
    {
      "en": "Watch out for the bike lane.",
      "zh": "小心自行車道。"
    },
    {
      "en": "I'll add a tip in the app.",
      "zh": "我會在 App 裡加小費。"
    },
    {
      "en": "Please rate me five stars if you can.",
      "zh": "方便的話請給我五顆星。"
    },
    {
      "en": "Don't forget your phone and backpack!",
      "zh": "別忘了你的手機和背包！"
    },
    {
      "en": "I'm at the pickup spot. Where are you?",
      "zh": "我在上車點了，你在哪裡？"
    }
  ],
  "hear": [
    {
      "en": "Hey, are you Sam?",
      "zh": "嗨，你是 Sam 嗎？",
      "reply": "Yes, that's me.",
      "replyZh": "對，是我。"
    },
    {
      "en": "Just to confirm, you're going to the Central Library?",
      "zh": "跟你確認一下，你要去中央圖書館嗎？",
      "reply": "Yes, that's right.",
      "replyZh": "對，沒錯。"
    },
    {
      "en": "Do you mind if I take the highway?",
      "zh": "你介意我走高速公路嗎？（回答 No 是不介意）",
      "reply": "No, that's fine.",
      "replyZh": "不介意，可以。"
    },
    {
      "en": "Is the temperature okay for you?",
      "zh": "溫度還可以嗎？",
      "reply": "It's a little warm. Could you turn the air up?",
      "replyZh": "有點熱，可以把冷氣開強一點嗎？"
    },
    {
      "en": "Do you want the radio on or off?",
      "zh": "要開收音機還是關掉？",
      "reply": "Off is fine, thanks.",
      "replyZh": "關掉就好，謝謝。"
    },
    {
      "en": "There's a lot of traffic on Main Street. Want me to take another route?",
      "zh": "Main Street 現在車很多，要我改走別條路嗎？",
      "reply": "Sure, whatever is faster.",
      "replyZh": "好啊，哪條快就走哪條。"
    },
    {
      "en": "Where would you like me to drop you off?",
      "zh": "你想在哪裡下車？",
      "reply": "Right here is fine, thanks.",
      "replyZh": "就在這裡下，謝謝。"
    },
    {
      "en": "Do you need help with your bags?",
      "zh": "需要我幫你拿行李嗎？",
      "reply": "No thanks, I've got them.",
      "replyZh": "不用，謝謝，我自己拿得動。"
    },
    {
      "en": "How's your day going so far?",
      "zh": "你今天過得怎麼樣？",
      "reply": "Pretty good, thanks. How about yours?",
      "replyZh": "還不錯，謝謝。你呢？"
    },
    {
      "en": "Have a good one! Don't forget to rate your trip.",
      "zh": "祝你愉快！別忘了替這趟行程評分。",
      "reply": "Will do. Thanks, you too!",
      "replyZh": "好的，謝謝，你也是！"
    }
  ],
  "say": [
    {
      "en": "Hi, are you my driver?",
      "zh": "嗨，你是我的司機嗎？（上車前先確認）"
    },
    {
      "en": "Could you wait here for a couple of minutes?",
      "zh": "可以請你在這裡等我幾分鐘嗎？"
    },
    {
      "en": "Could I charge my phone?",
      "zh": "可以借我充電嗎？"
    },
    {
      "en": "Could you turn up the heat, please?",
      "zh": "可以把暖氣開強一點嗎？"
    },
    {
      "en": "Could you open the trunk, please?",
      "zh": "可以請你打開後車廂嗎？"
    },
    {
      "en": "I think we missed the turn.",
      "zh": "我覺得我們錯過轉彎了。"
    },
    {
      "en": "Could you stop here, please?",
      "zh": "可以請你停在這裡嗎？"
    },
    {
      "en": "Excuse me, is this the fastest way?",
      "zh": "不好意思，這是最快的路嗎？"
    },
    {
      "en": "Thanks for the ride!",
      "zh": "謝謝你載我！"
    },
    {
      "en": "Sorry, could you say that again?",
      "zh": "不好意思，可以再說一次嗎？"
    }
  ],
  "vocab": [
    {
      "w": "pickup spot",
      "pos": "n.",
      "zh": "上車點",
      "ex": "I'm waiting at the pickup spot.",
      "exzh": "我在上車點等你。"
    },
    {
      "w": "drop-off",
      "pos": "n.",
      "zh": "下車地點",
      "ex": "The drop-off is right in front of the library.",
      "exzh": "下車地點就在圖書館正前方。"
    },
    {
      "w": "fare",
      "pos": "n.",
      "zh": "車資",
      "ex": "The fare is about eighteen dollars.",
      "exzh": "車資大約十八塊美金。"
    },
    {
      "w": "surge pricing",
      "pos": "n.",
      "zh": "尖峰加價",
      "ex": "There is surge pricing after the concert.",
      "exzh": "演唱會結束後有尖峰加價。"
    },
    {
      "w": "tip",
      "pos": "n./v.",
      "zh": "小費",
      "ex": "I'll tip you in the app.",
      "exzh": "我會在 App 裡給你小費。"
    },
    {
      "w": "trunk",
      "pos": "n.",
      "zh": "後車廂",
      "ex": "Please put the suitcase in the trunk.",
      "exzh": "請把行李箱放進後車廂。"
    },
    {
      "w": "seat belt",
      "pos": "n.",
      "zh": "安全帶",
      "ex": "Please wear your seat belt.",
      "exzh": "請繫好安全帶。"
    },
    {
      "w": "license plate",
      "pos": "n.",
      "zh": "車牌",
      "ex": "Check the license plate before you get in.",
      "exzh": "上車前先核對車牌。"
    },
    {
      "w": "route",
      "pos": "n.",
      "zh": "路線",
      "ex": "Is there a faster route?",
      "exzh": "有更快的路線嗎？"
    },
    {
      "w": "detour",
      "pos": "n.",
      "zh": "繞路",
      "ex": "The road is closed, so we have to take a detour.",
      "exzh": "這條路封閉了，所以我們得繞路。"
    },
    {
      "w": "traffic",
      "pos": "n.",
      "zh": "車流、塞車",
      "ex": "The traffic is terrible this morning.",
      "exzh": "今天早上塞車很嚴重。"
    },
    {
      "w": "rating",
      "pos": "n.",
      "zh": "評分（星等）",
      "ex": "Please give me a good rating.",
      "exzh": "請給我好評。"
    }
  ],
  "situations": [
    {
      "title": "📍 找不到司機，或司機找不到你",
      "hear": {
        "en": "Hi, I'm at the pickup spot. Where are you?",
        "zh": "嗨，我已經在上車點了，你在哪裡？"
      },
      "say": [
        {
          "en": "I'm standing in front of the main entrance, wearing a blue jacket.",
          "zh": "我站在大門口，穿著藍色外套。"
        },
        {
          "en": "Can you see me? I'm waving.",
          "zh": "你看得到我嗎？我在揮手。"
        }
      ],
      "tip": "說出「站在哪裡」加上「穿什麼」最清楚。也可以用 App 的聊天或通話功能，不用自己打電話。"
    },
    {
      "title": "❌ 司機取消，或等了很久",
      "hear": {
        "en": "Sorry, I have to cancel this trip.",
        "zh": "抱歉，我必須取消這趟行程。"
      },
      "say": [
        {
          "en": "No problem, I'll request another ride.",
          "zh": "沒關係，我再叫一輛車。"
        },
        {
          "en": "Could you wait a moment? I'm on my way down.",
          "zh": "可以請你等一下嗎？我正在下樓。"
        }
      ],
      "tip": "司機取消是常有的事，不用生氣，直接重新叫車。自己讓司機等太久，也可能被收取等候費。"
    },
    {
      "title": "💸 車資比預期貴",
      "hear": {
        "en": "It's busy right now, so the fare is a little higher.",
        "zh": "現在是尖峰時段，所以車資比較高。"
      },
      "say": [
        {
          "en": "Oh, I see. Is there a cheaper option?",
          "zh": "喔，我了解了。有比較便宜的選項嗎？"
        },
        {
          "en": "Why is the fare higher than the estimate?",
          "zh": "為什麼車資比預估的貴？"
        }
      ],
      "tip": "尖峰加價（surge pricing）會在你叫車前顯示在 App 上，可以等幾分鐘再叫，價格常常會降下來。"
    },
    {
      "title": "🧳 東西忘在車上",
      "say": [
        {
          "en": "Excuse me, I think I left my backpack in your car.",
          "zh": "不好意思，我想我把背包忘在你的車上了。"
        },
        {
          "en": "Could you bring it back? I can add a tip.",
          "zh": "可以請你送回來嗎？我可以加小費。"
        }
      ],
      "tip": "最快的方法是在 App 的行程紀錄裡找「遺失物品」，直接聯絡司機，不用留電話號碼。"
    },
    {
      "title": "🚧 好像走錯路或繞遠路",
      "say": [
        {
          "en": "Excuse me, is this the fastest way?",
          "zh": "不好意思，這是最快的路嗎？"
        },
        {
          "en": "My map shows a shorter route. Could we take that one?",
          "zh": "我的地圖顯示有比較近的路，我們可以走那條嗎？"
        }
      ],
      "tip": "用 Excuse me 開頭，語氣客氣就好，不用直接指責司機。多數司機都會依 App 導航走，你可以請他看一下地圖。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "Hey, are you Sam? I'm your driver.",
      "prompt": "司機在問什麼？",
      "options": [
        "確認你是不是 Sam",
        "問你要去哪裡",
        "問你要不要付小費"
      ],
      "answer": 0,
      "note": "Are you Sam? 是司機在確認乘客的名字，上車前一定要核對名字和車牌。"
    },
    {
      "type": "選擇回應",
      "audio": "Do you mind if I take the highway?",
      "prompt": "你覺得走高速公路沒問題，最適合怎麼回答？",
      "options": [
        "No, that's fine.",
        "Yes, I'm a driver.",
        "Thanks, I will."
      ],
      "answer": 0,
      "note": "Do you mind…? 的意思是「你介意嗎？」，不介意要回答 No。"
    },
    {
      "type": "聽數字",
      "audio": "Your fare comes to eighteen fifty.",
      "prompt": "車資是多少？",
      "options": [
        "$18.50",
        "$18.15",
        "$80.50"
      ],
      "answer": 0,
      "note": "eighteen fifty 是 18.50 元。美國價錢常把小數點前後分開唸。"
    },
    {
      "type": "聽數字",
      "audio": "We'll be there in about twelve minutes.",
      "prompt": "大約幾分鐘會到？",
      "options": [
        "12 分鐘",
        "20 分鐘",
        "2 分鐘"
      ],
      "answer": 0,
      "note": "twelve 是 12，twenty 才是 20，注意重音和字尾。"
    },
    {
      "type": "選擇回應",
      "audio": "Where would you like me to drop you off?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "Right here is fine, thanks.",
        "It was five dollars.",
        "Yes, I was."
      ],
      "answer": 0,
      "note": "drop you off 是「讓你下車」，問的是在哪裡下車。"
    },
    {
      "type": "聽懂意思",
      "audio": "Sorry, I have to cancel this trip.",
      "prompt": "司機說了什麼？",
      "options": [
        "司機要取消這趟行程",
        "司機要多收車資",
        "司機要改走別條路"
      ],
      "answer": 0,
      "note": "cancel this trip = 取消這趟行程，你需要重新叫車。"
    },
    {
      "type": "聽懂意思",
      "audio": "There's a lot of traffic on Main Street. Want me to take another route?",
      "prompt": "司機提出什麼建議？",
      "options": [
        "改走別條路",
        "先停一站",
        "把冷氣關掉"
      ],
      "answer": 0,
      "note": "take another route = 走另一條路線。"
    },
    {
      "type": "選擇回應",
      "audio": "Is the temperature okay for you?",
      "prompt": "你覺得有點冷，最適合怎麼回答？",
      "options": [
        "It's a bit cold. Could you turn the air down?",
        "Yes, it's a car.",
        "It's thirty degrees."
      ],
      "answer": 0,
      "note": "覺得冷就請司機把冷氣調小：turn the air down。"
    },
    {
      "type": "對話理解",
      "audio": "Hi, can you stop at the pharmacy on the corner? I'll be back in two minutes.",
      "prompt": "乘客要做什麼？",
      "options": [
        "在轉角的藥局先停一下",
        "直接開去機場",
        "取消行程"
      ],
      "answer": 0,
      "note": "stop at the pharmacy 是在藥局停一下，I'll be back 是我很快回來。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "Thanks for the ride! I'll leave you a five-star rating and a tip in the app.",
      "prompt": "乘客打算怎麼做？",
      "options": [
        "給五星評價和小費",
        "付現金不給小費",
        "向公司投訴司機"
      ],
      "answer": 0,
      "note": "leave you a five-star rating and a tip = 給你五星評價和小費。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Hey, are you Sam?",
      "promptZh": "嗨，你是 Sam 嗎？",
      "hint": "說是的，順便確認是不是這輛車",
      "expect": "yes|yeah|yep|that'?s me|i am|i'?m sam",
      "model": "Yes, that's me. Is this the white Camry?",
      "modelZh": "對，是我。這是那台白色 Camry 嗎？"
    },
    {
      "prompt": "Just to confirm, we're heading to the Central Library, right?",
      "promptZh": "跟你確認一下，我們要去中央圖書館，對嗎？",
      "hint": "說對，沒錯",
      "expect": "yes|yeah|yep|that'?s (right|correct)|correct|right",
      "model": "Yes, that's right.",
      "modelZh": "對，沒錯。"
    },
    {
      "prompt": "Do you want the radio on?",
      "promptZh": "要開收音機嗎？",
      "hint": "說要或不要，加上 please 或 thanks",
      "expect": "radio|music|off|on|no|yes|fine|quiet|please|thanks",
      "model": "Off is fine, thanks.",
      "modelZh": "關掉就好，謝謝。"
    },
    {
      "prompt": "Is the temperature okay for you?",
      "promptZh": "溫度還可以嗎？",
      "hint": "說太冷、太熱，或說沒問題",
      "expect": "cold|warm|hot|cool|fine|okay|ok|good|turn|air|heat",
      "model": "It's a little cold. Could you turn the air down?",
      "modelZh": "有點冷，可以把冷氣調小一點嗎？"
    },
    {
      "prompt": "There's a lot of traffic on Main Street. Want me to take another route?",
      "promptZh": "Main Street 車很多，要我改走別條路嗎？",
      "hint": "說好，或說哪條快就走哪條",
      "expect": "sure|yes|yeah|okay|ok|fine|go ahead|whatever|faster|no",
      "model": "Sure, whatever is faster.",
      "modelZh": "好啊，哪條快就走哪條。"
    },
    {
      "prompt": "Where would you like me to drop you off?",
      "promptZh": "你想在哪裡下車？",
      "hint": "說在這裡、在門口或轉角",
      "expect": "here|right here|front|entrance|corner|stop|drop|by the|in front",
      "model": "Right here is fine, thanks.",
      "modelZh": "就在這裡下，謝謝。"
    },
    {
      "prompt": "Here we are! Don't forget your bag.",
      "promptZh": "到了！別忘了你的包包。",
      "hint": "道謝並祝他今天愉快",
      "expect": "thank|thanks|appreciate|have a (good|great|nice)",
      "model": "Thanks for the ride! Have a great day.",
      "modelZh": "謝謝你載我！祝你有美好的一天。"
    },
    {
      "prompt": "Sorry, I have to cancel this trip.",
      "promptZh": "抱歉，我必須取消這趟行程。",
      "hint": "說沒關係，你會再叫一輛車",
      "expect": "no problem|that'?s (okay|fine|all right)|okay|ok|i'?ll (request|order|call|find|get)|another",
      "model": "No problem, I'll request another ride.",
      "modelZh": "沒關係，我再叫一輛車。"
    }
  ],
  "culture": [
    {
      "t": "上車前先核對車牌與姓名",
      "d": "為了安全，上車前一定要核對 App 上顯示的車牌、車款和司機照片。司機會問你「Are you Sam?」，不要主動先說出自己的名字，讓他先說，比較安全。"
    },
    {
      "t": "小費通常是車資的 15–20%",
      "d": "叫車的小費不是強制的，但在美國大家習慣給。通常在行程結束後直接在 App 裡加，不用準備現金。"
    },
    {
      "t": "評分很重要",
      "d": "司機的評分是五顆星制，四顆星以下就算不太好。所以你覺得一切正常時，大家習慣給五顆星。"
    },
    {
      "t": "一個人搭車坐哪裡？",
      "d": "一個人搭車，坐後座比較普遍、也比較安全；兩個人以上才會有人坐前座。不管坐哪裡，都要繫安全帶。"
    },
    {
      "t": "尖峰加價與取消費",
      "d": "下雨、下班、演唱會結束時會有尖峰加價（surge pricing），叫車前 App 會先顯示價格。叫了車又取消，或讓司機等太久，可能會被收取取消費或等候費。"
    }
  ]
};
