import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {Login} from "../pages/Login";
import {CadastroUsuarios} from "../pages/CadastroUsuarios";
import {Chat} from "../pages/Chat";
import {ErrorPage} from "../pages/ErrorPage";
import {ExcluirConta} from "../pages/ExcluirConta";
import {Logout} from "../pages/Logout";
import {Home} from "../pages/Home";
import {LancamentoMensal} from "../pages/LancamentoMensal"

export const router = createBrowserRouter([
    {
        index: true,
        element: <Home/>,
        errorElement:<ErrorPage/>,
    },
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/login",
                element: <Login/>,
            },
            {
                path: "/cadastroUsuarios",
                element: <CadastroUsuarios/>,
            },
            {
                path: "/chat",
                element: <Chat/>,
            },
            {
                path: "/excluir-conta",
                element: <ExcluirConta/>,
            },
            {
                path: "/logout",
                element: <Logout/>,
            },
            {
                path: "/lancamento-mensal",
                element: <LancamentoMensal/>,
            },
        ],
    }
])