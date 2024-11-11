"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Container from '@/components/container';
import { Slides } from '@/utils/dammyDate';




const Boarding: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Slides.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <div className="relative flex flex-col w-full h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 transition-transform duration-1000 ease-in-out">
          <Image
            src={Slides[currentIndex].image}
            alt="background image"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#00030C] opacity-60" />

        {/* Slide Description */}
        <div className="relative flex justify-center items-center md:w-[1053px] mx-auto h-full z-10">
          <div
            className=" md:text-[64px] font-bold text-white text-center"
          >
            {Slides[currentIndex].description}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Boarding;
