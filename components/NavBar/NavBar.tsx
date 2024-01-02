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
      <div className={Styles.navSection}>
        <div className={Styles.leftSection}>
          <button
            onClick={() => scrollTo(constants.sections[0])}
            className='font-oswald text-grey text-2xl font-medium mr-auto'
          >
            {constants.name}
          </button>
        </div>
        <div className={Styles.centerSection}>
          {constants.sections.map((sectionName: string) => (
            <button
              key={sectionName}
              className={
                activeSection === sectionName ? Styles.buttonSelected : ""
              }
              onClick={() => scrollTo(sectionName)}
            >
              {sectionName}
            </button>
          ))}
        </div>
        <div className={Styles.rightSection}>
          <button className={Styles.navContact}>{constants.contact}</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;