import Image from 'next/image';
import Footer from '../components/footer';

const Mainsystem = () => {
  return (
    <div className="container mx-auto  py-6">
    
      <div className="relative w-full  ">
        <Image
          src="/main.png"
          alt="Main System Equipment"
          layout="responsive"
          width={500} 
          height={300} 
         
         
        />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center mb-80 text-white   z-10">
          <h1 className="text-4xl sm:text-4xl font-bold">Main system</h1>
          <p className="mt-4 text-lg sm:text-4xl sm:text-2xl font-medium">v Supply of materials, equipment, and tools</p>
          <p className="text-lg font-medium sm:text-2xl" >v Installation Services</p>
          <p className="text-lg font-medium sm:text-2xl">v Scheduled Preventive Maintenance and repair services</p>
        </div>
      </div>

      
      <Footer />
    </div>
  );
};

export default Mainsystem;
