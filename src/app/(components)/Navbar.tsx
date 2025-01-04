"use client";
import React from "react";
import { FC } from "react";

import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineAppstore, AiOutlineHome, AiOutlineInfoCircle, AiOutlineMail } from "react-icons/ai";
import { useState } from "react";

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="w-full h-20 shadow-md bg-[#0077b6] sticky top-0 z-50">
        <div className="flex justify-between items-center h-full px-6 md:px-12">
          <Link href="/">
            <h1 className="text-2xl font-bold text-white">MARSH Tech</h1>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6 text-white uppercase font-medium">
              <Link href="/">
                <li className="hover:text-[#06a8ff]">Home</li>
              </Link>
              <Link href="/OurServices">
                <li className="hover:text-[#06a8ff]">Services</li>
              </Link>
              <Link href="/About us">
                <li className="hover:text-[#06a8ff]">About</li>
              </Link>
              <Link href="/Contact us">
                <li className="hover:text-[#06a8ff]">Contact</li>
              </Link>
            </ul>
            <div className="flex space-x-4 text-white">
                <Link href={"https://www.instagram.com/itsmarshtech/"}>
                  <AiOutlineInstagram size={30} />
                </Link>
                <Link href={"https://www.facebook.com/profile.php?id=61570202435155"}>
                  <AiOutlineFacebook size={30} />
                </Link>
                <Link href={"https://www.linkedin.com/feed/update/urn:li:activity:7280226503122898945"}>
                  <AiOutlineLinkedin size={30} />
                </Link>
                
              </div>
            {/* <div className="flex space-x-4">
              <button className="px-4 py-2 bg-white text-[#0077b6] font-semibold rounded-md hover:bg-[#06a8ff] hover:text-white focus:outline-none">Sign up</button>
              <button className="px-4 py-2 bg-white text-[#0077b6] font-semibold rounded-md hover:bg-gray-100 focus:outline-none">Login</button>
            </div> */}
          </div>
          <div className="md:hidden flex items-center">
            <AiOutlineMenu
              size={25}
              className="text-white cursor-pointer"
              onClick={handleNav}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={
            menuOpen
              ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#9cc3d5ff] p-10 ease-in duration-500 z-50"
              : "fixed left-[-100%] top-0 p-10 duration-500 z-50"
          }
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div>
            <ul className="flex-col p-2 text-sm">
              <Link href="/">
                <li className="p-4 cursor-pointer flex items-center gap-2">
                  <AiOutlineHome /> Home
                </li>
              </Link>
              <Link href="/OurServices">
                <li className="p-4 cursor-pointer flex items-center gap-2">
                  <AiOutlineAppstore /> Services
                </li>
              </Link>
              <Link href="/About us">
                <li className="p-4 cursor-pointer flex items-center gap-2">
                  <AiOutlineInfoCircle /> About us
                </li>
              </Link>
              <Link href="/Contact us">
                <li className="p-4 cursor-pointer flex items-center gap-2">
                  <AiOutlineMail /> Contact us
                </li>
              </Link>
            </ul>
            <div className="flex flex-row items-center justify-around pt-10">
              <Link href="/">
                <AiOutlineInstagram size={20} />
              </Link>
              <Link href="/">
                <AiOutlineFacebook size={20} />
              </Link>
              <Link href="/">
                <AiOutlineLinkedin size={20} />
              </Link>
              <Link href="/">
                <AiOutlineTwitter size={20} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
