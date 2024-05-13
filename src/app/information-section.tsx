"use client";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  FireIcon,
} from "@heroicons/react/24/solid";

import InfoCard from "@/components/info-card";

const EDUCATION = [
  {
    icon: AcademicCapIcon,
    title: "Blockchain for Business Online Degree - Blockchain Council",
    date: "2024-2025",
    children:
      "Relevant Coursework: Blockchain in Financial Management, Blockchain use cases in Supply Chain, Finance, Digital Marketing, Law",
  },
  {
    icon: AcademicCapIcon,
    title: "Ethereum developer Certification - LearnWeb3.io",
    date: "2024",
    children:
      "Relevant Coursework: Solidity, Web3.js, React.js, Dao, NFT and Tokens development,Project Management in Cryptocurrency",
  },
  {
    icon: AcademicCapIcon,
    title: "AI developer Certification - LearnWeb3.io",
    date: "2024",
    children:
      "Relevant Coursework: Introduction to LLm, Next.js, React.js, Api , DTER Model",
      
  },
  {
    icon: AcademicCapIcon,
    title: "Master Degree of Economics - Solvay Brussels School of Economics and Management",
    date: "2020-2023",
    children:
      "Relevant Coursework: Advanced Statistics, Corporate Finances, Derivatives, Data management and Machine learning , Regulation.",
  },
  {
    icon: AcademicCapIcon,
    title: "Bachelor degree of Economics - Solvay Brussels School of Economics and Management",
    date: "2017-2020",
    children:
      "Relevant Coursework: Statistics, Economics, Mathematics, Computer Sciences , Law.",
  },
];

const EXPERIENCE = [
  {
    icon: BriefcaseIcon,
    title: "Junior Web Developer - Freelance",
    date: "2023-2024",
    children:
      "Following an intensive training in Next.js, I developed a variety of applications showcased on my portfolio website.",
  },
  {
    icon: BriefcaseIcon,
    title: "Technology Consultant - European Security Concept",
    date: "2022 - 2023",
    children:
      "My expertise lied in the implementation of ERP-CRM systems, encompassing both software and hardware components, as well as configuring the ERP system, supplemented by delivering user training sessions and producing detailed documentation.",
  },
  {
    icon: BriefcaseIcon,
    title: "Analyst in Non-Life insurance - Axa Belgium",
    date: "2021 - 2022",
    children:
      "In this role, my duties encompassed data cleansing and mining, utilizing machine learning tools like GBM and GLM, alongside proficiency in data visualization and presentation techniques, with a specific emphasis on analyzing optional warranties within Household and Car insurance.",
    },
  {
    icon: BriefcaseIcon,
    title: "Student Teaching Assistant - Solvay Brussels School of Economics and Management",
    date: "2020 - 2020",
    children:
      "I assumed the role of a student teaching assistant, offering comprehensive support and guidance to students as they grasped fundamental computer science concepts. ",
  },
  {
    icon: BriefcaseIcon,
    title: "Founder and CEO - Mugen Rig farm",
    date: "2017 - 2021",
    children:
      "I spearheaded the development of a mining farm dedicated to Bitcoin, Ethereum, and Zencash, wherein my responsibilities revolved around overseeing the operation and maintenance of both hardware and software infrastructure crucial for the efficient and profitable extraction of various cryptocurrencies ",
  },
  
];

const SKILLS = [
  {
    icon: FireIcon,
    title: "Next.Js Frameworks",
    date: "Technical Skills",
    children:
      "Competent in working with front-end and back-end frameworks such as Next js, to develop dynamic and responsive web applications with a focus on user experience.",
  },
  {
    icon: FireIcon,
    title: "AI Foundation",
    date: "Technical Skills",
    children:
      "Competent in working with AI in prompt design and AI solutions such as LLMs",
  },
  {
    icon: FireIcon,
    title: "Detail oriented",
    date: "Soft Skills",
    children:
      "Meticulous attention to detail in code quality, user interface design, and testing to ensure error-free and user-friendly web applications.",
  },
  {
    icon: FireIcon,
    title: "Adaptability",
    date: "Soft Skills",
    children:
      "Capable of quickly adapting to evolving project requirements and effectively collaborating with diverse teams to achieve successful outcomes.",
  },
  {
    icon: FireIcon,
    title: "Erp-Crm ",
    date: "Technical Skills",
    children:
      "Proficient in the management and implementation of entreprise business softwares.",
  },
  {
    icon: FireIcon,
    title: "Ability to organize work in a practical way",
    date: "Soft Skills",
    children:
      "Excellent time management skills to meet project deadlines, prioritize tasks effectively, and handle multiple projects simultaneously.",
  },
  {
    icon: FireIcon,
    title: "Sense of leadership and teamwork",
    date: "Soft Skills",
    children:
      "Collaborative team player known for fostering positive relationships, contributing valuable insights, and driving collective success through effective communication and cooperation.",
  },
];

export function InformationSection() {
  return (
    <section className="pb-28 px-8">
      <div className="grid xl:grid-cols-2 md:grid-cols-1 container gap-20 mx-auto items-start">
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
              Education & Certifications
            </Typography>
            <Typography variant="lead" className="!text-gray-500">
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
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
              Experiences
            </Typography>
            <Typography variant="lead" className="!text-gray-500">
              See my previous working experience.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
            {EXPERIENCE.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
      <div className="container gap-20 mt-36 mx-auto items-center">
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
              Skills
            </Typography>
            <Typography variant="lead" className="!text-gray-500">
              Check out my technical and soft skills.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12 lg:grid-cols-2">
            {SKILLS.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InformationSection;
