import React, { useEffect } from "react";
import "./hover.css";
import { useState, useRef } from "react";
import { Link } from "react-scroll";

function Hover({ switchTheme, theme }) {
    const [open, setOpen] = useState(false);

    const navIconsRef = useRef();
    const modeRef = useRef();

    const blurContainer = () => {
        const containers = document.querySelectorAll(".container");
        containers.forEach((element) => {
            element.classList.toggle("blur");
        });
    };

    const onClickMenu = (target) => {
        if (window.innerWidth < 759) {
            blurContainer();
            setOpen(!open);
            navIconsRef.current.classList.toggle("openBar");
            modeRef.current.classList.toggle("openBar");
        }

        const need_nudge = localStorage.getItem("need_nudge");
        need_nudge && oncloseNudge(target);
    };

    const oncloseNudge = (target) => {
        console.log("Close clicked", target);
        const nudge = document.querySelectorAll(".nudge");
        const nudge_nav = document.querySelector(".nudgenav");
        const nudge_theme = document.querySelector(".nudgetheme");
        nudge.forEach((nudge) => {
            nudge.style.display = "none";
        });
        if (target === "menu") {
            nudge_theme.style.display = "block";
        } else if (target === "theme") {
            nudge_nav.style.display = "block";
        } else {
            localStorage.setItem("need_nudge", "false");
        }
    };

    const checkNeedNudge = () => {
        const need_nudge = localStorage.getItem("need_nudge");

        if (need_nudge) {
            const nudge_theme = document.querySelector(".nudgetheme");
            const nudge_menu = document.querySelector(".nudgemenu");
            if (nudge_theme) {
                nudge_theme.style.display = "block";
            }
            if (nudge_menu) {
                nudge_menu.style.display = "block";
            }
        }
    };

    useEffect(() => {
        checkNeedNudge();
    }, []);

    return (
        <>
            <div id="nav" className="nav">
                <div
                    className="dropDownMenu"
                    onClick={() => onClickMenu("menu")}
                >
                    {open ? (
                        <i className="fa-solid fa-xmark"></i>
                    ) : (
                        <i className="fa-solid fa-ellipsis"></i>
                    )}
                </div>
                <div className="nudge nudgemenu">
                    <div
                        className="nudge-close"
                        onClick={() => oncloseNudge("menu")}
                    >
                        <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                    </div>
                    <p>Click the here to check the menu</p>
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
                            onClick={() => onClickMenu("nav")}
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
                            onClick={() => onClickMenu("nav")}
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
                            onClick={() => onClickMenu("nav")}
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
                            onClick={() => onClickMenu("nav")}
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
                            onClick={() => onClickMenu("nav")}
                            className="icon projectsBtn"
                        >
                            <span className="iconDetail">Projects</span>
                            <span>
                                <i className="fa-solid fa-bars-progress"></i>
                            </span>
                        </li>
                    </Link>
                    <div className="nudge nudgenav">
                        <div
                            className="nudge-close"
                            onClick={() => oncloseNudge("nav")}
                        >
                            <i
                                className="fa-solid fa-xmark"
                                aria-hidden="true"
                            ></i>
                        </div>
                        <p>Navigate in the website form here</p>
                    </div>
                </ul>
            </div>
            <div ref={modeRef} className="mode" id="mode">
                <button
                    className="theme"
                    aria-label="Toggle color mode"
                    title="Toggle color mode"
                    onClick={() => {
                        onClickMenu("theme");
                        switchTheme();
                    }}
                >
                    <div className="sun visible"></div>
                    <div className="moon">
                        <div className="star"></div>
                        <div className="star small"></div>
                    </div>
                </button>
                {/* <span onClick={() => switchTheme()}>
          <i className="fa-regular fa-lightbulb"></i>
        </span> */}
                <span className="modeDetail">
                    {theme === "light" ? "Go Night" : "Go Day"}
                </span>
                <div className="nudge nudgetheme">
                    <div
                        className="nudge-close"
                        onClick={() => oncloseNudge("theme")}
                    >
                        <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                    </div>
                    <p>Click the here to change the theme</p>
                </div>
            </div>
        </>
    );
}

export default Hover;
