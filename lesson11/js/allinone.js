// WEBFONT
WebFont.load({ google: { families: ['Ubuntu'] } }); 

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
        console.table(jsonObject); 

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
            image.setAttribute('src', towns[i].photo); 
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
const imagesToLoad = document.querySelectorAll('img[data-src]');


const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

// WINDCHILL
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=9633e248f32005ad22af91d87fd487ee";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

    document.getElementById('temperature').textContent = jsObject.main.temp.toFixed(0) + "˚ " + jsObject.weather[0].description; 
    document.getElementById('high').textContent = jsObject.main.temp_max.toFixed(0) + "˚";
    document.getElementById('humidity').textContent = jsObject.main.humidity + "%";
    document.getElementById('windspeed').textContent = jsObject.wind.speed.toFixed(0) + "mph";

let temp = parseInt(document.getElementById("temperature").innerText);
let windspeed = parseInt(document.getElementById("windspeed").innerText);

if (temp <= 50  && windspeed >= 3) {
    let windchilly = 35.74 + (0.6215*temp) - (35.75*(windspeed**0.16)) + (0.4275*temp*(windspeed**0.16));
    document.getElementById("windchill").innerText = windchilly.toFixed(0)+ "˚";
    } 
else {
   document.getElementById("windchill").innerText = " N/A" 
    }
  }); 

  const apiURL3 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=da65eb66c969087514d2a228682d94b6";
  fetch(apiURL3)
  .then((response) => response.json())
  .then((jsObject) => {

  let d = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  let n = 1;
  for (let day of jsObject.list) {
      if (day.dt_txt.includes("18:00:00")) {
          let date = new Date(day.dt_txt);

          let x = "day" + n;
          const weathericon = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
          document.getElementById(x).textContent = d[date.getDay()];
          document.getElementById(`${x}_temp`).textContent = day.main.temp.toFixed(0);
          document.getElementById(`${x}_image`).setAttribute('src', weathericon); 
          document.getElementById(`${x}_image`).setAttribute('alt', day.weather[0].description);
          n++;
      }
  }

  });