"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type AccordionpProps = {
  children: React.ReactNode;
  title: string;
  id: string;
  active?: boolean;
};

export default function Accordion({
  children,
  title,
  id,
  active = false,
}: AccordionpProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  useEffect(() => {
    setAccordionOpen(active);
  }, []);

  return (
    <div
      className={`my-2 py-2 ${
        accordionOpen ? "bg-2575FC" : "bg-footer"
      } border-none rounded px-10 `}
    >
      <h2 className="pl-2">
        <button
          className="flex items-center justify-between w-full text-left font-semibold py-2"
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span className="text-sm text-white">{title}</span>

          <div className="accordion-arrow-container">
            <Image
              src="./downArrow.svg"
              width={24}
              height={24}
              className={`accordion-arrow down ${
                accordionOpen ? "hidden" : ""
              }`}
            />
            <Image
              src="./upArrow.svg"
              width={24}
              height={24}
              className={`accordion-arrow up ${accordionOpen ? "" : "hidden"}`}
            />
          </div>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid text-sm text-white overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden pl-3">
          <p className="pb-3 font-light">{children}</p>
        </div>
      </div>
    </div>
  );
}
