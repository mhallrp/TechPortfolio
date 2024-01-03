"use client";
import { useState } from "react";
import constants from "../../app/constants";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("Home");

  const scrollTo = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
  };

  return (
    <div className="fixed flex h-16 w-full flex-row items-center bg-white shadow-nav">
      <div className="grid w-full grid-cols-2 px-8 md:grid-cols-nav md:px-16 xl:px-20">
        <div className="flex">
          <button
            onClick={() => scrollTo(constants.sections[0])}
            className="font-oswald text-2xl font-medium text-grey"
          >
            {constants.name}
          </button>
        </div>
        <div className="hidden md:flex">
          {constants.sections.map((sectionName: string) => (
            <button
              key={sectionName}
              className={
                activeSection === sectionName
                  ? "px-6 text-sm text-secondary"
                  : "px-6 text-sm"
              }
              onClick={() => scrollTo(sectionName)}
            >
              {sectionName}
            </button>
          ))}
        </div>
        <div className="flex">
          <button className="ml-auto h-10 rounded border border-solid border-secondary px-4 text-secondary">
            {constants.contact}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
