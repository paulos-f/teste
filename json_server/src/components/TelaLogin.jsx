import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaLogin.css'

function TelaLogin() {
    // Definindo estados para email, senha e erro de login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
    const navigate = useNavigate(); // Hook para navegação de rotas

    // Função assíncrona para buscar os usuários da API
    const fetchUsers = async () => {
        const response = await fetch('http://localhost:3000/users'); // Faz uma requisição para buscar usuários

        // Lança um erro se a resposta não for OK
        if (!response.ok) {
            throw new Error('Erro ao buscar usuários');
        }

        const users = await response.json(); // Converte a resposta em JSON
        return users; // Retorna a lista de usuários
    };

    // Função para lidar com o envio do formulário de login
    const handleSubmit = async (event) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário

        try {
            const users = await fetchUsers(); // Busca os usuários da API
            // Encontra um usuário com email e senha correspondentes
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                // Se o usuário for encontrado, exibe uma mensagem de sucesso e navega para a página de cadastro de produtos
                alert('Login bem-sucedido!');
                setEmail(''); // Limpa o campo de email
                setPassword(''); // Limpa o campo de senha
                setLoginError(false); // Define o estado de erro de login como falso
                navigate('/cadastro-produto'); // Navega para a página de cadastro de produto
            } else {
                // Se o usuário não for encontrado, define o estado de erro de login como verdadeiro
                setLoginError(true);
                alert('Dados inseridos incorretamente');
            }
        } catch (error) {
            // Trata erros ao enviar os dados
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
                    <input
                        type="email"
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type='submit' className='login-button'>Entrar</button>
            </form>
        </div>
    );
}

export default TelaLogin;
