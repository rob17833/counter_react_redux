import React from 'react';
import ReactDOM from 'react-dom';
import CounterContainer from './CounterContainer.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import counterReducer from './reducers.js';
import * as serviceWorker from './serviceWorker';

const store = createStore(counterReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
		    <CounterContainer />
		</React.StrictMode>
	</Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
