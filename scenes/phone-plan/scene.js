// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "phone-plan",
  "title": "辦手機門號",
  "en": "Getting a Phone Plan",
  "emoji": "📱",
  "goal": "學會在手機門市詢問方案與價格、用國際學生身分辦門號、聽懂月費與合約，並處理 SIM 卡啟用、用量超過與帳單疑問",
  "videos": [
    {
      "id": "nZY60ir6k24",
      "title": "【英語對話框】買手機SIM（好想講英文 | 空中英語教室 Studio Classroom）"
    },
    {
      "id": "1YGg50r0lFM",
      "title": "Minigin - Most useful conversations in English █ 6: Buying a SIM card at a mobile shop（Minigin）"
    },
    {
      "id": "nKGVc4dBzJU",
      "title": "Buying a cell phone l Buying a phone l At the cell phone store l English Conversation（Learno - learn English with ease）"
    }
  ],
  "speakers": {
    "S": {
      "name": "Store Rep",
      "zh": "門市人員",
      "avatar": "👨‍💼",
      "voice": "m2"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♀️",
      "voice": "f2"
    },
    "C": {
      "name": "Customer Service",
      "zh": "客服人員",
      "avatar": "👩‍💼",
      "voice": "f"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "在門市詢問方案",
      "where": "電信公司的門市櫃台",
      "emoji": "🏬",
      "lines": [
        {
          "s": "S",
          "en": "Hi, welcome to Blue Mobile. What can I help you with today?",
          "zh": "嗨，歡迎來到 Blue Mobile，今天需要什麼協助？"
        },
        {
          "s": "Y",
          "en": "Hi, I just arrived in the U.S. as a student, and I need a phone plan.",
          "zh": "嗨，我剛以學生身分來到美國，我需要一個手機方案。"
        },
        {
          "s": "S",
          "en": "Welcome! Do you already have a phone, or do you want to buy a new one?",
          "zh": "歡迎！你已經有手機了，還是要買新的？"
        },
        {
          "s": "Y",
          "en": "I already have one. Is it unlocked, so I can use a new SIM card?",
          "zh": "我已經有手機了。它是解鎖的，可以用新的 SIM 卡嗎？"
        },
        {
          "s": "S",
          "en": "Let me check. Yes, it's unlocked. Then you can bring your own phone with a prepaid plan, or choose a monthly plan.",
          "zh": "我看一下。對，它是解鎖的。那你可以帶自己的手機辦預付方案，或選月租方案。"
        },
        {
          "s": "Y",
          "en": "What's the difference between prepaid and a monthly plan?",
          "zh": "預付和月租方案有什麼不同？"
        },
        {
          "s": "S",
          "en": "With prepaid, you pay first, and there's no contract. With a monthly plan, you get a bill after the month, and it often needs a credit check.",
          "zh": "預付是先付費，沒有合約。月租方案是月底收帳單，而且通常要做信用審查。"
        },
        {
          "s": "Y",
          "en": "I don't have a credit history here, so I think prepaid is better.",
          "zh": "我在這裡沒有信用紀錄，所以我覺得預付比較好。"
        },
        {
          "s": "S",
          "en": "Sure. Our prepaid plan is thirty dollars a month with unlimited talk and text and ten gigabytes of data.",
          "zh": "好的。我們的預付方案每月三十塊，通話和簡訊吃到飽，另有十 GB 的行動數據。"
        },
        {
          "s": "Y",
          "en": "Does it include international calls to Taiwan?",
          "zh": "包含打到台灣的國際電話嗎？"
        },
        {
          "s": "S",
          "en": "Calls to Taiwan cost extra, but you can use messaging apps for free over Wi-Fi.",
          "zh": "打到台灣要另外收費，但你可以用 Wi-Fi 免費使用通訊軟體。"
        }
      ]
    },
    {
      "title": "辦理與啟用 SIM 卡",
      "where": "同一間門市，辦理手續",
      "emoji": "💳",
      "lines": [
        {
          "s": "Y",
          "en": "Okay, I'd like to sign up for the thirty-dollar prepaid plan.",
          "zh": "好的，我想辦三十塊的預付方案。"
        },
        {
          "s": "S",
          "en": "Great. I'll need to see your passport and a form of payment.",
          "zh": "太好了。我需要看你的護照，還有付款方式。"
        },
        {
          "s": "Y",
          "en": "Here's my passport. Can I pay with my debit card?",
          "zh": "這是我的護照。我可以用簽帳金融卡付款嗎？"
        },
        {
          "s": "S",
          "en": "Yes, of course. There's also a ten-dollar SIM card fee for new customers.",
          "zh": "當然可以。另外新客戶要付十塊的 SIM 卡費用。"
        },
        {
          "s": "Y",
          "en": "That's fine. Can I choose my own phone number?",
          "zh": "沒問題。我可以選自己的電話號碼嗎？"
        },
        {
          "s": "S",
          "en": "I can give you a few options. Do you want a number with a specific area code?",
          "zh": "我可以給你幾個選擇。你想要特定區碼的號碼嗎？"
        },
        {
          "s": "Y",
          "en": "Any number is fine, as long as it's easy to remember.",
          "zh": "任何號碼都可以，只要好記就好。"
        },
        {
          "s": "S",
          "en": "Okay. Here's your new SIM card. Let me put it in your phone and activate it.",
          "zh": "好的，這是你的新 SIM 卡。我幫你裝進手機並啟用。"
        },
        {
          "s": "Y",
          "en": "How long does activation take?",
          "zh": "啟用要多久？"
        },
        {
          "s": "S",
          "en": "It should only take a few minutes. Try making a test call, and tell me if you get a signal.",
          "zh": "應該只要幾分鐘。試打一通測試電話，如果有訊號請告訴我。"
        },
        {
          "s": "Y",
          "en": "I see the bars now. It works!",
          "zh": "我看到訊號格了，可以用了！"
        }
      ]
    },
    {
      "title": "用量與帳單問題",
      "where": "打電話給客服",
      "emoji": "☎️",
      "lines": [
        {
          "s": "C",
          "en": "Thanks for calling Blue Mobile customer service. How can I help you?",
          "zh": "謝謝你打給 Blue Mobile 客服，有什麼可以幫你的？"
        },
        {
          "s": "Y",
          "en": "Hi, I got a text saying I've used ninety percent of my data, but it's only the middle of the month.",
          "zh": "嗨，我收到簡訊說我已經用掉百分之九十的數據，但才月中而已。"
        },
        {
          "s": "C",
          "en": "I'm sorry about that. Let me look at your account. May I have your phone number?",
          "zh": "很抱歉。我來看看你的帳號，可以給我你的電話號碼嗎？"
        },
        {
          "s": "Y",
          "en": "It's five five five, zero one two three.",
          "zh": "是 555-0123。"
        },
        {
          "s": "C",
          "en": "Thank you. It looks like your phone was using a lot of data for video streaming when you weren't on Wi-Fi.",
          "zh": "謝謝。看起來你的手機在沒有連上 Wi-Fi 的時候，用了很多數據在看影片。"
        },
        {
          "s": "Y",
          "en": "Oh, I see. Can I add more data to my plan?",
          "zh": "喔，原來如此。我可以幫方案加購更多數據嗎？"
        },
        {
          "s": "C",
          "en": "Yes, you can add five more gigabytes for ten dollars, or upgrade to unlimited data for forty dollars a month.",
          "zh": "可以，你可以加購五 GB 十塊錢，或升級成吃到飽數據，每月四十塊。"
        },
        {
          "s": "Y",
          "en": "I'll add five gigabytes for now. Will it show up on my next bill?",
          "zh": "我先加購五 GB。它會出現在下次的帳單上嗎？"
        },
        {
          "s": "C",
          "en": "Since you're on prepaid, it will be charged to your balance right away.",
          "zh": "因為你是預付，所以會馬上從餘額扣款。"
        },
        {
          "s": "Y",
          "en": "Great. How can I check how much data I have left?",
          "zh": "太好了，我要怎麼查我還剩多少數據？"
        },
        {
          "s": "C",
          "en": "You can download our app or dial star three two two on your phone.",
          "zh": "你可以下載我們的 App，或在手機上撥 *322。"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "I need a phone plan.",
      "zh": "我需要一個手機方案。"
    },
    {
      "en": "I just arrived in the U.S. as a student.",
      "zh": "我剛以學生身分來到美國。"
    },
    {
      "en": "Is my phone unlocked?",
      "zh": "我的手機是解鎖的嗎？"
    },
    {
      "en": "Can I use my own phone?",
      "zh": "我可以用自己的手機嗎？"
    },
    {
      "en": "What's the difference between prepaid and postpaid?",
      "zh": "預付和月租有什麼不同？"
    },
    {
      "en": "I don't have a credit history here.",
      "zh": "我在這裡沒有信用紀錄。"
    },
    {
      "en": "How much is it per month?",
      "zh": "每個月多少錢？"
    },
    {
      "en": "How much data does it include?",
      "zh": "包含多少行動數據？"
    },
    {
      "en": "Is there a contract?",
      "zh": "有綁約嗎？"
    },
    {
      "en": "Are there any extra fees?",
      "zh": "有額外費用嗎？"
    },
    {
      "en": "Does it include international calls?",
      "zh": "包含國際電話嗎？"
    },
    {
      "en": "What do you need to sign me up?",
      "zh": "辦理需要什麼？"
    },
    {
      "en": "Can I pay with a debit card?",
      "zh": "我可以用簽帳金融卡付款嗎？"
    },
    {
      "en": "Can I choose my phone number?",
      "zh": "我可以選電話號碼嗎？"
    },
    {
      "en": "How long does activation take?",
      "zh": "啟用要多久？"
    },
    {
      "en": "I don't have a signal.",
      "zh": "我沒有訊號。"
    },
    {
      "en": "I've used almost all of my data.",
      "zh": "我的數據快用完了。"
    },
    {
      "en": "Can I add more data to my plan?",
      "zh": "我可以加購數據嗎？"
    },
    {
      "en": "How can I check my balance?",
      "zh": "我要怎麼查餘額？"
    },
    {
      "en": "I'd like to cancel my plan.",
      "zh": "我想取消我的方案。"
    }
  ],
  "hear": [
    {
      "en": "What can I help you with today?",
      "zh": "今天需要什麼協助？",
      "reply": "I need a phone plan. I'm a new student.",
      "replyZh": "我需要手機方案，我是新生。"
    },
    {
      "en": "Do you already have a phone, or do you want a new one?",
      "zh": "你已經有手機，還是要買新的？",
      "reply": "I already have one.",
      "replyZh": "我已經有了。"
    },
    {
      "en": "Is your phone unlocked?",
      "zh": "你的手機是解鎖的嗎？",
      "reply": "I think so. Could you check it for me?",
      "replyZh": "我想是，可以幫我確認嗎？"
    },
    {
      "en": "Do you want prepaid or a monthly plan?",
      "zh": "你要預付還是月租方案？",
      "reply": "Prepaid, please. I don't have a credit history.",
      "replyZh": "請給我預付，我沒有信用紀錄。"
    },
    {
      "en": "It's thirty dollars a month for unlimited talk and text.",
      "zh": "每月三十塊，通話和簡訊吃到飽。",
      "reply": "How much data does it include?",
      "replyZh": "包含多少行動數據？"
    },
    {
      "en": "I'll need to see your passport.",
      "zh": "我需要看你的護照。",
      "reply": "Sure. Here you go.",
      "replyZh": "好，給你。"
    },
    {
      "en": "There's a ten-dollar SIM card fee.",
      "zh": "有十塊錢的 SIM 卡費用。",
      "reply": "That's fine. Can I pay by card?",
      "replyZh": "沒問題，我可以刷卡嗎？"
    },
    {
      "en": "Do you want a number with a specific area code?",
      "zh": "你想要特定區碼的號碼嗎？",
      "reply": "No, any number is fine.",
      "replyZh": "不用，任何號碼都可以。"
    },
    {
      "en": "Try making a test call.",
      "zh": "試打一通測試電話。",
      "reply": "Okay. I see the bars now.",
      "replyZh": "好，我現在看到訊號格了。"
    },
    {
      "en": "You've used ninety percent of your data.",
      "zh": "你已經用掉百分之九十的數據。",
      "reply": "Can I add more data?",
      "replyZh": "我可以加購數據嗎？"
    }
  ],
  "say": [
    {
      "en": "Hi, I'd like to get a phone plan for my own phone.",
      "zh": "嗨，我想幫我自己的手機辦方案。"
    },
    {
      "en": "I'm an international student. What do I need to sign up?",
      "zh": "我是國際學生，辦理需要什麼？"
    },
    {
      "en": "Which plan is best for a student?",
      "zh": "哪個方案最適合學生？"
    },
    {
      "en": "Is there a student discount?",
      "zh": "有學生優惠嗎？"
    },
    {
      "en": "Could you tell me the total price per month, with tax?",
      "zh": "可以告訴我含稅的每月總價嗎？"
    },
    {
      "en": "Can I cancel anytime without a fee?",
      "zh": "我可以隨時取消、不收費嗎？"
    },
    {
      "en": "Could you help me set up my phone?",
      "zh": "可以幫我設定手機嗎？"
    },
    {
      "en": "My phone says No Service. Could you check my SIM card?",
      "zh": "我的手機顯示無服務，可以幫我檢查 SIM 卡嗎？"
    },
    {
      "en": "Can you send me a receipt by email?",
      "zh": "可以用 email 寄收據給我嗎？"
    },
    {
      "en": "Sorry, could you repeat that more slowly?",
      "zh": "抱歉，可以說慢一點再說一次嗎？"
    }
  ],
  "vocab": [
    {
      "w": "phone plan",
      "pos": "n.",
      "zh": "手機方案",
      "ex": "I need a cheap phone plan.",
      "exzh": "我需要便宜的手機方案。"
    },
    {
      "w": "prepaid",
      "pos": "adj.",
      "zh": "預付的",
      "ex": "I chose a prepaid plan.",
      "exzh": "我選了預付方案。"
    },
    {
      "w": "monthly plan",
      "pos": "n.",
      "zh": "月租方案",
      "ex": "A monthly plan needs a credit check.",
      "exzh": "月租方案需要信用審查。"
    },
    {
      "w": "SIM card",
      "pos": "n.",
      "zh": "SIM 卡",
      "ex": "Put the SIM card in your phone.",
      "exzh": "把 SIM 卡放進你的手機。"
    },
    {
      "w": "unlocked",
      "pos": "adj.",
      "zh": "已解鎖（可換電信）的",
      "ex": "My phone is unlocked.",
      "exzh": "我的手機是解鎖的。"
    },
    {
      "w": "data",
      "pos": "n.",
      "zh": "行動數據",
      "ex": "I used all my data this month.",
      "exzh": "我這個月的數據用完了。"
    },
    {
      "w": "unlimited",
      "pos": "adj.",
      "zh": "無限制的、吃到飽的",
      "ex": "It has unlimited talk and text.",
      "exzh": "它有通話和簡訊吃到飽。"
    },
    {
      "w": "activate",
      "pos": "v.",
      "zh": "啟用",
      "ex": "Please activate my SIM card.",
      "exzh": "請幫我啟用 SIM 卡。"
    },
    {
      "w": "signal",
      "pos": "n.",
      "zh": "訊號",
      "ex": "I don't have a signal here.",
      "exzh": "我在這裡沒有訊號。"
    },
    {
      "w": "roaming",
      "pos": "n.",
      "zh": "漫遊",
      "ex": "International roaming is expensive.",
      "exzh": "國際漫遊很貴。"
    },
    {
      "w": "balance",
      "pos": "n.",
      "zh": "餘額",
      "ex": "Check your balance in the app.",
      "exzh": "在 App 查你的餘額。"
    },
    {
      "w": "area code",
      "pos": "n.",
      "zh": "電話區碼",
      "ex": "The area code is two one two.",
      "exzh": "區碼是 212。"
    }
  ],
  "situations": [
    {
      "title": "😵 店員講太快、比較好多方案",
      "hear": {
        "en": "So the starter plan is twenty-five with five gigs, the standard is thirty-five with unlimited data but slower after twenty-two gigs, and the premium is fifty with hotspot.",
        "zh": "（講得很快）入門方案二十五塊五 GB，標準方案三十五塊吃到飽但超過二十二 GB 會變慢，高級方案五十塊含分享熱點。",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you explain the differences slowly?",
          "zh": "抱歉，可以慢慢說明差別嗎？"
        },
        {
          "en": "I mostly use Wi-Fi. Which plan is the cheapest for me?",
          "zh": "我大多用 Wi-Fi，哪個方案對我最便宜？"
        }
      ],
      "tip": "方案很多時，先說你的使用習慣（常用 Wi-Fi、很少看影片），請店員幫你挑最便宜、夠用的，並問清楚超過用量會怎樣。"
    },
    {
      "title": "📵 SIM 卡裝好了還是沒訊號",
      "say": [
        {
          "en": "I put in the SIM card, but my phone says No Service.",
          "zh": "我裝了 SIM 卡，但手機顯示無服務。"
        },
        {
          "en": "Could you check if my SIM card is activated?",
          "zh": "可以幫我檢查 SIM 卡有沒有啟用嗎？"
        }
      ],
      "tip": "先重新開機、確認有開啟行動數據、SIM 卡有放好。還是不行就回門市或打客服，請他們確認啟用狀態。"
    },
    {
      "title": "💰 帳單比預期貴、有不明費用",
      "say": [
        {
          "en": "There's a charge on my bill I don't recognize. Could you explain it?",
          "zh": "我的帳單上有一筆我看不懂的費用，可以說明嗎？"
        },
        {
          "en": "I didn't ask for this service. Could you remove it?",
          "zh": "我沒有要這個服務，可以幫我取消嗎？"
        }
      ],
      "tip": "帳單看到不明費用（例如加值服務、手續費）要馬上問。很多可以取消，並退還多收的錢。"
    },
    {
      "title": "✈️ 要回國或出國，怎麼處理手機",
      "say": [
        {
          "en": "I'm going to Taiwan for the summer. Can I pause my plan?",
          "zh": "我暑假要回台灣，可以暫停我的方案嗎？"
        },
        {
          "en": "Does my plan work abroad, and how much does roaming cost?",
          "zh": "我的方案在國外能用嗎？漫遊要多少錢？"
        }
      ],
      "tip": "出國前先問漫遊費用。通常可以在國外改用當地 SIM 卡或 eSIM，比漫遊便宜很多。預付方案不用時也可以不續費。"
    },
    {
      "title": "❌ 想換電信或取消",
      "hear": {
        "en": "If you cancel before the end of your contract, there may be a fee.",
        "zh": "如果在合約結束前取消，可能要付費。"
      },
      "say": [
        {
          "en": "I'd like to switch to another carrier. How do I transfer my number?",
          "zh": "我想換別家電信，要怎麼保留我的號碼？"
        },
        {
          "en": "How much is the early cancellation fee?",
          "zh": "提前取消的費用是多少？"
        }
      ],
      "tip": "換電信可以「帶號碼轉移」（port your number）。先確認有沒有合約、設備分期還沒付完，再取消，否則可能被收一筆錢。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "What can I help you with today?",
      "prompt": "店員在問什麼？",
      "options": [
        "你今天需要什麼協助",
        "你叫什麼名字",
        "你住在哪裡"
      ],
      "answer": 0,
      "note": "help you with 是協助你處理某件事。"
    },
    {
      "type": "選擇回應",
      "audio": "Do you already have a phone, or do you want to buy a new one?",
      "prompt": "你已經有手機，最適合怎麼回答？",
      "options": [
        "I already have one.",
        "It's thirty dollars.",
        "I live downtown."
      ],
      "answer": 0,
      "note": "already have one 是已經有了。"
    },
    {
      "type": "聽懂意思",
      "audio": "With prepaid, you pay first, and there's no contract.",
      "prompt": "預付方案有什麼特點？",
      "options": [
        "先付費，沒有合約",
        "月底收帳單，一定要簽約",
        "一定要信用審查"
      ],
      "answer": 0,
      "note": "prepaid 是預付的。"
    },
    {
      "type": "聽數字",
      "audio": "The plan is thirty dollars a month with ten gigabytes of data.",
      "prompt": "月費和數據是多少？",
      "options": [
        "30 元，10 GB",
        "13 元，30 GB",
        "300 元，1 GB"
      ],
      "answer": 0,
      "note": "thirty 是 30，thirteen 是 13。"
    },
    {
      "type": "聽懂意思",
      "audio": "Calls to Taiwan cost extra, but you can use messaging apps for free over Wi-Fi.",
      "prompt": "打到台灣怎麼算？",
      "options": [
        "要另外付費，用 Wi-Fi 傳訊息免費",
        "全部免費",
        "不能打到台灣"
      ],
      "answer": 0,
      "note": "cost extra 是額外收費。"
    },
    {
      "type": "選擇回應",
      "audio": "I'll need to see your passport and a form of payment.",
      "prompt": "你要拿出證件，最適合怎麼回答？",
      "options": [
        "Sure. Here's my passport.",
        "It's ten dollars.",
        "I have a signal."
      ],
      "answer": 0,
      "note": "form of payment 是付款方式。"
    },
    {
      "type": "聽數字",
      "audio": "There's a ten-dollar SIM card fee for new customers.",
      "prompt": "SIM 卡費用是多少？",
      "options": [
        "10 元",
        "100 元",
        "20 元"
      ],
      "answer": 0,
      "note": "ten-dollar 是十塊。"
    },
    {
      "type": "聽懂意思",
      "audio": "It should only take a few minutes. Try making a test call.",
      "prompt": "店員要你做什麼？",
      "options": [
        "等幾分鐘後試打電話",
        "馬上回家",
        "付更多錢"
      ],
      "answer": 0,
      "note": "test call 是測試電話。"
    },
    {
      "type": "對話理解",
      "audio": "Hi, I got a text saying I've used ninety percent of my data, but it's only the middle of the month. Can I add more data to my plan?",
      "prompt": "客人想要什麼？",
      "options": [
        "加購更多數據",
        "取消方案",
        "換新手機"
      ],
      "answer": 0,
      "note": "add more data 是加購數據。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "I put in the new SIM card, but my phone says No Service. Could you check if it's activated?",
      "prompt": "客人遇到什麼問題？",
      "options": [
        "裝了 SIM 卡但沒有訊號",
        "帳單太貴",
        "手機掉了"
      ],
      "answer": 0,
      "note": "No Service 是沒有服務、沒訊號。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Hi, welcome to Blue Mobile. What can I help you with today?",
      "promptZh": "嗨，歡迎來到 Blue Mobile，今天需要什麼協助？",
      "hint": "說你是新來的學生，需要手機方案",
      "expect": "plan|phone|student|need|sign up|SIM",
      "model": "Hi, I'm a new student, and I need a phone plan.",
      "modelZh": "嗨，我是新生，我需要手機方案。"
    },
    {
      "prompt": "Do you already have a phone, or do you want to buy a new one?",
      "promptZh": "你已經有手機了，還是要買新的？",
      "hint": "說已經有，並問是不是解鎖的",
      "expect": "already|have|own|unlocked|my phone",
      "model": "I already have one. Is it unlocked?",
      "modelZh": "我已經有了，它是解鎖的嗎？"
    },
    {
      "prompt": "Do you want prepaid or a monthly plan?",
      "promptZh": "你要預付還是月租方案？",
      "hint": "說預付，因為沒有信用紀錄",
      "expect": "prepaid|credit|monthly|no contract",
      "model": "Prepaid, please. I don't have a credit history here.",
      "modelZh": "請給我預付，我在這裡沒有信用紀錄。"
    },
    {
      "prompt": "It's thirty dollars a month with unlimited talk and text and ten gigabytes of data.",
      "promptZh": "每月三十塊，通話簡訊吃到飽，另有十 GB 數據。",
      "hint": "問有沒有額外費用",
      "expect": "extra|fee|tax|include|total|cost",
      "model": "Are there any extra fees? And is that price with tax?",
      "modelZh": "有額外費用嗎？這個價錢含稅嗎？"
    },
    {
      "prompt": "I'll need to see your passport and a form of payment.",
      "promptZh": "我需要看你的護照和付款方式。",
      "hint": "拿出護照，問可不可以刷簽帳金融卡",
      "expect": "passport|here|card|debit|pay|sure",
      "model": "Sure. Here's my passport. Can I pay with my debit card?",
      "modelZh": "好，這是我的護照，我可以用簽帳金融卡付款嗎？"
    },
    {
      "prompt": "Here's your new SIM card. Try making a test call.",
      "promptZh": "這是你的新 SIM 卡，試打一通測試電話。",
      "hint": "說看到訊號了，可以用",
      "expect": "works|signal|bars|thank|great|got it",
      "model": "I see the bars now. It works. Thank you!",
      "modelZh": "我看到訊號格了，可以用，謝謝！"
    },
    {
      "prompt": "Thanks for calling Blue Mobile customer service. How can I help you?",
      "promptZh": "謝謝你打給 Blue Mobile 客服，有什麼可以幫你的？",
      "hint": "說你的數據快用完了",
      "expect": "data|used|almost|ninety|percent|running out",
      "model": "I've used almost all of my data, and it's only the middle of the month.",
      "modelZh": "我的數據快用完了，但才月中而已。"
    },
    {
      "prompt": "You can add five gigabytes for ten dollars, or upgrade to unlimited for forty. Which one would you like?",
      "promptZh": "你可以加購五 GB 十塊錢，或升級吃到飽四十塊，你想要哪一個？",
      "hint": "選加購五 GB",
      "expect": "five|gigabytes|add|ten|first|cheaper",
      "model": "I'll add five gigabytes for now, please.",
      "modelZh": "我先加購五 GB，麻煩你。"
    }
  ],
  "culture": [
    {
      "t": "預付 vs 月租，留學生通常選預付",
      "d": "預付（prepaid）先付費、沒有合約、通常不需要信用審查，很適合剛到美國的留學生。月租（postpaid）月底收帳單，常常要信用紀錄或社會安全碼，可能還要押金。"
    },
    {
      "t": "自己的手機要先確認「解鎖」",
      "d": "想用台灣帶來的手機，要確認它是解鎖的（unlocked）、支援美國電信頻段。否則只能買新手機。店員通常可以免費幫你檢查。"
    },
    {
      "t": "辦門號要帶什麼",
      "d": "通常要護照和付款方式（簽帳金融卡或信用卡）。有些方案要出示地址。先到門市讓店員幫你裝 SIM 卡並啟用，當場測試最保險。"
    },
    {
      "t": "行動數據與 Wi-Fi",
      "d": "看影片、玩遊戲、地圖導航都很耗行動數據。在家和學校多用 Wi-Fi，可以選便宜的低用量方案。數據快用完時會收到簡訊，可以加購或升級。"
    },
    {
      "t": "國際電話與通訊軟體",
      "d": "直接打國際電話通常很貴，最好用 LINE、WhatsApp、Messenger 等通訊軟體，在 Wi-Fi 下免費通話。出國前問清楚漫遊費，回台灣可以改用當地 SIM 卡。"
    }
  ]
};
