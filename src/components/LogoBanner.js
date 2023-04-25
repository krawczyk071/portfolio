import React from "react";

const LogoBanner = ({ logos }) => {
  return (
    <div className="logos main">
      <div className="logos__cnt">
        {logos.map((l) => l.icon)}
        {/* <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-reddit"></i>
        <i className="fa-brands fa-html5"></i> */}
      </div>
    </div>
  );
};

export default LogoBanner;
