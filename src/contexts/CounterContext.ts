import { createContext } from "react";

//export const CountInitialData = 0;

type CountOnlineType = {
    onlineCount: number;
    setOnlineCount: (n: number) => void;
}

export const CountContext = createContext<CountOnlineType | null>(null);