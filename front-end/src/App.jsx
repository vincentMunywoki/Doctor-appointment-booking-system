import React from 'react'
import { Routes } from 'react-router-dom'
import home from './pages/home'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>

      <Routes>
        <Routes path='/' element={<home />} />
      </Routes>
      
    </div>
  )
}

export default App