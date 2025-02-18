// Get API key from environment variable or replace with your API key
const API_KEY = 'c7a2718f27444c57b0d86535920ba32a';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Handle search form submission
const searchForm = document.getElementById('search-form');
if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const city = document.getElementById('city-input').value;
        window.location.href = `weather.html?city=${encodeURIComponent(city)}`;
    });
}

// Function to get weather data
async function getWeatherData(city) {
    try {
        const response = await fetch(
            `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        if (!response.ok) {
            throw new Error('City not found');
        }
        return await response.json();
    } catch (error) {
        alert(error.message);
        window.location.href = 'index.html';
    }
}

// Function to get forecast data
async function getForecastData(city) {
    try {
        const response = await fetch(
            `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
        );
        if (!response.ok) {
            throw new Error('City not found');
        }
        return await response.json();
    } catch (error) {
        alert(error.message);
        window.location.href = 'index.html';
    }
}

// Update weather page
async function updateWeatherPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get('city');
    
    if (!city) return;
    
    const data = await getWeatherData(city);
    
    document.getElementById('city-name').textContent = data.name;
    document.getElementById('temperature').textContent = Math.round(data.main.temp);
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = `${data.main.humidity}%`;
    document.getElementById('wind-speed').textContent = `${data.wind.speed} m/s`;
    document.getElementById('pressure').textContent = `${data.main.pressure} hPa`;
    document.getElementById('weather-icon').src = 
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    
    const date = new Date();
    document.getElementById('date').textContent = date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Update forecast page
async function updateForecastPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get('city');
    
    if (!city) return;
    
    const data = await getForecastData(city);
    document.getElementById('forecast-city').textContent = 
        `5-Day Forecast for ${data.city.name}`;
    
    const forecastContainer = document.getElementById('forecast-container');
    const dailyForecasts = data.list.filter(item => 
        item.dt_txt.includes('12:00:00')
    ).slice(0, 5);
    
    forecastContainer.innerHTML = dailyForecasts.map(forecast => `
        <div class="forecast-card">
            <div class="forecast-date">
                ${new Date(forecast.dt * 1000).toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric'
                })}
            </div>
            <img 
                src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" 
                alt="Weather icon"
            >
            <div class="temperature">
                ${Math.round(forecast.main.temp)}°C
            </div>
            <div class="description">
                ${forecast.weather[0].description}
            </div>
        </div>
    `).join('');
}

// Initialize pages
if (window.location.pathname.includes('weather.html')) {
    updateWeatherPage();
} else if (window.location.pathname.includes('forecast.html')) {
    updateForecastPage();
}