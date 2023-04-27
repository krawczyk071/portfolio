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
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>
      </div>
      <div className="footer__last">
        Designed & built by Szymon Krawczyk © Copyright 2023.
      </div>
    </div>
  );
};

export default Footer;
