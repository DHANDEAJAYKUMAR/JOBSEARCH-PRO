import React from "react";
import companies from "../data/companies.json";

const CompanyScroller = () => {
  const allCompanies = [...companies, ...companies]; // Duplicate for seamless loop

  return (
    <div className="scrolling-container">
      <div className="scrolling-text">
        {allCompanies.map((company, index) => (
          <img
            key={`${company.id}-${index}`}
            src={company.path}
            alt={company.name}
            className="h-12 mx-6 grayscale hover:grayscale-0 transition duration-300 inline-block"
          />
        ))}
      </div>

      <style>{`
        .scrolling-container {
          overflow: hidden;
          width: 100%;
          background-color: #f9fafb; /* Tailwind's gray-50 */
          padding: 1.5rem 0;
        }

        .scrolling-text {
          display: inline-block;
          white-space: nowrap;
          animation: scroll-left 20s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default CompanyScroller;
