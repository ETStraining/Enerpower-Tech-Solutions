import Container from '../component/container';
import Image from 'next/image';

const Mission = () => {
  return (
    <Container>
      <div className="mx-auto py-20 px-4 sm:px-6 lg:px-8 w-full ">
       
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Mission</h1>
        <p className="text-base sm:text-lg leading-relaxed text-center mb-10 max-w-4xl mx-auto">
          Our mission is to provide innovative, reliable, and secure technology solutions in surveillance, software development, and networking. 
          We are committed to delivering high-quality services that enhance security, connectivity, and efficiency for businesses and individuals. 
          Through cutting-edge technology and expert support, we empower our clients to achieve their goals.
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-center">Vision</h1>
        <p className="text-base sm:text-lg leading-relaxed text-center mb-16 sm:mb-32 max-w-4xl mx-auto px-4 sm:px-8">
          Our vision is to become a leading technology provider, setting the benchmark for excellence in surveillance, software development, 
          electrical, and networking solutions. We aspire to create a safer, more connected world by continuously pushing the boundaries of 
          technology and delivering solutions that drive growth, security, and innovation.
        </p>

        <div className="flex flex-col items-center mt-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-6 text-center tracking-wider">
            ETS Services & Solutions
          </h1>
          <p className="text-base sm:text-lg text-center mx-auto mb-8 max-w-2xl px-4 sm:px-16">
            We are a global crypto liquidity provider and algorithmic market maker. We trade digital assets listed on Centralized Exchanges in over 15 countries worldwide.
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl mt-10">
            <div className="md:w-1/2 px-4 sm:px-8 md:px-12 text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl font-medium">DISTRIBUTION</h1>
              <h1 className="text-2xl sm:text-3xl font-medium mt-2">ANTENNA SYSTEM</h1>
              <p className="font-bold mt-4">Enhanced Reception in Any Building.</p>
              <p className="font-bold">Anywhere</p>
              <button className="mt-6 md:mt-10 border-b-2 border-blue-300 text-blue-400 font-semibold py-2 px-4 rounded-none hover:bg-blue-400 hover:text-white transition">
                Learn More <span className="ml-2">→</span>
              </button>
            </div>

            <div className="flex-1 mt-10 md:mt-0 text-center">
              <Image 
                src="/div.png" 
                alt="Distribution Image"  
                width={300} 
                height={300} 
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Mission;
