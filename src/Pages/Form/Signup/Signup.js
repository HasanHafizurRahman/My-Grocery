import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import Loading from '../../../Shared/Loading/Loading';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, newError] = useUpdateProfile(auth);
      const navigate = useNavigate();

      if(user){
          console.log('user', user);
      }

      if(loading || updating){
          return <Loading></Loading>
      }
    const handleSignUp = async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }
    return (
        <div className="login-container">
        <div className="login-title">PLEASE SIGNUP</div>
            <Form className="login-form" onSubmit={handleSignUp}>
            
                    <input type="username" name="name" className="user-input" placeholder="Enter Your Name" />
                
                    <input type="email" name="email" className='pass-input' placeholder='Enter Email' required/>
                
                    <input type="password" name="password" className='pass-input' placeholder='Enter Password' required/>
                
                    <button style={{color: 'white', background: '#6c6b69fb', height: '40px', borderRadius: '20px', cursor: 'pointer', fontWeight: '900', boxShadow: '6px 6px 6px #cbced1, -6px -6px 6px white', transition: '0.5s', marginTop: '19px' }} >Sign Up</button>
            </Form>
            <p className='text-center pt-2'>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none'>Please LogIn</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Signup;