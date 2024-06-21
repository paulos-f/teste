import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TelaLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
    const navigate = useNavigate()

    const fetchUsers = async () => {
        const response = await fetch('http://localhost:3000/users');

        if (!response.ok) {
            throw new Error('Erro ao buscar usuários');
        }

        const users = await response.json();
        return users;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const users = await fetchUsers();
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                alert('Login bem-sucedido!');
                setEmail('');
                setPassword('');
                setLoginError(false);
                navigate('/cadastro-produto')
                
            } else {
                setLoginError(true)
                alert('Dados inseridos incorretamente');
            }
        } catch (error) {
            alert('Erro ao enviar dados: ' + error.message);
        }
    };
    return (
        <div className="login-container">
            <form className='login-form' onSubmit={handleSubmit}>
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