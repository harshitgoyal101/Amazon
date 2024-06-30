import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "../api";
import { Link } from 'react-router-dom';
import logo from '../assets/amazon_logo_white.webp';
import { useNavigate } from "react-router-dom";
import "../styles/form.css";

const Register = () => {
    const navigate = useNavigate();

    const initialValues = { 
        username: "nishi",
        email: "", 
        password: "",
        re_password: ""
    };

    const onSubmit = async (values, {resetForm}) => {
        console.log("Values", values);
        try {
            const registerData = {
                username: values.username,
                password: values.password
            }
            console.log(registerData);
            const res = await api.post("/api/register/", registerData);
            console.log(res);
            navigate("/login")
        } catch(error) {
            console.log(error);
        }

        resetForm();
    };

    return (
        <div className="form" id="form">
            <img src={logo}/>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <div className="form-container">
                        <h1 className="form_h1">Create account</h1>
                        <h3 className="form_h3">Your name</h3>
                        <Field className="form_input" type='text' id='username' name='username' placeholder='Username'/>
                        <h3 className="form_h3">Email</h3>
                        <Field className="form_input" type='email' id='email' name='email' placeholder='Email'/>

                        <h3 className="form_h3" >Password</h3>
                        <Field className="form_input" type='password' id='password' name='password' placeholder='Password'/>

                        <h3 className="form_h3" >Re-enter password</h3>
                        <Field className="form_input" type='password' id='re_password' name='re_password' placeholder='Confirm Password'/>

                        <button type="submit" className="form_button yellowButton">Sign In</button>
                        <div style={{marginBottom: 10}}>
                            By continuing, you agree to Amazon's <a  className="form_a" href="#">Conditions of Use</a> and <a  className="form_a" href="#">Privacy Notice</a>.
                        </div>
                        <div className="divider">
                            <h5 className="form_h5"></h5>
                        </div>
                        <div style={{marginTop: 20}}>
                            Already have an account? <Link  className="form_a" to="/login" > Sign in </Link>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default Register;