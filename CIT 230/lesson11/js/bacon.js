// BACON
const baconbutton = document.querySelector(".bacon");
baconbutton.addEventListener("click", toggleMenus, false);

function toggleMenus( ) {
    document.querySelector(".cheeseburger").classList.toggle("response");
}
