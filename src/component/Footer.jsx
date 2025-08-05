import React from 'react';
import Logo from '../assets/logo2.png'
import { FiSend } from "react-icons/fi";
// import { Toaster } from 'react-hot-toast';
import {
  FaFacebookF,
  FaGoogle,
 
  FaLinkedinIn,
 
  FaYoutube,
} from 'react-icons/fa6';
import { IoIosMail, IoMdCall } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import footerBg from '../assets/robot.jpg'; 
import { Link } from 'react-router-dom';
import EmailForm from './EmailForm';

const Footer = () => {
  return (
    <footer
      className="relative text-white pt-16 pb-8 overflow-hidden lg:h-140"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',

      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/70" />

      {/* Main Footer Content */}
      <div className="relative z-10 ml-0 sm:ml-10 mx-auto md:ml-10 px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">

      {/* <div className="relative z-10 sm:ml-10 mx-auto px-6 md:px-12 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-5 gap-0"> */}
        {/* Left Section */}
        <div>
          <img
            src={Logo}
            style={{ width: '190px' }}
            alt="Logo"
          />
          <p className="mt-4 text-gray-300 text-md">
            We provide innovative solutions tailored to your needs. Join us in transforming your digital landscape.
          </p>
          <h4 className="mt-4 text-red-500 font-semibold text-lg">Follow Us</h4>
          <div className="flex gap-4 mt-3 text-3xl">
            <Link to="https://www.facebook.com/comzent" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-red-500 cursor-pointer" />
            </Link>
            <Link to="https://www.youtube.com/@ComzentTechnologies_01" target="_blank" rel="noopener noreferrer">

              <FaYoutube className="hover:text-red-500 cursor-pointer" />
            </Link>

            <Link to="https://www.comzent.com/" target="_blank" rel="noopener noreferrer">
              <FaGoogle className="hover:text-red-500 cursor-pointer" />
            </Link>
            <Link to="https://www.linkedin.com/company/comzent-technologies/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:text-red-500 cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* OUR SERVICES */}
       <div className=" lg:pl-25">

          <h4 className="text-xl font-semibold mb-4 mt-4 md:mt-0">OUR SERVICES</h4>
          <ul className="space-y-3 text-gray-300 text-md">
            <li>Web Design</li>
            <li>App Development</li>
            <li>Cloud Solutions</li>
            <li>SEO Services</li>
          </ul>
        </div>

        {/* INFORMATION */}
        <div className="lg:pl-13">
          <h4 className="text-xl font-semibold mb-4 mt-4 md:mt-0 pr-5">INFORMATION</h4>
          <ul className="space-y-3 text-gray-300 text-md">
            <li>About Us</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* GET IN TOUCH & Newsletter */}
        <div>
          <h4 className="text-xl font-semibold mb-4 mt-4 md:mt-0 ">GET IN TOUCH</h4>
          <ul className="space-y-3 text-gray-300 text-md">
            <li className="flex items-start gap-2 lg:w-100">
              <FaLocationDot className="mt-1 text-4xl" /> Hi tech Business City Complex,
              C Wing, 1st Floor, Office No: C-215/216, Plot No.31-N,
              Opps. Ajanta Pharma Company
              Chilkalthana MIDC, Aurangabad - 431006, Maharashtra
            </li>
            <li className="flex items-center gap-2">
              <IoMdCall /> (+91)-8788831601
            </li>
            <li className="flex items-center gap-2">
              <IoIosMail /> contact@comzent.com
            </li>
          </ul>

          <div className="mt-6 lg:w-80">
            <h4 className="text-xl font-semibold mb-4">NEWSLETTER</h4>
            <p className="text-gray-300 text-md mb-4">Subscribe to our newsletter for the latest updates!</p>
            
          </div>
          <EmailForm/>
           
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 text-left px-6  text-gray-400 text-md mt-1 lg:ml-50">
        ©  2025 Your Company. Designed with passion by  <span className="text-red-500">Comzent Technologies Pvt.Ltd.</span>
      </div>
    </footer>
  );
};

export default Footer;
