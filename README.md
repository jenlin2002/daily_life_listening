# 美式生活館：維護與擴充說明

## 資料夾結構

```
(repo 根目錄)
├── index.html          主畫面：分冊單元版（讀 units-list.js 與 catalog.js；新增單元要在 units-list.js 加一筆 { slug }）
├── catalog.html        45 張場景卡片目錄（自動讀 catalog.js 產生，不用手動改）
├── units-list.js       ★ 冊別與單元清單（45 個場景已全部排進 4 本冊）
├── units.html          舊網址轉址（轉到 index.html）
├── catalog.js          ★ 目錄：生活區與場景清單，新增場景從這裡開始
├── engine.js           所有場景共用的頁面程式
├── life.css            共用樣式
├── scenes/
│   └── fast-food/      一個場景一個資料夾（資料夾名稱 = slug）
│       ├── index.html  固定內容，從 tools/scene_template.html 複製
│       ├── scene.js    ★ 場景內容
│       └── audio/      語音檔（由工具自動產生，檔名由句子內容算出）
├── classic.html        舊版美式生活館（保留參考）
└── tools/
    ├── new_scene.py      建立新場景
    ├── check_scenes.py   檢查資料有沒有錯
    ├── make_audio.py     補產生語音
    └── scene_template.html
```

## 新增一個場景（四步驟）

1. **catalog.js**：在 `scenes` 加一行，例如
   `{ slug: 'restaurant', zone: 'food', order: 20, title: '餐廳用餐與小費', en: 'Eating Out & Tipping', tags: ['日常'], season: 1, level: 2 }`
2. **建立資料夾**：`python3 tools/new_scene.py restaurant`，再編輯 `scenes/restaurant/scene.js`
3. **上架**：catalog.js 那一行加上 `ready: true`，然後執行 `python3 tools/check_scenes.py`
4. **語音**：`python3 tools/make_audio.py restaurant`

## 常見的擴充方式

| 想做的事 | 怎麼做 |
|---|---|
| 新增生活區 | catalog.js 的 `zones` 加一行（`order` 可用 15、25 插在中間） |
| 同一個場景加一種狀況 | 在 scene.js 的 `dialogues` 多加一段對話（例如速食點餐有「櫃台點餐」和「得來速」），或在 `situations` 多加一種突發狀況 |
| 新的分類（例如旅遊篇、留學篇） | 在場景的 `tags` 加標籤，目錄頁會自動多一個篩選按鈕 |
| 新一季 | 場景加上 `season: 2`，目錄頁會自動多「第二季」按鈕 |
| 多一個角色聲音 | scene.js 的 `speakers` 用 `f2`、`m2` 等代碼；新代碼要先加到 make_audio.py 的 `VOICES` |
| 只做部分內容 | 不需要的區塊留空陣列，該分頁就不會出現 |

**slug 建立後不要再改**：網址和試算表裡的紀錄都靠它對應。

## scene.js 格式

```js
window.SCENE = {
  slug: 'fast-food',                       // 和資料夾同名
  title: '速食點餐', en: 'Ordering Fast Food', emoji: '🍔', goal: '學習目標一句話',
  speakers: {                              // S = 對方（店員、醫生…），Y = 你
    S: { name: 'Cashier', zh: '店員', avatar: '🧑‍💼', voice: 'f' },
    Y: { name: 'You', zh: '你', avatar: '🙋', voice: 'm' }
  },
  answerSeconds: 8,                        // 即時回應的秒數
  dialogues: [ { title: '櫃台點餐', where: '地點', emoji: '🍔', lines: [ { s: 'S', en: '…', zh: '…' } ] } ],
  videos:     [ { id: 'YouTube 影片 ID', title: '影片標題' } ],
  hear:       [ { en: '對方說的話', zh: '中文', reply: '你可以這樣回', replyZh: '中文' } ],
  say:        [ { en: '你要說的話', zh: '中文' } ],
  vocab:      [ { w: '單字', pos: 'n.', zh: '中文', ex: '例句', exzh: '例句中文' } ],
  situations: [ { title: '狀況名稱', hear: { en, zh, fast: true }, say: [ { en, zh } ], tip: '提醒' } ],
  listening:  [ { type: '聽懂意思', audio: '播放的句子', speaker: 'S', prompt: '題目', options: ['A', 'B', 'C'], answer: 0, note: '解說' } ],
  roleplay:   [ { prompt: '對方說的話', promptZh: '中文', hint: '提示', expect: '通過條件（正規表示式）', model: '示範回答', modelZh: '中文' } ],
  culture:    [ { t: '標題', d: '說明' } ]
};
```

- `fast: true`：這句用比較快的語速錄（練習聽快速口語）。
- `expect`：學生的回答只要符合這個條件就算通過，不分大小寫。例如 `"for here|to go"`。check_scenes.py 會確認示範回答本身能通過。
- 修改任何英文句子後，重新執行 make_audio.py；`--prune` 會順便刪掉不再用到的舊語音。

## 產生語音需要的東西

- `pip install kokoro-onnx soundfile`、ffmpeg、Node.js（工具用來讀 catalog.js 與 scene.js）
- 模型檔 `kokoro-v1.0.int8.onnx`、`voices-v1.0.bin`：從 https://github.com/thewh1teagle/kokoro-onnx/releases/tag/model-files-v1.0 下載，放到 `tools/models/`（或用環境變數 `KOKORO_DIR` 指定）。這個資料夾不會進 git。
- 沒有語音檔的句子，網頁會自動改用裝置內建的英文語音，所以先上架內容、之後再補語音也可以。
