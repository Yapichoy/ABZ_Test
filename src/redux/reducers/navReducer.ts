export type NavItemType = {
    id: number,
    name: string,
    link: string
}
export type NavStateType = {
    navItems : Array<NavItemType>
}
type ActionType = {
    type: string,
    data: NavStateType
}

let initialState : NavStateType = {
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

let navReducer = (state = initialState, action:ActionType) => {
    return state;
};

export default navReducer;