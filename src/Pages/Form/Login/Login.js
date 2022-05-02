import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

import './Login.css'
import SocialLogin from './SocialLogin/SocialLogin';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const location = useLocation()
    let from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth
      );

    const resetPassword =async()=>{
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('Please enter your email');
        }
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    if(user){
        navigate(from, {replace: true});
    }
    if(loading || sending){
        return <Loading></Loading>
    }

    return (
        <div className="login-container">

            <div className="login-title">PLEASE LOGIN</div>
            <Form className="login-form" onSubmit={handleSubmit}>

                <input type="username" className="user-input" placeholder="Enter Your Name" ></input>

                <input ref={emailRef} type="email" className='pass-input' placeholder='Enter Email' required />

                <input ref={passwordRef} type="password" className='pass-input' placeholder='Enter Password' required />

                <button style={{color: 'white', background: '#6c6b69fb', height: '40px', borderRadius: '20px', cursor: 'pointer', fontWeight: '900', boxShadow: '6px 6px 6px #cbced1, -6px -6px 6px white', transition: '0.5s', marginTop: '19px' }} className='btn btn-success' >Log In</button>

            </Form>
            <p className='text-center pt-2'>New To My Grocery? <Link to='/signup' className='text-primary pe-auto text-decoration-none' >Please SignUp</Link></p>
            <p className='text-center'>Forgot password? <button style={{}} className=' btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword} >Reset Passsword</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;