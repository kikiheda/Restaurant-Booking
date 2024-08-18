import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logoImage from "../../assets/icons/brand_logo.png";
import avatarImage from "../../assets/icons/avatar.jpg";
const Header = () => {
  
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img 
              src={logoImage}
              className="heaser__logo-image" 
              alt="brand logo" />
        </Link>
      </div>
      {/* <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}> */}
      <nav className="header__nav">
        <ul className="header__navList">
          <li className="header__navItem">
            {/* Home */}
            <Link to="/">Home</Link>
          </li>
          <li className="header__navItem">
            {/* Menu */}
            <Link to="/menu">Menu</Link>
          </li>
          <li className="header__navItem">
            {/* Contact Us */}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="header__navItem">
            {/* Reserve */}
            <Link to="/reserve">Reserve</Link>
          </li>
        </ul>
      </nav>
      <div className="header__user">
        <img
          src={avatarImage}
          alt="User Avatar"
          className="header__userAvatar"
        />
      </div>
      {/* show this on mobile only */}
      <div className="header__hamburger">
        <span className="header__hamburgerLine"></span>
        <span className="header__hamburgerLine"></span>
        <span className="header__hamburgerLine"></span>
        <span className="header__hamburgerLine"></span>
      </div>
    </header>
  );
};

export default Header;
