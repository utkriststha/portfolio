import React from "react";
import "./education.css";
function Education() {
  return (
    <div id="education" className="container education">
      <h2>.education()</h2>
      <div className="block">
        <div>
          <h3> Bachelors of Information Technology</h3>
          <h3>
            <a href="https://www.csu.edu.au/">Charles Sturt University</a>{" "}
          </h3>
          <h5>2019 - 2022</h5>
          <p>- Majored in Software Development and Design</p>
        </div>
        <div>
          <h3> Cambridge International A-levels</h3>
          <h3>
            <a href="https://kuhs.edu.np/">Kathmandu University High School</a>
          </h3>
          <h5>2016 - 2018</h5>
          <p>- Specialized in Computer Science</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
