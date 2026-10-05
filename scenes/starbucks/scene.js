// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "starbucks",
  "title": "星巴克點餐：菜單與客製化",
  "en": "Ordering at Starbucks",
  "emoji": "🥤",
  "goal": "看懂美國星巴克的菜單（咖啡、冷萃、星冰樂、Refreshers、茶與抹茶、早餐與輕食），會用 Tall／Grande／Venti 點尺寸，會說奶類、冷奶泡、糖漿等客製化，也會用 App 行動點餐取餐",
  "videos": [
    {
      "id": "fo49sbXaFV8",
      "title": "How to Order at Starbucks in English"
    },
    {
      "id": "IQ4hGFWZ7vM",
      "title": "Ordering Coffee at Starbucks"
    },
    {
      "id": "KU_nzqkgdUQ",
      "title": "How to Order Coffee at Starbucks in English"
    }
  ],
  "speakers": {
    "S": {
      "name": "Barista",
      "zh": "咖啡師",
      "avatar": "👩‍🍳",
      "voice": "f"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♂️",
      "voice": "m"
    },
    "F": {
      "name": "Amy",
      "zh": "朋友 Amy",
      "avatar": "🙋‍♀️",
      "voice": "f2"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "第一次看星巴克菜單",
      "where": "星巴克櫃台前",
      "emoji": "☕",
      "lines": [
        {
          "s": "S",
          "en": "Hi! Welcome to Starbucks. What can I get for you today?",
          "zh": "嗨！歡迎光臨星巴克。今天想喝點什麼？"
        },
        {
          "s": "Y",
          "en": "Hi. It's my first time here. What's the difference between a latte and a flat white?",
          "zh": "嗨，我第一次來。拿鐵和馥列白有什麼不同？"
        },
        {
          "s": "S",
          "en": "A flat white has an extra shot and less foam, so it tastes stronger. A latte is milkier.",
          "zh": "馥列白多一份濃縮、奶泡比較少，所以咖啡味比較濃；拿鐵奶味比較重。"
        },
        {
          "s": "Y",
          "en": "I see. What sizes do you have?",
          "zh": "了解。你們有哪些尺寸？"
        },
        {
          "s": "S",
          "en": "Tall is small, grande is medium, and venti is large.",
          "zh": "Tall 是小杯，Grande 是中杯，Venti 是大杯。"
        },
        {
          "s": "Y",
          "en": "Okay. Can I get a grande caramel macchiato, please?",
          "zh": "好，我要一杯中杯焦糖瑪奇朵。"
        },
        {
          "s": "S",
          "en": "Sure. Hot or iced?",
          "zh": "好的。熱的還是冰的？"
        },
        {
          "s": "Y",
          "en": "Iced, please. And could you make it with oat milk?",
          "zh": "冰的，謝謝。可以換成燕麥奶嗎？"
        },
        {
          "s": "S",
          "en": "Of course. Would you like to add cold foam on top? Our vanilla sweet cream cold foam is really popular.",
          "zh": "當然。上面要加冷奶泡嗎？我們的香草甜奶油冷奶泡很受歡迎。"
        },
        {
          "s": "Y",
          "en": "Sure, why not? But could I get one less pump of syrup? I don't like it too sweet.",
          "zh": "好啊。不過糖漿可以少一泵嗎？我不喜歡太甜。"
        },
        {
          "s": "S",
          "en": "No problem. A grande iced caramel macchiato with oat milk, cold foam, and one less pump. Anything else?",
          "zh": "沒問題。中杯冰焦糖瑪奇朵，燕麥奶、加冷奶泡、糖漿少一泵。還需要什麼嗎？"
        }
      ]
    },
    {
      "title": "不喝咖啡：Pink Drink 與抹茶",
      "where": "和朋友一起排隊",
      "emoji": "🍓",
      "lines": [
        {
          "s": "F",
          "en": "I don't drink coffee. What should I get?",
          "zh": "我不喝咖啡，我該點什麼？"
        },
        {
          "s": "Y",
          "en": "You could try a Refresher. The Pink Drink is super popular.",
          "zh": "你可以試試 Refresher，Pink Drink 超紅的。"
        },
        {
          "s": "F",
          "en": "What's in the Pink Drink?",
          "zh": "Pink Drink 裡面有什麼？"
        },
        {
          "s": "S",
          "en": "It's our Strawberry Açaí Refresher made with coconut milk. It's fruity and creamy.",
          "zh": "是我們的草莓巴西莓 Refresher 加椰奶，有水果味又滑順。"
        },
        {
          "s": "F",
          "en": "Does it have caffeine?",
          "zh": "它有咖啡因嗎？"
        },
        {
          "s": "S",
          "en": "A little. Refreshers have green coffee extract, but much less caffeine than coffee.",
          "zh": "有一點。Refresher 裡有綠咖啡萃取，但咖啡因比咖啡少很多。"
        },
        {
          "s": "F",
          "en": "Hmm, then I'll have a grande iced matcha latte instead.",
          "zh": "嗯，那我改點一杯中杯冰抹茶拿鐵好了。"
        },
        {
          "s": "S",
          "en": "Good choice. Would you like it sweetened?",
          "zh": "好選擇。要加糖嗎？"
        },
        {
          "s": "F",
          "en": "Just a little sweet, please. Can I get it with almond milk?",
          "zh": "一點點甜就好。可以換杏仁奶嗎？"
        },
        {
          "s": "S",
          "en": "Sure. A venti is about fifty cents more. Is grande okay?",
          "zh": "可以。Venti 大概貴五毛錢，中杯可以嗎？"
        },
        {
          "s": "F",
          "en": "Grande is perfect. Thanks!",
          "zh": "中杯剛好，謝謝！"
        }
      ]
    },
    {
      "title": "點早餐：加熱、Egg Bites 與貝果",
      "where": "櫃台與取餐區",
      "emoji": "🥪",
      "lines": [
        {
          "s": "S",
          "en": "Would you like anything to eat? Our breakfast sandwiches are served warm.",
          "zh": "要吃點東西嗎？我們的早餐三明治是熱的。"
        },
        {
          "s": "Y",
          "en": "Yes. What do you recommend for breakfast?",
          "zh": "要。早餐你推薦什麼？"
        },
        {
          "s": "S",
          "en": "The Bacon and Gruyère Egg Bites are our best seller. They're high in protein.",
          "zh": "培根葛瑞爾起司蛋塊賣最好，蛋白質很高。"
        },
        {
          "s": "Y",
          "en": "I'll take those. And an everything bagel with cream cheese, please.",
          "zh": "我要那個。再一個綜合貝果加奶油乳酪。"
        },
        {
          "s": "S",
          "en": "Would you like the bagel toasted?",
          "zh": "貝果要烤一下嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, please. And could you warm up a chocolate croissant, too?",
          "zh": "要，謝謝。巧克力可頌也可以幫我加熱嗎？"
        },
        {
          "s": "S",
          "en": "Sure. Your total is twenty-one forty-five. Are you a Starbucks Rewards member?",
          "zh": "好的。總共 21.45 元。你是星巴克會員嗎？"
        },
        {
          "s": "Y",
          "en": "Not yet. Can I sign up later on the app?",
          "zh": "還不是。我可以之後在 App 上註冊嗎？"
        },
        {
          "s": "S",
          "en": "Of course. You'll earn stars every time you order. Can I get a name for the order?",
          "zh": "當然。每次點餐都能集星星。可以留個名字嗎？"
        },
        {
          "s": "Y",
          "en": "It's Branden. B-R-A-N-D-E-N.",
          "zh": "叫 Branden，拼法是 B-R-A-N-D-E-N。"
        },
        {
          "s": "S",
          "en": "Thanks, Branden. Your food and drinks will be ready at the hand-off counter.",
          "zh": "謝謝，Branden。你的餐點和飲料會在取餐檯備好。"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "Can I get a grande iced latte, please?",
      "zh": "我要一杯中杯冰拿鐵。"
    },
    {
      "en": "What's the difference between a latte and a flat white?",
      "zh": "拿鐵和馥列白有什麼不同？"
    },
    {
      "en": "What size is a grande?",
      "zh": "Grande 是多大杯？"
    },
    {
      "en": "I'll have a tall hot americano.",
      "zh": "我要一杯小杯熱美式。"
    },
    {
      "en": "Could I get that with oat milk?",
      "zh": "可以換成燕麥奶嗎？"
    },
    {
      "en": "Can I add vanilla sweet cream cold foam?",
      "zh": "可以加香草甜奶油冷奶泡嗎？"
    },
    {
      "en": "Could I get one less pump of syrup?",
      "zh": "糖漿可以少一泵嗎？"
    },
    {
      "en": "Can I get sugar-free vanilla instead?",
      "zh": "可以改成無糖香草嗎？"
    },
    {
      "en": "Light ice, please.",
      "zh": "少冰，謝謝。"
    },
    {
      "en": "What's your most popular drink?",
      "zh": "你們最受歡迎的飲料是什麼？"
    },
    {
      "en": "Is there a drink without caffeine?",
      "zh": "有沒有不含咖啡因的飲料？"
    },
    {
      "en": "I'll have a Pink Drink.",
      "zh": "我要一杯 Pink Drink。"
    },
    {
      "en": "Can I get a mocha Frappuccino with no whipped cream?",
      "zh": "我要一杯摩卡星冰樂，不要鮮奶油。"
    },
    {
      "en": "I'd like a chai tea latte.",
      "zh": "我要一杯印度香料茶拿鐵。"
    },
    {
      "en": "Is the Pumpkin Spice Latte back yet?",
      "zh": "南瓜香料拿鐵回來了嗎？"
    },
    {
      "en": "Can I get the Bacon and Gruyère Egg Bites?",
      "zh": "我要培根葛瑞爾起司蛋塊。"
    },
    {
      "en": "Could you warm that up for me?",
      "zh": "可以幫我加熱嗎？"
    },
    {
      "en": "Could I get the bagel toasted with cream cheese?",
      "zh": "貝果可以烤過、加奶油乳酪嗎？"
    },
    {
      "en": "I placed a mobile order for Branden.",
      "zh": "我用 App 點了單，名字是 Branden。"
    },
    {
      "en": "Can I pay with the Starbucks app?",
      "zh": "可以用星巴克 App 付款嗎？"
    }
  ],
  "hear": [
    {
      "en": "What can I get for you today?",
      "zh": "今天想喝點什麼？",
      "reply": "Can I get a grande iced latte, please?",
      "replyZh": "我要一杯中杯冰拿鐵。"
    },
    {
      "en": "What size? Tall, grande, or venti?",
      "zh": "什麼尺寸？小杯、中杯還是大杯？",
      "reply": "Grande, please.",
      "replyZh": "中杯，謝謝。"
    },
    {
      "en": "Would you like that hot or iced?",
      "zh": "要熱的還是冰的？",
      "reply": "Iced, please.",
      "replyZh": "冰的，謝謝。"
    },
    {
      "en": "Any milk preference?",
      "zh": "有指定哪種奶嗎？",
      "reply": "Oat milk, please.",
      "replyZh": "燕麥奶，謝謝。"
    },
    {
      "en": "Would you like to add cold foam?",
      "zh": "要加冷奶泡嗎？",
      "reply": "Sure, vanilla sweet cream cold foam.",
      "replyZh": "好，香草甜奶油冷奶泡。"
    },
    {
      "en": "Do you want whip on that?",
      "zh": "上面要加鮮奶油嗎？",
      "reply": "No whip, thanks.",
      "replyZh": "不要鮮奶油，謝謝。"
    },
    {
      "en": "Would you like your sandwich warmed?",
      "zh": "三明治要加熱嗎？",
      "reply": "Yes, please.",
      "replyZh": "要，謝謝。"
    },
    {
      "en": "Are you a Starbucks Rewards member?",
      "zh": "你是星巴克會員嗎？",
      "reply": "Not yet, thanks.",
      "replyZh": "還不是，謝謝。"
    },
    {
      "en": "Is that for here or to go?",
      "zh": "內用還是外帶？",
      "reply": "To go, please.",
      "replyZh": "外帶，謝謝。"
    },
    {
      "en": "Grande iced caramel macchiato for Branden!",
      "zh": "Branden 的中杯冰焦糖瑪奇朵好了！",
      "reply": "That's mine. Thanks!",
      "replyZh": "是我的，謝謝！"
    }
  ],
  "say": [
    {
      "en": "Hi, can I get a venti cold brew with a splash of milk?",
      "zh": "嗨，我要一杯大杯冷萃咖啡，加一點點牛奶。"
    },
    {
      "en": "Could you make it half sweet?",
      "zh": "可以做半糖嗎？"
    },
    {
      "en": "Can I get an extra shot of espresso?",
      "zh": "可以多加一份濃縮嗎？"
    },
    {
      "en": "Could I get a Java Chip Frappuccino, but decaf?",
      "zh": "我要一杯摩卡可可碎片星冰樂，可以做低咖啡因的嗎？"
    },
    {
      "en": "Which Refreshers don't have much caffeine?",
      "zh": "哪幾種 Refresher 咖啡因比較少？"
    },
    {
      "en": "Can I get a Mango Dragonfruit Refresher with lemonade?",
      "zh": "我要一杯芒果火龍果 Refresher，加檸檬汁。"
    },
    {
      "en": "I'll have a hot chocolate for my little sister.",
      "zh": "我要幫妹妹點一杯熱巧克力。"
    },
    {
      "en": "Does the Spinach, Feta and Egg White Wrap have meat in it?",
      "zh": "菠菜費塔起司蛋白捲餅裡面有肉嗎？"
    },
    {
      "en": "I'll take a cake pop, too.",
      "zh": "我還要一個棒棒糖蛋糕。"
    },
    {
      "en": "Excuse me, is this my mobile order?",
      "zh": "不好意思，這是我用 App 點的嗎？"
    }
  ],
  "vocab": [
    {
      "w": "tall",
      "pos": "n.",
      "zh": "小杯（星巴克尺寸，12 盎司）",
      "ex": "I'll have a tall latte.",
      "exzh": "我要一杯小杯拿鐵。"
    },
    {
      "w": "grande",
      "pos": "n.",
      "zh": "中杯（16 盎司）",
      "ex": "Can I get a grande mocha?",
      "exzh": "我要一杯中杯摩卡。"
    },
    {
      "w": "venti",
      "pos": "n.",
      "zh": "大杯（熱 20、冰 24 盎司）",
      "ex": "A venti iced coffee, please.",
      "exzh": "一杯大杯冰咖啡，謝謝。"
    },
    {
      "w": "cold brew",
      "pos": "n.",
      "zh": "冷萃咖啡",
      "ex": "Cold brew is smooth and strong.",
      "exzh": "冷萃咖啡順口又濃。"
    },
    {
      "w": "cold foam",
      "pos": "n.",
      "zh": "冷奶泡",
      "ex": "Can I add cold foam on top?",
      "exzh": "上面可以加冷奶泡嗎？"
    },
    {
      "w": "Frappuccino",
      "pos": "n.",
      "zh": "星冰樂",
      "ex": "A caramel Frappuccino, please.",
      "exzh": "一杯焦糖星冰樂，謝謝。"
    },
    {
      "w": "Refresher",
      "pos": "n.",
      "zh": "果汁清爽飲（含少量咖啡因）",
      "ex": "The Refresher tastes fruity.",
      "exzh": "這杯清爽飲有水果味。"
    },
    {
      "w": "matcha",
      "pos": "n.",
      "zh": "抹茶",
      "ex": "I'd like an iced matcha latte.",
      "exzh": "我要一杯冰抹茶拿鐵。"
    },
    {
      "w": "chai",
      "pos": "n.",
      "zh": "印度香料茶",
      "ex": "A chai tea latte is spicy and sweet.",
      "exzh": "香料茶拿鐵又香又甜。"
    },
    {
      "w": "whip",
      "pos": "n.",
      "zh": "鮮奶油（whipped cream 的口語）",
      "ex": "No whip, please.",
      "exzh": "不要鮮奶油，謝謝。"
    },
    {
      "w": "egg bites",
      "pos": "n.",
      "zh": "舒肥蛋塊",
      "ex": "The egg bites are warm and soft.",
      "exzh": "蛋塊熱熱軟軟的。"
    },
    {
      "w": "mobile order",
      "pos": "n.",
      "zh": "App 行動點餐",
      "ex": "I placed a mobile order.",
      "exzh": "我用 App 點好了。"
    }
  ],
  "situations": [
    {
      "title": "😵 菜單太多，不知道點什麼",
      "hear": {
        "en": "Hot, iced, or blended? And what size, what milk, any syrups or cold foam?",
        "zh": "（講得很快）要熱的、冰的還是冰沙？什麼尺寸、什麼奶、要不要糖漿或冷奶泡？",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, it's my first time. What do you recommend?",
          "zh": "不好意思，我第一次來，你推薦什麼？"
        },
        {
          "en": "Just a grande iced latte with oat milk, please.",
          "zh": "只要一杯中杯冰拿鐵加燕麥奶，謝謝。"
        }
      ],
      "tip": "星巴克點餐順序可以記：冰熱 → 尺寸 → 飲料名 → 客製化。例如 Iced grande vanilla latte with oat milk. 不知道點什麼就直接問 What do you recommend? 或 What's popular?"
    },
    {
      "title": "☕ 不想喝咖啡因",
      "hear": {
        "en": "Just so you know, the Refreshers have some caffeine.",
        "zh": "提醒你，Refresher 有一點咖啡因喔。"
      },
      "say": [
        {
          "en": "Oh, then do you have anything caffeine-free?",
          "zh": "喔，那你們有完全不含咖啡因的嗎？"
        },
        {
          "en": "I'll have a Vanilla Bean Crème Frappuccino instead.",
          "zh": "那我改點香草星冰樂。"
        }
      ],
      "tip": "Crème 系列星冰樂（香草、雙重可可碎片）、熱巧克力、熱牛奶、檸檬汁都沒有咖啡因；抹茶、香料茶、紅茶、Refreshers 都有一些。晚上或小朋友喝要先問。"
    },
    {
      "title": "📱 App 點好了，卻找不到飲料",
      "hear": {
        "en": "What name is the mobile order under?",
        "zh": "App 點餐是用什麼名字？"
      },
      "say": [
        {
          "en": "It's under Branden. I ordered it about ten minutes ago.",
          "zh": "名字是 Branden，大約十分鐘前點的。"
        },
        {
          "en": "The app says it's ready, but I don't see it.",
          "zh": "App 顯示好了，但我沒看到。"
        }
      ],
      "tip": "行動點餐的飲料會放在 Mobile Order Pickup 區，杯子上有名字。找不到就到取餐檯問，報上名字和點了什麼。"
    },
    {
      "title": "🥛 對乳製品或堅果過敏",
      "hear": {
        "en": "Do you have any allergies we should know about?",
        "zh": "有什麼過敏要讓我們知道的嗎？"
      },
      "say": [
        {
          "en": "Yes, I'm allergic to nuts. Does the toffee nut syrup have real nuts?",
          "zh": "有，我對堅果過敏。太妃核果糖漿有真的堅果嗎？"
        },
        {
          "en": "Could you use coconut milk instead of dairy?",
          "zh": "可以用椰奶代替牛奶嗎？"
        }
      ],
      "tip": "點餐時就說 allergic to…，店員才會注意。杏仁奶（almond milk）本身是堅果做的，對堅果過敏要選燕麥奶、椰奶或豆奶。"
    },
    {
      "title": "🎃 季節限定賣完了",
      "hear": {
        "en": "Sorry, we're all out of pumpkin cream cold foam today.",
        "zh": "抱歉，今天南瓜奶泡賣完了。"
      },
      "say": [
        {
          "en": "That's okay. What else do you have for fall?",
          "zh": "沒關係，還有其他秋季飲料嗎？"
        },
        {
          "en": "Then I'll just get a regular cold brew with vanilla sweet cream.",
          "zh": "那我就點一般冷萃加香草甜奶油。"
        }
      ],
      "tip": "季節限定（秋天的 Pumpkin Spice、春天的新口味）很搶手，常常提早賣完。問 What's seasonal right now? 就能知道現在有什麼。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "What size? Tall, grande, or venti?",
      "prompt": "咖啡師在問什麼？",
      "options": [
        "要熱的還是冰的",
        "要什麼尺寸",
        "要什麼奶"
      ],
      "answer": 1,
      "note": "Tall＝小杯、Grande＝中杯、Venti＝大杯。"
    },
    {
      "type": "選擇回應",
      "audio": "Would you like to add cold foam?",
      "prompt": "你想加冷奶泡，最適合怎麼回答？",
      "options": [
        "To go, please.",
        "No whip, thanks.",
        "Sure, vanilla sweet cream, please."
      ],
      "answer": 2,
      "note": "cold foam 是冷奶泡，常見口味是 vanilla sweet cream。"
    },
    {
      "type": "聽懂意思",
      "audio": "Do you want whip on that?",
      "prompt": "咖啡師在問什麼？",
      "options": [
        "要不要加鮮奶油",
        "要不要加熱",
        "要不要多一份濃縮"
      ],
      "answer": 0,
      "note": "whip 是 whipped cream（鮮奶油）的口語說法。"
    },
    {
      "type": "聽懂意思",
      "audio": "It's our Strawberry Açaí Refresher made with coconut milk.",
      "prompt": "Pink Drink 是用什麼做的？",
      "speaker": "S",
      "options": [
        "草莓巴西莓清爽飲加牛奶",
        "芒果火龍果清爽飲加檸檬汁",
        "草莓巴西莓清爽飲加椰奶"
      ],
      "answer": 2,
      "note": "Pink Drink＝Strawberry Açaí Refresher＋coconut milk。"
    },
    {
      "type": "聽數字",
      "audio": "Your total is twenty-one forty-five.",
      "prompt": "總共多少錢？",
      "options": [
        "$21.45",
        "$12.45",
        "$21.54"
      ],
      "answer": 0,
      "note": "twenty-one forty-five 是 21.45 元。"
    },
    {
      "type": "選擇回應",
      "audio": "Would you like your sandwich warmed?",
      "prompt": "你要加熱，最適合怎麼回答？",
      "options": [
        "Iced, please.",
        "Yes, please.",
        "Grande, please."
      ],
      "answer": 1,
      "note": "warmed 是加熱。早餐三明治和可頌通常會問。"
    },
    {
      "type": "聽懂意思",
      "audio": "Refreshers have green coffee extract, but much less caffeine than coffee.",
      "prompt": "Refresher 有咖啡因嗎？",
      "options": [
        "完全沒有",
        "比咖啡還多",
        "有一點，比咖啡少很多"
      ],
      "answer": 2,
      "note": "green coffee extract 是綠咖啡（未烘焙咖啡豆）萃取，含少量咖啡因。"
    },
    {
      "type": "聽懂意思",
      "audio": "Sorry, we're all out of pumpkin cream cold foam today.",
      "prompt": "咖啡師說了什麼？",
      "options": [
        "南瓜奶泡今天賣完了",
        "南瓜奶泡今天特價",
        "南瓜奶泡要等十分鐘"
      ],
      "answer": 0,
      "note": "we're all out of… 是「…賣完了」。"
    },
    {
      "type": "對話理解",
      "audio": "Hi, can I get a grande iced caramel macchiato with oat milk, cold foam, and one less pump of syrup?",
      "prompt": "客人點的飲料「沒有」哪一項客製化？",
      "speaker": "Y",
      "options": [
        "換燕麥奶",
        "加冷奶泡",
        "多一份濃縮"
      ],
      "answer": 2,
      "note": "one less pump 是糖漿少一泵，不是加濃縮。"
    },
    {
      "type": "對話理解",
      "audio": "I don't drink coffee, so I'll have a grande iced matcha latte with almond milk, just a little sweet.",
      "prompt": "朋友點了什麼？",
      "speaker": "F",
      "options": [
        "中杯冰抹茶拿鐵，杏仁奶，微甜",
        "中杯熱抹茶拿鐵，燕麥奶，無糖",
        "大杯 Pink Drink，少冰"
      ],
      "answer": 0,
      "note": "just a little sweet 是一點點甜。"
    }
  ],
  "roleplay": [
    {
      "prompt": "Hi! Welcome to Starbucks. What can I get for you today?",
      "promptZh": "嗨！歡迎光臨星巴克，今天想喝點什麼？",
      "hint": "用 Can I get… 點一杯飲料，加上尺寸",
      "expect": "can i get|can i have|i'?ll have|i'?d like|latte|macchiato|cold brew|frappuccino|refresher|pink drink|matcha|chai|americano|mocha",
      "model": "Can I get a grande iced latte, please?",
      "modelZh": "我要一杯中杯冰拿鐵。"
    },
    {
      "prompt": "What size would you like? Tall, grande, or venti?",
      "promptZh": "你要什麼尺寸？小杯、中杯還是大杯？",
      "hint": "說 tall、grande 或 venti",
      "expect": "tall|grande|venti|small|medium|large|trenta",
      "model": "Grande, please.",
      "modelZh": "中杯，謝謝。"
    },
    {
      "prompt": "Any milk preference?",
      "promptZh": "有指定哪種奶嗎？",
      "hint": "說一種奶（oat、almond、coconut、soy、whole、nonfat…）",
      "expect": "oat|almond|coconut|soy|whole|nonfat|skim|2%|two percent|milk|regular|no",
      "model": "Oat milk, please.",
      "modelZh": "燕麥奶，謝謝。"
    },
    {
      "prompt": "Would you like to add cold foam or any syrup?",
      "promptZh": "要加冷奶泡或糖漿嗎？",
      "hint": "說要哪一種，或不要",
      "expect": "cold foam|vanilla|caramel|hazelnut|brown sugar|toffee|sugar-?free|pump|syrup|no|yes|sure|just",
      "model": "Sure, vanilla sweet cream cold foam, please.",
      "modelZh": "好，香草甜奶油冷奶泡，謝謝。"
    },
    {
      "prompt": "I don't drink coffee. What should I get?",
      "promptZh": "（朋友問）我不喝咖啡，我該點什麼？",
      "hint": "推薦一種不是咖啡的飲料",
      "expect": "pink drink|refresher|matcha|chai|tea|hot chocolate|lemonade|cr[eè]me|frappuccino|try|get",
      "model": "You could try the Pink Drink. It's fruity.",
      "modelZh": "你可以試試 Pink Drink，有水果味。"
    },
    {
      "prompt": "Would you like anything to eat?",
      "promptZh": "要吃點東西嗎？",
      "hint": "點一樣餐點，或說不用",
      "expect": "egg bites|sandwich|croissant|bagel|muffin|scone|cake pop|wrap|panini|oatmeal|protein box|no|thanks|just|that'?s",
      "model": "Yes, I'll have the Bacon and Gruyère Egg Bites.",
      "modelZh": "要，我要培根葛瑞爾起司蛋塊。"
    },
    {
      "prompt": "Are you a Starbucks Rewards member?",
      "promptZh": "你是星巴克會員嗎？",
      "hint": "說是或還不是",
      "expect": "yes|no|not yet|i am|i'?m not|app|sign up|member",
      "model": "Not yet. Can I sign up on the app?",
      "modelZh": "還不是，我可以在 App 上註冊嗎？"
    },
    {
      "prompt": "What name is the mobile order under?",
      "promptZh": "App 點餐是用什麼名字？",
      "hint": "說你的名字",
      "expect": "it'?s|under|name|i'?m|branden|my",
      "model": "It's under Branden.",
      "modelZh": "名字是 Branden。"
    }
  ],
  "culture": [
    {
      "t": "尺寸是義大利文",
      "d": "Tall（12 盎司，小杯）、Grande（16 盎司，中杯）、Venti（熱 20／冰 24 盎司，大杯），部分冰飲還有 Trenta（30 盎司）。熱飲另有菜單上看不到的 Short（8 盎司）。說 small／medium／large 店員也聽得懂。"
    },
    {
      "t": "菜單怎麼分",
      "d": "飲料：濃縮咖啡經典款（拿鐵、美式、卡布奇諾、馥列白、焦糖瑪奇朵、摩卡）、冷萃與 Nitro 氮氣冷萃、冰搖濃縮（Shaken Espresso）、星冰樂（咖啡款與無咖啡因的 Crème 款）、Refreshers、茶與抹茶、熱巧克力。餐點：Egg Bites、早餐三明治與捲餅、可頌與貝果、瑪芬與司康、Cake Pops、蛋白餐盒（Protein Box）、帕尼尼、燕麥粥與優格杯。"
    },
    {
      "t": "客製化是常態",
      "d": "奶類：預設多半是 2% 牛奶，可換 whole（全脂）、nonfat（脫脂）或 oat、almond、coconut、soy 植物奶（有些店植物奶要加價）。可以加 cold foam（冷奶泡）、調整糖漿泵數（one less pump、half sweet）、換 sugar-free vanilla、light ice（少冰）、extra shot（多一份濃縮）。"
    },
    {
      "t": "季節限定與 Pink Drink",
      "d": "每年秋天的 Pumpkin Spice Latte（南瓜香料拿鐵，常簡稱 PSL）一回歸就是新聞；春夏也有限定口味。Refreshers 加椰奶的 Pink Drink、Dragon Drink 是網路爆紅飲料，現在已經是常態菜單。"
    },
    {
      "t": "App、星星與取餐",
      "d": "很多美國人用 Starbucks App 先點好（Mobile Order & Pay），到店直接到 Mobile Order Pickup 區拿，杯子上寫名字。加入 Starbucks Rewards 每次消費可以集 stars 換免費飲料或餐點；生日當天常有優惠。"
    }
  ]
};
