// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "renting-apartment",
  "title": "看房與租約",
  "en": "Renting an Apartment",
  "emoji": "🏠",
  "goal": "學會預約看房、問清楚租金與押金、說明自己是留學生如何申請、聽懂租約重點，並在入住後報修與詢問退租規定",
  "speakers": {
    "S": {
      "name": "Leasing Agent",
      "zh": "租賃專員",
      "avatar": "👨‍💼",
      "voice": "m2"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♀️",
      "voice": "f"
    },
    "M": {
      "name": "Maintenance Staff",
      "zh": "維修人員",
      "avatar": "👨‍🔧",
      "voice": "m3"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "看房與詢問租金",
      "where": "公寓的接待處，專員帶你參觀",
      "emoji": "🔑",
      "lines": [
        {
          "s": "S",
          "en": "Hi, welcome to Maple Court Apartments. Are you here for the tour?",
          "zh": "嗨，歡迎來到 Maple Court 公寓。你是來看房的嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, I made an appointment for two o'clock. I'm looking for a one-bedroom.",
          "zh": "是的，我預約了兩點。我在找一房的格局。"
        },
        {
          "s": "S",
          "en": "Great. Let me show you a unit on the second floor. Here's the living room, and the kitchen comes with a fridge and a dishwasher.",
          "zh": "太好了。我帶你看二樓的一間。這是客廳，廚房附冰箱和洗碗機。"
        },
        {
          "s": "Y",
          "en": "It's nice and bright. How much is the rent?",
          "zh": "很明亮。租金是多少？"
        },
        {
          "s": "S",
          "en": "It's one thousand four hundred fifty dollars a month, and the security deposit is one month's rent.",
          "zh": "每個月一千四百五十塊，押金是一個月的租金。"
        },
        {
          "s": "Y",
          "en": "Are utilities included?",
          "zh": "水電費有包含嗎？"
        },
        {
          "s": "S",
          "en": "Water and trash are included. You pay for electricity and internet yourself.",
          "zh": "水費和垃圾費包含在內，電費和網路要你自己付。"
        },
        {
          "s": "Y",
          "en": "Is there a laundry room in the building? And how about parking?",
          "zh": "大樓裡有洗衣間嗎？停車呢？"
        },
        {
          "s": "S",
          "en": "Yes, there's a laundry room on every floor. Parking is one hundred dollars a month, and the bus stop is right outside.",
          "zh": "有，每層樓都有洗衣間。停車每月一百塊，公車站就在外面。"
        },
        {
          "s": "Y",
          "en": "That sounds good. Do you allow pets?",
          "zh": "聽起來不錯。可以養寵物嗎？"
        },
        {
          "s": "S",
          "en": "Cats and small dogs are okay with a pet deposit.",
          "zh": "貓和小型犬可以，要付寵物押金。"
        }
      ]
    },
    {
      "title": "申請與簽租約",
      "where": "辦公室，討論申請流程和租約",
      "emoji": "📝",
      "lines": [
        {
          "s": "Y",
          "en": "I'd like to apply for this apartment. I'm an international student, so I don't have a credit history here.",
          "zh": "我想申請這間公寓。我是國際學生，在這裡沒有信用紀錄。"
        },
        {
          "s": "S",
          "en": "That's okay. We can accept a co-signer, or you can pay a larger deposit.",
          "zh": "沒關係。我們可以接受共同簽署人，或是你可以多付一些押金。"
        },
        {
          "s": "Y",
          "en": "My parents can be my co-signer. What documents do I need?",
          "zh": "我的父母可以當共同簽署人。我需要準備什麼文件？"
        },
        {
          "s": "S",
          "en": "Please bring your passport, your student visa, your admission letter, and proof of income or a bank statement.",
          "zh": "請帶護照、學生簽證、入學許可信，以及收入證明或銀行對帳單。"
        },
        {
          "s": "Y",
          "en": "Is there an application fee?",
          "zh": "要付申請費嗎？"
        },
        {
          "s": "S",
          "en": "Yes, it's fifty dollars, and it isn't refundable.",
          "zh": "要，五十塊，而且不能退。"
        },
        {
          "s": "Y",
          "en": "How long is the lease?",
          "zh": "租約多長？"
        },
        {
          "s": "S",
          "en": "The standard lease is twelve months. If you break the lease early, there's a penalty fee.",
          "zh": "標準租約是十二個月。如果提前解約，要付違約金。"
        },
        {
          "s": "Y",
          "en": "Okay. Do I need renters insurance?",
          "zh": "好的。我需要租客保險嗎？"
        },
        {
          "s": "S",
          "en": "Yes, we require it. It's usually about fifteen dollars a month. Please read the lease carefully before you sign.",
          "zh": "要，我們規定要買。通常每個月大約十五塊。簽名前請仔細閱讀租約。"
        },
        {
          "s": "Y",
          "en": "Could you explain the late fee policy? I want to make sure I understand.",
          "zh": "可以說明一下逾期費的規定嗎？我想確定我看懂了。"
        }
      ]
    },
    {
      "title": "入住後報修與詢問退租",
      "where": "電話聯絡物業辦公室，維修人員到你家",
      "emoji": "🔧",
      "lines": [
        {
          "s": "S",
          "en": "Maple Court office. How can I help you?",
          "zh": "Maple Court 辦公室，有什麼可以幫你的？"
        },
        {
          "s": "Y",
          "en": "Hi, this is Amy in apartment 2B. The kitchen sink is leaking.",
          "zh": "嗨，我是 2B 的 Amy，廚房水槽在漏水。"
        },
        {
          "s": "S",
          "en": "I'm sorry about that. I'll send someone over. Is it okay if maintenance enters the apartment while you're out?",
          "zh": "很抱歉。我會派人過去。如果你不在家，維修人員可以進去嗎？"
        },
        {
          "s": "Y",
          "en": "I'll be home this afternoon, so please come between two and four.",
          "zh": "我下午在家，所以請在兩點到四點之間過來。"
        },
        {
          "s": "M",
          "en": "Hi, I'm here for the leaky sink. Where's the problem?",
          "zh": "嗨，我是來修漏水水槽的。問題在哪裡？"
        },
        {
          "s": "Y",
          "en": "It's under the sink. The pipe drips whenever I turn on the water.",
          "zh": "在水槽下面。每次開水，水管就會滴水。"
        },
        {
          "s": "M",
          "en": "I see. The pipe is loose. I'll tighten it, and that should fix it.",
          "zh": "我看到了，水管鬆了。我把它鎖緊，應該就好了。"
        },
        {
          "s": "Y",
          "en": "Thanks. By the way, my lease ends in two months. How do I renew it?",
          "zh": "謝謝。對了，我的租約兩個月後到期。要怎麼續約？"
        },
        {
          "s": "M",
          "en": "You'll need to talk to the office. Usually you have to give sixty days' notice if you don't plan to renew.",
          "zh": "你要去問辦公室。通常如果不打算續約，要提前六十天通知。"
        },
        {
          "s": "Y",
          "en": "Got it. And will I get my deposit back when I move out?",
          "zh": "了解。我搬走時押金會退還嗎？"
        },
        {
          "s": "M",
          "en": "As long as the apartment is clean and there's no damage beyond normal wear and tear, yes.",
          "zh": "只要公寓乾淨，而且沒有正常使用以外的損壞，就會退。"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "I'd like to schedule a tour.",
      "zh": "我想預約看房。"
    },
    {
      "en": "I'm looking for a one-bedroom apartment.",
      "zh": "我在找一房的公寓。"
    },
    {
      "en": "How much is the rent?",
      "zh": "租金是多少？"
    },
    {
      "en": "How much is the security deposit?",
      "zh": "押金是多少？"
    },
    {
      "en": "Are utilities included?",
      "zh": "水電費有包含嗎？"
    },
    {
      "en": "Is there a laundry room in the building?",
      "zh": "大樓裡有洗衣間嗎？"
    },
    {
      "en": "Is parking available?",
      "zh": "有停車位嗎？"
    },
    {
      "en": "Do you allow pets?",
      "zh": "可以養寵物嗎？"
    },
    {
      "en": "I'm an international student.",
      "zh": "我是國際學生。"
    },
    {
      "en": "I don't have a credit history here.",
      "zh": "我在這裡沒有信用紀錄。"
    },
    {
      "en": "Can my parents be my co-signer?",
      "zh": "我的父母可以當共同簽署人嗎？"
    },
    {
      "en": "What documents do I need to apply?",
      "zh": "申請需要準備什麼文件？"
    },
    {
      "en": "Is the application fee refundable?",
      "zh": "申請費可以退嗎？"
    },
    {
      "en": "How long is the lease?",
      "zh": "租約多長？"
    },
    {
      "en": "What happens if I break the lease early?",
      "zh": "如果我提前解約會怎樣？"
    },
    {
      "en": "When can I move in?",
      "zh": "我什麼時候可以搬進來？"
    },
    {
      "en": "Could you explain the late fee policy?",
      "zh": "可以說明逾期費的規定嗎？"
    },
    {
      "en": "The kitchen sink is leaking.",
      "zh": "廚房水槽在漏水。"
    },
    {
      "en": "How do I submit a maintenance request?",
      "zh": "我要怎麼提出報修？"
    },
    {
      "en": "How much notice do I need to give before I move out?",
      "zh": "我搬走前要提前多久通知？"
    }
  ],
  "hear": [
    {
      "en": "Are you here for the tour?",
      "zh": "你是來看房的嗎？",
      "reply": "Yes, I have a two o'clock appointment.",
      "replyZh": "是的，我預約了兩點。"
    },
    {
      "en": "The rent is fourteen fifty a month.",
      "zh": "租金是每個月一千四百五十塊。",
      "reply": "Okay. And how much is the deposit?",
      "replyZh": "好，那押金是多少？"
    },
    {
      "en": "Water and trash are included.",
      "zh": "水費和垃圾費包含在內。",
      "reply": "What about electricity and internet?",
      "replyZh": "那電費和網路呢？"
    },
    {
      "en": "Cats and small dogs are okay with a pet deposit.",
      "zh": "貓和小型犬可以，要付寵物押金。",
      "reply": "How much is the pet deposit?",
      "replyZh": "寵物押金多少？"
    },
    {
      "en": "We can accept a co-signer.",
      "zh": "我們可以接受共同簽署人。",
      "reply": "Great. What does the co-signer need to do?",
      "replyZh": "太好了，共同簽署人需要做什麼？"
    },
    {
      "en": "The application fee is fifty dollars, and it isn't refundable.",
      "zh": "申請費五十塊，不能退。",
      "reply": "Okay. Can I pay by card?",
      "replyZh": "好，我可以刷卡嗎？"
    },
    {
      "en": "The standard lease is twelve months.",
      "zh": "標準租約是十二個月。",
      "reply": "Do you offer a shorter lease?",
      "replyZh": "有比較短的租約嗎？"
    },
    {
      "en": "We require renters insurance.",
      "zh": "我們規定要買租客保險。",
      "reply": "Okay. How much does it cost?",
      "replyZh": "好，要多少錢？"
    },
    {
      "en": "Please read the lease carefully before you sign.",
      "zh": "簽名前請仔細閱讀租約。",
      "reply": "Sure. Could I take it home first?",
      "replyZh": "好，我可以先帶回家看嗎？"
    },
    {
      "en": "Is it okay if maintenance enters while you're out?",
      "zh": "你不在家的時候，維修人員可以進去嗎？",
      "reply": "I'll be home this afternoon, so please come then.",
      "replyZh": "我下午在家，請那時候過來。"
    }
  ],
  "say": [
    {
      "en": "Hi, I have an appointment for a tour at two.",
      "zh": "嗨，我預約了兩點看房。"
    },
    {
      "en": "What's included in the rent?",
      "zh": "租金包含什麼？"
    },
    {
      "en": "Is the apartment close to campus?",
      "zh": "這間公寓離校園近嗎？"
    },
    {
      "en": "I'm a student, so I don't have a credit history. What are my options?",
      "zh": "我是學生，沒有信用紀錄，我有什麼選擇？"
    },
    {
      "en": "Could I take a copy of the lease home to read?",
      "zh": "我可以帶一份租約回家看嗎？"
    },
    {
      "en": "Could we go over the late fees and the penalty for breaking the lease?",
      "zh": "我們可以一起看一下逾期費和提前解約的違約金嗎？"
    },
    {
      "en": "Can I get a copy of the signed lease?",
      "zh": "我可以拿一份簽好的租約嗎？"
    },
    {
      "en": "Could you send someone to fix it today?",
      "zh": "可以今天派人來修嗎？"
    },
    {
      "en": "Is there a move-in checklist for existing damage?",
      "zh": "有入住時檢查既有損壞的清單嗎？"
    },
    {
      "en": "Sorry, could you say that more slowly?",
      "zh": "不好意思，可以說慢一點嗎？"
    }
  ],
  "vocab": [
    {
      "w": "lease",
      "pos": "n.",
      "zh": "租約",
      "ex": "I signed a twelve-month lease.",
      "exzh": "我簽了十二個月的租約。"
    },
    {
      "w": "landlord",
      "pos": "n.",
      "zh": "房東",
      "ex": "The landlord lives next door.",
      "exzh": "房東住在隔壁。"
    },
    {
      "w": "tenant",
      "pos": "n.",
      "zh": "房客",
      "ex": "The tenant paid the rent on time.",
      "exzh": "房客準時付了租金。"
    },
    {
      "w": "security deposit",
      "pos": "n.",
      "zh": "押金",
      "ex": "The security deposit is one month's rent.",
      "exzh": "押金是一個月的租金。"
    },
    {
      "w": "utilities",
      "pos": "n.",
      "zh": "水電瓦斯等費用",
      "ex": "Utilities are not included.",
      "exzh": "水電費不包含在內。"
    },
    {
      "w": "co-signer",
      "pos": "n.",
      "zh": "共同簽署人",
      "ex": "My parents are my co-signer.",
      "exzh": "我的父母是我的共同簽署人。"
    },
    {
      "w": "credit check",
      "pos": "n.",
      "zh": "信用審查",
      "ex": "They will run a credit check.",
      "exzh": "他們會做信用審查。"
    },
    {
      "w": "application fee",
      "pos": "n.",
      "zh": "申請費",
      "ex": "The application fee is fifty dollars.",
      "exzh": "申請費是五十塊。"
    },
    {
      "w": "renters insurance",
      "pos": "n.",
      "zh": "租客保險",
      "ex": "Renters insurance is required.",
      "exzh": "規定要買租客保險。"
    },
    {
      "w": "maintenance",
      "pos": "n.",
      "zh": "維修",
      "ex": "I called maintenance about the heater.",
      "exzh": "我打電話請維修人員來看暖氣。"
    },
    {
      "w": "move out",
      "pos": "v.",
      "zh": "搬出去",
      "ex": "I move out at the end of May.",
      "exzh": "我五月底搬出去。"
    },
    {
      "w": "wear and tear",
      "pos": "n.",
      "zh": "正常損耗",
      "ex": "Normal wear and tear is not charged.",
      "exzh": "正常損耗不會被收費。"
    }
  ],
  "situations": [
    {
      "title": "😵 專員講太快、用很多租約術語",
      "hear": {
        "en": "So the lease is for twelve months, the deposit is due at signing, rent is due on the first, and there's a five percent late fee after the fifth.",
        "zh": "（講得很快）租約是十二個月，簽約時要付押金，租金每月一號到期，過了五號要付百分之五的逾期費。",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you go over that slowly? I want to be sure I understand.",
          "zh": "抱歉，可以慢慢說一次嗎？我想確定我聽懂了。"
        },
        {
          "en": "So rent is due on the first, and the late fee starts after the fifth. Is that right?",
          "zh": "所以租金每月一號到期，過了五號開始收逾期費，對嗎？"
        }
      ],
      "tip": "租約有很多固定術語。聽不懂就請對方放慢，並把重點複述一遍確認，簽約前一定要看懂，不確定就帶回家查。"
    },
    {
      "title": "💸 想談價錢或問有沒有優惠",
      "say": [
        {
          "en": "Is the rent negotiable?",
          "zh": "租金可以談嗎？"
        },
        {
          "en": "Do you offer a discount if I sign a longer lease?",
          "zh": "如果我簽比較長的租約，有折扣嗎？"
        }
      ],
      "tip": "公寓租金有時可以商量，尤其是淡季或簽長約。問的時候有禮貌，不行也沒關係。"
    },
    {
      "title": "🔍 入住時發現原本就有損壞",
      "say": [
        {
          "en": "There's already a stain on the carpet. Could we write it down on the checklist?",
          "zh": "地毯上本來就有污漬，可以寫在檢查清單上嗎？"
        },
        {
          "en": "I'd like to take photos of the damage before I move in.",
          "zh": "我想在搬進來前把損壞拍照存證。"
        }
      ],
      "tip": "入住當天先把已有的刮痕、污漬、損壞拍照並寫進清單，簽名留一份。退租時才不會被扣押金。"
    },
    {
      "title": "🔔 鄰居太吵、想反映",
      "say": [
        {
          "en": "My neighbors are very loud at night. Who should I contact?",
          "zh": "鄰居晚上很吵，我該聯絡誰？"
        },
        {
          "en": "Could you please talk to them about the noise?",
          "zh": "可以請你跟他們談一下噪音的問題嗎？"
        }
      ],
      "tip": "先禮貌跟鄰居說，沒用再向物業辦公室反映。大多數公寓晚上十點後要保持安靜（quiet hours）。"
    },
    {
      "title": "📅 租約快到期、決定要不要續約",
      "hear": {
        "en": "Your lease ends on August thirty-first. Would you like to renew or move out?",
        "zh": "你的租約八月三十一日到期，你想續約還是搬走？"
      },
      "say": [
        {
          "en": "I'd like to renew for another twelve months. Will the rent change?",
          "zh": "我想再續約十二個月，租金會調整嗎？"
        },
        {
          "en": "I'm planning to move out. What do I need to do?",
          "zh": "我打算搬走，我需要做什麼？"
        }
      ],
      "tip": "不續約通常要提前 30–60 天書面通知，請看租約上的寫法。逾期沒通知，有些租約會自動變成按月續租並加價。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "Are you here for the tour?",
      "prompt": "專員在問什麼？",
      "options": [
        "你是不是來看房的",
        "你要不要簽約",
        "你有沒有付押金"
      ],
      "answer": 0,
      "note": "tour 在這裡是參觀、看房。"
    },
    {
      "type": "聽數字",
      "audio": "The rent is one thousand four hundred fifty dollars a month, and the deposit is one month's rent.",
      "prompt": "租金和押金是多少？",
      "options": [
        "租金 1450 元，押金一個月租金",
        "租金 145 元，押金兩個月",
        "租金 1540 元，沒有押金"
      ],
      "answer": 0,
      "note": "one thousand four hundred fifty 是 1450。"
    },
    {
      "type": "聽懂意思",
      "audio": "Water and trash are included. You pay for electricity and internet yourself.",
      "prompt": "哪些費用要自己付？",
      "options": [
        "電費和網路",
        "水費和垃圾費",
        "全部都要付"
      ],
      "answer": 0,
      "note": "included 是包含在內。"
    },
    {
      "type": "選擇回應",
      "audio": "Do you have a co-signer?",
      "prompt": "你的父母可以當共同簽署人，最適合怎麼回答？",
      "options": [
        "Yes, my parents can be my co-signer.",
        "No, I have a pet.",
        "It's on the second floor."
      ],
      "answer": 0,
      "note": "co-signer 是共同簽署人。"
    },
    {
      "type": "聽懂意思",
      "audio": "Please bring your passport, your admission letter, and a bank statement.",
      "prompt": "申請時要帶哪些文件？",
      "options": [
        "護照、入學許可信、銀行對帳單",
        "駕照、保險卡、照片",
        "只要帶錢"
      ],
      "answer": 0,
      "note": "bank statement 是銀行對帳單。"
    },
    {
      "type": "聽數字",
      "audio": "The application fee is fifty dollars, and it isn't refundable.",
      "prompt": "申請費是多少？可以退嗎？",
      "options": [
        "50 元，不能退",
        "15 元，可以退",
        "500 元，不能退"
      ],
      "answer": 0,
      "note": "fifty 是 50，fifteen 是 15。refundable 是可退款的。"
    },
    {
      "type": "選擇回應",
      "audio": "How long would you like the lease to be?",
      "prompt": "你想簽一年，最適合怎麼回答？",
      "options": [
        "Twelve months, please.",
        "It's on the first.",
        "I like it very much."
      ],
      "answer": 0,
      "note": "How long 問時間長度，twelve months 是十二個月。"
    },
    {
      "type": "聽懂意思",
      "audio": "If you break the lease early, there's a penalty fee.",
      "prompt": "提前解約會怎樣？",
      "options": [
        "要付違約金",
        "押金會加倍退還",
        "不會有任何影響"
      ],
      "answer": 0,
      "note": "penalty fee 是違約金、罰款。"
    },
    {
      "type": "對話理解",
      "audio": "Hi, this is Amy in apartment 2B. The kitchen sink is leaking, and I'll be home this afternoon, so please come between two and four.",
      "prompt": "這位房客想要什麼？",
      "options": [
        "請人下午修水槽漏水",
        "申請新公寓",
        "取消租約"
      ],
      "answer": 0,
      "note": "leaking 是漏水。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "My lease ends in two months. How do I renew it, and how much notice do I need to give if I move out?",
      "prompt": "房客在問什麼？",
      "options": [
        "怎麼續約，以及搬走要提前多久通知",
        "租金多少",
        "哪裡可以停車"
      ],
      "answer": 0,
      "note": "notice 在這裡是事先通知。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Hi, welcome to Maple Court Apartments. Are you here for the tour?",
      "promptZh": "嗨，歡迎來到 Maple Court 公寓。你是來看房的嗎？",
      "hint": "說你預約了看房，想找一房",
      "expect": "appointment|tour|one-bedroom|looking|yes",
      "model": "Yes, I made an appointment for two o'clock. I'm looking for a one-bedroom.",
      "modelZh": "是的，我預約了兩點，我在找一房。"
    },
    {
      "prompt": "The rent is fourteen fifty a month, and the deposit is one month's rent.",
      "promptZh": "租金每個月一千四百五十塊，押金是一個月的租金。",
      "hint": "問水電費有沒有包含",
      "expect": "utilities|included|electric|water|internet",
      "model": "Are utilities included?",
      "modelZh": "水電費有包含嗎？"
    },
    {
      "prompt": "Water and trash are included. You pay for electricity and internet.",
      "promptZh": "水費和垃圾費包含，電費和網路要自己付。",
      "hint": "問可不可以養寵物或有沒有停車位",
      "expect": "pet|parking|laundry|allow|available",
      "model": "Okay. Do you allow pets? And is parking available?",
      "modelZh": "好，可以養寵物嗎？有停車位嗎？"
    },
    {
      "prompt": "Do you have a credit history in the United States?",
      "promptZh": "你在美國有信用紀錄嗎？",
      "hint": "說你是國際學生，沒有信用紀錄",
      "expect": "international|student|no credit|don't have|credit history",
      "model": "No, I'm an international student, so I don't have a credit history here.",
      "modelZh": "沒有，我是國際學生，在這裡沒有信用紀錄。"
    },
    {
      "prompt": "We can accept a co-signer. Can someone co-sign for you?",
      "promptZh": "我們可以接受共同簽署人。有人可以幫你共同簽署嗎？",
      "hint": "說你的父母可以",
      "expect": "parents|mother|father|yes|co-?sign|can",
      "model": "Yes, my parents can be my co-signer.",
      "modelZh": "可以，我的父母可以當共同簽署人。"
    },
    {
      "prompt": "The standard lease is twelve months. Does that work for you?",
      "promptZh": "標準租約是十二個月，你可以嗎？",
      "hint": "說可以並問提前解約會怎樣",
      "expect": "works|fine|okay|ok|sure|yes|break|early|penalty",
      "model": "That works. What happens if I break the lease early?",
      "modelZh": "可以。如果我提前解約會怎樣？"
    },
    {
      "prompt": "Maple Court office. How can I help you?",
      "promptZh": "Maple Court 辦公室，有什麼可以幫你的？",
      "hint": "說廚房水槽在漏水",
      "expect": "sink|leak|kitchen|broken|fix|water",
      "model": "Hi, the kitchen sink is leaking. Could you send someone to fix it?",
      "modelZh": "嗨，廚房水槽在漏水，可以派人來修嗎？"
    },
    {
      "prompt": "Will you be home this afternoon?",
      "promptZh": "你今天下午會在家嗎？",
      "hint": "說在家，請他們兩點到四點來",
      "expect": "home|yes|between|two|four|afternoon|come",
      "model": "Yes, I'll be home. Please come between two and four.",
      "modelZh": "會，我在家，請在兩點到四點之間來。"
    }
  ],
  "culture": [
    {
      "t": "先預約再看房，也可以線上申請",
      "d": "美國看房通常要先預約（schedule a tour），有些公寓也提供線上看房。不要在沒預約的情況下直接上門，找房時可以多看幾間比較租金、位置和費用。"
    },
    {
      "t": "租金之外的費用要問清楚",
      "d": "除了租金，還要問押金、申請費、停車費、寵物費、水電是否包含、網路和垃圾費。最好把每月總支出算清楚再決定。"
    },
    {
      "t": "留學生沒有信用紀錄怎麼辦",
      "d": "很多房東會查信用紀錄（credit check）。留學生沒有紀錄，通常可以找共同簽署人（co-signer）、多付押金，或提供銀行存款證明。越早跟專員說明越好。"
    },
    {
      "t": "租約簽名前一定要看懂",
      "d": "租約是有法律效力的文件，要看清楚租期、逾期費、提前解約的違約金、退租要提前幾天通知。看不懂可以帶回家，或請學校的學生服務中心協助。"
    },
    {
      "t": "入住和退租都要拍照存證",
      "d": "入住當天把已有的損壞拍照並寫進清單，簽名留一份。退租時打掃乾淨，正常損耗（wear and tear）不能扣押金，但超出的損壞可能會被扣。報修要用書面或系統留下紀錄。"
    }
  ]
};
