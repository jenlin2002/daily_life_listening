// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "post-office",
  "title": "郵局寄包裹",
  "en": "At the Post Office",
  "emoji": "📦",
  "goal": "學會在美國郵局寄包裹與信件、選擇寄送速度、填寫報關單、問價格與追蹤編號，並處理領取包裹與地址問題",
  "speakers": {
    "S": {
      "name": "Postal Clerk",
      "zh": "郵局職員",
      "avatar": "👩‍💼",
      "voice": "f"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♂️",
      "voice": "m3"
    },
    "C": {
      "name": "Package Counter Clerk",
      "zh": "包裹櫃台職員",
      "avatar": "👨‍💼",
      "voice": "m2"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "寄包裹到台灣",
      "where": "郵局的服務櫃台",
      "emoji": "🌏",
      "lines": [
        {
          "s": "S",
          "en": "Hi, how can I help you today?",
          "zh": "嗨，今天有什麼可以幫你的？"
        },
        {
          "s": "Y",
          "en": "Hi. I'd like to send this package to Taiwan, please.",
          "zh": "嗨，我想把這個包裹寄到台灣。"
        },
        {
          "s": "S",
          "en": "Okay. Let me weigh it. It's four pounds. What's inside?",
          "zh": "好的，我來秤重。是四磅。裡面是什麼？"
        },
        {
          "s": "Y",
          "en": "Just clothes and some books. It's a gift for my family.",
          "zh": "只是衣服和一些書，是送給家人的禮物。"
        },
        {
          "s": "S",
          "en": "Do you have anything liquid, battery-powered, or food in the package?",
          "zh": "包裹裡有液體、電池或食物嗎？"
        },
        {
          "s": "Y",
          "en": "No, nothing like that.",
          "zh": "沒有，都沒有。"
        },
        {
          "s": "S",
          "en": "Great. We have three options. Priority Mail International takes six to ten business days and costs forty-two dollars.",
          "zh": "好的，我們有三種選擇。國際優先郵件需要六到十個工作天，費用四十二塊美金。"
        },
        {
          "s": "Y",
          "en": "Is there a cheaper one?",
          "zh": "有比較便宜的嗎？"
        },
        {
          "s": "S",
          "en": "First-Class International is thirty dollars, but it takes two to four weeks.",
          "zh": "國際平信小包是三十塊，但要兩到四週。"
        },
        {
          "s": "Y",
          "en": "I'll take the cheaper one. Could I get a tracking number?",
          "zh": "我選便宜的。可以給我追蹤編號嗎？"
        },
        {
          "s": "S",
          "en": "Sure. Please fill out this customs form. Write the contents and the value here.",
          "zh": "好的。請填這張報關單，在這裡寫內容物和價值。"
        }
      ]
    },
    {
      "title": "買郵票、寄信與掛號",
      "where": "郵局的櫃台",
      "emoji": "✉️",
      "lines": [
        {
          "s": "Y",
          "en": "Hi, I need to mail this letter. How much is a stamp?",
          "zh": "嗨，我要寄這封信，郵票多少錢？"
        },
        {
          "s": "S",
          "en": "A regular letter to a U.S. address is sixty-eight cents. Is it going out of the country?",
          "zh": "寄到美國國內的一般信件是六十八分錢。是要寄到國外嗎？"
        },
        {
          "s": "Y",
          "en": "No, it's going to California.",
          "zh": "不是，是寄到加州。"
        },
        {
          "s": "S",
          "en": "Then you need one stamp. Would you like to buy a book of ten?",
          "zh": "那只要一張郵票。你要買一本十張的嗎？"
        },
        {
          "s": "Y",
          "en": "No, just two stamps, please.",
          "zh": "不用，兩張就好，謝謝。"
        },
        {
          "s": "S",
          "en": "Here you go. Anything else?",
          "zh": "給你。還有別的嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, I also need to send an important document. Could I get a signature on delivery?",
          "zh": "有，我還要寄一份重要文件。可以要求對方簽收嗎？"
        },
        {
          "s": "S",
          "en": "Yes, that's called Certified Mail with return receipt. It's about eight dollars extra.",
          "zh": "可以，那叫做掛號並附回執，大約要加八塊錢。"
        },
        {
          "s": "Y",
          "en": "That works. How do I write the address?",
          "zh": "可以，那地址要怎麼寫？"
        },
        {
          "s": "S",
          "en": "Put the recipient's address in the center and your return address in the top left corner.",
          "zh": "收件人地址寫在中間，你的回郵地址寫在左上角。"
        }
      ]
    },
    {
      "title": "領取包裹與包裹查詢",
      "where": "郵局的包裹領取櫃台",
      "emoji": "📬",
      "lines": [
        {
          "s": "Y",
          "en": "Hi, I got a notice that I missed a package delivery. Here's the slip.",
          "zh": "嗨，我收到通知說我錯過了包裹投遞，這是通知單。"
        },
        {
          "s": "C",
          "en": "Sure. Do you have a photo ID?",
          "zh": "好的，你有附照片的證件嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, here's my driver's license.",
          "zh": "有，這是我的駕照。"
        },
        {
          "s": "C",
          "en": "Thank you. Let me go get it. It's a medium box from Taiwan, right?",
          "zh": "謝謝，我去拿。是從台灣寄來的中型箱子，對嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, that's the one.",
          "zh": "對，就是那個。"
        },
        {
          "s": "C",
          "en": "Here you go. Please sign here.",
          "zh": "給你，請在這裡簽名。"
        },
        {
          "s": "Y",
          "en": "Thank you. By the way, I'm going away for two weeks. Can you hold my mail?",
          "zh": "謝謝。對了，我要出遠門兩週，你們可以代為保管我的郵件嗎？"
        },
        {
          "s": "C",
          "en": "Yes, you can request a hold on our website or fill out a form at the counter.",
          "zh": "可以，你可以在我們的網站申請保管，或在櫃台填表。"
        },
        {
          "s": "Y",
          "en": "I'll do it online. Thanks for your help!",
          "zh": "我會上網申請，謝謝你的幫忙！"
        },
        {
          "s": "C",
          "en": "No problem. Have a nice day.",
          "zh": "不客氣，祝你有美好的一天。"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "I'd like to send this package to Taiwan.",
      "zh": "我想把這個包裹寄到台灣。"
    },
    {
      "en": "How much does it cost to ship this?",
      "zh": "寄這個要多少錢？"
    },
    {
      "en": "How long will it take to arrive?",
      "zh": "要多久才會到？"
    },
    {
      "en": "Is there a cheaper option?",
      "zh": "有比較便宜的選擇嗎？"
    },
    {
      "en": "Could I get a tracking number?",
      "zh": "可以給我追蹤編號嗎？"
    },
    {
      "en": "What's the difference between these two services?",
      "zh": "這兩種服務有什麼不同？"
    },
    {
      "en": "It's just clothes and books.",
      "zh": "只有衣服和書。"
    },
    {
      "en": "There's nothing liquid or fragile in it.",
      "zh": "裡面沒有液體或易碎品。"
    },
    {
      "en": "Please fill out this customs form.",
      "zh": "請填寫這張報關單。"
    },
    {
      "en": "How do I write the address?",
      "zh": "地址要怎麼寫？"
    },
    {
      "en": "The return address goes in the top left corner.",
      "zh": "回郵地址寫在左上角。"
    },
    {
      "en": "How much is a stamp?",
      "zh": "郵票多少錢？"
    },
    {
      "en": "I need two stamps, please.",
      "zh": "我需要兩張郵票。"
    },
    {
      "en": "Could I get a signature on delivery?",
      "zh": "可以要求對方簽收嗎？"
    },
    {
      "en": "I'd like to send it by Certified Mail.",
      "zh": "我想用掛號寄。"
    },
    {
      "en": "I'm here to pick up a package.",
      "zh": "我來領包裹。"
    },
    {
      "en": "I got a notice that I missed a delivery.",
      "zh": "我收到通知說我錯過了投遞。"
    },
    {
      "en": "Do you have a photo ID?",
      "zh": "你有附照片的證件嗎？"
    },
    {
      "en": "Can you hold my mail while I'm away?",
      "zh": "我不在時，你們可以代為保管郵件嗎？"
    },
    {
      "en": "My package hasn't arrived yet.",
      "zh": "我的包裹還沒有到。"
    }
  ],
  "hear": [
    {
      "en": "How can I help you today?",
      "zh": "今天有什麼可以幫你的？",
      "reply": "I'd like to send this package to Taiwan.",
      "replyZh": "我想把這個包裹寄到台灣。"
    },
    {
      "en": "What's in the package?",
      "zh": "包裹裡是什麼？",
      "reply": "Just clothes and some books.",
      "replyZh": "只有衣服和一些書。"
    },
    {
      "en": "Is there anything liquid, fragile, or perishable inside?",
      "zh": "裡面有液體、易碎品或易腐壞的東西嗎？",
      "reply": "No, nothing like that.",
      "replyZh": "沒有，都沒有。"
    },
    {
      "en": "How fast would you like it to get there?",
      "zh": "你希望多快送到？",
      "reply": "It's not urgent. What's the cheapest way?",
      "replyZh": "不急，最便宜的方式是什麼？"
    },
    {
      "en": "It'll take about two to four weeks.",
      "zh": "大約需要兩到四週。",
      "reply": "That's okay. Can I get a tracking number?",
      "replyZh": "沒關係。可以給我追蹤編號嗎？"
    },
    {
      "en": "Please fill out this customs form.",
      "zh": "請填寫這張報關單。",
      "reply": "Sure. What do I write for the value?",
      "replyZh": "好，價值要怎麼寫？"
    },
    {
      "en": "Would you like insurance for the package?",
      "zh": "你要為包裹保價嗎？",
      "reply": "No, thanks.",
      "replyZh": "不用，謝謝。"
    },
    {
      "en": "Would you like to buy a book of stamps?",
      "zh": "你要買一本郵票嗎？",
      "reply": "No, just two stamps, please.",
      "replyZh": "不用，兩張就好，謝謝。"
    },
    {
      "en": "Do you have a photo ID?",
      "zh": "你有附照片的證件嗎？",
      "reply": "Yes, here's my driver's license.",
      "replyZh": "有，這是我的駕照。"
    },
    {
      "en": "Please sign here.",
      "zh": "請在這裡簽名。",
      "reply": "Sure. Thank you!",
      "replyZh": "好，謝謝！"
    }
  ],
  "say": [
    {
      "en": "Hi, I need to mail this package.",
      "zh": "嗨，我需要寄這個包裹。"
    },
    {
      "en": "How long will it take to get to Taiwan?",
      "zh": "寄到台灣要多久？"
    },
    {
      "en": "I'd like the cheapest option, please.",
      "zh": "我想要最便宜的方式。"
    },
    {
      "en": "Could you tell me the difference between these options?",
      "zh": "可以告訴我這些選擇有什麼不同嗎？"
    },
    {
      "en": "Do I need to fill out a form?",
      "zh": "我需要填表嗎？"
    },
    {
      "en": "Could I get a receipt and a tracking number?",
      "zh": "可以給我收據和追蹤編號嗎？"
    },
    {
      "en": "I'm here to pick up a package.",
      "zh": "我來領包裹。"
    },
    {
      "en": "I'd like to hold my mail for two weeks.",
      "zh": "我想請你們保管郵件兩週。"
    },
    {
      "en": "Could you check where my package is?",
      "zh": "可以幫我查一下我的包裹在哪裡嗎？"
    },
    {
      "en": "Sorry, could you say that again?",
      "zh": "不好意思，可以再說一次嗎？"
    }
  ],
  "vocab": [
    {
      "w": "package",
      "pos": "n.",
      "zh": "包裹",
      "ex": "I need to send this package.",
      "exzh": "我需要寄這個包裹。"
    },
    {
      "w": "stamp",
      "pos": "n.",
      "zh": "郵票",
      "ex": "How much is a stamp?",
      "exzh": "郵票多少錢？"
    },
    {
      "w": "envelope",
      "pos": "n.",
      "zh": "信封",
      "ex": "Do you sell envelopes?",
      "exzh": "你們賣信封嗎？"
    },
    {
      "w": "postage",
      "pos": "n.",
      "zh": "郵資",
      "ex": "How much is the postage?",
      "exzh": "郵資多少？"
    },
    {
      "w": "tracking number",
      "pos": "n.",
      "zh": "追蹤編號",
      "ex": "Here is your tracking number.",
      "exzh": "這是你的追蹤編號。"
    },
    {
      "w": "customs form",
      "pos": "n.",
      "zh": "報關單",
      "ex": "Please fill out the customs form.",
      "exzh": "請填寫報關單。"
    },
    {
      "w": "recipient",
      "pos": "n.",
      "zh": "收件人",
      "ex": "Write the recipient's name here.",
      "exzh": "在這裡寫收件人的名字。"
    },
    {
      "w": "return address",
      "pos": "n.",
      "zh": "回郵地址（寄件人地址）",
      "ex": "Put your return address in the corner.",
      "exzh": "把你的回郵地址寫在角落。"
    },
    {
      "w": "Certified Mail",
      "pos": "n.",
      "zh": "掛號郵件",
      "ex": "I'd like to send it by Certified Mail.",
      "exzh": "我想用掛號寄。"
    },
    {
      "w": "fragile",
      "pos": "adj.",
      "zh": "易碎的",
      "ex": "Is anything fragile inside?",
      "exzh": "裡面有易碎品嗎？"
    },
    {
      "w": "insurance",
      "pos": "n.",
      "zh": "保價、保險",
      "ex": "Would you like insurance?",
      "exzh": "你要保價嗎？"
    },
    {
      "w": "hold mail",
      "pos": "phr.",
      "zh": "暫停投遞、代為保管郵件",
      "ex": "I'd like to hold my mail for a week.",
      "exzh": "我想暫停投遞一週。"
    }
  ],
  "situations": [
    {
      "title": "😵 職員講太快、選項很多",
      "hear": {
        "en": "We have Priority Mail Express, Priority Mail, or First-Class, and each has different delivery times and tracking options.",
        "zh": "（講得很快）我們有快捷、優先、平信小包三種，送達時間和追蹤服務都不同。",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you go through them slowly? I need the cheapest one.",
          "zh": "不好意思，可以慢慢說嗎？我需要最便宜的。"
        },
        {
          "en": "Which one has tracking and takes less than two weeks?",
          "zh": "哪一種有追蹤，而且不到兩週可以送到？"
        }
      ],
      "tip": "先說你的需求（便宜、快、要追蹤），再請職員推薦，比自己逐一比較快。也可以請他把價格和天數寫下來。"
    },
    {
      "title": "📋 報關單不知道怎麼填",
      "hear": {
        "en": "Please describe the contents and the total value.",
        "zh": "請說明內容物與總價值。"
      },
      "say": [
        {
          "en": "It's used clothes and books. Is this the right place to write the value?",
          "zh": "是二手衣服和書，價值是寫在這裡嗎？"
        },
        {
          "en": "Could you show me how to fill this out?",
          "zh": "可以教我怎麼填嗎？"
        }
      ],
      "tip": "報關單要寫實際內容物、數量與價值，不要寫「禮物」兩個字就好。寫得模糊可能會被海關扣留或要求補充。"
    },
    {
      "title": "📭 包裹遲遲沒到",
      "say": [
        {
          "en": "I sent a package two weeks ago, and it hasn't arrived yet. Could you check the tracking?",
          "zh": "我兩週前寄了包裹還沒到，可以幫我查追蹤嗎？"
        },
        {
          "en": "Here's my receipt with the tracking number.",
          "zh": "這是我的收據，上面有追蹤編號。"
        }
      ],
      "tip": "收據上的追蹤編號最重要，要保留好。可以到 usps.com 輸入編號查詢，必要時再向郵局提出調查。"
    },
    {
      "title": "🏠 收到「錯過投遞」通知",
      "hear": {
        "en": "We tried to deliver your package, but no one was home.",
        "zh": "我們嘗試投遞，但家裡沒人。"
      },
      "say": [
        {
          "en": "Could I reschedule the delivery for tomorrow?",
          "zh": "我可以改約明天再送嗎？"
        },
        {
          "en": "I'll pick it up at the post office. What do I need to bring?",
          "zh": "我自己到郵局領，需要帶什麼？"
        }
      ],
      "tip": "通知單上有取件地點和期限（通常 15 天）。帶著通知單和附照片的證件去領取。"
    },
    {
      "title": "📍 地址寫錯或搬家了",
      "say": [
        {
          "en": "I made a mistake on the address. Can I change it?",
          "zh": "我地址寫錯了，可以更改嗎？"
        },
        {
          "en": "I moved. How do I forward my mail to my new address?",
          "zh": "我搬家了，要怎麼把郵件轉寄到新地址？"
        }
      ],
      "tip": "搬家可以在 usps.com 申請 Change of Address，郵件會轉寄到新地址。已經寄出的包裹地址寫錯，要盡快到郵局或用追蹤編號聯絡。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "Is there anything liquid, fragile, or perishable inside?",
      "prompt": "職員在問什麼？",
      "options": [
        "裡面有沒有液體、易碎或易腐壞的東西",
        "包裹寄給誰",
        "要不要買保險"
      ],
      "answer": 0,
      "note": "liquid 是液體，fragile 是易碎，perishable 是易腐壞。"
    },
    {
      "type": "選擇回應",
      "audio": "What's in the package?",
      "prompt": "裡面是衣服和書，最適合怎麼回答？",
      "options": [
        "Just clothes and some books.",
        "It's four pounds.",
        "To Taiwan."
      ],
      "answer": 0,
      "note": "What's in…? 問內容物。"
    },
    {
      "type": "聽數字",
      "audio": "It's four pounds, and Priority Mail International costs forty-two dollars.",
      "prompt": "包裹多重？郵資多少？",
      "options": [
        "4 磅，42 元",
        "14 磅，24 元",
        "4 磅，40 元"
      ],
      "answer": 0,
      "note": "forty-two 是 42，fourteen 是 14。"
    },
    {
      "type": "聽懂意思",
      "audio": "First-Class International is thirty dollars, but it takes two to four weeks.",
      "prompt": "這個方式的特點是什麼？",
      "options": [
        "30 元，兩到四週",
        "30 元，兩到四天",
        "40 元，兩到四週"
      ],
      "answer": 0,
      "note": "weeks 是週，days 是天。"
    },
    {
      "type": "選擇回應",
      "audio": "Would you like insurance for the package?",
      "prompt": "你不需要，最適合怎麼回答？",
      "options": [
        "No, thanks.",
        "Yes, I'm an insurance.",
        "It's two weeks."
      ],
      "answer": 0,
      "note": "insurance 是保價、保險。"
    },
    {
      "type": "聽懂意思",
      "audio": "Please put the recipient's address in the center and your return address in the top left corner.",
      "prompt": "地址怎麼寫？",
      "options": [
        "收件人寫中間，回郵地址寫左上角",
        "收件人寫左上角，回郵地址寫中間",
        "兩個都寫在背面"
      ],
      "answer": 0,
      "note": "recipient 是收件人，return address 是寄件人地址。"
    },
    {
      "type": "聽懂意思",
      "audio": "We tried to deliver your package, but no one was home.",
      "prompt": "通知單說了什麼？",
      "options": [
        "投遞時家裡沒人",
        "包裹被退回",
        "包裹破損了"
      ],
      "answer": 0,
      "note": "no one was home 是家裡沒人。"
    },
    {
      "type": "選擇回應",
      "audio": "Do you have a photo ID?",
      "prompt": "你有駕照，最適合怎麼回答？",
      "options": [
        "Yes, here's my driver's license.",
        "No, it's a package.",
        "It's my address."
      ],
      "answer": 0,
      "note": "photo ID 是附照片的證件。"
    },
    {
      "type": "對話理解",
      "audio": "Hi, I'd like to send this package to Taiwan. It's just clothes and books. What's the cheapest way, and can I get a tracking number?",
      "prompt": "客人想做什麼？",
      "options": [
        "寄包裹到台灣，選最便宜的並要追蹤編號",
        "領取包裹",
        "買郵票"
      ],
      "answer": 0,
      "note": "cheapest way 是最便宜的方式。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "Hi, I'm going away for two weeks. Can you hold my mail while I'm gone?",
      "prompt": "客人想要什麼？",
      "options": [
        "請郵局代為保管兩週的郵件",
        "寄信去國外",
        "查詢包裹"
      ],
      "answer": 0,
      "note": "hold my mail 是代為保管郵件。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Hi, how can I help you today?",
      "promptZh": "嗨，今天有什麼可以幫你的？",
      "hint": "說你要寄包裹去哪裡",
      "expect": "send|mail|package|ship|taiwan|letter|stamp|pick up",
      "model": "Hi. I'd like to send this package to Taiwan.",
      "modelZh": "嗨，我想把這個包裹寄到台灣。"
    },
    {
      "prompt": "What's in the package?",
      "promptZh": "包裹裡是什麼？",
      "hint": "說內容物",
      "expect": "clothes|books|gift|shoes|food|just|some",
      "model": "Just clothes and some books.",
      "modelZh": "只有衣服和一些書。"
    },
    {
      "prompt": "Is there anything liquid, fragile, or perishable inside?",
      "promptZh": "裡面有液體、易碎或易腐壞的東西嗎？",
      "hint": "說沒有",
      "expect": "no|nothing|nope|don'?t|not",
      "model": "No, nothing like that.",
      "modelZh": "沒有，都沒有。"
    },
    {
      "prompt": "How fast would you like it to get there?",
      "promptZh": "你希望多快送到？",
      "hint": "說不急，要最便宜的",
      "expect": "cheap|not urgent|no rush|fast|quick|cheapest|two weeks|soon",
      "model": "It's not urgent. What's the cheapest way?",
      "modelZh": "不急，最便宜的方式是什麼？"
    },
    {
      "prompt": "It's thirty dollars, and it takes about two to four weeks.",
      "promptZh": "三十塊，大約需要兩到四週。",
      "hint": "接受，並問追蹤編號",
      "expect": "okay|ok|sure|fine|tracking|receipt|that works|take",
      "model": "That works. Could I get a tracking number?",
      "modelZh": "可以，可以給我追蹤編號嗎？"
    },
    {
      "prompt": "Would you like insurance for the package?",
      "promptZh": "你要保價嗎？",
      "hint": "說要或不要",
      "expect": "yes|no|thanks|don'?t|insurance|please",
      "model": "No, thanks.",
      "modelZh": "不用，謝謝。"
    },
    {
      "prompt": "Please fill out this customs form.",
      "promptZh": "請填寫這張報關單。",
      "hint": "說好，並問怎麼填價值",
      "expect": "sure|okay|ok|value|how|where|write|fill",
      "model": "Sure. What should I write for the value?",
      "modelZh": "好，價值要寫什麼？"
    },
    {
      "prompt": "You're all set. Anything else?",
      "promptZh": "都好了，還有別的嗎？",
      "hint": "說沒有並道謝",
      "expect": "no|that'?s (all|it)|thank|thanks|nothing|stamps?",
      "model": "No, that's all. Thank you!",
      "modelZh": "沒有了，謝謝你！"
    }
  ],
  "culture": [
    {
      "t": "美國郵局 USPS",
      "d": "美國郵政（USPS）寄信、包裹都可以在郵局辦理，也能在網站 usps.com 預先填資料、列印標籤。很多超市和藥局也有郵寄服務，但運費不一定相同。"
    },
    {
      "t": "國際包裹要填報關單",
      "d": "寄到國外要填 Customs Form，寫內容物、數量、價值與寄件原因。禁止寄送的物品包括液體、電池、食物和藥品等，不確定時先問職員。"
    },
    {
      "t": "不同寄送速度",
      "d": "Priority Mail Express 最快、Priority Mail 較快、First-Class 較便宜但慢。選擇時先想清楚要多快、要不要追蹤、要不要保價，再請職員推薦。"
    },
    {
      "t": "地址格式",
      "d": "美國的地址寫法是：姓名，門牌與街名（含公寓號），城市、州（縮寫）、郵遞區號。回郵地址（return address）寫左上角，收件人寫中間。"
    },
    {
      "t": "包裹被放在郵局領取",
      "d": "如果投遞時沒人在家，郵差會留下通知單，包裹放在郵局通常保管 15 天。帶通知單和附照片的證件去領。出遠門前可以在網站申請 Hold Mail。"
    }
  ]
};
