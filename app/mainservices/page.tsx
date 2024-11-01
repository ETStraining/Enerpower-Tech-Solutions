import Image from 'next/image';  
import Footer from '@/components/footer';

const Mainsystem = () => {
  return (
    <>
    <div className='px-4 lg:px-24'>
      <div className='py-32'>
        <h1 className='font-bold text-red text-4xl'>Main System</h1>
        <p className='text-6D758F '>
          We specialize in supplying materials, equipment, and tools, along
        </p>
        <p className='text-6D758F '>
          with expert installation and preventive maintenance services, 
        </p>
        <p className='text-custom-gray '>
          ensuring efficient and reliable support for all client needs.
        </p>
      </div>

      <div className='grid justify-between grid-cols-1 gap-10 px-4 lg:grid-cols-4 md:grid-cols-2'>
        <div className="mb-4">
          <Image
            src="/camera.png"
            alt="Main System Equipment"
            layout="responsive"
            width={900} 
            height={500}  // Adjust height for better aspect ratio
            className="w-full h-auto" // Add this class for responsiveness
          />
          <h1 className='font-bold text-blue'>Supply of materials,</h1>
          <h1 className='font-bold text-blue'>equipment, and tools</h1>
          <p className='text-6D758F'>Ensures the consistent availability of high-quality materials and equipment necessary for operational efficiency, with a streamlined process for sourcing and supplying required items.</p>
        </div>
        
        <div className="mb-4">
          <Image
            src="/installation.png"
            alt="Installation Services"
            layout="responsive"
            width={900} 
            height={500}  // Adjust height for better aspect ratio
            className="w-full h-auto" // Add this class for responsiveness
          />
          <h1 className='font-bold text-blue'>Installation Services</h1>
          <p className='text-6D758F'>Offers professional installation of various systems and equipment, ensuring that all installations meet industry standards and function reliably from day one. Our skilled technicians ensure a safe, efficient setup tailored to each client's needs.</p>
        </div>

        <div className="mb-4">
          <Image
            src="/maint.png"
            alt="Preventive Maintenance and Repair Services"
            layout="responsive"
            width={900} 
            height={500}  // Adjust height for better aspect ratio
            className="w-full h-auto" // Add this class for responsiveness
          />
          <h1 className='font-bold text-blue'>Preventive Maintenance and Repair Services</h1>
          <p className='text-6D758F'>Conducts routine maintenance and timely repairs to prevent breakdowns, extending the lifespan of assets and minimizing downtime through proactive service schedules.</p>
        </div>
      </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Mainsystem;
