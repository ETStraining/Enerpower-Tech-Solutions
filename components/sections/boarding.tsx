import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Boarding: React.FC = () => {
  return (
    <div className="relative flex flex-col w-full">
      <Image
        src={"/background.png"}
        alt='background image'
        width={400}
        height={400}
        className='w-full absolute h-[80vh] mb-20'
      />
      <div className="absolute inset-0 bg-black opacity-30 h-[80vh]" />
      <div className="relative flex flex-col justify-center items-center w-full p-4 h-[80vh]">
        <h2
          className="text-xl uppercase sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 font-bold text-black dark:text-transparent z-10"
          style={{
            backgroundColor: "white",
            backgroundImage: "url('/est.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            position: 'relative',
            WebkitFontSmoothing: 'antialiased',
          }}
        >
          Technology Design Build & <br/> Customer Experience  Experts.
        </h2>
        <button
            className="flex items-center bg-blue-500 text-white font-semibold rounded-lg mt-6 z-10"
            style={{ height: '48px', width: '160px', fontSize: '14px' }}
          >
            <span className="text-xs ml-6">Build a Team</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-3xl" style={{ height: '12px', width: '24px' }} />
          </button>
      </div>
    </div>
  );
};

export default Boarding;
