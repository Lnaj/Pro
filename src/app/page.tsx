// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import InformationSection from "./information-section";
import Testimonial from "./testimonial";

export default function Portfolio() {
  return (
    <>
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <Navbar />
      <Hero />
      <Testimonial />
      <InformationSection />
      <Footer />
    </>
  );
}
