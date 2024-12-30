import { useContext } from "react"
import { CountContext } from "../contexts/CounterContext"

export const OnlineUsers = ()=>{
    //const count = useContext(CountContext)
    const countCtx = useContext(CountContext)

    const handleBanAll = ()=>{

        countCtx?.setOnlineCount(0);

    }


    return (
        <>
            <p>Usuários online: { countCtx?.onlineCount }</p>
            <button
             className="bg-gray-200 p-2 border border-gray-400 rounded-md"
             onClick={handleBanAll}>Banir todo mundo
            </button>
        </>
    )
}