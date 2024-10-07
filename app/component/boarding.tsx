import React from 'react';

const Boarding: React.FC = () => {
  return (
    <div className="relative flex flex-col items-end sm:items-center"> 
      
      {/* Background image wrapper */}
      <div className="relative w-full sm:w-3/4 md:w-1/2 lg:w-3/3 mb-8 flex justify-center sm:justify-center">
        {/* Background image */}
        <div className="absolute inset-0 bg-cover bg-center rounded-lg shadow-lg opacity-50"
             style={{ backgroundImage: "url('/path-to-background-image.jpg')" }}></div>
        
        {/* Foreground image */}
        <img 
          src="/Rectangle 26.png" 
          alt="Description of the picture" 
          className="relative rounded-lg shadow-lg w-full"
        />
      </div>

      {/* Text block with space added */}
      <div className="absolute top-1/3 left-1/4 sm:top-1/3 sm:right-1/3 transform -translate-y-1/2 bg-white bg-opacity-75 p-4 rounded-lg shadow-lg text-center mt-4"> 
        <h2 className="text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl mb-4">
          TECHNOLOGY<br />
          DESIGN BUILD & <br />
          CUSTOMER EXPERIENCE EXPERT
        </h2>

        {/* Button added below the text */}
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
          Learn More
        </button>
      </div>
      
    </div>
  );
};

export default Boarding;
