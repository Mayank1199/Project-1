"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import about from "../public/asset 8.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="" data-aos="fade-right" data-aos-offset="300">
      <div>
        <div className="text-center w-64 md:w-96 m-auto">
          <h2 className="md:my-12 my-8 pb-3 border-b text-3xl md:text-4xl font-semibold md:font-bold border-[#FFD936] text-[#FFD936]">
            About Us
          </h2>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col mt-6 justify-evenly items-center w-[90%] m-auto">
        <div className="lg:basis-[40%] basis-[95%] w-full">
          <Image src={about} alt="" className="lg:w-full w-full rounded-3xl" />
        </div>
        <div className="lg:basis-[50%] basis-[95%] text-justify text-base md:text-lg pt-10 lg:pt-0">
          <p>
            At Drives4Fun, we invite you to embark on an unforgettable journey
            where the open road becomes your playground. Our newly launched
            self-drive car rental website grants you the keys to boundless
            exploration on your terms. From stylish urban rides to rugged
            off-road escapades, we entrust you with the wheel and the thrill of
            adventure. Experience a seamless booking process, a diverse fleet of
            premium vehicles, and the excitement of charting your course. <br />
            <br /> We believe that every road trip should be a story waiting to
            be told. Our passion lies in making your travel dreams a reality.
            With Drives4Fun, the road is your canvas, and the possibilities are
            endless. Start your road trip adventure today and make memories that
            will last a lifetime. Are you ready to seize the wheel and write
            your tale of adventure? Join us at Drives4Fun, where the journey is
            yours to conquer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
