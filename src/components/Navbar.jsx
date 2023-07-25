import React from "react";
import { Link } from "react-router-dom";
import "../index";
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
              <Link className="nav--item active" to="/Home">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav--item" to="/About">
                About
              </Link>
            </li>
            <li>
              <Link className="nav--item" to="/Locations">
                Location
              </Link>
            </li>
            <li>
              <Link className="nav--item" to="/Careers">
                Careers
              </Link>
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
