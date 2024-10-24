import React from 'react';
import Navbar from '../components/navbar';  
import Footer from '../components/footer';  

const ElectricalSystem = () => {
  return (
    <div>
      <Navbar />
      <div
        className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: 'url("/electrical.png")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 mt-28 drop-shadow-md">ELECTRICAL SYSTEM</h1>
          <p className="text-lg md:text-2xl drop-shadow-sm">We specialize in delivering reliable and <br /> comprehensive electrical power solutions.</p>
        </div>
      </div>
      <div className="py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Expertise Includes:</h2>
        <ul className="list-none pl-6">
          <li className="mb-2 flex items-start">
            <span className="text-2xl mr-2 mt-1">•</span> <b className="text-xl">Transformer: </b> <span className="text-lg">Supplying and servicing transformers for safe and efficient energy distribution.</span>
          </li>
          <li className="mb-2 flex items-start">
            <span className="text-2xl mr-2 mt-1">•</span> <b className="text-xl">Generator: </b> <span className="text-lg">Providing installation and maintenance for various generator systems to ensure uninterrupted power supply.</span>
          </li>
          <li className="mb-2 flex items-start">
            <span className="text-2xl mr-2 mt-1">•</span> <b className="text-xl">Switch gears: </b> <span className="text-lg">Offering high-quality switch gears to manage electrical power flow and safeguard your system.</span>
          </li>
          <li className="mb-2 flex items-start">
            <span className="text-2xl mr-2 mt-1">•</span> <b className="text-xl">Tools and Equipment: </b> <span className="text-lg">Equipping industries with essential tools and equipment for efficient electrical system operation.</span>
          </li>
          <li className="mb-2 flex items-start">
            <span className="text-2xl mr-2 mt-1">•</span> <b className="text-xl">UPS, Rectifiers, and Batteries: </b> <span className="text-lg">Installing and maintaining uninterruptible power suppliers, rectifiers, and batteries for continuous power and system stability.</span>
          </li>
        </ul>
        <h2 className="mt-4 text-lg md:text-xl">With our solutions, we ensure reliable, efficient, and sustainable energy systems for your operations.</h2>
      </div>
      <Footer />
    </div>
  );
};

export default ElectricalSystem;