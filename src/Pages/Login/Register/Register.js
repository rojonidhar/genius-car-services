import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate =useNavigate();

    const navigateLogin=event=>{
        navigate(`/login`)
    }

    const handleRegister = event=>{
        event.prevenDefault();
        const name =event.target.name.value;
        const email = event.target.password.value;
    }
    return (
        <div className='register-form' >
            <h2>Please Register Here!!</h2>
            <form onSubmit={handleRegister} >
                <input type='text'name='name'id='name' placeholder='Enter your name'/>
               
                <input type="email"name='email'id="email"placeholder='Enter your email'required/>
               
                <input type="password"name='password'id="password" placeholder='Enter your password'required/>
                
                <input type='submit'value='Register'/>
                <p>Already have Genius Car account?<Link to={`/login`} className='text-danger pe-auto text-decoration-none'onClick={navigateLogin}>Please Login</Link></p>
            </form>
        </div>
    );
};

export default Register;