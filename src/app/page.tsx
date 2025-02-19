import Image from "next/image";
import About from "./(components)/About";
import Cards from "./(components)/Cards";
import Form from "./(components)/Form";
import Skills from "./(components)/Skills";
import Footer from "./(components)/Footer";
// import FaqItem from "./(components)/FAQ";
import Why from "./(components)/Why";
import Hero from "./(components)/Hero";


export default function Home() {
  return (
  <>
  <Hero/>
  <Cards/>
  <Why/>
  <About/>
  {/* <Skills/> */}
  <Form/>
  {/* <FaqItem/> */}
  <Footer/>
 
  </>
  )};