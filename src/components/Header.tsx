import { useContext } from "react"
import { OnlineUsers } from "./OnlineUsers"
import { CountContext } from "../contexts/CounterContext"
import { LoggedUserContext } from "../contexts/LoggedUser";

export const Header = ()=>{
    const counterCtx = useContext(CountContext);
    const loggedUserCtx = useContext(LoggedUserContext)

    const handleLogout = ()=>{
        loggedUserCtx?.setName('');
    }

    return (
        <header>
            <h1 className="text-3xl">Título da página ( {counterCtx?.onlineCount} )</h1>
            <OnlineUsers />

            {loggedUserCtx?.name &&
                <>
                    <p className="mt-5">Usuário logado: {loggedUserCtx?.name}</p>
                    <button onClick={handleLogout}>Sair</button>
                </>
            }

            {(!loggedUserCtx || loggedUserCtx?.name === '') &&
                <p>Usuário DESLOGADO</p>
            }
        </header>
    )
}