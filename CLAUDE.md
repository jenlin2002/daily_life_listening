# 美式生活館（daily_life_listening）工作紀錄與說明

這個檔案是給「下一次接手的人」看的（在家裡電腦開 Claude Code 時，Claude 會自動讀這個檔案）。
最後更新：2026-10-03。詳細的擴充方法在 `README.md`。

## 這是什麼

美式生活館：生活實況英語。網址 jenlin2002.github.io/daily_life_listening/ ，從網站首頁（jenlin2002.github.io）進入。
英文測驗系統（english-quiz repo）裡**不要**放美式生活館的連結（使用者要求）。
學習者主要是 Branden 和 Melissa（國高中生），也開放其他人使用（「其他」可以輸入自己的名字）。

## 架構（2026-10-03 改版，PR #1 已合併）

- `index.html`：目錄頁，自動讀 `catalog.js` 產生；可依標籤、季別、已完成篩選。
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
  網址 `units.html#b=冊別&u=第幾單元`。已用 10 冊（每冊 22–30 單元）測試過。
- `units.html` ＋ `units-list.js`：**單元版（試作，2026-10-03 家裡電腦做）**。版面沿用舊版（標題區、Unit 1–16 橫向捲動列、
  高頻句矩陣／真實情境課文／聽力默寫三個分頁、語速與遮蔽英文／中文按鈕），內容區改用新版的奶油底卡片（life.css）。
  點單元只換內容不換頁；網址可用 `units.html#u=3` 直達。資料不重複存：`units-list.js` 對應單元到場景，
  句子、對話、語音都讀 `scenes/<slug>/`。練習進度（背完標記）和聽寫成績與場景頁共用同一份紀錄。
  單元對應：1 party、2 roommates、3 fast-food、4 clothing-store、5 repair-request、6 hotel、7 seeing-a-doctor、
  8 renting-a-car、9 small-talk、10 heart-to-heart、11 blind-date、12 invitations、13 job-interview、14 coworkers、
  15 news-chat、16 values-talk。目前沒有放進目錄頁（index.html）的入口，等使用者看過再決定。
  前三個分頁固定；場景的 scene.js 有影片、你會聽到的、你要說的、單字、突發狀況、聽力測驗、即時回應、文化小提醒時，
  會自動多出對應分頁（目前只有 Unit 3 速食點餐有這些）。生活區按鈕（交通、住、吃…）讀 catalog.js，
  選一區就列出那一區的場景，沒做好的顯示「即將推出」。以後替其他單元補內容，單元版不用改。
- 練習成績（聽力測驗、聽寫、即時回應）同步到和 english-quiz 同一個 Google 試算表，`week` 欄位是「Life｜場景名稱」。

## 目前內容

- 8 大生活區、44 個場景，16 個已完成。
- **速食點餐（fast-food）**：完整示範場景，10 個分頁都有內容，3 段情境對話（櫃台點餐、得來速、Chipotle）。
- 舊版的 16 個單元已全部搬進來（254 句實用句、107 句對話，一句不少），標籤 **#大學生活**；
  這 15 個場景目前只有「情境對話、句子矩陣、聽寫練習」三個分頁。
- 適合大人的單元標 **#成人**：blind-date（網路約會）、heart-to-heart（陪室友聊分手）。
- 推薦 YouTube 影片是用標題搜尋的，沒有人實際看過，頁面上有標「請老師先預覽」。

## 整合規劃與影片（2026-10-03）

- 整合成單一入口、44 個場景總表、冊別分配、製作順序的完整規劃寫在 **`PLAN.md`**（含需要使用者決定的事）。
- `units-list.js` 已把 **44 個場景全部排進 4 本冊**（第一冊＝舊版 16 單元，第二冊日常與旅遊 11、第三冊留學生存 11、第四冊健康與緊急 6）。
  還沒做好的顯示「即將推出」；做好之後只要把 `catalog.js` 的 `ready` 改成 `true`，單元版就會自動可點，Unit 編號不變。
- **影片暫停**（使用者 2026-10-03 決定）：原本幫 15 個舊單元挑好的 2–3 支 YouTube 影片已經還原，沒有寫進場景。清單與腳本存放在
  `tools/videos_draft_candidates.json`、`tools/videos_draft_apply.py`、`tools/videos_draft_search.py`（oEmbed 已確認存在且可嵌入，
  但沒有人看過內容）。要恢復時再執行；目前線上只有 Unit 3 速食點餐有影片。

## 待辦事項

1. **第一季其餘場景**（catalog.js 裡 `season: 1` 且還沒 ready 的），下一個是「餐廳用餐與小費（restaurant）」，
   照速食點餐的完整格式做。
2. **補強舊版 15 個單元**：加上你會聽到的／你要說的、單字、突發狀況、聽力測驗、即時回應、文化小提醒。
3. **學習點數換電腦時間／零用錢**：等使用者決定兌換比例、兌換項目、每日上限，並提供 Google Apps Script 程式碼。
   詳細規劃寫在 english-quiz repo 的 CLAUDE.md。
4. 刪掉多餘的 `claude-push-test` 分支（測試權限時建的，內容和 main 一樣；在 GitHub 的 Branches 頁面刪除即可）。
