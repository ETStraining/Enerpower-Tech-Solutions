import React from 'react';
import Container from '@/components/container'
 

const NetworkSystem = () => {
  return (
    <div>
     <Container>
      <div
        className="relative h-[800px]  md:h-[600px] lg:h-[400px] bg-cover bg-center rounded-lg overflow-hidden flex justify-center items-center"
        style={{
          backgroundImage: 'url("/netsystem.png")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative  text-center  text-white">
          <h1 className="text-3xl md:text-3xl font-bold mb-4 mt-28 drop-shadow-md">Networking and Installation <br />Services</h1>
          <p className="text-lg md:text-lg ">our Networking and Installation <br /> department is dedicated to providing <br />cutting-edge tecnology solutions to <br /> meet your business needs</p>
        </div>
      </div>
     
     <div className="space-y-6 text-left mt-4">
          <h2 className="text-2xl font-bold mb-10">Our expertise includes:</h2>
          <ul className="list-disc pl-5 space-y-8 ">
            <li>
              <strong>Computers, Laptops, and Desktops:</strong> Supplying, configuring, and installing high-performance computing systems to enhance productivity.
            </li>
            <li>
              <strong>Servers and Equipment:</strong> Offering server setup, installation, and maintenance for robust and secure data management.
            </li>
            <li>
              <strong>Network Switches, Routers, Firewalls, and Access Points:</strong> Designing and implementing efficient and secure network infrastructures tailored to your organization’s needs.
            </li>
            <li>
              <strong>Printers, Copiers, and Scanners:</strong> Installing and supporting multifunctional devices to streamline your office workflow and document management.
            </li>
          </ul>
          <div className="mb-8">
          <p>
            Our comprehensive networking solutions ensure that your business operates smoothly with secure and reliable IT infrastructure.
          </p>
          </div>
          
        
        </div>
       

     </Container>
     
    </div>
  );
};

export default NetworkSystem;