<?php include 'includes/header.php'; ?>

<div class="page--light">
  <section class="basket">
    <div class="wrap">
      <div class="basket__card" data-reveal="">
        <div class="basket__main">
          <h1 class="heading-2">Checkout</h1>
          <p class="checkout-account" data-signed-in="" hidden="">Signed in as <span data-account-email="">john@example.com</span>
            <button class="checkout-account__link" type="button" data-sign-out="">not you?</button>
          </p>
          <p class="checkout-account" data-signed-out="">Have an account? <a class="checkout-account__link" href="login.php?next=checkout.php">log in</a>
          </p>
          <form class="checkout-form" data-checkout="" novalidate="">
            <div class="checkout-form__group form" role="group" aria-labelledby="billing-title">
              <h2 class="heading-4" id="billing-title">Billing details for your invoice</h2>
              <div class="field">
                <div class="field__box">
                  <label class="field__label field__labell" for="bill-name">Full name</label>
                  <input class="field__input" id="bill-name" name="name" autocomplete="name" data-rule="required" placeholder="John Smith">
                </div>
                <p class="field__error">Enter your full name</p>
              </div>
              <div class="field">
                <div class="field__box">
                  <label class="field__label field__labell" for="bill-email">Email address</label>
                  <input class="field__input" id="bill-email" name="email" type="email" autocomplete="email" data-rule="email" placeholder="john@example.com">
                </div>
                <p class="field__error">Enter a valid email address</p>
              </div>
              <div class="field">
                <div class="field__box">
                  <label class="field__label field__labell" for="bill-dob">Date of birth</label>
                  <input class="field__input" id="bill-dob" name="dob" inputmode="numeric" autocomplete="bday" placeholder="DD/MM/YYYY" maxlength="10" data-rule="required" data-dob="">
                </div>
                <p class="field__error">Enter your date of birth as DD/MM/YYYY</p>
              </div>
              <div class="field">
                <div class="field__box">
                  <label class="field__label field__labell" for="bill-address">Address</label>
                  <input class="field__input" id="bill-address" name="address" autocomplete="street-address" data-rule="required" placeholder="12 Market Street">
                </div>
                <p class="field__error">Enter your address</p>
              </div>
              <div class="field">
                <div class="field__box">
                  <label class="field__label field__labell" for="bill-country">Country</label>
                  <select class="field__input" id="bill-country" name="country" autocomplete="country-name" data-rule="required">
                    <option value="">Choose a country</option>
                    <option>United Kingdom</option>
                    <option>Ireland</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>New Zealand</option>
                    <option>France</option>
                    <option>Germany</option>
                    <option>Spain</option>
                    <option>Italy</option>
                  </select>
                </div>
                <p class="field__error">Pick a country</p>
              </div>
              <div class="form__row">
                <div class="field">
                  <div class="field__box">
                    <label class="field__label field__labell" for="bill-city">City</label>
                    <input class="field__input" id="bill-city" name="city" autocomplete="address-level2" data-rule="required" placeholder="Manchester">
                  </div>
                  <p class="field__error">Enter your city</p>
                </div>
                <div class="field">
                  <div class="field__box">
                    <label class="field__label field__labell" for="bill-postcode">Postcode</label>
                    <input class="field__input" id="bill-postcode" name="postcode" autocomplete="postal-code" data-rule="required" placeholder="M1 1AE">
                  </div>
                  <p class="field__error">Enter your postcode</p>
                </div>
              </div>
            </div>
            <div class="checkout-form__group">
              <label class="checkbox">
                <input type="checkbox" name="terms" data-rule="checked">
                <span class="check-terms">I agree to the <a href="terms.php">Terms and conditions</a> and <a href="privacy.php">Privacy policy</a>. </span>
              </label>
              <div class="captcha">
                <label>
                  <input type="checkbox" data-rule="captcha"> I'm not a robot </label>
                <small>
                  <img class="captcha__logo" src="./assets/images/recaptcha-logo.svg" alt="" width="32" height="32">reCAPTCHA <br>Privacy · Terms </small>
              </div>
              <button class="btn btn--dark btn--block" type="submit">continue to secure payment</button>
              <p class="checkout-form__note">Payment finishes on our provider's secure page. We never see your card details.</p>
            </div>
          </form>
        </div>
        <aside class="basket__summary" aria-label="Order summary">
          <ul class="order-lines" data-lines="">
            <li class="order-line">
              <img class="order-line__thumb" src="./assets/products/click-drag-graphics-v2.jpg" alt="" loading="lazy" decoding="async" width="48" height="64">
              <div class="order-line__text">
                <p class="order-line__title">Click Drag Graphics V2</p>
                <p class="order-line__meta">template</p>
              </div>
              <span class="order-line__price" data-usd="111.68">$111.68</span>
            </li>
            <li class="order-line">
              <img class="order-line__thumb" src="./assets/products/website-development-supremacy.jpg" alt="" loading="lazy" decoding="async" width="48" height="64">
              <div class="order-line__text">
                <p class="order-line__title">Website Development Supremacy</p>
                <p class="order-line__meta">e-book</p>
              </div>
              <span class="order-line__price" data-usd="111.06">$111.06</span>
            </li>
            <li class="order-line">
              <img class="order-line__thumb" src="./assets/products/website-development-domination.jpg" alt="" loading="lazy" decoding="async" width="48" height="64">
              <div class="order-line__text">
                <p class="order-line__title">Website Development Domination</p>
                <p class="order-line__meta">e-book</p>
              </div>
              <span class="order-line__price" data-usd="110.44">$110.44</span>
            </li>
            <li class="order-line">
              <img class="order-line__thumb" src="./assets/products/web-development-secrets.jpg" alt="" loading="lazy" decoding="async" width="48" height="64">
              <div class="order-line__text">
                <p class="order-line__title">Web Development Secrets</p>
                <p class="order-line__meta">e-book</p>
              </div>
              <span class="order-line__price" data-usd="109.2">$109.20</span>
            </li>
            <li class="order-line">
              <img class="order-line__thumb" src="./assets/products/web-security-development-and-strategy.jpg" alt="" loading="lazy" decoding="async" width="48" height="64">
              <div class="order-line__text">
                <p class="order-line__title">Web Security Development And Strategy</p>
                <p class="order-line__meta">e-book</p>
              </div>
              <span class="order-line__price" data-usd="109.82">$109.82</span>
            </li>
            <li class="order-line">
              <img class="order-line__thumb" src="./assets/products/user-interface-graphics.jpg" alt="" loading="lazy" decoding="async" width="48" height="64">
              <div class="order-line__text">
                <p class="order-line__title">User Interface Graphics</p>
                <p class="order-line__meta">e-book</p>
              </div>
              <span class="order-line__price" data-usd="108.58">$108.58</span>
            </li>
          </ul>
          <form class="discount" data-discount-form="" novalidate="">
            <label class="visually-hidden" for="discount-code">Discount code</label>
            <input class="discount__input" id="discount-code" autocomplete="off" placeholder="Discount code">
            <button class="btn btn--primary btn--small" type="submit">apply</button>
          </form>
          <div class="discount is-applied" data-discount-applied="" hidden="">
            <span class="discount__code" data-discount-code=""></span>
            <span class="discount__ok">✓ applied</span>
            <button class="discount__remove" type="button" data-discount-remove="">remove</button>
          </div>
          <p class="discount__error" data-discount-error="" role="alert" hidden="">That code is not valid</p>
          <hr class="cart-rule">
          <dl class="summary-rows">
            <div class="summary-rows__row">
              <dt>Subtotal</dt>
              <dd data-subtotal="">$660.78</dd>
            </div>
            <div class="summary-rows__row" data-discount-row="" hidden="">
              <dt data-discount-label="">Discount</dt>
              <dd class="is-saving" data-discount=""></dd>
            </div>
          </dl>
          <div class="summary-total">
            <p class="summary-total__label mono">Total today</p>
            <p class="price price--large price-mb" data-total="">$660.78</p>
            <p class="summary-total__charge mono" data-charge="" hidden="">Charged in US dollars: $660.78.</p>
          </div>
          <div class="payment-logos" data-payment-logos="" aria-label="We accept Visa and Mastercard">
            <span>
              <img src="./assets/images/visa.svg" alt="Visa" width="32" height="10" loading="lazy" decoding="async">
            </span>
            <span>
              <img src="./assets/images/mastercard.svg" alt="Mastercard" width="30" height="18" loading="lazy" decoding="async">
            </span>
          </div>
        </aside>
      </div>
    </div>
  </section>
</div>
<?php include 'includes/footer.php'; ?>