"use client";
import React from "react";
import Image from "next/image";
import servicesImage from "../../../../public/services.png";

const Services = () => {
  return (
    <div className="relative bg-gray-100 w-full">
      {/* Outer Wrapper */}
      <div className="grid grid-cols-12">
        {/* Header Section */}
        <div className="col-span-12 grid grid-cols-12">
          {/* Header Content */}
          <div className="col-span-12 p-6 md:p-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">_ Services</h2>
            <p className="text-sm md:text-base font-medium leading-relaxed">
              Minimalism and the harmony of space are my specialties. I create
              sleek, functional spaces with <br />fewer but more valuable elements,
              where every detail matters.
            </p>
          </div>
        </div>

        {/* Image and Buttons Section */}
        <div className=" flex col-span-12 grid-cols-12">
          {/* Image Section */}
          <div className="  col-span-9 p-6 md:p-12">
            <Image
              src={servicesImage}
              alt="Services"
              width={760}
              height={460}
              className=""
            />
                      {/* Buttons Section */}
   
          </div>



          <div className="col-span-3  w-1/2  mt-10 flex flex-col bg-gray-100">
  {["Home", "Office", "Cafe"].map((item, index) => (
    <button
      key={index}
      className="flex items-center justify-start gap-2 px-2 py-12 border-b border-gray-300 hover:bg-white hover:text-black transition duration-300"
    >
      <span className="text-base font-medium">{item}</span>
      <span className="text-lg">→</span>
    </button>
  ))}
</div>

        </div>
      </div>
    </div>
  );
};

export default Services;
