import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ items }) => {
  const [bar, setbar] = useState(true);

  const toggleNav = () => {
    setbar(!bar);
  };

  return (
    <div className="nav--container">
      <div
        onClick={toggleNav}
        className={bar ? "toggle-navbar" : "toggle-navbar active"}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="nav-content">
        <div className="logo">
          <a>Scoot</a>
        </div>
        <div className="nav">
          <ul type="none" className="nav--list">
            {items.map((item, index) => (
              <li key={index}>
                <NavLink to={item.link}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="get--button">
        <button className="btn nav-button">Get Scootin</button>
      </div>
    </div>
  );
};

export default Navbar;
