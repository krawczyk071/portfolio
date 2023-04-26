import React from "react";
import Carousel from "nuka-carousel";

const EduBanner = ({ logos }) => {
  const settings = {
    autoplay: true,
    autoplayInterval: 8000,
    dragging: false,
    // slidesToScroll: 3,
    slidesToShow: 4,
    speed: 7000,
    swiping: false,
    withoutControls: true,
    wrapAround: true,
  };
  return (
    <div className="edus main">
      <Carousel {...settings}>
        {logos.map((l) => (
          <EduCard item={l} />
        ))}
      </Carousel>
    </div>
  );
};

export default EduBanner;

const EduCard = ({ item }) => {
  return (
    <div className="educard">
      <div className="educard__logo">
        <img src={item.svg} alt="" className="educard__svg" />
      </div>
      <div className="educard__title">{item.title}</div>
      <div className="educard__text">{item.text}</div>
    </div>
  );
};
