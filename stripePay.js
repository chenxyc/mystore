window.onload = function() {
    var stripe = Stripe('pk_test_3B4kxIO8vxPnkiCW1VqmmtBR');
    var checkoutButton = document.getElementById('checkout-button-sku_GvIqbXLJ9S0EQg');
    checkoutButton.addEventListener('click', function () {
      // When the customer clicks on the button, redirect
      // them to Checkout.
      stripe.redirectToCheckout({
        items: [{sku: 'sku_GvIqbXLJ9S0EQg', quantity: 1}],
  
        // Do not rely on the redirect to the successUrl for fulfilling
        // purchases, customers may not always reach the success_url after
        // a successful payment.
        // Instead use one of the strategies described in
        // https://stripe.com/docs/payments/checkout/fulfillment
        successUrl: 'https://your-website.com/success',
        cancelUrl: 'https://your-website.com/canceled',
      })
      .then(function (result) {
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer.
          var displayError = document.getElementById('error-message');
          displayError.textContent = result.error.message;
        }
      });
    });
    var checkoutButton = document.getElementById('checkout-button-sku_GvJyRcdVq2tvjh');
    checkoutButton.addEventListener('click', function () {
      // When the customer clicks on the button, redirect
      // them to Checkout.
      stripe.redirectToCheckout({
        items: [{sku: 'sku_GvJyRcdVq2tvjh', quantity: 1}],
  
        // Do not rely on the redirect to the successUrl for fulfilling
        // purchases, customers may not always reach the success_url after
        // a successful payment.
        // Instead use one of the strategies described in
        // https://stripe.com/docs/payments/checkout/fulfillment
        successUrl: 'http://localhost:8000/success.html',
        cancelUrl: 'http://localhost:8000/cancel.html',
      })
      .then(function (result) {
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer.
          var displayError = document.getElementById('error-message');
          displayError.textContent = result.error.message;
        }
      });
    });
  }