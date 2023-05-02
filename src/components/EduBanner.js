import React from "react";

const EduBanner = ({ logos }) => {
  return (
    <div className="edus">
      {logos.map((l) => (
        <EduCard item={l} key={l.name} />
      ))}
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
