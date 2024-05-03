import './assets/styles.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <header>
      <div className="wrapper flex">
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faTwitter} />
        <a href="#">Malagasy</a>
        <a href="#">My Page</a>
        <a href="#">Logout</a>
      </div>
    </header>
  );
}

export default Header;
