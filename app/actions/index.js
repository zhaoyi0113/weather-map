import axios from 'axios';

const apiKey = '5857f768ce237505cdd0317a964e2747';
const SEARCH_WEATHER = 'SEARCH_WEATHER';
const SEARCH_FORCAST = 'SEARCH_FORCAST';
const DELETE_CITY = 'DELETE_CITY';
const CLEAR_CITIES = 'CLEAR_CITIES';

const searchWeather = (city) => {
	return (dispatch) => {
		return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
		.then((res) => {
			dispatch({type: SEARCH_WEATHER, data: res.data});
			dispatch(searchForcast(city));
		})
		.catch((err) => {
			console.error(err);
			alert('Cant find the city');
		});
	}
};

const searchForcast = (city) => {
	return (dispatch) => {
		return axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
		.then((res) => {
			dispatch({type: SEARCH_FORCAST, data: res.data});
		})
		.catch((err) => {
			console.error(err);
			alert('Cant find the city');
		});
	}
}

const deleteCity = (id) => {
	return {type: DELETE_CITY, id};
};

const clearCities = () => {
	return {type: CLEAR_CITIES}
}

export default { 
	searchWeather,
	deleteCity,
	clearCities,
	SEARCH_WEATHER,
	SEARCH_FORCAST,
	DELETE_CITY,
	CLEAR_CITIES
 };
