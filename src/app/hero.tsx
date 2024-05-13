"use client";

import { IconButton, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative w-full">
      <div className="grid place-items-center min-h-[92vh] px-8">
        <div className="container mx-auto grid place-items-center h-max text-center">
          <Typography variant="h1" color="white">
            Professional Technology Consultant Specialized in IA and Blockchain
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-4 mb-12 w-full md:max-w-full lg:max-w-4xl"
          >
            Welcome to my professional resume page, i&apos;ll keep this page updated ! Below, you&apos;ll find a
            comprehensive overview of my skills, qualifications, and experiences.

            Feel free to react out by using the connect button!
            Looking forward for interesting conversations and business opportunities.
          </Typography>
          <Typography className="mt-12 mb-4 text-blue-gray-900 font-medium uppercase">
            Connect me on:
          </Typography>
          <div className="gap-2 lg:flex">
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-facebook text-lg" />
            </IconButton>
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
