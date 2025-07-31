import React from "react";
import faqs from "./faq.json"; // assuming your JSON is saved as faq.json

const FAQSection = () => {
  return (
    <div className="bg-white text-black p-8">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <ul className="space-y-6">
        {faqs.map((faq, index) => (
          <li key={index}>
            <h3 className="text-xl font-semibold">{faq.question}</h3>
            <p className="mt-2">{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQSection;
