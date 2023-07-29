import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ items }) => {
  return (
    <div className="nav--container">
      <div className="nav-content">
        <div className="toggle-navbar">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
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
        <button className="btn">Get Scootin</button>
      </div>
    </div>
  );
};

export default Navbar;
