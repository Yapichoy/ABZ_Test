import React from "react";
import User from "./User";

const Users = () => {
    return (
        <div className={"_container section users-wrapper"}>
            <h1>Our cheerful users</h1>
            <h5>Attention! Sorting users by registration date</h5>
            <div className="users">
               <User/>
               <User/>
               <User />
               <User />
               <User />
            </div>
            <button className={"_btn"}>Show more</button>
        </div>
    );
}

export default Users;