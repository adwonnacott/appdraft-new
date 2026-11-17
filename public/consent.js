/*
 * AppDraft cookie consent (replaces the Salesforce Data Cloud beacon's banner, Nov 2026, TSK-514804).
 *
 * One file for the whole of appdraft.com: the Pages site loads it from app/layout.tsx and the blog
 * and insights pages served by the Hub worker load the same /consent.js from
 * psa-copilot-api/src/routes/blog.ts, so a visitor's choice holds on every page.
 *
 * Google Analytics and the Apollo.io website tracker load only after the visitor accepts. Before a
 * choice, and after Reject, neither loads and no tracking cookie is set. Any element with the
 * attribute data-cookie-settings (the "Cookie settings" link in both footers) reopens the banner.
 */
(function () {
  var KEY = 'appdraft-cookie-consent';
  var GA_ID = 'G-1M91EVG6ZR';
  var APOLLO_APP_ID = '6633a35ec5cac10438852978';
  var loaded = false;

  function read() {
    try { return window.localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function write(value) {
    try { window.localStorage.setItem(KEY, value); } catch (e) { /* private mode: ask again next visit */ }
  }

  function loadTrackers() {
    if (loaded) return;
    loaded = true;
    var ga = document.createElement('script');
    ga.async = true;
    ga.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(ga);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);

    var ap = document.createElement('script');
    ap.async = true;
    ap.defer = true;
    ap.src = 'https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=' + Math.random().toString(36).substring(7);
    ap.onload = function () {
      if (window.trackingFunctions) window.trackingFunctions.onLoad({ appId: APOLLO_APP_ID });
    };
    document.head.appendChild(ap);
  }

  function clearTrackerCookies() {
    var host = window.location.hostname;
    var domains = ['', host, '.' + host.replace(/^www\./, '')];
    document.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (/^_ga|^_gid|^_gat|^apollo|^_apollo/i.test(name)) {
        domains.forEach(function (d) {
          document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + (d ? '; domain=' + d : '');
        });
      }
    });
  }

  function closeBanner() {
    var el = document.getElementById('appdraft-consent');
    if (el) el.parentNode.removeChild(el);
  }

  function choose(value) {
    var before = read();
    write(value);
    closeBanner();
    if (value === 'accepted') {
      loadTrackers();
    } else {
      clearTrackerCookies();
      // Scripts already running cannot be unloaded; a reload stops them.
      if (before === 'accepted' || loaded) window.location.reload();
    }
  }

  function showBanner() {
    if (document.getElementById('appdraft-consent')) return;
    var box = document.createElement('div');
    box.id = 'appdraft-consent';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-label', 'Cookie choices');
    box.style.cssText = [
      'position:fixed', 'left:16px', 'right:16px', 'bottom:16px', 'z-index:2147483000',
      'max-width:560px', 'margin:0 auto', 'background:#0f2235', 'color:#ffffff',
      'border-radius:12px', 'box-shadow:0 10px 30px rgba(0,0,0,0.25)', 'padding:18px 20px',
      'font:14px/1.5 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif'
    ].join(';');
    box.innerHTML =
      '<p style="margin:0 0 12px">We would like to use analytics cookies to see how people use this site. ' +
      'We only turn them on if you say yes. ' +
      '<a href="/privacy-policy" style="color:#56FFDD;text-decoration:underline">Privacy policy</a></p>' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap">' +
      '<button type="button" data-choice="accepted" style="cursor:pointer;border:0;border-radius:8px;padding:9px 18px;font:inherit;font-weight:600;background:#56FFDD;color:#0f2235">Accept</button>' +
      '<button type="button" data-choice="rejected" style="cursor:pointer;border:1px solid rgba(255,255,255,0.5);border-radius:8px;padding:9px 18px;font:inherit;font-weight:600;background:transparent;color:#ffffff">Reject</button>' +
      '</div>';
    box.addEventListener('click', function (e) {
      var t = e.target;
      var choice = t && t.getAttribute && t.getAttribute('data-choice');
      if (choice) choose(choice);
    });
    document.body.appendChild(box);
  }

  // Footer "Cookie settings" links, including ones rendered after this script runs.
  document.addEventListener('click', function (e) {
    var t = e.target;
    while (t && t !== document) {
      if (t.hasAttribute && t.hasAttribute('data-cookie-settings')) {
        e.preventDefault();
        showBanner();
        return;
      }
      t = t.parentNode;
    }
  });

  function start() {
    var choice = read();
    if (choice === 'accepted') loadTrackers();
    else if (choice !== 'rejected') showBanner();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
