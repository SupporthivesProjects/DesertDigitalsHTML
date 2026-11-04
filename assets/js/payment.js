/* payment gateway plugs in here (order shape in README.md).
   create the session on your server, redirect to the hosted page; it returns to
   payment-complete.html?ref= or payment-error.html?ref=. no card details pass through this site. */
(function () {
  'use strict';

  function startPayment(order) {
    DD.storage.set('dd.pendingOrder', order);

    // replace the lines below with the redirect to the hosted payment page
    DD.recordOrder(order);
    DD.clearCart();
    DD.clearDiscount();
    location.href = 'payment-complete.html?ref=' + encodeURIComponent(order.ref);
  }

  window.startPayment = startPayment;
})();
