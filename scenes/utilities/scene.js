// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "utilities",
  "title": "開通水電與網路",
  "en": "Setting Up Utilities",
  "emoji": "💡",
  "goal": "學會打電話請電力公司開通電、向網路公司申請安裝與選方案、聽懂安裝時間與費用，並處理帳單問題與停電、斷網的狀況",
  "speakers": {
    "S": {
      "name": "Electric Company Rep",
      "zh": "電力公司客服",
      "avatar": "👩‍💼",
      "voice": "f"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♂️",
      "voice": "m"
    },
    "I": {
      "name": "Internet Provider Rep",
      "zh": "網路公司客服",
      "avatar": "👨‍💼",
      "voice": "m2"
    },
    "T": {
      "name": "Technician",
      "zh": "安裝技師",
      "avatar": "👨‍🔧",
      "voice": "m3"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "打電話請電力公司開通",
      "where": "剛搬進新公寓，電話聯絡電力公司",
      "emoji": "⚡",
      "lines": [
        {
          "s": "S",
          "en": "Thank you for calling City Power. How can I help you?",
          "zh": "謝謝你打給 City Power，有什麼可以幫你的？"
        },
        {
          "s": "Y",
          "en": "Hi, I just moved into a new apartment, and I'd like to start electric service.",
          "zh": "嗨，我剛搬進新公寓，想開通電力服務。"
        },
        {
          "s": "S",
          "en": "Sure. Can I have your service address?",
          "zh": "好的，可以給我你的用電地址嗎？"
        },
        {
          "s": "Y",
          "en": "It's four twenty-one Oak Street, apartment 3C.",
          "zh": "是 Oak 街 421 號 3C 室。"
        },
        {
          "s": "S",
          "en": "And what date would you like the service to start?",
          "zh": "你希望哪一天開始供電？"
        },
        {
          "s": "Y",
          "en": "I move in this Saturday, so Saturday, please.",
          "zh": "我這個星期六搬進去，所以請從星期六開始。"
        },
        {
          "s": "S",
          "en": "Okay. I'll need your full name and a photo ID to verify your identity.",
          "zh": "好的。我需要你的全名和附照片的證件，來確認你的身分。"
        },
        {
          "s": "Y",
          "en": "I'm an international student. Will a passport work as ID?",
          "zh": "我是國際學生，護照可以當證件嗎？"
        },
        {
          "s": "S",
          "en": "Yes, a passport works. There's also a one-time deposit of one hundred dollars, which we'll return after twelve months of on-time payments.",
          "zh": "可以，護照可以。另外要付一次性押金一百塊，如果你連續十二個月準時付費，我們會退還。"
        },
        {
          "s": "Y",
          "en": "Okay. How will I get my bill?",
          "zh": "好的。我要怎麼收到帳單？"
        },
        {
          "s": "S",
          "en": "We'll email it to you each month, and you can set up automatic payments online.",
          "zh": "我們每個月會用 email 寄給你，你也可以在網路上設定自動扣款。"
        }
      ]
    },
    {
      "title": "向網路公司申請安裝",
      "where": "打電話給網路公司，選方案與預約安裝",
      "emoji": "📶",
      "lines": [
        {
          "s": "I",
          "en": "Thanks for calling Speedy Net. How can I help you today?",
          "zh": "謝謝你打給 Speedy Net，今天有什麼可以幫你的？"
        },
        {
          "s": "Y",
          "en": "Hi, I'd like to sign up for home internet.",
          "zh": "嗨，我想申請家用網路。"
        },
        {
          "s": "I",
          "en": "Great. We have three plans. The basic plan is one hundred megabits for thirty dollars a month, and the fast plan is five hundred megabits for fifty dollars.",
          "zh": "太好了。我們有三種方案。基本方案是一百 Mbps，每月三十塊；快速方案是五百 Mbps，五十塊。"
        },
        {
          "s": "Y",
          "en": "I mostly use it for classes and video calls. Which plan do you recommend?",
          "zh": "我主要用來上課和視訊，你推薦哪個方案？"
        },
        {
          "s": "I",
          "en": "The basic plan is fine for one person. Do you want to rent our modem and router, or use your own?",
          "zh": "一個人用的話，基本方案就夠了。你要租我們的數據機和路由器，還是用自己的？"
        },
        {
          "s": "Y",
          "en": "I don't have my own. How much is it to rent them?",
          "zh": "我沒有自己的，租的話要多少錢？"
        },
        {
          "s": "I",
          "en": "It's ten dollars a month, or you can buy them for a one-time fee of one hundred twenty dollars.",
          "zh": "每月十塊，或是你可以一次買斷，費用一百二十塊。"
        },
        {
          "s": "Y",
          "en": "I'll rent them for now. Is there a contract?",
          "zh": "我先租。有綁約嗎？"
        },
        {
          "s": "I",
          "en": "There's a twelve-month contract, and there's an early termination fee if you cancel before that.",
          "zh": "有十二個月的合約，如果提前取消，要付提前解約費。"
        },
        {
          "s": "Y",
          "en": "Okay. When can someone come to install it?",
          "zh": "好的。什麼時候可以有人來安裝？"
        },
        {
          "s": "I",
          "en": "We have an opening on Monday between one and five. Someone will need to be home to let the technician in.",
          "zh": "星期一下午一點到五點有空檔，需要有人在家讓技師進門。"
        }
      ]
    },
    {
      "title": "技師上門與帳單問題",
      "where": "技師到你家，之後打電話問帳單",
      "emoji": "🛠️",
      "lines": [
        {
          "s": "T",
          "en": "Hi, I'm here to install your internet. Can I come in?",
          "zh": "嗨，我來幫你安裝網路，我可以進去嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, please come in. The router can go in the living room.",
          "zh": "好，請進。路由器可以放客廳。"
        },
        {
          "s": "T",
          "en": "All set. Your Wi-Fi name and password are on the sticker on the back of the router.",
          "zh": "裝好了。你的 Wi-Fi 名稱和密碼在路由器背面的貼紙上。"
        },
        {
          "s": "Y",
          "en": "Thanks. What should I do if the internet goes down?",
          "zh": "謝謝。如果網路斷了該怎麼辦？"
        },
        {
          "s": "T",
          "en": "First, unplug the router for thirty seconds and plug it back in. If it still doesn't work, call customer service.",
          "zh": "先把路由器的插頭拔掉三十秒再插回去。如果還是不行，就打電話給客服。"
        },
        {
          "s": "S",
          "en": "City Power billing. How can I help you?",
          "zh": "City Power 帳務部，有什麼可以幫你的？"
        },
        {
          "s": "Y",
          "en": "Hi, my bill this month is two hundred dollars, which is much higher than usual. Can you check it?",
          "zh": "嗨，我這個月的帳單是兩百塊，比平常高很多，可以幫我查一下嗎？"
        },
        {
          "s": "S",
          "en": "Let me look. It seems your usage went up in the last billing period, probably because of the heater.",
          "zh": "我看一下。你上個計費期間的用電量上升了，可能是因為暖氣。"
        },
        {
          "s": "Y",
          "en": "I see. Is there a way to lower my bill?",
          "zh": "原來如此。有辦法降低帳單嗎？"
        },
        {
          "s": "S",
          "en": "You could set the thermostat lower at night, and we also offer a budget billing plan with the same payment every month.",
          "zh": "你可以晚上把溫控器調低一點，我們也有平均費用方案，每個月付一樣的金額。"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "I'd like to start electric service.",
      "zh": "我想開通電力服務。"
    },
    {
      "en": "I just moved into a new apartment.",
      "zh": "我剛搬進新公寓。"
    },
    {
      "en": "My service address is four twenty-one Oak Street.",
      "zh": "我的用電地址是 Oak 街 421 號。"
    },
    {
      "en": "I'd like the service to start on Saturday.",
      "zh": "我希望星期六開始供電。"
    },
    {
      "en": "Will a passport work as ID?",
      "zh": "護照可以當證件嗎？"
    },
    {
      "en": "Is there a deposit?",
      "zh": "需要付押金嗎？"
    },
    {
      "en": "How will I get my bill?",
      "zh": "我要怎麼收到帳單？"
    },
    {
      "en": "Can I set up automatic payments?",
      "zh": "我可以設定自動扣款嗎？"
    },
    {
      "en": "I'd like to sign up for home internet.",
      "zh": "我想申請家用網路。"
    },
    {
      "en": "What plans do you have?",
      "zh": "你們有哪些方案？"
    },
    {
      "en": "How fast is this plan?",
      "zh": "這個方案的速度多快？"
    },
    {
      "en": "How much is it per month?",
      "zh": "每個月多少錢？"
    },
    {
      "en": "Do I need to rent the modem and router?",
      "zh": "我需要租數據機和路由器嗎？"
    },
    {
      "en": "Is there a contract?",
      "zh": "有綁約嗎？"
    },
    {
      "en": "Is there an installation fee?",
      "zh": "有安裝費嗎？"
    },
    {
      "en": "When can someone come to install it?",
      "zh": "什麼時候可以有人來安裝？"
    },
    {
      "en": "The internet is down.",
      "zh": "網路斷了。"
    },
    {
      "en": "The power is out in my apartment.",
      "zh": "我的公寓停電了。"
    },
    {
      "en": "My bill is much higher than usual.",
      "zh": "我的帳單比平常高很多。"
    },
    {
      "en": "I'd like to cancel my service.",
      "zh": "我想取消服務。"
    }
  ],
  "hear": [
    {
      "en": "Can I have your service address?",
      "zh": "可以給我你的用電地址嗎？",
      "reply": "Sure. It's four twenty-one Oak Street, apartment 3C.",
      "replyZh": "好，是 Oak 街 421 號 3C 室。"
    },
    {
      "en": "What date would you like the service to start?",
      "zh": "你希望哪一天開始供電？",
      "reply": "This Saturday, please.",
      "replyZh": "請從這個星期六開始。"
    },
    {
      "en": "I'll need a photo ID to verify your identity.",
      "zh": "我需要附照片的證件確認你的身分。",
      "reply": "Okay. Can I use my passport?",
      "replyZh": "好，我可以用護照嗎？"
    },
    {
      "en": "There's a one-time deposit of one hundred dollars.",
      "zh": "有一次性押金一百塊。",
      "reply": "Will I get it back later?",
      "replyZh": "之後會退還給我嗎？"
    },
    {
      "en": "Do you want to rent our modem and router, or use your own?",
      "zh": "你要租我們的數據機和路由器，還是用自己的？",
      "reply": "I'll rent them, please.",
      "replyZh": "我要租，麻煩你。"
    },
    {
      "en": "The basic plan is thirty dollars a month.",
      "zh": "基本方案每個月三十塊。",
      "reply": "Is there a contract?",
      "replyZh": "有綁約嗎？"
    },
    {
      "en": "There's a twelve-month contract.",
      "zh": "有十二個月的合約。",
      "reply": "What if I cancel early?",
      "replyZh": "如果我提前取消呢？"
    },
    {
      "en": "Someone needs to be home to let the technician in.",
      "zh": "需要有人在家讓技師進門。",
      "reply": "I'll be home on Monday afternoon.",
      "replyZh": "我星期一下午會在家。"
    },
    {
      "en": "Try unplugging the router for thirty seconds.",
      "zh": "試著把路由器的插頭拔掉三十秒。",
      "reply": "Okay. I'll try that now.",
      "replyZh": "好，我現在試試看。"
    },
    {
      "en": "Your usage went up in the last billing period.",
      "zh": "你上個計費期間的用電量上升了。",
      "reply": "Why is that? Can you explain?",
      "replyZh": "為什麼會這樣？可以解釋嗎？"
    }
  ],
  "say": [
    {
      "en": "Hi, I'd like to set up electric service at my new place.",
      "zh": "嗨，我想幫我的新住處開通電力。"
    },
    {
      "en": "Is the deposit refundable?",
      "zh": "押金可以退嗎？"
    },
    {
      "en": "Can I get the bill by email instead of mail?",
      "zh": "我可以用 email 收帳單，而不是郵寄嗎？"
    },
    {
      "en": "Which internet plan would you recommend for a student?",
      "zh": "你推薦學生用哪一種網路方案？"
    },
    {
      "en": "Is there a cheaper plan without a contract?",
      "zh": "有沒有不綁約、比較便宜的方案？"
    },
    {
      "en": "Could you give me an installation window? I need to be home.",
      "zh": "可以告訴我安裝的時段嗎？我需要在家。"
    },
    {
      "en": "Can I install it myself with a self-install kit?",
      "zh": "我可以用自助安裝包自己裝嗎？"
    },
    {
      "en": "What is the Wi-Fi password?",
      "zh": "Wi-Fi 密碼是什麼？"
    },
    {
      "en": "Could you check why my bill is so high?",
      "zh": "可以幫我查帳單為什麼這麼高嗎？"
    },
    {
      "en": "Sorry, could you repeat that more slowly?",
      "zh": "抱歉，可以說慢一點再說一次嗎？"
    }
  ],
  "vocab": [
    {
      "w": "utilities",
      "pos": "n.",
      "zh": "水電瓦斯等公用事業費用",
      "ex": "Utilities are not included in the rent.",
      "exzh": "租金不包含水電費。"
    },
    {
      "w": "electricity",
      "pos": "n.",
      "zh": "電",
      "ex": "We pay for electricity every month.",
      "exzh": "我們每個月付電費。"
    },
    {
      "w": "service address",
      "pos": "n.",
      "zh": "服務地址",
      "ex": "Please confirm your service address.",
      "exzh": "請確認你的服務地址。"
    },
    {
      "w": "deposit",
      "pos": "n.",
      "zh": "押金",
      "ex": "There is a hundred-dollar deposit.",
      "exzh": "要付一百塊押金。"
    },
    {
      "w": "billing",
      "pos": "n.",
      "zh": "計費、帳務",
      "ex": "Call billing if you have questions.",
      "exzh": "有問題請聯絡帳務部。"
    },
    {
      "w": "internet plan",
      "pos": "n.",
      "zh": "網路方案",
      "ex": "I chose the basic internet plan.",
      "exzh": "我選了基本網路方案。"
    },
    {
      "w": "modem",
      "pos": "n.",
      "zh": "數據機",
      "ex": "The modem connects to the cable.",
      "exzh": "數據機連到網路線。"
    },
    {
      "w": "router",
      "pos": "n.",
      "zh": "路由器",
      "ex": "Unplug the router and plug it back in.",
      "exzh": "把路由器的插頭拔掉再插回去。"
    },
    {
      "w": "contract",
      "pos": "n.",
      "zh": "合約",
      "ex": "It comes with a one-year contract.",
      "exzh": "附一年的合約。"
    },
    {
      "w": "technician",
      "pos": "n.",
      "zh": "技師",
      "ex": "The technician arrives at noon.",
      "exzh": "技師中午會到。"
    },
    {
      "w": "outage",
      "pos": "n.",
      "zh": "停電、斷線",
      "ex": "There was a power outage last night.",
      "exzh": "昨晚停電了。"
    },
    {
      "w": "autopay",
      "pos": "n.",
      "zh": "自動扣款",
      "ex": "I signed up for autopay.",
      "exzh": "我申請了自動扣款。"
    }
  ],
  "situations": [
    {
      "title": "😵 客服講很快、一次說好多費用",
      "hear": {
        "en": "So the plan is fifty a month for the first year, then it goes up to seventy after the promotion ends, plus a ten-dollar equipment fee and taxes.",
        "zh": "（講得很快）這個方案第一年每月五十塊，優惠結束後漲到七十，另外要加十塊設備費和稅。",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you tell me the total price per month, including everything?",
          "zh": "抱歉，可以告訴我包含所有費用的每月總價嗎？"
        },
        {
          "en": "So after the first year, it will be seventy dollars a month. Is that right?",
          "zh": "所以第一年之後是每個月七十塊，對嗎？"
        }
      ],
      "tip": "網路方案常有「第一年優惠價」，之後會漲。一定要問清楚優惠多久、優惠後多少錢、有沒有設備費和稅，再決定。"
    },
    {
      "title": "🌑 突然停電",
      "say": [
        {
          "en": "The power is out in my apartment. Is there an outage in the area?",
          "zh": "我的公寓停電了，這一區有停電嗎？"
        },
        {
          "en": "How long will it take to restore the power?",
          "zh": "多久可以恢復供電？"
        }
      ],
      "tip": "先看看鄰居有沒有停電、斷路器（circuit breaker）有沒有跳掉。如果是整區停電，可以在電力公司網站或 App 查停電地圖。"
    },
    {
      "title": "📵 網路很慢或常斷線",
      "say": [
        {
          "en": "My internet keeps disconnecting. Can you check my connection?",
          "zh": "我的網路一直斷線，可以幫我檢查連線嗎？"
        },
        {
          "en": "I restarted the router, but it's still slow. Can you send a technician?",
          "zh": "我重開了路由器，還是很慢，可以派技師來嗎？"
        }
      ],
      "tip": "先重開路由器、換個位置、用有線連線測試。客服通常會先請你做這些步驟，做過了就直接說明，更快處理。"
    },
    {
      "title": "🏁 要搬家、想轉移或終止服務",
      "say": [
        {
          "en": "I'm moving out at the end of the month. I'd like to stop my service on the thirty-first.",
          "zh": "我月底要搬走，想在三十一號終止服務。"
        },
        {
          "en": "Will I get my deposit back? And do I need to return the equipment?",
          "zh": "押金會退我嗎？我需要歸還設備嗎？"
        }
      ],
      "tip": "搬家前提早幾天通知，說清楚終止日期，並問設備怎麼還。網路公司的設備要歸還，不還會被收費。"
    },
    {
      "title": "💳 想改成自動扣款或延後付款",
      "hear": {
        "en": "Your payment is due on the fifteenth. After that, there is a late fee.",
        "zh": "你的帳單十五號到期，過了會收逾期費。"
      },
      "say": [
        {
          "en": "Can I set up autopay with my debit card?",
          "zh": "我可以用簽帳金融卡設定自動扣款嗎？"
        },
        {
          "en": "I'm going to be a few days late. Is there any way to avoid the late fee?",
          "zh": "我會晚幾天付款，有辦法免收逾期費嗎？"
        }
      ],
      "tip": "設定自動扣款可以避免忘記繳費。真的來不及付，先打電話說明，有些公司第一次會免收逾期費。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "Can I have your service address?",
      "prompt": "客服在問什麼？",
      "options": [
        "你的用電地址",
        "你的電話號碼",
        "你的付款方式"
      ],
      "answer": 0,
      "note": "service address 是服務（用電）地址。"
    },
    {
      "type": "選擇回應",
      "audio": "What date would you like the service to start?",
      "prompt": "你星期六搬進去，最適合怎麼回答？",
      "options": [
        "This Saturday, please.",
        "It's on Oak Street.",
        "About a hundred dollars."
      ],
      "answer": 0,
      "note": "What date 問日期。"
    },
    {
      "type": "聽數字",
      "audio": "There's a one-time deposit of one hundred dollars. We'll return it after twelve months.",
      "prompt": "押金多少？什麼時候退？",
      "options": [
        "100 元，十二個月後退",
        "10 元，兩個月後退",
        "1000 元，不會退"
      ],
      "answer": 0,
      "note": "one hundred 是 100，twelve 是 12。"
    },
    {
      "type": "聽懂意思",
      "audio": "The basic plan is one hundred megabits for thirty dollars a month.",
      "prompt": "基本方案是什麼內容？",
      "options": [
        "100 Mbps，每月 30 元",
        "30 Mbps，每月 100 元",
        "500 Mbps，每月 50 元"
      ],
      "answer": 0,
      "note": "megabits 是網速單位。",
      "speaker": "I"
    },
    {
      "type": "選擇回應",
      "audio": "Do you want to rent our modem and router, or use your own?",
      "prompt": "你沒有自己的設備，最適合怎麼回答？",
      "options": [
        "I don't have my own, so I'll rent them.",
        "I live on the third floor.",
        "It's fifty dollars."
      ],
      "answer": 0,
      "note": "rent 是租，use your own 是用自己的。",
      "speaker": "I"
    },
    {
      "type": "聽懂意思",
      "audio": "There's a twelve-month contract, and there's an early termination fee if you cancel before that.",
      "prompt": "提前取消會怎樣？",
      "options": [
        "要付提前解約費",
        "押金會多退",
        "不會有影響"
      ],
      "answer": 0,
      "note": "termination fee 是終止（解約）費。",
      "speaker": "I"
    },
    {
      "type": "聽數字",
      "audio": "We have an opening on Monday between one and five. Someone needs to be home.",
      "prompt": "安裝是什麼時候？",
      "options": [
        "星期一下午一點到五點",
        "星期五下午一點到十五點",
        "星期一早上五點"
      ],
      "answer": 0,
      "note": "between one and five 是一點到五點之間。",
      "speaker": "I"
    },
    {
      "type": "聽懂意思",
      "audio": "If the internet goes down, unplug the router for thirty seconds and plug it back in.",
      "prompt": "網路斷了先做什麼？",
      "options": [
        "拔掉路由器三十秒再插回去",
        "直接換新設備",
        "關掉電腦不用管"
      ],
      "answer": 0,
      "note": "unplug 是拔插頭，plug in 是插上。",
      "speaker": "T"
    },
    {
      "type": "對話理解",
      "audio": "Hi, my bill this month is two hundred dollars, which is much higher than usual. Can you check why?",
      "prompt": "客人想做什麼？",
      "options": [
        "請客服查帳單為什麼變高",
        "申請新的網路",
        "取消電力服務"
      ],
      "answer": 0,
      "note": "higher than usual 是比平常高。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "The power is out in my apartment. Is there an outage in the area, and how long will it take to restore?",
      "prompt": "客人在問什麼？",
      "options": [
        "這一區是不是停電，多久恢復",
        "電費多少錢",
        "怎麼開通網路"
      ],
      "answer": 0,
      "note": "restore 是恢復。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Thank you for calling City Power. How can I help you?",
      "promptZh": "謝謝你打給 City Power，有什麼可以幫你的？",
      "hint": "說你剛搬家，想開通電",
      "expect": "move|start|electric|service|set up|new",
      "model": "Hi, I just moved into a new apartment, and I'd like to start electric service.",
      "modelZh": "嗨，我剛搬進新公寓，想開通電力服務。"
    },
    {
      "prompt": "Can I have your service address?",
      "promptZh": "可以給我你的用電地址嗎？",
      "hint": "說一個地址，例如 Oak Street",
      "expect": "street|avenue|road|apartment|apt|\\d",
      "model": "It's four twenty-one Oak Street, apartment 3C.",
      "modelZh": "是 Oak 街 421 號 3C 室。"
    },
    {
      "prompt": "I'll need a photo ID to verify your identity.",
      "promptZh": "我需要附照片的證件確認你的身分。",
      "hint": "問護照可不可以",
      "expect": "passport|ID|work|okay|can",
      "model": "I'm an international student. Will a passport work?",
      "modelZh": "我是國際學生，護照可以嗎？"
    },
    {
      "prompt": "Thanks for calling Speedy Net. How can I help you today?",
      "promptZh": "謝謝你打給 Speedy Net，今天有什麼可以幫你的？",
      "hint": "說你想申請家用網路",
      "expect": "internet|sign up|plan|home|wifi|wi-fi|service",
      "model": "Hi, I'd like to sign up for home internet.",
      "modelZh": "嗨，我想申請家用網路。"
    },
    {
      "prompt": "The basic plan is thirty dollars a month, and the fast plan is fifty. Which one would you like?",
      "promptZh": "基本方案每月三十塊，快速方案五十塊，你想要哪一個？",
      "hint": "選基本方案",
      "expect": "basic|thirty|cheaper|first|plan",
      "model": "I'll take the basic plan, please.",
      "modelZh": "我要基本方案，謝謝。"
    },
    {
      "prompt": "Do you want to rent our modem and router, or use your own?",
      "promptZh": "你要租我們的數據機和路由器，還是用自己的？",
      "hint": "說你要租",
      "expect": "rent|own|don't have|buy",
      "model": "I don't have my own, so I'll rent them.",
      "modelZh": "我沒有自己的，所以我要租。"
    },
    {
      "prompt": "There's a twelve-month contract. Is that okay?",
      "promptZh": "有十二個月的合約，這樣可以嗎？",
      "hint": "說可以並問安裝時間",
      "expect": "okay|ok|fine|sure|yes|install|when",
      "model": "That's okay. When can someone come to install it?",
      "modelZh": "可以。什麼時候可以有人來安裝？"
    },
    {
      "prompt": "City Power billing. How can I help you?",
      "promptZh": "City Power 帳務部，有什麼可以幫你的？",
      "hint": "說帳單比平常高，請對方查",
      "expect": "bill|higher|check|usual|much|expensive",
      "model": "My bill is much higher than usual. Could you check it?",
      "modelZh": "我的帳單比平常高很多，可以幫我查嗎？"
    }
  ],
  "culture": [
    {
      "t": "搬家第一件事：開通水電網路",
      "d": "美國大多數住處的電、瓦斯、網路都要自己向公司申請，有些租約會包含水費和垃圾費。搬進去前一兩個星期就要打電話或上網申請，指定開始日期。"
    },
    {
      "t": "申請時常要的資料",
      "d": "通常需要全名、用電地址、開始日期、聯絡方式，以及附照片的證件。留學生沒有社會安全碼（SSN）時，可以用護照，並可能要付押金。"
    },
    {
      "t": "網路方案要看清楚優惠與合約",
      "d": "很多方案第一年有優惠價，之後會漲。要問清楚月費、速度、設備費、安裝費、稅，以及有沒有綁約和提前解約費。單人學生用基本方案通常就夠。"
    },
    {
      "t": "技師上門與設備",
      "d": "網路安裝常常需要有人在家，時段通常是一段時間（例如下午一點到五點）。路由器或數據機如果是租的，搬家或終止服務時要歸還。"
    },
    {
      "t": "帳單與緊急狀況",
      "d": "帳單通常每月寄 email，可以設定自動扣款避免逾期。停電先看斷路器和鄰居，再查電力公司的停電地圖；網路斷線先重開路由器，再聯絡客服。"
    }
  ]
};
