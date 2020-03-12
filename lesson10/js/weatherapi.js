const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=da65eb66c969087514d2a228682d94b6";
fetch(apiURL)                                                                                   

  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; 
    const desc = jsObject.weather[0].description;  
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc);  
  });

  const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=da65eb66c969087514d2a228682d94b";
  fetch(apiURL)
      .then((response) => response.json())
      .then((jsObject) => {
  
      document.getElementById('currently').textContent = jsObject.weather.description;
      document.getElementById('temperature').textContent = jsObject.main.temp;
      document.getElementById('humidty').textContent = jsObject.main.humidity;
      document.getElementById('windspeed').textContent = jsObject.wind.speed;
  
      getWindChill();
    });
  