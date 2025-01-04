import React from "react";
import { FC } from "react";

const Form: FC = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-[#0077b6] to-[#0096c7] py-12 px-6">
        {/* Form Section */}
        <div className="w-full md:w-2/3 lg:w-1/2 bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#0077b6]">
            CONTACT US
          </h2>
          <form action="#" method="post" className="space-y-5">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mt-4 md:mt-0">
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
            <div>
              <input
                type="email"
                placeholder="Business Email*"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Company"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <textarea
                placeholder="Tell us about your project*"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 h-32 resize-none"
              ></textarea>
            </div>
            <div>
              <input
                type="file"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="privacy-policy"
                className="mt-1"
              />
              <label htmlFor="privacy-policy" className="text-sm text-gray-600">
                By sending this form, I confirm that I have read and accept the Privacy Policy.
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#0077b6] text-white rounded-lg px-6 py-3 hover:bg-blue-700 transition duration-300 shadow-lg"
              >
                SEND
              </button>
            </div>
          </form>
        </div>

        {/* What's Next Section */}
        <div className="hidden md:block md:w-1/3 lg:w-1/4 bg-white p-6 shadow-lg rounded-lg text-[#0077b6] ml-4">
          <h2 className="text-2xl font-bold mb-4">WHAT’S NEXT?</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span>
              <p>We will send a confirmation email after receiving your request.</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span>
              <p>A solution advisor will analyze your requirements and contact you within 3 business days.</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span>
              <p>An optional NDA can be signed for confidentiality within 1-2 business days.</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span>
              <p>A business manager will provide initial project estimates within 3-5 days.</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Form;
