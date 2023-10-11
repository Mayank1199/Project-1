"use client";
import React from "react";

const Footer = () => {
  return (
    <div className="flex bg-[#080A0B] text-white mt-6 md:flex-row flex-col text-sm md:text-base justify-around py-4 items-center ">
      <div className="pb-1 md:pb-0">© Copyrights 2023 Drives4fun | All rights reserved.</div>
      <div className="pb-1 md:pb-0">
        Design & Development by{" "}
        <span className="text-[#FFD936] ">
          Fealty Technologies Pvt. ltd.
        </span>
      </div>
    </div>
  );
};

export default Footer;
