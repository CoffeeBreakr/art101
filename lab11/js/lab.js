/**
 * Author:    Jesse Park & Evan Kramer
 * Created:   10.18.2021
 *
 **/

challengesPrintout.style.visibility = 'hidden';
problemsPrintout.style.visibility = 'hidden';
resultsPrintout.style.visibility = 'hidden';


// add event handler for red button
$("button.problems").click(function(){
  // remove possible existing class
  $("#target").removeClass("challenges");
  // now toggle red clas
  $("#target").toggleClass("problems")
});
// add event handler for green button
$("button.challenges").click(function(){
  // remove possible existing class
  $("#target").removeClass("results");
  // now toggle red class
  $("#target").toggleClass("challenges");
});
// add event handler for green button
$("button.results").click(function(){
  // remove possible existing class
  $("#target").removeClass("problems");
  // now toggle red class
  $("#target").toggleClass("results");
});

$("button.challenges").click(function(){
  challengesPrintout.style.visibility = 'visible';

});

$("button.problems").click(function(){
  problemsPrintout.style.visibility = 'visible';

});

$("button.results").click(function(){
  resultsPrintout.style.visibility = 'visible';

});
