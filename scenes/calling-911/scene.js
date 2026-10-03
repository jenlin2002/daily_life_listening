// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "calling-911",
  "title": "打 911 求救",
  "en": "Calling 911",
  "emoji": "🚨",
  "goal": "學會打 911 時說清楚發生什麼事與所在地點、聽懂調度員的問題與指示，並在警察或救護人員到場後回答問題與提供資料",
  "videos": [
    {
      "id": "87kzv80cAys",
      "title": "Calling 911 - Lesson 37 - English in Vancouver（LINC Videos - English in Vancouver）"
    },
    {
      "id": "spGJ9Ii5W3o",
      "title": "What to Say When you Call 911 | Paramedic Approved | Episode 4（Paramedic Approved）"
    },
    {
      "id": "vRwkXjQHM6g",
      "title": "Calling 911 – Everyday English Dialogues（Ellii (formerly ESL Library)）"
    }
  ],
  "speakers": {
    "S": {
      "name": "911 Dispatcher",
      "zh": "911 調度員",
      "avatar": "👨‍💼",
      "voice": "m2"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♀️",
      "voice": "f2"
    },
    "P": {
      "name": "Paramedic",
      "zh": "救護人員",
      "avatar": "👩‍⚕️",
      "voice": "f"
    },
    "O": {
      "name": "Police Officer",
      "zh": "警察",
      "avatar": "👮‍♂️",
      "voice": "m3"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "醫療緊急狀況：朋友昏倒",
      "where": "在宿舍打 911，朋友倒在地上",
      "emoji": "🚑",
      "lines": [
        {
          "s": "S",
          "en": "Nine one one. What's your emergency?",
          "zh": "911，你遇到什麼緊急狀況？"
        },
        {
          "s": "Y",
          "en": "My friend collapsed. She's not responding, and I don't think she's breathing.",
          "zh": "我朋友昏倒了，她沒有反應，我覺得她沒有呼吸。"
        },
        {
          "s": "S",
          "en": "Okay, I'm sending help right now. What's the address of the emergency?",
          "zh": "好的，我馬上派人過去。出事的地址是什麼？"
        },
        {
          "s": "Y",
          "en": "It's two zero five Pine Street, Room three twelve, in the Oak Residence Hall.",
          "zh": "是 Pine 街 205 號，Oak 宿舍 312 室。"
        },
        {
          "s": "S",
          "en": "Two zero five Pine Street, Room three twelve. What's your name and phone number?",
          "zh": "Pine 街 205 號 312 室。你的名字和電話號碼是什麼？"
        },
        {
          "s": "Y",
          "en": "My name is Amy Chen, and my number is five five five, zero one two three.",
          "zh": "我叫 Amy Chen，電話是 555-0123。"
        },
        {
          "s": "S",
          "en": "Amy, is she awake? Is she breathing?",
          "zh": "Amy，她醒著嗎？有在呼吸嗎？"
        },
        {
          "s": "Y",
          "en": "No, she's not awake. I can't tell if she's breathing.",
          "zh": "沒有，她沒醒，我看不出來她有沒有呼吸。"
        },
        {
          "s": "S",
          "en": "Stay on the line. I'm going to tell you how to help. Put your hands on the center of her chest and push hard and fast.",
          "zh": "請不要掛斷。我會教你怎麼幫她。把雙手放在她胸口正中間，用力、快速地按壓。"
        },
        {
          "s": "Y",
          "en": "Okay, I'm doing it. Please hurry!",
          "zh": "好，我在做了。請快一點！"
        },
        {
          "s": "S",
          "en": "The ambulance is on the way. Keep going until they arrive. Can someone unlock the front door for them?",
          "zh": "救護車正在路上。請繼續，直到他們抵達。有人可以幫他們開大門嗎？"
        }
      ]
    },
    {
      "title": "報案：有人闖入",
      "where": "在家聽到有人撬門，躲起來打 911",
      "emoji": "🚓",
      "lines": [
        {
          "s": "S",
          "en": "Nine one one. What's your emergency?",
          "zh": "911，你遇到什麼緊急狀況？"
        },
        {
          "s": "Y",
          "en": "Someone is trying to break into my apartment. I can hear them at the door.",
          "zh": "有人想闖進我的公寓，我聽得到他們在門口。"
        },
        {
          "s": "S",
          "en": "Are you in a safe place right now?",
          "zh": "你現在在安全的地方嗎？"
        },
        {
          "s": "Y",
          "en": "I'm in my bedroom with the door locked. I'm alone.",
          "zh": "我在臥室，門鎖著，我一個人。"
        },
        {
          "s": "S",
          "en": "Good. What's the address?",
          "zh": "很好。地址是什麼？"
        },
        {
          "s": "Y",
          "en": "Four twenty-one Oak Street, apartment 3C.",
          "zh": "Oak 街 421 號 3C 室。"
        },
        {
          "s": "S",
          "en": "Do you see the person? Can you describe them?",
          "zh": "你看得到那個人嗎？可以描述一下他嗎？"
        },
        {
          "s": "Y",
          "en": "I can't see them. I only heard two voices and the door shaking.",
          "zh": "我看不到。我只聽到兩個人的聲音，還有門在晃。"
        },
        {
          "s": "S",
          "en": "Okay. Stay hidden and stay on the line. Police are on the way, and they'll be there in about four minutes.",
          "zh": "好的。請躲好，不要掛斷。警察正在路上，大約四分鐘會到。"
        },
        {
          "s": "Y",
          "en": "Please tell them I'm in the bedroom.",
          "zh": "請告訴他們我在臥室。"
        },
        {
          "s": "S",
          "en": "I will. Don't open the door until the police say your name.",
          "zh": "我會的。在警察叫你的名字之前，不要開門。"
        }
      ]
    },
    {
      "title": "救護人員與警察到場",
      "where": "宿舍門口，救護人員和警察抵達",
      "emoji": "📋",
      "lines": [
        {
          "s": "P",
          "en": "Paramedics. Where's the patient?",
          "zh": "救護人員。病人在哪裡？"
        },
        {
          "s": "Y",
          "en": "She's in here, on the floor. She collapsed about five minutes ago.",
          "zh": "她在這裡，在地板上。她大約五分鐘前昏倒的。"
        },
        {
          "s": "P",
          "en": "Did she hit her head? Does she have any medical conditions or allergies?",
          "zh": "她有撞到頭嗎？她有任何疾病或過敏嗎？"
        },
        {
          "s": "Y",
          "en": "I don't think she hit her head. I know she has asthma, and she's allergic to peanuts.",
          "zh": "我想她沒有撞到頭。我知道她有氣喘，而且對花生過敏。"
        },
        {
          "s": "P",
          "en": "Thank you. We're taking her to the hospital now. Do you want to ride with us?",
          "zh": "謝謝。我們現在要送她去醫院。你要跟我們一起搭車嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, please. I'll bring her phone and her student ID.",
          "zh": "好的，麻煩你們。我會帶她的手機和學生證。"
        },
        {
          "s": "O",
          "en": "Hi, I'm Officer Davis. Can I ask you a few questions about what happened?",
          "zh": "嗨，我是 Davis 警官。我可以問你幾個關於剛剛發生的事的問題嗎？"
        },
        {
          "s": "Y",
          "en": "Sure. I heard someone trying to open my door, and then they ran away.",
          "zh": "好。我聽到有人想開我的門，然後他們就跑掉了。"
        },
        {
          "s": "O",
          "en": "Can you spell your last name for me, and show me a photo ID?",
          "zh": "你可以拼一下你的姓，並讓我看你的證件嗎？"
        },
        {
          "s": "Y",
          "en": "It's C-H-E-N. Here's my student ID.",
          "zh": "是 C-H-E-N。這是我的學生證。"
        },
        {
          "s": "O",
          "en": "Thanks. Here's the report number. If you remember anything else, please call us.",
          "zh": "謝謝。這是報案編號。如果你想起其他事情，請打電話給我們。"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "I need to report an emergency.",
      "zh": "我要通報緊急狀況。"
    },
    {
      "en": "My friend collapsed.",
      "zh": "我朋友昏倒了。"
    },
    {
      "en": "She's not responding.",
      "zh": "她沒有反應。"
    },
    {
      "en": "He's not breathing.",
      "zh": "他沒有呼吸。"
    },
    {
      "en": "I need an ambulance.",
      "zh": "我需要救護車。"
    },
    {
      "en": "There's a fire in the building.",
      "zh": "大樓裡有火災。"
    },
    {
      "en": "Someone is trying to break into my apartment.",
      "zh": "有人想闖進我的公寓。"
    },
    {
      "en": "I've been robbed.",
      "zh": "我被搶了。"
    },
    {
      "en": "There's been a car accident.",
      "zh": "發生了車禍。"
    },
    {
      "en": "Someone is injured.",
      "zh": "有人受傷了。"
    },
    {
      "en": "The address is two zero five Pine Street.",
      "zh": "地址是 Pine 街 205 號。"
    },
    {
      "en": "I'm in Room three twelve.",
      "zh": "我在 312 室。"
    },
    {
      "en": "My name is Amy Chen.",
      "zh": "我的名字是 Amy Chen。"
    },
    {
      "en": "My phone number is five five five, zero one two three.",
      "zh": "我的電話是 555-0123。"
    },
    {
      "en": "I don't speak English very well.",
      "zh": "我的英文不太好。"
    },
    {
      "en": "I need a Chinese interpreter.",
      "zh": "我需要中文口譯員。"
    },
    {
      "en": "Please hurry.",
      "zh": "請快一點。"
    },
    {
      "en": "Should I stay on the line?",
      "zh": "我要不要不掛斷？"
    },
    {
      "en": "I'm safe right now.",
      "zh": "我現在安全。"
    },
    {
      "en": "I called by mistake. There's no emergency.",
      "zh": "我打錯了，沒有緊急狀況。"
    }
  ],
  "hear": [
    {
      "en": "Nine one one. What's your emergency?",
      "zh": "911，你遇到什麼緊急狀況？",
      "reply": "My friend collapsed, and she's not breathing.",
      "replyZh": "我朋友昏倒了，她沒有呼吸。"
    },
    {
      "en": "What's the address of the emergency?",
      "zh": "出事的地址是什麼？",
      "reply": "It's two zero five Pine Street, Room three twelve.",
      "replyZh": "是 Pine 街 205 號 312 室。"
    },
    {
      "en": "What's your name and phone number?",
      "zh": "你的名字和電話號碼是什麼？",
      "reply": "My name is Amy Chen, and my number is five five five, zero one two three.",
      "replyZh": "我叫 Amy Chen，電話 555-0123。"
    },
    {
      "en": "Is she awake? Is she breathing?",
      "zh": "她醒著嗎？有在呼吸嗎？",
      "reply": "No, she's not awake.",
      "replyZh": "沒有，她沒醒。"
    },
    {
      "en": "Stay on the line.",
      "zh": "請不要掛斷。",
      "reply": "Okay. Please hurry.",
      "replyZh": "好，請快一點。"
    },
    {
      "en": "Are you in a safe place right now?",
      "zh": "你現在在安全的地方嗎？",
      "reply": "Yes, I'm in my bedroom with the door locked.",
      "replyZh": "是的，我在臥室，門鎖著。"
    },
    {
      "en": "Can you describe the person?",
      "zh": "你可以描述那個人嗎？",
      "reply": "I can't see them, but I heard two voices.",
      "replyZh": "我看不到，但我聽到兩個人的聲音。"
    },
    {
      "en": "Police are on the way.",
      "zh": "警察正在路上。",
      "reply": "Thank you. Should I stay on the line?",
      "replyZh": "謝謝，我要不要不掛斷？"
    },
    {
      "en": "Does she have any medical conditions or allergies?",
      "zh": "她有任何疾病或過敏嗎？",
      "reply": "She has asthma, and she's allergic to peanuts.",
      "replyZh": "她有氣喘，而且對花生過敏。"
    },
    {
      "en": "Can you spell your last name for me?",
      "zh": "你可以幫我拼你的姓嗎？",
      "reply": "Sure. It's C-H-E-N.",
      "replyZh": "好，是 C-H-E-N。"
    }
  ],
  "say": [
    {
      "en": "Hello, I need an ambulance. My friend collapsed.",
      "zh": "你好，我需要救護車，我朋友昏倒了。"
    },
    {
      "en": "I'm at the Oak Residence Hall on Pine Street.",
      "zh": "我在 Pine 街的 Oak 宿舍。"
    },
    {
      "en": "I'm not sure of the exact address. I'm near the library.",
      "zh": "我不確定確切的地址，我在圖書館附近。"
    },
    {
      "en": "My English is limited. Could you speak slowly, please?",
      "zh": "我的英文有限，可以請你說慢一點嗎？"
    },
    {
      "en": "I need a Mandarin interpreter, please.",
      "zh": "請給我一位華語口譯員。"
    },
    {
      "en": "I'm not a doctor. Could you tell me what to do?",
      "zh": "我不是醫生，可以告訴我該怎麼做嗎？"
    },
    {
      "en": "Should I move him, or should I wait?",
      "zh": "我要移動他，還是等著？"
    },
    {
      "en": "There's smoke coming from the kitchen next door.",
      "zh": "隔壁廚房冒出煙來。"
    },
    {
      "en": "I'm calling for someone else. He's not able to speak.",
      "zh": "我是替別人打的，他沒辦法說話。"
    },
    {
      "en": "Is it okay if I stay inside, or should I leave the building?",
      "zh": "我可以待在室內，還是應該離開大樓？"
    }
  ],
  "vocab": [
    {
      "w": "emergency",
      "pos": "n.",
      "zh": "緊急狀況",
      "ex": "Call 911 in an emergency.",
      "exzh": "遇到緊急狀況要打 911。"
    },
    {
      "w": "ambulance",
      "pos": "n.",
      "zh": "救護車",
      "ex": "The ambulance arrived in five minutes.",
      "exzh": "救護車五分鐘就到了。"
    },
    {
      "w": "dispatcher",
      "pos": "n.",
      "zh": "調度員",
      "ex": "The dispatcher asked for my address.",
      "exzh": "調度員問我的地址。"
    },
    {
      "w": "paramedic",
      "pos": "n.",
      "zh": "救護人員",
      "ex": "The paramedics helped her.",
      "exzh": "救護人員幫助了她。"
    },
    {
      "w": "collapse",
      "pos": "v.",
      "zh": "昏倒、倒下",
      "ex": "He collapsed in the hallway.",
      "exzh": "他在走廊昏倒了。"
    },
    {
      "w": "unconscious",
      "pos": "adj.",
      "zh": "失去意識的",
      "ex": "She is unconscious.",
      "exzh": "她失去意識了。"
    },
    {
      "w": "breathe",
      "pos": "v.",
      "zh": "呼吸",
      "ex": "He can't breathe.",
      "exzh": "他無法呼吸。"
    },
    {
      "w": "break in",
      "pos": "v.",
      "zh": "闖入",
      "ex": "Someone broke in last night.",
      "exzh": "昨晚有人闖入。"
    },
    {
      "w": "suspect",
      "pos": "n.",
      "zh": "嫌疑人",
      "ex": "Can you describe the suspect?",
      "exzh": "你可以描述嫌疑人嗎？"
    },
    {
      "w": "witness",
      "pos": "n.",
      "zh": "目擊者",
      "ex": "I was a witness to the accident.",
      "exzh": "我是這起事故的目擊者。"
    },
    {
      "w": "report number",
      "pos": "n.",
      "zh": "報案編號",
      "ex": "Here is your report number.",
      "exzh": "這是你的報案編號。"
    },
    {
      "w": "stay on the line",
      "pos": "phr.",
      "zh": "不要掛斷電話",
      "ex": "Please stay on the line.",
      "exzh": "請不要掛斷。"
    }
  ],
  "situations": [
    {
      "title": "😵 調度員講很快、一次問好幾個問題",
      "hear": {
        "en": "What's the address, is the patient conscious, is she breathing, and how old is she?",
        "zh": "（講得很快）地址是什麼、病人有意識嗎、有在呼吸嗎、幾歲？",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you ask me one question at a time?",
          "zh": "抱歉，可以一次問一個問題嗎？"
        },
        {
          "en": "The address is two zero five Pine Street. She's about twenty years old.",
          "zh": "地址是 Pine 街 205 號。她大約二十歲。"
        }
      ],
      "tip": "緊急時調度員會連續問問題，這是為了盡快派出對的救援。聽不懂就請他一次問一個，先回答地址，因為地址最重要。"
    },
    {
      "title": "🗣️ 英文不夠好、講不出來",
      "say": [
        {
          "en": "I don't speak English well. I need a Chinese interpreter.",
          "zh": "我英文不好，我需要中文口譯員。"
        },
        {
          "en": "Please send help to two zero five Pine Street.",
          "zh": "請派人到 Pine 街 205 號。"
        }
      ],
      "tip": "911 有電話口譯服務，可以說 I need a Mandarin interpreter（華語）。即使說不好，也要先把地址和「emergency」講出來，救援會先出動。"
    },
    {
      "title": "📍 不知道自己在哪裡",
      "say": [
        {
          "en": "I'm not sure where I am. I'm near a gas station and a big park.",
          "zh": "我不確定自己在哪裡，我在加油站和一個大公園附近。"
        },
        {
          "en": "Can you find my location from my phone?",
          "zh": "你可以從我的手機找到我的位置嗎？"
        }
      ],
      "tip": "不知道地址就說附近的明顯地標、路口名稱、店名。手機打 911 通常可以定位，但不一定準，所以仍要盡量說出位置。"
    },
    {
      "title": "📵 打錯電話或不小心撥出",
      "say": [
        {
          "en": "I'm sorry, I called by mistake. There's no emergency.",
          "zh": "抱歉，我打錯了，沒有緊急狀況。"
        },
        {
          "en": "I'm safe. Please don't send anyone.",
          "zh": "我很安全，請不要派人過來。"
        }
      ],
      "tip": "不小心打了 911 不要直接掛斷，要留在線上說明沒事，否則調度員可能會派人過來確認。"
    },
    {
      "title": "☎️ 不是緊急的警察事務",
      "hear": {
        "en": "This isn't an emergency, so please call the non-emergency police line.",
        "zh": "這不是緊急狀況，請改打警察的非緊急專線。"
      },
      "say": [
        {
          "en": "What's the non-emergency number? I want to report a stolen bike.",
          "zh": "非緊急專線是幾號？我想通報腳踏車被偷。"
        },
        {
          "en": "Do I need to file a police report for my insurance?",
          "zh": "為了保險，我需要報案嗎？"
        }
      ],
      "tip": "911 只用在人身安全、火災、犯罪正在發生等緊急情況。腳踏車被偷、事後報案、噪音等，請打當地警局的非緊急專線或到警局報案。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "Nine one one. What's your emergency?",
      "prompt": "調度員在問什麼？",
      "options": [
        "你遇到什麼緊急狀況",
        "你的名字",
        "你在哪裡工作"
      ],
      "answer": 0,
      "note": "emergency 是緊急狀況。"
    },
    {
      "type": "選擇回應",
      "audio": "What's the address of the emergency?",
      "prompt": "你在 Pine 街 205 號，最適合怎麼回答？",
      "options": [
        "It's two zero five Pine Street.",
        "It's my friend.",
        "About five minutes."
      ],
      "answer": 0,
      "note": "address 是地址，電話或地址的數字要一個一個念。"
    },
    {
      "type": "聽數字",
      "audio": "Your name and phone number, please. Is it five five five, zero one two three?",
      "prompt": "電話號碼是多少？",
      "options": [
        "555-0123",
        "555-0213",
        "550-1230"
      ],
      "answer": 0,
      "note": "電話號碼每個數字分開念。"
    },
    {
      "type": "聽懂意思",
      "audio": "Is she awake? Is she breathing?",
      "prompt": "調度員想知道什麼？",
      "options": [
        "她有沒有醒、有沒有呼吸",
        "她幾歲",
        "她有沒有保險"
      ],
      "answer": 0,
      "note": "awake 是醒著，breathing 是呼吸。"
    },
    {
      "type": "聽懂意思",
      "audio": "Stay on the line. I'm going to tell you how to help.",
      "prompt": "調度員要你做什麼？",
      "options": [
        "不要掛斷，聽他指示",
        "掛掉再打一次",
        "先去找醫生"
      ],
      "answer": 0,
      "note": "stay on the line 是不要掛斷電話。"
    },
    {
      "type": "選擇回應",
      "audio": "Are you in a safe place right now?",
      "prompt": "你躲在臥室裡，最適合怎麼回答？",
      "options": [
        "Yes, I'm in my bedroom with the door locked.",
        "No, it's a gas station.",
        "I'm twenty years old."
      ],
      "answer": 0,
      "note": "safe place 是安全的地方。"
    },
    {
      "type": "聽數字",
      "audio": "Police are on the way. They'll be there in about four minutes.",
      "prompt": "警察大約多久到？",
      "options": [
        "約四分鐘",
        "約十四分鐘",
        "約四十分鐘"
      ],
      "answer": 0,
      "note": "four、fourteen、forty 要分清楚。"
    },
    {
      "type": "聽懂意思",
      "audio": "Don't open the door until the police say your name.",
      "prompt": "什麼時候可以開門？",
      "options": [
        "警察叫你名字之後",
        "聽到敲門就開",
        "馬上開"
      ],
      "answer": 0,
      "note": "until 是直到。"
    },
    {
      "type": "對話理解",
      "audio": "My friend collapsed. She's not responding, and I don't think she's breathing. We're at the Oak Residence Hall on Pine Street.",
      "prompt": "打電話的人說了什麼？",
      "options": [
        "朋友昏倒沒反應，人在宿舍",
        "腳踏車被偷",
        "想問地址"
      ],
      "answer": 0,
      "note": "not responding 是沒有反應。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "Sorry, I called by mistake. There's no emergency, and I'm safe. Please don't send anyone.",
      "prompt": "打電話的人想說什麼？",
      "options": [
        "打錯了，沒事，不用派人",
        "要報案偷竊",
        "需要救護車"
      ],
      "answer": 0,
      "note": "by mistake 是不小心、弄錯。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Nine one one. What's your emergency?",
      "promptZh": "911，你遇到什麼緊急狀況？",
      "hint": "說你朋友昏倒了",
      "expect": "friend|collapsed|not responding|breathing|ambulance|help|emergency",
      "model": "My friend collapsed. She's not responding.",
      "modelZh": "我朋友昏倒了，她沒有反應。"
    },
    {
      "prompt": "What's the address of the emergency?",
      "promptZh": "出事的地址是什麼？",
      "hint": "說一個地址，例如 Pine Street",
      "expect": "street|avenue|road|hall|room|\\d",
      "model": "It's two zero five Pine Street, Room three twelve.",
      "modelZh": "是 Pine 街 205 號 312 室。"
    },
    {
      "prompt": "What's your name and phone number?",
      "promptZh": "你的名字和電話號碼是什麼？",
      "hint": "說名字和電話",
      "expect": "name|number|phone|five|zero|\\d",
      "model": "My name is Amy Chen, and my number is five five five, zero one two three.",
      "modelZh": "我叫 Amy Chen，電話 555-0123。"
    },
    {
      "prompt": "Is she awake? Is she breathing?",
      "promptZh": "她醒著嗎？有在呼吸嗎？",
      "hint": "說她沒醒，你不確定有沒有呼吸",
      "expect": "no|not|can't tell|don't think|awake|breathing",
      "model": "No, she's not awake, and I can't tell if she's breathing.",
      "modelZh": "沒有，她沒醒，我看不出來她有沒有呼吸。"
    },
    {
      "prompt": "Stay on the line. The ambulance is on the way.",
      "promptZh": "不要掛斷，救護車在路上了。",
      "hint": "請他快一點",
      "expect": "hurry|please|thank|okay|ok|fast",
      "model": "Okay. Please hurry!",
      "modelZh": "好，請快一點！"
    },
    {
      "prompt": "Nine one one. What's your emergency?",
      "promptZh": "911，你遇到什麼緊急狀況？",
      "hint": "說有人想闖進你的公寓",
      "expect": "break|apartment|door|someone|trying|home",
      "model": "Someone is trying to break into my apartment.",
      "modelZh": "有人想闖進我的公寓。"
    },
    {
      "prompt": "Are you in a safe place right now?",
      "promptZh": "你現在在安全的地方嗎？",
      "hint": "說你躲在臥室，門鎖著",
      "expect": "yes|bedroom|locked|safe|hiding|alone",
      "model": "Yes, I'm in my bedroom with the door locked.",
      "modelZh": "是的，我在臥室，門鎖著。"
    },
    {
      "prompt": "Can you spell your last name for me, and show me a photo ID?",
      "promptZh": "你可以拼一下你的姓，並讓我看證件嗎？",
      "hint": "拼字母並給證件",
      "expect": "spell|\\b[a-z]-[a-z]|here|ID|sure|student",
      "model": "Sure. It's C-H-E-N. Here's my student ID.",
      "modelZh": "好，是 C-H-E-N。這是我的學生證。"
    }
  ],
  "culture": [
    {
      "t": "什麼時候打 911",
      "d": "911 是全美的緊急電話，用在有人生命危險、嚴重受傷或生病、火災、正在發生的犯罪或意外。打 911 不用付費，用手機也可以。小事（腳踏車被偷、噪音）請打警局的非緊急專線。"
    },
    {
      "t": "先說地點，再說發生什麼事",
      "d": "調度員最先問地址，因為最重要的是派人到對的地方。說清楚街道、門牌、房號或明顯地標。電話或地址的數字要一個一個念，例如 two zero five。"
    },
    {
      "t": "不要掛斷，照調度員指示做",
      "d": "調度員會一直問問題並給你指示，例如教你做胸部按壓（CPR），這是在幫助現場救援。除非調度員說可以，否則請不要掛斷。"
    },
    {
      "t": "英文不好也要打",
      "d": "911 有電話口譯服務，可以說 I need a Mandarin interpreter。就算說不流利，也先講出 emergency 和地點。如果真的不能說話，有些地方可以傳簡訊到 911，但不是每個地方都有，能打電話就打電話。"
    },
    {
      "t": "不小心撥出也要說明",
      "d": "誤撥 911 不要直接掛斷，請留在線上說明沒事，否則調度員可能會回撥，甚至派人過去確認。警察到場後會問你的姓名、證件和發生的經過，並給你報案編號，之後可以用來追蹤案件或向保險公司申請。"
    }
  ]
};
