import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'








const Register = () => {


    const [agree,setAgree]=useState(false)

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const navigate =useNavigate();

    const navigateLogin = event =>{
        navigate(`/login`)
    }


    if(loading||updating){
      
         return <Loading></Loading>
    
    }


    if(user){
        console.log(user);   
    }

    const handleRegister =async( event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    
        
           await createUserWithEmailAndPassword(email,password);
           await updateProfile({ displayName:name});
       
             console.log('Updated profile');
             navigate('/home');

           
    }




    return (
        <div className='register-form' >
        <h2>Please Register Here!!</h2>
        <form onSubmit={handleRegister} >
            <input type='text'name='name'id='name' placeholder='Enter your name' required/>
           
         <input type="email"name='email'id="email"placeholder='Enter your email' required />
           
            <input type="password"name='password'id="password" placeholder='Enter your password'required/>
            <input onClick={()=>setAgree(!agree)} type='checkbox' id='terms'/>
            <label className={`ps-2 ${agree ? "":"text-danger"}`} 
        
            htmlFor='terms'>Accept Our Terms and Conditions</label>
            <input 
            disabled={!agree}
            className='w-50 mx-auto order-btn2 mt-4' 
            type='submit'
            value='Register'/>
           
        </form>
        <p>Already have an account?<Link to={`/login`} className=' pe-auto text-decoration-none'onClick={navigateLogin}>Please Login</Link></p>
        <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;