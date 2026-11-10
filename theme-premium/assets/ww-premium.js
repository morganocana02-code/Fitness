/* ==========================================================================
   WhisperWalk — scripts de la refonte
   Quantité, prix selon la variante, date de livraison estimée et barres
   d'achat fixes sur mobile. Chargé avec « defer » par les sections qui
   en ont besoin ; il ne s'exécute qu'une fois, même s'il est inclus plusieurs fois.
   ========================================================================== */
(function () {
  if (window.wwPremium) return;
  window.wwPremium = true;

  /* ---------- 1. Boutons + / − de la quantité ---------- */
  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-ww-qty]');
    if (!button) return;
    var box = button.closest('.ww-qty');
    var input = box && box.querySelector('input[name="quantity"]');
    if (!input) return;
    var next = (parseInt(input.value, 10) || 1) + parseInt(button.getAttribute('data-ww-qty'), 10);
    input.value = Math.max(1, next);
  });

  /* ---------- 2. Prix affiché selon la variante choisie ---------- */
  document.addEventListener('change', function (event) {
    var select = event.target.closest('[data-ww-variant]');
    if (!select) return;
    var option = select.options[select.selectedIndex];
    var root = select.closest('[data-ww-product]') || document;
    if (!option || !option.dataset.price) return;
    root.querySelectorAll('[data-ww-price]').forEach(function (el) { el.textContent = option.dataset.price; });
  });

  /* ---------- 3. Date de livraison estimée ----------
     Jours ouvrés = du lundi au vendredi, hors jours fériés en France,
     comptés à partir du lendemain de la commande (date du jour à Paris). */
  var DAY = 86400000;
  var holidays = {};

  function easter(year) {
    var a = year % 19, b = Math.floor(year / 100), c = year % 100, d = Math.floor(b / 4), e = b % 4,
        f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30,
        i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7,
        m = Math.floor((a + 11 * h + 22 * l) / 451),
        month = Math.floor((h + l - 7 * m + 114) / 31), day = ((h + l - 7 * m + 114) % 31) + 1;
    return Date.UTC(year, month - 1, day);
  }

  function isHoliday(time) {
    var year = new Date(time).getUTCFullYear();
    if (!holidays[year]) {
      var e = easter(year);
      holidays[year] = [[1, 1], [5, 1], [5, 8], [7, 14], [8, 15], [11, 1], [11, 11], [12, 25]]
        .map(function (md) { return Date.UTC(year, md[0] - 1, md[1]); })
        .concat([e + DAY, e + 39 * DAY, e + 50 * DAY]); // lundi de Pâques, Ascension, lundi de Pentecôte
    }
    return holidays[year].indexOf(time) !== -1;
  }

  function addBusinessDays(time, count) {
    while (count > 0) {
      time += DAY;
      var weekday = new Date(time).getUTCDay();
      if (weekday !== 0 && weekday !== 6 && !isHoliday(time)) count--;
    }
    return time;
  }

  function todayInParis() {
    var parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit' })
      .format(new Date()).split('-');
    return Date.UTC(+parts[0], +parts[1] - 1, +parts[2]);
  }

  if (window.Intl) {
    var longDate = new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' });
    var longDay = new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', timeZone: 'UTC' });
    var shortDate = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'short', timeZone: 'UTC' });
    var shortDay = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', timeZone: 'UTC' });
    var today = todayInParis();

    document.querySelectorAll('[data-ww-eta]').forEach(function (el) {
      var min = parseInt(el.getAttribute('data-min'), 10);
      var max = parseInt(el.getAttribute('data-max'), 10);
      var out = el.querySelector('[data-ww-eta-range]') || el;
      if (!min || !max) return;
      var from = new Date(addBusinessDays(today, min));
      var to = new Date(addBusinessDays(today, max));
      var sameMonth = from.getUTCMonth() === to.getUTCMonth();
      var range = el.getAttribute('data-style') === 'short'
        ? (sameMonth ? shortDay.format(from) : shortDate.format(from)) + ' et le ' + shortDate.format(to)
        : (sameMonth ? longDay.format(from) : longDate.format(from)) + ' et le ' + longDate.format(to);
      out.textContent = (el.getAttribute('data-prefix') || 'Livraison estimée entre le ') + range;
    });
  }

  /* ---------- 4. Service client ouvert ou fermé, d'après les horaires publiés ----------
     Du lundi au vendredi, hors jours fériés, heure de Paris (heures lues dans data-open et data-close). */
  if (window.Intl) {
    document.querySelectorAll('[data-ww-open]').forEach(function (el) {
      var open = parseInt(el.getAttribute('data-open'), 10);
      var close = parseInt(el.getAttribute('data-close'), 10);
      var out = el.querySelector('[data-ww-open-text]');
      if (isNaN(open) || isNaN(close) || !out) return;
      var parts = {};
      new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hourCycle: 'h23' })
        .formatToParts(new Date()).forEach(function (part) { parts[part.type] = part.value; });
      var day = Date.UTC(+parts.year, +parts.month - 1, +parts.day);
      var hour = parseInt(parts.hour, 10);
      var weekday = new Date(day).getUTCDay();
      var businessDay = weekday !== 0 && weekday !== 6 && !isHoliday(day);
      if (businessDay && hour >= open && hour < close) {
        el.classList.add('is-open');
        out.textContent = 'Service client ouvert · jusqu’à ' + close + 'h';
        return;
      }
      var next = businessDay && hour < open ? day : addBusinessDays(day, 1);
      var when = next === day ? 'aujourd’hui'
        : next === day + DAY ? 'demain'
        : new Intl.DateTimeFormat('fr-FR', { weekday: 'long', timeZone: 'UTC' }).format(new Date(next));
      el.classList.add('is-closed');
      out.textContent = 'Service client fermé · réouverture ' + when + ' à ' + open + 'h';
    });
  }

  /* ---------- 5. Vidéo de l'accroche : bouton pause / lecture ----------
     Si le visiteur a demandé à réduire les animations, la vidéo ne démarre pas toute seule. */
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-ww-video]').forEach(function (box) {
    var video = box.querySelector('video');
    var toggle = box.querySelector('[data-ww-video-toggle]');
    if (!video || !toggle) return;
    function sync() {
      box.classList.toggle('is-paused', video.paused);
      toggle.setAttribute('aria-label', video.paused ? 'Lire la vidéo' : 'Mettre la vidéo en pause');
    }
    if (reduceMotion) {
      video.removeAttribute('autoplay');
      video.pause();
    }
    toggle.addEventListener('click', function () {
      if (video.paused) video.play(); else video.pause();
    });
    video.addEventListener('play', sync);
    video.addEventListener('pause', sync);
    sync();
  });

  /* ---------- 6. Barres d'achat fixes (mobile) ---------- */
  if (!('IntersectionObserver' in window)) return;

  function setSticky(bar, show) {
    bar.hidden = !show;
    var visible = Array.prototype.some.call(document.querySelectorAll('.ww-sticky'), function (el) {
      return !el.hidden && el.getClientRects().length > 0;
    });
    document.body.classList.toggle('ww-has-sticky', visible);
  }

  // Fiche produit : la barre apparaît quand le bouton « Ajouter au panier » n'est plus visible
  document.querySelectorAll('[data-ww-sticky-product]').forEach(function (bar) {
    var root = bar.closest('[data-ww-product]');
    var form = root && root.querySelector('form[data-ww-main-form]');
    var submit = form && form.querySelector('[type="submit"]');
    if (!submit) return;
    new IntersectionObserver(function (entries) {
      setSticky(bar, !entries[0].isIntersecting);
    }).observe(submit);
    var button = bar.querySelector('[data-ww-sticky-submit]');
    if (button) {
      button.addEventListener('click', function () {
        if (form.requestSubmit) form.requestSubmit(submit); else submit.click();
      });
    }
  });

  // Accueil : la barre apparaît après l'accroche, et s'efface quand les packs ou l'appel final sont à l'écran
  document.querySelectorAll('[data-ww-sticky-home]').forEach(function (bar) {
    var hero = bar.closest('.ww-hero');
    if (!hero) return;
    var heroVisible = true;
    var visibleTargets = [];
    var targets = Array.prototype.slice.call(document.querySelectorAll('#ww-packs, #ww-comparatif, .ww-cta'));
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.target === hero) { heroVisible = entry.isIntersecting; return; }
        var index = visibleTargets.indexOf(entry.target);
        if (entry.isIntersecting && index === -1) visibleTargets.push(entry.target);
        if (!entry.isIntersecting && index !== -1) visibleTargets.splice(index, 1);
      });
      setSticky(bar, !heroVisible && visibleTargets.length === 0);
    });
    observer.observe(hero);
    targets.forEach(function (target) { observer.observe(target); });
  });
})();
