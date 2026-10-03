// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "repair-request",
  "title": "報修：冷氣壞了",
  "en": "Home Repairs & AC",
  "emoji": "🔧",
  "goal": "夏天冷氣壓縮機故障、冷媒不足、技工開出分項估價單與考慮長遠換新冷氣。",
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
  ]
};
