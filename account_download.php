<?php include 'includes/header.php'; ?>

  <section class="account-hero">
    <img fetchpriority="high" class="account-hero__image" src="assets/images/account-vault.jpg" alt="" width="2400" height="1029" data-fade="done">
    <div class="account-hero__overlay"></div>
    <div class="wrap account-hero__greeting">
      <h1 class="heading-1 account-hero__title" data-greeting="" data-reveal="">Hi John.</h1>
      <ul class="account-stats" data-reveal="">
        <li class="account-stats__item">
          <span class="account-stats__label">products</span>
          <span class="account-stats__value" data-count-products="">7</span>
        </li>
        <li class="account-stats__item">
          <span class="account-stats__label">invoices</span>
          <span class="account-stats__value" data-count-invoices="">4</span>
        </li>
        <li class="account-stats__item">
          <span class="account-stats__label">member since</span>
          <span class="account-stats__value" data-member-since="">Mar 2026</span>
        </li>
      </ul>
      <button class="btn btn--outline btn--small account-hero__signout--mobile" type="button" data-signout="" data-reveal="">log out</button>
    </div>
    <nav class="wrap account-tabs" aria-label="Account">
      <div class="account-tabs__bar" data-tab-bar="" data-reveal="">
        <div class="account-tabs__group">
          <a class="tab" href="account-downloads.php" aria-current="page">downloads <span class="tab__count" data-count-products="">7</span>
          </a>
          <a class="tab" href="account-invoices.php">invoices <span class="tab__count" data-count-invoices="">4</span>
          </a>
          <a class="tab" href="account.php">your details</a>
        </div>
        <button class="btn btn--outline btn--small account-tabs__signout" type="button" data-signout="">log out</button>
      </div>
    </nav>
  </section>
<section class="account-body">
  <div class="wrap account-body__inner">
    <div class="account-head" data-reveal="">
      <h2 class="heading-2">Your library</h2>
      <p class="account-head__lead" data-library-lead="">Every file you buy stays here. Download it as often as you need.</p>
    </div>
    <div class="library" data-library="" data-reveal="">
      <article class="account-panel download-card" data-reveal="">
        <a href="product.html?id=learning-gutenberg" tabindex="-1" aria-hidden="true">
          <img class="download-card__cover img-in" src="assets/products/learning-gutenberg.jpg" alt="" loading="lazy" decoding="async" width="1200" height="1615" data-fade="done">
        </a>
        <div class="download-card__text">
          <p class="download-card__meta">
            <span class="download-card__type">video</span>
            <span>
              <span class="download-card__dot">· </span>1.4 GB · DD-10482 </span>
          </p>
          <h3 class="download-card__title">
            <a href="product.html?id=learning-gutenberg">Learning Gutenberg</a>
          </h3>
          <button class="btn btn--dark btn--small" type="button" data-download="learning-gutenberg">download</button>
        </div>
      </article>
      <article class="account-panel download-card" data-reveal="">
        <a href="product.html?id=wp-video-focus" tabindex="-1" aria-hidden="true">
          <img class="download-card__cover img-in" src="assets/products/wp-video-focus.jpg" alt="" loading="lazy" decoding="async" width="1200" height="1615" data-fade="done">
        </a>
        <div class="download-card__text">
          <p class="download-card__meta">
            <span class="download-card__type">software</span>
            <span>
              <span class="download-card__dot">· </span>24 MB · DD-10482 </span>
          </p>
          <h3 class="download-card__title">
            <a href="product.html?id=wp-video-focus">WP Video Focus</a>
          </h3>
          <button class="btn btn--dark btn--small" type="button" data-download="wp-video-focus">download</button>
        </div>
      </article>
      <article class="account-panel download-card" data-reveal="">
        <a href="product.html?id=website-creation-and-design" tabindex="-1" aria-hidden="true">
          <img class="download-card__cover img-in" src="assets/products/website-creation-and-design.jpg" alt="" loading="lazy" decoding="async" width="1200" height="1615" data-fade="done">
        </a>
        <div class="download-card__text">
          <p class="download-card__meta">
            <span class="download-card__type">e-book</span>
            <span>
              <span class="download-card__dot">· </span>8 MB · DD-10482 </span>
          </p>
          <h3 class="download-card__title">
            <a href="product.html?id=website-creation-and-design">Website Creation and Design</a>
          </h3>
          <button class="btn btn--dark btn--small" type="button" data-download="website-creation-and-design">download</button>
        </div>
      </article>
      <article class="account-panel download-card" data-reveal="">
        <a href="product.html?id=kickstart-genesis-framework-wp-theme" tabindex="-1" aria-hidden="true">
          <img class="download-card__cover img-in" src="assets/products/kickstart-genesis-framework-wp-theme.jpg" alt="" loading="lazy" decoding="async" width="1200" height="1615" data-fade="done">
        </a>
        <div class="download-card__text">
          <p class="download-card__meta">
            <span class="download-card__type">template</span>
            <span>
              <span class="download-card__dot">· </span>12 MB · DD-10391 </span>
          </p>
          <h3 class="download-card__title">
            <a href="product.html?id=kickstart-genesis-framework-wp-theme">Kickstart Genesis Framework WP Theme</a>
          </h3>
          <button class="btn btn--dark btn--small" type="button" data-download="kickstart-genesis-framework-wp-theme">download</button>
        </div>
      </article>
      <article class="account-panel download-card" data-reveal="" style="">
        <a href="product.html?id=html-101-kickstart" tabindex="-1" aria-hidden="true">
          <img class="download-card__cover img-in" src="assets/products/html-101-kickstart.jpg" alt="" loading="lazy" decoding="async" width="1200" height="1615" data-fade="done">
        </a>
        <div class="download-card__text">
          <p class="download-card__meta">
            <span class="download-card__type">video</span>
            <span>
              <span class="download-card__dot">· </span>2.1 GB · DD-10277 </span>
          </p>
          <h3 class="download-card__title">
            <a href="product.html?id=html-101-kickstart">HTML 101 Kickstart</a>
          </h3>
          <button class="btn btn--dark btn--small" type="button" data-download="html-101-kickstart">download</button>
        </div>
      </article>
      <article class="account-panel download-card" data-reveal="" style="">
        <a href="product.html?id=web-design-blunders" tabindex="-1" aria-hidden="true">
          <img class="download-card__cover img-in" src="assets/products/web-design-blunders.jpg" alt="" loading="lazy" decoding="async" width="1200" height="1615" data-fade="done">
        </a>
        <div class="download-card__text">
          <p class="download-card__meta">
            <span class="download-card__type">e-book</span>
            <span>
              <span class="download-card__dot">· </span>6 MB · DD-10154 </span>
          </p>
          <h3 class="download-card__title">
            <a href="product.html?id=web-design-blunders">Web Design Blunders</a>
          </h3>
          <button class="btn btn--dark btn--small" type="button" data-download="web-design-blunders">download</button>
        </div>
      </article>
      <article class="account-panel download-card" data-reveal="" style="">
        <a href="product.html?id=simple-php-scripts" tabindex="-1" aria-hidden="true">
          <img class="download-card__cover img-in" src="assets/products/simple-php-scripts.jpg" alt="" loading="lazy" decoding="async" width="1200" height="1615" data-fade="done">
        </a>
        <div class="download-card__text">
          <p class="download-card__meta">
            <span class="download-card__type">software</span>
            <span>
              <span class="download-card__dot">· </span>4 MB · DD-10154 </span>
          </p>
          <h3 class="download-card__title">
            <a href="product.html?id=simple-php-scripts">Simple PHP Scripts</a>
          </h3>
          <button class="btn btn--dark btn--small" type="button" data-download="simple-php-scripts">download</button>
        </div>
      </article>
      <div class="find-more" data-reveal="" style="">
        <h3 class="heading-3">Find your next product</h3>
        <a class="btn btn--primary btn--small" href="store.html">browse the store</a>
      </div>
    </div>
    <div class="account-panel account-empty" data-empty="" hidden="">
      <h3 class="heading-2">Nothing here yet</h3>
      <p class="account-empty__body">Products you buy land here, ready to download whenever you need them.</p>
      <a class="btn btn--primary" href="store.html">browse the store</a>
    </div>
  </div>
</section>

<?php include 'includes/footer.php'; ?>