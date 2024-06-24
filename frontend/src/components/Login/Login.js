import React, {useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';
import { useNavigate } from 'react-router-dom';
import "./Login.css";



const Login = () => {

  const navigate=useNavigate();

  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('!Enter your email'),
  });

  const onSubmit = async (values) => { 
    console.log("Values",values)

     
  };


  return (
        <div className='login-form' id="login-form">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form>
                    <div  className='login-form-container'>
                        <h1>Sign in</h1>
                         <div className='form'>
                            <label htmlFor='email'>Email</label>
                            <Field type='email' id='email' name='email' />
                            <ErrorMessage name='email' component={TextError} />      
                        </div>
                              <button type="submit">Submit</button>
                        <div className='login-text'>
                            <p>By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice.</a></p>
                        </div>
                        <div style={{fontSize:'13px'}}>
                            <a  style={{textDecoration:"none"}}href="#">Need help?</a>
                        </div>

                        <div className='bottom'>
                            <h4 style={{fontSize:"13px",marginBottom:"2px"}}>Buying for work?</h4>
                            <a  style={{textDecoration:"none",fontSize:"13px"}}href="#">Shop on Amazon Business</a>
                        </div> 

                    </div>
        
                    <div className='account-button'>
                    <button onClick={()=>navigate('/Registeration')}>Create your Amazon account</button>
                    </div>
                </Form>
            </Formik>
        </div>
  )
}

export default Login























// export default function Login() {

   


//   const navigate = useNavigate();




//   return (
//     <div className='login'>
//       <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
//         <Form>
//             <div  className='login-form'>
//                 <h2>Login</h2>
//                 <label htmlFor='email'>Email</label>
//                 <div className='form'>
//                     <Field type='text' id='email' name='email' />
//                     <ErrorMessage name='email' component={TextError} />
//                 </div>
//                 <button type="submit">Submit</button>
//           </div>
//         </Form>
//       </Formik>
//     </div>
//   );
// }
























