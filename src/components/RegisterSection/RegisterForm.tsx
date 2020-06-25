import React, {useEffect} from "react";
// @ts-ignore
import { Form } from 'bootstrap-4-react';
import {connect} from "react-redux";
import PositionsContainer from "./Positions";

const RegisterForm = () => {
    const mtd_12 = {
        'margin-top': '-12px'
    }
    return (
        <Form>
            <Form.Group>
                <label htmlFor="name">Name</label>
                <Form.Input type="text" id="name" placeholder="Your name" />
            </Form.Group>
            <Form.Group>
                <label htmlFor="email">Email</label>
                <Form.Input type="email" id="email" placeholder="Your email" />
            </Form.Group>
            <Form.Group>
                <label htmlFor="phone">Phone number</label>
                <Form.Input type="phone" id="phone" placeholder="+380 XX XXX XX XX" />
                <Form.Text text="muted">Еnter phone number in open format</Form.Text>
            </Form.Group>
            <PositionsContainer />
            <Form.Group style={mtd_12}>
                <label htmlFor="photo">Photo</label>
                <Form.CustomFile id="photo">
                   Upload your photo
                </Form.CustomFile>
            </Form.Group>
            <Form.Group>
                <button className={'_btn'}>Sing up now</button>
            </Form.Group>
        </Form>
    );
}
const mapStateToProps = (state:any) => {
    return {
    }
}
const mapDispatchToProps = {
}
const RegisterFormContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
export default RegisterFormContainer;