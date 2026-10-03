// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "restaurant",
  "title": "餐廳用餐與小費",
  "en": "Eating Out & Tipping",
  "emoji": "🍽️",
  "goal": "學會訂位與入座、點餐與客製（牛排熟度、醬放旁邊、過敏）、請服務生幫忙，以及結帳、分帳和算小費",
  "speakers": {
    "S": {
      "name": "Server",
      "zh": "服務生",
      "avatar": "👩‍🍳",
      "voice": "f2"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♂️",
      "voice": "m"
    },
    "H": {
      "name": "Host",
      "zh": "帶位人員",
      "avatar": "👩‍💼",
      "voice": "f"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "訂位與入座",
      "where": "餐廳門口的帶位櫃台",
      "emoji": "🪑",
      "lines": [
        {
          "s": "H",
          "en": "Hi, welcome to Maple Grill! Do you have a reservation?",
          "zh": "嗨，歡迎光臨 Maple Grill！請問有訂位嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, I do. It's under Chen, for two at seven.",
          "zh": "有的，用陳的名字訂的，兩位，七點。"
        },
        {
          "s": "H",
          "en": "Let me check. Yes, I see it. Your table isn't quite ready. It'll be about five minutes.",
          "zh": "我查一下。有看到了。你們的桌子還沒好，大概再五分鐘。"
        },
        {
          "s": "Y",
          "en": "No problem. We'll wait.",
          "zh": "沒問題，我們等。"
        },
        {
          "s": "H",
          "en": "Thanks for waiting. Right this way. Would you prefer a booth or a table?",
          "zh": "謝謝等候，這邊請。你們想坐沙發座還是一般桌子？"
        },
        {
          "s": "Y",
          "en": "A booth would be great, if you have one.",
          "zh": "如果有沙發座就太好了。"
        },
        {
          "s": "H",
          "en": "Absolutely. Here are your menus. Your server will be right with you.",
          "zh": "當然有。這是你們的菜單，服務生馬上來。"
        },
        {
          "s": "Y",
          "en": "Thank you. Could we also get some water, please?",
          "zh": "謝謝。可以也給我們一些水嗎？"
        }
      ]
    },
    {
      "title": "點餐與客製",
      "where": "餐桌旁，服務生來點餐",
      "emoji": "🥩",
      "lines": [
        {
          "s": "S",
          "en": "Hi there! I'm Emma, and I'll be taking care of you tonight. Can I start you off with something to drink?",
          "zh": "嗨！我是 Emma，今晚由我為你們服務。先給你們點些喝的嗎？"
        },
        {
          "s": "Y",
          "en": "Just water for now, thanks. Do you have any specials tonight?",
          "zh": "先給我水就好，謝謝。今晚有特餐嗎？"
        },
        {
          "s": "S",
          "en": "We do. The special is grilled salmon with roasted vegetables.",
          "zh": "有的，特餐是烤鮭魚配烤蔬菜。"
        },
        {
          "s": "Y",
          "en": "That sounds good. I'm allergic to nuts. Does it have any nuts in it?",
          "zh": "聽起來不錯。我對堅果過敏，裡面有堅果嗎？"
        },
        {
          "s": "S",
          "en": "No nuts in the salmon. I'll double-check with the kitchen to be safe.",
          "zh": "鮭魚沒有堅果。為了保險，我再跟廚房確認一下。"
        },
        {
          "s": "Y",
          "en": "Thank you. Actually, I think I'll have the steak. Can I get it medium rare?",
          "zh": "謝謝。其實我想點牛排，可以做三分熟嗎？"
        },
        {
          "s": "S",
          "en": "Sure. It comes with a side. Would you like fries, a baked potato, or a salad?",
          "zh": "好的，牛排附一道配菜，要薯條、烤馬鈴薯還是沙拉？"
        },
        {
          "s": "Y",
          "en": "A salad, please. Can I get the dressing on the side?",
          "zh": "沙拉，謝謝。可以把醬放旁邊嗎？"
        },
        {
          "s": "S",
          "en": "Of course. Anything else for you?",
          "zh": "當然可以。還需要別的嗎？"
        },
        {
          "s": "Y",
          "en": "That's all for now. Thanks!",
          "zh": "目前這樣就好，謝謝！"
        }
      ]
    },
    {
      "title": "結帳、分帳與小費",
      "where": "用餐結束，準備買單",
      "emoji": "💳",
      "lines": [
        {
          "s": "S",
          "en": "How is everything tasting? Can I get you anything else?",
          "zh": "餐點都還好嗎？還需要什麼嗎？"
        },
        {
          "s": "Y",
          "en": "Everything was delicious. Could we get the check, please?",
          "zh": "都很好吃。可以幫我們結帳嗎？"
        },
        {
          "s": "S",
          "en": "Sure thing. Will this be together or separate?",
          "zh": "好的。要一起付還是分開付？"
        },
        {
          "s": "Y",
          "en": "Separate, please. I'll pay for the steak and my drink.",
          "zh": "分開付，我付牛排和我的飲料。"
        },
        {
          "s": "S",
          "en": "No problem. Here's your total. It's forty-two fifty.",
          "zh": "沒問題，這是你的帳單，一共四十二塊五。"
        },
        {
          "s": "Y",
          "en": "Is the service charge included?",
          "zh": "帳單有含服務費嗎？"
        },
        {
          "s": "S",
          "en": "No, gratuity isn't included for parties this size.",
          "zh": "沒有，這種人數的桌位不含小費。"
        },
        {
          "s": "Y",
          "en": "Okay. I'll put twenty percent on my card.",
          "zh": "好，我用信用卡多付百分之二十的小費。"
        },
        {
          "s": "S",
          "en": "Thank you so much! Here's your receipt. Have a great night!",
          "zh": "非常謝謝你！這是你的收據，祝你有個美好的夜晚！"
        },
        {
          "s": "Y",
          "en": "You too. Thanks for the great service!",
          "zh": "你也是，謝謝你的好服務！"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "Do you have a reservation?",
      "zh": "請問有訂位嗎？"
    },
    {
      "en": "I have a reservation under Chen for two at seven.",
      "zh": "我用陳的名字訂了七點兩位。"
    },
    {
      "en": "Do you have a table for two?",
      "zh": "請問有兩位的桌子嗎？"
    },
    {
      "en": "How long is the wait?",
      "zh": "要等多久？"
    },
    {
      "en": "Would you prefer a booth or a table?",
      "zh": "你想坐沙發座還是一般桌子？"
    },
    {
      "en": "Could we get some water, please?",
      "zh": "可以給我們一些水嗎？"
    },
    {
      "en": "Do you have any specials tonight?",
      "zh": "今晚有特餐嗎？"
    },
    {
      "en": "What do you recommend?",
      "zh": "你推薦什麼？"
    },
    {
      "en": "I'm allergic to nuts.",
      "zh": "我對堅果過敏。"
    },
    {
      "en": "Does it have any dairy in it?",
      "zh": "裡面有乳製品嗎？"
    },
    {
      "en": "Can I get it medium rare?",
      "zh": "可以做三分熟嗎？"
    },
    {
      "en": "Can I get the dressing on the side?",
      "zh": "可以把醬放旁邊嗎？"
    },
    {
      "en": "I'll have the grilled salmon.",
      "zh": "我要點烤鮭魚。"
    },
    {
      "en": "Could I get a refill, please?",
      "zh": "可以幫我續杯嗎？"
    },
    {
      "en": "Excuse me, this isn't what I ordered.",
      "zh": "不好意思，這不是我點的。"
    },
    {
      "en": "Could we get the check, please?",
      "zh": "可以幫我們結帳嗎？"
    },
    {
      "en": "Together or separate?",
      "zh": "一起付還是分開付？"
    },
    {
      "en": "Is the tip included?",
      "zh": "小費有含在內嗎？"
    },
    {
      "en": "Could I get a box for this?",
      "zh": "可以給我一個盒子打包嗎？"
    },
    {
      "en": "Keep the change.",
      "zh": "不用找了。"
    }
  ],
  "hear": [
    {
      "en": "Do you have a reservation?",
      "zh": "請問有訂位嗎？",
      "reply": "Yes, under Chen, for two.",
      "replyZh": "有，用陳的名字，兩位。"
    },
    {
      "en": "Would you like a booth or a table?",
      "zh": "你想坐沙發座還是一般桌子？",
      "reply": "A booth, please.",
      "replyZh": "沙發座，謝謝。"
    },
    {
      "en": "Can I start you off with something to drink?",
      "zh": "先給你點些喝的嗎？",
      "reply": "Just water for now, thanks.",
      "replyZh": "先給我水就好，謝謝。"
    },
    {
      "en": "Are you ready to order, or do you need a few more minutes?",
      "zh": "準備好點餐了嗎？還是需要再一點時間？",
      "reply": "We need a few more minutes, please.",
      "replyZh": "我們還需要再一點時間，麻煩你。"
    },
    {
      "en": "How would you like your steak cooked?",
      "zh": "牛排你要幾分熟？",
      "reply": "Medium rare, please.",
      "replyZh": "三分熟，謝謝。"
    },
    {
      "en": "Would you like soup or salad with that?",
      "zh": "要搭配湯還是沙拉？",
      "reply": "Salad, please.",
      "replyZh": "沙拉，謝謝。"
    },
    {
      "en": "Any allergies I should know about?",
      "zh": "有什麼過敏我需要知道的嗎？",
      "reply": "Yes, I'm allergic to peanuts.",
      "replyZh": "有，我對花生過敏。"
    },
    {
      "en": "How is everything tasting?",
      "zh": "餐點都還好嗎？",
      "reply": "Everything's great, thanks.",
      "replyZh": "都很棒，謝謝。"
    },
    {
      "en": "Would you like to see the dessert menu?",
      "zh": "要看看甜點菜單嗎？",
      "reply": "No, thanks. Just the check, please.",
      "replyZh": "不用了，謝謝，結帳就好。"
    },
    {
      "en": "Will that be on one check or separate checks?",
      "zh": "要合在一張帳單，還是分開結？",
      "reply": "Separate checks, please.",
      "replyZh": "分開結，謝謝。"
    }
  ],
  "say": [
    {
      "en": "Hi, we have a reservation for seven.",
      "zh": "嗨，我們有訂七點的位。"
    },
    {
      "en": "Could we sit by the window?",
      "zh": "我們可以坐靠窗的位子嗎？"
    },
    {
      "en": "We need a few more minutes to decide.",
      "zh": "我們還需要一點時間決定。"
    },
    {
      "en": "I'll have the steak, medium rare.",
      "zh": "我要牛排，三分熟。"
    },
    {
      "en": "Could I substitute the fries for a salad?",
      "zh": "可以把薯條換成沙拉嗎？"
    },
    {
      "en": "No onions, please. I'm allergic.",
      "zh": "請不要放洋蔥，我會過敏。"
    },
    {
      "en": "Excuse me, could I get some more napkins?",
      "zh": "不好意思，可以多給我一些餐巾紙嗎？"
    },
    {
      "en": "Could we get separate checks, please?",
      "zh": "可以分開結帳嗎？"
    },
    {
      "en": "Could I get the rest to go?",
      "zh": "剩下的可以幫我打包嗎？"
    },
    {
      "en": "Sorry, could you say that again?",
      "zh": "不好意思，可以再說一次嗎？"
    }
  ],
  "vocab": [
    {
      "w": "reservation",
      "pos": "n.",
      "zh": "訂位",
      "ex": "We have a reservation for two.",
      "exzh": "我們有訂兩個人的位子。"
    },
    {
      "w": "booth",
      "pos": "n.",
      "zh": "沙發座",
      "ex": "We'd like a booth, please.",
      "exzh": "我們想坐沙發座。"
    },
    {
      "w": "appetizer",
      "pos": "n.",
      "zh": "開胃菜",
      "ex": "Let's share an appetizer.",
      "exzh": "我們一起點一份開胃菜吧。"
    },
    {
      "w": "entree",
      "pos": "n.",
      "zh": "主餐",
      "ex": "What entree are you getting?",
      "exzh": "你要點什麼主餐？"
    },
    {
      "w": "special",
      "pos": "n.",
      "zh": "特餐",
      "ex": "What's today's special?",
      "exzh": "今天的特餐是什麼？"
    },
    {
      "w": "medium rare",
      "pos": "phr.",
      "zh": "三分熟",
      "ex": "I like my steak medium rare.",
      "exzh": "我喜歡牛排三分熟。"
    },
    {
      "w": "allergic",
      "pos": "adj.",
      "zh": "過敏的",
      "ex": "I'm allergic to shellfish.",
      "exzh": "我對甲殼類過敏。"
    },
    {
      "w": "side dish",
      "pos": "n.",
      "zh": "配菜",
      "ex": "Which side dish comes with it?",
      "exzh": "附什麼配菜？"
    },
    {
      "w": "check",
      "pos": "n.",
      "zh": "帳單",
      "ex": "Could we get the check?",
      "exzh": "可以給我們帳單嗎？"
    },
    {
      "w": "tip",
      "pos": "n./v.",
      "zh": "小費",
      "ex": "We usually tip twenty percent.",
      "exzh": "我們通常給百分之二十的小費。"
    },
    {
      "w": "gratuity",
      "pos": "n.",
      "zh": "服務費（較正式的小費說法）",
      "ex": "Gratuity is added for large parties.",
      "exzh": "人數多的桌位會加收服務費。"
    },
    {
      "w": "leftovers",
      "pos": "n.",
      "zh": "吃剩的餐點",
      "ex": "Can I take the leftovers home?",
      "exzh": "我可以把吃剩的帶回家嗎？"
    }
  ],
  "situations": [
    {
      "title": "😵 服務生講太快，聽不懂",
      "hear": {
        "en": "Would you like soup or salad, and any sides with that?",
        "zh": "（講得很快）要搭配湯還是沙拉，還有要什麼配菜嗎？",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you say that a little slower?",
          "zh": "不好意思，可以說慢一點嗎？"
        },
        {
          "en": "Sorry, did you say soup or salad?",
          "zh": "抱歉，你是說湯還是沙拉嗎？"
        }
      ],
      "tip": "抓到關鍵字再確認一次就好，服務生通常很樂意重複。"
    },
    {
      "title": "🍝 送來的菜不對",
      "hear": {
        "en": "Is everything okay with your meal?",
        "zh": "你的餐點都還好嗎？"
      },
      "say": [
        {
          "en": "Excuse me, this isn't what I ordered. I asked for the salmon.",
          "zh": "不好意思，這不是我點的，我點的是鮭魚。"
        },
        {
          "en": "Could you take it back and bring the right one, please?",
          "zh": "可以請你拿回去，換成正確的嗎？"
        }
      ],
      "tip": "客氣地說明就好，不要等吃完才提。餐廳通常會馬上更正，有時還會招待甜點或折扣。"
    },
    {
      "title": "🥶 牛排煮得太生或太老",
      "say": [
        {
          "en": "I ordered medium rare, but this is well done. Could you cook it a bit less?",
          "zh": "我點三分熟，但這是全熟，可以請廚房做得生一點嗎？"
        },
        {
          "en": "It's a little undercooked. Could you put it back on the grill?",
          "zh": "有點沒熟，可以請你拿回去再烤一下嗎？"
        }
      ],
      "tip": "熟度不對是可以退回重做的，不用不好意思。切開前先確認顏色最保險。"
    },
    {
      "title": "💳 想分開付、卡片被拒",
      "hear": {
        "en": "I'm sorry, that card was declined. Do you have another one?",
        "zh": "抱歉，這張卡被拒絕了，你有別張卡嗎？"
      },
      "say": [
        {
          "en": "Oh, let me try another card.",
          "zh": "喔，我換另一張卡試試。"
        },
        {
          "en": "Can we split the check three ways?",
          "zh": "我們可以把帳單分成三份嗎？"
        }
      ],
      "tip": "分開付最好在點餐前或結帳前就先說。人多時直接說 split the check 就好。"
    },
    {
      "title": "😬 等很久都沒人來",
      "say": [
        {
          "en": "Excuse me, we ordered about thirty minutes ago. Could you check on our food?",
          "zh": "不好意思，我們三十分鐘前點的，可以幫我們看一下餐點好了嗎？"
        },
        {
          "en": "Excuse me, could we get some more water?",
          "zh": "不好意思，可以再給我們一些水嗎？"
        }
      ],
      "tip": "美國服務生不會一直站在你旁邊，要找他時，眼神示意或輕輕舉手並說 Excuse me 就可以，不要大聲喊。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "Do you have a reservation?",
      "prompt": "帶位人員在問什麼？",
      "options": [
        "你有沒有訂位",
        "你想吃什麼",
        "你要不要結帳"
      ],
      "answer": 0,
      "note": "reservation 是訂位。沒有訂位也可以直接說 a table for two。"
    },
    {
      "type": "選擇回應",
      "audio": "Would you like a booth or a table?",
      "prompt": "你想坐沙發座，最適合怎麼回答？",
      "options": [
        "A booth, please.",
        "Yes, I would.",
        "It's nice."
      ],
      "answer": 0,
      "note": "A or B 的問句要直接選一個回答。"
    },
    {
      "type": "選擇回應",
      "audio": "How would you like your steak cooked?",
      "prompt": "你要三分熟，最適合怎麼回答？",
      "options": [
        "Medium rare, please.",
        "It's delicious.",
        "I like steak."
      ],
      "answer": 0,
      "note": "牛排熟度：rare 一分熟、medium rare 三分熟、medium 五分熟、medium well 七分熟、well done 全熟。"
    },
    {
      "type": "聽懂意思",
      "audio": "Any allergies I should know about?",
      "prompt": "服務生在問什麼？",
      "options": [
        "有沒有食物過敏",
        "有沒有帶錢",
        "有沒有訂位"
      ],
      "answer": 0,
      "note": "allergy 是過敏，有過敏一定要在點餐前講清楚。"
    },
    {
      "type": "聽數字",
      "audio": "Your total comes to forty-two fifty.",
      "prompt": "帳單是多少？",
      "options": [
        "$42.50",
        "$40.52",
        "$4,250"
      ],
      "answer": 0,
      "note": "forty-two fifty 是 42.50 元。"
    },
    {
      "type": "聽數字",
      "audio": "A twenty percent tip on forty dollars is eight dollars.",
      "prompt": "四十塊美金的百分之二十小費是多少？",
      "options": [
        "$8",
        "$80",
        "$4"
      ],
      "answer": 0,
      "note": "20% 的小費可以先算 10% 再乘以 2：40 的 10% 是 4，乘 2 就是 8 元。"
    },
    {
      "type": "選擇回應",
      "audio": "Will that be together or separate?",
      "prompt": "你要各付各的，最適合怎麼回答？",
      "options": [
        "Separate, please.",
        "Yes, together.",
        "I'll pay later."
      ],
      "answer": 0,
      "note": "separate 是分開結帳，together 是一起結。"
    },
    {
      "type": "聽懂意思",
      "audio": "Gratuity is not included for parties of this size.",
      "prompt": "服務生說了什麼？",
      "options": [
        "小費沒有含在帳單裡",
        "小費已經含在帳單裡",
        "這家餐廳不收小費"
      ],
      "answer": 0,
      "note": "gratuity 是小費、服務費，not included 是沒有包含，所以要自己另外給。"
    },
    {
      "type": "對話理解",
      "audio": "Hi, can I get the salmon with the dressing on the side? And I'm allergic to nuts, so please make sure there are none.",
      "prompt": "客人對餐點有什麼要求？",
      "options": [
        "醬放旁邊，而且不能有堅果",
        "要多加起司",
        "要換成牛排"
      ],
      "answer": 0,
      "note": "on the side 是分開放，allergic to nuts 是對堅果過敏。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "Could we get the check, please? And could I get the leftovers in a box?",
      "prompt": "客人要做什麼？",
      "options": [
        "結帳，並把剩菜打包",
        "再加點甜點",
        "換一張桌子"
      ],
      "answer": 0,
      "note": "the check 是帳單，in a box 是裝進盒子帶走。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Hi, welcome! Do you have a reservation?",
      "promptZh": "歡迎光臨！請問有訂位嗎？",
      "hint": "說有訂位（名字、人數、時間），或說想要一張桌子",
      "expect": "reservation|table for|yes|no|name|under",
      "model": "Yes, under Chen, for two at seven.",
      "modelZh": "有，用陳的名字，兩位，七點。"
    },
    {
      "prompt": "Would you prefer a booth or a table?",
      "promptZh": "你想坐沙發座還是一般桌子？",
      "hint": "選一個，加上 please",
      "expect": "booth|table|window|either|fine",
      "model": "A booth, please.",
      "modelZh": "沙發座，謝謝。"
    },
    {
      "prompt": "Can I start you off with something to drink?",
      "promptZh": "先給你點些喝的嗎？",
      "hint": "點一種飲料，或說水就好",
      "expect": "water|coke|tea|coffee|juice|soda|lemonade|beer|wine|drink|please",
      "model": "Just water for now, thanks.",
      "modelZh": "先給我水就好，謝謝。"
    },
    {
      "prompt": "Any allergies I should know about?",
      "promptZh": "有什麼過敏我需要知道的嗎？",
      "hint": "說你對什麼過敏，或說沒有",
      "expect": "allerg|no|none|nothing|nope",
      "model": "Yes, I'm allergic to peanuts.",
      "modelZh": "有，我對花生過敏。"
    },
    {
      "prompt": "How would you like your steak cooked?",
      "promptZh": "牛排你要幾分熟？",
      "hint": "說 rare、medium rare、medium、well done 其中一個",
      "expect": "rare|medium|well|done",
      "model": "Medium rare, please.",
      "modelZh": "三分熟，謝謝。"
    },
    {
      "prompt": "Would you like soup or salad with that?",
      "promptZh": "要搭配湯還是沙拉？",
      "hint": "選一個",
      "expect": "soup|salad",
      "model": "Salad, please. Dressing on the side.",
      "modelZh": "沙拉，醬放旁邊，謝謝。"
    },
    {
      "prompt": "How is everything tasting?",
      "promptZh": "餐點都還好嗎？",
      "hint": "說很好，或說有需要的東西",
      "expect": "good|great|delicious|fine|nice|perfect|amazing|thanks|yes|water|refill",
      "model": "Everything's delicious, thanks.",
      "modelZh": "都很好吃，謝謝。"
    },
    {
      "prompt": "Will that be together or separate?",
      "promptZh": "要一起付還是分開付？",
      "hint": "說 together 或 separate",
      "expect": "together|separate|split|one check|same",
      "model": "Separate, please.",
      "modelZh": "分開付，謝謝。"
    }
  ],
  "culture": [
    {
      "t": "小費是必要的，通常 18–20%",
      "d": "有服務生點餐和送餐的餐廳一定要給小費，通常是稅前金額的 18–20%，服務很好可以更高。美國服務生的底薪很低，收入主要靠小費。帳單上的 Gratuity 或 Service charge 如果已經含了，就不用再給。"
    },
    {
      "t": "怎麼快速算小費",
      "d": "先把帳單的小數點往左移一位，得到 10%，再乘以 2 就是 20%。例如 $40 的 10% 是 $4，乘以 2 是 $8。結帳螢幕或帳單上常常會直接列出 18%、20%、25% 讓你選。"
    },
    {
      "t": "等帶位，不要自己找位子",
      "d": "看到 Please wait to be seated 的牌子，要在門口等帶位人員，不要自己坐下。有訂位就報上名字，沒訂位就說人數，例如 a table for two。"
    },
    {
      "t": "帳單不會自己送來",
      "d": "美國服務生不會主動催你結帳，要用餐結束後說 Could we get the check, please? 他才會拿帳單過來。這是為了讓客人慢慢享用，不是被忽略。"
    },
    {
      "t": "剩菜打包很正常",
      "d": "份量大是美國餐廳的常態，吃不完請服務生幫忙打包（to-go box）完全不失禮。說 Could I get a box for this? 就可以。"
    }
  ]
};
