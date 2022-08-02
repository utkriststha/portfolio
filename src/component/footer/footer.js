import React from "react";
import "./footer.css";
function Footer() {
  return (
    <>
      <div className="container footer">
        <div className="buttonBg"></div>
        <a href="#home">
          <div className="button">
            <i className="fa fa-chevron-up" aria-hidden="true"></i>
          </div>
        </a>
      </div>
      <div className="copyRight">
        <h6>Buit and Designed by Utkrist Shrestha</h6>
        <h6>All rights reserved</h6>
        <h6> © 2022</h6>
      </div>
    </>
  );
}

export default Footer;
