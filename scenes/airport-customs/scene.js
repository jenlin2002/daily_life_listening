// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "airport-customs",
  "title": "機場入境與海關",
  "en": "Airport & Customs",
  "emoji": "🛬",
  "goal": "學會在美國機場入境審查回答來訪目的與停留時間、通過海關申報、處理行李遺失，並在機場問路與轉機",
  "speakers": {
    "S": {
      "name": "Immigration Officer",
      "zh": "入境審查官",
      "avatar": "👮‍♂️",
      "voice": "m2"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♀️",
      "voice": "f"
    },
    "C": {
      "name": "Customs Officer",
      "zh": "海關官員",
      "avatar": "👩‍✈️",
      "voice": "f2"
    }
  },
  "answerSeconds": 10,
  "dialogues": [
    {
      "title": "入境審查：來訪目的與停留",
      "where": "機場入境審查櫃台",
      "emoji": "🛂",
      "lines": [
        {
          "s": "S",
          "en": "Next, please. Passport and customs form.",
          "zh": "下一位。請出示護照和海關申報單。"
        },
        {
          "s": "Y",
          "en": "Here you go.",
          "zh": "給你。"
        },
        {
          "s": "S",
          "en": "What is the purpose of your visit?",
          "zh": "你來訪的目的是什麼？"
        },
        {
          "s": "Y",
          "en": "I'm here to study. I'm an international student at the university.",
          "zh": "我來讀書，我是這所大學的留學生。"
        },
        {
          "s": "S",
          "en": "Do you have your I-20 and acceptance letter?",
          "zh": "你有 I-20 和入學許可信嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, here are both of them.",
          "zh": "有，這兩份都在這裡。"
        },
        {
          "s": "S",
          "en": "How long will you be staying in the United States?",
          "zh": "你預計在美國停留多久？"
        },
        {
          "s": "Y",
          "en": "For about four years, until I finish my degree.",
          "zh": "大約四年，直到我完成學位。"
        },
        {
          "s": "S",
          "en": "Where will you be staying?",
          "zh": "你會住在哪裡？"
        },
        {
          "s": "Y",
          "en": "In the university dorm. Here is the address.",
          "zh": "住在大學宿舍，這是地址。"
        },
        {
          "s": "S",
          "en": "Okay. Please look at the camera and place your fingers on the scanner.",
          "zh": "好的。請看鏡頭，並把手指放在掃描器上。"
        },
        {
          "s": "S",
          "en": "All set. Welcome to the United States.",
          "zh": "好了，歡迎來到美國。"
        }
      ]
    },
    {
      "title": "提領行李與海關申報",
      "where": "行李提領處與海關檢查區",
      "emoji": "🧳",
      "lines": [
        {
          "s": "C",
          "en": "Good afternoon. Do you have anything to declare?",
          "zh": "午安。你有需要申報的東西嗎？"
        },
        {
          "s": "Y",
          "en": "No, I don't think so. I only have personal items and some clothes.",
          "zh": "沒有，我想沒有。我只有個人物品和一些衣服。"
        },
        {
          "s": "C",
          "en": "Are you bringing any food, plants, or animals?",
          "zh": "你有帶任何食物、植物或動物嗎？"
        },
        {
          "s": "Y",
          "en": "I have some snacks and a few packs of instant noodles.",
          "zh": "我有一些零食和幾包泡麵。"
        },
        {
          "s": "C",
          "en": "Do the snacks contain any meat, fruit, or dairy?",
          "zh": "那些零食有含肉類、水果或乳製品嗎？"
        },
        {
          "s": "Y",
          "en": "No, they're just dried seaweed and cookies. The noodles are the vegetable flavor.",
          "zh": "沒有，只是海苔和餅乾，泡麵是蔬菜口味。"
        },
        {
          "s": "C",
          "en": "Okay. Are you carrying more than ten thousand dollars in cash?",
          "zh": "好的。你攜帶的現金超過一萬美元嗎？"
        },
        {
          "s": "Y",
          "en": "No, I have about five hundred dollars.",
          "zh": "沒有，我大約帶了五百美元。"
        },
        {
          "s": "C",
          "en": "Thank you. Please open this bag for me.",
          "zh": "謝謝。請幫我打開這個包包。"
        },
        {
          "s": "Y",
          "en": "Sure. Everything in here is clothes and books.",
          "zh": "好的，裡面都是衣服和書。"
        },
        {
          "s": "C",
          "en": "Okay, you're good to go. Have a nice stay.",
          "zh": "好的，你可以走了，祝你住得愉快。"
        }
      ]
    },
    {
      "title": "行李沒出來：向航空公司報失",
      "where": "行李提領處的航空公司服務櫃台",
      "emoji": "😟",
      "lines": [
        {
          "s": "Y",
          "en": "Excuse me, my suitcase didn't come out on the belt. Could you help me?",
          "zh": "不好意思，我的行李箱沒有出現在輸送帶上，可以幫我嗎？"
        },
        {
          "s": "S",
          "en": "I'm sorry to hear that. Do you have your baggage claim tag?",
          "zh": "很抱歉聽到這件事。你有行李領取牌嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, it's stuck to my boarding pass. Here it is.",
          "zh": "有，貼在我的登機證上，在這裡。"
        },
        {
          "s": "S",
          "en": "Thanks. What does your suitcase look like?",
          "zh": "謝謝。你的行李箱長什麼樣子？"
        },
        {
          "s": "Y",
          "en": "It's a large black suitcase with a red ribbon on the handle.",
          "zh": "是一個大型黑色行李箱，把手上綁著紅色緞帶。"
        },
        {
          "s": "S",
          "en": "Okay. Where can we deliver it when we find it?",
          "zh": "好的，找到之後我們可以送到哪裡？"
        },
        {
          "s": "Y",
          "en": "To my dorm. The address is on this form, and my phone number is there, too.",
          "zh": "送到我的宿舍。地址在這張表格上，電話也寫在那裡。"
        },
        {
          "s": "S",
          "en": "Great. It will probably arrive within twenty-four to forty-eight hours.",
          "zh": "好的，應該會在二十四到四十八小時內送到。"
        },
        {
          "s": "Y",
          "en": "Okay. Can I buy basic items in the meantime and get reimbursed?",
          "zh": "好。這段時間我可以先買基本用品，之後申請補償嗎？"
        },
        {
          "s": "S",
          "en": "Yes, keep your receipts and send them to us with the claim number.",
          "zh": "可以，請保留收據，連同報失編號寄給我們。"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "Here is my passport and my I-20.",
      "zh": "這是我的護照和 I-20。"
    },
    {
      "en": "I'm here to study.",
      "zh": "我是來讀書的。"
    },
    {
      "en": "I'm here on a student visa.",
      "zh": "我持學生簽證。"
    },
    {
      "en": "I'll be staying for about four years.",
      "zh": "我會停留大約四年。"
    },
    {
      "en": "I'll be staying in the university dorm.",
      "zh": "我會住在大學宿舍。"
    },
    {
      "en": "I'm here for vacation.",
      "zh": "我是來度假的。"
    },
    {
      "en": "I'm visiting a friend.",
      "zh": "我是來探訪朋友的。"
    },
    {
      "en": "I have nothing to declare.",
      "zh": "我沒有需要申報的東西。"
    },
    {
      "en": "I only have personal items.",
      "zh": "我只有個人物品。"
    },
    {
      "en": "I'm carrying some snacks.",
      "zh": "我帶了一些零食。"
    },
    {
      "en": "It's dried seaweed and cookies.",
      "zh": "是海苔和餅乾。"
    },
    {
      "en": "I'm not bringing any fruit or meat.",
      "zh": "我沒有帶水果或肉。"
    },
    {
      "en": "I have about five hundred dollars in cash.",
      "zh": "我身上有大約五百美元現金。"
    },
    {
      "en": "Where is the baggage claim?",
      "zh": "行李提領處在哪裡？"
    },
    {
      "en": "My suitcase didn't come out.",
      "zh": "我的行李箱沒有出來。"
    },
    {
      "en": "It's a large black suitcase with a red ribbon.",
      "zh": "是一個大型黑色行李箱，綁了紅色緞帶。"
    },
    {
      "en": "Could you deliver it to my address?",
      "zh": "你們可以送到我的地址嗎？"
    },
    {
      "en": "Where do I go to connect to my next flight?",
      "zh": "我轉下一班飛機要去哪裡？"
    },
    {
      "en": "How do I get to the ground transportation area?",
      "zh": "要怎麼去地面交通區（搭車處）？"
    },
    {
      "en": "Where can I get a taxi or a ride?",
      "zh": "哪裡可以搭計程車或叫車？"
    }
  ],
  "hear": [
    {
      "en": "What is the purpose of your visit?",
      "zh": "你來訪的目的是什麼？",
      "reply": "I'm here to study.",
      "replyZh": "我是來讀書的。"
    },
    {
      "en": "How long will you be staying?",
      "zh": "你會停留多久？",
      "reply": "About four years.",
      "replyZh": "大約四年。"
    },
    {
      "en": "Where will you be staying?",
      "zh": "你會住在哪裡？",
      "reply": "In the university dorm.",
      "replyZh": "住大學宿舍。"
    },
    {
      "en": "Do you have your I-20?",
      "zh": "你有 I-20 嗎？",
      "reply": "Yes, here it is.",
      "replyZh": "有，在這裡。"
    },
    {
      "en": "Is this your first time in the United States?",
      "zh": "這是你第一次來美國嗎？",
      "reply": "Yes, it is.",
      "replyZh": "是的。"
    },
    {
      "en": "Do you have anything to declare?",
      "zh": "你有需要申報的東西嗎？",
      "reply": "No, nothing to declare.",
      "replyZh": "沒有，沒有需要申報的。"
    },
    {
      "en": "Are you bringing any food or plants?",
      "zh": "你有帶食物或植物嗎？",
      "reply": "Just some dried snacks.",
      "replyZh": "只有一些乾的零食。"
    },
    {
      "en": "Are you carrying more than ten thousand dollars?",
      "zh": "你攜帶的現金超過一萬美元嗎？",
      "reply": "No, I have about five hundred.",
      "replyZh": "沒有，我大約帶五百美元。"
    },
    {
      "en": "Please open this bag for me.",
      "zh": "請幫我打開這個包包。",
      "reply": "Sure, no problem.",
      "replyZh": "好，沒問題。"
    },
    {
      "en": "Do you have your baggage claim tag?",
      "zh": "你有行李領取牌嗎？",
      "reply": "Yes, here it is.",
      "replyZh": "有，在這裡。"
    }
  ],
  "say": [
    {
      "en": "Here is my passport, and this is my I-20.",
      "zh": "這是我的護照，這是我的 I-20。"
    },
    {
      "en": "I'm an international student.",
      "zh": "我是留學生。"
    },
    {
      "en": "I'll be here until I finish my degree.",
      "zh": "我會待到完成學位。"
    },
    {
      "en": "I don't have anything to declare.",
      "zh": "我沒有需要申報的東西。"
    },
    {
      "en": "Sorry, could you speak a little slower?",
      "zh": "抱歉，可以說慢一點嗎？"
    },
    {
      "en": "Could you repeat the question, please?",
      "zh": "可以請你重複一次問題嗎？"
    },
    {
      "en": "Where is the baggage claim for this flight?",
      "zh": "這班飛機的行李提領處在哪裡？"
    },
    {
      "en": "My bag is missing. Could you help me file a report?",
      "zh": "我的行李不見了，可以幫我登記報失嗎？"
    },
    {
      "en": "How do I get downtown from here?",
      "zh": "從這裡怎麼去市區？"
    },
    {
      "en": "Thank you for your help.",
      "zh": "謝謝你的幫忙。"
    }
  ],
  "vocab": [
    {
      "w": "immigration",
      "pos": "n.",
      "zh": "入境審查",
      "ex": "We have to go through immigration first.",
      "exzh": "我們必須先通過入境審查。"
    },
    {
      "w": "customs",
      "pos": "n.",
      "zh": "海關",
      "ex": "Customs checks your bags.",
      "exzh": "海關會檢查你的行李。"
    },
    {
      "w": "declare",
      "pos": "v.",
      "zh": "申報",
      "ex": "Do you have anything to declare?",
      "exzh": "你有需要申報的東西嗎？"
    },
    {
      "w": "visa",
      "pos": "n.",
      "zh": "簽證",
      "ex": "I have a student visa.",
      "exzh": "我有學生簽證。"
    },
    {
      "w": "passport",
      "pos": "n.",
      "zh": "護照",
      "ex": "Please show your passport.",
      "exzh": "請出示你的護照。"
    },
    {
      "w": "purpose of visit",
      "pos": "n.",
      "zh": "來訪目的",
      "ex": "What's the purpose of your visit?",
      "exzh": "你來訪的目的是什麼？"
    },
    {
      "w": "baggage claim",
      "pos": "n.",
      "zh": "行李提領處",
      "ex": "Baggage claim is downstairs.",
      "exzh": "行李提領處在樓下。"
    },
    {
      "w": "carry-on",
      "pos": "n.",
      "zh": "隨身行李",
      "ex": "I only have a carry-on.",
      "exzh": "我只有隨身行李。"
    },
    {
      "w": "layover",
      "pos": "n.",
      "zh": "轉機停留",
      "ex": "I have a two-hour layover.",
      "exzh": "我轉機要停留兩小時。"
    },
    {
      "w": "connecting flight",
      "pos": "n.",
      "zh": "轉乘航班",
      "ex": "Where is my connecting flight?",
      "exzh": "我的轉乘班機在哪裡？"
    },
    {
      "w": "boarding pass",
      "pos": "n.",
      "zh": "登機證",
      "ex": "Here is my boarding pass.",
      "exzh": "這是我的登機證。"
    },
    {
      "w": "ground transportation",
      "pos": "n.",
      "zh": "地面交通",
      "ex": "Follow the signs to ground transportation.",
      "exzh": "跟著指標到地面交通區。"
    }
  ],
  "situations": [
    {
      "title": "😵 審查官講太快、有口音",
      "hear": {
        "en": "What's the purpose of your visit and how long are you planning to stay in the U.S.?",
        "zh": "（講得很快）你來訪的目的是什麼？打算在美國待多久？",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you repeat that more slowly, please?",
          "zh": "抱歉，可以請你說慢一點再說一次嗎？"
        },
        {
          "en": "I'm here to study, and I'll stay for four years.",
          "zh": "我來讀書，會待四年。"
        }
      ],
      "tip": "入境問題大致固定：目的、停留時間、住哪裡。聽不懂就請他重複，不要亂猜。回答簡短、誠實、清楚就好。"
    },
    {
      "title": "🍜 帶了食物想入境",
      "hear": {
        "en": "Are you bringing any food, fruit, or meat into the country?",
        "zh": "你有帶任何食物、水果或肉類入境嗎？"
      },
      "say": [
        {
          "en": "I have some snacks and instant noodles. Do I need to declare them?",
          "zh": "我帶了一些零食和泡麵，需要申報嗎？"
        },
        {
          "en": "I'm not sure. Could you check for me?",
          "zh": "我不確定，可以幫我確認嗎？"
        }
      ],
      "tip": "肉、蛋、新鮮水果、植物、種子禁止或要申報。不確定就在申報單勾選並主動說，被發現隱瞞反而會被罰款。"
    },
    {
      "title": "🧳 行李遺失或損壞",
      "say": [
        {
          "en": "My suitcase didn't arrive. How do I file a claim?",
          "zh": "我的行李箱沒到，要怎麼申請理賠？"
        },
        {
          "en": "My suitcase is damaged. Could I speak to someone about it?",
          "zh": "我的行李箱壞了，可以找人談談嗎？"
        }
      ],
      "tip": "在離開行李區之前，到航空公司櫃台登記，拿到報失編號（claim number），並保留登機證和行李牌。"
    },
    {
      "title": "✈️ 趕不上轉機",
      "say": [
        {
          "en": "My flight was delayed, and I'm going to miss my connection. What should I do?",
          "zh": "我的班機誤點，我會趕不上轉機，該怎麼辦？"
        },
        {
          "en": "Could you rebook me on the next flight?",
          "zh": "可以幫我改搭下一班飛機嗎？"
        }
      ],
      "tip": "直接找航空公司的轉機服務櫃台，或用航空公司 App 重新訂位。轉機時間少於兩小時要特別留意。"
    },
    {
      "title": "🚖 出了機場怎麼去市區",
      "say": [
        {
          "en": "How do I get to downtown from the airport?",
          "zh": "從機場怎麼去市區？"
        },
        {
          "en": "Where do I wait for the shuttle or a ride?",
          "zh": "我要在哪裡等接駁車或叫的車？"
        }
      ],
      "tip": "機場外有計程車、共乘（Uber/Lyft）、接駁巴士和地鐵。先看指標 Ground Transportation，再依預算選擇。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "What is the purpose of your visit?",
      "prompt": "審查官在問什麼？",
      "options": [
        "你來訪的目的",
        "你住哪裡",
        "你的行李有多少"
      ],
      "answer": 0,
      "note": "purpose of your visit 是來訪目的。"
    },
    {
      "type": "選擇回應",
      "audio": "How long will you be staying in the United States?",
      "prompt": "你要待四年，最適合怎麼回答？",
      "options": [
        "For about four years.",
        "I'm a student.",
        "In the dorm."
      ],
      "answer": 0,
      "note": "How long 問的是時間長度。"
    },
    {
      "type": "選擇回應",
      "audio": "Where will you be staying?",
      "prompt": "你住學校宿舍，最適合怎麼回答？",
      "options": [
        "In the university dorm.",
        "For four years.",
        "I'm here to study."
      ],
      "answer": 0,
      "note": "Where will you be staying? 問的是住宿地點。"
    },
    {
      "type": "聽懂意思",
      "audio": "Do you have anything to declare?",
      "prompt": "海關官員在問什麼？",
      "options": [
        "有沒有需要申報的東西",
        "有沒有買紀念品",
        "有沒有帶朋友"
      ],
      "answer": 0,
      "note": "declare 是申報。"
    },
    {
      "type": "聽數字",
      "audio": "Are you carrying more than ten thousand dollars in cash?",
      "prompt": "超過多少現金要申報？",
      "options": [
        "一萬美元",
        "一千美元",
        "十萬美元"
      ],
      "answer": 0,
      "note": "ten thousand 是一萬；攜帶超過一萬美元現金要申報。"
    },
    {
      "type": "聽懂意思",
      "audio": "Are you bringing any food, plants, or animals?",
      "prompt": "官員在問什麼？",
      "options": [
        "有沒有帶食物、植物或動物",
        "有沒有帶朋友",
        "有沒有帶電子產品"
      ],
      "answer": 0,
      "note": "food, plants, animals 都是要檢查的項目。"
    },
    {
      "type": "選擇回應",
      "audio": "Please open this bag for me.",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "Sure, no problem.",
        "No, it's not my bag.",
        "It's very big."
      ],
      "answer": 0,
      "note": "被要求檢查行李時，配合並保持禮貌。"
    },
    {
      "type": "聽懂意思",
      "audio": "It will probably arrive within twenty-four to forty-eight hours.",
      "prompt": "行李多久會送到？",
      "options": [
        "24 到 48 小時內",
        "4 到 8 小時內",
        "兩週後"
      ],
      "answer": 0,
      "note": "within 是在……之內；twenty-four 是 24。"
    },
    {
      "type": "對話理解",
      "audio": "Hi, I'm an international student. Here is my passport, I-20 and acceptance letter. I'll be staying in the university dorm for four years.",
      "prompt": "這個人在做什麼？",
      "options": [
        "入境審查，說明留學身分與住宿",
        "申報食物",
        "報失行李"
      ],
      "answer": 0,
      "note": "I-20 是美國留學生的入學證明文件。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "Excuse me, my suitcase didn't come out. It's a large black suitcase with a red ribbon. Could you deliver it to my dorm?",
      "prompt": "客人要做什麼？",
      "options": [
        "報失行李，並請送到宿舍",
        "買新行李箱",
        "問洗手間在哪"
      ],
      "answer": 0,
      "note": "deliver it to my dorm 是送到我的宿舍。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Next, please. Passport, please.",
      "promptZh": "下一位。請出示護照。",
      "hint": "遞上護照並打招呼",
      "expect": "here|passport|hi|hello|good",
      "model": "Hello. Here is my passport and my I-20.",
      "modelZh": "你好，這是我的護照和 I-20。"
    },
    {
      "prompt": "What is the purpose of your visit?",
      "promptZh": "你來訪的目的是什麼？",
      "hint": "說你是來讀書的",
      "expect": "study|student|school|university|visit|vacation|travel|friend",
      "model": "I'm here to study at the university.",
      "modelZh": "我來這間大學讀書。"
    },
    {
      "prompt": "How long will you be staying?",
      "promptZh": "你會停留多久？",
      "hint": "說時間",
      "expect": "year|month|week|until|about|for",
      "model": "For about four years, until I finish my degree.",
      "modelZh": "大約四年，直到我完成學位。"
    },
    {
      "prompt": "Where will you be staying?",
      "promptZh": "你會住在哪裡？",
      "hint": "說住宿地點",
      "expect": "dorm|dormitory|apartment|hotel|campus|address|university",
      "model": "In the university dorm.",
      "modelZh": "住大學宿舍。"
    },
    {
      "prompt": "Do you have anything to declare?",
      "promptZh": "你有需要申報的東西嗎？",
      "hint": "說沒有，或說有帶什麼",
      "expect": "no|nothing|don'?t|snacks|food|just|personal",
      "model": "No, I only have personal items and some snacks.",
      "modelZh": "沒有，我只有個人物品和一些零食。"
    },
    {
      "prompt": "Are you carrying more than ten thousand dollars in cash?",
      "promptZh": "你攜帶的現金超過一萬美元嗎？",
      "hint": "說沒有，大約帶多少",
      "expect": "no|hundred|dollars|less|about|don'?t",
      "model": "No, I have about five hundred dollars.",
      "modelZh": "沒有，我大約帶五百美元。"
    },
    {
      "prompt": "Please open this bag for me.",
      "promptZh": "請幫我打開這個包包。",
      "hint": "配合並說裡面是什麼",
      "expect": "sure|okay|ok|of course|clothes|books|no problem|yes",
      "model": "Sure. It's just clothes and books.",
      "modelZh": "好，裡面只是衣服和書。"
    },
    {
      "prompt": "You're all set. Welcome to the United States.",
      "promptZh": "好了，歡迎來到美國。",
      "hint": "道謝",
      "expect": "thank|thanks|appreciate|great",
      "model": "Thank you very much!",
      "modelZh": "非常謝謝你！"
    }
  ],
  "culture": [
    {
      "t": "入境審查的標準流程",
      "d": "入境時先通過移民官（CBP）審查：出示護照、簽證，回答來訪目的、停留時間、住哪裡，並按指紋、拍照。回答要誠實簡短，不要自己多說，也不要開玩笑。"
    },
    {
      "t": "留學生要帶的文件",
      "d": "護照、F-1 簽證、I-20、入學許可信、財力證明、學校與宿舍的地址。把這些放在隨身包包最容易拿的地方，不要放在託運行李。"
    },
    {
      "t": "海關申報單",
      "d": "飛機上或入境前會拿到申報單。食物、植物、種子、肉類、超過一萬美元的現金都要申報。不確定就勾選「有」，主動說明比被查到安全。"
    },
    {
      "t": "行李遺失怎麼辦",
      "d": "在行李提領處等不到行李，先到航空公司櫃台登記報失，拿到編號。通常 24–48 小時內送到住處。保留收據，臨時購買的必需品可以申請補償。"
    },
    {
      "t": "怎麼離開機場",
      "d": "跟著 Ground Transportation 的指標，可以搭計程車、叫 Uber／Lyft、搭機場接駁車或地鐵。晚到的班機最好先確認交通，並事先和接機的人說明見面地點。"
    }
  ]
};
