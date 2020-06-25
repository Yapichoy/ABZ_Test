
export type RegistrationStateType = {
    name:       string,
    email:      string,
    phone:      string,
    position:   number | null,
    image:      object | null
}
type FailsType = {
    name:           Array<string>,
    email:          Array<string>,
    phone:          Array<string>,
    position_id:    Array<string>,
    photo:          Array<string>
}
export type RegistrationResponseType = {
    success : boolean,
    message : string,
    user_id?: number,
    fails?  : FailsType
}
type ActionType = {
    type    : string,
    data    : RegistrationResponseType
}
let initialState : RegistrationStateType = {
    name:       "",
    email:      "",
    phone:      "",
    position:   null,
    image:      null
}

let registrationReducer = (state = initialState, action :ActionType) => {
    switch (action.type) {

    }
    return state;
};

export default registrationReducer;