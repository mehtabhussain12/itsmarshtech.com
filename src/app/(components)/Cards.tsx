import React from "react";
import { FC } from "react";
import Image from "next/image";

const Cards: FC = () => {
  return (
    <section className="bg-[#f3f8fc] py-16">
      <div className="container  px-6 md:px-12 lg:px-20">
        <h1 className="text-4xl font-extrabold text-center text-[#0077b6]">
          Our Specialized Services
        </h1>
        <p className="text-lg text-center text-gray-600 mt-6 max-w-3xl mx-auto">
          We specialize in creating tailored websites for restaurants, cafes, 
          ice cream parlors, and other businesses. Each solution is designed 
          to meet your unique needs.
        </p>
        <div className="grid gap-8 mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Restaurant Websites */}
          <div className="group relative bg-white rounded-lg shadow-md hover:shadow-lg transition hover:-translate-y-2 transform duration-300">
            <div className="p-6 flex flex-col items-center">
              <Image
                src="/restaurant.png"
                alt="Restaurant Websites"
                width={350}
                height={350}
                className="mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-[#9bcfec] "
              />
              <h3 className="text-xl font-semibold text-[#0077b6] mb-2">
                Restaurant Websites
              </h3>
              <p className="text-sm text-gray-500 text-center">
                Showcase your menu, ambiance, and customer reviews with an 
                engaging online presence.
              </p>
            </div>
          </div>
          {/* E-commerce Solutions */}
          <div className="group relative bg-white rounded-lg shadow-md hover:shadow-lg transition hover:-translate-y-2 transform duration-300">
            <div className="p-6 flex flex-col items-center">
              <Image
                src="/ecommerce.png"
                alt="E-commerce Solutions"
                width={350}
                height={350}
                className="mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-[#9bcfec]"
              />
              <h3 className="text-xl font-semibold text-[#0077b6] mb-2">
                E-commerce Solutions
              </h3>
              <p className="text-sm text-gray-500 text-center">
                Build online stores to sell your products and services 
                with seamless payment integration.
              </p>
            </div>
          </div>
          {/* Ice Cream Parlors */}
          <div className="group relative bg-white rounded-lg shadow-md hover:shadow-lg transition hover:-translate-y-2 transform duration-300">
            <div className="p-6 flex flex-col items-center">
              <Image
                src="/icecream.png"
                alt="Ice Cream Parlors"
                width={350}
                height={350}
                className="mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-xl font-semibold text-[#0077b6] mb-2">
                Ice Cream Parlors
              </h3>
              <p className="text-sm text-gray-500 text-center">
                Create vibrant websites that highlight your ice cream 
                flavors and unique offerings.
              </p>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Cards;
