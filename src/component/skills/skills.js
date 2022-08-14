import React from "react";
import "./skills.css";

function Skills() {
  return (
    <div id="skills" className="container skills">
      <h2>.skills()</h2>
      <div className="block">
        <div>
          <h3>Web Development</h3>
          <p>- React / Redux</p>
          <p>- HTML</p>
          <p>- CSS</p>
          <p>- PHP</p>
          <p>- Bootstrap</p>
        </div>
        <div>
          <h3>General Programming</h3>
          <p>- Java</p>
          <p>- Python</p>
          <p>- VB</p>
          <p>- MySQL</p>
        </div>
        <div>
          <h3>Other </h3>
          <p>- Programming Documentation</p>
          <p>- JUnit Testing and Debugging</p>
          <p>- Git</p>
          <p>- Andriod XML</p>
          <p>- jQuery </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
