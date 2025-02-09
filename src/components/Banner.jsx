import React from "react";
import "../Banner.css"; // Import the correct CSS for the Banner component

const Banner = () => {
  return (
    <div className="banner">
      <img
        src="/image.png" // Replace with your image URL
        alt="Banner"
        className="banner-image"
      />
      <div className="banner-overlay"></div> {/* Dark overlay */}
      <div className="banner-text">
        <h1>
          Welcome to <span>Multilingual</span> Platform
        </h1>
        <p>
          Your one-stop solution for <span>voice translation</span>, 
          <span> text-to-speech</span>, and more.
        </p>
      </div>
    </div>
  );
};

export default Banner;
