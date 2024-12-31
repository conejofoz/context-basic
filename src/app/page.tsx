"use client"

import { Header } from '../components/Header';
import { CountProvider } from '../contexts/CounterContext';
import { LoggedUserProvider } from '../contexts/LoggedUser';

const Page = () =>{


  return (
    <div className="container mx-auto">
      <CountProvider>
        <Header />
      </CountProvider>

      <LoggedUserProvider>
        <Header />
      </LoggedUserProvider>
    </div>
  )
}

export default Page;