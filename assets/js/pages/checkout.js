(function () {
  'use strict';
  if (!DD.cartItems().length) { location.replace('cart.html'); return; }

  const { esc } = DD.ui;
  const $ = s => document.querySelector(s);
  const form = $('[data-checkout]');
  const BILLING_FIELDS = ['name', 'email', 'dob', 'address', 'country', 'city', 'postcode'];

  function renderAccount() {
    const acc = DD.account();
    $('[data-signed-in]').hidden = !acc;
    $('[data-signed-out]').hidden = !!acc;
    if (acc) {
      $('[data-account-email]').textContent = acc.email;
      BILLING_FIELDS.forEach(k => {
        const input = form.elements[k];
        if (input && !input.value && acc[k]) input.value = acc[k];
      });
    }
  }
  $('[data-sign-out]').addEventListener('click', () => {
    DD.signOut();
    BILLING_FIELDS.forEach(k => { form.elements[k].value = ''; });
    renderAccount();
  });

  function renderSummary() {
    const items = DD.cartItems();
    if (!items.length) { location.replace('cart.html'); return; }
    const t = DD.displayTotals(items);
    $('[data-lines]').innerHTML = items.map(p =>
      '<li class="order-line"><img class="order-line__thumb" src="' + esc(p.image) + '" alt="" loading="lazy" decoding="async" width="48" height="64">' +
      '<div class="order-line__text"><p class="order-line__title">' + esc(p.title) + '</p><p class="order-line__meta">' + esc(p.typeLabel) + '</p></div>' +
      '<span class="order-line__price" data-usd="' + p.price + '">' + DD.money(p.price) + '</span></li>').join('');
    $('[data-subtotal]').textContent = DD.format(t.subtotal);
    $('[data-discount-row]').hidden = !t.code;
    $('[data-discount-form]').hidden = !!t.code;
    $('[data-discount-applied]').hidden = !t.code;
    if (t.code) {
      $('[data-discount-code]').textContent = t.code;
      $('[data-discount-label]').textContent = 'Discount, ' + t.code;
      $('[data-discount]').textContent = 'minus ' + DD.format(t.discount);
    }
    $('[data-total]').textContent = DD.format(t.total);
    // gateway charges USD; say so when another currency is shown
    const charge = $('[data-charge]');
    charge.hidden = t.currency === DD.chargeCurrency;
    charge.textContent = 'Charged in US dollars: ' + DD.format(DD.totals(items).total, DD.chargeCurrency) + '.';
  }

  /* discount: local check until the back end validates codes */
  $('[data-discount-form]').addEventListener('submit', e => {
    e.preventDefault();
    const input = $('#discount-code');
    const ok = input.value.trim() && DD.applyDiscount(input.value);
    $('[data-discount-error]').hidden = !!ok;
    if (ok) input.value = '';
  });
  $('#discount-code').addEventListener('input', () => { $('[data-discount-error]').hidden = true; });
  $('[data-discount-remove]').addEventListener('click', () => DD.clearDiscount());

  /* date of birth as DD/MM/YYYY, a real date in the past */
  function validDob(v) {
    const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(v.trim());
    if (!m) return false;
    const d = new Date(+m[3], +m[2] - 1, +m[1]);
    return d.getDate() === +m[1] && d.getMonth() === +m[2] - 1 && d < new Date() && +m[3] > 1900;
  }
  const dob = form.querySelector('[data-dob]');
  dob.addEventListener('input', () => {
    const digits = dob.value.replace(/\D/g, '').slice(0, 8);
    dob.value = [digits.slice(0, 2), digits.slice(2, 4), digits.slice(4)].filter(Boolean).join('/');
  });

  function today() {
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = DD.ui.validate(form);
    if (!validDob(dob.value)) {
      dob.closest('.field').classList.add('is-invalid');
      if (ok) dob.focus();
      ok = false;
    }
    if (!ok) return;
    const f = form.elements;
    const billing = {
      name: f.name.value.trim(),
      email: f.email.value.trim(),
      dob: f.dob.value.trim(),
      address: f.address.value.trim(),
      country: f.country.value,
      city: f.city.value.trim(),
      postcode: f.postcode.value.trim().toUpperCase()
    };
    const items = DD.cartItems();
    const shown = DD.displayTotals(items);
    // charged in USD; display currency is for reference only
    const order = {
      ref: DD.newOrderRef(),
      date: today(),
      currency: DD.chargeCurrency,
      items: items.map(p => ({ id: p.id, title: p.title, price: p.price })),
      totals: DD.totals(items),
      displayCurrency: shown.currency,
      displayTotal: shown.total,
      billing
    };
    startPayment(order);
  });

  document.addEventListener('dd:cart', renderSummary);
  document.addEventListener('dd:currency', renderSummary);
  document.addEventListener('dd:account', renderAccount);
  renderAccount();
  renderSummary();
})();
