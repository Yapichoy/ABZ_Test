import {applyMiddleware, combineReducers, createStore} from 'redux';
import navReducer from "./reducers/navReducer";

let reducers : any = combineReducers({
    navigation: navReducer
});

let store : any = createStore(reducers);

export default store;