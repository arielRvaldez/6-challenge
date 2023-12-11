var APIkey = "e5ef4fa9d75ce2035e478b8919ac7928";
var currentCity = "";
var lastCity = "";

//current weather display//
var getCurrentConditions = (event) => {
    let city = $('#search-city').val();
    currentCity= $('#search-city').val();
    //OpenWeather URL with imperial units//
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

    }

    }



