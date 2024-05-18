
import { Link } from 'react-router-dom';
import '../assets/footer.css';

function Footer() {
  return (
    <footer className="footer-wrapper">
      <Link to="/">
        <img className="logo" src="media/logo.png" alt="logo" />
        <p className="max-font-26 footer-logo">RBD School</p>
      </Link>
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
