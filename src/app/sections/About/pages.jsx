import Image from "next/image";
import aboutImage from "../../../../public/aboutMian.png";
import smallImage1 from "../../../../public/aboutimg1.png";
import smallImage2 from "../../../../public/aboutimg2.png";
import smallImage3 from "../../../../public/aboutimg3.png";
import frameicon from "../../../../public/Frame 6.png";
const AboutSection = () => {
  return (
    <div className="flex bg-black w-full px-6 md:px-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 w-full">
        {/* Left Section */}
        <div className="col-span-12 md:col-span-6 flex flex-col gap-0">
  <h2 className="text-2xl font-playfair md:text-4xl font-light text-white">
    _ About me
  </h2>
  <div className="flex justify-end">
    <p className="text-sm w-[60%] p-12 font-manrope text-black bg-white">
      As a passionate interior designer, I am a devotee of minimalism and spatial harmony. I believe that sleek design not only provides an aesthetic experience but also makes everyday life more harmonious. With my unique style and personalized approach, I strive to create a real home for my clients in every project.
    </p>
  </div>
  <div className="flex justify-end">
    <button className="text-sm w-[60%] p-2 font-playfair text-white">
      Learn more about me 
     
    </button>
</div>
  <div className="flex justify-end">
    <p className="text-sm leading-relaxed w-[60%] p-12 font-manrope text-white bg-transparent">
      My inner passion led me to interior design, where I celebrate the harmony of minimalism and space. My unique style reflects the perfect harmony of sleekness and functionality. Each project is an opportunity for me to blend my clients’ personalities and styles with my own creative vision, creating truly unique and inspiring spaces.
    </p>
  </div>
</div>



        {/* Right Section */}
        <div className="col-span-12  mt-10 md:col-span-6 relative">
          <h1 className="text-lg border  border-white text-white text-center font-semibold h-12">
            Viktória Réfalvi
          </h1>
          <div className="grid grid-cols-1 ">
            {/* Main Image */}
            <Image
              src={aboutImage}
              alt="About Section Image"
              className="object-cover w-full h-[320px] md:h-[460px]"
              priority
            />
            {/* Small Images */}
            <div className="grid grid-cols-3 ">
              <Image
                src={smallImage1}
                alt="Small Image 1"
                className="object-cover w-full h-[150px] md:h-[176px]"
              />
              <Image
                src={smallImage2}
                alt="Small Image 2"
                className="object-cover w-full h-[150px] md:h-[176px]"
              />
              <Image
                src={smallImage3}
                alt="Small Image 3"
                className="object-cover w-full h-[150px] md:h-[176px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
