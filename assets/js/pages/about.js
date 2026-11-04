(function () {
  'use strict';
  const { esc, productCard } = DD.ui;

  const SHELF_LABELS = { ebook: 'e-books', video: 'video courses', software: 'software', template: 'templates', audiobook: 'audio book' };

  const shelves = document.querySelector('[data-shelves]');
  shelves.innerHTML = DD.types.map(t => {
    const count = DD.products.filter(p => p.type === t.key).length;
    return '<li class="shelves__item"><a href="store.html?type=' + encodeURIComponent(t.key) + '">' +
      '<span class="shelves__count">' + count + '</span>' +
      '<span class="shelves__label">' + esc(SHELF_LABELS[t.key] || t.label) + '</span></a></li>';
  }).join('');

  const slot = document.querySelector('[data-annotated-card]');
  const example = DD.product(slot.dataset.product) || DD.products[0];
  if (example) slot.innerHTML = productCard(example);
})();
