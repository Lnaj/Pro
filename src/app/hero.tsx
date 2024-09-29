"use client";

import { IconButton, Typography } from "@material-tailwind/react";

function Hero() {
  return ( 
    <div  id="home" className="relative w-full max-w-screen-lg mx-auto overflow-auto"  >
      <div className="grid place-items-center min-h-[92vh] px-8">
        <div className="container mx-auto grid place-items-center h-max text-center">
          <Typography   variant="h1" color="white" className="text-3xl md:text-5xl lg:text-6xl">
           Professional Technology Consultant Specialized in AI and Blockchain
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-4 mb-12 w-full md:max-w-full lg:max-w-4xl"
          >
            Welcome to my professional resume page, i&apos;ll keep this page updated ! Below, you&apos;ll find a
            comprehensive overview of my skills, qualifications, and experiences.
            <br /><br />
            Feel free to react out by hitting the connect button!
            Looking forward for interesting conversations and business opportunities.
          </Typography>
          <Typography className="mt-12 mb-4 text-white font-medium uppercase">
            Connect me also on:
          </Typography>
              {/* Social Media Buttons */}
              <div className="gap-4 lg:flex">
            
            <a href="https://www.instagram.com/mugen_naj?igsh=MW5sODFpM3BjNGM2aQ==" target="_blank" rel="noreferrer">
              <IconButton variant="text" color="white">
                <i className="fa-brands fa-instagram text-lg" />
              </IconButton>
            </a>
            <a href="https://github.com/Lnaj" target="_blank" rel="noreferrer">
              <IconButton variant="text" color="white">
                <i className="fa-brands fa-github text-lg" />
              </IconButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
