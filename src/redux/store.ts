import {applyMiddleware, combineReducers, createStore} from 'redux';
import navReducer from "./reducers/navReducer";
import usersReducer from "./reducers/usersReducer";

let reducers : any = combineReducers({
    navigation  : navReducer,
    usersReducer
});

let store : any = createStore(reducers);

export default store;