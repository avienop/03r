import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand - replace with your actual logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold">Shanghai Cafe</span>
          </div>
          
          {/* Desktop Navigation - hidden on mobile */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-red-400 transition">Home</a>
            <a href="#" className="hover:text-red-400 transition">Blog</a>
            <a href="#" className="hover:text-red-400 transition">Contact Us</a>
            <a href="#" className="hover:text-red-400 transition">Services</a>
          </div>
          
          {/* Mobile menu button - hidden on desktop */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu - appears when hamburger is clicked */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-gray-800">
          <a href="#" className="block px-3 py-2 hover:text-red-400">Home</a>
          <a href="#" className="block px-3 py-2 hover:text-red-400">Blog</a>
          <a href="#" className="block px-3 py-2 hover:text-red-400">Contact Us</a>
          <a href="#" className="block px-3 py-2 hover:text-red-400">Services</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;