import React, { useState } from 'react';

function login() {
    const  [email, setEmail] = useState('');
    const  [password, setPassword] = useState('');

    const handleSumbit = (Event) => {
        Event.preventDefault();
        console.log('Email: ', email, 'Senha: ', password) 
    }

    return (
        <div className="login-container">
            <form className='login-form' onSubmit={handleSumbit}>
                <h2>Seja bem vindo!!!</h2>
                <h5>Faça seu login</h5>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <button type='sumbit' className='login-button'>Entrar</button>
            </form>
        </div>
    )
}

export default TelaLogin