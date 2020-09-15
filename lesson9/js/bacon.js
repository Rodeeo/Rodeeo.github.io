const baconbutton = document.querySelector(".bacon");
baconbutton.addEventListener("click", toggleMenu, false);

function toggleMenu( ) {
    document.querySelector(".cheeseburger").classList.toggle("response");
}