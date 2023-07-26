import React from "react";
import Data from "./CardsData";
import Card from "./card";
import "../App.css";
import PersonImage from "../assets/Images/pic1.png";
import PersonImageOne from "../assets/Images/pic2.png";

const Home = () => {
  const cards = Data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <>
      <section className="home--section">
        <div className="container">
          <div className="hero--content">
            <div className="col1_row1">
              <div className="title">
                <h1>
                  Scooter Sharing <br />
                  made simple
                </h1>
              </div>
              <div className="details">
                <p>
                  Scoot takes the hassle out of urban mobility. Our bikes are
                  placed in convenient locations in each of our cities. Use our
                  app to locate the nearest bike, unlock it with a tap, and
                  you’re away!
                </p>
                <div className="getinBtn">
                  <button className="btn">Get Scootin</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section Two */}

      <section className="cards--section">
        <div className="container card_container">
          <div className="cards">{cards}</div>
        </div>
      </section>

      {/* Section Three */}

      <section className="usageSection">
        <div className="container usage-container">
          <div className="usage-content">
            <div className="colOne">
              <div className="usage-title">
                <h2>
                  Easy to use <br /> riding telemetry
                </h2>
              </div>
              <div className="usage--details">
                <p>
                  The Scoot app is available with riding telemetry. This means{" "}
                  <br />
                  it can show you your average speed, how long you've been{" "}
                  <br /> using the scooter, your traveling distance, and many
                  more <br /> things all in an easy to use app.
                </p>
              </div>
              <div className="learnBtn">
                <button className="btn">Learn More</button>
              </div>
            </div>
            <div className="colTwo">
              <img src={PersonImage} alt="person-Image" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Four */}

      <section className="usageSection">
        <div className="container usage-container">
          <div className="usage-content">
            <div className="colTwo col1-sec2">
              <img src={PersonImageOne} alt="person-Image" />
            </div>

            <div className="colOne col2-sec2">
              <div className="usage-title">
                <h2>
                  Coming to a city <br /> near you
                </h2>
              </div>
              <div className="usage--details sec-two">
                <p>
                  Scoot is available in 4 major cities so far. We’re expanding{" "}
                  <br />
                  rapidly, so be sure to let us know if you want to see us in{" "}
                  <br />
                  your hometown. We’re aiming to let our scooters loose on 23{" "}
                  <br />
                  cities over the coming year.
                </p>
              </div>
              <div className="learnBtn">
                <button className="btn">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Five */}

      <section className="usageSection">
        <div className="container usage-container">
          <div className="usage-content">
            <div className="colOne">
              <div className="usage-title">
                <h2>
                  Zero hassle <br /> payments
                </h2>
              </div>
              <div className="usage--details">
                <p>
                  Our payment is as easy as one two three. We accept most <br />{" "}
                  credit cards and debit cards. You can also link your PayPal{" "}
                  <br /> account inside the app. Need to pay later? No worries!
                  You <br /> can defer payment for up to a month.
                </p>
              </div>
              <div className="learnBtn">
                <button className="btn">Learn More</button>
              </div>
            </div>
            <div className="colTwo">
              <img src={PersonImage} alt="person-Image" />
            </div>
          </div>
        </div>
      </section>

      {/* SignUp */}

      <section className="signupSection">
        <div className="container">
          <div className="signupContent">
            <h1>
              Sign up and <br /> Scoot off today
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
