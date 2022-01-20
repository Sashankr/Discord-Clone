import React, { useState } from 'react'
import SignUpBackground from '../assets/images/signup-background.svg'
import Dropdown from 'react-dropdown';

import 'react-dropdown/style.css';
import '../styles/Signup.css'


const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

const dates = []

for (let i = 1; i <= 31; i++) {
    dates.push(i)
}

const years = [];

for (let i = 2022; i >= 1970; i--) {
    years.push(i)
}

const Signup = () => {
    const [date, setData] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();

    return (
        <div className='signup' style={{ backgroundImage: `url(${SignUpBackground})` }}>
            <div className='signup-form'>
                <form action="">
                    <h2 className='signup-title'>Create an account</h2>
                    <div className='form-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email" />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="username">Username</label>
                        <input type="username" />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="dob">Date Of Birth</label>
                        <div className='dob-select'>
                            <Dropdown  arrowClosed={<i class="fas fa-chevron-down"></i>}
                                arrowOpen={<i class="fas fa-chevron-up"></i>} options={months} onChange={setData} placeholder="Select" />
                            <Dropdown arrowClosed={<i class="fas fa-chevron-down"></i>}
                                arrowOpen={<i class="fas fa-chevron-up"></i>} options={dates} onChange={setMonth} placeholder="Select" />
                            <Dropdown arrowClosed={<i class="fas fa-chevron-down"></i>}
                                arrowOpen={<i class="fas fa-chevron-up"></i>} options={years} onChange={setYear} placeholder="Select" />
                        </div>
                    </div>
                    <button className='singup-button'>Continue</button>
                    <a className='login-prompt' href="/login">Already have an account?</a>
                    <p className='signu-terms'>By registering, you agree to Discord's <span>Terms of Service</span> and <span>Privacy Policy</span> </p>
                </form>
            </div>
        </div>
    )
}

export default Signup
