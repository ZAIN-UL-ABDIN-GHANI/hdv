"use client";
import React from "react";
import Image from "next/image";
import servicesImage from "../../../../public/services.png";

const Services = () => {
  return (
    <div className="relative bg-white w-full">
      {/* Outer Wrapper */}
      <div className="grid grid-cols-12 border border-gray-300">
        {/* Header Section */}
        <div className="col-span-12 border-b border-gray-300 grid grid-cols-12">
          {/* Left Vertical Line */}
          <div className="col-span-1 border-r border-gray-300 flex items-center justify-center">
            <div className="text-xs transform rotate-90 origin-top-left">
              v_hd
            </div>
          </div>
          {/* Header Content */}
          <div className="col-span-11 p-6 md:p-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">_ Services</h2>
            <p className="text-sm md:text-base font-medium leading-relaxed">
              Minimalism and the harmony of space are my specialties. I create
              sleek, functional spaces with fewer but more valuable elements,
              where every detail matters.
            </p>
          </div>
        </div>

        {/* Image and Buttons Section */}
        <div className="col-span-12 grid grid-cols-12 left-9">
          {/* Left Vertical Line */}
          <div className="col-span-1 border-r border-black "></div>

          {/* Image Section */}
          <div className="col-span-8 p-6 md:p-12">
            <Image
              src={servicesImage}
              alt="Services"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Buttons Section */}
          <div className="col-span-3 border-l border-black flex flex-col">
            {["Home", "Office", "Cafe"].map((item, index) => (
              <div
                key={index}
                className="border-b border-black flex items-center justify-between px-1 py-4"
              >
                <span className="text-base font-medium">{item}</span>
                <span className="text-lg">→</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
