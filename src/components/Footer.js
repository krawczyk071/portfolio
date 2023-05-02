import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__main main">
        <div className="footer__main__left">
          <h2>Szymon Krawczyk</h2>
          <p>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
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
