import React from "react";

const ValueCards = (props) => {
  return (
    <>
      <div className="valueCard-Container">
        <div className="values--image">
          <img src={props.image} alt="image" />
        </div>
      </div>
    </>
  );
};

export default ValueCards;
