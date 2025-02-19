"use client"
import React from "react";
import { FC } from "react";
import { Code2, Rocket, Users, Shield, ArrowRight, BookOpen, Briefcase, Code, Target, TrendingUp, Zap } from 'lucide-react';
import { motion } from "framer-motion";
import Footer from "../(components)/Footer";


const About: FC = () => {
  const stats = [
    { icon: <Zap className="w-8 h-8 text-blue-400" />, number: "100%", label: "Client Satisfaction" },
    { icon: <Target className="w-8 h-8 text-indigo-400" />, number: "50+", label: "Projects Completed" },
    { icon: <Users className="w-8 h-8 text-blue-400" />, number: "30+", label: "Happy Clients" },
    { icon: <TrendingUp className="w-8 h-8 text-pink-400" />, number: "95%", label: "Growth Rate" }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Senior Developer",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=400",
      description: "Full-stack developer with 8+ years of experience in web and mobile development.",
      icon: <Code className="w-6 h-6 text-blue-400" />
    },
    {
      name: "Sarah Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
      description: "Specialized in architecture and team leadership with a focus on scalable solutions.",
      icon: <Code className="w-6 h-6 text-indigo-400" />
    },
    {
      name: "Michael Torres",
      role: "Sales Director",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
      description: "Expert in building client relationships and understanding business needs.",
      icon: <Briefcase className="w-6 h-6 text-blue-400" />
    },
    {
      name: "Emily Parker",
      role: "Sales Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      description: "Specializes in project planning and client success strategies.",
      icon: <Briefcase className="w-6 h-6 text-pink-400" />
    }
  ];

  const blogs = [
    {
      title: "The Future of Web Development in 2025",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800",
      excerpt: "Exploring the latest trends in web development, from AI integration to advanced frameworks.",
      category: "Technology"
    },
    {
      title: "Building Scalable Mobile Applications",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
      excerpt: "Best practices for developing mobile applications that can grow with your user base.",
      category: "Development"
    },
    {
      title: "The Impact of AI in Modern Software",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad095?auto=format&fit=crop&q=80&w=800",
      excerpt: "How artificial intelligence is revolutionizing software development and user experiences.",
      category: "AI & ML"
    }
  ];

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

  return (
<>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-black-900 to-slate-900 pt-12">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovating the Future of Technology
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're a team of passionate developers, designers, and innovators building the next generation of digital solutions.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h2 className="text-4xl font-bold text-white mb-2">{stat.number}</h2>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto cursor-pointer">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Meet our exceptional team of developers and sales professionals who make the magic happen.
            </p>
          </motion.div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 p-2 rounded-full">
                    {member.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Why Choose Us
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <Code2 className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Custom Development</h3>
              <p className="text-gray-300">Tailored solutions built to meet your specific business needs and goals.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <Rocket className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Rapid Deployment</h3>
              <p className="text-gray-300">Quick turnaround times without compromising on quality or performance.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <Users className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Dedicated Teams</h3>
              <p className="text-gray-300">Expert developers and designers committed to your project's success.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <Shield className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Security First</h3>
              <p className="text-gray-300">Top-tier security practices to protect your data and applications.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Latest Insights</h2>
            <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300">
              <span>View All</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogs.map((blog, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <BookOpen className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-400">{blog.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{blog.excerpt}</p>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center space-x-2">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     
    </div>
    <Footer />
</>
  );
};

export default About;