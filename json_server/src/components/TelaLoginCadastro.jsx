import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaLoginCadastroCSS.css';

function TelaLoginCadastro() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setCondirmpassword] = useState('');
    const url = 'http://localhost:3000/users'
    const navigate = useNavigate()

    const handleSumbit = async(event) => {
        event.preventDefault()
        if (password !== confirmpassword) {
            alert('As senhas estão diferentes, tente novamente com mais atenção.')
            return;
        }
        const user = { username, email, password };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            
            if (response.ok) {
                alert('Usuário cadastrado com sucesso!');
                setUsername('');
                setEmail('');
                setPassword('');
                setCondirmpassword('');
                navigate('/login')
            } else {
                alert('Erro ao cadastrar usuário.');
            }
        } catch (error) {
            alert('Erro ao enviar dados: ' + error.message);
        }

        console.log('Nome do usuario', username, 'Email: ', email, 'Senha', password)
    }
    
    return (
        <div className='register-container'>
            <form className='register-form' onSubmit={handleSumbit}>
                <h2>Faça seu Cadastro</h2>
                <div className='input-group'>
                    <label htmlFor="username">Nome de Usuario</label>
                    <input type="text" id='username' value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className='input-group'>
                    <label htmlFor="confirm-password">Confirme a senha</label>
                    <input type="password" id='confirm-password' value={confirmpassword} onChange={(e) => setCondirmpassword(e.target.value)} required />
                </div>
                <button type='submit' className='register-button'>Cadastrar</button>
            </form>
        </div>
    )
}

export default TelaLoginCadastro;
