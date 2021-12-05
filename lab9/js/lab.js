/**
 * Author:    Jesse Park & Evan Kramer
 * Created:   11/11/21
 *
 **/

// Javascript for Web

var oldEl = document.getElementById('output');
//create a var that gets the info with the ID fo "output"
var new1El = document.createElement("p2");
new1El.innerHTML = "<p2>Something New</p2>";

//create a variable and modifyt its html to be a paragraph

var new2El = document.createElement("p1");
new2El.innerHTML = "<p1>Something Newer than that other element next to me<p1>";

//create a variable and modify its html to be a paragraph

oldEl.appendChild(new1El);
oldEl.appendChild(new2El);

//added new1El and new2El into oldEl

new1El.style.color = "red";
new1El.style.fontSize = "30pt";
new2El.style.color = "blue";
new2El.style.fontSize = "15pt";
oldEl.style.outline = "thick groove #FFFFFF";
