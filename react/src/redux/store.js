import {createStore, applyMiddleware} from 'redux';
// import thunkMiddleware from 'redux-thunk';
import combineReducers from './reducers.js';
import promiseMiddleware from './middleware/promiseMiddleware'

// let store = createStore(combineReducers, applyMiddleware(thunkMiddleware));
let store = createStore(combineReducers, applyMiddleware(promiseMiddleware));
//Redux热替换设置
if (module.hot) {
    module.hot.accept("./reducers", () => {
        const nextCombineReducers = require("./reducers").default;
        store.replaceReducer(nextCombineReducers);
    });
}
export default store;