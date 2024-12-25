import Header from "@/app/sections/Header/pages";
import "../app/styles/globals.css"
import Hero from "./sections/Hero/pages";
import Services from "./sections/Services/pages";
import AboutSection from "./sections/About/pages";
import Footer from "./sections/Foooter/pages";
import BlogSection from "./sections/blog/pages";

export default function Home() {
  return (
    <div className="bg-[#ECECEC]">
      <Header/>
      <Hero/>
      <Services/>
     <AboutSection/>
     <BlogSection/>
      <Footer/>
    </div>
  );
}
