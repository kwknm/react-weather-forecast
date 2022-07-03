import {API_URL} from '../constants'

class ApiService {
    async getWeatherForCity(city) {
        try {
            const response = await fetch(`${API_URL}/weather/${city})`)
            const json = await response.json();
            let cityNormalized = city;
            cityNormalized = city.charAt(0).toUpperCase() + city.substr(1).toLowerCase();
            json.city = cityNormalized;
            return json;
        } catch (err) {
            console.error(err);
            return null;   
        }
    }
}

export default new ApiService();