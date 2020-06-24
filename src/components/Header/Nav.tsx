import React from 'react';
import '../../index.scss';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {NavItemType, NavStateType} from "../../redux/reducers/navReducer";

const NavItem : React.FC<NavItemType> = (props) =>{
    return (
      <div className={"nav-item"}>
        <NavLink to={props.link}>{props.name}</NavLink>
      </div>
    );
}
let Nav : React.FC<NavStateType> = (props) => {
    return (
        <nav className="top-nav">
            {props.navItems.map((navLink:NavItemType) => {
                return <NavItem key={navLink.id} {...navLink}/>
            })}

        </nav>
    );
}
const mapStateToProps = (state : any) => {
    return {
        navItems: state.navigation.navItems
    }
}
let NavContainer = connect(mapStateToProps)(Nav)
export default NavContainer;