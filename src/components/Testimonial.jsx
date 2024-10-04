import React from 'react';
import '../Testimonial.css'; // Add appropriate styles here

const testimonials = [
  {
    image: '../public/image(t1).png', // Replace with actual image paths
    name: 'Ankush C.',
    role: 'Capterra',
    feedback: '“Possibly the best tool for youtube video translation”',
    
  },
  {
    image: '../public/image(t2).png',
    name: 'Gayane Y.',
    role: 'Capterra',
    feedback: '“The best for social media”',
   
  },
  {
    image: '../public/image(t3).png', // Replace with actual image paths
    name: 'Ankush C.',
    role: 'Capterra',
    feedback: '“Possibly the best tool for text to speech”',
   
  }
  
];

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-heading">
        <h2>Leverage the full power of Translation</h2>
        <p>Advanced tools designed to save time and enhance your multilingual video experience.</p>
      </div>

      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-content">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <h4 className="testimonial-role">{testimonial.role}</h4>
              <p className="testimonial-feedback">{testimonial.feedback}</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
