"use client"
import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Clock,
  Heart,
  TrendingUp,
  CheckCircle2,
  Zap,
  Target,
  Users
} from "lucide-react";

const Why = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Technological Edge",
      description: "Stay ahead with cutting-edge solutions",
      gradient: "from-blue-400 to-indigo-500"
    },
    // {
    //   icon: Clock,
    //   title: "Rapid Deployment",
    //   description: "Reduced time-to-market for faster growth",
    //   gradient: "from-indigo-400 to-purple-500"
    // },
    {
      icon: Heart,
      title: "User Satisfaction",
      description: "Exceptional user experience at every touchpoint",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Growth Focus",
      description: "Boost efficiency and productivity",
      gradient: "from-pink-400 to-red-500"
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

  const itemVariants = {
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
    <section className="relative min-h-screen bg-black text-white py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent" />
      <motion.div
        className="absolute top-40 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
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
        className="absolute bottom-40 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
            <CheckCircle2 className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-medium">Why Choose Us</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Elevate Your Business with{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
              MARSH Tech
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We combine innovation with expertise to deliver exceptional results
            that drive your business forward.
          </p>
        </motion.div>

        {/* Mobile Scroll Indicator */}
        <div className="md:hidden text-center mb-6">
          <p className="text-sm text-gray-400">Swipe right to explore our advantages →</p>
        </div>

        {/* Benefits Grid */}
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
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative group flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-auto snap-center"
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-colors duration-300 h-full">
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className={`w-6 h-6 bg-gradient-to-r ${benefit.gradient} text-transparent bg-clip-text`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          <div className="text-center">
            <Zap className="w-8 h-8 mx-auto mb-4 text-blue-400" />
            <h4 className="text-3xl font-bold mb-2">100%</h4>
            <p className="text-gray-400 text-sm">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <Target className="w-8 h-8 mx-auto mb-4 text-indigo-400" />
            <h4 className="text-3xl font-bold mb-2">50+</h4>
            <p className="text-gray-400 text-sm">Projects Completed</p>
          </div>
          <div className="text-center">
            <Users className="w-8 h-8 mx-auto mb-4 text-purple-400" />
            <h4 className="text-3xl font-bold mb-2">30+</h4>
            <p className="text-gray-400 text-sm">Happy Clients</p>
          </div>
          <div className="text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-4 text-pink-400" />
            <h4 className="text-3xl font-bold mb-2">95%</h4>
            <p className="text-gray-400 text-sm">Growth Rate</p>
          </div>
        </motion.div>

        {/* Custom Scrollbar for Mobile */}
        <style jsx global>{`
          .overflow-x-auto::-webkit-scrollbar {
            display: none;
          }
          
          .overflow-x-auto {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Why;