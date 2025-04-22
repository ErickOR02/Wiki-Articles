import React from 'react'
import Allmodules from '../Allmodules/Allmodules.jsx'
import Header from '../Header/Header.jsx'

function Home() {
  return (
    <div>
         <Header />
      <h2 className='text-center' >Todos los artículos</h2>
         <Allmodules />
    </div>
  )
}

export default Home