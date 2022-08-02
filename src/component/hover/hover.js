import React from "react";
import "./hover.css";
import { useState, useRef } from "react";

function Hover({ switchTheme, theme }) {
  const [open, setOpen] = useState(false);

  const navIconsRef = useRef();
  const modeRef = useRef();

  // const [theme, setTheme] = useLocalStorage("theme" ? "light" : "dark");
  // const switchTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  // };

  // document.querySelector(".App").dataset.theme = theme;
  // document.querySelector(".APP").setAttribute("data-theme", theme);

  // const checkSize = () => {
  //   if (window.innerWidth > 759) {
  //     containers.forEach((element) => {
  //       if (element.classList.contains("blur")) {
  //         element.classList.remove("blur");
  //       }
  //     });
  //   }
  // };

  // window.removeEventListener("resize", checkSize);

  const blurContainer = () => {
    const containers = document.querySelectorAll(".container");
    containers.forEach((element) => {
      element.classList.toggle("blur");
    });
  };

  const onClickMenu = () => {
    if (window.innerWidth < 759) {
      blurContainer();
      setOpen(!open);
      navIconsRef.current.classList.toggle("openBar");
      modeRef.current.classList.toggle("openBar");
    }
  };
  return (
    <>
      <div id="nav" className="nav">
        <div className="dropDownMenu" onClick={() => onClickMenu()}>
          {open ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-ellipsis"></i>
          )}
        </div>
        <ul ref={navIconsRef} className="navIcons">
          <a href="#home">
            <li
              href="home"
              onClick={() => onClickMenu()}
              className="icon homeBtn"
            >
              <span className="iconDetail">Home</span>
              <span>
                <i className="fa-solid fa-house"></i>
              </span>
            </li>
          </a>
          <a href="#about">
            <li onClick={() => onClickMenu()} className="icon aboutBtn">
              <span className="iconDetail">About</span>
              <span>
                <i className="fa-solid fa-address-card"></i>
              </span>
            </li>
          </a>
          <a href="#education">
            <li onClick={() => onClickMenu()} className="icon educationBtn">
              <span className="iconDetail">Education</span>
              <span>
                <i className="fa-solid fa-graduation-cap"></i>
              </span>
            </li>
          </a>
          <a href="#skills">
            <li onClick={() => onClickMenu()} className="icon skillsBtn">
              <span className="iconDetail">Skills</span>
              <span>
                <i className="fa-solid fa-gears"></i>
              </span>
            </li>
          </a>
          <a href="#projects">
            <li onClick={() => onClickMenu()} className="icon projectsBtn">
              <span className="iconDetail">Projects</span>
              <span>
                <i className="fa-solid fa-bars-progress"></i>
              </span>
            </li>
          </a>
        </ul>
      </div>
      <div
        ref={modeRef}
        onClick={() => onClickMenu()}
        className="mode"
        id="mode"
      >
        <span onClick={() => switchTheme()}>
          <i className="fa-regular fa-lightbulb"></i>
        </span>
        <span className="modeDetail">
          {theme === "light" ? "setMode(Dark)" : "setMode(Light)"}
        </span>
      </div>
    </>
  );
}

export default Hover;
