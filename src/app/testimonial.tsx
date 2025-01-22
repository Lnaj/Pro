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
          {/* Type assertion to bypass TypeScript checks */}
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4"
            {...({} as any)}
          >
            About Me
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
            {...({} as any)}
          >
            Hi, I’m Najib tech enthusiast with a lifelong passion for innovation and exploration. A business school graduate fueled by curiosity, I thrive on learning and diving into new challenges. By day, I’m an SAP Functional Analyst, ensuring businesses run smoothly, and by night, I’m a creator—building personal projects in Web3, trading, and even teaching. Beyond the screen, I’m an avid sports lover who believes in pushing boundaries, both physically and intellectually. Welcome to my world, where tech, growth, and passion collide!
          </Typography>
        </div>
        {/* Type assertion to bypass TypeScript checks */}
        <Card
          color="transparent"
          shadow={false}
          className="py-8 lg:flex-row"
          {...({} as any)}
        >
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between" {...({} as any)}>
            <div className="w-full mb-10 lg:mb-0">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold lg:max-w-xs"
                {...({} as any)}
              >
                Technology Consultant and AI Passionate
              </Typography>
              <Typography className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500" {...({} as any)}>
              With a Master&apos;s degree in Economics, extensive experience as an actuary at AXA, and a background as a consultant in IT security, I am actively pursuing opportunities in functional SAP consultancy.
        <br /><br />
    My interest lies in leveraging my economic expertise and technical skills to analyze, configure, and optimize SAP solutions that drive business efficiency and success.
<br /><br />
I thrive in collaborative environments, enjoying teamwork and the opportunity to work closely with clients and stakeholders to achieve their operational goals. Driven by motivation and adaptability, I eagerly embrace new challenges in the ever-evolving world of SAP consulting.
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-0.5" {...({} as any)}>
                Najib - IT  Consultant
              </Typography>
              <Typography variant="small" className="font-normal mb-5 !text-gray-500" {...({} as any)}>
                Experienced in AI and consultancy services.
              </Typography>
              <div className="flex items-center gap-4">
                <Avatar
                  variant="rounded"
                  src="/image/avatar3.jpg"
                  alt="Najib"
                  size="sm"
                  className={`cursor-pointer ${active === 3 ? "opacity-100" : "opacity-50"}`}
                  onClick={() => setActive(3)}
                  {...({} as any)}
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100"></div>
                <Avatar
                  variant="rounded"
                  src="/image/avatar1.jpg"
                  alt="avatar"
                  size="sm"
                  className={`cursor-pointer ${active === 1 ? "opacity-100" : "opacity-50"}`}
                  onClick={() => setActive(1)}
                  {...({} as any)}
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
