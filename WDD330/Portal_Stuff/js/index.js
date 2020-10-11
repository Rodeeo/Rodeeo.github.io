var lastMod = document.lastModified;
document.getElementById('lastMod').textContent = lastMod;

const update = {year:'numeric'};
document.getElementById('currentYear').textContent = new Date().toLocaleDateString('en-US', update);
