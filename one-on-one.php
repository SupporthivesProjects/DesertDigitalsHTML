<?php include 'includes/header.php'; ?>

<div class="page--light">
  <section class="session-hero">
    <div class="session-hero__copy">
      <div class="session-hero__heading">
        <h1 class="heading-1">An hour with<br>a developer</h1>
        <p class="body-large session-hero__lead">Bring the bug, the half built feature or the product you bought and got stuck on. Work through it with an experienced developer, on your own code.</p>
      </div>
      <p class="rate">
        <span class="rate__note mono">from</span>
        <span class="rate__value price price--large" data-rate data-usd="0"></span>
        <span class="rate__note mono">an hour</span>
      </p>
      <div class="session-hero__buttons">
        <a class="btn btn--primary session-hero__cta" href="#brief">send a brief</a>
        <a class="btn btn--outline" href="#how">how a session runs</a>
      </div>
    </div>
    <div class="session-hero__media">
      <img fetchpriority="high" src="assets/images/one-on-one-hero.jpg" alt="" width="2368" height="1760">
    </div>
  </section>
  <section class="session-steps" id="how">
    <img class="session-steps__texture" src="assets/images/sand-texture.jpg" alt="" width="2400" height="1029" loading="lazy" decoding="async">
    <div class="wrap session-steps__inner">
      <h2 class="heading-2">How a session runs</h2>
      <ol class="steps">
        <li class="steps__item">
          <span class="steps__num mono" aria-hidden="true">01</span>
          <div class="steps__text">
            <h3 class="heading-3">Send a brief</h3>
            <p class="body-small">Tell us what you are building and where it breaks. Link the repository or paste the code that matters.</p>
          </div>
        </li>
        <li class="steps__item">
          <span class="steps__num mono" aria-hidden="true">02</span>
          <div class="steps__text">
            <h3 class="heading-3">We match a developer</h3>
            <p class="body-small">A developer who works in your stack reads the brief and replies by email with times and a confirmed rate.</p>
          </div>
        </li>
        <li class="steps__item">
          <span class="steps__num mono" aria-hidden="true">03</span>
          <div class="steps__text">
            <h3 class="heading-3">Work through it together</h3>
            <p class="body-small">Share your screen and your code. You keep the notes, the fixes and anything written during the hour.</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
  <section class="brief" id="brief">
    <div class="wrap brief__layout">
      <div class="brief__copy">
        <h2 class="heading-2">Priced by the hour</h2>
        <p class="body-large muted">Sessions start from <span data-rate data-usd="0"></span> an hour. The final rate depends on the stack and how many hours the brief needs, and we confirm it with you before anything is booked.</p>
        <ul class="fits">
          <li class="fits__item">A bug you cannot pin down</li>
          <li class="fits__item">A review before the code ships</li>
          <li class="fits__item">A product you bought that will not run in your project</li>
          <li class="fits__item">A plan for a build before you start it</li>
        </ul>
      </div>

      <!-- enquiry endpoint goes in js/pages/one-on-one.js -->
      <form class="form brief-form" data-brief-form novalidate>
        <h3 class="heading-3">Send a brief</h3>
        <div class="brief-form__fields">
          <div class="field">
            <label class="field__box"><span class="field__label">Full name</span><input class="field__input" type="text" name="name" autocomplete="name" placeholder="John Smith" data-rule="required"></label>
            <p class="field__error">Enter your full name.</p>
          </div>
          <div class="field">
            <label class="field__box"><span class="field__label">Email address</span><input class="field__input" type="email" name="email" autocomplete="email" placeholder="john@example.com" data-rule="email"></label>
            <p class="field__error">Enter a valid email address.</p>
          </div>
          <div class="field">
            <label class="field__box"><span class="field__label">Stack</span>
              <select class="field__input" name="stack">
                <option>WordPress</option>
                <option>HTML and CSS</option>
                <option>PHP</option>
                <option>JavaScript</option>
                <option>Something else</option>
              </select>
            </label>
          </div>
          <div class="field">
            <label class="field__box"><span class="field__label">Hours</span>
              <select class="field__input" name="hours">
                <option>1 hour</option>
                <option>2 hours</option>
                <option>3 hours</option>
                <option>4 hours</option>
              </select>
            </label>
          </div>
          <div class="field">
            <label class="field__box brief-form__message"><span class="field__label">What are you working on?</span><textarea class="field__input" name="message" placeholder="My Gutenberg block saves, but after a reload the editor shows an invalid content warning." data-rule="required"></textarea></label>
            <p class="field__error">Tell us what you are working on.</p>
          </div>
        </div>
        <label class="checkbox"><input type="checkbox" name="consent" data-rule="checked"><span>I agree to the <a href="terms.html">Terms and conditions</a> and <a href="privacy.html">Privacy policy</a>.</span></label>
        <div class="captcha"><label><input type="checkbox" data-rule="captcha"> I'm not a robot</label><small>reCAPTCHA<br>Privacy · Terms</small></div>
        <button class="btn btn--dark btn--block" type="submit">send brief</button>
      </form>
    </div>
  </section>
</div>
<div class="overlay" id="popup-brief" aria-hidden="true">
  <div class="popup" role="dialog" aria-modal="true" aria-labelledby="popup-brief-title">
    <span class="popup__mark" aria-hidden="true">✓</span>
    <div class="popup__text">
      <h2 class="popup__title" id="popup-brief-title">Brief received</h2>
      <p class="popup__body">Thanks, <span data-popup-name>John</span>. A developer reads every brief and replies by email to <span data-popup-email>john@example.com</span> with times and a confirmed rate.</p>
    </div>
    <button class="btn btn--dark btn--block" type="button" data-popup-close>close</button>
  </div>
</div>

<?php include 'includes/footer.php'; ?>