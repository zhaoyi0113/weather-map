import React from 'react';
import {connect} from 'react-redux';

import Search from './Search.jsx';
import {Button} from '@blueprintjs/core';
import actions from '../actions';

class Weather extends React.Component {
  render() {
    return (
      <div style={styles.root}>
        <Search />
        {this.props.weather.cities.length > 0 ? (
          <Button
            style={{width: '50px', alignSelf: 'center'}}
            onClick={() => this.props.clearCities()}
          >
            Clear
          </Button>
        ) : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearCities: () => {
      return dispatch(actions.clearCities());
    },
  };
};

const mapStateToProps = state => {
  return {
    weather: state.weather,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
};
