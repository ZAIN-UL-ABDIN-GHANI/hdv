import Image from 'next/image';
import aboutImage from '../../../../public/aboutMian.png';
import smallImage1 from '../../../../public/aboutimg1.png';
import smallImage2 from '../../../../public/aboutimg2.png';
import smallImage3 from '../../../../public/aboutimg3.png';

const AboutSection = () => {
  return (
    <div className="flex bg-black w-full px-6 md:px-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-8">
        {/* Left Section */}
        <div className="col-span-12 md:col-span-6 flex flex-col gap-6">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            _ About me
          </h2>
      
          <p className="text-sm md:text-base leading-relaxed w-fit text-black bg-white">
            As a passionate interior designer, I am a <br />
            devotee of minimalism and spatial <br />
            harmony. I believe that sleek design not <br />
            only provides an aesthetic experience but <br />
            also makes everyday life more <br />
            harmonious. With my unique style and <br />
            personalized approach, I strive to create a <br />
            real home for my clients in every project.
          </p>
          <button className=" px-6 py-3 bg-black text-white text-sm uppercase tracking-wider hover:bg-gray-300 transition self-start">
            Learn more about me →
          </button>
          <p className="text-sm leading-relaxed mt-4 px-10 text-white">
            My inner passion led me to interior <br />design, where I celebrate the
            harmony <br />of minimalism and space. My unique <br />style reflects the
            perfect harmony of <br /> sleekness and functionality. Each  <br />project is an
            opportunity for me to <br /> blend my clients’ personalities and <br /> styles
            with my own creative vision, <br /> creating truly unique and inspiring <br />
            spaces.
          </p>
        </div>

        {/* Right Section */}
        <div className="col-span-12  mt-16 left-6 md:col-span-6 relative">
          <h1 className="text-lg text-white font-semibold mb-4">
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
