const btn = document.getElementById("btn-submit");
const inputTemperature = document.getElementById("input-temperature");
const celcius = document.getElementById("celcius");
const farenheit = document.getElementById("farenheit");

const result = document.getElementById("result");
const radioClass = document.getElementsByClassName("radioClass");

const convertToCelcius = (temperature) => {
  return (temperature - 32) * (5 / 9);
};

const convertFarenhait = (temperature) => {
  return (temperature * 9) / 5 + 32;
};

const mainConvert = () => {
  let temperatureValue = inputTemperature.value;
  temperatureValue = Number(temperatureValue);
  result.style.display = "block";
  if (celcius.checked) {
    temperatureValue = convertToCelcius(temperatureValue);
    result.innerHTML = temperatureValue.toFixed(2) + "°C";
  } else {
    temperatureValue = convertFarenhait(temperatureValue);
    result.innerHTML = temperatureValue.toFixed(2) + "°F";
  }
};

btn.addEventListener("click", mainConvert);
