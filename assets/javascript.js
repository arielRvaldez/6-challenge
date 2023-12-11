var APIkey = "e5ef4fa9d75ce2035e478b8919ac7928";
var currentCity = "";
var lastCity = "";
var currentweather =document.querySelector('#current-weather')
var fivedayforecast =document.querySelector('#5day-forecast')

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
        //lists the cities//
        renderCities();
        //**currentweather for searched city//
        currentweather(event);
        //header for searched city//
        $('#header-text').text(response.name);
    )}
    
    $(document).ready(function(){
        //search button//
        $("#search-button").on("click", function () {
          //get value in input search-value.
          var searchTerm = $("#search-city").val();
          //empty input field.
          $("#search-city").val("");
          weatherFunction(searchTerm);
          weatherForecast(searchTerm);
        });


