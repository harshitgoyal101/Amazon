import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "../components/TextError";
import logo from '../assets/amazon_logo.webp';
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
    const navigate = useNavigate();

    const initialValues = { email: "" };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email format")
            .required("!Enter your email"),
    });

    const onSubmit = async (values) => {
        console.log("Values", values);
    };

    return (
        <div className="login-form" id="login-form">
            <img src={logo}/>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <div className="login-form-container">
                        <h1>Sign in</h1>
                        <h2>Email or mobile phone number</h2>

                        <Field type='email' id='email' name='email'/>

                        <h2>Password</h2>
                        <Field type='password' id='password' name='password'/>

                        <button type="submit">Sign In</button>
                        <div style={{marginBottom: 20}}>
                        By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.
                        </div>
                        <input type="checkbox" className="checkbox" name="rememberMe" value="true" />
                        Keep me signed in. <a href="#">Details</a>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default Login;
