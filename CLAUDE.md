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
- 練習成績（聽力測驗、聽寫、即時回應）同步到和 english-quiz 同一個 Google 試算表，`week` 欄位是「Life｜場景名稱」。

## 目前內容

- 8 大生活區、44 個場景，16 個已完成。
- **速食點餐（fast-food）**：完整示範場景，10 個分頁都有內容，3 段情境對話（櫃台點餐、得來速、Chipotle）。
- 舊版的 16 個單元已全部搬進來（254 句實用句、107 句對話，一句不少），標籤 **#大學生活**；
  這 15 個場景目前只有「情境對話、句子矩陣、聽寫練習」三個分頁。
- 適合大人的單元標 **#成人**：blind-date（網路約會）、heart-to-heart（陪室友聊分手）。
- 推薦 YouTube 影片是用標題搜尋的，沒有人實際看過，頁面上有標「請老師先預覽」。

## 待辦事項

1. **第一季其餘場景**（catalog.js 裡 `season: 1` 且還沒 ready 的），下一個是「餐廳用餐與小費（restaurant）」，
   照速食點餐的完整格式做。
2. **補強舊版 15 個單元**：加上你會聽到的／你要說的、單字、突發狀況、聽力測驗、即時回應、文化小提醒。
3. **學習點數換電腦時間／零用錢**：等使用者決定兌換比例、兌換項目、每日上限，並提供 Google Apps Script 程式碼。
   詳細規劃寫在 english-quiz repo 的 CLAUDE.md。
4. 刪掉多餘的 `claude-push-test` 分支（測試權限時建的，內容和 main 一樣；在 GitHub 的 Branches 頁面刪除即可）。
