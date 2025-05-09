import React from 'react'
import Allmodules from '../Allmodules/Allmodules.jsx'
import Header from '../Header/Header.jsx'

function Home() {
  return (
    <div className='max-w-[1440px] w-full mx-auto px-4'>
         <Header />
      <h2 className='text-center' >Todos los artículos</h2>
         <Allmodules />
    </div>
  )
}

export default Home