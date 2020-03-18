// WEBFONT
WebFont.load({ google: { families: ['Fredoka One', 'Fugaz One', 'Gugi', 'Squada One'] } }); 

// MENU BUTTON
const hambutton = document.querySelector(".boom");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu( ) {
    document.querySelector(".dynamite").classList.toggle("explode");
}

