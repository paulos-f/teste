import React, { useState } from 'react';

function TelaLoginCadastro() {
    const  [username, setUsername] = useState('');
    const  [email, setEmail] = useState('');
    const  [password, setPassword] = useState('');
    const  [confirmpassword, setCondirmpassword] = useState('');

    const handleSumbit = (event) => {
        event.preventDefault()
        if(password !== confirmpassword) {
            alert('As senhas estão diferentes, tente novamente com mais atenção.')
            return;
        }
        console.log('Nome do usuario', username, 'Email: ', email, 'Senha', password)
    }
    return(
        <div className='register-container'>
            <form className='register-form' onSubmit={handleSumbit}>
                <h2>Faça seu Cadastro</h2>
                <div className='input-group'>
                    <label htmlFor="username">Nome de Usuario</label>
                    <input type="text" id='username' value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id='confirm-password' value={confirmpassword} onChange={(e) => setCondirmpassword(e.target.value)} required/>
                </div>
                <button type='sumbit' className='register-button'>Cadastrar</button>
            </form>
        </div>
    )
}
export default TelaLoginCadastro