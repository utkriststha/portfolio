import React from "react";
import "./intro.css";

function Intro() {
  return (
    <div className="container intro" id="home">
      <div className="content">
        <h1>Hello,</h1>
        <h1>
          I'm <span>Utkrist Shrestha</span>
        </h1>
        <h3>
          On my way to becoming a full-stack software engineer
          <span className="cursor"> _ </span>
        </h3>
      </div>

      <div className="links">
        <ul className="icon-list">
          <li className="icon">
            <a href="mailto:utkrist.shrestha12@gmail.com" className="icon-link">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </li>
          <li className="icon">
            <a
              href="https://www.linkedin.com/in/utkriststha/"
              className="icon-link"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://github.com/utkriststha/" className="icon-link">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li className="icon">
            <a
              href="https://drive.google.com/file/d/1YmCTrcHR-aAlTE0Casnxz7RcfxhFEkZY/view?usp=sharing"
              className="icon-link"
            >
              <i className="fa-regular fa-file-pdf"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Intro;
