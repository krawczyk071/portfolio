import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__main main">
        <div className="footer__main__left">
          <h2>Jan Nowak</h2>
          <p>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className="footer__main__socials">
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-reddit"></i>
          <i className="fa-brands fa-html5"></i>
          <i className="fa-solid fa-toggle-off"></i>
        </div>
      </div>
      <div className="footer__last">
        © Copyright 2023. Made by Jan Nowak | Designed & built by Jan Chegham
      </div>
    </div>
  );
};

export default Footer;
