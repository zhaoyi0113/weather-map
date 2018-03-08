import {combineReducers} from 'redux';
import actions from '../actions';
import _ from 'lodash';

const initState = {cities: []};

const queryWeather = (state, action) => {
  switch (action.type) {
    case actions.SEARCH_WEATHER:
      const cities = state.cities;
      if (!_.find(cities, e => e.id === action.data.id)) {
        cities.push(action.data);
      }
      return {...state, cities};
    case actions.SEARCH_FORCAST:
      const fcities = state.cities;
			const city = _.find(fcities, e => e.id === action.data.city.id);
			city.forcast = action.data.list;
			return {...state, cities: fcities};
		case actions.DELETE_CITY:
			const ccities = state.cities;
			_.remove(ccities, c => c.id === action.id);
			return {...state, cities: ccities};
		case actions.CLEAR_CITIES:
			return {...state, cities: []};
    default:
      return initState;
  }
};

export default combineReducers({weather: queryWeather});
