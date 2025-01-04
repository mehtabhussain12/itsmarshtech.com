import React from 'react';
import { FC } from "react";

const About: FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className=" lg:flex justify-between bg-gradient-to-r from-[#0077b6] to-[#00b4d8] text-white py-16 px-8 flex-col md:flex-row items-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center md:text-left mb-6 md:mb-0 leading-snug">
          OUR TEAM WILL DELIVER OPTIMAL <br /> FUNCTIONALITY AND USER EXPERIENCE
        </h1>
        <button className="bg-green-600 hover:bg-green-400 text-white px-8 py-3 rounded-lg shadow-lg text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-500">
          TALK TO US
        </button>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center items-center bg-white py-16 px-8">
        <div className="bg-gradient-to-r from-[#caf0f8] to-[#90e0ef] p-8 rounded-lg shadow-xl max-w-3xl">
          <h1 className="text-4xl font-bold mb-6 text-center text-[#0077b6]">
            GET A READY-MADE WEB SOLUTION
          </h1>
          <p className="text-gray-700 text-lg text-center mb-8">
            We constantly test, update, and refine our development processes. Our developers are committed to continuous learning, ensuring your project benefits from the latest innovations and technologies. From brainstorming to implementation and maintenance, we provide a seamless experience. Your product will include:
          </p>
          <ul className="text-lg space-y-4 text-gray-800">
            <li className="flex items-center space-x-3">
              <span className="bg-green-500 text-white p-2 rounded-full">✔</span>
              <span>Features tailored precisely to your requirements</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="bg-green-500 text-white p-2 rounded-full">✔</span>
              <span>Modern and responsive design</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="bg-green-500 text-white p-2 rounded-full">✔</span>
              <span>Seamless user experience</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
