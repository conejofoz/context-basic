import { createContext, ReactNode, useState } from "react";

type CountOnlineType = {
    onlineCount: number;
    setOnlineCount: (n: number) => void;
}

export const CountContext = createContext<CountOnlineType | null>(null);


/* PASSANDO O PROVIDER PARA O MESMO ARQUIVO DO CONTEXT */

type Props = {
    children: ReactNode
}
export const CountProvider = ({children}: Props) =>{
    const [onlineCount, setOnlineCount] = useState(45);
    return (
        <CountContext.Provider value={{onlineCount, setOnlineCount}}>
            {children}
        </CountContext.Provider>
    )
}