<?php include 'includes/header.php'; ?>

<div class="page--light">
  <section class="contact">
    <!-- ?state=error shows "message not sent" -->
    <form class="form contact__form" data-contact-form novalidate>
      <div class="contact__heading">
        <h1 class="heading-1">Tell us what<br>you need.</h1>
        <p class="body-large contact__lead">A person reads every message. <br> Pick a topic so it reaches the right one.</p>
      </div>

      <fieldset class="topics">
        <legend class="topics__legend mono">I'm writing about</legend>
        <div class="topics__chips">
          <label class="chip"><input type="radio" name="topic" value="an order" checked><span class="chip__mark" aria-hidden="true">✓</span>an order</label>
          <label class="chip"><input type="radio" name="topic" value="a download"><span class="chip__mark" aria-hidden="true">✓</span>a download</label>
          <label class="chip"><input type="radio" name="topic" value="a 1 on 1"><span class="chip__mark" aria-hidden="true">✓</span>a 1 on 1</label>
          <label class="chip"><input type="radio" name="topic" value="my account"><span class="chip__mark" aria-hidden="true">✓</span>my account</label>
          <label class="chip"><input type="radio" name="topic" value="something else"><span class="chip__mark" aria-hidden="true">✓</span>something else</label>
        </div>
      </fieldset>

      <div class="contact__fields">
        <div class="field">
          <label class="field__box"><span class="field__label">Full name</span><input class="field__input" type="text" name="name" autocomplete="name" placeholder="John Smith" data-rule="required"></label>
          <p class="field__error">Enter your full name.</p>
        </div>
        <div class="field">
          <label class="field__box"><span class="field__label">Email address</span><input class="field__input" type="email" name="email" autocomplete="email" placeholder="john@example.com" data-rule="email"></label>
          <p class="field__error">Enter a valid email address.</p>
        </div>
        <div class="field">
          <label class="field__box"><span class="field__label">Phone (optional)</span><input class="field__input" type="tel" name="phone" autocomplete="tel" placeholder="+44 7700 900123"></label>
        </div>
        <div class="field">
          <label class="field__box contact__message"><span class="field__label">Message</span><textarea class="field__input" name="message" placeholder="The WP Video Focus download stops at 60%. I tried twice on 13 Oct." data-rule="required"></textarea></label>
          <p class="field__error">Write your message.</p>
        </div>
      </div>

      <div class="contact__submit">
        <label class="checkbox"><input type="checkbox" name="consent" data-rule="checked"><span>I agree to the <a href="terms.html">Terms and conditions</a> and <a href="privacy.html">Privacy policy</a>.</span></label>
        <div class="captcha"><label><input type="checkbox" data-rule="captcha"> I'm not a robot</label><small>reCAPTCHA<br>Privacy · Terms</small></div>
        <button class="btn btn--dark btn--block" type="submit" data-contact-submit>send message</button>
      </div>
    </form>

    <aside class="contact-details">
      <div class="contact-details__media">
        <img src="assets/images/contact-post-box.jpg" alt="" width="2400" height="1600" decoding="async">
      </div>
      <dl class="contact-details__list">
        <div class="contact-details__entry">
          <dt class="mono">Email</dt>
          <dd class="heading-3"><a href="mailto:support@desertdigitals.com">support@desertdigitals.com</a></dd>
          <dd class="contact-details__note">Write any time. Quote your order reference if it is about an order.</dd>
        </div>
        <div class="contact-details__entry">
          <dt class="mono">Company name</dt>
          <dd class="heading-3">Desertdigitals Ltd</dd>
         
        </div>
        <div class="contact-details__entry">
          <dt class="mono">Company address</dt>
          <dd class="heading-3"><a href="one-on-one.html">12 Market Street <br>
London EC1A 1BB <br>
United Kingdom</dd>
        </div>
      </dl>
    </aside>
  </section>
</div>

<div class="overlay" id="popup-sent" aria-hidden="true">
  <div class="popup" role="dialog" aria-modal="true" aria-labelledby="popup-sent-title">
    <span class="popup__mark" aria-hidden="true">✓</span>
    <div class="popup__text">
      <h2 class="popup__title" id="popup-sent-title">Message sent</h2>
      <p class="popup__body">Thanks, <span data-popup-name>John</span>. We reply by email to <span data-popup-email>john@example.com</span>.</p>
    </div>
    <button class="btn btn--dark btn--block" type="button" data-popup-close>close</button>
  </div>
</div>

<div class="overlay" id="popup-not-sent" aria-hidden="true">
  <div class="popup popup--error" role="dialog" aria-modal="true" aria-labelledby="popup-not-sent-title">
    <span class="popup__mark" aria-hidden="true">✕</span>
    <div class="popup__text">
      <h2 class="popup__title" id="popup-not-sent-title">Message not sent</h2>
      <p class="popup__body">Something went wrong on our side and the message did not go through. Try again, or email support@desertdigitals.com.</p>
    </div>
    <button class="btn btn--dark btn--block" type="button" data-popup-close data-retry>try again</button>
  </div>
</div>


<?php include 'includes/footer.php'; ?>