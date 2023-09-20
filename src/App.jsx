import { Outlet } from 'react-router-dom'
//import Navbar from './comomponents/Navbar'
import {MenuLateral} from "./comomponents/menu-lateral/menu-lateral"

function App() {

  return (
    <MenuLateral>
      <Outlet />
    </MenuLateral>
  )
}

export default App;
