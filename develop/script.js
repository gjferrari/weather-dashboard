//switching to jQuery
const searchHistory = [];
var searchWeather = document.getElementById("searchWeather");
var clearHistory = document.getElementById("clearHistory");
var city;
var nextFiveDays = document.getElementById("nextFiveDays");
var todayWeather = document.getElementById("todayWeather");
var infoCard = document.querySelector("#infocard");
const rootUrl = "https://api.openweathermap.org";
const APIKey = "a2177dabb6b2705fae8ab52208e93f5c";
const currentCity = "";
const lastSearched = "";

const today = moment().format();

// const getTodaysWeather = (city) => {
//   const todayWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
//   $.ajax({
//     url: todayWeatherURL,
//     method: "GET",
//   }).then((todayResponse) => {
//     $("#infoCard").css("display", "block");
//     $("cityName").empty();
//     var iconCode = currentResponse.weather[0].icon;
//     var weatherIconURL = `https://openweathermap.org/img/w/${iconCode}.png`;
//   });

//   const currentCity = $(`<h2 id="currentcity">`);
// };

// //event listeners
// $("#searchWeather").on("click", (event) => {
//   event.preventDefault();
//   currentCity = $("#chosenCity").val();
//   getTodaysWeather(event);
// });

// //array for previously stored cities
var oldcities = [];

//API
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={APIKey}

const temp = 0;
const city = "";
const humidity = "";
const wind = "";

searchWeather.addEventListener("click", function (event) {
  console.log("search button clicked");
  event.preventDefault();
  handleUserInput();
});

const start = () => {
  const savedSearch = JSON.parse(localStorage.getItem("search-history"));
};
