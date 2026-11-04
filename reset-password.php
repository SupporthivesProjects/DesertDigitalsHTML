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
            <form class="auth-form" data-auth="reset" novalidate>
              <h1 class="auth-form__title">Set a <br>new password </h1>
              <div class="auth-form__fields">
                <div class="field field--password">
                  <div class="field__box">
                    <label class="field__label" for="reset-password">New password</label>
                    <input class="field__input" id="reset-password" name="password" type="password" autocomplete="new-password" data-rule="password">
                    <button type="button" class="field__toggle" aria-label="Show password">
                      <img src="assets/images/icon-eye.svg" alt="" width="20" height="20">
                    </button>
                  </div>
                  <p class="field__error">Use at least 10 characters</p>
                </div>
                <div class="field field--password">
                  <div class="field__box">
                    <label class="field__label" for="reset-repeat">Repeat new password</label>
                    <input class="field__input" id="reset-repeat" name="repeat" type="password" autocomplete="new-password" data-rule="match" data-match="#reset-password">
                    <button type="button" class="field__toggle" aria-label="Show password">
                      <img src="assets/images/icon-eye.svg" alt="" width="20" height="20">
                    </button>
                  </div>
                  <p class="field__error">Passwords do not match</p>
                </div>
              </div>
              <button class="btn btn--dark btn--block" type="submit">save password</button>
              <p class="auth-form__switch">Need a new link? <a href="forgot-password.php">send again</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
<div class="overlay" id="popup-password-saved" aria-hidden="true">
  <div class="popup" role="dialog" aria-modal="true" aria-labelledby="popup-password-saved-title">
    <span class="popup__mark" aria-hidden="true">✓</span>
    <div class="popup__text">
      <h2 class="popup__title" id="popup-password-saved-title">Password saved</h2>
      <p class="popup__body">Your new password is set. Log in with it to reach your downloads and invoices.</p>
    </div>
    <a class="btn btn--dark btn--block" href="login.php">log in</a>
  </div>
</div>
<?php include 'includes/footer.php'; ?>