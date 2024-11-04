import React from 'react';
import Container from '@/components/container';

const ElectricalSystem = () => {
  return (
    <div>
      <div
        className="relative"
        style={{
          width: '1796px',
          height: '581px',
          backgroundImage: 'url("/electrical.png")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative text-center text-white px-4 h-full flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 drop-shadow-md">ELECTRICAL SYSTEM</h1>
          <p className="text-base md:text-lg lg:text-2xl drop-shadow-sm">We specialize in delivering reliable and <br /> comprehensive electrical power solutions.</p>
        </div>
      </div>

      <Container>
        <div className="py-10 px-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Our Expertise Includes:</h2>
          <ul className="list-none pl-6">
            <li className="mb-2 flex items-start">
              <span className="text-2xl mr-2 mt-1">•</span>
              <b className="text-lg md:text-xl">Transformer:</b>
              <span className="ml-1" style={{ fontSize: '28px' }}>Supplying and servicing transformers for safe and efficient energy distribution.</span>
            </li>
            <li className="mb-2 flex items-start">
              <span className="text-2xl mr-2 mt-1">•</span>
              <b className="text-lg md:text-xl">Generator:</b>
              <span className="ml-1" style={{ fontSize: '28px' }}>Providing installation and maintenance for various generator systems to ensure uninterrupted power supply.</span>
            </li>
            <li className="mb-2 flex items-start">
              <span className="text-2xl mr-2 mt-1">•</span>
              <b className="text-lg md:text-xl">Switch gears:</b>
              <span className="ml-1" style={{ fontSize: '28px' }}>Offering high-quality switch gears to manage electrical power flow and safeguard your system.</span>
            </li>
            <li className="mb-2 flex items-start">
              <span className="text-2xl mr-2 mt-1">•</span>
              <b className="text-lg md:text-xl">Tools and Equipment:</b>
              <span className="ml-1" style={{ fontSize: '28px' }}>Equipping industries with essential tools and equipment for efficient electrical system operation.</span>
            </li>
            <li className="mb-2 flex items-start">
              <span className="text-2xl mr-2 mt-1">•</span> 
              <b className="text-lg md:text-xl">UPS, Rectifiers,and Batteries:</b> 
              <span className="ml-1" style={{ fontSize: '28px' }}>Installing and maintaining uninterruptible power suppliers, rectifiers, and batteries for continuous power and system stability.</span>
            </li>
          </ul>
          <h2 className="mt-4 text-lg md:text-xl lg:text-2xl">With our solutions, we ensure reliable, efficient, and sustainable energy systems for your operations.</h2>
        </div>
      </Container>
    </div>
  );
};

export default ElectricalSystem;
