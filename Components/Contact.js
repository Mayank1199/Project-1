"use client";
import React, { useEffect } from "react";
import { AiFillMessage } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { BiSolidMap } from "react-icons/bi";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-down" data-aos-offset="300">
      <div>
        <div className="text-center w-64 lg:w-96 m-auto">
          <h2 className="md:mt-24 my-16 pb-3 border-b text-3xl md:text-4xl font-bold border-[#FFD936] text-[#FFD936]">
            Contact Us
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10 w-[90%] m-auto">
        <div className="text-center space-y-2">
          <div className="flex justify-center text-2xl md:text-3xl lg:text-4xl text-[#FFD936]">
            <AiFillPhone />
          </div>
          <h6 className="lg:text-base text-sm">Ritik Sahu : 7000856963</h6>
          <h6 className="lg:text-base text-sm">
            Mukesh Agnihotri : 8319538210
          </h6>
        </div>

        <div className="text-center space-y-2">
          <div className="flex justify-center text-2xl md:text-3xl lg:text-4xl text-[#FFD936]">
            <AiFillMessage />
          </div>

          <h6 className="lg:text-base text-sm">hrithiksahu555.rs@gmail.com</h6>
        </div>

        <div className="text-center space-y-2">
          <div className="flex justify-center text-2xl md:text-3xl lg:text-4xl text-[#FFD936]">
            <BiSolidMap />
          </div>

          <h6 className="lg:text-base text-sm">
            Sector R,Ho.no 94 mahalakshmi nagar near
          </h6>
          <h6 className="lg:text-base text-sm">
            Dr.Garg bone and joint clinic
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Contact;
