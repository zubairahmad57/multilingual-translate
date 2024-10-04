import React from "react";
import "../FAQSection.css"; // Link to the FAQ-specific styling

const FAQSection = () => {
  const faqs = [
    {
      question: "How can I use the YouTube translation feature?",
      answer: "You can translate any video by uploading it and selecting the target language. Automatic subtitles will be generated.",
    },
    {
      question: "How does the voice changer work?",
      answer: "Our voice changer allows you to select different voice tones and effects, suitable for dubbing or narration.",
    },
    {
      question: "What is the text-to-speech feature?",
      answer: "It converts your typed text into natural-sounding speech in multiple languages.",
    },
    {
      question: "Can I translate live human voices?",
      answer: "Yes! You can use our real-time voice translation tool for conversations or presentations.",
    },
  ];

  return (
    <div className="faq-section">
      <h1 className="faq-title">How We Can Use It</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <h2 className="faq-question">{faq.question}</h2>
          <p className="faq-answer">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
