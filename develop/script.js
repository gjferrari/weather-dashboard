console.log("testing");
var searchWeather = document.getElementById("searchWeather");
var clearHistory = document.getElementById("clearHistory");
var APIKey = "a2177dabb6b2705fae8ab52208e93f5c";
var city;
var nextFiveDays = document.getElementById("nextFiveDays");
var todayWeather = document.getElementById("todayWeather");
var infoCard = document.querySelector("#infocard");

//array for previously stored cities
var oldcities = [];

//API
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={APIKey}

let temp = 0;
let city = "";
let humidity = "";
let wind = "";
let x = 0;

searchWeather.addEventListener("click", function (event) {
  x = 0;
  event.preventDefault();
  handleUserInput();
});

const start = () => {
  const savedSearch = JSON.parse(localStorage.getItem("search-history"));
};
