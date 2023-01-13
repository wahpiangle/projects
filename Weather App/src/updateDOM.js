import { getWeatherData } from './API';

const todayCity = document.querySelector('.city');
const todayIcon = document.querySelector('.weather-icon');
const todayWeatherStatus = document.querySelector('.weather-status');
const todayTemperature = document.querySelector('.temperature');

export async function updateToday(location){
    const weatherData = await getWeatherData(location);
    console.log(weatherData);
    todayCity.textContent = weatherData.location.region;
    todayIcon.src = weatherData.current.condition.icon;
    todayWeatherStatus.textContent = weatherData.current.condition.text;
    todayTemperature.textContent = weatherData.current.temp_c + '°C'; 
}

