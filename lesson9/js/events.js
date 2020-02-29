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

            let pickle = document.createElement('section');
            let h2name = document.createElement('h2');
            let events = document.createElement('p');

          
            h2name.textContent = towns[i].name;
            events.textContent = "Events in " + h2name.textContent;
            pickle.appendChild(events);
            for (let x = 0; x < towns[i].events.length; x++) {
                let event = document.createElement('p');
                
                event.className =  events.textContent;
                event.textContent = towns[i].events[x];
                pickle.appendChild(event);
            } 
            
            
            document.querySelector('div.pickle').appendChild(pickle);
        }

        }
    });