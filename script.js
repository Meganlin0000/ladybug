/* 7aDy.bug — interactions + motion (GSAP / Lenis with graceful fallback) */
(function () {
  'use strict';
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var M = window.MEMBERS || [];
  var hasGSAP = !!(window.gsap && window.ScrollTrigger);
  if (hasGSAP) gsap.registerPlugin(ScrollTrigger);

  /* ---------- header solid on scroll ---------- */
  var header = document.querySelector('.site-header');
  function onScroll(y) { if (header) header.classList.toggle('solid', (y || window.scrollY) > 40); }
  onScroll();

  /* ---------- smooth scroll (Lenis) — desktop only ---------- */
  var isTouch = matchMedia('(hover:none), (pointer:coarse)').matches || 'ontouchstart' in window;
  var lenis = null;
  if (window.Lenis && !reduce && !isTouch) {
    lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1 });
    lenis.on('scroll', function (e) { onScroll(e.scroll); if (hasGSAP) ScrollTrigger.update(); });
    if (hasGSAP) { gsap.ticker.add(function (t) { lenis.raf(t * 1000); }); gsap.ticker.lagSmoothing(0); }
    else { function raf(t) { lenis.raf(t); requestAnimationFrame(raf); } requestAnimationFrame(raf); }
  } else {
    addEventListener('scroll', function () { onScroll(); }, { passive: true });
  }

  /* ---------- mobile menu ---------- */
  var mb = document.querySelector('[data-menu]');
  if (mb) {
    mb.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      mb.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (lenis) open ? lenis.stop() : lenis.start();
    });
    document.querySelectorAll('#nav-links a').forEach(function (a) {
      a.addEventListener('click', function () { document.body.classList.remove('menu-open'); if (lenis) lenis.start(); });
    });
  }

  /* ---------- current nav ---------- */
  var map = { home:'index.html', about:'about.html', works:'works.html', services:'services.html', contact:'contact.html', member:'about.html' };
  var page = document.body.getAttribute('data-page');
  if (map[page]) document.querySelectorAll('#nav-links a').forEach(function (a) {
    if (a.getAttribute('href') === map[page] && !a.classList.contains('navcta')) a.classList.add('current');
  });

  /* ---------- in-page anchor smooth scroll ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href'); if (id.length < 2) return;
      var t = document.querySelector(id); if (!t) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(t, { offset: -70 });
      else t.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ---------- lightbox: [data-zoom] 圖片 / [data-video] YouTube / [data-embed] Drive 簡報·影片 ---------- */
  var lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = '<button class="lb-x" aria-label="關閉">✕ 關閉</button><div class="lb-stage"></div><span class="lb-tip">點 ✕ 或旁邊空白處關閉</span>';
  document.body.appendChild(lb);
  var stage = lb.querySelector('.lb-stage');
  function lbOpen(html) { stage.innerHTML = html; lb.classList.add('open'); document.body.style.overflow = 'hidden'; if (lenis) lenis.stop(); }
  function lbClose() { lb.classList.remove('open'); stage.innerHTML = ''; document.body.style.overflow = ''; if (lenis) lenis.start(); }
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-zoom],[data-video],[data-embed]');
    if (t) {
      e.preventDefault();
      if (t.hasAttribute('data-video')) {
        lbOpen('<iframe class="vid" src="https://www.youtube-nocookie.com/embed/' + t.getAttribute('data-video') + '?autoplay=1&rel=0" title="影片播放" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>');
      } else if (t.hasAttribute('data-embed')) {
        lbOpen('<iframe class="doc" src="' + t.getAttribute('data-embed') + '" title="內容預覽" allow="autoplay" allowfullscreen></iframe>');
      } else {
        var src = t.getAttribute('data-full') || t.src;
        lbOpen('<img src="' + src + '" alt="">');
      }
      return;
    }
    if (e.target.closest('.lb-x') || (e.target.classList && (e.target.classList.contains('lightbox') || e.target.classList.contains('lb-stage') || (e.target.tagName === 'IMG' && e.target.closest('.lb-stage'))))) lbClose();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lb.classList.contains('open')) lbClose();
  });

  /* ---------- team cards (personnel files) ---------- */
  function card(m) {
    return '<a class="person" href="member.html?id=' + m.id + '">'
      + '<span class="clip" aria-hidden="true"></span>'
      + '<div class="frame"><img src="' + m.photo + '" alt="' + m.name + '｜' + m.role + '" loading="lazy"></div>'
      + '<div class="meta"><span class="idx">FILE_' + m.id + '</span><h3>' + m.name + '</h3>'
      + '<div class="role">' + m.role + '</div><span class="view">→ 看檔案</span></div></a>';
  }
  var prev = document.getElementById('team-preview');
  if (prev) prev.innerHTML = M.slice(0, 4).map(card).join('');
  var full = document.getElementById('team-full');
  if (full) {
    var lead = M.find(function (m) { return m.id === '04'; });
    var rest = M.filter(function (m) { return m.id !== '04'; });
    full.innerHTML = card(lead).replace('class="person"', 'class="person lead-card"') + rest.map(card).join('');
  }

  /* ---------- member detail ---------- */
  var root = document.getElementById('member-root');
  if (root && M.length) {
    var id = new URLSearchParams(location.search).get('id') || '01';
    var i = M.findIndex(function (m) { return m.id === id; }); if (i < 0) i = 0;
    var m = M[i], p = M[(i - 1 + M.length) % M.length], n = M[(i + 1) % M.length];
    document.title = m.name + '｜7aDy.bug 整合行銷團隊';
    root.innerHTML =
      '<div class="member-back"><a href="about.html">← 回團隊</a></div>'
      + '<div class="member-hero">'
      + '<div class="member-photo"><img src="' + m.photo + '" alt="' + m.name + '"></div>'
      + '<div class="member-info">'
      + '<p class="idx">Member ' + m.id + ' / 07</p><h1>' + m.name + '</h1><p class="role">' + m.role + '</p>'
      + '<div class="bio">' + m.bio.map(function (t) { return '<p>' + t + '</p>'; }).join('') + '</div>'
      + '<div class="member-block"><h4>專長</h4><div class="chips">'
      + m.focus.map(function (f, k) { return '<span class="chip' + (k === 0 ? ' solid' : '') + '">' + f + '</span>'; }).join('')
      + '</div></div>'
      + (m.hi && m.hi.length ? '<div class="member-block"><h4>經歷亮點</h4><ul class="hi-list">'
        + m.hi.map(function (h) { return '<li>' + h + '</li>'; }).join('') + '</ul></div>' : '')
      + (m.works && m.works.length ? '<div class="member-block"><h4>作品連結（點了直接看）</h4><div class="media-links">'
        + m.works.map(function (w) {
            if (w.video) return '<span class="btn ghost mini" data-video="' + w.video + '">' + w.t + '</span>';
            if (w.embed) return '<span class="btn ghost mini" data-embed="' + w.embed + '">' + w.t + '</span>';
            if (w.zoom)  return '<span class="btn ghost mini" data-zoom data-full="' + w.zoom + '">' + w.t + '</span>';
            return '<a class="btn ghost mini" href="' + w.href + '" target="_blank" rel="noopener">' + w.t + '</a>';
          }).join('') + '</div></div>' : '')
      + '</div></div>'
      + '<div class="member-nav"><a href="member.html?id=' + p.id + '">← ' + p.name + '</a>'
      + '<a href="member.html?id=' + n.id + '">' + n.name + ' →</a></div>';
  }

  /* ---------- count-up ---------- */
  function count(el) {
    var t = parseFloat(el.dataset.count); if (isNaN(t)) return;
    var suf = el.dataset.suffix || '', dec = (String(t).split('.')[1] || '').length;
    if (reduce) { el.textContent = t + suf; return; }
    var s = performance.now();
    (function step(now) {
      var pr = Math.min((now - s) / 1500, 1), e = 1 - Math.pow(1 - pr, 3);
      el.textContent = (t * e).toFixed(dec) + suf;
      if (pr < 1) requestAnimationFrame(step); else el.textContent = t.toFixed(dec) + suf;
    })(s);
  }

  /* ---------- reveals + motion ---------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  function showAll() { reveals.forEach(function (el) { el.classList.add('in'); }); }

  if (reduce) {
    showAll();
    document.querySelectorAll('[data-count]').forEach(function (el) { el.textContent = (el.dataset.prefix || '') + el.dataset.count + (el.dataset.suffix || ''); });
    document.querySelectorAll('.hero h1 .ln > span').forEach(function (s) { s.style.transform = 'none'; });
  } else if (hasGSAP) {
    document.documentElement.classList.add('gsap-ready');
    // hero intro
    var hero = document.querySelector('.hero');
    if (hero) {
      var tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.from('.hero h1 .ln > span', { yPercent: 115, duration: 1.05, stagger: 0.1 }, 0.1)
        .from('.hero-kicker', { opacity: 0, y: 16, duration: 0.8 }, 0.25)
        .from('.hero-sub > *', { opacity: 0, y: 22, duration: 0.9, stagger: 0.12 }, 0.5)
        .from('.hero-strip .ph', { yPercent: 12, opacity: 0, duration: 1, stagger: 0.06 }, 0.6);
    }
    // section reveals — anything already on screen shows immediately (mobile-safe)
    reveals.forEach(function (el) {
      gsap.set(el, { opacity: 0, y: 34 });
      if (el.getBoundingClientRect().top < window.innerHeight * 0.94) {
        gsap.to(el, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.06 });
      } else {
        ScrollTrigger.create({
          trigger: el, start: 'top 88%', once: true,
          onEnter: function () { gsap.to(el, { opacity: 1, y: 0, duration: 0.95, ease: 'power3.out' }); }
        });
      }
    });
    // parallax on images
    gsap.utils.toArray('[data-parallax]').forEach(function (el) {
      gsap.to(el, { yPercent: parseFloat(el.dataset.parallax) || -10, ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } });
    });
    // counters
    document.querySelectorAll('[data-count]').forEach(function (el) {
      ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: function () { count(el); } });
    });
    setTimeout(function () { ScrollTrigger.refresh(); }, 300);
  } else {
    // fallback: IntersectionObserver
    document.querySelectorAll('.hero h1 .ln > span').forEach(function (s) { s.style.transform = 'none'; });
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      reveals.forEach(function (el) { io.observe(el); });
      var cio = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { count(e.target); cio.unobserve(e.target); } });
      }, { threshold: 0.6 });
      document.querySelectorAll('[data-count]').forEach(function (el) { cio.observe(el); });
    } else { showAll(); document.querySelectorAll('[data-count]').forEach(count); }
  }

  /* hard failsafe: never leave content hidden */
  setTimeout(function () {
    reveals.forEach(function (el) { if (getComputedStyle(el).opacity === '0') { el.style.opacity = 1; el.style.transform = 'none'; } });
  }, 4000);
})();
