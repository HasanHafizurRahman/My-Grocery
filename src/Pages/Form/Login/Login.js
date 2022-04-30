import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = event =>{
            event.preventDefault();
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            console.log(email, password);
    }

    
    return (
        <div className='body-div'>
            <div className="login-div">
                <h2 className='title'>Please LogIn</h2>
                <Form onSubmit={handleSubmit}>
                <div className="fields">
                    <div className="username">
                        <input type="username" className="user-input" placeholder="Enter Your Name"/>
                    </div>
                    <div className="email">
                        <input ref={emailRef} type="email" className='pass-input' placeholder='Enter Email' required/>
                    </div>
                    <div className="password">
                        <input ref={passwordRef} type="password" className='pass-input' placeholder='Enter Password' required/>
                    </div>
                    <button className='btn btn-secondary d-block w-100'>Log In</button>
                </div>
                </Form>
                <p className='text-center'>New To My Grocery Dot Com? <Link to='/signup' className='text-primary pe-auto' >Please SignUp</Link></p>
            </div>
        </div>
    );
};

export default Login;