import { Link } from "react-router-dom"; 

export default function NavBar(){
    return(
        <div>
           <span style={{padding: '8px'}}><Link to={'/'}>login</Link></span>
           <span style={{padding: '8px'}}><Link to={'/login'}>teste</Link></span>
           <span style={{padding: '8px'}}><Link to={'/cadastro'}>cabelo</Link></span>
        </div> 
    )
}



