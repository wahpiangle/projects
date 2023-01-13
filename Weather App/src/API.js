export async function getWeatherData(location){
    if (location == "" || location == undefined || location == null){
        location = "Kuala Lumpur";
    }
    const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=${location}`,
        {
            mode: 'cors',
        }
    );
    //use of .json instead of JSON.parse for promise
    const weatherData = await response.json();
    return weatherData;
}

