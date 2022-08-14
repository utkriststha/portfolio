import React from "react";
import "./footer.css";
import { Link } from "react-scroll";
function Footer() {
  return (
    <>
      <div className="container footer">
        <div className="buttonBg"></div>
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
          <div className="button">
            <i className="fa fa-chevron-up" aria-hidden="true"></i>
          </div>
        </Link>
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
