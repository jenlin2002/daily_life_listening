// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "repair-request",
  "title": "報修：冷氣壞了",
  "en": "Home Repairs & AC",
  "emoji": "🔧",
  "goal": "夏天冷氣壓縮機故障、冷媒不足、技工開出分項估價單與考慮長遠換新冷氣。",
  "videos": [
    {
      "id": "kZo60WEMQG0",
      "title": "English Practice for Intermediate Students – Air Conditioner Repair (Bare English)"
    },
    {
      "id": "AlEV5-atmwY",
      "title": "Air conditioner not working? What to do when landlords won’t take action (CBS Texas)"
    }
  ],
  "speakers": {
    "Y": {
      "name": "Me",
      "zh": "我",
      "avatar": "🙋‍♀️",
      "voice": "f"
    },
    "S": {
      "name": "AC Staff",
      "zh": "客服",
      "avatar": "👩",
      "voice": "f2"
    },
    "S2": {
      "name": "Technician",
      "zh": "技師",
      "avatar": "👨",
      "voice": "m3"
    }
  },
  "dialogues": [
    {
      "title": "家裡冷氣壞掉叫修",
      "where": "家裡冷氣壞掉叫修",
      "emoji": "🔧",
      "lines": [
        {
          "s": "S",
          "en": "Hello this is air conditioning USA. How can I help you?",
          "zh": "哈囉，這裡是美國冷氣公司。請問我可以如何協助你？"
        },
        {
          "s": "Y",
          "en": "Hi! I'm calling because my AC is not working. It hasn't turned on since yesterday.",
          "zh": "嗨！我打電話來是因為我的冷氣壞了，從昨天開始就沒再啟動。"
        },
        {
          "s": "S2",
          "en": "The unit is out here. Looks like the compressor blew out and you are low on refrigerant.",
          "zh": "設備在後院。看起來壓縮機壞了，而且冷媒不足。"
        },
        {
          "s": "S2",
          "en": "The total before taxes is gonna be $5,325.25. Honestly, replacing it is better in the long run.",
          "zh": "稅前估價是 5,325.25 美元。老實說長遠來看換新機更好。"
        },
        {
          "s": "Y",
          "en": "Holy moly… that's expensive! I also noticed the thermostat seems off.",
          "zh": "天啊太貴了！我也注意到恆溫器怪怪的。"
        },
        {
          "s": "S2",
          "en": "I will send you an itemized estimate with options. Thanks for stopping by! Anytime!",
          "zh": "我會把分項估價單寄給妳。謝謝妳！不客氣！"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "I'm calling because my AC is not working.",
      "zh": "我打電話來是因為我的冷氣壞了。"
    },
    {
      "en": "I was wondering when you guys can come out and check it.",
      "zh": "我想詢問你們什麼時候能來檢查一下？"
    },
    {
      "en": "It hasn't turned on since yesterday.",
      "zh": "它從昨天開始就沒有再啟動。"
    },
    {
      "en": "We'll send him in / out on Monday.",
      "zh": "我們會安排他週一過去。"
    },
    {
      "en": "The (AC) unit is out here in the backyard.",
      "zh": "（冷氣）設備在後院這邊。"
    },
    {
      "en": "The compressor blew out and you are also low on refrigerant.",
      "zh": "壓縮機壞掉了，而且你的冷媒也快不足了。"
    },
    {
      "en": "The total before taxes is gonna be $5,325.25.",
      "zh": "稅前價格總共是5,325.25美金。"
    },
    {
      "en": "I listed all these problems out on an itemized estimate / statement.",
      "zh": "我把所有問題都列在一份有細項的估價單上了。"
    },
    {
      "en": "Holy moly!",
      "zh": "天啊！"
    },
    {
      "en": "It's gonna run into a lot of problems.",
      "zh": "未來可能會有很多問題。"
    },
    {
      "en": "I would recommend possibly looking at replacing your (AC) unit.",
      "zh": "我建議你考慮更換（冷氣）設備。"
    },
    {
      "en": "In the long run.",
      "zh": "從長遠來看。"
    },
    {
      "en": "I will send you this estimate for repairing your current (AC) unit.",
      "zh": "我會把修理目前（冷氣）設備的估價單傳給你。"
    },
    {
      "en": "I also noticed the thermostat seems off.",
      "zh": "我也發現恆溫器好像不正常。"
    },
    {
      "en": "It's not reading the temperature correctly.",
      "zh": "因為它沒有顯示正確的溫度。"
    },
    {
      "en": "Thanks for stopping by!",
      "zh": "謝謝你過來一趟！"
    },
    {
      "en": "Anytime / You're welcome!",
      "zh": "不客氣！隨時為您服務！"
    }
  ],
  "hear": [
    {
      "en": "Hello, this is Air Conditioning USA. How can I help you?",
      "zh": "您好，這裡是 Air Conditioning USA，有什麼能幫您的嗎？",
      "reply": "Hi, my AC isn't working.",
      "replyZh": "嗨，我的冷氣壞了。"
    },
    {
      "en": "Can I get your name and address, please?",
      "zh": "請給我您的姓名和地址。",
      "reply": "Sure. It's Branden Lin, 215 Maple Street.",
      "replyZh": "好的，我是 Branden Lin，楓樹街 215 號。"
    },
    {
      "en": "When did the problem start?",
      "zh": "問題是什麼時候開始的？",
      "reply": "It stopped working yesterday.",
      "replyZh": "昨天就不能用了。"
    },
    {
      "en": "Is it blowing any air at all?",
      "zh": "有出風嗎？",
      "reply": "It blows air, but it's not cold.",
      "replyZh": "有風，可是不冷。"
    },
    {
      "en": "Have you checked the thermostat?",
      "zh": "你檢查過溫控器了嗎？",
      "reply": "Yes, it's set to sixty-eight degrees.",
      "replyZh": "檢查過了，設在 68 度。"
    },
    {
      "en": "We can send a technician tomorrow morning.",
      "zh": "我們明天早上可以派技師過去。",
      "reply": "Tomorrow morning works. What time?",
      "replyZh": "明天早上可以，幾點呢？"
    },
    {
      "en": "He'll be there between eight and ten.",
      "zh": "他會在八點到十點之間抵達。",
      "reply": "Okay. Will he call before he comes?",
      "replyZh": "好，他來之前會先打給我嗎？"
    },
    {
      "en": "There's a sixty-nine dollar service fee for the visit.",
      "zh": "這次上門有 69 元的服務費。",
      "reply": "Is that applied to the repair cost?",
      "replyZh": "這筆費用可以抵維修費嗎？"
    },
    {
      "en": "Do you rent or own the home?",
      "zh": "你是租房子還是自己的房子？",
      "reply": "I rent. I'll ask my landlord.",
      "replyZh": "我是租的，我會問房東。"
    },
    {
      "en": "Is there anything else I can help you with?",
      "zh": "還有什麼我可以幫您的嗎？",
      "reply": "No, that's all. Thank you!",
      "replyZh": "沒有了，謝謝！"
    }
  ],
  "say": [
    {
      "en": "Hi, I'm calling because my AC isn't working.",
      "zh": "嗨，我打來是因為我的冷氣壞了。"
    },
    {
      "en": "It hasn't turned on since yesterday.",
      "zh": "從昨天起就一直打不開。"
    },
    {
      "en": "It's blowing air, but the air isn't cold.",
      "zh": "有出風，可是不冷。"
    },
    {
      "en": "Can someone come take a look today?",
      "zh": "今天有人可以來看看嗎？"
    },
    {
      "en": "How much will it cost?",
      "zh": "大概要多少錢？"
    },
    {
      "en": "Could you send me an itemized estimate?",
      "zh": "可以寄給我一份分項估價單嗎？"
    },
    {
      "en": "Is this covered by the warranty?",
      "zh": "這在保固範圍內嗎？"
    },
    {
      "en": "The thermostat also seems off.",
      "zh": "溫控器好像也怪怪的。"
    }
  ],
  "vocab": [
    {
      "w": "air conditioner / AC",
      "pos": "n.",
      "zh": "冷氣",
      "ex": "The AC is broken.",
      "exzh": "冷氣壞了。"
    },
    {
      "w": "compressor",
      "pos": "n.",
      "zh": "壓縮機（冷氣的核心零件）",
      "ex": "The compressor blew out.",
      "exzh": "壓縮機壞了。"
    },
    {
      "w": "refrigerant",
      "pos": "n.",
      "zh": "冷媒",
      "ex": "You're low on refrigerant.",
      "exzh": "你的冷媒不夠了。"
    },
    {
      "w": "thermostat",
      "pos": "n.",
      "zh": "溫控器",
      "ex": "Check the thermostat first.",
      "exzh": "先檢查一下溫控器。"
    },
    {
      "w": "technician",
      "pos": "n.",
      "zh": "技師",
      "ex": "A technician will arrive tomorrow.",
      "exzh": "技師明天會到。"
    },
    {
      "w": "estimate",
      "pos": "n.",
      "zh": "估價（單）",
      "ex": "Can I get a free estimate?",
      "exzh": "可以免費估價嗎？"
    },
    {
      "w": "itemized",
      "pos": "adj.",
      "zh": "分項列明的",
      "ex": "Please send an itemized estimate.",
      "exzh": "請寄分項估價單。"
    },
    {
      "w": "warranty",
      "pos": "n.",
      "zh": "保固",
      "ex": "It's still under warranty.",
      "exzh": "還在保固期內。"
    },
    {
      "w": "replace / repair",
      "pos": "v.",
      "zh": "更換／修理",
      "ex": "Is it cheaper to repair or replace it?",
      "exzh": "修理還是換新比較便宜？"
    },
    {
      "w": "service fee",
      "pos": "n.",
      "zh": "（上門）服務費",
      "ex": "There's a service fee for the visit.",
      "exzh": "上門要收服務費。"
    }
  ],
  "situations": [
    {
      "title": "😵 客服講得太快",
      "hear": {
        "en": "Can I get your account number or phone number on file?",
        "zh": "（講得很快）可以給我您的帳號或登記的電話嗎？",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you repeat that more slowly?",
          "zh": "抱歉，可以說慢一點再說一次嗎？"
        },
        {
          "en": "Do you need my phone number?",
          "zh": "你是要我的電話號碼嗎？"
        }
      ],
      "tip": "電話聯絡看不到對方的臉，聽不懂就直接請對方慢一點、重複一次。"
    },
    {
      "title": "📅 想改約時間",
      "hear": {
        "en": "The technician is scheduled for tomorrow at ten.",
        "zh": "技師預定明天十點到。"
      },
      "say": [
        {
          "en": "Could we reschedule for the afternoon?",
          "zh": "可以改成下午嗎？"
        },
        {
          "en": "Is there an earlier time available?",
          "zh": "有比較早的時段嗎？"
        }
      ],
      "tip": "reschedule 是改時間；cancel 是取消。"
    },
    {
      "title": "💰 價格比預期高",
      "say": [
        {
          "en": "That's more than I expected. Are there any other options?",
          "zh": "這比我預期的貴，還有其他方案嗎？"
        },
        {
          "en": "Can I get a second opinion first?",
          "zh": "我可以先問別家的意見嗎？"
        }
      ],
      "tip": "遇到大筆維修，先要書面估價（written estimate）再決定，美國人也常找兩三家比較。"
    },
    {
      "title": "🏠 房子是租的",
      "hear": {
        "en": "Do you rent or own?",
        "zh": "你是租屋還是自己的房子？"
      },
      "say": [
        {
          "en": "I rent. I'll check with my landlord first.",
          "zh": "我是租的，我會先問房東。"
        },
        {
          "en": "Can I call you back after I talk to the landlord?",
          "zh": "我跟房東談完之後再打給你可以嗎？"
        }
      ],
      "tip": "租屋時大型設備（冷氣、熱水器）壞掉，通常由房東負責，先聯絡房東再叫修。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "I'm calling because my air conditioner isn't working.",
      "prompt": "說話的人為什麼打電話？",
      "options": [
        "冷氣壞了",
        "想買冷氣",
        "想問電費"
      ],
      "answer": 0,
      "note": "isn't working = 壞了、不能用。"
    },
    {
      "type": "選擇回應",
      "audio": "When did the problem start?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "It's a big problem.",
        "It stopped working yesterday.",
        "In the living room."
      ],
      "answer": 1,
      "note": "When 問時間，回答 yesterday / this morning。"
    },
    {
      "type": "聽懂意思",
      "audio": "The technician will be there between eight and ten tomorrow morning.",
      "prompt": "技師什麼時候到？",
      "options": [
        "今天下午",
        "明天晚上",
        "明天早上八點到十點"
      ],
      "answer": 2,
      "note": "between A and B = 在 A 和 B 之間。"
    },
    {
      "type": "選擇回應",
      "audio": "Is it blowing any air?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "Yes, but it's not cold.",
        "Yes, I'm blowing.",
        "No, it's a wind."
      ],
      "answer": 0,
      "note": "blow air = 吹風、出風。"
    },
    {
      "type": "聽數字",
      "audio": "There's a sixty-nine dollar service fee for the visit.",
      "prompt": "服務費是多少？",
      "options": [
        "$16",
        "$69",
        "$609"
      ],
      "answer": 1,
      "note": "sixty-nine = 69；注意不要和 sixteen 混淆。"
    },
    {
      "type": "對話理解",
      "audio": "The unit is out here. Looks like the compressor blew out and you're low on refrigerant.",
      "prompt": "技師說問題是什麼？",
      "options": [
        "電線斷了",
        "房間太大",
        "壓縮機壞了，冷媒也不夠"
      ],
      "answer": 2,
      "note": "blew out = 壞掉；low on = 不足。",
      "speaker": "S2"
    },
    {
      "type": "對話理解",
      "audio": "The total before taxes is five thousand three hundred twenty-five dollars. Honestly, replacing it is better in the long run.",
      "prompt": "技師建議怎麼做？",
      "options": [
        "換一台新的",
        "再修一次",
        "不用處理"
      ],
      "answer": 0,
      "note": "in the long run = 長遠來看。",
      "speaker": "S2"
    },
    {
      "type": "對話理解",
      "audio": "I'll send you an itemized estimate with a few options. Thanks for having me!",
      "prompt": "技師接下來會做什麼？",
      "options": [
        "現在開始修理",
        "寄分項估價單給你",
        "送你一台新冷氣"
      ],
      "answer": 1,
      "note": "itemized estimate = 分項列出費用的估價單。",
      "speaker": "S2"
    }
  ],
  "roleplay": [
    {
      "prompt": "Hello, this is Air Conditioning USA. How can I help you?",
      "promptZh": "您好，這裡是 Air Conditioning USA，有什麼能幫您的嗎？",
      "hint": "說明冷氣壞了",
      "expect": "ac|air condition|not working|isn'?t working|broken|doesn'?t work|calling",
      "model": "Hi, my AC isn't working.",
      "modelZh": "嗨，我的冷氣壞了。"
    },
    {
      "prompt": "When did the problem start?",
      "promptZh": "問題是什麼時候開始的？",
      "hint": "說明從什麼時候壞的",
      "expect": "yesterday|this morning|last night|since|ago|today|days?",
      "model": "It stopped working yesterday.",
      "modelZh": "昨天就不能用了。"
    },
    {
      "prompt": "Is it blowing any air at all?",
      "promptZh": "有出風嗎？",
      "hint": "說有出風但不冷，或完全沒有風",
      "expect": "blow|air|cold|cool|warm|nothing|no air|yes|no",
      "model": "It blows air, but it's not cold.",
      "modelZh": "有風，可是不冷。"
    },
    {
      "prompt": "We can send a technician tomorrow morning. Does that work for you?",
      "promptZh": "我們明天早上可以派技師，您方便嗎？",
      "hint": "確認時間",
      "expect": "yes|yeah|sure|works|fine|okay|ok|good|morning|tomorrow|earlier|afternoon",
      "model": "Tomorrow morning works for me.",
      "modelZh": "明天早上我可以。"
    },
    {
      "prompt": "There's a sixty-nine dollar service fee for the visit.",
      "promptZh": "上門服務費是 69 元。",
      "hint": "問是否可以抵維修費",
      "expect": "repair|apply|included|cost|waive|fee|how much|okay|ok",
      "model": "Does that apply to the repair cost?",
      "modelZh": "這筆可以抵維修費嗎？"
    },
    {
      "prompt": "Is there anything else I can help you with?",
      "promptZh": "還有什麼可以幫您的嗎？",
      "hint": "說沒有並道謝",
      "expect": "no|that'?s (all|it)|thank|nothing|i'?m good",
      "model": "No, that's all. Thank you!",
      "modelZh": "沒有了，謝謝！"
    }
  ],
  "culture": [
    {
      "t": "先聯絡房東",
      "d": "租房子的人，冷氣、熱水器、水管壞掉，先通知 landlord 或 property manager。他們通常會指定廠商，費用多半由房東負責。"
    },
    {
      "t": "美國夏天不能沒有冷氣",
      "d": "很多州夏天超過 38 度（華氏 100 度以上）。房東法律上常需在合理時間內修好冷氣，所以報修要講清楚「哪天開始壞」。"
    },
    {
      "t": "先估價再同意",
      "d": "維修人員到場後會先說明問題並給 estimate（估價）。同意之前可以問清楚 itemized（分項）金額，也可以請對方寫在紙上或寄 email。"
    },
    {
      "t": "約時間是一段時間，不是準點",
      "d": "廠商常說 between eight and ten（八點到十點之間）到府，叫做 arrival window。記得留在家，或請人在家等。"
    }
  ]
};
