import React, {useEffect} from "react";
// @ts-ignore
import Bootstrap, { BP } from "bootstrap-4-react";
import {UserType} from "../../redux/reducers/usersReducer";


const User : React.FC<UserType>= (props) => {
    useEffect(() => {
        window.setTimeout(() => Bootstrap.tooltip('.user p'), 1000);
    },[])
    return (
        <div className={"user"}>
            <div className="photo">
                <img src={props.photo} alt=""/>
            </div>
            <div className="name">
                <BP tooltip={{ placement: 'bottom', title: props.name }} >{props.name}</BP>
            </div>
            <div className="position description">
                {props.position}
            </div>
            <div className="email description">
                <BP tooltip={{ placement: 'bottom', title: props.email, boundary: 'window' }}> {props.email} </BP>
            </div>
            <div className="phone description">
                {props.phone}
            </div>
        </div>
    );
}

export default User;