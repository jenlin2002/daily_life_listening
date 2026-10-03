import urllib.request, urllib.parse, re, json, sys, time

UA = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36',
      'Accept-Language': 'en-US,en;q=0.9'}

QUERIES = {
    'party': 'English conversation at a party meeting new people',
    'roommates': 'English conversation roommates cooking dinner together',
    'clothing-store': 'English conversation shopping for clothes at a store',
    'repair-request': 'English conversation apartment maintenance request air conditioner broken',
    'hotel': 'English conversation hotel check in front desk',
    'seeing-a-doctor': 'English conversation at the doctor describing symptoms',
    'renting-a-car': 'English conversation renting a car at the counter',
    'small-talk': 'English small talk conversation making friends',
    'heart-to-heart': 'English conversation comforting a friend after a breakup',
    'blind-date': 'English conversation first date blind date',
    'invitations': 'English conversation inviting a friend accept or decline invitation',
    'job-interview': 'English job interview questions and answers example conversation',
    'coworkers': 'English conversation with coworkers office small talk',
    'news-chat': 'English conversation talking about the news current events',
    'values-talk': 'English conversation discussing opinions values cultural differences',
}


def dur_to_sec(t):
    parts = [int(x) for x in t.split(':')]
    s = 0
    for p in parts:
        s = s * 60 + p
    return s


def search(q):
    url = 'https://www.youtube.com/results?' + urllib.parse.urlencode({'search_query': q, 'sp': 'EgIQAQ%3D%3D'})
    html = urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30).read().decode('utf-8', 'ignore')
    m = re.search(r'var ytInitialData = (\{.*?\});</script>', html, re.S)
    if not m:
        return []
    data = json.loads(m.group(1))
    out = []

    def walk(o):
        if isinstance(o, dict):
            if 'videoRenderer' in o:
                v = o['videoRenderer']
                try:
                    out.append({
                        'id': v['videoId'],
                        'title': ''.join(r['text'] for r in v['title']['runs']),
                        'channel': ''.join(r['text'] for r in v.get('ownerText', {}).get('runs', [])),
                        'len': v.get('lengthText', {}).get('simpleText', ''),
                        'views': v.get('viewCountText', {}).get('simpleText', ''),
                    })
                except Exception:
                    pass
            for x in o.values():
                walk(x)
        elif isinstance(o, list):
            for x in o:
                walk(x)
    walk(data)
    return out


def oembed(vid):
    u = 'https://www.youtube.com/oembed?format=json&url=' + urllib.parse.quote('https://www.youtube.com/watch?v=' + vid)
    try:
        r = urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=20)
        d = json.loads(r.read().decode('utf-8'))
        return True, d.get('title', ''), d.get('author_name', '')
    except Exception as e:
        return False, str(e), ''


res = {}
for slug, q in QUERIES.items():
    try:
        cands = search(q)
    except Exception as e:
        print(slug, 'ERR', e)
        continue
    keep = []
    for c in cands:
        if not c['len']:
            continue
        try:
            s = dur_to_sec(c['len'])
        except Exception:
            continue
        if 90 <= s <= 900:
            keep.append(c)
    keep = keep[:8]
    for c in keep:
        ok, t, a = oembed(c['id'])
        c['embed'] = ok
        time.sleep(0.2)
    res[slug] = keep
    print('==', slug, len(cands), '->', len(keep))
    for c in keep:
        print('  ', c['id'], '|', c['len'], '|', c['views'], '|', c['channel'], '|', c['title'][:80], '| embed' if c['embed'] else '| NO-EMBED')
json.dump(res, open(sys.argv[1], 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
