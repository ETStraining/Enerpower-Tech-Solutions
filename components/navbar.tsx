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
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);
  const [isMobileTechnologiesDropdownOpen, setIsMobileTechnologiesDropdownOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      document.body.className = newMode ? 'dark-mode' : 'light-mode';
      return newMode;
    });
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    const darkModeEnabled = savedDarkMode ? JSON.parse(savedDarkMode) : false;
    setIsDarkMode(darkModeEnabled);
    document.body.className = darkModeEnabled ? 'dark-mode' : 'light-mode';
  }, []);

  const navbarClasses = `fixed top-0 left-0 w-full px-6 py-4 z-50 transition-all duration-300 ${
    isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
  } shadow-lg`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <div className="flex items-center p-2">
          <Image
            src="/est.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-xl">
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        <div className={`hidden md:flex items-center space-x-16`}>
          <Link href="/" className="hover:text-yellow-400 font-bold transition-colors">ABOUT US</Link>

          <div className="relative">
            <button
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              className="hover:text-yellow-400 flex items-center space-x-3 font-bold transition-colors"
            >
              <span>SERVICES</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {isServicesDropdownOpen && (
              <div className="absolute bg-white text-black mt-2 rounded-lg shadow-lg w-48 p-2">
                <Link href="/mainsystem" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded font-bold transition-colors" onClick={() => setIsServicesDropdownOpen(false)}>
                  Main system
                </Link>
                <Link href="/networksystem" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded font-bold transition-colors" onClick={() => setIsServicesDropdownOpen(false)}>
                  Networking system
                </Link>
                <Link href="/service-3" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded font-bold transition-colors" onClick={() => setIsServicesDropdownOpen(false)}>
                  Electrical system
                </Link>
                <Link href="/security" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded font-bold transition-colors" onClick={() => setIsServicesDropdownOpen(false)}>
                  Security system
                </Link>
              </div>
            )}
          </div>

          <div className=" flex justify-between">
            <button
              onClick={() => setIsTechnologiesDropdownOpen(!isTechnologiesDropdownOpen)}
              className="hover:text-yellow-400 flex items-center space-x-3 font-bold transition-colors mr-16"
            >
              <span>TECHNOLOGY</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {isTechnologiesDropdownOpen && (
              <div className="absolute bg-white text-black mt-2 rounded-lg shadow-lg w-48 p-2">
                <Link href="/tech-1" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded font-bold transition-colors" onClick={() => setIsTechnologiesDropdownOpen(false)}>
                  Tech 1
                </Link>
                <Link href="/tech-2" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded font-bold transition-colors" onClick={() => setIsTechnologiesDropdownOpen(false)}>
                  Tech 2
                </Link>
              </div>
            )}
          </div>
<div>  <Link href="/" className="hover:text-yellow-400 font-bold transition-colors ml-16">CONTACT US</Link></div>
         
        </div>

        <div className="flex items-center space-x-6">
          <FontAwesomeIcon
            icon={isDarkMode ? faSun : faMoon}
            className="text-xl cursor-pointer text-yellow-400"
            onClick={toggleTheme}
          />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={`md:hidden mt-4 p-4 rounded-lg ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} shadow-lg`}>
          <div className="flex flex-col space-y-2">
            <Link href="/" className="py-2 text-center hover:text-yellow-400 font-bold" onClick={() => setIsMobileMenuOpen(false)}>ABOUT US</Link>
            
            <button className="py-4 text-center hover:text-yellow-400 font-bold" onClick={() => setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen)}>
              SERVICES
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {isMobileServicesDropdownOpen && (
              <div className="flex flex-col space-y-2 pl-4">
                <Link href="/mainsystem" className="py-2 hover:text-yellow-400 font-bold" onClick={() => { setIsMobileServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>Main system</Link>
                <Link href="/networksystem" className="py-2 hover:text-yellow-400 font-bold" onClick={() => { setIsMobileServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>Networking system</Link>
                <Link href="/service-3" className="py-2 hover:text-yellow-400 font-bold" onClick={() => { setIsMobileServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>Electrical system</Link>
                <Link href="/security" className="py-2 hover:text-yellow-400 font-bold" onClick={() => { setIsMobileServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>Security system</Link>
              </div>
            )}

            <button className="py-2 text-center hover:text-yellow-400 font-bold" onClick={() => setIsMobileTechnologiesDropdownOpen(!isMobileTechnologiesDropdownOpen)}>
              TECHNOLOGY
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {isMobileTechnologiesDropdownOpen && (
              <div className="flex flex-col space-y-2 pl-4">
                <Link href="/tech-1" className="py-2 hover:text-yellow-400 font-bold" onClick={() => { setIsMobileTechnologiesDropdownOpen(false); setIsMobileMenuOpen(false); }}>Tech 1</Link>
                <Link href="/tech-2" className="py-2 hover:text-yellow-400 font-bold" onClick={() => { setIsMobileTechnologiesDropdownOpen(false); setIsMobileMenuOpen(false); }}>Tech 2</Link>
              </div>
            )}

            <Link href="/" className="py-2 text-center hover:text-yellow-400 font-bold" onClick={() => setIsMobileMenuOpen(false)}>CONTACT US</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
