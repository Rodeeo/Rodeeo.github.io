const links = [
    {
      label: "Week 2 notes",
      url: "https://rodeeo.github.io/WDD330/Week-2/notes2.html"
    },
    {
      label: "Week 3 notes",
      url: "https://rodeeo.github.io/WDD330/Week-3/notes3.html"
    },
    {
      label: "Week 4 notes",
      url: "https://rodeeo.github.io/WDD330/Week-4/notes4.html"
    },
    {
      label: "Week 5 notes",
      url: "https://rodeeo.github.io/WDD330/Week-5/notes5.html"
    },
    {
      label: "Week 6 notes",
      url: "https://rodeeo.github.io/WDD330/Week-6/notes6.html"
    },
    {
      label: "Week 7 notes",
      url: "https://rodeeo.github.io/WDD330/Week-7/notes7.html"
    },
    {
      label: "Week 8 notes",
      url: "https://rodeeo.github.io/WDD330/Week-8/notes8.html"
    },
    {
      label: "Week 9 notes",
      url: "https://rodeeo.github.io/WDD330/Week-9/notes9.html"
    },
    {
      label: "Week 10 notes",
      url: "https://rodeeo.github.io/WDD330/Week-10/notes10.html"
    },
    {
      label: "Challenge 1 - To Do",
      url: "https://rodeeo.github.io/WDD330/Week-6/Todo/todo.html"
    },
    {
      label: "Challenge 2 - Beatbox",
      url: "https://rodeeo.github.io/WDD330/beatbox/index.html"
    }
  ]
  links.forEach(element => {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', element.url);
    ul.appendChild(li).appendChild(a).innerHTML = element.label;
  });

  const beams = [
    { id:"beam0", class:"beam"},
    { id:"beam1", class:"beam"},
    { id:"beam2", class:"beam"},
    { id:"beam3", class:"beam"},
    { id:"beam4", class:"beam"},
    { id:"beam5", class:"beam"},
    { id:"beam6", class:"beam"},
    { id:"beam7", class:"beam"}
    ]
    
beams.forEach(element => {
  let laser = document.querySelector('.nada');
  let beam = document.createElement("div");
  beam.setAttribute("id", element.id);
  beam.setAttribute("class", element.class);
  laser.appendChild(beam)
});
