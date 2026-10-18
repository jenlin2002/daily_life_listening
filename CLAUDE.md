# 美式生活館（daily_life_listening）工作紀錄與說明

這個檔案是給「下一次接手的人」看的（在家裡電腦開 Claude Code 時，Claude 會自動讀這個檔案）。
最後更新：2026-10-03。詳細的擴充方法在 `README.md`。

## 使用者與工作方式（四個 repo 共用同一段，2026-10-13）

- 使用者在三個地方用 Claude Code：**家裡電腦、公司電腦**（兩台都有 GitHub Desktop，用它 Pull／Push）、**外出用手機 App（雲端版）**。學習成長網站已經做很久了，不用從頭介紹。
- **不用教 git／GitHub Desktop／PowerShell 的操作。** 改完直接開 PR 合併到 `main`（使用者另一台電腦用 GitHub Desktop Pull 就好），只要回報「改了什麼、合併到哪裡」。
- 一律用**繁體中文**回覆。
- **每次結束前**：把這次做的事、待辦更新到這個 CLAUDE.md，合併到 `main`，下一個地方 Pull 後就接得上。
- 學習網站的 repo（都在 jenlin2002 底下，GitHub Pages 從 `main` 發布）：
  `jenlin2002.github.io`（網站首頁＝成長學習館總入口、點數存摺、B&M 學習 App）、`english-quiz`（英文測驗系統）、
  `daily_life_listening`（美式生活館）、`vocab-king`（圖解單字）、`nat-geo-reading`（國家地理風閱讀）、`exam-bank`（段考題庫）。
  雲端版只讀得到這次有載入的 repo；要改的 repo 沒載入時，直接用 add_repo 加進來。
- 股票（`stock`、`stock-dashboard`）和學習網站分開，學習網站裡不要放股票相關的東西。

## 這是什麼

美式生活館：生活實況英語。網址 jenlin2002.github.io/daily_life_listening/ ，從網站首頁（jenlin2002.github.io）進入。
英文測驗系統（english-quiz repo）裡**不要**放美式生活館的連結（使用者要求）。
學習者主要是 Branden 和 Melissa（國高中生）。每個頁面先過 points.js 的 PIN 關卡；訪客模式目前關閉。

## 架構（2026-10-03 改版，PR #1 已合併）

- **`index.html`：美式生活館的主畫面（2026-10-03 起）**＝分冊的單元版：冊別、生活區、單元列、各分頁；網站首頁的「美式生活館」卡片直接連到這裡。
  選單是兩層連動：① 冊別（含「全部冊別」）→ ② 生活區（8 區固定排列，該冊沒有的區變淡不能點；換冊時若目前的生活區在新冊裡沒有，自動回「全部」），
  單元列顯示兩者的交集。資料來自 `units-list.js`（冊別→單元）和 `catalog.js`。
  場景頁（`scenes/<slug>/`，主畫面各分頁底下的「完整版」連結進去）上下各有「⬅ 返回單元列表」，網址是 `index.html#s=<slug>`，
  主畫面會直接開到那個單元；另有「🔎 全部場景卡片」回 `catalog.html`。舊的 44 張卡片目錄改名為 `catalog.html`（主畫面上有連結）；`units.html` 只是轉址到 `index.html`。
- `catalog.js`：**所有生活區與場景的清單**。新增場景、生活區、標籤、季別都改這裡。
- `scenes/<slug>/`：一個場景一個資料夾（`index.html` 固定內容、`scene.js` 場景內容、`audio/` 語音）。
- `engine.js`、`life.css`：所有場景共用的頁面程式與樣式。分頁依場景內容自動出現：
  情境影片、句子矩陣、你會聽到的、你要說的、場景單字、突發狀況、聽寫練習、聽力測驗、即時回應（麥克風）、文化小提醒。
- 語音檔名由「聲音代碼|語速|句子」算出（engine.js `audioKey()` 和 tools/common.py `audio_key()` 必須一致）。
- `tools/`：`new_scene.py`（建場景）、`check_scenes.py`（檢查資料）、`make_audio.py`（補產生語音，用 Kokoro TTS）。
- `classic.html`：改版前的舊版頁面，保留參考。
- **單元版的擴充方式（可分冊，冊數與單元數不限）**：`units-list.js` 是「冊別 → 單元」兩層。
  新增單元：場景照 README.md 做好後，在 `units-list.js` 某一冊的 `units` 最後加 `{ slug: '場景資料夾名稱' }`，其他欄位可省略
  （標題、英文名、說明會用 catalog.js／scene.js 的）。新增一冊：複製整個冊別區塊、換 `id` 與 `name`。畫面會自動出現冊別按鈕，
  Unit 編號是該冊的順序；單元太多可按「展開全部單元」。忘了編進冊別的 ready 場景會自動出現在最後一冊「更多場景」。
  網址 `index.html#b=冊別&u=第幾單元`（舊的 `units.html#...` 會自動轉過來）。已用 10 冊（每冊 22–30 單元）測試過。
- `index.html` ＋ `units-list.js`：**單元版（原本叫 units.html，2026-10-03 家裡電腦做，現在是主畫面）**。版面沿用舊版（標題區、Unit 1–16 橫向捲動列、
  高頻句矩陣／真實情境課文／聽力默寫三個分頁、語速與遮蔽英文／中文按鈕），內容區改用新版的奶油底卡片（life.css）。
  點單元只換內容不換頁；網址可用 `units.html#u=3` 直達。資料不重複存：`units-list.js` 對應單元到場景，
  句子、對話、語音都讀 `scenes/<slug>/`。練習進度（背完標記）和聽寫成績與場景頁共用同一份紀錄。
  單元對應：1 party、2 roommates、3 fast-food、4 clothing-store、5 repair-request、6 hotel、7 seeing-a-doctor、
  8 renting-a-car、9 small-talk、10 heart-to-heart、11 blind-date、12 invitations、13 job-interview、14 coworkers、
  15 news-chat、16 values-talk。
  前三個分頁固定；場景的 scene.js 有影片、你會聽到的、你要說的、單字、突發狀況、聽力測驗、即時回應、文化小提醒時，
  會自動多出對應分頁（2026-10-04 起 44 個單元都有）。**版面（2026-10-04 使用者要求）：「冊別」「生活區」各一個框；分頁分兩個框——「情境練習」
  （高頻句矩陣、真實情境課文、情境影片、你會聽到的、你要說的、場景單字、突發狀況、文化小提醒）和「測驗」（聽力默寫／盲聽測驗、聽力測驗、即時回應）；
  分組在 index.html 的 `renderTabs()`（`TEST_TABS`）和 engine.js 的 `tabGroup()`（`TEST_KEYS`），兩邊要一起改。**生活區按鈕（交通、住、吃…）讀 catalog.js，
  選一區就列出那一區的場景，沒做好的顯示「即將推出」。以後替其他單元補內容，單元版不用改。
- 練習成績（聽力測驗、聽寫、即時回應）同步到和 english-quiz 同一個 Google 試算表，`week` 欄位是「Life｜場景名稱」。

## 目前內容

- 8 大生活區、44 個場景，**全部完成**（第一冊舊版 16 個；新場景 28 個都是完整 10 個分頁、有語音、有影片）。
- **速食點餐（fast-food）**：完整示範場景，10 個分頁都有內容，3 段情境對話（櫃台點餐、得來速、Chipotle）。
- 舊版的 16 個單元已全部搬進來（254 句實用句、107 句對話，一句不少），標籤 **#大學生活**；
  **2026-10-04 這 15 個場景（連同 hotel 等）都補上了你會聽到的（10）、你要說的（8）、單字（10）、突發狀況（4）、聽力測驗（8）、即時回應（6）、文化小提醒（4）**，
  句子由 Kokoro 產生語音（共 844 句）；原本的對話、句子、影片、角色與聲音一律沒動。注意：「你會聽到的／突發狀況／即時回應」的對方聲音固定用 speakers.S，
  所以 hotel（S＝海關官員）的這幾個分頁以入境海關為主，櫃台（S2）的句子放在聽力題用 `speaker: "S2"`；repair-request、seeing-a-doctor、party 同理。
- 適合大人的單元標 **#成人**：blind-date（網路約會）、heart-to-heart（陪室友聊分手）。
- 推薦 YouTube 影片是用標題搜尋的，沒有人實際看過，頁面上有標「請老師先預覽」。

## 整合規劃與影片（2026-10-03）

- 整合成單一入口、44 個場景總表、冊別分配、製作順序的完整規劃寫在 **`PLAN.md`**（含需要使用者決定的事）。
- `units-list.js` 已把 **44 個場景全部排進 4 本冊**（第一冊＝舊版 16 單元，第二冊日常與旅遊 11、第三冊留學生存 11、第四冊健康與緊急 6）。
  還沒做好的顯示「即將推出」；做好之後只要把 `catalog.js` 的 `ready` 改成 `true`，單元版就會自動可點，Unit 編號不變。
- **影片已全部恢復（2026-10-04，使用者選擇 B 和 C）**：44 個單元都有 2–3 支 YouTube 影片（共 129 支）。舊 16 單元：速食點餐原本就有；其餘 15 個用 `tools/videos_draft_apply.py`（草稿清單）寫入。新 28 個場景用 `tools/videos_new_apply.py`（清單在檔案裡的 PICKS；逐支向 YouTube oEmbed 確認存在且可嵌入，標題用 YouTube 回傳的真實標題）。影片都是用標題與頻道挑的，**沒有人看過內容**，頁面上標「請老師先預覽」；影片可能被刪或關閉嵌入，要換就改 PICKS、刪掉該場景的 `"videos"` 區塊後重跑。分頁名稱：有影片叫「🎬 情境影片」，沒有影片的單元顯示「🎬 情境對話」。

## 新場景製作進度與家裡電腦（Windows）的語音工具（2026-10-03）

- 已完成的新場景（2026-10-03，第 1 波共 7 個，都是完整 10 個分頁、有語音、沒有影片〔影片暫停〕）：getting-a-ride（叫 Uber，第二冊 Unit 1）、restaurant（餐廳用餐與小費，第二冊 Unit 6）、supermarket（超市購物，第二冊 Unit 7）、lost-something（遺失物品求助，第二冊 Unit 11）、bank-account（銀行開戶，第三冊 Unit 6）、returns（退換貨，第三冊 Unit 10）、pharmacy（藥局領處方藥，第四冊 Unit 1）。**第 2 波 12 個也完成（2026-10-03）**：bus-and-subway（第二冊 Unit 2）、asking-directions（Unit 3）、gas-station（Unit 4）、airport-customs（Unit 5）、coffee-shop（Unit 8）、food-delivery（Unit 9）、drugstore（Unit 10）、first-day-school（第三冊 Unit 1）、meeting-teacher（Unit 2）、post-office（Unit 9）、online-order（Unit 11）、dentist（第四冊 Unit 2）。**第 3 波 9 個也完成（2026-10-03）**：renting-apartment（第三冊 Unit 3）、utilities（Unit 4）、phone-plan（Unit 5）、dmv（Unit 7）、doctor-appointment（Unit 8）、urgent-care（第四冊 Unit 3）、calling-911（Unit 4）、car-accident（Unit 5）、card-problems（Unit 6）。**44 個場景全部完成。**多於三個角色的場景（utilities、doctor-appointment、urgent-care、calling-911、car-accident、card-problems 有 4 個角色）的聽力題，用 `speaker` 指定由對的角色念。
- 做法：寫一支 Python 產生器，用 dict 組好內容、`json.dumps(ensure_ascii=False, indent=2)` 寫成 `scenes/<slug>/scene.js`（保證語法正確），
  複製 `tools/scene_template.html` 成該場景的 `index.html`，把 `catalog.js` 該行加 `ready: true`，再跑 `check_scenes.py` 與 `make_audio.py <slug>`。
  單元版 `units-list.js` 已有全部 44 個，**做好不用再改**。內容格式與用字照 `scenes/fast-food/scene.js`（台灣用語、美國情境與文化提醒、roleplay 的 expect 要讓 model 通過）。
- **這台家裡電腦已裝好語音工具（2026-10-03）**：pip 的 kokoro-onnx、soundfile、imageio-ffmpeg；Node.js LTS（winget，新開的終端機才找得到 node，
  舊的視窗要先重新載入 PATH）；模型檔在 `tools/models/`（已被 git 忽略）。`make_audio.py` 找不到系統 ffmpeg 時會自動用 imageio-ffmpeg 附的，
  `common.py` 讀 node 輸出已指定 UTF-8（Windows 預設編碼會壞掉）。
- **角色圖像與聲音的性別要一致（使用者要求，2026-10-03）**：`speakers` 裡 avatar 要用明確的男生或女生圖像（👨、👩、🙋‍♂️、🙋‍♀️、👨‍💼、👩‍💼…），
  不要用中性的（🧑‍💼、🙋），voice 代碼要同性別：女聲 f（af_heart，「場景單字」固定用它，明亮清楚）、f2（af_bella）、f4（af_jessica）、f5（af_sarah，使用者試聽後選的「聲音 D」），男聲 m、m2、m3。**新單元的規則（使用者 2026-10-04）：「對方」的女聲用 f；學習者是女生用 f5；同場景還有第三位女生才用 f2 或 f4。** 舊 16 單元不動（學習者 f、對方 f2，使用者說聽起來沒問題）。**不要用 f3**（af_nicole：音高約 153 Hz、氣音重，聽起來低沉不清楚，使用者 2026-10-04 反應；實測 f=202 Hz、f2=201 Hz 較清楚），19 個舊用到 f3 的場景已全部換掉（沒人用 f 就換 f、否則換 f2、女角色三個以上才用 f4＝af_jessica），`make_audio.py` 的 VOICES 仍保留 f3 只是為了相容。「場景單字」固定用 f（af_heart）。舊版 16 單元的「我」都是 🙋‍♀️ 配女聲 f；
  新單元的「你」（Y）男女交替安排：男聲 m 系列——餐廳、銀行開戶、退換貨、藥局、速食點餐；女聲 f 系列——叫 Uber、超市、遺失物品。
  只改 avatar 不必重錄語音；改 voice 代碼會改變語音檔名（要重跑 `make_audio.py --prune`）。想讓某個舊單元的「我」換成男聲，要先確認再重錄。
- 下載提醒：這台電腦從 GitHub 下載單一連線很慢（約 25 KB/s），要用多連線（分段 Range）才快（約 500 KB/s）；跑 `make_audio.py` 時不要把輸出接 `Select-Object -First N`，會把程式中途砍掉。

## 待辦事項

1. **新增更多場景或下一季**：44 個場景已全部完成。要擴充就照 README 的四步驟加場景，並在 `units-list.js` 排進冊別。
2. ~~補強舊版 15 個單元~~：2026-10-04 已完成（內容由使用者的 Claude 寫成，沒有人逐句審稿，聽力題答案位置是輪流排列的）。
3. **學習點數存摺**：前端已接好（2026-10-03）。`points.js` 在根目錄；`engine.js` 會自動載入它，`index.html` 直接載入，
   兩邊的 `sync()` 開頭都呼叫 `Points.earn()`（label 是「Life｜場景名」）。`POINTS_URL` 空白時不啟用；
   等使用者部署後端、給 `/exec` 網址再填。規則與部署步驟見 english-quiz 的 CLAUDE.md 與 plan repo 的 `points/README-點數存摺.md`。
   `points.js` 各專案的副本內容要一樣（主檔在 plan repo 的 `points/points.js`）。
   2026-10-04 加了訪客模式（關卡上「我是訪客」，不計點數；同一天使用者決定先關閉，`GUEST_ENABLED = false`）與手機版橫幅修正，三個 repo 的副本已同步，plan repo 主檔要回家電腦補同步。
   手機入口 App 在網站首頁 repo 的 `/app/`（英文測驗系統＋美式生活館）。
4. 刪掉多餘的 `claude-push-test` 分支（測試權限時建的，內容和 main 一樣；在 GitHub 的 Branches 頁面刪除即可）。

- **其他人＝家長開帳號（2026-10-04）**：除了 BRANDEN、MELISSA、家長，其他人要由家長在「家長管理 → 帳號管理」建立帳號（學生＝有存摺可賺點；只能練習＝不計點數），PIN 由家長設定；本人在關卡按「其他帳號登入」。訪客模式關閉（`GUEST_ENABLED = false`）。**要先更新 Apps Script 後端（貼新版 Code.gs → 部署新版本）才能用**，步驟在 plan repo `points/README-點數存摺.md` 最後一節。points.js 主檔與三個網站的副本已同步一致。

## 測驗規則統一以段考題庫為準（2026-10-18 使用者要求，以後新做的測驗也照做）

- **成長學習館各單元有測驗的地方，作答、送出、計分、訂正方式一律以國中英語段考題庫（exam-bank `sync.js`）為準**（使用者已測試驗證 OK）：
  送出成績（全部作答才送）→ 馬上對答案（綠對紅錯＋正解）→ 有錯題時上方「✏️ 訂正錯誤」＋「錯誤全部訂正完畢再另加補送 1 點」（答對的鎖住、錯題清空重答）→「送出訂正」直到全對 → 補送 1 點（`Points.earn` `kind:'fix-bonus'`）；
  沒訂正完不能離開這一頁（擋連結、關分頁跳確認）；測試帳號 TEST、家長 PARENT 有「🚪 立即離開」；試算表每次訂正 mode／單元名稱註明「【第 N 次訂正】」、完成記「【全部訂正完成】補送 1 點」；點數只算第一次作答；「💾 暫存」＋自動暫存接續作答。
- 各站的做法：段考題庫 `sync.js`；圖解單字 `topic.html`；國家地理閱讀 `fixkit.js`（`points-glue.js` 載入）；英文測驗系統 `eqfix.js`；美式生活館 `lifefix.js`（engine.js、index.html 用）。
  英文測驗系統、美式生活館是「一題一題做、答完看解說」的形式，使用者選擇保留，只把結果頁改成訂正規則（只重做錯題、直到全對）。
- 這個 repo：`lifefix.js`（根目錄）；場景頁（44 個 `scenes/*/index.html` 與 `tools/scene_template.html`）在 engine.js 前面載入它，單元版 `index.html` 在 points.js 後面載入。engine.js 與 index.html 的聽力測驗、聽寫練習、即時回應都用它：成績畫面「✏️ 訂正錯誤」只重做錯題、直到全對補送 1 點；訂正中不能離開、不能換單元或分頁（單元版）；每做完一題自動暫存（`lifeDraft:場景:測驗:登入者`）。`sync()` 多一個 `noPoints` 參數（訂正時試算表照送、不算點數）。**新場景用 `tools/scene_template.html` 建就會自動載入。**

- **快取（2026-10-18）**：各頁用 `engine.js、lifefix.js?v=20261018b` 載入共用程式；**改了共用程式要把所有頁面的 v 一起改**（sed 全部替換），不然手機瀏覽器會繼續用舊版（使用者 10-18 看到沒有「訂正錯誤」）。

## 連續學習紅利＋稱讚畫面（2026-10-18）

- 送出測驗後跳出稱讚卡（得幾點、連續第幾天、還差幾點到 100 點）；每跨過 100 點跳出大的恭喜兌換畫面。
- 連續學習紅利：第 2 天 +2、第 3、4 天 +3、第 5 天起每天 +4（2026-10-18 使用者改），中斷就重算；不算在每天 50 點上限內；存摺分頁記成類型「紅利」。
- **答對率計分（2026-10-18）**：答對 1 題得幾點看答對率（第三版，2026-10-18 使用者定）：低於 30% 0.25、30～50% 0.5、50～60% 0.8、60～70% 1、70～90% 1.2、90% 以上 1.5、全對 2，四捨五入成整數（80～90% 使用者沒另外寫，同 7～8 成）；後端 `Code.gs` 的 `CONFIG.RATE_TIERS`，要重新部署 Apps Script 才生效。
- **段考訂正完成補送 1 點（2026-10-18）**：段考題庫錯題全部訂正完成後 `Points.earn({kind:'fix-bonus'})`，後端 `fixBonus_()` 記一筆類型「訂正獎勵」+`CONFIG.FIX_BONUS`（1）點，同一份考卷每天一次、不算每天上限與連續天數；要重新部署 Apps Script 才生效（舊版後端會當成一般賺點、全對每題 2 點＝給 2 點）。
- 程式在 `points.js`（7 份副本內容一致，主檔在 english-quiz-plan `points/points.js`）與後端 `Code.gs`（`CONFIG.STREAK_BONUS`）。
- **要先更新 Apps Script 後端（貼新版 Code.gs → 部署新版本）紅利才會開始算**，步驟在 english-quiz-plan `points/README-點數存摺.md` 最後一節。
