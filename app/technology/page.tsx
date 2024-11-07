// pages/index.tsx

import Image from "next/image";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto  px-4 md:px-8 grid grid-cols-12 gap-4">
      {/* Top Section */}
      <section className="col-span-12 md:col-span-8 lg:col-span-7">
        <h1 className="text-3xl font-bold mb-4" style={{ color: "#1A479E" }}>
          Technologies
        </h1>
        <hr className="w-[269px] h-[2px] bg-gray-300 mb-4" />
        <p className="text-gray-600">
          We specialize in helping you build a team of expert developers.
          Using the right technology for the right problem is our mantra. 
          We are agile about learning new processes and tools to
          save time and reduce complexity.
        </p>
      </section>
      <div className="col-span-12 md:col-span-4 lg:col-span-5">
        <Image
          src="/ImageReplace.png" // Replace with actual image path
          alt="Smartphone Image"
          width={500}
          height={500}
          className="w-full object-cover rounded-lg"
        />
      </div>

      {/* Divider Before Bottom Section */}
      <hr className="w-[1106px] h-0 border-t border-gray-300 my-8" />

      {/* Testimonials Section */}
      <section className="col-span-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A479E" }}>
          Testimonials
        </h2>
        <hr className="w-[269px] h-[2px] bg-gray-300 mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="p-6 border rounded-lg text-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-24 h-24 mx-auto mb-4">
                <Image
                  src={`/testmo.jpg`} // Replace with actual member image paths
                  alt={`Member ${item}`}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "#1A479E" }}>
                  Aime
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Frontend Developer skilled in Next.js, JavaScript, and React. 
                Passionate about building engaging user experiences.
              </p>
              <button className="w-full py-2  text-sm text-white bg-blue-900 rounded-lg hover:bg-blue-600 transition duration-200">
                Connect
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
