import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../assets/menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Menu() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Navbar.Brand className="menu-logo" href="index.html">
        <img className="logo" src="media/logo.png" alt="logo" />
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
          <Nav.Link className="max-font-26 nav-item" href="#">
            Home
          </Nav.Link>
          <Nav.Link className="max-font-26 nav-item" href="#">
            About
          </Nav.Link>
          <Nav.Link className="max-font-26 nav-item" href="#">
            News
          </Nav.Link>
          <Nav.Link className="max-font-26 nav-item" href="#">
            Connexion
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
