var APIkey = "e5ef4fa9d75ce2035e478b8919ac7928";
var currentCity = "";
var lastCity = "";

//current weather display//
var getCurrentConditions = (event) => {
    let city = $('#search-city').val();
    currentCity= $('#search-city').val();
    //OpenWeather URL with imperial units with JSON//
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=" + APIkey;
    fetch(queryURL)
    .then((response) => {
        return response.json();
    })
    //local storage//
    .then((response) => {
        saveCity(city);
        $('#search-error').text("");
        //current weather icons//
        var currentWeatherIcon="https://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
        //timezones//
        let currentTimeUTC = response.dt;
        let currentTimeZoneOffset = response.timezone;
        let currentTimeZoneOffsetHours = currentTimeZoneOffset / 60 / 60;
        //moment.js//
        var currentMoment = moment.unix(currentTimeUTC).utc().utcOffset(currentTimeZoneOffsetHours);
        //lists the cities//
        renderCities();
        //5day forecast for searched city//
        get5DayForecast(event);
        //header for searched city//
        $('#header-text').text(response.name);
        //HTML for searched results//
        var currentWeatherHTML = 
            <h3>${response.name} ${currentMoment.format("(MM/DD/YY)")}<><img src="${currentWeatherIcon}">
            </h3>
            <ul class="list-unstyled">
            <li>Temperature: ${response.main.temp}&#8457;</li>
            <li>Humidity: ${response.main.humidity}%</li>
            <li>Wind Speed: ${response.wind.speed} mph</li>
            <li id="uvIndex">UV Index:</li>
        </ul>;

        $('#current-weather').html(currentWeatherHTML);
        let latitude = response.coord.lat;
        let longitude = response.coord.lon;
        let uvQueryURL = "http://api.openweathermap.org/geo/1.0/direct?q="
    }

    }



