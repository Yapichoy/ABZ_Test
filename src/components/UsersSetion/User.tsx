import React from "react";
import photo from "../../assets/photo-cover.png";

const User = () => {
    return (
        <div className={"user"}>
            <div className="photo">
                <img src={photo} alt=""/>
            </div>
            <div className="name">
                Maximillian
            </div>
            <div className="position description">
                Leading specialist of the Control Department
            </div>
            <div className="email description">
                controldepartment@gmail
            </div>
            <div className="phone description">
                +380 50 678 03 24
            </div>
        </div>
    );
}

export default User;