// Install Tailwind CSS in your project before using this component

import Image from "next/image";
import heroImage from "../../../../public/hero.png";

const Hero = () => {
  return (
    <div className="relative bg-white w-full">
      {/* Main Container */}
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Left Content */}
        <div className="absolute h-full w-px bg-black left-8"></div>
        <div className="col-span-12 md:col-span-6 flex flex-col p-6 md:p-12 gap-6 bg-gray-100">
          <div className="flex">
            <h1 className="text-4xl md:text-6xl leading-tight">Take the </h1>
            <span className="bg-white text-black text-4xl md:text-6xl leading-tight">
              _space
            </span>
          </div>
          <div className="flex">
            <div>
              <h1 className="text-4xl md:text-6xl leading-tight">seriously.</h1>
            </div>
            <div className="flex flex-col ml-4">
              <p>HOME</p>
              <p>VIKTORIA</p>
              <p>DESIGN</p>
            </div>
          </div>

          <div className="mt-6 flex">
            <blockquote className="border-l-2 px-8 border-black pl-4">
              <p className="italic text-sm">
                “Every time I smile <br /> when I enter the room <br /> designed
                by her. It’s like <br /> she always knows what it is that truly
                makes me <br /> happy.”
              </p>
              <cite className="block mt-2 text-sm font-bold">– Fiona Hilton</cite>
            </blockquote>

            <blockquote className="border-l-2 px-8 border-black pl-1">
              <p className="italic text-sm">
                “She understood my <br /> style and added a little <br />
                magic that makes my <br />
                home completely <br /> unique.”
              </p>
              <cite className="block mt-2 text-sm font-bold">
                – Josh Markraft
              </cite>
            </blockquote>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="absolute h-full w-px bg-black left-2/4"></div>
        <div className="col-span-12 md:col-span-6 relative border-1 bg-gray-100 border-black">
          <div className="absolute h-full w-px bg-black right-8"></div>
          <div className="absolute h-full w-px bg-black left-px"></div>
          <Image
            src={heroImage}
            alt="Hero Section"
            width={600}
            height={360}
            className="object-cover w-[600px] h-[360px]"
            priority
          />

          {/* Buttons Section */}
          <div className="flex justify-center items-center w-full bg-gray-100">
            <button className="block w-1/2 px-6 py-4 text-center border border-r-black text-black text-sm uppercase tracking-wider bg-gray-100 hover:bg-gray-700 hover:text-white transition-all duration-300">
              Contact me →
            </button>

            <button className="block w-1/2 px-6 py-4 text-center text-black text-sm uppercase tracking-wider bg-gray-100 hover:bg-gray-700 hover:text-white transition-all duration-300">
              Shop →
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="left-0 w-full bg-black text-white py-4">
        <div className="text-center text-sm uppercase tracking-wider">
          Stunning interiors _ home decor _ office design
        </div>
      </footer>
    </div>
  );
};

export default Hero;
