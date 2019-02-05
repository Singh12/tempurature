import * as ELEMEMTS from '../external/elements.js';
import {Http} from '../external/http.js';
import {WeatherData, WEATHER_PROXY_HEANDLER} from '../external/weather-data.js';
const APP_ID = '6086a3d333c7f24106c4c0a6ffa1a8ee';
ELEMEMTS.ELEMENT_SERACH_BUTTON.addEventListener("click", searchWeather);

function searchWeather() {
    // Fetch user input
    const CITY_NAME = ELEMEMTS.ELEMENT_SERACH_CITY.value.trim();
    if (CITY_NAME.length == 0) {
        console.log('Please enter City name');
    }
   const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + CITY_NAME + '&units=metric&appid=' + APP_ID;
   Http.fetchUrl(url).then(
       data => {
        console.log(data);
           const WEATHER_DATA = new WeatherData(CITY_NAME,data.weather[0].description.toUpperCase());
           const WEATHER_PROXY = new Proxy(WEATHER_DATA, WEATHER_PROXY_HEANDLER);
           WEATHER_PROXY.temperature = data.main.temp;
       }
   ).catch(
       error => console.log(error)
   );
}
