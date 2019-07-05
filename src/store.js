import React from 'react';
import { createStore, combineReducers,applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from 'redux-thunk';
import storage from "redux-persist/lib/storage";
import empReducer from './store/reducer/employee';
const rootReducer = combineReducers({
  emp: empReducer
})

const persistConfig = {
  key: 'root',
  storage,
}
const logger = store => {
	return next =>{
		return action => {
			console.log('[Middleware] dispatching', action)
			const result = next (action);
			console.log('[Middleware] next state', store.getState())
			return result;
		}
	}
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(logger,thunk)))
  let persistor = persistStore(store)
  return { store, persistor }
}