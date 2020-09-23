// Defining event listener function
function displayLogWindowSize() {
    // Get width and height of the window excluding scrollbars
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    // Display result inside a div element
    console.log("Width: " + w + ", " + "Height: " + h);
}

// Attaching the event listener function to window's resize event
window.addEventListener("resize", displayLogWindowSize);

// Calling the function for the first time
displayLogWindowSize();

function changeNav() {
    document.getElementById("nav").innerHTML = '';
}