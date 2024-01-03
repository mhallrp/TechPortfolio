import { useEffect, useRef } from "react";
import Constants from "../../app/constants";

interface NavMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  isClosing: boolean;
  scrollTo: (sectionId: string) => void;
  activeSection: string;
}

const NavMenu = (props: NavMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      props.isMenuOpen
    ) {
      props.toggleMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (props.isMenuOpen) {
        props.toggleMenu();
      }
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleScroll);
    };
  }, [props.isMenuOpen]);

  return (
    <div
      ref={menuRef}
      className={`${
        props.isClosing ? "animate-slide-up" : "animate-slide-down"
      } absolute left-0 top-16 w-full border-b bg-white md:hidden`}
    >
      {Constants.sections.map((sectionName: string) => (
        <button
          key={sectionName}
          className={`w-full py-2 text-center ${
            props.activeSection === sectionName && "text-secondary"
          }`}
          onClick={() => props.scrollTo(sectionName)}
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
