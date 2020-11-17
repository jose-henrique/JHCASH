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
                    <div className="emailcontainer">
                        <label htmlFor="EmailField">Email</label>
                        <input 
                        type="text" 
                        id="EmailField" 
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        required/>
                    </div>
                    <div className="passwordcontainer">
                        <label htmlFor="PasswordField">Password</label>
                        <input 
                        type="password" 
                        id="PasswordField" 
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        required/>
                    </div>

                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;