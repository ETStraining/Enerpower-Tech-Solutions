import Image from 'next/image';  
import Footer from '@/components/footer';
import Container from '@/components/container';

const Mainsystem = () => {
  return (
    <Container>
      
        <div className="relative w-full">

          
          <Image
            src="/main.png"
            alt="Main System Equipment"
            layout="responsive"
            width={500}
            height={300}
            className="object-cover"
          />

          
          <div className="absolute inset-0 flex flex-col items-center justify-start  lg:mt-60 text-white z-10 px-4">
            <div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4  text-center ">
                Main System
              </h1>
              <div >
                <p className="mt-5 text-xs sm:text-sm md:text-lg lg:text-xl mb-2 font-medium">
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
        </div>

        <Footer />
   
    </Container>
  );
};

export default Mainsystem;
