import {getPositions} from "../../api/api";
import {act} from "react-dom/test-utils";

let initialState : object = {
    positions : []
};

const SET_POSITIONS = "SET_POSITIONS";

let positionsReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case SET_POSITIONS:
            state = {...state, positions: [...action.data.positions]}
            break;
    }
    return state;
};

export const setPositionsThunkCreator = () => (dispatch:any) => {
    getPositions().then((data:any)=>{
        dispatch(setPositionsActionCreator(data));
    });
}

export const setPositionsActionCreator = (data:any) => {
    return {
        type: SET_POSITIONS,
        data
    }
}
export default positionsReducer;