(function() {
  "use strict";

  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("body").classList.add("js");

    var zipField = document.getElementById("billing_postcode"),
      cityField = document.getElementById("billing_city"),
      stateField = document.getElementById("billing_state");

    zipField.addEventListener("blur", function queryPostalCode() {
      var zipCode = parseInt(zipField.value, 10);
      if (zipCode <= 0 || zipCode > 99999) return;


      //axios free api for zipcode/postalcode to country / city name changer 
      axios.get('../api?zip' + zipCode)
      .then(function (response) {
        // handle success
        console.log(response.data);

        var state = response.data.abbr;
        var state = response.data.city;

        cityField.value = city;
        stateField.value = state;

        cityField.parentNode.parentNode.style.display = "block";
        stateField.parentNode.parentNode.style.display = "block";

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

    });
  });
})();
