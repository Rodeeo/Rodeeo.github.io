// WEBFONT
WebFont.load({ google: { families: ['Ubuntu'] } }); 

//INDEXP6
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

//HAM
const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu( ) {
    document.querySelector(".hamburger").classList.toggle("responsive");
}

//EVENTS
const requestedURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestedURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); 

        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if  (towns[i].name == "Preston" || towns[i].name =="Soda Springs"|| towns[i].name =="Fish Haven")
        {

            let pickle = document.createElement('aside');
            let h2name = document.createElement('h2');
            let events = document.createElement('p');

          
            h2name.textContent = towns[i].name;
            events.textContent = "Events in " + h2name.textContent;
            
            pickle.appendChild(events);
            for (let x = 0; x < towns[i].events.length; x++) {
                let event = document.createElement('p');
                
                pickle.className =  h2name.textContent;
                event.textContent = towns[i].events[x];
                pickle.appendChild(event);
            } 
            
            
            document.querySelector('div.pickle').appendChild(pickle);
        }

        }
    });
