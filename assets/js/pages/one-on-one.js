(function () {
  'use strict';

  document.querySelectorAll('[data-rate]').forEach(el => { el.dataset.usd = DD.oneOnOneRate; });
  DD.refreshPrices();

  const form = document.querySelector('[data-brief-form]');
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!DD.ui.validate(form)) return;
    const data = new FormData(form);
    // send `data` to the enquiry endpoint here; show the popup on success
    document.querySelector('[data-popup-name]').textContent = String(data.get('name')).trim().split(/\s+/)[0];
    document.querySelector('[data-popup-email]').textContent = String(data.get('email')).trim();
    DD.ui.popup('popup-brief');
    form.reset();
  });
})();
