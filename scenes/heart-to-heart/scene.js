// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "heart-to-heart",
  "title": "心靈對話：陪室友聊心事",
  "en": "Heart-to-Heart Talk",
  "emoji": "☕",
  "goal": "客廳深夜心靈傾訴、失戀療傷安慰、價值觀不合與「天涯何處無芳草」鼓勵。",
  "videos": [
    {
      "id": "HheqvK66QPk",
      "title": "English Conversation: Breakup & Relationship Talk (English With America)"
    },
    {
      "id": "j2BaAg8jUiM",
      "title": "How to Comfort a Friend Who Is Hurting – What to Say (How Communication Works)"
    },
    {
      "id": "frSClA4GUMM",
      "title": "6 Things to Say When Someone’s in Pain (Psych2Go)"
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
      "name": "Roommate Daisy",
      "zh": "室友 Daisy",
      "avatar": "👩",
      "voice": "f2"
    }
  },
  "dialogues": [
    {
      "title": "室友說想跟男友分手",
      "where": "室友說想跟男友分手",
      "emoji": "☕",
      "lines": [
        {
          "s": "Y",
          "en": "Hey Daisy! Why are you so quiet today? Is everything alright?",
          "zh": "嘿 Daisy！今天怎麼這麼安靜？還好嗎？"
        },
        {
          "s": "S",
          "en": "My boyfriend and I broke up. We were just not on the same page anymore.",
          "zh": "我和男友分手了。我們很多想法已經不在同一個頻率上了。"
        },
        {
          "s": "Y",
          "en": "Take your time to heal. Plus, there are plenty of fish in the sea! It's a blessing in disguise.",
          "zh": "慢慢療傷，天涯何處無芳草！有時候結束是化妝的祝福。"
        },
        {
          "s": "S",
          "en": "Thanks, girl! Maybe movie night tonight with popcorn?",
          "zh": "謝謝妳！今晚要不要吃爆米花看電影？"
        },
        {
          "s": "Y",
          "en": "I'll get the popcorn ready! You're the best!",
          "zh": "我來準備爆米花！妳最棒了！"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "Is everything alright?",
      "zh": "一切都還好嗎？"
    },
    {
      "en": "My boyfriend and I just broke up.",
      "zh": "我和我男朋友剛分手了。"
    },
    {
      "en": "I'm still processing everything too.",
      "zh": "我也還在沉澱這一切。"
    },
    {
      "en": "I'm sorry to hear that. / Take all the time you need.",
      "zh": "我很遺憾聽到這個消息 / 給自己足夠的時間修復。"
    },
    {
      "en": "We were not on the same page.",
      "zh": "我們在很多事情上都沒有共同的想法。"
    },
    {
      "en": "If you think it was the right thing to do, it's for the better.",
      "zh": "如果你認為這是正確的決定，這樣對未來比較好。"
    },
    {
      "en": "There are plenty of fish in the sea.",
      "zh": "天涯何處無芳草。（機會還很多）"
    },
    {
      "en": "Get out and mingle!",
      "zh": "出去和人交際吧！"
    },
    {
      "en": "The silver lining is that it gives you time to focus on yourself.",
      "zh": "好處是這讓你有時間專注在自己身上。"
    },
    {
      "en": "Sometimes endings are blessings in disguise.",
      "zh": "有時候結束其實是化妝的祝福。"
    },
    {
      "en": "She'll come out of it.",
      "zh": "她會走出來的。（從悲傷中恢復）"
    },
    {
      "en": "Is there anything I can do for you? Maybe movie night tonight?",
      "zh": "有什麼我可以幫忙的嗎？要不要今晚來個電影之夜？"
    }
  ],
  "hear": [
    {
      "en": "Hey, can we talk for a minute?",
      "zh": "嘿，我們可以聊一下嗎？",
      "reply": "Of course. What's going on?",
      "replyZh": "當然，怎麼了？"
    },
    {
      "en": "My boyfriend and I broke up.",
      "zh": "我和男朋友分手了。",
      "reply": "Oh no, I'm so sorry. Are you okay?",
      "replyZh": "喔不，我很遺憾。你還好嗎？"
    },
    {
      "en": "We just weren't on the same page anymore.",
      "zh": "我們已經想法不一致了。",
      "reply": "That sounds really hard.",
      "replyZh": "聽起來真的很難受。"
    },
    {
      "en": "I don't know what to do right now.",
      "zh": "我現在不知道該怎麼辦。",
      "reply": "Take your time. There's no rush.",
      "replyZh": "慢慢來，不用急。"
    },
    {
      "en": "I feel like I wasted so much time.",
      "zh": "我覺得我浪費了好多時間。",
      "reply": "You didn't. You learned a lot from it.",
      "replyZh": "沒有，你從中學到了很多。"
    },
    {
      "en": "Do you think I did the right thing?",
      "zh": "你覺得我這樣做對嗎？",
      "reply": "I think you did what was best for you.",
      "replyZh": "我覺得你做了對自己最好的選擇。"
    },
    {
      "en": "I just need someone to listen.",
      "zh": "我只是需要有人聽我說。",
      "reply": "I'm here for you. Take as long as you need.",
      "replyZh": "我在這裡陪你，想說多久都可以。"
    },
    {
      "en": "Thanks for being here for me.",
      "zh": "謝謝你在我身邊。",
      "reply": "Of course. That's what friends are for.",
      "replyZh": "應該的，朋友就是這樣。"
    },
    {
      "en": "Do you want to watch a movie tonight?",
      "zh": "今晚要不要看電影？",
      "reply": "Sure! I'll get the popcorn ready.",
      "replyZh": "好啊！我來準備爆米花。"
    },
    {
      "en": "You always know what to say.",
      "zh": "你總是知道該說什麼。",
      "reply": "Aw, you're the best, Daisy!",
      "replyZh": "哎呀，你才是最棒的，Daisy！"
    }
  ],
  "say": [
    {
      "en": "Is everything alright?",
      "zh": "一切都還好嗎？"
    },
    {
      "en": "I'm so sorry to hear that.",
      "zh": "聽到這個我很遺憾。"
    },
    {
      "en": "Take your time to heal.",
      "zh": "慢慢療傷，不用急。"
    },
    {
      "en": "There are plenty of fish in the sea.",
      "zh": "天涯何處無芳草。"
    },
    {
      "en": "It might be a blessing in disguise.",
      "zh": "這可能是因禍得福。"
    },
    {
      "en": "I'm here for you.",
      "zh": "我會陪著你。"
    },
    {
      "en": "Do you want to talk about it?",
      "zh": "你想聊聊嗎？"
    },
    {
      "en": "Let's watch a movie and get some popcorn.",
      "zh": "我們來看電影、吃爆米花吧。"
    }
  ],
  "vocab": [
    {
      "w": "break up",
      "pos": "phr. v.",
      "zh": "分手",
      "ex": "They broke up last week.",
      "exzh": "他們上週分手了。"
    },
    {
      "w": "on the same page",
      "pos": "phr.",
      "zh": "想法一致、有共識",
      "ex": "We're not on the same page.",
      "exzh": "我們的想法不一致。"
    },
    {
      "w": "heal",
      "pos": "v.",
      "zh": "療癒、痊癒",
      "ex": "It takes time to heal.",
      "exzh": "療傷需要時間。"
    },
    {
      "w": "blessing in disguise",
      "pos": "phr.",
      "zh": "因禍得福",
      "ex": "Losing that job was a blessing in disguise.",
      "exzh": "丟了那份工作反而是因禍得福。"
    },
    {
      "w": "plenty of fish in the sea",
      "pos": "phr.",
      "zh": "天涯何處無芳草",
      "ex": "Don't worry, there are plenty of fish in the sea.",
      "exzh": "別擔心，天涯何處無芳草。"
    },
    {
      "w": "be there for someone",
      "pos": "phr.",
      "zh": "陪在某人身邊支持他",
      "ex": "I'll be there for you.",
      "exzh": "我會陪著你。"
    },
    {
      "w": "vent",
      "pos": "v.",
      "zh": "發洩情緒、吐苦水",
      "ex": "You can vent to me anytime.",
      "exzh": "你隨時可以對我吐苦水。"
    },
    {
      "w": "move on",
      "pos": "phr. v.",
      "zh": "放下、往前走",
      "ex": "It's time to move on.",
      "exzh": "是時候往前走了。"
    },
    {
      "w": "cheer up",
      "pos": "phr. v.",
      "zh": "振作起來",
      "ex": "Cheer up! Let's get ice cream.",
      "exzh": "打起精神！我們去吃冰淇淋吧。"
    },
    {
      "w": "upset",
      "pos": "adj.",
      "zh": "難過的、心煩的",
      "ex": "She's really upset right now.",
      "exzh": "她現在真的很難過。"
    }
  ],
  "situations": [
    {
      "title": "😶 對方不想說話",
      "hear": {
        "en": "I don't really want to talk about it right now.",
        "zh": "我現在不太想談這件事。"
      },
      "say": [
        {
          "en": "That's okay. I'm here whenever you're ready.",
          "zh": "沒關係，你準備好時我隨時都在。"
        },
        {
          "en": "Do you want some tea or just some quiet time?",
          "zh": "你想喝杯茶，還是想要安靜一下？"
        }
      ],
      "tip": "不要逼對方說。陪伴與倒一杯茶，比一直問問題更能安慰人。"
    },
    {
      "title": "😵 對方哭著講話，你沒聽清楚",
      "hear": {
        "en": "He said he needed space and I just feel like I wasn't enough.",
        "zh": "（講得很快、帶著哭聲）他說他需要空間，我覺得我是不是不夠好。",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, I didn't catch that. Could you say it again?",
          "zh": "抱歉，我沒聽清楚，可以再說一次嗎？"
        },
        {
          "en": "You are enough. Don't ever think otherwise.",
          "zh": "你已經很好了，不要這樣想。"
        }
      ],
      "tip": "I didn't catch that 是「我沒聽清楚」，用在聊天很自然。"
    },
    {
      "title": "🤝 對方要你給意見",
      "hear": {
        "en": "What would you do if you were me?",
        "zh": "如果你是我，你會怎麼做？"
      },
      "say": [
        {
          "en": "I can't tell you what to do, but I'll support whatever you decide.",
          "zh": "我不能替你決定，但無論你決定怎麼做我都支持。"
        },
        {
          "en": "Maybe sleep on it and decide tomorrow.",
          "zh": "也許先睡一覺，明天再決定。"
        }
      ],
      "tip": "sleep on it 是「先想一晚再決定」。"
    },
    {
      "title": "🎬 想讓對方開心一點",
      "say": [
        {
          "en": "Let's order pizza and watch your favorite show.",
          "zh": "我們叫披薩、看你最愛的節目吧。"
        },
        {
          "en": "You deserve a break.",
          "zh": "你值得好好休息一下。"
        }
      ],
      "tip": "美國人安慰朋友常用 movie night、ice cream、take a walk。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "My boyfriend and I broke up.",
      "prompt": "Daisy 發生了什麼事？",
      "options": [
        "她和男朋友分手了",
        "她和男朋友吵架",
        "她和男朋友結婚了"
      ],
      "answer": 0,
      "note": "break up = 分手。"
    },
    {
      "type": "選擇回應",
      "audio": "I'm so upset right now.",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "That's great!",
        "I'm so sorry. Do you want to talk?",
        "Good for you."
      ],
      "answer": 1,
      "note": "朋友難過時要先表示關心。"
    },
    {
      "type": "聽懂意思",
      "audio": "We just weren't on the same page anymore.",
      "prompt": "她的意思是？",
      "options": [
        "兩個人住在同一頁",
        "她看書看到同一頁",
        "兩個人想法不一致了"
      ],
      "answer": 2,
      "note": "on the same page 是慣用語。"
    },
    {
      "type": "選擇回應",
      "audio": "Do you think I did the right thing?",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "I think you did what was best for you.",
        "Yes, it's the right thing.",
        "No, I don't think."
      ],
      "answer": 0,
      "note": "給予支持的回答，不指責。"
    },
    {
      "type": "聽懂意思",
      "audio": "There are plenty of fish in the sea.",
      "prompt": "這句話是什麼意思？",
      "options": [
        "海裡有很多魚",
        "天涯何處無芳草",
        "我們去吃魚"
      ],
      "answer": 1,
      "note": "plenty of fish in the sea 是安慰失戀的人。"
    },
    {
      "type": "對話理解",
      "audio": "I'm okay, I guess. I just need someone to listen right now. Can you stay with me tonight?",
      "prompt": "Daisy 需要什麼？",
      "options": [
        "有人替她決定",
        "有人借她錢",
        "有人陪她、聽她說"
      ],
      "answer": 2,
      "note": "I just need someone to listen = 我只是需要有人聽。"
    },
    {
      "type": "對話理解",
      "audio": "Thanks for the popcorn idea. I haven't laughed all day. Maybe it's a blessing in disguise.",
      "prompt": "Daisy 現在心情如何？",
      "options": [
        "好一點，笑得出來了",
        "更生氣",
        "想搬走"
      ],
      "answer": 0,
      "note": "a blessing in disguise = 因禍得福。"
    },
    {
      "type": "選擇回應",
      "audio": "Thanks for being here for me.",
      "prompt": "你最適合怎麼回答？",
      "options": [
        "You're welcome, I'm a friend.",
        "Of course. That's what friends are for.",
        "No, I'm busy."
      ],
      "answer": 1,
      "note": "That's what friends are for. = 朋友就是這樣。"
    }
  ],
  "roleplay": [
    {
      "prompt": "Hey, can we talk for a minute?",
      "promptZh": "嘿，可以聊一下嗎？",
      "hint": "表示願意聽",
      "expect": "of course|sure|yes|yeah|what'?s (up|going on)|everything|alright|okay|ok",
      "model": "Of course. What's going on?",
      "modelZh": "當然，怎麼了？"
    },
    {
      "prompt": "My boyfriend and I broke up.",
      "promptZh": "我和男朋友分手了。",
      "hint": "表示關心與遺憾",
      "expect": "sorry|sad|hear that|are you okay|are you alright|oh no",
      "model": "Oh no, I'm so sorry. Are you okay?",
      "modelZh": "喔不，我很遺憾，你還好嗎？"
    },
    {
      "prompt": "We just weren't on the same page anymore.",
      "promptZh": "我們已經想法不一致了。",
      "hint": "安慰她",
      "expect": "hard|difficult|sounds|understand|sorry|tough|heal|time",
      "model": "That sounds really hard. Take your time to heal.",
      "modelZh": "聽起來真的很難受，慢慢療傷。"
    },
    {
      "prompt": "I don't know what to do right now.",
      "promptZh": "我現在不知道該怎麼辦。",
      "hint": "說你會陪她",
      "expect": "here|with you|for you|support|listen|stay|alone",
      "model": "I'm here for you. You're not alone.",
      "modelZh": "我在這裡陪你，你不孤單。"
    },
    {
      "prompt": "Do you want to watch a movie tonight?",
      "promptZh": "今晚要看電影嗎？",
      "hint": "答應並提議爆米花",
      "expect": "sure|yes|yeah|love|popcorn|movie|snack|let'?s",
      "model": "Sure! I'll get the popcorn ready.",
      "modelZh": "好啊！我來準備爆米花。"
    },
    {
      "prompt": "Thanks for being here for me.",
      "promptZh": "謝謝你陪我。",
      "hint": "謝謝回禮",
      "expect": "of course|anytime|welcome|friends|always|here",
      "model": "Of course. That's what friends are for.",
      "modelZh": "應該的，朋友就是這樣。"
    }
  ],
  "culture": [
    {
      "t": "先傾聽，不要急著給建議",
      "d": "美國人安慰朋友時，常先說 That sounds really hard 或 I'm here for you，讓對方知道你在乎。不要一開始就說「你應該…」。"
    },
    {
      "t": "朋友之間的擁抱很普遍",
      "d": "感情失落時，朋友之間擁抱（hug）很自然。如果不確定可以問 Do you want a hug?。"
    },
    {
      "t": "慣用語讓安慰更自然",
      "d": "There are plenty of fish in the sea（天涯何處無芳草）、a blessing in disguise（因禍得福）是安慰失戀常用語，但要等對方情緒穩定一點再說。"
    },
    {
      "t": "不要比較痛苦",
      "d": "不要說「我以前比你更慘」。美國人比較常用 I've been there（我也經歷過），簡短說明，把焦點還給對方。"
    }
  ]
};
