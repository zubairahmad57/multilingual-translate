import React, { useState, useEffect } from "react";
import "../FeatureSection.css"; // Import custom CSS for styling

const features = [
  {
    title: "YouTube Translation",
    description: "Translate and subtitle your YouTube videos seamlessly.",
    link: "#youtube-translation",
    image: "./public/image(1).png",
  },
  {
    title: "Voice Changer",
    description: "Modify voices for an enhanced experience.",
    link: "#voice-changer",
    image: "./public/image(3).png",
  },
  {
    title: "Text to Speech",
    description: "Convert written text into natural-sounding speech.",
    link: "#text-to-speech",
    image: "./public/image(5).jpg",
  },
  {
    title: "Human Voice Translation",
    description: "Experience realistic human voice translation.",
    link: "#human-voice-translation",
    image: "./public/image(2).png",
  },
  {
    title: "Create Avatar",
    description: "Craft personalized avatars for your unique needs.",
    link: "#create-avatar",
    image: "./public/image(4).png",
  },
];

const textArray = [
  "Our Features are designed to enhance your experience.",
  "You can explore translations, avatars, and much more!"
];

const FeatureSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [arrayIndex, setArrayIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Typing effect logic
  useEffect(() => {
    if (arrayIndex < textArray.length) {
      if (wordIndex < textArray[arrayIndex].length) {
        const typingInterval = setInterval(() => {
          setDisplayedText(
            (prevText) => prevText + textArray[arrayIndex].charAt(wordIndex)
          );
          setWordIndex(wordIndex + 1);
        }, 100);
        return () => clearInterval(typingInterval);
      } else {
        setTimeout(() => {
          setDisplayedText(""); // Reset the text for the next sentence
          setWordIndex(0);
          setArrayIndex(arrayIndex + 1);
        }, 3000);
      }
    } else {
      setTimeout(() => {
        setDisplayedText("");
        setWordIndex(0);
        setArrayIndex(0);
      }, 3000);
    }
  }, [wordIndex, arrayIndex]);

  // Accordion logic
  useEffect(() => {
    const savedIndex = localStorage.getItem("activeAccordionIndex");
    if (savedIndex) {
      setActiveIndex(Number(savedIndex));
    }
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
    localStorage.setItem("activeAccordionIndex", index);
  };

  return (
    <div className="feature-section">
      {/* Typing Animation */}
      <h1 className="animated-text">
        <span className="point-icon">•</span>
        <span
          className="typewriter-text"
          dangerouslySetInnerHTML={{ __html: styleText(displayedText) }}
        />
      </h1>

      {/* Features Heading */}
      <h2 className="features-heading">Explore Our Unique Features</h2>

      {/* Accordion for features */}
      <div className="accordion">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`accordion-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)} // Trigger on image click
          >
            <img src={feature.image} alt={feature.title} className="feature-image" />
            <div className="content">
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
              <a href={feature.link} className="learn-more-btn">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to style specific words in blue
const styleText = (text) => {
  // Replace specific words with spans for custom coloring
  return text.replace(
    /(Features|experience)/g,
    (match) => `<span class="blue-word">${match}</span>`
  );
};

export default FeatureSection;
