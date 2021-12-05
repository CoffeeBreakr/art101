/**
 * Author:    Jesse Park & Evan Kramer
 * Created:   12/5/21
 *
 **/

var oldEl = document.getElementById('output');

function callAJAX() {
  // Using the core $.ajax() method
   $.ajax({
       // API endpoint
       url: "https://numbers.api",
       // Any data to send
       data: { id: 123},
       // POST or GET request
       type: "GET",
       // data type we expect back
       dataType : "json",
   })

   // If the request succeeds
   // data is passed back
   .done(function(data) {
       console.log("Success:", data);
   })
   // If the request fails
   .fail(function(request,error) {
       console.log(request, error);
   });
  }

document.getElementById("activate").addEventListener("click", function() {
callAJAX();
});
