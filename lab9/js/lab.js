/**
 * Author:    Jesse Park & Evan Kramer
 * Created:   11/11/21
 *
 **/

// Javascript for Web

var oldEl = document.getElementById('output');
//create a var that gets the info with the ID fo "output"
var new1El = document.createElement("p3");
new1El.innerHTML = "<p3>Something New</p3>";
console.log("El1 has been created");

//create a variable and modifyt its html to be a paragraph

var new2El = document.createElement("p3");
new2El.innerHTML = "<p3>Something Newer than that other element next to me<p3>";
console.log("El2 has been created");

//create a variable and modify its html to be a paragraph

oldEl.appendChild(new1El);
console.log("El1 has been added");
oldEl.appendChild(new2El);
console.log("El2 has been added");

//added new1El and new2El into oldEl

new1El.style.color = "red";
new1El.style.fontSize = "30pt";
new2El.style.color = "blue";
new2El.style.fontSize = "15pt";
oldEl.style.outline = "thick groove #FFFFFF";
