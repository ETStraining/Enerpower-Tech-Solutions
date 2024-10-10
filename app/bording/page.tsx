import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Boarding: React.FC = () => {
  return (
    <div className="relative flex flex-col sm:flex-row items-start bg-black " style={{ width: '100%', margin: '0 auto' }}>
      <div className="relative flex flex-col sm:flex-row w-full">
       
        <div className="relative flex flex-col w-full sm:w-1/2 p-4 ml-8 sm:ml-12 lg:ml-14 pl-20 sm:pl-32"> 
          <h2
            className="text-xl uppercase sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 font-bold pl-40"
            style={{
              backgroundColor: "white",
              backgroundImage: "url('/est.png')", 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              color: 'transparent',
              WebkitFontSmoothing: 'antialiased',
            }}
          >
            Technology
            <br />Design&nbsp;Build&nbsp;& <br />
            Customer <br /> Experience <br /> Experts.
          </h2>

          <div className="flex justify-start mt-4 pl-40">
            <button
              className="flex items-center bg-blue-500 text-white font-semibold rounded-lg mt-6"
              style={{ height: '48px', width: '160px', fontSize: '14px' }}
            >
              <span className="text-xs ml-6">Build a Team</span> 
              <FontAwesomeIcon icon={faArrowRight} className="text-3xl" style={{ height: '12px', width: '24px' }} />
            </button>
          </div>
        </div>

       
        <div className="relative w-full sm:w-1/2 flex justify-start mt-2 sm:mt-0 pr-20 sm:pr-24 lg:pr-32 pr-40"> 
          <img
            src="/Rectangle 26.png"
            alt="Description of the picture"
            className="rounded-lg shadow-md opacity-80"
            style={{
              maxHeight: '500px',
              width: '100%', 
              height: 'auto',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Boarding;