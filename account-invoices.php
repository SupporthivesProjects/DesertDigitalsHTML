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
          <a class="tab" href="account-downloads.php">downloads <span class="tab__count" data-count-products="">7</span>
          </a>
          <a class="tab" href="account-invoices.php" aria-current="page">invoices <span class="tab__count" data-count-invoices="">4</span>
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
        <h2 class="heading-2">Invoices</h2>
      </div>
      <div class="account-panel ledger" data-ledger="" data-reveal="">
        <div class="ledger__columns" aria-hidden="true">
          <span>reference</span>
          <span>date</span>
          <span>products</span>
          <span>total</span>
          <span></span>
        </div>
        <div data-invoice-rows="">
          <div class="invoice-row">
            <div class="invoice-row__top">
              <span class="invoice-row__ref">DD-10482</span>
              <span class="price">$44.96</span>
            </div>
            <span class="invoice-row__date">14 Oct 2026</span>
            <div class="invoice-row__products">
              <span>Learning Gutenberg, WP Video Focus, Website Creation and Design</span>
              <span class="invoice-row__code">WELCOME10 applied</span>
            </div>
            <div class="invoice-row__actions">
              <button class="btn btn--outline btn--small" type="button" data-invoice="DD-10482">download pdf</button>
            </div>
          </div>
          <div class="invoice-row">
            <div class="invoice-row__top">
              <span class="invoice-row__ref">DD-10391</span>
              <span class="price">$19.96</span>
            </div>
            <span class="invoice-row__date">30 Sep 2026</span>
            <div class="invoice-row__products">
              <span>Kickstart Genesis Framework WP Theme</span>
            </div>
            <div class="invoice-row__actions">
              <button class="btn btn--outline btn--small" type="button" data-invoice="DD-10391">download pdf</button>
            </div>
          </div>
          <div class="invoice-row">
            <div class="invoice-row__top">
              <span class="invoice-row__ref">DD-10277</span>
              <span class="price">$29.87</span>
            </div>
            <span class="invoice-row__date">12 Sep 2026</span>
            <div class="invoice-row__products">
              <span>HTML 101 Kickstart</span>
            </div>
            <div class="invoice-row__actions">
              <button class="btn btn--outline btn--small" type="button" data-invoice="DD-10277">download pdf</button>
            </div>
          </div>
          <div class="invoice-row">
            <div class="invoice-row__top">
              <span class="invoice-row__ref">DD-10154</span>
              <span class="price">$134.11</span>
            </div>
            <span class="invoice-row__date">21 Aug 2026</span>
            <div class="invoice-row__products">
              <span>Web Design Blunders, Simple PHP Scripts</span>
            </div>
            <div class="invoice-row__actions">
              <button class="btn btn--outline btn--small" type="button" data-invoice="DD-10154">download pdf</button>
            </div>
          </div>
        </div>
        <div class="ledger__summary">
          <span data-invoice-summary="">4 invoices since Mar 2026</span>
          <span data-invoice-total="">$228.90 in total</span>
        </div>
      </div>
      <div class="account-panel account-empty" data-empty="" hidden="">
        <h3 class="heading-2">No invoices yet</h3>
        <p class="account-empty__body">Every order you place adds an invoice here, ready to download.</p>
        <a class="btn btn--dark" href="store.php">browse the store</a>
      </div>
    </div>
  </section>

<?php include 'includes/footer.php'; ?>