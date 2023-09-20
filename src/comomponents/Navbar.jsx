import { Link } from "react-router-dom"
import style from "./Navbar.module.css"

function Navbar () {
  return(
    <nav className={`${style.navbar} ${style.fixed}`}>
        <ul className={style.list}>
            <li className={style.item}>
                <Link to="/Login" aria-current="page" >
                    Login
                </Link>
            </li>
            <li className={style.item}>
                <Link className="" to="/cadastroUsuarios">
                    Cadastro usuários
                </Link>
            </li>
            <li className={style.item}>
                <Link className="" aria-current="page" to="/chat">
                    Chat
                </Link>
            </li>
            <li className={style.item}>
                <Link className={style.item2} aria-current="page" to="/excluir-conta">
                    Excluir conta
                </Link>
            </li>
            <li className={style.item}>
                <Link className="" aria-current="page" to="/logout">
                    Logout
                </Link>
            </li>
      </ul>
    </nav>
  )
}

export default Navbar;