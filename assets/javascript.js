var APIkey = "e5ef4fa9d75ce2035e478b8919ac7928";
var currentCity = "";
var foreCast = "";
var currentweather = document.querySelector('#current-weather')
var fivedayforecast = document.querySelector('#five-day-forecast')
var searchform = document.querySelector('#search-form')

//current weather display and fetch//
function getCurrentConditions(event) {
    event.preventDefault();
    let city = $('#search-city').val();
    currentCity = $('#search-city').val();
    //OpenWeather URL with imperial units with JSON//
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=" + APIkey;

    fetch(queryURL)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
            then(function (data) {
                displayWeather(data, city);
                });
            }

function displayWeather(data, city) {
    renderCurrent(city, data)
}

var renderCurrent= [];
function renderCurrent(city, weather) {
    var temp = weather.main.temp;
    var wind = weather.wind.speed;
    var humidity = weather.main.humidity;
    console.log(temp, wind, humidity);
    var card = document.createElement('div');
    var cardBody = document.createElement('div');
    var heading = document.createElement('h2');
    var tempEl = document.createElement('p');
    var windEl = document.createElement('p');
    var humidityEl = document.createElement('p');
    card.setAttribute('class', 'card');
    cardBody.setAttribute('class', 'card-body');
    card.append(cardBody);

    heading.setAttribute('class', 'h3 card-title');
    tempEl.setAttribute('class', 'card-text');
    windEl.setAttribute('class', 'card-text');
    humidityEl.setAttribute('class', 'card-text');

    heading.textContent = `${city} `;
    tempEl.textContent = `Temp: ${temp}°F`;
    windEl.textContent = `Wind: ${wind} MPH`;
    humidityEl.textContent = `Humidity: ${humidity} %`;
    cardBody.append(heading, tempEl, windEl, humidityEl);
    currentweather.innerHTML= "";
    currentweather.append(card);
}
//5-day forecast display//
function getforecast(event) {
    event.preventDefault();
    let city = $('#search-city').val();
    foreCast = $('#search-city').val();
    //OpenWeather URL with imperial units with JSON//
    let queryURL = "https://api.openweathermap.org/data/2.5/forecast?" + lat=30.27061 + lon=-97.75206 + "&units=imperial" + limit=5 +"&APPID=" + APIkey;

    fetch(queryURL)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                return response.json();
            }
            then(function (data) {
                console.log(data);
                displayWeather(data, city);
            });
        })

function displayWeather(data, city) {
    renderForecast(city, data)
}

var renderForecast= [];
function renderForecast(city, weather) {
    for (let i = 0; i < weather.list.length; i++) {
    var temp = weather.main.temp;
    var wind = weather.wind.speed;
    var humidity = weather.main.humidity;
    console.log(temp, wind, humidity);
    var card = document.createElement('div');
    var cardBody = document.createElement('div');
    var heading = document.createElement('h2');
    var tempEl = document.createElement('p');
    var windEl = document.createElement('p');
    var humidityEl = document.createElement('p');
    card.setAttribute('class', 'card');
    cardBody.setAttribute('class', 'card-body');
    card.append(cardBody);

    heading.setAttribute('class', 'h3 card-title');
    tempEl.setAttribute('class', 'card-text');
    windEl.setAttribute('class', 'card-text');
    humidityEl.setAttribute('class', 'card-text');

    heading.textContent = `${city} `;
    tempEl.textContent = `Temp: ${temp}°F`;
    windEl.textContent = `Wind: ${wind} MPH`;
    humidityEl.textContent = `Humidity: ${humidity} %`;
    cardBody.append(heading, tempEl, windEl, humidityEl);
    fivedayforecast.innerHTML= "";
    fivedayforecast.append(card);
}
//local storage//
function addToLocalStorageArray(foreCast, city) {
    //retrieve the existing array from local storage
    var existing =localStorage.getItem(saveCity);
    //if no existing data, create an array otherwise convert storage to array//
    existing = existing ? JSON.parse(existing) : [];
    //add new city to array//
    existing.push(city);
    //save back to local storage//
    localStorage.setItem(key, JSON.stringify(existing));
}

//pulls prior searched city//
var history = [];
var history = JSON.parse(localStorage.getItem("city-results")) || [];

//creates row for searched cities
for (var i = 0; i < history.length; i++) {
    createRow(history[i]);
}
//lists prior searched cities in order
function createRow(text) {
    var listItem = $("<li>").addClass("list-group-item").text(text);
    $(".history").append(listItem);
}
$(".history").on("click", "li", function () {
    weatherFunction($(this).text());
    weatherForecast($(this).text());
});
//eventlistener//
searchform.addEventListener('submit', getCurrentConditions)
}
}