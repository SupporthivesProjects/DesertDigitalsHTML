(function () {
  'use strict';

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function addLabel(id) { return DD.inCart(id) ? 'in cart' : 'add to cart'; }

  function productCard(p) {
    const href = 'product.html?id=' + encodeURIComponent(p.id);
    return '<article class="product-card">' +
      '<a class="product-card__media" href="' + href + '" tabindex="-1" aria-hidden="true">' +
        '<img src="' + esc(p.image) + '" alt="" loading="lazy" decoding="async" width="1200" height="1615"></a>' +
      '<span class="pill">' + esc(p.typeLabel) + '</span>' +
      '<div class="product-card__body">' +
        '<div class="product-card__text"><h3 class="product-card__title"><a href="' + href + '">' + esc(p.title) + '</a></h3>' +
        '<p class="product-card__summary">' + esc(p.summary) + '</p></div>' +
        '<div class="product-card__row"><span class="price" data-usd="' + p.price + '">' + DD.money(p.price) + '</span>' +
        '<button class="btn btn--primary btn--small' + (DD.inCart(p.id) ? ' is-added' : '') + '" data-add="' + esc(p.id) + '"' +
        ' aria-label="' + addLabel(p.id) + ': ' + esc(p.title) + '">' + addLabel(p.id) + '</button></div>' +
      '</div>' +
    '</article>';
  }

  /* toast */
  let toastEl;
  function toast(html) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      toastEl.setAttribute('role', 'status');
      document.body.appendChild(toastEl);
    }
    toastEl.innerHTML = html;
    toastEl.classList.add('is-on');
    clearTimeout(toastEl.timer);
    toastEl.timer = setTimeout(() => toastEl.classList.remove('is-on'), 2400);
  }

  /* add to cart: any [data-add="product-id"] button */
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-add]');
    if (!b) return;
    e.preventDefault();
    const id = b.dataset.add;
    const p = DD.product(id);
    if (!p) return;
    if (DD.inCart(id)) { location.href = 'cart.html'; return; }
    DD.addToCart(id);
    toast('Added to cart: ' + esc(p.title) + ' <a href="cart.html">view cart</a>');
  });
  document.addEventListener('dd:cart', () => {
    document.querySelectorAll('[data-add]').forEach(b => {
      const added = DD.inCart(b.dataset.add);
      b.classList.toggle('is-added', added);
      if (b.hasAttribute('data-keep-label')) return;
      b.textContent = addLabel(b.dataset.add);
      const p = DD.product(b.dataset.add);
      if (b.hasAttribute('aria-label') && p) b.setAttribute('aria-label', addLabel(p.id) + ': ' + p.title);
    });
  });

  /* popup: markup lives in the page as .overlay#id; open with DD.ui.popup('id') */
  function popup(id) {
    const o = document.getElementById(id);
    if (!o) return;
    o.classList.add('is-open');
    o.setAttribute('aria-hidden', 'false');
    const focus = o.querySelector('a,button');
    if (focus) focus.focus({ preventScroll: true });
  }
  function closePopup(o) {
    o.classList.remove('is-open');
    o.setAttribute('aria-hidden', 'true');
  }
  document.addEventListener('click', e => {
    const o = e.target.closest('.overlay');
    if (o && (e.target === o || e.target.closest('[data-popup-close]'))) closePopup(o);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') document.querySelectorAll('.overlay.is-open').forEach(closePopup);
  });

  /* dropdown: .dropdown > .dropdown__button + .dropdown__list > .dropdown__option[data-value] */
  function dropdown(el, onChange) {
    const btn = el.querySelector('.dropdown__button');
    const value = el.querySelector('.dropdown__value');
    btn.setAttribute('aria-haspopup', 'listbox');
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const open = el.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open);
    });
    el.querySelectorAll('.dropdown__option').forEach(o => o.addEventListener('click', () => {
      el.querySelectorAll('.dropdown__option').forEach(x => x.setAttribute('aria-selected', x === o));
      value.textContent = o.textContent;
      el.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      onChange && onChange(o.dataset.value);
    }));
    document.addEventListener('click', e => { if (!el.contains(e.target)) { el.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); } });
  }

  /* forms: fields carry data-rule="required|email|password|checked|captcha" and a .field__error message */
  const RULES = {
    required: v => v.trim().length > 0,
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    password: v => v.length >= 10,
    message: v => v.trim().length > 0
  };
  function validate(form) {
    let ok = true;
    form.querySelectorAll('[data-rule]').forEach(input => {
      const rule = input.dataset.rule;
      const valid = (rule === 'checked' || rule === 'captcha') ? input.checked
        : rule === 'match' ? input.value === form.querySelector(input.dataset.match).value && input.value.length > 0
        : (RULES[rule] || RULES.required)(input.value);
      const wrap = input.closest('.field, .checkbox, .captcha');
      if (wrap) wrap.classList.toggle('is-invalid', !valid);
      if (!valid && ok) { input.focus({ preventScroll: false }); }
      if (!valid) ok = false;
    });
    return ok;
  }
  document.addEventListener('input', e => {
    const wrap = e.target.closest('.field.is-invalid, .checkbox.is-invalid, .captcha.is-invalid');
    if (wrap) wrap.classList.remove('is-invalid');
  });
  document.addEventListener('change', e => {
    const wrap = e.target.closest('.checkbox.is-invalid, .captcha.is-invalid');
    if (wrap) wrap.classList.remove('is-invalid');
  });

  document.addEventListener('click', e => {
    const t = e.target.closest('.field__toggle');
    if (!t) return;
    const input = t.closest('.field__box').querySelector('input');
    const show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    t.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
  });

  /* accordion: .accordion__item > button[aria-expanded] + .accordion__panel */
  document.addEventListener('click', e => {
    const b = e.target.closest('.accordion__item > button');
    if (!b) return;
    const item = b.parentElement;
    const open = item.classList.toggle('is-open');
    b.setAttribute('aria-expanded', open);
  });

  function formatDate(iso) {
    const d = new Date(iso + 'T12:00:00');
    return d.getDate() + ' ' + ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()] + ' ' + d.getFullYear();
  }

  function params() { return new URLSearchParams(location.search); }

  DD.ui = { esc, productCard, toast, popup, dropdown, validate, formatDate, params };
})();
