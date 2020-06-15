import {applyMiddleware, combineReducers, createStore} from 'redux';
let reducers : any = combineReducers({});
let store : any = createStore(reducers);

export default store;