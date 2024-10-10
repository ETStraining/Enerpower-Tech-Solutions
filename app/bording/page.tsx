import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Boarding: React.FC = () => {
  return (
    <>
      <div className="relative flex flex-col sm:flex-row items-start ">
        
        <div className="relative flex items-start justify-center w-full sm:w-4/5 md:w-3/4 lg:w-2/3 p-6 rounded-lg mr-6">
          <div className="absolute inset-0 rounded-lg" style={{
              backgroundImage: "url('/est.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '150px',
              maxHeight: '300px',
              opacity: 0.7 // Adjust opacity to give a color effect
          }} />
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg" />
          <div className="p-4 rounded-lg w-full relative z-10">
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 font-bold text-white ml-20">
              Technology
              <br />
              Design&nbsp;Build&nbsp;&nbsp;&nbsp;& <br />
              Customer <br /> Experience <br /> Experts.
            </h2>

            <div className="flex justify-start mt-4">
              <button
                className="flex items-center bg-blue-500 text-white font-semibold rounded-lg mt-6 ml-20"
                style={{ height: '48px', width: '160px', fontSize: '14px' }}
              >
                <span className="text-xs ml-6">Build a Team</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-3xl" style={{ height: '12px', width: '24px' }} />
              </button>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-full sm:max-w-4/5 md:max-w-3/4 lg:max-w-2/3 mb-8 flex justify-center">
          <img
            src="/Rectangle 26.png"
            alt="Description of the picture"
            className="rounded-lg shadow-md opacity-80 w-full h-auto max-h-80 mr-40"
            style={{
              minHeight: '550px',
              maxHeight: '500px',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Boarding;
