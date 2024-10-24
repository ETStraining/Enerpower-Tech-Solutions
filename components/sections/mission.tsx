import Container from '../container';
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

        
      </div>
    </Container>
  );
};

export default Mission;
