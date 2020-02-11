function showWindChill() {
  const temp = 50;
  const speed = 10;

  if (temp <= 50 && speed > 3) {
    const wind = windChill(temp, speed);
    document.getElementById("outputDiv").innerHTML = "Wind Chill: " + wind.toFixed(2);
  }
  else { 
    document.getElementById("outputDiv").innerHTML = "Wind Chill: N/A";
  } 
}
function windChill(tempf, speed) {
  const a = Math.pow(speed, 0.16);
  const calculate = 35.74 + 0.6215 * tempf - 35.75 * a + 0.4275 * tempf * a;
  return calculate;
}
 
