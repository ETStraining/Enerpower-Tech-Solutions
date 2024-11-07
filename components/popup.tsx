"use client"; // Ensures this component is client-side

import { useRouter } from 'next/navigation';
import { useState, useEffect, CSSProperties } from 'react';

export default function NotificationPopup() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleApply = () => {
    router.push('/technology'); // Navigates to '/technology'
  };

  useEffect(() => {
    // Set up an interval to show the notification every 8 seconds
    const interval = setInterval(() => {
      setIsVisible(true); 
    }, 8000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    isVisible && (
      <div style={popupStyles}>
        <button onClick={handleClose} style={closeButtonStyles}>✖</button>
        <div style={contentStyles}>
          <p style={textStyles}>EnerPower Solution Technology has exciting Opportunities!</p>
          <p style={subTextStyles}>Click below to apply.</p>
          <button onClick={handleApply} style={buttonStyles}>Apply Now</button>
        </div>
      </div>
    )
  );
}

const popupStyles: CSSProperties = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  width: '280px',
  backgroundColor: '#f0f8ff',
  border: '2px solid #0070f3',
  padding: '15px',
  borderRadius: '12px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  zIndex: 1000,
  fontFamily: 'Arial, sans-serif', 
};

const contentStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const textStyles: CSSProperties = {
  fontSize: '16px',
  fontFamily: "'Dancing Script', cursive", 
  color: '#333',
  margin: '10px 0 5px 0',
  textAlign: 'center',
};

const subTextStyles: CSSProperties = {
  fontSize: '14px',
  color: '#555',
  textAlign: 'center',
  marginBottom: '15px',
};

const buttonStyles: CSSProperties = {
  backgroundColor: '#0070f3',
  color: '#fff',
  border: 'none',
  padding: '8px 15px',
  borderRadius: '20px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 'bold',
  transition: 'background-color 0.3s',
};

const closeButtonStyles: CSSProperties = {
  background: 'none',
  border: 'none',
  color: '#555',
  cursor: 'pointer',
  fontSize: '18px',
  position: 'absolute',
  top: '10px',
  right: '10px',
};
