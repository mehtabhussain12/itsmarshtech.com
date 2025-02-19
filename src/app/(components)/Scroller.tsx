"use client"
import React, { useState, useEffect } from 'react';
import { IoArrowUpCircle } from 'react-icons/io5';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`${
        isVisible ? 'block' : 'hidden'
      } fixed bottom-4 right-4 bg-[#0077b6] text-white px-4 py-2 rounded-full shadow-md flex items-center justify-center`}
      onClick={scrollToTop}
      style={{ width: 'fit-content' }}
    >
      <IoArrowUpCircle className="text-white text-2xl" />
    </button>
  );
};

export default ScrollToTopButton;
