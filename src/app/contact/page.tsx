"use client"
import React, { useState } from "react";
import { FC } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Building, User, FileText, CheckCircle } from 'lucide-react';
import Footer from "../(components)/Footer";
import { cursorTo } from "readline";
const Contact: FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-400" />,
      title: "Phone",
      details: "+92 327 3366851",
      description: "Monday to Friday, 9am to 12pm"
    },
    {
      icon: <Mail className="w-6 h-6 text-indigo-400" />,
      title: "Email",
      details: "Itsmarshtech@gmail.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-400" />,
      title: "Office",
      details: "Karachi, Pakistan",
      description: "Come visit our office"
    },
    {
      icon: <Clock className="w-6 h-6 text-pink-400" />,
      title: "Working Hours",
      details: "9:00 AM - 12:00 PM",
      description: "Monday to Friday"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Add your form submission logic here
  };

  return (
   <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black-900 to-slate-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8 pt-32"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's Start a Conversation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your ideas to life.
          </p>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 cursor-pointer">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  {info.icon}
                  <h3 className="text-xl font-semibold text-white">{info.title}</h3>
                </div>
                <p className="text-blue-400 font-medium mb-2">{info.details}</p>
                <p className="text-gray-300 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-xl"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="First Name*"
                        className="w-full bg-white/5 border border-white/10 text-white rounded-lg pl-12 pr-4 py-3 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                 placeholder-gray-400 transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Last Name*"
                        className="w-full bg-white/5 border border-white/10 text-white rounded-lg pl-12 pr-4 py-3 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                 placeholder-gray-400 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address*"
                      className="w-full bg-white/5 border border-white/10 text-white rounded-lg pl-12 pr-4 py-3 
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                               placeholder-gray-400 transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <Building className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full bg-white/5 border border-white/10 text-white rounded-lg pl-12 pr-4 py-3 
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                               placeholder-gray-400 transition-all duration-300"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      placeholder="Your Message*"
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 text-white rounded-lg pl-12 pr-4 py-3 
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                               placeholder-gray-400 transition-all duration-300"
                      required
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

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg 
                             px-6 py-4 font-semibold flex items-center justify-center space-x-2
                             hover:from-blue-600 hover:to-indigo-700 transition-all duration-300
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                             focus:ring-offset-gray-900"
                  >
                    <span>Send Message</span>
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-300">
                    Your message has been sent successfully. We'll get back to you soon!
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Map or Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-xl"
            >
              <h2 className="text-2xl font-bold text-white mb-6">What Happens Next?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Initial Response</h3>
                    <p className="text-gray-300">
                      We'll review your message and get back to you within 24 hours with an initial response.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Discovery Call</h3>
                    <p className="text-gray-300">
                      We'll schedule a call to discuss your project in detail and understand your requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Proposal</h3>
                    <p className="text-gray-300">
                      You'll receive a detailed proposal including timeline, cost estimates, and project scope.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Project Kickoff</h3>
                    <p className="text-gray-300">
                      Once approved, we'll assemble your team and begin the development process.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    
    </div>
    <Footer />
   </>
  );
};

export default Contact;