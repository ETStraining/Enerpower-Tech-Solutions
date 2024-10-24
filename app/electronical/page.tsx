import React from 'react';
import Container from '@/components/container';

const ElectricalSystem = () => {
  return (
    <div className="font-poppins"> {/* Apply Poppins font family */}
      <div
        className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[581px] w-full bg-cover bg-center flex justify-center items-center mx-auto"
        style={{
          backgroundImage: 'url("/electrical.png")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative text-center text-white">
          <h1 className="text-[28px] font-bold mb-2 mt-16 sm:mt-20 md:mt-28 drop-shadow-md">
            ELECTRICAL SYSTEM
          </h1>
          <p className="text-[28px] drop-shadow-sm">
            We specialize in delivering reliable and <br /> comprehensive electrical power solutions.
          </p>
        </div>
      </div>
      <Container>
        <div className="py-10 px-4">
          <h2 className="text-[28px] font-semibold mb-6">Our Expertise Includes:</h2>
          <ul className="list-none pl-6 space-y-6"> {/* Added space between list items */}
            <li className="flex items-start">
              <span className="text-[28px] mr-2 mt-1">•</span>
              <b className="text-[28px]">Transformer: </b>
              <span className="text-[28px]">
                Supplying and servicing transformers for safe and efficient energy distribution.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[28px] mr-2 mt-1">•</span>
              <b className="text-[28px]">Generator: </b>
              <span className="text-[28px]">
                Providing installation and maintenance for various generator systems to ensure uninterrupted power supply.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[28px] mr-2 mt-1">•</span>
              <b className="text-[28px]">Switch gears: </b>
              <span className="text-[28px]">
                Offering high-quality switch gears to manage electrical power flow and safeguard your system.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[28px] mr-2 mt-1">•</span>
              <b className="text-[28px]">Tools and Equipment: </b>
              <span className="text-[28px]">
                Equipping industries with essential tools and equipment for efficient electrical system operation.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[28px] mr-2 mt-1">•</span>
              <b className="text-[28px]">UPS, Rectifiers, and Batteries: </b>
              <span className="text-[28px]">
                Installing and maintaining uninterruptible power suppliers, rectifiers, and batteries for continuous power and system stability.
              </span>
            </li>
          </ul>
          <h2 className="mt-6 text-[28px]">
            With our solutions, we ensure reliable, efficient, and sustainable energy systems for your operations.
          </h2>
        </div>
      </Container>
    </div>
  );
};

export default ElectricalSystem;
