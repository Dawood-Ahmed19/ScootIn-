import React from "react";

const ValueCards = (props) => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay={props.delay}
        className="valueCard-Container"
      >
        <div className="values--image">
          <img src={props.image} alt="image" />
        </div>
        <div className="values-title">
          <h4>{props.title}</h4>
        </div>
        <div className="values-details">
          <p>{props.detail}</p>
        </div>
      </div>
    </>
  );
};

export default ValueCards;
