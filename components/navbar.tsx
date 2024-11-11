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

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.dropdown-button') && !target.closest(".dropdown-content")) {
        setIsServicesDropdownOpen(false);
        setIsTechnologiesDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleServicesClick = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
    setIsTechnologiesDropdownOpen(false);
  };

  const handleTechnologiesClick = () => {
    setIsTechnologiesDropdownOpen(!isTechnologiesDropdownOpen);
    setIsServicesDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md  z-50">
      <div className="flex justify-between  md:px-16 md:py-[18px] py-6 items-center px-8">
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
            <button >
              <svg
                viewBox="0 0 512 512"
                fill="black"
                height="2.3em"
                width="2.3em"
              >
                <path d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm64 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm384 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
              </svg>

            </button>
          </button>
        </div>

        <div className={`hidden md:flex items-center text-blue-950 xl:gap-[30px] 2xl:gap-10`}>
          <Link href="/" className="hover:text-yellow-400 font-light lg:px-4 text-[15px]">ABOUT US</Link>

          <div className="relative">
            <button
              onClick={handleServicesClick}
              className="dropdown-button hover:text-yellow-400 flex items-center space-x-3 font-light text-[15px] transition-colors px-4"
            >
              <span>SERVICES</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {isServicesDropdownOpen && (
              <div className="absolute bg-white text-black mt-2 rounded-lg shadow-lg w-96 p-2">
                <Link href="/mainservices" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded font-light text-[15px]  transition-colors">
                  <span>Main system</span>
                </Link>
                <Link href="/networksystem" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded font-light text-[15px] transition-colors" onClick={() => setIsServicesDropdownOpen(false)}>
                  Networking system
                </Link>
                <Link href="/electronical" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded font-light text-[15px] transition-colors" onClick={() => setIsServicesDropdownOpen(false)}>
                  Electrical system
                </Link>
                <Link href="/security" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded font-light text-[15px] transition-colors" onClick={() => setIsServicesDropdownOpen(false)}>
                  Security system
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={handleTechnologiesClick}
              className="dropdown-button hover:text-yellow-400 flex items-center font-light text-[15px] transition-colors px-4"
            >
              <span className="mr-3">TECHNOLOGY</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {isTechnologiesDropdownOpen && (
              <div className="dropdown-content absolute bg-white text-black mt-6 rounded-lg shadow-lg w-40 p-2 z-10">
                <Link href="/tech" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded font-light text-[15px] transition-colors" onClick={() => setIsTechnologiesDropdownOpen(false)}>
                  Trainings & positions
                </Link>
                <Link href="/tech-2" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded font-light text-[15px] transition-colors" onClick={() => setIsTechnologiesDropdownOpen(false)}>
                  Tech 2
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact" className="hover:text-yellow-400 font-light text-[15px] transition-colors px-4">CONTACT US</Link>


        </div>
        <button className='md:flex hidden font-light text-[15px] transition-colors py-[15px] rounded-[12px] bg-[#136BBB] text-white px-[40px] '>Contact us</button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 p-4  shadow-lg  bg-white z-10 w-full h-full flex justify-center">
          <div className="flex flex-col ">
            <Link href="/" className="py-2 text-center hover:text-yellow-400 font-light text-[15px]" onClick={() => setIsMobileMenuOpen(false)}>ABOUT US</Link>

            <button className="py-4 text-center hover:text-yellow-400 font-light text-[15px]" onClick={() => setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen)}>
              SERVICES
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {isMobileServicesDropdownOpen && (
              <div className="flex flex-col space-y-2 pl-4">
                <Link href="/mainsystem" className="py-2 hover:text-yellow-400 font-light text-[15px]" onClick={() => { setIsMobileServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>Main system</Link>
                <Link href="/networksystem" className="py-2 hover:text-yellow-400 font-light text-[15px]" onClick={() => { setIsMobileServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>Networking system</Link>
                <Link href="/electronical" className="py-2 hover:text-yellow-400 font-light text-[15px]" onClick={() => { setIsMobileServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>Electrical system</Link>
                <Link href="/security" className="py-2 hover:text-yellow-400 font-light text-[15px]" onClick={() => { setIsMobileServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>Security system</Link>
              </div>
            )}

            <button className="py-2 text-center hover:text-yellow-400 font-light text-[15px]" onClick={() => setIsMobileTechnologiesDropdownOpen(!isMobileTechnologiesDropdownOpen)}>
              TECHNOLOGY
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {isMobileTechnologiesDropdownOpen && (
              <div className="flex flex-col space-y-2 pl-4">
                <Link href="/tech" className="py-2 hover:text-yellow-400 font-light text-[15px]" onClick={() => { setIsMobileTechnologiesDropdownOpen(false); setIsMobileMenuOpen(false); }}>Tech 1</Link>
                <Link href="/tech-2" className="py-2 hover:text-yellow-400 font-light text-[15px]" onClick={() => { setIsMobileTechnologiesDropdownOpen(false); setIsMobileMenuOpen(false); }}>Tech 2</Link>
              </div>
            )}

            <Link href="/" className="py-2 text-center hover:text-yellow-400 font-light text-[15px]" onClick={() => setIsMobileMenuOpen(false)}>CONTACT US</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
