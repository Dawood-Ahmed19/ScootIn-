import React from "react";

const CareerOptions = (props) => {
  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-delay={props.delay}
        className="options-container"
      >
        <div className="optionCol01">
          <div className="optiontitle">
            <h4>{props.title}</h4>
          </div>
          <div className="careerlocation">
            <p>{props.location}</p>
          </div>
        </div>
        <div className="optionCol02">
          <div className="applyButton">
            <button className="btn">Apply</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerOptions;
