"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from './themeContent'; // Adjust path as needed

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // No need for setDarkMode anymore
  const [isLoading, setIsLoading] = useState(true); // For loading effect

  useEffect(() => {
    // Simulate a loading period of 1 second
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // You can adjust the delay time
  }, []);

  return (
    <nav className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} p-4 transition-colors duration-300`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className={`flex items-center ${isLoading ? 'text-sm' : 'text-base'} transition-all duration-1000`}>
          <Image src="/est.png" alt="Logo" width={isLoading ? 24 : 32} height={isLoading ? 24 : 32} className="rounded-sm transition-all duration-1000" />
        </div>

        {/* Middle: Links */}
        <div className={`hidden md:flex space-x-6 ${isLoading ? 'text-sm' : 'text-base'} transition-all duration-1000`}>
          <Link href="/how-to-start" className="hover:text-yellow-400">How to start</Link>
          <Link href="/services" className="hover:text-yellow-400">Services</Link>
          <Link href="/technologies" className="hover:text-yellow-400">Technologies</Link>
          <Link href="/careers" className="hover:text-yellow-400">Careers</Link>
          <Link href="/about" className="hover:text-yellow-400">About</Link>
        </div>

        {/* Right: Build a Team Button & Contact Link */}
        <div className={`flex items-center space-x-3 ${isLoading ? 'text-sm' : 'text-base'} transition-all duration-1000`}>
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

          {/* Theme Toggle Icon */}
          <FontAwesomeIcon
            icon={isDarkMode ? faSun : faMoon}
            className={`ml-1 cursor-pointer transition-colors duration-300 ${
              isDarkMode ? 'text-yellow-500' : 'text-gray-700'
            } hover:text-yellow-300 ${isLoading ? 'text-sm' : 'text-lg'}`}
            onClick={toggleTheme}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
