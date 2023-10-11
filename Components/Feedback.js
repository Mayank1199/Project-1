"use client";
import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-up" data-aos-offset="300">
      <div className="text-center w-64 md:w-96 m-auto">
        <h2 className="md:mt-16 mt-10 mb-12 pb-3 border-b text-4xl font-bold border-[#FFD936] text-[#FFD936]">
          Feedback
        </h2>
      </div>

      <div className="flex md:flex-row flex-col w-[90%] gap-10 m-auto justify-evenly items-center">
        <div className="md:w-[50%] w-[95%] h-[65vh]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2416.333089931398!2d75.82133148725865!3d22.66998408464436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962feaa86d43203%3A0xff2d44d70da2b47e!2sFealty%20Technologies!5e0!3m2!1sen!2sin!4v1696849022631!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            className="w-full h-full rounded"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="bg-yellow-50 pt-16 pb-10 md:w-[50%] w-[95%] p-10 rounded">
          <div className="">
            <form>
              <div className="border-[2px] border-gray-400 rounded ">
                <input
                  className="py-2 px-2 w-full"
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <br />
              <div className="border-[2px] border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  rounded ">
                <input
                  className="py-2 px-2 w-full"
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <br />
              <div className="border-[2px] border-gray-400 rounded ">
                <input
                  className="w-full px-2 pb-14 pt-2"
                  type="text"
                  placeholder="Enter Feedback"
                  value={feedback}
                  onChange={(e) => {
                    setFeedback(e.target.value);
                  }}
                />
              </div>
              <div className="text-center my-6">
                <button className="bg-[#FFD936] border-[2px] border-white rounded font-semibold text-white px-2 py-1 md:px-4 md:py-2">
                  Submit Feedback
                </button>
              </div>
              <div></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
