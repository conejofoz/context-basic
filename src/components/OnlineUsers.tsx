import { useContext } from "react"
import { CountContext } from "../contexts/CounterContext"

export const OnlineUsers = ()=>{
    const count = useContext(CountContext)
    return (
        <div>
            <p>Usuários online: { count }</p>
        </div>
    )
}