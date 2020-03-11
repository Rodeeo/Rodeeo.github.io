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
