import React from "react";
import "./hover.css";
import { useState, useRef } from "react";
import { Link } from "react-scroll";

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
                    {/* <a href="#home"> */}
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
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
                    </Link>
                    {/* </a> */}
                    {/* <a href="#about"> */}
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >
                        <li
                            onClick={() => onClickMenu()}
                            className="icon aboutBtn"
                        >
                            <span className="iconDetail">About</span>
                            <span>
                                <i className="fa-solid fa-address-card"></i>
                            </span>
                        </li>
                    </Link>
                    {/* </a> */}
                    <Link
                        to="education"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >
                        <li
                            onClick={() => onClickMenu()}
                            className="icon educationBtn"
                        >
                            <span className="iconDetail">Education</span>
                            <span>
                                <i className="fa-solid fa-graduation-cap"></i>
                            </span>
                        </li>
                    </Link>
                    <Link
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >
                        <li
                            onClick={() => onClickMenu()}
                            className="icon skillsBtn"
                        >
                            <span className="iconDetail">Skills</span>
                            <span>
                                <i className="fa-solid fa-gears"></i>
                            </span>
                        </li>
                    </Link>
                    <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >
                        <li
                            onClick={() => onClickMenu()}
                            className="icon projectsBtn"
                        >
                            <span className="iconDetail">Projects</span>
                            <span>
                                <i className="fa-solid fa-bars-progress"></i>
                            </span>
                        </li>
                    </Link>
                </ul>
            </div>
            <div
                ref={modeRef}
                onClick={() => onClickMenu()}
                className="mode"
                id="mode"
            >
                <button
                    class="theme"
                    aria-label="Toggle color mode"
                    title="Toggle color mode"
                    onClick={() => switchTheme()}
                >
                    <div class="sun visible"></div>
                    <div class="moon">
                        <div class="star"></div>
                        <div class="star small"></div>
                    </div>
                </button>
                {/* <span onClick={() => switchTheme()}>
          <i className="fa-regular fa-lightbulb"></i>
        </span> */}
                <span className="modeDetail">
          {theme === "light" ? "Go Night" : "Go Day"}
        </span>
            </div>
        </>
    );
}

export default Hover;
