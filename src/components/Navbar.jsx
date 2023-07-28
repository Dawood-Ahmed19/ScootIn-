import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav--container">
      <div className="nav-content">
        <div className="logo">
          <a>Scoot</a>
        </div>
        <div className="nav">
          <ul type="none" className="nav--list">
            <li>
              <NavLink className="nav--item" to="/Home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav--item" to="/About">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="nav--item" to="/Locations">
                Location
              </NavLink>
            </li>
            <li>
              <NavLink className="nav--item" to="/Careers">
                Careers
              </NavLink>
            </li>
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
