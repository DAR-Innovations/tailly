import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">Tailly</Link>

        <div className="navbar-navigation">
          <Link to="/" className="about">About</Link>
          <Link to="/map" className="about">Map</Link>
          <Link to="/facilities" className="about">Facilities</Link>
          <Link to="/advice" className="about">Advice</Link>
        </div>

        <div className="navbar-account">
          <Link to="/login" className="navbar-login">Log in</Link>
          <Link to="/registration" className="navbar-signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
