"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from './themeContent'; // Adjust path as needed

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true); // For loading effect
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To handle mobile menu toggle

  useEffect(() => {
    // Simulate a loading period of 1 second
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} p-4 transition-colors duration-300`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className={`flex items-center ${isLoading ? 'text-sm' : 'text-base'} transition-all duration-1000`}>
          <Image src="/est.png" alt="Logo" width={isLoading ? 24 : 32} height={isLoading ? 24 : 32} className="rounded-sm transition-all duration-1000" />
        </div>

        {/* Right: Theme Toggle Icon */}
        <div className="flex items-center space-x-3">
          

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <FontAwesomeIcon 
              icon={isMenuOpen ? faTimes : faBars} 
              className="text-2xl cursor-pointer" 
              onClick={handleMenuToggle} 
            />
          </div>
        </div>

        {/* Middle: Links for desktop */}
        <div className="hidden md:flex space-x-6">
          <Link href="/how-to-start" className="hover:text-yellow-400">How to start</Link>
          <Link href="/services" className="hover:text-yellow-400">Services</Link>
          <Link href="/technologies" className="hover:text-yellow-400">Technologies</Link>
          <Link href="/careers" className="hover:text-yellow-400">Careers</Link>
          <Link href="/about" className="hover:text-yellow-400">About</Link>
        </div>

        {/* Right: Build a Team Button & Contact Link */}
        <div className="hidden md:flex items-center space-x-3">
          <Link href="/build-a-team">
            <button className={`border px-4 py-2 rounded transition-colors duration-300 ${
              isDarkMode ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'
            }`}>
              BUILD A TEAM →
            </button>
          </Link>
          <Link href="/footer" className="flex items-center hover:text-yellow-400">
            <span>Contact Us</span>
          </Link>

          <FontAwesomeIcon
            icon={isDarkMode ? faSun : faMoon}
            className={`text-lg cursor-pointer transition-colors duration-300 ${
              isDarkMode ? 'text-yellow-500' : 'text-gray-700'
            } hover:text-yellow-300`}
            onClick={toggleTheme}
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown as Card */}
      {isMenuOpen && (
        <div className={`md:hidden mt-4 p-4 rounded-lg ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} shadow-lg`}>
          <Link href="/how-to-start" className="block py-2 hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>How to start</Link>
          <Link href="/services" className="block py-2 hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link href="/technologies" className="block py-2 hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>Technologies</Link>
          <Link href="/careers" className="block py-2 hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>Careers</Link>
          <Link href="/about" className="block py-2 hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/build-a-team" className="block py-2 hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>Build a Team</Link>
          <Link href="/footer" className="block py-2 hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
