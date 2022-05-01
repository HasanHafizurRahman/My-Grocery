import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signup = () => {

    const handleSignUp = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        
    }
    return (
        <div className="login-container">
        <div className="login-title">PLEASE SignUp</div>
            <Form className="login-form" onSubmit={handleSignUp}>
            
                    <input type="username" className="user-input" placeholder="Enter Your Name" />
                
                    <input type="email" className='pass-input' placeholder='Enter Email' required/>
                
                    <input type="password" className='pass-input' placeholder='Enter Password' required/>
                
                    <input type="confirm-password" className='pass-input' placeholder='Confirm Password' required/>
                
                <button className='btn btn-secondary d-block w-100'>Sign Up</button>
            </Form>
            <p className='text-center'>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none'>Please LogIn</Link></p>
        </div>
    );
};

export default Signup;