import React from 'react';
import '../../index.scss';
import logo from "../../assets/logo.svg";
import Nav from "./Nav";

function Header() {
    return (
        <header className="_container header">
            <div className="logo-wrapper">
                <img src={logo} alt=""/>
            </div>
            <Nav/>
        </header>
    );
}

export default Header;