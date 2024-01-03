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
    <div className="flex flex-row h-16 fixed w-full bg-white items-center shadow-nav">
      <div className="xl:px-20 md:px-16 md:grid-cols-nav w-full px-8 grid grid-cols-2">
        <div className="flex">
          <button
            onClick={() => scrollTo(constants.sections[0])}
            className="font-oswald text-grey text-2xl font-medium"
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
          <button className="text-secondary ml-auto border border-secondary border-solid rounded px-4 h-10">
            {constants.contact}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
