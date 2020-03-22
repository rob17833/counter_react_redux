import App from './App.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions.js';

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch)
};

const mapStateToProps = (state) => ({
  counter: state
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
