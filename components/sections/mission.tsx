import Container from '../container';
import Image from 'next/image';

const Mission = () => {
  return (
    <Container>
      <div>
        <div className="pt-20 pb-5 flex gap-20 lg:gap-10 items-center justify-center w-full flex-col lg:flex-row">
          <Image
            src={"/mission.png"}
            alt='mission'
            width={400}
            height={400}
            className='xl:w-[30vw] max-w-md w-full lg:px-6 h-[60vh] lg:h-[80vh] 2xl:h-[60vh]'
          />

          <div className='text-left lg:w-[55vw] md:px-10 xl:px-20 2xl:px-1 2xl:w-[45vw]'>
            <h1 className="text-3xl 2xl:text-3xl sm:text-4xl lg:text-2xl font-bold mb-6  text-[#1A479E] text-center 2xl:text-left">MISSION AND VISION</h1>
            <h2 className="text-3xl 2xl:text-3xl sm:text-4xl lg:text-2xl font-bold mb-2 text-[#1A479E] text-center 2xl:text-left">Mission</h2>
            <p className="text-lg lg:text-md 2xl:text-lg leading-relaxed mb-6 max-w-4xl text-[#19213D]">
              Our mission is to provide innovative, reliable, and secure technology solutions in surveillance, software development, and networking.
              We are committed to delivering high-quality services that enhance security, connectivity, and efficiency for businesses and individuals.
              Through cutting-edge technology and expert support, we empower our clients to achieve their goals.
            </p>

            <h2 className="text-3xl 2xl:text-3xl sm:text-4xl lg:text-2xl font-bold mb-6 text-[#1A479E] text-center 2xl:text-left">Vision</h2>
            <p className="text-lg lg:text-md leading-relaxed max-w-4xl text-[#19213D]">
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
