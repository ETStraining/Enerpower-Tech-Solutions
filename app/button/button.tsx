

import React from 'react';

// Define the props interface
interface ButtonProps {
  title: string;           
  onClick: () => void;      
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: '#007BFF',
        color: '#FFFFFF',
        fontSize: '16px',
      }}
    >
      {title}
    </button>
  );
};

export default Button;
