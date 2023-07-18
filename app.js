// Set up autocomplete with a function as the source
$("#city").autocomplete({
    source: function(request, response) {
        const searchTerm = request.term;
        const API_KEY = process.env.OPENWEATHERMAP_API_KEY;  // Retrieve API key from environment variable

        // Send a GET request to the OpenWeatherMap API to search for cities based on the partial name
        fetch(`https://api.openweathermap.org/data/2.5/find?q=${searchTerm}&type=like&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                // Extract city names from the API response and pass them to the response callback
                const cityNames = data.list.map(city => city.name);
                response(cityNames);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
});

const form = document.getElementById('weatherForm');
const weatherDataDiv = document.getElementById('weatherData');
const API_KEY = process.env.OPENWEATHERMAP_API_KEY;  // Retrieve API key from environment variable

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
