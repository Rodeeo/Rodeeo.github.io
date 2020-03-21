// WEBFONT
WebFont.load({ google: { families: ['Fredoka One', 'Fugaz One', 'Gugi', 'Squada One'] } }); 

// MENU BUTTON
const hambutton = document.querySelector(".boom");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu( ) {
    document.querySelector(".dynamite").classList.toggle("explode");
}

// FOOTER INFO
const theDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const theMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let today = new Date;
let day = today.getDate()
let dayName = theDays[today.getDay()];
let month = theMonths [today.getMonth()];
let year = today.getFullYear();

document.getElementById("footinfo").textContent = `${dayName}, ${day} ${month} ${year}`

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

//SWUP
const swup = new Swup(); 