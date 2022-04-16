import request from "./request";

const weather = () => {
    const _urlWeatherapi = 'http://api.weatherapi.com/v1/current.json?';
    const _WeatherapiKey = 'key=a0a6a00877e042d2b87153917221702';
    const _urlWeatherbit = 'https://api.weatherbit.io/v2.0/forecast/daily?city='
    const _WeatherBitKey = 'key=184b591340514f6ebfbc763b399fb404'

    const getTodayForecast = async (city) => {
        try {
            if (city.toLowerCase() === 'санкт-петербург' || city.toLowerCase() === 'санкт петербург') {
                city = 'Saint Petersburg';
            }

            const res = await request(_urlWeatherapi + _WeatherapiKey + '&q=' + city + '&aqi=no');
            return res;
        }
        catch (e) {

        }
    }
    
    const getWeekForecast = async (city) => {
        try {
            const res = await request(_urlWeatherbit + city + '&days=7&' + _WeatherBitKey);

            return res;
        }
        catch (e) {

        }
    }

    return {getTodayForecast, getWeekForecast};
}

export default weather;