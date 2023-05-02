import React from "react";
import Carousel from "nuka-carousel";
import IconSvg from "./IconSvg";

const settings = {
  autoplay: true,
  autoplayInterval: 8000,
  dragging: false,
  slidesToShow: 4,
  // slidesToScroll: 4,
  speed: 7000,
  swiping: false,
  withoutControls: true,
  wrapAround: true,
  // cellAlign: "center",
};

const LogoBanner = ({ logos }) => {
  return (
    <div className="logos">
      {/* <Carousel {...settings}>{logos.map((l) => l.icon)}</Carousel> */}
      <Carousel {...settings}>
        {logos.map((l) => (
          <IconSvg url={l.isvg} alt={l.name} cls="svgiconLg" key={l.name} />
        ))}
      </Carousel>
    </div>
  );
};

export default LogoBanner;
