/* gateway returns here with ?ref= */
(function () {
  'use strict';
  const { esc, toast } = DD.ui;
  const $ = s => document.querySelector(s);
  const order = DD.findOrder(DD.ui.params().get('ref'));
  if (!order) {
    $('[data-ref-box]').hidden = true;
    return;
  }

  // billing name is only known for orders placed in this browser
  const pending = DD.storage.get('dd.pendingOrder', null);
  const billingName = pending && pending.ref === order.ref && pending.billing ? pending.billing.name : '';
  const name = billingName || (DD.account() || {}).name || '';
  const first = name.trim().split(/\s+/)[0];
  const thanks = first ? 'Thanks, ' + first + '.' : 'Thanks.';
  const guest = order.guest && !DD.account();

  $('[data-ref]').textContent = order.ref;
  $('[data-paid]').textContent = DD.format(order.totals.total, order.currency || DD.chargeCurrency);
  $('[data-count]').textContent = order.items.length + (order.items.length === 1 ? ' product' : ' products');

  if (!guest) {
    $('[data-thanks]').textContent = thanks + ' Your products are in your account, with the invoice beside them.';
    return;
  }

  $('[data-thanks]').textContent = thanks + ' Your download links are below, and in your order email.';
  $('[data-account-route]').remove();
  $('[data-actions]').classList.add('result__actions--single');
  const list = $('[data-guest-downloads]');
  list.hidden = false;
  list.innerHTML = order.items.map(p =>
    '<li class="result__download">' +
      '<span><span class="result__download-title">' + esc(p.title) + '</span>' +
      '<span class="result__download-meta">' + esc(p.typeLabel) + '</span></span>' +
      '<button class="btn btn--dark btn--small" type="button" data-download="' + esc(p.id) + '"' +
      ' aria-label="download ' + esc(p.title) + '">download</button>' +
    '</li>').join('');
  // signed download link from the file store goes here
  list.addEventListener('click', e => {
    const b = e.target.closest('[data-download]');
    if (b) toast('Downloading ' + esc(DD.product(b.dataset.download).title));
  });
})();
