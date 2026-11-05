/* <div data-partial="header|footer">; body data-ground="light|solid" sets the header style, data-nav marks the current link */
(function () {
  'use strict';
  const body = document.body;
  const ground = ['light', 'solid'].includes(body.dataset.ground) ? body.dataset.ground : 'dark';
  const current = body.dataset.nav || '';

  const NAV = [
    { key: 'store', href: 'store.html', label: '/products' },
    { key: 'one-on-one', href: 'one-on-one.html', label: '/one-on-one' },
    { key: 'about', href: 'about.html', label: '/about' },
    { key: 'contact', href: 'contact.html', label: '/contact' }
  ];
  const ICON_DOWN = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
  const ICON_MENU = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 8h18M9 16h12"/></svg>';
  const ICON_X = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
  const PAYMENT_LOGOS = `
    <span><img src="assets/images/visa.svg" alt="Visa" width="32" height="10" loading="lazy" decoding="async"></span>
    <span><img src="assets/images/mastercard.svg" alt="Mastercard" width="30" height="18" loading="lazy" decoding="async"></span>`;

  const currencyCodes = Object.keys(DD.currencies);
  const currentAttr = key => (key === current ? ' aria-current="page"' : '');

  function logo() {
    return `
      <a class="logo" href="index.html" aria-label="desertdigitals home">
        <img src="assets/logos/mark-amber.svg" alt="" width="28" height="28"><span>desertdigitals</span>
      </a>`;
  }

  function accountLink() {
    return DD.account() ? '<a href="account.html">account</a>' : '<a href="login.html">login</a>';
  }

  // function header() {
  //   const links = NAV.map(n => `<a class="site-nav__link" href="${n.href}"${currentAttr(n.key)}>${n.label}</a>`).join('');
  //   const menuLinks = NAV.map(n => `<a class="menu__link" href="${n.href}"${currentAttr(n.key)}>${n.label}</a>`).join('');
  //   const options = currencyCodes.map(code => `
  //     <li>
  //       <button class="currency__option" role="option" data-currency="${code}" aria-selected="${code === DD.currency}">
  //         ${code.toLowerCase()}<span>${DD.currencies[code].symbol}</span>
  //       </button>
  //     </li>`).join('');
  //   const menuCurrencies = currencyCodes.map(code =>
  //     `<button data-currency="${code}" aria-pressed="${code === DD.currency}">${code.toLowerCase()}</button>`).join('');
  //   const groundClass = ground !== 'dark' ? ' site-header--' + ground : '';

  //   return `
  //     <header class="site-header${groundClass}" data-header>
  //       ${logo()}
  //       <nav class="site-nav" aria-label="Main">${links}</nav>
  //       <div class="site-header__right">
  //         <div class="currency site-header__hide-mobile" data-currency-select>
  //           <button class="currency__button" aria-haspopup="listbox" aria-expanded="false">
  //             <span data-currency-label>${DD.currency.toLowerCase()}</span>${ICON_DOWN}
  //           </button>
  //           <ul class="currency__list" role="listbox" aria-label="Currency">${options}</ul>
  //         </div>
  //         <span class="site-header__hide-mobile" data-account-link>${accountLink()}</span>
  //         <a href="cart.html">cart(<span class="cart-count" data-cart-count>${DD.cartIds().length}</span>)</a>
  //         <button class="burger" aria-label="Open menu" aria-expanded="false" data-menu-open>${ICON_MENU}</button>
  //       </div>
  //     </header>
  //     <div class="menu" id="menu" aria-hidden="true" role="dialog" aria-label="Menu">
  //       <div class="menu__top">${logo()}<button class="menu__close" data-menu-close>close${ICON_X}</button></div>
  //       <nav class="menu__nav" aria-label="Mobile">${menuLinks}</nav>
  //       <div class="menu__meta">
  //         <span data-account-link>${accountLink()}</span>
  //         <div class="menu__currency">currency:${menuCurrencies}</div>
  //       </div>
  //     </div>`;
  // }

  // function footer() {
  //   return `
  //     <footer class="site-footer">
  //       <div class="wrap">
  //         <div class="site-footer__grid">
  //           <div class="site-footer__about">
  //             ${logo()}
  //             <p>
  //               <span class="site-footer__copy-full">Products for web developers. Video courses, e-books, software,
  //                 templates and 1 on 1 time with a developer.</span>
  //               <span class="site-footer__copy-short">Products for web developers. E-books, courses, software,
  //                 templates and 1 on 1 time with a developer.</span>
  //             </p>
  //             <a class="site-footer__mail" href="mailto:support@desertdigitals.com">support@desertdigitals.com</a>
  //           </div>
  //           <div class="site-footer__col">
  //             <h2>// shop</h2><a href="store.html">Products</a><a href="one-on-one.html">1 on 1</a>
  //           </div>
  //           <div class="site-footer__col">
  //             <h2>// company</h2><a href="about.html">About us</a><a href="contact.html">Contact us</a>
  //           </div>
  //           <div class="site-footer__col">
  //             <h2>// account</h2><a href="login.html">Log in</a><a href="sign-up.html">Sign up</a>
  //           </div>
  //           <div class="site-footer__col">
  //             <h2>// legal</h2><a href="terms.html">Terms and conditions</a><a href="privacy.html">Privacy policy</a>
  //           </div>
  //         </div>
  //         <div class="site-footer__bottom">
  //           <span>
  //             <span class="site-footer__copy-full">© 2026 desertdigitals. All rights reserved.</span>
  //             <span class="site-footer__copy-short">© 2026 desertdigitals</span>
  //           </span>
  //           <div class="payment-logos" aria-label="We accept Visa and Mastercard">${PAYMENT_LOGOS}</div>
  //         </div>
  //       </div>
  //     </footer>`;
  // }

  function mount(name, html) {
    document.querySelectorAll('[data-partial="' + name + '"]').forEach(el => { el.outerHTML = html; });
  }
  // mount('header', header());
  // mount('footer', footer());
  document.querySelectorAll('[data-payment-logos]').forEach(el => { el.innerHTML = PAYMENT_LOGOS; });

  const bar = document.querySelector('[data-header]');
  const menu = document.getElementById('menu');
  if (bar) {
    const onScroll = () => bar.classList.toggle('is-solid', scrollY > 40);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  const select = document.querySelector('[data-currency-select]');
  if (select) {
    const btn = select.querySelector('.currency__button');
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const open = select.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open);
    });
    document.addEventListener('click', e => {
      if (!select.contains(e.target)) { select.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-currency]');
    if (!b) return;
    DD.setCurrency(b.dataset.currency);
    if (select) select.classList.remove('is-open');
  });
  document.addEventListener('dd:currency', () => {
    document.querySelectorAll('[data-currency-label]').forEach(el => { el.textContent = DD.currency.toLowerCase(); });
    document.querySelectorAll('.currency__option').forEach(o => o.setAttribute('aria-selected', o.dataset.currency === DD.currency));
    document.querySelectorAll('.menu__currency button').forEach(o => o.setAttribute('aria-pressed', o.dataset.currency === DD.currency));
  });
  document.addEventListener('dd:cart', () => {
    document.querySelectorAll('[data-cart-count]').forEach(el => { el.textContent = DD.cartIds().length; });
  });
  document.addEventListener('dd:account', () => {
    document.querySelectorAll('[data-account-link]').forEach(el => { el.innerHTML = accountLink(); });
  });

  function setMenu(open) {
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', !open);
    document.querySelectorAll('[data-menu-open]').forEach(b => b.setAttribute('aria-expanded', open));
    document.body.style.overflow = open ? 'hidden' : '';
  }
  document.addEventListener('click', e => {
    if (e.target.closest('[data-menu-open]')) setMenu(true);
    else if (e.target.closest('[data-menu-close]') || (menu.classList.contains('is-open') && e.target.closest('.menu a'))) setMenu(false);
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.classList.contains('is-open')) setMenu(false); });

  DD.refreshPrices();
})();
