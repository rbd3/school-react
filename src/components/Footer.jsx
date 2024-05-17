import React from 'react';
import '../assets/footer.css';

function Footer() {
  return (
    <footer className="footer-wrapper">
      <a href="index.html">
        <img className="logo" src="media/logo.png" alt="logo" />
        <p className="max-font-26 footer-logo">RBD School</p>
      </a>
      <div className="footer-links">
        <p className="max-font-26">
        | RABEDESANA High School
          <span>
            <br /><br />
            Copyright © 2024
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
