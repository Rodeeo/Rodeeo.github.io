const dayz = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
const monthz = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let today = new Date;
let day = today.getDate()
let dayName = dayz[today.getDay()];
let month = monthz[today.getMonth()];
let year = today.getFullYear();

document.getElementById("footinfo").textContent = `${dayName}, ${day} ${month} ${year}`
