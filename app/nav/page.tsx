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

  const navbarClasses = `fixed top-0 left-0 w-full px-4 py-3 z-50 transition-all duration-300 ${
    isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
  } shadow-lg`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        {/* Logo */}
        <div className="flex items-center">
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
          <Link href="/how-to-start" className="hover:text-yellow-400 transition-colors">How to start</Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              className="hover:text-yellow-400 flex items-center space-x-1 transition-colors"
            >
              <span>Services</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {isServicesDropdownOpen && (
              <div className="absolute bg-white text-black mt-2 rounded-lg shadow-lg w-48 p-2">
                <Link href="/service-1" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded transition-colors">
                  <span>Service 1</span>
                </Link>
                <Link href="/service-2" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded transition-colors">
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
              <span>Technologies</span>
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

          <Link href="/careers" className="hover:text-yellow-400 transition-colors">Careers</Link>
          <Link href="/about" className="hover:text-yellow-400 transition-colors">About</Link>

          {/* Right: CTA and Contact */}
          <div className="flex items-center space-x-2">
            <Link
              href="/build-a-team"
              className={`border px-4 py-2 rounded-lg transition-colors duration-300 ${
                isDarkMode
                  ? 'border-white text-white bg-gray-900 hover:bg-white hover:text-black'
                  : 'border-black text-black bg-gray-100 hover:bg-black hover:text-white'
              }`}
            >
              BUILD A TEAM →
            </Link>
            <Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact us</Link>
            {/* Dark Mode Toggle Icon */}
           
          </div>
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
            <Link href="/how-to-start" className="py-2 text-center hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>How to start</Link>
            <Link href="/services" className="py-2 text-center hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <Link href="/technologies" className="py-2 text-center hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>Technologies</Link>
            <Link href="/careers" className="py-2 text-center hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
            <Link href="/about" className="py-2 text-center hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link href="/build-a-team" className="py-2 text-center hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>Build a Team</Link>
            <Link href="/footer" className="py-2 text-center hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
