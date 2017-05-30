import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import ProgressReducer from './ProgressReducer.js'
const thunk = store => next => action => 
	typeof action === 'function' ?
		action(store.dispatch, store.getState) :
		next(action);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const storeCreator = (initialState) => createStore(combineReducers({
	loading: ProgressReducer
}), initialState, composeEnhancers(applyMiddleware(thunk)));

const store = storeCreator();

export default store;