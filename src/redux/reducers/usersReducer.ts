import {getUsers} from "../../api/api";

const SET_USERS = "SET_USERS";
const LOADING   = "LOADING";
const LOADED    = "LOADED";

// Generics
export type UserType = {
    id: number,
    name: string,
    email: string,
    phone: string,
    position: string,
    position_id: number,
    registration_timestamp: number,
    photo: string
}
export interface UserStateType  {
    users: Array<UserType>,
    page : number,
    total_pages: number,
    total_users: number,
    count: number,
    links: object,
    is_loading: boolean
}
type ActionType = {
    type: string,
    data: UserStateType
}

// initial state
let initialState : UserStateType = {
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

//reducer
let usersReducer = (state = initialState, action:ActionType)  : UserStateType => {
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

//thunks
export const setUsersThunkCreator = (next_url:string) => (dispatch:Function) => {
    dispatch(loading());
    getUsers(next_url).then((data:UserStateType)=>{
        dispatch(loaded());
        dispatch(setUsersActionCreator(data));
    });
}

// action creators
export const setUsersActionCreator = (data:UserStateType) => {
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