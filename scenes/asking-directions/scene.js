// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "asking-directions",
  "title": "問路",
  "en": "Asking for Directions",
  "emoji": "🧭",
  "goal": "學會向路人和店員問路、聽懂左轉右轉、直走、過幾個路口與地標的說法，並用複述確認，迷路時也能求助",
  "videos": [
    {
      "id": "SHXPpsIJTb0",
      "title": "Asking for and giving directions: Easy English Conversations 💬 Episode 5（BBC Learning English）"
    },
    {
      "id": "DPYJQSA-x50",
      "title": "Asking for and Giving Directions（Easy English）"
    },
    {
      "id": "Lms1qBpfYIM",
      "title": "Asking for Directions – Everyday English Dialogues（Ellii (formerly ESL Library)）"
    }
  ],
  "speakers": {
    "S": {
      "name": "Local",
      "zh": "路人",
      "avatar": "👩",
      "voice": "f"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♂️",
      "voice": "m"
    },
    "C": {
      "name": "Shop Clerk",
      "zh": "店員",
      "avatar": "👨",
      "voice": "m3"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "向路人問路",
      "where": "市區的街角",
      "emoji": "🚶",
      "lines": [
        {
          "s": "Y",
          "en": "Excuse me, could you help me? I'm looking for the public library.",
          "zh": "不好意思，可以幫我一下嗎？我在找公共圖書館。"
        },
        {
          "s": "S",
          "en": "Sure. It's pretty close. Go straight on this street for two blocks.",
          "zh": "好的，很近。沿著這條街直走兩個街口。"
        },
        {
          "s": "Y",
          "en": "Two blocks. Okay.",
          "zh": "兩個街口，好。"
        },
        {
          "s": "S",
          "en": "Then turn left at the traffic light. You'll see a big bank on the corner.",
          "zh": "然後在紅綠燈左轉。轉角會看到一間大銀行。"
        },
        {
          "s": "Y",
          "en": "So, straight for two blocks, then left at the light, and the bank is on the corner?",
          "zh": "所以是直走兩個街口，在紅綠燈左轉，轉角有銀行，對嗎？"
        },
        {
          "s": "S",
          "en": "Exactly. The library is right next to the bank, on your right.",
          "zh": "沒錯。圖書館就在銀行旁邊，在你的右手邊。"
        },
        {
          "s": "Y",
          "en": "About how long does it take to walk?",
          "zh": "走路大概要多久？"
        },
        {
          "s": "S",
          "en": "Maybe five minutes.",
          "zh": "大概五分鐘。"
        },
        {
          "s": "Y",
          "en": "Great. Thank you so much!",
          "zh": "太好了，非常謝謝你！"
        },
        {
          "s": "S",
          "en": "You're welcome. Have a nice day!",
          "zh": "不客氣，祝你有愉快的一天！"
        }
      ]
    },
    {
      "title": "在店裡問路與搭車",
      "where": "便利商店櫃台",
      "emoji": "🏪",
      "lines": [
        {
          "s": "Y",
          "en": "Hi, sorry to bother you. How do I get to the train station from here?",
          "zh": "嗨，抱歉打擾。從這裡怎麼去火車站？"
        },
        {
          "s": "C",
          "en": "It's a bit far to walk. It's about twenty minutes. You could take the number twelve bus.",
          "zh": "用走的有點遠，大約二十分鐘。你可以搭十二號公車。"
        },
        {
          "s": "Y",
          "en": "Where's the bus stop?",
          "zh": "公車站在哪裡？"
        },
        {
          "s": "C",
          "en": "Go out the door and turn right. It's across the street from the gas station.",
          "zh": "出門右轉，在加油站對面。"
        },
        {
          "s": "Y",
          "en": "Across from the gas station. Got it. How often does the bus come?",
          "zh": "加油站對面，了解。公車多久一班？"
        },
        {
          "s": "C",
          "en": "About every fifteen minutes.",
          "zh": "大約每十五分鐘一班。"
        },
        {
          "s": "Y",
          "en": "Okay. Is there an ATM near here, too?",
          "zh": "好的。這附近也有提款機嗎？"
        },
        {
          "s": "C",
          "en": "Yes, there's one right outside, next to the entrance.",
          "zh": "有，就在外面，入口旁邊。"
        },
        {
          "s": "Y",
          "en": "Perfect. Thanks for your help!",
          "zh": "太好了，謝謝你的幫忙！"
        },
        {
          "s": "C",
          "en": "No problem. Take care!",
          "zh": "不客氣，保重！"
        }
      ]
    },
    {
      "title": "迷路了：用手機地圖與求助",
      "where": "陌生的街區",
      "emoji": "📍",
      "lines": [
        {
          "s": "Y",
          "en": "Excuse me, I think I'm lost. Could you tell me where I am?",
          "zh": "不好意思，我想我迷路了。可以告訴我我在哪裡嗎？"
        },
        {
          "s": "S",
          "en": "You're on Oak Street, near the corner of Oak and Fifth.",
          "zh": "你在 Oak Street，靠近 Oak 和 Fifth 的轉角。"
        },
        {
          "s": "Y",
          "en": "I'm trying to get to the Grand Hotel. My phone map isn't working.",
          "zh": "我想去 Grand Hotel，我的手機地圖不能用。"
        },
        {
          "s": "S",
          "en": "Oh, you're going the wrong way. Turn around and walk back to Fifth Street.",
          "zh": "喔，你走反方向了。請轉身走回 Fifth Street。"
        },
        {
          "s": "Y",
          "en": "Turn around, and go back to Fifth.",
          "zh": "轉身，走回 Fifth。"
        },
        {
          "s": "S",
          "en": "Right. Then turn right and keep walking. You'll pass a park on your left.",
          "zh": "對。然後右轉繼續走，你會在左手邊經過一座公園。"
        },
        {
          "s": "Y",
          "en": "And the hotel?",
          "zh": "那飯店呢？"
        },
        {
          "s": "S",
          "en": "It's the tall building after the park, with a red sign.",
          "zh": "就是公園後面那棟有紅色招牌的高樓。"
        },
        {
          "s": "Y",
          "en": "Thank you. Is it safe to walk there at night?",
          "zh": "謝謝。晚上走過去安全嗎？"
        },
        {
          "s": "S",
          "en": "It should be fine on the main streets, but stay where there are people and lights.",
          "zh": "走大馬路應該沒問題，但請待在有人和有燈光的地方。"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "Excuse me, could you help me?",
      "zh": "不好意思，可以幫我一下嗎？"
    },
    {
      "en": "I'm looking for the public library.",
      "zh": "我在找公共圖書館。"
    },
    {
      "en": "How do I get to the train station?",
      "zh": "請問怎麼去火車站？"
    },
    {
      "en": "Is it far from here?",
      "zh": "離這裡遠嗎？"
    },
    {
      "en": "Is it within walking distance?",
      "zh": "走路可以到嗎？"
    },
    {
      "en": "Go straight for two blocks.",
      "zh": "直走兩個街口。"
    },
    {
      "en": "Turn left at the traffic light.",
      "zh": "在紅綠燈左轉。"
    },
    {
      "en": "Turn right at the corner.",
      "zh": "在轉角右轉。"
    },
    {
      "en": "It's on your left.",
      "zh": "在你的左手邊。"
    },
    {
      "en": "It's across from the bank.",
      "zh": "在銀行對面。"
    },
    {
      "en": "It's next to the post office.",
      "zh": "在郵局旁邊。"
    },
    {
      "en": "You can't miss it.",
      "zh": "你不會錯過的（很明顯）。"
    },
    {
      "en": "Keep going until you see a big park.",
      "zh": "一直走，直到看到一座大公園。"
    },
    {
      "en": "You're going the wrong way.",
      "zh": "你走反方向了。"
    },
    {
      "en": "Could you say that again, please?",
      "zh": "可以請你再說一次嗎？"
    },
    {
      "en": "So I go straight, then turn left. Is that right?",
      "zh": "所以我直走然後左轉，對嗎？"
    },
    {
      "en": "How long does it take to walk?",
      "zh": "走路要多久？"
    },
    {
      "en": "I think I'm lost.",
      "zh": "我想我迷路了。"
    },
    {
      "en": "Where am I on this map?",
      "zh": "我在這張地圖上的哪裡？"
    },
    {
      "en": "Could you show me on the map?",
      "zh": "可以在地圖上指給我看嗎？"
    }
  ],
  "hear": [
    {
      "en": "Where are you trying to go?",
      "zh": "你想去哪裡？",
      "reply": "I'm looking for the public library.",
      "replyZh": "我在找公共圖書館。"
    },
    {
      "en": "Go straight for two blocks.",
      "zh": "直走兩個街口。",
      "reply": "Two blocks. Okay.",
      "replyZh": "兩個街口，好。"
    },
    {
      "en": "Turn left at the next traffic light.",
      "zh": "在下一個紅綠燈左轉。",
      "reply": "Left at the light. Got it.",
      "replyZh": "紅綠燈左轉，了解。"
    },
    {
      "en": "It's on your right, next to the bank.",
      "zh": "在你的右手邊，銀行旁邊。",
      "reply": "Next to the bank. Thanks!",
      "replyZh": "銀行旁邊，謝謝！"
    },
    {
      "en": "It's about a five-minute walk.",
      "zh": "走路大約五分鐘。",
      "reply": "That's not too far. Thank you.",
      "replyZh": "不會太遠，謝謝。"
    },
    {
      "en": "It's a bit far to walk. You could take the bus.",
      "zh": "走路有點遠，你可以搭公車。",
      "reply": "Where's the bus stop?",
      "replyZh": "公車站在哪裡？"
    },
    {
      "en": "You're going the wrong way.",
      "zh": "你走反方向了。",
      "reply": "Oh no. Which way should I go?",
      "replyZh": "糟糕，我該往哪邊走？"
    },
    {
      "en": "You can't miss it. It's a big red building.",
      "zh": "你不會錯過的，是一棟紅色的大建築。",
      "reply": "Great, thank you!",
      "replyZh": "太好了，謝謝！"
    },
    {
      "en": "Do you want me to show you on the map?",
      "zh": "要我在地圖上指給你看嗎？",
      "reply": "Yes, please. That would help.",
      "replyZh": "好，麻煩你，那樣很有幫助。"
    },
    {
      "en": "Are you walking or driving?",
      "zh": "你是走路還是開車？",
      "reply": "I'm walking.",
      "replyZh": "我走路。"
    }
  ],
  "say": [
    {
      "en": "Excuse me, how do I get to Main Street?",
      "zh": "不好意思，請問怎麼去 Main Street？"
    },
    {
      "en": "Is there a pharmacy near here?",
      "zh": "這附近有藥局嗎？"
    },
    {
      "en": "Which way is the subway station?",
      "zh": "地鐵站往哪個方向？"
    },
    {
      "en": "How far is it from here?",
      "zh": "離這裡多遠？"
    },
    {
      "en": "So I turn left at the second light?",
      "zh": "所以我在第二個紅綠燈左轉嗎？"
    },
    {
      "en": "Could you speak a little slower, please?",
      "zh": "可以請你說慢一點嗎？"
    },
    {
      "en": "Sorry, I didn't catch that.",
      "zh": "抱歉，我沒聽清楚。"
    },
    {
      "en": "Could you write that down for me?",
      "zh": "可以幫我寫下來嗎？"
    },
    {
      "en": "Could you point to where we are on the map?",
      "zh": "可以在地圖上指出我們現在的位置嗎？"
    },
    {
      "en": "Thanks so much for your help.",
      "zh": "非常謝謝你的幫忙。"
    }
  ],
  "vocab": [
    {
      "w": "block",
      "pos": "n.",
      "zh": "街區、街口",
      "ex": "Walk two blocks and turn right.",
      "exzh": "走兩個街口，然後右轉。"
    },
    {
      "w": "corner",
      "pos": "n.",
      "zh": "轉角",
      "ex": "The bank is on the corner.",
      "exzh": "銀行在轉角。"
    },
    {
      "w": "traffic light",
      "pos": "n.",
      "zh": "紅綠燈",
      "ex": "Turn left at the traffic light.",
      "exzh": "在紅綠燈左轉。"
    },
    {
      "w": "intersection",
      "pos": "n.",
      "zh": "十字路口",
      "ex": "Turn right at the next intersection.",
      "exzh": "在下一個路口右轉。"
    },
    {
      "w": "crosswalk",
      "pos": "n.",
      "zh": "斑馬線",
      "ex": "Use the crosswalk to cross the street.",
      "exzh": "請走斑馬線過馬路。"
    },
    {
      "w": "straight",
      "pos": "adv.",
      "zh": "直直地",
      "ex": "Go straight for three blocks.",
      "exzh": "直走三個街口。"
    },
    {
      "w": "across from",
      "pos": "phr.",
      "zh": "在……對面",
      "ex": "It's across from the park.",
      "exzh": "在公園對面。"
    },
    {
      "w": "next to",
      "pos": "phr.",
      "zh": "在……旁邊",
      "ex": "The cafe is next to the bookstore.",
      "exzh": "咖啡店在書店旁邊。"
    },
    {
      "w": "landmark",
      "pos": "n.",
      "zh": "地標",
      "ex": "Look for a big landmark, like the clock tower.",
      "exzh": "找明顯的地標，像是鐘塔。"
    },
    {
      "w": "walking distance",
      "pos": "n.",
      "zh": "步行可到的距離",
      "ex": "The hotel is within walking distance.",
      "exzh": "飯店走路就能到。"
    },
    {
      "w": "lost",
      "pos": "adj.",
      "zh": "迷路的",
      "ex": "I'm lost. Can you help me?",
      "exzh": "我迷路了，可以幫我嗎？"
    },
    {
      "w": "GPS",
      "pos": "n.",
      "zh": "衛星導航",
      "ex": "My GPS stopped working.",
      "exzh": "我的導航壞了。"
    }
  ],
  "situations": [
    {
      "title": "😵 對方講太快、用了很多方向",
      "hear": {
        "en": "Go down this street, take a left at the second light, then a right after the gas station, and it's on your left.",
        "zh": "（講得很快）沿著這條街走，第二個紅綠燈左轉，過了加油站右轉，就在你的左手邊。",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you say that a little slower?",
          "zh": "不好意思，可以說慢一點嗎？"
        },
        {
          "en": "So, left at the second light, then right after the gas station. Is that right?",
          "zh": "所以是第二個紅綠燈左轉，過了加油站右轉，對嗎？"
        }
      ],
      "tip": "路線太長就請對方一步一步講，並用 So… Is that right? 複述確認。最多記兩三個轉彎，走到再問下一個。"
    },
    {
      "title": "🗺️ 想請對方在地圖上指出來",
      "say": [
        {
          "en": "Could you show me on my phone? I'm here, and I need to go there.",
          "zh": "可以在我的手機上指給我看嗎？我在這裡，我要去那裡。"
        },
        {
          "en": "Could you point to it on the map?",
          "zh": "可以在地圖上指出來嗎？"
        }
      ],
      "tip": "手機地圖是最好的輔助。直接把地圖拿給對方看，比光聽口說更不容易誤會。"
    },
    {
      "title": "🙋 對方也不知道",
      "hear": {
        "en": "Sorry, I'm not from around here.",
        "zh": "抱歉，我不是這裡人（我也不熟）。"
      },
      "say": [
        {
          "en": "No problem. Thanks anyway.",
          "zh": "沒關係，還是謝謝你。"
        },
        {
          "en": "Do you know someone I could ask?",
          "zh": "你知道可以問誰嗎？"
        }
      ],
      "tip": "被說不知道很常見，禮貌道謝再問下一個人。店員、警察、咖啡店通常最清楚附近的位置。"
    },
    {
      "title": "🚏 想知道怎麼搭車過去",
      "say": [
        {
          "en": "Is it better to walk or take the bus?",
          "zh": "走路比較好，還是搭公車比較好？"
        },
        {
          "en": "Which bus goes there, and where is the stop?",
          "zh": "哪一班公車會到那裡？站牌在哪？"
        }
      ],
      "tip": "路程超過二十分鐘，或天氣不好時，問一下 walk or bus。美國很多地方不容易走路，距離比看起來遠。"
    },
    {
      "title": "🌙 晚上或不安全的地方",
      "say": [
        {
          "en": "Is it safe to walk there at night?",
          "zh": "晚上走過去安全嗎？"
        },
        {
          "en": "Is there a better route with more lights and people?",
          "zh": "有比較多燈光和人的路線嗎？"
        }
      ],
      "tip": "在不熟的地方，晚上盡量走大馬路、有燈有人的路線，也可以直接叫車。有任何不安，進附近的店家求助。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "Go straight for two blocks, and then turn left at the traffic light.",
      "prompt": "路人說的路線是什麼？",
      "options": [
        "直走兩個街口，紅綠燈左轉",
        "直走兩個街口，紅綠燈右轉",
        "馬上左轉，再直走"
      ],
      "answer": 0,
      "note": "left 是左，right 是右；block 是街口。"
    },
    {
      "type": "選擇回應",
      "audio": "Where are you trying to go?",
      "prompt": "你要去圖書館，最適合怎麼回答？",
      "options": [
        "I'm looking for the public library.",
        "I'm walking, thanks.",
        "It's two blocks."
      ],
      "answer": 0,
      "note": "Where are you trying to go? 是問你的目的地。"
    },
    {
      "type": "聽懂意思",
      "audio": "It's across from the bank, on your right.",
      "prompt": "那個地方在哪裡？",
      "options": [
        "銀行對面，在你的右手邊",
        "銀行旁邊，在你的左手邊",
        "銀行裡面"
      ],
      "answer": 0,
      "note": "across from 是對面，next to 是旁邊。"
    },
    {
      "type": "聽數字",
      "audio": "It's about a five-minute walk.",
      "prompt": "走路要多久？",
      "options": [
        "約五分鐘",
        "約十五分鐘",
        "約五十分鐘"
      ],
      "answer": 0,
      "note": "five-minute walk 是五分鐘的路程。"
    },
    {
      "type": "聽懂意思",
      "audio": "It's a bit far to walk. You could take the number twelve bus.",
      "prompt": "店員建議你怎麼去？",
      "options": [
        "搭十二號公車",
        "走路去",
        "叫計程車"
      ],
      "answer": 0,
      "note": "a bit far 是有點遠。"
    },
    {
      "type": "聽懂意思",
      "audio": "Oh, you're going the wrong way. Turn around and walk back to Fifth Street.",
      "prompt": "路人說了什麼？",
      "options": [
        "你走反了，請轉身走回 Fifth Street",
        "你走對了，繼續直走",
        "你要過馬路"
      ],
      "answer": 0,
      "note": "wrong way 是走錯方向，turn around 是轉身。"
    },
    {
      "type": "選擇回應",
      "audio": "You can't miss it. It's a big red building.",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "Great, thank you!",
        "No, I can't.",
        "It's very big."
      ],
      "answer": 0,
      "note": "You can't miss it. 是「很明顯，你一定找得到」。"
    },
    {
      "type": "聽懂意思",
      "audio": "Sorry, I'm not from around here.",
      "prompt": "對方是什麼意思？",
      "options": [
        "對方也不熟這裡",
        "對方住在附近",
        "對方不想說話"
      ],
      "answer": 0,
      "note": "not from around here 是「不是本地人，不熟」。"
    },
    {
      "type": "對話理解",
      "audio": "Excuse me, I'm lost. I'm trying to get to the Grand Hotel, but my phone map isn't working.",
      "prompt": "這個人遇到什麼問題？",
      "options": [
        "迷路了，手機地圖不能用",
        "飯店客滿",
        "錯過了公車"
      ],
      "answer": 0,
      "note": "isn't working 是不能用、壞了。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "So I go straight for two blocks, turn left at the light, and the library is next to the bank. Is that right?",
      "prompt": "這個人在做什麼？",
      "options": [
        "複述路線確認",
        "問路",
        "道謝並離開"
      ],
      "answer": 0,
      "note": "Is that right? 是確認自己有沒有聽對。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Hi, do you need some help? You look a little lost.",
      "promptZh": "嗨，需要幫忙嗎？你看起來有點迷路。",
      "hint": "說你在找什麼地方",
      "expect": "looking for|how do i|where|get to|find|help",
      "model": "Yes, please. I'm looking for the public library.",
      "modelZh": "好，麻煩你，我在找公共圖書館。"
    },
    {
      "prompt": "Go straight for two blocks and turn left at the light.",
      "promptZh": "直走兩個街口，在紅綠燈左轉。",
      "hint": "複述確認",
      "expect": "straight|two|blocks|left|light|so|right|okay|got it",
      "model": "So, two blocks straight, then left at the light. Is that right?",
      "modelZh": "所以是直走兩個街口，紅綠燈左轉，對嗎？"
    },
    {
      "prompt": "Yes, that's right. The library is on your right.",
      "promptZh": "對，沒錯，圖書館在你的右手邊。",
      "hint": "道謝，問走路多久",
      "expect": "thank|thanks|how long|walk|far|great|appreciate",
      "model": "Thank you. How long does it take to walk?",
      "modelZh": "謝謝，走路要多久？"
    },
    {
      "prompt": "It's about five minutes on foot.",
      "promptZh": "走路大約五分鐘。",
      "hint": "道謝並道別",
      "expect": "thank|thanks|great|appreciate|bye|have a|okay",
      "model": "Great. Thanks so much for your help!",
      "modelZh": "太好了，非常謝謝你的幫忙！"
    },
    {
      "prompt": "It's a bit far to walk. You could take the bus.",
      "promptZh": "走路有點遠，你可以搭公車。",
      "hint": "問公車站在哪裡",
      "expect": "where|bus stop|which|bus|how often|stop",
      "model": "Where is the bus stop?",
      "modelZh": "公車站在哪裡？"
    },
    {
      "prompt": "It's across the street from the gas station.",
      "promptZh": "在加油站對面。",
      "hint": "複述，並問公車多久一班",
      "expect": "across|gas station|how often|every|thanks|got it",
      "model": "Across from the gas station. Got it. How often does it come?",
      "modelZh": "加油站對面，了解，多久一班？"
    },
    {
      "prompt": "Sorry, I'm not from around here.",
      "promptZh": "抱歉，我不是這裡人。",
      "hint": "說沒關係，並道謝",
      "expect": "no problem|that'?s okay|that'?s fine|thanks|thank|anyway|okay",
      "model": "No problem. Thanks anyway.",
      "modelZh": "沒關係，還是謝謝你。"
    },
    {
      "prompt": "Do you want me to show you on the map?",
      "promptZh": "要我在地圖上指給你看嗎？",
      "hint": "說好，麻煩你",
      "expect": "yes|yeah|sure|please|help|that would|thanks|okay",
      "model": "Yes, please. That would help a lot.",
      "modelZh": "好，麻煩你，那樣很有幫助。"
    }
  ],
  "culture": [
    {
      "t": "美國的「一個街口」比看起來遠",
      "d": "美國的街口（block）常常比台灣長，而且很多地方沒有騎樓與步道。路人說 It's a five-minute walk 通常是對的，但說 It's close 時要問一下是走路還是開車。"
    },
    {
      "t": "用街名與方位說路",
      "d": "美國的路多是棋盤式，人們會用街名、地標和左右轉指路，例如 Turn left on Oak Street。也會用方位 north、south、east、west，看到街牌上的方位可以幫你確認方向。"
    },
    {
      "t": "手機地圖是好幫手",
      "d": "Google Maps 或 Apple Maps 可以顯示步行、公車與開車路線。走路時可以開啟步行導航；沒有網路時，先下載離線地圖。"
    },
    {
      "t": "問路對象與禮貌",
      "d": "問路可以找店員、咖啡店服務生、警察或看起來悠閒的路人。開頭用 Excuse me，結束一定說 Thank you。對方說 I'm not from around here 是不熟，不是不想幫你。"
    },
    {
      "t": "注意安全",
      "d": "不要在陌生又沒人的地方，把手機和錢包拿出來。覺得不安時，走進附近的店家問路，不要跟著陌生人去偏僻的地方。"
    }
  ]
};
