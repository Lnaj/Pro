"use client";

import { IconButton } from "@material-tailwind/react";

function Hero() {
  return ( 
    <div id="home" className="relative w-full max-w-screen-lg mx-auto overflow-auto">
      <div className="grid place-items-center min-h-[92vh] px-8">
        <div className="container mx-auto grid place-items-center h-max text-center">
          
      
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white">
          Aspiring SAP Functional Consultant with a Passion for Business Process Optimization
          </h1>
      
          <p className="mt-4 mb-12 w-full md:max-w-full lg:max-w-4xl text-white text-lg md:text-xl">
         
          Welcome to my professional resume page! I will keep this page updated to share my journey, skills, and growing experiences in the world of SAP consulting.

          As a junior consultant, I am eager to learn, contribute, and develop tailored SAP solutions that enhance business efficiency and support growth.
          
          <br /><br /> I am passionate about understanding business needs and translating them into effective system configurations.

             <br /><br />
            Feel free to reach out by hitting the connect button!
            Looking forward to interesting conversations and business opportunities.
          </p>
 
          <div className="mt-12 mb-4 text-white font-medium uppercase">
            Connect me also on:
          </div>
          
          {/* Social Media Buttons */}
          <div className="gap-4 lg:flex">
        
            <a href="https://github.com/Lnaj" target="_blank" rel="noreferrer">
              <button className="text-white p-2">
                <i className="fa-brands fa-instagram text-lg" />
              </button>
            </a>
            <a href="https://github.com/Lnaj" target="_blank" rel="noreferrer">
              <button className="text-white p-2">
                <i className="fa-brands fa-github text-lg" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
