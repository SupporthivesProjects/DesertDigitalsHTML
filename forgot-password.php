<?php include 'includes/header.php'; ?>
<main class="page page--light">
  <section class="auth">
    <div class="wrap">
      <div class="window">
        <div class="window__bar">
          <img class="window__dots" src="assets/images/window-dots.svg" alt="" width="40" height="8">
          <p class="window__title">desertdigitals&nbsp;&nbsp;·&nbsp;&nbsp;reset <span class="window__title-long"> password</span>
          </p>
        </div>
        <div class="window__body">
          <nav class="explorer" aria-label="Account folders">
            <p class="explorer__label">explorer</p>
            <ul class="explorer__list">
              <li class="explorer__item">
                <span class="explorer__icon" aria-hidden="true">▸</span>
                <span class="explorer__name">~/account/</span>
              </li>
              <li class="explorer__item explorer__item--child">
                <span class="explorer__icon" aria-hidden="true">▸</span>
                <span class="explorer__name">downloads/</span>
                <span class="explorer__badge">locked</span>
              </li>
              <li class="explorer__item explorer__item--child">
                <span class="explorer__icon" aria-hidden="true">▸</span>
                <span class="explorer__name">invoices/</span>
                <span class="explorer__badge">locked</span>
              </li>
              <li class="explorer__item explorer__item--child">
                <span class="explorer__icon" aria-hidden="true">·</span>
                <span class="explorer__name">your-details</span>
                <span class="explorer__badge">locked</span>
              </li>
              <li class="explorer__item explorer__item--child is-current" aria-current="page">
                <span class="explorer__icon" aria-hidden="true">·</span>
                <span class="explorer__name">reset-password</span>
                <span class="explorer__open">open</span>
              </li>
            </ul>
          </nav>
          <div class="window__pane">
            <form class="auth-form" data-auth="forgot" novalidate>
              <div class="auth-form__head">
                <h1 class="auth-form__title">Reset <br>your password </h1>
                <p class="auth-form__lead">Enter the email on your account and we will send a link to set a new password.</p>
              </div>
              <div class="auth-form__fields">
                <div class="field">
                  <div class="field__box">
                    <label class="field__label" for="forgot-email">Email address</label>
                    <input class="field__input" id="forgot-email" name="email" type="email" autocomplete="email" data-rule="email">
                  </div>
                  <p class="field__error">Enter a valid email address</p>
                </div>
              </div>
              <button class="btn btn--dark btn--block" type="submit">send reset link</button>
              <p class="auth-form__switch">Remembered it? <a href="login.html">log in</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
<div class="overlay" id="popup-reset-sent" aria-hidden="true">
  <div class="popup" role="dialog" aria-modal="true" aria-labelledby="popup-reset-sent-title">
    <span class="popup__mark" aria-hidden="true">✓</span>
    <div class="popup__text">
      <h2 class="popup__title" id="popup-reset-sent-title">Reset link sent</h2>
      <p class="popup__body">If an account uses <span data-popup-email>john@example.com</span>, we have sent a link to set a new password. This is step 2 of 3. </p>
    </div>
    <a class="btn btn--dark btn--block" href="login.html">back to log in</a>
  </div>
</div>
<?php include 'includes/footer.php'; ?>