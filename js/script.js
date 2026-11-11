function init(){
// add your javascript code below
// Create a variable to store button object content
    var button = document.getElementById("entrybutton");
    // Create a function for the addEventListener (myFunction) {

    // Create a variable to store what the user types into the textbox
    // Display in the alert box as your new message.  Watch video.
    // change the value of the h2 below the button to have the text contents of 
    // the textbox

    function myFunction() {
     // Display in the alert box as your new message.  Watch video.
        var entryinput = document.getElementById("textentry").value;
        alert("Julia Barbosa: " + entryinput);
        // change the value of the h2 below the button to have the text contents of 
        // the textbox
    document.getElementById("textoutput").innerHTML = entryinput;
    }

    button.addEventListener("click", myFunction);
}

window.addEventListener('load', init);
