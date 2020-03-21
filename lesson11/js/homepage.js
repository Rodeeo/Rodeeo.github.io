// WEBFONT
WebFont.load({ google: { families: ['Ubuntu'] } }); 

// BACON
const baconbutton = document.querySelector(".bacon");
baconbutton.addEventListener("click", toggleMenus, false);

function toggleMenus( ) {
    document.querySelector(".cheeseburger").classList.toggle("response");
}

// COUNTDOWN
var countDownDate = new Date("April 8, 2020 11:59:59").getTime();
  var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML = "End of Semester: " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "ON TO THE NEXT ONE!!!";
  }
}, 1000);

// EVENTS
const requestedURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestedURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); 

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

// HAM  
const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu( ) {
    document.querySelector(".hamburger").classList.toggle("responsive");
}

// HOME
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); 

        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if  (towns[i].name == "Preston" || towns[i].name =="Soda Springs"|| towns[i].name =="Fish Haven")
        {
        
            let pickle = document.createElement('section');
            let h2name = document.createElement('h2');
            let h3motto = document.createElement('h3');
            let year = document.createElement('p');
            let pop = document.createElement('p');
            let rain = document.createElement('p');
            let events = document.createElement('p');
            let image = document.createElement('img');

            pickle.className = towns[i].name;
            image.className = towns[i].photo;
            h2name.textContent = towns[i].name;
            h3motto.textContent = towns[i].motto;
            year.textContent = "Year Founded: " + towns[i].yearFounded;
            pop.textContent = "Town Population: " + towns[i].currentPopulation;
            rain.textContent = " Average Rainfall: " + towns[i].averageRainfall;
         
/*  IMAGES */
            image.setAttribute('data-src', "images/" + towns[i].photo); 
            image.setAttribute('src', "images/" + towns[i].photo);   
            image.setAttribute('alt', "picture of: " + h2name.textContent);

            
            pickle.appendChild(h2name);
            pickle.appendChild(h3motto);
            pickle.appendChild(year);
            pickle.appendChild(pop);
            pickle.appendChild(rain);
            pickle.appendChild(image);
                        
            document.querySelector('div.frenchfries').appendChild(pickle);
        }

        }
    });

// INDEXP6
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

// LAZYLOAD
// const imagesToLoad = document.querySelectorAll('img[data-src]');

// const imgOptions = {
//     threshold: 1,
//     rootMargin: "0px 0px 50px 0px"
// };

// const loadImages = (image) => {
//     image.setAttribute('src', image.getAttribute('data-src'));
//     image.onload = () => {
//         image.removeAttribute('data-src');
//     };
// };

// if ('IntersectionObserver' in window) {
//     const observer = new IntersectionObserver((items, observer) => {
//         items.forEach((item) => {
//             if (item.isIntersecting) {
//                 loadImages(item.target);
//                 observer.unobserve(item.target);
//             }
//         });
//     });
//     imagesToLoad.forEach((img) => {
//         observer.observe(img);
//     });
// } else {
//     imagesToLoad.forEach((img) => {
//         loadImages(img);
//     });
// }
