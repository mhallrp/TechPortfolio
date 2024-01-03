"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import NavMenu from "./NavMenu";
import Constants from "../../app/constants";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const scrollTo = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(!isMenuOpen);
        setIsClosing(false);
      }, 200);
    } else {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  return (
    <div className="fixed flex h-16 w-full flex-row items-center bg-white shadow-nav">
      <div className="z-30 grid w-full grid-cols-2 px-8 md:grid-cols-nav md:px-16 xl:px-20">
        <div className="flex">
          <button
            onClick={() => scrollTo(Constants.sections[0])}
            className="font-oswald text-2xl font-medium text-grey"
          >
            {Constants.name}
          </button>
        </div>
        <div className="hidden md:flex">
          {Constants.sections.map((sectionName: string) => (
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
        <div className="hidden md:flex">
          <button className="ml-auto h-10 rounded border border-solid border-secondary px-4 text-secondary">
            {Constants.contact}
          </button>
        </div>
        <div className="flex md:hidden">
          <button onClick={toggleMenu} className="ml-auto h-10 text-secondary">
            {isMenuOpen ? <MdClose size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <NavMenu
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          isClosing={isClosing}
          scrollTo={scrollTo}
        />
      )}
    </div>
  );
};

export default NavBar;
