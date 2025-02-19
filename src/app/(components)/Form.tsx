"use client"
import React from "react";
import { FC } from "react";
import { Send, CheckCircle2, FileText, Building2, Phone } from 'lucide-react';

const Form: FC = () => {
  return (
    <div className="min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto ">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build Something Amazing Together
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Share your vision with us, and we'll help bring it to life
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Form Section */}
          <div className="w-full lg:w-2/3 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             placeholder-gray-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name*"
                    className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             placeholder-gray-400 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Business Email*"
                  className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           placeholder-gray-400 transition-all duration-300"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full bg-white/5 border border-white/10 text-white rounded-lg pl-12 pr-4 py-3 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             placeholder-gray-400 transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Building2 className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full bg-white/5 border border-white/10 text-white rounded-lg pl-12 pr-4 py-3 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             placeholder-gray-400 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <textarea
                  placeholder="Tell us about your project*"
                  className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           placeholder-gray-400 transition-all duration-300 h-32 resize-none"
                ></textarea>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <FileText className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="file"
                  className="w-full bg-white/5 border border-white/10 text-white rounded-lg pl-12 pr-4 py-3 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
                           file:text-sm file:font-semibold file:bg-blue-500 file:text-white
                           hover:file:bg-blue-600 transition-all duration-300"
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacy-policy"
                  className="mt-1.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="privacy-policy" className="text-sm text-gray-300">
                  By sending this form, I confirm that I have read and accept the Privacy Policy
                </label>
              </div>

              <button
                type="submit"
                className="w-fullbg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg 
                         px-6 py-4 font-semibold flex items-center justify-center space-x-2
                         hover:from-blue-700 hover:to-blue-900 transition-all duration-300
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                         focus:ring-offset-gray-900"
              >
                <span>Send Message</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* What's Next Section */}
          <div className="w-full lg:w-1/3 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">What Happens Next?</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Confirmation",
                  description: "Receive an immediate confirmation email for your request"
                },
                {
                  title: "Expert Review",
                  description: "A solution advisor analyzes your requirements within 24 hours"
                },
                {
                  title: "Security First",
                  description: "Optional NDA signing process for full confidentiality"
                },
                {
                  title: "Project Planning",
                  description: "Detailed project estimation and timeline within 2-3 days"
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;