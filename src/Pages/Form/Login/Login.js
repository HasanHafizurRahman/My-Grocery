import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import './Login.css'
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }


    return (
        <div className="login-container">

            <div className="login-title">PLEASE LOGIN</div>
            <Form className="login-form" onSubmit={handleSubmit}>
               
                    <input type="username" className="user-input"  placeholder="Enter Your Name" ></input>

                <input ref={emailRef} type="email" className='pass-input' placeholder='Enter Email' required />

                <input ref={passwordRef} type="password" className='pass-input' placeholder='Enter Password' required />

                <button className='btn btn-secondary d-block w-100'>Log In</button>

            </Form>
            <p className='text-center'>New To My Grocery Dot Com? <Link to='/signup' className='text-primary pe-auto text-decoration-none' >Please SignUp</Link></p>
        </div>
    );
};

export default Login;