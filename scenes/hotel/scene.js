// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "hotel",
  "title": "機場入境與飯店入住",
  "en": "Travel & Accommodation",
  "emoji": "✈️",
  "goal": "入境海關問答（目的、天數、住處地址、現金）、飯店櫃台辦理入住、海景套房升級與房卡。",
  "videos": [
    {
      "id": "wyqfYJX23lg",
      "title": "English for Hotel and Tourism: Checking into a Hotel (LinguaTV)"
    },
    {
      "id": "qtC5Rv39IPo",
      "title": "How to Check In at a Hotel in English (Jon Peng English)"
    },
    {
      "id": "MYX7RVOf3Yc",
      "title": "Let’s Learn English at a Hotel! (Learn English with Bob the Canadian)"
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
      "name": "Custom",
      "zh": "海關官員",
      "avatar": "👨",
      "voice": "m2"
    },
    "S2": {
      "name": "Hotel front desk",
      "zh": "櫃台經理",
      "avatar": "👩",
      "voice": "f2"
    }
  },
  "dialogues": [
    {
      "title": "第一次到洛杉磯機場＋旅館 check in",
      "where": "第一次到洛杉磯機場＋旅館 check in",
      "emoji": "✈️",
      "lines": [
        {
          "s": "S",
          "en": "What are you here for? Where are you staying?",
          "zh": "你來這裡的目的是什麼？你要住在哪裡？"
        },
        {
          "s": "Y",
          "en": "I'm here for a vacation. I'm staying at a hotel for two nights then staying with my old coworker.",
          "zh": "我來這裡度假，我會先住兩晚酒店，然後住老同事家。"
        },
        {
          "s": "S",
          "en": "How much money are you bringing in cash? And what is your profession?",
          "zh": "你帶了多少現金？您的職業是什麼？"
        },
        {
          "s": "Y",
          "en": "A little under $2,000. I am a marketing manager for a tech company.",
          "zh": "不到2000美元。我是科技公司的行銷主管。"
        },
        {
          "s": "S2",
          "en": "Hi, checking in? So I upgraded you to an ocean view suite on the 33rd floor with a Jacuzzi!",
          "zh": "您好，辦理入住嗎？我幫您升級到33樓帶按摩浴缸的海景套房！"
        },
        {
          "s": "Y",
          "en": "Oh, awesome! Two key cards please, and what time does the gym close?",
          "zh": "太棒了！請給我兩張房卡，還有健身房幾點關閉？"
        },
        {
          "s": "S2",
          "en": "It opens daily from 6 in the morning til midnight. Enjoy your vacation!",
          "zh": "每天早上6點到午夜12點開放。祝您旅途愉快！"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "What are you here for?",
      "zh": "你來這裡的目的是什麼？"
    },
    {
      "en": "I'm here for a vacation.",
      "zh": "我來這裡渡假。"
    },
    {
      "en": "Where are you staying?",
      "zh": "你要住在哪裡？"
    },
    {
      "en": "I'm staying at a hotel for two nights then staying with my old coworker.",
      "zh": "我會先住兩晚飯店，然後住在我的老同事家。"
    },
    {
      "en": "The address of the hotel is 216 Los Angeles Blvd.",
      "zh": "飯店的地址是洛杉磯大道216號。"
    },
    {
      "en": "How long do you plan to stay here?",
      "zh": "你預計在這裡待多久？"
    },
    {
      "en": "In total 32 days.",
      "zh": "總共32天。"
    },
    {
      "en": "How much money are you bringing in cash?",
      "zh": "你帶了多少現金？"
    },
    {
      "en": "A little under $2,000.",
      "zh": "不到 2,000 美金。"
    },
    {
      "en": "No need to declare it.",
      "zh": "不需要申報。"
    },
    {
      "en": "What is your profession?",
      "zh": "你的職業是什麼？"
    },
    {
      "en": "I am a marketing manager for a tech company.",
      "zh": "我是科技公司的行銷主管。"
    },
    {
      "en": "You're all set!",
      "zh": "都好了！"
    },
    {
      "en": "Can I see the credit card that you used for your reservation?",
      "zh": "我可以看一下您用來預訂的信用卡嗎？"
    },
    {
      "en": "I was wondering if you have any suite upgrades available today?",
      "zh": "我想問一下今天有套房升級的選項嗎？"
    },
    {
      "en": "I upgraded you to an ocean view suite on the 33rd floor with a Jacuzzi.",
      "zh": "我已經幫您升級到33樓有按摩浴缸的海景套房。"
    },
    {
      "en": "Did you need one or two key cards?",
      "zh": "你需要一張還是兩張房卡？"
    },
    {
      "en": "What time does it open and close?",
      "zh": "它幾點開放和關閉？（營業時間）"
    },
    {
      "en": "There is a $20 per day resort fee.",
      "zh": "每天有20美金的度假村費用。"
    },
    {
      "en": "Enjoy your vacation!",
      "zh": "祝您旅途愉快！"
    }
  ]
};
