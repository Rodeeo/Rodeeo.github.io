const apiURL2 = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=a05c6e077e52629ff95f52d46902a8de";
fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObject) => {


    let d = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let n = 1;
    for (let day of jsObject.list) {
        if (day.dt_txt.includes("18:00:00")) {
            let y = new Date(day.dt_txt);
            let x = "day" + n;
            const loadimage = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
            document.getElementById(x).textContent = d[y.getDay()];
            document.getElementById(`${x}_temp`).textContent = day.main.temp;
            document.getElementById(`${x}_image`).setAttribute('src', loadimage); 
            document.getElementById(`${x}_image`).setAttribute('alt', day.weather[0].description);
            n++;
        }
    }
}); 