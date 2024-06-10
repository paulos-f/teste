import React, { useState } from 'react';

function cadastroUsuario() {
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
                
            </form>
        </div>
    )
}