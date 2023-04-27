import React from "react";

const IconSvg = ({ url, cls = "svgiconLg", alt = "icon" }) => {
  return (
    <div className="svgwrapper">
      <div className={cls}>
        <img src={url} alt={alt} />
      </div>
    </div>
  );
};

export default IconSvg;
