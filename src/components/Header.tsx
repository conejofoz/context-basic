import { useContext } from "react"
import { OnlineUsers } from "./OnlineUsers"
import { CountContext } from "../contexts/CounterContext"

export const Header = ()=>{
    const counterCtx = useContext(CountContext);

    return (
        <header>
            <h1 className="text-3xl">Título da página ( {counterCtx?.onlineCount} )</h1>
            <OnlineUsers />
        </header>
    )
}