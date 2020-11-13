import React from 'react';

import { Link } from 'react-router-dom'

import '../styles/pages/landing-page.css';


function LandingPage(){
    return(
        <div className="container">
            <div className="info-area">
                <p>Welcome to <strong>JHCASH</strong></p>
            </div>
            <div className="button-area">
                <Link className="signup" to="/signup">Sign Up</Link>
                <Link  className="login" to="/login">Login</Link >
            </div>
        </div>
    )
}

export default LandingPage;