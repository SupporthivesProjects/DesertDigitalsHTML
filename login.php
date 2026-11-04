<?php include 'includes/header.php'; ?>
<div class="page--light">
  <section class="auth">
    <div class="wrap">
      <div class="window">
        <div class="window__bar">
          <img class="window__dots" src="assets/images/window-dots.svg" alt="" width="40" height="8">
          <p class="window__title">desertdigitals&nbsp;&nbsp;·&nbsp;&nbsp;log in</p>
        </div>
        <div class="window__body">
          <nav class="explorer" aria-label="Account folders">
            <p class="explorer__label">explorer</p>
            <ul class="explorer__list">
              <li class="explorer__item"><span class="explorer__icon" aria-hidden="true">▸</span><span class="explorer__name">~/account/</span></li>
              <li class="explorer__item explorer__item--child"><span class="explorer__icon" aria-hidden="true">▸</span><span class="explorer__name">downloads/</span><span class="explorer__badge">locked</span></li>
              <li class="explorer__item explorer__item--child"><span class="explorer__icon" aria-hidden="true">▸</span><span class="explorer__name">invoices/</span><span class="explorer__badge">locked</span></li>
              <li class="explorer__item explorer__item--child"><span class="explorer__icon" aria-hidden="true">·</span><span class="explorer__name">your-details</span><span class="explorer__badge">locked</span></li>
              <li class="explorer__item explorer__item--child is-current" aria-current="page"><span class="explorer__icon" aria-hidden="true">·</span><span class="explorer__name">log-in</span><span class="explorer__open">open</span></li>
            </ul>
          </nav>
          <div class="window__pane">
            <form class="auth-form" data-auth="login" novalidate>
              <h1 class="auth-form__title">Log in</h1>
              <div class="auth-form__fields">
              <div class="field">
                <div class="field__box"><label class="field__label" for="login-email">Email address</label><input class="field__input" id="login-email" name="email" type="email" autocomplete="email" data-rule="email"></div>
                <p class="field__error">Enter a valid email address</p>
              </div>
              <div class="field field--password">
                <div class="field__box"><label class="field__label" for="login-password">Password</label><input class="field__input" id="login-password" name="password" type="password" autocomplete="current-password" data-rule="password"><button type="button" class="field__toggle" aria-label="Show password"><img src="assets/images/icon-eye.svg" alt="" width="20" height="20"></button></div>
                <p class="field__error">Use at least 10 characters</p>
              </div>
              </div>
              <p class="auth-form__forgot"><a href="forgot-password.php">forgot password?</a></p>
              <button class="btn btn--dark btn--block" type="submit">log in</button>
            <p class="auth-form__switch">No account yet? <a href="sign-up.php">sign up</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
<?php include 'includes/footer.php'; ?>