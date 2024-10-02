import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Navbar.css"; // Correct CSS import for Navbar

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar bg="white" expand="lg" className="p-3 custom-navbar">
        <Navbar.Brand href="/" className="ml-3">Multilingual</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
          className="custom-toggler"
          aria-expanded={isOpen}
        >
          <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className={isOpen ? 'show' : ''}>
          <Nav className="ml-auto nav-links">
            <a href="#youtube-translation" className="nav-link">
              <div className="icon-container"><i className="fab fa-youtube"></i></div>
              YouTube Translation
            </a>
            <a href="#voice-changer" className="nav-link">
              <div className="icon-container"><i className="fas fa-microphone-alt"></i></div>
              Voice Changer
            </a>
            <a href="#text-to-speech" className="nav-link">
              <div className="icon-container"><i className="fas fa-volume-up"></i></div>
              Text to Speech
            </a>
            <a href="#human-voice-translation" className="nav-link">
              <div className="icon-container"><i className="fas fa-headphones-alt"></i></div>
              Human Voice Translation
            </a>
            <a href="#create-avatar" className="nav-link">
              <div className="icon-container"><i className="fas fa-user-circle"></i></div>
              Create Avatar
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNavbar;
