"use client";
import { experience } from "@/utils/data";
import gsap from "gsap";
import React, { useState, useRef } from "react";

const ExperienceSection = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const accordionRefs = useRef<
    (HTMLDivElement | null | HTMLElementTagNameMap[T])[]
  >([]);

  const handleAccordion = (index: number) => {
    if (index === openAccordion) {
      gsap.to(
        accordionRefs.current[index]?.querySelector(".accordion-details"),
        {
          height: 0,
          duration: 1,
          ease: "power1.inOut",
          onComplete: () => setOpenAccordion(null),
        }
      );
      console.log(openAccordion);
    } else {
      if (openAccordion !== null) {
        gsap.to(
          accordionRefs.current[openAccordion]?.querySelector(
            ".accordion-details"
          ),
          {
            height: 0,
            duration: 1,
            ease: "power1.inOut",
          }
        );
      }
      setOpenAccordion(index);
      gsap.fromTo(
        accordionRefs.current[index]?.querySelector(".accordion-details"),
        { height: 0 },
        { height: "auto", duration: 1, ease: "power1.inOut" }
      );
    }
  };

  return (
    <section id="experience">
      <div className="">
        <h1 className="text-center font-bold text-4xl my-14">
          My Experience
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className=" items">
          {experience.map((jobExp) => {
            const { id, company, date, duties } = jobExp;
            return (
              <div
                key={id}
                className={`shadow-md shadow-slate-600 dark:shadow-slate-200 rounded-lg my-5 md:my-8 ${
                  openAccordion === id ? "open" : null
                }`}
                ref={(el) => (accordionRefs.current[id] = el)}
              >
                <div
                  className=" flex items-center justify-between bg-teal-500 px-4 py-2 rounded-t-lg  cursor-pointer"
                  onClick={() => handleAccordion(id)}
                >
                  <p className=" font-semibold text-xl md:text-2xl">
                    {company}
                  </p>
                  <p className=" font-medium text-lg">{date}</p>
                </div>
                {duties.map((duty, index) => {
                  return (
                    <div key={index} className="accordion-details">
                      <li className={`text-lg px-4 py-2`}>{duty}</li>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
