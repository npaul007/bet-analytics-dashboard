import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery } from "@mui/material";

const NavWrapper = styled.div`
  position: fixed;
  top: 0;

  width: 100%;
  height: 48px;

  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  align-items: center;

  color: #fff;
  background: #000;
  z-index: 2;

  .menu_icon {
    display: none;
  }

  @media screen and (max-width: 760px) {
    .menu_icon {
      display: block;
      position: absolute;
      right: 65px;
      cursor: pointer;
    }
  }
`;

const NavTitle = styled.h3`
  font-family: Modak, sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 100;
  cursor: pointer;
  user-select: none;
`;

const NavGroup = styled.div`
  z-index: 5;
  @media screen and (min-width: 760px) {
    display: flex;
    justify-content: space-between;
    gap: 25px;
    position: absolute;
    right: 75px;
  }

  @media screen and (max-width: 760px) {
    position: fixed;
    top: 48px;
    left: 0px;

    background: #000;

    height: 100vh;
    width: 100%;
    padding: 15px;
    text-align: center;
    font-size: 24px;
  }
`;

const NavItem = styled.p`
  cursor: pointer;
  user-select: none;
`;

const scrollToSection = (e) => {
  const { name } = e.target.attributes;
  const element = document.getElementById(name.value);
  const yOffset = -40;
  if (element) {
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const NavLinks = ({ toggleMenu = null }) => {
  return (
    <NavGroup>
      <NavItem
        onClick={(e) => {
          scrollToSection(e);
          toggleMenu && toggleMenu();
        }}
        name="about-2"
      >
        About
      </NavItem>
      <NavItem
        onClick={(e) => {
          scrollToSection(e);
          toggleMenu && toggleMenu();
        }}
        name="work"
      >
        The Work
      </NavItem>
      <NavItem
        onClick={(e) => {
          scrollToSection(e);
          toggleMenu && toggleMenu();
        }}
        name="testimonials"
      >
        Testimonials
      </NavItem>
      <NavItem
        onClick={(e) => {
          scrollToSection(e);
          toggleMenu && toggleMenu();
        }}
        name="contact"
      >
        Contact
      </NavItem>
    </NavGroup>
  );
};

const NavMobile = () => {
  const [open, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!open);
  };

  return (
    <NavWrapper>
      <NavTitle onClick={scrollToSection} name="about-1">
        Auxiliary One
      </NavTitle>
      {!open ? <MenuIcon className="menu_icon" onClick={toggleMenu} /> : null}
      {open ? <CloseIcon className="menu_icon" onClick={toggleMenu} /> : null}
      {open ? <NavLinks toggleMenu={toggleMenu} /> : null}
    </NavWrapper>
  );
};

const NavDesktop = () => {
  return (
    <NavWrapper>
      <NavTitle onClick={scrollToSection} name="about-1">
        Auxiliary One
      </NavTitle>
      <NavLinks />
    </NavWrapper>
  );
};

export const Navbar = () => {
  const isMobile = useMediaQuery(`(max-width: 760px)`);

  return (
    <NavWrapper>
      <NavTitle>aAxiliary One</NavTitle>
      {isMobile ? <NavMobile /> : <NavDesktop />}
    </NavWrapper>
  );
};
