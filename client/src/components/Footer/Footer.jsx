import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <p>
          <strong>Opening Hours:</strong> Mon-Sun: 5:00 PM - 10:00 PM
        </p>
        <p>
          <strong>Address:</strong> 123 French Street, Toronto, Ontario
        </p>
        <p>
          <strong>Phone:</strong> +1(234)-567-8901
        </p>
      </div>
      <div className="footer__social">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
