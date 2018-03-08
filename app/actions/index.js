import axios from 'axios';

const apiKey = '5857f768ce237505cdd0317a964e2747';
const SEARCH_WEATHER = 'SEARCH_WEATHER';

const mockData = {"message":"accurate","cod":"200","count":1,"list":[{"id":2643743,"name":"London","coord":{"lat":51.5085,"lon":-0.1258},"main":{"temp":7,"pressure":1012,"humidity":81,"temp_min":5,"temp_max":8},"dt":1485791400,"wind":{"speed":4.6,"deg":90},"sys":{"country":"GB"},"rain":null,"snow":null,"clouds":{"all":90},"weather":[{"id":701,"main":"Mist","description":"mist","icon":"50d"},{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}]}]};

const searchWeather = (city) => {
	return (dispatch) => {
		return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
		.then((res) => {
			dispatch({type: SEARCH_WEATHER, data: res.data});
		})
		.catch((err) => {
			console.error(err);
			alert('Cant find the city');
		});
	}
};

export default { 
	searchWeather,
	SEARCH_WEATHER
 };
