/**
 * Author:    Jesse Park & Evan Kramer
 * Created:   11/9/21
 *
 **/

// Defining Variables
var myArray = [2,6,9,123,87,3,15];

//function DoStuff multiples the given int by 3 and returns results
function DoStuff(x){
   var results = x * 3;
   return results;
}

//function isOdd checks if the given int is odd and returns a boolean value
function isOdd(y){
  return (y % 2 ==0);
}

//Callback function with map that adds 2 to every x in the array and returns the results
myArray.map(function(x){
  var results = x + 2;
  document.writeln(results);
  return results;
})

//Output
document.writeln("Multiplying the given int with the DoStuff function:") 
document.writeln(myArray.map(DoStuff));
document.writeln(DoStuff(3));

document.writeln("checking the given int with the isOdd function:")
document.writeln(isOdd(2));
document.writeln(myArray.map(isOdd));
