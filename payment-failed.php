<?php include 'includes/header.php'; ?>
<div class="page--light">
  <section class="result">
    <img fetchpriority="high" class="result__bg" src="assets/images/payment-error.jpg" alt="" width="2400" height="1355">
    <div class="result__card paycom-card">
      <img class="result__icon" src="assets/images/icon-error.svg" alt="" width="64" height="64">
      <div class="result__text">
        <h1 class="result__title">Payment failed</h1>
        <p class="result__body payment-sub">The payment page returned an error. Your cart is saved, so you can try again or pay with another card.</p>
      </div>
      <div class="result__actions">
        <a class="btn btn--dark" href="checkout.html">try again</a>
        <a class="btn btn--outline" href="contact.html">contact us</a>
      </div>
    </div>
  </section>
</div>

<?php include 'includes/footer.php'; ?>