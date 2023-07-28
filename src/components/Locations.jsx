import React from "react";
import MapImage from "../assets/Images/map.png";

const Locations = () => {
  return (
    <>
      {/* Section one */}

      <section className="map">
        <div className="container">
          <div className="map-content">
            <div data-aos="zoom-in" data-aos-delay="100" className="mpCol01">
              <img src={MapImage} alt="mapimg" />
            </div>
            <div className="mpCol02">
              <div data-aos="fade-up" data-aos-delay="200" className="mp-title">
                <h1>
                  Your City Not <br /> Listed?
                </h1>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="mp-details"
              >
                <p>
                  If you’d like to see Scoot in your hometown, be sure to let us
                  know. We track <br /> requests and plan launches based on
                  demand. Feel free to message us by <br /> clicking the link or
                  messaging us on social.
                </p>
              </div>
              <div className="mp-button">
                <button className="btn">Message Me</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Locations;
