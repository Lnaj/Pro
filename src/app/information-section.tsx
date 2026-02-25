"use client";
import { Typography } from "@material-tailwind/react";
import InfoCard from "@/components/info-card";
import { EDUCATION, EXPERIENCE, SKILLS, LANGUAGES } from "@/data/resume";

export function InformationSection() {
  return (
    <section className="pb-28 px-8">
      <div className="grid xl:grid-cols-2 md:grid-cols-1 container gap-20 mx-auto items-start">
        <div>
          <div id="edu" className="mb-10">
            <Typography
              color="blue-gray"
              className="mb-2 text-3xl font-bold"
              {...({} as any)}
            >
              Education &amp; Certifications
            </Typography>
            <Typography
              variant="lead"
              className="!text-gray-500"
              {...({} as any)}
            >
              See my education history.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
            {EDUCATION.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-10">
            <Typography
              color="blue-gray"
              className="mb-2 text-3xl font-bold"
              {...({} as any)}
            >
              Experiences
            </Typography>
            <Typography
              variant="lead"
              className="!text-gray-500"
              {...({} as any)}
            >
              See my previous working experience.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
            {EXPERIENCE.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>

        <div className="container gap-20 mt-36 mx-auto items-center">
          <div id="sk" className="mb-10">
            <Typography
              color="blue-gray"
              className="mb-2 text-3xl font-bold"
              {...({} as any)}
            >
              Skills
            </Typography>
            <Typography
              variant="lead"
              className="!text-gray-500"
              {...({} as any)}
            >
              Check out my technical and soft skills.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12 lg:grid-cols-2">
            {SKILLS.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>

        <div className="container gap-20 mt-36 mx-auto items-center">
          <div id="lang" className="mb-10">
            <Typography
              color="blue-gray"
              className="mb-2 text-3xl font-bold"
              {...({} as any)}
            >
              Languages
            </Typography>
            <Typography
              variant="lead"
              className="!text-gray-500"
              {...({} as any)}
            >
              Check out my languages.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12 lg:grid-cols-2">
            {LANGUAGES.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InformationSection;
