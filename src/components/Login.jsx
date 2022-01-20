import React from 'react';
import '../styles/Login.css'
import QrCode from '../assets/images/qr-code.png'
import QrCodeOverlay from '../assets/images/qr-code-overlay.png'

import SignUpBackground from '../assets/images/signup-background.svg'

const Login = () => {
    return (
        <div className='login' style={{ backgroundImage: `url(${SignUpBackground})` }}>
            <div className="login-form-wrapper">

                <form action="">
                    <h2 className='form-title'>Welcome back!</h2>
                    <p className='form-subtitle' style={{color : 'var(--color-form-label )'}}>We're excited to see you again!</p>
                    <div className='form-group'>
                        <label htmlFor="email">Email or Phone Number</label>
                        <input type="email" />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" />
                    </div>
                    <a className='prompt' href="/login">Forgot your password?</a>

                    <button className='form-button' style={{ marginTop: '1rem' }}>Login</button>
                    <p className='terms' style={{ padding: 'unset' }}>Neeed an account ?<a href='/signup'> Register</a></p>
                </form>
                <div className='qr-container'>
                    <div className="qr-image-container">
                    <img className='qr-code' src={QrCode} alt="qr-code" />
                    <img className='qr-code-overlay' src={QrCodeOverlay} alt="qr-code-overlay" />
                    </div>
                    <h2 className='qr-title'>Login with QR Code</h2>
                    <p className='qr-subtitle'>Scan this with <strong style={{color : 'var(--color-form-label )'}}>Discord mobile <br /> app</strong> to login instantly.</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
