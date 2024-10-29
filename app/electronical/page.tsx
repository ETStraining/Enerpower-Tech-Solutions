import React from 'react';
import Container from '@/components/container';

const ElectricalSystem: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div
        className="relative w-full h-[581px] rounded-lg overflow-hidden"
        style={{
          backgroundImage: "url('/electrical.png')", // Use double quotes here
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative text-center text-white px-4 h-full flex flex-col justify-center items-center mt-20">
          <h1 className="text-[20px] sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 drop-shadow-md">
            ELECTRICAL SYSTEM
          </h1>
          <p className="text-[20px] sm:text-base md:text-lg lg:text-xl drop-shadow-sm">
            We specialize in delivering reliable and <br /> comprehensive electrical power solutions.
          </p>
        </div>
      </div>

      <Container>
        <div className="py-10 px-4">
          <h2 className="text-[38px] sm:text-xl md:text-2xl font-semibold mb-4">
            Our Expertise Includes:
          </h2>
          <ul className="list-none pl-6">
            <li className="mb-2 flex items-start">
              <span className="text-[30px] mr-2 mt-1">•</span>
              <b className="text-[30px] sm:text-lg md:text-xl font-bold">Transformer:</b>
              <span className="ml-1 text-[30px] lg:text-lg">Supplying and servicing transformers for safe and efficient energy distribution.</span>
            </li>
            <li className="mb-2 flex items-start">
              <span className="text-[30px] mr-2 mt-1">•</span>
              <b className="text-[30px] sm:text-lg md:text-xl font-bold">Generator:</b>
              <span className="ml-1 text-[30px] lg:text-lg">Providing installation and maintenance for various generator systems to ensure uninterrupted power supply.</span>
            </li>
            <li className="mb-2 flex items-start">
              <span className="text-[30px] mr-2 mt-1">•</span>
              <b className="text-[30px] sm:text-lg md:text-xl font-bold">Switch gears:</b>
              <span className="ml-1 text-[30px] lg:text-lg">Offering high-quality switch gears to manage electrical power flow and safeguard your system.</span>
            </li>
            <li className="mb-2 flex items-start">
              <span className="text-[30px] mr-2 mt-1">•</span>
              <b className="text-[30px] sm:text-lg md:text-xl font-bold">Tools and Equipment:</b>
              <span className="ml-1 text-[30px] lg:text-lg">Equipping industries with essential tools and equipment for efficient electrical system operation.</span>
            </li>
            <li className="mb-2 flex items-start">
              <span className="text-[30px] mr-2 mt-1">•</span>
              <b className="text-[30px] sm:text-lg md:text-xl font-bold">UPS, Rectifiers, and Batteries:</b>
              <span className="ml-1 text-[30px] lg:text-lg">Installing and maintaining uninterruptible power suppliers, rectifiers, and batteries for continuous power and system stability.</span>
            </li>
          </ul>
          <h2 className="mt-4 text-[30px] sm:text-lg md:text-xl lg:text-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
            With our solutions, we ensure reliable, efficient, and sustainable energy systems for your operations.
          </h2>
        </div>
      </Container>
    </div>
  );
};

export default ElectricalSystem;
