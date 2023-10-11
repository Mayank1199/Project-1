import React from "react";
import Header from "@/Components/Header";
import Cars from "@/Components/Cars";
import About from "@/Components/About";
import Services from "@/Components/Services";
import Contact from "@/Components/Contact";
import Feedback from "@/Components/Feedback";
import Footer from "@/Components/Footer";


const page = () => {
  return (
    <div>
      <Header />
      <Cars />
      <About />
      <Services />
      <Contact />
      <Feedback />
      <Footer />
      
    </div>
  );
};

export default page;
