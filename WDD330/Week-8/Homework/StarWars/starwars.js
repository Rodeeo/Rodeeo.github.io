        // Model
            // Return Planet Data as JSON Object
            function getPlanets(url){
                return fetch(url).then((response) =>{
                    if(response.ok){
                        console.log("it's okay"); 
                        return response.json();
                    }
                    if(!response.ok){
                        throw Error(response.error);
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
            }
        // View
            // Create Table Elements that will hold Planet Contents
            function renderPlanets(planetData, planetElement){
                const list = planetElement.children[1];
                list.innerHTML = "";
                // Loop through all the Planets
                planetData.forEach((planet) =>{
                    let row = document.createElement("tr");
                    row.innerHTML= `
                        <td><a href="${planet.url}">${planet.name}</a></td>
                        <td>${planet.climate}</td>
                        <td>${planet.population}</td>
                    `;
                    row.addEventListener("click", (event) =>{
                        event.preventDefault(); 
                        // Function that provides details on planet 
                        getPlanetDetails(planet.url); 
                    });
                    list.appendChild(row); 
                });
            }
            function renderPlanetDetails(planetData) {
                console.log(planetData);
              }
              
        // Controller
            // Make Next and Previous Buttons Scroll Through List
            function showPlanets(url = "https://swapi.dev/api/planets/"){
                getPlanets(url).then((data) =>{
                    const results = data.results; 
                    const planetElement = document.getElementById("planetList");
                    // Function that will will create table elements and fill contents with planet data
                    renderPlanets(results, planetElement);
                    if(data.next){
                        const next = document.getElementById("next");
                        next.onclick = () => {
                            showPlanets(data.next); 
                        };
                    }
                    if(data.previous){
                        const previous = document.getElementById("previous");
                        previous.onclick = () => {
                            showPlanets(data.previous); 
                        };
                    }
                    if(data.first){
                        const first = document.getElementById("first");
                        first.onclick = () => {
                            showPlanets(data.first); 
                        };
                    }
                });
            }
            function getPlanetDetails(url){
                getPlanets(url).then(function (data) {
                    renderPlanetDetails(data);
                });
            }
        showPlanets();  
