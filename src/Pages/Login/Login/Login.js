import { async } from '@firebase/util';
import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  







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

    
     
      if (error) {
       
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
      
        
      }
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

 const resetPassword =async() => {
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
            <h2 className='text-primary text-center'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                   
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login   
                </Button>   
            </Form>
            {errorElement}
            <p>New to Genius Car?<Link to={'/register'} className='text-primary pe-auto text-decoration-none'onClick={navigateRegister}>  Please Register</Link></p>
            <p>Forget Password ?<button className='text-primary pe-auto text-decoration-none btn btn-link'onClick={resetPassword}> Reset Password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer/>
         
        </div>
    );
};

export default Login ;