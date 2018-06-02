import {createStore, applyMiddleware} from 'redux';
// import thunkMiddleware from 'redux-thunk';
import combineReducers from './reducers.js';
import promiseMiddleware from './middleware/promiseMiddleware'

// let store = createStore(combineReducers, applyMiddleware(thunkMiddleware));
let store = createStore(combineReducers, applyMiddleware(promiseMiddleware));

export default store;