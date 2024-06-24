import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import * as Yup from 'yup';
import './Registeration.css'

const RegisterationForm = () => {

  // const PASSWORD =/^(?=.*[@$!%*#?&^-_+=,><])(?=.*[A-Z]+)(?=.*[@$!%*#?&^-_+=,><]+)(?=.*[0-9]+)(?=.*[a-z]+).{6}[@$!%*#?&^-_+=,><]$/;
    const initialValues={
        fullname:'',
        password:"",
        mobileno:""
    }

    const validationSchema=Yup.object({
        fullname:Yup.string().required('Name Required'),
        password :Yup.string().required(" Password Required"),
        // .matches(PASSWORD , "Must Contain 6 Characters,first and last should be special Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        // )
        mobileno:Yup.number().required("Number Required")

    })
      
    const onSubmit=(values)=>{
      console.log("Reg",values);

    } 
    

  return (
    <div className='Registeration-form'>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
            <div className='Registeration-form-container'>
                <h1>Create Account</h1>
                <div className='field'>
                    <label htmlFor='fullname'>Your Name</label>
                    <Field type="text" id="fullname" name="fullname"/>
                    <ErrorMessage name="fullname" component={TextError}/>
                </div>
                <div className='field'>
                    <label htmlFor='mobileno'>Mobile Number</label>
                    <Field type="text" id="mobile" name="mobileno"/>
                    <ErrorMessage name="mobileno" component={TextError}/>
                </div>
                <div className='field'>
                    <label htmlFor='password'>Password</label>
                    <Field type="text" id="password" name="password"/>
                    <ErrorMessage name="password" component={TextError}/>
                </div>
                  <h3>Passwords must be at least 6 characters.</h3>
                <div className='verify'>
                  To verify your number,we will send you a text message with a temporary
                  code. Message and data rates may apply.
                </div>
                <div className='button'>
                  <button type="submit"> Verify mobile number</button>
                </div>
                <div className='buy'>
                  <h4>Buying for work?</h4>
                  <a href="#">Create a free business account</a>
                </div>
                <div className='account'>
                  Already have an account?<span><a href='/login'>Sign in</a></span>
                </div>
                <div className='condition'>
                  By creating an account or logging in,you agree to Amazon's <a href="#">Condition of Use </a>and <a href="#">Privacy Policy </a>.
                </div>
            </div>
        </Form>
      </Formik>
    </div>
  )
}

export default RegisterationForm
