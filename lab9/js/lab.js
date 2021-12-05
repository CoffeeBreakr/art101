/**
 * Author:    Jesse Park & Evan Kramer
 * Created:   11/11/21
 *
 **/

// Javascript for Web

//Task 2
var oldEl = document.getElementById('output');
//create a var that gets the info with the ID fo "output"
var new1El = document.createElement("p");
new1El.innerHTML = "<p>Something New</p>"";

//create a variable and modifyt its html to be a paragraph

var new2El = document.createElement("p");
new2El.innerHTML = "<p>Something Newer<p>";

//create a variable and modift its html to be a paragraph

oldEl.appendChild(new1El);
oldEl.appendChild(new2El);

//added new1El and new2El into oldEl

newEl1.style.color = "red";
newEl1.style.fontSize = "30pt";
newEl2.style.color = "blue";
newEl2.style.fontSize = "15";
oldEl.style.outline = "thin solid black"
