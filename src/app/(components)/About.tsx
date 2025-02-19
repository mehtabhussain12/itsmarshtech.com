"use client"
import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  CheckCircle, 
  ArrowRight,
  Laptop,
  Smartphone,
  Palette,
  Shield
} from "lucide-react";

const About = () => {
 
  

  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent" />
        <motion.div 
          className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

        <div className="container mx-auto px-6 relative mt-14">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">About MARSH Tech</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-8"
            >
              We Deliver{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
                Exceptional
              </span>{" "}
              Digital Experiences
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 mb-12 max-w-2xl"
            >
              Our team combines creativity with technical expertise to transform your vision into reality.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full font-medium flex items-center gap-2 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
            >
              Let's Talk
              <motion.div
                className="group-hover:translate-x-1 transition-transform"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-24 bg-black/50">
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />

        <div className="container mx-auto px-6">
      

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-2 bg-white/5 backdrop-blur-sm rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Our Development Process</h3>
            <ul className="space-y-4">
              {[
                "In-depth analysis of your requirements",
                "Custom design and development solutions",
                "Rigorous testing and quality assurance",
                "Continuous support and maintenance"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;