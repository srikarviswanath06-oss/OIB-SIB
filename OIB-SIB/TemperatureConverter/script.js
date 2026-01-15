function convertTemp() {
  let temp = document.getElementById("tempInput").value;
  let unit = document.getElementById("unit").value;
  let result = document.getElementById("result");

  if (temp === "") {
    result.innerText = "Please enter a temperature value.";
    result.style.color = "red";
    return;
  }

  temp = Number(temp);
  let converted;

  if (unit === "celsius") {
    converted = (temp * 9/5) + 32;
    result.innerText = converted.toFixed(2) + " °F";
  }

  else if (unit === "fahrenheit") {
    converted = (temp - 32) * 5/9;
    result.innerText = converted.toFixed(2) + " °C";
  }

  else if (unit === "kelvin") {
    converted = temp - 273.15;
    result.innerText = converted.toFixed(2) + " °C";
  }

  result.style.color = "green";
}

