function displaySearchCityAPI(response) {
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city.toUpperCase();
}
function displayTemperatureAPI(response) {
  let currentTemp = Math.round(response.data.temperature.current);
  let tempElement = document.querySelector("#main-temp");
  tempElement.innerHTML = currentTemp;
}

let cityInput = document.querySelector(".city-form");
cityInput.addEventListener("submit", function (event) {
  event.preventDefault();
  let searchElement = document.querySelector("#searchCity");
  let city = searchElement.value;
  let apiKey = "oaff0b06238ce15e1bda3c4dt5f4a7ba";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiURL).then(displaySearchCityAPI);
  axios.get(apiURL).then(displayTemperatureAPI);
});

function displayCurrentDateTime(date) {
  let days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  // let currentMonth = months[date.getMonth()];
  // let currentDate = date.getDate();
  let currentMinute = date.getMinutes();
  let currentHour = date.getHours();

  let formattedDate = `${currentDay} | ${currentHour}:${currentMinute}`;

  let dateHeading = document.querySelector("#dateTime");
  dateHeading.innerHTML = `${formattedDate}`;
}

let currentTime = new Date();
displayCurrentDateTime(currentTime);

// function showCelsius(event) {
//   event.preventDefault();
//   let temp = document.querySelector("#main-temp");
//   let farenheightLink = document.querySelector("#farenheight");
//   let celsiusLink = document.querySelector("#celsius");
//   temp.innerHTML = 17;
//   farenheightLink.style.color = "#79c5e6";
//   celsiusLink.style.color = "#556f8c";
// }

// function showFarenheight(event) {
//   event.preventDefault();
//   let temp = document.querySelector("#main-temp");
//   let farenheightLink = document.querySelector("#farenheight");
//   let celsiusLink = document.querySelector("#celsius");

//   temp.innerHTML = 63;
//   farenheightLink.style.color = "#556f8c";
//   celsiusLink.style.color = "#79c5e6";
// }

// function onClick(event) {}

// let celsius = document.querySelector("#celsius");
// celsius.addEventListener("click", showCelsius);

// let farenheight = document.querySelector("#farenheight");
// farenheight.addEventListener("click", showFarenheight);
