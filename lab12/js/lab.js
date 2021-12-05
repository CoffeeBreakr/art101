/**
 * Author:    Jesse Park & Evan Kramer
 * Created:   12/4/21
 *
 **/

var house;
var oldEl = document.getElementById('output');
var new1El = document.createElement("p3");

new1El.style.color = "yellow";
new1El.style.fontSize = "15pt";

//sortingHat function
function sortingHat(str){
  var length = str.length;
  var mod = length % 4;
  console.log(mod);

  if(mod == 0){
    return "Gryffindor";
    console.log("returned Gryf");
  }
  else if(mod == 1){
    return "Ravenclaw";
        console.log("returned Raven");
  }
  else if(mod == 2){
    return "Slytherin";
        console.log("returned Snake");
  }
  else if(mod == 3){
    return "Hufflepuff";
        console.log("returned Huffle");
  }
}

//button function

document.getElementById("btn").addEventListener('click', function(){
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  console.log(name);
  console.log(house);
  var outPut = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  new1El.innerHTML = outPut;
  oldEl.appendChild(new1El);
});
