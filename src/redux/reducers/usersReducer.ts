// @ts-ignore
import {getUsers} from "../../api/api";

const SET_USERS = "SET_USERS";
const LOADING   = "LOADING";
const LOADED    = "LOADED";

let initialState : any = {
    users : [],
    page: 0,
    total_pages: 0,
    total_users: 0,
    count: 0,
    links: {
        next_url: "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5",
        prev_url: null
    },
    is_loading: false
};

let usersReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case SET_USERS:
            state = {
                ...state, users: [...state.users, ...action.data.users], page: action.data.page, total_pages: action.data.total_pages,
                total_users: action.data.total_users, count: action.data.count, links: {...action.data.links}
            }
            break;
        case LOADING:
            state = {...state, is_loading: true };
            break;

        case LOADED:
            state = {...state, is_loading: false };
            break;
    }
    return state;
};

export const setUsersThunkCreator = (nextUrl:string) => (dispatch:any) => {
    dispatch(loading());
    getUsers(nextUrl).then((data:any)=>{
        dispatch(loaded());
        dispatch(setUsersActionCreator(data));
    });
}

export const setUsersActionCreator = (data:any) => {
    return {
        type: SET_USERS,
        data
    }
}
export const loading = () => {
    return {
        type: LOADING
    }
}
export const loaded = () => {
    return {
        type: LOADED
    }
}
export default usersReducer;