import React from "react";
import "./skills.css";

function Skills() {
  return (
    <div id="skills" className="container skills">
      <h2>.skills()</h2>
      <div className="block">
        <div>
          <h3>Programming Language</h3>
          <p>Python • Javascript • Typescript • Java • C++ • HTML • CSS • XML</p>
          {/* <p>- Python </p>
          <p>- Javascript </p>
          <p>- Typescript </p>
          <p>- Java </p>
          <p>- HTML </p>
          <p>- CSS </p> */}
        </div>
        <div>
          <h3>Frameworks</h3>
          <p>React • Vue • React Native • NodeJS • ExpressJS • React Native • Bootstrap • jQuery • Pandas • scikit-learn • NumPy • Selenium</p>
        </div>
        <div>
          <h3>Database </h3>
          <p>MySQL • MSSQL • SQLite • MongoDB</p>
        </div>
        <div>
          <h3>Tool and Platforms </h3>
          <p>Windows • Mac • Linux • Apache • Tomcat • GIT • GitHub • AWS • Docker • JUnit Testing and Debugging • Jupyter notebook • Jira • Postman</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
