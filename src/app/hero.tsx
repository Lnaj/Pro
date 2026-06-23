"use client";

import { IconButton } from "@material-tailwind/react";

function Hero() {
  return ( 
    <div id="home" className="relative w-full max-w-5xl mx-auto overflow-auto">
      <div className="grid place-items-center min-h-[92vh] px-8">
        <div className="container mx-auto grid place-items-center h-max text-center">
          
      
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white">
            Functional Analyst with Solid Ai coding Skills
          </h1>
      
          <p className="mt-4 mb-12 w-full md:max-w-full lg:max-w-4xl text-white text-lg md:text-xl">
            I turn business team needs into useful internal tools, dashboards, and automations with an AI-assisted, delivery-first approach.

            <br /><br /> I work close to domain experts, map their workflows, and rapidly prototype solutions that reduce manual effort and improve decision quality.

            <br /><br /> My focus is practical impact: reliable outputs, strong prompt engineering, fast iteration, and clean handover for engineering teams when productionization is needed.

            <br /><br /> I am especially motivated by work linked to compliance, sustainability, and regulatory intelligence where precision, speed, and trust are essential.
          </p>
 
          <div className="mt-12 mb-4 text-white font-medium uppercase">
            Connect with me:
          </div>
          
          {/* Social Media Buttons */}
          <div className="gap-4 lg:flex">
         
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
