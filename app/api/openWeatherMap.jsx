var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=ba02317420a71b482c575129ae75f584&units=metric'; 
 
module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location); 
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message); 
            } else {
                return res.data.main.temp; 
            }
        }, function (res) {
            throw new Error(res.data.message); 
        });
    }
}