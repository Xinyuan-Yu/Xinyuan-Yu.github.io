/* Theme toggle, scroll reveal, publication filter. */
(function () {
  var root = document.documentElement;

  var btn = document.querySelector('.theme-toggle');
  if (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* Publications: filter by topic or first-author */
  var bar = document.querySelector('.pub-filter');
  if (bar) {
    bar.addEventListener('click', function (ev) {
      var b = ev.target.closest('button');
      if (!b) return;
      bar.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      var f = b.dataset.filter;
      document.querySelectorAll('.pub').forEach(function (p) {
        var show = f === 'all' ||
          (f === 'first' ? p.classList.contains('first-author') : (p.dataset.topic || '').split(' ').indexOf(f) > -1);
        p.hidden = !show;
      });
      document.querySelectorAll('.year').forEach(function (h) {
        var list = h.nextElementSibling;
        h.hidden = !list.querySelector('.pub:not([hidden])');
        list.hidden = h.hidden;
      });
    });
  }
})();
