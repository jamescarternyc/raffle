console.log("hello");

$('body').on('click','#payWithCard', function(){
  console.log("hello");
  var user = {
    firstName: $('input[name=firstName]').val(),
    lastName: $('input[name=lastName]').val(),
    email: $('input[name=email]').val(),
    phone: $('input[name=phone]').val(),
    entries: $('input[name=entries]').val()
  }
  console.log(user);



  var handler = StripeCheckout.configure({
    key: 'pk_test_1oQStgxkEZbAq0AacGqpYEct',
    image: '/img/documentation/checkout/marketplace.png',
    locale: 'auto',
    token: function(token) {
      // You can access the token ID with `token.id`.
      // Get the token ID to your server-side code for use.
      console.log(token);
      $.ajax({
        type: "POST",
        url: "http://localhost:3000/users",
        json: true,
        data: {user:{
          firstname: $('input[name=firstName]').val(),
          lastname: $('input[name=lastName]').val(),
          email: $('input[name=email]').val(),
          phonenumber: $('input[name=phone]').val(),
          numofentry: $('input[name=entries]').val(),
          token: token
        }
      },
        success: function (response) {
          console.log(response);
        },
        error: function(jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
          }
      })// end of ajax

    }
  });


  // Open Checkout with further options:
  handler.open({
    name: 'jamescarter.nyc',
    description: '2 widgets',
    amount: 200 * user.entries
  });

    // Close Checkout on page navigation:
  $(window).on('popstate', function() {
    handler.close();
  });








  });
