import React from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <section className="signupSection">
        <div className="container">
          <div
            data-aos="fade-down"
            data-aos-delay="400"
            className="signupContent"
          >
            <h1>
              Sign up and <br /> Scoot off today
            </h1>
          </div>
        </div>
      </section>
      <div className="nav--container">
        <div className="nav-content">
          <div className="logo">
            <a className="footer--logo">Scoot</a>
          </div>
        </div>
        <div className="social--icons">
          <ul type="none">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
