/**
 * Author:    Jesse Park & Evan Kramer
 * Created:   12/5/21
 *
 **/

//var myURL ="https://numbersapi.com/42/math";
var myURL = "https://api.kanye.rest/"
var oldEl = document.getElementById('output');

$("#activate").click(callAJAX);

function callAJAX() {
  console.log("button has been pressed")
  // Using the core $.ajax() method
   $.ajax({
       // API endpoint
       url: myURL,
       // Any data to send
       //data: { id: 123},
       // POST or GET request
       type: "GET",
       // data type we expect back
       //dataType : "json",
   })

   // If the request succeeds
   // data is passed back
   .done(function(data) {
       console.log("Success:", data);
       $("#output").html(data.quote);
   })
   // If the request fails
   .fail(function(request,error) {
       console.log(request, error);
       $("#output").html("Error")
   });
  }
