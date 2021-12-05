/**
 * Author:    Jesse Park & Evan Kramer
 * Created:   12/4/21
 *
 **/

 //div
 var oldEl = document.getElementById('output');
 var new1El = document.createElement("p");

 //Style
  new1El.style.color = "white";
  new1El.style.fontSize = "12pt";
  new1El.style.border = "thin groove #FFFFFF"

//function to grab an inputed name and sort it.
 function sortUserName(){
   var userName = window.prompt("Enter your username.");
   console.log("userName =", userName);
   //string to array
   var nameArray = userName.split('');
   console.log("nameArray =", nameArray);
   //sort
   var nameArraySort = nameArray.sort();
   console.log("nameArraySort =", nameArraySort);
   //rejoin aray with string
   var nameSorted = nameArraySort.join('');
   console.log("nameSorted =", nameSorted);
   return nameSorted;
}

//button function
   document.getElementById("btn").addEventListener('click', function(){
     console.log("Button has been clicked!");
     new1El.innerHTML = sortUserName();
     console.log("El1 has been created");
     oldEl.appendChild(new1El);
     console.log("El1 has been added");
   });
