// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "returns",
  "title": "退換貨",
  "en": "Returns & Exchanges",
  "emoji": "🔄",
  "goal": "學會說明退貨或換貨的原因、回答店員關於收據與期限的問題、選擇退款方式，並在被拒絕時禮貌地協商或請主管處理",
  "videos": [
    {
      "id": "E9sJp2bISxk",
      "title": "Ep 2: Getting a refund（ABC Education）"
    },
    {
      "id": "0bB-QGS3wR8",
      "title": "Call Center English | Item Return | Role Play（Single Step English）"
    },
    {
      "id": "Wkn7JHAd-fw",
      "title": "Real English in a Clothing Store! Return & Exchange Conversations（A Little English）"
    }
  ],
  "speakers": {
    "S": {
      "name": "Associate",
      "zh": "店員",
      "avatar": "👩‍💼",
      "voice": "f"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♂️",
      "voice": "m2"
    },
    "M": {
      "name": "Manager",
      "zh": "店長",
      "avatar": "👨‍💼",
      "voice": "m"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "有收據：退一件衣服",
      "where": "服飾店的客服櫃台",
      "emoji": "👕",
      "lines": [
        {
          "s": "S",
          "en": "Hi there! How can I help you today?",
          "zh": "嗨！今天有什麼可以幫你的？"
        },
        {
          "s": "Y",
          "en": "Hi. I'd like to return this jacket, please.",
          "zh": "嗨，我想退這件外套。"
        },
        {
          "s": "S",
          "en": "Sure. Do you have your receipt?",
          "zh": "好的。你有帶收據嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, here it is.",
          "zh": "有，在這裡。"
        },
        {
          "s": "S",
          "en": "Thanks. May I ask why you're returning it?",
          "zh": "謝謝。可以問你為什麼要退嗎？"
        },
        {
          "s": "Y",
          "en": "It's a little too small. The sleeves are too short for me.",
          "zh": "有一點太小了，袖子對我來說太短。"
        },
        {
          "s": "S",
          "en": "I see. Would you like to exchange it for a bigger size, or would you prefer a refund?",
          "zh": "我了解。你想換大一號，還是想要退款？"
        },
        {
          "s": "Y",
          "en": "I'd like a refund, please.",
          "zh": "我想退款，謝謝。"
        },
        {
          "s": "S",
          "en": "No problem. It looks like you paid with a credit card, so I'll refund it to the same card.",
          "zh": "沒問題。你是用信用卡付款的，所以我會退回同一張卡。"
        },
        {
          "s": "Y",
          "en": "How long will it take?",
          "zh": "要多久才會退到？"
        },
        {
          "s": "S",
          "en": "It usually takes three to five business days. Here's your return receipt.",
          "zh": "通常需要三到五個工作天。這是你的退貨收據。"
        }
      ]
    },
    {
      "title": "沒有收據：換貨或換成店家購物金",
      "where": "電子產品店的退貨櫃台",
      "emoji": "🎧",
      "lines": [
        {
          "s": "Y",
          "en": "Hi, I bought these headphones last week, but they don't work well. I'd like to exchange them.",
          "zh": "嗨，我上週買了這副耳機，但不太好用，我想換貨。"
        },
        {
          "s": "S",
          "en": "I'm sorry to hear that. Do you have the receipt?",
          "zh": "很抱歉聽到這件事。你有收據嗎？"
        },
        {
          "s": "Y",
          "en": "I'm afraid I don't. I can't find it anywhere.",
          "zh": "恐怕沒有，我到處都找不到。"
        },
        {
          "s": "S",
          "en": "Do you remember how you paid? I can look it up with your card.",
          "zh": "你記得怎麼付款的嗎？我可以用你的卡幫你查。"
        },
        {
          "s": "Y",
          "en": "I used my debit card. It ends in four-two-one-nine.",
          "zh": "我用金融卡付的，卡號尾數是 4219。"
        },
        {
          "s": "S",
          "en": "Okay, I found it. It was bought six days ago, so you're still within the thirty-day return window.",
          "zh": "好，我找到了。是六天前買的，所以還在三十天的退貨期限內。"
        },
        {
          "s": "Y",
          "en": "Great. Can I exchange them for the same model?",
          "zh": "太好了，我可以換同一款嗎？"
        },
        {
          "s": "S",
          "en": "Let me check if we have it in stock. Yes, we do. Here's a new one.",
          "zh": "我看看有沒有庫存。有的，這是新的一副。"
        },
        {
          "s": "Y",
          "en": "Thank you so much. I really appreciate it.",
          "zh": "非常謝謝你，我真的很感激。"
        }
      ]
    },
    {
      "title": "超過期限被拒絕：請店長協商",
      "where": "家具店的客服櫃台",
      "emoji": "🛋️",
      "lines": [
        {
          "s": "Y",
          "en": "Hi, I'd like to return this lamp. It stopped working after two weeks.",
          "zh": "嗨，我想退這盞燈，用了兩週就壞了。"
        },
        {
          "s": "S",
          "en": "I'm sorry. Let me check. It looks like you bought it forty-five days ago, and our return policy is thirty days.",
          "zh": "很抱歉。我查一下。你是四十五天前買的，而我們的退貨政策是三十天。"
        },
        {
          "s": "Y",
          "en": "I understand, but it's defective. Is there anything you can do?",
          "zh": "我了解，但它是瑕疵品。你有什麼辦法嗎？"
        },
        {
          "s": "S",
          "en": "I'm sorry, but I can't make an exception for returns past thirty days.",
          "zh": "很抱歉，超過三十天的退貨我沒辦法破例。"
        },
        {
          "s": "Y",
          "en": "Could I speak with a manager, please?",
          "zh": "可以請店長來嗎？"
        },
        {
          "s": "S",
          "en": "Sure, one moment.",
          "zh": "可以，請稍等。"
        },
        {
          "s": "M",
          "en": "Hi, I'm the manager. How can I help?",
          "zh": "嗨，我是店長，有什麼可以幫你的？"
        },
        {
          "s": "Y",
          "en": "This lamp stopped working after two weeks. I know it's past the return window, but it's clearly a defect.",
          "zh": "這盞燈用了兩週就壞了。我知道超過退貨期限了，但這明顯是瑕疵。"
        },
        {
          "s": "M",
          "en": "I understand. We can't give a refund, but I can offer you store credit for the full amount.",
          "zh": "我了解。我們沒辦法退款，但我可以給你全額的店家購物金。"
        },
        {
          "s": "Y",
          "en": "That works. Thank you for working with me.",
          "zh": "這樣可以，謝謝你願意幫我處理。"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "I'd like to return this, please.",
      "zh": "我想退這個。"
    },
    {
      "en": "I'd like to exchange this for a different size.",
      "zh": "我想換成不同的尺寸。"
    },
    {
      "en": "It doesn't fit.",
      "zh": "它不合身。"
    },
    {
      "en": "It's too small / too big.",
      "zh": "太小／太大了。"
    },
    {
      "en": "It doesn't work.",
      "zh": "它壞了、不能用。"
    },
    {
      "en": "It's damaged.",
      "zh": "它有損壞。"
    },
    {
      "en": "It's not what I expected.",
      "zh": "它跟我想的不一樣。"
    },
    {
      "en": "I changed my mind.",
      "zh": "我改變主意了。"
    },
    {
      "en": "Do you have your receipt?",
      "zh": "你有收據嗎？"
    },
    {
      "en": "I don't have the receipt with me.",
      "zh": "我沒有帶收據。"
    },
    {
      "en": "Can you look it up with my card?",
      "zh": "可以用我的卡幫我查嗎？"
    },
    {
      "en": "What's your return policy?",
      "zh": "你們的退貨政策是什麼？"
    },
    {
      "en": "Is it still within the return window?",
      "zh": "還在退貨期限內嗎？"
    },
    {
      "en": "I'd like a refund, please.",
      "zh": "我想退款。"
    },
    {
      "en": "Can I get store credit instead?",
      "zh": "可以改成店家購物金嗎？"
    },
    {
      "en": "Will it go back to my original payment method?",
      "zh": "會退回原本的付款方式嗎？"
    },
    {
      "en": "How long will the refund take?",
      "zh": "退款要多久？"
    },
    {
      "en": "Could I speak with a manager?",
      "zh": "可以請店長來嗎？"
    },
    {
      "en": "Is there anything you can do?",
      "zh": "你有什麼辦法嗎？"
    },
    {
      "en": "Thank you for working with me.",
      "zh": "謝謝你願意幫我處理。"
    }
  ],
  "hear": [
    {
      "en": "Do you have your receipt?",
      "zh": "你有帶收據嗎？",
      "reply": "Yes, here it is.",
      "replyZh": "有，在這裡。"
    },
    {
      "en": "May I ask why you're returning it?",
      "zh": "可以問你為什麼要退嗎？",
      "reply": "It's a little too small.",
      "replyZh": "它有一點太小了。"
    },
    {
      "en": "Would you like a refund or an exchange?",
      "zh": "你想退款還是換貨？",
      "reply": "An exchange, please.",
      "replyZh": "換貨，謝謝。"
    },
    {
      "en": "Was it a gift?",
      "zh": "這是禮物嗎？",
      "reply": "Yes, it was a gift.",
      "replyZh": "是的，是別人送的。"
    },
    {
      "en": "Do you remember how you paid?",
      "zh": "你記得怎麼付款的嗎？",
      "reply": "I paid with a credit card.",
      "replyZh": "我是用信用卡付的。"
    },
    {
      "en": "Is the item in its original packaging?",
      "zh": "商品還在原本的包裝裡嗎？",
      "reply": "Yes, and it's unused.",
      "replyZh": "是的，而且沒有使用過。"
    },
    {
      "en": "I'll refund it to your original payment method.",
      "zh": "我會退回原本的付款方式。",
      "reply": "How long will that take?",
      "replyZh": "要多久？"
    },
    {
      "en": "You're still within the thirty-day return window.",
      "zh": "你還在三十天退貨期限內。",
      "reply": "Great, thank you.",
      "replyZh": "太好了，謝謝。"
    },
    {
      "en": "I'm sorry, but I can't make an exception.",
      "zh": "抱歉，我沒辦法破例。",
      "reply": "Could I speak with a manager?",
      "replyZh": "可以請店長來嗎？"
    },
    {
      "en": "We can offer you store credit.",
      "zh": "我們可以給你店家購物金。",
      "reply": "That works. Thank you.",
      "replyZh": "這樣可以，謝謝。"
    }
  ],
  "say": [
    {
      "en": "Hi, I'd like to return this, please.",
      "zh": "嗨，我想退這個。"
    },
    {
      "en": "I bought this last week, but it doesn't fit.",
      "zh": "我上週買了這個，但不合身。"
    },
    {
      "en": "Could I exchange it for a medium?",
      "zh": "可以換成中號嗎？"
    },
    {
      "en": "I don't have the receipt, but I paid by card.",
      "zh": "我沒有收據，但我是刷卡付款的。"
    },
    {
      "en": "It's still in the original packaging.",
      "zh": "它還在原本的包裝裡。"
    },
    {
      "en": "I'd like a refund to my card, please.",
      "zh": "我想退款到我的卡上。"
    },
    {
      "en": "Could I get store credit instead?",
      "zh": "可以改成店家購物金嗎？"
    },
    {
      "en": "I know it's past the return window, but it's defective.",
      "zh": "我知道超過退貨期限了，但它是瑕疵品。"
    },
    {
      "en": "Could I speak with a manager, please?",
      "zh": "可以請店長來嗎？"
    },
    {
      "en": "Sorry, could you say that again?",
      "zh": "不好意思，可以再說一次嗎？"
    }
  ],
  "vocab": [
    {
      "w": "return",
      "pos": "v./n.",
      "zh": "退貨",
      "ex": "I'd like to return this shirt.",
      "exzh": "我想退這件襯衫。"
    },
    {
      "w": "exchange",
      "pos": "v./n.",
      "zh": "換貨",
      "ex": "Can I exchange it for a different color?",
      "exzh": "我可以換成不同顏色嗎？"
    },
    {
      "w": "refund",
      "pos": "n./v.",
      "zh": "退款",
      "ex": "I'd like a full refund.",
      "exzh": "我想要全額退款。"
    },
    {
      "w": "receipt",
      "pos": "n.",
      "zh": "收據",
      "ex": "Do you have the receipt?",
      "exzh": "你有收據嗎？"
    },
    {
      "w": "store credit",
      "pos": "n.",
      "zh": "店家購物金",
      "ex": "We can give you store credit.",
      "exzh": "我們可以給你店家購物金。"
    },
    {
      "w": "return policy",
      "pos": "n.",
      "zh": "退貨政策",
      "ex": "What's your return policy?",
      "exzh": "你們的退貨政策是什麼？"
    },
    {
      "w": "defective",
      "pos": "adj.",
      "zh": "有瑕疵的",
      "ex": "The item is defective.",
      "exzh": "這個商品有瑕疵。"
    },
    {
      "w": "damaged",
      "pos": "adj.",
      "zh": "損壞的",
      "ex": "The box arrived damaged.",
      "exzh": "箱子送到時就是損壞的。"
    },
    {
      "w": "original packaging",
      "pos": "n.",
      "zh": "原本的包裝",
      "ex": "Please keep the original packaging.",
      "exzh": "請保留原本的包裝。"
    },
    {
      "w": "in stock",
      "pos": "phr.",
      "zh": "有現貨",
      "ex": "Is this in stock in a larger size?",
      "exzh": "這個有大一點的尺寸現貨嗎？"
    },
    {
      "w": "exception",
      "pos": "n.",
      "zh": "例外、破例",
      "ex": "I can't make an exception.",
      "exzh": "我沒辦法破例。"
    },
    {
      "w": "business day",
      "pos": "n.",
      "zh": "工作天",
      "ex": "It takes five business days.",
      "exzh": "需要五個工作天。"
    }
  ],
  "situations": [
    {
      "title": "😵 店員講太快，聽不懂",
      "hear": {
        "en": "I can refund you to your card or give you store credit, but without a receipt it'll be store credit only.",
        "zh": "（講得很快）我可以退到你的卡，或給你店家購物金，但沒有收據只能給購物金。",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, could you say that a little slower?",
          "zh": "不好意思，可以說慢一點嗎？"
        },
        {
          "en": "So without the receipt, I can only get store credit?",
          "zh": "所以沒有收據的話，我只能拿購物金嗎？"
        }
      ],
      "tip": "退貨的規則常常很細，用 So… ? 把對方的話複述一次，確認自己真的聽懂再決定。"
    },
    {
      "title": "🧾 沒有收據",
      "hear": {
        "en": "Do you have your receipt?",
        "zh": "你有收據嗎？"
      },
      "say": [
        {
          "en": "I'm sorry, I don't have it with me. Can you look it up with my card or phone number?",
          "zh": "抱歉，我沒帶在身上。可以用我的卡或電話號碼幫我查嗎？"
        },
        {
          "en": "I have the email receipt on my phone. Would that work?",
          "zh": "我手機裡有電子收據，這樣可以嗎？"
        }
      ],
      "tip": "很多商店可以用刷卡紀錄、會員電話或電子郵件收據查詢購買紀錄，不一定要紙本。"
    },
    {
      "title": "⏰ 超過退貨期限",
      "hear": {
        "en": "I'm sorry, it's past our thirty-day return window.",
        "zh": "抱歉，已經超過我們三十天的退貨期限。"
      },
      "say": [
        {
          "en": "I understand, but it's defective. Is there anything you can do?",
          "zh": "我了解，但這是瑕疵品，你有什麼辦法嗎？"
        },
        {
          "en": "Could I speak with a manager, please?",
          "zh": "可以請店長來嗎？"
        }
      ],
      "tip": "被拒絕時保持禮貌，先說「我了解」，再說明理由並詢問有什麼辦法。需要時再請店長處理，不要提高音量。"
    },
    {
      "title": "🛒 網購的東西想退",
      "say": [
        {
          "en": "I ordered this online, and it arrived damaged. How do I return it?",
          "zh": "我在網路上買的，送來就壞了，要怎麼退？"
        },
        {
          "en": "Can I print a return label, or do I have to go to the store?",
          "zh": "我可以列印退貨標籤，還是要到店裡退？"
        }
      ],
      "tip": "網購通常登入帳號就能申請退貨並列印退貨標籤（return label），也可以直接把商品帶到實體店。"
    },
    {
      "title": "🎁 禮物想換",
      "hear": {
        "en": "Was it a gift?",
        "zh": "這是禮物嗎？"
      },
      "say": [
        {
          "en": "Yes, it was a gift, and I don't have the receipt.",
          "zh": "對，是別人送我的禮物，我沒有收據。"
        },
        {
          "en": "Could I exchange it for something else?",
          "zh": "我可以換成別的東西嗎？"
        }
      ],
      "tip": "禮物沒有收據時，店家常常只能給你店家購物金，金額以現在的售價計算，價格可能和當時不同。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "Would you like a refund or an exchange?",
      "prompt": "店員在問什麼？",
      "options": [
        "你要退款還是換貨",
        "你要不要買別的",
        "你想不想看看新品"
      ],
      "answer": 0,
      "note": "refund 是退款，exchange 是換貨。"
    },
    {
      "type": "選擇回應",
      "audio": "May I ask why you're returning it?",
      "prompt": "你覺得太小了，最適合怎麼回答？",
      "options": [
        "It's a little too small.",
        "I'm going to return it.",
        "It's three days."
      ],
      "answer": 0,
      "note": "Why 問的是理由。"
    },
    {
      "type": "選擇回應",
      "audio": "Do you have your receipt?",
      "prompt": "你沒有收據，最適合怎麼回答？",
      "options": [
        "I'm sorry, I don't have it with me.",
        "Yes, I do, thanks.",
        "It's over there."
      ],
      "answer": 0,
      "note": "have it with me 是「帶在身上」。"
    },
    {
      "type": "聽數字",
      "audio": "You're still within the thirty-day return window. You bought it six days ago.",
      "prompt": "退貨期限是幾天？",
      "options": [
        "30 天",
        "13 天",
        "60 天"
      ],
      "answer": 0,
      "note": "thirty 是 30，thirteen 是 13，注意重音。"
    },
    {
      "type": "聽懂意思",
      "audio": "It usually takes three to five business days.",
      "prompt": "退款需要多久？",
      "options": [
        "三到五個工作天",
        "三到五個月",
        "當天就會到"
      ],
      "answer": 0,
      "note": "business days 是工作天，不含週末與假日。"
    },
    {
      "type": "聽懂意思",
      "audio": "I'm sorry, but I can't make an exception.",
      "prompt": "店員的意思是什麼？",
      "options": [
        "抱歉，我沒辦法破例",
        "抱歉，我今天不上班",
        "抱歉，這個賣完了"
      ],
      "answer": 0,
      "note": "make an exception 是破例、通融。"
    },
    {
      "type": "選擇回應",
      "audio": "We can't give you a refund, but we can offer you store credit.",
      "prompt": "你接受購物金，最適合怎麼回答？",
      "options": [
        "That works. Thank you.",
        "No, I'm the manager.",
        "It's a credit card."
      ],
      "answer": 0,
      "note": "That works. 是「這樣可以」。"
    },
    {
      "type": "聽懂意思",
      "audio": "I'll refund it to your original payment method.",
      "prompt": "錢會退到哪裡？",
      "options": [
        "退回你原本付款的方式",
        "退現金給你",
        "轉成購物金"
      ],
      "answer": 0,
      "note": "original payment method 是原本的付款方式，例如同一張信用卡。"
    },
    {
      "type": "對話理解",
      "audio": "Hi, I bought this jacket last week, but it's too small. I have the receipt, and I'd like to exchange it for a medium.",
      "prompt": "客人要做什麼？",
      "options": [
        "把外套換成中號",
        "退款",
        "修理外套"
      ],
      "answer": 0,
      "note": "exchange it for a medium 是換成中號。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "This lamp stopped working after two weeks. I know it's past the return window, but could I speak with a manager?",
      "prompt": "客人想怎麼處理？",
      "options": [
        "請店長通融，處理瑕疵品",
        "買新的燈",
        "問燈在哪裡"
      ],
      "answer": 0,
      "note": "past the return window 是超過退貨期限。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Hi there! How can I help you?",
      "promptZh": "嗨！有什麼可以幫你的？",
      "hint": "說你想退或換這個東西",
      "expect": "return|exchange|refund|swap|send back",
      "model": "Hi, I'd like to return this jacket, please.",
      "modelZh": "嗨，我想退這件外套。"
    },
    {
      "prompt": "Do you have your receipt?",
      "promptZh": "你有收據嗎？",
      "hint": "說有，或說沒帶",
      "expect": "yes|yeah|here|receipt|don'?t|no|card|phone",
      "model": "Yes, here it is.",
      "modelZh": "有，在這裡。"
    },
    {
      "prompt": "May I ask why you're returning it?",
      "promptZh": "可以問你為什麼要退嗎？",
      "hint": "說理由：太小、壞了、不喜歡",
      "expect": "small|big|large|fit|work|broken|damaged|defective|like|expected|changed my mind|wrong|color",
      "model": "It's a little too small.",
      "modelZh": "有一點太小了。"
    },
    {
      "prompt": "Would you like a refund or an exchange?",
      "promptZh": "你想退款還是換貨？",
      "hint": "選一個",
      "expect": "refund|exchange|credit|swap",
      "model": "I'd like a refund, please.",
      "modelZh": "我想退款，謝謝。"
    },
    {
      "prompt": "Is the item in its original packaging?",
      "promptZh": "商品還在原本的包裝裡嗎？",
      "hint": "說有，並說沒用過",
      "expect": "yes|yeah|yep|packag|box|unused|never|tags|no",
      "model": "Yes, and I haven't used it.",
      "modelZh": "是的，而且我沒用過。"
    },
    {
      "prompt": "I'll refund it to your original payment method.",
      "promptZh": "我會退回你原本的付款方式。",
      "hint": "道謝，並問要多久",
      "expect": "how long|when|thank|thanks|great|okay|take",
      "model": "Great, thanks. How long will it take?",
      "modelZh": "太好了，謝謝。要多久？"
    },
    {
      "prompt": "I'm sorry, but it's past our thirty-day return window.",
      "promptZh": "抱歉，已經超過我們三十天的退貨期限。",
      "hint": "說明是瑕疵品，請店長處理",
      "expect": "manager|defect|broken|stopped|understand|anything|exception|speak",
      "model": "I understand, but it's defective. Could I speak with a manager?",
      "modelZh": "我了解，但它是瑕疵品，可以請店長來嗎？"
    },
    {
      "prompt": "We can't give a refund, but we can offer store credit.",
      "promptZh": "我們不能退款，但可以給你店家購物金。",
      "hint": "接受並道謝",
      "expect": "works|fine|okay|ok|sure|thank|thanks|alright|appreciate",
      "model": "That works. Thank you for working with me.",
      "modelZh": "這樣可以，謝謝你願意幫我處理。"
    }
  ],
  "culture": [
    {
      "t": "美國的退貨很寬鬆",
      "d": "大部分商店在 14–90 天內都接受退貨，只要有收據、商品沒用過或保留標籤與包裝。退貨被視為消費者的基本權利，所以不用不好意思。"
    },
    {
      "t": "收據是退貨的關鍵",
      "d": "有收據通常可以退回原本的付款方式；沒收據多半只能換成店家購物金（store credit）或以現行價格換貨。很多商店可以用信用卡、會員電話或電子信箱查詢購買紀錄。"
    },
    {
      "t": "退款不是立刻到帳",
      "d": "退到信用卡通常需要 3–10 個工作天（business days，不含週末假日）。現金購買才可能當場退現金。"
    },
    {
      "t": "被拒絕時怎麼辦",
      "d": "先說 I understand（我了解）表示尊重，再說明理由並問 Is there anything you can do? 如果店員沒辦法，禮貌地請店長（manager）處理。不要生氣或大聲，通常能得到好的結果。"
    },
    {
      "t": "有些商品不能退",
      "d": "貼身衣物、拆封的化妝品、客製商品、特價清倉品（final sale）常常不能退。購買前看清楚標示與退貨政策（return policy），結帳時可以問 What's your return policy?"
    }
  ]
};
