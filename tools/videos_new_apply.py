"""把挑好的 YouTube 影片寫進新場景的 scene.js（2026-10-04，28 個新場景）。

每支影片都先向 YouTube oEmbed 確認存在且允許嵌入，標題用 YouTube 回傳的真實標題。
已經有 "videos" 的場景會跳過。影片是用標題搜尋挑的，沒有人實際看過內容，
頁面上會標「請老師先預覽」。要換影片就改下面的 PICKS，刪掉場景的 "videos" 區塊後重跑。

用法：python tools/videos_new_apply.py
"""
import json, os, re, sys, time, urllib.parse, urllib.request

ROOT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'scenes')
UA = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36'}

PICKS = {
    'getting-a-ride': ['61tey0auDIk', 'bYyauyH5sbQ', 'nCEUzm0VXvw'],
    'bus-and-subway': ['itrrttmZ1LI', 'enpQqJkYBaY', 'sM1mWWY75n0'],
    'asking-directions': ['SHXPpsIJTb0', 'DPYJQSA-x50', 'Lms1qBpfYIM'],
    'gas-station': ['o8AS3ErB_eg', 'EvkosIXDsAk', 'GhTpyKJ-UDM'],
    'airport-customs': ['RBym5oLUM1A', 'd_tYKBoOmHM', 'RKyBoRdz78c'],
    'restaurant': ['uUMPULuwdLI', 'bgfdqVmVjfk', 'FdmFgL3pci0'],
    'supermarket': ['NG-de6quWkE', 's5x-RTu8dpg', 'f89uk1myB_s'],
    'coffee-shop': ['jhEtBuuYNj4', '2VeQTuSSiI0', 'SLC1Rdaxdj8'],
    'food-delivery': ['iiqOB4T74As', 'hIaWARrBuAc', 'jkgRd8eVzLk'],
    'drugstore': ['e3usANOiRR8', 'ma8Yd25t1fE', '4DcQrU-cOuQ'],
    'lost-something': ['aInDH9d1xVw', 'sdRFq8rPEyM', 'PwXIVNtJg6g'],
    'first-day-school': ['Mc7EnS3hri0', 'VmT_MBRb-oE', 'NXIem0v14x4'],
    'meeting-teacher': ['JsMFJ1Y_JyI', '3HEIVBCr450', '5wxOQnEC9R8'],
    'renting-apartment': ['0TBsMgwQaE8', 'aGR1pB4wrUs', 'fUcU39F73R0'],
    'utilities': ['7QCn2lYOpZQ', 'LirxQOuuV2o'],
    'phone-plan': ['nZY60ir6k24', '1YGg50r0lFM', 'nKGVc4dBzJU'],
    'bank-account': ['7Lh1tMsRw3U', 'XfvI6EXom1E', 'DT3UyVwJe9U'],
    'dmv': ['MhXQGKJdM2o', 'BvMO4qDlycc', 'ttd2Kyfy3zo'],
    'doctor-appointment': ['kK99NlPe0-0', '5jP6qM3Kakc', 'k0NvrZFqIko'],
    'post-office': ['MkJKMCwuEYw', '0a1iwjrsO5Y', 'KJIO8u8ArXE'],
    'returns': ['E9sJp2bISxk', '0bB-QGS3wR8', 'Wkn7JHAd-fw'],
    'online-order': ['1mYFWLTC0rY', 'SB3eOrUSUZQ', 'UpEOTw6i9zo'],
    'pharmacy': ['_NXqTqZLl90', 'ChDdPCLPD48', '4GUuV2fCLno'],
    'dentist': ['imO2q4q4pBM', 'OLRcbHb5bqU', 'Bqdna_w7Aqs'],
    'urgent-care': ['WI8Uh3jfb9M', 'nlzkXz0AeQk', 'Cj9DKRWp-ek'],
    'calling-911': ['87kzv80cAys', 'spGJ9Ii5W3o', 'vRwkXjQHM6g'],
    'car-accident': ['jmBcH4yRsEs', 'mS0uuFEiouw', 'Oy2CPxRHa_k'],
    'card-problems': ['4Oq3sqW4fI8', 'fTkK0uEfgN4', 'B2VhKd8CbeU'],
}


def oembed(vid):
    u = 'https://www.youtube.com/oembed?format=json&url=' + urllib.parse.quote('https://www.youtube.com/watch?v=' + vid)
    try:
        d = json.loads(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=20).read().decode('utf-8'))
        return d.get('title', ''), d.get('author_name', '')
    except Exception as e:
        return None, getattr(e, 'code', str(e))


bad = []
for slug, ids in PICKS.items():
    p = os.path.join(ROOT, slug, 'scene.js')
    t = open(p, encoding='utf-8').read()
    if '"videos"' in t:
        print('%-18s 已經有影片，跳過' % slug)
        continue
    vids = []
    for vid in ids:
        title, author = oembed(vid)
        time.sleep(0.15)
        if title is None:
            bad.append((slug, vid, author))
            print('%-18s %s 無法嵌入或不存在（%s）' % (slug, vid, author))
            continue
        full = ('%s（%s）' % (re.sub(r'\s+', ' ', title).strip(), author))[:120]
        vids.append((vid, full))
        print('%-18s %s %s' % (slug, vid, full[:70]))
    if not vids:
        continue
    block = '  "videos": [\n' + ',\n'.join(
        '    {\n      "id": %s,\n      "title": %s\n    }' % (json.dumps(i), json.dumps(ti, ensure_ascii=False)) for i, ti in vids) + '\n  ],\n'
    m = re.search(r'^  "speakers": \{', t, re.M)
    assert m, slug
    open(p, 'w', encoding='utf-8', newline='').write(t[:m.start()] + block + t[m.start():])
if bad:
    print('\n有問題的影片：', bad)
    sys.exit(1)
print('\n全部完成')
