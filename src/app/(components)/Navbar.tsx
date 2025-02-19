"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu,
  X,
  Instagram,
  Facebook,
  Linkedin,
  Home,
  LayoutGrid,
  Info,
  Mail,
  Sparkles
} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/services", label: "Services", icon: LayoutGrid },
    { href: "/about", label: "About", icon: Info },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  const socialLinks = [
    { href: "https://www.instagram.com/itsmarshtech/", icon: Instagram },
    { href: "https://www.facebook.com/profile.php?id=61570202435155", icon: Facebook },
    { href: "https://www.linkedin.com/feed/update/urn:li:activity:7280226503122898945", icon: Linkedin },
  ];

  return (
    <nav className="fixed w-full backdrop-blur-md bg-black/50 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-white"
          >
            <Sparkles className="w-6 h-6 text-blue-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
              MARSH Tech
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <motion.ul 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-8"
            >
              {navItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }}
                >
                  <a
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors flex items-center gap-1 font-medium"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handleNav}
            className="md:hidden text-white"
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "tween" }}
            className="fixed  bg-black/50 md:hidden z-50 w-[350px]"
          >
            <div className="flex flex-col h-auto  p-6">
              <div className="flex ">
                <motion.button
                  whileHover={{ rotate: 90 }}
                  onClick={handleNav}
                  className="text-white"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              <motion.ul className="flex flex-col gap-6 mt-12">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: index * 0.1 }
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={handleNav}
                      className="text-white/80 hover:text-white transition-colors flex items-center gap-3 text-lg font-medium"
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.4 }
                }}
                className="mt-auto mb-12"
              >
                <div className="flex justify-center gap-8 mt-12">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <link.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;