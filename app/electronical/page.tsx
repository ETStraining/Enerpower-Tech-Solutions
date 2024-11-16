import React from 'react';
import Container from '@/components/container';

const ElectricalSystem: React.FC = () => {
  return (
    <div className="flex justify-center">
      <Container>
        <div className="flex flex-col md:flex-row-reverse py-8 px-4 items-center space-y-6 md:space-y-0">
          <div className="flex-1 md:pl-8 text-left animate__animated animate__fadeIn animate__delay-1s">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500">
              ELECTRICAL SYSTEM
            </h1>
            <hr className="my-4" />
            <p className="text-base sm:text-lg md:text-xl mb-4 text-gray-700">
              <b>• Transformer:</b> Supplying and servicing transformers for safe and efficient energy distribution.
            </p>
            <p className="text-base sm:text-lg md:text-xl mb-4 text-gray-700">
              <b>• Generator:</b> Providing installation and maintenance for various generator systems to ensure uninterrupted power supply.
            </p>
          </div>

          <div className="flex-1 w-full max-w-md md:max-w-full">
            <div
              className="relative rounded-lg overflow-hidden mt-10 sm:mt-14 md:mt-20 w-full h-52 sm:h-64 md:h-80 lg:h-96 transform transition-all duration-500 ease-in-out hover:scale-105"
              style={{
                backgroundImage: 'url("/electrical.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row py-8 px-4 items-center space-y-6 md:space-y-0">
          <div className="flex-1 md:pr-8 text-left animate__animated animate__fadeIn animate__delay-2s">
            <ul className="text-base sm:text-lg md:text-xl text-gray-700 space-y-4">
              <li>
                <b>• Switch gears:</b> Offering high-quality switch gears to manage electrical power flow and safeguard your system.
              </li>
              <li>
                <b>• Tools and Equipment:</b> Equipping industries with essential tools and equipment for efficient electrical system operation.
              </li>
              <li>
                <b>• UPS, Rectifiers, and Batteries:</b> Installing and maintaining uninterruptible power supplies, rectifiers, and batteries for continuous power and system stability.
              </li>
            </ul>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700">
              With our solutions, we ensure reliable, efficient, and sustainable energy systems for your operations.
            </p>
          </div>

          <div className="flex-1 w-full max-w-md md:max-w-full">
            <div
              className="relative rounded-lg overflow-hidden w-full h-52 sm:h-64 md:h-80 lg:h-96 transform transition-all duration-500 ease-in-out hover:scale-105"
              style={{
                backgroundImage: 'url("/installation.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ElectricalSystem;
