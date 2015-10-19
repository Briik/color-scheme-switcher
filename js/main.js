/*  This is the simple, and long, way...
var redButton = document.getElementById("redButton");
var whiteButton = document.getElementById("whiteButton");
var blueButton = document.getElementById("blueButton");
var yellowButton = document.getElementById("yellowButton");

var handleRedClickEvent = function() {
  document.body.style.background="red";
}
var handleWhiteClickEvent = function() {
  document.body.style.background="white";
}
var handleBlueClickEvent = function() {
  document.body.style.background="blue";
}
var handleYellowClickEvent = function() {
  document.body.style.background="yellow";
}
redButton.addEventListener("click", handleRedClickEvent);
whiteButton.addEventListener("click", handleWhiteClickEvent);
blueButton.addEventListener("click", handleBlueClickEvent);
yellowButton.addEventListener("click", handleYellowClickEvent);
*/
//THIS is the professional way.
var buttons = document.querySelectorAll("li");
console.log(buttons);
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(){
  console.log(this);
  document.body.className = this.className;
  //This works by giving the entire HTML <body> the same className as the specified button!
});
}
