<?php include 'includes/header.php'; ?>
  
    <section class="page-hero about-hero">
        <img
            fetchpriority="high"
            class="page-hero__image about-hero__image"
            src="assets/images/about-hero.jpg"
            alt=""
            width="2400"
            height="1029"
            data-fade="done"
        />
        <div class="page-hero__overlay about-hero__overlay"></div>
        <div class="wrap page-hero__copy about-hero__copy">
            <h1 class="heading-1" data-reveal="">About us</h1>
            <p class="page-hero__lead about-hero__lead" data-reveal="">
                We sell video courses, e-books, software and templates for people who build the web, and an hour of a
                developer's time when a product is not enough.
            </p>
        </div>
    </section>
    <section class="about-story">
        <div class="wrap">
            <div class="about-story__intro" data-reveal="">
                <h2 class="heading-2 about-story__title">Why the store exists</h2>
                <div class="body-large about-story__text">
                    <p>
                        Most of what we know about building for the web came from someone who had already done it. A
                        course, a book, a template we took apart line by line until it made sense.
                    </p>
                    <p>
                        desertdigitals keeps that kind of material in one place. Every product says what it is, what is
                        inside and what it costs, so you can decide before you pay.
                    </p>
                    <p>
                        When the material is not enough, you can book an hour with a developer and work through your own
                        code.
                    </p>
                </div>
            </div>
            <!-- counts come from the catalogue -->
            <ul class="shelves" data-shelves="" aria-label="What is on the shelves" data-reveal="" style="">
                <li class="shelves__item">
                    <a href="store.php?type=ebook">
                        <span class="shelves__count">58</span>
                        <span class="shelves__label">e-books</span>
                    </a>
                </li>
                <li class="shelves__item">
                    <a href="store.php?type=video">
                        <span class="shelves__count">26</span>
                        <span class="shelves__label">video courses</span>
                    </a>
                </li>
                <li class="shelves__item">
                    <a href="store.php?type=software">
                        <span class="shelves__count">24</span>
                        <span class="shelves__label">software</span>
                    </a>
                </li>
                <li class="shelves__item">
                    <a href="store.php?type=template">
                        <span class="shelves__count">5</span>
                        <span class="shelves__label">templates</span>
                    </a>
                </li>
                <li class="shelves__item">
                    <a href="store.php?type=audiobook">
                        <span class="shelves__count">1</span>
                        <span class="shelves__label">audio book</span>
                    </a>
                </li>
            </ul>
        </div>
    </section>
    <section class="about-process">
        <div class="wrap">
            <h2 class="heading-2" data-reveal="" style="">How a product reaches the store</h2>
            <ol class="branch" data-reveal="" style="">
                <li class="branch__commit">
                    <img
                        class="branch__node"
                        src="assets/images/about-node.svg"
                        alt=""
                        width="24"
                        height="24"
                        loading="lazy"
                        decoding="async"
                    />
                    <h3 class="heading-3">Written by someone who ships</h3>
                    <p class="muted">
                        Every product comes from a developer who uses that code in production, not from a copywriter
                        reading the docs.
                    </p>
                </li>
                <li class="branch__commit">
                    <img
                        class="branch__node"
                        src="assets/images/about-node.svg"
                        alt=""
                        width="24"
                        height="24"
                        loading="lazy"
                        decoding="async"
                    />
                    <h3 class="heading-3">Reviewed like a pull request</h3>
                    <p class="muted">
                        Another developer works through each product before it is listed, and sends it back if something
                        is unclear or out of date.
                    </p>
                </li>
                <li class="branch__commit">
                    <img
                        class="branch__node"
                        src="assets/images/about-node.svg"
                        alt=""
                        width="24"
                        height="24"
                        loading="lazy"
                        decoding="async"
                    />
                    <h3 class="heading-3">Revised when the tools change</h3>
                    <p class="muted">
                        When a framework or a plugin moves on, the product is revised and the new version lands in your
                        account.
                    </p>
                </li>
            </ol>
        </div>
    </section>
    <section class="about-refuse">
        <div class="about-refuse__media">
            <img
                src="assets/images/about-shelves.jpg"
                alt=""
                width="1760"
                height="2368"
                loading="lazy"
                decoding="async"
                data-fade="done"
            />
        </div>
        <div class="about-refuse__copy">
            <h2 class="heading-2">What we won’t stock</h2>
            <p class="body-large muted about-refuse__lead">
                A store is as good as what it refuses. Three things we turn down, whoever sends them.
            </p>
            <ol class="refuse-list">
                <li class="refuse-list__item">
                    <span class="refuse-list__num mono">01</span>
                    <div class="refuse-list__text">
                        <h3 class="heading-4">Anything we have not opened</h3>
                        <p class="muted">
                            Every product is downloaded, read or run by a developer before it gets a page.
                        </p>
                    </div>
                </li>
                <li class="refuse-list__item">
                    <span class="refuse-list__num mono">02</span>
                    <div class="refuse-list__text">
                        <h3 class="heading-4">Subscriptions</h3>
                        <p class="muted">You pay once and the file is yours. No renewals, no locked updates.</p>
                    </div>
                </li>
                <li class="refuse-list__item">
                    <span class="refuse-list__num mono">03</span>
                    <div class="refuse-list__text">
                        <h3 class="heading-4">Tutorials for tools nobody ships with</h3>
                        <p class="muted">If a stack has gone quiet, its courses come down.</p>
                    </div>
                </li>
            </ol>
        </div>
    </section>
    <section class="about-read">
        <div class="wrap about-read__layout">
            <div class="about-read__copy" data-reveal="" style="">
                <h2 class="heading-2">Read before you buy</h2>
                <p class="body-large about-read__lead">
                    Every card in the store answers the same four questions, so you can compare a course with a plugin
                    without opening either.
                </p>
                <p class="about-read__body">
                    Formats, prices and what happens after you pay sit on every card, in the same place, in plain words.
                    If a product needs more than a card can hold, its page says what is in the download before you add
                    it to your cart.
                </p>
                <a class="btn btn--primary" href="store.php">browse the store</a>
            </div>
            <div class="annotated" data-reveal="" style="">
                <!-- rendered by DD.ui.productCard -->
                <div class="annotated__card" data-annotated-card="" data-product="learning-gutenberg">
                    <article class="product-card">
                        <a
                            class="product-card__media"
                            href="product.php?id=learning-gutenberg"
                            tabindex="-1"
                            aria-hidden="true"
                        >
                            <img
                                src="assets/products/learning-gutenberg.jpg"
                                alt=""
                                loading="lazy"
                                decoding="async"
                                width="1200"
                                height="1615"
                                data-fade="done"
                                class="img-in"
                            />
                        </a>
                        <span class="pill">video</span>
                        <div class="product-card__body">
                            <div class="product-card__text">
                                <h3 class="product-card__title">
                                    <a href="product.php?id=learning-gutenberg">Learning Gutenberg</a>
                                </h3>
                                <p class="product-card__summary">
                                    The block editor from your first block to a full page layout.
                                </p>
                            </div>
                            <div class="product-card__row">
                                <span class="price" data-usd="15">$15.00</span>
                                <button
                                    class="btn btn--primary btn--small"
                                    data-add="learning-gutenberg"
                                    aria-label="add to cart: Learning Gutenberg"
                                >
                                    add to cart
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
                <p class="annotated__note annotated__note--left annotated__note--is">
                    <span class="annotated__key mono">what it is</span>Video, e-book, software or template
                </p>
                <p class="annotated__note annotated__note--left annotated__note--does">
                    <span class="annotated__key mono">what it does</span>One plain line, no hype
                </p>
                <p class="annotated__note annotated__note--right annotated__note--next">
                    <span class="annotated__key mono">what happens next</span>It lands in your account to download
                </p>
                <p class="annotated__note annotated__note--right annotated__note--costs">
                    <span class="annotated__key mono">what it costs</span>Paid once, no renewals
                </p>
            </div>
        </div>
    </section>
    <section class="about-closing">
        <img
            class="about-closing__image img-in"
            src="assets/images/about-closing.jpg"
            alt=""
            width="2400"
            height="1029"
            loading="lazy"
            decoding="async"
            data-fade="done"
        />
        <div class="wrap about-closing__copy">
            <h2 class="heading-2" data-reveal="" style="">
                Everything on the shelves was <br />used in a real build first.
            </h2>
            <p class="body-large about-closing__lead" data-reveal="" style="">
                Each product comes from a developer who shipped with it, then gets read by another before it reaches the
                store. When the tools move on, so does the product. Find something for your next build, or book an hour
                when you are stuck.
            </p>
            <div class="about-closing__buttons reveal-up" data-reveal="">
                <a class="btn btn--primary" href="store.php">browse the store</a>
                <a class="btn btn--secondary" href="one-on-one.php">book a 1 on 1</a>
            </div>
        </div>
    </section>


<?php include 'includes/footer.php'; ?>