"use client"
import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Layout, 
  Database, 
  ShoppingBag, 
  Megaphone,
  Share2
} from "lucide-react";

const Cards = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Creating beautiful, responsive, and interactive user interfaces with modern frameworks and technologies.",
      icon: Layout,
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications with scalable architecture and efficient databases.",
      icon: Database,
      gradient: "from-indigo-400 to-purple-500"
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end web development combining frontend and backend expertise for complete solutions.",
      icon: Code2,
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "E-commerce Solutions",
      description: "Custom online stores with secure payment integration and inventory management systems.",
      icon: ShoppingBag,
      gradient: "from-pink-400 to-red-500"
    },
    {
      title: "Social Media Marketing",
      description: "Strategic social media campaigns to boost your brand presence and engage with your audience.",
      icon: Megaphone,
      gradient: "from-red-400 to-orange-500"
    },
    {
      title: "Social Media Management",
      description: "Comprehensive social media account management to maintain consistent brand voice and growth.",
      icon: Share2,
      gradient: "from-orange-400 to-yellow-500"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
<>

<section className="relative min-h-screen bg-black text-white py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent" />
      <motion.div 
        className="absolute top-40 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      <motion.div 
        className="absolute bottom-40 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Code2 className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-medium">Our Services</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Ideas into{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
              Digital Reality
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We offer comprehensive web development and digital marketing solutions
            to help your business thrive in the digital world.
          </p>
        </motion.div>

        {/* Mobile Scroll Indicator */}
        <div className="md:hidden text-center mb-6">
          <p className="text-sm text-gray-400">Swipe right to explore more services →</p>
        </div>

        {/* Services Grid with Horizontal Scroll on Mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative group flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-auto snap-center"
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-colors duration-300 h-full">
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className={`w-6 h-6 bg-gradient-to-r ${service.gradient} text-transparent bg-clip-text`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Scrollbar for Mobile */}
        <style jsx global>{`
          /* Hide scrollbar for Chrome, Safari and Opera */
          .overflow-x-auto::-webkit-scrollbar {
            display: none;
          }
          
          /* Hide scrollbar for IE, Edge and Firefox */
          .overflow-x-auto {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </section>
</>
  );
};

export default Cards;