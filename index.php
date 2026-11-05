<?php include 'includes/header.php'; ?>
<script src="assets/js/motion.js"></script>
<div class="smooth" id="smooth">
  <main id="top">
    <section class="home-hero" id="hero">
      <canvas class="home-hero__canvas reveal-fade reveal-zoom" style="--d:.1s"></canvas>
      <div class="home-hero__overlay"></div>
      <div class="home-hero__glow"></div>
      <div class="home-hero__copy">
        <h1 class="home-hero__title"><span class="line"><span style="--d:.4s">Build on</span></span><span class="line"><span style="--d:.52s" class="home-hero__accent">solid ground.</span></span></h1>
        <p class="home-hero__sub reveal" style="--d:.8s">Themes, components, scripts and starter kits for developers who would rather ship the interesting part than rebuild the basics again.</p>
        <div class="home-hero__buttons reveal" style="--d:.92s"><a href="store.html" class="btn btn--primary">shop products</a><a href="one-on-one.html" class="btn home-btn--ghost">book a 1 on 1</a></div>
      </div>
      <div class="home-hero__foot mono reveal" style="--d:1.1s"><span class="home-hero__hint--pointer"><b>//</b> hover the dunes to view source</span><span class="home-hero__hint--touch"><b>//</b> drag across the dunes to view source</span></div>
    </section>

    <section class="home-section home-section--light" id="produvcts">
      <div class="wrap">
        <div class="home-head">
          <div><span class="label reveal">favourites</span><h2 class="heading-2 reveal-lines"><span class="line"><span>Our favourite products</span></span></h2></div>
          <a href="store.html" class="link-arrow reveal">view all products</a>
        </div>
        <div class="home-favourites" data-favourites></div>
        <div class="home-dots" data-dots></div>
      </div>
    </section>

    <section class="home-section home-section--light" id="perks">
      <div class="wrap home-perks">
        <div>
          <span class="label reveal">the perks</span>
          <h2 class="heading-2 reveal-lines"><span class="line"><span>What you get with</span></span><span class="line"><span style="--d:.08s">every product</span></span></h2>
          <p class="home-lead reveal" style="--d:.15s">Every product page lists the format, what is inside and who it is for, so you know exactly what you are buying before you pay.</p>
          <a href="store.html" class="link-arrow reveal" style="--d:.25s">discover products</a>
        </div>
        <div class="terminal reveal" style="--d:.1s" data-terminal><div class="terminal__bar"><i></i><i></i><i></i><span>~/desertdigitals</span></div><pre class="terminal__screen" data-terminal-screen aria-label="Example: search, add to cart, checkout and download"></pre></div>
      </div>
      <div class="wrap home-features-wrap">
        <div class="features">
          <div class="feature reveal"><span class="feature__number">01</span><h3 class="feature__title">Every format in one store</h3><p class="feature__text">Video courses, e-books, software and templates, filtered by format and price.</p></div>
          <div class="feature reveal" style="--d:.08s"><span class="feature__number">02</span><h3 class="feature__title">Kept in your account</h3><p class="feature__text">Every purchase stays in your account, ready to download again.</p></div>
          <div class="feature reveal" style="--d:.16s"><span class="feature__number">03</span><h3 class="feature__title">Secure payment</h3><p class="feature__text">Checkout hands off to a secure payment gateway. We never see your card details.</p></div>
          <div class="feature reveal" style="--d:.24s"><span class="feature__number">04</span><h3 class="feature__title">A developer on hand</h3><p class="feature__text">Book a 1 on 1 by the hour when a product is not enough.</p></div>
        </div>
      </div>
    </section>

    <section class="home-section home-section--dark" id="one-on-one">
      <div class="wrap home-one-on-one">
        <div class="route reveal" data-route><canvas></canvas>
          <span class="route__tag" data-route-start style="--d:.6s"><b>&gt;</b> stuck</span>
          <span class="route__tag" data-route-end style="--d:1.8s"><b>&#10003;</b> shipped</span>
          <span class="route__caption">// the way through</span>
        </div>
        <div>
          <span class="label label--on-dark reveal">one on one</span>
          <h2 class="heading-2 reveal-lines"><span class="line"><span>Book a developer</span></span><span class="line"><span style="--d:.08s">by the hour</span></span></h2>
          <p class="home-lead home-one-on-one__lead reveal" style="--d:.15s">Stuck on a bug, a concept or a product you have bought? Book a session with an experienced developer and work through it together. Bring the code and the questions.</p>
          <div class="home-rate reveal" style="--d:.22s"><small>from</small><b data-rate></b><small>an hour</small></div>
          <div class="home-one-on-one__buttons reveal" style="--d:.3s"><a href="one-on-one.html#brief" class="btn btn--primary">book a 1 on 1</a><a href="one-on-one.html" class="btn home-btn--ghost">how sessions work</a></div>
        </div>
      </div>
    </section>

    <section class="home-section home-section--light" id="ship">
      <div class="wrap">
        <div class="band reveal" data-band>
          <img class="band__image" data-parallax="-0.08" src="assets/images/home-made-by-developers.jpg" alt="A sandstone laptop half buried in a dune ridge at sunset" width="2400" height="1355" loading="lazy" decoding="async">
          <div class="band__overlay"></div>
          <div class="band__copy">
            <span class="label label--on-dark">made by people who ship</span>
            <h2 class="heading-2 reveal-lines"><span class="line"><span>Made by developers</span></span><span class="line"><span style="--d:.08s">who ship</span></span></h2>
            <p class="home-lead">Every product is written by working developers, checked by a second pair of eyes before release and revised when the tools it covers change.</p>
          </div>
          <ol class="band__points">
            <li><span class="band__number">01</span>Written by working developers</li>
            <li><span class="band__number">02</span>Reviewed before release</li>
            <li><span class="band__number">03</span>Revised when tools change</li>
          </ol>
        </div>
      </div>
    </section>

    <section class="home-section home-section--light" id="faq">
      <div class="wrap home-faq">
        <div class="home-faq__head">
          <span class="label reveal">before you buy</span>
          <h2 class="heading-2 reveal-lines"><span class="line"><span>Questions people ask</span></span><span class="line"><span style="--d:.08s">before they buy</span></span></h2>
          <p class="home-lead reveal" style="--d:.15s">Still stuck on something? Ask the team and we will reply by email.</p>
          <a href="contact.html" class="link-arrow reveal" style="--d:.25s">ask a question</a>
        </div>
        <div class="faq reveal" style="--d:.1s" data-faq></div>
      </div>
    </section>

    <section class="home-section home-section--light" id="contact">
      <div class="wrap">
        <div class="home-cta" data-cta><canvas></canvas>
          <div class="home-cta__inner">
            <div>
              <span class="label reveal">get in touch</span>
              <h2 class="heading-2 reveal-lines"><span class="line"><span>Talk to the team</span></span></h2>
              <div class="home-cta__prompt reveal" style="--d:.15s"><span class="home-cta__dollar">$</span> hello desertdigitals<span class="cursor"></span></div>
            </div>
            <div class="home-cta__side">
              <p class="home-lead reveal" style="--d:.2s">Questions about a product, an order or a 1 on 1? Send us a message and we will reply by email.</p>
              <a href="contact.html" class="btn btn--dark reveal" style="--d:.28s">get in touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>
<?php include 'includes/footer.php'; ?>
