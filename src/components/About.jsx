import React from "react";
import PersonImage from "../assets/Images/about-image1.png";
import PersonImageOne from "../assets/Images/about-image2.png";
import "../App.css";

const About = () => {
  return (
    <>
      {/* Header */}

      <section className="abt--header">
        <div className="container">
          <div className="about--title">
            <h1>About</h1>
          </div>
        </div>
      </section>

      {/* Section One */}

      <section className="about-section">
        <div className="container">
          <div className="usage-content">
            <div className="colOne">
              <div className="usage-title">
                <h2>
                  Mobility For the <br /> Digital Era
                </h2>
              </div>
              <div className="usage--details">
                <p>
                  Getting around should be simple (and even fun!) for <br />{" "}
                  everyone. We embrace technology to provide low cost, smart{" "}
                  <br /> access to scooters at your fingertips.
                </p>
              </div>
              <div className="learnBtn">
                <button className="btn">Learn More</button>
              </div>
            </div>
            <div className="colTwo about-col abt-col1">
              <img
                className="about-image1"
                src={PersonImage}
                alt="person-Image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Three */}

      <div className="about-section">
        <div className="container">
          <div className="usage-content">
            <div className="colTwo col1-sec2 abt-col2">
              <img
                className="about-image2"
                src={PersonImageOne}
                alt="person-Image"
              />
            </div>

            <div className="colOne col2-sec2">
              <div className="usage-title">
                <h2>
                  Better Urban <br /> Living
                </h2>
              </div>
              <div className="usage--details sec-two">
                <p>
                  We’re helping connect cities and bring people closer <br />{" "}
                  together. Our scooters are also fully-electric and we offset{" "}
                  <br /> the minimal carbon footprint for each ride.
                </p>
              </div>
              <div className="learnBtn">
                <button className="btn">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Four */}
    </>
  );
};

export default About;
