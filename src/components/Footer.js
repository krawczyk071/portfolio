import React, { useContext } from "react";
import { LangContext } from "./context/lang";
import { textEn, textPl } from "../utils/data";

const Footer = () => {
  const [lang] = useContext(LangContext);
  const data = lang ? textEn : textPl;

  return (
    <div className="footer">
      <div className="footer__main">
        <div className="footer__main__left">
          <h2>{data.foot}</h2>
          <p>{data.footText}</p>
        </div>
        <div className="footer__main__socials">
          <a
            href="https://github.com/krawczyk071"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/szymon-krawczyk-6890a6184/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="footer__last">
        Designed & built by Szymon Krawczyk © Copyright 2023.
      </div>
    </div>
  );
};

export default Footer;
