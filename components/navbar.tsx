"use client"; 
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faCaretDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isTechnologiesDropdownOpen, setIsTechnologiesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      document.body.classList.toggle('dark-mode', newMode);
      document.body.classList.toggle('light-mode', !newMode);
      return newMode;
    });
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      const darkModeEnabled = JSON.parse(savedDarkMode);
      setIsDarkMode(darkModeEnabled);
      document.body.classList.toggle('dark-mode', darkModeEnabled);
      document.body.classList.toggle('light-mode', !darkModeEnabled);
    } else {
      document.body.classList.add('light-mode'); // Default to light mode
    }
  }, []);

  const navbarClasses = `fixed top-0 left-0 w-full px-6 py-4 z-50 transition-all duration-300 ${
    isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
  } shadow-lg`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        {/* Logo with padding */}
        <div className="flex items-center p-2">
          <Image
            src="/est.png" // Replace with your logo image
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-xl">
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Middle: Navigation Links */}
        <div className={`hidden md:flex items-center space-x-6`}>
          <Link href="/how-to-start" className="hover:text-yellow-400 transition-colors">ABOUT US </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              className="hover:text-yellow-400 flex items-center space-x-1 transition-colors"
            >
              <span>SERVICES</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {isServicesDropdownOpen && (
              <div className="absolute bg-white text-black mt-2 rounded-lg shadow-lg w-48 p-2">
                <Link href="/service-1" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded transition-colors">
                  <span>Service 1</span>
                </Link>
                <Link href="/networkinginstallation" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded transition-colors">
                  <span>Service 2</span>
                </Link>
              </div>
            )}
          </div>

          {/* Technologies Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsTechnologiesDropdownOpen(!isTechnologiesDropdownOpen)}
              className="hover:text-yellow-400 flex items-center space-x-1 transition-colors"
            >
              <span>TECHNOLOGY</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {isTechnologiesDropdownOpen && (
              <div className="absolute bg-white text-black mt-2 rounded-lg shadow-lg w-48 p-2">
                <Link href="/tech-1" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded transition-colors">
                  <span>Tech 1</span>
                </Link>
                <Link href="/tech-2" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded transition-colors">
                  <span>Tech 2</span>
                </Link>
              </div>
            )}
          </div>

          <Link href="/careers" className="hover:text-yellow-400 transition-colors">CAREERS</Link>
         

          {/* Right: CTA and Contact */}
          <div className="flex items-center space-x-2">
           
            <Link href="/contact" className="hover:text-yellow-400 transition-colors">CONTACT US </Link>
          </div>

          {/* Dark Mode Toggle Icon */}
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon
              icon={isDarkMode ? faSun : faMoon}
              className="text-xl cursor-pointer transition-transform duration-500 text-yellow-400"
              onClick={toggleTheme}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden mt-4 p-4 rounded-lg ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} shadow-lg`}>
          <div className="flex flex-col space-y-2">
            <Link href="/how-to-start" className="py-2 text-center hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>ABOUT US</Link>
            <Link href="/services" className="py-2 text-center hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</Link>
            <Link href="/technologies" className="py-2 text-center hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>TECHNOLOGIES</Link>
            <Link href="/careers" className="py-2 text-center hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>CAREERS</Link>
            <Link href="/footer" className="py-2 text-center hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>CONTACT US</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
