import { Outlet } from 'react-router-dom'
import NavBar from './routes/NavBar'
import './App.css'


function App() {  

  return (
    <>
      <Outlet/>
      <NavBar/>
    </>
  )
}

export default App

