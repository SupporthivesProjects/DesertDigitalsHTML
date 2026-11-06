<?php include 'includes/header.php'; ?>

  <section class="page-hero store-hero">
    <img fetchpriority="high" class="page-hero__image store-hero__image" src="assets/images/store-hero.jpg" alt="" width="2400" height="1029" data-fade="done">
    <div class="page-hero__overlay"></div>
    <div class="wrap page-hero__copy store-hero__copy">
      <h1 class="heading-1" data-reveal="">Everything for <br>your next build. </h1>
      <p class="page-hero__lead" data-reveal="">Courses, e-books, software and templates for people who build the web. Pay once, keep it.</p>
    </div>
  </section>
  <section class="store">
    <div class="wrap store__layout">
      <div class="filters" id="filters" role="dialog" aria-modal="false" aria-labelledby="filters-title" data-reveal="">
        <div class="filters__sheet">
          <div class="filters__head">
            <h2 class="heading-4 filters__title" id="filters-title">
              <span class="filters__title-desktop">Browse</span>
              <span class="filters__title-mobile">Filters</span>
            </h2>
            <button class="filters__close mono" data-filters-close="">close ×</button>
          </div>
          <ul class="browse" data-browse="">
            <li class="browse__item">
              <button class="browse__row" data-type="">
                <span class="browse__name">All products</span>
                <span class="browse__count">114</span>
              </button>
            </li>
            <li class="browse__item">
              <button class="browse__row" data-type="ebook" aria-expanded="false">
                <span class="browse__name">E-books</span>
                <span class="browse__count">58</span>
                <span class="browse__toggle" aria-hidden="true">+</span>
              </button>
              <ul class="browse__themes">
                  <li>
                      <label class="checkbox browse__theme">
                          <input type="checkbox" data-theme="Design" data-theme-type="ebook" />
                          <span class="browse__name">Design</span><span class="browse__count">21</span>
                      </label>
                  </li>
                  <li>
                      <label class="checkbox browse__theme">
                          <input type="checkbox" data-theme="Development" data-theme-type="ebook" />
                          <span class="browse__name">Development</span><span class="browse__count">12</span>
                      </label>
                  </li>
                  <li>
                      <label class="checkbox browse__theme">
                          <input type="checkbox" data-theme="Tips and tricks" data-theme-type="ebook" />
                          <span class="browse__name">Tips and tricks</span><span class="browse__count">12</span>
                      </label>
                  </li>
                  <li>
                      <label class="checkbox browse__theme">
                          <input type="checkbox" data-theme="SEO" data-theme-type="ebook" />
                          <span class="browse__name">SEO</span><span class="browse__count">8</span>
                      </label>
                  </li>
                  <li>
                      <label class="checkbox browse__theme">
                          <input type="checkbox" data-theme="PHP" data-theme-type="ebook" />
                          <span class="browse__name">PHP</span><span class="browse__count">2</span>
                      </label>
                  </li>
                  <li>
                      <label class="checkbox browse__theme">
                          <input type="checkbox" data-theme="WordPress" data-theme-type="ebook" />
                          <span class="browse__name">WordPress</span><span class="browse__count">2</span>
                      </label>
                  </li>
                  <li>
                      <label class="checkbox browse__theme">
                          <input type="checkbox" data-theme="HTML and CSS" data-theme-type="ebook" />
                          <span class="browse__name">HTML and CSS</span><span class="browse__count">1</span>
                      </label>
                  </li>
              </ul>
            </li>
            <li class="browse__item">
              <button class="browse__row is-current" data-type="video" aria-expanded="true">
                <span class="browse__name">Video</span>
                <span class="browse__count">26</span>
                <span class="browse__toggle" aria-hidden="true">−</span>
              </button>
              <ul class="browse__themes">
                <li>
                  <label class="checkbox browse__theme">
                    <input type="checkbox" data-theme="WordPress" data-theme-type="video">
                    <span class="browse__name">WordPress</span>
                    <span class="browse__count">9</span>
                  </label>
                </li>
                <li>
                  <label class="checkbox browse__theme">
                    <input type="checkbox" data-theme="Design" data-theme-type="video" checked="">
                    <span class="browse__name">Design</span>
                    <span class="browse__count">7</span>
                  </label>
                </li>
                <li>
                  <label class="checkbox browse__theme">
                    <input type="checkbox" data-theme="HTML and CSS" data-theme-type="video" checked="">
                    <span class="browse__name">HTML and CSS</span>
                    <span class="browse__count">4</span>
                  </label>
                </li>
                <li>
                  <label class="checkbox browse__theme">
                    <input type="checkbox" data-theme="Tips and tricks" data-theme-type="video">
                    <span class="browse__name">Tips and tricks</span>
                    <span class="browse__count">3</span>
                  </label>
                </li>
                <li>
                  <label class="checkbox browse__theme">
                    <input type="checkbox" data-theme="PHP" data-theme-type="video">
                    <span class="browse__name">PHP</span>
                    <span class="browse__count">2</span>
                  </label>
                </li>
                <li>
                  <label class="checkbox browse__theme">
                    <input type="checkbox" data-theme="Development" data-theme-type="video">
                    <span class="browse__name">Development</span>
                    <span class="browse__count">1</span>
                  </label>
                </li>
              </ul>
            </li>
            <li class="browse__item">
              <button class="browse__row" data-type="software" aria-expanded="false">
                <span class="browse__name">Software</span>
                <span class="browse__count">24</span>
                <span class="browse__toggle" aria-hidden="true">+</span>
              </button>
              <ul class="browse__themes">
                  <li>
                      <label class="checkbox browse__theme">
                          <input type="checkbox" data-theme="WordPress" data-theme-type="software" />
                          <span class="browse__name">WordPress</span><span class="browse__count">9</span>
                      </label>
                  </li>
                  <li>
                      <label class="checkbox browse__theme">
                          <input type="checkbox" data-theme="Development" data-theme-type="software" />
                          <span class="browse__name">Development</span><span class="browse__count">6</span>
                      </label>
                  </li>
                  <li>
                      <label class="checkbox browse__theme">
                          <input type="checkbox" data-theme="PHP" data-theme-type="software" />
                          <span class="browse__name">PHP</span><span class="browse__count">4</span>
                      </label>
                  </li>
                  <li>
                      <label class="checkbox browse__theme">
                          <input type="checkbox" data-theme="HTML and CSS" data-theme-type="software" />
                          <span class="browse__name">HTML and CSS</span><span class="browse__count">4</span>
                      </label>
                  </li>
                  <li>
                      <label class="checkbox browse__theme">
                          <input type="checkbox" data-theme="Design" data-theme-type="software" />
                          <span class="browse__name">Design</span><span class="browse__count">1</span>
                      </label>
                  </li>
              </ul>

            </li>
            <li class="browse__item">
              <button class="browse__row" data-type="template">
                <span class="browse__name">Templates</span>
                <span class="browse__count">5</span>
              </button>
               <ul class="browse__themes">
                  <li>
                      <label class="checkbox browse__theme">
                          <input type="checkbox" data-theme="WordPress" data-theme-type="software" />
                          <span class="browse__name">WordPress</span><span class="browse__count">9</span>
                      </label>
                  </li>
                  <li>
                      <label class="checkbox browse__theme">
                          <input type="checkbox" data-theme="Development" data-theme-type="software" />
                          <span class="browse__name">Development</span><span class="browse__count">6</span>
                      </label>
                  </li>
                  <li>
                      <label class="checkbox browse__theme">
                          <input type="checkbox" data-theme="PHP" data-theme-type="software" />
                          <span class="browse__name">PHP</span><span class="browse__count">4</span>
                      </label>
                  </li>
                  <li>
                      <label class="checkbox browse__theme">
                          <input type="checkbox" data-theme="HTML and CSS" data-theme-type="software" />
                          <span class="browse__name">HTML and CSS</span><span class="browse__count">4</span>
                      </label>
                  </li>
                  <li>
                      <label class="checkbox browse__theme">
                          <input type="checkbox" data-theme="Design" data-theme-type="software" />
                          <span class="browse__name">Design</span><span class="browse__count">1</span>
                      </label>
                  </li>
              </ul>
            </li>
            <li class="browse__item">
              <button class="browse__row" data-type="audiobook">
                <span class="browse__name">Audio book</span>
                <span class="browse__count">1</span>
              </button>
               <ul class="browse__themes">
                  <li>
                      <label class="checkbox browse__theme">
                          <input type="checkbox" data-theme="WordPress" data-theme-type="software" />
                          <span class="browse__name">WordPress</span><span class="browse__count">9</span>
                      </label>
                  </li>
                  <li>
                      <label class="checkbox browse__theme">
                          <input type="checkbox" data-theme="Development" data-theme-type="software" />
                          <span class="browse__name">Development</span><span class="browse__count">6</span>
                      </label>
                  </li>
                  <li>
                      <label class="checkbox browse__theme">
                          <input type="checkbox" data-theme="PHP" data-theme-type="software" />
                          <span class="browse__name">PHP</span><span class="browse__count">4</span>
                      </label>
                  </li>
                  <li>
                      <label class="checkbox browse__theme">
                          <input type="checkbox" data-theme="HTML and CSS" data-theme-type="software" />
                          <span class="browse__name">HTML and CSS</span><span class="browse__count">4</span>
                      </label>
                  </li>
                  <li>
                      <label class="checkbox browse__theme">
                          <input type="checkbox" data-theme="Design" data-theme-type="software" />
                          <span class="browse__name">Design</span><span class="browse__count">1</span>
                      </label>
                  </li>
              </ul>
            </li>
          </ul>
          <div class="price-filter">
            <h2 class="heading-4">Price</h2>
            <div class="price-filter__options" data-price-bands="">
              <label class="checkbox price-filter__option">
                <input type="checkbox" data-band="low">
                <span>Under $20</span>
              </label>
              <label class="checkbox price-filter__option">
                <input type="checkbox" data-band="mid">
                <span>$20 to $60</span>
              </label>
              <label class="checkbox price-filter__option">
                <input type="checkbox" data-band="high">
                <span>Over $60</span>
              </label>
            </div>
          </div>
          <button class="text-link filters__clear" data-clear="">Clear filters</button>
          <div class="filters__actions">
            <button class="btn btn--secondary" data-clear-mobile="">clear</button>
            <button class="btn btn--dark" data-filters-close="">show <span data-result-count="">11</span> products </button>
          </div>
        </div>
      </div>
      <div class="store__results">
        <div class="store__tools">
          <label class="search">
            <span class="search__icon" aria-hidden="true">⌕</span>
            <span class="visually-hidden">Search the store</span>
            <input class="search__input" type="search" data-search="" placeholder="Search courses, e-books, software and templates" data-placeholder-mobile="Search the store">
          </label>
          <div class="dropdown" data-sort="">
            <button class="dropdown__button" type="button" aria-haspopup="listbox" aria-expanded="false">
              <span class="dropdown__key">sort:</span>
              <span class="dropdown__value">newest</span>
              <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </button>
            <ul class="dropdown__list" role="listbox" aria-label="Sort">
              <li>
                <button class="dropdown__option" type="button" role="option" data-value="newest" aria-selected="true">newest</button>
              </li>
              <li>
                <button class="dropdown__option" type="button" role="option" data-value="price-asc" aria-selected="false">lowest price</button>
              </li>
              <li>
                <button class="dropdown__option" type="button" role="option" data-value="price-desc" aria-selected="false">highest price</button>
              </li>
            </ul>
          </div>
          <button class="btn btn--dark store__filters-button" data-filters-open="" aria-controls="filters" aria-expanded="false">filters</button>
        </div>
        <p class="store__summary mono" data-summary="" aria-live="polite">11 videos match Design, HTML and CSS</p>
        <div class="product-grid" data-grid="">
          <article class="product-card" data-reveal="">
            <a class="product-card__media" href="product.php?id=s3-hosting-for-beginners" tabindex="-1" aria-hidden="true">
              <img src="assets/products/s3-hosting-for-beginners.jpg" alt="" loading="lazy" decoding="async" width="1200" height="1615" data-fade="done" class="">
            </a>
            <span class="pill">video</span>
            <div class="product-card__body">
              <div class="product-card__text">
                <h3 class="product-card__title">
                  <a href="product.php?id=s3-hosting-for-beginners">S3 Hosting for Beginners</a>
                </h3>
                <p class="product-card__summary">Host your files on Amazon S3, explained for beginners.</p>
              </div>
              <div class="product-card__row">
                <span class="price" data-usd="103">$103.00</span>
                <button class="btn btn--primary btn--small" data-add="s3-hosting-for-beginners" aria-label="add to cart: S3 Hosting for Beginners">add to cart</button>
              </div>
            </div>
          </article>
          <article class="product-card" data-reveal="">
            <a class="product-card__media" href="product.php?id=master-html-5-video" tabindex="-1" aria-hidden="true">
              <img src="assets/products/master-html-5-video.jpg" alt="" loading="lazy" decoding="async" width="1200" height="1615" data-fade="done" class="">
            </a>
            <span class="pill">video</span>
            <div class="product-card__body">
              <div class="product-card__text">
                <h3 class="product-card__title">
                  <a href="product.php?id=master-html-5-video">Master HTML 5 Video</a>
                </h3>
                <p class="product-card__summary">A video course on the technical side of running a website.</p>
              </div>
              <div class="product-card__row">
                <span class="price" data-usd="98.67">$98.67</span>
                <button class="btn btn--primary btn--small" data-add="master-html-5-video" aria-label="add to cart: Master HTML 5 Video">add to cart</button>
              </div>
            </div>
          </article>
          <article class="product-card" data-reveal="">
            <a class="product-card__media" href="product.php?id=bootstrap-web-development" tabindex="-1" aria-hidden="true">
              <img src="assets/products/bootstrap-web-development.jpg" alt="" loading="lazy" decoding="async" width="1200" height="1615" data-fade="done" class="">
            </a>
            <span class="pill">video</span>
            <div class="product-card__body">
              <div class="product-card__text">
                <h3 class="product-card__title">
                  <a href="product.php?id=bootstrap-web-development">Bootstrap Web Development</a>
                </h3>
                <p class="product-card__summary">A twenty six part course on building responsive sites with Bootstrap 3.</p>
              </div>
              <div class="product-card__row">
                <span class="price" data-usd="93.71">$93.71</span>
                <button class="btn btn--primary btn--small" data-add="bootstrap-web-development" aria-label="add to cart: Bootstrap Web Development">add to cart</button>
              </div>
            </div>
          </article>
          <article class="product-card" data-reveal="">
            <a class="product-card__media" href="product.php?id=add-a-floating-countdown-timer-to-website" tabindex="-1" aria-hidden="true">
              <img src="assets/products/add-a-floating-countdown-timer-to-website.jpg" alt="" loading="lazy" decoding="async" width="1200" height="1615" data-fade="done" class="">
            </a>
            <span class="pill">video</span>
            <div class="product-card__body">
              <div class="product-card__text">
                <h3 class="product-card__title">
                  <a href="product.php?id=add-a-floating-countdown-timer-to-website">Add a Floating Countdown Timer To Website</a>
                </h3>
                <p class="product-card__summary">Add a floating countdown timer to any page, shown step by step.</p>
              </div>
              <div class="product-card__row">
                <span class="price" data-usd="78.83">$78.83</span>
                <button class="btn btn--primary btn--small" data-add="add-a-floating-countdown-timer-to-website" aria-label="add to cart: Add a Floating Countdown Timer To Website">add to cart</button>
              </div>
            </div>
          </article>
          <article class="product-card" data-reveal="">
            <a class="product-card__media" href="product.php?id=animated-loading-image" tabindex="-1" aria-hidden="true">
              <img src="assets/products/animated-loading-image.jpg" alt="" loading="lazy" decoding="async" width="1200" height="1615" data-fade="done" class="">
            </a>
            <span class="pill">video</span>
            <div class="product-card__body">
              <div class="product-card__text">
                <h3 class="product-card__title">
                  <a href="product.php?id=animated-loading-image">Animated Loading Image</a>
                </h3>
                <p class="product-card__summary">Build animated loading images that hold attention while a page loads.</p>
              </div>
              <div class="product-card__row">
                <span class="price" data-usd="78.21">$78.21</span>
                <button class="btn btn--primary btn--small" data-add="animated-loading-image" aria-label="add to cart: Animated Loading Image">add to cart</button>
              </div>
            </div>
          </article>
          <article class="product-card" data-reveal="">
            <a class="product-card__media" href="product.php?id=easy-graphics-101" tabindex="-1" aria-hidden="true">
              <img src="assets/products/easy-graphics-101.jpg" alt="" loading="lazy" decoding="async" width="1200" height="1615" data-fade="done" class="">
            </a>
            <span class="pill">video</span>
            <div class="product-card__body">
              <div class="product-card__text">
                <h3 class="product-card__title">
                  <a href="product.php?id=easy-graphics-101">Easy Graphics 101</a>
                </h3>
                <p class="product-card__summary">A nine part video course on creating graphics with free software.</p>
              </div>
              <div class="product-card__row">
                <span class="price" data-usd="77.59">$77.59</span>
                <button class="btn btn--primary btn--small" data-add="easy-graphics-101" aria-label="add to cart: Easy Graphics 101">add to cart</button>
              </div>
            </div>
          </article>
          <article class="product-card" data-reveal="" style="">
            <a class="product-card__media" href="product.php?id=your-first-website-video-course" tabindex="-1" aria-hidden="true">
              <img src="assets/products/your-first-website-video-course.jpg" alt="" loading="lazy" decoding="async" width="1200" height="1615" data-fade="done" class="">
            </a>
            <span class="pill">video</span>
            <div class="product-card__body">
              <div class="product-card__text">
                <h3 class="product-card__title">
                  <a href="product.php?id=your-first-website-video-course">Your First Website Video Course</a>
                </h3>
                <p class="product-card__summary">A video course that walks through building your first website.</p>
              </div>
              <div class="product-card__row">
                <span class="price" data-usd="67.06">$67.06</span>
                <button class="btn btn--primary btn--small" data-add="your-first-website-video-course" aria-label="add to cart: Your First Website Video Course">add to cart</button>
              </div>
            </div>
          </article>
          <article class="product-card" data-reveal="" style="">
            <a class="product-card__media" href="product.php?id=wordpress-website-security" tabindex="-1" aria-hidden="true">
              <img src="assets/products/wordpress-website-security.jpg" alt="" loading="lazy" decoding="async" width="1200" height="1615" data-fade="done" class="img-in">
            </a>
            <span class="pill">video</span>
            <div class="product-card__body">
              <div class="product-card__text">
                <h3 class="product-card__title">
                  <a href="product.php?id=wordpress-website-security">WordPress Website Security</a>
                </h3>
                <p class="product-card__summary">An eight part course on securing a WordPress site.</p>
              </div>
              <div class="product-card__row">
                <span class="price" data-usd="49.09">$49.09</span>
                <button class="btn btn--primary btn--small" data-add="wordpress-website-security" aria-label="add to cart: WordPress Website Security">add to cart</button>
              </div>
            </div>
          </article>
          <article class="product-card" data-reveal="" style="">
            <a class="product-card__media" href="product.php?id=blogging-traffic-system" tabindex="-1" aria-hidden="true">
              <img src="assets/products/blogging-traffic-system.jpg" alt="" loading="lazy" decoding="async" width="1200" height="1615" data-fade="done" class="img-in">
            </a>
            <span class="pill">video</span>
            <div class="product-card__body">
              <div class="product-card__text">
                <h3 class="product-card__title">
                  <a href="product.php?id=blogging-traffic-system">Blogging Traffic System</a>
                </h3>
                <p class="product-card__summary">A video course on getting a blog found in search.</p>
              </div>
              <div class="product-card__row">
                <span class="price" data-usd="38.55">$38.55</span>
                <button class="btn btn--primary btn--small" data-add="blogging-traffic-system" aria-label="add to cart: Blogging Traffic System">add to cart</button>
              </div>
            </div>
          </article>
          <article class="product-card reveal-up" data-reveal="">
            <a class="product-card__media" href="product.php?id=html-101-kickstart" tabindex="-1" aria-hidden="true">
              <img src="assets/products/html-101-kickstart.jpg" alt="" loading="lazy" decoding="async" width="1200" height="1615" data-fade="done" class="img-in">
            </a>
            <span class="pill">video</span>
            <div class="product-card__body">
              <div class="product-card__text">
                <h3 class="product-card__title">
                  <a href="product.php?id=html-101-kickstart">HTML 101 Kickstart</a>
                </h3>
                <p class="product-card__summary">A nine part course on the basics of HTML, from the first tag to a working page.</p>
              </div>
              <div class="product-card__row">
                <span class="price" data-usd="29.87">$29.87</span>
                <button class="btn btn--primary btn--small" data-add="html-101-kickstart" aria-label="add to cart: HTML 101 Kickstart">add to cart</button>
              </div>
            </div>
          </article>
          <article class="product-card reveal-up" data-reveal="">
            <a class="product-card__media" href="product.php?id=your-first-website-course" tabindex="-1" aria-hidden="true">
              <img src="assets/products/your-first-website-course.jpg" alt="" loading="lazy" decoding="async" width="1200" height="1615" data-fade="done" class="img-in">
            </a>
            <span class="pill">video</span>
            <div class="product-card__body">
              <div class="product-card__text">
                <h3 class="product-card__title">
                  <a href="product.php?id=your-first-website-course">Your First Website Course</a>
                </h3>
                <p class="product-card__summary">A video course on the essentials of building a website.</p>
              </div>
              <div class="product-card__row">
                <span class="price" data-usd="24.3">$24.30</span>
                <button class="btn btn--primary btn--small" data-add="your-first-website-course" aria-label="add to cart: Your First Website Course">add to cart</button>
              </div>
            </div>
          </article>
        </div>
        <p class="store__empty" data-empty="" hidden="">No products match these filters. <button class="text-link" data-clear="">Clear filters</button>
        </p>
        <nav class="pagination store__pagination" data-pagination="" aria-label="Pages">
          <button class="pagination__item" data-page="0" aria-label="Previous page" disabled="">&lt;</button>
          <button class="pagination__item" data-page="1" aria-current="page">1</button>
          <button class="pagination__item" data-page="2">2</button>
          <button class="pagination__item" data-page="3">3</button>
          <span class="pagination__gap">…</span>
          <button class="pagination__item" data-page="10">10</button>
          <button class="pagination__item" data-page="2" aria-label="Next page">&gt;</button>
        </nav>
        <p class="store__footnote mono" data-footnote="">11 of 26 videos match Design, HTML and CSS</p>
      </div>
    </div>
  </section>
<?php include 'includes/footer.php'; ?>




<script>
(function () {
  'use strict';

  const { esc, productCard } = DD.ui;
  const $ = s => document.querySelector(s);
  const mobile = matchMedia('(max-width:820px)');

  // PRICE FILTERS
  const BANDS = [
    {
      key: 'low',
      test: p => p.price < 20,
      label: () => 'Under ' + DD.money(20, { whole: true })
    },
    {
      key: 'mid',
      test: p => p.price >= 20 && p.price <= 60,
      label: () => DD.money(20, { whole: true }) + ' to ' + DD.money(60, { whole: true })
    },
    {
      key: 'high',
      test: p => p.price > 60,
      label: () => 'Over ' + DD.money(60, { whole: true })
    }
  ];

  const NOUNS = {
    video: 'videos',
    ebook: 'e-books',
    software: 'software products',
    template: 'templates',
    audiobook: 'audio books'
  };

  // SORTING OPTIONS
  const SORTS = {
    newest: (a, b) => b.added - a.added,
    'price-asc': (a, b) => a.price - b.price,
    'price-desc': (a, b) => b.price - a.price
  };

  // URL PARAMETERS AND FILTER STATE
  const q = new URLSearchParams(location.search);

  const state = {
    type: q.get('type') || '',
    themes: q.getAll('theme'),
    bands: q.getAll('price'),
    search: q.get('q') || '',
    sort: SORTS[q.get('sort')] ? q.get('sort') : 'newest',
    page: Math.max(1, parseInt(q.get('page'), 10) || 1),
    open: new Set(q.get('type') ? [q.get('type')] : [])
  };

  // RESPONSIVE PRODUCTS PER PAGE
  const perPage = () => mobile.matches ? 6 : 12;

  const searchInput = $('[data-search]');
  searchInput.value = state.search;

  // GET THEMES AND PRODUCT COUNTS
  function themesFor(type) {
    const counts = {};

    DD.products
      .filter(p => p.type === type)
      .forEach(p => {
        counts[p.theme] = (counts[p.theme] || 0) + 1;
      });

    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }

  // SEARCH FUNCTIONALITY
  function matchesSearch(p) {
    if (!state.search) return true;

    const hay = (
      p.title + ' ' +
      p.summary + ' ' +
      p.theme + ' ' +
      p.typeLabel
    ).toLowerCase();

    return state.search
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean)
      .every(w => hay.includes(w));
  }

  // APPLY ALL FILTERS AND SORTING
  function results() {
    return DD.products
      .filter(p => !state.type || p.type === state.type)
      .filter(p => !state.themes.length || state.themes.includes(p.theme))
      .filter(p => !state.bands.length ||
        BANDS.some(b => state.bands.includes(b.key) && b.test(p))
      )
      .filter(matchesSearch)
      .sort(SORTS[state.sort]);
  }

  // RENDER BROWSE FILTERS
  function renderBrowse() {
    const all = `
      <li class="browse__item">
        <button class="browse__row${!state.type ? ' is-current' : ''}" data-type="">
          <span class="browse__name">All products</span>
          <span class="browse__count">${DD.products.length}</span>
        </button>
      </li>`;

    const types = DD.types.map(t => {
      const count = DD.products.filter(p => p.type === t.key).length;
      const themes = count >= 10 ? themesFor(t.key) : [];
      const open = state.open.has(t.key);

      const toggle = themes.length
        ? `<span class="browse__toggle" aria-hidden="true">${open ? '−' : '+'}</span>`
        : '';

      const expanded = themes.length
        ? ` aria-expanded="${open}"`
        : '';

      const themeItems = themes.map(([name, n]) => {
        const checked =
          state.type === t.key && state.themes.includes(name)
            ? ' checked'
            : '';

        return `
          <li>
            <label class="checkbox browse__theme">
              <input type="checkbox"
                data-theme="${esc(name)}"
                data-theme-type="${t.key}"${checked}>
              <span class="browse__name">${esc(name)}</span>
              <span class="browse__count">${n}</span>
            </label>
          </li>`;
      }).join('');

      const sub = themes.length && open
        ? `<ul class="browse__themes">${themeItems}</ul>`
        : '';

      return `
        <li class="browse__item">
          <button class="browse__row${state.type === t.key ? ' is-current' : ''}"
            data-type="${t.key}"${expanded}>
            <span class="browse__name">${esc(t.label)}</span>
            <span class="browse__count">${count}</span>
            ${toggle}
          </button>
          ${sub}
        </li>`;
    }).join('');

    $('[data-browse]').innerHTML = all + types;

    // PRICE FILTER OPTIONS
    $('[data-price-bands]').innerHTML = BANDS.map(b => `
      <label class="checkbox price-filter__option">
        <input type="checkbox"
          data-band="${b.key}"
          ${state.bands.includes(b.key) ? 'checked' : ''}>
        <span>${b.label()}</span>
      </label>
    `).join('');
  }

  // RESULT SUMMARY
  function summary(list) {
    const filtered =
      state.type ||
      state.themes.length ||
      state.bands.length ||
      state.search;

    if (!filtered) {
      return 'Showing ' + Math.min(perPage(), list.length) +
        ' of ' + DD.products.length + ' products';
    }

    const noun = state.type ? NOUNS[state.type] : 'products';

    const terms = state.themes.concat(
      state.search ? ['"' + state.search + '"'] : []
    );

    const base = list.length + ' ' +
      (list.length === 1 ? noun.replace(/s$/, '') : noun);

    return terms.length
      ? base + ' match ' + terms.join(', ')
      : base;
  }

  // PAGINATION LINKS
  function pageLinks(pages) {
    const cur = state.page;
    const items = [];

    const push = n => items.push(
      '<button class="pagination__item" data-page="' + n + '"' +
      (n === cur ? ' aria-current="page"' : '') +
      '>' + n + '</button>'
    );

    items.push(
      '<button class="pagination__item" data-page="' + (cur - 1) +
      '" aria-label="Previous page"' +
      (cur === 1 ? ' disabled' : '') + '>&lt;</button>'
    );

    const show = new Set([
      1,
      pages,
      cur - 1,
      cur,
      cur + 1,
      mobile.matches ? 0 : 2,
      mobile.matches ? 0 : 3
    ].filter(n => n >= 1 && n <= pages));

    let last = 0;

    [...show].sort((a, b) => a - b).forEach(n => {
      if (n - last > 1) {
        items.push('<span class="pagination__gap">…</span>');
      }

      push(n);
      last = n;
    });

    items.push(
      '<button class="pagination__item" data-page="' + (cur + 1) +
      '" aria-label="Next page"' +
      (cur === pages ? ' disabled' : '') + '>&gt;</button>'
    );

    return items.join('');
  }

  // UPDATE URL PARAMETERS
  function syncUrl() {
    const p = new URLSearchParams();

    if (state.type) p.set('type', state.type);

    state.themes.forEach(t => p.append('theme', t));
    state.bands.forEach(b => p.append('price', b));

    if (state.search) p.set('q', state.search);
    if (state.sort !== 'newest') p.set('sort', state.sort);
    if (state.page > 1) p.set('page', state.page);

    const s = p.toString();

    history.replaceState(
      null,
      '',
      location.pathname + (s ? '?' + s : '')
    );
  }

  // RENDER PRODUCTS AND RESULTS
  function render() {
    const list = results();

    const pages = Math.max(
      1,
      Math.ceil(list.length / perPage())
    );

    state.page = Math.min(state.page, pages);

    const slice = list.slice(
      (state.page - 1) * perPage(),
      state.page * perPage()
    );

    $('[data-grid]').innerHTML = slice.map(productCard).join('');

    $('[data-summary]').textContent = summary(list);

    document.querySelectorAll('[data-result-count]').forEach(el => {
      el.textContent = list.length;
    });

    $('[data-empty]').hidden = list.length > 0;

    const pag = $('[data-pagination]');

    pag.hidden = pages < 2;
    pag.innerHTML = pages > 1 ? pageLinks(pages) : '';

    const foot = $('[data-footnote]');

    const filtered =
      state.type ||
      state.themes.length ||
      state.bands.length ||
      state.search;

    foot.hidden = !(filtered && pages < 2 && list.length);

    if (!foot.hidden && state.type) {
      const total = DD.products.filter(
        p => p.type === state.type
      ).length;

      foot.textContent =
        list.length + ' of ' + total + ' ' +
        summary(list).replace(/^\d+ /, '');
    } else {
      foot.textContent = summary(list);
    }

    document.querySelectorAll('[data-clear]').forEach(b => {
      if (b.closest('.filters')) {
        b.hidden = !filtered;
      }
    });

    syncUrl();
  }

  // UPDATE FILTERS AND PRODUCTS
  function update(resetPage) {
    if (resetPage) state.page = 1;

    renderBrowse();
    render();
  }

  // BROWSE CATEGORY ACCORDION
  $('[data-browse]').addEventListener('click', e => {
    const row = e.target.closest('[data-type]');

    if (!row) return;

    const type = row.dataset.type;

    // ALL PRODUCTS: CLEAR CATEGORY AND CLOSE ACCORDIONS
    if (!type) {
      state.type = '';
      state.themes = [];
      state.open.clear();

      update(true);
      return;
    }

    const count = DD.products.filter(p => p.type === type).length;
    const themes = count >= 10 ? themesFor(type) : [];

    // CLICK ACTIVE CATEGORY: OPEN / CLOSE
    if (state.type === type) {
      if (themes.length) {
        if (state.open.has(type)) {
          state.open.clear();
        } else {
          state.open.clear();
          state.open.add(type);
        }
      }
    } else {
      // SELECT ANOTHER CATEGORY
      state.type = type;
      state.themes = [];
      state.open.clear();

      if (themes.length) {
        state.open.add(type);
      }
    }

    update(true);
  });

  // THEME FILTER CHANGE
  $('[data-browse]').addEventListener('change', e => {
    const box = e.target.closest('[data-theme]');

    if (!box) return;

    if (state.type !== box.dataset.themeType) {
      state.type = box.dataset.themeType;
      state.themes = [];
    }

    const name = box.dataset.theme;

    state.themes = box.checked
      ? state.themes.concat(name)
      : state.themes.filter(t => t !== name);

    update(true);
  });

  // PRICE FILTER CHANGE
  $('[data-price-bands]').addEventListener('change', e => {
    const box = e.target.closest('[data-band]');

    if (!box) return;

    state.bands = box.checked
      ? state.bands.concat(box.dataset.band)
      : state.bands.filter(b => b !== box.dataset.band);

    update(true);
  });

  // SEARCH INPUT WITH DEBOUNCE
  let t;

  searchInput.addEventListener('input', () => {
    clearTimeout(t);

    t = setTimeout(() => {
      state.search = searchInput.value.trim();
      update(true);
    }, 180);
  });

  // CLEAR FILTERS AND PAGINATION
  document.addEventListener('click', e => {

    // CLEAR ALL FILTERS
    if (e.target.closest('[data-clear], [data-clear-mobile]')) {
      Object.assign(state, {
        type: '',
        themes: [],
        bands: [],
        search: ''
      });

      state.open.clear();
      searchInput.value = '';

      update(true);
    }

    // PAGINATION CLICK
    const pg = e.target.closest('[data-page]');

    if (pg && !pg.disabled) {
      state.page = parseInt(pg.dataset.page, 10);

      render();

      document.querySelector('.store').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });

  // SORT DROPDOWN
  DD.ui.dropdown($('[data-sort]'), value => {
    state.sort = value;
    update(true);
  });

  // RESTORE SORT FROM URL
  const sortOpt = document.querySelector(
    '[data-sort] [data-value="' + state.sort + '"]'
  );

  document.querySelectorAll(
    '[data-sort] .dropdown__option'
  ).forEach(o => {
    o.setAttribute('aria-selected', o === sortOpt);
  });

  document.querySelector(
    '[data-sort] .dropdown__value'
  ).textContent = sortOpt.textContent;

  // MOBILE FILTER DRAWER
  const filters = $('#filters');
  const openBtn = $('[data-filters-open]');

  function setSheet(open) {
    filters.classList.toggle('is-open', open);

    openBtn.setAttribute('aria-expanded', open);

    document.body.style.overflow = open ? 'hidden' : '';
  }

  // OPEN MOBILE FILTERS
  openBtn.addEventListener('click', () => {
    setSheet(true);
  });

  // CLOSE MOBILE FILTERS
  document.querySelectorAll('[data-filters-close]').forEach(b => {
    b.addEventListener('click', () => {
      setSheet(false);
    });
  });

  // CLOSE FILTERS ON OVERLAY CLICK
  filters.addEventListener('click', e => {
    if (e.target === filters) {
      setSheet(false);
    }
  });

  // RESPONSIVE SEARCH PLACEHOLDER
  function placeholder() {
    searchInput.placeholder = mobile.matches
      ? searchInput.dataset.placeholderMobile
      : 'Search courses, e-books, software and templates';
  }

  mobile.addEventListener('change', () => {
    placeholder();
    setSheet(false);
    render();
  });

  placeholder();

  // CURRENCY CHANGE EVENT
  document.addEventListener('dd:currency', renderBrowse);

  // INITIALIZE STORE
  update(false);

})();
</script>


