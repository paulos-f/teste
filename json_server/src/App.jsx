import { Outlet } from 'react-router-dom'
import NavBar from './routes/NavBar'
import './App.css'

// CRUD COM JSON SERVER

function App() {  

  return (
    <>
      <Outlet/>
      <NavBar/>
    </>
  )
}

export default App


/*

  tem que arrumar os links.
  tem que redirecionar as paginas.
  tem que 

<Outlet/>
<NavBar/>

import CadastroProdutos from './components/CadastroProdutos'
<>
  <CadastroProdutos/>
</>


*/

