"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#0077b6] to-[#06a8ff] text-white py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 lg:space-y-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Ab wait kyu? <br /> Apne <span className="text-yellow-400">business</span> ko next level pe le jao​
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl">
            Upgrade your business with modern solutions tailored to your needs. 
            Start today and experience growth like never before!
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-white text-[#0077b6] font-semibold rounded-md hover:bg-[#06a8ff] hover:text-white focus:outline-none focus:ring-4 focus:ring-yellow-300">
              Get Started
            </button>
        
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
       
     
        <img src="" alt="" />
      </div>
    </section>
  );
};

export default Hero;
