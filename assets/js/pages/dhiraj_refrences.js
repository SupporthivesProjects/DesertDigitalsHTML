
// This File is for oly refrence of dhiraj no link with pages 

// OLD STORE JS 

(function () {
  'use strict';

  const { esc, productCard } = DD.ui;
  const $ = s => document.querySelector(s);
  const mobile = matchMedia('(max-width:820px)');

  // PRICE FILTERS
  const BANDS = [
    {
      key: 'low',
      test: p => p.price < 20,
      label: () => 'Under ' + DD.money(20, { whole: true })
    },
    {
      key: 'mid',
      test: p => p.price >= 20 && p.price <= 60,
      label: () => DD.money(20, { whole: true }) + ' to ' + DD.money(60, { whole: true })
    },
    {
      key: 'high',
      test: p => p.price > 60,
      label: () => 'Over ' + DD.money(60, { whole: true })
    }
  ];

  const NOUNS = {
    video: 'videos',
    ebook: 'e-books',
    software: 'software products',
    template: 'templates',
    audiobook: 'audio books'
  };

  // SORTING OPTIONS
  const SORTS = {
    newest: (a, b) => b.added - a.added,
    'price-asc': (a, b) => a.price - b.price,
    'price-desc': (a, b) => b.price - a.price
  };

  // URL PARAMETERS AND FILTER STATE
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

  // RESPONSIVE PRODUCTS PER PAGE
  const perPage = () => mobile.matches ? 6 : 12;

  const searchInput = $('[data-search]');
  searchInput.value = state.search;

  // GET THEMES AND PRODUCT COUNTS
  function themesFor(type) {
    const counts = {};

    DD.products
      .filter(p => p.type === type)
      .forEach(p => {
        counts[p.theme] = (counts[p.theme] || 0) + 1;
      });

    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }

  // SEARCH FUNCTIONALITY
  function matchesSearch(p) {
    if (!state.search) return true;

    const hay = (
      p.title + ' ' +
      p.summary + ' ' +
      p.theme + ' ' +
      p.typeLabel
    ).toLowerCase();

    return state.search
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean)
      .every(w => hay.includes(w));
  }

  // APPLY ALL FILTERS AND SORTING
  function results() {
    return DD.products
      .filter(p => !state.type || p.type === state.type)
      .filter(p => !state.themes.length || state.themes.includes(p.theme))
      .filter(p => !state.bands.length ||
        BANDS.some(b => state.bands.includes(b.key) && b.test(p))
      )
      .filter(matchesSearch)
      .sort(SORTS[state.sort]);
  }

  // RENDER BROWSE FILTERS
  function renderBrowse() {
    const all = `
      <li class="browse__item">
        <button class="browse__row${!state.type ? ' is-current' : ''}" data-type="">
          <span class="browse__name">All products</span>
          <span class="browse__count">${DD.products.length}</span>
        </button>
      </li>`;

    const types = DD.types.map(t => {
      const count = DD.products.filter(p => p.type === t.key).length;
      const themes = count >= 10 ? themesFor(t.key) : [];
      const open = state.open.has(t.key);

      const toggle = themes.length
        ? `<span class="browse__toggle" aria-hidden="true">${open ? '−' : '+'}</span>`
        : '';

      const expanded = themes.length
        ? ` aria-expanded="${open}"`
        : '';

      const themeItems = themes.map(([name, n]) => {
        const checked =
          state.type === t.key && state.themes.includes(name)
            ? ' checked'
            : '';

        return `
          <li>
            <label class="checkbox browse__theme">
              <input type="checkbox"
                data-theme="${esc(name)}"
                data-theme-type="${t.key}"${checked}>
              <span class="browse__name">${esc(name)}</span>
              <span class="browse__count">${n}</span>
            </label>
          </li>`;
      }).join('');

      const sub = themes.length && open
        ? `<ul class="browse__themes">${themeItems}</ul>`
        : '';

      return `
        <li class="browse__item">
          <button class="browse__row${state.type === t.key ? ' is-current' : ''}"
            data-type="${t.key}"${expanded}>
            <span class="browse__name">${esc(t.label)}</span>
            <span class="browse__count">${count}</span>
            ${toggle}
          </button>
          ${sub}
        </li>`;
    }).join('');

    $('[data-browse]').innerHTML = all + types;

    // PRICE FILTER OPTIONS
    $('[data-price-bands]').innerHTML = BANDS.map(b => `
      <label class="checkbox price-filter__option">
        <input type="checkbox"
          data-band="${b.key}"
          ${state.bands.includes(b.key) ? 'checked' : ''}>
        <span>${b.label()}</span>
      </label>
    `).join('');
  }

  // RESULT SUMMARY
  function summary(list) {
    const filtered =
      state.type ||
      state.themes.length ||
      state.bands.length ||
      state.search;

    if (!filtered) {
      return 'Showing ' + Math.min(perPage(), list.length) +
        ' of ' + DD.products.length + ' products';
    }

    const noun = state.type ? NOUNS[state.type] : 'products';

    const terms = state.themes.concat(
      state.search ? ['"' + state.search + '"'] : []
    );

    const base = list.length + ' ' +
      (list.length === 1 ? noun.replace(/s$/, '') : noun);

    return terms.length
      ? base + ' match ' + terms.join(', ')
      : base;
  }

  // PAGINATION LINKS
  function pageLinks(pages) {
    const cur = state.page;
    const items = [];

    const push = n => items.push(
      '<button class="pagination__item" data-page="' + n + '"' +
      (n === cur ? ' aria-current="page"' : '') +
      '>' + n + '</button>'
    );

    items.push(
      '<button class="pagination__item" data-page="' + (cur - 1) +
      '" aria-label="Previous page"' +
      (cur === 1 ? ' disabled' : '') + '>&lt;</button>'
    );

    const show = new Set([
      1,
      pages,
      cur - 1,
      cur,
      cur + 1,
      mobile.matches ? 0 : 2,
      mobile.matches ? 0 : 3
    ].filter(n => n >= 1 && n <= pages));

    let last = 0;

    [...show].sort((a, b) => a - b).forEach(n => {
      if (n - last > 1) {
        items.push('<span class="pagination__gap">…</span>');
      }

      push(n);
      last = n;
    });

    items.push(
      '<button class="pagination__item" data-page="' + (cur + 1) +
      '" aria-label="Next page"' +
      (cur === pages ? ' disabled' : '') + '>&gt;</button>'
    );

    return items.join('');
  }

  // UPDATE URL PARAMETERS
  function syncUrl() {
    const p = new URLSearchParams();

    if (state.type) p.set('type', state.type);

    state.themes.forEach(t => p.append('theme', t));
    state.bands.forEach(b => p.append('price', b));

    if (state.search) p.set('q', state.search);
    if (state.sort !== 'newest') p.set('sort', state.sort);
    if (state.page > 1) p.set('page', state.page);

    const s = p.toString();

    history.replaceState(
      null,
      '',
      location.pathname + (s ? '?' + s : '')
    );
  }

  // RENDER PRODUCTS AND RESULTS
  function render() {
    const list = results();

    const pages = Math.max(
      1,
      Math.ceil(list.length / perPage())
    );

    state.page = Math.min(state.page, pages);

    const slice = list.slice(
      (state.page - 1) * perPage(),
      state.page * perPage()
    );

    $('[data-grid]').innerHTML = slice.map(productCard).join('');

    $('[data-summary]').textContent = summary(list);

    document.querySelectorAll('[data-result-count]').forEach(el => {
      el.textContent = list.length;
    });

    $('[data-empty]').hidden = list.length > 0;

    const pag = $('[data-pagination]');

    pag.hidden = pages < 2;
    pag.innerHTML = pages > 1 ? pageLinks(pages) : '';

    const foot = $('[data-footnote]');

    const filtered =
      state.type ||
      state.themes.length ||
      state.bands.length ||
      state.search;

    foot.hidden = !(filtered && pages < 2 && list.length);

    if (!foot.hidden && state.type) {
      const total = DD.products.filter(
        p => p.type === state.type
      ).length;

      foot.textContent =
        list.length + ' of ' + total + ' ' +
        summary(list).replace(/^\d+ /, '');
    } else {
      foot.textContent = summary(list);
    }

    document.querySelectorAll('[data-clear]').forEach(b => {
      if (b.closest('.filters')) {
        b.hidden = !filtered;
      }
    });

    syncUrl();
  }

  // UPDATE FILTERS AND PRODUCTS
  function update(resetPage) {
    if (resetPage) state.page = 1;

    renderBrowse();
    render();
  }

  // BROWSE CATEGORY ACCORDION
  $('[data-browse]').addEventListener('click', e => {
    const row = e.target.closest('[data-type]');

    if (!row) return;

    const type = row.dataset.type;

    // ALL PRODUCTS: CLEAR CATEGORY AND CLOSE ACCORDIONS
    if (!type) {
      state.type = '';
      state.themes = [];
      state.open.clear();

      update(true);
      return;
    }

    const count = DD.products.filter(p => p.type === type).length;
    const themes = count >= 10 ? themesFor(type) : [];

    // CLICK ACTIVE CATEGORY: OPEN / CLOSE
    if (state.type === type) {
      if (themes.length) {
        if (state.open.has(type)) {
          state.open.clear();
        } else {
          state.open.clear();
          state.open.add(type);
        }
      }
    } else {
      // SELECT ANOTHER CATEGORY
      state.type = type;
      state.themes = [];
      state.open.clear();

      if (themes.length) {
        state.open.add(type);
      }
    }

    update(true);
  });

  // THEME FILTER CHANGE
  $('[data-browse]').addEventListener('change', e => {
    const box = e.target.closest('[data-theme]');

    if (!box) return;

    if (state.type !== box.dataset.themeType) {
      state.type = box.dataset.themeType;
      state.themes = [];
    }

    const name = box.dataset.theme;

    state.themes = box.checked
      ? state.themes.concat(name)
      : state.themes.filter(t => t !== name);

    update(true);
  });

  // PRICE FILTER CHANGE
  $('[data-price-bands]').addEventListener('change', e => {
    const box = e.target.closest('[data-band]');

    if (!box) return;

    state.bands = box.checked
      ? state.bands.concat(box.dataset.band)
      : state.bands.filter(b => b !== box.dataset.band);

    update(true);
  });

  // SEARCH INPUT WITH DEBOUNCE
  let t;

  searchInput.addEventListener('input', () => {
    clearTimeout(t);

    t = setTimeout(() => {
      state.search = searchInput.value.trim();
      update(true);
    }, 180);
  });

  // CLEAR FILTERS AND PAGINATION
  document.addEventListener('click', e => {

    // CLEAR ALL FILTERS
    if (e.target.closest('[data-clear], [data-clear-mobile]')) {
      Object.assign(state, {
        type: '',
        themes: [],
        bands: [],
        search: ''
      });

      state.open.clear();
      searchInput.value = '';

      update(true);
    }

    // PAGINATION CLICK
    const pg = e.target.closest('[data-page]');

    if (pg && !pg.disabled) {
      state.page = parseInt(pg.dataset.page, 10);

      render();

      document.querySelector('.store').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });

  // SORT DROPDOWN
  DD.ui.dropdown($('[data-sort]'), value => {
    state.sort = value;
    update(true);
  });

  // RESTORE SORT FROM URL
  const sortOpt = document.querySelector(
    '[data-sort] [data-value="' + state.sort + '"]'
  );

  document.querySelectorAll(
    '[data-sort] .dropdown__option'
  ).forEach(o => {
    o.setAttribute('aria-selected', o === sortOpt);
  });

  document.querySelector(
    '[data-sort] .dropdown__value'
  ).textContent = sortOpt.textContent;

  // MOBILE FILTER DRAWER
  const filters = $('#filters');
  const openBtn = $('[data-filters-open]');

  function setSheet(open) {
    filters.classList.toggle('is-open', open);

    openBtn.setAttribute('aria-expanded', open);

    document.body.style.overflow = open ? 'hidden' : '';
  }

  // OPEN MOBILE FILTERS
  openBtn.addEventListener('click', () => {
    setSheet(true);
  });

  // CLOSE MOBILE FILTERS
  document.querySelectorAll('[data-filters-close]').forEach(b => {
    b.addEventListener('click', () => {
      setSheet(false);
    });
  });

  // CLOSE FILTERS ON OVERLAY CLICK
  filters.addEventListener('click', e => {
    if (e.target === filters) {
      setSheet(false);
    }
  });

  // RESPONSIVE SEARCH PLACEHOLDER
  function placeholder() {
    searchInput.placeholder = mobile.matches
      ? searchInput.dataset.placeholderMobile
      : 'Search courses, e-books, software and templates';
  }

  mobile.addEventListener('change', () => {
    placeholder();
    setSheet(false);
    render();
  });

  placeholder();

  // CURRENCY CHANGE EVENT
  document.addEventListener('dd:currency', renderBrowse);

  // INITIALIZE STORE
  update(false);

})();

// NEW STORE JS


(function () {
    'use strict';

    /* =========================================
       1. CATEGORY FILTER ACCORDION
       Only opens and closes category submenus
    ========================================= */

    const browse = document.querySelector('[data-browse]');

    if (browse) {
        const categoryRows = browse.querySelectorAll('.browse__row');

        categoryRows.forEach(function (row) {
            const item = row.closest('.browse__item');
            const themes = item ? item.querySelector('.browse__themes') : null;

            // All products has no accordion
            if (!themes) {
                return;
            }

            // Set initial accordion state
            const initiallyOpen = row.getAttribute('aria-expanded') === 'true';

            themes.hidden = !initiallyOpen;
            item.classList.toggle('is-open', initiallyOpen);

            row.addEventListener('click', function () {
                const isOpen = row.getAttribute('aria-expanded') === 'true';

                // Close all other category accordions
                categoryRows.forEach(function (otherRow) {
                    const otherItem = otherRow.closest('.browse__item');
                    const otherThemes = otherItem
                        ? otherItem.querySelector('.browse__themes')
                        : null;

                    if (!otherThemes || otherRow === row) {
                        return;
                    }

                    otherRow.setAttribute('aria-expanded', 'false');
                    otherThemes.hidden = true;
                    otherItem.classList.remove('is-open');

                    const otherToggle = otherRow.querySelector('.browse__toggle');

                    if (otherToggle) {
                        otherToggle.textContent = '+';
                    }
                });

                // Toggle clicked category
                const shouldOpen = !isOpen;

                row.setAttribute('aria-expanded', String(shouldOpen));
                themes.hidden = !shouldOpen;
                item.classList.toggle('is-open', shouldOpen);

                const toggle = row.querySelector('.browse__toggle');

                if (toggle) {
                    toggle.textContent = shouldOpen ? '−' : '+';
                }
            });
        });
    }


    /* =========================================
       2. SORT DROPDOWN
       UI only - no actual sorting
    ========================================= */

    const sortDropdown = document.querySelector('[data-sort]');

    if (sortDropdown) {
        const sortButton = sortDropdown.querySelector('.dropdown__button');
        const sortList = sortDropdown.querySelector('.dropdown__list');
        const sortValue = sortDropdown.querySelector('.dropdown__value');
        const sortOptions = sortDropdown.querySelectorAll('.dropdown__option');

        if (sortButton && sortList) {

            // Initial state
            sortList.hidden = true;
            sortButton.setAttribute('aria-expanded', 'false');

            // Open / close dropdown
            sortButton.addEventListener('click', function (e) {
                e.stopPropagation();

                const isOpen = sortButton.getAttribute('aria-expanded') === 'true';

                sortList.hidden = isOpen;
                sortButton.setAttribute('aria-expanded', String(!isOpen));

                sortDropdown.classList.toggle('is-open', !isOpen);
            });

            // Select dropdown option (UI only)
            sortOptions.forEach(function (option) {
                option.addEventListener('click', function () {

                    sortOptions.forEach(function (item) {
                        item.setAttribute('aria-selected', 'false');
                    });

                    option.setAttribute('aria-selected', 'true');

                    if (sortValue) {
                        sortValue.textContent = option.textContent.trim();
                    }

                    sortList.hidden = true;
                    sortButton.setAttribute('aria-expanded', 'false');
                    sortDropdown.classList.remove('is-open');

                    // No product sorting happens here.
                    // Laravel will handle sorting on form submission.
                });
            });

            // Close when clicking outside
            document.addEventListener('click', function (e) {
                if (!sortDropdown.contains(e.target)) {
                    sortList.hidden = true;
                    sortButton.setAttribute('aria-expanded', 'false');
                    sortDropdown.classList.remove('is-open');
                }
            });

            // Close with Escape
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') {
                    sortList.hidden = true;
                    sortButton.setAttribute('aria-expanded', 'false');
                    sortDropdown.classList.remove('is-open');
                }
            });
        }
    }


    /* =========================================
       3. MOBILE FILTER DRAWER
       Open / close only
    ========================================= */

    const filters = document.querySelector('#filters');
    const openBtn = document.querySelector('[data-filters-open]');
    const closeBtns = document.querySelectorAll('[data-filters-close]');

    if (filters && openBtn) {

        function setSheet(open) {
            filters.classList.toggle('is-open', open);

            openBtn.setAttribute('aria-expanded', String(open));

            document.body.style.overflow = open ? 'hidden' : '';
        }

        // Open filter drawer
        openBtn.addEventListener('click', function () {
            setSheet(true);
        });

        // Close filter drawer
        closeBtns.forEach(function (button) {
            button.addEventListener('click', function () {
                setSheet(false);
            });
        });

        // Close on overlay click
        filters.addEventListener('click', function (e) {
            if (e.target === filters) {
                setSheet(false);
            }
        });

        // Close on Escape
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && filters.classList.contains('is-open')) {
                setSheet(false);
            }
        });
    }


    /* =========================================
       4. CLEAR FILTER CHECKBOXES
       UI only - no backend filtering
    ========================================= */

    document.addEventListener('click', function (e) {
        const clearButton = e.target.closest('[data-clear], [data-clear-mobile]');

        if (!clearButton) {
            return;
        }

        if (filters) {
            filters.querySelectorAll('input[type="checkbox"]').forEach(function (checkbox) {
                checkbox.checked = false;
            });
        }

        // Do not modify products or submit a filter request here.
    });


    /* =========================================
       5. RESPONSIVE SEARCH PLACEHOLDER
       UI only
    ========================================= */

    const searchInput = document.querySelector('[data-search]');
    const mobile = window.matchMedia('(max-width: 820px)');

    if (searchInput) {
        function updatePlaceholder() {
            searchInput.placeholder = mobile.matches
                ? searchInput.dataset.placeholderMobile
                : 'Search courses, e-books, software and templates';
        }

        updatePlaceholder();

        mobile.addEventListener('change', updatePlaceholder);
    }

})();

