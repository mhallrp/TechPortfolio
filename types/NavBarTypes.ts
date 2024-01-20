export interface NavMenuProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    isClosing: boolean;
    scrollTo: (sectionId: string) => void;
    activeSection: string;
  }