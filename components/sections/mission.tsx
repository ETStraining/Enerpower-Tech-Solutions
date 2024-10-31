import Container from '../container';
import Image from 'next/image';

const Mission = () => {
  return (
    <Container>
      <div>
        <div className="pt-20 pb-5 flex gap-20 items-center justify-center w-full">
          <Image
            src={"/mission.png"}
            alt='mission'
            width={400}
            height={400}
            className='md:w-[30vw] max-w-md w-[60%] px-6 h-[60vh]'
          />

          <div className='text-center md:text-left w-[45vw]'>
            <h1 className="text-3xl sm:text-4xl font-bold mb-6  text-[#1A479E]">MISSION AND VISION</h1>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-[#1A479E]">Mission</h2>
            <p className="text-lg leading-relaxed mb-6 max-w-4xl mx-auto text-[#19213D]">
              Our mission is to provide innovative, reliable, and secure technology solutions in surveillance, software development, and networking.
              We are committed to delivering high-quality services that enhance security, connectivity, and efficiency for businesses and individuals.
              Through cutting-edge technology and expert support, we empower our clients to achieve their goals.
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#1A479E]">Vision</h2>
            <p className="text-base sm:text-lg leading-relaxed max-w-4xl text-[#19213D]">
              Our vision is to become a leading technology provider, setting the benchmark for excellence in surveillance, software development,
              electrical, and networking solutions. We aspire to create a safer, more connected world by continuously pushing the boundaries of
              technology and delivering solutions that drive growth, security, and innovation.
            </p>
          </div>


        </div>
      </div>
    </Container>
  );
};

export default Mission;
