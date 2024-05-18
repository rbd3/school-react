import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../assets/menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Menu() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Navbar.Brand className="menu-logo" as={Link} to="/">
        <img className="logo" src="/media/logo.png" alt="logo" />
        <p className="max-font-26">
          <span>RBD School</span>
        </p>
      </Navbar.Brand>
      <Navbar.Toggle className="menu-icons" aria-controls="basic-navbar-nav" onClick={handleNavToggle}>
        {isNavOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className={isNavOpen ? "show" : ""}>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" className="max-font-26 nav-item">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="max-font-26 nav-item">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/news" className="max-font-26 nav-item">
            News
          </Nav.Link>
          <Nav.Link as={Link} to="/connexion" className="max-font-26 nav-item">
            Connexion
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
