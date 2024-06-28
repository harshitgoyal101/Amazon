import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "../api";
import logo from '../assets/amazon_logo.webp';
import { useNavigate } from "react-router-dom";
import "../styles/form.css";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import {Snackbar,Alert} from '@mui/material';

const Login = () => {
   

    const initialValues = { username: "", password: "" };

    const onSubmit = async (values, {resetForm}) => {
        try {
            const loginData = {
                username: values.username,
                password: values.password
            }
            const res = await api.post("/api/token/", loginData);
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            navigate("/");
        } catch(error) {
            console.error('Error:', error);
        }

        resetForm();
    };

    return (
        <div className="form" id="form">
            <img src={logo}/>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <div className="form-container">
                        <h1>Sign in</h1>
                        <h2>Email or Username</h2>

                        <Field type='text' id='username' name='username' placeholder='Email or Username'/>

                        <h2>Password</h2>
                        <Field type='password' id='password' name='password' placeholder='Password' autoComplete="on"/>

                        <button type="submit" className="yellowButton">Sign In</button>
                        <div style={{marginBottom: 20}}>
                            By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.
                        </div>
                        <div>
                            <input type="checkbox" className="checkbox" name="rememberMe" value="true" />
                            Keep me signed in. <a href="#">Details</a>
                        </div>
                        <div className="divider">
                            <h5>New to Amazon?</h5>
                        </div>

                        <button type="button" onClick={() => navigate("/register")}>Create your Amazon account</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default Login;
