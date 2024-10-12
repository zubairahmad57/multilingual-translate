import React from "react";
import MyNavbar from "./components/Navbar";
import Banner from "./components/Banner";
import FeatureSection from "./components/FeatureSection";
import FAQSection from "./components/FAQSection";
import Testimonial from "./components/Testimonial";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <MyNavbar />
      <Banner />
      <FeatureSection />
      <FAQSection />
      <Testimonial />
      <AboutSection />
      <Footer />
      
    </div>
  );
}

export default App;
