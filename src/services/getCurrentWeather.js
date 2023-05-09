import axios from 'axios';
import { kelvinTocelsius } from '../utils/kelvinToCelsius';
import { kelvinToFarenheit } from '../utils/kelvinToFarenheit';
import { getIconById } from '../utils/getIconById';

export const getCurrentWeather = async (latitud, lon) => {
	try {
		const params = {lat: latitud, lon, appid: '1bdc3dc1537b77ae22d0dfa9aba89638'};
		const res = await axios.get( 
			'https://api.openweathermap.org/data/2.5/weather', 
			{
			params,
			}
		)
		const weatherInfo = {
			country: res.data.sys.country,
			city: res.data.name,
			weather: { 
				main: res.data.weather[0].main,
				description: res.data.weather[0].description,
				icon: getIconById (res.data.weather[0].icon),
			},
			temperature: {
				kelvin: res.data.main.temp,
				celsius: kelvinTocelsius(res.data.main.temp),
				farenheit: kelvinToFarenheit(res.data.main.temp),
			},
		}
	return weatherInfo	
	} catch (error) {
		console.error(error);
	}
}