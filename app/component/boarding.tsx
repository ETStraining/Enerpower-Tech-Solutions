import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Boarding: React.FC = () => {
  return (
    <>
      <div className="relative flex items-end sm:items-center">
        
      <div
  className="relative flex items-center justify-center w-full sm:w-4/5 md:w-3/4 lg:w-2/3 bg-cover bg-center p-6 rounded-lg"
  style={{ backgroundImage: "url('/est.png')" }}
>
  <div className="p-4 rounded-lg text-center w-full">
    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 font-bold">
      Technology
      <br /> Design,
      <br /> Build & <br />
      Customer <br /> Experience <br /> Experts.
    </h2>
  </div>
</div>


<div className="relative w-full max-w-full sm:max-w-4/5 md:max-w-3/4 lg:max-w-2/3 mb-8 flex justify-center">
  <img
    src="/Rectangle 26.png"
    alt="Description of the picture"
    className="rounded-lg shadow-md opacity-80 w-full h-auto"
  />
</div>

      </div>

      <div className="flex justify">
        <button
          className="flex items-center bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 ml-16 transition duration-300 ease-in-out mb-2"
          style={{ height: '36px', width: '140px', fontSize: '12px' }} 
        >
          <span className=" text-xs ml-6">Build a Team</span> 
          <FontAwesomeIcon icon={faArrowRight} className="text-2xl" style={{height:'10px',width:'20px'}} /> 
        </button>
      </div>
    </>
  );
};

export default Boarding;