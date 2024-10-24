import Image from 'next/image';
import Footer from '@/components/footer';
import Container from '@/components/container';

const Mainsystem = () => {
  return (
<Container>
    <div className="container mx-auto py-16">
      <div className="relative w-full">
      
        <Image
          src="/main.png"
          alt="Main System Equipment"
          layout="responsive"
          width={500}
          height={300}
          className="object-cover"
        />

        
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start mt-56  text-white z-10 px-4">
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold mb-4">Main System</h1>
          <p className="mt-2 text-sm sm:text-lg md:text-xl font-medium">v Supply of materials, equipment, and tools</p>
          <p className="text-sm sm:text-lg md:text-xl font-medium">     v Installation Services</p>
          <p className="text-sm sm:text-lg md:text-xl font-medium">     v Scheduled Preventive Maintenance and repair services</p>
        </div>
      </div>

     
      <Footer />
    </div>
    </Container>
  );
};

export default Mainsystem;
