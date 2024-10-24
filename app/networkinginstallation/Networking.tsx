import React from 'react';


const Networking: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-none">
      <div className="w-full max-w-4xl p-8">
        {/* Image Section as Background with Centered Text */}
        <div 
          className="w-full mb-8 h-96 bg-cover bg-center bg-no-repeat  relative flex items-center justify-center" 
          style={{ backgroundImage: "url('/Rectangle 26 (2).png')" }}
        >
          <div className="text-center text-white  bg-opacity-50 p-4 rounded-md">
            <h1 className="text-3xl font-bold mb-4">Networking and Installation Services</h1>
            <p className="text-lg ">
              Our Networking and Installation department is dedicated to providing cutting-edge technology solutions to meet your business needs.
            </p>
          </div>
        </div>

        {/* Expertise Details with Bullets */}
        <div className="space-y-4 text-left">
          <h2 className="text-xl font-semibold mb-4">Our expertise includes:</h2>
          <ul className="list-disc pl-5 space-y-4 text-lg">
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
        </div>

        {/* Footer Section */}
        <div className="mt-12 text-center text-lg">
          <p>
            Our comprehensive networking solutions ensure that your business operates smoothly with secure and reliable IT infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Networking;
