/* real auth plugs in where each case opens its popup or signs in */
(function () {
  'use strict';
  const form = document.querySelector('[data-auth]');
  if (!form) return;
  const kind = form.dataset.auth;

  // ?next= returns to the previous page, local pages only
  function nextPage() {
    const next = DD.ui.params().get('next') || '';
    return /^[a-z0-9-]+\.html$/.test(next) ? next : '';
  }

  function showEmail(email) {
    document.querySelectorAll('[data-popup-email]').forEach(el => { el.textContent = email; });
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!DD.ui.validate(form)) return;
    const email = form.elements.email ? form.elements.email.value.trim() : '';

    if (kind === 'login') {
      DD.signIn({ email });
      location.href = nextPage() || 'account.html';
    } else if (kind === 'sign-up') {
      showEmail(email);
      DD.ui.popup('popup-check-email');
    } else if (kind === 'forgot') {
      showEmail(email);
      DD.ui.popup('popup-reset-sent');
    } else if (kind === 'reset') {
      DD.ui.popup('popup-password-saved');
    }
  });
})();
