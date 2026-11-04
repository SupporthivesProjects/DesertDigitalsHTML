/* filters are kept in the URL: ?type=video&theme=WordPress&price=low&q=gutenberg&sort=newest&page=2 */
(function () {
  'use strict';
  const { esc, productCard } = DD.ui;
  const $ = s => document.querySelector(s);
  const mobile = matchMedia('(max-width:820px)');

  const BANDS = [
    { key: 'low', test: p => p.price < 20, label: () => 'Under ' + DD.money(20, { whole: true }) },
    { key: 'mid', test: p => p.price >= 20 && p.price <= 60, label: () => DD.money(20, { whole: true }) + ' to ' + DD.money(60, { whole: true }) },
    { key: 'high', test: p => p.price > 60, label: () => 'Over ' + DD.money(60, { whole: true }) }
  ];
  const NOUNS = { video: 'videos', ebook: 'e-books', software: 'software products', template: 'templates', audiobook: 'audio books' };
  const SORTS = {
    newest: (a, b) => b.added - a.added,
    'price-asc': (a, b) => a.price - b.price,
    'price-desc': (a, b) => b.price - a.price
  };

  const q = new URLSearchParams(location.search);
  const state = {
    type: q.get('type') || '',
    themes: q.getAll('theme'),
    bands: q.getAll('price'),
    search: q.get('q') || '',
    sort: SORTS[q.get('sort')] ? q.get('sort') : 'newest',
    page: Math.max(1, parseInt(q.get('page'), 10) || 1),
    open: new Set(q.get('type') ? [q.get('type')] : [])
  };

  const perPage = () => (mobile.matches ? 6 : 12);
  const searchInput = $('[data-search]');
  searchInput.value = state.search;

  function themesFor(type) {
    const counts = {};
    DD.products.filter(p => p.type === type).forEach(p => { counts[p.theme] = (counts[p.theme] || 0) + 1; });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }

  function matchesSearch(p) {
    if (!state.search) return true;
    const hay = (p.title + ' ' + p.summary + ' ' + p.theme + ' ' + p.typeLabel).toLowerCase();
    return state.search.toLowerCase().split(/\s+/).filter(Boolean).every(w => hay.includes(w));
  }

  function results() {
    return DD.products
      .filter(p => !state.type || p.type === state.type)
      .filter(p => !state.themes.length || state.themes.includes(p.theme))
      .filter(p => !state.bands.length || BANDS.some(b => state.bands.includes(b.key) && b.test(p)))
      .filter(matchesSearch)
      .sort(SORTS[state.sort]);
  }

  function renderBrowse() {
    const all = `
      <li class="browse__item">
        <button class="browse__row${!state.type ? ' is-current' : ''}" data-type="">
          <span class="browse__name">All products</span><span class="browse__count">${DD.products.length}</span>
        </button>
      </li>`;
    const types = DD.types.map(t => {
      const count = DD.products.filter(p => p.type === t.key).length;
      const themes = count >= 10 ? themesFor(t.key) : [];
      const open = state.open.has(t.key);
      const toggle = themes.length ? `<span class="browse__toggle" aria-hidden="true">${open ? '−' : '+'}</span>` : '';
      const expanded = themes.length ? ` aria-expanded="${open}"` : '';
      const themeItems = themes.map(([name, n]) => {
        const checked = state.type === t.key && state.themes.includes(name) ? ' checked' : '';
        return `
          <li>
            <label class="checkbox browse__theme">
              <input type="checkbox" data-theme="${esc(name)}" data-theme-type="${t.key}"${checked}>
              <span class="browse__name">${esc(name)}</span><span class="browse__count">${n}</span>
            </label>
          </li>`;
      }).join('');
      const sub = themes.length && open ? `<ul class="browse__themes">${themeItems}</ul>` : '';
      return `
        <li class="browse__item">
          <button class="browse__row${state.type === t.key ? ' is-current' : ''}" data-type="${t.key}"${expanded}>
            <span class="browse__name">${esc(t.label)}</span><span class="browse__count">${count}</span>${toggle}
          </button>
          ${sub}
        </li>`;
    }).join('');
    $('[data-browse]').innerHTML = all + types;
    $('[data-price-bands]').innerHTML = BANDS.map(b => `
      <label class="checkbox price-filter__option">
        <input type="checkbox" data-band="${b.key}"${state.bands.includes(b.key) ? ' checked' : ''}><span>${b.label()}</span>
      </label>`).join('');
  }

  function summary(list) {
    const filtered = state.type || state.themes.length || state.bands.length || state.search;
    if (!filtered) return 'Showing ' + Math.min(perPage(), list.length) + ' of ' + DD.products.length + ' products';
    const noun = state.type ? NOUNS[state.type] : 'products';
    const terms = state.themes.concat(state.search ? ['"' + state.search + '"'] : []);
    const base = list.length + ' ' + (list.length === 1 ? noun.replace(/s$/, '') : noun);
    return terms.length ? base + ' match ' + terms.join(', ') : base;
  }

  function pageLinks(pages) {
    const cur = state.page;
    const items = [];
    const push = n => items.push('<button class="pagination__item" data-page="' + n + '"' + (n === cur ? ' aria-current="page"' : '') + '>' + n + '</button>');
    items.push('<button class="pagination__item" data-page="' + (cur - 1) + '" aria-label="Previous page"' + (cur === 1 ? ' disabled' : '') + '>&lt;</button>');
    const show = new Set([1, pages, cur - 1, cur, cur + 1, mobile.matches ? 0 : 2, mobile.matches ? 0 : 3].filter(n => n >= 1 && n <= pages));
    let last = 0;
    [...show].sort((a, b) => a - b).forEach(n => {
      if (n - last > 1) items.push('<span class="pagination__gap">…</span>');
      push(n);
      last = n;
    });
    items.push('<button class="pagination__item" data-page="' + (cur + 1) + '" aria-label="Next page"' + (cur === pages ? ' disabled' : '') + '>&gt;</button>');
    return items.join('');
  }

  function syncUrl() {
    const p = new URLSearchParams();
    if (state.type) p.set('type', state.type);
    state.themes.forEach(t => p.append('theme', t));
    state.bands.forEach(b => p.append('price', b));
    if (state.search) p.set('q', state.search);
    if (state.sort !== 'newest') p.set('sort', state.sort);
    if (state.page > 1) p.set('page', state.page);
    const s = p.toString();
    history.replaceState(null, '', location.pathname + (s ? '?' + s : ''));
  }

  function render() {
    const list = results();
    const pages = Math.max(1, Math.ceil(list.length / perPage()));
    state.page = Math.min(state.page, pages);
    const slice = list.slice((state.page - 1) * perPage(), state.page * perPage());
    $('[data-grid]').innerHTML = slice.map(productCard).join('');
    $('[data-summary]').textContent = summary(list);
    document.querySelectorAll('[data-result-count]').forEach(el => { el.textContent = list.length; });
    $('[data-empty]').hidden = list.length > 0;
    const pag = $('[data-pagination]');
    pag.hidden = pages < 2;
    pag.innerHTML = pages > 1 ? pageLinks(pages) : '';
    const foot = $('[data-footnote]');
    const filtered = state.type || state.themes.length || state.bands.length || state.search;
    foot.hidden = !(filtered && pages < 2 && list.length);
    if (!foot.hidden && state.type) {
      const total = DD.products.filter(p => p.type === state.type).length;
      foot.textContent = list.length + ' of ' + total + ' ' + summary(list).replace(/^\d+ /, '');
    } else foot.textContent = summary(list);
    document.querySelectorAll('[data-clear]').forEach(b => { if (b.closest('.filters')) b.hidden = !filtered; });
    syncUrl();
  }

  function update(resetPage) {
    if (resetPage) state.page = 1;
    renderBrowse();
    render();
  }

  $('[data-browse]').addEventListener('click', e => {
    const row = e.target.closest('[data-type]');
    if (!row) return;
    const type = row.dataset.type;
    if (type && state.type === type && themesFor(type).length && DD.products.filter(p => p.type === type).length >= 10) {
      state.open.has(type) ? state.open.delete(type) : state.open.add(type);
    } else {
      if (type) state.open.add(type);
    }
    if (state.type !== type) state.themes = [];
    state.type = type;
    update(true);
  });
  $('[data-browse]').addEventListener('change', e => {
    const box = e.target.closest('[data-theme]');
    if (!box) return;
    if (state.type !== box.dataset.themeType) { state.type = box.dataset.themeType; state.themes = []; }
    const name = box.dataset.theme;
    state.themes = box.checked ? state.themes.concat(name) : state.themes.filter(t => t !== name);
    update(true);
  });
  $('[data-price-bands]').addEventListener('change', e => {
    const box = e.target.closest('[data-band]');
    if (!box) return;
    state.bands = box.checked ? state.bands.concat(box.dataset.band) : state.bands.filter(b => b !== box.dataset.band);
    update(true);
  });
  let t;
  searchInput.addEventListener('input', () => {
    clearTimeout(t);
    t = setTimeout(() => { state.search = searchInput.value.trim(); update(true); }, 180);
  });
  document.addEventListener('click', e => {
    if (e.target.closest('[data-clear], [data-clear-mobile]')) {
      Object.assign(state, { type: '', themes: [], bands: [], search: '' });
      state.open.clear();
      searchInput.value = '';
      update(true);
    }
    const pg = e.target.closest('[data-page]');
    if (pg && !pg.disabled) {
      state.page = parseInt(pg.dataset.page, 10);
      render();
      document.querySelector('.store').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
  DD.ui.dropdown($('[data-sort]'), value => { state.sort = value; update(true); });
  // show a sort restored from the URL without resetting the page
  const sortOpt = document.querySelector('[data-sort] [data-value="' + state.sort + '"]');
  document.querySelectorAll('[data-sort] .dropdown__option').forEach(o => o.setAttribute('aria-selected', o === sortOpt));
  document.querySelector('[data-sort] .dropdown__value').textContent = sortOpt.textContent;

  /* mobile filters sheet */
  const filters = $('#filters');
  const openBtn = $('[data-filters-open]');
  function setSheet(open) {
    filters.classList.toggle('is-open', open);
    openBtn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  openBtn.addEventListener('click', () => setSheet(true));
  document.querySelectorAll('[data-filters-close]').forEach(b => b.addEventListener('click', () => setSheet(false)));
  filters.addEventListener('click', e => { if (e.target === filters) setSheet(false); });

  function placeholder() { searchInput.placeholder = mobile.matches ? searchInput.dataset.placeholderMobile : 'Search courses, e-books, software and templates'; }
  mobile.addEventListener('change', () => { placeholder(); setSheet(false); render(); });
  placeholder();

  document.addEventListener('dd:currency', renderBrowse);
  update(false);
})();
