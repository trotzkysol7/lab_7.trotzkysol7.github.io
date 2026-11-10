function init(){
// add your javascript code below
// Create a variable to store button object content
var button = document.getElementById("button");

    // Create a function for the addEventListener (myFunction) {
function addEventListener(myFunction) {
    // Create a variable to store what the user types into the textbox
    var entryinput = document.getElementById("textbox").value;
}
function myFunction() {
    // Display in the alert box as your new message.  Watch video.
     alert("Julia Barbosa:" + entryinput);
    // change the value of the h2 below the button to have the text contents of 
    // the textbox
    document.getElementById("demo").innerHTML = entryinput;
}

object.addEventListener("click", myFunction);
}
window.addEventListener('load', init);