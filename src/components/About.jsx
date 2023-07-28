import React from "react";
import PersonImage from "../assets/Images/about-image1.png";
import PersonImageOne from "../assets/Images/about-image2.png";
import "../App.css";
import ValueData from "./ValuesCardsData";
import ValueCards from "./ValueCards";
import Faqs from "./Faqs";
import FaqsData from "./FaqsData";

const About = () => {
  const valueCards = ValueData.map((item) => {
    return <ValueCards key={item.id} {...item} />;
  });

  const faqsQues = FaqsData.map((item) => {
    return <Faqs key={item.id} {...item} />;
  });

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
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="usage-title"
              >
                <h2>
                  Mobility For the <br /> Digital Era
                </h2>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="usage--details"
              >
                <p>
                  Getting around should be simple (and even fun!) for <br />{" "}
                  everyone. We embrace technology to provide low cost, smart{" "}
                  <br /> access to scooters at your fingertips.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="400" className="learnBtn">
                <button className="btn">Learn More</button>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="500"
              className="colTwo about-col abt-col1"
            >
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
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="colTwo col1-sec2 abt-col2"
            >
              <img
                className="about-image2"
                src={PersonImageOne}
                alt="person-Image"
              />
            </div>

            <div className="colOne col2-sec2">
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="usage-title"
              >
                <h2>
                  Better Urban <br /> Living
                </h2>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="usage--details sec-two"
              >
                <p>
                  We’re helping connect cities and bring people closer <br />{" "}
                  together. Our scooters are also fully-electric and we offset{" "}
                  <br /> the minimal carbon footprint for each ride.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="500" className="learnBtn">
                <button className="btn">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Four */}

      <section className="values">
        <div className="values-title">
          <h2>Our Values</h2>
        </div>
        <div className="container">
          <div className="values-content">{valueCards}</div>
        </div>
      </section>

      {/* Section Five */}

      <section className="faqs">
        <div className="values-title">
          <h2>FAQs</h2>
        </div>
        <div className="container">
          <div className="faqs-content">
            <div data-aos="fade-right" data-aos-delay="100" className="fqCol1">
              <h3>How it works</h3>
            </div>
            <div className="fqCol2">{faqsQues}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
