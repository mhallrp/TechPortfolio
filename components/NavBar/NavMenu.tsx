import { useEffect, useRef } from "react";
import Constants from "../../app/constants";
import { NavMenuProps } from "@/types";

const NavMenu: React.FC<NavMenuProps> = ({ isMenuOpen, toggleMenu, isClosing, activeSection, scrollTo }) => {
  const menuRef = useRef<HTMLDivElement>(null);

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
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <div
      ref={menuRef}
      className={`${
        isClosing ? "animate-slide-up" : "animate-slide-down"
      } absolute left-0 top-16 w-full border-b bg-white md:hidden`}
    >
      {Constants.sections.map((sectionName: string) => (
        <button
          key={sectionName}
          className={`w-full py-2 text-center ${
            activeSection === sectionName && "text-secondary"
          }`}
          onClick={() => scrollTo(sectionName)}
        >
          {sectionName}
        </button>
      ))}
      <div className="flex content-center justify-center">
        <button className="mb-4 mt-2 h-8 rounded border border-solid border-secondary px-3 text-secondary">
          {Constants.contact}
        </button>
      </div>
    </div>
  );
};

export default NavMenu;
