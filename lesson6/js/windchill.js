function showWindChill() {
    let temp = 45;
    let speed = 10;
    let wind = windChill(temp, speed);
let print = (document.getElementById("outputDiv").innerHTML = "Wind Chill: " + wind.toFixed(2));
  }
  function windChill(tempf, speed) {
    let a = Math.pow(speed, 0.16);
    let calculate = 35.74 + 0.6215 * tempf - 35.75 * a + 0.4275 * tempf * a;
    return calculate;
  }
