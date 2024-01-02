"use client";
import { useState } from "react";
import Styles from "./styles.module.css";
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
    <div className={Styles.navBar}>
      <div className={`${Styles.navSection} xl:px-20 md:px-16 md:grid-cols-nav px-8 grid grid-cols-2 `}>
        <div className={`${Styles.leftSection} flex justify-start`}>
          <button
            onClick={() => scrollTo(constants.sections[0])}
            className='font-oswald text-grey text-2xl font-medium'
          >
            {constants.name}
          </button>
        </div>
        <div className={`${Styles.centerSection} hidden md:flex`}>
          {constants.sections.map((sectionName: string) => (
            <button
              key={sectionName}
              className={activeSection === sectionName ? Styles.buttonSelected : ""}
              onClick={() => scrollTo(sectionName)}
            >
              {sectionName}
            </button>
          ))}
        </div>
        <div className={`${Styles.rightSection} flex justify-end md:justify-center`}>
          <button className={Styles.navContact}>{constants.contact}</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
