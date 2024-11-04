import Image from 'next/image';  
import Footer from '@/components/footer';

const Mainsystem = () => {
  return (
    <>
      
      <div className="relative w-full h-screen flex items-center justify-center">
       
        <div className="absolute inset-0 -z-10 py-8">
          <Image
            src="/main.png"
            alt="Main System Equipment"
            layout="fill"
            objectFit="cover"
            objectPosition="center top" 
            quality={100}
          />
        </div>

      
        <div className="relative flex flex-col items-center justify-start text-white px-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-center">
            Main System
          </h1>
          <div>
            <p className="mt-1 text-xs sm:text-sm md:text-lg lg:text-xl mb-2 font-medium">
              v Supply of materials, equipment, and tools
            </p>
            <p className="text-xs sm:text-sm md:text-lg lg:text-xl mb-2 font-medium">
              v Installation Services
            </p>
            <p className="text-xs sm:text-sm md:text-lg lg:text-xl font-medium">
              v Scheduled Preventive Maintenance and repair services
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default Mainsystem;
