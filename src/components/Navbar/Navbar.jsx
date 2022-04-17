import React, { useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenuOpen from "../../assets/burgerMenu.svg";
import BurgerMenuClose from "../../assets/burgerMenuClose.svg";
import "./navbar.css";

const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  function handleBurger() {
    return burgerMenu ? "navbar-burger" : "navbar-navigation";
  }

  return (
    <div className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">
          Tailly
        </Link>

        <div className={handleBurger()}>
          <Link to="/" className="about">
            About
          </Link>
          <Link to="/map" className="about">
            Map
          </Link>
          <Link to="/facilities" className="about">
            Facilities
          </Link>
          <Link to="/advice" className="about">
            Advice
          </Link>
        </div>

        <div className="navbar-account">
          <Link to="/login" className="navbar-login">
            Log in
          </Link>
          <Link to="/registration" className="navbar-signup">
            Sign up
          </Link>
        </div>

        <div
          className="navbar-burger-open"
          onClick={() => setBurgerMenu(!burgerMenu)}
        >
          <img src={burgerMenu ? BurgerMenuClose : BurgerMenuOpen} alt="menu" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
