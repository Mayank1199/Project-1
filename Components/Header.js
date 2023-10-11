"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/Logo.png";
import BannerImage from "../public/Banner Image.jpg";
import { AiOutlineMenuFold } from "react-icons/ai";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-[100%]">
      <header>
        <nav
          className="flex justify-around items-center fixed z-[99] w-[100vw]  bg-[#080A0B]"
          data-aos="fade-down"
        >
          <div className="lg:w-60 md:w-52 w-40">
            <Image src={Logo} alt="drives4fun" />
          </div>
          <div className="flex items-center md:space-x-4 lg:space-x-6 text-lg lg:text-xl text-white normal-case ">
            <Link href="/" className="text-[#FFD936] md:block hidden">
              Home
            </Link>
            <Link
              href="/Cars"
              className="hover:text-[#FFD936] visited::text-[#FFD936] md:block hidden"
            >
              Cars
            </Link>
            <Link href="" className="hover:text-[#FFD936] md:block hidden">
              About
            </Link>
            <Link href="" className="hover:text-[#FFD936] md:block hidden">
              Services
            </Link>
            <Link href="" className="hover:text-[#FFD936] md:block hidden">
              Contact
            </Link>
            <Link target="_blank" href="https://www.facebook.com/">
              <AiFillFacebook className="text-[#FFD936] text-xl lg:text-2xl md:block hidden" />
            </Link>
            <Link target="_blank" href="https://www.instagram.com/?hl=en">
              <AiFillInstagram className="text-[#FFD936] text-xl lg:text-2xl md:block hidden" />
            </Link>
            <Link target="_blank" href="https://twitter.com/?lang=en-in">
              <AiFillTwitterCircle className="text-[#FFD936] text-xl lg:text-2xl md:block hidden" />
            </Link>
          </div>
          <div className="block md:hidden">
            <AiOutlineMenuFold className="text-white text-2xl " />
          </div>
        </nav>
        {/* Nav Section Ends */}

        {/* Hero Section Starts */}
        <div className="relative" data-aos="fade-up">
          <div className="w-[100%] opacity-90">
            <Image
              className="lg:h-[100vh] md:h-[60vh] h-[90vh]"
              alt="Banner Image"
              src={BannerImage}
            />
          </div>
          <div className="text-white absolute top-1/2 text-center space-y-6 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h4 className="md:text-3xl  text-lg font-bold tracking-wide">
              JOURNEY TO JOY
            </h4>
            <h2 className="md:text-5xl text-2xl font-bold tracking-wide">
              RENT <span className="text-[#FFD936]">SELF DRIVE CAR</span> IN
              INDORE!
            </h2>
            <h3 className="md:text-4xl text-xl font-bold tracking-wide">
              SELF DRIVE CAR
            </h3>
            <button className="bg-[#FFD936] border-[2px] border-white py-1 px-2 md:py-2 md:px-4 rounded font-semibold tracking-wide">
              Contact Us
            </button>

            <div className="flex md:flex-row flex-col md:space-y-0 space-y-2 justify-center items-center pl-4 md:pl-6 rounded-lg md:p-0 p-4 bg-white md:rounded-full">
              <div className="w-full text-black">
                <select className="lg:text-base text-sm" name="" id="city">
                  <option value="">Select City &nbsp; &nbsp; &nbsp;</option>
                  <option value="Indore">Indore</option>
                </select>
              </div>
              <div className="w-full flex items-center px-4">
                <label
                  className="text-black lg:text-base text-sm px-2"
                  htmlFor="start"
                >
                  Start
                </label>
                <input id="start" type="date" />
              </div>
              <div className="w-full flex items-center px-4">
                <label
                  className="text-black lg:text-base text-sm px-2"
                  htmlFor="end"
                >
                  End
                </label>
                <input type="date" />
              </div>
              <div className="bg-[#FFD936] border-2 border-white font-semibold lg:py-3 md:py-1 py-1 px-4 rounded-full md:rounded-l-none md:rounded-r-full text-white w-full">
                <button className="lg:text-xl text-sm md:px-4 lg:px-0 ">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section Ends */}
      </header>
    </div>
  );
};

export default Header;
