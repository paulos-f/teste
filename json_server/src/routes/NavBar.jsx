import { Link } from "react-router-dom"; 

export default function NavBar(){
    return(
        <div>
           <span style={{padding: '8px'}}><Link to={'/'}>Home</Link></span>
           <span style={{padding: '8px'}}><Link to={'/products'}>Produtos</Link></span>
           <span style={{padding: '8px'}}><Link to={'/miranha'}>Miranha</Link></span>
        </div> 
    )
}