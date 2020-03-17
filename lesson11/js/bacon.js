// BACON
const baconbutton = document.querySelector(".bacon");
baconbutton.addEventListener("click", toggleMenu, false);

function toggleMenu( ) {
    document.querySelector(".cheeseburger").classList.toggle("response");
}
// COUNT DOWN
var countDownDate = new Date("April 8, 2020 11:59:59").getTime();
  var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML = "End of Semester: " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "ON TO THE NEXT ONE!!!";
  }
}, 1000); 



