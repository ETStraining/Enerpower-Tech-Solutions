"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Container from '@/components/container';

const slides = [
  {
    image: "/background.png",
    description: "Technology Design Build & Customer Experience Experts."
  },
  {
    image: "/4 1.png",
    description: "Networking And CCTV SYSTEM."
  },
  {
    image: "/electrical.png",
    description: "Electronical System."
  }
];

const Boarding: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Slide changes every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <div className="relative flex flex-col w-full mt-24" style={{ height: '600px' }}>
        {/* Background Image */}
        <div className="absolute inset-0 transition-transform duration-1000 ease-in-out">
          <Image
            src={slides[currentIndex].image}
            alt="background image"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50" />

        {/* Slide Description */}
        <div className="relative flex justify-center items-center w-full h-full z-10">
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white w-[80vw] text-center"
            style={{
              fontFamily: 'Poppins, sans-serif',
              backgroundColor: 'white',
              backgroundImage: "url('/est.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              WebkitFontSmoothing: 'antialiased',
            }}
          >
            {slides[currentIndex].description}
          </h2>
        </div>
      </div>
    </Container>
  );
};

export default Boarding;
