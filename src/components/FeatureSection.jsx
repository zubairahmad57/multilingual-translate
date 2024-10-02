import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "../FeatureSection.css"; // Import custom CSS for styling

const features = [
  {
    title: "YouTube Translation",
    description: "Translate and subtitle your YouTube videos seamlessly.",
    link: "#youtube-translation",
    image: "../public/image(1).png", // Replace with your image URL
  },
  {
    title: "Voice Changer",
    description: "Modify voices  for an enhanced experience.",
    link: "#voice-changer",
    image: "../public/image(3).png", // Replace with your image URL
  },
  {
    title: "Text to Speech",
    description: "Convert written text into natural-sounding speech.",
    link: "#text-to-speech",
    image: "path/to/text-to-speech-image.jpg", // Replace with your image URL
  },
  {
    title: "Human Voice Translation",
    description: "Experience realistic human voice translation.",
    link: "#human-voice-translation",
    image: "../public/image(2).png", // Replace with your image URL
  },
  {
    title: "Create Avatar",
    description: "Craft personalized avatars for your unique needs.",
    link: "#create-avatar",
    image: "path/to/create-avatar-image.jpg", // Replace with your image URL
  },
];

const FeatureSection = () => {
  return (
    <div className="feature-section py-5">
      <h2 className="text-center mb-4">Our Features</h2>
      <Row className="justify-content-center">
        {features.map((feature, index) => (
          <Col md={4} sm={6} className="mb-4" key={index}>
            <Card className="feature-card">
              <Card.Img variant="top" src={feature.image} alt={feature.title} className="feature-image" />
              <Card.Body>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.description}</Card.Text>
                <Button variant="primary" href={feature.link}>
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeatureSection;
