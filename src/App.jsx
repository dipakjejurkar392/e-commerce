import React, { useState } from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './login/Login';
import Registration from './login/Registration';
import ProductDetails from './component/ProductDetails';
import Product from './component/adminDashboard/Products';
import Dashboard from './component/adminDashboard/Dashboard';
import StatsCards from './component/adminDashboard/StatsCart';
import Showproduct from './component/adminDashboard/Showproduct';
import Alluser from './component/adminDashboard/Alluser';
import CheckOut from './component/CheckOut';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/product_details/:id" element={<ProductDetails />} />
          <Route path="/add_product" element={<Product />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/allproduct" element={<StatsCards />} />
          <Route path="/showproduct" element={<Showproduct />} />
          <Route path="/alluser" element={<Alluser />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
