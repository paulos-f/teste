import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from './routes/ErrorPage.jsx'
import Home from './routes/Home.jsx'
import TelaLoginCadastro from './components/TelaLoginCadastro.jsx'
import TelaInicial from './components/TelaInicial.jsx'
import CadastroProdutos from './components/CadastroProdutos.jsx'
import CadastroEdicaoProdutos from './components/CadastroEdicaoProdutos.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <TelaInicial/>
      },
      {
        path: '/login',
        element: <Home/>
      },
      {
        path: '/cadastro',
        element: <TelaLoginCadastro/>
      },
      {
        path: '/cadastro-produto',
        element: <CadastroProdutos/>
      },
      {
        path: '/forma-produto',
        element: <CadastroEdicaoProdutos/>
      }
    ]
  },
  {
    path: '/*',
    element: <Teste/>
  }
])

function Teste() {
  return <h2>página não encontrada</h2>
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
