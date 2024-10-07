import React from 'react';

const MyPart: React.FC = () => {
  return (
    <div className="relative flex flex-col items-end"> 
      
      <div className="mb-4 flex justify-end"> 
        <img 
          src="images/image.png" 
          alt="Description of the picture" 
          className="rounded-lg shadow-lg" 
        />
      </div>
        
      <div className="absolute top-1/4 right-1/4 transform -translate-y-1/2 bg-white bg-opacity-75 p-4 rounded-lg shadow-lg"> 
        <h2 className="text-lg font-bold">
          TECHNOLOGY<br />
          DESIGN BUILD & <br />
          CUSTOMER EXPERIENCE EXPERT
        </h2>
      </div>
    </div>
  );
};

export default MyPart;
