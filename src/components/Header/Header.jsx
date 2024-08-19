import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuButton = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src="src/assets/icons/brand_logo.png" alt="brand logo" />
        </Link>
      </div>
      {/* <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}> */}
      <nav className="header__nav">

        {/* Home */}
        <Link to="/">Home</Link>


        {/* Menu */}
        <Link to="/menu">Menu</Link>


        {/* Contact Us */}
        <Link to="/contact">Contact Us</Link>


        {/* Reserve */}
        <Link to="/reserve">Reserve</Link>


      </nav>
      <div
        className={`header__mobile-menu-list ${isMenuOpen ? 'header__mobile-menu-list--clicked' : ''}`}
      >
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/menu" onClick={closeMenu}>Menu</Link>
        <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
        <Link to="/reserve" onClick={closeMenu}>Reserve</Link>
      </div>

      <div
        className={`header__mobile-menu-container ${isMenuOpen ? 'header__mobile-menu-container--clicked' : ''}`}
        onClick={menuButton}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      {/* <div className="header__user">
        <img
          src="path_to_user_avatar.jpg"
          alt="User Avatar"
          className="header__userAvatar"
        />
      </div> */}
      {/* <div className="header__hamburger">
        <span className="header__hamburgerLine"></span>
        <span className="header__hamburgerLine"></span>
        <span className="header__hamburgerLine"></span>
        <span className="header__hamburgerLine"></span>
      </div> */}
    </header>
  );
};

export default Header;
