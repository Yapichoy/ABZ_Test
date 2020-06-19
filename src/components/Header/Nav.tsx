import React from 'react';
import '../../index.scss';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

interface INavItemProps {
    id?: string,
    link: string,
    text: string
}

const NavItem : React.FC<INavItemProps> = (props) =>{
    return (
      <div className={"nav-item"}>
        <NavLink to={props.link}>{props.text}</NavLink>
      </div>
    );
}
interface INavigationProps {
    navItems: Array<object>
}
let Nav : React.FC<INavigationProps> = (props) => {
    return (
        <nav className="top-nav">
            {props.navItems.map((navLink:any) => {
                return <NavItem key={navLink.id} link={navLink.link} text={navLink.name}/>
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