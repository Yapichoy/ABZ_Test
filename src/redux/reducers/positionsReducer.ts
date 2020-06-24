import {getPositions} from "../../api/api";
import {act} from "react-dom/test-utils";
import {UserStateType} from "./usersReducer";

export type PositionType = {
    id      : number,
    name    : string
}
export type PositionStateType = {
    positions: Array<PositionType>
}
type ActionType = {
    type: string,
    data: PositionStateType
}

let initialState : PositionStateType = {
    positions : []
};

const SET_POSITIONS = "SET_POSITIONS";

let positionsReducer = (state = initialState, action : ActionType) => {
    switch (action.type) {
        case SET_POSITIONS:
            state = {...state, positions: [...action.data.positions]}
            break;
    }
    return state;
};

export const setPositionsThunkCreator = () => (dispatch:any) => {
    getPositions().then((data: ActionType)=>{
        dispatch(setPositionsActionCreator(data));
    });
}

export const setPositionsActionCreator = (data: ActionType) => {
    return {
        type: SET_POSITIONS,
        data
    }
}
export default positionsReducer;