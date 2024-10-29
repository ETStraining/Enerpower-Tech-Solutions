import React from 'react';
import Container from '@/components/container';

const electricalsystem = () => {
  return (
    <Container>
      <div
        className="relative h-[800px] md:h-[600px] lg:h-[400px] bg-cover bg-center rounded-lg overflow-hidden flex justify-center items-center"
        style={{
          backgroundImage: 'url("/electrical.png")', 
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative text-center text-white">
          <h1 className="text-3xl md:text-3xl font-bold mb-4 mt-28 drop-shadow-md">ELECTRICAL SYSTEM</h1>
          <p className="text-lg md:text-lg">
            We specialize in delivering reliable and <br /> comprehensive electrical power solutions.
          </p>
        </div>
      </div>

      <div className="space-y-6 text-left mt-4">
        <h2 className="text-2xl font-bold mb-10">Our Expertise Includes:</h2>
        <ul className="list-disc pl-5 space-y-8">
          <li>
            <strong>Transformer:</strong> Supplying and servicing transformers for safe and efficient energy distribution.
          </li>
          <li>
            <strong>Generator:</strong> Providing installation and maintenance for various generator systems to ensure uninterrupted power supply.
          </li>
          <li>
            <strong>Switch gears:</strong> Offering high-quality switch gears to manage electrical power flow and safeguard your system.
          </li>
          <li>
            <strong>Tools and Equipment:</strong> Equipping industries with essential tools and equipment for efficient electrical system operation.
          </li>
          <li>
            <strong>UPS, Rectifiers, and Batteries:</strong> Installing and maintaining uninterruptible power suppliers, rectifiers, and batteries for continuous power and system stability.
          </li>
        </ul>
        <div className="mb-8">
          <p>
            With our solutions, we ensure reliable, efficient, and sustainable energy systems for your operations.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default electricalsystem;
