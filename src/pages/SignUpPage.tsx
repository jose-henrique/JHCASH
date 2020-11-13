import React, { useState, FormEvent } from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import '../styles/pages/SignUpPage.css';


function SignUpPage(){
    const history = useHistory()
    
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    function handleSignup(event: FormEvent){
        event.preventDefault()
        alert("sucesso!!")
        history.push('/login');
    }


    return(
        <div className="container-signup">
            <button className="btn-goBack" onClick={history.goBack}>
                <FiArrowLeft size={35} color="#25DE00"/>
            </button>
            <div className="info-area">
                <p>Welcome to <strong>JHCASH</strong></p>
            </div>
            <div className="input-container">
                <form onSubmit={handleSignup}>
                    <div className="emailfield">
                        <label htmlFor="EmailField">Nome</label>
                        <input 
                        type="text" 
                        id="EmailField"
                        value={name}
                        onChange={event => setName(event.target.value)}
                        required/>
                    </div>
                    <div className="passwordfield">
                        <label htmlFor="PasswordField">Email</label>
                        <input 
                        type="text" 
                        id="PasswordField"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        required/>
                    </div>
                    <div className="passwordAgainField">
                        <label htmlFor="PasswordField">Password</label>
                        <input 
                        type="password" 
                        id="PasswordField"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        required/>
                    </div>
                    <button className="btn-signup">SignUp</button>
                </form>
            </div>
        </div>
    )
}

export default SignUpPage;