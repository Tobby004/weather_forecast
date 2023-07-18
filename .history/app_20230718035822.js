// Extend jQuery UI autocomplete to select suggestion with Tab key
$.extend($.ui.autocomplete.prototype, {
    _isEventTargetInWidget: function(event) {
        const menuElement = this.menu.element[0];
        return event.target === this.element[0] || event.target === menuElement || $.contains(menuElement, event.target);
    }
});

// Get the input element.
const input = document.querySelector('#city');

// Add an event listener to the input element.
input.addEventListener('input', () => {
    const searchTerm = input.value;
    
    // Send a GET request to the server with the current input value as the 'term' query parameter.
    fetch(`http://localhost:3000/search?term=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            // Clear the old autocomplete suggestions.
            $(".ui-autocomplete").empty();
            
            // Create a new autocomplete suggestion for each item in 'data'.
            data.forEach(city => {
                $(".ui-autocomplete").append(`<li class="ui-menu-item">${city}</li>`);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

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
