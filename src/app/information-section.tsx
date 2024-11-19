/* eslint-disable react/no-children-prop */
"use client";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  FireIcon,
  LanguageIcon,
} from "@heroicons/react/24/solid";
import InfoCard from "@/components/info-card";

const EDUCATION = [
  {
    icon: AcademicCapIcon,
    title: "Business Processes in SAP S/4HANA Sourcing and Procurement - VDAB Campus ",
    date: "2024-2025",
    children:
      "Relevant Coursework: ABAP, Process and Enterprise Structure in Procurement, Advanced Transactions in Procurement, Automated Procurement Process, Reporting and Analytics",
  },
  {
    icon: AcademicCapIcon,
    title: "Blockchain for Business Online Degree - Blockchain Council",
    date: "2024-2025",
    children:
      "Relevant Coursework: Blockchain in Financial Management, Blockchain use cases in Supply Chain, Finance, Digital Marketing, Law",
  },
  {
    icon: AcademicCapIcon,
    title: "Ethereum Developer Certification - LearnWeb3.io",
    date: "2024",
    children:
      "Relevant Coursework: Solidity, Forge, React.js, DAO, Metaverse, NFT and Tokens development, Wallet creation, Project Management in Cryptocurrency",
  },
  {
    icon: AcademicCapIcon,
    title: "AI Developer Certification - LearnWeb3.io",
    date: "2024",
    children:
      "Relevant Coursework: Introduction to LLM, Gen AI , Next.js, LM Studio, LeonardoAI, React.js, API, DTER Model",
  },
  {
    icon: AcademicCapIcon,
    title: "Master Degree of Economics - Solvay Brussels School of Economics and Management",
    date: "2020-2023",
    children:
      "Relevant Coursework: Advanced Statistics, Game Theory, Financial Econometrics, Corporate Finance, Derivatives, Data management and Machine learning, Regulation.",
  },
  {
    icon: AcademicCapIcon,
    title: "Bachelor Degree of Economics - Solvay Brussels School of Economics and Management",
    date: "2017-2020",
    children:
      "Relevant Coursework: Statistics, Finance, Economics, Mathematics, Computer Sciences, Law.",
  },
];

const EXPERIENCE = [
  {
    icon: BriefcaseIcon,
    title: "AI Analyst - Outlier",
    date: "2024-ongoing",
    children:
      "Leveraging a technical training in AI requirements and ethics, I help train AI models on specific topics and regions.",
  },
  {
    icon: BriefcaseIcon,
    title: "Junior Web Developer - Freelance",
    date: "2023-2024",
    children:
      "Following an intensive training in Next.js, I developed a variety of applications such as this website.",
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
    title: "Analyst in Non-Life Insurance - Axa Belgium",
    date: "2021 - 2022",
    children:
      "My duties included data cleansing, mining, and machine learning tools like GBM and GLM, with a focus on analyzing warranties in Household and Car insurance.",
  },
  {
    icon: BriefcaseIcon,
    title: "Student Teaching Assistant - Solvay Brussels School of Economics and Management",
    date: "2020 - 2020",
    children:
      "I provided comprehensive support to students learning computer science concepts.",
  },
  {
    icon: BriefcaseIcon,
    title: "Private Teaching - ULB, Ephec, UCL",
    date: "2017 - 2024",
    children:
      "I help students with issues regarding Mathematics, Statistics, Computer Science, and Econometrics.",
  },
  {
    icon: BriefcaseIcon,
    title: "Founder and CEO - Mugen Rig Farm",
    date: "2017 - 2021",
    children:
      "I managed a mining farm for Bitcoin, Ethereum, and Zencash, overseeing both hardware and software infrastructure.",
  },
];

const SKILLS = [
  {
    icon: FireIcon,
    title: "SAP S/4HANA",
    date: "Technical Skills",
    children:
      "Competent in working with SAP S/4HANA ",
  },
  {
    icon: FireIcon,
    title: "Next.Js Frameworks",
    date: "Technical Skills",
    children:
      "Competent in front-end and back-end frameworks like Next.js for dynamic and responsive web applications.",
  },
  {
    icon: FireIcon,
    title: "AI Foundations",
    date: "Technical Skills",
    children:
      "Competent in AI solutions, including LLMs and Gen AI.",
  },
  {
    icon: FireIcon,
    title: "Details-Oriented",
    date: "Soft Skills",
    children:
      "Meticulous attention to detail in code quality, UI design, and testing for error-free applications.",
  },
  {
    icon: FireIcon,
    title: "Adaptability",
    date: "Soft Skills",
    children:
      "Able to quickly adapt to changing project requirements and collaborate effectively with diverse teams.",
  },
  {
    icon: FireIcon,
    title: "ERP-CRM",
    date: "Technical Skills",
    children:
      "Experienced in managing and implementing ERP-CRM systems.",
  },
  {
    icon: FireIcon,
    title: "Organization",
    date: "Soft Skills",
    children:
      "Excellent time management for meeting deadlines and handling multiple projects.",
  },
  {
    icon: FireIcon,
    title: "Leadership and Teamwork",
    date: "Soft Skills",
    children:
      "Collaborative team player with a focus on fostering relationships and driving collective success.",
  },
  {
    icon: FireIcon,
    title: "Teaching",
    date: "Soft Skills",
    children:
      "Skilled in teaching, including classroom management, communication, and curriculum knowledge.",
  },
];

const LANGUAGES = [
  {
    icon: LanguageIcon,
    title: "French",
    date: "Native",
    children: "C2",
  },
  {
    icon: LanguageIcon,
    title: "English",
    date: "Fluent",
    children: "C1",
  },
  {
    icon: LanguageIcon,
    title: "Arabic",
    date: "Fluent",
    children: "C1",
  },
  {
    icon: LanguageIcon,
    title: "Dutch",
    date: "Intermediate",
    children: "B2",
  },
];

export function InformationSection() {
  return (
    <section className="pb-28 px-8">
      <div className="grid xl:grid-cols-2 md:grid-cols-1 container gap-20 mx-auto items-start">
        <div>
          <div id="edu" className="mb-10">
            <Typography
              color="blue-gray"
              className="mb-2 text-3xl font-bold"
              {...({} as any)} // Bypass TypeScript missing props error
            >
              Education & Certifications
            </Typography>
            <Typography
              variant="lead"
              className="!text-gray-500"
              {...({} as any)} // Bypass TypeScript missing props error
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
              {...({} as any)} // Bypass TypeScript missing props error
            >
              Experiences
            </Typography>
            <Typography
              variant="lead"
              className="!text-gray-500"
              {...({} as any)} // Bypass TypeScript missing props error
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
          <div>
            <div id="sk" className="mb-10">
              <Typography
                color="blue-gray"
                className="mb-2 text-3xl font-bold"
                {...({} as any)} // Bypass TypeScript missing props error
              >
                Skills
              </Typography>
              <Typography
                variant="lead"
                className="!text-gray-500"
                {...({} as any)} // Bypass TypeScript missing props error
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
        </div>
        <div className="container gap-20 mt-36 mx-auto items-center">
          <div>
            <div id="lang" className="mb-10">
              <Typography
                color="blue-gray"
                className="mb-2 text-3xl font-bold"
                {...({} as any)} // Bypass TypeScript missing props error
              >
                Languages
              </Typography>
              <Typography
                variant="lead"
                className="!text-gray-500"
                {...({} as any)} // Bypass TypeScript missing props error
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
      </div>
    </section>
  );
}

export default InformationSection;
