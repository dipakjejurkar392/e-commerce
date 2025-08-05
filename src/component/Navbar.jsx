import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { img } from 'framer-motion/client';
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-black'
      }`}
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div
          className={`text-2xl font-bold tracking-widest cursor-pointer transition ${
            scrolled ? 'text-black' : 'text-white'
          }`}
        >
         
         {/* {scrolled ?  <img src={logo3} alt=""   /> : <img src={logo4} alt=""   />} */}
         {scrolled ? (
  <img
    src={logo3}
    alt="Scrolled Logo"
    className="h-20 w-auto transition-all duration-300 ease-in-out"
  />
) : (
  <img
    src={logo4}
    alt="Default Logo"
    className="h-20 w-auto transition-all duration-300 ease-in-out"
  />
)}

        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <a
            href="#"
            className={`transition font-medium ${
              scrolled ? 'text-black hover:text-green-600' : 'text-white hover:text-green-400'
            }`}
          >
            Home
          </a>
          <a
            href="#"
            className={`transition font-medium ${
              scrolled ? 'text-black hover:text-green-600' : 'text-white hover:text-green-400'
            }`}
          >
            About
          </a>
          <a
            href="#"
            className={`transition font-medium ${
              scrolled ? 'text-black hover:text-green-600' : 'text-white hover:text-green-400'
            }`}
          >
            Services
          </a>
          <a
            href="#"
            className={`transition font-medium ${
              scrolled ? 'text-black hover:text-green-600' : 'text-white hover:text-green-400'
            }`}
          >
            Contact
          </a>

         

          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
            Get Started
          </button>
           {/* Cart Button */}
          <button onClick={()=>navigate("/checkout")} className="relative pl-6 text-white hover:scale-105 transition">
            <ShoppingCart
              className={`${
                scrolled ? 'text-black' : 'text-white'
              }`}
              size={24}
            />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              2
            </span>
          </button>
        </div>

        <div className="md:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white px-8 py-4 space-y-2">
          <a href="#" className="block hover:text-green-400">Home</a>
          <a href="#" className="block hover:text-green-400">About</a>
          <a href="#" className="block hover:text-green-400">Services</a>
          <a href="#" className="block hover:text-green-400">Contact</a>
          <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 w-full rounded-md hover:bg-green-600 transition">
            <ShoppingCart size={18} />
            Cart (2)
          </button>
          <button className="bg-green-500 text-white px-4 py-2 w-full rounded-md hover:bg-green-600 transition">
            Get Started
          </button>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
