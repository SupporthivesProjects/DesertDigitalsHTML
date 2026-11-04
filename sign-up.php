<?php include 'includes/header.php'; ?>
<div class=" page--light">
  <section class="auth">
    <div class="wrap">
      <div class="window" data-reveal="">
        <div class="window__bar">
          <img class="window__dots" src="assets/images/window-dots.svg" alt="" width="40" height="8">
          <p class="window__title">desertdigitals&nbsp;&nbsp;·&nbsp;&nbsp;sign up</p>
        </div>
        <div class="window__body">
          <nav class="explorer" aria-label="Account folders">
            <p class="explorer__label">explorer</p>
            <ul class="explorer__list">
              <li class="explorer__item"><span class="explorer__icon" aria-hidden="true">▸</span><span class="explorer__name">~/account/</span></li>
              <li class="explorer__item explorer__item--child"><span class="explorer__icon" aria-hidden="true">▸</span><span class="explorer__name">downloads/</span><span class="explorer__badge">locked</span></li>
              <li class="explorer__item explorer__item--child"><span class="explorer__icon" aria-hidden="true">▸</span><span class="explorer__name">invoices/</span><span class="explorer__badge">locked</span></li>
              <li class="explorer__item explorer__item--child"><span class="explorer__icon" aria-hidden="true">·</span><span class="explorer__name">your-details</span><span class="explorer__badge">locked</span></li>
              <li class="explorer__item explorer__item--child is-current" aria-current="page"><span class="explorer__icon" aria-hidden="true">·</span><span class="explorer__name">sign-up</span><span class="explorer__open">open</span></li>
            </ul>
          </nav>
          <div class="window__pane">
            <form class="auth-form" data-auth="sign-up" novalidate="">
              <h1 class="auth-form__title">Create an account</h1>
              <div class="auth-form__fields">
              <div class="field">
                <div class="field__box"><label class="field__label" for="signup-name">Full name</label><input class="field__input" id="signup-name" name="name" type="text" autocomplete="name" data-rule="required"></div>
                <p class="field__error">Enter your full name</p>
              </div>
              <div class="field">
                <div class="field__box"><label class="field__label" for="signup-email">Email address</label><input class="field__input" id="signup-email" name="email" type="email" autocomplete="email" data-rule="email"></div>
                <p class="field__error">Enter a valid email address</p>
              </div>
              <div class="field field--password">
                <div class="field__box"><label class="field__label" for="signup-password">Password</label><input class="field__input" id="signup-password" name="password" type="password" autocomplete="new-password" data-rule="password"><button type="button" class="field__toggle" aria-label="Show password"><img src="assets/images/icon-eye.svg" alt="" width="20" height="20"></button></div>
                <p class="field__error">Use at least 10 characters</p>
              </div>
              </div>
              <label class="checkbox"><input type="checkbox" name="terms" data-rule="checked"><span>I agree to the <a href="terms.php">Terms and conditions</a> and <a href="privacy.php">Privacy policy</a>.</span></label>
              <div class="captcha"><label><input type="checkbox" data-rule="captcha"> I'm not a robot</label><small><img class="captcha__logo" src="assets/images/recaptcha-logo.svg" alt="" width="32" height="32">reCAPTCHA<br>Privacy · Terms</small></div>
              <button class="btn btn--dark btn--block" type="submit">create account</button>
            <p class="auth-form__switch">Have an account? <a href="login.php">log in</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
<div class="overlay" id="popup-check-email" aria-hidden="true">
  <div class="popup" role="dialog" aria-modal="true" aria-labelledby="popup-check-email-title">
    <span class="popup__mark" aria-hidden="true">✓</span>
    <div class="popup__text">
      <h2 class="popup__title" id="popup-check-email-title">Check your email</h2>
      <p class="popup__body">We sent a link to <span data-popup-email>john@example.com</span>. Open it to verify your account and log in. </p>
    </div>
    <button class="btn btn--dark btn--block" type="button" data-popup-close>close</button>
  </div>
</div>
<?php include 'includes/footer.php'; ?>