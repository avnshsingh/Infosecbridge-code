import React from 'react';
import './LoginScreen.css';
import logo from './../assets/logo512.png';
import google from './../assets/google.png';
import facebook from './../assets/facebook.png';
import twitter from './../assets/twitter.png';

const LoginScreen = () => {
  return (
    <>
      <div className='wrapper'>
        <div className='container'>
          <div className='sub-container'>
            <div className='logo-container'>
              <img src={logo} alt='Logo' />
            </div>
            <div className='text-container'>
              <p>
                SOME RANDOM TEXT, SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM
                TEXT
              </p>
            </div>
          </div>
          <div className='button-container'>
            <p id='primary'>Login</p>
            <p id='secondary'>Signup</p>
          </div>
          <div className='border-line'></div>

          {/* form container */}

          <div className='form-container'>
            <form>
              <input type='text' placeholder='Email Address' />
              <input type='text' placeholder='Password' />
              <button class='button'>LOGIN</button>
              <p>Forgot Password?</p>
            </form>
          </div>
          {/* Social Login */}

          <div className='social-login sub-container'>
            <p>or login with</p>
            <div className='social-icons'>
              <img src={google} alt='google logo' />
              <img src={facebook} alt='facebook logo' />
              <img src={twitter} alt='twitter logo' />
            </div>
            <div className='footer-text'>
              <p>
                <span id='footer-primary'> Don’t have an account? </span>Create
                new now!
              </p>
            </div>
            <div className='footer-text-2'>
              <p>
                <span id='footer-text-2-primary'>
                  By signing up, you are agree with our
                </span>
                <span id='footer-text-2-secondary'> Terms & Conditions</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
