import '../assets/style.css';
import React from 'react';

function Footer() {
  return (
    <footer className="wrapper">
      <a href="index.html">
        <img className="logo" src="media/logo.png" alt="logo" />
        <p className="max-font-26">RBD School</p>
      </a>
      <p className="max-font-26">
        2023 | RABEDESANA High School
        <span>
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minima recusandae voluptate. Numquam esse cumque consequatur culpa, veniam sunt,
          vero repellat, consequuntur itaque maiores fugit sequi ullam exercitationem repudiandae magni?
        </span>
      </p>
    </footer>
  );
}

export default Footer;
