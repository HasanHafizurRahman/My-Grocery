import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const location = useLocation()
    let from = location.state?.from?.pathname || '/';

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
      }

      if(user){
        navigate(from, { replace: true});
      }
      if(loading){
          return <Loading></Loading>
      }
    return (
        <>
        <div className='d-flex align-items-center'>
            <div style={{ height: "1px" }} className='bg-secondary w-50'></div>
            <p className='mt-2 px-2'>or</p>
            <div style={{ height: "1px" }} className='bg-secondary w-50'></div>

        </div>
        {errorElement}
        <div>
        <button style={{background: 'rgba(255, 255, 255, 0.726)', height: '40px', borderRadius: '20px', cursor: 'pointer', fontWeight: '900', boxShadow: '3px 3px 3px #cbced1, -3px -3px 3px white', transition: '0.3s' }} className='btn btn-info text-primary' onClick={() => signInWithGoogle()} >
            <FcGoogle/>
            <span className='px-4'>Sign In With Google</span>
            </button>
        </div>
        </>
    );
};

export default SocialLogin;