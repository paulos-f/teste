import { Link } from "react-router-dom"; 

export default function NavBar(){
    return(
        <div>
           <span style={{padding: '8px'}}><Link to={'/login'}>Tela de Login</Link></span>
           <span style={{padding: '8px'}}><Link to={'/cadastro'}>Tela de cadastro</Link></span>
           <span style={{padding: '8px'}}><Link to={'/'}>Home</Link></span>
        </div> 
    )
}