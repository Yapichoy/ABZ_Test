import React from "react";
import RegisterForm from "./RegisterForm";
const RegisterSection = () => {
    return (
        <div className={"_container section register_section"}>
            <h1>Register to get a work</h1>
            <h5>Attention! After successful registration and alert, update the list of users in the block from the top</h5>
            <RegisterForm/>
        </div>
    );
}

export default RegisterSection;