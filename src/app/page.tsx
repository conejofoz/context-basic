"use client"



import { useState } from 'react';
import { Header } from '../components/Header';
import { CountContext } from '../contexts/CounterContext';

const Page = () =>{
  const [onlineCount, setOnlineCount] = useState(90);


  return (
    <div className="container mx-auto">
      <CountContext.Provider value={{onlineCount, setOnlineCount}} >
        <Header />
      </CountContext.Provider>
    </div>
  )
}

export default Page;