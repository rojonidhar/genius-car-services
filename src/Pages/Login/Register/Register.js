import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';

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


    if(loading||updating ){
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
        // const agree = event.target.terms.checked;
        
           await createUserWithEmailAndPassword(email,password);
           await updateProfile({ displayName:name});
       
             console.log('Updated profile');
             navigate('/home');

           
    }
    return (
        <div className='register-form' >
            <h2>Please Register Here!!</h2>
            <form onSubmit={handleRegister} >
                <input type='text'name='name'id='name' placeholder='Enter your name'/>
               
             <input type="email"name='email'id="email"placeholder='Enter your email' required />
               
                <input type="password"name='password'id="password" placeholder='Enter your password'required/>
                <input onClick={()=>setAgree(!agree)} type='checkbox' id='terms'/>
                <label className={`ps-2 ${agree ? "":"text-danger"}`} 
                //  className={agree ?'ps-2 text-primary':'ps-2  text-danger'} 
                htmlFor='terms'>Accept Genius Car Terms and Conditions</label>
                <input 
                disabled={!agree}
                className='w-50 mx-auto btn btn-primary mt-4' 
                type='submit'
                value='Register'/>
               
            </form>
            <p>Already have Genius Car account?<Link to={`/login`} className='text-primary pe-auto text-decoration-none'onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;