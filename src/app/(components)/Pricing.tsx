"use client"
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const Pricing = () => {
  const plans = [
    {
      title: 'Basic',
      description: 'Basic features for getting started',
      price: '300',
      features: 'Custom Website Development creative design, responsive',
      included: ['3 Page Website',
      '2 Stock Images',
     ' 1 Slider Banner',
     ' Contact/Query Form',
      'No Content Included',
      '48 to 72 hours TAT'],
      buttonText: 'Choose Free Plan'
    },
    {
      title: 'Unlimited',
      description: 'Access to all features without limits',
      price: '29',
      features: 'Custom Website Development creative design, responsive',
      included: ['5 Page Website',
        '5 Stock Images',
      '  3 Banner Design',
       ' 1  Slider Banner',
        'Content Included',
        'FREE Google Friendly Sitemap'],
      buttonText: 'Choose Unlimited Plan'
    },
    {
      title: 'Enterprise',
      description: 'Custom solutions for your business needs',
      price: '100',
      features: 'Custom solutions tailored to your business needs',
      included: ['10 Page Website',
       ' 8 Stock images',
       ' 5 Banner Design',
       ' Slider Banner',
        'Mobile Responsive',
      '  Content Included',
        'FREE Google Friendly Sitemap'],
      buttonText: 'Contact Sales'
    }
  ];

  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
      modules: [Navigation]
    });
    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <div className="relative">
    <div className="hidden lg:flex justify-center items-center gap-20 h-[600px] my-4 px-12 bg-gray-100">
  {plans.map((plan, index) => (
   <div key={index} className="max-w-screen-md bg-white shadow-lg rounded-lg overflow-hidden gap-4 transition-all duration-300 ease-in-out transform hover:scale-105">
   <div className="px-4 py-6 w-[300px] rounded-lg hover:bg-[#9cc3d5ff] ">
     <h2 className="text-center font-semibold text-2xl text-white bg-[#0077b6] p-2 rounded-full">{plan.title}</h2>
     <p className="text-center text-gray-600 mt-2">{plan.description}</p>
     <div className="flex justify-center mt-4">
       <span className="text-5xl font-bold">${plan.price ? plan.price :  `$${plan.price}`}</span>
     </div>
     <div className="mt-3 p-4">
       <p className="text-sm">{plan.features}</p>
       <ul className='mt-3 text-sm flex flex-col'>
         {plan.included.map((item, i) => (
           <li key={i} className="flex items-center gap-2">
             <span className="inline-block w-2 h-2 bg-[#0077b6] rounded-full"></span> {/* Dot */}
             <span>{item}</span>
           </li>
         ))}
       </ul>
     </div>
     <button className="block w-full bg-[#0077b6] hover:bg-blue-500 text-white font-bold py-2 px-4 mt-6 rounded">
       {plan.buttonText}
     </button>
   </div>
 </div>
 
  ))}
</div>


      {/* responsive layout */}
      <div className="lg:hidden overflow-hidden">
  <div className="swiper-container">
    <div className="swiper-wrapper">
      {plans.map((plan, index) => (
        <div key={index} className="swiper-slide">
          <div className="max-w-xs bg-gray-100 shadow-lg rounded-lg overflow-hidden gap-4 mx-4 my-4">
            <div className="px-4 py-6">
              <h2 className="text-center font-semibold text-2xl text-gray-800">{plan.title}</h2>
              <p className="text-center text-gray-600 mt-2">{plan.description}</p>
              <div className="flex justify-center mt-4">
                <span className="text-5xl font-bold">{plan.price ? plan.price : `$${plan.price}`}</span>
              </div>
              <div className="mt-3 p-4">
                <p className="text-sm">{plan.features}</p>
                <ul className='mt-3 text-sm flex flex-col'>
                  {plan.included.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <button className="block w-full bg-[#0077b6] hover:bg-[#5fccff] text-white font-bold py-2 px-4 mt-6 rounded">
                {plan.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="swiper-button-prev "></div>
    <div className="swiper-button-next"></div>
  </div>
</div>

    </div>
  );
};

export default Pricing;
