"use client";
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Image src="/est.png" alt="Logo" width={32} height={32} className="rounded-sm" />
        </div>

        {/* Middle: Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/how-to-start" className="hover:text-yellow-400">
            How to start
          </Link>
          <Link href="/services" className="hover:text-yellow-400">
            Services
          </Link>
          <Link href="/technologies" className="hover:text-yellow-400">
            Technologies
          </Link>
          <Link href="/careers" className="hover:text-yellow-400">
            Careers
          </Link>
          <Link href="/about" className="hover:text-yellow-400">
            About
          </Link>
        </div>

        {/* Right: Build a Team Button & Contact Link */}
        <div className="flex items-center space-x-3">
          <Link href="/build-a-team">
            <button className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black">
              BUILD A TEAM →
            </button>
          </Link>
          <Link href="/contact-us" className="flex items-center hover:text-yellow-400">
            <span>Contact Us</span>
          </Link>
          <FontAwesomeIcon icon={faSun} className="text-yellow-500 ml-1 transition-colors duration-300 hover:text-yellow-300" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
