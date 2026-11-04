/* to use an API, replace the lines under "catalogue source" with a fetch returning the same shape */
(function () {
  'use strict';

  // catalogue source
  const CATALOGUE = window.DD_CATALOGUE || { products: [], types: [] };
  const PRODUCTS = CATALOGUE.products;
  const TYPES = CATALOGUE.types;

  const byId = new Map(PRODUCTS.map(p => [p.id, p]));

  // charged in USD; EUR and GBP are display only, fixed rates until the gateway supplies live ones
  const CHARGE_CURRENCY = 'USD';
  const CURRENCIES = {
    USD: { rate: 1, symbol: '$' },
    EUR: { rate: 0.86, symbol: '€' },
    GBP: { rate: 0.75, symbol: '£' }
  };
  const ONE_ON_ONE_RATE_USD = 21.74;

  const storage = {
    get(key, fallback) {
      try {
        const value = localStorage.getItem(key);
        return value === null ? fallback : JSON.parse(value);
      } catch (e) {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
      }
    },
    remove(key) {
      try {
        localStorage.removeItem(key);
      } catch (e) {
      }
    }
  };

  function emit(name, detail) {
    document.dispatchEvent(new CustomEvent(name, { detail }));
  }

  /* money */
  const round2 = value => Math.round(value * 100) / 100;

  let currency = storage.get('dd.currency', 'USD');
  if (!CURRENCIES[currency]) currency = 'USD';

  function convert(usd, code) {
    return round2(usd * CURRENCIES[code || currency].rate);
  }
  function format(value, code) {
    return CURRENCIES[code || currency].symbol + value.toFixed(2);
  }
  function money(usd, opts) {
    const value = convert(usd);
    if (opts && opts.whole) return CURRENCIES[currency].symbol + Math.round(value);
    return format(value);
  }
  function setCurrency(code) {
    if (!CURRENCIES[code] || code === currency) return;
    currency = code;
    storage.set('dd.currency', code);
    refreshPrices();
    emit('dd:currency', { currency: code });
  }
  // [data-usd] elements show that amount in the display currency
  function refreshPrices(root) {
    (root || document).querySelectorAll('[data-usd]').forEach(el => {
      el.textContent = money(parseFloat(el.dataset.usd), { whole: el.hasAttribute('data-whole') });
    });
  }

  /* catalogue */
  function product(id) {
    return byId.get(id) || null;
  }
  function typeLabel(key) {
    const type = TYPES.find(t => t.key === key);
    return type ? type.label : key;
  }
  function related(p, count) {
    const others = PRODUCTS.filter(x => x.id !== p.id && x.type === p.type);
    const sameTheme = others.filter(x => x.theme === p.theme);
    const rest = others.filter(x => x.theme !== p.theme);
    return sameTheme.concat(rest).slice(0, count || 4);
  }

  /* cart: product ids only, no quantities */
  function cartIds() {
    return storage.get('dd.cart', []).filter(id => byId.has(id));
  }
  function cartItems() {
    return cartIds().map(product);
  }
  function inCart(id) {
    return cartIds().includes(id);
  }
  function addToCart(id) {
    const ids = cartIds();
    if (!byId.has(id) || ids.includes(id)) return false;
    ids.push(id);
    storage.set('dd.cart', ids);
    emit('dd:cart', { ids });
    return true;
  }
  function removeFromCart(id) {
    const ids = cartIds().filter(x => x !== id);
    storage.set('dd.cart', ids);
    emit('dd:cart', { ids });
  }
  function clearCart() {
    storage.set('dd.cart', []);
    emit('dd:cart', { ids: [] });
  }

  /* discount codes: local until the back end validates them */
  const DISCOUNTS = { WELCOME10: 0.10 };
  function discountCode() {
    return storage.get('dd.discount', '');
  }
  function applyDiscount(code) {
    code = String(code || '').trim().toUpperCase();
    if (!DISCOUNTS[code]) return false;
    storage.set('dd.discount', code);
    emit('dd:cart', { ids: cartIds() });
    return true;
  }
  function clearDiscount() {
    storage.remove('dd.discount');
    emit('dd:cart', { ids: cartIds() });
  }

  // each line is converted and rounded first so the totals add up
  function totals(items, code, inCurrency) {
    items = items || cartItems();
    code = code === undefined ? discountCode() : code;
    const cur = inCurrency || CHARGE_CURRENCY;
    const lines = items.map(p => convert(p.price, cur));
    const subtotal = round2(lines.reduce((sum, v) => sum + v, 0));
    const rate = (code && DISCOUNTS[code]) || 0;
    const discount = round2(subtotal * rate);
    const total = Math.max(0, round2(subtotal - discount));
    return { currency: cur, lines, subtotal, discount, code: code || '', total };
  }
  function displayTotals(items, code) {
    return totals(items, code, currency);
  }

  /* account: demo session until real auth is wired up */
  const DEMO_ACCOUNT = {
    name: 'John Smith',
    email: 'john@example.com',
    dob: '14/03/1990',
    address: '12 Market Street',
    country: 'United Kingdom',
    city: 'Manchester',
    postcode: 'M1 1AE'
  };
  function account() {
    return storage.get('dd.account', null);
  }
  function signIn(details) {
    const current = account() || {};
    storage.set('dd.account', Object.assign({}, DEMO_ACCOUNT, current, details || {}));
    emit('dd:account', account());
  }
  function signOut() {
    storage.remove('dd.account');
    emit('dd:account', null);
  }
  function saveDetails(details) {
    storage.set('dd.account', Object.assign({}, account() || {}, details));
    emit('dd:account', account());
  }

  /* orders: amounts in USD */
  const DEMO_ORDERS = [
    {
      ref: 'DD-10482', date: '2026-10-14', code: 'WELCOME10',
      ids: ['learning-gutenberg', 'wp-video-focus', 'website-creation-and-design']
    },
    { ref: 'DD-10391', date: '2026-09-30', ids: ['kickstart-genesis-framework-wp-theme'] },
    { ref: 'DD-10277', date: '2026-09-12', ids: ['html-101-kickstart'] },
    { ref: 'DD-10154', date: '2026-08-21', ids: ['web-design-blunders', 'simple-php-scripts'] }
  ];
  function hydrate(order) {
    const lines = order.items || order.ids.map(id => ({ id, price: (product(id) || {}).price || 0 }));
    const items = lines.map(line => Object.assign({}, product(line.id), { price: line.price }));
    return Object.assign({}, order, {
      items,
      totals: order.totals || totals(items, order.code || '')
    });
  }
  // orders placed in this browser, plus demo history while signed in
  function orders() {
    const placed = storage.get('dd.orders', []);
    const demo = account() ? DEMO_ORDERS : [];
    return placed.filter(o => !o.guest || !account()).concat(demo).map(hydrate);
  }
  function findOrder(ref) {
    const placed = storage.get('dd.orders', []);
    const all = placed.concat(DEMO_ORDERS);
    const order = all.find(o => o.ref === ref);
    return order ? hydrate(order) : null;
  }
  function newOrderRef() {
    return 'DD-' + (10483 + storage.get('dd.orders', []).length);
  }
  function recordOrder(order) {
    const placed = storage.get('dd.orders', []);
    placed.unshift({
      ref: order.ref,
      date: order.date,
      currency: order.currency,
      items: order.items.map(i => ({ id: i.id, price: i.price })),
      totals: order.totals,
      displayCurrency: order.displayCurrency,
      displayTotal: order.displayTotal,
      guest: !account()
    });
    storage.set('dd.orders', placed);
  }

  window.DD = Object.assign(window.DD || {}, {
    products: PRODUCTS,
    types: TYPES,
    product, typeLabel, related,
    currencies: CURRENCIES,
    chargeCurrency: CHARGE_CURRENCY,
    oneOnOneRate: ONE_ON_ONE_RATE_USD,
    setCurrency, money, format, convert, refreshPrices,
    cartIds, cartItems, inCart, addToCart, removeFromCart, clearCart,
    discountCode, applyDiscount, clearDiscount, totals, displayTotals,
    account, signIn, signOut, saveDetails,
    orders, findOrder, newOrderRef, recordOrder,
    storage, emit
  });
  // Object.assign would flatten a getter, so define it on DD directly
  Object.defineProperty(window.DD, 'currency', { get: () => currency, enumerable: true, configurable: true });
})();
