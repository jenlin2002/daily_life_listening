// 美式生活館：場景頁面引擎。
// 每個場景資料夾只要提供 scene.js（window.SCENE），這支程式就會產生整頁內容。
// 資料格式請看 README.md。分頁只有在場景有對應內容時才會出現，所以之後新增分頁類型不會影響舊場景。
(function(){
const S = window.SCENE;
const CAT = window.LIFE_CATALOG || { zones: [], scenes: [] };
const DEFAULT_SYNC_URL = "https://script.google.com/macros/s/AKfycbwqd9cr_3MfXK8hzs8Y-YPQQUqOH5vKtW_vMav1nMAAt9VkBCP_5WP6Q1TDngIlr51U/exec";
const LEVEL = { 1: '入門', 2: '基礎', 3: '進階' };
const $ = (sel, el) => (el || document).querySelector(sel);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const has = a => Array.isArray(a) && a.length > 0;
// 「No worries. / No biggies.」這種一句多說法：念的時候把斜線換掉（和 tools/common.py 的 speech_text 一致）
function speechText(t){
  if(t.indexOf(' / ') < 0) return t;
  const alts = t.split(' / ');
  return alts.slice(0, -1).every(a => /[.!?]$/.test(a.trim())) ? alts.join(' ') : alts.join(' or ');
}

// ---------- storage（iOS 預覽模式可能封鎖 localStorage）----------
const mem = {};
const get = k => { try{ return localStorage.getItem(k); }catch(e){ return (k in mem) ? mem[k] : null; } };
const set = (k, v) => { try{ localStorage.setItem(k, v); }catch(e){ mem[k] = v; } };

// ---------- 語音檔名：由「聲音|語速|句子」算出，和 tools/make_audio.py 用同一個算法 ----------
// 句子改了檔名就跟著變，所以修改或新增句子只要補產生新的語音，不會播錯。
function audioKey(voice, fast, text){
  const bytes = new TextEncoder().encode(voice + '|' + (fast ? 'fast' : 'n') + '|' + text);
  let h = 0x811c9dc5;
  for(let i = 0; i < bytes.length; i++){ h ^= bytes[i]; h = Math.imul(h, 0x01000193) >>> 0; }
  return 'a' + h.toString(16).padStart(8, '0');
}

// ---------- 播放：先播 mp3，沒有就用裝置內建語音 ----------
let speed = parseFloat(get('lifeSpeed') || '1') || 1;
let curAudio = null, chainToken = 0;
const synth = typeof window.speechSynthesis !== 'undefined' ? window.speechSynthesis : null;
let voices = [];
function loadVoices(){ if(synth) voices = synth.getVoices(); }
if(synth){ loadVoices(); synth.onvoiceschanged = loadVoices; }
function pickVoice(code){
  const male = /^m/.test(code || '');
  const en = voices.filter(v => v.lang && v.lang.startsWith('en'));
  const fem = /female|samantha|zira|jenny|aria|ava|allison|susan|karen|victoria|google us english/i;
  const mal = /\bmale|alex|david|guy|daniel|fred|tom|aaron|google uk english male/i;
  const want = male ? mal : fem;
  const rank = v => (want.test(v.name) ? 8 : 0) + (/natural|neural|online|google/i.test(v.name) ? 4 : 0) + (v.lang === 'en-US' ? 2 : 0);
  return en.sort((a, b) => rank(b) - rank(a))[0] || null;
}
function stopAll(){
  chainToken++;
  if(synth) synth.cancel();
  if(curAudio){ curAudio.pause(); curAudio = null; }
  document.querySelectorAll('.playing').forEach(b => b.classList.remove('playing'));
  document.querySelectorAll('.bubble.now').forEach(b => b.classList.remove('now'));
}
// 播一句，播完 resolve(true)；被打斷 resolve(false)
function play(text, voice, btn, opts){
  opts = opts || {};
  text = speechText(text);
  if(!opts.keep) stopAll();
  const token = chainToken;
  const rate = opts.rate || speed;
  return new Promise(resolve => {
    let done = false;
    const finish = () => { if(done) return; done = true; if(btn) btn.classList.remove('playing'); resolve(token === chainToken); };
    if(btn) btn.classList.add('playing');
    const tts = () => {
      if(!synth){ finish(); return; }
      if(!voices.length) loadVoices();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US'; u.rate = (opts.fast ? 1.2 : 0.95) * rate;
      const v = pickVoice(voice); if(v) u.voice = v;
      u.onend = u.onerror = finish;
      synth.speak(u);
    };
    const a = new Audio('audio/' + audioKey(voice, opts.fast, text) + '.mp3');
    a.playbackRate = rate;
    let fell = false;
    const fb = () => { if(fell) return; fell = true; tts(); };
    a.addEventListener('error', fb);
    a.addEventListener('ended', finish);
    const p = a.play();
    if(p && p.catch) p.catch(e => { if(!(e && e.name === 'AbortError')) fb(); });
    curAudio = a;
  });
}
function sayBtn(text, voice, small, fast){
  return `<button class="say${small ? ' small' : ''}" type="button" data-text="${esc(text)}" data-v="${esc(voice)}"${fast ? ' data-fast="1"' : ''} aria-label="播放">🔊</button>`;
}
document.addEventListener('click', e => {
  const b = e.target.closest('.say');
  if(b) play(b.dataset.text, b.dataset.v, b, { fast: !!b.dataset.fast });
});

// 角色：S = 對方（店員、醫生、櫃台…），Y = 你。voice 代碼 f、m、f2、m2…（f 開頭女聲、m 開頭男聲）
const SP = S.speakers;
const V = k => (SP[k] || {}).voice || 'f';
const isYou = k => k === 'Y' || !!(SP[k] || {}).you;   // 靠右顯示的「我」，可以不只一個（例如不同情境裡的我）
const other = SP.S || { name: 'Staff', zh: '對方', avatar: '🧑' };

// ---------- 誰在練習 ----------
let student = get('quizStudentName') || '';
function renderWho(){
  const isOther = student && student !== 'BRANDEN' && student !== 'MELISSA';
  $('#idRow').innerHTML = `<span class="lbl">目前是誰在練習：</span>
    <button class="id-btn${student === 'BRANDEN' ? ' active' : ''}" data-n="BRANDEN">BRANDEN</button>
    <button class="id-btn${student === 'MELISSA' ? ' active' : ''}" data-n="MELISSA">MELISSA</button>
    <button class="id-btn${isOther ? ' active' : ''}" data-n="__other">${isOther ? esc(student) : '其他'}</button>`;
}
document.addEventListener('click', e => {
  const b = e.target.closest('.id-btn'); if(!b) return;
  let n = b.dataset.n;
  if(n === '__other'){ n = (window.prompt('請輸入你的名字（英文或中文都可以）', '') || '').trim(); if(!n) return; }
  student = n; set('quizStudentName', n); renderWho();
});
const SYNC_LABEL = 'Life｜' + S.title;
// 學習點數存摺：points.js 放在網站根目錄，和 engine.js 同一層；沒設定後端網址時它什麼都不做
(function(){
  const cs = document.currentScript;
  if(!cs || !cs.src || window.Points) return;
  const sc = document.createElement('script'); sc.src = new URL('points.js', cs.src).href;
  sc.onload = () => { if(window.Points && Points.setNameGetter) Points.setNameGetter(() => student); };
  document.head.appendChild(sc);
})();
async function sync(mode, score, total, details, el){
  if(window.Points) Points.earn({ name: student, label: SYNC_LABEL, mode, correct: score, total });
  const url = get('quizSyncUrl') || DEFAULT_SYNC_URL;
  if(!student){ el.textContent = '☁️ 尚未選擇是誰在練習，成績未回傳（請點上方名字）'; return; }
  el.textContent = '☁️ 同步中...';
  try{
    await fetch(url, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ name: student, week: SYNC_LABEL, mode, score, total, percent: Math.round(score / total * 100), details }) });
    el.textContent = '☁️ 已送出同步，可到試算表確認';
  }catch(e){ el.textContent = '☁️ 同步失敗，請檢查網路連線'; }
}

// ---------- 目錄資訊：難度、標籤、上一個／下一個場景 ----------
const zoneOrder = id => ((CAT.zones.find(z => z.id === id) || {}).order || 0);
const readyList = CAT.scenes.filter(s => s.ready).sort((a, b) => zoneOrder(a.zone) - zoneOrder(b.zone) || (a.order || 0) - (b.order || 0));
const me = CAT.scenes.find(s => s.slug === S.slug) || {};
const idx = readyList.findIndex(s => s.slug === S.slug);
const prev = idx > 0 ? readyList[idx - 1] : null, next = idx >= 0 && idx < readyList.length - 1 ? readyList[idx + 1] : null;
const zone = CAT.zones.find(z => z.id === me.zone);

// ---------- 版面 ----------
const dialogues = has(S.dialogues) ? S.dialogues : (has(S.dialogue) ? [{ title: '情境對話', lines: S.dialogue }] : []);
const dictList = (has(S.phrases) ? S.phrases : (S.say || [])).filter(x => x.en.indexOf(' / ') < 0);
const TABS = [
  ['scene', '🎬 情境影片', dialogues.length || has(S.videos)], ['phrases', '📋 句子矩陣', has(S.phrases)],
  ['hear', '👂 你會聽到的', has(S.hear)], ['say', '🗣️ 你要說的', has(S.say)],
  ['vocab', '🔤 場景單字', has(S.vocab)], ['sit', '⚡ 突發狀況', has(S.situations)], ['dict', '✍️ 聽寫練習', dictList.length > 0],
  ['listen', '🎧 聽力測驗', has(S.listening)],
  ['role', '🎤 即時回應', has(S.roleplay)], ['culture', '💡 文化小提醒', has(S.culture)]
].filter(t => t[2]);
document.title = '美式生活館｜' + S.title;
document.body.innerHTML = `<div class="wrap">
  <div class="top-links"><a class="home-link" href="../../index.html#s=${esc(S.slug)}">⬅ 返回單元列表</a><a class="home-link" href="../../catalog.html">🔎 全部場景卡片</a><a class="home-link" href="https://jenlin2002.github.io/">← 網站首頁</a></div>
  <div class="eyebrow">AMERICAN LIFE LAB${zone ? ' · ' + esc(zone.name) : ''}</div>
  <h1 class="title">${S.emoji || ''} ${esc(S.title)}</h1>
  <div class="subtitle">${esc(S.en)}${S.goal ? '<br>' + esc(S.goal) : ''}</div>
  <div class="scene-meta">${me.level ? `<span>難度：${LEVEL[me.level]}</span>` : ''}${(me.tags || []).map(t => `<span>#${esc(t)}</span>`).join('')}</div>
  <div class="id-row" id="idRow"></div>
  <div class="tabs">${TABS.map(([k, t], i) => `<button class="tab${i ? '' : ' active'}" data-tab="${k}">${t}</button>`).join('')}</div>
  <div class="card">${TABS.map(([k], i) => `<div class="panel${i ? '' : ' active'}" id="p-${k}"></div>`).join('')}</div>
  <div class="scene-nav"><span>${prev ? `<a href="../${esc(prev.slug)}/index.html">← ${esc(prev.title)}</a>` : ''}</span><span>${next ? `<a href="../${esc(next.slug)}/index.html">${esc(next.title)} →</a>` : ''}</span></div>
  <div style="text-align:center;margin-top:18px"><a class="home-link" href="../../index.html#s=${esc(S.slug)}">⬅ 返回單元列表</a></div>
  <div class="footer-note">練習結果會自動同步到 Google 試算表。沒有錄好語音的句子，會改用裝置內建的英文語音播放。</div>
</div>`;
renderWho();
document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => {
  stopAll();
  document.querySelectorAll('.tab').forEach(x => x.classList.toggle('active', x === t));
  document.querySelectorAll('.panel').forEach(p => p.classList.toggle('active', p.id === 'p-' + t.dataset.tab));
  window.scrollTo({ top: 0 });
}));
const panel = k => $('#p-' + k);

// ---------- 🎬 情境對話（可以有多段，例如：櫃台點餐／得來速）----------
if(panel('scene')){
  const p = panel('scene');
  let cur = 0;
  p.innerHTML = `<h2>情境對話</h2>
    <p class="lead">先只用耳朵聽一次（選「隱藏字幕」），再打開英文字幕聽第二次，最後看中文確認意思。點任何一句可以單獨重聽。</p>
    ${dialogues.length > 1 ? `<div class="vtabs">${dialogues.map((d, i) => `<button class="vtab${i ? '' : ' on'}" data-i="${i}">${esc(d.title)}</button>`).join('')}</div>` : ''}
    <div id="dlgWrap"></div>
    ${has(S.videos) ? `<h2 style="margin-top:28px">推薦影片（真人示範）</h2>
      <div class="vnote">這些是從 YouTube 找到的英語教學影片，系統沒辦法事先看過內容，<b>請老師先預覽</b>再給學生看。如果影片不能在這裡播放，請點「在 YouTube 開啟」。</div>
      <div class="vids">${S.videos.map(v => `<div class="vid"><div class="frame" data-yt="${esc(v.id)}"><div class="ph"><span class="big">▶</span>${esc(v.title)}<br><small>點一下載入影片</small></div></div>
        <div class="meta"><span>${esc(v.title)}</span><a href="https://www.youtube.com/watch?v=${esc(v.id)}" target="_blank" rel="noopener">在 YouTube 開啟 ↗</a></div></div>`).join('')}</div>` : ''}`;
  let sub = 'both';
  function drawDialogue(){
    const d = dialogues[cur]; if(!d){ $('#dlgWrap').innerHTML = ''; return; }
    const sps = [...new Set(d.lines.map(l => l.s))].map(k => SP[k]).filter(Boolean);
    $('#dlgWrap').innerHTML = `<div class="banner"><div class="emoji">${d.emoji || S.emoji || ''}</div><div><div class="where">📍 ${esc(d.where || S.where || d.title)}</div>
        <div class="who">${sps.map(x => x.avatar + ' ' + esc(x.zh)).join('　')}</div></div></div>
      <div class="controls">
        <button class="play-all" id="playAll">▶ 播放整段對話</button>
        <div class="grp" id="subGrp"><button class="chip" data-sub="none">隱藏字幕</button><button class="chip" data-sub="en">英文</button><button class="chip" data-sub="both">英＋中</button></div>
        <div class="grp" id="spdGrp"><button class="chip" data-spd="0.75">慢速</button><button class="chip" data-spd="1">正常</button></div>
      </div>
      <div class="dlg" id="dlg">${d.lines.map((l, i) => { const x = SP[l.s] || {}; return `<div class="line ${isYou(l.s) ? 'you' : ''}"><div class="avatar">${x.avatar || ''}</div>
        <div class="bubble" data-i="${i}"><div class="spk">${esc((x.name || '').toUpperCase())}</div><div class="en">${esc(l.en)}</div><div class="zh">${esc(l.zh)}</div></div></div>`; }).join('')}</div>`;
    const dlg = $('#dlg');
    const setSub = m => { sub = m; dlg.classList.toggle('hide-en', m === 'none'); dlg.classList.toggle('hide-zh', m !== 'both');
      p.querySelectorAll('#subGrp .chip').forEach(c => c.classList.toggle('on', c.dataset.sub === m)); };
    const setSpd = v => { speed = v; set('lifeSpeed', String(v)); p.querySelectorAll('#spdGrp .chip').forEach(c => c.classList.toggle('on', parseFloat(c.dataset.spd) === v)); };
    p.querySelectorAll('#subGrp .chip').forEach(c => c.addEventListener('click', () => setSub(c.dataset.sub)));
    p.querySelectorAll('#spdGrp .chip').forEach(c => c.addEventListener('click', () => setSpd(parseFloat(c.dataset.spd))));
    setSub(sub); setSpd(speed);
    const bubbles = Array.prototype.slice.call(dlg.querySelectorAll('.bubble'));
    const playLine = (i, keep) => {
      const l = d.lines[i], b = bubbles[i];
      bubbles.forEach(x => x.classList.remove('now')); b.classList.add('now');
      b.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      return play(l.en, V(l.s), null, { keep }).then(ok => { b.classList.remove('now'); return ok; });
    };
    bubbles.forEach((b, i) => b.addEventListener('click', () => { b.classList.add('revealed'); playLine(i); }));
    const btn = $('#playAll');
    btn.addEventListener('click', async () => {
      if(btn.classList.contains('playing')){ stopAll(); btn.textContent = '▶ 播放整段對話'; return; }
      stopAll(); btn.classList.add('playing'); btn.textContent = '■ 停止';
      for(let i = 0; i < d.lines.length; i++){
        if(!(await playLine(i, true))) break;
        await new Promise(r => setTimeout(r, 350));
      }
      btn.classList.remove('playing'); btn.textContent = '▶ 播放整段對話';
    });
  }
  p.querySelectorAll('.vtab').forEach(t => t.addEventListener('click', () => {
    stopAll(); cur = +t.dataset.i; p.querySelectorAll('.vtab').forEach(x => x.classList.toggle('on', x === t)); drawDialogue();
  }));
  drawDialogue();
  p.querySelectorAll('.frame[data-yt]').forEach(f => f.addEventListener('click', () => {
    if(f.querySelector('iframe')) return;
    f.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(f.dataset.yt)}?rel=0" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen title="YouTube video"></iframe>`;
  }));
}

// ---------- 📋 句子矩陣：一次看完這個場景的實用句，可以遮住英文或中文自我測驗，標記學會了 ----------
if(panel('phrases')){
  const p = panel('phrases'), P = S.phrases, KEY = 'lifeDone:' + S.slug;
  let done = {}; try{ done = JSON.parse(get(KEY) || '{}') || {}; }catch(e){}
  const k = x => audioKey('', false, x.en);
  p.innerHTML = `<h2>句子矩陣</h2><p class="lead">這個場景會用到的實用句。先看中文、自己說說看英文，再按 🔊 對答案；學會了就按 ✓。</p>
    <div class="controls"><div class="grp" id="mxHide"><button class="chip on" data-h="">全部顯示</button><button class="chip" data-h="en">遮住英文</button><button class="chip" data-h="zh">遮住中文</button></div>
      <span class="mx-prog" id="mxProg"></span></div>
    <div class="rows mx" id="mx">${P.map((x, i) => `<div class="row" data-i="${i}">${sayBtn(x.en, V(x.s || 'Y'))}<div class="txt"><div class="en">${esc(x.en)}</div><div class="zh">${esc(x.zh)}</div></div>
      <button class="mx-done" type="button" aria-label="學會了">✓</button></div>`).join('')}</div>`;
  const mx = $('#mx');
  const prog = () => {
    const n = P.filter(x => done[k(x)]).length;
    $('#mxProg').innerHTML = `已學會 <b>${n}</b> / ${P.length}<span class="bar"><span style="width:${Math.round(n / P.length * 100)}%"></span></span>`;
    mx.querySelectorAll('.row').forEach(r => r.classList.toggle('done', !!done[k(P[+r.dataset.i])]));
  };
  mx.addEventListener('click', e => {
    const d = e.target.closest('.mx-done');
    if(d){ const x = P[+d.closest('.row').dataset.i]; if(done[k(x)]) delete done[k(x)]; else done[k(x)] = 1; set(KEY, JSON.stringify(done)); prog(); return; }
    const t = e.target.closest('.txt'); if(t) t.classList.add('peek');
  });
  p.querySelectorAll('#mxHide .chip').forEach(c => c.addEventListener('click', () => {
    p.querySelectorAll('#mxHide .chip').forEach(x => x.classList.toggle('on', x === c));
    mx.classList.toggle('hide-en', c.dataset.h === 'en'); mx.classList.toggle('hide-zh', c.dataset.h === 'zh');
    mx.querySelectorAll('.peek').forEach(x => x.classList.remove('peek'));
  }));
  prog();
}

// ---------- 👂 你會聽到的 / 🗣️ 你要說的 ----------
if(panel('hear')) panel('hear').innerHTML = `<h2>你會聽到的句子</h2><p class="lead">這些是${esc(other.zh)}常說的話。先聽懂意思，再看下面綠色的「你可以這樣回」。</p>
  <div class="rows">${S.hear.map(h => `<div class="row">${sayBtn(h.en, V('S'))}<div class="txt"><div class="en">${esc(h.en)}</div><div class="zh">${esc(h.zh)}</div>
    ${h.reply ? `<div class="reply">↳ 你可以這樣回：<b>${esc(h.reply)}</b>${sayBtn(h.reply, V('Y'), true)}<br><span class="zh">${esc(h.replyZh)}</span></div>` : ''}</div></div>`).join('')}</div>`;
if(panel('say')) panel('say').innerHTML = `<h2>你要說的句子</h2><p class="lead">按 🔊 聽，跟著大聲念三次，直到不用看也說得出來。</p>
  <div class="rows">${S.say.map(h => `<div class="row">${sayBtn(h.en, V('Y'))}<div class="txt"><div class="en">${esc(h.en)}</div><div class="zh">${esc(h.zh)}</div></div></div>`).join('')}</div>`;

// ---------- 🔤 單字 ----------
if(panel('vocab')) panel('vocab').innerHTML = `<h2>場景單字</h2><p class="lead">在這個場合一定會看到或聽到的字。</p>
  <div class="vgrid">${S.vocab.map(v => `<div class="vcard"><div class="w"><span>${esc(v.w)}</span>${sayBtn(v.w + '. ' + v.ex, 'f', true)}</div>
    <div class="m">${esc(v.pos)} ${esc(v.zh)}</div><div class="ex">${esc(v.ex)}</div><div class="exzh">${esc(v.exzh)}</div></div>`).join('')}</div>`;

// ---------- ⚡ 突發狀況 ----------
if(panel('sit')) panel('sit').innerHTML = `<h2>突發狀況</h2><p class="lead">事情不一定照劇本走。遇到這些狀況時，先聽懂對方的話，再用下面的句子應對。</p>
  ${S.situations.map(s => `<div class="sit"><h3>${esc(s.title)}</h3>
    ${s.hear ? `<div class="who-says">${esc((other.name || '').toUpperCase())} 可能會說</div><div class="en">${esc(s.hear.en)} ${sayBtn(s.hear.en, V('S'), true, s.hear.fast)}</div><div class="zh">${esc(s.hear.zh)}</div>` : ''}
    <div class="who-says">你可以說</div>${(s.say || []).map(y => `<div class="en">${esc(y.en)} ${sayBtn(y.en, V('Y'), true)}</div><div class="zh">${esc(y.zh)}</div>`).join('')}
    ${s.tip ? `<div class="tip">💡 ${esc(s.tip)}</div>` : ''}</div>`).join('')}`;

// ---------- 💡 文化 ----------
if(panel('culture')) panel('culture').innerHTML = `<h2>文化小提醒</h2><p class="lead">在美國，這些「潛規則」和台灣不太一樣。</p>
  <div class="tips">${S.culture.map(c => `<div class="tipc"><b>${esc(c.t)}</b>${esc(c.d)}</div>`).join('')}</div>`;

// ---------- ✍️ 聽寫練習：聽一句、打出來，大小寫和標點不計 ----------
if(panel('dict')){
  const p = panel('dict'), D = dictList;
  const norm = t => t.toLowerCase().replace(/[‘’`]/g, "'").replace(/[“”]/g, '"').replace(/[^a-z0-9' ]+/g, ' ').replace(/\s+/g, ' ').trim();
  let i = 0, score = 0, tries = 0, hist = [];
  const render = () => {
    if(i >= D.length){
      p.innerHTML = `<div class="result"><h2>聽寫練習完成</h2><div class="score">${score} / ${D.length}</div>
        <div class="msg">第一次就寫對的句子有 ${score} 句。</div><button class="next" id="dAgain">再練一次</button><div class="sync" id="dSync"></div></div>`;
      $('#dAgain').addEventListener('click', () => { i = 0; score = 0; hist = []; render(); });
      sync('聽寫練習', score, D.length, hist, $('#dSync'));
      return;
    }
    const x = D[i], voice = V(x.s || 'Y'); tries = 0;
    p.innerHTML = `<div class="qtop"><div class="qnum">第 ${i + 1} 句 / ${D.length}</div><div class="qtag">聽寫</div></div>
      <div class="btnrow"><button class="bigplay" id="dPlay">🔊 播放</button><button class="ghost" id="dSlow">🐢 慢速</button><button class="ghost" id="dHint">看中文提示</button></div>
      <div class="rp-hint" id="dZh" hidden style="margin-top:10px">${esc(x.zh)}</div>
      <input class="typed" id="dIn" placeholder="把聽到的句子打出來" autocomplete="off" autocapitalize="off" spellcheck="false">
      <div class="btnrow"><button class="ghost" id="dCheck">檢查</button><button class="ghost" id="dShow">看答案</button></div>
      <div class="fb" id="dFb"></div><button class="next" id="dNext" disabled>下一句 →</button>`;
    const pb = $('#dPlay');
    pb.addEventListener('click', () => play(x.en, voice, pb, { rate: 1 }));
    $('#dSlow').addEventListener('click', e => play(x.en, voice, e.currentTarget, { rate: 0.7 }));
    $('#dHint').addEventListener('click', () => { $('#dZh').hidden = false; });
    let finished = false;
    const finish = (ok, shown) => {
      if(finished) return; finished = true;
      if(ok && tries === 1) score++;
      hist.push({ q: x.en, picked: $('#dIn').value, correct: x.en, isCorrect: ok && tries === 1 });
      $('#dNext').disabled = false;
    };
    const check = () => {
      const v = $('#dIn').value; if(!v.trim()) return; tries++;
      const want = norm(x.en).split(' '), got = norm(v).split(' ');
      const fb = $('#dFb');
      if(want.join(' ') === got.join(' ')){
        fb.className = 'fb show ok'; fb.innerHTML = `✓ 完全正確！<br><b>${esc(x.en)}</b><br><span class="zh">${esc(x.zh)}</span>`; finish(true);
      } else {
        const miss = want.filter(w => got.indexOf(w) < 0);
        fb.className = 'fb show no';
        fb.innerHTML = `✕ 還差一點，${miss.length ? '漏掉或拼錯的字有 ' + miss.length + ' 個' : '字的順序不太對'}。再聽一次，改好後再按「檢查」，或按「看答案」。`;
      }
    };
    $('#dCheck').addEventListener('click', check);
    $('#dIn').addEventListener('keydown', e => { if(e.key === 'Enter') check(); });
    $('#dShow').addEventListener('click', () => {
      const fb = $('#dFb'); fb.className = 'fb show no'; fb.innerHTML = `答案：<b>${esc(x.en)}</b><br><span class="zh">${esc(x.zh)}</span>`; finish(false);
    });
    $('#dNext').addEventListener('click', () => { stopAll(); i++; render(); });
  };
  render();
}

// ---------- 🎧 聽力測驗 ----------
if(panel('listen')){
  const p = panel('listen'); const Q = S.listening;
  let i = 0, score = 0, hist = [];
  const render = () => {
    if(i >= Q.length){
      p.innerHTML = `<div class="result"><h2>聽力測驗完成</h2><div class="score">${score} / ${Q.length}</div>
        <div class="msg">${score === Q.length ? '全對！你已經聽得懂這個場景了。' : '把答錯的句子回到「你會聽到的」再多聽幾次。'}</div>
        <button class="next" id="lAgain">再做一次</button><div class="sync" id="lSync"></div></div>`;
      $('#lAgain').addEventListener('click', () => { i = 0; score = 0; hist = []; render(); });
      sync('聽力測驗', score, Q.length, hist, $('#lSync'));
      return;
    }
    const q = Q[i], voice = V(q.speaker || 'S');
    p.innerHTML = `<div class="qtop"><div class="qnum">第 ${i + 1} 題 / ${Q.length}</div><div class="qtag">${esc(q.type)}</div></div>
      <button class="bigplay" id="qPlay">🔊 播放</button> <span style="font-size:13px;color:var(--ink-soft)">（正常語速，可以重複聽）</span>
      <div class="qprompt">${esc(q.prompt)}</div>
      <div class="opts">${q.options.map((o, k) => `<button class="opt" data-k="${k}">(${String.fromCharCode(65 + k)}) ${esc(o)}</button>`).join('')}</div>
      <div class="fb" id="qFb"></div><button class="next" id="qNext" disabled>下一題 →</button>`;
    const pb = $('#qPlay');
    pb.addEventListener('click', () => play(q.audio, voice, pb, { rate: 1, fast: q.fast }));
    p.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
      const k = +b.dataset.k, ok = k === q.answer;
      p.querySelectorAll('.opt').forEach(x => { x.disabled = true; if(+x.dataset.k === q.answer) x.classList.add('correct'); });
      if(ok) score++; else b.classList.add('wrong');
      hist.push({ q: q.audio, picked: q.options[k], correct: q.options[q.answer], isCorrect: ok });
      const fb = $('#qFb'); fb.className = 'fb show ' + (ok ? 'ok' : 'no');
      fb.innerHTML = (ok ? '✓ 答對了！' : '✕ 再聽一次看看。') + `<br>原句：<b>${esc(q.audio)}</b><br>${esc(q.note)}`;
      $('#qNext').disabled = false;
    }));
    $('#qNext').addEventListener('click', () => { stopAll(); i++; render(); });
  };
  render();
}

// ---------- 🎤 即時回應（角色扮演）----------
if(panel('role')){
  const p = panel('role'); const R = S.roleplay;
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const secs = S.answerSeconds || 8;
  let i = 0, score = 0, hist = [], rec = null, timerId = null, results = [];
  const stopRec = () => { if(timerId){ clearInterval(timerId); timerId = null; } if(rec){ try{ rec.abort(); }catch(e){} rec = null; } };
  const render = () => {
    stopRec();
    if(i >= R.length){
      p.innerHTML = `<div class="result"><h2>即時回應完成</h2><div class="score">${score} / ${R.length}</div>
        <div class="msg">${score === R.length ? '太棒了！每一句都接得上。' : '沒通過的句子，先聽示範再練一次。'}</div>
        <div class="rows" style="text-align:left">${results.map(x => `<div class="row"><div class="txt"><div class="zh">${esc(x.prompt)}</div>
          <div class="en">${x.ok ? '✓' : '✕'} ${esc(x.said || '（沒有回答）')}</div><div class="reply">示範：<b>${esc(x.model)}</b></div></div></div>`).join('')}</div>
        <button class="next" id="rAgain">再演一次</button><div class="sync" id="rSync"></div></div>`;
      $('#rAgain').addEventListener('click', () => { i = 0; score = 0; hist = []; results = []; render(); });
      sync('即時回應', score, R.length, hist, $('#rSync'));
      return;
    }
    const r = R[i];
    p.innerHTML = `<div class="qtop"><div class="qnum">第 ${i + 1} 句 / ${R.length}</div><div class="qtag">角色扮演</div></div>
      <p class="lead">${esc(other.zh)}會先說一句話，聽完後<b>馬上</b>回答。按麥克風開始說，有 ${secs} 秒。</p>
      <div class="rp-stage">
        <div class="rp-staff"><span class="avatar">${other.avatar || ''}</span>${sayBtn(r.prompt, V('S'))}<span class="en hidden" id="rStaff">${esc(r.prompt)}</span></div>
        <div class="rp-hint">提示：${esc(r.hint)}　<a href="#" id="rShow" style="color:var(--deep)">看${esc(other.zh)}說了什麼</a></div>
        ${SR ? `<button class="mic" id="rMic">🎤 按這裡開始說</button><span class="timer" id="rTimer"></span>` : `<div class="rp-hint">這個瀏覽器不支援語音辨識，請把你要說的話打在下面（建議用 Chrome 或 Safari）。</div>`}
        <div class="heard"><div class="lbl">你說的是</div><div id="rHeard"></div></div>
        ${SR ? '' : '<input class="typed" id="rTyped" placeholder="輸入你的回答" autocomplete="off">'}
        <div class="btnrow">${SR ? '' : '<button class="ghost" id="rSubmit">送出</button>'}<button class="ghost" id="rSkip">我說完了 / 看示範</button></div>
        <div class="fb" id="rFb"></div>
      </div>
      <button class="next" id="rNext" disabled>下一句 →</button>`;
    $('#rShow').addEventListener('click', e => { e.preventDefault(); $('#rStaff').classList.remove('hidden'); });
    let said = '', judged = false;
    const judge = () => {
      if(judged) return; judged = true; stopRec();
      const ok = new RegExp(r.expect, 'i').test(said);
      if(ok) score++;
      hist.push({ q: r.prompt, picked: said, correct: r.model, isCorrect: ok });
      results.push({ prompt: r.promptZh, said, ok, model: r.model });
      const fb = $('#rFb'); fb.className = 'fb show ' + (ok ? 'ok' : 'no');
      fb.innerHTML = (ok ? '✓ 很好，這樣回答對方聽得懂！' : (said ? '✕ 好像還少了關鍵說法，' : '✕ 沒有收到回答，') + '聽聽看示範：') +
        `<br>示範：<b>${esc(r.model)}</b> ${sayBtn(r.model, V('Y'), true)}<br><span class="zh">${esc(r.modelZh)}</span>`;
      $('#rStaff').classList.remove('hidden');
      $('#rNext').disabled = false;
    };
    $('#rSkip').addEventListener('click', judge);
    if(!SR){
      const t = $('#rTyped');
      const submit = () => { said = t.value.trim(); $('#rHeard').textContent = said; judge(); };
      $('#rSubmit').addEventListener('click', submit);
      t.addEventListener('keydown', e => { if(e.key === 'Enter') submit(); });
    } else {
      const mic = $('#rMic');
      mic.addEventListener('click', () => {
        if(rec){ judge(); return; }
        stopAll();
        try{
          rec = new SR(); rec.lang = 'en-US'; rec.interimResults = true; rec.continuous = true;
          rec.onresult = ev => { said = Array.prototype.map.call(ev.results, x => x[0].transcript).join(' ').trim(); $('#rHeard').textContent = said; };
          rec.onerror = ev => { if(ev.error === 'not-allowed') $('#rHeard').textContent = '（麥克風沒有開啟權限）'; };
          rec.start();
        }catch(e){ rec = null; $('#rHeard').textContent = '（無法啟動麥克風）'; return; }
        mic.classList.add('rec'); mic.textContent = '■ 說完了';
        let left = secs; $('#rTimer').textContent = left;
        timerId = setInterval(() => { left--; $('#rTimer').textContent = left > 0 ? left : ''; if(left <= 0) judge(); }, 1000);
      });
    }
    $('#rNext').addEventListener('click', () => { stopAll(); i++; render(); });
  };
  render();
}
})();
