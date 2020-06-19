
let initialState : object = {
    navItems : [
        {
            id: 1,
            name: "About me",
            link: "/"
        },
        {
            id: 2,
            name: "Relationships",
            link: "/"
        },
        {
            id: 3,
            name: "Requirements",
            link: "/"
        },
        {
            id: 4,
            name: "Users",
            link: "/"
        },
        {
            id: 5,
            name: "Sign up",
            link: "/"
        }
    ]
};

let navReducer = (state = initialState, action:any) => {
    return state;
};

export default navReducer;