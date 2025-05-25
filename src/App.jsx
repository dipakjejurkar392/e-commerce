import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
     <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Navbar/>} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
