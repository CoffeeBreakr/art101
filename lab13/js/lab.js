/**
 * Author:    Jesse Park & Evan Kramer
 * Created:   12/4/21
 *
 **/
 var oldEl = document.getElementById('output');

function FizzBuzzBoom(){

  var outputStr = "";
  var num;
  //iterate over all out numbers
  for(let i = 0; i <=200; i++){
          var outputStr = "";
          num = i;
    //is the number a multiple of 3?
      if(i % 3 == 0){
        outputStr += "Fizz!";
      }
    //is the number a multiple of 5?
      if(i % 5 == 0){
        outputStr += "Buzz!";
      }
    //is the number a multiple of 7?
      if(i % 7 == 0){
        outputStr += "Boom!";
      }

if(outputStr != ""){
      $("#output").append("<p>" + num + " - " + outputStr + "</p>");
}
  }
  return outputStr;
}
document.getElementById("btn").addEventListener("click", function() {
FizzBuzzBoom();
});

function reportError(str) {
  outputEl.innerHTML = "<div> class = 'error'" + str + "</div>"
}
