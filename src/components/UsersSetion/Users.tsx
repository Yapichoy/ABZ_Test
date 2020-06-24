import React, {useEffect} from "react";
import User from "./User";
import {connect} from "react-redux";
import {setUsersThunkCreator} from "../../redux/reducers/usersReducer";
import spinner from "../../assets/Spinner.svg";

interface IUsersProps {
    users: Array<object>,
    next_url: string,
    setUsers: Function,
    is_loading: boolean
}

const Users : React.FC<IUsersProps> = (props) => {
    useEffect(() => {
        props.setUsers(props.next_url);
    },[]);
    return (
        <div className={"_container section users-wrapper"}>
            <h1>Our cheerful users</h1>
            <h5>Attention! Sorting users by registration date</h5>
            <div className="users">
                { props.users.map((user : any) => <User key={user.id} name={user.name} position={user.position} email={user.email} phone={user.phone} photo={user.photo}/>)}
                {   props.is_loading &&
                    <div className={"spinner"}>
                        <img src={spinner}/>
                    </div>
                }
            </div>
            {
                props.next_url && <button className={"_btn"} onClick={() => {props.setUsers(props.next_url)}}>Show more</button>
            }
        </div>
    );
}
const mapStateToProps = (state : any) => {
  return {
      users : state.usersReducer.users,
      next_url: state.usersReducer.links.next_url,
      is_loading:state.usersReducer.is_loading
  }
};
const mapDispatchToProps  = {
    setUsers: setUsersThunkCreator
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;