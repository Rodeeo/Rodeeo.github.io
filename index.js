var lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

const options = {year: 'numeric'};
document.getElementById('currentYear').textContent = new Date().toLocaleDateString('en-US', options);