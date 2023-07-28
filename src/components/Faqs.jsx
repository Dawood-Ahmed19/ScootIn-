import React, { useState } from "react";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Faqs = (props) => {
  const [isShown, setisShown] = useState(false);

  const toggleShow = () => {
    setisShown(!isShown);
  };

  const displayAnswer = isShown ? <>{props.answer}</> : "";

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={props.delay}
      className="faqs-container"
    >
      <div className="question01">
        <div className="heading">
          <h4>{props.question}</h4>
          <a onClick={toggleShow}>
            {isShown ? (
              <FontAwesomeIcon icon={faArrowUp} />
            ) : (
              <FontAwesomeIcon icon={faArrowDown} />
            )}
          </a>
        </div>
        <div className="paragraph">
          <p>{displayAnswer}</p>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
