//switching to jQuery
const searchHistory = [];
var searchWeather = document.getElementById("searchWeather");
var showHistory = document.getElementById("showHistory");
var city;
var nextFiveDays = document.getElementById("nextFiveDays");
var todayWeather = document.getElementById("todayWeather");
var infoCard = document.querySelector("#infocard");
const rootUrl = "https://api.openweathermap.org";
const APIKey = "a2177dabb6b2705fae8ab52208e93f5c";
const currentCity = "";
const lastSearched = "";

const today = moment().format();

//API
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={APIKey}

let temp = 0;
let city = "";
let humidity = "";
let wind = "";
let x = 0;

searchWeather.addEventListener("click", function (event) {
  console.log("search button clicked");
  x = 0;
  event.preventDefault();
  handleUserInput();
});

const start = () => {
  const savedSearch = JSON.parse(localStorage.getItem("search-history"));
  if (savedSearch != null) {
    var searchArray = savedSearch;
    showSearchHistory(searchArray);
  }
};

const showSearchHistory = (searchArray) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
  }
};
