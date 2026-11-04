(function () {
  'use strict';
  const { esc } = DD.ui;
  const $ = s => document.querySelector(s);

  function line(p) {
    const href = 'product.html?id=' + encodeURIComponent(p.id);
    return '<div class="cart-line">' +
      '<a href="' + href + '" tabindex="-1" aria-hidden="true"><img class="cart-line__thumb" src="' + esc(p.image) + '" alt="" loading="lazy" decoding="async" width="72" height="96"></a>' +
      '<div class="cart-line__text"><h2 class="cart-line__title"><a href="' + href + '">' + esc(p.title) + '</a></h2>' +
      '<p class="cart-line__meta">' + esc(p.typeLabel) + '</p></div>' +
      '<div class="cart-line__end"><span class="price" data-usd="' + p.price + '">' + DD.money(p.price) + '</span>' +
      '<button class="cart-line__remove" type="button" data-remove="' + esc(p.id) + '" aria-label="Remove ' + esc(p.title) + '">remove</button></div>' +
    '</div>';
  }

  function render() {
    const items = DD.cartItems();
    const t = DD.displayTotals(items);
    const empty = items.length === 0;
    $('[data-cart]').classList.toggle('is-empty', empty);
    $('[data-empty]').hidden = !empty;
    $('[data-lines]').hidden = empty;
    $('[data-lines]').innerHTML = items.map(line).join('');

    $('[data-subtotal-label]').textContent = 'Subtotal, ' + items.length + (items.length === 1 ? ' product' : ' products');
    $('[data-subtotal]').textContent = DD.format(t.subtotal);
    const disc = $('[data-discount]');
    if (t.code) {
      $('[data-discount-label]').textContent = 'Discount, ' + t.code;
      disc.className = 'is-saving';
      disc.textContent = 'minus ' + DD.format(t.discount);
    } else {
      $('[data-discount-label]').textContent = 'Discount';
      disc.className = '';
      disc.textContent = 'add a code at checkout';
    }
    $('[data-total]').textContent = DD.format(t.total);
  }

  document.addEventListener('click', e => {
    const b = e.target.closest('[data-remove]');
    if (b) DD.removeFromCart(b.dataset.remove);
  });
  document.addEventListener('dd:cart', render);
  document.addEventListener('dd:currency', render);
  render();
})();
