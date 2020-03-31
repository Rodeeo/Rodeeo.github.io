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

// WEATHER 
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5594474&units=imperial&APPID=44e591a1d90ce9f0674cc3c487d75439";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

    document.getElementById('temperature').textContent = jsObject.main.temp.toFixed(0) + "\xB0 " + jsObject.weather[0].description; 
    document.getElementById('high').textContent = jsObject.main.temp_max.toFixed(0) + "\xB0";
    document.getElementById('humidity').textContent = jsObject.main.humidity + "%";
    document.getElementById('windspeed').textContent = jsObject.wind.speed.toFixed(0) + "mph";

let temp = parseInt(document.getElementById("temperature").innerText);
let windspeed = parseInt(document.getElementById("windspeed").innerText);

if (temp <= 50  && windspeed >= 3) {
    let windchilly = 35.74 + (0.6215*temp) - (35.75*(windspeed**0.16)) + (0.4275*temp*(windspeed**0.16));
    document.getElementById("windchill").innerText = windchilly.toFixed(0)+ "\xB0";
    } 
else {
   document.getElementById("windchill").innerText = " N/A" 
    }
  }); 