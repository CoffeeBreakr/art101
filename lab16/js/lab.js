/**
 * Author:    Jesse Park & Evan Kramer
 * Created:   12/5/21
 *
 **/

 //generates a random number based on the starting point
var number = Math.floor(Math.random() * 2547) + 1;
console.log(number);
//creates URL with number
var myURL = "https://xkcd.com/" + number + "/info.0.json";
console.log(myURL);

 $("#activate").click(callAJAX);

 function callAJAX() {
   console.log("button has been pressed!");
   console.log(myURL);
   // Using the core $.ajax() method
    $.ajax({
        // API endpoint
        url: myURL,
        // Any data to send
        //data: {id:123},
        // POST or GET request
        type: "GET",
        // data type we expect back
        dataType : "json",
    })

    // If the request succeeds
    // data is passed back
    .done(function(comicObj){
        console.log("Success: ", comicObj.title, comicObj.img, comicObj.alt, comicObj.num);
        //output the comic title, image, and alt
        var title = comicObj.title + " # " + comicObj.num;
        $("#title").html(title);
        var img = "<img src=" + comicObj.img + ">";
        $("#img").html(img);
        var desc = comicObj.alt;
        $("#alt").html(desc);
      })
    // If the request fails
    .fail(function(request,error) {
        console.log(request,error);
        $("#output").html("Error")
    });
   }
