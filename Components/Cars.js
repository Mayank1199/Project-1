"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import car1 from "../public/asset 1.jpeg";
import car2 from "../public/asset 2.jpeg";
import car3 from "../public/asset 3.jpeg";
import car4 from "../public/asset 4.jpeg";
import car5 from "../public/asset 5.jpeg";
import car6 from "../public/asset 6.jpeg";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

const Cars = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="text-center w-64 md:w-96 m-auto">
        <h2 className="md:mt-24 mt-16 pb-3 border-b text-3xl md:text-4xl font-semibold md:font-bold border-[#FFD936] text-[#FFD936]">
          Featured Cars
        </h2>
        <h5 className="mt-2 md:text-base text-sm">
          Discover Our Diverse Range of Vehicles
        </h5>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-[90%] m-auto mt-16"
        data-aos="fade-up"
      >
        <div className="p-6 space-y-4 shadow-md">
          <div>
            <Image src={car1} alt="" />
          </div>
          <h5 className="text-xl font-bold">Creta</h5>
          <div className="flex items-center justify-between text-gray-700">
            <h6 className="flex items-center">
              <BsFillFuelPumpDieselFill className="pr-1 text-lg" />
              Petrol
            </h6>
            <h6 className="flex items-center">
              <AiFillSetting className="pr-1 text-lg" />
              Manual
            </h6>
          </div>
          <button className="hover:text-[#FFD936] duration-200">
            Book Now
          </button>
        </div>
        <div className="p-6 space-y-4 shadow-md">
          <div>
            <Image src={car1} alt="" />
          </div>
          <h5 className="text-xl font-bold">Creta</h5>
          <div className="flex items-center justify-between text-gray-700">
            <h6 className="flex items-center">
              <BsFillFuelPumpDieselFill className="pr-1 text-lg" />
              Petrol
            </h6>
            <h6 className="flex items-center">
              <AiFillSetting className="pr-1 text-lg" />
              Manual
            </h6>
          </div>
          <button className="hover:text-[#FFD936] duration-200">
            Book Now
          </button>
        </div>
        <div className="p-6 space-y-4 shadow-md">
          <div>
            <Image src={car2} alt="" />
          </div>
          <h5 className="text-xl font-bold">Exter</h5>
          <div className="flex items-center justify-between text-gray-700">
            <h6 className="flex items-center">
              <BsFillFuelPumpDieselFill className="pr-1 text-lg" />
              Petrol
            </h6>
            <h6 className="flex items-center">
              <AiFillSetting className="pr-1 text-lg" />
              Manual
            </h6>
          </div>
          <button className="hover:text-[#FFD936] duration-200">
            Book Now
          </button>
        </div>
        <div className="p-6 space-y-4 shadow-md">
          <div>
            <Image src={car3} alt="" />
          </div>
          <h5 className="text-xl font-bold">Fronox</h5>
          <div className="flex items-center justify-between text-gray-700">
            <h6 className="flex items-center">
              <BsFillFuelPumpDieselFill className="pr-1 text-lg" />
              Petrol
            </h6>
            <h6 className="flex items-center">
              <AiFillSetting className="pr-1 text-lg" />
              Manual
            </h6>
          </div>
          <button className="hover:text-[#FFD936] duration-200">
            Book Now
          </button>
        </div>
        <div className="p-6 space-y-4 shadow-md">
          <div>
            <Image src={car4} alt="" />
          </div>
          <h5 className="text-xl font-bold">Grandi</h5>
          <div className="flex items-center justify-between text-gray-700">
            <h6 className="flex items-center">
              <BsFillFuelPumpDieselFill className="pr-1 text-lg" />
              Petrol
            </h6>
            <h6 className="flex items-center">
              <AiFillSetting className="pr-1 text-lg" />
              Manual
            </h6>
          </div>
          <button className="hover:text-[#FFD936] duration-200">
            Book Now
          </button>
        </div>
        <div className="p-6 space-y-4 shadow-md">
          <div>
            <Image src={car5} alt="" />
          </div>
          <h5 className="text-xl font-bold">Elite</h5>
          <div className="flex items-center justify-between text-gray-700">
            <h6 className="flex items-center">
              <BsFillFuelPumpDieselFill className="pr-1 text-lg" />
              Petrol
            </h6>
            <h6 className="flex items-center">
              <AiFillSetting className="pr-1 text-lg" />
              Manual
            </h6>
          </div>
          <button className="hover:text-[#FFD936] duration-200">
            Book Now
          </button>
        </div>
        <div className="p-6 space-y-4 shadow-md">
          <div>
            <Image src={car6} alt="" />
          </div>
          <h5 className="text-xl font-bold">Brezza</h5>
          <div className="flex items-center justify-between text-gray-700">
            <h6 className="flex items-center">
              <BsFillFuelPumpDieselFill className="pr-1 text-lg" />
              Petrol
            </h6>
            <h6 className="flex items-center">
              <AiFillSetting className="pr-1 text-lg" />
              Manual
            </h6>
          </div>
          <button className="hover:text-[#FFD936] duration-200">
            Book Now
          </button>
        </div>
        <div className="p-6 space-y-4 shadow-md">
          <div>
            <Image src={car6} alt="" />
          </div>
          <h5 className="text-xl font-bold">Creta</h5>
          <div className="flex items-center justify-between text-gray-700">
            <h6 className="flex items-center">
              <BsFillFuelPumpDieselFill className="pr-1 text-lg" />
              Petrol
            </h6>
            <h6 className="flex items-center">
              <AiFillSetting className="pr-1 text-lg" />
              Manual
            </h6>
          </div>
          <button className="hover:text-[#FFD936] duration-200">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cars;
