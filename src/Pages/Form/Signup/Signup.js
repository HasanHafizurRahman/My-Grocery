import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='body-div'>
        <div className="login-div">
            <h2 className='title'>Please SignUp</h2>
            <Form>
            <div className="fields">
                <div className="username">
                    <input type="username" className="user-input" placeholder="Enter Your Name" />
                </div>
                <div className="email">
                    <input type="email" className='pass-input' placeholder='Enter Email' required/>
                </div>
                <div className="password">
                    <input type="password" className='pass-input' placeholder='Enter Password' required/>
                </div>
                <button className='btn btn-secondary d-block w-100'>Sign Up</button>
            </div>
            </Form>
            <p className='text-center'>Already have an account? <Link to='/login' className='text-primary pe-auto'>Please LogIn</Link></p>
        </div>
    </div>
    );
};

export default Signup;