import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@blueprintjs/core';

import actions from '../actions';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = { searchText: '' };
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
    return (<div className="search" >
      <h3 className="search-title">Location</h3>
      <div className="pt-input-group .modifier pt-large search-field">
        <span className="pt-icon pt-icon-search" />
        <input
          ref={input => this.input = input}
          className="pt-input"
          type="search"
          placeholder="Search input"
          dir="auto"
          onChange={e => this.setState({ searchText: e.target.value })}
          onKeyPress={this.keyPressHandle.bind(this)}
        />
      </div>
      <Button className="pt-intent-primary" onClick={() => this.props.searchWeather(this.state.searchText)}>Search</Button>
    </div>);
  }

}

Search.defaultProps = {
  weather: {},
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchWeather: (city) => {
			return dispatch(actions.searchWeather(city));
    },
  };
};

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
