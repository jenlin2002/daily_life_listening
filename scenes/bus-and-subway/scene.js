// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "bus-and-subway",
  "title": "搭公車與地鐵",
  "en": "Taking the Bus & Subway",
  "emoji": "🚇",
  "goal": "學會在地鐵站買票和加值、問班次與轉乘、上公車付車資和請司機停靠，並聽懂月台廣播與錯過站時的處理",
  "videos": [
    {
      "id": "itrrttmZ1LI",
      "title": "At The Station - Easy Learning English Speaking Conversation（Learn English with Jessica）"
    },
    {
      "id": "enpQqJkYBaY",
      "title": "5-Minute English Conversation Practice: Buying a Train Ticket (Travel English)（English Together）"
    },
    {
      "id": "sM1mWWY75n0",
      "title": "Metro English Conversation | Buying a Ticket – Easy Subway Dialogue（Teach Easy English）"
    }
  ],
  "speakers": {
    "S": {
      "name": "Station Agent",
      "zh": "站務人員",
      "avatar": "👩‍💼",
      "voice": "f2"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♀️",
      "voice": "f"
    },
    "D": {
      "name": "Bus Driver",
      "zh": "公車司機",
      "avatar": "👨",
      "voice": "m2"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "地鐵站：買票與加值",
      "where": "地鐵站的售票機與服務櫃台",
      "emoji": "🎫",
      "lines": [
        {
          "s": "Y",
          "en": "Excuse me, I'm new here. How do I get to the airport by subway?",
          "zh": "不好意思，我剛來這裡。請問搭地鐵怎麼去機場？"
        },
        {
          "s": "S",
          "en": "Take the blue line toward the airport. It's about thirty minutes.",
          "zh": "搭藍線往機場方向，大約三十分鐘。"
        },
        {
          "s": "Y",
          "en": "Great. How much is a ticket?",
          "zh": "太好了。車票多少錢？"
        },
        {
          "s": "S",
          "en": "A single ride is two seventy-five. Or you can get a transit card and add money to it.",
          "zh": "單程票是 2.75 元。或者你可以買一張交通卡再加值。"
        },
        {
          "s": "Y",
          "en": "Is the card cheaper?",
          "zh": "用交通卡比較便宜嗎？"
        },
        {
          "s": "S",
          "en": "Yes, you save a little on each ride, and you get free transfers to the bus within two hours.",
          "zh": "對，每趟會便宜一點，而且兩小時內轉搭公車免費。"
        },
        {
          "s": "Y",
          "en": "I'll get the card, then. Can I add twenty dollars to it?",
          "zh": "那我買交通卡。可以加值二十塊嗎？"
        },
        {
          "s": "S",
          "en": "Sure. Put your cash in the machine, tap the card on the reader, and choose twenty.",
          "zh": "可以。把現金放進機器，把卡片貼在感應區，選二十元。"
        },
        {
          "s": "Y",
          "en": "Thank you. And where do I tap in?",
          "zh": "謝謝。那我要在哪裡刷卡進站？"
        },
        {
          "s": "S",
          "en": "Right at the gate. Tap your card, and wait for the green light.",
          "zh": "就在閘門，刷卡後等綠燈亮。"
        }
      ]
    },
    {
      "title": "上公車：車資與請司機停車",
      "where": "公車站與車上",
      "emoji": "🚌",
      "lines": [
        {
          "s": "Y",
          "en": "Hi, does this bus go to downtown?",
          "zh": "嗨，這班公車有到市中心嗎？"
        },
        {
          "s": "D",
          "en": "Yes, it does. It stops at Main Street and Central Station.",
          "zh": "有的，會停 Main Street 和 Central Station。"
        },
        {
          "s": "Y",
          "en": "How much is the fare?",
          "zh": "車資多少？"
        },
        {
          "s": "D",
          "en": "Two fifty. You can tap your card or pay with exact change.",
          "zh": "兩塊五。可以刷卡，或準備剛好的零錢。"
        },
        {
          "s": "Y",
          "en": "I'll tap my card. Do you give change if I use cash?",
          "zh": "我刷卡。如果用現金，你會找零嗎？"
        },
        {
          "s": "D",
          "en": "No, I'm sorry. The machine doesn't give change.",
          "zh": "不會，抱歉，機器不找零。"
        },
        {
          "s": "Y",
          "en": "Got it. Could you let me know when we get to the museum?",
          "zh": "了解。到博物館的時候可以請你告訴我嗎？"
        },
        {
          "s": "D",
          "en": "Sure. It's about ten stops from here.",
          "zh": "可以，從這裡大約十站。"
        },
        {
          "s": "Y",
          "en": "Thank you. How do I request a stop?",
          "zh": "謝謝。我要怎麼按鈴下車？"
        },
        {
          "s": "D",
          "en": "Just press the red button or pull the cord, and the sign will say \"Stop Requested.\"",
          "zh": "按紅色按鈕或拉鈴，標示就會顯示「已要求停車」。"
        }
      ]
    },
    {
      "title": "月台上：問班次、轉乘與錯過站",
      "where": "地鐵月台與公車站",
      "emoji": "🕒",
      "lines": [
        {
          "s": "Y",
          "en": "Excuse me, is this the right platform for the blue line to the airport?",
          "zh": "不好意思，這是搭藍線去機場的月台嗎？"
        },
        {
          "s": "S",
          "en": "No, you need the other side. Go downstairs and cross over.",
          "zh": "不是，你要去另一邊。請下樓再走過去。"
        },
        {
          "s": "Y",
          "en": "Okay. When is the next train?",
          "zh": "好。下一班車什麼時候來？"
        },
        {
          "s": "S",
          "en": "In about five minutes. You can check the screen above the platform.",
          "zh": "大約五分鐘後。你可以看月台上方的螢幕。"
        },
        {
          "s": "Y",
          "en": "Do I need to transfer?",
          "zh": "我需要轉車嗎？"
        },
        {
          "s": "S",
          "en": "No, it's a direct train. Just stay on until the last stop.",
          "zh": "不用，是直達車，坐到終點站就好。"
        },
        {
          "s": "Y",
          "en": "I think I missed my stop. What should I do?",
          "zh": "我想我坐過站了，我該怎麼辦？"
        },
        {
          "s": "S",
          "en": "Get off at the next station and take the train going the other way.",
          "zh": "在下一站下車，改搭反方向的車。"
        },
        {
          "s": "Y",
          "en": "Thanks so much for your help!",
          "zh": "非常謝謝你的幫忙！"
        },
        {
          "s": "S",
          "en": "No problem. Mind the gap when you get on the train.",
          "zh": "不客氣。上車時請注意月台間隙。"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "How do I get to the airport by subway?",
      "zh": "搭地鐵怎麼去機場？"
    },
    {
      "en": "Which line should I take?",
      "zh": "我該搭哪一條線？"
    },
    {
      "en": "How much is a single ride?",
      "zh": "單程票多少錢？"
    },
    {
      "en": "Can I add money to my card?",
      "zh": "我可以加值我的卡嗎？"
    },
    {
      "en": "Where do I tap in?",
      "zh": "我要在哪裡刷卡進站？"
    },
    {
      "en": "Is this the right platform for downtown?",
      "zh": "這是往市中心的月台嗎？"
    },
    {
      "en": "When is the next train?",
      "zh": "下一班車什麼時候來？"
    },
    {
      "en": "Do I need to transfer?",
      "zh": "我需要轉車嗎？"
    },
    {
      "en": "Where do I transfer?",
      "zh": "我要在哪裡轉車？"
    },
    {
      "en": "How many stops is it?",
      "zh": "要坐幾站？"
    },
    {
      "en": "Does this bus go to the museum?",
      "zh": "這班公車有到博物館嗎？"
    },
    {
      "en": "How much is the fare?",
      "zh": "車資多少？"
    },
    {
      "en": "Do you give change?",
      "zh": "你會找零嗎？"
    },
    {
      "en": "Could you let me know when we get there?",
      "zh": "到的時候可以告訴我嗎？"
    },
    {
      "en": "How do I request a stop?",
      "zh": "我要怎麼按鈴下車？"
    },
    {
      "en": "Excuse me, is this seat taken?",
      "zh": "不好意思，這個位子有人坐嗎？"
    },
    {
      "en": "I think I missed my stop.",
      "zh": "我想我坐過站了。"
    },
    {
      "en": "Excuse me, I'm getting off here.",
      "zh": "不好意思，我要在這裡下車。"
    },
    {
      "en": "Mind the gap.",
      "zh": "請注意月台間隙。"
    },
    {
      "en": "This train is out of service.",
      "zh": "這班車不載客（停駛）。"
    }
  ],
  "hear": [
    {
      "en": "Where are you headed?",
      "zh": "你要去哪裡？",
      "reply": "I'm going to the airport.",
      "replyZh": "我要去機場。"
    },
    {
      "en": "Take the blue line toward the airport.",
      "zh": "搭藍線往機場方向。",
      "reply": "Thanks. Is it a direct train?",
      "replyZh": "謝謝。是直達車嗎？"
    },
    {
      "en": "A single ride is two seventy-five.",
      "zh": "單程票是 2.75 元。",
      "reply": "Can I pay by card?",
      "replyZh": "我可以刷卡嗎？"
    },
    {
      "en": "Would you like to buy a day pass?",
      "zh": "你要買一日券嗎？",
      "reply": "No, just a single ride, please.",
      "replyZh": "不用，單程票就好，謝謝。"
    },
    {
      "en": "You'll need to transfer at Central Station.",
      "zh": "你需要在 Central Station 轉車。",
      "reply": "Which line do I transfer to?",
      "replyZh": "我要轉搭哪一條線？"
    },
    {
      "en": "The next train is in five minutes.",
      "zh": "下一班車五分鐘後到。",
      "reply": "Okay, thank you.",
      "replyZh": "好的，謝謝。"
    },
    {
      "en": "Please move to the back of the bus.",
      "zh": "請往車廂後面移動。",
      "reply": "Sure, no problem.",
      "replyZh": "好的，沒問題。"
    },
    {
      "en": "Exact change only, please.",
      "zh": "請準備剛好的零錢。",
      "reply": "Oh, I only have a card. Can I tap it?",
      "replyZh": "喔，我只有卡片，可以刷卡嗎？"
    },
    {
      "en": "This is the last stop. Everyone off, please.",
      "zh": "這是終點站，請所有乘客下車。",
      "reply": "Thank you. Is the airport shuttle nearby?",
      "replyZh": "謝謝，機場接駁車在附近嗎？"
    },
    {
      "en": "Stand clear of the closing doors, please.",
      "zh": "車門即將關閉，請勿靠近車門。",
      "reply": "Sorry!",
      "replyZh": "抱歉！"
    }
  ],
  "say": [
    {
      "en": "Excuse me, how do I get to downtown?",
      "zh": "不好意思，請問怎麼去市中心？"
    },
    {
      "en": "One ticket to Central Station, please.",
      "zh": "我要一張到 Central Station 的票。"
    },
    {
      "en": "Can I put twenty dollars on this card?",
      "zh": "我可以在這張卡加值二十塊嗎？"
    },
    {
      "en": "Is this train going toward the airport?",
      "zh": "這班車有往機場嗎？"
    },
    {
      "en": "Is there a bus that goes to the university?",
      "zh": "有公車到大學嗎？"
    },
    {
      "en": "Could you tell me when to get off?",
      "zh": "可以告訴我什麼時候下車嗎？"
    },
    {
      "en": "Excuse me, may I get through?",
      "zh": "不好意思，可以讓我過一下嗎？"
    },
    {
      "en": "Would you like to sit here?",
      "zh": "你要坐這裡嗎？（讓座）"
    },
    {
      "en": "Which stop is closest to the library?",
      "zh": "哪一站離圖書館最近？"
    },
    {
      "en": "Sorry, could you say that again?",
      "zh": "不好意思，可以再說一次嗎？"
    }
  ],
  "vocab": [
    {
      "w": "fare",
      "pos": "n.",
      "zh": "車資",
      "ex": "The bus fare is two fifty.",
      "exzh": "公車車資是兩塊五。"
    },
    {
      "w": "transit card",
      "pos": "n.",
      "zh": "交通卡",
      "ex": "I need to add money to my transit card.",
      "exzh": "我需要幫交通卡加值。"
    },
    {
      "w": "platform",
      "pos": "n.",
      "zh": "月台",
      "ex": "The train leaves from platform two.",
      "exzh": "火車從二號月台出發。"
    },
    {
      "w": "transfer",
      "pos": "v./n.",
      "zh": "轉乘",
      "ex": "You can transfer to the bus for free.",
      "exzh": "你可以免費轉乘公車。"
    },
    {
      "w": "stop",
      "pos": "n.",
      "zh": "站、停靠站",
      "ex": "Which stop is mine?",
      "exzh": "我該在哪一站下車？"
    },
    {
      "w": "line",
      "pos": "n.",
      "zh": "（地鐵）路線",
      "ex": "Take the red line downtown.",
      "exzh": "搭紅線去市中心。"
    },
    {
      "w": "schedule",
      "pos": "n.",
      "zh": "時刻表",
      "ex": "Can I see the bus schedule?",
      "exzh": "我可以看看公車時刻表嗎？"
    },
    {
      "w": "rush hour",
      "pos": "n.",
      "zh": "尖峰時段",
      "ex": "The subway is crowded at rush hour.",
      "exzh": "尖峰時段地鐵很擠。"
    },
    {
      "w": "exact change",
      "pos": "n.",
      "zh": "剛好的零錢",
      "ex": "Please have exact change ready.",
      "exzh": "請準備好剛好的零錢。"
    },
    {
      "w": "turnstile",
      "pos": "n.",
      "zh": "閘門",
      "ex": "Tap your card at the turnstile.",
      "exzh": "在閘門刷你的卡。"
    },
    {
      "w": "delay",
      "pos": "n./v.",
      "zh": "誤點",
      "ex": "There is a ten-minute delay.",
      "exzh": "會誤點十分鐘。"
    },
    {
      "w": "direct",
      "pos": "adj.",
      "zh": "直達的",
      "ex": "Is this a direct train?",
      "exzh": "這是直達車嗎？"
    }
  ],
  "situations": [
    {
      "title": "😵 廣播太快，聽不清楚",
      "hear": {
        "en": "Attention passengers, the blue line is delayed due to a signal problem, and service will resume shortly.",
        "zh": "（廣播，很快）各位旅客請注意，藍線因信號問題誤點，將很快恢復服務。",
        "fast": true
      },
      "say": [
        {
          "en": "Excuse me, what did the announcement say?",
          "zh": "不好意思，剛剛廣播說了什麼？"
        },
        {
          "en": "Is the blue line running, or is it delayed?",
          "zh": "藍線有在運行嗎，還是誤點了？"
        }
      ],
      "tip": "廣播聽不懂很正常，直接問旁邊的人或站務人員最快。抓到關鍵字 delayed（誤點）、out of service（停駛）就夠了。"
    },
    {
      "title": "🚉 搭錯方向或坐過站",
      "say": [
        {
          "en": "I think I'm going the wrong way. How do I get to Central Station?",
          "zh": "我想我搭反方向了，要怎麼去 Central Station？"
        },
        {
          "en": "I missed my stop. Can I get off at the next one and go back?",
          "zh": "我坐過站了，可以在下一站下車再搭回去嗎？"
        }
      ],
      "tip": "在下一站下車，過天橋或換月台，搭反方向的車即可。通常在同一個閘門內換月台不用再付一次車資。"
    },
    {
      "title": "💳 交通卡餘額不足",
      "hear": {
        "en": "Insufficient fare. Please add value.",
        "zh": "（閘門提示）餘額不足，請加值。"
      },
      "say": [
        {
          "en": "Excuse me, my card ran out of money. Where can I add value?",
          "zh": "不好意思，我的卡沒錢了，要去哪裡加值？"
        },
        {
          "en": "Can I add value with my credit card?",
          "zh": "我可以用信用卡加值嗎？"
        }
      ],
      "tip": "Add value 是加值。售票機通常可以用現金或信用卡，有些城市也能用手機 App 加值。"
    },
    {
      "title": "🪑 想讓座或請人讓路",
      "say": [
        {
          "en": "Would you like to take my seat?",
          "zh": "你要坐我的位子嗎？"
        },
        {
          "en": "Excuse me, I'm getting off at the next stop. May I get through?",
          "zh": "不好意思，我下一站要下車，可以讓我過一下嗎？"
        }
      ],
      "tip": "美國人搭車也會讓座給老人、孕婦和行動不便的人。擠過人群時用 Excuse me，不用道歉太多次。"
    },
    {
      "title": "🌙 末班車已經過了",
      "say": [
        {
          "en": "Excuse me, is the last train still running?",
          "zh": "不好意思，末班車還有嗎？"
        },
        {
          "en": "What's the best way to get home after midnight?",
          "zh": "半夜之後怎麼回家最好？"
        }
      ],
      "tip": "很多城市的地鐵半夜就停駛，要先查末班時間。晚上可以改搭夜間公車或叫車，不要一個人在陌生的車站久留。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "Take the blue line toward the airport.",
      "prompt": "站務人員要你怎麼做？",
      "options": [
        "搭藍線往機場方向",
        "搭紅線往市中心",
        "搭公車去機場"
      ],
      "answer": 0,
      "note": "toward the airport 是往機場的方向。"
    },
    {
      "type": "聽數字",
      "audio": "A single ride is two seventy-five.",
      "prompt": "單程票多少錢？",
      "options": [
        "$2.75",
        "$27.50",
        "$2.57"
      ],
      "answer": 0,
      "note": "two seventy-five 是 2.75 元。"
    },
    {
      "type": "選擇回應",
      "audio": "Where are you headed?",
      "prompt": "你要去機場，最適合怎麼回答？",
      "options": [
        "I'm going to the airport.",
        "I took the subway.",
        "It costs two dollars."
      ],
      "answer": 0,
      "note": "Where are you headed? 是問你要去哪裡。"
    },
    {
      "type": "聽懂意思",
      "audio": "You'll need to transfer at Central Station.",
      "prompt": "你要在哪裡轉車？",
      "options": [
        "Central Station",
        "機場",
        "你現在的月台"
      ],
      "answer": 0,
      "note": "transfer at… 是在……轉車。"
    },
    {
      "type": "聽數字",
      "audio": "The next train is in five minutes.",
      "prompt": "下一班車多久後到？",
      "options": [
        "五分鐘",
        "十五分鐘",
        "五十分鐘"
      ],
      "answer": 0,
      "note": "five、fifteen、fifty 要靠重音和字尾分辨。"
    },
    {
      "type": "聽懂意思",
      "audio": "Exact change only, please. The machine doesn't give change.",
      "prompt": "司機要你怎麼付車資？",
      "options": [
        "準備剛好的零錢",
        "付大鈔就好",
        "上車後再付"
      ],
      "answer": 0,
      "note": "exact change 是剛好的零錢；doesn't give change 是不找零。"
    },
    {
      "type": "選擇回應",
      "audio": "Does this bus go to the museum?",
      "prompt": "你要問司機有沒有到博物館，司機說 Yes, it does。你最適合怎麼回答？",
      "options": [
        "Great. Could you let me know when we get there?",
        "Yes, I do.",
        "No, it doesn't."
      ],
      "answer": 0,
      "note": "拜託司機到站時提醒你：Could you let me know when we get there?"
    },
    {
      "type": "聽懂意思",
      "audio": "This is the last stop. Everyone off, please.",
      "prompt": "廣播說了什麼？",
      "options": [
        "終點站，請所有人下車",
        "下一站是終點站",
        "車子要繼續往前開"
      ],
      "answer": 0,
      "note": "last stop 是終點站。"
    },
    {
      "type": "對話理解",
      "audio": "Excuse me, I think I missed my stop. Could I get off at the next station and take a train going the other way?",
      "prompt": "乘客想做什麼？",
      "options": [
        "下一站下車，搭反方向的車",
        "搭到終點站",
        "換搭公車"
      ],
      "answer": 0,
      "note": "going the other way 是反方向。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "Hi, could you tell me how much the fare is, and do you give change if I pay with cash?",
      "prompt": "乘客問了什麼？",
      "options": [
        "車資多少、用現金會不會找零",
        "公車幾點到",
        "怎麼轉乘"
      ],
      "answer": 0,
      "note": "give change 是找零。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Hi, where are you headed?",
      "promptZh": "嗨，你要去哪裡？",
      "hint": "說你要去的地方",
      "expect": "airport|downtown|museum|library|university|station|going to|headed|to the",
      "model": "I'm going to the airport.",
      "modelZh": "我要去機場。"
    },
    {
      "prompt": "Take the blue line. It's a direct train.",
      "promptZh": "搭藍線，是直達車。",
      "hint": "道謝並問要不要轉車或多久",
      "expect": "thank|thanks|how long|transfer|great|okay|ok|which|where",
      "model": "Thanks. How long does it take?",
      "modelZh": "謝謝，要多久？"
    },
    {
      "prompt": "Would you like a single ride or a day pass?",
      "promptZh": "你要單程票還是一日券？",
      "hint": "選一種",
      "expect": "single|one ride|day pass|pass|one way|round",
      "model": "A single ride, please.",
      "modelZh": "單程票，謝謝。"
    },
    {
      "prompt": "Do you have a transit card?",
      "promptZh": "你有交通卡嗎？",
      "hint": "說有或沒有，想買一張",
      "expect": "yes|yeah|no|don'?t|card|buy|get|need",
      "model": "No, I don't. Can I get one here?",
      "modelZh": "沒有，這裡可以買嗎？"
    },
    {
      "prompt": "The fare is two fifty. Exact change or tap your card.",
      "promptZh": "車資兩塊五，請準備零錢或刷卡。",
      "hint": "說你要刷卡",
      "expect": "tap|card|cash|change|pay",
      "model": "I'll tap my card.",
      "modelZh": "我刷卡。"
    },
    {
      "prompt": "You'll need to transfer at Central Station.",
      "promptZh": "你要在 Central Station 轉車。",
      "hint": "問要轉搭哪一條線",
      "expect": "which|what|where|line|platform|how|okay|thanks",
      "model": "Which line do I transfer to?",
      "modelZh": "我要轉搭哪一條線？"
    },
    {
      "prompt": "This is the last stop. Everyone off, please.",
      "promptZh": "終點站了，請所有人下車。",
      "hint": "道謝並問機場接駁車",
      "expect": "thank|thanks|shuttle|airport|where|okay",
      "model": "Thank you. Where can I find the airport shuttle?",
      "modelZh": "謝謝，機場接駁車在哪裡？"
    },
    {
      "prompt": "Is everything okay? You look lost.",
      "promptZh": "一切還好嗎？你看起來迷路了。",
      "hint": "說你坐過站，問怎麼辦",
      "expect": "missed|wrong|lost|stop|help|how do i|get to",
      "model": "I think I missed my stop. How do I get to Central Station?",
      "modelZh": "我想我坐過站了，要怎麼去 Central Station？"
    }
  ],
  "culture": [
    {
      "t": "交通卡通常比較划算",
      "d": "很多城市的地鐵與公車可以用交通卡（如 Clipper、MetroCard、Ventra），每趟比單程票便宜，有時兩小時內轉乘免費。可以在售票機或站內商店買。"
    },
    {
      "t": "美國公車常常不找零",
      "d": "上車付現金通常要準備剛好的零錢，機器不會找零。最方便的是用交通卡或手機感應支付。"
    },
    {
      "t": "自己按鈴下車",
      "d": "公車不會每站都停，要下車必須在到站前按鈴或拉繩，螢幕會顯示 Stop Requested。如果怕錯過站，可以請司機提醒你，或用地圖 App 追蹤位置。"
    },
    {
      "t": "搭車禮儀",
      "d": "背包放在腳邊或抱在胸前，不要佔位子；老人、孕婦、身障者優先坐優先席；聊天和講電話要小聲；排隊上車時先讓人下車。"
    },
    {
      "t": "注意安全與末班車",
      "d": "半夜很多地鐵停駛，要先查末班時間。晚上盡量待在有人的月台中段、靠近監視器的地方，坐在靠近司機或車掌的車廂。"
    }
  ]
};
