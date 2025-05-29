import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Login from './login/Login'
import Registration from './login/Registration'
import ProductDetails from './component/ProductDetails'
import Product from './component/adminDashboard/Products'

const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/product_details/:id" element={<ProductDetails/>} />
        <Route path="/add_product" element={<Product/>} />




      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
