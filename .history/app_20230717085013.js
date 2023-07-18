// Load city data from JSON file

fetch('http://localhost:8080/worldcities.json')

    .then(response => response.json())
    .then(data => {
        createDatalistOptions('cities', data.map(city => city.city));
    });

// Function to create datalist options
function createDatalistOptions(datalistId, options) {
    const datalist = document.getElementById(datalistId);
    options.forEach(option => {
        const optionElem = document.createElement('option');
        optionElem.value = option;
        datalist.appendChild(optionElem);
    });
    
}

const form = document.getElementById('weatherForm');
const weatherDataDiv = document.getElementById('weatherData');
const API_KEY = '8914952b240f539e5b53255f3f20017b';  // Replace with your OpenWeatherMap API key

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const city = document.getElementById('city').value;
    getWeather(city);
});

function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => displayWeatherData(data));
}

function displayWeatherData(data) {
    if (data.main) {
        const temp = data.main.temp - 273.15;  // Convert from Kelvin to Celsius
        weatherDataDiv.innerHTML = `<h2>${data.name}</h2>
                                    <p>${temp.toFixed(2)}°C</p>
                                    <p>${data.weather[0].description}</p>`;
    } else {
        weatherDataDiv.innerHTML = `<p>Could not fetch weather data for the entered city.</p>`;
    }
}
