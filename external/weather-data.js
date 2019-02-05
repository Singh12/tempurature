export class WeatherData {
    constructor(cityName, description) {
        this.cityName = cityName;
        this.description = description;
        this.tempreture = '';
    } 
}

export const WEATHER_PROXY_HEANDLER = {
    get: function(target, propert) {
        return Reflect.get(target, propert);
    },
    set: function(target, propert, value) {
        const newValue = (value * 1.8 + 32).toFixed(2) + 'F.';
        return Reflect.set(target, propert, newValue);
    }
}