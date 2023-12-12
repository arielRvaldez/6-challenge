var APIkey = "e5ef4fa9d75ce2035e478b8919ac7928";
var currentCity = "";
var lastCity = "";
var currentweather =document.querySelector('#current-weather')
var fivedayforecast =document.querySelector('#5day-forecast')
renderCities();
getCurrentConditions();

//current weather display//
var getCurrentConditions = function (event) {
    event.preventDefault();

    let city = $('#search-city').val();
    currentCity= $('#search-city').val();
    //OpenWeather URL with imperial units with JSON//
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=" + APIkey;

    fetch(queryURL)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    displayCities(data, city);
                });
            }
    }
    //local storage//
    function .then((response) {
        saveCity(city);
        $('#search-error').text("");
        //current weather icons//
        var currentWeatherIcon="https://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
        $('#header-text').text(response.name);
        
    })

    //search button event listener//
    $(document).ready(function(){
        //search button*******************************// 
        $("#search-button").on("click", function () {
          //user inputs city//
          var searchTerm = $("#search-city").val();
          $("#search-city").val("");
          weatherFunction(searchTerm);
          weatherForecast(searchTerm);
        });

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
        $.ajax ({
          type: "GET",
          url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + "&appid=e5ef4fa9d75ce2035e478b8919ac7928"
        })
    
    //select previous searched city//
    history.addEventListener('click', buttonClickHandler);
    

    //lists the cities//
    renderCities();
    //**currentweather for searched city//
    currentweather(event);
    //header for searched city//
