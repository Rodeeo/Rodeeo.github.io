const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); 

    var towns = jsonObject['towns'];
    console.log(towns);
  
        x = towns[4];
        document.getElementById("demo").innerHTML = x;      
    }
    )