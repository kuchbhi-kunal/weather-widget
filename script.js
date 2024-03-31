document.addEventListener("DOMContentLoaded", function() {
    fetchWeatherData("Mumbai");
});

function fetchWeatherData(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=abcadd86d95f1f42ad8f35ce14234615&units=metric`)
    .then(response => response.json())
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {
        console.log("Error fetching weather data:", error);
        alert("Error fetching weather data. Please try again later.");
    });
}

function displayWeather(data) {
    var weatherInfoDiv = document.getElementById("weatherInfo");
    var highestTemp = Math.round(data.main.temp_max);
    var lowestTemp = Math.round(data.main.temp_min);
    weatherInfoDiv.innerHTML = `
        <div>
            <h2 class="cityname">${data.name}, ${data.sys.country}</h2>
            <p class="temp">${Math.round(data.main.temp)}</p>
        </div>
        <div class="gateway"><img src="gateway.png"/></div>
        <div class="tempfooter">
            <p>H : ${highestTemp}°C</p><span>
            <p>L : ${lowestTemp}°C</p>
        </div>
    `;
}

