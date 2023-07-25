import React from "react";
import Data from "./CardsData";
import Card from "./card";
import "../App.css";

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
    </>
  );
};

export default Home;
