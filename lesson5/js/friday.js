
function checkDate() {
    var date = new Date();
    console.log(date.getDay());
    if(date.getDay() === 4) {document.getElementById("friday").innerHTML = "Saturday = Preston Pancakes in the Park! <br> 9:00 a.m. Saturday at the city park pavilion.";
    } 
}