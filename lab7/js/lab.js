/**
 * Author:    Jesse Park & Evan Kramer
 * Created:   10/25/21
 *
 **/

// Defining Variables
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

 //output
document.writeln("Here is your new name: ", sortUserName(), "</br>");
