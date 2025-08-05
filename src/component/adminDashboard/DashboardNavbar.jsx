import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const DashboardNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="text-2xl font-bold text-green-600 hover:scale-105 transition">
          Dashboard
        </Link>

        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/dashboard" className="text-gray-700 hover:text-green-600 font-medium transition hover:scale-105">
            Home
          </Link>
          <Link to="/allproduct" className="text-gray-700 hover:text-green-600 font-medium transition hover:scale-105">
            Products
          </Link>
          <span className="text-gray-400 font-medium">Disabled</span>
        </div>

        <div className="hidden md:flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition">
            Search
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-3 space-y-2">
          <Link
            to="/dashboard"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-green-600 font-medium transition"
          >
            Home
          </Link>
          <Link
            to="/allproduct"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-green-600 font-medium transition"
          >
            Products
          </Link>
          <span className="block text-gray-400 font-medium">Disabled</span>

          <div className="flex items-center gap-2 mt-2">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-400 transition w-full"
            />
            <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition">
              Search
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default DashboardNavbar;
