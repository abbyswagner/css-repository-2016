//Creates Variables and saves DOM Elements to each
var newBGColor = document.getElementById("newBGColor");
var colorChangeButton = document.getElementById("colorChangeButton");

/* EventListener for button.
Whatever value the user inputs sets the background */
colorChangeButton.addEventListener("click", function() {
    document.body.style.backgroundColor = newBGColor.value;
})
