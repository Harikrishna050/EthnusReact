import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Harikrishna Reddy</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#qualification" className="footer__link">
              Qualification
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://github.com/Harikrishna050"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-github footer__social"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/hari-krishna-reddy-p-913280252"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin footer__social "></i>
          </a>
        </div>
        <span className="footer__copy">Tea?</span>
      </div>
    </footer>
  );
};

export default Footer;
