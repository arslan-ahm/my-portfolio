import type { Navbar_Link } from "~/types/navbar.types";

export const NAVBAR_LINKS: Navbar_Link[] = [
    {
      id: "home-mobile-tab",
      classes: "mobile-navbar-tabs-li home activeThismobiletab",
      href: "#home",
      ariaLabel: "Home menu button",
      text: "Home",
    },
    {
      id: "aboutme-mobile-tab",
      classes: "mobile-navbar-tabs-li about",
      href: "#about",
      ariaLabel: "about menu button",
      text: "About Me",
    },
    {
      id: "skills-mobile-tab",
      classes: "mobile-navbar-tabs-li skills",
      href: "#skills",
      ariaLabel: "skills menu button",
      text: "Skills",
    },
    {
      id: "projects-mobile-tab",
      classes: "mobile-navbar-tabs-li projects",
      href: "#projects",
      ariaLabel: "projects menu button",
      text: "Projects",
    },
  ];