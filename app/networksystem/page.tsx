import Image from "next/image";
import React from "react";
import Footer from '@/components/footer';

const NetworkingServices: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      
      <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-10 flex-grow">
        <div className="flex flex-col md:flex-row items-start justify-center w-full max-w-screen-lg mx-auto py-10 my-8 md:my-10">
          
          <div className="w-full md:w-1/2 pr-0 md:pr-10 mb-8">
            <h2 className="text-blue-600 text-xl md:text-2xl pt-4 md:pt-8 font-bold mb-4">
              NETWORKING AND INSTALLATION SERVICES
            </h2>
            <p className="text-gray-700 text-base md:text-lg font-semibold mb-4">
              Our Networking and Installation department is dedicated to providing cutting-edge technology solutions to meet your business needs.
            </p>

            
            <div className="bg-blue-100 p-4 md:p-6 lg:p-10 w-full md:w-[502px] h-auto md:h-[700px] rounded-lg flex flex-col items-start">
              <h3 className="text-gray-700 text-lg md:text-xl font-semibold mb-4 pb-6 md:pb-10">Our expertise includes:</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-sm md:text-base">
                <li>
                  <span className="font-semibold">Computers, Laptops, and Desktops:</span> Supplying, configuring, and installing high-performance computing systems to enhance productivity.
                </li>
                <li>
                  <span className="font-semibold">Servers and Equipment:</span> Offering server setup, installation, and maintenance for robust and secure data management.
                </li>
                <li>
                  <span className="font-semibold">Network Switches, Routers, Firewalls, and Access Points:</span> Designing and implementing efficient and secure network infrastructures tailored to your organization's needs.
                </li>
                <li>
                  <span className="font-semibold">Printers, Copiers, and Scanners:</span> Installing and supporting multifunctional devices to streamline your office workflow and document management.
                </li>
              </ul>
              <p className="text-gray-700 mt-10 md:mt-14 text-sm md:text-base">
                With our solutions, we ensure reliable, efficient, and sustainable energy systems for your operations.
              </p>
            </div>
          </div>

          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-10 px-2 md:px-4">
            <Image
              src="/networkservice.png" 
              alt="Networking and Installation Services"
              width={400} 
              height={550}
              className="object-cover rounded"
            />
          </div>

        </div>
      </div>

      {/* Footer */}
      <Footer className="mt-auto w-full" />
    </div>
  );
};

export default NetworkingServices;
