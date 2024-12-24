import Image from "next/image";
import heroImage from "../../../../public/hero.png";

const Hero = () => {
  return (
    <div className="relative bg-white w-full">
      {/* Main Container */}
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Left Content */}
        <div className="col-span-12 md:col-span-6 flex flex-col p-6 md:p-12 gap-6 bg-gray-100">
          <div className="flex flex-wrap gap-2">
            <h1 className="text-3xl md:text-6xl leading-tight">Take the</h1>
            <span className="bg-white text-black text-3xl md:text-6xl leading-tight px-2">
              _space
            </span>
          </div>
          <div className="flex flex-wrap gap-4 items-start">
            <h1 className="text-3xl md:text-6xl leading-tight">seriously.</h1>
            <div className="flex flex-col ml-0 md:ml-4 text-sm md:text-base">
              <p>HOME</p>
              <p>VIKTORIA</p>
              <p>DESIGN</p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-6 flex flex-wrap gap-4">
            <blockquote className="flex-1 px-4">
              <p className="italic text-sm md:text-base">
                “Every time I smile <br /> when I enter the room <br /> designed
                by her. It’s like <br /> she always knows what it is that truly
                makes me <br /> happy.”
              </p>
              <cite className="block mt-2 text-sm font-bold">
                – Fiona Hilton
              </cite>
            </blockquote>

            <blockquote className="flex-1 px-4">
              <p className="italic text-sm md:text-base">
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
        <div className="col-span-12 md:col-span-6 relative bg-gray-100 flex flex-col">
          {/* Main Image */}
          <Image
            src={heroImage}
            alt="Hero Section"
            layout="responsive"
            width={560}
            height={360}
            className="object-cover"
            priority
          />

          {/* Buttons Section */}
          <div className="flex flex-wrap">
            <button className="flex-1 px-6 py-4 text-center text-black text-sm uppercase tracking-wider bg-gray-100 hover:bg-gray-700 hover:text-white transition-all duration-300">
              Contact me →
            </button>

            <button className="flex-1 px-6 py-4 text-center text-black text-sm uppercase tracking-wider bg-gray-100 hover:bg-gray-700 hover:text-white transition-all duration-300">
              Shop →
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="left-0 w-full bg-black text-white py-4">
        <div className="text-center text-xs md:text-sm uppercase tracking-wider">
          Stunning interiors _ home decor _ office design
        </div>
      </footer>
    </div>
  );
};

export default Hero;
