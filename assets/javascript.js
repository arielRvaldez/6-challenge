var APIkey = "e5ef4fa9d75ce2035e478b8919ac7928";
var currentCity = "";
var lastCity = "";
var currentweather = document.querySelector('#current-weather')
var fivedayforecast = document.querySelector('#five-day-forecast')
var searchform = document.querySelector('#search-form')
//renderCities();
//getCurrentConditions();

//current weather display//
function getCurrentConditions(event) {
    event.preventDefault();
    console.log('testing')
    let city = $('#search-city').val();
    currentCity = $('#search-city').val();
    //OpenWeather URL with imperial units with JSON//
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=" + APIkey;

    fetch(queryURL)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    displayWeather(data, city);
                });
            }
        }
        )
}

function displayWeather(data, city) {
    renderCurrent(city, data)
}

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
//local storage//
//function .then((response) {
//     saveCity(city);
//     $('#search-error').text("");
//     //current weather icons//
//     var currentWeatherIcon="https://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
//     $('#header-text').text(response.name);

// })

//search button event listener//
//$(document).ready(function(){
//search button*******************************// 
// $("#search-button").on("click", function () {
//   //user inputs city//
//   var searchTerm = $("#search-city").val();
//   $("#search-city").val("");
//   weatherFunction(searchTerm);
//   weatherForecast(searchTerm);
// });

//pulls prior searched city//
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

//when user chooses prior searched city
function weatherFunction(searchTerm) {
    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + "&appid=e5ef4fa9d75ce2035e478b8919ac7928"
    })
}
//select previous searched city//
//history.addEventListener('click', buttonClickHandler);

searchform.addEventListener('submit', getCurrentConditions);
//lists the cities//
//renderCities();
//**currentweather for searched city//
//currentweather(event);
//header for searched city//
