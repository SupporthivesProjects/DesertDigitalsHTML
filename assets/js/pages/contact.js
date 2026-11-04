/* ?state=error makes a valid submit show the "message not sent" popup */
(function () {
  'use strict';

  document.querySelectorAll('[data-rate]').forEach(el => { el.dataset.usd = DD.oneOnOneRate; });
  DD.refreshPrices();

  const form = document.querySelector('[data-contact-form]');
  const failDemo = DD.ui.params().get('state') === 'error';

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!DD.ui.validate(form)) return;
    const data = new FormData(form);
    // send `data` to the message endpoint here: popup-sent on success, popup-not-sent on failure
    if (failDemo) {
      DD.ui.popup('popup-not-sent');
      return;
    }
    document.querySelector('[data-popup-name]').textContent = String(data.get('name')).trim().split(/\s+/)[0];
    document.querySelector('[data-popup-email]').textContent = String(data.get('email')).trim();
    DD.ui.popup('popup-sent');
    form.reset();
  });

  document.querySelector('[data-retry]').addEventListener('click', () => {
    document.querySelector('[data-contact-submit]').focus({ preventScroll: true });
  });
})();
