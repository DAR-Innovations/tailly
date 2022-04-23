import React, { useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenuOpen from "../../assets/burgerMenu.svg";
import BurgerMenuClose from "../../assets/burgerMenuClose.svg";
import UserIcon from "../../assets/userProfileIcon.png";
import useIsAuth from "../Hooks/useIsAuth";
import ProfileModal from "../ProfileModal/ProfileModal";
import "./navbar.css";

const Navbar = () => {
  const isAuth = useIsAuth();
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);

  function handleBurger() {
    return burgerMenu ? "navbar-burger" : "navbar-navigation";
  }

  function handleUser() {
    return !isAuth ? (
      <div className="navbar-account">
        <Link to="/login" className="navbar-login">
          Log in
        </Link>
        <Link to="/registration" className="navbar-signup">
          Sign up
        </Link>
      </div>
    ) : (
      <div className="navbar-profile">
        <button className="navbar-profile-icon" onClick={handleProfileBtn}>
          <img src={UserIcon} alt="user" />
        </button>
      </div>
    );
  }

  function handleProfileBtn() {
    if (burgerMenu) setBurgerMenu(!burgerMenu);
    setIsModalActive(!isModalActive);
  }

  function handleBurgerBtn() {
    if (isModalActive) setIsModalActive(!isModalActive);
    setBurgerMenu(!burgerMenu);
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

        {handleUser()}

        <ProfileModal isActive={isModalActive} setIsActive={setIsModalActive} />

        <div className="navbar-burger-open" onClick={handleBurgerBtn}>
          <img src={burgerMenu ? BurgerMenuClose : BurgerMenuOpen} alt="menu" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
