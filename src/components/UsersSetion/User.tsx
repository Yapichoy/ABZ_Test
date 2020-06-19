import React from "react";
import photo from "../../assets/photo-cover.png";

interface IUserProps {
    name        : string,
    position    : string,
    email       : string,
    phone       : string,
    photo       : string
}

const User : React.FC<IUserProps>= (props) => {
    return (
        <div className={"user"}>
            <div className="photo">
                <img src={props.photo} alt=""/>
            </div>
            <div className="name">
                {props.name}
            </div>
            <div className="position description">
                {props.position}
            </div>
            <div className="email description">
                {props.email}
            </div>
            <div className="phone description">
                {props.phone}
            </div>
        </div>
    );
}

export default User;