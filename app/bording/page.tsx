"use client";
import React from 'react';

const Boarding: React.FC = () => {
 

  return (
    <div className={`relative flex flex-col items-end sm:items-center`}>
      <div className="mb-8 flex justify-center w-full">
        <img
          src="/Rectangle 26.png"
          alt="Description of the picture"
          className={`rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-3/4`}
        />
      </div>

      <div className={`absolute top-1/4 left-1/4 sm:top-1/3 sm:right-1/3 transform -translate-y-1/2 p-4 rounded-lg shadow-lg text-center`}>
        <h2 className="text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">
          TECHNOLOGY<br />
          DESIGN BUILD & <br />
          CUSTOMER EXPERIENCE EXPERT
        </h2>
        
      </div>
    </div>
  );
};

export default Boarding;
