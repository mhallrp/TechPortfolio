"use client";
import { useState, useEffect, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import constants from "../../app/constants";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      isMenuOpen
    ) {
      toggleMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        toggleMenu();
      }
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {window.removeEventListener("scroll", handleScroll);window.removeEventListener("mousedown", handleScroll)};
  }, [isMenuOpen]);

  return (
    <div className="fixed flex h-16 w-full flex-row items-center bg-white shadow-nav">
      <div className="z-30 grid w-full grid-cols-2 px-8 md:grid-cols-nav md:px-16 xl:px-20">
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
        <div className="hidden md:flex">
          <button className="ml-auto h-10 rounded border border-solid border-secondary px-4 text-secondary">
            {constants.contact}
          </button>
        </div>
        <div className="flex md:hidden">
          <button onClick={toggleMenu} className="ml-auto h-10 text-secondary">
            {isMenuOpen ? <MdClose size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className={`${
            isClosing ? "animate-slide-up" : "animate-slide-down"
          } absolute left-0 top-16 w-full border-b bg-white md:hidden`}
        >
          {" "}
          {constants.sections.map((sectionName: string) => (
            <button
              key={sectionName}
              className="w-full py-2 text-center"
              onClick={() => scrollTo(sectionName)}
            >
              {sectionName}
            </button>
          ))}
          <div className="flex content-center justify-center">
            <button className="mb-4 mt-2 h-8 rounded border border-solid border-secondary px-3 text-secondary">
              {constants.contact}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
