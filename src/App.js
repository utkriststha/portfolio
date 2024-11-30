import "./App.css";
import Intro from "./component/intro/intro";
import Hover from "./component/hover/hover";
import About from "./component/about/about";
import Education from "./component/education/education";
import Skills from "./component/skills/skills";
import Projects from "./component/myProjects/projects";
import Footer from "./component/footer/footer";
import useLocalStorage from "use-local-storage";
import Clouds from "./component/cloudsBG/clouds";
import { useEffect } from 'react';

function App() {
    const [theme, setTheme] = useLocalStorage("theme", "light");
    const [timestamp, setTimestamp] = useLocalStorage("timestamp", null);

    const switchTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        const sun = document.querySelector(".sun");
        const moon = document.querySelector(".moon");
        sun.classList.toggle("visible");
        moon.classList.toggle("visible");
        setTheme(newTheme);
    };

    useEffect(() => {
        const currentTime = new Date().getTime();

        if (!timestamp) {
            setTimestamp(currentTime);
        } else {
            const timeDifference = currentTime - timestamp;

            // if (timeDifference > 24 * 60 * 60 * 1000) {
            if (timeDifference > 2 * 60 * 1000) {
                localStorage.clear();
                localStorage.setItem('need_nudge', 'true');
                setTimestamp(currentTime);
            }
        }
    }, [timestamp, setTimestamp]);

    return (
        <div className="App" data-theme={theme}>
            <Clouds />
            <Hover switchTheme={switchTheme} theme={theme} />
            <Intro />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
