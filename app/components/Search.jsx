import React from 'react';
import {connect} from 'react-redux';
import {Button} from '@blueprintjs/core';
import CityWeather from './CityWeather.jsx';

import actions from '../actions';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchText: ''};
  }

  componentDidMount() {
    this.input.focus();
  }

  keyPressHandle(e) {
    if (e.key === 'Enter' && this.state.searchText) {
      this.props.searchWeather(this.state.searchText);
    }
  }

  render() {
    return (
      <div className="main">
        <div className="search">
          <h3 className="search-title">Location</h3>
          <div className="pt-input-group .modifier pt-large search-field">
            <span className="pt-icon pt-icon-search" />
            <input
              ref={input => (this.input = input)}
              className="pt-input"
              type="search"
              placeholder="Search input"
              dir="auto"
              onChange={e => this.setState({searchText: e.target.value})}
              onKeyPress={this.keyPressHandle.bind(this)}
            />
          </div>
          <Button
            className="pt-intent-primary"
            onClick={() => this.props.searchWeather(this.state.searchText)}
          >
            Search
          </Button>
        </div>
        <CityWeather cities={this.props.weather.cities} deleteCity={this.props.deleteCity.bind(this)} />
      </div>
    );
  }
}

Search.defaultProps = {
  weather: {cities: []},
};

const mapDispatchToProps = dispatch => {
  return {
    searchWeather: city => {
      return dispatch(actions.searchWeather(city));
		},
		deleteCity: id => {
			return dispatch(actions.deleteCity(id));
		}
  };
};

const mapStateToProps = state => {
  return {
    weather: state.weather,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
