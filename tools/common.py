"""美式生活館工具共用：讀場景、列出所有要播放的句子（必須和 engine.js 的播放方式一致）。"""
import json, os, re, glob, subprocess

LIFE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SCENES = os.path.join(LIFE, 'scenes')


def load_js_object(path, var):
    """用 Node.js 執行資料檔，取出 window.<var>。資料檔可以用一般 JavaScript 寫法（單引號、不加引號的欄位名、註解）。"""
    code = ('const fs=require("fs"),vm=require("vm");const w={};'
            'vm.runInNewContext(fs.readFileSync(process.argv[1],"utf8"),{window:w});'
            'process.stdout.write(JSON.stringify(w[process.argv[2]]===undefined?null:w[process.argv[2]]));')
    out = subprocess.run(['node', '-e', code, path, var], capture_output=True, text=True, encoding='utf-8')   # Windows 預設編碼不是 UTF-8，要明確指定
    if out.returncode != 0:
        raise ValueError('%s 有語法錯誤：%s' % (path, out.stderr.strip().splitlines()[-1] if out.stderr.strip() else '未知'))
    data = json.loads(out.stdout)
    if data is None:
        raise ValueError('%s 裡找不到 window.%s' % (path, var))
    return data


def scene_dirs():
    return sorted(d for d in glob.glob(os.path.join(SCENES, '*')) if os.path.isfile(os.path.join(d, 'scene.js')))


def audio_key(voice, fast, text):
    """和 engine.js 的 audioKey() 相同：FNV-1a 32 位元，輸入是「聲音|語速|句子」的 UTF-8。"""
    h = 0x811c9dc5
    for b in ('%s|%s|%s' % (voice, 'fast' if fast else 'n', text)).encode('utf-8'):
        h ^= b
        h = (h * 0x01000193) & 0xffffffff
    return 'a%08x' % h


def speech_text(t):
    """和 engine.js 的 speechText() 相同：一句多說法（A / B）念的時候把斜線換掉。"""
    if ' / ' not in t:
        return t
    alts = t.split(' / ')
    return ' '.join(alts) if all(re.search(r'[.!?]$', a.strip()) for a in alts[:-1]) else ' or '.join(alts)


def audio_items(S):
    """回傳 [(voice, fast, text)]，順序不重要、會去除重複。"""
    sp = S.get('speakers', {})
    V = lambda k: (sp.get(k) or {}).get('voice', 'f')
    out = []
    dialogues = S.get('dialogues') or ([{'lines': S['dialogue']}] if S.get('dialogue') else [])
    for d in dialogues:
        for l in d['lines']:
            out.append((V(l['s']), False, l['en']))
    for p in S.get('phrases', []):
        out.append((V(p.get('s', 'Y')), False, p['en']))
    for h in S.get('hear', []):
        out.append((V('S'), False, h['en']))
        if h.get('reply'):
            out.append((V('Y'), False, h['reply']))
    for h in S.get('say', []):
        out.append((V('Y'), False, h['en']))
    for v in S.get('vocab', []):
        out.append(('f', False, v['w'] + '. ' + v['ex']))
    for s in S.get('situations', []):
        if s.get('hear'):
            out.append((V('S'), bool(s['hear'].get('fast')), s['hear']['en']))
        for y in s.get('say', []):
            out.append((V('Y'), False, y['en']))
    for q in S.get('listening', []):
        out.append((V(q.get('speaker', 'S')), bool(q.get('fast')), q['audio']))
    for r in S.get('roleplay', []):
        out.append((V('S'), False, r['prompt']))
        out.append((V('Y'), False, r['model']))
    out = [(v, f, speech_text(t)) for v, f, t in out]
    seen, uniq = set(), []
    for it in out:
        if it not in seen:
            seen.add(it); uniq.append(it)
    return uniq
