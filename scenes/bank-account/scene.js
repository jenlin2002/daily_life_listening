// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "bank-account",
  "title": "銀行開戶",
  "en": "Opening a Bank Account",
  "emoji": "🏦",
  "goal": "學會說明來意、準備開戶文件、了解支票與儲蓄帳戶的差別與手續費、申請金融卡與網路銀行，並完成第一筆存款",
  "speakers": {
    "S": {
      "name": "Banker",
      "zh": "銀行行員",
      "avatar": "👩‍💼",
      "voice": "f2"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♂️",
      "voice": "m"
    },
    "T": {
      "name": "Teller",
      "zh": "櫃檯行員",
      "avatar": "👩‍💼",
      "voice": "f"
    }
  },
  "answerSeconds": 10,
  "dialogues": [
    {
      "title": "說明來意與準備文件",
      "where": "銀行大廳的諮詢櫃檯",
      "emoji": "📄",
      "lines": [
        {
          "s": "S",
          "en": "Good morning! How can I help you today?",
          "zh": "早安！今天有什麼可以幫你的？"
        },
        {
          "s": "Y",
          "en": "Hi, I'd like to open a bank account. I'm an international student.",
          "zh": "嗨，我想開一個銀行帳戶，我是留學生。"
        },
        {
          "s": "S",
          "en": "Welcome! We can definitely help with that. Do you have an appointment?",
          "zh": "歡迎！我們當然可以幫你。你有預約嗎？"
        },
        {
          "s": "Y",
          "en": "No, I don't. Is it okay to walk in?",
          "zh": "沒有，可以直接過來嗎？"
        },
        {
          "s": "S",
          "en": "Sure, I have time right now. Let me ask you for a few documents. Do you have your passport?",
          "zh": "可以，我現在剛好有空。我需要看幾份文件，你有帶護照嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, here it is. I also brought my student ID and my I-20.",
          "zh": "有，在這裡。我也帶了學生證和 I-20。"
        },
        {
          "s": "S",
          "en": "Great. Do you have proof of your address, like a lease or a utility bill?",
          "zh": "很好。你有地址證明嗎？例如租約或水電帳單。"
        },
        {
          "s": "Y",
          "en": "I have my lease. Will that work?",
          "zh": "我有租約，這樣可以嗎？"
        },
        {
          "s": "S",
          "en": "Yes, that's perfect. Have a seat, and I'll get you started.",
          "zh": "可以，這樣很好。請坐，我來幫你開始辦理。"
        }
      ]
    },
    {
      "title": "選擇帳戶類型與手續費",
      "where": "行員的辦公桌",
      "emoji": "💳",
      "lines": [
        {
          "s": "S",
          "en": "So, do you want a checking account, a savings account, or both?",
          "zh": "你想開支票帳戶、儲蓄帳戶，還是兩個都開？"
        },
        {
          "s": "Y",
          "en": "What's the difference between them?",
          "zh": "它們有什麼不同？"
        },
        {
          "s": "S",
          "en": "A checking account is for everyday spending. You get a debit card and can pay bills. A savings account earns interest.",
          "zh": "支票帳戶是日常花費用的，你會拿到金融卡也能繳費。儲蓄帳戶有利息。"
        },
        {
          "s": "Y",
          "en": "I think I'd like to open both. Are there any monthly fees?",
          "zh": "我想兩個都開。有月費嗎？"
        },
        {
          "s": "S",
          "en": "There's a twelve dollar monthly fee, but it's waived for students under twenty-five.",
          "zh": "有十二塊美金的月費，但二十五歲以下的學生免收。"
        },
        {
          "s": "Y",
          "en": "That's great. Is there a minimum balance?",
          "zh": "太好了。有最低餘額限制嗎？"
        },
        {
          "s": "S",
          "en": "No minimum for the student checking. For savings, you need a hundred dollars to open it.",
          "zh": "學生支票帳戶沒有最低餘額。儲蓄帳戶開戶需要一百塊。"
        },
        {
          "s": "Y",
          "en": "Okay. What about ATM fees?",
          "zh": "好的。那提款機手續費呢？"
        },
        {
          "s": "S",
          "en": "It's free at our ATMs. Other banks' ATMs charge you about three dollars.",
          "zh": "用我們的提款機免費，其他銀行的提款機大約會收你三塊錢。"
        }
      ]
    },
    {
      "title": "金融卡、網銀與第一筆存款",
      "where": "行員的辦公桌與櫃台",
      "emoji": "📲",
      "lines": [
        {
          "s": "S",
          "en": "Your accounts are all set up. You'll get your debit card in the mail in about seven to ten days.",
          "zh": "你的帳戶都設定好了。金融卡會在大約七到十天內寄到你家。"
        },
        {
          "s": "Y",
          "en": "Can I use the account before the card arrives?",
          "zh": "卡片寄到之前，我可以使用帳戶嗎？"
        },
        {
          "s": "S",
          "en": "Yes. Download our mobile app and set up online banking. I'll help you with that.",
          "zh": "可以。請下載我們的手機 App 並設定網路銀行，我來幫你。"
        },
        {
          "s": "Y",
          "en": "Sure. Could you also tell me my account number and routing number?",
          "zh": "好的。你也可以告訴我我的帳號和路由號碼嗎？"
        },
        {
          "s": "S",
          "en": "Of course. I'll print them out for you. Would you like to make your first deposit today?",
          "zh": "當然，我幫你列印出來。你今天要存第一筆錢嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, I'd like to deposit five hundred dollars in cash.",
          "zh": "要，我想存五百塊現金。"
        },
        {
          "s": "T",
          "en": "I can help you over here. Please fill out this deposit slip.",
          "zh": "我可以在這邊幫你。請填寫這張存款單。"
        },
        {
          "s": "Y",
          "en": "Okay. Here you go.",
          "zh": "好的，給你。"
        },
        {
          "s": "T",
          "en": "Your deposit has been made. Here's your receipt. Is there anything else?",
          "zh": "存款完成了，這是你的收據。還需要什麼嗎？"
        },
        {
          "s": "Y",
          "en": "No, that's everything. Thank you so much for your help!",
          "zh": "沒有了，這樣就好，非常謝謝你的幫忙！"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "I'd like to open a bank account.",
      "zh": "我想開一個銀行帳戶。"
    },
    {
      "en": "I'm an international student.",
      "zh": "我是留學生。"
    },
    {
      "en": "Do I need an appointment?",
      "zh": "我需要預約嗎？"
    },
    {
      "en": "What documents do I need to bring?",
      "zh": "我需要帶哪些文件？"
    },
    {
      "en": "I have my passport and my student ID.",
      "zh": "我有護照和學生證。"
    },
    {
      "en": "Do you have proof of address?",
      "zh": "你有地址證明嗎？"
    },
    {
      "en": "What's the difference between checking and savings?",
      "zh": "支票帳戶和儲蓄帳戶有什麼不同？"
    },
    {
      "en": "Is there a monthly fee?",
      "zh": "有月費嗎？"
    },
    {
      "en": "Is there a minimum balance?",
      "zh": "有最低餘額限制嗎？"
    },
    {
      "en": "What are the ATM fees?",
      "zh": "提款機手續費是多少？"
    },
    {
      "en": "How long does it take to get my debit card?",
      "zh": "金融卡要多久才會寄到？"
    },
    {
      "en": "Can I set up online banking?",
      "zh": "我可以設定網路銀行嗎？"
    },
    {
      "en": "What are my account number and routing number?",
      "zh": "我的帳號和路由號碼是多少？"
    },
    {
      "en": "I'd like to make a deposit.",
      "zh": "我想存錢。"
    },
    {
      "en": "I'd like to withdraw two hundred dollars.",
      "zh": "我想領兩百塊。"
    },
    {
      "en": "Please fill out this form.",
      "zh": "請填寫這張表格。"
    },
    {
      "en": "Please sign here.",
      "zh": "請在這裡簽名。"
    },
    {
      "en": "How can I send money to Taiwan?",
      "zh": "我要怎麼把錢匯到台灣？"
    },
    {
      "en": "I'd like to set up a direct deposit.",
      "zh": "我想設定薪水自動轉入。"
    },
    {
      "en": "I want to report a lost debit card.",
      "zh": "我想通報金融卡遺失。"
    }
  ],
  "hear": [
    {
      "en": "How can I help you today?",
      "zh": "今天有什麼可以幫你的？",
      "reply": "I'd like to open a bank account.",
      "replyZh": "我想開一個銀行帳戶。"
    },
    {
      "en": "Do you have an appointment?",
      "zh": "你有預約嗎？",
      "reply": "No, I don't. Is it okay to walk in?",
      "replyZh": "沒有，可以直接過來嗎？"
    },
    {
      "en": "Can I see your passport and a second form of ID?",
      "zh": "可以看你的護照和另一份身分證明嗎？",
      "reply": "Sure. Here's my passport and student ID.",
      "replyZh": "好，這是我的護照和學生證。"
    },
    {
      "en": "Do you have proof of address?",
      "zh": "你有地址證明嗎？",
      "reply": "I have my lease. Will that work?",
      "replyZh": "我有租約，這樣可以嗎？"
    },
    {
      "en": "Do you want a checking account, a savings account, or both?",
      "zh": "你想開支票帳戶、儲蓄帳戶，還是兩個都開？",
      "reply": "Both, please.",
      "replyZh": "兩個都開，謝謝。"
    },
    {
      "en": "Would you like a debit card with that?",
      "zh": "你要申請金融卡嗎？",
      "reply": "Yes, please.",
      "replyZh": "要，麻煩你。"
    },
    {
      "en": "How much would you like to deposit today?",
      "zh": "你今天想存多少錢？",
      "reply": "Five hundred dollars.",
      "replyZh": "五百塊。"
    },
    {
      "en": "Would you like cash or a check?",
      "zh": "你要現金還是支票？",
      "reply": "Cash, please.",
      "replyZh": "現金，謝謝。"
    },
    {
      "en": "Would you like a receipt?",
      "zh": "你要收據嗎？",
      "reply": "Yes, please.",
      "replyZh": "好，謝謝。"
    },
    {
      "en": "Is there anything else I can help you with?",
      "zh": "還有什麼我可以幫你的嗎？",
      "reply": "No, that's all. Thank you!",
      "replyZh": "沒有了，謝謝！"
    }
  ],
  "say": [
    {
      "en": "Hi, I'd like to open a checking account.",
      "zh": "嗨，我想開一個支票帳戶。"
    },
    {
      "en": "I don't have a Social Security number. Is that okay?",
      "zh": "我沒有社會安全號碼，這樣可以嗎？"
    },
    {
      "en": "Do you have a student account?",
      "zh": "你們有學生帳戶嗎？"
    },
    {
      "en": "Are there any fees I should know about?",
      "zh": "有什麼費用是我需要知道的嗎？"
    },
    {
      "en": "How much do I need to open the account?",
      "zh": "開戶需要多少錢？"
    },
    {
      "en": "Could you explain that again, please?",
      "zh": "可以請你再解釋一次嗎？"
    },
    {
      "en": "Where do I sign?",
      "zh": "我要在哪裡簽名？"
    },
    {
      "en": "Can I get a printed copy?",
      "zh": "可以給我一份紙本嗎？"
    },
    {
      "en": "When will the funds be available?",
      "zh": "這筆錢什麼時候可以使用？"
    },
    {
      "en": "Sorry, could you say that again?",
      "zh": "不好意思，可以再說一次嗎？"
    }
  ],
  "vocab": [
    {
      "w": "checking account",
      "pos": "n.",
      "zh": "支票帳戶（日常使用帳戶）",
      "ex": "I opened a checking account.",
      "exzh": "我開了一個支票帳戶。"
    },
    {
      "w": "savings account",
      "pos": "n.",
      "zh": "儲蓄帳戶",
      "ex": "I put some money in my savings account.",
      "exzh": "我把一些錢存進儲蓄帳戶。"
    },
    {
      "w": "debit card",
      "pos": "n.",
      "zh": "金融卡（直接扣帳戶）",
      "ex": "I paid with my debit card.",
      "exzh": "我用金融卡付款。"
    },
    {
      "w": "deposit",
      "pos": "n./v.",
      "zh": "存款、存入",
      "ex": "I'd like to make a deposit.",
      "exzh": "我想存錢。"
    },
    {
      "w": "withdraw",
      "pos": "v.",
      "zh": "提款",
      "ex": "I'd like to withdraw fifty dollars.",
      "exzh": "我想領五十塊。"
    },
    {
      "w": "balance",
      "pos": "n.",
      "zh": "餘額",
      "ex": "What's my account balance?",
      "exzh": "我的帳戶餘額是多少？"
    },
    {
      "w": "monthly fee",
      "pos": "n.",
      "zh": "月費",
      "ex": "There's no monthly fee for students.",
      "exzh": "學生沒有月費。"
    },
    {
      "w": "minimum balance",
      "pos": "n.",
      "zh": "最低餘額",
      "ex": "There is no minimum balance.",
      "exzh": "沒有最低餘額限制。"
    },
    {
      "w": "ATM",
      "pos": "n.",
      "zh": "提款機",
      "ex": "Is there an ATM nearby?",
      "exzh": "附近有提款機嗎？"
    },
    {
      "w": "routing number",
      "pos": "n.",
      "zh": "銀行路由號碼（銀行代碼）",
      "ex": "I need your routing number.",
      "exzh": "我需要你的路由號碼。"
    },
    {
      "w": "wire transfer",
      "pos": "n.",
      "zh": "電匯",
      "ex": "I sent a wire transfer to Taiwan.",
      "exzh": "我電匯了一筆錢到台灣。"
    },
    {
      "w": "proof of address",
      "pos": "n.",
      "zh": "地址證明",
      "ex": "A lease is a proof of address.",
      "exzh": "租約是一種地址證明。"
    }
  ],
  "situations": [
    {
      "title": "😵 行員講專有名詞，聽不懂",
      "hear": {
        "en": "The account has a twelve dollar monthly maintenance fee unless you maintain a minimum daily balance.",
        "zh": "（講得很快）這個帳戶有十二塊的月維護費，除非你維持每日最低餘額。",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you explain that in simpler words?",
          "zh": "不好意思，可以用簡單一點的說法解釋嗎？"
        },
        {
          "en": "So I pay twelve dollars each month unless I keep enough money in the account?",
          "zh": "所以除非我帳戶裡維持足夠的錢，不然每個月要付十二塊嗎？"
        }
      ],
      "tip": "聽不懂時，用自己的話複述一次（So… ?）是最好的確認方式，也可以請行員寫下來或給你紙本說明。"
    },
    {
      "title": "🪪 我沒有社會安全號碼（SSN）",
      "hear": {
        "en": "Do you have a Social Security number?",
        "zh": "你有社會安全號碼嗎？"
      },
      "say": [
        {
          "en": "I'm an international student, so I don't have one yet. Can I use my passport instead?",
          "zh": "我是留學生，所以還沒有。可以用護照代替嗎？"
        },
        {
          "en": "Can I apply for the account with my passport and I-20?",
          "zh": "我可以用護照和 I-20 申請帳戶嗎？"
        }
      ],
      "tip": "留學生通常沒有 SSN，多數銀行可以用護照、簽證與 I-20 開戶。去之前先打電話確認需要的文件。"
    },
    {
      "title": "💸 帳戶被收了意外的手續費",
      "say": [
        {
          "en": "Excuse me, I see a fee on my statement. Could you explain what it is?",
          "zh": "不好意思，我在帳單上看到一筆手續費，可以解釋一下是什麼嗎？"
        },
        {
          "en": "Is it possible to waive this fee, since I'm a student?",
          "zh": "因為我是學生，這筆費用可以免收嗎？"
        }
      ],
      "tip": "美國銀行常常願意免除第一次的手續費。客氣地詢問，並說明你的學生身分。"
    },
    {
      "title": "🌏 想把錢匯回台灣",
      "say": [
        {
          "en": "I'd like to send money to my family in Taiwan. What's the best way to do that?",
          "zh": "我想寄錢給台灣的家人，最好的方式是什麼？"
        },
        {
          "en": "How much is the fee for a wire transfer, and how long does it take?",
          "zh": "電匯的手續費是多少？要多久才會到？"
        }
      ],
      "tip": "電匯（wire transfer）通常要付 25–50 美元的手續費，匯率也要比較。也可以問有沒有比較便宜的匯款 App 或服務。"
    },
    {
      "title": "🪙 金融卡遺失或被盜刷",
      "say": [
        {
          "en": "I lost my debit card. Could you freeze my account and send me a new one?",
          "zh": "我的金融卡掉了，可以幫我凍結帳戶並寄一張新卡給我嗎？"
        },
        {
          "en": "There's a charge on my account that I didn't make.",
          "zh": "我的帳戶有一筆不是我刷的消費。"
        }
      ],
      "tip": "發現卡片遺失或不明消費，馬上打給銀行或在 App 暫時凍結（freeze）卡片，再申請補發。越快通報，越能降低損失。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "Do you have proof of address, like a lease or a utility bill?",
      "prompt": "行員在問什麼？",
      "options": [
        "你有沒有地址證明",
        "你有沒有工作",
        "你有沒有信用卡"
      ],
      "answer": 0,
      "note": "proof of address 是地址證明，租約或水電帳單都可以。"
    },
    {
      "type": "選擇回應",
      "audio": "Would you like a checking account, a savings account, or both?",
      "prompt": "你兩個帳戶都想開，最適合怎麼回答？",
      "options": [
        "Both, please.",
        "Yes, I would.",
        "I have an account."
      ],
      "answer": 0,
      "note": "A, B, or both? 的問句，可以直接回答 Both。"
    },
    {
      "type": "聽數字",
      "audio": "There's a twelve dollar monthly fee, but it's waived for students.",
      "prompt": "月費是多少？學生要付嗎？",
      "options": [
        "12 元，學生免收",
        "20 元，學生也要付",
        "2 元，學生免收"
      ],
      "answer": 0,
      "note": "twelve 是 12；waived 是免除。"
    },
    {
      "type": "聽數字",
      "audio": "You need a hundred dollars to open the savings account.",
      "prompt": "開儲蓄帳戶需要多少錢？",
      "options": [
        "100 元",
        "1,000 元",
        "10 元"
      ],
      "answer": 0,
      "note": "a hundred dollars 是 100 元。"
    },
    {
      "type": "聽懂意思",
      "audio": "You'll get your debit card in the mail in seven to ten days.",
      "prompt": "金融卡什麼時候會到？",
      "options": [
        "七到十天內寄到",
        "今天就可以拿到",
        "一個月後"
      ],
      "answer": 0,
      "note": "in the mail 是用郵寄，seven to ten days 是七到十天。"
    },
    {
      "type": "選擇回應",
      "audio": "How much would you like to deposit today?",
      "prompt": "你想存五百塊，最適合怎麼回答？",
      "options": [
        "Five hundred dollars, please.",
        "I would like a savings account.",
        "My balance is low."
      ],
      "answer": 0,
      "note": "How much 問的是金額。"
    },
    {
      "type": "聽懂意思",
      "audio": "It's free at our ATMs, but other banks' ATMs will charge you about three dollars.",
      "prompt": "用其他銀行的提款機會怎樣？",
      "options": [
        "大約要付三塊手續費",
        "一樣免費",
        "不能使用"
      ],
      "answer": 0,
      "note": "charge you 是向你收費。"
    },
    {
      "type": "聽懂意思",
      "audio": "Please fill out this deposit slip and sign at the bottom.",
      "prompt": "行員要你做什麼？",
      "options": [
        "填寫存款單並在下方簽名",
        "把錢放進提款機",
        "打電話給銀行"
      ],
      "answer": 0,
      "note": "deposit slip 是存款單，sign 是簽名。"
    },
    {
      "type": "對話理解",
      "audio": "Hi, I'd like to open a checking account. I'm an international student, and I have my passport and my I-20.",
      "prompt": "客人要做什麼？",
      "options": [
        "開支票帳戶，帶了護照和 I-20",
        "申請信用卡",
        "貸款"
      ],
      "answer": 0,
      "note": "I-20 是美國留學生的入學證明文件。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "Excuse me, I see a fee on my statement. Is it possible to waive it, since I'm a student?",
      "prompt": "客人想要什麼？",
      "options": [
        "免收帳單上的一筆手續費",
        "增加存款",
        "關閉帳戶"
      ],
      "answer": 0,
      "note": "waive 是免除，statement 是對帳單。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Good morning! How can I help you today?",
      "promptZh": "早安！今天有什麼可以幫你的？",
      "hint": "說你想開帳戶",
      "expect": "open|account|bank|checking|savings",
      "model": "Hi, I'd like to open a bank account.",
      "modelZh": "嗨，我想開一個銀行帳戶。"
    },
    {
      "prompt": "Do you have an appointment?",
      "promptZh": "你有預約嗎？",
      "hint": "說沒有，問可不可以直接來",
      "expect": "no|don'?t|walk in|yes|appointment",
      "model": "No, I don't. Is it okay to walk in?",
      "modelZh": "沒有，可以直接過來嗎？"
    },
    {
      "prompt": "Can I see your passport and another form of ID?",
      "promptZh": "可以看你的護照和另一份身分證明嗎？",
      "hint": "說給他看什麼",
      "expect": "sure|here|passport|student|id|i-?20",
      "model": "Sure. Here's my passport and my student ID.",
      "modelZh": "好，這是我的護照和學生證。"
    },
    {
      "prompt": "Do you have a Social Security number?",
      "promptZh": "你有社會安全號碼嗎？",
      "hint": "說沒有，因為是留學生",
      "expect": "no|don'?t|international|student|passport|not yet|yet",
      "model": "No, I'm an international student. Can I use my passport?",
      "modelZh": "沒有，我是留學生，可以用護照嗎？"
    },
    {
      "prompt": "Would you like a checking account, a savings account, or both?",
      "promptZh": "你想開支票帳戶、儲蓄帳戶，還是兩個都開？",
      "hint": "選一種或兩種",
      "expect": "checking|savings|both|either",
      "model": "Both, please. Is there a monthly fee?",
      "modelZh": "兩個都開，有月費嗎？"
    },
    {
      "prompt": "There's a twelve dollar monthly fee, but it's waived for students.",
      "promptZh": "有十二塊月費，但學生免收。",
      "hint": "回應並問有沒有最低餘額",
      "expect": "great|good|thanks|thank|minimum|balance|okay|ok|nice",
      "model": "That's great. Is there a minimum balance?",
      "modelZh": "太好了，有最低餘額限制嗎？"
    },
    {
      "prompt": "How much would you like to deposit today?",
      "promptZh": "你今天想存多少？",
      "hint": "說一個金額",
      "expect": "dollars|hundred|\\d|deposit|fifty|thousand",
      "model": "I'd like to deposit five hundred dollars.",
      "modelZh": "我想存五百塊。"
    },
    {
      "prompt": "Is there anything else I can help you with?",
      "promptZh": "還有什麼我可以幫你的嗎？",
      "hint": "說沒有並道謝",
      "expect": "no|that'?s (all|everything|it)|thank|thanks|nothing",
      "model": "No, that's all. Thank you so much!",
      "modelZh": "沒有了，非常謝謝你！"
    }
  ],
  "culture": [
    {
      "t": "支票帳戶與儲蓄帳戶",
      "d": "Checking account 是日常使用的帳戶，附金融卡與支票，用來付款、領現。Savings account 用來存錢賺利息，通常提款次數有限。留學生一般先開支票帳戶就夠用。"
    },
    {
      "t": "留學生開戶要帶的文件",
      "d": "常見需要：護照、簽證、I-20（或 DS-2019）、學生證、地址證明（租約、水電帳單、學校宿舍證明）。留學生通常沒有 SSN，很多銀行只用護照也能開戶，去之前先打電話確認。"
    },
    {
      "t": "手續費要問清楚",
      "d": "常見費用：月維護費、最低餘額不足費、使用其他銀行提款機費、電匯費。很多銀行對學生減免，開戶前一定要問 Are there any fees I should know about?"
    },
    {
      "t": "路由號碼與帳號",
      "d": "Routing number 是銀行的代碼（9 碼），Account number 是你的帳號。薪水直接存入、繳房租、電子轉帳都需要這兩個號碼，不要隨便告訴不認識的人。"
    },
    {
      "t": "在美國付款常用金融卡與信用卡",
      "d": "美國日常很少帶大量現金，多半刷金融卡（debit card）或信用卡。金融卡是直接從你的帳戶扣款，餘額不足時會被拒絕；信用卡則是先借後還，要建立信用紀錄（credit history）。"
    }
  ]
};
