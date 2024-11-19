"use client";

import { IconButton } from "@material-tailwind/react";

function Hero() {
  return ( 
    <div id="home" className="relative w-full max-w-screen-lg mx-auto overflow-auto">
      <div className="grid place-items-center min-h-[92vh] px-8">
        <div className="container mx-auto grid place-items-center h-max text-center">
          
      
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white">
            Professional Technology Consultant Specialized in AI and Blockchain
          </h1>
      
          <p className="mt-4 mb-12 w-full md:max-w-full lg:max-w-4xl text-white text-lg md:text-xl">
            Welcome to my professional resume page, I will keep this page updated! Below, you will find a
            comprehensive overview of my skills, qualifications, and experiences.
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
