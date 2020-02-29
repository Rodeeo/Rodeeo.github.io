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
            
            // events.textContent = "Events:";
            // pickle.appendChild(events);
            // for (let x = 0; x < towns[i].events.length; x++) {
            //     let event = document.createElement('p');
            //     event.className =  events.textContent;
            //     event.textContent = towns[i].events[x];
            //     pickle.appendChild(event);
            // } 
            
            
            document.querySelector('div.toontown').appendChild(pickle);
        }

        }
    });