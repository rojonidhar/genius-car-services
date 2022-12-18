import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import auth from '../../../../firebase.init';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';

import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';





const Login = () => {

    const emailRef =useRef('');
    const passwordRef =useRef('')
    const navigate = useNavigate();
    const location = useLocation()
const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    let errorElement;
    if(loading){
        return <Loading></Loading>
    
    }

    let from = location.state?.from?.pathname || "/";


    if(user){
        navigate(from, { replace: true });
      }






    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
    
        signInWithEmailAndPassword(email, password);
    }


    const navigateRegister = event => {
        navigate("/register");
    }


    if (error) {
       
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
      
        
      }

    const resetPassword = async() => {
        const email = emailRef.current.value;
         if(email)  {
         await sendPasswordResetEmail(email);
         toast('Sent email');
         }
         else{
            toast('please enter your email address')
         }
     }
    


    return (
        <div className='container w-50 mx-auto mt-5'>
        <h2 className='fs-2 fw-bolder opacity-75  mt-5 mb-2 text-center'>Please Login</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              
                <Form.Control ref={emailRef} type="email" placeholder="Enter email"  />
               
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               
                <Form.Control ref={passwordRef} type="password" placeholder="Password"  />
            </Form.Group>
       
            <Button className='order-btn2' variant=" text-white w-50 mx-auto d-block mb-2" type="submit">
                Login   
            </Button>   
        </Form>
        {errorElement}
        <p>Create an account-<Link to={'/register'} className='text-primary  pe-auto text-decoration-none'onClick={navigateRegister}>  Please Register</Link></p>
        <p>Forget Password ?<button className='text-primary pe-auto text-decoration-none btn btn-link' onClick={resetPassword}> Reset Password</button></p> 
        <SocialLogin></SocialLogin>
        <ToastContainer/>
       </div>
    );

};

export default Login;