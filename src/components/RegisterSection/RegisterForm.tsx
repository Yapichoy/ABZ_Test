import React from "react";
// @ts-ignore
import { Form } from 'bootstrap-4-react';

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
            <Form.Group>
                <label htmlFor="radio">Select your position</label>
                <Form.CustomRadio id="Radio1" name="position">
                    Frontend developer
                </Form.CustomRadio>
                <Form.CustomRadio id="Radio2" name="position">
                    Backend developer
                </Form.CustomRadio>
                <Form.CustomRadio id="Radio3" name="position">
                    Designer
                </Form.CustomRadio>
                <Form.CustomRadio id="Radio4" name="position">
                    QA
                </Form.CustomRadio>
            </Form.Group>
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

export default RegisterForm;