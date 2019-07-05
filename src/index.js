import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'; 

import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import empReducer from './store/reducer/employee';
import configureStore from "./store";
import { PersistGate } from "redux-persist/lib/integration/react";
// const rootReducer = combineReducers({
//   emp: empReducer
// })


const { store, persistor } = configureStore();

//const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger,thunk)));

ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<Router>
				<App />
			</Router>
		</PersistGate>
	</Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
