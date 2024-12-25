"use client";
import React from "react";
import Image from "next/image";
import servicesImage from "../../../../public/services.png";
import frameicon from "../../../../public/Frame 6.png";
const Services = () => {
  return (
    <div className="relative bg-[#ECECEC] w-full">
      {/* Outer Wrapper */}
      <div className="grid grid-cols-12 pb-16">
        {/* Header Section */}
        <div className="col-span-12 grid grid-cols-12">
          {/* Header Content */}
          <div className="col-span-12  ont-playfair font-light p-6 md:p-12">
            <h2 className="text-2xl md:text-4xl  font-playfair font-light mb-4">
              _ Services
            </h2>
            <p className="text-sm md:text-base font-bold leading-relaxed">
              Minimalism and the harmony of space are my specialties. I create
              sleek, functional spaces with 
              fewer but more valuable elements, where every detail matters.
            </p>
          </div>
        </div>

        {/* Image and Buttons Section */}
        <div className=" flex mx-8 col-span-12 grid-cols-12">
          {/* Image Section */}
          <div className=" w-4/5 h-[360px] flex justify-end col-span-9 ">
            <Image
              src={servicesImage}
              alt="Services"
              width={890}
              height={254}
              className=""
            />
          </div>
          {/* Buttons Section */}
          <div className="col-span-3  w-1/5  flex flex-col bg-gray-100">
            {["Home", "Office", "Cafe"].map((item, index) => (
              <button
                key={index}
                className="flex  font-playfairn items-center justify-start gap-2 px-2 py-12 border-b border-gray-300 hover:bg-white hover:text-black transition duration-300"
              >
                <span className="text-base font-medium">{item}</span>
                <Image
                  src={frameicon}
                  alt="Services"
                  width={30}
                  height={30}
                  className="text-black"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
