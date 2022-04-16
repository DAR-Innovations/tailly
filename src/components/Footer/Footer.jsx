import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <Link to="/" className="footer-logo">
          Tailly
        </Link>
        <div className="footer-info">
          <div className="footer-services">
            <div className="footer-title">Services</div>
            <div className="footer-list">
              <Link to="/map">Lost pet map</Link>
              <Link to="/advice">Advice tab</Link>
              <Link to="/facilities">Pet facillities location</Link>
            </div>
          </div>
          <div className="footer-contacts">
            <div className="footer-title">Contacts</div>
            <div className="footer-list">
              <a href="https://www.instagram.com">Instagram</a>
              <a href="https://www.facebook.com">Facebook</a>
              <a href="https://www.google.com/intl/ru/gmail/about/">
                tailly.helper@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
