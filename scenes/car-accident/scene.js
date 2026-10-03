// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "car-accident",
  "title": "小車禍處理",
  "en": "A Minor Car Accident",
  "emoji": "🚗",
  "goal": "學會小車禍後確認有沒有人受傷、和對方駕駛交換資料、向警察說明經過，並打電話給保險公司理賠",
  "speakers": {
    "S": {
      "name": "Other Driver",
      "zh": "對方駕駛",
      "avatar": "👩",
      "voice": "f2"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♂️",
      "voice": "m3"
    },
    "O": {
      "name": "Police Officer",
      "zh": "警察",
      "avatar": "👮‍♂️",
      "voice": "m2"
    },
    "I": {
      "name": "Insurance Agent",
      "zh": "保險客服",
      "avatar": "👩‍💼",
      "voice": "f"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "車禍現場：和對方駕駛交換資料",
      "where": "路口停紅燈時被後車輕撞",
      "emoji": "💥",
      "lines": [
        {
          "s": "S",
          "en": "Oh no! I'm so sorry. Are you okay?",
          "zh": "天啊！真的很抱歉。你還好嗎？"
        },
        {
          "s": "Y",
          "en": "I think I'm fine. Are you hurt?",
          "zh": "我想我沒事。你受傷了嗎？"
        },
        {
          "s": "S",
          "en": "No, I'm okay. I just didn't stop in time. Let's move our cars to the side of the road.",
          "zh": "沒有，我沒事。我只是沒有及時煞住。我們把車子移到路邊吧。"
        },
        {
          "s": "Y",
          "en": "Okay. Let me turn on my hazard lights first. Should we call the police?",
          "zh": "好的。我先打開警示燈。我們要報警嗎？"
        },
        {
          "s": "S",
          "en": "Yes, I think we should. Meanwhile, let's exchange information. Can I see your driver's license and insurance card?",
          "zh": "要，我想我們應該報警。同時，我們先交換資料。可以看一下你的駕照和保險卡嗎？"
        },
        {
          "s": "Y",
          "en": "Sure. Here you go. Could I take a photo of yours, too?",
          "zh": "好的，給你。我也可以拍一下你的嗎？"
        },
        {
          "s": "S",
          "en": "Of course. Here's my license and my insurance card. My policy number is on the front.",
          "zh": "當然。這是我的駕照和保險卡，保單號碼在正面。"
        },
        {
          "s": "Y",
          "en": "Thanks. Let me take pictures of both cars and the damage.",
          "zh": "謝謝。我來拍兩台車和損壞的地方。"
        },
        {
          "s": "S",
          "en": "Good idea. The back of your car has a dent and a scratch on the bumper.",
          "zh": "好主意。你車子的後面有凹痕，保險桿還有刮傷。"
        },
        {
          "s": "Y",
          "en": "Yes. Could I also get your phone number and your license plate number?",
          "zh": "對。我也可以要你的電話號碼和車牌號碼嗎？"
        },
        {
          "s": "S",
          "en": "Sure. It's five five five, zero one eight eight, and the plate number is A-B-C, one two three four.",
          "zh": "好的，是 555-0188，車牌號碼是 ABC-1234。"
        }
      ]
    },
    {
      "title": "警察到場做筆錄",
      "where": "警察抵達現場，詢問經過",
      "emoji": "👮",
      "lines": [
        {
          "s": "O",
          "en": "Is anyone hurt?",
          "zh": "有人受傷嗎？"
        },
        {
          "s": "Y",
          "en": "No, nobody is hurt. It's just damage to the cars.",
          "zh": "沒有，沒人受傷，只是車子受損。"
        },
        {
          "s": "O",
          "en": "Okay. I'm Officer Brown. Can you tell me what happened?",
          "zh": "好的，我是 Brown 警官。你可以告訴我發生什麼事嗎？"
        },
        {
          "s": "Y",
          "en": "I was stopped at the red light, and the car behind me hit my bumper.",
          "zh": "我停在紅燈前，後面的車撞到我的保險桿。"
        },
        {
          "s": "O",
          "en": "Ma'am, is that what happened from your side?",
          "zh": "女士，從你這邊看也是這樣嗎？"
        },
        {
          "s": "S",
          "en": "Yes, I looked down for a second, and I didn't stop in time. It was my mistake.",
          "zh": "是的，我低頭看了一下，沒有及時煞車。是我的錯。"
        },
        {
          "s": "O",
          "en": "Okay. Were there any witnesses? Did anyone else see the accident?",
          "zh": "好的。有目擊者嗎？有沒有其他人看到事故？"
        },
        {
          "s": "Y",
          "en": "I don't think so. But there's a camera at the intersection.",
          "zh": "我想沒有。不過路口有一個攝影機。"
        },
        {
          "s": "O",
          "en": "Good point. Can I see both of your licenses, registrations, and proof of insurance?",
          "zh": "好提醒。我可以看你們兩位的駕照、行照和保險證明嗎？"
        },
        {
          "s": "Y",
          "en": "Here are mine. Is my car safe to drive?",
          "zh": "這是我的。我的車可以開嗎？"
        },
        {
          "s": "O",
          "en": "Yes, it's drivable, but you should get it checked. Here's the report number. You'll need it for your insurance.",
          "zh": "可以，車子還能開，但你應該去檢查。這是報案編號，你向保險公司申請時會需要。"
        }
      ]
    },
    {
      "title": "打電話給保險公司理賠",
      "where": "回家後打電話向保險公司報案",
      "emoji": "☎️",
      "lines": [
        {
          "s": "I",
          "en": "Thank you for calling Safe Auto Insurance. How can I help you today?",
          "zh": "謝謝你打給 Safe Auto 保險，今天有什麼可以幫你的？"
        },
        {
          "s": "Y",
          "en": "Hi, I was in a car accident this afternoon, and I'd like to file a claim.",
          "zh": "嗨，我今天下午發生車禍，我想申請理賠。"
        },
        {
          "s": "I",
          "en": "I'm sorry to hear that. Is everyone okay?",
          "zh": "很遺憾聽到這件事。大家都沒事嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, nobody was hurt. A car hit me from behind while I was stopped at a red light.",
          "zh": "是的，沒有人受傷。我在紅燈停車時，被一輛車從後面撞到。"
        },
        {
          "s": "I",
          "en": "Okay. Can I have your policy number, and the date, time, and location of the accident?",
          "zh": "好的。可以給我你的保單號碼，以及事故的日期、時間和地點嗎？"
        },
        {
          "s": "Y",
          "en": "It's today at about three thirty, at the corner of Main Street and Oak Avenue. I also have the police report number.",
          "zh": "是今天大約三點半，在 Main 街和 Oak 大道的路口。我也有警方的報案編號。"
        },
        {
          "s": "I",
          "en": "Great. Do you have the other driver's information and photos of the damage?",
          "zh": "很好。你有對方駕駛的資料和損壞的照片嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, I have her name, insurance company, and license plate number, and I took pictures of both cars.",
          "zh": "有，我有她的名字、保險公司和車牌號碼，我也拍了兩台車的照片。"
        },
        {
          "s": "I",
          "en": "Thank you. I've opened a claim for you. Your claim number is C-four-seven-two-one. An adjuster will call you within two days.",
          "zh": "謝謝你。我已經幫你開了一個理賠案件，你的案件編號是 C-4721。理賠員會在兩天內打給你。"
        },
        {
          "s": "Y",
          "en": "Will my insurance cover the repairs? And is there a deductible?",
          "zh": "我的保險會給付修理費嗎？有自付額嗎？"
        },
        {
          "s": "I",
          "en": "Since the other driver was at fault, her insurance should pay. If you use your own coverage, the deductible is five hundred dollars.",
          "zh": "因為對方駕駛有過失，她的保險應該會負責。如果你用自己的保險，自付額是五百塊。"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "Are you okay? Are you hurt?",
      "zh": "你還好嗎？你受傷了嗎？"
    },
    {
      "en": "I'm fine, but my car is damaged.",
      "zh": "我沒事，但我的車損壞了。"
    },
    {
      "en": "Let's move our cars to the side of the road.",
      "zh": "我們把車移到路邊吧。"
    },
    {
      "en": "I'll turn on my hazard lights.",
      "zh": "我來打開警示燈。"
    },
    {
      "en": "Should we call the police?",
      "zh": "我們要報警嗎？"
    },
    {
      "en": "Let's exchange information.",
      "zh": "我們來交換資料。"
    },
    {
      "en": "Can I see your driver's license and insurance card?",
      "zh": "可以看一下你的駕照和保險卡嗎？"
    },
    {
      "en": "What's your policy number?",
      "zh": "你的保單號碼是多少？"
    },
    {
      "en": "Could I take a photo of your license plate?",
      "zh": "我可以拍你的車牌嗎？"
    },
    {
      "en": "I was stopped at the red light.",
      "zh": "我停在紅燈前。"
    },
    {
      "en": "The car behind me hit my bumper.",
      "zh": "後面的車撞到我的保險桿。"
    },
    {
      "en": "Nobody is hurt.",
      "zh": "沒人受傷。"
    },
    {
      "en": "I need to call my insurance company.",
      "zh": "我要打給我的保險公司。"
    },
    {
      "en": "I'd like to file a claim.",
      "zh": "我想申請理賠。"
    },
    {
      "en": "Can I get the police report number?",
      "zh": "我可以拿報案編號嗎？"
    },
    {
      "en": "Is my car safe to drive?",
      "zh": "我的車可以開嗎？"
    },
    {
      "en": "I need a tow truck.",
      "zh": "我需要拖吊車。"
    },
    {
      "en": "Where can I get an estimate for the repairs?",
      "zh": "我可以去哪裡拿修理估價？"
    },
    {
      "en": "Does my insurance cover a rental car?",
      "zh": "我的保險包含租車嗎？"
    },
    {
      "en": "How much is the deductible?",
      "zh": "自付額是多少？"
    }
  ],
  "hear": [
    {
      "en": "Are you okay? Is anyone hurt?",
      "zh": "你還好嗎？有人受傷嗎？",
      "reply": "I'm fine. Nobody is hurt.",
      "replyZh": "我沒事，沒人受傷。"
    },
    {
      "en": "Let's move our cars to the side of the road.",
      "zh": "我們把車移到路邊吧。",
      "reply": "Okay. I'll turn on my hazard lights.",
      "replyZh": "好，我來開警示燈。"
    },
    {
      "en": "Should we call the police?",
      "zh": "我們要報警嗎？",
      "reply": "Yes, I think we should.",
      "replyZh": "要，我想我們應該報警。"
    },
    {
      "en": "Can I see your driver's license and insurance card?",
      "zh": "可以看一下你的駕照和保險卡嗎？",
      "reply": "Sure. Here you go.",
      "replyZh": "好，給你。"
    },
    {
      "en": "Can you tell me what happened?",
      "zh": "你可以告訴我發生什麼事嗎？",
      "reply": "I was stopped at the red light, and she hit my bumper.",
      "replyZh": "我停在紅燈前，她撞到我的保險桿。"
    },
    {
      "en": "Were there any witnesses?",
      "zh": "有目擊者嗎？",
      "reply": "I don't think so, but there's a camera there.",
      "replyZh": "我想沒有，但那裡有攝影機。"
    },
    {
      "en": "Is your car drivable?",
      "zh": "你的車還能開嗎？",
      "reply": "Yes, I think so, but I'll get it checked.",
      "replyZh": "可以，我想，但我會去檢查。"
    },
    {
      "en": "Here's the report number. You'll need it for your insurance.",
      "zh": "這是報案編號，你向保險公司申請時會需要。",
      "reply": "Thank you, officer.",
      "replyZh": "謝謝你，警官。"
    },
    {
      "en": "Can I have your policy number and the date of the accident?",
      "zh": "可以給我你的保單號碼和事故日期嗎？",
      "reply": "Sure. It was today, around three thirty.",
      "replyZh": "好，是今天大約三點半。"
    },
    {
      "en": "An adjuster will call you within two days.",
      "zh": "理賠員會在兩天內打給你。",
      "reply": "Okay. Thank you for your help.",
      "replyZh": "好，謝謝你的幫忙。"
    }
  ],
  "say": [
    {
      "en": "Hi, I was just in a car accident. Nobody is hurt.",
      "zh": "嗨，我剛發生車禍，沒有人受傷。"
    },
    {
      "en": "I'm not sure what to do. Could you help me?",
      "zh": "我不知道該怎麼辦，你可以幫我嗎？"
    },
    {
      "en": "I don't want to say whose fault it was. I'll let the insurance decide.",
      "zh": "我不想說是誰的錯，我讓保險公司決定。"
    },
    {
      "en": "Could we write down each other's information?",
      "zh": "我們可以互相寫下對方的資料嗎？"
    },
    {
      "en": "Is it okay if I take some pictures?",
      "zh": "我可以拍一些照片嗎？"
    },
    {
      "en": "I'm an international student, and I'm not familiar with the process.",
      "zh": "我是國際學生，不熟悉這個流程。"
    },
    {
      "en": "Could you explain what I need to do next?",
      "zh": "可以說明我接下來需要做什麼嗎？"
    },
    {
      "en": "Where should I take my car to be repaired?",
      "zh": "我應該把車送去哪裡修？"
    },
    {
      "en": "Could you send me the claim number by email?",
      "zh": "可以用 email 寄理賠編號給我嗎？"
    },
    {
      "en": "Sorry, could you say that again more slowly?",
      "zh": "抱歉，可以說慢一點再說一次嗎？"
    }
  ],
  "vocab": [
    {
      "w": "accident",
      "pos": "n.",
      "zh": "事故、車禍",
      "ex": "I was in a car accident.",
      "exzh": "我發生了車禍。"
    },
    {
      "w": "hazard lights",
      "pos": "n.",
      "zh": "警示燈",
      "ex": "Turn on your hazard lights.",
      "exzh": "打開你的警示燈。"
    },
    {
      "w": "bumper",
      "pos": "n.",
      "zh": "保險桿",
      "ex": "The bumper has a dent.",
      "exzh": "保險桿有凹痕。"
    },
    {
      "w": "dent",
      "pos": "n.",
      "zh": "凹痕",
      "ex": "There is a dent in the door.",
      "exzh": "車門有一個凹痕。"
    },
    {
      "w": "license plate",
      "pos": "n.",
      "zh": "車牌",
      "ex": "I wrote down his license plate.",
      "exzh": "我記下了他的車牌。"
    },
    {
      "w": "policy number",
      "pos": "n.",
      "zh": "保單號碼",
      "ex": "What is your policy number?",
      "exzh": "你的保單號碼是什麼？"
    },
    {
      "w": "file a claim",
      "pos": "phr.",
      "zh": "申請理賠",
      "ex": "I need to file a claim.",
      "exzh": "我需要申請理賠。"
    },
    {
      "w": "deductible",
      "pos": "n.",
      "zh": "自付額（保險給付前自己先付的錢）",
      "ex": "The deductible is five hundred dollars.",
      "exzh": "自付額是五百塊。"
    },
    {
      "w": "adjuster",
      "pos": "n.",
      "zh": "理賠員",
      "ex": "The adjuster will inspect the car.",
      "exzh": "理賠員會檢查車子。"
    },
    {
      "w": "witness",
      "pos": "n.",
      "zh": "目擊者",
      "ex": "There was one witness.",
      "exzh": "有一位目擊者。"
    },
    {
      "w": "at fault",
      "pos": "adj.",
      "zh": "有過失的",
      "ex": "The other driver was at fault.",
      "exzh": "對方駕駛有過失。"
    },
    {
      "w": "tow truck",
      "pos": "n.",
      "zh": "拖吊車",
      "ex": "We called a tow truck.",
      "exzh": "我們叫了拖吊車。"
    }
  ],
  "situations": [
    {
      "title": "😵 警察或保險客服講太快",
      "hear": {
        "en": "I'll need your policy number, the date and location, the other party's plate and insurer, and the report number, and then an adjuster will contact you for an estimate.",
        "zh": "（講得很快）我需要你的保單號碼、日期和地點、對方的車牌與保險公司，還有報案編號，然後理賠員會聯絡你做估價。",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you tell me what I need one by one?",
          "zh": "抱歉，可以一項一項告訴我需要什麼嗎？"
        },
        {
          "en": "Could you email me the list so I don't miss anything?",
          "zh": "可以把清單 email 給我，讓我不要漏掉嗎？"
        }
      ],
      "tip": "緊張時更容易聽不懂。請對方放慢、一項一項說，並請他們用 email 寄書面清單，確認你真的有拿齊資料。"
    },
    {
      "title": "😰 對方一直說是你的錯，或叫你不要報警",
      "hear": {
        "en": "Let's not call the police. We can just settle this between us. I'll give you cash.",
        "zh": "我們不要報警，私下解決就好，我給你現金。"
      },
      "say": [
        {
          "en": "I'd prefer to call the police and my insurance company.",
          "zh": "我想還是報警，並聯絡我的保險公司。"
        },
        {
          "en": "I'm not going to say who's at fault. Let's let the police decide.",
          "zh": "我不想說是誰的錯，讓警察來判斷。"
        }
      ],
      "tip": "不要輕易說 It was my fault，也不要私下收現金了事。受損狀況事後才發現時會很麻煩。有受傷、損壞明顯時，一律報警並留下紀錄。"
    },
    {
      "title": "🤕 事後才覺得脖子或背痛",
      "say": [
        {
          "en": "My neck started hurting after the accident. Should I see a doctor?",
          "zh": "事故後我的脖子開始痛，我應該去看醫生嗎？"
        },
        {
          "en": "Can I add an injury to my claim?",
          "zh": "我可以把受傷加進我的理賠嗎？"
        }
      ],
      "tip": "車禍後有些傷勢（頸部、背部）過幾小時才痛，也可能在幾天後才發現。有不舒服就去看醫生，並告訴保險公司，不要拖。"
    },
    {
      "title": "🚙 車子不能開、需要拖吊或租車",
      "say": [
        {
          "en": "My car can't be driven. I need a tow truck.",
          "zh": "我的車不能開，我需要拖吊車。"
        },
        {
          "en": "Does my policy cover a rental car while mine is being repaired?",
          "zh": "我的保單包含修車期間的租車嗎？"
        }
      ],
      "tip": "車子不能開要叫拖吊車，不要自己硬開。保險有沒有包含拖吊和租車（rental reimbursement）要看保單，先問客服。"
    },
    {
      "title": "💵 估價單比預期貴、想比較修車廠",
      "hear": {
        "en": "The repair estimate is two thousand four hundred dollars.",
        "zh": "修理估價是兩千四百塊。"
      },
      "say": [
        {
          "en": "Can I get a second estimate from another shop?",
          "zh": "我可以向別家修車廠拿第二份估價嗎？"
        },
        {
          "en": "Which repair shops do you recommend?",
          "zh": "你推薦哪些修車廠？"
        }
      ],
      "tip": "可以多比較幾家，也可以用保險公司指定的修車廠。大型損壞的估價可能要請理賠員確認，修理前先和保險公司溝通，免得不給付。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "Are you okay? Is anyone hurt?",
      "prompt": "對方在問什麼？",
      "options": [
        "你還好嗎、有沒有人受傷",
        "你的車多少錢",
        "你要去哪裡"
      ],
      "answer": 0,
      "note": "hurt 是受傷。"
    },
    {
      "type": "選擇回應",
      "audio": "Should we call the police?",
      "prompt": "你覺得應該報警，最適合怎麼回答？",
      "options": [
        "Yes, I think we should.",
        "No, it's a red light.",
        "I have a dent."
      ],
      "answer": 0,
      "note": "call the police 是報警。"
    },
    {
      "type": "聽懂意思",
      "audio": "Let's move our cars to the side of the road and turn on the hazard lights.",
      "prompt": "他們要做什麼？",
      "options": [
        "把車移到路邊，打開警示燈",
        "馬上離開",
        "把車留在路中間"
      ],
      "answer": 0,
      "note": "hazard lights 是警示燈。"
    },
    {
      "type": "選擇回應",
      "audio": "Can I see your driver's license and insurance card?",
      "prompt": "你要給對方看資料，最適合怎麼回答？",
      "options": [
        "Sure. Here you go.",
        "It's not my fault.",
        "Please call a tow truck."
      ],
      "answer": 0,
      "note": "Here you go. 是「給你」。"
    },
    {
      "type": "聽數字",
      "audio": "My phone number is five five five, zero one eight eight, and the plate number is A B C, one two three four.",
      "prompt": "車牌號碼是什麼？",
      "options": [
        "ABC-1234",
        "ABC-1243",
        "ACB-1234"
      ],
      "answer": 0,
      "note": "字母和數字要一個一個聽。"
    },
    {
      "type": "聽懂意思",
      "audio": "I was stopped at the red light, and the car behind me hit my bumper.",
      "prompt": "事故是怎麼發生的？",
      "options": [
        "紅燈停車時被後車撞到",
        "自己撞到護欄",
        "變換車道時擦撞"
      ],
      "answer": 0,
      "note": "bumper 是保險桿。"
    },
    {
      "type": "聽懂意思",
      "audio": "Here's the report number. You'll need it for your insurance.",
      "prompt": "警察給你報案編號是為了什麼？",
      "options": [
        "向保險公司申請理賠",
        "停車費",
        "駕照更新"
      ],
      "answer": 0,
      "note": "report number 是報案編號。",
      "speaker": "O"
    },
    {
      "type": "聽數字",
      "audio": "An adjuster will call you within two days. If you use your own coverage, the deductible is five hundred dollars.",
      "prompt": "理賠員多久會聯絡？自付額多少？",
      "options": [
        "兩天內，500 元",
        "十二天內，50 元",
        "兩天內，5000 元"
      ],
      "answer": 0,
      "note": "five hundred 是 500，fifty 是 50。",
      "speaker": "I"
    },
    {
      "type": "對話理解",
      "audio": "Hi, I was in a car accident this afternoon, and I'd like to file a claim. Nobody was hurt. A car hit me from behind while I was stopped at a red light.",
      "prompt": "打電話的人想要什麼？",
      "options": [
        "申請車禍理賠",
        "買新保險",
        "取消保單"
      ],
      "answer": 0,
      "note": "file a claim 是申請理賠。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "My car can't be driven. I need a tow truck, and I want to know if my policy covers a rental car.",
      "prompt": "車主需要什麼？",
      "options": [
        "拖吊車，並問有沒有租車給付",
        "洗車服務",
        "新的駕照"
      ],
      "answer": 0,
      "note": "rental car 是租來的車。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Oh no! I'm so sorry. Are you okay? Is anyone hurt?",
      "promptZh": "天啊！真的很抱歉。你還好嗎？有人受傷嗎？",
      "hint": "說你沒事，沒人受傷",
      "expect": "fine|okay|ok|hurt|no one|nobody|alright",
      "model": "I think I'm fine. Nobody is hurt.",
      "modelZh": "我想我沒事，沒有人受傷。"
    },
    {
      "prompt": "Let's move our cars to the side of the road.",
      "promptZh": "我們把車移到路邊吧。",
      "hint": "說好，並說要開警示燈、問要不要報警",
      "expect": "okay|ok|hazard|police|call|sure|yes",
      "model": "Okay. I'll turn on my hazard lights. Should we call the police?",
      "modelZh": "好，我來打開警示燈。我們要報警嗎？"
    },
    {
      "prompt": "Let's exchange information. Can I see your driver's license and insurance card?",
      "promptZh": "我們交換資料吧。可以看你的駕照和保險卡嗎？",
      "hint": "說好，並請對方也給你資料",
      "expect": "sure|here|yours|your|photo|okay|ok",
      "model": "Sure. Here you go. Could I see yours, too?",
      "modelZh": "好，給你。我也可以看你的嗎？"
    },
    {
      "prompt": "Can you tell me what happened?",
      "promptZh": "你可以告訴我發生什麼事嗎？",
      "hint": "說你停紅燈時被後面的車撞到",
      "expect": "red light|stopped|behind|hit|bumper|crash",
      "model": "I was stopped at the red light, and the car behind me hit my bumper.",
      "modelZh": "我停在紅燈前，後面的車撞到我的保險桿。"
    },
    {
      "prompt": "Were there any witnesses?",
      "promptZh": "有目擊者嗎？",
      "hint": "說沒有，但有攝影機",
      "expect": "no|camera|don't think|nobody|witness|intersection",
      "model": "I don't think so, but there's a camera at the intersection.",
      "modelZh": "我想沒有，但路口有攝影機。"
    },
    {
      "prompt": "Is your car drivable? Here's the report number.",
      "promptZh": "你的車還能開嗎？這是報案編號。",
      "hint": "說可以開，並道謝",
      "expect": "yes|drivable|drive|thank|checked|okay",
      "model": "Yes, I think so, but I'll get it checked. Thank you, officer.",
      "modelZh": "可以，我想，但我會去檢查。謝謝你，警官。"
    },
    {
      "prompt": "Thank you for calling Safe Auto Insurance. How can I help you today?",
      "promptZh": "謝謝你打給 Safe Auto 保險，今天有什麼可以幫你的？",
      "hint": "說你發生車禍，要申請理賠",
      "expect": "accident|claim|file|crash|car",
      "model": "Hi, I was in a car accident this afternoon, and I'd like to file a claim.",
      "modelZh": "嗨，我今天下午發生車禍，我想申請理賠。"
    },
    {
      "prompt": "Your claim number is C four seven two one. An adjuster will call you within two days.",
      "promptZh": "你的案件編號是 C-4721，理賠員會在兩天內打給你。",
      "hint": "問有沒有自付額、會不會給付修理費",
      "expect": "deductible|cover|repair|pay|how much|cost",
      "model": "Will my insurance cover the repairs? And is there a deductible?",
      "modelZh": "我的保險會給付修理費嗎？有自付額嗎？"
    }
  ],
  "culture": [
    {
      "t": "小車禍的步驟",
      "d": "先確認有沒有人受傷，把車移到安全的地方並打開警示燈。有人受傷或車子不能動就打 911。沒受傷但有損壞，建議也報警，留下紀錄。再拍下兩台車、車牌、現場和損壞的照片。"
    },
    {
      "t": "要交換哪些資料",
      "d": "雙方交換姓名、電話、駕照、保險公司、保單號碼、車牌和車型。可以直接拍照。有目擊者也要留下聯絡方式。不要先說 It was my fault，過失由警察和保險公司判斷。"
    },
    {
      "t": "警察報告與報案編號",
      "d": "警察到場會問經過、看雙方駕照、行照（registration）和保險證明，然後給你一個報案編號（report number）。這個編號會用在向保險公司理賠，請妥善保存。"
    },
    {
      "t": "打給自己的保險公司",
      "d": "事故當天或隔天就要通知自己的保險公司，準備保單號碼、日期時間地點、報案編號、對方資料和照片。公司會開一個案件編號（claim number），並派理賠員（adjuster）聯絡你、估價。"
    },
    {
      "t": "自付額與租車",
      "d": "用自己的保險理賠，通常要先付自付額（deductible）。如果對方有過失，對方的保險可能負責修理，不用自付。租車、拖吊是否給付要看保單，請在修理前先問清楚，也可以多比較幾家修車廠的估價。"
    }
  ]
};
