import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from './routes/ErrorPage.jsx'
import Home from './routes/Home.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
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
    <App />
  </React.StrictMode>,
)
