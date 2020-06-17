import React from "react";
import manLaptop from "../../assets/man-laptop-v1.svg";
import {NavLink} from "react-router-dom";
const SecondSection = () => {
    return (
        <div className={"_container section second_section"}>
            <div className="_row">
                <h1>Let's get acquainted</h1>
            </div>
            <div className="_row bottom-row">
                <div className="photo-wrapper">
                    <img src={manLaptop} alt=""/>
                </div>
                <div className="description-wrapper">
                    <h3>I am cool frontend developer</h3>
                    <p>We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction.</p>
                    <p className={"last-text"}>If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page P​SD mockup​ into HTML5/CSS3. </p>
                    <NavLink className={'link'} to={"/"}>Sing up now</NavLink>
                </div>
            </div>
        </div>
    );
}

export default SecondSection;