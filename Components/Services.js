"use client";
import React, { useEffect } from "react";
import { BsFillCarFrontFill } from "react-icons/bs";
import { PiJeepFill } from "react-icons/pi";
import { FaCarSide } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-left" data-aos-offset="300">
      <div>
        <div className="text-center w-64 md:w-96 m-auto">
          <h2 className=" md:my-12 my-6  border-b text-3xl md:text-4xl font-semibold md:font-bold border-[#FFD936] text-[#FFD936]">
            Our Services
          </h2>
        </div>
      </div>

      <div className="bg-yellow-50 w-[100%] py-12">
        <div className="grid  md:grid-cols-3 gap-10 w-[90%] mx-auto ">
          <div className=" text-[#FFD936] text-center space-y-3">
            <div className="flex justify-center text-3xl md:text-4xl lg:text-6xl animate-bounce duration-700">
              <BsFillCarFrontFill className="bg-[#FFD936] text-white p-2 rounded-lg" />
            </div>
            <h5 className="lg:text-2xl md:text-xl text-lg font-semibold">
              Self-drive car rental
            </h5>
            <p className=" text-black lg:text-base text-sm">
              Discover the freedom of the open road with our self-drive car
              rental service. Choose from a diverse fleet of vehicles, from
              compact to luxury, and embark on your personalized adventure. With
              easy booking, competitive rates, and flexible options, explore the
              world on your terms. Your journey, your way.
            </p>
          </div>

          <div className=" text-[#FFD936] text-center space-y-3">
            <div className="flex justify-center text-3xl md:text-4xl lg:text-6xl  animate-bounce duration-700">
              <PiJeepFill className="bg-[#FFD936] text-white p-2 rounded-lg" />
            </div>
            <h5 className="lg:text-2xl md:text-xl text-lg font-semibold">
              Car rental with driver
            </h5>
            <p className=" text-black lg:text-base text-sm">
              Experience carefree travel with our driver-included car rental
              service. Sit back and enjoy the ride as our skilled drivers take
              you where you need to go in comfort and style. Whether it&apos;s
              airport pickups or special events, we ensure a stress-free journey
              tailored to your needs. Your travel, our service.
            </p>
          </div>

          <div className=" text-[#FFD936] text-center space-y-3">
            <div className="flex justify-center text-3xl md:text-4xl lg:text-6xl animate-bounce duration-700">
              <FaCarSide className="bg-[#FFD936] text-white p-2 rounded-lg" />
            </div>
            <h5 className="lg:text-2xl md:text-xl text-lg font-semibold">
              Special marriage car
            </h5>
            <p className=" text-black lg:text-base text-sm">
              Elevate your special day with our exquisite wedding car service.
              Make a grand entrance and exit in style with our fleet of elegant
              vehicles, meticulously adorned for your wedding. Trust us to add a
              touch of luxury and romance to your unforgettable celebration.
              Your dream wedding, our iconic ride.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
