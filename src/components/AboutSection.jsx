import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "../AboutSection.css"; // Custom CSS for styling

const AboutSection = () => {
  return (
    <div className="about-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left side - About Us Text */}
          <Col md={6} className="about-text">
            <h2 className="about-title">About Us</h2>
            <p className="about-description">
              Welcome to our platform! Built by <strong>Zubair Ahmad</strong> and <strong>Mohd Faiz</strong>, we aim to create a seamless, multilingual video hub that enhances your video creation experience. Our goal is to empower users with innovative tools like voice changers, translations, text-to-speech, and more, enabling you to create content effortlessly. Explore our features and see how we can help streamline your creative process.
            </p>
          </Col>

          {/* Right side - Founders' Carousel */}
          <Col md={6} className="about-carousel">
            <Carousel fade controls={false} indicators={false} interval={3000}>
              <Carousel.Item>
                <img
                  className="d-block w-100 founder-image"
                  src="../public/founder(1).png" // Replace with actual path
                  alt="Zubair Ahmad"
                />
                <Carousel.Caption>
                  <h5>Zubair Ahmad</h5>
                  <p>Founder & Lead Developer</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 founder-image"
                  src="/path-to-faiz-image.jpg" // Replace with actual path
                  alt="Mohd Faiz"
                />
                <Carousel.Caption>
                  <h5>Mohd Faiz</h5>
                  <p>Co-Founder & Developer</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;
