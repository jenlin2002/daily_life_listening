// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "clothing-store",
  "title": "服飾店購物與結帳",
  "en": "Shopping & Retail",
  "emoji": "👗",
  "goal": "進店閒逛、找試衣間試穿洋裝、詢問米色款式、無袖/長裙版型與櫃台刷卡結帳。",
  "speakers": {
    "Y": {
      "name": "Me",
      "zh": "我",
      "avatar": "🙋‍♀️",
      "voice": "f"
    },
    "S": {
      "name": "Forever staff",
      "zh": "店員",
      "avatar": "👩",
      "voice": "f2"
    }
  },
  "dialogues": [
    {
      "title": "去Forever21買衣服",
      "where": "去Forever21買衣服",
      "emoji": "👗",
      "lines": [
        {
          "s": "S",
          "en": "Hi, welcome! Are you looking for anything specific today?",
          "zh": "嗨，歡迎光臨！今天有特別想找的東西嗎？"
        },
        {
          "s": "Y",
          "en": "No, I'm just browsing. Excuse me, where is the fitting room?",
          "zh": "沒有，我只是隨便看看。不好意思，請問試衣間在哪裡？"
        },
        {
          "s": "S",
          "en": "Straight down the hall way to the right.",
          "zh": "一直走過走廊，然後右轉。"
        },
        {
          "s": "Y",
          "en": "Excuse me, do you have this dress in a different color? I was hoping it comes in beige.",
          "zh": "不好意思，這件有其他顏色嗎？我真希望有米色的。"
        },
        {
          "s": "S",
          "en": "We're looking at a beige strapless midi dress with a satin texture. I'll bring it to the fitting room for you.",
          "zh": "我們看這款米色中長平肩緞面洋裝，我幫您送去試衣間。"
        },
        {
          "s": "Y",
          "en": "I'll take this one. Where is the register… Ah found it.",
          "zh": "我要這件。收銀台在哪裡……啊找到了。"
        },
        {
          "s": "S",
          "en": "Your total's gonna be $87.63 today. Cash or card? Did you need a bag?",
          "zh": "今天的總金額是87.63美元。你要付現還是刷卡？需要袋子嗎？"
        },
        {
          "s": "Y",
          "en": "Card, and yes please. Thanks, you as well!",
          "zh": "刷卡，要袋子，謝謝，祝您也有美好一天！"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "Are you looking for anything specific / particular today?",
      "zh": "你今天有特別想找什麼嗎？"
    },
    {
      "en": "Just browsing / looking.",
      "zh": "只是隨便看看。"
    },
    {
      "en": "Let me know if you need help with anything.",
      "zh": "如果需要幫忙隨時告訴我。"
    },
    {
      "en": "Where is the fitting room?",
      "zh": "請問試衣間在哪裡？"
    },
    {
      "en": "Straight down the hallway to the right.",
      "zh": "沿著走廊直走，在右邊。"
    },
    {
      "en": "I'll go try it on.",
      "zh": "我去試穿看看。"
    },
    {
      "en": "I was hoping it comes in beige.",
      "zh": "我真希望有米色的款式。"
    },
    {
      "en": "Do you have this dress in a different color?",
      "zh": "這件洋裝有其他顏色嗎？"
    },
    {
      "en": "I can help you with that.",
      "zh": "我可以幫你看看。"
    },
    {
      "en": "It is available online and in store.",
      "zh": "這款線上和門市都可以買到。"
    },
    {
      "en": "It comes in these colors.",
      "zh": "有這些顏色。"
    },
    {
      "en": "Are you looking for a going out dress or a (more) casual dress?",
      "zh": "妳是想找正式外出穿的洋裝還是比較休閒的洋裝？"
    },
    {
      "en": "Do you want a maxi dress like this one or midi or mini?",
      "zh": "你想要像這樣的長裙，還是中長裙或短裙？"
    },
    {
      "en": "Sleeveless, shortsleeves, longsleeves, strapless, or no preference?",
      "zh": "（袖子要）無袖、短袖、長袖、平肩還是沒特別偏好？"
    },
    {
      "en": "One is a sleeveless denim maxi with the buttons.",
      "zh": "第一件是無袖牛仔長裙，帶有鈕扣設計。"
    },
    {
      "en": "Where is the register? / Where do I check out / pay?",
      "zh": "收銀台在哪裡？"
    },
    {
      "en": "Are you a member with us?",
      "zh": "您是我們的會員嗎？"
    },
    {
      "en": "Your total's gonna be $87.63 today.",
      "zh": "今天的總金額是87.63美金。"
    },
    {
      "en": "Cash or card?",
      "zh": "你要支付現金還是刷卡？"
    },
    {
      "en": "When you're ready, it'll ask you a question on the screen.",
      "zh": "等您準備好後，螢幕上會有問題讓您回答。"
    },
    {
      "en": "Did you need a bag?",
      "zh": "需要袋子嗎？"
    },
    {
      "en": "Do you want a copy of your receipt? / Would you like a receipt?",
      "zh": "需要收據嗎？"
    }
  ]
};
