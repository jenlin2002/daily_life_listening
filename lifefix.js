/* 美式生活館：測驗規則統一以段考題庫為準（使用者 2026-10-18）。
 * 作答方式維持「一題一題做、答完看解說」（使用者選的），測驗完成的成績畫面改成段考題庫的訂正規則：
 *   1. 做完 → 成績畫面；點數只算第一次。
 *   2. 有錯題時上方「✏️ 訂正錯誤」＋「錯誤全部訂正完畢再另加補送 1 點」：只重做答錯的題目，直到全對 → 補送 1 點（Points.earn kind:'fix-bonus'）。
 *   3. 還有錯題沒訂正完：不能離開這一頁、不能換單元或分頁、不能「再做一次」；測試帳號 TEST、家長 PARENT 有「🚪 立即離開」。
 *   4. 試算表：第 N 次訂正 mode 後加「【第 N 次訂正】」（只送訂正的題目）；全部訂正完成另送「【全部訂正完成】補送 1 點」。
 *   5. 暫存：每做完一題自動暫存（localStorage lifeDraft:場景:測驗:登入者），上方「💾 暫存」；下次打開從下一題接著做。
 * 用在 engine.js（場景頁）與 index.html（單元版）的聽力測驗、聽寫練習、即時回應。
 * 用法：const fx = LifeFix.make({ id, name, list, slug, sync(mode, score, total, rows, el, noPoints), label });
 *   題目第 i 題 = list[fx.idx(i)]，共 fx.total() 題；做完一題 fx.save(i + 1, score, hist)；開始時 const d = fx.load() 接續；
 *   成績畫面：html 裡放 fx.bar()、在 sync 的地方改呼叫 fx.done(hist, score, el)，畫完呼叫 fx.bind(container, 重新開始訂正的函式, 再做一次按鈕)；
 *   「再做一次」先呼叫 fx.reset()。 */
(function () {
  if (window.LifeFix) return;
  var all = [];
  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function who() { var n = String(get('quizStudentName') || '').trim(); return (!n || /^訪客/.test(n)) ? '' : n; }
  function canSkip() { var n = who().toUpperCase(); return n === 'TEST' || n === 'PARENT'; }
  function blocking() { return all.some(function (f) { return f.alive() && (f.pending || f.inFix()); }); }
  var base = (document.currentScript && document.currentScript.src) ? document.currentScript.src.replace(/[^\/]*$/, '') : '';
  var css = document.createElement('style');
  css.textContent = '.fk-bar{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin:0 0 14px;padding:10px 14px;border-radius:14px;background:#fff4dc;border:2px solid #e7c98a;font:600 14.5px/1.5 "Noto Sans TC","Microsoft JhengHei",sans-serif;color:#6b4a12;text-align:left}'
    + '.fk-bar b{color:#c0392b}.fk-bar.done{background:#e8f5ec;border-color:#9ccfab;color:#1f6b3a}.fk-bar.done b{color:#1f6b3a}'
    + '.fk-bar button{background:#c0392b;color:#fff;border:0;border-radius:999px;padding:9px 18px;font:800 15px "Noto Sans TC","Microsoft JhengHei",sans-serif;cursor:pointer}'
    + '.fk-bar button.exit{background:#fff;color:#5a4a2a;border:1.5px solid #c9b88f}'
    + '.fk-bar a{display:inline-block;padding:7px 14px;border-radius:999px;background:#2f6fb5;color:#fff !important;font-weight:800;text-decoration:none}'
    + '.fk-fixtag{display:inline-block;margin:0 0 8px;padding:4px 12px;border-radius:999px;background:#fff4dc;border:1.5px solid #e7c98a;color:#b5761a;font:800 13px "Noto Sans TC",sans-serif}'
    + '.fk-draft{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:0 0 8px;font:13px "Noto Sans TC","Microsoft JhengHei",sans-serif;color:#7a7259}'
    + '.fk-draft button{background:#fff;color:#2f4538;border:1.5px solid #b9c4b4;border-radius:10px;padding:4px 10px;font:700 13px "Noto Sans TC",sans-serif;cursor:pointer}';
  document.head.appendChild(css);

  // 還有錯題沒訂正完：擋住離開、換單元、換分頁（單元版換分頁會重畫測驗）
  document.addEventListener('click', function (e) {
    if (!blocking() || !e.target.closest) return;
    if (e.target.closest('.fk-bar')) return;
    var a = e.target.closest('a[href]');
    var hit = (a && a.getAttribute('href') !== '#' && a.target !== '_blank') || e.target.closest('.u-tab, .u-chip, .u-f, #zoneRow button, #bookRow button');
    if (!hit) return;
    e.preventDefault(); e.stopImmediatePropagation();
    var names = all.filter(function (f) { return f.alive() && (f.pending || f.inFix()); }).map(function (f) { return f.name; }).join('、');
    alert('「' + names + '」還有錯題，先按「✏️ 訂正錯誤」訂正完才能離開喔！');
  }, true);
  window.addEventListener('beforeunload', function (e) { if (blocking()) { e.preventDefault(); e.returnValue = ''; } });

  function make(o) {
    var full = o.list.map(function (x, k) { return k; });
    var f = { name: o.name, order: full.slice(), round: 0, pending: false, skipped: false, first: '', host: null };
    all.push(f);
    f.alive = function () { return !f.host || document.body.contains(f.host); };
    f.inFix = function () { return f.round > 0 && f.order.length !== full.length && !f.skipped && !f.finished; };
    f.idx = function (i) { return f.order[i]; };
    f.total = function () { return f.order.length; };
    f.tag = function () { return f.round > 0 && !f.finished ? '<div class="fk-fixtag">✏️ 第 ' + f.round + ' 次訂正：共 ' + f.order.length + ' 題（全部訂正完畢補送 1 點）</div>' : ''; };
    f.reset = function () { f.order = full.slice(); f.round = 0; f.pending = false; f.skipped = false; f.finished = false; };
    f.done = function (hist, score, el) {
      var wrong = f.order.filter(function (k, j) { return !(hist[j] && hist[j].isCorrect); });
      if (f.round === 0) {
        f.first = score + ' / ' + f.order.length; f.clear();
        o.sync(o.name, score, f.order.length, hist, el);
      } else {
        o.sync(o.name + '【第 ' + f.round + ' 次訂正】', score, f.order.length, hist, el, true);
      }
      f.wrong = wrong; f.pending = wrong.length > 0 && !f.skipped;
      if (!wrong.length && f.round > 0) {
        f.finished = true;
        var name = who();
        if (name) o.sync(o.name + '【全部訂正完成】補送 1 點', 1, 1, [{ q: '錯題全部訂正完成（共訂正 ' + f.round + ' 次）', picked: '', correct: '', isCorrect: true }], document.createElement('div'), true);
        if (window.Points && name) { try { Points.earn({ name: name, label: o.label() + '・' + o.name, mode: '訂正完成', kind: 'fix-bonus', correct: 1, total: 1 }); } catch (e) {} }
      }
    };
    f.bar = function () {
      var exit = canSkip() ? '<button type="button" class="exit" data-lf-exit>🚪 立即離開</button>' : '';
      if (f.skipped) return '<div class="fk-bar done">🚪 已解除訂正限制（測試／家長帳號），可以離開：<a href="' + base + 'index.html">↩ 回美式生活館</a><a href="https://jenlin2002.github.io/">🏠 回主頁面</a></div>';
      if (f.pending) return '<div class="fk-bar"><button type="button" data-lf-fix>✏️ 訂正錯誤</button><span>還有 <b>' + f.wrong.length + ' 題</b>錯誤。按「訂正錯誤」把錯的題目重新作答，<b>錯誤全部訂正完畢再另加補送 1 點</b>；訂正完才能離開這一頁。</span>' + exit + '</div>';
      if (f.round > 0) return '<div class="fk-bar done">🎉 錯題全部訂正完成（訂正 ' + f.round + ' 次）！補送 <b>1 點</b>。第一次的成績：' + f.first + '。</div>';
      return '';
    };
    f.bind = function (c, onFix, again) {
      f.host = c;
      if (again) again.style.display = f.pending ? 'none' : '';
      var b = c.querySelector('[data-lf-fix]');
      if (b) b.addEventListener('click', function () { f.round++; f.order = f.wrong.slice(); f.pending = false; onFix(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
      var x = c.querySelector('[data-lf-exit]');
      if (x) x.addEventListener('click', function () {
        all.forEach(function (g) { if (g.pending || g.inFix()) { g.skipped = true; g.pending = false; } });
        f.skipped = true; f.pending = false;
        var bar = c.querySelector('.fk-bar'); if (bar) bar.outerHTML = f.bar();
        if (again) again.style.display = '';
      });
      if (f.finished) { f.order = full.slice(); }
    };
    // ---- 暫存（第一次作答才存）----
    function dkey() { return 'lifeDraft:' + o.slug + ':' + o.id + ':' + (who() || '-'); }
    f.save = function (i, score, hist) {
      if (f.round > 0 || i >= f.order.length) return;
      try { localStorage.setItem(dkey(), JSON.stringify({ i: i, s: score, h: hist, t: Date.now() })); } catch (e) {}
      var n = document.querySelector('.fk-draft span'); if (n) n.textContent = '已自動暫存（做到第 ' + i + ' 題），下次打開會從第 ' + (i + 1) + ' 題接著做';
    };
    f.clear = function () { try { localStorage.removeItem(dkey()); } catch (e) {} };
    f.load = function () {
      var d = null; try { d = JSON.parse(get(dkey()) || 'null'); } catch (e) {}
      return d && d.i > 0 && d.i < full.length && d.h && d.h.length === d.i ? d : null;
    };
    f.draftHtml = function (i, resumed) {
      if (f.round > 0) return '';
      return '<div class="fk-draft"><button type="button" data-lf-save>💾 暫存</button><span>' + (resumed ? '📌 已接續上次暫存的作答，從第 ' + (i + 1) + ' 題接著做' : '每做完一題會自動暫存，做到一半可以先離開，下次接著做') + '</span></div>';
    };
    f.bindDraft = function (c, i, score, hist) {
      var b = c.querySelector('[data-lf-save]'); if (!b) return;
      b.addEventListener('click', function () {
        if (!i) { c.querySelector('.fk-draft span').textContent = '還沒有作答，不用暫存'; return; }
        f.save(i, score, hist); c.querySelector('.fk-draft span').textContent = '✅ 已暫存（做到第 ' + i + ' 題），下次打開會從第 ' + (i + 1) + ' 題接著做';
      });
    };
    return f;
  }
  window.LifeFix = { make: make };
})();
