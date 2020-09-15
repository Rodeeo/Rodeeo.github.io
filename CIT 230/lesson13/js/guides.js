const requestedURL = 'https://Rodeeo.github.io/lesson13/guides.json';

fetch(requestedURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); 

        const guides = jsonObject['guides'];

        for (let i = 0; i < guides.length; i++) {
     
            let gname = document.createElement('section');
            let h3name = document.createElement('h3');
            let level = document.createElement('p');
            let title = document.createElement('p');
            let years = document.createElement('p');
            let email = document.createElement('p');
            let bio = document.createElement('p');
           let photo = document.createElement('img');
                     
                h3name.textContent = guides[i].name; 
             //   gname.className =  h2name.textContent;
                level.textContent = "Certification: " + guides[i].level;
                title.textContent = guides[i].title;
                years.textContent = "Years As a Guide: " + guides[i].years;
                email.textContent = "Email: " + guides[i].email;
                bio.textContent = "Bio: " + guides[i].biography;
                photo.className = guides[i].photo;

                photo.setAttribute('src', guides[i].photo);   
                photo.setAttribute('alt', "picture of: " + h3name.textContent);
            
                gname.appendChild(h3name);
                gname.appendChild(photo);
                gname.appendChild(title);
                gname.appendChild(level);
                gname.appendChild(years);
                gname.appendChild(email);
                gname.appendChild(bio);
                

            document.querySelector('div.guides').appendChild(gname);
        
        
        }
    });