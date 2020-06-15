import React from 'react';
import '../../index.scss';
import {NavLink} from "react-router-dom";

interface INavItemProps {
    link: string,
    text: string
}
const NavItem : React.FC<INavItemProps> = (props,{link, text}) =>{
    return (
      <div className={"nav-item"}>
        <NavLink to={props.link}>{props.text}</NavLink>
      </div>
    );
}
const Nav = () => {
    return (
        <nav className="top-nav">
            <NavItem key={"1"} link={"/"} text={"About me"}/>
            <NavItem key={"2"} link={"/"} text={"Relationships"}/>
            <NavItem key={"3"} link={"/"} text={"Requirements"}/>
            <NavItem key={"4"} link={"/"} text={"Users"}/>
            <NavItem key={"5"} link={"/"} text={"Sign Up"}/>

        </nav>
    );
}

export default Nav;