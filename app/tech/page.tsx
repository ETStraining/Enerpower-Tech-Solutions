"use client";

import React, { useState } from "react";

const FormPage: React.FC = () => {
  const [activeForm, setActiveForm] = useState<"hire" | "training">("hire");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center  p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-white mb-4">
          Choose Your Form
        </h1>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setActiveForm("hire")}
            className={`px-6 py-2 text-white font-semibold rounded-md transition-all duration-300 ${
              activeForm === "hire"
                ? "bg-blue-500 shadow-lg transform scale-105"
                : "bg-blue-500 hover:bg-blue-400"
            }`}
          >
            Hire Form
          </button>
          <button
            onClick={() => setActiveForm("training")}
            className={`px-6 py-2 text-white font-semibold rounded-md transition-all duration-300 ${
              activeForm === "training"
                ? "bg-teal-500 shadow-lg transform scale-105"
                : "bg-teal-300 hover:bg-teal-400"
            }`}
          >
            Training Form
          </button>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        {/* Hire Form */}
        {activeForm === "hire" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-700 mb-4">Hire Form</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="position"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Position Applied For
                </label>
                <input
                  type="text"
                  id="position"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter the position"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="resume"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Upload Resume
                </label>
                <input
                  type="file"
                  id="resume"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-all duration-300"
              >
                Submit Application
              </button>
            </form>
          </div>
        )}

        {/* Training Form */}
        {activeForm === "training" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Training Form</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="emailAddress"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="trainingCourse"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Training Course Interested In
                </label>
                <select
                  id="trainingCourse"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="frontend">Frontend Development</option>
                  <option value="backend">Backend Development</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="fullstack">Full Stack Development</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-3 rounded-md hover:bg-teal-600 transition-all duration-300"
              >
                Submit Training Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormPage;
