function init() {
    var button = document.getElementById("entrybutton");

    function myFunction() {
        // Get the value typed into the textbox
        var entryinput = document.getElementById("textbox").value;
        
        // Display the alert message
        alert("Julia Barbosa: " + entryinput);
        
        // Change the contents of the h2 element
        document.getElementById("demo").innerHTML = entryinput;
    }

    // Attach the click event listener to the button
    button.addEventListener("click", myFunction);
}
// Run the init function once the page loads
window.addEventListener('load', init);
