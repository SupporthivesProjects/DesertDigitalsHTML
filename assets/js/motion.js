/* page transitions, image fade in and section reveals. Loaded in <head> on every page, before the body paints */
(function () {
  'use strict';
  const root = document.documentElement;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // cross document view transitions are handled by CSS; pagereveal only exists where they are supported.
  // pages opened from file:// have no shared origin, so they take the fallback
  const nativeTransitions = 'onpagereveal' in window && location.protocol !== 'file:';
  const LEAVE_MS = 200;
  const QUICK_LOAD_MS = 80;

  // a skipped native transition (hidden tab, fast clicks) rejects its promises; that is expected, not an error
  const quietSkip = e => { if (e.viewTransition) [e.viewTransition.ready, e.viewTransition.finished, e.viewTransition.updateCallbackDone].forEach(p => p && p.catch(() => {})); };
  addEventListener('pageswap', quietSkip);
  addEventListener('pagereveal', quietSkip);

  /* fallback page fade, for browsers without cross document view transitions */
  if (!reducedMotion && !nativeTransitions) {
    root.classList.add('page-fade');

    addEventListener('click', e => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = e.target.closest && e.target.closest('a[href]');
      if (!link || link.target && link.target !== '_self' || link.hasAttribute('download')) return;
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin || !/^https?:|^file:/.test(url.protocol)) return;
      if (url.pathname === location.pathname && url.search === location.search && url.hash) return;
      e.preventDefault();
      root.classList.add('is-leaving');
      setTimeout(() => { location.href = url.href; }, LEAVE_MS);
    });

    // a page restored from the back forward cache comes back with the leaving state still on
    addEventListener('pageshow', e => { if (e.persisted) root.classList.remove('is-leaving'); });
  }

  /* image fade in over a placeholder. Cached images, svgs, small thumbs and the homepage lens covers are left alone */
  const skipImage = img => /\.svg(\?|$)/i.test(img.getAttribute('src') || '') ||
    img.closest('.logo, .payment-logos, .home-favourites') || img.matches('.cart-line__thumb, .order-line__thumb, .buy-bar__thumb, .field__toggle img');

  function watchImage(img) {
    if (img.dataset.fade || skipImage(img)) return;
    img.dataset.fade = 'watching';
    if (!img.getAttribute('src')) {
      // product page images get their src from the page script
      new MutationObserver((records, observer) => { observer.disconnect(); delete img.dataset.fade; watchImage(img); })
        .observe(img, { attributes: true, attributeFilter: ['src'] });
      return;
    }
    if (img.complete && img.naturalWidth) { img.dataset.fade = 'done'; return; }
    const started = performance.now();
    img.classList.add('img-wait');
    const done = () => {
      img.classList.remove('img-wait');
      if (performance.now() - started > QUICK_LOAD_MS) img.classList.add('img-in');
      img.dataset.fade = 'done';
    };
    img.addEventListener('load', done, { once: true });
    img.addEventListener('error', done, { once: true });
  }

  /* quiet reveal for inner page sections; the homepage has its own motion */
  const REVEAL_BLOCKS = 'main > section .wrap > *';
  const REVEAL_ITEMS = '.product-grid > .product-card, [data-library] > *';
  const STAGGER = 0.07;
  let revealObserver;

  function canReveal(el) {
    if (el.dataset.reveal || el.hidden) return false;
    if (el.closest('.overlay, [data-buy-bar]')) return false;
    if (el.matches(REVEAL_BLOCKS) && el.querySelector('.product-grid, [data-library]')) return false;
    const position = getComputedStyle(el).position;
    return position !== 'fixed' && position !== 'sticky';
  }

  function addReveal(el) {
    if (!canReveal(el)) return;
    el.dataset.reveal = '';
    // anything already on screen is simply shown, the page transition covers it
    if (el.getBoundingClientRect().top < innerHeight) return;
    el.classList.add('reveal-up');
    revealObserver.observe(el);
  }

  function initReveals() {
    revealObserver = new IntersectionObserver(entries => {
      let order = 0;
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.style.setProperty('--reveal-delay', (el.matches(REVEAL_ITEMS) ? Math.min(order++, 5) * STAGGER : 0) + 's');
        el.classList.add('is-shown');
        revealObserver.unobserve(el);
        el.addEventListener('transitionend', () => { el.classList.remove('reveal-up', 'is-shown'); el.style.removeProperty('--reveal-delay'); }, { once: true });
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    document.querySelectorAll(REVEAL_BLOCKS + ', ' + REVEAL_ITEMS).forEach(addReveal);
  }

  function init() {
    const home = document.body.classList.contains('home');
    const reveals = !reducedMotion && !home && 'IntersectionObserver' in window;
    if (!reducedMotion) document.querySelectorAll('img').forEach(watchImage);
    if (reveals) initReveals();

    // product cards, cart lines and downloads are rendered from script after this point too
    if (reducedMotion) return;
    new MutationObserver(records => records.forEach(record => record.addedNodes.forEach(node => {
      if (node.nodeType !== 1) return;
      if (node.tagName === 'IMG') watchImage(node);
      else node.querySelectorAll('img').forEach(watchImage);
      if (reveals && node.matches(REVEAL_ITEMS)) addReveal(node);
    }))).observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
