import React from 'react';
import { connect } from 'react-redux';

import Search from './Search.jsx';

class Weather extends React.Component {
	render(){
		return <div style={styles.root}>
			<Search />
		</div>
	}
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Weather);

const styles = {
	root: {
		display: 'flex',

	}
}