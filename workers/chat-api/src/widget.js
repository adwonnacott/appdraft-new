/* AppDraft website chat widget. Plain JavaScript, no dependencies.
   Mounted with: <script src="/api/chat/widget.js" async></script>
   Optional: data-api (chat API base, default /api/chat) and data-sitekey (Turnstile site key) for previews. */
(function () {
  'use strict';
  if (window.__appdraftChat) return;
  window.__appdraftChat = true;

  var script = document.currentScript;
  var API = (script && script.getAttribute('data-api')) || '/api/chat';
  var SITE_KEY = (script && script.getAttribute('data-sitekey')) || '0x4AAAAAACXuClfrEWjl2326';
  var STORE = 'appdraft-chat';
  var state = { open: false, sessionId: null, messages: [], busy: false, turnstileId: null, opened: false };

  try { var saved = JSON.parse(sessionStorage.getItem(STORE) || 'null'); if (saved && saved.sessionId) { state.sessionId = saved.sessionId; state.messages = saved.messages || []; } } catch (e) {}
  function save() { try { sessionStorage.setItem(STORE, JSON.stringify({ sessionId: state.sessionId, messages: state.messages.slice(-20) })); } catch (e) {} }

  var css = '' +
    '.adc-btn{position:fixed;right:20px;bottom:20px;z-index:2147483000;width:56px;height:56px;border-radius:50%;border:0;background:#19779b;color:#fff;box-shadow:0 6px 20px rgba(31,45,61,.25);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:transform .15s}' +
    '.adc-btn:hover{transform:scale(1.05)}.adc-btn svg{width:26px;height:26px}' +
    '.adc-panel{position:fixed;right:20px;bottom:88px;z-index:2147483000;width:380px;max-width:calc(100vw - 24px);height:560px;max-height:calc(100vh - 110px);background:#fff;border-radius:16px;box-shadow:0 12px 40px rgba(31,45,61,.28);display:none;flex-direction:column;overflow:hidden;font-family:"Nunito Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;color:#1f2d3d;font-size:15px;line-height:1.45}' +
    '.adc-panel.open{display:flex}' +
    '@media (max-width:480px){.adc-panel{right:0;bottom:0;width:100vw;max-width:100vw;height:100%;max-height:100%;border-radius:0}.adc-panel.open ~ .adc-btn{display:none}}' +
    '.adc-head{background:#1f2d3d;color:#fff;padding:14px 16px;display:flex;align-items:center;justify-content:space-between}' +
    '.adc-head b{font-weight:700;font-size:15px}.adc-head small{display:block;opacity:.7;font-size:12px;font-weight:400}' +
    '.adc-close{background:none;border:0;color:#fff;font-size:22px;cursor:pointer;line-height:1;padding:4px 8px}' +
    '.adc-log{flex:1;overflow-y:auto;padding:16px;background:#f7f9fb}' +
    '.adc-m{margin:0 0 10px;max-width:88%;padding:10px 13px;border-radius:14px;white-space:pre-wrap;word-wrap:break-word}' +
    '.adc-m a{color:#19779b;text-decoration:underline}' +
    '.adc-u{margin-left:auto;background:#19779b;color:#fff;border-bottom-right-radius:4px}' +
    '.adc-a{background:#fff;border:1px solid #dce3ea;border-bottom-left-radius:4px}' +
    '.adc-slots{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 10px}' +
    '.adc-slot{border:1px solid #19779b;color:#19779b;background:#fff;border-radius:999px;padding:6px 12px;font-size:13px;cursor:pointer;font-family:inherit}' +
    '.adc-slot:hover{background:#19779b;color:#fff}.adc-slot[disabled]{opacity:.5;cursor:default}' +
    '.adc-note{font-size:12px;color:#6b778c;margin:0 0 10px}' +
    '.adc-typing{display:inline-block;width:40px;text-align:left;letter-spacing:2px}' +
    '.adc-form{display:flex;border-top:1px solid #dce3ea;background:#fff;padding:10px}' +
    '.adc-in{flex:1;border:1px solid #dce3ea;border-radius:10px;padding:10px 12px;font:inherit;resize:none;height:42px;max-height:120px;outline:none}' +
    '.adc-in:focus{border-color:#19779b}' +
    '.adc-send{margin-left:8px;border:0;background:#19779b;color:#fff;border-radius:10px;padding:0 14px;font:inherit;font-weight:700;cursor:pointer}' +
    '.adc-send[disabled]{opacity:.5;cursor:default}' +
    '.adc-foot{font-size:11px;color:#6b778c;text-align:center;padding:6px 10px 10px;background:#fff}' +
    '.adc-ts{padding:0 16px 8px;background:#f7f9fb}';
  var style = document.createElement('style'); style.textContent = css; document.head.appendChild(style);

  var btn = el('button', 'adc-btn', '', { 'aria-label': 'Chat with AppDraft', type: 'button' });
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
  var panel = el('div', 'adc-panel', '', { role: 'dialog', 'aria-label': 'Chat with AppDraft' });
  panel.innerHTML =
    '<div class="adc-head"><div><b>Ask AppDraft</b><small>Salesforce questions, answered from our site</small></div><button class="adc-close" aria-label="Close" type="button">&times;</button></div>' +
    '<div class="adc-log"></div><div class="adc-ts"></div>' +
    '<form class="adc-form"><textarea class="adc-in" placeholder="Type a question" rows="1" aria-label="Your message"></textarea><button class="adc-send" type="submit">Send</button></form>' +
    '<div class="adc-foot">We keep chats for 30 days to improve answers.</div>';
  document.body.appendChild(panel); document.body.appendChild(btn);

  var log = panel.querySelector('.adc-log'), form = panel.querySelector('.adc-form'), input = panel.querySelector('.adc-in'),
      sendBtn = panel.querySelector('.adc-send'), tsBox = panel.querySelector('.adc-ts');

  function el(tag, cls, text, attrs) { var e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; if (attrs) for (var k in attrs) e.setAttribute(k, attrs[k]); return e; }
  function scroll() { log.scrollTop = log.scrollHeight; }
  function linkify(text) {
    var safe = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return safe.replace(/(https?:\/\/[^\s)]+)/g, function (u) { return '<a href="' + u + '" target="_blank" rel="noopener">' + u.replace(/^https?:\/\/(www\.)?/, '') + '</a>'; });
  }
  function bubble(role, text) { var m = el('div', 'adc-m ' + (role === 'user' ? 'adc-u' : 'adc-a')); m.innerHTML = linkify(text); log.appendChild(m); scroll(); return m; }
  function note(text) { log.appendChild(el('p', 'adc-note', text)); scroll(); }
  function setBusy(b) { state.busy = b; sendBtn.disabled = b; input.disabled = b; }

  function render() {
    log.innerHTML = '';
    state.messages.forEach(function (m) { bubble(m.role, m.content); });
  }

  function ensureSession(cb) {
    if (state.sessionId) return cb();
    note('One moment, checking you are not a robot.');
    loadTurnstile(function () {
      if (!window.turnstile) return note('Could not start the chat. Please email info@appdraft.com.');
      tsBox.innerHTML = '';
      state.turnstileId = window.turnstile.render(tsBox, {
        sitekey: SITE_KEY, appearance: 'interaction-only', theme: 'light',
        callback: function (token) {
          fetch(API + '/session', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ turnstileToken: token, pageUrl: location.href }) })
            .then(function (r) { return r.json(); })
            .then(function (d) {
              if (!d.sessionId) throw new Error(d.error || 'no session');
              state.sessionId = d.sessionId; save();
              tsBox.innerHTML = ''; var notes = log.querySelectorAll('.adc-note'); if (notes.length) notes[notes.length - 1].remove();
              cb();
            })
            .catch(function () { note('Could not start the chat. Please try again or email info@appdraft.com.'); });
        },
        'error-callback': function () { note('Verification failed. Please reload and try again.'); }
      });
    });
  }

  function loadTurnstile(cb) {
    if (window.turnstile) return cb();
    var s = document.createElement('script');
    s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'; s.async = true; s.onload = cb; s.onerror = cb;
    document.head.appendChild(s);
  }

  function opener() {
    if (state.messages.length) return;
    var typing = bubble('assistant', ''); typing.innerHTML = '<span class="adc-typing">...</span>';
    fetch(API + '/opener?page=' + encodeURIComponent(location.pathname)).then(function (r) { return r.json(); })
      .then(function (d) { typing.innerHTML = linkify(d.text || 'Hello. Ask me anything about AppDraft or Salesforce.'); })
      .catch(function () { typing.innerHTML = 'Hello. Ask me anything about AppDraft or Salesforce.'; });
  }

  function send(text) {
    if (state.busy || !text) return;
    state.messages.push({ role: 'user', content: text }); save();
    bubble('user', text); input.value = ''; input.style.height = '42px';
    ensureSession(function () { stream(); });
  }

  function stream() {
    setBusy(true);
    var pending = bubble('assistant', ''); pending.innerHTML = '<span class="adc-typing">...</span>';
    var streamed = '', blocks = [], gotFirst = false;
    fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ sessionId: state.sessionId, messages: state.messages.slice(-20), pageUrl: location.href }) })
      .then(function (r) {
        if (r.status === 401) { state.sessionId = null; save(); pending.remove(); return ensureSession(function () { stream(); }); }
        if (r.status === 429) { pending.innerHTML = 'You have sent a lot of messages in a short time. Please try again in a little while, or email info@appdraft.com.'; setBusy(false); return; }
        if (!r.ok || !r.body) { pending.innerHTML = 'Sorry, something went wrong. Please try again.'; setBusy(false); return; }
        var reader = r.body.getReader(), dec = new TextDecoder(), buf = '';
        function finish() {
          var full = blocks.length ? blocks.join('\n') : streamed;
          if (full) { pending.innerHTML = linkify(full); state.messages.push({ role: 'assistant', content: full }); save(); }
          else pending.remove();
          setBusy(false); input.focus();
        }
        function handle(ev) {
          if (ev.type === 'delta') { streamed += ev.text; if (!gotFirst) { gotFirst = true; } pending.innerHTML = linkify(streamed); scroll(); }
          else if (ev.type === 'text') { blocks.push(ev.content); streamed = ''; pending.innerHTML = linkify(blocks.join('\n')); scroll(); }
          else if (ev.type === 'slots') renderSlots(ev.slots);
          else if (ev.type === 'booked') note('Booked for ' + ev.when + '. The invite is on its way to your inbox.');
          else if (ev.type === 'lead_captured') note('Sent to the team.');
          else if (ev.type === 'error') { blocks.push(ev.message); pending.innerHTML = linkify(blocks.join('\n')); }
        }
        return (function pump() {
          return reader.read().then(function (res) {
            if (res.done) return finish();
            buf += dec.decode(res.value, { stream: true });
            var parts = buf.split('\n\n'); buf = parts.pop();
            parts.forEach(function (p) {
              var line = p.replace(/^data: ?/, '').trim();
              if (!line || line === '[DONE]') return;
              try { handle(JSON.parse(line)); } catch (e) {}
            });
            return pump();
          });
        })();
      })
      .catch(function () { pending.innerHTML = 'Sorry, something went wrong. Please try again.'; setBusy(false); });
  }

  function renderSlots(slots) {
    var wrap = el('div', 'adc-slots');
    slots.forEach(function (s) {
      var b = el('button', 'adc-slot', s.label, { type: 'button' });
      b.onclick = function () {
        wrap.querySelectorAll('button').forEach(function (x) { x.disabled = true; });
        send('I would like the ' + s.label + ' slot (' + s.start + ').');
      };
      wrap.appendChild(b);
    });
    log.appendChild(wrap); scroll();
  }

  function open() {
    state.open = true; panel.classList.add('open');
    if (!state.opened) { state.opened = true; render(); opener(); if (window.gtag) window.gtag('event', 'chat_open', { event_category: 'Chat' }); }
    setTimeout(function () { input.focus(); }, 50);
  }
  function close() { state.open = false; panel.classList.remove('open'); }

  btn.addEventListener('click', function () { state.open ? close() : open(); });
  panel.querySelector('.adc-close').addEventListener('click', close);
  form.addEventListener('submit', function (e) { e.preventDefault(); send(input.value.trim()); });
  input.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input.value.trim()); } });
  input.addEventListener('input', function () { input.style.height = '42px'; input.style.height = Math.min(input.scrollHeight, 120) + 'px'; });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && state.open) close(); });
})();
