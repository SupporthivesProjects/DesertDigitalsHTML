<?php include 'includes/header.php'; ?>
<div class="page--light">
  <section class="basket">
    <div class="wrap">
      <div class="basket__card" data-cart="" data-reveal="">
        <div class="basket__main">
          <h1 class="heading-2">Your cart</h1>
          <div class="basket__lines" data-lines="">
            <div class="cart-line">
              <a href="product.php?id=website-development-domination" tabindex="-1" aria-hidden="true">
                <img class="cart-line__thumb" src="assets/products/website-development-domination.jpg" alt="" loading="lazy" decoding="async" width="72" height="96">
              </a>
              <div class="cart-line__text">
                <h2 class="cart-line__title">
                  <a href="product.php?id=website-development-domination">Website Development Domination</a>
                </h2>
                <p class="cart-line__meta">e-book</p>
              </div>
              <div class="cart-line__end">
                <span class="price" data-usd="110.44">$110.44</span>
                <button class="cart-line__remove" type="button" data-remove="website-development-domination" aria-label="Remove Website Development Domination">remove</button>
              </div>
            </div>
            <div class="cart-line">
              <a href="product.php?id=web-development-secrets" tabindex="-1" aria-hidden="true">
                <img class="cart-line__thumb" src="assets/products/web-development-secrets.jpg" alt="" loading="lazy" decoding="async" width="72" height="96">
              </a>
              <div class="cart-line__text">
                <h2 class="cart-line__title">
                  <a href="product.php?id=web-development-secrets">Web Development Secrets</a>
                </h2>
                <p class="cart-line__meta">e-book</p>
              </div>
              <div class="cart-line__end">
                <span class="price" data-usd="109.2">$109.20</span>
                <button class="cart-line__remove" type="button" data-remove="web-development-secrets" aria-label="Remove Web Development Secrets">remove</button>
              </div>
            </div>
            <div class="cart-line">
              <a href="product.php?id=web-security-development-and-strategy" tabindex="-1" aria-hidden="true">
                <img class="cart-line__thumb" src="assets/products/web-security-development-and-strategy.jpg" alt="" loading="lazy" decoding="async" width="72" height="96">
              </a>
              <div class="cart-line__text">
                <h2 class="cart-line__title">
                  <a href="product.php?id=web-security-development-and-strategy">Web Security Development And Strategy</a>
                </h2>
                <p class="cart-line__meta">e-book</p>
              </div>
              <div class="cart-line__end">
                <span class="price" data-usd="109.82">$109.82</span>
                <button class="cart-line__remove" type="button" data-remove="web-security-development-and-strategy" aria-label="Remove Web Security Development And Strategy">remove</button>
              </div>
            </div>
          </div>
          <div class="basket__empty" data-empty="" hidden="">
            <p class="body-large muted">Your cart is empty.</p>
            <a class="btn btn--primary" href="store.php">shop products</a>
          </div>
          <a class="basket__back" href="store.php" data-back="">
            <span aria-hidden="true">&lt;</span>keep shopping </a>
        </div>
        <aside class="basket__summary" data-summary="" aria-label="Order summary">
          <dl class="summary-rows">
            <div class="summary-rows__row">
              <dt data-subtotal-label="">Subtotal, 6 products</dt>
              <dd data-subtotal="disc-data">$660.78</dd>
            </div>
            <div class="summary-rows__row">
              <dt data-discount-label="">Discount</dt>
              <dd data-discount="" class="disc-data">add a code at checkout</dd>
            </div>
          </dl>
          <hr class="summary-rule cart-rule">
          <div class="summary-total">
            <p class="summary-total__label mono">Total at checkout</p>
            <p class="price price--large price-mb" data-total="">$660.78</p>
          </div>
          <a class="btn btn--primary btn--block" href="checkout.php">go to checkout</a>
        </aside>
      </div>
      <!-- <div class="basket__card is-empty mt-5"  data-cart="" data-reveal="">
        <div class="basket__main">
          <h1 class="heading-2">Your cart</h1>
          <div class="basket__lines" data-lines="" hidden=""></div>
          <div class="basket__empty" data-empty="">
            <p class="body-large muted">Your cart is empty.</p>
            <a class="btn btn--primary" href="store.php">shop products</a>
          </div>
          <a class="basket__back" href="store.php" data-back="">
            <span aria-hidden="true">&lt;</span>keep shopping </a>
        </div>
      </div> -->
    </div>
  </section>
</div>
<?php include 'includes/footer.php'; ?>