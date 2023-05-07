import React, { useContext } from "react";
import { HashLink } from "react-router-hash-link";
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
            <HashLink smooth to="/">
              {data.nav1}
            </HashLink>
          </li>
          <li className="navbar__item">
            <HashLink smooth to="/#about">
              {data.nav2}
            </HashLink>
          </li>

          <li className="navbar__item">
            <HashLink smooth to="/#projects">
              {data.nav3}
            </HashLink>
          </li>
          <li className="navbar__item">
            <HashLink smooth to="/#contact">
              {data.nav4}
            </HashLink>
          </li>
          <Toggler />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
