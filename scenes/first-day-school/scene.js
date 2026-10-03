// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。
window.SCENE = {
  "slug": "first-day-school",
  "title": "新生報到與選課",
  "en": "First Day at School",
  "emoji": "🎓",
  "goal": "學會新生報到的流程、領學生證與帳號、向學術顧問說明主修與興趣、了解學分與先修課，以及加退選課程與詢問截止日期",
  "videos": [
    {
      "id": "Mc7EnS3hri0",
      "title": "Your first day at Kaplan | Studying With Kaplan（Kaplan International Languages）"
    },
    {
      "id": "VmT_MBRb-oE",
      "title": "What to Expect at College Orientation 🏫 ⏱📚（Get Schooled）"
    },
    {
      "id": "NXIem0v14x4",
      "title": "Introduce Yourself in English in School/College/University. Tips for Effective Self-Introduction（English Lessons with Ka"
    }
  ],
  "speakers": {
    "S": {
      "name": "Staff",
      "zh": "報到人員",
      "avatar": "👩‍💼",
      "voice": "f"
    },
    "Y": {
      "name": "You",
      "zh": "你",
      "avatar": "🙋‍♂️",
      "voice": "m"
    },
    "A": {
      "name": "Academic Advisor",
      "zh": "學術顧問",
      "avatar": "👨‍🏫",
      "voice": "m2"
    }
  },
  "answerSeconds": 8,
  "dialogues": [
    {
      "title": "新生報到：證件、學生證與帳號",
      "where": "新生報到的服務櫃台",
      "emoji": "🪪",
      "lines": [
        {
          "s": "S",
          "en": "Welcome to the university! Are you here to check in for orientation?",
          "zh": "歡迎來到大學！你是來參加新生說明會報到的嗎？"
        },
        {
          "s": "Y",
          "en": "Yes, I'm a new international student. My name is Branden Chen.",
          "zh": "是的，我是新來的留學生，我叫 Branden Chen。"
        },
        {
          "s": "S",
          "en": "Let me find you. Okay, I see you. Can I see your passport and your I-20?",
          "zh": "我找一下。好，找到你了。可以看你的護照和 I-20 嗎？"
        },
        {
          "s": "Y",
          "en": "Sure. Here they are.",
          "zh": "好，在這裡。"
        },
        {
          "s": "S",
          "en": "Thanks. You'll need to attend the international student session at two o'clock.",
          "zh": "謝謝。你需要參加下午兩點的國際學生說明會。"
        },
        {
          "s": "Y",
          "en": "Where is it held?",
          "zh": "在哪裡舉行？"
        },
        {
          "s": "S",
          "en": "In the student center, room two-oh-five. Here is your folder with a campus map.",
          "zh": "在學生中心 205 室。這是你的資料夾，裡面有校園地圖。"
        },
        {
          "s": "Y",
          "en": "Thank you. Also, when do I get my student ID card?",
          "zh": "謝謝。另外，我什麼時候可以拿到學生證？"
        },
        {
          "s": "S",
          "en": "You can get it today at the ID office, next to the library. Don't forget to bring a photo ID.",
          "zh": "你今天可以在圖書館旁的學生證辦公室領，記得帶附照片的證件。"
        },
        {
          "s": "Y",
          "en": "Great. And how do I set up my student email and Wi-Fi?",
          "zh": "太好了。那我要怎麼設定學生信箱和 Wi-Fi？"
        },
        {
          "s": "S",
          "en": "The instructions are in your folder. If you have trouble, the IT help desk is on the first floor.",
          "zh": "說明在資料夾裡，如果有問題，資訊服務台在一樓。"
        }
      ]
    },
    {
      "title": "和學術顧問討論選課",
      "where": "學術顧問的辦公室",
      "emoji": "📚",
      "lines": [
        {
          "s": "A",
          "en": "Hi Branden, come on in. Have a seat. So, tell me about yourself.",
          "zh": "嗨 Branden，請進，坐吧。跟我介紹一下你自己。"
        },
        {
          "s": "Y",
          "en": "Thanks. I'm a freshman, and I'm interested in studying computer science.",
          "zh": "謝謝。我是大一新生，我想念資訊工程。"
        },
        {
          "s": "A",
          "en": "Great. Let's look at your first semester. You need at least twelve credits to be a full-time student.",
          "zh": "很好，我們來看你第一學期的課。你至少需要十二學分，才算全職學生。"
        },
        {
          "s": "Y",
          "en": "How many credits is a typical course?",
          "zh": "一般一門課是幾學分？"
        },
        {
          "s": "A",
          "en": "Most courses are three credits. So four courses is twelve credits.",
          "zh": "多數課是三學分，所以四門課是十二學分。"
        },
        {
          "s": "Y",
          "en": "Which courses should I take first?",
          "zh": "我應該先修哪些課？"
        },
        {
          "s": "A",
          "en": "I recommend Intro to Programming, Calculus One, English Composition, and one elective.",
          "zh": "我建議修程式設計入門、微積分一、英文寫作，再加一門選修。"
        },
        {
          "s": "Y",
          "en": "Do I need any prerequisites for Calculus One?",
          "zh": "微積分一需要先修課嗎？"
        },
        {
          "s": "A",
          "en": "You'll need to pass the placement test. You can take it online this week.",
          "zh": "你需要通過分級測驗，這週可以在網路上考。"
        },
        {
          "s": "Y",
          "en": "Okay. What if a class is full?",
          "zh": "好的。如果課程額滿了怎麼辦？"
        },
        {
          "s": "A",
          "en": "You can join the waitlist, or email the professor for permission to add the class.",
          "zh": "你可以排候補，或是寫信給教授請求加簽。"
        }
      ]
    },
    {
      "title": "加退選與校園生活",
      "where": "註冊組與校園各處",
      "emoji": "🗓️",
      "lines": [
        {
          "s": "Y",
          "en": "Hi, I'd like to add a class and drop another one. How do I do that?",
          "zh": "嗨，我想加選一門課，退掉另一門，要怎麼辦？"
        },
        {
          "s": "S",
          "en": "You can do it online in your student portal. When is your deadline?",
          "zh": "你可以在學生入口網站線上辦理。你的截止日期是什麼時候？"
        },
        {
          "s": "Y",
          "en": "I think it's the end of this week. Is that right?",
          "zh": "我想是這週末，對嗎？"
        },
        {
          "s": "S",
          "en": "Yes, the add/drop deadline is Friday at five p.m. After that, you'll have to withdraw and get a W on your transcript.",
          "zh": "對，加退選截止是週五下午五點。之後你就只能退選，成績單上會顯示 W。"
        },
        {
          "s": "Y",
          "en": "Got it. Do I need my advisor's signature?",
          "zh": "了解。我需要顧問簽名嗎？"
        },
        {
          "s": "S",
          "en": "For adding a class after the deadline, yes. Before the deadline, no.",
          "zh": "截止日期之後加選需要，截止之前不需要。"
        },
        {
          "s": "Y",
          "en": "Thanks. Also, where can I buy my textbooks?",
          "zh": "謝謝。另外，我要去哪裡買教科書？"
        },
        {
          "s": "S",
          "en": "You can buy them at the campus bookstore or rent them online. Check the course syllabus first.",
          "zh": "你可以在校內書店買，或在網路上租。請先看課程大綱。"
        },
        {
          "s": "Y",
          "en": "Great. Thanks so much for your help!",
          "zh": "太好了，非常謝謝你的幫忙！"
        }
      ]
    }
  ],
  "phrases": [
    {
      "en": "I'm here to check in for orientation.",
      "zh": "我來參加新生說明會報到。"
    },
    {
      "en": "I'm a new international student.",
      "zh": "我是新來的留學生。"
    },
    {
      "en": "Where do I get my student ID card?",
      "zh": "我在哪裡領學生證？"
    },
    {
      "en": "How do I set up my student email?",
      "zh": "我要怎麼設定學生信箱？"
    },
    {
      "en": "Where is the international student office?",
      "zh": "國際學生辦公室在哪裡？"
    },
    {
      "en": "I'd like to talk to an academic advisor.",
      "zh": "我想和學術顧問談一談。"
    },
    {
      "en": "I'm interested in studying computer science.",
      "zh": "我想念資訊工程。"
    },
    {
      "en": "How many credits do I need this semester?",
      "zh": "這學期我需要修幾學分？"
    },
    {
      "en": "Which courses do you recommend for freshmen?",
      "zh": "你推薦大一新生修哪些課？"
    },
    {
      "en": "Does this course have any prerequisites?",
      "zh": "這門課有先修課程嗎？"
    },
    {
      "en": "What if the class is full?",
      "zh": "如果課程額滿了怎麼辦？"
    },
    {
      "en": "Can I join the waitlist?",
      "zh": "我可以排候補嗎？"
    },
    {
      "en": "I'd like to add this class.",
      "zh": "我想加選這門課。"
    },
    {
      "en": "I'd like to drop this class.",
      "zh": "我想退選這門課。"
    },
    {
      "en": "When is the add/drop deadline?",
      "zh": "加退選的截止日是什麼時候？"
    },
    {
      "en": "Do I need the professor's permission?",
      "zh": "我需要教授同意嗎？"
    },
    {
      "en": "Where can I buy the textbooks?",
      "zh": "我在哪裡買教科書？"
    },
    {
      "en": "Where can I find the course syllabus?",
      "zh": "我在哪裡找課程大綱？"
    },
    {
      "en": "How do I log in to the student portal?",
      "zh": "我要怎麼登入學生入口網站？"
    },
    {
      "en": "Where is the IT help desk?",
      "zh": "資訊服務台在哪裡？"
    }
  ],
  "hear": [
    {
      "en": "Are you here to check in for orientation?",
      "zh": "你是來參加新生說明會報到的嗎？",
      "reply": "Yes, I'm a new international student.",
      "replyZh": "是的，我是新來的留學生。"
    },
    {
      "en": "Can I see your passport and your I-20?",
      "zh": "可以看你的護照和 I-20 嗎？",
      "reply": "Sure. Here they are.",
      "replyZh": "好，在這裡。"
    },
    {
      "en": "What's your student ID number?",
      "zh": "你的學號是多少？",
      "reply": "I don't have one yet. I'm picking up my ID card today.",
      "replyZh": "我還沒有，我今天要去領學生證。"
    },
    {
      "en": "What are you planning to major in?",
      "zh": "你打算主修什麼？",
      "reply": "I'm planning to study computer science.",
      "replyZh": "我打算念資訊工程。"
    },
    {
      "en": "You need at least twelve credits to be full-time.",
      "zh": "你至少需要十二學分才算全職學生。",
      "reply": "How many courses is that?",
      "replyZh": "那是幾門課？"
    },
    {
      "en": "You'll need to take the placement test first.",
      "zh": "你需要先參加分級測驗。",
      "reply": "Where can I take it?",
      "replyZh": "我可以在哪裡考？"
    },
    {
      "en": "That class is full. Would you like to join the waitlist?",
      "zh": "那門課額滿了，你要排候補嗎？",
      "reply": "Yes, please.",
      "replyZh": "好，麻煩你。"
    },
    {
      "en": "The add/drop deadline is Friday at five.",
      "zh": "加退選截止日是週五下午五點。",
      "reply": "Got it. Thanks for letting me know.",
      "replyZh": "了解，謝謝你告訴我。"
    },
    {
      "en": "You need your advisor's signature for that.",
      "zh": "那個需要你的顧問簽名。",
      "reply": "Okay. Is he available today?",
      "replyZh": "好，他今天有空嗎？"
    },
    {
      "en": "Do you have any other questions?",
      "zh": "你還有其他問題嗎？",
      "reply": "No, that's all. Thanks!",
      "replyZh": "沒有了，謝謝！"
    }
  ],
  "say": [
    {
      "en": "Hi, I'm here for the new student orientation.",
      "zh": "嗨，我來參加新生說明會。"
    },
    {
      "en": "Could you tell me where room 205 is?",
      "zh": "可以告訴我 205 室在哪裡嗎？"
    },
    {
      "en": "I haven't received my student email yet.",
      "zh": "我還沒收到學生信箱的信。"
    },
    {
      "en": "I'd like to register for four courses this semester.",
      "zh": "我這學期想註冊四門課。"
    },
    {
      "en": "I'm not sure which classes to take. Could you help me?",
      "zh": "我不確定該修哪些課，可以幫我嗎？"
    },
    {
      "en": "Can I take this class without the prerequisite?",
      "zh": "我可以不修先修課就上這門課嗎？"
    },
    {
      "en": "Is there a way to get into this class?",
      "zh": "有辦法加簽這門課嗎？"
    },
    {
      "en": "How do I add a class after the deadline?",
      "zh": "截止後我要怎麼加選？"
    },
    {
      "en": "Could you write that down for me?",
      "zh": "可以幫我寫下來嗎？"
    },
    {
      "en": "Sorry, could you say that again?",
      "zh": "不好意思，可以再說一次嗎？"
    }
  ],
  "vocab": [
    {
      "w": "orientation",
      "pos": "n.",
      "zh": "新生說明會",
      "ex": "Orientation starts at nine.",
      "exzh": "新生說明會九點開始。"
    },
    {
      "w": "student ID",
      "pos": "n.",
      "zh": "學生證",
      "ex": "You need your student ID to enter the library.",
      "exzh": "你需要學生證才能進圖書館。"
    },
    {
      "w": "academic advisor",
      "pos": "n.",
      "zh": "學術顧問",
      "ex": "I met with my academic advisor.",
      "exzh": "我和我的學術顧問見面了。"
    },
    {
      "w": "major",
      "pos": "n./v.",
      "zh": "主修",
      "ex": "My major is computer science.",
      "exzh": "我的主修是資訊工程。"
    },
    {
      "w": "credit",
      "pos": "n.",
      "zh": "學分",
      "ex": "This course is three credits.",
      "exzh": "這門課是三學分。"
    },
    {
      "w": "prerequisite",
      "pos": "n.",
      "zh": "先修課程",
      "ex": "Calculus One is a prerequisite.",
      "exzh": "微積分一是先修課。"
    },
    {
      "w": "elective",
      "pos": "n.",
      "zh": "選修課",
      "ex": "I'm taking an art elective.",
      "exzh": "我選修了一門藝術課。"
    },
    {
      "w": "waitlist",
      "pos": "n.",
      "zh": "候補名單",
      "ex": "I'm on the waitlist for that class.",
      "exzh": "我在那門課的候補名單上。"
    },
    {
      "w": "add/drop",
      "pos": "n.",
      "zh": "加退選",
      "ex": "The add/drop period ends Friday.",
      "exzh": "加退選期間到週五結束。"
    },
    {
      "w": "syllabus",
      "pos": "n.",
      "zh": "課程大綱",
      "ex": "Read the syllabus carefully.",
      "exzh": "請仔細閱讀課程大綱。"
    },
    {
      "w": "semester",
      "pos": "n.",
      "zh": "學期",
      "ex": "This semester is busy.",
      "exzh": "這學期很忙。"
    },
    {
      "w": "transcript",
      "pos": "n.",
      "zh": "成績單",
      "ex": "Your transcript shows all your grades.",
      "exzh": "你的成績單顯示所有成績。"
    }
  ],
  "situations": [
    {
      "title": "😵 顧問講很快、用很多縮寫",
      "hear": {
        "en": "You need to meet the gen ed requirements, so take two core classes and an elective, and check the prereqs in the portal.",
        "zh": "（講得很快）你要滿足通識要求，所以修兩門核心課和一門選修，並在入口網站查先修課。",
        "fast": true
      },
      "say": [
        {
          "en": "Sorry, what does \"gen ed\" mean?",
          "zh": "抱歉，「gen ed」是什麼意思？"
        },
        {
          "en": "Could you write down which classes I should take?",
          "zh": "可以幫我寫下我該修哪些課嗎？"
        }
      ],
      "tip": "大學裡有很多縮寫：gen ed（通識）、prereq（先修課）、GPA（平均成績）。聽不懂就直接問意思，顧問很習慣回答。"
    },
    {
      "title": "🚫 想修的課額滿了",
      "hear": {
        "en": "I'm sorry, that section is full.",
        "zh": "抱歉，那個班已經額滿了。"
      },
      "say": [
        {
          "en": "Could I join the waitlist?",
          "zh": "我可以排候補嗎？"
        },
        {
          "en": "Is there another section I can take?",
          "zh": "有別的班可以上嗎？"
        }
      ],
      "tip": "額滿時可以排候補（waitlist），開學第一週常常有人退選，名額就會空出來。也可以寫信給教授請求加簽（permission number）。"
    },
    {
      "title": "📅 錯過加退選",
      "hear": {
        "en": "The add/drop deadline passed on Friday.",
        "zh": "加退選截止日已經在週五過了。"
      },
      "say": [
        {
          "en": "I didn't know about the deadline. Is there any way to add the class?",
          "zh": "我不知道有截止日，有辦法加選嗎？"
        },
        {
          "en": "Could I speak with my advisor about this?",
          "zh": "我可以和我的顧問談談這件事嗎？"
        }
      ],
      "tip": "過了截止日只能「退選」（withdraw），成績單上會有 W。真有特殊原因可以向學術顧問或註冊組提出申請。"
    },
    {
      "title": "📧 收不到學校的信件",
      "say": [
        {
          "en": "I'm not receiving emails from the university. Could you check my email account?",
          "zh": "我收不到學校的信，可以幫我確認信箱嗎？"
        },
        {
          "en": "I forgot my password. How do I reset it?",
          "zh": "我忘記密碼了，要怎麼重設？"
        }
      ],
      "tip": "學校重要通知（選課、繳費、簽證）都寄到學生信箱，要常常檢查。有問題直接找資訊服務台（IT help desk）。"
    },
    {
      "title": "🌏 有關簽證與全職學生",
      "hear": {
        "en": "International students must stay full-time.",
        "zh": "國際學生必須維持全職學生身分。"
      },
      "say": [
        {
          "en": "Does my visa require me to take twelve credits?",
          "zh": "我的簽證要求我修十二學分嗎？"
        },
        {
          "en": "Who can I talk to about dropping below full-time?",
          "zh": "如果我想少修課程，要找誰談？"
        }
      ],
      "tip": "留學生（F-1）通常必須修滿全職學分，不能隨意退選。要退選之前，一定要先找國際學生辦公室（ISO）確認。"
    }
  ],
  "listening": [
    {
      "type": "聽懂意思",
      "audio": "Are you here to check in for orientation?",
      "prompt": "工作人員在問什麼？",
      "options": [
        "你是不是來參加新生說明會報到",
        "你想註冊哪幾門課",
        "你住哪一間宿舍"
      ],
      "answer": 0,
      "note": "orientation 是新生說明會，check in 是報到。"
    },
    {
      "type": "選擇回應",
      "audio": "What are you planning to major in?",
      "prompt": "你要念資訊工程，最適合怎麼回答？",
      "options": [
        "I'm planning to study computer science.",
        "I'm a new student.",
        "I need twelve credits."
      ],
      "answer": 0,
      "note": "major in… 是主修……。"
    },
    {
      "type": "聽數字",
      "audio": "You need at least twelve credits to be a full-time student.",
      "prompt": "全職學生至少需要幾學分？",
      "options": [
        "12 學分",
        "20 學分",
        "2 學分"
      ],
      "answer": 0,
      "note": "twelve 是 12，twenty 是 20。"
    },
    {
      "type": "聽懂意思",
      "audio": "You'll need to take the placement test first.",
      "prompt": "要先做什麼？",
      "options": [
        "參加分級測驗",
        "繳學費",
        "找教授簽名"
      ],
      "answer": 0,
      "note": "placement test 是分級測驗。"
    },
    {
      "type": "選擇回應",
      "audio": "That class is full. Would you like to join the waitlist?",
      "prompt": "你想排候補，最適合怎麼回答？",
      "options": [
        "Yes, please.",
        "No, it's three credits.",
        "It's on Friday."
      ],
      "answer": 0,
      "note": "waitlist 是候補名單。"
    },
    {
      "type": "聽懂意思",
      "audio": "The add/drop deadline is Friday at five p.m.",
      "prompt": "加退選什麼時候截止？",
      "options": [
        "週五下午五點",
        "週五早上五點",
        "週末"
      ],
      "answer": 0,
      "note": "p.m. 是下午。"
    },
    {
      "type": "聽懂意思",
      "audio": "After the deadline, you'll have to withdraw and get a W on your transcript.",
      "prompt": "截止後退選會怎樣？",
      "options": [
        "成績單上會有 W",
        "不會留下紀錄",
        "退還全部學費"
      ],
      "answer": 0,
      "note": "W 代表 withdraw，是退選紀錄，不影響 GPA 但會顯示在成績單。"
    },
    {
      "type": "選擇回應",
      "audio": "Do you have any other questions?",
      "prompt": "你沒有問題了，最適合怎麼回答？",
      "options": [
        "No, that's all. Thanks!",
        "Yes, it's full.",
        "I'm a freshman."
      ],
      "answer": 0,
      "note": "that's all 是這樣就好了。"
    },
    {
      "type": "對話理解",
      "audio": "Hi, I'm a new international student. I'm here to check in for orientation. Here are my passport and I-20.",
      "prompt": "這個人在做什麼？",
      "options": [
        "新生報到並出示證件",
        "領教科書",
        "退選課程"
      ],
      "answer": 0,
      "note": "I-20 是留學生的入學證明。",
      "speaker": "Y"
    },
    {
      "type": "對話理解",
      "audio": "I'd like to add one class and drop another before the deadline. Do I need my advisor's signature?",
      "prompt": "學生想知道什麼？",
      "options": [
        "截止前加退選要不要顧問簽名",
        "教科書在哪買",
        "宿舍什麼時候開放"
      ],
      "answer": 0,
      "note": "signature 是簽名。",
      "speaker": "Y"
    }
  ],
  "roleplay": [
    {
      "prompt": "Welcome to the university! Are you here to check in for orientation?",
      "promptZh": "歡迎來到大學！你是來參加新生說明會報到的嗎？",
      "hint": "說是的，並說你是留學生",
      "expect": "yes|yeah|check in|orientation|new|international|student",
      "model": "Yes, I'm a new international student.",
      "modelZh": "是的，我是新來的留學生。"
    },
    {
      "prompt": "Can I see your passport and your I-20?",
      "promptZh": "可以看你的護照和 I-20 嗎？",
      "hint": "遞上文件",
      "expect": "sure|here|passport|i-?20|okay|of course",
      "model": "Sure. Here they are.",
      "modelZh": "好，在這裡。"
    },
    {
      "prompt": "Do you have any questions about the student ID or email?",
      "promptZh": "關於學生證或信箱你有問題嗎？",
      "hint": "問在哪裡領學生證",
      "expect": "where|how|when|id|email|card|set up|get",
      "model": "Yes. Where do I get my student ID card?",
      "modelZh": "有，我在哪裡領學生證？"
    },
    {
      "prompt": "What are you planning to major in?",
      "promptZh": "你打算主修什麼？",
      "hint": "說主修",
      "expect": "study|major|computer|business|engineering|biology|interested|science|art|plan",
      "model": "I'm planning to study computer science.",
      "modelZh": "我打算念資訊工程。"
    },
    {
      "prompt": "You need at least twelve credits to be full-time.",
      "promptZh": "你至少需要十二學分才是全職。",
      "hint": "問一般一門課幾學分",
      "expect": "how many|credits|course|class|three|typical|each",
      "model": "How many credits is a typical course?",
      "modelZh": "一般一門課是幾學分？"
    },
    {
      "prompt": "That class is full. Would you like to join the waitlist?",
      "promptZh": "那門課額滿了，你要排候補嗎？",
      "hint": "說要，或問別的班",
      "expect": "yes|yeah|please|waitlist|another|other section|sure",
      "model": "Yes, please. Is there another section I can take?",
      "modelZh": "好，麻煩你。有別的班可以上嗎？"
    },
    {
      "prompt": "The add/drop deadline is Friday at five.",
      "promptZh": "加退選截止日是週五下午五點。",
      "hint": "確認並道謝",
      "expect": "friday|five|got it|okay|ok|thanks|thank|deadline",
      "model": "Friday at five. Got it. Thank you!",
      "modelZh": "週五五點，了解，謝謝！"
    },
    {
      "prompt": "Do you have any other questions?",
      "promptZh": "你還有其他問題嗎？",
      "hint": "說沒有並道謝",
      "expect": "no|that'?s (all|it)|thank|thanks|nothing",
      "model": "No, that's all. Thanks so much for your help!",
      "modelZh": "沒有了，非常謝謝你的幫忙！"
    }
  ],
  "culture": [
    {
      "t": "新生說明會（Orientation）很重要",
      "d": "開學前通常有新生說明會，介紹校園、選課、學生證、圖書館與生活資訊。留學生還會有國際學生專場，講簽證、保險與工作規定。"
    },
    {
      "t": "學分與全職學生",
      "d": "大部分課程是 3 學分，全職學生一學期至少 12 學分（大學部），最多約 18 學分。留學生簽證（F-1）通常要求維持全職，不能自己隨意退課。"
    },
    {
      "t": "學術顧問幫你規劃",
      "d": "每位新生都有學術顧問（academic advisor），幫你選課、規劃主修與畢業進度。每學期選課前先約顧問談一談，通常不需要預約很久，用 email 就可以。"
    },
    {
      "t": "加退選與 W",
      "d": "開學前兩週通常可以自由加退選，之後退課會在成績單留下 W（withdraw）。額滿的課可以排候補，或寫信給教授請求加簽。重要日期寫在學校的 Academic Calendar。"
    },
    {
      "t": "學生信箱與入口網站",
      "d": "學校重要通知都寄到學生信箱，要常常檢查。選課、繳費、成績、課程大綱都在學生入口網站（student portal）。有問題找資訊服務台（IT help desk）。"
    }
  ]
};
