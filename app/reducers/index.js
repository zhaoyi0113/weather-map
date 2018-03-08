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
    default:
      return initState;
  }
};

export default combineReducers({weather: queryWeather});
