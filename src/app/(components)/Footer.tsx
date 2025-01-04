import Link from "next/link";
import React from "react";
import { FC } from "react";
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Footer :FC=()=>{
    return(
        <>
        <footer className="bg-gray-200 py-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* <!-- Services --> */}
      <div>
        <h3 className="text-lg font-bold mb-4">SERVICES</h3>
        <ul className="list-none">
          <li>Product Development</li>
          <li>Mobile Development</li>
          <li>Web Development</li>
          <li>Startup & MVP Solutions</li>
          <li>Enterprise Solutions</li>
          <li>Dedicated Teams</li>
          <li>IT Consulting</li>
          <li>UI/UX Design</li>
          <li>QA & Testing</li>
          <li>Solution Architecture</li>
          <li>DevOps Solutions</li>
        </ul>
      </div>
      {/* <!-- Company --> */}
      <div>
        <h3 className="text-lg font-bold mb-4">COMPANY</h3>
        <ul className="list-none">
          <li>About</li>
          <li>Team</li>
          <li>Clients</li>
          <li>Careers</li>
          <li>Social Responsibility</li>
        </ul>
      </div>
      {/* <!-- Contacts --> */}
      <div>
        <h3 className="text-lg font-bold mb-4">CONTACTS</h3>
        <ul className="list-none">
          <li>Itsmarshtech@gmail.com</li>
          
          <li>+923273366851</li>
        </ul>
        <div className="flex gap-x-4 mt-4 ">
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
      </div>
     
    </div>
    {/* <!-- More Contacts --> */}
    <div className="mt-6">
      <p className="text-center text-gray-600">MORE CONTACTS</p>
    </div>
    {/* <!-- Copyright --> */}
    <div className="mt-6 text-center text-gray-600">
      <p>© 2024 MARSH Tech</p>
      <p className="text-sm">Sitemap | Terms of Use | Privacy Policy</p>
    </div>
  </div>
</footer>

        </>
    )
}

export default Footer;