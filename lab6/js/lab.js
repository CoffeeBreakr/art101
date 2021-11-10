/**
 * Author:    Jesse Park & Evan Kramer
 * Created:   10/20/21
 *
 **/

// Defining Variables
 const myTransport = ["My car"," My girlfriend's car"," My brother's car"," My bike"];

 make = "giraffe";
model = "penguin";
color = "Island Blu";
 year = 2012;

 const myMainRide = {make, model, color, year};

 myTransport[1];
 myMainRide.make;

 //output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
