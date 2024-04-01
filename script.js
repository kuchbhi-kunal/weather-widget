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
    var city = data.name;

    // Set image source URL based on the city
    var imageUrl;
    switch(city) {
        case 'Mumbai':
            imageUrl = 'mumbai.png';
            break;
        case 'Bengaluru':
            imageUrl = 'bangalore.png';
            break;
        case 'Delhi':
            imageUrl = 'delhi.png';
            break;
        case 'Gandhinagar':
            imageUrl = 'gandhinagar.png';
            break;
        default:
            imageUrl = 'default.png';
            break;
    }

    // Set background image URL based on the city
    var bgGifUrl;
    switch(city) {
        case 'Mumbai':
            bgGifUrl = 'perfect.gif';
            break;
        case 'Bengaluru':
            bgGifUrl = 'perfect1.gif';
            break;
        case 'Delhi':
            bgGifUrl = 'perfect2.gif';
            break;
        case 'Gandhinagar':
            bgGifUrl = '8.gif';
            break;
        default:
            bgGifUrl = 'default.gif';
            break;
    }

    weatherInfoDiv.style.background = `url('${bgGifUrl}') no-repeat center center`;

    weatherInfoDiv.innerHTML = `
        <div>
            <h2 class="cityname">${data.name}, ${data.sys.country}</h2>
            <p class="temp">${Math.round(data.main.temp)}</p>
        </div>
        <div class="gateway"><img src="${imageUrl}" loading="lazy"/></div>
        <div class="tempfooter">
            <p>H : ${highestTemp}°C</p><span>
            <p>L : ${lowestTemp}°C</p>
        </div>
    `;
}

function changeCity() {
    var citySelector = document.getElementById("citySelector");
    var selectedCity = citySelector.value;
    fetchWeatherData(selectedCity);
}
