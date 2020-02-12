function showWindChill() {
  const temp = 51;
  const speed = 10;
  const high = (temp + 10);
  document.getElementById("pHigh").innerHTML = "High: " + high + "˚";
  document.getElementById("pTemp").innerHTML = "Current Temp: " + temp + "˚";
  document.getElementById("pHumid").innerHTML = "Humidity: 0%";
  document.getElementById("pSpeed").innerHTML = "Wind speed: " + speed + "mph";

  if (temp <= 50 && speed > 3) {
    const wind = windChill(temp, speed);
    document.getElementById("pWind").innerHTML = "Wind Chill: " + wind.toFixed(2) + "˚";
  }
  else { 
    document.getElementById("pWind").innerHTML = "Wind Chill: N/A";
  } 
}
function windChill(tempf, speed) {
  const a = Math.pow(speed, 0.16);
  const calculate = 35.74 + 0.6215 * tempf - 35.75 * a + 0.4275 * tempf * a;
  return calculate;
}
