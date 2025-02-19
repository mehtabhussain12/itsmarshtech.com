"use client"
import React from "react";
import { FC } from "react";
import { Send, Instagram, Facebook, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-blue-600/20 to-transparent">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-wide border-b border-white/20 pb-2">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                "Product Development",
                "Mobile Development",
                "Web Development",
                "Startup & MVP Solutions",
                "Enterprise Solutions",
                "Dedicated Teams",
                "IT Consulting",
                "UI/UX Design",
                "QA & Testing",
                "Solution Architecture",
                "DevOps Solutions"
              ].map((service, index) => (
                <li key={index} className="hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-wide border-b border-white/20 pb-2">
              Company
            </h3>
            <ul className="space-y-2">
              {[
                "About",
                "Team",
                "Clients",
                "Careers",
                "Social Responsibility"
              ].map((item, index) => (
                <li key={index} className="hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-wide border-b border-white/20 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                <Mail className="h-5 w-5" />
                <a href="mailto:Itsmarshtech@gmail.com" className="hover:underline">
                  Itsmarshtech@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                <Phone className="h-5 w-5" />
                <a href="tel:+923273366851" className="hover:underline">
                  +92 327 3366851
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-3">Connect With Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/itsmarshtech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61570202435155"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7280226503122898945"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="text-center space-y-4">
            <p className="text-sm font-medium">MORE CONTACTS</p>
            <div className="space-y-2">
              <p className="text-sm">© 2024 MARSH Tech. All rights reserved.</p>
              <div className="flex justify-center space-x-6 text-sm">
                <a href="#" className="hover:underline">Sitemap</a>
                <a href="#" className="hover:underline">Terms of Use</a>
                <a href="#" className="hover:underline">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;