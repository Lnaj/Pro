/* eslint-disable react/no-children-prop */
"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

export function Testimonial() {
  const [active, setActive] = React.useState(3);
  
  return (
    
    <section id="test" className="py-12 px-8 lg:py-24">
      
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          
          <Typography variant="h2" color="blue-gray" className="mb-4" children={undefined} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            About Me
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12" children={undefined} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            
          </Typography>
        </div>
        <Card color="transparent" shadow={false} className="py-8 lg:flex-row" children={undefined} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between " children={undefined} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className="w-full mb-10 lg:mb-0">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold lg:max-w-xs" children={undefined} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                Technology Consultant and AI Specialist
              </Typography>
              <Typography className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500" children={undefined} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                With a Master&apos;s degree in Economics, extensive experience as an
                actuary at AXA, and a background as a consultant in IT security, I am
                actively pursuing opportunities in information technology consultancy.
                <br /><br />
                My interest lies in project management positions, where I aim to
                leverage my blend of economic expertise and technical skills to deliver exceptional results.
                <br /><br />
                I thrive in collaborative environments, enjoying teamwork and the opportunity to work closely with people to achieve common goals. 
                Driven by motivation and adaptability, I eagerly embrace new challenges in the dynamic landscape of technology consultancy.
 
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-0.5" children={undefined} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Najib - IT Consultant
              </Typography>
              <Typography
                variant="small"
                className="font-normal mb-5 !text-gray-500" children={undefined} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                
              </Typography>
              <div className="flex items-center gap-4">
                <Avatar
                  variant="rounded"
                  src="/image/avatar3.jpg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer ${active === 3 ? "opacity-100" : "opacity-50"}`}
                  onClick={() => setActive(3)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100 "></div>
                
                <Avatar
                  variant="rounded"
                  src="/image/avatar1.jpg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer ${active === 1 ? "opacity-100" : "opacity-50"}`}
                  onClick={() => setActive(1)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                />
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
