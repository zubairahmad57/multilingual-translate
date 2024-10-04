import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../Footer.css'; // Import the custom CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col md={4} className="text-center">
            <h5>Contact Us</h5>
            <p>123 Tech Street, India</p>
            <p>Email: info@project.com</p>
            <p>Phone: +91 9876543210</p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col md={6} className="text-center">
            <p>&copy; 2024 Your Project Name. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
