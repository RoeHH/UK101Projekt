/*
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
*/


function changeNav() {
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    if (w < 480) {
        document.getElementById("nav_changer").innerHTML = `
        <nav class="nav centered_text">
        <button class="nav_buttons" onclick="get_nav();"' ; ">Weiter</button>
        </nav>  `;
    } else {
        document.getElementById("nav_changer").innerHTML = `
        <nav class="nav centered_text">
        <button class="nav_buttons" onclick=" window.location.href='index.html' ; ">Startseite</button>
        <button class="nav_buttons" onclick=" window.location.href='./lageplan.html' ; ">Lageplan</button>
        <button class="nav_buttons" onclick=" window.location.href='./verbindungen.html' ; ">Verbindungen</button>
        <button class="nav_buttons" onclick=" window.location.href='kontakt.html' ; ">Kontakt</button>
        </nav>`
    }
}

x = 1;

function get_nav() {
    if (x == 1) {
        x = 2
        document.getElementById("nav_changer").innerHTML = ` 
            <nav class = "nav centered_text" >
            <button class = "nav_buttons" onclick = " window.location.href='index.html' ; " > Startseite </button> 
            <button class = "nav_buttons" onclick = " window.location.href='./lageplan.html' ; " > Lageplan </button> 
            <button class = "nav_buttons" onclick = " window.location.href='./verbindungen.html' ; " > Verbindungen </button> 
            <button class = "nav_buttons" onclick = " window.location.href='kontakt.html'; " > Kontakt </button> 
            </nav > `;
        document.getElementById("container").style.gridTemplateRows = "120px 160px 2400px 165px 200px";
    } else if (x == 2) {
        x = 1
        document.getElementById("nav_changer").innerHTML = "";
    }
}
//Event Listener
window.addEventListener("resize", changeNav);