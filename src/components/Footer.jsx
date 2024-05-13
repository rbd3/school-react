
import React from 'react';
import '../assets/footer.css';

function Footer() {
  return (
    <footer className="wrapper">
      <a href="index.html">
        <img className="logo" src="media/logo.png" alt="logo" />
        <p className="max-font-26 footer-logo">RBD School</p>
      </a>
      <div className="footer-links">
      <p className="max-font-26">
        2023 | RABEDESANA High School
        <span>
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minima recusandae voluptate. Numquam esse cumque consequatur culpa, veniam sunt,
          vero repellat, consequuntur itaque maiores fugit sequi ullam exercitationem repudiandae magni?
        </span>
      </p>
      </div>
    </footer>
  );
}

export default Footer;
