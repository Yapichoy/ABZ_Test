import {applyMiddleware, combineReducers, createStore} from 'redux';
import navReducer from "./reducers/navReducer";
import usersReducer from "./reducers/usersReducer";
import positionsReducer from "./reducers/positionsReducer";
import thunkMiddleware from "redux-thunk";
import registrationReducer from "./reducers/registrationReducer";

let reducers : any = combineReducers({
    navigation  : navReducer,
    usersReducer,
    positionsReducer,
    registrationReducer
});

let store : any = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;