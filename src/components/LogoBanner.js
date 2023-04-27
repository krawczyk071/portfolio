import React from "react";
import Carousel from "nuka-carousel";

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
};

const LogoBanner = ({ logos }) => {
  return (
    <div className="logos">
      <Carousel {...settings}>{logos.map((l) => l.icon)}</Carousel>
    </div>
  );
};

export default LogoBanner;
