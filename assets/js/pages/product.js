(function () {
  'use strict';
  const { esc, productCard } = DD.ui;
  const p = DD.product(DD.ui.params().get('id') || '');
  if (!p) { location.replace('404.html'); return; }

  const $ = s => document.querySelector(s);
  const ABOUT = { video: 'course', ebook: 'e-book', software: 'software', template: 'template', audiobook: 'audio book' };
  const NOUNS = { video: 'videos', ebook: 'e-books', software: 'software', template: 'templates', audiobook: 'audio books' };
  const SEP = '  ·  ';

  document.title = p.title + ' | desertdigitals';
  $('[data-type-link]').textContent = p.typeLabel;
  $('[data-type-link]').href = 'store.html?type=' + p.type;
  $('[data-title]').textContent = p.title;
  // theme wraps to its own line on mobile, so no trailing separator
  $('[data-meta]').innerHTML = esc([p.format, p.length].filter(Boolean).join(SEP)) +
    '<span class="product-hero__theme"><span class="product-hero__sep">' + SEP + '</span>' + esc(p.theme) + '</span>';
  $('[data-intro]').textContent = p.intro;
  $('[data-price]').dataset.usd = p.price;
  $('[data-image]').src = p.hero;
  $('[data-image]').classList.toggle('is-wide', p.hero !== p.image);
  $('[data-about-title]').textContent = 'About this ' + ABOUT[p.type];
  $('[data-about]').innerHTML = p.about.map(t => '<p>' + esc(t) + '</p>').join('');

  $('[data-bar-image]').src = p.image;
  $('[data-bar-title]').textContent = p.title;
  $('[data-bar-meta]').textContent = [p.format, p.length].filter(Boolean).join(SEP);
  $('[data-bar-price]').dataset.usd = p.price;
  $('[data-bar-price-mobile]').dataset.usd = p.price;
  ['[data-add-main]', '[data-add-bar]'].forEach(s => {
    const b = $(s);
    b.dataset.add = p.id;
    b.textContent = DD.inCart(p.id) ? 'in cart' : 'add to cart';
    b.classList.toggle('is-added', DD.inCart(p.id));
  });

  const more = DD.related(p, 4);
  const sameTheme = more.every(x => x.theme === p.theme);
  $('[data-more-title]').textContent = 'More ' + (sameTheme ? p.theme + ' ' : '') + NOUNS[p.type];
  $('[data-more-link]').href = 'store.html?type=' + p.type + (sameTheme ? '&theme=' + encodeURIComponent(p.theme) : '');
  $('[data-more]').innerHTML = more.map(productCard).join('');
  DD.refreshPrices();

  const bar = $('[data-buy-bar]');
  const barButton = $('[data-add-bar]');
  new IntersectionObserver(([e]) => {
    const show = !e.isIntersecting && e.boundingClientRect.top < 0;
    bar.classList.toggle('is-visible', show);
    document.body.classList.toggle('has-buy-bar', show);
    bar.setAttribute('aria-hidden', !show);
    barButton.tabIndex = show ? 0 : -1;
  }).observe($('[data-buy-anchor]'));
})();
