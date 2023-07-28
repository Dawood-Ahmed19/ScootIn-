import React from "react";
import Image from "../assets/Images/career-pic.png";
import ValueData from "./ValuesCardsData";
import ValueCards from "./ValueCards";
import CareerData from "./CareerData";
import CareerOptions from "./CareerOptions";

const Careers = () => {
  const valueCards = ValueData.map((item) => {
    return <ValueCards key={item.id} {...item} />;
  });

  const careerOption = CareerData.map((item) => {
    return <CareerOptions key={item.id} {...item} />;
  });

  return (
    <>
      {/* Header */}

      <section className="abt--header career-header">
        <div className="container">
          <div className="about--title">
            <h1>Careers</h1>
          </div>
        </div>
      </section>

      {/* section one */}

      <section className="sayHello">
        <div className="container">
          <div className="say-content">
            <div className="sayCol01">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="say-title"
              >
                <h1>
                  Care to join our <br /> mission
                </h1>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="say-detail"
              >
                <p>
                  We’re always looking for ambitious individuals to help us on{" "}
                  <br />
                  our journey. If you’re passionate about our mission to <br />{" "}
                  provide clean, accessible transport to improve urban living{" "}
                  <br /> we want to hear from you!
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="sayHelloButton"
              >
                <button className="btn">Say hello</button>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="400" className="sayCol02">
              <img src={Image} alt="image" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Two */}

      <section className="values">
        <div className="values-title">
          <h2>Our Values</h2>
        </div>
        <div className="container">
          <div className="values-content">{valueCards}</div>
        </div>
      </section>

      {/* Section Three */}

      <section className="careeroptions">
        <div className="container">
          <div className="career-content">{careerOption}</div>
        </div>
      </section>
    </>
  );
};

export default Careers;
