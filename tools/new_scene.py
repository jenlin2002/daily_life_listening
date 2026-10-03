#!/usr/bin/env python3
"""建立新場景的資料夾和空白範本。
用法：python3 tools/new_scene.py <slug>
之後：1) 編輯 scenes/<slug>/scene.js  2) catalog.js 把該場景改成 ready: true
      3) python3 tools/check_scenes.py  4) python3 tools/make_audio.py <slug>"""
import os, sys, json, shutil
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import LIFE, load_js_object

if len(sys.argv) != 2: sys.exit(__doc__)
slug = sys.argv[1]
cat = load_js_object(os.path.join(LIFE, 'catalog.js'), 'LIFE_CATALOG')
info = next((s for s in cat['scenes'] if s['slug'] == slug), None)
if not info: sys.exit('請先在 catalog.js 加上 slug 為 %s 的場景' % slug)
d = os.path.join(LIFE, 'scenes', slug)
if os.path.exists(os.path.join(d, 'scene.js')): sys.exit('scenes/%s 已經存在' % slug)
os.makedirs(os.path.join(d, 'audio'), exist_ok=True)
shutil.copy(os.path.join(LIFE, 'tools', 'scene_template.html'), os.path.join(d, 'index.html'))
tpl = {
  'slug': slug, 'title': info['title'], 'en': info['en'], 'emoji': '📍', 'goal': '這個場景的學習目標',
  'speakers': {'S': {'name': 'Staff', 'zh': '店員', 'avatar': '🧑‍💼', 'voice': 'f'},
               'Y': {'name': 'You', 'zh': '你', 'avatar': '🙋', 'voice': 'm'}},
  'answerSeconds': 8,
  'dialogues': [{'title': '情境一', 'where': '地點', 'lines': [{'s': 'S', 'en': 'Hi, how can I help you?', 'zh': '嗨，需要什麼幫忙嗎？'},
                                                              {'s': 'Y', 'en': 'Hi, I would like to ...', 'zh': '嗨，我想要……'}]}],
  'videos': [], 'hear': [], 'say': [], 'vocab': [], 'situations': [], 'listening': [], 'roleplay': [], 'culture': []
}
open(os.path.join(d, 'scene.js'), 'w', encoding='utf-8').write(
  '// 場景資料。格式說明請看 README.md。改完句子後執行 python3 tools/make_audio.py 補產生語音。\nwindow.SCENE = '
  + json.dumps(tpl, ensure_ascii=False, indent=2) + ';\n')
print('已建立 scenes/%s/，請編輯 scene.js' % slug)
