import React, { useState, FormEvent } from 'react';

import '../styles/pages/LoginPage.css';

import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

function LoginPage(){
    const history = useHistory()

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    function handleLogin(event: FormEvent){
        event.preventDefault()
        alert("logged")
        history.push('/dashboard')

    }

    return(
        <div className="container-login">
            <button className="btn-goBack" onClick={history.goBack}>
                <FiArrowLeft size={35} color="#25DE00"/>
            </button>
            <div className="info-area">
                <p>Welcome to <strong>JHCASH</strong></p>
            </div>
            <div className="input-container">
                <form onSubmit={handleLogin}>
                    <label htmlFor="EmailField" className="EmailLabel">Email</label>
                    <input 
                    type="text" 
                    id="EmailField" 
                    className="EmailField"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required/>
                    <label htmlFor="PasswordField"  className="PasswordLabel">Password</label>
                    <input 
                    type="password" 
                    id="PasswordField" 
                    className="PasswordField"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required/>
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;