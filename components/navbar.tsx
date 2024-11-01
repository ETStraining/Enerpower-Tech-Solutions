"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isTechnologiesDropdownOpen, setIsTechnologiesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);
  const [isMobileTechnologiesDropdownOpen, setIsMobileTechnologiesDropdownOpen] = useState(false);

  useEffect(()=>{
    const handleOutsideClick = (e:MouseEvent)=>{
      const target = e.target as HTMLElement
      if(!target.closest('.dropdown-button')&& !target.closest(".dropdown-content")){
        setIsServicesDropdownOpen(false);
        setIsTechnologiesDropdownOpen(false)
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return ()=> document.removeEventListener("click", handleOutsideClick)
  },[])

  const handleServicesClick = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
    setIsTechnologiesDropdownOpen(false); 
  };

  const handleTechnologiesClick = () => {
    setIsTechnologiesDropdownOpen(!isTechnologiesDropdownOpen);
    setIsServicesDropdownOpen(false)
  };



  return (
    <nav>
      <div className="flex justify-between px-3 md:px-16 shadow-xl h-16 lg:h-16 xl:h-20 2xl:h-20 items-center 2xl:px-36">
        <div className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full w-16 xl:w-24 h-16 2xl:w-28"
          />
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:text-xl">
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} fontSize={30}/>
          </button>
        </div>

        <div className={`hidden md:flex items-center text-blue-950 md:text-sm xl:gap-20 2xl:text-md 2xl:gap-10`}>
          <Link href="/" className="hover:text-yellow-400 font-bold transition-colors lg:px-4">ABOUT US</Link>

          <div className="relative">
            <button
              onClick={handleServicesClick}
              className="dropdown-button hover:text-yellow-400 flex items-center space-x-3 font-bold transition-colors px-4"
            >
              <span>SERVICES</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {isServicesDropdownOpen && (
              <div className="dropdown-content absolute bg-white text-black mt-2 rounded-lg shadow-lg w-48 p-2 2xl:w-40 z-10">
                <Link href="/mainsystem" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded font-bold transition-colors" onClick={() => setIsServicesDropdownOpen(false)}>
                  Main system
                </Link>
                <Link href="/networksystem" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded font-bold transition-colors" onClick={() => setIsServicesDropdownOpen(false)}>
                  Networking system
                </Link>
                <Link href="/electronical" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded font-bold transition-colors" onClick={() => setIsServicesDropdownOpen(false)}>
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
              onClick={handleTechnologiesClick}
              className="dropdown-button hover:text-yellow-400 flex items-center font-bold transition-colors px-4"
            >
              <span className='mr-3'>TECHNOLOGY</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {isTechnologiesDropdownOpen && (
              <div className="dropdown-content absolute bg-white text-black mt-6 rounded-lg shadow-lg w-40 p-2  z-10 2xl:mt-12">
                <Link href="/tech-1" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded font-bold transition-colors" onClick={() => setIsTechnologiesDropdownOpen(false)}>
                  Tech 1
                </Link>
                <Link href="/tech-2" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded font-bold transition-colors" onClick={() => setIsTechnologiesDropdownOpen(false)}>
                  Tech 2
                </Link>
              </div>
            )}
          </div>
          <Link href="/" className="hover:text-yellow-400 font-bold transition-colors px-4">CONTACT US</Link>
          <Link href="/" className="hover:text-yellow-400 font-bold transition-colors px-4">APPLY</Link>

        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={`md:hidden mt-4 p-4 rounded-lg shadow-lg absolute bg-white z-10 w-full flex justify-center`}>
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
                <Link href="/electronical" className="py-2 hover:text-yellow-400 font-bold" onClick={() => { setIsMobileServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>Electrical system</Link>
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
