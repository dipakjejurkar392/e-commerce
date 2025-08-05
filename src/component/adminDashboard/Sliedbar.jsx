import React, { useState, useEffect } from 'react';
import StatsCards from './StatsCart';
import { Link } from 'react-router-dom';
import Graph from './Graph';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true); // Always open sidebar on md+
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial state
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container-fluid my-5">
      {/* Top Navbar for Mobile */}
      {isMobile && (
        <nav className="navbar navbar-dark bg-dark d-md-none">
          <div className="container-fluid">
            <button className="btn btn-outline-light" onClick={toggleSidebar}>
              ☰
            </button>
            <span className="navbar-brand">My App</span>
          </div>
        </nav>
      )}

      <div className="row">
        {/* Sidebar */}
        {(isOpen || !isMobile) && (
          <div className="col-md-3 col-lg-2 bg-dark text-white p-3 min-vh-100 position-fixed position-md-static">
            <h5>Menu</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                {/* <a className="nav-link text-white" href="#">Dashboard</a> */}
                <Link className="nav-link text-white border" to='/allproduct'> product</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Settings</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Logout</a>
              </li>
            </ul>
          </div>
        )}

        {/* Main Content */}
        <div
          className={`${
            isOpen && isMobile ? 'col-9 offset-3' : 'col-md-9 offset-md-3 col-lg-10 offset-lg-2'
          } p-3`}
        >
          {/* <h2>Welcome</h2>
          <p>This is your main content area.</p> */}
          {/* <StatsCards/> */}
          {/* <Graph/> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
