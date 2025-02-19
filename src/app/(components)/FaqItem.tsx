"use client"
import { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between bg-[#0077b6] text-white p-4 rounded-md cursor-pointer" onClick={toggleAccordion}>
        <p className="text-lg">{question}</p>
        <RiArrowDownSLine className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`} />
      </div>
      {isOpen && (
        <div className="bg-gray-100 p-4 rounded-b-md">
          <p className="text-gray-800">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
