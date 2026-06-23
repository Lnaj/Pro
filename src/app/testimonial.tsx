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
            Functional Profile
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
            {...({} as any)}
          >
            I am a business-facing builder who combines domain understanding, AI-assisted coding, and rapid delivery to solve real operational bottlenecks.
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
                AI Coding Engineer with Functional Consulting Background
              </Typography>
              <Typography className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500" {...({} as any)}>
                With a Master&apos;s degree in Economics and experience across analytics, consulting, and systems implementation, I translate complex business needs into simple, usable technical outputs.
                <br /><br />
                I use LLMs and AI coding assistants to prototype quickly, automate repetitive tasks, structure unformatted information, and deliver internal tools that teams can use immediately.
                <br /><br />
                My way of working is pragmatic and iterative: listen deeply, ship fast, validate quality, respect data privacy constraints, and prepare clean handovers for production teams.
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-0.5" {...({} as any)}>
                Najib - AI Coding Engineer
              </Typography>
              <Typography variant="small" className="font-normal mb-5 !text-gray-500" {...({} as any)}>
                Experienced in AI-assisted development, workflow automation, and business-facing delivery.
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
