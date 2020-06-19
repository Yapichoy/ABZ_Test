import React from "react";
import User from "./User";
import {connect} from "react-redux";

interface IUsersProps {
    users: Array<object>
}

const Users : React.FC<IUsersProps> = (props) => {
    return (
        <div className={"_container section users-wrapper"}>
            <h1>Our cheerful users</h1>
            <h5>Attention! Sorting users by registration date</h5>
            <div className="users">
                { props.users.map((user : any) => <User key={user.id} name={user.name} position={user.position} email={user.email} phone={user.phone} photo={user.photo}/>)}
            </div>
            <button className={"_btn"}>Show more</button>
        </div>
    );
}
const mapStateToProps = (state : any) => {
  return {
      users : state.usersReducer.users
  }
};
const UsersContainer = connect(mapStateToProps)(Users);
export default UsersContainer;