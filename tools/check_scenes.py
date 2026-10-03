#!/usr/bin/env python3
"""檢查目錄與每個場景的資料有沒有錯：必填欄位、答案編號、正規表示式、目錄對應。
用法：python3 tools/check_scenes.py"""
import os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import load_js_object, scene_dirs, LIFE

errors = []
def err(where, msg): errors.append('%s：%s' % (where, msg))

cat = load_js_object(os.path.join(LIFE, 'catalog.js'), 'LIFE_CATALOG')
zones = {z['id'] for z in cat['zones']}
slugs = [s['slug'] for s in cat['scenes']]
for s in cat['scenes']:
    if s['zone'] not in zones: err('catalog ' + s['slug'], '生活區 %s 不存在' % s['zone'])
    if not re.fullmatch(r'[a-z0-9]+(-[a-z0-9]+)*', s['slug']): err('catalog ' + s['slug'], 'slug 只能用小寫英文、數字和減號')
    folder = os.path.join(LIFE, 'scenes', s['slug'])
    if s.get('ready') and not os.path.isfile(os.path.join(folder, 'scene.js')): err('catalog ' + s['slug'], 'ready 是 true，但找不到 scenes/%s/scene.js' % s['slug'])
dups = {x for x in slugs if slugs.count(x) > 1}
if dups: err('catalog', 'slug 重複：%s' % ', '.join(sorted(dups)))

for d in scene_dirs():
    name = os.path.basename(d)
    try:
        S = load_js_object(os.path.join(d, 'scene.js'), 'SCENE')
    except Exception as e:
        err(name, 'scene.js 讀不到：%s' % e); continue
    if S.get('slug') != name: err(name, 'slug 要和資料夾名稱一樣')
    if name not in slugs: err(name, '目錄 catalog.js 裡沒有這個場景')
    if not os.path.isfile(os.path.join(d, 'index.html')): err(name, '缺少 index.html（從 tools/scene_template.html 複製）')
    for k in ('title', 'en', 'speakers'):
        if not S.get(k): err(name, '缺少 %s' % k)
    sp = S.get('speakers', {})
    if 'S' not in sp or 'Y' not in sp: err(name, 'speakers 要有 S（對方）和 Y（你）')
    for di, dl in enumerate(S.get('dialogues', [])):
        for li, l in enumerate(dl.get('lines', [])):
            if l.get('s') not in sp: err(name, '對話 %d 第 %d 句的角色 %s 不在 speakers' % (di + 1, li + 1, l.get('s')))
    for qi, q in enumerate(S.get('listening', []), 1):
        if not (0 <= q.get('answer', -1) < len(q.get('options', []))): err(name, '聽力第 %d 題答案編號錯誤' % qi)
        if len(set(q.get('options', []))) != len(q.get('options', [])): err(name, '聽力第 %d 題選項重複' % qi)
    for ri, r in enumerate(S.get('roleplay', []), 1):
        try:
            rx = re.compile(r['expect'], re.I)
            if not rx.search(r['model']): err(name, '即時回應第 %d 句：示範答案沒有通過自己的檢查條件' % ri)
        except re.error as e:
            err(name, '即時回應第 %d 句的 expect 寫錯：%s' % (ri, e))

if errors:
    print('發現 %d 個問題：' % len(errors)); [print(' - ' + e) for e in errors]; sys.exit(1)
print('全部通過：%d 個生活區、%d 個場景（%d 個已完成）' % (len(zones), len(slugs), sum(1 for s in cat['scenes'] if s.get('ready'))))
