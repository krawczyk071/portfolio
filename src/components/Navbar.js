import React, { useContext } from "react";
import { NavHashLink } from "react-router-hash-link";
import Toggler from "./Toggler";
import { LangContext } from "./context/lang";
import { textEn, textPl } from "../utils/data";

const Navbar = () => {
  const [lang] = useContext(LangContext);
  const data = lang ? textEn : textPl;

  return (
    <div className="header">
      <nav className="navbar">
        <div className="navbar__logo">
          szymonKrawczyk
          <span>PORTFOLIO</span>
        </div>

        <ul className="navbar__list">
          <li className="navbar__item">
            <NavHashLink smooth to="/">
              {data.nav1}
            </NavHashLink>
          </li>
          <li className="navbar__item">
            <NavHashLink smooth to="/#about">
              {data.nav2}
            </NavHashLink>
          </li>

          <li className="navbar__item">
            <NavHashLink smooth to="/#projects">
              {data.nav3}
            </NavHashLink>
          </li>
          <li className="navbar__item">
            <NavHashLink smooth to="/#contact">
              {data.nav4}
            </NavHashLink>
          </li>
          <Toggler />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
