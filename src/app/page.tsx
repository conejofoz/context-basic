"use client"



import { Header } from '../components/Header';
import { CountContext, CountInitialData } from '../contexts/CounterContext';

const Page = () =>{
  return (
    <div className="container mx-auto">
      <CountContext.Provider value={CountInitialData} >
        <Header />
      </CountContext.Provider>
    </div>
  )
}

export default Page;