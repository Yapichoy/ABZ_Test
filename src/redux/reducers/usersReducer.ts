
let initialState : object = {
    users : [
        {
            id          : 1,
            name        : "Maximillian",
            position    : "Leading specialist of the Control Department",
            email       : "controldepartment@gmail.com",
            phone       : "+380 50 678 03 24",
            photo       : ""
        }
    ]
};

let usersReducer = (state = initialState, action:any) => {
    return state;
};

export default usersReducer;