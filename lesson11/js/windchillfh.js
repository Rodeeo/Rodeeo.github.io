const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=679b4e5a24792804be9ab3dbe9fdc1a1";
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

  const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=679b4e5a24792804be9ab3dbe9fdc1a1";
  fetch(apiURL2)
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