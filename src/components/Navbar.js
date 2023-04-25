import React from "react";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="navbar__logo">
          <div className="navbar__logo-bg">
            <span>myName</span>
          </div>
        </div>

        <ul className="navbar__list">
          <li className="navbar__item">
            <NavHashLink smooth to="/">
              Home
            </NavHashLink>
          </li>
          <li className="navbar__item">
            <NavHashLink smooth to="/#about">
              About
            </NavHashLink>
          </li>

          <li className="navbar__item">
            <NavHashLink smooth to="/#projects">
              Projects
            </NavHashLink>
          </li>
          <li className="navbar__item">
            <NavHashLink smooth to="/#contact">
              Contact
            </NavHashLink>
          </li>
        </ul>
        <div className="navbar__lang">
          <i className="fa-solid fa-earth-americas"></i> PL
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
