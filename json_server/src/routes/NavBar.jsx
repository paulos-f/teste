import { Link } from "react-router-dom"; 

export default function NavBar(){
    return(
        <div>
           <span style={{padding: '8px'}}><Link to={'/'}>tela inicial</Link></span>
           <span style={{padding: '8px'}}><Link to={'/login'}>login</Link></span>
        </div> 
    )
}