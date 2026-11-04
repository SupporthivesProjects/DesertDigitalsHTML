(function () {
  'use strict';
  const { esc, formatDate, toast, popup, validate, params } = DD.ui;
  const $ = s => document.querySelector(s);
  const pageName = document.body.dataset.accountPage;

  // demo session; real auth should redirect to login.html when signed out
  if (!DD.account()) DD.signIn();

  // demo value until the account API returns the join date
  const MEMBER_SINCE = '2026-03-01';

  // ?state=empty previews the empty library
  const forceEmpty = params().get('state') === 'empty';
  const orders = forceEmpty ? [] : DD.orders();

  function library() {
    const seen = new Map();
    orders.forEach(o => o.items.forEach(item => {
      if (item.id && !seen.has(item.id)) seen.set(item.id, { product: item, ref: o.ref, date: o.date });
    }));
    return [...seen.values()];
  }

  function monthYear(iso) { return formatDate(iso).replace(/^\d+ /, ''); }

  function renderHero() {
    const acc = DD.account() || {};
    const first = String(acc.name || 'John Smith').trim().split(/\s+/)[0];
    $('[data-greeting]').textContent = 'Hi ' + first + '.';
    document.querySelectorAll('[data-count-products]').forEach(el => { el.textContent = library().length; });
    document.querySelectorAll('[data-count-invoices]').forEach(el => { el.textContent = orders.length; });
    $('[data-member-since]').textContent = monthYear(MEMBER_SINCE);
  }

  function showCurrentTab() {
    const bar = $('[data-tab-bar]');
    const cur = bar.querySelector('[aria-current="page"]');
    if (cur && cur.offsetLeft + cur.offsetWidth > bar.clientWidth) bar.scrollLeft = cur.offsetLeft - 16;
  }

  document.addEventListener('click', e => {
    if (!e.target.closest('[data-signout]')) return;
    DD.signOut();
    location.href = 'login.html';
  });

  function initDetails() {
    const acc = Object.assign({}, DD.account());
    document.querySelectorAll('[data-details-form] .field__input').forEach(input => {
      if (input.type !== 'password' && acc[input.name] != null) input.value = acc[input.name];
    });

    const dob = $('[data-dob]');
    dob.addEventListener('input', () => {
      const d = dob.value.replace(/\D/g, '').slice(0, 8);
      dob.value = [d.slice(0, 2), d.slice(2, 4), d.slice(4)].filter(Boolean).join('/');
    });

    document.querySelectorAll('[data-details-form]').forEach(form => form.addEventListener('submit', e => {
      e.preventDefault();
      if (!validate(form)) return;
      const kind = form.dataset.detailsForm;
      if (kind === 'password') {
        // auth API checks the current password and stores the new one here
        form.reset();
        toast('Password updated');
        return;
      }
      const data = {};
      form.querySelectorAll('.field__input').forEach(input => { data[input.name] = input.value.trim(); });
      DD.saveDetails(data);
      renderHero();
      popup('popup-saved');
    }));
  }

  /* invoices: amounts in the charged currency, not reconverted */
  const charged = (value, o) => DD.format(value, o.currency || DD.chargeCurrency);

  function invoiceText(o) {
    const acc = DD.account() || {};
    const lines = [
      'desertdigitals invoice ' + o.ref,
      'Date: ' + formatDate(o.date),
      'Billed to: ' + (acc.name || '') + ' <' + (acc.email || '') + '>',
      ''
    ];
    o.items.forEach(i => lines.push(i.title + '  ' + charged(i.price, o)));
    lines.push('');
    if (o.totals.discount) lines.push('Discount (' + o.totals.code + ')  minus ' + charged(o.totals.discount, o));
    lines.push('Total  ' + charged(o.totals.total, o));
    return lines.join('\n');
  }

  // placeholder until the back end generates the PDF: saves a plain text invoice
  function downloadInvoice(o) {
    const blob = new Blob([invoiceText(o)], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'invoice-' + o.ref + '.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  function initInvoices() {
    const empty = !orders.length;
    $('[data-ledger]').hidden = empty;
    $('[data-empty]').hidden = !empty;
    if (empty) return;
    $('[data-invoice-rows]').innerHTML = orders.map(o =>
      '<div class="invoice-row">' +
        '<div class="invoice-row__top"><span class="invoice-row__ref">' + esc(o.ref) + '</span>' +
        '<span class="price">' + charged(o.totals.total, o) + '</span></div>' +
        '<span class="invoice-row__date">' + formatDate(o.date) + '</span>' +
        '<div class="invoice-row__products"><span>' + o.items.map(i => esc(i.title)).join(', ') + '</span>' +
        (o.totals.code ? '<span class="invoice-row__code">' + esc(o.totals.code) + ' applied</span>' : '') + '</div>' +
        '<div class="invoice-row__actions"><button class="btn btn--outline btn--small" type="button" data-invoice="' + esc(o.ref) + '">download pdf</button></div>' +
      '</div>').join('');
    const sum = orders.reduce((s, o) => s + o.totals.total, 0);
    $('[data-invoice-summary]').textContent = orders.length + (orders.length === 1 ? ' invoice' : ' invoices') + ' since ' + monthYear(MEMBER_SINCE);
    $('[data-invoice-total]').textContent = DD.format(Math.round(sum * 100) / 100, DD.chargeCurrency) + ' in total';
    document.addEventListener('click', e => {
      const b = e.target.closest('[data-invoice]');
      if (b) downloadInvoice(orders.find(o => o.ref === b.dataset.invoice));
    });
  }

  // known sizes for sample products, others derived from the id until the file store reports real ones
  const SAMPLE_SIZES = {
    'learning-gutenberg': '1.4 GB',
    'wp-video-focus': '24 MB',
    'website-creation-and-design': '8 MB',
    'kickstart-genesis-framework-wp-theme': '12 MB',
    'html-101-kickstart': '2.1 GB'
  };
  const SIZE_RANGES = {
    video: [0.8, 2.4, 'GB'], audiobook: [180, 620, 'MB'], software: [3, 40, 'MB'],
    template: [4, 20, 'MB'], ebook: [2, 12, 'MB']
  };
  function fileSize(p) {
    if (SAMPLE_SIZES[p.id]) return SAMPLE_SIZES[p.id];
    let h = 0;
    for (const c of p.id) h = (h * 31 + c.charCodeAt(0)) >>> 0;
    const [min, max, unit] = SIZE_RANGES[p.type] || [2, 20, 'MB'];
    const v = min + (h % 1000) / 1000 * (max - min);
    return (unit === 'GB' ? v.toFixed(1) : Math.round(v)) + ' ' + unit;
  }

  function initDownloads() {
    const items = library();
    const empty = !items.length;
    $('[data-library]').hidden = empty;
    $('[data-library-lead]').closest('.account-head').hidden = empty;
    $('[data-empty]').hidden = !empty;
    if (empty) return;
    $('[data-library]').innerHTML = items.map(({ product: p, ref }) => {
      const href = 'product.html?id=' + encodeURIComponent(p.id);
      return '<article class="account-panel download-card">' +
        '<a href="' + href + '" tabindex="-1" aria-hidden="true">' +
        '<img class="download-card__cover" src="' + esc(p.image) + '" alt="" loading="lazy" decoding="async" width="1200" height="1615"></a>' +
        '<div class="download-card__text">' +
          '<p class="download-card__meta"><span class="download-card__type">' + esc(p.typeLabel) + '</span>' +
          '<span><span class="download-card__dot">· </span>' + fileSize(p) + ' · ' + esc(ref) + '</span></p>' +
          '<h3 class="download-card__title"><a href="' + href + '">' + esc(p.title) + '</a></h3>' +
          '<button class="btn btn--dark btn--small" type="button" data-download="' + esc(p.id) + '">download</button>' +
        '</div>' +
      '</article>';
    }).join('') +
      '<div class="find-more"><h3 class="heading-3">Find your next product</h3><a class="btn btn--primary btn--small" href="store.html">browse the store</a></div>';
    document.addEventListener('click', e => {
      const b = e.target.closest('[data-download]');
      if (!b) return;
      // signed file link from the file store goes here
      const p = DD.product(b.dataset.download);
      toast('Downloading ' + esc(p.title) + ' (' + fileSize(p) + ')');
    });
  }

  renderHero();
  if (pageName === 'your-details') initDetails();
  if (pageName === 'invoices') initInvoices();
  if (pageName === 'downloads') initDownloads();
  showCurrentTab();
  addEventListener('resize', showCurrentTab);
})();
