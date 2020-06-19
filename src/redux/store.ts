import {applyMiddleware, combineReducers, createStore} from 'redux';
import navReducer from "./reducers/navReducer";
import usersReducer from "./reducers/usersReducer";
import thunkMiddleware from "redux-thunk";

let reducers : any = combineReducers({
    navigation  : navReducer,
    usersReducer
});

let store : any = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;