// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "lost-something",
  "title": "遺失物品求助",
  "en": "Lost Something",
  "emoji": "🔍",
  "goal": "學會告訴別人你丟了什麼、在哪裡弄丟的、東西長什麼樣子，聽懂對方的問題，並完成登記、領回與報案",
  "speakers": {
    "S": {
      "name": "Staff",
      "zh": "工作人員",
      "avatar": "👨‍💼",
      "voice": "m3"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♀️",
      "voice": "f2"
    },
    "P": {
      "name": "Police Officer",
      "zh": "警察",
      "avatar": "👮‍♂️",
      "voice": "m"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "商場服務台：找不到手機",
      "where": "購物中心的服務台",
      "emoji": "📱",
      "lines": [
        {
          "s": "Y",
          "en": "Excuse me, I think I lost my phone. Could you help me?",
          "zh": "不好意思，我好像把手機弄丟了，可以幫我嗎？"
        },
        {
          "s": "S",
          "en": "Of course. When did you last have it?",
          "zh": "當然。你最後一次看到它是什麼時候？"
        },
        {
          "s": "Y",
          "en": "About an hour ago, at the food court. I used it to pay for lunch.",
          "zh": "大概一個小時前，在美食街，我用它付午餐的錢。"
        },
        {
          "s": "S",
          "en": "Okay. What does it look like?",
          "zh": "好。它長什麼樣子？"
        },
        {
          "s": "Y",
          "en": "It's a black iPhone with a clear case, and there's a blue sticker on the back.",
          "zh": "是一支黑色的 iPhone，透明手機殼，背面有一張藍色貼紙。"
        },
        {
          "s": "S",
          "en": "Did you check your bag and pockets?",
          "zh": "你有找過包包和口袋嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, I checked everywhere. It's not there.",
          "zh": "有，我到處都找過了，不在那裡。"
        },
        {
          "s": "S",
          "en": "Let me call our lost and found. Can I get your name and phone number?",
          "zh": "我來打電話給我們的失物招領。可以給我你的名字和電話號碼嗎？"
        },
        {
          "s": "Y",
          "en": "Sure. It's Melissa Chen. My number is five-five-five, oh one two three.",
          "zh": "好，我叫 Melissa Chen，電話是 555-0123。"
        },
        {
          "s": "S",
          "en": "Thanks. Please wait here, and I'll let you know in a few minutes.",
          "zh": "謝謝。請在這裡稍等，幾分鐘後我再告訴你結果。"
        }
      ]
    },
    {
      "title": "大眾運輸的失物招領",
      "where": "地鐵站的失物招領窗口",
      "emoji": "🚇",
      "lines": [
        {
          "s": "Y",
          "en": "Hi, I left my backpack on the subway this morning. Has anyone turned one in?",
          "zh": "嗨，我今天早上把背包忘在地鐵上，有人送來嗎？"
        },
        {
          "s": "S",
          "en": "Let me check. Which line were you on, and about what time?",
          "zh": "我查一下。你搭哪一條線，大約幾點？"
        },
        {
          "s": "Y",
          "en": "The red line, around eight thirty. I got off at Central Station.",
          "zh": "紅線，大約八點半，我在 Central Station 下車。"
        },
        {
          "s": "S",
          "en": "And what does your backpack look like?",
          "zh": "那你的背包長什麼樣子？"
        },
        {
          "s": "Y",
          "en": "It's a gray backpack with a zipper pocket in the front. There's a laptop and a water bottle inside.",
          "zh": "是灰色背包，前面有拉鍊口袋，裡面有筆電和水壺。"
        },
        {
          "s": "S",
          "en": "Is there a name tag or anything with your name on it?",
          "zh": "上面有名牌或寫你名字的東西嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, my student ID is in the front pocket.",
          "zh": "有，我的學生證在前面的口袋裡。"
        },
        {
          "s": "S",
          "en": "Hold on. Yes, we have a gray backpack that matches that. Let me get it for you.",
          "zh": "請等一下。有的，我們有一個符合的灰色背包，我去拿給你。"
        }
      ]
    },
    {
      "title": "領回物品與報案",
      "where": "失物招領窗口，之後到警察局",
      "emoji": "👮",
      "lines": [
        {
          "s": "S",
          "en": "Here you go. Can you show me some ID, please?",
          "zh": "給你。可以請你出示證件嗎？"
        },
        {
          "s": "Y",
          "en": "Sure. Here's my student ID and my passport.",
          "zh": "好的，這是我的學生證和護照。"
        },
        {
          "s": "S",
          "en": "Thank you. Please sign here to confirm you received it.",
          "zh": "謝謝。請在這裡簽名，確認你已經領回。"
        },
        {
          "s": "Y",
          "en": "Thank you so much! I was so worried.",
          "zh": "真的太謝謝你了！我剛剛好擔心。"
        },
        {
          "s": "S",
          "en": "You're welcome. Always keep an eye on your things. Have a good day!",
          "zh": "不客氣。請隨時留意自己的東西，祝你有美好的一天！"
        },
        {
          "s": "Y",
          "en": "Excuse me, officer. I'd like to report a stolen wallet.",
          "zh": "不好意思，警官，我想報案，我的皮夾被偷了。"
        },
        {
          "s": "P",
          "en": "Okay. When and where did it happen?",
          "zh": "好的。什麼時候、在哪裡發生的？"
        },
        {
          "s": "Y",
          "en": "About two hours ago, on a crowded bus downtown.",
          "zh": "大約兩個小時前，在市中心一台擁擠的公車上。"
        },
        {
          "s": "P",
          "en": "What was in the wallet?",
          "zh": "皮夾裡有什麼？"
        },
        {
          "s": "Y",
          "en": "My driver's license, two credit cards, and about forty dollars in cash.",
          "zh": "我的駕照、兩張信用卡，還有大約四十塊現金。"
        },
        {
          "s": "P",
          "en": "I'll file a report. You should also call your bank to cancel the cards right away.",
          "zh": "我會幫你做報案紀錄。你也應該馬上打電話給銀行把卡停掉。"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "I think I lost my phone.",
      "zh": "我想我把手機弄丟了。"
    },
    {
      "en": "I left my backpack on the bus.",
      "zh": "我把背包忘在公車上了。"
    },
    {
      "en": "Has anyone turned in a gray backpack?",
      "zh": "有人送來一個灰色背包嗎？"
    },
    {
      "en": "Where is the lost and found?",
      "zh": "失物招領在哪裡？"
    },
    {
      "en": "When did you last have it?",
      "zh": "你最後一次看到它是什麼時候？"
    },
    {
      "en": "I had it about an hour ago.",
      "zh": "我大約一小時前還拿著它。"
    },
    {
      "en": "What does it look like?",
      "zh": "它長什麼樣子？"
    },
    {
      "en": "It's a black phone with a clear case.",
      "zh": "是黑色手機，透明手機殼。"
    },
    {
      "en": "There's a blue sticker on the back.",
      "zh": "背面有一張藍色貼紙。"
    },
    {
      "en": "It has my name on it.",
      "zh": "上面有我的名字。"
    },
    {
      "en": "I checked everywhere.",
      "zh": "我到處都找過了。"
    },
    {
      "en": "Could you call me if it turns up?",
      "zh": "如果找到了，可以打電話給我嗎？"
    },
    {
      "en": "Can I get your name and phone number?",
      "zh": "可以給我你的名字和電話嗎？"
    },
    {
      "en": "Please fill out this form.",
      "zh": "請填寫這張表格。"
    },
    {
      "en": "Can you show me some ID?",
      "zh": "可以出示證件嗎？"
    },
    {
      "en": "Please sign here.",
      "zh": "請在這裡簽名。"
    },
    {
      "en": "I'd like to report a stolen wallet.",
      "zh": "我想報案，我的皮夾被偷了。"
    },
    {
      "en": "I need to cancel my credit cards.",
      "zh": "我需要把信用卡停掉。"
    },
    {
      "en": "It was about two hours ago.",
      "zh": "大約是兩小時前。"
    },
    {
      "en": "Thank you so much for finding it!",
      "zh": "非常謝謝你幫我找到它！"
    }
  ],
  "hear": [
    {
      "en": "What did you lose?",
      "zh": "你弄丟了什麼？",
      "reply": "I lost my wallet.",
      "replyZh": "我把皮夾弄丟了。"
    },
    {
      "en": "When did you last have it?",
      "zh": "你最後一次看到它是什麼時候？",
      "reply": "About an hour ago.",
      "replyZh": "大約一個小時前。"
    },
    {
      "en": "Where do you think you lost it?",
      "zh": "你覺得是在哪裡弄丟的？",
      "reply": "I think I left it on the bus.",
      "replyZh": "我想是忘在公車上了。"
    },
    {
      "en": "Can you describe it?",
      "zh": "你可以描述一下嗎？",
      "reply": "It's a brown leather wallet.",
      "replyZh": "是一個棕色皮夾。"
    },
    {
      "en": "Is there anything with your name on it?",
      "zh": "上面有寫你的名字嗎？",
      "reply": "Yes, my ID card is inside.",
      "replyZh": "有，裡面有我的證件。"
    },
    {
      "en": "Did you check your bag and pockets?",
      "zh": "你有找過包包和口袋嗎？",
      "reply": "Yes, I checked everywhere.",
      "replyZh": "有，我到處都找過了。"
    },
    {
      "en": "Can I get your name and phone number?",
      "zh": "可以給我你的名字和電話號碼嗎？",
      "reply": "Sure. It's Melissa Chen.",
      "replyZh": "好，我叫 Melissa Chen。"
    },
    {
      "en": "Please fill out this form.",
      "zh": "請填寫這張表格。",
      "reply": "Okay. Do you have a pen?",
      "replyZh": "好，你有筆嗎？"
    },
    {
      "en": "We'll call you if it turns up.",
      "zh": "如果找到，我們會打給你。",
      "reply": "Thank you. I'll wait for your call.",
      "replyZh": "謝謝，我等你們的電話。"
    },
    {
      "en": "Can you show me some ID?",
      "zh": "可以出示證件嗎？",
      "reply": "Sure, here's my passport.",
      "replyZh": "好的，這是我的護照。"
    }
  ],
  "say": [
    {
      "en": "Excuse me, I think I lost my phone.",
      "zh": "不好意思，我好像把手機弄丟了。"
    },
    {
      "en": "I left it on the bus about an hour ago.",
      "zh": "我大約一小時前把它忘在公車上了。"
    },
    {
      "en": "It's a black wallet with a zipper.",
      "zh": "是一個有拉鍊的黑色皮夾。"
    },
    {
      "en": "Could you check if anyone turned it in?",
      "zh": "可以幫我看看有沒有人送來嗎？"
    },
    {
      "en": "Could you call me if you find it?",
      "zh": "如果找到的話，可以打給我嗎？"
    },
    {
      "en": "My phone number is five-five-five, oh one two three.",
      "zh": "我的電話是 555-0123。"
    },
    {
      "en": "How long will it take?",
      "zh": "這要多久？"
    },
    {
      "en": "Do I need to fill out a form?",
      "zh": "我需要填表嗎？"
    },
    {
      "en": "Thank you so much for your help.",
      "zh": "非常謝謝你的幫忙。"
    },
    {
      "en": "Sorry, could you say that again?",
      "zh": "不好意思，可以再說一次嗎？"
    }
  ],
  "vocab": [
    {
      "w": "lost and found",
      "pos": "n.",
      "zh": "失物招領處",
      "ex": "Let's check the lost and found.",
      "exzh": "我們去失物招領處看看。"
    },
    {
      "w": "turn in",
      "pos": "phr. v.",
      "zh": "交出來（撿到後送交）",
      "ex": "Someone turned in my wallet.",
      "exzh": "有人把我的皮夾送來了。"
    },
    {
      "w": "turn up",
      "pos": "phr. v.",
      "zh": "出現、被找到",
      "ex": "I hope my keys turn up soon.",
      "exzh": "希望我的鑰匙趕快找到。"
    },
    {
      "w": "wallet",
      "pos": "n.",
      "zh": "皮夾",
      "ex": "My wallet is missing.",
      "exzh": "我的皮夾不見了。"
    },
    {
      "w": "backpack",
      "pos": "n.",
      "zh": "後背包",
      "ex": "I left my backpack on the train.",
      "exzh": "我把背包忘在火車上了。"
    },
    {
      "w": "stolen",
      "pos": "adj.",
      "zh": "被偷的",
      "ex": "My bike was stolen.",
      "exzh": "我的腳踏車被偷了。"
    },
    {
      "w": "describe",
      "pos": "v.",
      "zh": "描述",
      "ex": "Can you describe your bag?",
      "exzh": "你可以描述一下你的包包嗎？"
    },
    {
      "w": "ID",
      "pos": "n.",
      "zh": "身分證件",
      "ex": "Please show me your ID.",
      "exzh": "請出示你的證件。"
    },
    {
      "w": "report",
      "pos": "n./v.",
      "zh": "報案、報告",
      "ex": "I'd like to file a report.",
      "exzh": "我想報案。"
    },
    {
      "w": "cancel",
      "pos": "v.",
      "zh": "取消、停掉",
      "ex": "I need to cancel my credit card.",
      "exzh": "我需要把信用卡停掉。"
    },
    {
      "w": "replace",
      "pos": "v.",
      "zh": "補發、更換",
      "ex": "How can I replace my student ID?",
      "exzh": "我要怎麼補辦學生證？"
    },
    {
      "w": "security camera",
      "pos": "n.",
      "zh": "監視器",
      "ex": "Can we check the security camera?",
      "exzh": "我們可以看看監視器嗎？"
    }
  ],
  "situations": [
    {
      "title": "😵 對方講太快，聽不懂",
      "hear": {
        "en": "When and where did you last see it, and what was in it?",
        "zh": "（講得很快）你最後一次在什麼時候、什麼地方看到它？裡面有什麼？",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you say that a little slower?",
          "zh": "不好意思，可以說慢一點嗎？"
        },
        {
          "en": "Sorry, could you ask one question at a time?",
          "zh": "抱歉，可以一次問一個問題嗎？"
        }
      ],
      "tip": "對方一口氣問很多問題時，請他一次問一個，並按順序回答：何時、哪裡、長什麼樣子。"
    },
    {
      "title": "🚌 想不起來在哪裡弄丟的",
      "hear": {
        "en": "Where do you think you lost it?",
        "zh": "你覺得是在哪裡弄丟的？"
      },
      "say": [
        {
          "en": "I'm not sure. Maybe on the bus or at the café.",
          "zh": "我不確定，可能在公車上，也可能在咖啡店。"
        },
        {
          "en": "The last time I had it was at the café around noon.",
          "zh": "我最後一次拿著它是在中午左右的咖啡店。"
        }
      ],
      "tip": "不確定也沒關係，說出最後一次確定拿著它的時間和地點，加上可能的範圍，對方比較容易幫你找。"
    },
    {
      "title": "📱 手機設定了定位",
      "hear": {
        "en": "Do you have Find My iPhone turned on?",
        "zh": "你有開啟「尋找我的 iPhone」嗎？"
      },
      "say": [
        {
          "en": "Yes, it shows my phone is still at the mall.",
          "zh": "有，顯示我的手機還在商場。"
        },
        {
          "en": "I can show you the location on my laptop.",
          "zh": "我可以用電腦給你看位置。"
        }
      ],
      "tip": "手機、耳機都可以用定位功能（Find My、Find My Device）。先用另一個裝置查位置，再告訴工作人員，找回的機率更高。"
    },
    {
      "title": "💳 證件與信用卡都不見了",
      "say": [
        {
          "en": "My wallet was stolen. I need to cancel my credit cards.",
          "zh": "我的皮夾被偷了，我需要把信用卡停掉。"
        },
        {
          "en": "How can I replace my driver's license?",
          "zh": "我要怎麼補辦駕照？"
        }
      ],
      "tip": "丟了信用卡要立刻打電話給銀行（卡片背面或 App 都有客服電話）停卡，再報案、補辦證件。"
    },
    {
      "title": "🧳 護照或重要證件遺失",
      "say": [
        {
          "en": "I lost my passport. I'm an international student from Taiwan.",
          "zh": "我的護照弄丟了，我是來自台灣的留學生。"
        },
        {
          "en": "Which office should I contact to get a new one?",
          "zh": "我應該聯絡哪個單位補辦新的？"
        }
      ],
      "tip": "護照遺失要先報案取得報案證明，再聯絡駐外館處（台灣的駐外辦事處）申請補發，同時通知學校國際學生中心。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "When did you last have it?",
      "prompt": "工作人員在問什麼？",
      "options": [
        "你最後一次看到它是什麼時候",
        "你在哪裡買它",
        "它值多少錢"
      ],
      "answer": 0,
      "note": "last have it 是「最後一次拿著它」，回答時間或地點。"
    },
    {
      "type": "選擇回應",
      "audio": "What does it look like?",
      "prompt": "你的皮夾是黑色的，最適合怎麼回答？",
      "options": [
        "It's a black wallet with a zipper.",
        "I like it very much.",
        "I lost it yesterday."
      ],
      "answer": 0,
      "note": "What does it look like? 是請你描述外觀：顏色、大小、特徵。"
    },
    {
      "type": "選擇回應",
      "audio": "Did you check your bag and pockets?",
      "prompt": "你已經都找過了，最適合怎麼回答？",
      "options": [
        "Yes, I checked everywhere.",
        "No, it's a black bag.",
        "It was on the bus."
      ],
      "answer": 0,
      "note": "Did you…? 的問句，用 Yes 或 No 回答。"
    },
    {
      "type": "聽數字",
      "audio": "Can I get your phone number? Five-five-five, oh one two three?",
      "prompt": "電話號碼是什麼？",
      "options": [
        "555-0123",
        "555-1023",
        "505-0123"
      ],
      "answer": 0,
      "note": "電話號碼一個一個唸，0 常唸成 oh。"
    },
    {
      "type": "聽懂意思",
      "audio": "We'll call you if it turns up.",
      "prompt": "工作人員說了什麼？",
      "options": [
        "找到的話會打電話給你",
        "你必須自己打電話來問",
        "東西已經找到了"
      ],
      "answer": 0,
      "note": "turn up 是「出現、被找到」。"
    },
    {
      "type": "選擇回應",
      "audio": "Can you show me some ID, please?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "Sure, here's my passport.",
        "Yes, I can see it.",
        "No, I lost it."
      ],
      "answer": 0,
      "note": "ID 是身分證件，護照、學生證、駕照都可以。"
    },
    {
      "type": "聽懂意思",
      "audio": "You should call your bank to cancel the cards right away.",
      "prompt": "警察建議你做什麼？",
      "options": [
        "馬上打給銀行停掉信用卡",
        "明天再去銀行",
        "直接補辦新的駕照"
      ],
      "answer": 0,
      "note": "cancel the cards 是把卡停掉，right away 是馬上。"
    },
    {
      "type": "聽懂意思",
      "audio": "Someone turned in a gray backpack this morning.",
      "prompt": "今天早上發生什麼事？",
      "options": [
        "有人送來了一個灰色背包",
        "有人弄丟了背包",
        "有人把背包拿走了"
      ],
      "answer": 0,
      "note": "turn in 是把撿到的東西交出來。"
    },
    {
      "type": "對話理解",
      "audio": "Hi, I left my backpack on the red line around eight thirty. It's gray with a zipper pocket in the front.",
      "prompt": "乘客在說什麼？",
      "options": [
        "背包忘在紅線上，大約八點半",
        "背包被偷了",
        "背包在公車上"
      ],
      "answer": 0,
      "note": "left my backpack 是把包包忘了，red line 是紅線。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "I'd like to report a stolen wallet. It happened about two hours ago on a crowded bus.",
      "prompt": "客人要做什麼？",
      "options": [
        "報案：皮夾在公車上被偷",
        "領回遺失的皮夾",
        "問路"
      ],
      "answer": 0,
      "note": "report 是報案，stolen 是被偷。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Hi, how can I help you?",
      "promptZh": "嗨，需要什麼幫忙嗎？",
      "hint": "說你弄丟了什麼",
      "expect": "lost|left|missing|can'?t find|stolen",
      "model": "I think I lost my phone.",
      "modelZh": "我想我把手機弄丟了。"
    },
    {
      "prompt": "When did you last have it?",
      "promptZh": "你最後一次看到它是什麼時候？",
      "hint": "說大約的時間",
      "expect": "ago|morning|afternoon|yesterday|last|this|noon|o'?clock|about",
      "model": "About an hour ago.",
      "modelZh": "大約一個小時前。"
    },
    {
      "prompt": "Where do you think you lost it?",
      "promptZh": "你覺得是在哪裡弄丟的？",
      "hint": "說可能的地點",
      "expect": "bus|train|subway|cafe|café|store|mall|class|library|restaurant|think|maybe|not sure|at the|on the|in the",
      "model": "I think I left it on the bus.",
      "modelZh": "我想是忘在公車上了。"
    },
    {
      "prompt": "What does it look like?",
      "promptZh": "它長什麼樣子？",
      "hint": "說顏色和特徵",
      "expect": "black|white|gray|grey|brown|blue|red|green|case|zipper|leather|sticker|small|big",
      "model": "It's a black wallet with a zipper.",
      "modelZh": "是一個有拉鍊的黑色皮夾。"
    },
    {
      "prompt": "Is there anything with your name on it?",
      "promptZh": "上面有你的名字嗎？",
      "hint": "說有或沒有",
      "expect": "yes|yeah|no|name|id|card|inside|tag",
      "model": "Yes, my student ID is inside.",
      "modelZh": "有，我的學生證在裡面。"
    },
    {
      "prompt": "Can I get your name and phone number?",
      "promptZh": "可以給我你的名字和電話嗎？",
      "hint": "說名字和電話",
      "expect": "my name|it'?s|i'?m|number|five|oh|\\d",
      "model": "Sure. It's Melissa Chen. My number is five-five-five, oh one two three.",
      "modelZh": "好，我叫 Melissa Chen，電話是 555-0123。"
    },
    {
      "prompt": "We'll call you if it turns up.",
      "promptZh": "如果找到，我們會打電話給你。",
      "hint": "道謝",
      "expect": "thank|thanks|appreciate|great|okay|ok",
      "model": "Thank you so much for your help.",
      "modelZh": "非常謝謝你的幫忙。"
    },
    {
      "prompt": "Can you show me some ID, please?",
      "promptZh": "可以出示證件嗎？",
      "hint": "說好，並說給他看什麼",
      "expect": "sure|yes|yeah|here|passport|id|license|student",
      "model": "Sure, here's my passport.",
      "modelZh": "好的，這是我的護照。"
    }
  ],
  "culture": [
    {
      "t": "失物招領處（Lost and Found）",
      "d": "商場、地鐵、大學、機場、飯店通常都有失物招領處。到那裡說明遺失的時間、地點和物品特徵，工作人員會幫你查。要領回時必須出示證件並簽名。"
    },
    {
      "t": "先說最後一次拿著的地方",
      "d": "對方最想知道三件事：什麼時候（when）、在哪裡（where）、長什麼樣子（what does it look like）。依序回答最清楚。"
    },
    {
      "t": "信用卡要馬上停掉",
      "d": "皮夾被偷或遺失後，第一時間打電話給銀行（卡片背面有客服電話）停卡，再報案。美國很多信用卡有被盜刷的保障，但你必須盡快通報。"
    },
    {
      "t": "報案與報案編號",
      "d": "遇到失竊，可以到警察局或打非緊急電話報案，並向警察要報案編號（report number 或 case number），日後申請保險或補辦證件會用到。緊急情況再打 911。"
    },
    {
      "t": "手機的定位功能很好用",
      "d": "iPhone 的 Find My、Android 的 Find My Device 可以查位置或遠端鎖定。出門前先開啟，遺失時用另一個裝置登入就能找。"
    }
  ]
};
