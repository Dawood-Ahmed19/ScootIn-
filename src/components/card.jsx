import React from "react";

const card = (props) => {
  return (
    <>
      <div className="card--container">
        <div className="card--image">
          <img src={props.image} alt="card-image" />
        </div>
        <div className="card--title">
          <h4>{props.title}</h4>
        </div>
        <div className="card--details">
          <p>{props.details}</p>
        </div>
      </div>
    </>
  );
};

export default card;
