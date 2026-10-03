// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "renting-a-car",
  "title": "租車與客訴：輪胎壞了",
  "en": "Renting a Car & Complaints",
  "emoji": "🚗",
  "goal": "高速公路匝道前胎壓燈亮起，緊急致電租車客服尋求拖車救援、趕航班焦慮與賠償爭取。",
  "speakers": {
    "Y": {
      "name": "Me",
      "zh": "我",
      "avatar": "🙋‍♀️",
      "voice": "f"
    },
    "S": {
      "name": "Customer Service",
      "zh": "租車客服",
      "avatar": "👨",
      "voice": "m2"
    }
  },
  "dialogues": [
    {
      "title": "租車結果輪胎壞掉",
      "where": "租車結果輪胎壞掉",
      "emoji": "🚗",
      "lines": [
        {
          "s": "S",
          "en": "Elephant Car Rental support. How can I help you?",
          "zh": "這裡是租車客服，請問有什麼可以協助您的？"
        },
        {
          "s": "Y",
          "en": "The tire pressure light is on. I tried putting air but it's not working, and our flight leaves in 4 hours!",
          "zh": "胎壓燈亮了，打氣也沒用，而且我們4小時後班機要起飛！"
        },
        {
          "s": "S",
          "en": "The tow truck is on the way, arriving in 20 minutes. Where are you located?",
          "zh": "拖車已出發約20分鐘抵達。請問您的確切位置？"
        },
        {
          "s": "Y",
          "en": "Down the freeway ramp across from McDonald's. Can you compensate for our Uber or hotel?",
          "zh": "在高速匝道下麥當勞對面。你們可以補償我們叫Uber或住宿費嗎？"
        },
        {
          "s": "S",
          "en": "Unfortunately we cannot authorize that from support, but you can speak to the branch manager.",
          "zh": "很遺憾線上客服無法授權，但您可以向門市經理洽談。"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "Hello. How can I help you?",
      "zh": "喂，請問有什麼可以協助您的？"
    },
    {
      "en": "I'm calling because the tire pressure light has been on.",
      "zh": "我打電話是因為輪胎氣壓燈亮了。"
    },
    {
      "en": "I did try to put air in the tires.",
      "zh": "我有嘗試幫輪胎打氣。"
    },
    {
      "en": "I didn't want to risk it on a 2-hour freeway drive.",
      "zh": "我不想冒險開兩小時的高速公路。"
    },
    {
      "en": "Who am I speaking to?",
      "zh": "請問怎麼稱呼您？"
    },
    {
      "en": "I apologize for the inconvenience.",
      "zh": "很抱歉造成您的不便。"
    },
    {
      "en": "We will send someone to tow your car away.",
      "zh": "我們會派人去拖您的車。"
    },
    {
      "en": "Where are you located? We are right down the ramp of a freeway.",
      "zh": "您的位置在哪裡？我們就在高速公路出口匝道下方。"
    },
    {
      "en": "I see a McDonald's across the street.",
      "zh": "我看到對街有一家麥當勞。"
    },
    {
      "en": "The tow truck is on the way.",
      "zh": "拖車已經派遣過去了。"
    },
    {
      "en": "Our flight is taking off in 4 hours.",
      "zh": "我們的航班四個小時後就要起飛了。"
    },
    {
      "en": "We were cutting it close.",
      "zh": "我們時間已經很緊迫了。"
    },
    {
      "en": "Will the cost be compensated?",
      "zh": "你們會補償費用嗎？"
    },
    {
      "en": "What would you suggest?",
      "zh": "你建議怎麼做？"
    },
    {
      "en": "I might have to miss my flight.",
      "zh": "我可能會錯過我的航班。"
    },
    {
      "en": "You can talk to the branch manager.",
      "zh": "你可以和門市經理聯絡。"
    }
  ]
};
