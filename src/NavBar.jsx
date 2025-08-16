import { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar=() =>{
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  // Close menu when clicking outside, scrolling, or route changes
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About Us' },
    { path: '/ContactUs', name: 'Contact Us' },
    { path: '/services', name: 'Services' }
  ];

  return (
    <nav 
      ref={navRef}
      className="fixed w-full bg-white/20 backdrop-blur-md border-b border-white/10 shadow-lg z-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="text-xl font-bold hove:transition"
          >
            Shanghai Cafe
          </NavLink>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `hover:text-red-400 transition ${isActive ? 'text-red-500 font-medium' : 'text-gray-800'}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          
          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-4 py-2 bg-white/60 backdrop-blur-md">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block py-2 transition ${
                  isActive ? 'text-red-500 font-medium' : 'text-gray-800 hover:text-red-400'
                }`
              }
            >
              {item.name}
            </NavLink>
            
          ))}
        </div>
        
      </div>
    </nav>
  );
}
export default NavBar;