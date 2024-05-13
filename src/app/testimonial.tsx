"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";


export function Testimonial() {
  const [active, setActive] = React.useState(3);
  
  return (
    
    <section className="py-12 px-8 lg:py-24">
      
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          
          <Typography variant="h2" color="blue-gray" className="mb-4">
            About Me
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
          >
            
          </Typography>
        </div>
        <Card color="transparent" shadow={false} className="py-8 lg:flex-row">
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between ">
            <div className="w-full mb-10 lg:mb-0">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold lg:max-w-xs"
              >
                Technology Consultant and AI Specialist
              </Typography>
              <Typography className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500">
                With a Master's degree in Economics, extensive experience as an
                actuary at AXA, and a background as a consultant in IT security, I am
                actively pursuing opportunities in information technology consultancy.

                My interest lies in project management positions, where I aim to
                leverage my blend of economic expertise and technical skills to deliver exceptional results.
                
                I thrive in collaborative environments, enjoying teamwork and the opportunity to work closely with people to achieve common goals. 
                Driven by motivation and adaptability, I eagerly embrace new challenges in the dynamic landscape of technology consultancy.
 
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-0.5">
                Najib - Junior Consultant
              </Typography>
              <Typography
                variant="small"
                className="font-normal mb-5 !text-gray-500"
              >
                
              </Typography>
              <div className="flex items-center gap-4">
                <Avatar
                  variant="rounded"
                  src="/image/avatar1.jpg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer ${
                    active === 1 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(1)}
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100 "></div>
                <Avatar
                  variant="rounded"
                  src="/image/avatar2.jpg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer ${
                    active === 2 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(2)}
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100" />
                <Avatar
                  variant="rounded"
                  src="/image/avatar3.jpg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer ${
                    active === 3 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(3)}
                />
              </div>
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <Image
                width={768}
                height={768}
                src={`/image/avatar${active}.jpg`}
                alt="testimonial image"
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;
