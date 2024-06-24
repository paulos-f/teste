import { Link } from "react-router-dom";
import React from "react";
import './NavBar.css'

export default function NavBar(){
    return(
        <div className="navbar-container">
           <span><Link to={'/login'}>Tela de Login</Link></span>
           <span><Link to={'/cadastro'}>Tela de Cadastro</Link></span>
           <span><Link to={'/'}>Home</Link></span>
        </div>
    )
}