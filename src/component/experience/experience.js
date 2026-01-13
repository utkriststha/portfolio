import React from "react";
import { useState } from "react";
import "./experience.css";
import experienceData from "./experience.json";

function Experience() {
  const defaultIndex = experienceData.findIndex(role => role.current);
  const [activeIndex, setActiveIndex] = useState(
    defaultIndex !== -1 ? defaultIndex : 0
  );
  const [fade, setFade] = useState(true);

  const activeRole = experienceData[activeIndex];

  const handleChange = (index) => {
    if (index === activeIndex) return;
    setFade(false);
    setTimeout(() => {
      setActiveIndex(index);
      setFade(true);
    }, 200);
  };

  return (
    <div id="experience" className="container experience">
      <h2>/ experience</h2>
      <div className="block">
        <section className="experience-section">
          {/* Left Nav */}
          <div className="experience-nav">
            {experienceData.map((role, index) => (
              <button
                key={role.company}
                className={`nav-item ${index === activeIndex ? "active" : ""}`}
                onClick={() => handleChange(index)}
              >
                {role.company}
                {role.current && <span className="current-dot" />}
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div className={`experience-content ${fade ? "fade-in" : "fade-out"}`}>
            <h3 className="job-title">
              {activeRole.title}
              <a href={activeRole.companyWebsite} className="company" target="_blank" rel="noreferrer">@ {activeRole.company}</a>
            </h3>

            <h5 className="job-duration">
              {activeRole.startDate} – {activeRole.endDate}
            </h5>

            <ul className="job-details">
              {activeRole.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Experience;
