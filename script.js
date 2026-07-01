/* =====================================================================
   7aDy.bug — interactions (vanilla, no deps)
   ===================================================================== */
(function () {
  'use strict';
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- scroll progress ---- */
  var progress = document.querySelector('.progress');
  function onScroll() {
    var h = document.documentElement;
    var p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    if (progress) progress.style.width = (p * 100).toFixed(2) + '%';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- custom cursor reticle ---- */
  if (window.matchMedia('(hover:hover)').matches) {
    var rx = window.innerWidth / 2, ry = window.innerHeight / 2, tx = rx, ty = ry;
    window.addEventListener('pointermove', function (e) { tx = e.clientX; ty = e.clientY; });
    (function loop() {
      rx += (tx - rx) * 0.22; ry += (ty - ry) * 0.22;
      root.style.setProperty('--cursor-x', rx + 'px');
      root.style.setProperty('--cursor-y', ry + 'px');
      requestAnimationFrame(loop);
    })();
    var hoverSel = 'a,button,input,textarea,.step,.member,.work,.pkg,.svc';
    document.addEventListener('pointerover', function (e) {
      if (e.target.closest(hoverSel)) document.body.classList.add('hovering');
    });
    document.addEventListener('pointerout', function (e) {
      if (e.target.closest(hoverSel)) document.body.classList.remove('hovering');
    });
  }

  /* ---- mobile menu ---- */
  var menuBtn = document.querySelector('[data-menu]');
  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('#nav-links a').forEach(function (a) {
      a.addEventListener('click', function () { document.body.classList.remove('menu-open'); });
    });
  }

  /* ---- mark current nav link ---- */
  var page = document.body.getAttribute('data-page');
  var map = { home: 'index.html', about: 'about.html', works: 'works.html', services: 'services.html', contact: 'contact.html' };
  if (map[page]) {
    document.querySelectorAll('#nav-links a').forEach(function (a) {
      if (a.getAttribute('href') === map[page]) a.classList.add('current');
    });
  }

  /* ---- reveal on scroll ---- */
  var reveals = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en, i) {
        if (en.isIntersecting) {
          var el = en.target;
          setTimeout(function () { el.classList.add('in'); }, (el.dataset.delay ? +el.dataset.delay : Math.min(i * 40, 160)));
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---- typed tagline (home) ---- */
  var typed = document.getElementById('typed');
  if (typed && !reduce) {
    var phrases = ['找出問題，解決問題。', 'find the bug.', '讓每個想法被完整看見。', 'fix the brand. 🐞'];
    var pi = 0, ci = 0, deleting = false;
    function tick() {
      var full = phrases[pi];
      ci += deleting ? -1 : 1;
      typed.innerHTML = full.slice(0, ci) + '<span class="caret">|</span>';
      var wait = deleting ? 42 : 92;
      if (!deleting && ci === full.length) { wait = 1500; deleting = true; }
      else if (deleting && ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; wait = 380; }
      setTimeout(tick, wait);
    }
    tick();
  } else if (typed) {
    typed.textContent = '找出問題，解決問題。';
  }

  /* ---- count-up numbers ---- */
  function animateCount(el) {
    var target = parseFloat(el.dataset.count);
    if (isNaN(target)) return;
    var suffix = el.dataset.suffix || '', prefix = el.dataset.prefix || '';
    var decimals = (String(target).split('.')[1] || '').length;
    if (reduce) { el.textContent = prefix + target + suffix; return; }
    var start = performance.now(), dur = 1400;
    function step(now) {
      var t = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = prefix + (target * eased).toFixed(decimals) + suffix;
      if (t < 1) requestAnimationFrame(step);
      else el.textContent = prefix + target.toFixed(decimals) + suffix;
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    if (!('IntersectionObserver' in window)) counters.forEach(animateCount);
    else {
      var cio = new IntersectionObserver(function (ents) {
        ents.forEach(function (en) {
          if (en.isIntersecting) { animateCount(en.target); cio.unobserve(en.target); }
        });
      }, { threshold: 0.6 });
      counters.forEach(function (el) { cio.observe(el); });
    }
  }
})();
