import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate();

      if(user){
          navigate('/home');
      }

    const handleSignUp = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className="login-container">
        <div className="login-title">PLEASE SignUp</div>
            <Form className="login-form" onSubmit={handleSignUp}>
            
                    <input type="username" name="name" className="user-input" placeholder="Enter Your Name" />
                
                    <input type="email" name="email" className='pass-input' placeholder='Enter Email' required/>
                
                    <input type="password" name="password" className='pass-input' placeholder='Enter Password' required/>
                
                <button className='btn btn-secondary d-block w-100'>Sign Up</button>
            </Form>
            <p className='text-center'>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none'>Please LogIn</Link></p>
        </div>
    );
};

export default Signup;