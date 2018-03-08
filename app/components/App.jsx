import React from 'react';
import { connect } from 'react-redux';

import '../assets/scss/main.scss';
import Search from './Search.jsx';
import Weather from './Weather.jsx';

const App = () => {
  return (
    <div className="root">
      <Weather />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(App);
