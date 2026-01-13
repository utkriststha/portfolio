import "./App.css";
import Intro from "./component/intro/intro";
import Hover from "./component/hover/hover";
import About from "./component/about/about";
import Education from "./component/education/education";
// import Skills from "./component/skills/skills";
import Experience from "./component/experience/experience";
import Projects from "./component/myProjects/projects";
import Footer from "./component/footer/footer";
import useLocalStorage from "use-local-storage";
import Clouds from "./component/cloudsBG/clouds";
import { useEffect } from 'react';

function App() {
    // Theme Management
    const getOSTheme = () =>
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";

    const [theme, setTheme] = useLocalStorage("theme", getOSTheme());

    useEffect(() => {
        const sun = document.querySelector(".sun");
        const moon = document.querySelector(".moon");

        if (!sun || !moon) return;

        sun.classList.toggle("visible", theme === "light");
        moon.classList.toggle("visible", theme === "dark");

        document.documentElement.setAttribute("data-theme", theme);
        }, [theme]);

    const switchTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        };

    useEffect(() => {
        const media = window.matchMedia("(prefers-color-scheme: dark)");    

        const handler = () => {
            setTheme(media.matches ? "dark" : "light");
        };

        media.addEventListener("change", handler);
        return () => media.removeEventListener("change", handler);
    }, [setTheme]);

    // Nudge Logic
    // const [timestamp, setTimestamp] = useLocalStorage("timestamp", null);
    // useEffect(() => {
    //     const currentTime = new Date().getTime();

    //     if (!timestamp) {
    //         setTimestamp(currentTime);
    //     } else {
    //         const timeDifference = currentTime - timestamp;

    //         // if (timeDifference > 24 * 60 * 60 * 1000) {
    //         if (timeDifference > 2 * 60 * 1000) {
    //             localStorage.clear();
    //             localStorage.setItem('need_nudge', 'true');
    //             setTimestamp(currentTime);
    //         }
    //     }
    // }, [timestamp, setTimestamp]);

    // Section Header Color Change on Scroll
    useEffect(() => {
        const sections = document.querySelectorAll(
        "#about, #experience, #education, #projects"
        );

        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            const h2 = entry.target.querySelector("h2");
            if (!h2) return;

            if (entry.isIntersecting) {
                // get CSS variable by section id
                h2.style.color = `var(--${entry.target.id})`;
            } else {
                // revert to default
                h2.style.color = "var(--contentIdentifier)";
            }
            });
        },
        {
            threshold: 0.6, // section must be 60% visible
        }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="App" data-theme={theme}>
            <Clouds />
            <Hover switchTheme={switchTheme} theme={theme} />
            <Intro />
            <About />
            <Experience />
            <Education />
            {/* <Skills /> */}
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
